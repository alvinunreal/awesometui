#!/usr/bin/env node
/**
 * Build README.md and data/projects.json from the awesometui.com public catalog.
 *
 *   node scripts/build.mjs            # fetch live catalog, write data + README
 *   node scripts/build.mjs --offline  # rebuild README from data/projects.json only
 *
 * Zero dependencies. Node 18+.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://awesometui.com';
const API = `${SITE}/api/projects`;
const DATA_PATH = resolve(ROOT, 'data/projects.json');
const README_PATH = resolve(ROOT, 'README.md');
const OFFLINE = process.argv.includes('--offline');

// ---------------------------------------------------------------------------
// Taxonomy — mirrors app/lib/categories.js on awesometui.com.
// A "hub" is a top-level category that owns "spoke" sub-collections.
// Projects tagged with a spoke are listed under that spoke exactly once.
// ---------------------------------------------------------------------------
const GROUPS = [
  {
    name: 'Development',
    blurb: 'Building software in the terminal: developer tools, Git clients, editors, and TUI frameworks.',
    categories: [
      { title: 'Development', filter: 'Development', slug: 'development', desc: 'General developer tools: code generators, build utilities, project scaffolding, and programming TUIs.', spokes: [
        { title: 'API Clients', slug: 'api-clients', desc: 'HTTP clients, REST/GraphQL runners, gRPC interfaces, and API testing tools.' },
      ] },
      { title: 'Git', filter: 'Git', slug: 'git', desc: 'Git clients, repository browsers, commit tools, and version-control workflows.' },
      { title: 'Editors', filter: 'Editors', slug: 'editors', desc: 'Terminal text editors, IDE-like TUIs, and code editing tools.' },
      { title: 'Frameworks & Libraries', filter: 'Frameworks', slug: 'frameworks-libraries', desc: 'TUI libraries, widget toolkits, render engines, and building blocks for terminal interfaces.' },
    ],
  },
  {
    name: 'AI',
    blurb: 'AI agents, LLM clients, prompt workflows, and local model TUIs.',
    categories: [
      { title: 'AI', filter: 'AI', slug: 'ai', desc: 'Terminal AI assistants, LLM clients, prompt interfaces, and local AI runner dashboards.', spokes: [
        { title: 'AI Coding Agents', slug: 'ai-coding-agents', desc: 'Autonomous coding assistants, terminal pair programmers, and AI code generation agents.' },
      ] },
    ],
  },
  {
    name: 'Operate',
    blurb: 'Running systems from the terminal: DevOps, monitoring, networking, system administration, and security.',
    categories: [
      { title: 'DevOps', filter: 'DevOps', slug: 'devops', desc: 'Docker, Kubernetes, cloud, CI/CD, deployment, and SRE workflows.', spokes: [
        { title: 'Docker & Containers', slug: 'docker-containers', desc: 'Docker dashboards, container managers, Podman TUIs, and image inspection tools.' },
        { title: 'Kubernetes', slug: 'kubernetes', desc: 'Cluster management, pod inspection, log tailing, and resource view TUIs.' },
      ] },
      { title: 'Monitoring', filter: 'Monitoring', slug: 'monitoring', desc: 'System monitors, observability dashboards, metrics, and resource views.', spokes: [
        { title: 'System Monitors', slug: 'system-monitors', desc: 'Top-like resource monitors, CPU/memory graphs, and process managers.' },
        { title: 'Log Viewers', slug: 'log-viewers', desc: 'Log stream analyzers, tailers, formatters, and journald TUIs.' },
      ] },
      { title: 'Network', filter: 'Network', slug: 'network', desc: 'DNS, HTTP, VPN, packet tools, downloaders, and connectivity tools.', spokes: [
        { title: 'SSH & Remote Access', slug: 'ssh-remote-access', desc: 'SSH managers, multiplexer helpers, remote session tools, and connection launchers.' },
      ] },
      { title: 'System', filter: 'System', slug: 'system', desc: 'OS tools, process managers, hardware utilities, and admin tools.', spokes: [
        { title: 'Package Managers', slug: 'package-managers', desc: 'Package search, updater interfaces, brew/apt/pacman TUIs, and dependency managers.' },
      ] },
      { title: 'Security', filter: 'Security', slug: 'security', desc: 'Passwords, OTP, auth, secrets, scanners, privacy, and security workflows.' },
    ],
  },
  {
    name: 'Data & Files',
    blurb: 'Working with data in the terminal: file managers, database clients, and text processing tools.',
    categories: [
      { title: 'File Management', filter: 'File Management', slug: 'file-management', desc: 'File managers, disk usage tools, file search, remote transfer, and filesystem navigation.' },
      { title: 'Database Clients', filter: 'Database', slug: 'database', desc: 'SQL, NoSQL, Redis, MongoDB, database browsers, and query clients.' },
      { title: 'Text Processing', filter: 'Text Processing', slug: 'text-processing', desc: 'JSON, jq, regex, diff, CSV, grep-like tools, and structured text utilities.' },
    ],
  },
  {
    name: 'Work & Communication',
    blurb: 'Getting things done in the terminal: tasks, notes, writing, email, and chat.',
    categories: [
      { title: 'Productivity', filter: 'Productivity', slug: 'productivity', desc: 'Calendars, timers, personal workflow, and daily organization tools.', spokes: [
        { title: 'Task Managers', slug: 'task-managers', desc: 'Todo managers, Taskwarrior UIs, Kanban boards, and issue tracking TUIs.' },
        { title: 'Email', slug: 'email', desc: 'IMAP/SMTP terminal mail clients, inbox triage tools, and TUI email readers.' },
      ] },
      { title: 'Writing & Notes', filter: 'Writing', slug: 'writing', desc: 'Markdown, documentation, prose, and publishing tools.', spokes: [
        { title: 'Note-taking', slug: 'note-taking', desc: 'PKM tools, Obsidian/Zettelkasten terminal integration, quick notes, and journal TUIs.' },
      ] },
      { title: 'IRC', filter: 'IRC', slug: 'irc', desc: 'Terminal IRC clients and keyboard-native chat tools.' },
    ],
  },
  {
    name: 'Media & Play',
    blurb: 'Terminal leisure: music and media players, viewers, and games.',
    categories: [
      { title: 'Media', filter: 'Media', slug: 'media', desc: 'Video, image, reader, viewer, and media-library TUIs.', spokes: [
        { title: 'Music Players', slug: 'music-players', desc: 'Spotify, MPD, local audio players, and radio stream TUIs.' },
      ] },
      { title: 'Games', filter: 'Games', slug: 'games', desc: 'Terminal games and playful interactive TUIs.' },
    ],
  },
  {
    name: 'Utilities',
    blurb: 'Broad, useful terminal tools that do not fit anywhere else.',
    categories: [
      { title: 'Utilities', filter: 'Utilities', slug: 'utilities', desc: 'Clipboard tools, launchers, calculators, pickers, and everyday helpers.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------
async function fetchAll() {
  const projects = [];
  let offset = 0;
  for (;;) {
    const res = await fetch(`${API}?limit=100&offset=${offset}`, {
      headers: { 'user-agent': 'awesometui-readme-builder/1.0 (+https://github.com/alvinunreal/awesometui)' },
    });
    if (!res.ok) throw new Error(`API ${res.status} at offset ${offset}`);
    const body = await res.json();
    projects.push(...body.projects);
    if (!body.pagination?.hasMore) break;
    offset += 100;
  }
  return projects;
}

const KEEP = [
  'slug', 'name', 'full_name', 'description', 'summary', 'homepage', 'language',
  'stars', 'license', 'category', 'spoke_slugs', 'has_detail_page',
  'latest_release_tag', 'latest_release_published_at', 'github_created_at',
];
const slim = (p) => Object.fromEntries(KEEP.map((k) => [k, p[k] ?? null]));

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------
const fmtStars = (n) => {
  if (n == null) return null;
  if (n >= 10000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
};

function cleanDescription(p) {
  let d = (p.description || p.summary || '').replace(/\s+/g, ' ').trim();
  // Strip markdown that breaks list rendering; keep emoji — they belong to the project.
  d = d.replace(/[`*_|]/g, '').replace(/<[^>]+>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  d = d.replace(/^[-–—:\s]+/, '').replace(/[\s,;:@~-]+$/, '');
  if (d.length > 200) {
    const cut = d.slice(0, 200);
    const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; '));
    d = stop > 80 ? cut.slice(0, stop + 1) : cut.slice(0, cut.lastIndexOf(' ')) + '…';
  }
  if (d && !/[.!?…)]$/.test(d)) d += '.';
  return d ? d[0].toUpperCase() + d.slice(1) : '';
}

function entry(p) {
  const url = `https://github.com/${p.full_name}`;
  const meta = [];
  if (p.language) meta.push(`\`${p.language}\``);
  const s = fmtStars(p.stars);
  if (s) meta.push(`★ ${s}`);
  if (p.has_detail_page) meta.push(`[deep dive](${SITE}/${p.slug})`);
  const tail = meta.length ? ` <sub>${meta.join(' · ')}</sub>` : '';
  return `- [${p.name}](${url}) - ${cleanDescription(p)}${tail}`;
}

const anchor = (t) => t.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
const byStars = (a, b) => (b.stars ?? 0) - (a.stars ?? 0) || a.name.localeCompare(b.name);

// ---------------------------------------------------------------------------
// Placement — every project appears exactly once.
// ---------------------------------------------------------------------------
function place(projects) {
  const spokeIndex = new Map(); // spoke slug -> bucket
  const catIndex = new Map(); // category filter -> bucket
  for (const g of GROUPS) for (const c of g.categories) {
    c.items = []; catIndex.set(c.filter, c);
    for (const s of c.spokes ?? []) { s.items = []; spokeIndex.set(s.slug, s); }
  }
  const unplaced = [];
  for (const p of projects) {
    const spoke = (p.spoke_slugs ?? []).map((s) => spokeIndex.get(s)).find(Boolean);
    if (spoke) { spoke.items.push(p); continue; }
    const cat = catIndex.get(p.category);
    if (cat) cat.items.push(p); else unplaced.push(p);
  }
  if (unplaced.length) catIndex.get('Utilities').items.push(...unplaced);
  for (const g of GROUPS) for (const c of g.categories) {
    c.items.sort(byStars);
    for (const s of c.spokes ?? []) s.items.sort(byStars);
    c.total = c.items.length + (c.spokes ?? []).reduce((n, s) => n + s.items.length, 0);
  }
}

// ---------------------------------------------------------------------------
// README
// ---------------------------------------------------------------------------
function buildReadme(projects, generatedAt) {
  place(projects);
  const total = projects.length;
  const deepDives = projects.filter((p) => p.has_detail_page).length;
  const langs = new Map();
  for (const p of projects) if (p.language) langs.set(p.language, (langs.get(p.language) ?? 0) + 1);
  const topLangs = [...langs].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const date = generatedAt.slice(0, 10);
  const spotlight = [...projects].filter((p) => p.has_detail_page).sort(byStars).slice(0, 12);
  const fresh = [...projects]
    .filter((p) => p.github_created_at)
    .sort((a, b) => b.github_created_at.localeCompare(a.github_created_at))
    .slice(0, 10);

  const L = [];
  const out = (s = '') => L.push(s);

  out('<div align="center">');
  out();
  out('<a href="https://awesometui.com"><img src="assets/logo.png" alt="Awesome TUI" width="120" /></a>');
  out();
  out('# Awesome TUI');
  out();
  out('**Terminal software with soul.** A curated catalog of terminal user interfaces — fast, focused, keyboard-native tools made by people who clearly use them.');
  out();
  out('[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)');
  out(`[![Projects](https://img.shields.io/badge/projects-${total.toLocaleString('en-US').replace(',', '%2C')}-b8860b?style=flat-square)](#contents)`);
  out(`[![Categories](https://img.shields.io/badge/categories-${GROUPS.reduce((n, g) => n + g.categories.length, 0)}-3b7dd8?style=flat-square)](#contents)`);
  out(`[![Deep dives](https://img.shields.io/badge/deep_dives-${deepDives}-8a4fff?style=flat-square)](https://awesometui.com)`);
  out(`[![Updated](https://img.shields.io/badge/synced-${date}-2ea043?style=flat-square)](#how-this-list-is-built)`);
  out('[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square)](LICENSE)');
  out();
  out('**[awesometui.com](https://awesometui.com)** · **[Submit a tool](https://awesometui.com/contribute)** · **[Newsletter](https://awesometui.com/newsletter)** · **[RSS](https://awesometui.com/rss.xml)** · **[Contributing](#contributing)**');
  out();
  out('</div>');
  out();
  out('---');
  out();
  out('## Why this list');
  out();
  out('A good TUI is fast, focused, keyboard-native, useful, and personal. It respects attention and makes serious work feel close at hand. Panes, logs, shortcuts, fuzzy search, colors, progress bars — the quiet joy of a tool made by someone who uses it every day.');
  out();
  out(`This README is generated from the live catalog at [awesometui.com](https://awesometui.com): **${total.toLocaleString('en-US')} published projects** across **${GROUPS.reduce((n, g) => n + g.categories.length, 0)} categories** and **${GROUPS.reduce((n, g) => n + g.categories.reduce((m, c) => m + (c.spokes?.length ?? 0), 0), 0)} focused sub-collections**. Every entry is a real GitHub repository that was imported, classified, and reviewed for being an actual terminal UI (not just a CLI). Star counts and languages are synced from GitHub; ${deepDives} projects also have a full **deep dive** page with install options, keybindings, and screenshots.`);
  out();
  out('Within each section, projects are ordered by GitHub stars — stars are context, not a verdict. Scroll past the famous ones; the small tools are often the most interesting.');
  out();
  out('---');
  out();
  out('## Contents');
  out();
  for (const g of GROUPS) {
    const gTotal = g.categories.reduce((n, c) => n + c.total, 0);
    out(`- **${g.name}** <sub>(${gTotal})</sub>`);
    for (const c of g.categories) {
      const spokes = (c.spokes ?? []).map((s) => `[${s.title}](#${anchor(s.title)})`).join(' · ');
      out(`  - [${c.title}](#${anchor(c.title)}) <sub>(${c.total})</sub>${spokes ? ` — ${spokes}` : ''}`);
    }
  }
  out('- [Spotlight](#spotlight)');
  out('- [Recently created](#recently-created)');
  out('- [By the numbers](#by-the-numbers)');
  out('- [How this list is built](#how-this-list-is-built)');
  out('- [Contributing](#contributing)');
  out();
  out('---');
  out();

  for (const g of GROUPS) {
    out(`<!-- ${g.name} -->`);
    for (const c of g.categories) {
      out(`## ${c.title}`);
      out();
      out(`> ${c.desc} <sub>[browse on awesometui.com →](${SITE}/${c.slug})</sub>`);
      out();
      for (const s of c.spokes ?? []) {
        out(`### ${s.title}`);
        out();
        out(`_${s.desc}_`);
        out();
        for (const p of s.items) out(entry(p));
        out();
      }
      if (c.spokes?.length && c.items.length) {
        out(`### More ${c.title}`);
        out();
      }
      for (const p of c.items) out(entry(p));
      out();
      out('<p align="right"><a href="#contents">↑ back to contents</a></p>');
      out();
    }
  }

  out('---');
  out();
  out('## Spotlight');
  out();
  out(`Projects with a full deep-dive page on awesometui.com — overview, source-backed install options, keybindings, and screenshots. All ${deepDives} are marked **deep dive** throughout this list; here are the most-starred.`);
  out();
  out('| Project | What it is | Language | Stars | |');
  out('|---|---|---|---|---|');
  for (const p of spotlight) {
    out(`| [${p.name}](https://github.com/${p.full_name}) | ${cleanDescription(p).replace(/\|/g, '/')} | ${p.language ?? ''} | ${fmtStars(p.stars)} | [deep dive](${SITE}/${p.slug}) |`);
  }
  out();
  out('## Recently created');
  out();
  out('The newest repositories in the catalog, by GitHub creation date. Young projects, rough edges, real ideas.');
  out();
  for (const p of fresh) out(entry(p));
  out();
  out('## By the numbers');
  out();
  out('| Language | Projects | Share |');
  out('|---|---|---|');
  for (const [lang, n] of topLangs) {
    const pct = (n / total) * 100;
    const bar = '█'.repeat(Math.max(1, Math.round(pct / 2.5)));
    out(`| ${lang} | ${n} | \`${bar}\` ${pct.toFixed(1)}% |`);
  }
  out();
  out('| Group | Projects |');
  out('|---|---|');
  for (const g of GROUPS) out(`| ${g.name} | ${g.categories.reduce((n, c) => n + c.total, 0)} |`);
  out(`| **Total** | **${total.toLocaleString('en-US')}** |`);
  out();
  out('## How this list is built');
  out();
  out('This repository is the read-only, Git-friendly mirror of the [awesometui.com](https://awesometui.com) catalog.');
  out();
  out('- `scripts/build.mjs` pulls every published project from the public API (`/api/projects`), writes a slim snapshot to `data/projects.json`, and renders this README. No dependencies; Node 18+.');
  out('- Placement mirrors the site taxonomy: a project tagged with a focused sub-collection (e.g. *Kubernetes*, *Music Players*) is listed there; otherwise it sits under its primary category. Each project appears once.');
  out('- Descriptions come from the GitHub repository (falling back to the catalog summary), trimmed to one line.');
  out('- A GitHub Action re-syncs weekly. Star counts drift between syncs; the badge at the top shows the last sync date.');
  out();
  out('```sh');
  out('node scripts/build.mjs            # fetch live catalog, rebuild data + README');
  out('node scripts/build.mjs --offline  # rebuild README from data/projects.json');
  out('```');
  out();
  out('## Contributing');
  out();
  out('The list is generated, so edits to `README.md` by hand will be overwritten. Instead:');
  out();
  out('- **Add a TUI** — submit it at [awesometui.com/contribute](https://awesometui.com/contribute). It gets imported from GitHub, classified, and published to the catalog, and lands here on the next sync.');
  out('- **Fix a category, description, or dead project** — [open an issue](https://github.com/alvinunreal/awesometui/issues/new/choose) with the repo and what is wrong.');
  out('- **Maintainers** — sign in with GitHub at [awesometui.com/my-projects](https://awesometui.com/my-projects) to claim your project, correct its metadata, and add screenshots.');
  out('- **Improve the generator** — pull requests to `scripts/build.mjs`, the workflow, or this repo\'s docs are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).');
  out();
  out('What belongs: real terminal user interfaces — interactive, keyboard-driven, drawn in the terminal. Plain CLIs, GUI apps, and web dashboards are out of scope. Libraries and frameworks for building TUIs are in.');
  out();
  out('---');
  out();
  out('<div align="center">');
  out();
  out(`<sub>Synced ${generatedAt.replace('T', ' ').slice(0, 16)} UTC from <a href="https://awesometui.com">awesometui.com</a> · ${total.toLocaleString('en-US')} projects · Made for people who love the terminal.</sub>`);
  out();
  out('<sub>To the extent possible under law, this list is released under <a href="LICENSE">CC0 1.0</a>. Project names and descriptions belong to their authors.</sub>');
  out();
  out('</div>');
  return L.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
async function main() {
  let projects;
  let generatedAt;
  if (OFFLINE) {
    const snap = JSON.parse(readFileSync(DATA_PATH, 'utf8'));
    projects = snap.projects;
    generatedAt = snap.generated_at;
    console.log(`offline: ${projects.length} projects from data/projects.json (${generatedAt})`);
  } else {
    const raw = await fetchAll();
    generatedAt = new Date().toISOString();
    projects = raw.map(slim);
    mkdirSync(dirname(DATA_PATH), { recursive: true });
    writeFileSync(DATA_PATH, JSON.stringify({ source: API, generated_at: generatedAt, count: projects.length, projects }, null, 1) + '\n');
    console.log(`fetched ${projects.length} projects → data/projects.json`);
  }
  writeFileSync(README_PATH, buildReadme(projects, generatedAt));
  console.log('wrote README.md');
}

main().catch((err) => { console.error(err); process.exit(1); });
