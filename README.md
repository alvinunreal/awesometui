<div align="center">

<a href="https://awesometui.com"><img src="assets/logo.png" alt="Awesome TUI" width="120" /></a>

# Awesome TUI

**Terminal software with soul.** A curated catalog of terminal user interfaces — fast, focused, keyboard-native tools made by people who clearly use them.

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Projects](https://img.shields.io/badge/projects-1%2C321-b8860b?style=flat-square)](#contents)
[![Categories](https://img.shields.io/badge/categories-19-3b7dd8?style=flat-square)](#contents)
[![Deep dives](https://img.shields.io/badge/deep_dives-87-8a4fff?style=flat-square)](https://awesometui.com)
[![Updated](https://img.shields.io/badge/synced-2026-08-30-2ea043?style=flat-square)](#how-this-list-is-built)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square)](LICENSE)

**[awesometui.com](https://awesometui.com)** · **[Submit a tool](https://awesometui.com/contribute)** · **[Newsletter](https://awesometui.com/newsletter)** · **[RSS](https://awesometui.com/rss.xml)** · **[Contributing](#contributing)**

</div>

---

## Why this list

A good TUI is fast, focused, keyboard-native, useful, and personal. It respects attention and makes serious work feel close at hand. Panes, logs, shortcuts, fuzzy search, colors, progress bars — the quiet joy of a tool made by someone who uses it every day.

This README is generated from the live catalog at [awesometui.com](https://awesometui.com): **1,321 published projects** across **19 categories** and **12 focused sub-collections**. Every entry is a real GitHub repository that was imported, classified, and reviewed for being an actual terminal UI (not just a CLI). Star counts and languages are synced from GitHub; 87 projects also have a full **deep dive** page with install options, keybindings, and screenshots.

Within each section, projects are ordered by GitHub stars — stars are context, not a verdict. Scroll past the famous ones; the small tools are often the most interesting.

---

## Contents

- **Development** <sub>(386)</sub>
  - [Development](#development) <sub>(224)</sub> — [API Clients](#api-clients)
  - [Git](#git) <sub>(47)</sub>
  - [Editors](#editors) <sub>(56)</sub>
  - [Frameworks & Libraries](#frameworks--libraries) <sub>(59)</sub>
- **AI** <sub>(49)</sub>
  - [AI](#ai) <sub>(49)</sub> — [AI Coding Agents](#ai-coding-agents)
- **Operate** <sub>(332)</sub>
  - [DevOps](#devops) <sub>(76)</sub> — [Docker & Containers](#docker--containers) · [Kubernetes](#kubernetes)
  - [Monitoring](#monitoring) <sub>(72)</sub> — [System Monitors](#system-monitors) · [Log Viewers](#log-viewers)
  - [Network](#network) <sub>(75)</sub> — [SSH & Remote Access](#ssh--remote-access)
  - [System](#system) <sub>(68)</sub> — [Package Managers](#package-managers)
  - [Security](#security) <sub>(41)</sub>
- **Data & Files** <sub>(171)</sub>
  - [File Management](#file-management) <sub>(86)</sub>
  - [Database Clients](#database-clients) <sub>(27)</sub>
  - [Text Processing](#text-processing) <sub>(58)</sub>
- **Work & Communication** <sub>(139)</sub>
  - [Productivity](#productivity) <sub>(104)</sub> — [Task Managers](#task-managers) · [Email](#email)
  - [Writing & Notes](#writing--notes) <sub>(22)</sub> — [Note-taking](#note-taking)
  - [IRC](#irc) <sub>(13)</sub>
- **Media & Play** <sub>(118)</sub>
  - [Media](#media) <sub>(64)</sub> — [Music Players](#music-players)
  - [Games](#games) <sub>(54)</sub>
- **Utilities** <sub>(126)</sub>
  - [Utilities](#utilities) <sub>(126)</sub>
- [Spotlight](#spotlight)
- [Recently created](#recently-created)
- [By the numbers](#by-the-numbers)
- [How this list is built](#how-this-list-is-built)
- [Contributing](#contributing)

---

<!-- Development -->
## Development

> General developer tools: code generators, build utilities, project scaffolding, and programming TUIs. <sub>[browse on awesometui.com →](https://awesometui.com/development)</sub>

### API Clients

_HTTP clients, REST/GraphQL runners, gRPC interfaces, and API testing tools._

- [cli](https://github.com/cli/cli) - GitHub’s official command line tool. <sub>`Go` · ★ 46k</sub>
- [cli](https://github.com/googleworkspace/cli) - Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills. <sub>`Rust` · ★ 31k</sub>
- [hurl](https://github.com/Orange-OpenSource/hurl) - Hurl, run and test HTTP requests with plain text. <sub>`Rust` · ★ 19k</sub>
- [xh](https://github.com/ducaale/xh) - Friendly and fast tool for sending HTTP requests. <sub>`Rust` · ★ 8k</sub>
- [curlie](https://github.com/rs/curlie) - The power of curl, the ease of use of httpie. <sub>`Go` · ★ 3.7k</sub>
- [ATAC](https://github.com/Julien-cpsn/ATAC) - A simple API client (postman like) in your terminal. <sub>`Rust` · ★ 3.7k</sub>
- [asn](https://github.com/nitefood/asn) - ASN / RPKI validity / BGP stats / IPv4v6 / Prefix / URL / ASPath / Organization / IP reputation / IP geolocation / IP fingerprinting / Network recon / lookup API server / Web traceroute server. <sub>`Shell` · ★ 1.9k</sub>
- [resterm](https://github.com/unkn0wn-root/resterm) - Terminal API client for HTTP, GraphQL and gRPC. Plain .http files you can diff and version, with workflows, mocks, profiling, tracing, OpenAPI import, SSH tunnels, Kubernetes port-forwards,… <sub>`Go` · ★ 1.9k</sub>
- [openapi-tui](https://github.com/zaghaghi/openapi-tui) - Terminal UI to list, browse and run APIs defined with openapi spec. <sub>`Rust` · ★ 1.3k</sub>
- [resto](https://github.com/abdfnx/resto) - 🔗 Send pretty HTTP & API requests with TUI. <sub>`Go` · ★ 286</sub>
- [apisnip](https://github.com/Tuurlijk/apisnip) - A terminal user interface (TUI) tool for trimming OpenAPI specifications down to size. <sub>`Rust` · ★ 84</sub>

### More Development

- [tldr](https://github.com/tldr-pages/tldr) - Collaborative cheatsheets for console commands 📚. <sub>`Markdown` · ★ 64k</sub>
- [shellcheck](https://github.com/koalaman/shellcheck) - ShellCheck, a static analysis tool for shell scripts. <sub>`Haskell` · ★ 40k</sub>
- [zellij](https://github.com/zellij-org/zellij) - A terminal workspace with batteries included. <sub>`Rust` · ★ 35k</sub>
- [mise](https://github.com/jdx/mise) - Dev tools, env vars, task runner. <sub>`Rust` · ★ 33k</sub>
- [atuin](https://github.com/atuinsh/atuin) - ✨ Making your shell magical. <sub>`Rust` · ★ 31k</sub>
- [hyperfine](https://github.com/sharkdp/hyperfine) - A command-line benchmarking tool. <sub>`Rust` · ★ 29k</sub>
- [fnm](https://github.com/Schniz/fnm) - 🚀 Fast and simple Node.js version manager, built in Rust. <sub>`Rust` · ★ 27k</sub>
- [gum](https://github.com/charmbracelet/gum) - A tool for glamorous shell scripts 🎀. <sub>`Go` · ★ 24k</sub>
- [cloc](https://github.com/AlDanial/cloc) - Cloc counts blank lines, comment lines, and physical lines of source code in many programming languages. <sub>`Perl` · ★ 23k</sub>
- [navi](https://github.com/denisidoro/navi) - An interactive cheatsheet tool for the command-line. <sub>`Rust` · ★ 17k</sub>
- [ast-grep](https://github.com/ast-grep/ast-grep) - ⚡A CLI tool for code structural search, lint and rewriting. Written in Rust. <sub>`Rust` · ★ 16k</sub>
- [tokei](https://github.com/XAMPPRocky/tokei) - Count your code, quickly. <sub>`Rust` · ★ 15k</sub>
- [onefetch](https://github.com/o2sh/onefetch) - Command-line Git information tool. <sub>`Rust` · ★ 12k</sub>
- [pwndbg](https://github.com/pwndbg/pwndbg) - Exploit Development and Reverse Engineering with GDB & LLDB Made Easy. <sub>`Python` · ★ 11k</sub>
- [wuzz](https://github.com/asciimoo/wuzz) - Interactive cli tool for HTTP inspection. <sub>`Go` · ★ 11k</sub>
- [hunk](https://github.com/modem-dev/hunk) - Review-first terminal diff viewer for agentic coders. <sub>`TypeScript` · ★ 8.9k · [deep dive](https://awesometui.com/hunk)</sub>
- [presenterm](https://github.com/mfontanini/presenterm) - A markdown terminal slideshow tool. <sub>`Rust` · ★ 8.8k</sub>
- [scc](https://github.com/boyter/scc) - Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go. <sub>`Go` · ★ 8.7k</sub>
- [blink](https://github.com/jart/blink) - Tiniest x86-64-linux emulator. <sub>`C` · ★ 7.6k</sub>
- [httpstat](https://github.com/reorx/httpstat) - Curl statistics made simple. <sub>`Python` · ★ 6.2k</sub>
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - 🎨 Beautiful images of your code — from right inside your terminal. <sub>`TypeScript` · ★ 6k</sub>
- [jira-cli](https://github.com/ankitpokhrel/jira-cli) - 🔥 Feature-rich interactive Jira command line. <sub>`Go` · ★ 5.9k</sub>
- [pet](https://github.com/knqyf263/pet) - Simple command-line snippet manager. <sub>`Go` · ★ 5.3k</sub>
- [httplab](https://github.com/qustavo/httplab) - The interactive web server. <sub>`Go` · ★ 4.1k</sub>
- [ali](https://github.com/nakabonne/ali) - Generate HTTP load and plot the results in real-time. <sub>`Go` · ★ 3.9k</sub>
- [ghq](https://github.com/x-motemen/ghq) - Remote repository management made easy. <sub>`Go` · ★ 3.8k</sub>
- [silicon](https://github.com/Aloxaf/silicon) - Create beautiful image of your source code. <sub>`Rust` · ★ 3.6k</sub>
- [bacon](https://github.com/Canop/bacon) - Background code checker. <sub>`Rust` · ★ 3.4k</sub>
- [psmux](https://github.com/psmux/psmux) - Tmux on Windows Powershell - tmux for PowerShell, Windows Terminal, cmd.exe. Includes psmux, pmux, and tmux commands. This is native High-Performance Tmux designed for Windows in Rust 🦀. <sub>`PowerShell` · ★ 3.4k</sub>
- [pudb](https://github.com/inducer/pudb) - Full-screen console debugger for Python. <sub>`Python` · ★ 3.2k</sub>
- [tio](https://github.com/tio/tio) - A serial device I/O tool. <sub>`C` · ★ 3.1k</sub>
- [hishtory](https://github.com/ddworken/hishtory) - Your shell history: synced, queryable, and in context. <sub>`Go` · ★ 3.1k</sub>
- [nap](https://github.com/maaslalani/nap) - Code snippets in your terminal. <sub>`Go` · ★ 2.2k</sub>
- [eget](https://github.com/zyedidia/eget) - Easily install prebuilt binaries from GitHub. <sub>`Go` · ★ 2.1k</sub>
- [eg](https://github.com/srsudar/eg) - Useful examples at the command line. <sub>`Python` · ★ 2k</sub>
- [tldx](https://github.com/brandonyoungdev/tldx) - Bulk domain availability checking via RDAP, DNS, and WHOIS, with prefix/suffix permutations, regex patterns, MCP, and multiple output formats. <sub>`Go` · ★ 1.9k</sub>
- [cgdb](https://github.com/cgdb/cgdb) - Console front-end to the GNU debugger. <sub>`C` · ★ 1.8k</sub>
- [gomuks](https://github.com/gomuks/gomuks) - A Matrix client written in Go. <sub>`Go` · ★ 1.7k</sub>
- [nnd](https://github.com/al13n321/nnd) - A debugger for Linux. <sub>`Rust` · ★ 1.7k</sub>
- [jiratui](https://github.com/whyisdifficult/jiratui) - A Textual User Interface for interacting with Atlassian Jira from your shell. <sub>`Python` · ★ 1.7k</sub>
- [so](https://github.com/samtay/so) - A terminal interface for Stack Overflow. <sub>`Rust` · ★ 1.4k</sub>
- [wut](https://github.com/shobrook/wut) - A terminal assistant for the hopelessly confused. <sub>`Python` · ★ 1.4k</sub>
- [BugStalker](https://github.com/godzie44/BugStalker) - Rust debugger for Linux x86-64. <sub>`Rust` · ★ 1.4k</sub>
- [ghgrab](https://github.com/abhixdd/ghgrab) - A simple, pretty terminal tool that lets you browse and download files from GitHub, GitLab, Codeberg, Gitea, and Forgejo without leaving your CLI. <sub>`Rust` · ★ 1.3k</sub>
- [snips.sh](https://github.com/robherley/snips.sh) - ✂️ passwordless, anonymous SSH-powered pastebin with a human-friendly TUI and web UI. <sub>`Go` · ★ 1.3k</sub>
- [concord](https://github.com/chojs23/concord) - A feature-rich TUI client for Discord. <sub>`Rust` · ★ 1.3k · [deep dive](https://awesometui.com/concord)</sub>
- [hostctl](https://github.com/guumaster/hostctl) - Your dev tool to manage /etc/hosts like a pro! <sub>`Go` · ★ 1.2k</sub>
- [slumber](https://github.com/LucasPickering/slumber) - Terminal-based HTTP/REST client. <sub>`Rust` · ★ 1.2k</sub>
- [desed](https://github.com/SoptikHa2/desed) - Debugger for Sed: demystify and debug your sed scripts, from comfort of your terminal. <sub>`Rust` · ★ 1.2k</sub>
- [lazyjj](https://github.com/Cretezy/lazyjj) - TUI for Jujutsu/jj. <sub>`Rust` · ★ 1.2k</sub>
- [flameshow](https://github.com/laixintao/flameshow) - A terminal Flamegraph viewer. <sub>`Python` · ★ 1.1k</sub>
- [flyline](https://github.com/HalFrgrd/flyline) - Flyline: a Bash plugin to replace readline for a modern line editing experience: syntax highlighting, agent integration, rich prompts, tooltips, fuzzy history search, and more! <sub>`Rust` · ★ 1.1k</sub>
- [simutil](https://github.com/dungngminh/simutil) - It's not just a cross-platform TUI app that quickly opens Android & iOS emulators/simulators. <sub>`Dart` · ★ 1.1k</sub>
- [sidecar](https://github.com/marcus/sidecar) - Use sidecar next to CLI agents for diffs, file trees, conversation history, and task management with td. <sub>`Go` · ★ 1k</sub>
- [tlrc](https://github.com/tldr-pages/tlrc) - Official tldr client written in Rust. <sub>`Rust` · ★ 990</sub>
- [oq](https://github.com/plutov/oq) - Terminal OpenAPI Spec viewer. <sub>`Go` · ★ 973</sub>
- [ggh](https://github.com/byawitz/ggh) - Recall your SSH sessions (also search your SSH config file) <sub>`Go` · ★ 949</sub>
- [httpyac](https://github.com/AnWeber/httpyac) - Command Line Interface for .http and .rest files. Connect with http, gRPC, WebSocket and MQTT. <sub>`TypeScript` · ★ 868</sub>
- [has](https://github.com/kdabir/has) - ✅ checks presence of various command line tools and their versions on the path. <sub>`Shell` · ★ 818</sub>
- [halp](https://github.com/orhun/halp) - A CLI tool to get help with CLI tools 🐙. <sub>`Rust` · ★ 764</sub>
- [mani](https://github.com/alajmo/mani) - Robot: CLI tool to help you manage repositories. <sub>`Go` · ★ 755</sub>
- [sake](https://github.com/alajmo/sake) - Robot: task runner for local and remote hosts. <sub>`Go` · ★ 751</sub>
- [hoard](https://github.com/Hyde46/hoard) - Cli command organizer written in rust. <sub>`Rust` · ★ 659</sub>
- [intentrace](https://github.com/sectordistrict/intentrace) - Intentrace is strace with intent, it goes all the way for you instead of half the way. intentrace is currently in beta. <sub>`Rust` · ★ 652</sub>
- [flamelens](https://github.com/YS-L/flamelens) - Flamegraph viewer in the terminal. <sub>`Rust` · ★ 638</sub>
- [personal-os-setup](https://github.com/AmineDjeghri/personal-os-setup) - An app and guide to easily configure Windows, Linux, MacOS, Google TV, Stremio, Home Assistant and more (including WSL2, GPU drivers & development tools). Improve your UX & productivity. <sub>`Python` · ★ 605</sub>
- [nemu](https://github.com/nemuTUI/nemu) - Ncurses UI for QEMU. <sub>`C` · ★ 600</sub>
- [devtui](https://github.com/skatkov/devtui) - A Swiss-army app for developers. <sub>`Go` · ★ 553 · [deep dive](https://awesometui.com/devtui)</sub>
- [scli](https://github.com/isamert/scli) - A simple terminal user interface for signal messenger (using signal-cli) <sub>`Python` · ★ 538</sub>
- [octocov](https://github.com/k1LoW/octocov) - Octocov is a toolkit for collecting code metrics (code coverage, code to test ratio, test execution time and your own custom metrics). <sub>`Go` · ★ 506</sub>
- [turm](https://github.com/karimknaebel/turm) - TUI for the Slurm Workload Manager. <sub>`Rust` · ★ 504</sub>
- [feluda](https://github.com/anistark/feluda) - Detect license usage restrictions in your project! <sub>`Rust` · ★ 469</sub>
- [emu2](https://github.com/dmsc/emu2) - Simple x86 and DOS emulator for the Linux terminal. <sub>`C` · ★ 464</sub>
- [koji](https://github.com/cococonscious/koji) - 🦊 An interactive CLI for creating conventional commits. <sub>`Rust` · ★ 463</sub>
- [ugdb](https://github.com/ftilde/ugdb) - An alternative TUI for gdb. <sub>`Rust` · ★ 460</sub>
- [vscli](https://github.com/michidk/vscli) - A CLI/TUI that simplifies launching VSCode projects, with a focus on dev containers. <sub>`Rust` · ★ 459</sub>
- [ktea](https://github.com/jonas-grgt/ktea) - Kafka TUI client. <sub>`Go` · ★ 441</sub>
- [meteor](https://github.com/stefanlogue/meteor) - A highly configurable CLI tool for writing conventional commits. <sub>`Go` · ★ 437</sub>
- [tracexec](https://github.com/kxxt/tracexec) - Tracer for execve{,at} and pre-exec behavior, launcher for debuggers. <sub>`Rust` · ★ 437</sub>
- [gophertube](https://github.com/KrishnaSSH/gophertube) - A modern terminal user interface for searching and watching YouTube videos using mpv and chafa. <sub>`Go` · ★ 425</sub>
- [gfold](https://github.com/nickgerace/gfold) - CLI tool to help keep track of your Git repositories, written in Rust. <sub>`Rust` · ★ 400</sub>
- [resend-cli](https://github.com/resend/resend-cli) - The official CLI for Resend. <sub>`TypeScript` · ★ 392</sub>
- [gocovsh](https://github.com/orlangure/gocovsh) - Go Coverage in your terminal: a tool for exploring Go Coverage reports from the command line 💻. <sub>`Go` · ★ 388</sub>
- [agent-manager](https://github.com/YoanWai/agent-manager) - The fastest workflow for every AI coding agent. Live status, quick prompts, worktrees, and diff review from one tmux TUI. <sub>`Go` · ★ 372 · [deep dive](https://awesometui.com/agent-manager)</sub>
- [lazyjira](https://github.com/textfuel/lazyjira) - Lazygit but for Jira. <sub>`Go` · ★ 357</sub>
- [dra](https://github.com/devmatteini/dra) - A command line tool to download release assets from GitHub. <sub>`Rust` · ★ 354</sub>
- [pipeform](https://github.com/magodo/pipeform) - Terraform runtime TUI 🫧. <sub>`Go` · ★ 354</sub>
- [chiko](https://github.com/felangga/chiko) - The ultimate beauty gRPC Client on your Terminal! <sub>`Go` · ★ 353</sub>
- [mcpsnoop](https://github.com/kerlenton/mcpsnoop) - Wireshark for MCP. A transparent proxy that shows every real tool call between your AI client and your MCP servers, live in your terminal. <sub>`Go` · ★ 346</sub>
- [oyo](https://github.com/ahkohd/oyo) - Your not yet complete terminal code review tool. <sub>`Rust` · ★ 345</sub>
- [yozefu](https://github.com/MAIF/yozefu) - An interactive terminal user interface (TUI) application for exploring data of a kafka cluster. <sub>`Rust` · ★ 344</sub>
- [epiq](https://github.com/ljtn/epiq) - Distributed, code-native issue tracker - audit workflows via time-travel. <sub>`TypeScript` · ★ 340</sub>
- [HexPatch](https://github.com/Etto48/HexPatch) - HexPatch: a binary patcher and editor written in Rust with terminal user interface (TUI). <sub>`Rust` · ★ 333</sub>
- [hnterm](https://github.com/ggerganov/hnterm) - Pagewithcurl: Hacker News in the terminal. <sub>`C++` · ★ 320</sub>
- [gaze](https://github.com/wtetsu/gaze) - 👁️Executes commands for you. <sub>`Go` · ★ 315</sub>
- [noodle](https://github.com/wilfredinni/noodle) - A delicious REST client for your terminal. <sub>`TypeScript` · ★ 293 · [deep dive](https://awesometui.com/noodle)</sub>
- [loggo](https://github.com/aurc/loggo) - A powerful terminal app for structured log streaming. <sub>`Go` · ★ 290</sub>
- [try-rs](https://github.com/tassiovirginio/try-rs) - A blazing fast, Rust-based workspace manager for your temporary experiments. <sub>`Rust` · ★ 285</sub>
- [pproftui](https://github.com/Oloruntobi1/pproftui) - A terminal-based diagnostic tool for Go pprof data. <sub>`Go` · ★ 280</sub>
- [strace-tui](https://github.com/Rodrigodd/strace-tui) - A terminal user interface (TUI) for visualizing and exploring strace output. <sub>`Rust` · ★ 280</sub>
- [dotbins](https://github.com/basnijholt/dotbins) - Keep updated binaries in your dotfiles 🧰. <sub>`Python` · ★ 271</sub>
- [pysentation](https://github.com/mimseyedi/pysentation) - Pysentation is a CLI for displaying Python presentations. <sub>`Python` · ★ 262</sub>
- [lazyskills](https://github.com/alvinunreal/lazyskills) - Mission control for agent skills. <sub>`Go` · ★ 243 · [deep dive](https://awesometui.com/lazyskills)</sub>
- [typtea](https://github.com/ashish0kumar/typtea) - Minimal terminal typing tester. <sub>`Go` · ★ 242</sub>
- [roumon](https://github.com/becheran/roumon) - Universal goroutine monitor using pprof and termui. <sub>`Go` · ★ 237</sub>
- [envx](https://github.com/mikeleppane/envx) - A powerful and secure environment variable manager for developers, featuring an intuitive Terminal User Interface (TUI) and comprehensive command-line interface. <sub>`Rust` · ★ 229</sub>
- [Livediff](https://github.com/SoCkEt7/Livediff) - ⚡ Livediff: Watch file diffs live in your terminal. Minimalist Rust TUI for instant feedback loops. <sub>`Rust` · ★ 228</sub>
- [splashboard](https://github.com/unhappychoice/splashboard) - A customizable terminal splash screen with plugin-based data sources. <sub>`Rust` · ★ 214</sub>
- [lazymake](https://github.com/rshelekhov/lazymake) - Modern TUI for Makefiles with interactive target selection, dependency visualization, and command safety analysis. <sub>`Go` · ★ 211</sub>
- [glab-tui](https://github.com/rcieri/glab-tui) - A terminal user interface (TUI) for GitLab/GitHub, built on top of glab/gh. Browse issues, merge requests, pipelines, runners, and releases without leaving your terminal. Built for personal use. <sub>`Rust` · ★ 209</sub>
- [invidtui](https://github.com/darkhz/invidtui) - A TUI based Invidious client. <sub>`Go` · ★ 205</sub>
- [hapless](https://github.com/bmwant/hapless) - Run and manage background processes. <sub>`Python` · ★ 203</sub>
- [tlock](https://github.com/eklairs/tlock) - Two-Factor Authentication Tokens Manager in Terminal. <sub>`Go` · ★ 201</sub>
- [gcli](https://github.com/herrhotzenplotz/gcli) - Portable Git(hublabtea)/Forgejo/Bugzilla CLI tool, Submit patches here: https://lists.sr.ht/~herrhotzenplotz/gcli-devel. <sub>`C` · ★ 190</sub>
- [wireman](https://github.com/preiter93/wireman) - A gRPC client for the terminal. <sub>`Rust` · ★ 179</sub>
- [ComChan](https://github.com/Vaishnav-Sabari-Girish/ComChan) - A Blazingly Fast Minimal Serial Monitor with serial plottter TUI and more. <sub>`Rust` · ★ 170 · [deep dive](https://awesometui.com/comchan)</sub>
- [nexus](https://github.com/pranav-cs-1/nexus) - A terminal-based HTTP client for REST and gRPC APIs. <sub>`Rust` · ★ 169</sub>
- [tuisky](https://github.com/sugyan/tuisky) - A TUI client for Bluesky with multiple columns, multer session management, and auto refresh rows. <sub>`Rust` · ★ 163</sub>
- [Rustlens](https://github.com/yashksaini-coder/Rustlens) - Your Rust codebase, revealed It parses your Rust source files and provides an interactive interface to browse functions, structs, enums, traits, and more — all inside your terminal. <sub>`Rust` · ★ 156</sub>
- [crates-tui](https://github.com/ratatui/crates-tui) - A TUI for exploring crates.io using Ratatui. <sub>`Rust` · ★ 155</sub>
- [oyui](https://github.com/emilien-jegou/oyui) - Modern TUI merge tool and interactive diff editor for Jujutsu (jj) and Git. <sub>`Rust` · ★ 147</sub>
- [stree](https://github.com/orangekame3/stree) - 📁Directory trees of AWS S3 Bucket. <sub>`Go` · ★ 144</sub>
- [mcp-probe](https://github.com/conikeec/mcp-probe) - A Model Context Protocol (MCP) client library and debugging toolkit in Rust. This foundation provides both a production-ready SDK for building MCP integrations and the core architecture for an… <sub>`Rust` · ★ 137</sub>
- [marchat](https://github.com/Cod-e-Codes/marchat) - Terminal chat for developers: Go WebSocket server + Bubble Tea TUI client, optional E2E, reactions, DMs, channels, plugins, files, code snippets, admin UI. Backends: SQLite, PostgreSQL, or MySQL. <sub>`Go` · ★ 134</sub>
- [datui](https://github.com/derekwisong/datui) - Data Exploration in the Terminal. <sub>`Rust` · ★ 133</sub>
- [gwm-cli](https://github.com/kbrdn1/gwm-cli) - Git worktree manager for the terminal: CLI + TUI in Rust. Creates the worktree, runs your project setup, links the issue, and shows which AI agent is working where. Single binary, no git CLI needed. <sub>`Rust` · ★ 133</sub>
- [codemark](https://github.com/DanielCardonaRojas/codemark) - A semantic code bookmarking system for humans and agents. <sub>`Rust` · ★ 123</sub>
- [tttui](https://github.com/ReidoBoss/tttui) - A typing test TUI(Text-based User Interface) previously written in python, now migrated to rust! <sub>`Rust` · ★ 122 · [deep dive](https://awesometui.com/tttui)</sub>
- [gitsocial](https://github.com/gitsocial-org/gitsocial) - Cross-forge collaboration platform. <sub>`Go` · ★ 121</sub>
- [lexy](https://github.com/antoniorodr/lexy) - Lexy is a lightweight CLI tool that fetches programming tutorials from "Learn X in Y Minutes" directly into your terminal. <sub>`Python` · ★ 121</sub>
- [amtui](https://github.com/pehlicd/amtui) - Alertmanager TUI - Your Terminal Companion for Alertmanager. <sub>`Go` · ★ 113</sub>
- [dhv](https://github.com/davep/dhv) - Dive into Python code. <sub>`Python` · ★ 102</sub>
- [kyma](https://github.com/museslabs/kyma) - Presentations from markdown in the terminal with fancy transition animations. <sub>`Go` · ★ 96</sub>
- [mandible](https://github.com/AS-FOSS/mandible) - A Universal TUI Manual Viewer for CLI Tools in Rust. <sub>`Rust` · ★ 92</sub>
- [oeis-tui](https://github.com/hako/oeis-tui) - A TUI and CLI for browsing the On-Line Encyclopedia of Integer Sequences (OEIS) in the terminal. <sub>`Rust` · ★ 91</sub>
- [holo](https://github.com/measure-sh/holo) - A terminal UI for Android developers. Monitor performance, browse logs, query databases, record traces, and control devices — without leaving the terminal. <sub>`Rust` · ★ 90</sub>
- [ghr](https://github.com/chenyukang/ghr) - Https://catcoding.me/ghr/ ghr is a fast terminal workspace for staying on top of GitHub. <sub>`Rust` · ★ 89</sub>
- [jjj](https://github.com/icorbrey/jjj) - A modal interface for Jujutsu. <sub>`Rust` · ★ 85</sub>
- [graf](https://github.com/reekta92/graf) - A TUI graph view for markdown files with wikilinks. Customizable. <sub>`Rust` · ★ 80</sub>
- [goji](https://github.com/muandane/goji) - Commitizen-like Emoji Commit Tool written in Go and AI commit message generator (think cz-emoji and other commitizen adapters but in go) 🚀. <sub>`Go` · ★ 78</sub>
- [keepkit](https://github.com/stanlyzoolo/keepkit) - Lightweight TUI for tracking versions of your favorite tools. <sub>`Go` · ★ 78</sub>
- [ghcrawl](https://github.com/pwrdrvr/ghcrawl) - Terminal UI and local CLI for crawling GitHub issues and pull requests, generating embeddings, and clustering related work. <sub>`TypeScript` · ★ 77</sub>
- [lazyslurm](https://github.com/hill/lazyslurm) - Like lazygit/lazydocker but for slurm. <sub>`Rust` · ★ 77</sub>
- [leetrs](https://github.com/shadowmkj/leetrs) - Leetrs is a blazing-fast, Rust-powered CLI and engine designed to make solving LeetCode problems from the terminal a first-class developer experience. <sub>`Rust` · ★ 74 · [deep dive](https://awesometui.com/leetrs)</sub>
- [spectatui](https://github.com/tinesoft/spectatui) - A TUI (Terminal UI) dashboard for Github Spec-Kit. <sub>`Rust` · ★ 74</sub>
- [cargo-selector](https://github.com/lusingander/cargo-selector) - Cargo subcommand to select and execute binary/example targets 📦. <sub>`Rust` · ★ 73</sub>
- [tui-shop](https://github.com/rainbow-sh/tui-shop) - Something between a GUI and a CLI way of downloading apps. <sub>`Python` · ★ 72</sub>
- [nostui](https://github.com/akiomik/nostui) - A TUI client for Nostr. <sub>`Rust` · ★ 69</sub>
- [cpx](https://github.com/ozacod/cpx) - A CLI tool for managing C++ projects, providing a unified workflow for building, testing, and packaging. <sub>`Go` · ★ 68</sub>
- [omp-manager](https://github.com/psmux/omp-manager) - Installation and manager for Oh My Posh! The one thing you need to browse themes, install fonts, and configure shells. <sub>`Rust` · ★ 68</sub>
- [ghfetch](https://github.com/orangekame3/ghfetch) - Octocat: ghfetch is a CLI tool to fetch GitHub user information and show like neofetch. <sub>`Go` · ★ 67</sub>
- [mult](https://github.com/dhth/mult) - Run a command multiple times and glance at the outputs via a TUI. <sub>`Go` · ★ 67</sub>
- [ToolUI](https://github.com/jinek/ToolUI) - Manages dotnet tools with a terminal UI. <sub>`C#` · ★ 67</sub>
- [uuinfo](https://github.com/Racum/uuinfo) - A tool to debug unique identifiers (UUID, ULID, Snowflake, etc). <sub>`Rust` · ★ 66</sub>
- [octoscope](https://github.com/gfazioli/octoscope) - Terminal dashboard for GitHub — followers, stars, PRs and issues at a glance, auto-refreshed. <sub>`Go` · ★ 63</sub>
- [cueitup](https://github.com/dhth/cueitup) - Inspect messages in an AWS SQS queue in a simple and deliberate manner. <sub>`Go` · ★ 61</sub>
- [cli](https://github.com/workos/cli) - AI-powered CLI wizard that automatically integrates WorkOS AuthKit into your app. <sub>`TypeScript` · ★ 60</sub>
- [cloctui](https://github.com/edward-jazzhands/cloctui) - A TUI interface for CLOC (Count Lines of Code) <sub>`Python` · ★ 60</sub>
- [dotenvhub](https://github.com/Zaloog/dotenvhub) - Terminal App to centrally manage .env files. Written in Python powered by Textual. <sub>`Python` · ★ 60</sub>
- [lazyenv](https://github.com/lazynop/lazyenv) - TUI for managing .env files. <sub>`Go` · ★ 60</sub>
- [fnug](https://github.com/nickolaj-jepsen/fnug) - Fnug runs all your lints, tests and commands at once, in the terminal. With git integration and file watching. <sub>`Rust` · ★ 59</sub>
- [kranz](https://github.com/kranz-org/kranz) - Keyboard-first local service orchestrator with a focused terminal UI. <sub>`Go` · ★ 56 · [deep dive](https://awesometui.com/kranz)</sub>
- [cxt](https://github.com/vaibhav-mattoo/cxt) - Rust CLI to extract relevant codebase context to clipboard with XML tagging for web AI. <sub>`Rust` · ★ 53</sub>
- [envfetch](https://github.com/ankddev/envfetch) - Lightweight cross-platform CLI tool for working with environment variables. <sub>`Rust` · ★ 52</sub>
- [kplay](https://github.com/dhth/kplay) - Inspect messages in a Kafka topic in a simple and deliberate manner. <sub>`Go` · ★ 52</sub>
- [tokui](https://github.com/zdyxry/tokui) - An interactive TUI for visualizing code statistics from tokei. <sub>`Go` · ★ 52</sub>
- [m-vis](https://github.com/SickleFire/m-vis) - Lightweight cross-platform memory visualizer tool. <sub>`Rust` · ★ 50</sub>
- [Handler](https://github.com/alDuncanson/Handler) - A2A protocol client for your terminal. <sub>`Python` · ★ 45</sub>
- [cmdperf](https://github.com/miklosn/cmdperf) - Command Performance Benchmarking. <sub>`Go` · ★ 40</sub>
- [vctui](https://github.com/thebsdbox/vctui) - VMware vCenter Text UI. <sub>`Go` · ★ 38</sub>
- [deputui](https://github.com/twiddler/deputui) - Review and install NPM package updates in your terminal 👮. <sub>`Rust` · ★ 36</sub>
- [patch-hub](https://github.com/kworkflow/patch-hub) - Patch-hub is a TUI that streamlines the interaction of Linux developers with patches archived on lore.kernel.org. <sub>`Rust` · ★ 36</sub>
- [wintui](https://github.com/kts982/wintui) - Go TUI frontend for winget (Windows Package Manager) — built with Bubble Tea, Bubbles, and Lip Gloss. <sub>`Go` · ★ 36</sub>
- [gotip](https://github.com/lusingander/gotip) - Go Test Interactive Picker 🧪. <sub>`Go` · ★ 35</sub>
- [simtool](https://github.com/azizuysal/simtool) - A beautiful and powerful TUI for managing iOS Simulators. <sub>`Go` · ★ 35</sub>
- [lazykiq](https://github.com/kpumuk/lazykiq) - Rich terminal UI for Sidekiq. <sub>`Go` · ★ 34</sub>
- [tuix](https://github.com/pythops/tuix) - 🖵 TUI for managing screens. <sub>`Rust` · ★ 33</sub>
- [hexowl](https://github.com/DECE2183/hexowl) - Lightweight, flexible programmer's calculator with variables and functions. <sub>`Go` · ★ 31</sub>
- [violet](https://github.com/braheezy/violet) - Colorful TUI frontend to run Vagrant commands. <sub>`Go` · ★ 31</sub>
- [Physics-TUI](https://github.com/ClaudioRMalvino/Physics-TUI) - Physics TUI application for undergraduate study. <sub>`Python` · ★ 29</sub>
- [reqlog](https://github.com/SagarMaheshwary/reqlog) - Fast CLI for searching, tracing, and streaming logs across files, Docker containers, and remote hosts using request IDs, trace IDs, and key/value search. <sub>`Go` · ★ 29</sub>
- [tab-pal](https://github.com/ben-nour/tab-pal) - A terminal app that makes it easier to add and edit custom colour palettes in Tableau. <sub>`Python` · ★ 29</sub>
- [vignore](https://github.com/James4Ever0/vignore) - A powerful tool to visualize ignored files. <sub>`Python` · ★ 29</sub>
- [peplum](https://github.com/davep/peplum) - The TUI PEP lookup manager for your terminal. <sub>`Python` · ★ 27</sub>
- [tofuref](https://github.com/djetelina/tofuref) - TUI for OpenTofu/Terraform provider registry. <sub>`Python` · ★ 27</sub>
- [celerator](https://github.com/f4rih/celerator) - A terminal-based Celery task monitor and debugger. <sub>`Python` · ★ 26</sub>
- [PesterExplorer](https://github.com/HeyItsGilbert/PesterExplorer) - A TUI to explore Pester results. <sub>`PowerShell` · ★ 26</sub>
- [envdiff](https://github.com/GBerghoff/envdiff) - Cli tool to snapshot and diff environments - helping find the differences that matter. <sub>`Go` · ★ 25</sub>
- [arTui](https://github.com/fjonasALICE/arTui) - A small TUI to read and track recent arXiv papers. <sub>`Python` · ★ 24</sub>
- [burf](https://github.com/razeghi71/burf) - TUI for google cloud storage (GCS) <sub>`Python` · ★ 20</sub>
- [lazynginx](https://github.com/giacomomasseron/lazynginx) - Simple terminal UI for nginx management. <sub>`Go` · ★ 20</sub>
- [memtui](https://github.com/nnnkkk7/memtui) - A modern TUI client for Memcached with tree-structured key navigation, smart JSON/binary formatting, and Vim keybindings. <sub>`Go` · ★ 20</sub>
- [tn-cli](https://github.com/cetorres/tn-cli) - TabNews CLI is a terminal based application (TUI) made with Go for the Brazilian news website TabNews (tabnews.com.br). <sub>`Go` · ★ 20 · [deep dive](https://awesometui.com/tn-cli)</sub>
- [termdock](https://github.com/padovanl/termdock) - 📟 A terminal multiplexer with persistent sessions, split panes, detach, reattach. Written from scratch in Go. <sub>`Go` · ★ 18 · [deep dive](https://awesometui.com/termdock)</sub>
- [har-viewer](https://github.com/nassendelft/har-viewer) - A terminal UI for inspecting HAR (HTTP Archive) files. <sub>`C++` · ★ 15</sub>
- [rum](https://github.com/thekarel/rum) - TUI to list, search and run package.json scripts 🥃. <sub>`Go` · ★ 14</sub>
- [payk](https://github.com/yusupkhemraev/payk) - Keyboard-first TUI HTTP client. Vim-style navigation, plain-YAML storage that diffs cleanly in git, importers for curl, OpenAPI and FastAPI projects, and a response viewer with a timing waterfall. <sub>`Go` · ★ 13</sub>
- [gistui](https://github.com/akunzai/gistui) - A terminal UI for managing GitHub Gists. <sub>`Rust` · ★ 12</sub>
- [gri](https://github.com/pycontribs/gri) - Git/Gerrit Review Interface helps you manage change requests from multiple servers. <sub>`Python` · ★ 11</sub>
- [asmdiff](https://github.com/rt-rtos/asmdiff) - Asmdiff — per-function assembly comparison for paired C implementations. <sub>`Python` · ★ 10</sub>
- [proc-manager](https://github.com/novitaswebworks/proc-manager) - The Modern, Blazing-Fast TUI System & Docker Manager. <sub>`Rust` · ★ 9 · [deep dive](https://awesometui.com/proc-manager)</sub>
- [pisesh](https://github.com/Blue-B/pisesh) - Bookmark, search, and resume pi coding-agent sessions with a fast keyboard-driven TUI. <sub>`JavaScript` · ★ 8 · [deep dive](https://awesometui.com/pisesh)</sub>
- [tuicamp](https://github.com/AbeEstrada/tuicamp) - ⏰ Unofficial TimeCamp TUI. <sub>`Go` · ★ 8</sub>
- [amqcli](https://github.com/xvlet/amqcli) - A powerful Terminal UI (TUI) client for managing and monitoring Apache ActiveMQ. <sub>`Go` · ★ 7</sub>
- [nostratui](https://github.com/adamm-xyz/nostratui) - A TUI for nostr. <sub>`Rust` · ★ 7</sub>
- [hotspot](https://github.com/yeet-src/hotspot) - Point-and-click CPU profiler on eBPF. Click a process, watch a live flat self-time profile build — user and kernel frames, symbolized straight from the kernel. <sub>`JavaScript` · ★ 6</sub>
- [revision](https://github.com/bapatchirag/revision) - Lazygit for SVN - a fast, keyboard-driven TUI for SVN. <sub>`Go` · ★ 6 · [deep dive](https://awesometui.com/revision)</sub>
- [jira-kanban](https://github.com/raulvc/jira-kanban) - A TUI for visualizing a Jira kanban board, designed to look as close as possible to the webview using Atlassian's open API's. <sub>`Go` · ★ 5</sub>
- [switchlet](https://github.com/jeppeklh/switchlet) - A small terminal app for switching project configuration profiles safely. <sub>`Go` · ★ 4</sub>
- [lazymqtt](https://github.com/ScottFelder/lazymqtt) - Terminal UI MQTT client with features like saved connections, live topic tree, message inspector, and plugins. <sub>`Rust` · ★ 1 · [deep dive](https://awesometui.com/lazymqtt)</sub>
- [taffy](https://github.com/shobhitgupta2/taffy) - Taffy lets you speed up webhook development without ever leaving your terminal. <sub>`Go` · ★ 1</sub>
- [garage](https://github.com/dulguun-tuguldur/garage) - A terminal UI application for managing project folders and repositories. <sub>`Rust` · ★ 0 · [deep dive](https://awesometui.com/garage)</sub>
- [StackForge](https://github.com/Mide6x/StackForge) - An extensible CLI for scaffolding modern application stacks. <sub>`TypeScript` · ★ 0 · [deep dive](https://awesometui.com/stackforge)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Git

> Git clients, repository browsers, commit tools, and version-control workflows. <sub>[browse on awesometui.com →](https://awesometui.com/git)</sub>

- [lazygit](https://github.com/jesseduffield/lazygit) - Simple terminal UI for git commands. <sub>`Go` · ★ 82k · [deep dive](https://awesometui.com/lazygit)</sub>
- [delta](https://github.com/dandavison/delta) - A syntax-highlighting pager for git, diff, grep, rg --json, and blame output. <sub>`Rust` · ★ 32k</sub>
- [jj](https://github.com/jj-vcs/jj) - A Git-compatible VCS that is both simple and powerful. <sub>`Rust` · ★ 31k</sub>
- [gitui](https://github.com/gitui-org/gitui) - Blazing 💥 fast terminal-ui for git written in rust 🦀. <sub>`Rust` · ★ 22k · [deep dive](https://awesometui.com/gitui)</sub>
- [tig](https://github.com/jonas/tig) - Text-mode interface for git. <sub>`C` · ★ 13k</sub>
- [gh-dash](https://github.com/dlvhdr/gh-dash) - A rich terminal UI for GitHub that doesn't break your flow. <sub>`Go` · ★ 12k</sub>
- [git-cliff](https://github.com/orhun/git-cliff) - A highly customizable Changelog Generator that follows Conventional Commit specifications ⛰️. <sub>`Rust` · ★ 12k</sub>
- [soft-serve](https://github.com/charmbracelet/soft-serve) - The mighty, self-hostable Git server for the command line🍦. <sub>`Go` · ★ 7.2k</sub>
- [forgit](https://github.com/wfxr/forgit) - Zzz: A utility tool powered by fzf for using git interactively. <sub>`Shell` · ★ 5.1k</sub>
- [grv](https://github.com/rgburke/grv) - GRV is a terminal interface for viewing git repositories. <sub>`Go` · ★ 4.1k</sub>
- [gitu](https://github.com/altsem/gitu) - A TUI Git client inspired by Magit. <sub>`Rust` · ★ 2.9k</sub>
- [git-split-diffs](https://github.com/banga/git-split-diffs) - Syntax highlighted side-by-side diffs in your terminal. <sub>`TypeScript` · ★ 2.7k</sub>
- [git-who](https://github.com/sinclairtarget/git-who) - Git blame for file trees. <sub>`Go` · ★ 2.7k</sub>
- [jjui](https://github.com/idursun/jjui) - Jjui is a TUI designed for interacting with the Jujutsu version control system. <sub>`Go` · ★ 2.1k</sub>
- [serie](https://github.com/lusingander/serie) - A rich git commit graph in your terminal, like magic 📚. <sub>`Rust` · ★ 2.1k</sub>
- [gita](https://github.com/nosarthur/gita) - Manage many git repos with sanity 从容管理多个git库. <sub>`Python` · ★ 1.9k</sub>
- [git-interactive-rebase-tool](https://github.com/MitMaro/git-interactive-rebase-tool) - Native cross-platform full feature terminal-based sequence editor for git interactive rebase. <sub>`Rust` · ★ 1.9k</sub>
- [diffnav](https://github.com/dlvhdr/diffnav) - A git diff pager based on delta but with a file tree, à la GitHub. <sub>`Go` · ★ 1.5k</sub>
- [critique](https://github.com/remorses/critique) - TUI & website for reviewing git changes. <sub>`TypeScript` · ★ 1.3k</sub>
- [branchlet](https://github.com/raghavpillai/branchlet) - Branchlet: A simple CLI Git worktree manager. <sub>`TypeScript` · ★ 494</sub>
- [froggit](https://github.com/thewizardshell/froggit) - Simplify your Git workflow with visual feedback, keyboard-driven controls, and a streamlined experience. <sub>`Go` · ★ 482</sub>
- [tdash](https://github.com/jessfraz/tdash) - A terminal dashboard with stats from Google Analytics, GitHub, Travis CI, and Jenkins. Very much built specific to me. <sub>`Go` · ★ 320</sub>
- [ec](https://github.com/chojs23/ec) - Easy terminal-native 3-way git mergetool vim-like workflow. <sub>`Go` · ★ 291</sub>
- [lazyworktree](https://github.com/chmouel/lazyworktree) - Easy Git worktree management CLI and TUI for the terminal. <sub>`Go` · ★ 287</sub>
- [ggc](https://github.com/bmf-san/ggc) - A modern Git CLI tool with both traditional command-line and interactive incremental-search UI. <sub>`Go` · ★ 284</sub>
- [gitnr](https://github.com/reemus-dev/gitnr) - Create .gitignore files using one or more templates from TopTal, GitHub or your own collection. <sub>`Rust` · ★ 236</sub>
- [deadbranch](https://github.com/armgabrielyan/deadbranch) - Clean up stale git branches safely. <sub>`Rust` · ★ 228</sub>
- [git-crecord](https://github.com/andrewshadura/git-crecord) - Git subcommand to interactively select changes to commit or stage. <sub>`Python` · ★ 218</sub>
- [guitar](https://github.com/asinglebit/guitar) - A terminal based git client with fast topological & chronological graph rendering. <sub>`Rust` · ★ 188</sub>
- [prs](https://github.com/dhth/prs) - Stay updated on PRs from your terminal. <sub>`Go` · ★ 184</sub>
- [gittop](https://github.com/hjr265/gittop) - A beautiful terminal UI for visualizing Git repository statistics, inspired by htop/btop. <sub>`Go` · ★ 153</sub>
- [git-cc](https://github.com/SKalt/git-cc) - A git extension to help write conventional commits. <sub>`Go` · ★ 141</sub>
- [drift](https://github.com/aymanbagabas/drift) - 👾 A git diff pager that actually wants to be looked at. <sub>`Rust` · ★ 128</sub>
- [gitpane](https://github.com/affromero/gitpane) - Multi-repo Git workspace dashboard for the terminal. <sub>`Rust` · ★ 128</sub>
- [git-scope](https://github.com/Bharath-code/git-scope) - A fast TUI to see the status of all git repositories on your machine. <sub>`Go` · ★ 117</sub>
- [gitv](https://github.com/JayanAXHF/gitv) - Gitv is a terminal-based viewer for GitHub issues. It allows you to view and manage your GitHub issues directly from the terminal. <sub>`Rust` · ★ 115</sub>
- [pyautogit](https://github.com/jwlodek/pyautogit) - A TUI for working with git repositories written in python using pycui. <sub>`Python` · ★ 112</sub>
- [gitsnip](https://github.com/dagimg-dot/gitsnip) - A CLI tool to download specific folders from a git repository. <sub>`Go` · ★ 89</sub>
- [brows](https://github.com/rubysolo/brows) - CLI GitHub release browser. <sub>`Go` · ★ 83</sub>
- [act3](https://github.com/dhth/act3) - Glance at the last 3 runs of your GitHub Actions workflows. <sub>`Go` · ★ 81</sub>
- [gitwig](https://github.com/tareqmy/gitwig) - A rust based tui an alternative to sourcetree. <sub>`Rust` · ★ 81</sub>
- [differ](https://github.com/JanSmrcka/differ) - Terminal UI git diff viewer with two-panel layout, syntax highlighting, vim keybindings, and AI-powered commits. Built with Go + Bubble Tea. <sub>`Go` · ★ 53</sub>
- [pygitzen](https://github.com/SunnyTamang/pygitzen) - A Python-native Terminal-Based Git Client - Navigate and manage your Git repositories with a beautiful TUI interface inspired by LazyGit. <sub>`Python` · ★ 38</sub>
- [gitid](https://github.com/nathabonfim59/gitid) - A tool to stop sending work commits with your personal email. <sub>`Go` · ★ 29</sub>
- [nodebro](https://github.com/jonaburg/nodebro) - Just a little golang TUI to track git tag releases on github. <sub>`Go` · ★ 19</sub>
- [catalyst](https://github.com/PraveenGongada/catalyst) - 🚀 Interactive terminal UI for triggering GitHub Actions workflows with matrix configurations. <sub>`Go` · ★ 13</sub>
- [manygit](https://github.com/rabeeh-ta/manygit) - A multi-repository Git CLI manager — see what's ahead, behind, or dirty across all of them at once. <sub>`Go` · ★ 6 · [deep dive](https://awesometui.com/manygit)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Editors

> Terminal text editors, IDE-like TUIs, and code editing tools. <sub>[browse on awesometui.com →](https://awesometui.com/editors)</sub>

- [neovim](https://github.com/neovim/neovim) - Vim-fork focused on extensibility and usability. <sub>`Vim Script` · ★ 102k</sub>
- [helix](https://github.com/helix-editor/helix) - A post-modern modal text editor. <sub>`Rust` · ★ 46k</sub>
- [vim](https://github.com/vim/vim) - The official Vim repository. <sub>`Vim Script` · ★ 41k</sub>
- [micro](https://github.com/micro-editor/micro) - A modern and intuitive terminal-based text editor. <sub>`Go` · ★ 29k</sub>
- [edit](https://github.com/microsoft/edit) - We all edit. <sub>`Rust` · ★ 15k</sub>
- [kakoune](https://github.com/mawww/kakoune) - Mawww's experiment for a better code editor. <sub>`C++` · ★ 11k</sub>
- [kilo](https://github.com/antirez/kilo) - A text editor in less than 1000 LOC with syntax highlight and search. <sub>`C` · ★ 9.1k</sub>
- [fresh](https://github.com/sinelaw/fresh) - Terminal based IDE & text editor: easy, powerful and fast. <sub>`Rust` · ★ 8.6k</sub>
- [slap](https://github.com/slap-editor/slap) - Sublime-like terminal-based text editor. <sub>`JavaScript` · ★ 6.2k</sub>
- [sc-im](https://github.com/andmarti1424/sc-im) - Sc-im - Spreadsheet Calculator Improvised -- An ncurses spreadsheet program for terminal. <sub>`C` · ★ 5.7k</sub>
- [emacs](https://github.com/emacs-mirror/emacs) - Mirror of GNU Emacs. <sub>`Emacs Lisp` · ★ 5.2k</sub>
- [vis](https://github.com/martanne/vis) - A vi-like editor based on Plan 9's structural regular expressions. <sub>`C` · ★ 4.7k</sub>
- [amp](https://github.com/jmacdonald/amp) - A complete text editor for your terminal. <sub>`Rust` · ★ 4.1k</sub>
- [ox](https://github.com/curlpipe/ox) - The simple but flexible text editor. <sub>`Rust` · ★ 3.7k</sub>
- [sheets](https://github.com/maaslalani/sheets) - Terminal based spreadsheet tool. <sub>`Go` · ★ 2.3k · [deep dive](https://awesometui.com/sheets)</sub>
- [flow](https://github.com/neurocyte/flow) - Flow Control: a programmer's text editor. <sub>`Zig` · ★ 2.2k</sub>
- [kibi](https://github.com/ilai-deutel/kibi) - A text editor in ≤1024 lines of code, written in Rust. <sub>`Rust` · ★ 1.9k</sub>
- [durdraw](https://github.com/durdraw/durdraw) - Versatile ASCII and ANSI Art text editor for drawing in the Linux/Unix/macOS terminal, with animation, 256 and 16 colors, Unicode and CP437, and customizable themes. <sub>`Python` · ★ 1.8k</sub>
- [zee](https://github.com/zee-editor/zee) - A modern text editor for the terminal written in Rust. <sub>`Rust` · ★ 1.8k</sub>
- [wordgrinder](https://github.com/davidgiven/wordgrinder) - A word processor which gets the hell out of your way and lets you get some work done. <sub>`Lua` · ★ 1.3k</sub>
- [textual-paint](https://github.com/1j01/textual-paint) - Art: MS Paint in your terminal. <sub>`Python` · ★ 1.1k</sub>
- [vex-tui](https://github.com/CodeOne45/vex-tui) - A beautiful, fast, and feature-rich terminal-based Excel and CSV viewer & editor built with Go. <sub>`Go` · ★ 934</sub>
- [ad](https://github.com/sminez/ad) - An adaptable text editor. <sub>`Rust` · ★ 736</sub>
- [moe](https://github.com/fox0430/moe) - A command line based editor inspired by Vim. Written in Nim. <sub>`Nim` · ★ 719</sub>
- [orbiton](https://github.com/xyproto/orbiton) - Snappy and configuration-free text editor/IDE for the terminal. Suitable for writing git commit messages, editing Markdown, config files, source code, man pages and for quick edit-format-compile… <sub>`Go` · ★ 697 · [deep dive](https://awesometui.com/orbiton)</sub>
- [turbo](https://github.com/magiblot/turbo) - An experimental text editor based on Scintilla and Turbo Vision. <sub>`C++` · ★ 677</sub>
- [elinks](https://github.com/rkd77/elinks) - Fork of elinks. <sub>`C` · ★ 631</sub>
- [tilde](https://github.com/gphalkes/tilde) - The Tilde text editor. <sub>`C++` · ★ 552</sub>
- [mdfried](https://github.com/benjajaja/mdfried) - A markdown viewer for the terminal that renders images and Big Headers™. <sub>`Rust` · ★ 503</sub>
- [tut](https://github.com/RasmusLindroth/tut) - TUI for Mastodon with vim inspired keys. <sub>`Go` · ★ 500</sub>
- [dawn](https://github.com/andrewmd5/dawn) - A distraction-free writing environment; draft anything, write now. <sub>`C` · ★ 455</sub>
- [hygg](https://github.com/kruseio/hygg) - 📚 Simplifying the way you read. Minimalistic Vim-like TUI document reader. <sub>`Rust` · ★ 351</sub>
- [c-edit](https://github.com/velorek1/c-edit) - A text editor in C with drop down menus from scratch. No ncurses. <sub>`C` · ★ 301</sub>
- [hexabyte](https://github.com/thetacom/hexabyte) - A modern, modular, and robust TUI hex editor. <sub>`Python` · ★ 293</sub>
- [hexhog](https://github.com/DVDTSB/hexhog) - Hex viewer/editor. <sub>`Rust` · ★ 280</sub>
- [dte](https://github.com/craigbarnes/dte) - A small, configurable terminal text editor (mirrored from https://gitlab.com/craigbarnes/dte) <sub>`C` · ★ 239</sub>
- [emeraldian](https://github.com/iamrohithrnair/emeraldian) - A terminal UI for your Obsidian vault: live-preview notes, backlinks, images, a force-directed graph and an assistant. <sub>`Rust` · ★ 203</sub>
- [ttt](https://github.com/eugenioenko/ttt) - TTT Editor - Terminal Text Tool: a terminal text editor IDE. A real alternative to VS Code, Zed, and Sublime that runs in your terminal. Single binary, zero config. <sub>`Go` · ★ 202</sub>
- [csvi](https://github.com/hymkor/csvi) - Csvi - A terminal CSV editor. <sub>`Go` · ★ 187</sub>
- [mdtt](https://github.com/szktkfm/mdtt) - 🗓️ Markdown Table Editor TUI. <sub>`Go` · ★ 163</sub>
- [hexapoda](https://github.com/simonomi/hexapoda) - A colorful modal hex editor. <sub>`Rust` · ★ 158</sub>
- [claws](https://github.com/clawscli/claws) - K9s-inspired TUI for AWS resource management with vim-style navigation. <sub>`Go` · ★ 153</sub>
- [pinstar](https://github.com/reekta92/pinstar) - Canvas file editor compatible with Obsidian .canvas files. <sub>`Rust` · ★ 106</sub>
- [rusticon](https://github.com/ronilan/rusticon) - A mouse driven SVG favicon editor for your terminal, that also works on the web (written in Rust w/ Incredible) <sub>`Rust` · ★ 103</sub>
- [toast](https://github.com/paradise-runner/toast) - A batteries-included, beautiful, in-terminal IDE. <sub>`Go` · ★ 102</sub>
- [nino](https://github.com/evanlin96069/nino) - My personal text editor. <sub>`C` · ★ 95</sub>
- [perkins](https://github.com/Mr-Robot-err-404/perkins) - ASCII pixel art editor for the terminal. <sub>`Go` · ★ 93</sub>
- [Alwide](https://github.com/arnauda-gh/Alwide) - The Modern TUI IDE. The intuitive experience in your terminal. <sub>`C` · ★ 84</sub>
- [markln](https://github.com/xqtr/markln) - A MarkDown editor, with live preview, for use in the Terminal. <sub>`Python` · ★ 61</sub>
- [tui-wave](https://github.com/biomassa/tui-wave) - A terminal audio file editor. <sub>`Rust` · ★ 33</sub>
- [pure](https://github.com/roblillack/pure) - Pure is a terminal word processor. Use it to edit pure text documents. <sub>`Rust` · ★ 27</sub>
- [thymus](https://github.com/blademd/thymus) - A browser & editor for network configuration files. <sub>`Python` · ★ 27</sub>
- [sq](https://github.com/sheenazien8/sq) - SQL Client special for vim users. <sub>`Go` · ★ 17</sub>
- [termisprite](https://github.com/JavierCladellas/termisprite) - Terminal pixel art sprite editor. <sub>`C` · ★ 11</sub>
- [favicon-editor](https://github.com/xyproto/favicon-editor) - Abacus: Spartan grayscale favicon editor for the terminal. <sub>`Go` · ★ 3</sub>
- [cref](https://github.com/Quantre34/cref) - Terminal file browser and editor with C standard library reference. <sub>`C` · ★ 0 · [deep dive](https://awesometui.com/cref)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Frameworks & Libraries

> TUI libraries, widget toolkits, render engines, and building blocks for terminal interfaces. <sub>[browse on awesometui.com →](https://awesometui.com/frameworks-libraries)</sub>

- [rich](https://github.com/Textualize/rich) - Rich is a Python library for rich text and beautiful formatting in the terminal. <sub>`Python` · ★ 57k</sub>
- [bubbletea](https://github.com/charmbracelet/bubbletea) - A powerful little TUI framework 🏗. <sub>`Go` · ★ 45k</sub>
- [ink](https://github.com/vadimdemedes/ink) - 🌈 React for interactive command-line apps. <sub>`TypeScript` · ★ 40k</sub>
- [textual](https://github.com/Textualize/textual) - The lean application framework for Python. Build sophisticated user interfaces with a simple Python API. Run your apps in the terminal and a web browser. <sub>`Python` · ★ 37k</sub>
- [libuv](https://github.com/libuv/libuv) - Cross-platform asynchronous I/O. <sub>`C` · ★ 27k</sub>
- [ratatui](https://github.com/ratatui/ratatui) - A Rust crate for cooking up terminal user interfaces (TUIs) 👨‍🍳🐀 https://ratatui.rs. <sub>`Rust` · ★ 22k</sub>
- [tview](https://github.com/rivo/tview) - Terminal UI library with rich, interactive widgets — written in Golang. <sub>`Go` · ★ 14k</sub>
- [termui](https://github.com/gizak/termui) - Golang terminal dashboard. <sub>`Go` · ★ 14k</sub>
- [opentui](https://github.com/anomalyco/opentui) - OpenTUI is a library to build terminal user interfaces (TUI) <sub>`TypeScript` · ★ 13k</sub>
- [blessed](https://github.com/chjj/blessed) - A high-level terminal interface library for node.js. <sub>`JavaScript` · ★ 12k</sub>
- [spectre.console](https://github.com/spectreconsole/spectre.console) - A .NET library that makes it easier to create beautiful console applications. <sub>`C#` · ★ 12k</sub>
- [Terminal.Gui](https://github.com/tui-cs/Terminal.Gui) - Cross Platform Terminal UI toolkit for .NET. <sub>`C#` · ★ 11k</sub>
- [FTXUI](https://github.com/ArthurSonzogni/FTXUI) - Computer: C++ Functional Terminal User Interface. :heart. <sub>`C++` · ★ 11k</sub>
- [gocui](https://github.com/jroimartin/gocui) - Minimalist Go package aimed at creating Console User Interfaces. <sub>`Go` · ★ 11k</sub>
- [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) - Library for building powerful interactive command line applications in Python. <sub>`Python` · ★ 11k</sub>
- [pterm](https://github.com/pterm/pterm) - ✨ PTerm is a modern Go module to easily beautify console output. Featuring charts, progressbars, tables, trees, text input, select menus and much more 🚀 It's completely configurable and 100%… <sub>`Go` · ★ 5.5k</sub>
- [tcell](https://github.com/gdamore/tcell) - Tcell is an alternate terminal package, similar in some ways to termbox, but better in others. <sub>`Go` · ★ 5.2k</sub>
- [notcurses](https://github.com/dankamongmen/notcurses) - Blingful character graphics/TUI library. definitely not curses. <sub>`C` · ★ 4.7k</sub>
- [imtui](https://github.com/ggerganov/imtui) - ImTui: Immediate Mode Text-based User Interface C++ Library. <sub>`C++` · ★ 3.6k</sub>
- [tvision](https://github.com/magiblot/tvision) - A modern port of Turbo Vision 2.0, the classical framework for text-based user interfaces. Now cross-platform and with Unicode support. <sub>`C++` · ★ 3.1k</sub>
- [urwid](https://github.com/urwid/urwid) - Console user interface library for Python (official repo) <sub>`Python` · ★ 3k</sub>
- [pytermgui](https://github.com/bczsalba/pytermgui) - Python TUI framework with mouse support, modular widget system, customizable and rapid terminal markup language and more! <sub>`Python` · ★ 2.7k</sub>
- [lanterna](https://github.com/mabe02/lanterna) - Java library for creating text-based GUIs. <sub>`Java` · ★ 2.6k</sub>
- [uvw](https://github.com/skypjack/uvw) - Header-only, event based, tiny and easy to use libuv wrapper in modern C++ - now available as also shared/static library! <sub>`C++` · ★ 2.1k</sub>
- [rang](https://github.com/agauniyal/rang) - A Minimal, Header only Modern c++ library for terminal goodies 💄✨. <sub>`C++` · ★ 1.6k</sub>
- [iocraft](https://github.com/ccbrown/iocraft) - A Rust crate for beautiful, artisanally crafted CLIs, TUIs, and text-based IO. <sub>`Rust` · ★ 1.5k</sub>
- [blessed](https://github.com/jquast/blessed) - Blessed is an easy, practical library for making python terminal apps. <sub>`Python` · ★ 1.5k</sub>
- [blessings](https://github.com/erikrose/blessings) - A thin, practical wrapper around terminal capabilities in Python. <sub>`Python` · ★ 1.5k</sub>
- [finalcut](https://github.com/gansm/finalcut) - A Modern C++ Text-Based Widget Toolkit (TUI) <sub>`C++` · ★ 1.2k</sub>
- [xtd](https://github.com/gammasoft71/xtd) - Free open-source modern C++20 framework to create console (CLI), forms (GUI like WinForms) and unit test (xUnit) applications and libraries on Windows, macOS, Linux, iOS, Android, FreeBSD, Haiku, and… <sub>`C++` · ★ 1.2k</sub>
- [pyTermTk](https://github.com/ceccopierangiolieugenio/pyTermTk) - Python Terminal Toolkit - a Spiced Up Cross Compatible TUI Library 🌶️. <sub>`Python` · ★ 912</sub>
- [Consolonia](https://github.com/Consolonia/Consolonia) - A cross-platform UI framework for .NET. <sub>`C#` · ★ 821</sub>
- [py_cui](https://github.com/jwlodek/py_cui) - A python library for intuitively creating CUI/TUI interfaces with widgets, inspired by gocui. <sub>`Python` · ★ 789</sub>
- [termbox2](https://github.com/termbox/termbox2) - Terminal I/O library. <sub>`C` · ★ 758</sub>
- [php-tui](https://github.com/php-tui/php-tui) - Make awesome console applications in PHP (port of Rust's Ratatui) <sub>`PHP` · ★ 612</sub>
- [nimwave](https://github.com/ansiwave/nimwave) - TUIs for the terminal, desktop, and web. <sub>`Nim` · ★ 547</sub>
- [TermGL](https://github.com/wojciech-graj/TermGL) - 2D & 3D graphics engine in the terminal [C/C++]. <sub>`C` · ★ 404</sub>
- [nocterm](https://github.com/Norbert515/nocterm) - A powerful, Flutter-inspired Terminal User Interface framework for building beautiful command-line applications in Dart. <sub>`Dart` · ★ 398</sub>
- [stickers](https://github.com/76creates/stickers) - Building blocks for charmbracelet/lipgloss 👾. <sub>`Go` · ★ 397</sub>
- [tuibox](https://github.com/Cubified/tuibox) - A single-header terminal UI (TUI) library, capable of creating mouse-driven, interactive applications on the command line. <sub>`C` · ★ 329</sub>
- [ConsoleEx](https://github.com/nickprotop/ConsoleEx) - SharpConsoleUI — A reactive terminal UI framework for .NET with a robust async model, per-window threads, a real compositor engine, 30+ controls, and NativeAOT support. <sub>`C#` · ★ 267</sub>
- [tui-input](https://github.com/sayanarijit/tui-input) - TUI input library supporting multiple backends, tui-rs and ratatui. <sub>`Rust` · ★ 202</sub>
- [hex1b](https://github.com/mitchdenny/hex1b) - The .NET Terminal Application Stack. <sub>`C#` · ★ 173</sub>
- [unicurses](https://github.com/unicurses/unicurses) - Github fork for unicurses. <sub>`Python` · ★ 172</sub>
- [tui4j](https://github.com/WilliamAGH/tui4j) - TUI4J: Terminal User Interface library for Java that includes Bubble Tea ported from Go. <sub>`Java` · ★ 120</sub>
- [Ashen](https://github.com/colinta/Ashen) - A framework for writing terminal applications in Swift. <sub>`Swift` · ★ 119</sub>
- [ConsoleCraftEngine](https://github.com/ural89/ConsoleCraftEngine) - Terminal game engine with C++. <sub>`C++` · ★ 97</sub>
- [thermage](https://github.com/thermage/thermage) - Thermage provides a fluent and incredibly powerful object-oriented interface for customizing CLI output text color, background, formatting, theming and more. <sub>`PHP` · ★ 96</sub>
- [ink-web](https://github.com/cjroth/ink-web) - CLIs in the browser & terminal. <sub>`TypeScript` · ★ 85</sub>
- [casciian](https://github.com/crramirez/casciian) - Text User Interface Library. <sub>`Java` · ★ 50</sub>
- [termdb](https://github.com/agauniyal/termdb) - Terminfo parser for modern c++ :fax. <sub>`C++` · ★ 47</sub>
- [anbui](https://github.com/oerg866/anbui) - (Very) Tiny Text UI library. <sub>`C` · ★ 38</sub>
- [ani-l](https://github.com/komposer-aml/ani-l) - Rusty anime search and streams from your terminal - an ANI-me L-ibrary experience! <sub>`Rust` · ★ 37</sub>
- [Argenta](https://github.com/koloideal/Argenta) - Python library for building modular CLI applications. <sub>`Python` · ★ 32</sub>
- [distrobox-tui](https://github.com/phanirithvij/distrobox-tui) - A TUI for DistroBox. <sub>`Go` · ★ 31</sub>
- [tuiwidgets](https://github.com/tuiwidgets/tuiwidgets) - Terminal user inferface toolkit. <sub>`C++` · ★ 26</sub>
- [vindauga](https://github.com/gabbpuy/vindauga) - Vindauga Text Windowing Library. <sub>`Python` · ★ 18</sub>
- [GGUI](https://github.com/Gabidal/GGUI) - C++ Structured Terminal User Interface. 🐧/🪟. <sub>`C++` · ★ 9</sub>
- [raku-wordle](https://github.com/m-dango/raku-wordle) - Wordle in Raku. <sub>`Raku` · ★ 2</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- AI -->
## AI

> Terminal AI assistants, LLM clients, prompt interfaces, and local AI runner dashboards. <sub>[browse on awesometui.com →](https://awesometui.com/ai)</sub>

### AI Coding Agents

_Autonomous coding assistants, terminal pair programmers, and AI code generation agents._

- [opencode](https://github.com/anomalyco/opencode) - The open source coding agent. <sub>`TypeScript` · ★ 202k</sub>
- [claude-code](https://github.com/anthropics/claude-code) - Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows… <sub>`Python` · ★ 143k</sub>
- [gemini-cli](https://github.com/google-gemini/gemini-cli) - An open-source AI agent that brings the power of Gemini directly into your terminal. <sub>`TypeScript` · ★ 107k</sub>
- [aider](https://github.com/Aider-AI/aider) - Aider is AI pair programming in your terminal. <sub>`Python` · ★ 49k</sub>
- [herdr](https://github.com/herdrdev/herdr) - The runtime your coding agents live on. <sub>`Rust` · ★ 33k · [deep dive](https://awesometui.com/herdr)</sub>
- [Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) - Real-time Claude Code usage monitor with predictions and warnings. <sub>`Python` · ★ 8.7k</sub>
- [Backlog.md](https://github.com/MrLesk/Backlog.md) - Backlog.md - A tool for managing project collaboration between humans and AI Agents in a git ecosystem. <sub>`TypeScript` · ★ 6.6k</sub>
- [mistral-vibe](https://github.com/mistralai/mistral-vibe) - Minimal CLI coding agent by Mistral. <sub>`Python` · ★ 4.9k</sub>
- [gonzo](https://github.com/control-theory/gonzo) - Gonzo! The Go based TUI log analysis tool. <sub>`Go` · ★ 2.8k</sub>
- [ralph-tui](https://github.com/subsy/ralph-tui) - Terminal UI for orchestrating AI coding agents to work through task lists autonomously. <sub>`TypeScript` · ★ 2.4k</sub>
- [pixtuoid](https://github.com/IvanWng97/pixtuoid) - Terminal pixel-art office for AI coding agents. <sub>`Rust` · ★ 460</sub>
- [toktop](https://github.com/htin1/toktop) - Llm usage monitor in terminal. <sub>`Rust` · ★ 172</sub>
- [tmux-workbench](https://github.com/LeON-Nie-code/tmux-workbench) - Workspace memory for SSH, tmux, and AI coding agents. <sub>`Rust` · ★ 28</sub>
- [aic](https://github.com/reyamira/aic) - CLI to fetch the latest changelogs for AI coding assistants — Claude Code, Codex, OpenCode, Gemini CLI, Openclaw, and a few more. <sub>`Go` · ★ 26</sub>
- [ccsessions](https://github.com/miskiewiczm/ccsessions) - Terminal UI for browsing, previewing, resuming and managing Claude Code sessions. <sub>`Python` · ★ 9</sub>
- [kuroko](https://github.com/ysmb-wtsg/kuroko) - A terminal home base for the AI agent era. Kuroko stands between you and the code. <sub>`Rust` · ★ 2 · [deep dive](https://awesometui.com/kuroko)</sub>

### More AI

- [ollama](https://github.com/ollama/ollama) - Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. <sub>`Go` · ★ 180k</sub>
- [codex](https://github.com/openai/codex) - Lightweight coding agent that runs in your terminal. <sub>`Rust` · ★ 120k</sub>
- [llmfit](https://github.com/AlexsJones/llmfit) - Hundreds of models & providers. One command to find what runs on your hardware. <sub>`Rust` · ★ 35k · [deep dive](https://awesometui.com/llmfit)</sub>
- [crush](https://github.com/charmbracelet/crush) - Glamourous agentic coding for all 💘. <sub>`Go` · ★ 28k</sub>
- [aichat](https://github.com/sigoden/aichat) - All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI Tools & Agents, with access to OpenAI, Claude, Gemini, Ollama, Groq, and more. <sub>`Rust` · ★ 10k</sub>
- [x-cmd](https://github.com/x-cmd/x-cmd) - Shell Superpowers for AI Agents. <sub>`Awk` · ★ 4.6k</sub>
- [claude_codex_bridge](https://github.com/SeemSeam/claude_codex_bridge) - Visible multi-agent CLI workspace for mixing Codex, Claude, Gemini, Kimi, Qwen, Cursor, Copilot, Pi, OpenCode, and other AI coding agents. <sub>`Python` · ★ 3.5k</sub>
- [toad](https://github.com/batrachianai/toad) - A unified interface for AI in your terminal. <sub>`Python` · ★ 3.4k</sub>
- [tgpt](https://github.com/aandrew-me/tgpt) - AI Chatbots in terminal for free. <sub>`Go` · ★ 3.3k</sub>
- [elia](https://github.com/darrenburns/elia) - A snappy, keyboard-centric terminal user interface for interacting with large language models. Chat with ChatGPT, Claude, Llama 3, Phi 3, Mistral, Gemma and more. <sub>`Python` · ★ 2.5k</sub>
- [tweakcc](https://github.com/Piebald-AI/tweakcc) - Customize Claude Code's system prompts, create custom toolsets, input pattern highlighters, themes/thinking verbs/spinners, customize input box & user message styling, support AGENTS.md, unlock… <sub>`TypeScript` · ★ 2.5k</sub>
- [oterm](https://github.com/ggozad/oterm) - The terminal client for LLMs. <sub>`Python` · ★ 2.4k</sub>
- [yai](https://github.com/ekkinox/yai) - Your AI powered terminal assistant. <sub>`Go` · ★ 869</sub>
- [VTCode](https://github.com/vinhnx/VTCode) - VT Code is an open-source Rust terminal coding agent. <sub>`Rust` · ★ 826</sub>
- [oatmeal](https://github.com/dustinblackman/oatmeal) - Terminal UI to chat with large language models (LLM) using different model backends, and integrations with your favourite editors! <sub>`Rust` · ★ 772</sub>
- [tenere](https://github.com/pythops/tenere) - 🤖 TUI for LLMs. <sub>`Rust` · ★ 681</sub>
- [agentty](https://github.com/1ay1/agentty) - AI pair programming in your terminal — one static binary, sub-ms startup, any model. <sub>`C++` · ★ 597 · [deep dive](https://awesometui.com/agentty)</sub>
- [smartcat](https://github.com/efugier/smartcat) - Putting a brain behind cat🐈‍⬛ Integrating language models in the Unix commands ecosystem through text streams. <sub>`Rust` · ★ 568</sub>
- [models](https://github.com/reyamira/models) - TUI and CLI for browsing models.dev, benchmarks, coding agents, and statuses for AI providers. <sub>`Rust` · ★ 503</sub>
- [parllama](https://github.com/paulrobello/parllama) - TUI for Ollama and other LLM providers. <sub>`Python` · ★ 487</sub>
- [ostt](https://github.com/kristoferlund/ostt) - Open source voice-to-text for the terminal. Record from a hotkey, transcribe with any provider, pipe to AI or shell commands. <sub>`Rust` · ★ 292 · [deep dive](https://awesometui.com/ostt)</sub>
- [phi](https://github.com/pulseaiclub/phi) - A coding Agent from pi. ∞ providers, sub-agents, hashline edits, and a permission gate. <sub>`Go` · ★ 198</sub>
- [amux](https://github.com/andyrewlee/amux) - TUI for easily running parallel coding agents. <sub>`Go` · ★ 153</sub>
- [fast-resume](https://github.com/angristan/fast-resume) - Find that one coding agent session you want to get back to! <sub>`Rust` · ★ 153</sub>
- [quorum-cli](https://github.com/Detrol/quorum-cli) - Multi-agent AI discussion CLI for structured debates between LLMs. <sub>`Python` · ★ 115</sub>
- [kagan](https://github.com/kagan-sh/kagan) - The Orchestration Layer for AI Coding Agents. <sub>`Python` · ★ 101</sub>
- [gorae](https://github.com/Han8931/gorae) - A terminal-first knowledge base for PDFs, EPUBs, and Markdown with a built-in AI assistant. <sub>`Go` · ★ 94</sub>
- [Martty](https://github.com/openma-ai/Martty) - Deepseek-harness-tui（dsh-tui） before. Self-Improvement TUI Plugin of DeepSeek Harness. Everything Here Is Also A Plugin. Martty is a ACP client. <sub>`Rust` · ★ 65 · [deep dive](https://awesometui.com/martty)</sub>
- [homebench](https://github.com/david-g-3654/homebench) - Benchmark your local LLMs: speed, memory, and quality, in one command. TUI leaderboard for Ollama, LM Studio, llama.cpp, and vLLM. <sub>`Python` · ★ 55 · [deep dive](https://awesometui.com/homebench)</sub>
- [moltbook-tui](https://github.com/terminaltrove/moltbook-tui) - A TUI client for Moltbook, the social network for AI Agents. <sub>`Rust` · ★ 50</sub>
- [SynapsCLI](https://github.com/HaseebKhalid1507/SynapsCLI) - A terminal-native AI agent runtime built in Rust. Interactive chat, parallel agent orchestration, and autonomous supervision. <sub>`Rust` · ★ 40</sub>
- [oolong](https://github.com/dicedatalore/oolong) - 🍵 Simple ephemeral chat in your terminal. <sub>`Go` · ★ 18</sub>
- [turbostream](https://github.com/turboline-ai/turbostream) - Analyze your realtime streaming data with LLM. <sub>`Go` · ★ 17</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- Operate -->
## DevOps

> Docker, Kubernetes, cloud, CI/CD, deployment, and SRE workflows. <sub>[browse on awesometui.com →](https://awesometui.com/devops)</sub>

### Docker & Containers

_Docker dashboards, container managers, Podman TUIs, and image inspection tools._

- [act](https://github.com/nektos/act) - Run your GitHub Actions locally 🚀. <sub>`Go` · ★ 72k</sub>
- [dive](https://github.com/wagoodman/dive) - A tool for exploring each layer in a docker image. <sub>`Go` · ★ 55k</sub>
- [lazydocker](https://github.com/jesseduffield/lazydocker) - The lazier way to manage everything docker. <sub>`Go` · ★ 53k · [deep dive](https://awesometui.com/lazydocker)</sub>
- [ctop](https://github.com/bcicen/ctop) - Top-like interface for container metrics. <sub>`Go` · ★ 18k</sub>
- [dockly](https://github.com/lirantal/dockly) - Immersive terminal interface for managing docker containers and services. <sub>`JavaScript` · ★ 4k</sub>
- [dry](https://github.com/moncho/dry) - Dry - A Docker manager for the terminal. <sub>`Go` · ★ 3.3k</sub>
- [process-compose](https://github.com/F1bonacc1/process-compose) - Process Compose is a simple and flexible scheduler and orchestrator to manage non-containerized applications. <sub>`Go` · ★ 2.7k</sub>
- [oxker](https://github.com/mrjackwills/oxker) - A simple tui to view & control docker containers. <sub>`Rust` · ★ 1.8k</sub>
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - TUI for viewing logs from journald, auditd, file system, Docker and Podman containers, Compose stacks and Kubernetes pods with support for log highlighting and several filtering modes. <sub>`Go` · ★ 1.4k</sub>
- [ducker](https://github.com/robertpsoane/ducker) - A slightly quackers Docker TUI based on k9s 🦆. <sub>`Rust` · ★ 920</sub>
- [purple](https://github.com/erickochen/purple) - Free, open-source terminal SSH manager and SSH config editor in Rust for macOS and Linux that keeps ~/.ssh/config in sync with 18 cloud providers, monitors live SSH tunnels and manages Docker and… <sub>`Rust` · ★ 660</sub>
- [lazycontainer](https://github.com/andreybleme/lazycontainer) - Fancy terminal UI for Apple Containers. <sub>`Go` · ★ 370</sub>
- [DockMate](https://github.com/shubh-io/DockMate) - Dockmate: The open-source Docker TUI & Podman manager for terminal productivity. A fast, lightweight alternative to lazydocker built in Go. <sub>`Go` · ★ 337</sub>
- [dcv](https://github.com/tokuhirom/dcv) - TUI viewer for docker-compose. <sub>`Go` · ★ 253</sub>
- [Pocker](https://github.com/pommee/Pocker) - ~ TUI tool for docker. <sub>`Python` · ★ 189</sub>
- [cruise](https://github.com/cruise-org/cruise) - Cruise is a powerful, intuitive, and fully-featured TUI (Terminal User Interface) for managing containers. <sub>`Go` · ★ 183</sub>
- [d4s](https://github.com/jr-k/d4s) - 🍊 A fast, keyboard-driven terminal UI to manage Docker containers, Compose stacks, and Swarm services with the ergonomics of K9s. <sub>`Go` · ★ 125</sub>
- [layerx](https://github.com/deveshctl/layerx) - LayerX Image Inspector - open-source terminal explorer for container images. Browse layers, spot wasted bytes, and gate CI on image efficiency. <sub>`Go` · ★ 119</sub>
- [sou](https://github.com/knqyf263/sou) - A tool for exploring files in container image layers. <sub>`Go` · ★ 86</sub>
- [docksurf](https://github.com/praneeth-etta/docksurf) - Live, keyboard-driven terminal UI for Docker. Compose-aware, real-time stats, zero polling. Manage containers, images, volumes, and networks without leaving the terminal. <sub>`Python` · ★ 41</sub>
- [dprs](https://github.com/durableprogramming/dprs) - A terminal user interface for managing Docker containers and monitoring their logs. <sub>`Rust` · ★ 40</sub>
- [dtop](https://github.com/StakeSquid/dtop) - A high-performance terminal UI for Docker container management with real-time monitoring, advanced log viewing, and comprehensive container operations. <sub>`Python` · ★ 38</sub>
- [gocker](https://github.com/micoli/gocker) - Text User Interface on docker. <sub>`Python` · ★ 34</sub>
- [docker-dash](https://github.com/GustavoCaso/docker-dash) - A full TUI managemnet tool for containers 🏗️. <sub>`Go` · ★ 22</sub>

### Kubernetes

_Cluster management, pod inspection, log tailing, and resource view TUIs._

- [k9s](https://github.com/derailed/k9s) - 🐶 Kubernetes CLI To Manage Your Clusters In Style! <sub>`Go` · ★ 34k</sub>
- [talos](https://github.com/siderolabs/talos) - Talos Linux is a modern Linux distribution built for Kubernetes. <sub>`Go` · ★ 11k</sub>
- [kdash](https://github.com/kdash-rs/kdash) - A simple and fast dashboard for Kubernetes. <sub>`Rust` · ★ 2.5k</sub>
- [eks-node-viewer](https://github.com/awslabs/eks-node-viewer) - EKS Node Viewer. <sub>`Go` · ★ 1.6k</sub>
- [kftray](https://github.com/hcavarsan/kftray) - Kubectl port-forward manager and reverse tunnel (ngrok-like) for exposing local services publicly, with TLS termination, HTTP traffic inspection, UDP forwarding, multi-hop proxy routing through k8s… <sub>`Rust` · ★ 1.6k</sub>
- [kubecolor](https://github.com/kubecolor/kubecolor) - Colorize your kubectl output. <sub>`Go` · ★ 1.4k</sub>
- [ktop](https://github.com/vladimirvivien/ktop) - A top-like tool for your Kubernetes cluster metrics. <sub>`Go` · ★ 1.1k</sub>
- [e1s](https://github.com/keidarcy/e1s) - E1S - Easily Manage AWS ECS Resources in Terminal(~k9s for ECS) 🐱. <sub>`Go` · ★ 921</sub>
- [lfk](https://github.com/janosmiko/lfk) - ⚡ LFK is a lightning-fast, keyboard-focused, yazi-inspired terminal user interface for navigating and managing Kubernetes clusters. <sub>`Go` · ★ 826 · [deep dive](https://awesometui.com/lfk)</sub>
- [ku](https://github.com/bjarneo/ku) - A fast, keyboard-driven Kubernetes TUI. Browse any resource, edit objects, follow logs, and shell into pods. <sub>`Go` · ★ 535</sub>
- [kl](https://github.com/robinovitch61/kl) - An interactive Kubernetes log viewer for your terminal. <sub>`Go` · ★ 416</sub>
- [kubetui](https://github.com/sarub0b0/kubetui) - An intuitive Terminal User Interface (TUI) tool for real-time monitoring and exploration of Kubernetes resources. <sub>`Rust` · ★ 393</sub>
- [talos-pilot](https://github.com/Handfish/talos-pilot) - Talos TUI for real-time node monitoring, log streaming, etcd health, and diagnostics. <sub>`Rust` · ★ 243</sub>
- [kat](https://github.com/MacroPower/kat) - TUI and rule-based rendering engine for Kubernetes manifests. <sub>`Go` · ★ 166</sub>
- [b4n](https://github.com/fioletoven/b4n) - Terminal user interface (TUI) for Kubernetes API written in Rust. <sub>`Rust` · ★ 103</sub>
- [k8s-tui](https://github.com/otavioCosta2110/k8s-tui) - Terminal-based Kubernetes resource manager with multi-cluster support. <sub>`Go` · ★ 12</sub>

### More DevOps

- [witr](https://github.com/pranshuparmar/witr) - Why is this running? Trace any process, port, container, or file back to what started it - CLI + TUI. <sub>`Go` · ★ 22k · [deep dive](https://awesometui.com/witr)</sub>
- [wrkflw](https://github.com/bahdotsh/wrkflw) - Validate and Run GitHub Actions locally. <sub>`Rust` · ★ 3.3k</sub>
- [taws](https://github.com/huseyinbabal/taws) - Terminal UI for AWS (taws) - A terminal-based AWS resource viewer and manager. <sub>`Rust` · ★ 2.2k</sub>
- [runme](https://github.com/runmedev/runme) - DevOps Notebooks Built with Markdown. <sub>`Go` · ★ 2.2k</sub>
- [cronboard](https://github.com/antoniorodr/cronboard) - A terminal-based dashboard for managing cron jobs locally and on servers. <sub>`Python` · ★ 1.4k</sub>
- [dtop](https://github.com/amir20/dtop) - Terminal dashboard for Docker monitoring across multiple hosts with Dozzle integration. <sub>`Rust` · ★ 1.4k</sub>
- [terraform-tui](https://github.com/idoavrah/terraform-tui) - Terraform textual UI. <sub>`Python` · ★ 1.3k</sub>
- [podman-tui](https://github.com/containers/podman-tui) - Podman Terminal UI. <sub>`Go` · ★ 1.2k</sub>
- [sen](https://github.com/TomasTomecek/sen) - Terminal User Interface for containers. <sub>`Python` · ★ 1.1k</sub>
- [kaskade](https://github.com/sauljabin/kaskade) - Kaskade is a text user interface for kafka, which allows you to interact and consume topics from your terminal in style! <sub>`Python` · ★ 1k</sub>
- [amazon-ec2-instance-selector](https://github.com/aws/amazon-ec2-instance-selector) - A CLI tool and go library which recommends instance types based on resource criteria like vcpus and memory. <sub>`Go` · ★ 933</sub>
- [stu](https://github.com/lusingander/stu) - TUI explorer application for Amazon S3 (AWS S3) 🪣. <sub>`Rust` · ★ 907</sub>
- [pug](https://github.com/leg100/pug) - Drive terraform at terminal velocity. <sub>`Go` · ★ 695</sub>
- [damon](https://github.com/hashicorp/damon) - A terminal UI (TUI) for HashiCorp Nomad. <sub>`Go` · ★ 486</sub>
- [gama](https://github.com/termkit/gama) - Manage your GitHub Actions from Terminal with great UI 🧪. <sub>`Go` · ★ 483</sub>
- [wander](https://github.com/robinovitch61/wander) - A terminal app/TUI for HashiCorp Nomad. <sub>`Go` · ★ 480</sub>
- [argonaut](https://github.com/darksworm/argonaut) - Keyboard-first terminal UI for Argo CD. Browse apps, scope by clusters/namespaces/projects, stream live resource status, trigger syncs, inspect diffs, and roll back safely — all without leaving your… <sub>`Go` · ★ 442</sub>
- [tori-cli](https://github.com/thobiasn/tori-cli) - Docker server monitoring without the stack. Metrics, logs, and alerts from your terminal. Single binary, zero exposed ports, SSH-only. <sub>`Go` · ★ 310</sub>
- [flowrs](https://github.com/jvanbuel/flowrs) - Flowrs is a TUI application for Apache Airflow that allows you to monitor, inspect and trigger Airflow DAGs from the comforts of your terminal. <sub>`Rust` · ★ 172</sub>
- [htui](https://github.com/PierreKieffer/htui) - Heroku Terminal User Interface. <sub>`Go` · ★ 123</sub>
- [ddqa](https://github.com/DataDog/ddqa) - Datadog's QA manager for releases of GitHub repositories. <sub>`Python` · ★ 109</sub>
- [ddv](https://github.com/lusingander/ddv) - Terminal DynamoDB Viewer ⚡️. <sub>`Rust` · ★ 102</sub>
- [Yellow-Olive](https://github.com/Anubhav9/Yellow-Olive) - An experimental attempt at gamifying Kubernetes, inspired by Pokémon, designed to re-ignite nostalgia while making Kubernetes concepts more engaging and approachable. <sub>`Python` · ★ 95</sub>
- [sshelf](https://github.com/max-rh/sshelf) - Fast terminal UI for your SSH hosts: fuzzy-search and connect in two keystrokes, dual-pane SFTP file transfer, and background port forwarding. <sub>`Rust` · ★ 65</sub>
- [azdo](https://github.com/Elpulgo/azdo) - A TUI for working with Azure DevOps/GitHub in ze terminal. <sub>`Go` · ★ 53 · [deep dive](https://awesometui.com/azdo)</sub>
- [xpdig](https://github.com/brunoluiz/xpdig) - 🧰 Dig into Crossplane traces via TUI (a là k9s) <sub>`Go` · ★ 46</sub>
- [tfjournal](https://github.com/Owloops/tfjournal) - Record Terraform runs with git context, timing, and resource events. <sub>`Go` · ★ 43</sub>
- [g1c](https://github.com/nlamirault/g1c) - A terminal-based UI application for managing Google Cloud instances, inspired by k9s for Kubernetes and e1s for ECS. <sub>`Rust` · ★ 41</sub>
- [trek](https://github.com/franckverrot/trek) - Trek is a CLI/ncurses explorer for HashiCorp Nomad clusters. <sub>`Go` · ★ 32</sub>
- [lazytilt](https://github.com/tdi/lazytilt) - Terminal UI for Tilt.dev, inspired by lazygit. <sub>`Go` · ★ 24</sub>
- [sacha](https://github.com/Sachamama/sacha) - Sacha is a keyboard-first AWS TUI inspired by classic two-pane file managers. Browse, search, and manage CloudWatch Logs, S3, DynamoDB, and Lambda from your terminal. <sub>`Go` · ★ 22</sub>
- [fli](https://github.com/fractalops/fli) - ⚙️ FLI is a powerful command-line tool that simplifies AWS VPC Flow Logs analysis with intuitive commands, smart filtering, and automatic annotations, turning raw network data into actionable… <sub>`Go` · ★ 21</sub>
- [e2c](https://github.com/nlamirault/e2c) - A terminal-based UI application for managing AWS EC2 instances. <sub>`Go` · ★ 20</sub>
- [az-tui](https://github.com/IAL32/az-tui) - A terminal UI for managing Azure Container Apps -- browse apps, view details, inspect revisions, and exec or tail logs, all from your terminal. <sub>`Go` · ★ 18</sub>
- [ecscope](https://github.com/dhth/ecscope) - Monitor AWS ECS resources from the terminal. <sub>`Rust` · ★ 14</sub>
- [s3duck-tui](https://github.com/nexusriot/s3duck-tui) - Opensource TUI S3 client. <sub>`Go` · ★ 9</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Monitoring

> System monitors, observability dashboards, metrics, and resource views. <sub>[browse on awesometui.com →](https://awesometui.com/monitoring)</sub>

### System Monitors

_Top-like resource monitors, CPU/memory graphs, and process managers._

- [btop](https://github.com/aristocratos/btop) - A monitor of resources. <sub>`C++` · ★ 34k · [deep dive](https://awesometui.com/btop)</sub>
- [glances](https://github.com/nicolargo/glances) - Glances an Eye on your system. A top/htop alternative for GNU/Linux, BSD, macOS and Windows operating systems. <sub>`Python` · ★ 33k</sub>
- [sampler](https://github.com/sqshq/sampler) - Tool for shell commands execution, visualization and alerting. Configured with a simple YAML file. <sub>`Go` · ★ 15k</sub>
- [bottom](https://github.com/ClementTsang/bottom) - Yet another cross-platform graphical process/system monitor. <sub>`Rust` · ★ 14k</sub>
- [gping](https://github.com/orf/gping) - Ping, but with a graph. <sub>`Rust` · ★ 13k</sub>
- [nvtop](https://github.com/Syllo/nvtop) - GPU & Accelerator process monitoring for AMD, Apple, Huawei, Intel, NVIDIA and Qualcomm. <sub>`C` · ★ 11k</sub>
- [gtop](https://github.com/aksakalli/gtop) - System monitoring dashboard for terminal. <sub>`JavaScript` · ★ 9.9k</sub>
- [sysdig](https://github.com/draios/sysdig) - Linux system exploration and troubleshooting tool with first class support for containers. <sub>`C++` · ★ 8.3k</sub>
- [nvitop](https://github.com/XuehaiPan/nvitop) - An interactive NVIDIA-GPU process viewer and beyond, the one-stop solution for GPU process management. <sub>`Python` · ★ 7.1k</sub>
- [procs](https://github.com/dalance/procs) - A modern replacement for ps written in Rust. <sub>`Rust` · ★ 6.1k</sub>
- [s-tui](https://github.com/amanusk/s-tui) - Terminal-based CPU stress and monitoring utility. <sub>`Python` · ★ 5.1k</sub>
- [vtop](https://github.com/MrRio/vtop) - Wow such top. So stats. More better than regular top. <sub>`JavaScript` · ★ 4.2k</sub>
- [gotop](https://github.com/xxxserxxx/gotop) - A terminal based graphical activity monitor inspired by gtop and vtop. <sub>`Go` · ★ 3.1k</sub>
- [zenith](https://github.com/bvaisvil/zenith) - Zenith - sort of like top or htop but with zoom-able charts, CPU, GPU, network, and disk usage. <sub>`Rust` · ★ 3k</sub>
- [kmon](https://github.com/orhun/kmon) - Linux Kernel Manager and Activity Monitor 🐧💻. <sub>`Rust` · ★ 2.9k</sub>
- [bpftop](https://github.com/jfernandez/bpftop) - Bpftop provides a dynamic real-time view of running eBPF programs. It displays the average runtime, events per second, and estimated total CPU % for each program. <sub>`C` · ★ 2.7k</sub>
- [below](https://github.com/facebookincubator/below) - A time traveling resource monitor for modern Linux systems. <sub>`Rust` · ★ 2.5k</sub>
- [CoreFreq](https://github.com/cyring/CoreFreq) - CoreFreq : CPU monitoring and tuning software designed for the 64-bit processors. <sub>`C` · ★ 2.2k</sub>
- [tiptop](https://github.com/nschloe/tiptop) - Desktopcomputer: Command-line system monitoring. <sub>`Python` · ★ 2.1k</sub>
- [bmon](https://github.com/Jafaral/bmon) - Bandwidth monitor and rate estimator. <sub>`C` · ★ 1.4k</sub>
- [atop](https://github.com/Atoptool/atop) - System and process monitor for Linux. <sub>`C` · ★ 1.1k</sub>

### Log Viewers

_Log stream analyzers, tailers, formatters, and journald TUIs._

- [goaccess](https://github.com/allinurl/goaccess) - GoAccess is a real-time web log analyzer and interactive viewer that runs in a terminal in nix systems or through your browser. <sub>`C` · ★ 21k · [deep dive](https://awesometui.com/goaccess)</sub>
- [lnav](https://github.com/tstack/lnav) - Log file navigator. <sub>`C++` · ★ 11k</sub>
- [tailspin](https://github.com/bensadeh/tailspin) - 🌀 A log file highlighter. <sub>`Rust` · ★ 7.9k</sub>
- [gitlogue](https://github.com/unhappychoice/gitlogue) - A cinematic Git commit replay tool for the terminal, turning your Git history into a living, animated story. <sub>`Rust` · ★ 4.9k</sub>
- [toolong](https://github.com/Textualize/toolong) - A terminal application to view, tail, merge, and search log files (plus JSONL). <sub>`Python` · ★ 3.9k</sub>
- [nerdlog](https://github.com/dimonomid/nerdlog) - Nerdlog: fast, remote-first, multi-host TUI log viewer with timeline histogram and no central server. <sub>`Go` · ★ 1.6k</sub>
- [hwatch](https://github.com/blacknon/hwatch) - Hwatch: alternative watch command with history, diff view, JSONL logging, and change hooks. since 2018. <sub>`Rust` · ★ 1.1k</sub>
- [thokr](https://github.com/jrnxf/thokr) - ✨ sleek typing tui with visualized results and historical logging. <sub>`Rust` · ★ 600</sub>
- [fblog](https://github.com/brocode/fblog) - Small command-line JSON Log viewer. <sub>`Rust` · ★ 568</sub>
- [caps-log](https://github.com/NikolaDucak/caps-log) - A small TUI journaling tool. 📖. <sub>`C++` · ★ 394</sub>
- [logss](https://github.com/todoesverso/logss) - A simple cli for logs splitting. <sub>`Rust` · ★ 297</sub>
- [logmerger](https://github.com/ptmcg/logmerger) - TUI utility to view multiple log files with merged timeline. <sub>`Python` · ★ 261</sub>
- [tuistash](https://github.com/edmocosta/tuistash) - A Terminal User Interface for Logstash 🪵. <sub>`Rust` · ★ 109</sub>
- [Logria](https://github.com/ReagentX/Logria) - A powerful CLI tool that puts log aggregation at your fingertips. <sub>`Rust` · ★ 107</sub>
- [logshark](https://github.com/ugosan/logshark) - A command-line tool for debugging JSON logs, built in Go. Logshark integrates seamlessly with Beats and Logstash to provide real-time log analysis, featuring JSON formatting and event metrics. <sub>`Go` · ★ 40</sub>
- [logradar](https://github.com/nanook72/logradar) - A modern, colorful log analysis TUI built in Rust — pattern clustering, sparklines, fuzzy search, 8 themes. <sub>`Rust` · ★ 20</sub>
- [loglens-core](https://github.com/Caelrith/loglens-core) - The core engine for the LogLens tool. <sub>`Rust` · ★ 7</sub>
- [journal-tui](https://github.com/Prathamesh0901/journal-tui) - A terminal UI for tailing and filtering journald/systemd logs in real time, built with Go, Cobra, and Bubble Tea. <sub>`Go` · ★ 3</sub>

### More Monitoring

- [bandwhich](https://github.com/imsnif/bandwhich) - Terminal bandwidth utilization tool. <sub>`Rust` · ★ 12k</sub>
- [bashtop](https://github.com/aristocratos/bashtop) - Linux/OSX/FreeBSD resource monitor. <sub>`Shell` · ★ 11k</sub>
- [oryx](https://github.com/pythops/oryx) - 🕵️‍♂️ TUI for sniffing network traffic using eBPF on Linux. <sub>`Rust` · ★ 2.6k</sub>
- [macmon](https://github.com/vladkens/macmon) - 🦀🌡️ Real-time system monitor for Apple Silicon Macs (M1–M5). No sudo. TUI, JSON/Prometheus metrics server, and Rust library. <sub>`Rust` · ★ 1.9k</sub>
- [AdGuardian-Term](https://github.com/lissy93/AdGuardian-Term) - 🛡️ Terminal-based, real-time traffic monitoring and statistics for your AdGuard Home instance. <sub>`Rust` · ★ 1.6k</sub>
- [wavemon](https://github.com/uoaerg/wavemon) - Wavemon is an ncurses-based monitoring application for wireless network devices on Linux. <sub>`C` · ★ 1.2k</sub>
- [grafterm](https://github.com/slok/grafterm) - Metrics dashboards on terminal (a grafana inspired terminal version) <sub>`Go` · ★ 1.1k</sub>
- [updo](https://github.com/Owloops/updo) - Uptime monitoring CLI tool with alerting and advanced settings. <sub>`Go` · ★ 1.1k</sub>
- [sls-dev-tools](https://github.com/aleios-cloud/sls-dev-tools) - Dev Tools for the Serverless World - Issues, PRs and ⭐️welcome! <sub>`JavaScript` · ★ 870</sub>
- [austin-tui](https://github.com/P403n1x87/austin-tui) - The top-like text-based user interface for Austin. <sub>`Python` · ★ 665</sub>
- [ttop](https://github.com/inv2004/ttop) - System monitoring tool with historical data service, triggers and top-like TUI. <sub>`Nim` · ★ 396</sub>
- [nv-monitor](https://github.com/wentbackward/nv-monitor) - Lightweight nVidia telemetry and terminal system monitor - built for any architecture - Jetson, GB10, GB200, H100. <sub>`C` · ★ 316</sub>
- [NanoCore](https://github.com/AfaanBilal/NanoCore) - NanoCore 8-bit CPU emulator in Rust. <sub>`Rust` · ★ 293</sub>
- [dashbrew](https://github.com/rasjonell/dashbrew) - TUI dashboard builder that lets you visualize data from scripts and APIs right in your console. <sub>`Go` · ★ 270</sub>
- [neoss](https://github.com/PabloLec/neoss) - Heavycheckmark: User-friendly and detailed socket statistics with a Terminal UI. <sub>`TypeScript` · ★ 229</sub>
- [socktop](https://github.com/jasonwitty/socktop) - A TUI-first remote system monitor. <sub>`Rust` · ★ 188</sub>
- [erldash](https://github.com/sile/erldash) - A simple, terminal-based Erlang dashboard written in Rust. <sub>`Rust` · ★ 176</sub>
- [opcilloscope](https://github.com/SquareWaveSystems/opcilloscope) - Browse and monitor OPC UA servers from your terminal. Lightweight, cross-platform, keyboard and mouse friendly. <sub>`C#` · ★ 147</sub>
- [psnet](https://github.com/psmux/psnet) - A beautiful real-time TUI network monitor for Windows PowerShell — built in Rust. <sub>`Rust` · ★ 145</sub>
- [qmassa](https://github.com/ulissesf/qmassa) - Rust tools to monitor GPU stats on Linux. <sub>`Rust` · ★ 107</sub>
- [tegratop](https://github.com/pythops/tegratop) - 📊 A Comprehensive TUI monitoring tool for Nvidia jetson boards. <sub>`Rust` · ★ 85</sub>
- [Heimdall](https://github.com/kinncj/Heimdall) - Heimdall is a lightweight, cross-platform hardware monitoring system with a real-time terminal dashboard. <sub>`Go` · ★ 65</sub>
- [hwinfo-tui](https://github.com/JuanjoFuchs/hwinfo-tui) - A gping-inspired terminal visualization tool for monitoring real-time hardware sensor data from HWInfo. <sub>`Python` · ★ 63</sub>
- [tmd-top](https://github.com/CDWEN0526/tmd-top) - Real-time monitoring of Linux process network traffic, including the client IP, port, and transfer speed for each connection. <sub>`Python` · ★ 61</sub>
- [sot](https://github.com/anistark/sot) - Command-line System Obervation Tool. <sub>`Python` · ★ 58</sub>
- [lazycelery](https://github.com/Fguedes90/lazycelery) - Terminal UI for monitoring and managing Celery workers and tasks, inspired by lazydocker and lazygit. <sub>`Rust` · ★ 56</sub>
- [apachetop](https://github.com/tessus/apachetop) - Apachetop. <sub>`C++` · ★ 51</sub>
- [ServerHub](https://github.com/nickprotop/ServerHub) - A TUI server monitoring and management dashboard for Linux. Real-time metrics, logs, and remote control from your terminal. <sub>`C#` · ★ 42</sub>
- [xdna-top](https://github.com/boxwrench/xdna-top) - Unified terminal monitor for AMD Ryzen AI NPU (XDNA) + iGPU — live utilization for Strix Halo, where amd-smi comes up empty. <sub>`Python` · ★ 36</sub>
- [httpmonitor](https://github.com/ricoberger/httpmonitor) - A small TUI application to monitor a single or multiple targets. <sub>`Go` · ★ 31</sub>
- [bullmq-dash](https://github.com/quanghuynt14/bullmq-dash) - Terminal UI dashboard for BullMQ. <sub>`TypeScript` · ★ 18</sub>
- [cxgpu](https://github.com/nickprotop/cxgpu) - A multi-vendor GPU monitor for the terminal — NVIDIA and AMD — built on SharpConsoleUI. <sub>`C#` · ★ 12</sub>
- [resmon](https://github.com/pacrox/resmon) - Zero-dependency TUI resource monitor written in LuaJIT, compiled into a single self-contained ELF binary. <sub>`Lua` · ★ 0 · [deep dive](https://awesometui.com/resmon)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Network

> DNS, HTTP, VPN, packet tools, downloaders, and connectivity tools. <sub>[browse on awesometui.com →](https://awesometui.com/network)</sub>

### SSH & Remote Access

_SSH managers, multiplexer helpers, remote session tools, and connection launchers._

- [posting](https://github.com/darrenburns/posting) - The modern API client that lives in your terminal. <sub>`Python` · ★ 12k</sub>
- [term.everything](https://github.com/mmulet/term.everything) - Run any GUI app in the terminal❗. <sub>`Go` · ★ 8.1k</sub>
- [lazyssh](https://github.com/Adembc/lazyssh) - A terminal-based SSH manager inspired by lazydocker and k9s - Written in go. <sub>`Go` · ★ 3.9k</sub>
- [termscp](https://github.com/veeso/termscp) - 🖥 A feature rich terminal UI file transfer and explorer with support for SCP/SFTP/FTP/S3/SMB/WebDAV. <sub>`Rust` · ★ 3.1k</sub>
- [sshs](https://github.com/quantumsheep/sshs) - Terminal user interface for SSH. <sub>`Rust` · ★ 1.6k</sub>
- [lazyrsync](https://github.com/westpoint-io/lazyrsync) - 🦀 A friendly terminal UI for rsync, written in Rust. Reusable profiles, an honest dry-run diff, and live progress, even over SSH. <sub>`Rust` · ★ 732 · [deep dive](https://awesometui.com/lazyrsync)</sub>
- [omnyssh](https://github.com/timhartmann7/omnyssh) - A fast, keyboard-driven TUI for managing SSH connections, written in Rust. <sub>`Rust` · ★ 488</sub>
- [fztea](https://github.com/jon4hz/fztea) - 🐬🧋 Remote control your flipper from the local terminal or over SSH. <sub>`Go` · ★ 400</sub>
- [lssh](https://github.com/blacknon/lssh) - A terminal-native remote access suite for SSH, cloud inventories, provider-backed connectors, parallel commands, mux workspaces, file transfer, and monitoring. <sub>`Go` · ★ 326</sub>
- [filessh](https://github.com/JayanAXHF/filessh) - A fast and convenient TUI file browser for remote servers. <sub>`Rust` · ★ 229</sub>
- [ssh-list](https://github.com/akinoiro/ssh-list) - 🧑‍💻 SSH connection manager with a TUI interface. <sub>`Rust` · ★ 220</sub>
- [sshclick](https://github.com/karlot/sshclick) - SSH Config terminal manager based on Python and Click framework with Rich and Textual UI. <sub>`Python` · ★ 185</sub>
- [ssm](https://github.com/lfaoro/ssm) - A fast, keyboard-driven TUI that makes your existing ~/.ssh/config delightful to use at fleet scale. <sub>`Go` · ★ 112</sub>
- [sshoosh](https://github.com/puemos/sshoosh) - Tiny self-hosted SSH/TUI workspace chat for small teams and operators who want real-time collaboration over SSH. <sub>`Rust` · ★ 94</sub>
- [servonaut](https://github.com/zb-ss/servonaut) - Manage AWS, Hetzner, OVH, and custom servers from one TUI — with a built-in AI assistant and MCP server. <sub>`Python` · ★ 24</sub>
- [ssh-para](https://github.com/joknarf/ssh-para) - Parallel SSH jobs manager interactive CLI. <sub>`Python` · ★ 23</sub>

### More Network

- [oha](https://github.com/hatoo/oha) - Ohayou(おはよう), HTTP load generator, inspired by rakyll/hey with tui animation. <sub>`Rust` · ★ 11k</sub>
- [termshark](https://github.com/gcla/termshark) - A terminal UI for tshark, inspired by Wireshark. <sub>`Go` · ★ 10k</sub>
- [trippy](https://github.com/fujiapple852/trippy) - A network diagnostic tool. <sub>`Rust` · ★ 7.6k</sub>
- [dog](https://github.com/ogham/dog) - A command-line DNS client. <sub>`Rust` · ★ 6.7k</sub>
- [kyanos](https://github.com/hengyoush/kyanos) - Kyanos is a networking analysis tool using eBPF. It can visualize the time packets spend in the kernel, capture requests/responses, makes troubleshooting more efficient. <sub>`C` · ★ 5.1k</sub>
- [rustnet](https://github.com/domcyrus/rustnet) - Per-process network monitoring for your terminal with deep packet inspection. Cross-platform, sandboxed. <sub>`Rust` · ★ 5k</sub>
- [doggo](https://github.com/mr-karan/doggo) - Dog: Command-line DNS Client for Humans. Written in Golang. <sub>`Go` · ★ 4.4k</sub>
- [tproxy](https://github.com/kevwan/tproxy) - A cli tool to proxy and analyze TCP connections. <sub>`Go` · ★ 3.7k</sub>
- [nethogs](https://github.com/raboof/nethogs) - Linux 'net top' tool. <sub>`C++` · ★ 3.7k</sub>
- [snitch](https://github.com/karol-broda/snitch) - A prettier way to inspect network connections. <sub>`Go` · ★ 3.5k</sub>
- [mtr](https://github.com/traviscross/mtr) - Official repository for mtr, a network diagnostic tool. <sub>`C` · ★ 3.3k</sub>
- [tcpdump](https://github.com/the-tcpdump-group/tcpdump) - The TCPdump network dissector. <sub>`C` · ★ 3.2k</sub>
- [bluetui](https://github.com/pythops/bluetui) - 🛜 TUI for managing bluetooth on Linux. <sub>`Rust` · ★ 3k</sub>
- [impala](https://github.com/pythops/impala) - 🛜 TUI for managing wifi on Linux. <sub>`Rust` · ★ 2.8k</sub>
- [netwatch](https://github.com/matthart1983/netwatch) - Real-time network diagnostics in your terminal. One command, zero config, instant visibility. <sub>`Rust` · ★ 2.6k</sub>
- [whosthere](https://github.com/ramonvermeulen/whosthere) - Local Area Network discovery tool with an interactive Terminal User Interface (TUI) written in Go. Discover, explore, and understand your LAN in an intuitive way. Knock Knock.. who's there? 🚪. <sub>`Go` · ★ 2.4k</sub>
- [NBping](https://github.com/hanshuaikang/NBping) - 🏎 Nping mean NB Ping, A Ping Tool in Rust with Real-Time Data and Visualizations. <sub>`Rust` · ★ 2.2k</sub>
- [netscanner](https://github.com/Chleba/netscanner) - Terminal Network scanner & diagnostic tool with modern TUI. <sub>`Rust` · ★ 1.8k</sub>
- [ttl](https://github.com/lance0/ttl) - Fast, modern traceroute with real-time TUI, per-hop stats, ASN/geo lookup, ECMP detection, and MPLS label parsing. A better mtr. <sub>`Rust` · ★ 1.4k</sub>
- [amfora](https://github.com/makew0rld/amfora) - A fancy terminal browser for the Gemini protocol. <sub>`Go` · ★ 1.4k</sub>
- [tcping](https://github.com/pouriyajamshidi/tcping) - Ping TCP ports using tcping. Inspired by Linux's ping utility. Written in Go. <sub>`Go` · ★ 1.3k</sub>
- [dstp](https://github.com/ycd/dstp) - 🧪 Run common networking tests against any site. <sub>`Go` · ★ 1.3k</sub>
- [quien](https://github.com/retlehs/quien) - A better whois and domain intelligence toolkit. <sub>`Go` · ★ 1.3k</sub>
- [dnsglobe](https://github.com/514-labs/dnsglobe) - Global DNS propagation checker TUI — watch a DNS record propagate across 34 public resolvers worldwide, on a world map in your terminal. <sub>`Rust` · ★ 1.1k</sub>
- [cloudflare-speed-cli](https://github.com/kavehtehrani/cloudflare-speed-cli) - CLI for internet speed test via cloudflare. <sub>`Rust` · ★ 1k</sub>
- [godap](https://github.com/Macmod/godap) - A complete terminal user interface (TUI) for LDAP. <sub>`Go` · ★ 974</sub>
- [mqttui](https://github.com/EdJoPaTo/mqttui) - Subscribe to a MQTT topic or publish something quickly from the terminal. <sub>`Rust` · ★ 721</sub>
- [vortix](https://github.com/Harry-kp/vortix) - Terminal UI for WireGuard and OpenVPN with real-time telemetry and leak guarding. <sub>`Rust` · ★ 643</sub>
- [clidle](https://github.com/ajeetdsouza/clidle) - Play Wordle over SSH. <sub>`Go` · ★ 633</sub>
- [pingtop](https://github.com/laixintao/pingtop) - 🏓Ping multiple servers and show results in a top-like terminal UI. <sub>`Python` · ★ 536</sub>
- [xfr](https://github.com/lance0/xfr) - A modern iperf3 alternative with a live TUI, multi-client server, and QUIC support. Built in Rust. <sub>`Rust` · ★ 533</sub>
- [slurm](https://github.com/mattthias/slurm) - Yet another network load monitor. <sub>`C` · ★ 425</sub>
- [flow](https://github.com/programmersd21/flow) - See ur network breathe. <sub>`Go` · ★ 415</sub>
- [dug](https://github.com/unfrl/dug) - A global DNS propagation checker that gives pretty output. Written in dotnet core. <sub>`C#` · ★ 371</sub>
- [netshow](https://github.com/taylorwilsdon/netshow) - Lightweight, performant interactive network connection monitor with friendly service names. <sub>`Python` · ★ 364</sub>
- [dnspyre](https://github.com/Tantalor93/dnspyre) - CLI tool for a high QPS DNS benchmark. <sub>`Go` · ★ 327</sub>
- [wifitui](https://github.com/shazow/wifitui) - Fast featureful friendly wifi terminal UI. 🛜✨. <sub>`Go` · ★ 327</sub>
- [network-doctor](https://github.com/heymaikol/network-doctor) - Network Doctor is a cross-platform network troubleshooting TUI that turns interface, DNS, TCP, TLS, HTTP, proxy, and path-MTU checks into one plain-English diagnosis. <sub>`Go` · ★ 308</sub>
- [netop](https://github.com/ZingerLittleBee/netop) - Network Top -- Help you monitor network traffic with bpf. <sub>`Rust` · ★ 268</sub>
- [unifly](https://github.com/hyperb1iss/unifly) - 🌐 Elegant UniFi network management CLI & TUI - for humans and agents. <sub>`Rust` · ★ 249</sub>
- [cidr](https://github.com/bschaatsbergen/cidr) - Simplifies IPv4/IPv6 CIDR network prefix management with counting, overlap checking, explanation, and subdivision. <sub>`Go` · ★ 242</sub>
- [lsoff](https://github.com/yutat23/lsoff) - CLI / TUI that lists listening TCP/UDP ports. <sub>`Go` · ★ 234 · [deep dive](https://awesometui.com/lsoff)</sub>
- [phetch](https://github.com/xvxx/phetch) - 🐭 quick lil gopher client for your terminal. <sub>`Rust` · ★ 197</sub>
- [wifui](https://github.com/sohamw03/wifui) - A lightweight, keyboard-driven Terminal User Interface (TUI) for managing Wi-Fi connections on Windows/Linux. <sub>`Rust` · ★ 148</sub>
- [ibtop](https://github.com/JannikSt/ibtop) - Real-time terminal monitor for InfiniBand networks - htop for high-speed interconnects. <sub>`Rust` · ★ 142</sub>
- [servitor](https://github.com/BentonEdmondson/servitor) - A command-line Fediverse client that doesn’t require a server. <sub>`Go` · ★ 83</sub>
- [ls-horizons](https://github.com/litescript/ls-horizons) - Terminal UI for visualizing NASA's Deep Space Network in real-time. <sub>`Go` · ★ 81</sub>
- [pvw](https://github.com/allyring/pvw) - A port viewer TUI made with BubbleTea in Go. <sub>`Go` · ★ 78</sub>
- [mdns-scanner](https://github.com/CramBL/mdns-scanner) - Scan a network and create a list of IPs and associated hostnames, including mDNS hostnames and other aliases. <sub>`Rust` · ★ 72</sub>
- [csope](https://github.com/agvxov/csope) - C source code browser. Fork of Cscope version 15.9, with various improvements. <sub>`C` · ★ 71</sub>
- [linktui](https://github.com/stinmark/linktui) - Tui based wifi, bluetooth and vpn manager for linux. <sub>`Go` · ★ 70</sub>
- [ereandel](https://github.com/blmayer/ereandel) - A Gemini web browser using shell script. <sub>`Shell` · ★ 68</sub>
- [wakey](https://github.com/jonathanruiz/wakey) - A TUI built for managing and waking your devices using Wake-on-LAN. <sub>`Go` · ★ 60</sub>
- [cntui](https://github.com/fipso/cntui) - Replay chrome requests from your terminal using curl. <sub>`Go` · ★ 41</sub>
- [Fallegji](https://github.com/AshLink95/Fallegji) - TUI P2P group chat app, written in Rust, bound to LAN, VPN or onion network. <sub>`Rust` · ★ 26</sub>
- [rogallo](https://github.com/davep/rogallo) - A terminal-based client for the small web. <sub>`Python` · ★ 19</sub>
- [portato](https://github.com/portuber/portato) - SSH port-forwarding manager with a TUI — toggle local, remote and SOCKS5 tunnels from one screen. Single Go binary, background daemon, autostart. <sub>`Go` · ★ 18</sub>
- [gust](https://github.com/Tsunami43/gust) - ⚡ Fast, dependency-free CLI to test internet speed and show your public IP — animated terminal UI, plain-text & JSON output. <sub>`Go` · ★ 6</sub>
- [lsoff-rs](https://github.com/vyrti/lsoff-rs) - Cli tool to find who use your ports (crossplatform), lsoff fork in Rust. <sub>`Rust` · ★ 1 · [deep dive](https://awesometui.com/lsoff-rs)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## System

> OS tools, process managers, hardware utilities, and admin tools. <sub>[browse on awesometui.com →](https://awesometui.com/system)</sub>

### Package Managers

_Package search, updater interfaces, brew/apt/pacman TUIs, and dependency managers._

- [zerobrew](https://github.com/lucasgelfond/zerobrew) - A 5-20x faster experimental Homebrew alternative. <sub>`Rust` · ★ 7.5k</sub>
- [topgrade](https://github.com/topgrade-rs/topgrade) - Upgrade all the things. <sub>`Rust` · ★ 4.4k</sub>
- [lazynpm](https://github.com/jesseduffield/lazynpm) - Terminal UI for npm. <sub>`Go` · ★ 859</sub>
- [taproom](https://github.com/hzqtc/taproom) - An interactive TUI for Homebrew. <sub>`Go` · ★ 719</sub>
- [pacseek](https://github.com/moson-mo/pacseek) - A terminal user interface for searching and installing Arch Linux packages. <sub>`Go` · ★ 654</sub>
- [bold-brew](https://github.com/Valkyrie00/bold-brew) - Bold Brew (bbrew) - A Homebrew TUI Manager. <sub>`Go` · ★ 433</sub>
- [aptui](https://github.com/mexirica/aptui) - TUI package manager for APT-based Linux distributions. <sub>`Go` · ★ 414</sub>
- [depsguard](https://github.com/arnica/depsguard) - Harden your package manager configs against supply chain attacks. <sub>`Rust` · ★ 382</sub>
- [stew](https://github.com/marwanhawari/stew) - 🥘 An independent package manager for compiled binaries. <sub>`Go` · ★ 353</sub>
- [pkgtop](https://github.com/orhun/pkgtop) - Interactive package manager and resource monitor designed for the GNU/Linux. <sub>`Go` · ★ 346</sub>
- [Pacsea](https://github.com/Firstp1ck/Pacsea) - Fast TUI for searching, inspecting, and queueing pacman/AUR packages. <sub>`Rust` · ★ 294</sub>
- [cargo-seek](https://github.com/tareqimbasher/cargo-seek) - A terminal user interface for searching, adding and installing cargo crates. <sub>`Rust` · ★ 196</sub>
- [malt](https://github.com/indaco/malt) - Homebrew's whole ecosystem, none of its weight - a single Zig binary with native postinstall and a themeable TUI & CLI. <sub>`Zig` · ★ 158</sub>
- [plaza](https://github.com/StaszeKrk/plaza) - Cross-distro TUI package manager browser. <sub>`Rust` · ★ 57 · [deep dive](https://awesometui.com/plaza)</sub>
- [paruz](https://github.com/achintya-7/paruz) - A terminal UI package manager for Arch Linux. <sub>`TypeScript` · ★ 9</sub>
- [opamui](https://github.com/nlamirault/opamui) - TUI for OPAM packages. <sub>`OCaml` · ★ 4</sub>

### More System

- [tmux](https://github.com/tmux/tmux) - Tmux source code. <sub>`C` · ★ 49k</sub>
- [fastfetch](https://github.com/fastfetch-cli/fastfetch) - A maintained, feature-rich and performance oriented, neofetch like system information tool. <sub>`C` · ★ 24k</sub>
- [bpytop](https://github.com/aristocratos/bpytop) - Linux/OSX/FreeBSD resource monitor. <sub>`Python` · ★ 11k</sub>
- [htop](https://github.com/htop-dev/htop) - Htop - an interactive process viewer. <sub>`C` · ★ 8.3k</sub>
- [binsider](https://github.com/orhun/binsider) - Analyze ELF binaries like a boss 😼🕵️‍♂️. <sub>`Rust` · ★ 4.4k</sub>
- [tuios](https://github.com/Gaurav-Gosain/tuios) - Terminal UI OS (Terminal Multiplexer) <sub>`Go` · ★ 3.6k</sub>
- [util-linux](https://github.com/util-linux/util-linux) - Collection of Linux utilities. <sub>`C` · ★ 3.2k</sub>
- [caligula](https://github.com/ifd3f/caligula) - A user-friendly, lightweight TUI for disk imaging. <sub>`Rust` · ★ 2.3k</sub>
- [cpufetch](https://github.com/Dr-Noob/cpufetch) - Simple yet fancy CPU architecture fetching tool. <sub>`C` · ★ 2.1k</sub>
- [isd](https://github.com/kainctl/isd) - Isd (interactive systemd) – a better way to work with systemd units. <sub>`Python` · ★ 2.1k</sub>
- [systemctl-tui](https://github.com/rgwood/systemctl-tui) - A fast, simple TUI for interacting with systemd services and their logs. <sub>`Rust` · ★ 2k</sub>
- [macchina](https://github.com/Macchina-CLI/macchina) - A system information frontend with an emphasis on performance. <sub>`Rust` · ★ 2k</sub>
- [sysz](https://github.com/joehillen/sysz) - An fzf terminal UI for systemctl. <sub>`Shell` · ★ 1.9k</sub>
- [byobu](https://github.com/dustinkirkland/byobu) - Text window manager, shell multiplexer, integrated DevOps environment. <sub>`Python` · ★ 1.7k</sub>
- [systemd-manager-tui](https://github.com/matheus-git/systemd-manager-tui) - A TUI application for managing systemd services. <sub>`Rust` · ★ 1.6k</sub>
- [NTop](https://github.com/gsass1/NTop) - 💻 htop-like system-monitor for Windows with Vi-keybindings. <sub>`C` · ★ 1.5k</sub>
- [systeroid](https://github.com/orhun/systeroid) - A more powerful alternative to sysctl(8) with a terminal user interface 🐧. <sub>`Rust` · ★ 1.5k</sub>
- [lemurs](https://github.com/coastalwhite/lemurs) - A customizable TUI display/login manager written in Rust 🐒. <sub>`Rust` · ★ 1.4k</sub>
- [syswatch](https://github.com/matthart1983/syswatch) - Single-host system diagnostics TUI. Sibling to netwatch. Twelve tabs, plain-English insights, session scrubber. macOS + Linux. <sub>`Rust` · ★ 839</sub>
- [pvetui](https://github.com/devnullvoid/pvetui) - Terminal UI for Proxmox VE. <sub>`Go` · ★ 714</sub>
- [jolt](https://github.com/jordond/jolt) - ⚡️A terminal-based battery and energy monitor for macOS and Linux. <sub>`Rust` · ★ 548</sub>
- [heretek](https://github.com/wcampbell0x2a/heretek) - GDB TUI Dashboard for the understanding of vast knowledge. <sub>`Rust` · ★ 389</sub>
- [framework-tool-tui](https://github.com/grouzen/framework-tool-tui) - A TUI for controlling and monitoring Framework Computers hardware built in Rust. <sub>`Rust` · ★ 351</sub>
- [rura](https://github.com/tlipinski/rura) - Terminal UI for building shell pipelines. <sub>`Rust` · ★ 330 · [deep dive](https://awesometui.com/rura)</sub>
- [tuptime](https://github.com/rfmoz/tuptime) - Tuptime reports historical and statistical system uptime, preserved across reboots. Like uptime, but with extended information. <sub>`Python` · ★ 316</sub>
- [pstop](https://github.com/psmux/pstop) - Htop for Windows . TUI system monitor with per-core CPU bars, memory/swap/network, tree view, process kill, 7 color schemes, mouse support. cargo install pstop. <sub>`Rust` · ★ 243</sub>
- [wg-cmd](https://github.com/AndrianBdn/wg-cmd) - TUI for managing WireGuard configuration files. <sub>`Go` · ★ 223</sub>
- [pumas](https://github.com/graelo/pumas) - Power Usage Monitor for Apple Silicon. <sub>`Rust` · ★ 219</sub>
- [diskwatch](https://github.com/matthart1983/diskwatch) - Single-host, read-only disk diagnostics TUI. Sibling to netwatch and syswatch. <sub>`Rust` · ★ 202</sub>
- [cheatshh](https://github.com/AnirudhG07/cheatshh) - Cheatshh is a CLI tool to store commands and their descriptions in a place you can look into as cheatshheat so you dont have to remember them. <sub>`Shell` · ★ 191</sub>
- [tray-tui](https://github.com/Levizor/tray-tui) - System tray in your terminal. <sub>`Rust` · ★ 164</sub>
- [ugm](https://github.com/ariasmn/ugm) - A terminal based UNIX user and group browser. <sub>`Go` · ★ 163</sub>
- [swaptop](https://github.com/luis-ota/swaptop) - Swap usage monitor written in rust. <sub>`Rust` · ★ 161</sub>
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - 💾🧹 A lightweight, software cache cleanup tool for Windows & Linux. <sub>`Go` · ★ 146</sub>
- [terminalperiodictable](https://github.com/velorek1/terminalperiodictable) - A beautiful TUI periodic table for GNU/linux terminals. Coded in C, no dependecies. <sub>`C` · ★ 145</sub>
- [exosphere](https://github.com/mrdaemon/exosphere) - A simple CLI and TUI driven application that offers patch reporting for remote unix systems, written in Python. <sub>`Python` · ★ 139</sub>
- [PCtrl](https://github.com/MohamedSherifNoureldin/PCtrl) - Rust based Linux Process Manager with both a GUI and a TUI. <sub>`Rust` · ★ 122</sub>
- [winproc-tui](https://github.com/TX230/winproc-tui) - A keyboard-first process monitoring tool for Windows 11 with live system-wide and per-process resource metrics including .NET runtime metrics, time-series analysis, and recording—built with Rust and… <sub>`Rust` · ★ 112 · [deep dive](https://awesometui.com/winproc-tui)</sub>
- [SEE](https://github.com/NustyFrozen/SEE) - See (Service Event Extraction) is a TUI based tool to lookup logs from services (systemd) <sub>`Rust` · ★ 98</sub>
- [systempi](https://github.com/WastelandSYS/systempi) - Modern real-time Raspberry Pi system monitoring dashboard with live telemetry, hardware health diagnostics, and low-flicker terminal rendering. <sub>`Python` · ★ 94</sub>
- [gptop](https://github.com/evilsocket/gptop) - A cross-platform GPU monitor TUI with support for both Apple Silicon and NVIDIA GPUs. <sub>`Rust` · ★ 91</sub>
- [zeitfetch](https://github.com/nidnogg/zeitfetch) - Instantaneous snapshots of system information. <sub>`Rust` · ★ 79</sub>
- [float](https://github.com/Henktorius/float) - Floating window terminal multiplexer. <sub>`Rust` · ★ 75</sub>
- [journalview](https://github.com/codervijo/journalview) - JournalView is a lightweight, terminal-based application written in Rust that allows users to efficiently view, filter, and navigate system logs from journalctl. <sub>`Rust` · ★ 73</sub>
- [fubar](https://github.com/irishmaestro/fubar) - Formidable Unix Binary Arsenal & Repository. TUI built for offline payload generation, retrieval, and exfiltration. <sub>`Rust` · ★ 62</sub>
- [zigfetch](https://github.com/utox39/zigfetch) - Zigfetch is a minimal neofetch/fastfetch like system information tool. <sub>`Zig` · ★ 49</sub>
- [monitui](https://github.com/nathaniel-fargo/monitui) - A lovely tui for wrangling your hyprland monitors like nobodies business. built with rust ofc ofc. <sub>`Rust` · ★ 47</sub>
- [pkgtui](https://github.com/padovanl/pkgtui) - 🐧 A fast & intuitive terminal UI for managing APT and Snap packages on Linux. 📦⚡. <sub>`Go` · ★ 17</sub>
- [Aperture](https://github.com/stylebending/Aperture) - Diagnostic tui for Windows power users. <sub>`Rust` · ★ 15 · [deep dive](https://awesometui.com/aperture)</sub>
- [tuicc](https://github.com/Lshika-linux/tuicc) - TUI control center for tiling WMs (Sway, working on i3, more coming). One key, one place — windowswitcher, WS reconstruction from tree, launcher, sessions - save and restore, WiFi, BT, media control,… <sub>`Python` · ★ 11</sub>
- [steam_friends_list_tui](https://github.com/AdamWHY2K/steam_friends_list_tui) - View your steam friends list from the commandline. <sub>`C#` · ★ 5</sub>
- [whirr](https://github.com/scoobynko/whirr) - MacOS system dashboard for your terminal. No sudo, no mouse. Your localhost servers and Claude sessions are in there too, one key away. <sub>`Rust` · ★ 2 · [deep dive](https://awesometui.com/whirr)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Security

> Passwords, OTP, auth, secrets, scanners, privacy, and security workflows. <sub>[browse on awesometui.com →](https://awesometui.com/security)</sub>

- [sherlock](https://github.com/sherlock-project/sherlock) - Hunt down social media accounts by username across social networks. <sub>`Python` · ★ 91k</sub>
- [mitmproxy](https://github.com/mitmproxy/mitmproxy) - An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers. <sub>`Python` · ★ 45k</sub>
- [hashcat](https://github.com/hashcat/hashcat) - World's fastest and most advanced password recovery utility. <sub>`C` · ★ 27k</sub>
- [RustScan](https://github.com/bee-san/RustScan) - 🤖 The Modern Port Scanner 🤖. <sub>`Rust` · ★ 20k</sub>
- [ffuf](https://github.com/ffuf/ffuf) - Fast web fuzzer written in Go. <sub>`Go` · ★ 17k</sub>
- [dirsearch](https://github.com/maurosoria/dirsearch) - Web path scanner. <sub>`Python` · ★ 15k</sub>
- [gopass](https://github.com/gopasspw/gopass) - The slightly more awesome standard unix password manager for teams. <sub>`Go` · ★ 7.1k</sub>
- [zizmor](https://github.com/zizmorcore/zizmor) - Static analysis for GitHub Actions. <sub>`Rust` · ★ 6.4k</sub>
- [rizin](https://github.com/rizinorg/rizin) - UNIX-like reverse engineering framework and command-line toolset. <sub>`C` · ★ 3.8k</sub>
- [cariddi](https://github.com/edoardottt/cariddi) - Take a list of domains, crawl urls and scan for endpoints, secrets, api keys, file extensions, tokens and more. <sub>`Go` · ★ 3.8k</sub>
- [S3Scanner](https://github.com/sa7mon/S3Scanner) - Scan for misconfigured S3 buckets across S3-compatible APIs! <sub>`Go` · ★ 3.2k</sub>
- [NomadNet](https://github.com/markqvist/NomadNet) - Communicate Freely. <sub>`Python` · ★ 2.5k</sub>
- [wtfis](https://github.com/pirxthepilot/wtfis) - Passive hostname, domain and IP lookup tool for non-robots. <sub>`Python` · ★ 1.8k</sub>
- [RecoverPy](https://github.com/PabloLec/RecoverPy) - Interactively find and recover deleted or :pointright: overwritten :pointleft: files from your terminal. <sub>`Python` · ★ 1.8k</sub>
- [gpg-tui](https://github.com/orhun/gpg-tui) - Manage your GnuPG keys with ease! 🔐. <sub>`Rust` · ★ 1.8k</sub>
- [lemmeknow](https://github.com/swanandx/lemmeknow) - The fastest way to identify anything! <sub>`Rust` · ★ 1.1k</sub>
- [tufw](https://github.com/peltho/tufw) - Terminal UI for ufw. <sub>`Go` · ★ 858</sub>
- [flawz](https://github.com/orhun/flawz) - A Terminal UI for browsing security vulnerabilities (CVEs) <sub>`Rust` · ★ 600</sub>
- [cotp](https://github.com/replydev/cotp) - Encrypted, command-line TOTP/HOTP authenticator app with import functionality. <sub>`Rust` · ★ 385</sub>
- [bitchat-tui](https://github.com/vaibhav-mattoo/bitchat-tui) - 🔒 Secure, anonymous, peer-to-peer (P2P) Bluetooth chat in your terminal. An off-grid, encrypted TUI messenger built with Rust. <sub>`Rust` · ★ 372</sub>
- [jwt-ui](https://github.com/jwt-rs/jwt-ui) - A command line UI for decoding/encoding JSON Web Tokens. <sub>`Rust` · ★ 349</sub>
- [lazytrivy](https://github.com/owenrumney/lazytrivy) - Vulnerability scanning just got lazier. <sub>`Go` · ★ 328</sub>
- [havn](https://github.com/mrjackwills/havn) - A fast configurable port scanner with reasonable defaults. <sub>`Rust` · ★ 320</sub>
- [pillager](https://github.com/brittonhayes/pillager) - Pillage filesystems for sensitive information with Go 🔍. <sub>`Go` · ★ 315</sub>
- [packemon](https://github.com/ddddddO/packemon) - Packet monster (っ‘-’)╮=͟͟͞͞◒ ヽ( '-'ヽ) TUI tool for sending packets of arbitrary input and monitoring packets on any network interfaces (default: eth0). Windows/macOS/Linux. <sub>`Go` · ★ 306</sub>
- [apw](https://github.com/bendews/apw) - A CLI for Apple Passwords (also known as iCloud Keychain) <sub>`TypeScript` · ★ 231</sub>
- [kure](https://github.com/GGP1/kure) - CLI password manager with sessions. <sub>`Go` · ★ 171</sub>
- [motus](https://github.com/oleiade/motus) - A dead simple password generator. <sub>`Rust` · ★ 157</sub>
- [andcli](https://github.com/tjblackheart/andcli) - A 2FA TUI for your shell. <sub>`Go` · ★ 153</sub>
- [awsesh](https://github.com/elva-labs/awsesh) - An AWS session and credential manager and SDK ✨. <sub>`TypeScript` · ★ 139</sub>
- [passepartui](https://github.com/kardwen/passepartui) - A TUI for pass. <sub>`Rust` · ★ 128</sub>
- [ThreatDeck](https://github.com/gripebomb/ThreatDeck) - Terminal-based threat intelligence monitoring and alerting platform. <sub>`Rust` · ★ 104</sub>
- [pass-cli](https://github.com/reyamira/pass-cli) - A secure, cross-platform, always-free, and open-source alternative to 1password, bitwarden, etc., Password and API key manager for folks who live in the command line. (CLI + TUI) <sub>`Go` · ★ 102</sub>
- [pwdsafety](https://github.com/edoardottt/pwdsafety) - 🔒command line tool checking password safety🔒. <sub>`Go` · ★ 101</sub>
- [keydex](https://github.com/shikaan/keydex) - 🔒 Terminal based password manager for KeePass databases. <sub>`Go` · ★ 97</sub>
- [inspect-cert-chain](https://github.com/x52dev/inspect-cert-chain) - Inspect and debug TLS certificate chains (without OpenSSL) <sub>`Rust` · ★ 64</sub>
- [eddy](https://github.com/70sh1/eddy) - Simple, fast CLI file encryption tool. <sub>`Go` · ★ 56</sub>
- [keyward](https://github.com/gateway-of-last-resort/keyward) - Terminal UI to manage SSH keys, edit ~/.ssh/config, and audit your SSH security. Encrypted metadata + backups, an A–F security grade, byte-identical config editing. <sub>`Go` · ★ 43 · [deep dive](https://awesometui.com/keyward)</sub>
- [ssl-checker](https://github.com/fabio42/ssl-checker) - Fast and beautiful program to check all your https endpoint. <sub>`Go` · ★ 29</sub>
- [ID-Spoofer](https://github.com/NubleX/ID-Spoofer) - Cross-platform identity spoofing toolkit - MAC randomization + wire-level Windows TCP/IP persona via NFQUEUE packet rewriting. For authorized pentesting. <sub>`Go` · ★ 24</sub>
- [keywise](https://github.com/lkraider/keywise) - Reads a Firefox profile's saved logins with no dependencies. One static binary for macOS, Windows and Linux. <sub>`Zig` · ★ 1 · [deep dive](https://awesometui.com/keywise)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- Data & Files -->
## File Management

> File managers, disk usage tools, file search, remote transfer, and filesystem navigation. <sub>[browse on awesometui.com →](https://awesometui.com/file-management)</sub>

- [fzf](https://github.com/junegunn/fzf) - Cherryblossom: A command-line fuzzy finder. <sub>`Go` · ★ 83k</sub>
- [rclone](https://github.com/rclone/rclone) - "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files. <sub>`Go` · ★ 59k</sub>
- [fd](https://github.com/sharkdp/fd) - A simple, fast and user-friendly alternative to 'find'. <sub>`Rust` · ★ 44k</sub>
- [yazi](https://github.com/sxyazi/yazi) - 💥 Blazing fast terminal file manager written in Rust, based on async I/O. <sub>`Rust` · ★ 42k · [deep dive](https://awesometui.com/yazi)</sub>
- [croc](https://github.com/schollz/croc) - Easily and securely send things from one computer to another :crocodile: :package. <sub>`Go` · ★ 40k</sub>
- [exa](https://github.com/ogham/exa) - A modern replacement for ‘ls’. <sub>`Rust` · ★ 24k</sub>
- [eza](https://github.com/eza-community/eza) - A modern alternative to ls. <sub>`Rust` · ★ 23k</sub>
- [superfile](https://github.com/yorukot/superfile) - Pretty fancy and modern terminal file manager. <sub>`Go` · ★ 23k</sub>
- [nnn](https://github.com/jarun/nnn) - N³ The unorthodox terminal file manager. <sub>`C` · ★ 22k · [deep dive](https://awesometui.com/nnn)</sub>
- [chezmoi](https://github.com/twpayne/chezmoi) - Manage your dotfiles across multiple diverse machines, securely. <sub>`Go` · ★ 21k</sub>
- [ranger](https://github.com/ranger/ranger) - A VIM-inspired filemanager for the console. <sub>`Python` · ★ 17k</sub>
- [lsd](https://github.com/lsd-rs/lsd) - The next gen ls command. <sub>`Rust` · ★ 16k</sub>
- [duf](https://github.com/muesli/duf) - Disk Usage/Free Utility - a better 'df' alternative. <sub>`Go` · ★ 15k</sub>
- [broot](https://github.com/Canop/broot) - A new way to see and navigate directory trees. <sub>`Rust` · ★ 13k</sub>
- [dust](https://github.com/bootandy/dust) - A more intuitive version of du in rust. <sub>`Rust` · ★ 12k</sub>
- [lf](https://github.com/gokcehan/lf) - Terminal file manager. <sub>`Go` · ★ 9.5k</sub>
- [dua-cli](https://github.com/Byron/dua-cli) - View disk space usage and delete unwanted data, fast. <sub>`Rust` · ★ 6.2k</sub>
- [gdu](https://github.com/dundee/gdu) - Fast disk usage analyzer with console interface written in Go. <sub>`Go` · ★ 5.9k</sub>
- [rsync](https://github.com/RsyncProject/rsync) - An open source utility that provides fast incremental file transfer. It also has useful features for backup and restore operations among many other use cases. <sub>`C` · ★ 5.2k</sub>
- [xplr](https://github.com/sayanarijit/xplr) - A hackable, minimal, fast TUI file explorer. <sub>`Rust` · ★ 4.8k</sub>
- [fselect](https://github.com/jhspetersson/fselect) - Find files with SQL-like queries. <sub>`Rust` · ★ 4.5k</sub>
- [doxx](https://github.com/bgreenwell/doxx) - Expose the contents of .docx files without leaving your terminal. Fast, safe, and smart — no Office required! <sub>`Rust` · ★ 3.7k</sub>
- [joshuto](https://github.com/kamiyaa/joshuto) - Ranger-like terminal file manager written in Rust. <sub>`Rust` · ★ 3.7k</sub>
- [vifm](https://github.com/vifm/vifm) - Vifm is a file manager with curses interface, which provides Vim-like environment for managing objects within file systems, extended with some useful ideas from mutt. <sub>`C` · ★ 3.3k</sub>
- [diskonaut](https://github.com/imsnif/diskonaut) - Terminal disk space navigator 🔭. <sub>`Rust` · ★ 3.1k</sub>
- [fclones](https://github.com/pkolaczk/fclones) - Efficient Duplicate File Finder. <sub>`Rust` · ★ 2.9k</sub>
- [dysk](https://github.com/Canop/dysk) - A linux utility to get information on filesystems, like df but better. <sub>`Rust` · ★ 2.8k</sub>
- [erdtree](https://github.com/solidiquis/erdtree) - A modern, cross-platform, multi-threaded, and general purpose filesystem and disk-usage utility that is aware of .gitignore and hidden file rules. <sub>`Rust` · ★ 2.6k</sub>
- [far2l](https://github.com/elfmz/far2l) - Linux port of FAR v2. <sub>`C++` · ★ 2.2k</sub>
- [tere](https://github.com/mgunyho/tere) - Terminal file explorer. <sub>`Rust` · ★ 1.8k</sub>
- [portal](https://github.com/SpatiumPortae/portal) - Portal is a quick and easy command-line file transfer utility from any computer to another 🌌 ✨. <sub>`Go` · ★ 1.8k</sub>
- [lstr](https://github.com/bgreenwell/lstr) - A fast, minimalist directory tree viewer, written in Rust. <sub>`Rust` · ★ 1.5k</sub>
- [bfs](https://github.com/tavianator/bfs) - A breadth-first version of the UNIX find command. <sub>`C` · ★ 1.3k</sub>
- [lla](https://github.com/chaqchase/lla) - Blazing fast ls replacement with superpowers. <sub>`Rust` · ★ 1.2k</sub>
- [tre](https://github.com/dduan/tre) - Tree command, improved. <sub>`Rust` · ★ 1.2k</sub>
- [mc](https://github.com/MidnightCommander/mc) - Midnight Commander's repository. <sub>`C` · ★ 963</sub>
- [pls](https://github.com/pls-rs/pls) - Pls is a prettier and powerful ls(1) for the pros. <sub>`Rust` · ★ 963</sub>
- [elio](https://github.com/elio-fm/elio) - Snappy, batteries-included terminal file manager with rich previews, inline images, bulk actions, and trash support. <sub>`Rust` · ★ 848</sub>
- [TUIFIManager](https://github.com/GiorgosXou/TUIFIManager) - A cross-platform terminal-based termux-oriented file manager (and component), meant to be used with a Uni-Curses project or as is. <sub>`Python` · ★ 826</sub>
- [parallel-disk-usage](https://github.com/KSXGitHub/parallel-disk-usage) - Highly parallelized, blazing fast directory tree analyzer. <sub>`Rust` · ★ 721</sub>
- [nomino](https://github.com/yaa110/nomino) - Batch rename utility for developers. <sub>`Rust` · ★ 709</sub>
- [parqeye](https://github.com/kaushiksrini/parqeye) - Peek inside Parquet files right from your terminal. <sub>`Rust` · ★ 676</sub>
- [browsr](https://github.com/juftin/browsr) - 🗂️ a pleasant file explorer in your terminal supporting all filesystems. <sub>`Python` · ★ 644</sub>
- [fm](https://github.com/mistakenelf/fm) - A terminal based file manager. <sub>`Go` · ★ 635</sub>
- [gomi](https://github.com/babarot/gomi) - 🗑️ Your UNIX rm command with a safety net! <sub>`Go` · ★ 566</sub>
- [projectable](https://github.com/dzfrias/projectable) - Dizzy: A TUI file manager built for projects. <sub>`Rust` · ★ 460</sub>
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - TUI macOS cleaner that scans caches/logs, shows sizes/paths, lets you select what to delete before Trash. <sub>`Go` · ★ 457</sub>
- [tran](https://github.com/abdfnx/tran) - 🖥 Securely transfer and send anything between computers with TUI. <sub>`Go` · ★ 447</sub>
- [rovr](https://github.com/NSPC911/rovr) - A stylish, batteries-included terminal file manager. <sub>`Python` · ★ 406</sub>
- [goful](https://github.com/anmitsu/goful) - Goful is a CUI file manager written in Go. <sub>`Go` · ★ 380</sub>
- [dskDitto](https://github.com/jdefrancesco/dskDitto) - Ultra fast and easy duplicate file finder. Awesome TUI/GUI to manage results. <sub>`Go` · ★ 376</sub>
- [dotstate](https://github.com/serkanyersen/dotstate) - A modern, secure, and user-friendly dotfile manager built with Rust. <sub>`Rust` · ★ 372</sub>
- [g](https://github.com/equationzhao/g) - Powerful and cross-platform ls 🌈. <sub>`Go` · ★ 356</sub>
- [gtrash](https://github.com/umlx5h/gtrash) - A Featureful Trash CLI manager: alternative to rm and trash-cli. <sub>`Go` · ★ 319</sub>
- [hazelnut](https://github.com/ricardodantas/hazelnut) - 🌰 Terminal-based automated file organizer inspired by Hazel. Watch folders and organize files with rules. <sub>`Rust` · ★ 287</sub>
- [moribito](https://github.com/ericschmar/moribito) - A terminal-based LDAP server explorer built with Go and BubbleTea. <sub>`Kotlin` · ★ 280</sub>
- [sfm](https://github.com/afify/sfm) - Simple file manager. <sub>`C` · ★ 259</sub>
- [deletor](https://github.com/pashkov256/deletor) - Manage and delete files efficiently with an interactive TUI and scriptable CLI. <sub>`Go` · ★ 256</sub>
- [wiper](https://github.com/ikebastuz/wiper) - Disk analyser and cleanup tool. <sub>`Rust` · ★ 248</sub>
- [adbtuifm](https://github.com/darkhz/adbtuifm) - A TUI File Manager for ADB. <sub>`Go` · ★ 189</sub>
- [bt](https://github.com/LeperGnome/bt) - Interactive tree-like terminal file manager. <sub>`Go` · ★ 166</sub>
- [regname](https://github.com/linkdd/regname) - Mass renamer TUI written in Rust. <sub>`Rust` · ★ 163</sub>
- [fex](https://github.com/18alantom/fex) - A command-line file explorer prioritizing quick navigation. <sub>`Zig` · ★ 162</sub>
- [rwx](https://github.com/vncsmnl/rwx) - 🦀 An interactive Unix file permissions and ownership TUI manager built in Rust with Ratatui and crossterm. <sub>`Rust` · ★ 160</sub>
- [cull](https://github.com/legostin/cull) - Interactive TUI disk space analyzer. <sub>`Go` · ★ 156</sub>
- [redu](https://github.com/drdo/redu) - Ncdu for your restic repository. <sub>`Rust` · ★ 150</sub>
- [darya](https://github.com/mrkatebzadeh/darya) - Disk usage explorer with a TUI and live treemap. <sub>`Rust` · ★ 149</sub>
- [hike](https://github.com/davep/hike) - A Markdown browser for the terminal. <sub>`Python` · ★ 132</sub>
- [cheznav](https://github.com/djetelina/cheznav) - TUI for chezmoi. <sub>`Python` · ★ 109</sub>
- [fml](https://github.com/wick3dr0se/fml) - Cardindexdividers: A stupid simple, fast TUI file manager written in BASH v4.2+. <sub>`Shell` · ★ 106</sub>
- [pikpaktui](https://github.com/Bengerthelorf/pikpaktui) - A TUI and CLI client for PikPak cloud storage — written in pure Rust. OpenClaw friendly. Browse, download, upload, stream, and manage your files from the terminal. <sub>`Rust` · ★ 100</sub>
- [MiddayCommander](https://github.com/kooler/MiddayCommander) - A TUI dual-panel terminal file manager written in Go, inspired by Midnight Commander. <sub>`Go` · ★ 86</sub>
- [lnko](https://github.com/Owloops/lnko) - Simple stow-like dotfile linker. <sub>`Lua` · ★ 79</sub>
- [laser](https://github.com/jmattaa/laser) - Basically ls but lsr, and configurable with lua! <sub>`C` · ★ 72</sub>
- [mcdu](https://github.com/mikalv/mcdu) - "ncdu" + "ccleaner" for linux/macos in TUI. <sub>`Rust` · ★ 63</sub>
- [fnf](https://github.com/leo-arch/fnf) - 🌀 An interactive fuzzy finder for the terminal. <sub>`C` · ★ 52</sub>
- [renux](https://github.com/andrianllmm/renux) - A terminal-based bulk file renamer with a TUI. <sub>`Python` · ★ 48</sub>
- [wisu](https://github.com/sh1zen/wisu) - A fast, minimalist directory tree viewer, written in Rust. <sub>`Rust` · ★ 44</sub>
- [diskbloom](https://github.com/Zingzy/diskbloom) - 🌸 a pastel treemap TUI that shows what's eating your disk. <sub>`Go` · ★ 41</sub>
- [comhad](https://github.com/Eoin-McMahon/comhad) - Object Storage TUI Client. <sub>`Rust` · ★ 36</sub>
- [nasberrypi](https://github.com/WastelandSYS/nasberrypi) - A lightweight NAS management system for Raspberry Pi and Linux featuring guided setup, Samba file sharing, diagnostics, storage management, and a clean terminal dashboard. <sub>`Python` · ★ 23</sub>
- [locator](https://github.com/NotTanJune/locator) - Lightning fast indexing and searching tool for any directory/external drive. <sub>`Rust` · ★ 16 · [deep dive](https://awesometui.com/locator)</sub>
- [fyzenor](https://github.com/Bimbok/fyzenor) - Fyzenor - C++ Based Filemanager. <sub>`C++` · ★ 14 · [deep dive](https://awesometui.com/fyzenor)</sub>
- [ytreenova](https://github.com/robkam/ytreenova) - YtreeNova - an XTree™-style file manager for Unix-like systems. <sub>`C` · ★ 14 · [deep dive](https://awesometui.com/ytree)</sub>
- [LibreCommander](https://github.com/leszek3737/LibreCommander) - Modern dual-panel MC for Norton/MC muscle memory in one offline Rust binary — no async runtime, forbid(unsafe), zip-safe archives. <sub>`Rust` · ★ 10</sub>
- [hdf5_ui](https://github.com/rhuygen/hdf5_ui) - A Textual User Interface for inspection of HDF5 files. <sub>`Python` · ★ 4</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Database Clients

> SQL, NoSQL, Redis, MongoDB, database browsers, and query clients. <sub>[browse on awesometui.com →](https://awesometui.com/database)</sub>

- [pgcli](https://github.com/dbcli/pgcli) - Postgres CLI with autocompletion and syntax highlighting. <sub>`Python` · ★ 13k</sub>
- [harlequin](https://github.com/tconbeer/harlequin) - The SQL IDE for Your Terminal. <sub>`Python` · ★ 6.4k</sub>
- [rainfrog](https://github.com/achristmascarl/rainfrog) - 🐸 a database tool for the terminal. <sub>`Rust` · ★ 5.3k</sub>
- [octosql](https://github.com/cube2222/octosql) - OctoSQL is a query tool that allows you to join, analyse and transform data from multiple databases and file formats using SQL. <sub>`Go` · ★ 5.3k</sub>
- [sqlit](https://github.com/Maxteabag/sqlit) - A user friendly TUI for SQL databases. Written in python. Supports SQL server, Mysql, PostreSQL, SQLite, Turso and more. <sub>`Python` · ★ 4.7k</sub>
- [lazysql](https://github.com/jorgerojas26/lazysql) - A cross-platform TUI database management tool written in Go. <sub>`Go` · ★ 4.2k</sub>
- [gobang](https://github.com/TaKO8Ki/gobang) - A cross-platform TUI database management tool written in Rust. <sub>`Rust` · ★ 3.3k</sub>
- [dblab](https://github.com/danvergara/dblab) - The database client every command line junkie deserves. <sub>`Go` · ★ 3.2k</sub>
- [pspg](https://github.com/okbob/pspg) - Unix pager (with very rich functionality) designed for work with tables. Designed for PostgreSQL, but MySQL is supported too. Works well with pgcli too. Can be used as CSV or TSV viewer too. <sub>`C` · ★ 2.7k</sub>
- [termdbms](https://github.com/mathaou/termdbms) - A TUI for viewing and editing database files. <sub>`Go` · ★ 1.8k</sub>
- [dolphie](https://github.com/charles-001/dolphie) - Your single pane of glass for real-time analytics into MySQL/MariaDB & ProxySQL. <sub>`Python` · ★ 1.2k</sub>
- [go-qo](https://github.com/kiki-ki/go-qo) - Qo is an interactive minimalist TUI to query JSON and CSV using SQL. <sub>`Go` · ★ 398</sub>
- [chdig](https://github.com/azat/chdig) - Dig into ClickHouse with TUI interface. <sub>`Rust` · ★ 292</sub>
- [squix](https://github.com/eduardofuncao/squix) - A CLI tool for managing and executing SQL queries across multiple databases. Written in Go, made beautiful with BubbleTea. <sub>`Go` · ★ 268</sub>
- [sabiql](https://github.com/riii111/sabiql) - A fast PostgreSQL and SQLite TUI written in Rust. driver-less, vim-first, with ER diagrams. No database drivers, no setup, just psql or sqlite3. <sub>`Rust` · ★ 259</sub>
- [vi-mongo](https://github.com/kopecmaciej/vi-mongo) - MongoDB TUI manager designed to simplify data visualization and quick manipulation. <sub>`Go` · ★ 239</sub>
- [vi-sql](https://github.com/kopecmaciej/vi-sql) - Terminal UI for SQL databases. <sub>`Go` · ★ 188</sub>
- [dbee](https://github.com/murat-cileli/dbee) - Fast & Minimalistic Database Browser. <sub>`Go` · ★ 171</sub>
- [tredis](https://github.com/huseyinbabal/tredis) - Terminal UI for Redis (tredis) - A terminal-based Redis data viewer and manager. <sub>`Rust` · ★ 166</sub>
- [dbcls](https://github.com/Sets88/dbcls) - DbCls is a powerful terminal database client that supports various databases. <sub>`Python` · ★ 45</sub>
- [squall](https://github.com/driscollis/squall) - A TUI SQLite Viewer and Editor. <sub>`Python` · ★ 44</sub>
- [etcd-walker](https://github.com/nexusriot/etcd-walker) - Opensource TUI tool for etcd. <sub>`Go` · ★ 26</sub>
- [badger](https://github.com/nikitazigman/badger) - Low-level db file format visualizer. <sub>`Go` · ★ 16 · [deep dive](https://awesometui.com/badger)</sub>
- [dbterm](https://github.com/shreyam1008/dbterm) - Keyboard-first terminal database workbench for PostgreSQL, MySQL/MariaDB, SQLite, Turso, and D1—with server-wide discovery, typed data workflows, local services, and verified local/remote backups. <sub>`Go` · ★ 12 · [deep dive](https://awesometui.com/dbterm)</sub>
- [close-mongo-ops-manager](https://github.com/closeio/close-mongo-ops-manager) - Monitor and kill MongoDB operations. <sub>`Python` · ★ 9</sub>
- [mongoterm](https://github.com/Fuse441/mongoterm) - Mongoterm is a terminal-based user interface (TUI) for interacting with MongoDB directly from the command line. <sub>`TypeScript` · ★ 3</sub>
- [lazyredis](https://github.com/bloodynite/lazyredis) - Terminal UI for browsing and editing Redis keys. <sub>`Go` · ★ 2 · [deep dive](https://awesometui.com/lazyredis)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Text Processing

> JSON, jq, regex, diff, CSV, grep-like tools, and structured text utilities. <sub>[browse on awesometui.com →](https://awesometui.com/text-processing)</sub>

- [ripgrep](https://github.com/BurntSushi/ripgrep) - Ripgrep recursively searches directories for a regex pattern while respecting your gitignore. <sub>`Rust` · ★ 68k</sub>
- [bat](https://github.com/sharkdp/bat) - A cat(1) clone with wings. <sub>`Rust` · ★ 60k</sub>
- [jq](https://github.com/jqlang/jq) - Command-line JSON processor. <sub>`C` · ★ 36k</sub>
- [difftastic](https://github.com/Wilfred/difftastic) - A structural diff that understands syntax 🟥🟩. <sub>`Rust` · ★ 26k</sub>
- [fx](https://github.com/antonmedv/fx) - Terminal JSON viewer & processor. <sub>`Go` · ★ 21k</sub>
- [fq](https://github.com/wader/fq) - Fq - jq for binary formats. Tool, language and decoders for working with binary formats. <sub>`Go` · ★ 11k</sub>
- [miller](https://github.com/johnkerl/miller) - Miller is like awk, sed, cut, join, and sort for name-indexed data such as CSV, TSV, and tabular JSON. <sub>`Go` · ★ 10k</sub>
- [ripgrep-all](https://github.com/phiresky/ripgrep-all) - Rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc. <sub>`Rust` · ★ 9.8k</sub>
- [visidata](https://github.com/saulpw/visidata) - A terminal spreadsheet multitool for discovering and arranging data. <sub>`Python` · ★ 9.3k</sub>
- [textql](https://github.com/dinedal/textql) - Execute SQL against structured text like CSV or TSV. <sub>`Go` · ★ 9.1k</sub>
- [up](https://github.com/akavel/up) - Ultimate Plumber is a tool for writing Linux pipes with instant live preview. <sub>`Go` · ★ 8.8k</sub>
- [sd](https://github.com/chmln/sd) - Intuitive find & replace CLI (sed alternative) <sub>`Rust` · ★ 7.3k</sub>
- [tealdeer](https://github.com/tealdeer-rs/tealdeer) - A very fast implementation of tldr in Rust. <sub>`Rust` · ★ 6.5k</sub>
- [jnv](https://github.com/ynqa/jnv) - Interactive JSON filter using jq. <sub>`Rust` · ★ 6.1k</sub>
- [jless](https://github.com/PaulJuliusMartinez/jless) - Jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data. <sub>`Rust` · ★ 5.5k</sub>
- [xan](https://github.com/medialab/xan) - The CSV magician. <sub>`Rust` · ★ 4.5k</sub>
- [csvlens](https://github.com/YS-L/csvlens) - Command line csv viewer. <sub>`Rust` · ★ 3.9k</sub>
- [qsv](https://github.com/dathere/qsv) - Blazing-fast Data-Wrangling toolkit. <sub>`Rust` · ★ 3.8k</sub>
- [hl](https://github.com/pamburus/hl) - A fast and powerful log viewer and processor that converts JSON logs or logfmt logs into a clear human-readable format. <sub>`Rust` · ★ 3.3k</sub>
- [ugrep](https://github.com/Genivia/ugrep) - 🔍 ugrep 7.8 file pattern searcher -- a user-friendly, faster, more capable grep replacement. <sub>`C++` · ★ 3.3k</sub>
- [tabiew](https://github.com/shshemi/tabiew) - A lightweight TUI application to view and query tabular data files, such as CSV, TSV, and parquet. <sub>`Rust` · ★ 3.1k</sub>
- [jqp](https://github.com/noahgorstein/jqp) - A TUI playground to experiment with jq. <sub>`Go` · ★ 2.8k</sub>
- [sq](https://github.com/neilotoole/sq) - Sq data wrangler. <sub>`Go` · ★ 2.6k</sub>
- [ov](https://github.com/noborus/ov) - 🎑Feature-rich terminal-based text viewer. It is a so-called terminal pager. <sub>`Go` · ★ 2k</sub>
- [dyff](https://github.com/homeport/dyff) - /ˈdʏf/ - diff tool for YAML files, and sometimes JSON. <sub>`Go` · ★ 1.9k</sub>
- [leaf](https://github.com/RivoLink/leaf) - Terminal Markdown previewer — GUI-like experience. <sub>`Rust` · ★ 1.9k</sub>
- [jql](https://github.com/yamafaktory/jql) - A JSON Query Language CLI tool. <sub>`Rust` · ★ 1.7k</sub>
- [sttr](https://github.com/abhimanyu003/sttr) - Cross-platform, cli app to perform various operations on string. <sub>`Go` · ★ 1.3k</sub>
- [scooter](https://github.com/thomasschafer/scooter) - Interactive find-and-replace in the terminal. <sub>`Rust` · ★ 1.3k</sub>
- [mq](https://github.com/harehare/mq) - A jq-like Markdown query language for command-line processing. <sub>`Rust` · ★ 1k</sub>
- [TUI-apps](https://github.com/learnbyexample/TUI-apps) - Terminal User Interface (TUI) apps. <sub>`Python` · ★ 1k</sub>
- [srgn](https://github.com/alexpovel/srgn) - A grep-like tool which understands source code syntax and allows for manipulation in addition to search. <sub>`Rust` · ★ 910</sub>
- [dunk](https://github.com/darrenburns/dunk) - Prettier git diffs in the terminal 🎨. <sub>`Python` · ★ 889</sub>
- [serpl](https://github.com/yassinebridi/serpl) - A simple terminal UI for search and replace, ala VS Code. <sub>`Rust` · ★ 856</sub>
- [igrep](https://github.com/konradsz/igrep) - Interactive Grep. <sub>`Rust` · ★ 842</sub>
- [sig](https://github.com/ynqa/sig) - Interactive grep (for streaming) <sub>`Rust` · ★ 767</sub>
- [qq](https://github.com/JFryy/qq) - Jq, but with many interoperable configuration format transcodings and interactive querying. <sub>`Go` · ★ 736</sub>
- [play](https://github.com/paololazzari/play) - A TUI playground to experiment with your favorite programs, such as grep, sed, awk, jq and yq. <sub>`Go` · ★ 585</sub>
- [repgrep](https://github.com/acheronfail/repgrep) - An interactive replacer for ripgrep that makes it easy to find and replace across files on the command line. <sub>`Rust` · ★ 526</sub>
- [riff](https://github.com/walles/riff) - A syntax highter for diffs, clarifying which parts of lines have changed. <sub>`Rust` · ★ 524</sub>
- [otree](https://github.com/fioncat/otree) - A command line tool to view objects (JSON/YAML/TOML/XML) in TUI tree widget. <sub>`Rust` · ★ 513</sub>
- [reader](https://github.com/mrusme/reader) - Reader is for your command line what the “readability” view is for modern browsers: A lightweight tool offering better readability of web pages (and EML files!) on the CLI. <sub>`Go` · ★ 412</sub>
- [rexi](https://github.com/royreznik/rexi) - Terminal UI for Regex Testing. <sub>`Python` · ★ 394</sub>
- [regex-tui](https://github.com/vitor-mariano/regex-tui) - A simple TUI to visualize regular expressions right in your terminal. <sub>`Go` · ★ 359</sub>
- [jiq](https://github.com/bellicose100xp/jiq) - Interactive JSON query tool with real-time output and AI assistance. <sub>`Rust` · ★ 326</sub>
- [gtt](https://github.com/eeeXun/gtt) - Google Translate TUI (Originally). Currently supports Apertium, Bing, ChatGPT, DeepL, DeepLX, Google, LibreTranslate, Reverso. <sub>`Go` · ★ 306</sub>
- [docfd](https://github.com/darrenldl/docfd) - TUI multiline fuzzy document finder. <sub>`OCaml` · ★ 288</sub>
- [nothing-less](https://github.com/mpryor/nothing-less) - A TUI pager with advanced support for tabular data, inferring/swapping delimiters, and real-time event parsing. <sub>`Python` · ★ 276</sub>
- [rgx](https://github.com/brevity1swos/rgx) - Regex101 for the terminal — real-time matching, 3 engines, capture groups, replace mode, syntax highlighting, plain-English explanations, undo/redo, mouse support. Written in Rust. <sub>`Rust` · ★ 233</sub>
- [sqly](https://github.com/nao1215/sqly) - Executes SQL against CSV, TSV, LTSV, JSON, JSONL, Parquet, Microsoft Excel™ , ACH, and Fedwire files with shell. <sub>`Go` · ★ 178</sub>
- [twig](https://github.com/workdone0/twig) - Terminal-based JSON & YAML viewer (TUI) for exploring and searching large files — fast, interactive, and privacy-first. <sub>`Rust` · ★ 174</sub>
- [trex](https://github.com/samyakbardiya/trex) - A Terminal app for RegEx visualization, :t-rex: roar! <sub>`Go` · ★ 133</sub>
- [jellex](https://github.com/kellyjonbrazil/jellex) - TUI to filter JSON and JSON Lines data with Python syntax. <sub>`Python` · ★ 120</sub>
- [regexplain](https://github.com/kapilpokhrel/regexplain) - A terminal UI for explaining and visualizing regular expressions, kindof like regex101. <sub>`Rust` · ★ 95</sub>
- [diffyml](https://github.com/szhekpisov/diffyml) - A fast, structural YAML diff tool — in a single-dependency binary. <sub>`Go` · ★ 87</sub>
- [swpui](https://github.com/beeb/swpui) - Search and replace, TUI style. Mirror available on Codeberg. <sub>`Rust` · ★ 83</sub>
- [parqv](https://github.com/sanspareilsmyn/parqv) - Interactive Python TUI for visualizing and analyzing files with multiple formats. <sub>`Python` · ★ 61</sub>
- [lumen](https://github.com/nightbuildlabs/lumen) - Terminal UI for exploring JSON & logfmt logs — pipe anything in, get schema-aware search with field autocomplete. Zero config, single binary, DuckDB inside. <sub>`Rust` · ★ 12</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- Work & Communication -->
## Productivity

> Calendars, timers, personal workflow, and daily organization tools. <sub>[browse on awesometui.com →](https://awesometui.com/productivity)</sub>

### Task Managers

_Todo managers, Taskwarrior UIs, Kanban boards, and issue tracking TUIs._

- [pueue](https://github.com/Nukesor/pueue) - Stars: Manage your shell commands. <sub>`Rust` · ★ 6.3k</sub>
- [dooit](https://github.com/dooit-org/dooit) - An awesome TUI todo manager. <sub>`Python` · ★ 2.9k</sub>
- [calcure](https://github.com/anufrievroman/calcure) - Modern TUI calendar and task manager with minimal and customizable UI. <sub>`Python` · ★ 2.3k</sub>
- [taskwarrior-tui](https://github.com/kdheepak/taskwarrior-tui) - Taskwarrior-tui: A terminal user interface for taskwarrior. <sub>`Rust` · ★ 2.1k</sub>
- [dstask](https://github.com/naggie/dstask) - Git powered terminal-based todo/note manager -- markdown note page per task. Single binary! <sub>`Go` · ★ 1.2k</sub>
- [zeit](https://github.com/mrusme/zeit) - Zeit, erfassen. A command line tool for tracking time. (https://tty.fail/mrus/zeit) <sub>`Go` · ★ 587</sub>
- [taskdog](https://github.com/Kohei-Wada/taskdog) - Terminal task manager with intelligent schedule optimization.Keyboard-only. No dragging, no micromanagement. <sub>`Python` · ★ 351 · [deep dive](https://awesometui.com/taskdog)</sub>
- [omm](https://github.com/dhth/omm) - On-my-mind: a keyboard-driven task manager for the command line. <sub>`Go` · ★ 331</sub>
- [kanban-tui](https://github.com/Zaloog/kanban-tui) - Task Manager with a TUI written in Python and usable by agents. <sub>`Python` · ★ 275</sub>
- [basilk](https://github.com/GabAlpha/basilk) - 🪴 A Terminal User Interface (TUI) to manage your tasks with minimal kanban logic. <sub>`Rust` · ★ 214</sub>
- [tiki](https://github.com/boolean-maybe/tiki) - Terminal Markdown-based shapeless workflow builder. <sub>`Go` · ★ 202</sub>
- [togo](https://github.com/prime-run/togo) - A fast and simple terminal-based task and todo manager built in go. <sub>`Go` · ★ 184</sub>
- [tatuin](https://github.com/panter-dsd/tatuin) - Tatuin (Task Aggregator TUI for N providers) <sub>`Rust` · ★ 137</sub>
- [tudo](https://github.com/jolleyDesign/tudo) - Fast, local, keyboard driven todo list & notebook TUI. <sub>`Rust` · ★ 45</sub>
- [mach](https://github.com/Q1CHENL/mach) - A terminal-first task manager for people who live in the shell and work with agents. <sub>`Rust` · ★ 21</sub>
- [TermBoard](https://github.com/HeyShinde/TermBoard) - A beautiful terminal UI dashboard for managing Python projects, virtual environments, and tasks. <sub>`Python` · ★ 8</sub>
- [Trailblazer](https://github.com/sibexico/Trailblazer) - Trailblazer is an easy terminal roadmap planner written in Go. <sub>`Go` · ★ 4 · [deep dive](https://awesometui.com/trailblazer)</sub>

### Email

_IMAP/SMTP terminal mail clients, inbox triage tools, and TUI email readers._

- [himalaya](https://github.com/pimalaya/himalaya) - CLI to manage emails. <sub>`Rust` · ★ 7.1k</sub>
- [neomutt](https://github.com/neomutt/neomutt) - ✉️ Teaching an Old Dog New Tricks -- IRC: #neomutt on irc.libera.chat. <sub>`C` · ★ 3.8k</sub>
- [pop](https://github.com/charmbracelet/pop) - Send emails from your terminal 📬. <sub>`Go` · ★ 2.9k</sub>
- [matcha](https://github.com/floatpane/matcha) - A beautiful and functional email client for your terminal, built with Go and the charming Bubble Tea TUI library. Never leave your command line to check your inbox or send an email again! <sub>`Go` · ★ 1.1k</sub>
- [sup](https://github.com/sup-heliotrope/sup) - A curses threads-with-tags style email client (mailing list: supmua@googlegroups.com) <sub>`Ruby` · ★ 970</sub>
- [meli](https://github.com/meli/meli) - Terminal mail client, mirror of https://git.meli-email.org/meli/meli.git https://crates.io/crates/meli. <sub>`Rust` · ★ 884</sub>
- [nmail](https://github.com/d99kris/nmail) - Terminal-based email client for Linux and macOS. <sub>`C++` · ★ 255</sub>
- [herald-mail-app](https://github.com/herald-email/herald-mail-app) - Herald is a terminal email client and inbox cleanup tool with IMAP, AI-assisted triage, MCP tools, and SSH/browser-friendly app modes. <sub>`Go` · ★ 136</sub>
- [mxr](https://github.com/planetaryescape/mxr) - Local-first, keyboard-native terminal email client. <sub>`Rust` · ★ 70</sub>

### More Productivity

- [wttr.in](https://github.com/chubin/wttr.in) - Partlysunny: The right way to check the weather. <sub>`Go` · ★ 30k</sub>
- [wtf](https://github.com/wtfutil/wtf) - The personal information dashboard for your terminal. <sub>`Go` · ★ 17k</sub>
- [slides](https://github.com/maaslalani/slides) - Terminal based presentation tool. <sub>`Go` · ★ 12k</sub>
- [wego](https://github.com/schachmat/wego) - Weather app for the terminal. <sub>`Go` · ★ 8.5k</sub>
- [slack-term](https://github.com/jpbruinsslot/slack-term) - Slack client for your terminal. <sub>`Go` · ★ 6.6k</sub>
- [ticker](https://github.com/achannarasappa/ticker) - Track stocks, crypto, and derivatives prices and positions in real time from your terminal. <sub>`Go` · ★ 6.2k</sub>
- [Clipboard](https://github.com/Slackadays/Clipboard) - 😎🏖️🐬 Your new, 𝙧𝙞𝙙𝙤𝙣𝙠𝙪𝙡𝙞𝙘𝙞𝙤𝙪𝙨𝙡𝙮 smart clipboard manager. <sub>`C++` · ★ 5.9k</sub>
- [discordo](https://github.com/ayn2op/discordo) - A lightweight, secure, and feature-rich Discord terminal (TUI) client. <sub>`Go` · ★ 5.7k</sub>
- [hledger](https://github.com/plaintextaccounting/hledger) - Robust, fast, intuitive plain text accounting tool with CLI, TUI and web interfaces. <sub>`Haskell` · ★ 4.7k</sub>
- [devzat](https://github.com/quackduck/devzat) - The devs are over here at devzat, chat over SSH! <sub>`Go` · ★ 4.1k</sub>
- [newsboat](https://github.com/newsboat/newsboat) - An RSS/Atom feed reader for text terminals. <sub>`C++` · ★ 3.9k</sub>
- [khal](https://github.com/pimutils/khal) - Calendar: CLI calendar application. <sub>`Python` · ★ 3k</sub>
- [dijo](https://github.com/oppiliappan/dijo) - Scriptable, curses-based, digital habit tracker. <sub>`Rust` · ★ 2.9k</sub>
- [Bagels](https://github.com/EnhancedJax/Bagels) - Powerful expense tracker that lives in your terminal. <sub>`Python` · ★ 2.9k</sub>
- [sclack](https://github.com/haskellcamargo/sclack) - The best CLI client for Slack, because everything is terrible! <sub>`Python` · ★ 2.5k</sub>
- [instagram-cli](https://github.com/supreme-gg-gg/instagram-cli) - Instagram's CLI and TUI client -- The ultimate weapon against brainrot. <sub>`TypeScript` · ★ 2.1k</sub>
- [circumflex](https://github.com/bensadeh/circumflex) - 🌿 It's Hacker News in your terminal. <sub>`Go` · ★ 2.1k</sub>
- [smassh](https://github.com/kraanzu/smassh) - Smassh your Keyboard, TUI Edition. <sub>`Python` · ★ 2k</sub>
- [gloomberb](https://github.com/gloom-sh/gloomberb) - Finance terminal, in your terminal. <sub>`TypeScript` · ★ 2k</sub>
- [nchat](https://github.com/d99kris/nchat) - Terminal-based messaging client for Linux and macOS with Telegram, WhatsApp and Signal support. <sub>`C++` · ★ 1.9k</sub>
- [papis](https://github.com/papis/papis) - Powerful and highly extensible command-line based document and bibliography manager. <sub>`HTML` · ★ 1.8k</sub>
- [tuxedo](https://github.com/webstonehq/tuxedo) - A fast, keyboard-driven terminal UI for todo.txt. <sub>`Rust` · ★ 1.6k · [deep dive](https://awesometui.com/tuxedo)</sub>
- [arttime](https://github.com/poetaman/arttime) - Arttime is a CLI application that blends beauty of ASCII / text art with functionality of clock / timer / pattern-based time manager in terminal ⏰. <sub>`Shell` · ★ 1.4k</sub>
- [gurk-rs](https://github.com/boxdot/gurk-rs) - Signal Messenger client for terminal. <sub>`Rust` · ★ 1.4k</sub>
- [toot](https://github.com/ihabunek/toot) - Toot - Mastodon CLI & TUI. <sub>`Python` · ★ 1.3k</sub>
- [intelli-shell](https://github.com/lasantosr/intelli-shell) - Like IntelliSense, but for shells. <sub>`Rust` · ★ 1.3k</sub>
- [matterhorn](https://github.com/matterhorn-chat/matterhorn) - A feature-rich Unix terminal client for the Mattermost chat system. <sub>`Haskell` · ★ 1.2k</sub>
- [tgt](https://github.com/FedericoBruzzone/tgt) - TUI for Telegram written in Rust 🦀. <sub>`Rust` · ★ 999</sub>
- [ekphos](https://github.com/nostacks/ekphos) - A lightweight, fast, terminal-based markdown research tool inspired by Obsidian. <sub>`Rust` · ★ 976</sub>
- [endcord](https://github.com/sparklost/endcord) - The most feature rich Discord TUI client. <sub>`Python` · ★ 970</sub>
- [zulip-terminal](https://github.com/zulip/zulip-terminal) - Official Zulip terminal client. <sub>`Python` · ★ 860</sub>
- [nom](https://github.com/guyfedwards/nom) - RSS reader for the terminal. <sub>`Go` · ★ 741</sub>
- [hackernews-TUI](https://github.com/aome510/hackernews-TUI) - A Terminal UI to browse Hacker News. <sub>`Rust` · ★ 719</sub>
- [twitch-tui](https://github.com/Xithrius/twitch-tui) - Twitch chat in the terminal. <sub>`Rust` · ★ 633</sub>
- [puffin](https://github.com/siddhantac/puffin) - A beautiful terminal dashboard for hledger 💰. <sub>`Go` · ★ 568</sub>
- [pomo](https://github.com/Bahaaio/pomo) - Customizable TUI Pomodoro timer with ASCII art, progress bar, desktop notifications, and productivity statistics. <sub>`Go` · ★ 491</sub>
- [clipboard-history](https://github.com/SUPERCILEX/clipboard-history) - Ringboard—the clipboard manager for Linux. <sub>`Rust` · ★ 484</sub>
- [tock](https://github.com/kriuchkov/tock) - Tock is a powerful time tracking tool for the command line. It saves activity logs as plaintext files and provides an interactive terminal UI for viewing your time. <sub>`Go` · ★ 472</sub>
- [fsel](https://github.com/Mjoyufull/fsel) - Fast TUI app launcher for GNU/Linux and BSD. <sub>`Rust` · ★ 415 · [deep dive](https://awesometui.com/fsel)</sub>
- [hours](https://github.com/dhth/hours) - A no-frills time tracking toolkit for command line nerds. <sub>`Go` · ★ 345</sub>
- [toofan](https://github.com/vyrx-dev/toofan) - A minimal, lightning-fast typing TUI for your terminal. <sub>`Go` · ★ 310</sub>
- [glues](https://github.com/gluesql/glues) - Vim-inspired TUI note-taking app with multi-backend storage — privacy-focused. <sub>`Rust` · ★ 283</sub>
- [hys](https://github.com/paulilaaso/hys) - Terminal RSS Reader for Digital Minimalists — Tool for Escaping the Doomscroll. <sub>`Zig` · ★ 271</sub>
- [budget_tracker_tui](https://github.com/Feromond/budget_tracker_tui) - A TUI budget tracker app built in rust. Designed to track income and expenses and help visualize and gather basic insights from your transactions. <sub>`Rust` · ★ 260</sub>
- [keyb](https://github.com/kencx/keyb) - Create and view custom hotkey cheatsheets in the terminal. <sub>`Go` · ★ 244</sub>
- [matchmaker](https://github.com/Squirreljetpack/matchmaker) - Powerful multi-purpose fuzzy searcher. <sub>`Rust` · ★ 238 · [deep dive](https://awesometui.com/matchmaker)</sub>
- [bmm](https://github.com/dhth/bmm) - Get to your bookmarks in a flash. <sub>`Rust` · ★ 237</sub>
- [termstart](https://github.com/yrwq/termstart) - Terminal-themed bookmark manager for web browsers. <sub>`TypeScript` · ★ 237</sub>
- [Raijin](https://github.com/MasonStooksbury/Raijin) - A free, simple weather TUI that pulls data without the need for an API key, account, or subscription. <sub>`Rust` · ★ 172</sub>
- [braindrop](https://github.com/davep/braindrop) - A terminal-based client for raindrop.io. <sub>`Python` · ★ 166</sub>
- [snipt](https://github.com/snipt/snipt) - Snipt is a powerful text snippet expansion tool! <sub>`Rust` · ★ 149</sub>
- [goki](https://github.com/abeleinin/goki) - Anki-like flashcard management tool for the terminal! <sub>`Go` · ★ 141</sub>
- [tukai](https://github.com/hlsxx/tukai) - The app provides an interactive typing experience with switchable templates, designed to help users improve their typing speed and accuracy. <sub>`Rust` · ★ 141</sub>
- [judo](https://github.com/giacomopiccinini/judo) - Multi-database TUI and CLI for ToDo lists. <sub>`Rust` · ★ 117</sub>
- [snip](https://github.com/phlx0/snip) - A terminal snippet manager to store, search, and copy code snippets without leaving your shell — local, offline, and built with Textual. <sub>`Python` · ★ 111</sub>
- [hledger-iadd](https://github.com/hpdeifel/hledger-iadd) - A terminal UI as drop-in replacement for hledger add. <sub>`Haskell` · ★ 102</sub>
- [octotype](https://github.com/mahlquistj/octotype) - A WIP TUI typing trainer inspired by monkeytype with a focus on customization. <sub>`Rust` · ★ 100</sub>
- [yatto](https://github.com/handlebargh/yatto) - Interactive version-controlled todo-list for the command-line. <sub>`Go` · ★ 98</sub>
- [perch](https://github.com/ricardodantas/perch) - A beautiful terminal social client for Mastodon and Bluesky 🐦. <sub>`Rust` · ★ 92</sub>
- [mastui](https://github.com/kimusan/mastui) - A TUI client for mastodon written in python. <sub>`Python` · ★ 89</sub>
- [tinboard](https://github.com/davep/tinboard) - A terminal-based client for pinboard.in. <sub>`Python` · ★ 82</sub>
- [newsgoat](https://github.com/jarv/newsgoat) - NewsGoat is a terminal-based RSS reader. <sub>`Go` · ★ 77</sub>
- [pdf-cli](https://github.com/Yujonpradhananga/pdf-cli) - This is a lightweight, fast and responsive terminal PDF/EPUB viewer with image support on supported terminals. Built with the kitty terminal in mind. <sub>`Go` · ★ 76</sub>
- [moneyterm](https://github.com/ChrisBuilds/moneyterm) - TUI expense and budget tracker. <sub>`Python` · ★ 68</sub>
- [hledger-textual](https://github.com/thesmokinator/hledger-textual) - Just another terminal user interface for managing hledger journal transactions. <sub>`Python` · ★ 60</sub>
- [cashd](https://github.com/hzqtc/cashd) - A fast and cozy TUI for personal finance management. <sub>`Go` · ★ 55</sub>
- [boomtypr](https://github.com/yagnikpt/boomtypr) - A sleek typing test experience in terminal. <sub>`Go` · ★ 41</sub>
- [hacker-news-tui](https://github.com/danfry1/hacker-news-tui) - A terminal UI for browsing Hacker News - feeds, threaded comments, bookmarks. Built with Rust and Ratatui. <sub>`Rust` · ★ 41</sub>
- [soap](https://github.com/GhifariArsa/soap) - The Simple Organisation App in Python. <sub>`Python` · ★ 36</sub>
- [crona](https://github.com/webxsid/crona) - Local-first work tracking for people who live in the terminal. <sub>`Go` · ★ 33 · [deep dive](https://awesometui.com/crona)</sub>
- [kite-tui](https://github.com/KernelFreeze/kite-tui) - A terminal reader for Kagi News. <sub>`Rust` · ★ 20</sub>
- [hardcover-tui](https://github.com/NotMugil/hardcover-tui) - Browse your library, track your reading progress and manage your books without ever leaving the terminal ›. <sub>`Go` · ★ 16</sub>
- [staze](https://github.com/SimonBure/staze) - Terminal User Interface for productivity. Track your working session, label them and review the data. <sub>`Rust` · ★ 15</sub>
- [santui](https://github.com/sonyarianto/santui) - Santui is your terminal home base. <sub>`Rust` · ★ 14 · [deep dive](https://awesometui.com/santui)</sub>
- [kairos](https://github.com/suraniharsh/kairos) - A fast, keyboard-driven terminal UI for todo.txt. Vim-style bindings, atomic writes, instant external-edit detection, and five hand-tuned themes all in a single static binary. <sub>`Rust` · ★ 8 · [deep dive](https://awesometui.com/kairos)</sub>
- [superchat](https://github.com/serialexp/superchat) - Fantastic and proper chat and threading protocol and client/server. <sub>`Go` · ★ 8</sub>
- [micasa](https://github.com/cpcloud/micasa) - A modal TUI for tracking home projects, maintenance schedules, appliances, and vendor quotes. <sub>`Go` · ★ 6</sub>
- [zonetimeline-tui](https://github.com/findyourexit/zonetimeline-tui) - A terminal tool for visually comparing time zones — built for distributed teams. <sub>`Rust` · ★ 2 · [deep dive](https://awesometui.com/zonetimeline-tui)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Writing & Notes

> Markdown, documentation, prose, and publishing tools. <sub>[browse on awesometui.com →](https://awesometui.com/writing)</sub>

### Note-taking

_PKM tools, Obsidian/Zettelkasten terminal integration, quick notes, and journal TUIs._

- [jrnl](https://github.com/jrnl-org/jrnl) - Collect your thoughts and notes without leaving the command line. <sub>`Python` · ★ 7.3k</sub>
- [kb](https://github.com/gnebbia/kb) - A minimalist command line knowledge base manager. <sub>`Python` · ★ 3.4k</sub>
- [euporie](https://github.com/joouha/euporie) - Jupyter notebooks in the terminal. <sub>`Python` · ★ 2.6k</sub>
- [basalt](https://github.com/erikjuhani/basalt) - TUI Application to manage Obsidian notes directly from the terminal. <sub>`Rust` · ★ 1.3k</sub>
- [tui-journal](https://github.com/AmmarAbouZor/tui-journal) - Your journal app if you live in a terminal. <sub>`Rust` · ★ 775</sub>
- [rucola](https://github.com/Linus-Mussmaecher/rucola) - Terminal-based markdown note manager. <sub>`Rust` · ★ 525</sub>
- [clin-rs](https://github.com/reekta92/clin-rs) - Feature-packed TUI note management app inspired by Obsidian. <sub>`Rust` · ★ 518</sub>
- [sncli](https://github.com/insanum/sncli) - Simplenote CLI. <sub>`Python` · ★ 431</sub>
- [hascard](https://github.com/Yvee1/hascard) - Flashcard TUI with markdown cards. <sub>`Haskell` · ★ 338</sub>
- [Papr](https://github.com/AfrozSaqlain/Papr) - Papr is a fast terminal-based workspace written in Rust. Get daily new papers in your feed from your field of research, search, discover, and download papers directly from arXiv. <sub>`Rust` · ★ 182 · [deep dive](https://awesometui.com/papr)</sub>
- [glint](https://github.com/ntrospect0/glint) - Terminal TUI-based dashboard, serving at-a-glance information across multiple domains. <sub>`Rust` · ★ 174 · [deep dive](https://awesometui.com/glint)</sub>
- [FuzPad](https://github.com/JianZcar/FuzPad) - A minimalistic note management solution. Powered by fzf. <sub>`Shell` · ★ 165</sub>
- [YapPad](https://github.com/A-Knee09/YapPad) - A TUI Note/Journal making app with image rendering and theming :D. <sub>`Go` · ★ 73 · [deep dive](https://awesometui.com/yappad)</sub>
- [redthread](https://github.com/B33pBeeps/redthread) - A sticky-note pegboard TUI for your terminal — drag notes around an ASCII corkboard, dangle red strings between them, switch through named boards. Mouse-first, written in Go. <sub>`Go` · ★ 65</sub>
- [kimun](https://github.com/nico2sh/kimun) - Simple note taking, powerful search, AI ready. <sub>`Rust` · ★ 56 · [deep dive](https://awesometui.com/kimun)</sub>
- [wb](https://github.com/mmertgunduz/wb) - Wb is a basic vocabulary app for linux. <sub>`C` · ★ 15</sub>
- [nnn](https://github.com/antoniocali/nnn) - A beautiful TUI note manager in GoLang. <sub>`Go` · ★ 7 · [deep dive](https://awesometui.com/antoniocali-nnn)</sub>

### More Writing & Notes

- [glow](https://github.com/charmbracelet/glow) - Render markdown on the CLI, with pizzazz! 💅🏻. <sub>`Go` · ★ 27k</sub>
- [frogmouth](https://github.com/Textualize/frogmouth) - A Markdown browser for your terminal. <sub>`Python` · ★ 3.3k</sub>
- [treemd](https://github.com/Epistates/treemd) - A (TUI/CLI) markdown navigator with tree-based structural navigation. <sub>`Rust` · ★ 683</sub>
- [Diary](https://github.com/actuday6418/Diary) - Encrypted memories. <sub>`Rust` · ★ 73</sub>
- [wikit](https://github.com/BryanCE/wikit) - The open source WikiJs TUI and CLI tool. <sub>`TypeScript` · ★ 5</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## IRC

> Terminal IRC clients and keyboard-native chat tools. <sub>[browse on awesometui.com →](https://awesometui.com/irc)</sub>

- [weechat](https://github.com/weechat/weechat) - The extensible chat client. <sub>`C` · ★ 3.4k</sub>
- [irssi](https://github.com/irssi/irssi) - The client of the future. <sub>`C` · ★ 3.1k</sub>
- [iamb](https://github.com/ulyssa/iamb) - A Matrix client for Vim addicts. <sub>`Rust` · ★ 1.3k</sub>
- [tiny](https://github.com/osa1/tiny) - A terminal IRC client. <sub>`Rust` · ★ 1.2k</sub>
- [kirc](https://github.com/mcpcpc/kirc) - Lightweight terminal IRC client. <sub>`C` · ★ 549</sub>
- [zuse](https://github.com/babycommando/zuse) - ZUSE is an irc client for the terminal made in Go with Bubbletea. <sub>`Go` · ★ 323</sub>
- [siggy](https://github.com/johnsideserf/siggy) - Terminal-based Signal messenger client with vim keybindings. <sub>`Rust` · ★ 170</sub>
- [irc-core](https://github.com/glguy/irc-core) - Haskell IRC library and console client - Join us on libera.chat #glirc. <sub>`Haskell` · ★ 169</sub>
- [chatuino](https://github.com/julez-dev/chatuino) - A feature rich TUI Twitch IRC Client. <sub>`Go` · ★ 64</sub>
- [hii](https://github.com/nmeum/hii) - A file-based IRC client inspired by ii. <sub>`Go` · ★ 43</sub>
- [rocket.term](https://github.com/gerstner-hub/rocket.term) - Text based chat client for the Rocket.chat messaging solution. <sub>`Python` · ★ 32</sub>
- [rvIRC](https://github.com/KaraZajac/rvIRC) - Terminal IRC client with vim-style modes (Rust, ratatui, irc) <sub>`Rust` · ★ 24</sub>
- [flume](https://github.com/FlumeIRC/flume) - Flume IRC client project. <sub>`Rust` · ★ 0</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- Media & Play -->
## Media

> Video, image, reader, viewer, and media-library TUIs. <sub>[browse on awesometui.com →](https://awesometui.com/media)</sub>

### Music Players

_Spotify, MPD, local audio players, and radio stream TUIs._

- [spotify-tui](https://github.com/Rigellute/spotify-tui) - Spotify for the terminal written in Rust 🚀. <sub>`Rust` · ★ 19k</sub>
- [spotify-player](https://github.com/aome510/spotify-player) - A Spotify player in the terminal with full feature parity. <sub>`Rust` · ★ 7.2k</sub>
- [ncspot](https://github.com/hrkfdn/ncspot) - Cross-platform ncurses Spotify client written in Rust, inspired by ncmpc and the likes. <sub>`Rust` · ★ 6.7k</sub>
- [cmus](https://github.com/cmus/cmus) - Small, fast and powerful console music player for Unix-like operating systems. <sub>`C` · ★ 6.2k</sub>
- [musikcube](https://github.com/clangen/musikcube) - A cross-platform, terminal-based music player, audio engine, metadata indexer, and server in c++. <sub>`C++` · ★ 4.8k</sub>
- [cliamp](https://github.com/bjarneo/cliamp) - Cliamp - Terminal music player inspired by winamp. <sub>`Go` · ★ 3.8k · [deep dive](https://awesometui.com/cliamp)</sub>
- [kew](https://github.com/ravachol/kew) - Music for the Shell. kew is an immersive and fast music player that allows you to listen to music with privacy. <sub>`C` · ★ 3k</sub>
- [spotatui](https://github.com/LargeModGames/spotatui) - A fast, standalone terminal music player in Rust: native Spotify streaming plus local, Subsonic, radio, and YouTube sources. <sub>`Rust` · ★ 1.3k</sub>
- [jellyfin-tui](https://github.com/dhonus/jellyfin-tui) - 🪼 Modern music streaming client for the terminal. <sub>`Rust` · ★ 583</sub>
- [ytm-player](https://github.com/peternaame-boop/ytm-player) - YouTube Music TUI client with vim keybindings, synced lyrics, and cross-platform media keys. <sub>`Python` · ★ 486</sub>
- [youtube-music-cli](https://github.com/involvex/youtube-music-cli) - A powerful Terminal User Interface (TUI) music player for YouTube Music. <sub>`TypeScript` · ★ 415</sub>
- [gomu](https://github.com/raziman18/gomu) - Golang TUI music player. <sub>`Go` · ★ 212</sub>
- [Myx](https://github.com/HaseebKhalid1507/Myx) - Spotify player for the terminal. With reactive themes. <sub>`Rust` · ★ 208</sub>
- [waves](https://github.com/llehouerou/waves) - Terminal music player with Soulseek integration, MusicBrainz tagging, Last.fm scrobbling, and radio mode. Built with Go and Bubble Tea. <sub>`Go` · ★ 169</sub>
- [vibez](https://github.com/simonepelosi/vibez) - Terminal UI Apple Music player with keyboard controls and full track streaming. <sub>`Go` · ★ 147</sub>
- [rs-pug](https://github.com/JustRoccat/rs-pug) - Blazing fast, terminal music player (TUI) written in Rust. Extensible via Lua plugins, built on Ratatui, MPV, and YT-DLP. Listen to YouTube, SoundCloud, and local files directly from your terminal. <sub>`Rust` · ★ 67 · [deep dive](https://awesometui.com/rs-pug)</sub>
- [ctune](https://github.com/An7ar35/ctune) - NCurses internet radio player for Linux. <sub>`C` · ★ 32</sub>
- [lyrtui](https://github.com/hjelev/lyrtui) - Fast and good looking TUI for Lyrion Music Server. <sub>`Rust` · ★ 25 · [deep dive](https://awesometui.com/lyrtui)</sub>
- [orbit](https://github.com/sihooleebd/orbit) - Next generational music player TUI coded in Rust. <sub>`Rust` · ★ 15</sub>
- [tg-music-cli](https://github.com/andrwvaz2/tg-music-cli) - Terminal music player for Telegram channel audio. <sub>`Python` · ★ 6</sub>
- [fuga](https://github.com/crodorg/fuga) - Terminal-native music library aggregator (local, Spotify, YouTube, SomaFM, radio) with inline album-art thumbs. <sub>`Rust` · ★ 2 · [deep dive](https://awesometui.com/fuga)</sub>

### More Media

- [youtube-dl](https://github.com/ytdl-org/youtube-dl) - Command-line program to download videos from YouTube.com and other video sites. <sub>`Python` · ★ 141k</sub>
- [mpv](https://github.com/mpv-player/mpv) - 🎥 Command line media player. <sub>`C` · ★ 37k</sub>
- [vhs](https://github.com/charmbracelet/vhs) - Your CLI home video recorder 📼. <sub>`Go` · ★ 21k</sub>
- [cava](https://github.com/karlstav/cava) - Cross-platform Audio Visualizer. <sub>`C` · ★ 6.4k</sub>
- [yt-x](https://github.com/Benexl/yt-x) - Posix script to browse youtube plus other yt-dlp supported sites from your terminal (fzf) or app launcher (rofi) with optional previews. (supports bash, zsh and dash) <sub>`Shell` · ★ 1.6k</sub>
- [MovieBox-Tui](https://github.com/mesamirh/MovieBox-Tui) - Terminal interface to find, download, and stream movies, TV shows, and live TV using local media players. <sub>`Rust` · ★ 1.3k</sub>
- [youtube-tui](https://github.com/Siriusmart/youtube-tui) - An aesthetically pleasing YouTube TUI written in Rust. <sub>`Rust` · ★ 1.1k</sub>
- [bookokrat](https://github.com/bugzmanov/bookokrat) - A terminal EPUB / PDF Book Reader (+djvu) <sub>★ 1.1k</sub>
- [otel-tui](https://github.com/ymtdzzz/otel-tui) - A terminal OpenTelemetry viewer inspired by otel-desktop-viewer. <sub>`Go` · ★ 1.1k</sub>
- [reddix](https://github.com/ck-zhang/reddix) - Reddix – Reddit, refined for the terminal. <sub>`Rust` · ★ 963</sub>
- [eilmeldung](https://github.com/christo-auer/eilmeldung) - Eilmeldung is a TUI RSS reader based on the awesome news-flash library. <sub>`Rust` · ★ 953 · [deep dive](https://awesometui.com/eilmeldung)</sub>
- [lazycut](https://github.com/ozemin/lazycut) - A simple terminal UI for video trimming. <sub>`Go` · ★ 878</sub>
- [lue](https://github.com/paulilaaso/lue) - Terminal eBook Reader with Audiobook-Quality Text-to-Speech — Supports EPUB, PDF, DOCX, HTML, RTF, TXT, and MD. <sub>`Python` · ★ 804</sub>
- [castero](https://github.com/xgi/castero) - TUI podcast client for the terminal. <sub>`Python` · ★ 684</sub>
- [superseedr](https://github.com/Jagalite/superseedr) - A BitTorrent Client in your Terminal. <sub>`Rust` · ★ 650</sub>
- [xytz](https://github.com/xdagiz/xytz) - A Beautiful YouTube Downloader/Player TUI. <sub>`Go` · ★ 610</sub>
- [ytsurf](https://github.com/Stan-breaks/ytsurf) - YouTube in your terminal. Clean and distraction-free. <sub>`Shell` · ★ 595</sub>
- [fancy-cat](https://github.com/freref/fancy-cat) - PDF reader for terminal emulators using the Kitty image protocol. <sub>`Zig` · ★ 558</sub>
- [cmdpxl](https://github.com/knosmos/cmdpxl) - Totally practical command-line image editor. <sub>`Python` · ★ 549</sub>
- [draw](https://github.com/maaslalani/draw) - Draw in your terminal. <sub>`Go` · ★ 546</sub>
- [tcpterm](https://github.com/sachaos/tcpterm) - Tcpterm is a packet visualizer in TUI. <sub>`Go` · ★ 489</sub>
- [asciiMol](https://github.com/dewberryants/asciiMol) - Curses based ASCII molecule viewer for terminals. <sub>`Python` · ★ 418</sub>
- [asak](https://github.com/chaosprint/asak) - A cross-platform audio recording/playback CLI tool with TUI, written in Rust. <sub>`Rust` · ★ 370</sub>
- [mufetch](https://github.com/ashish0kumar/mufetch) - Neofetch-style music cli. <sub>`Go` · ★ 207</sub>
- [soundscope](https://github.com/bananaofhappiness/soundscope) - A TUI app for analyzing audio data such as frequencies and loudness (LUFS) <sub>`Rust` · ★ 185</sub>
- [theattyr](https://github.com/orhun/theattyr) - A terminal theater for playing VT100 art and animations. <sub>`Rust` · ★ 172</sub>
- [podliner](https://github.com/timkicker/podliner) - Podcasts in any terminal. Fast, clean, offline. <sub>`C#` · ★ 169</sub>
- [tewi](https://github.com/anlar/tewi) - Text-based interface for BitTorrent clients (Transmission, qBittorrent, Deluge) <sub>`Python` · ★ 162</sub>
- [bbcli](https://github.com/hako/bbcli) - Newspaper: Browse BBC News like a hacker. <sub>`Rust` · ★ 142</sub>
- [anilist-tui](https://github.com/pndpti/anilist-tui) - Terminal Interface for the AniList API. <sub>`Python` · ★ 85</sub>
- [Tanko](https://github.com/Alexandro521/Tanko) - Tanko is a tool for reading and downloading manga from the terminal. <sub>`TypeScript` · ★ 78</sub>
- [visualvault](https://github.com/mikeleppane/visualvault) - Terminal-based media file organizer with smart date-based organization, duplicate detection, and a beautiful TUI. Organize your photo/video collection efficiently from the command line. <sub>`Rust` · ★ 65</sub>
- [waxon](https://github.com/danfry1/waxon) - A vim-modal Spotify client for the terminal. <sub>`Go` · ★ 49</sub>
- [image-sorter](https://github.com/jgalat/image-sorter) - A terminal user interface for sorting images. <sub>`Rust` · ★ 48</sub>
- [gadacz](https://github.com/rareitems/gadacz) - TUI Audiobook Player. <sub>`Rust` · ★ 42</sub>
- [climp](https://github.com/olivier-w/climp) - Cli media player. <sub>`Go` · ★ 41</sub>
- [streamtop](https://github.com/Jorji49/streamtop) - HLS/DASH/IPTV stream diagnostics TUI · v1.0.1. <sub>`Rust` · ★ 29 · [deep dive](https://awesometui.com/streamtop)</sub>
- [digisurf](https://github.com/SeanMcLoughlin/digisurf) - A TUI signal waveform viewer. <sub>`Rust` · ★ 26</sub>
- [plex-tui](https://github.com/so1omon563/plex-tui) - TUI for browsing / playing media from a Plex library. <sub>`Python` · ★ 9</sub>
- [onda](https://github.com/pedrosousa13/onda) - Onda — wander the airwaves. Ethical, privacy-minded internet-radio TUI. <sub>`Go` · ★ 8</sub>
- [readio](https://github.com/hrhrng/readio) - A terminal ebook reader with the interaction grammar of a coding agent — EPUB, PDF, Markdown, local-model read-aloud, images in the terminal. 3.9MB, no runtime deps. <sub>`Rust` · ★ 8</sub>
- [rav](https://github.com/i-am-logger/rav) - Rust audio visualiser — a real-time spectrum analyser with bars, peak caps and an oscilloscope, in truecolour. <sub>`Rust` · ★ 4</sub>
- [halpradio](https://github.com/halpworld/halpradio) - 📻 LazyVim-inspired Terminal Internet Radio Streamer built with Go & Bubble Tea. 30,000+ stations, beat-reactive animal DJ visualizers, live ICY metadata, and zero-dependency audio. <sub>`Go` · ★ 3 · [deep dive](https://awesometui.com/halpradio)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

## Games

> Terminal games and playful interactive TUIs. <sub>[browse on awesometui.com →](https://awesometui.com/games)</sub>

- [NetHack](https://github.com/NetHack/NetHack) - Official NetHack Git Repository. <sub>`C` · ★ 3.9k</sub>
- [tinytetris](https://github.com/taylorconor/tinytetris) - 80x23 terminal tetris! <sub>`C++` · ★ 3.3k</sub>
- [pokete](https://github.com/lxgr-linux/pokete) - A terminal based Pokemon like game. <sub>`Python` · ★ 3.1k</sub>
- [sshtron](https://github.com/zachlatta/sshtron) - $ ssh sshtron.zachlatta.com. <sub>`Go` · ★ 2.5k</sub>
- [awk-raycaster](https://github.com/TheMozg/awk-raycaster) - Pseudo-3D shooter written completely in gawk using raycasting technique. <sub>`Awk` · ★ 2.5k</sub>
- [php-terminal-gameboy-emulator](https://github.com/gabrielrcouto/php-terminal-gameboy-emulator) - A PHP Terminal GameBoy Emulator. <sub>`PHP` · ★ 1.6k</sub>
- [ttyper](https://github.com/max-niederman/ttyper) - Terminal-based typing test. <sub>`Rust` · ★ 1.6k</sub>
- [gittype](https://github.com/unhappychoice/gittype) - A CLI code-typing game that turns your source code into typing challenges. <sub>`Rust` · ★ 1.6k</sub>
- [BrogueCE](https://github.com/tmewett/BrogueCE) - Brogue: Community Edition - a community-lead fork of the much-loved minimalist roguelike game. <sub>`C` · ★ 1.4k</sub>
- [chess-tui](https://github.com/thomas-mauran/chess-tui) - Play chess in any terminal. Rust TUI, Stockfish, Lichess. <sub>`Rust` · ★ 1.2k</sub>
- [steam-tui](https://github.com/dmadisetti/steam-tui) - Rust TUI client for steamcmd. <sub>`Rust` · ★ 1k</sub>
- [doom-ascii](https://github.com/wojciech-graj/doom-ascii) - DooM in the terminal! <sub>`C` · ★ 876</sub>
- [tetro-tui](https://github.com/Strophox/tetro-tui) - Terminal-based but modern tetromino-stacking game that is customizable and cross-platform. <sub>`Rust` · ★ 751</sub>
- [rebels-in-the-sky](https://github.com/ricott1/rebels-in-the-sky) - P2P terminal game about spacepirates playing basketball across the galaxy. <sub>`Rust` · ★ 731</sub>
- [botany](https://github.com/jifunks/botany) - Command line virtual plant buddy. <sub>`Python` · ★ 547</sub>
- [nudoku](https://github.com/jubalh/nudoku) - Ncurses based sudoku game. <sub>`C` · ★ 374</sub>
- [tty-solitaire](https://github.com/mpereira/tty-solitaire) - Play solitaire in your terminal! <sub>`C` · ★ 359</sub>
- [bastet](https://github.com/fph/bastet) - Evil falling block game. http://fph.altervista.org/prog/bastet.html. <sub>`C++` · ★ 316</sub>
- [dealve-tui](https://github.com/kurama/dealve-tui) - Delve into game deals from your terminal 👾. <sub>`Rust` · ★ 245</sub>
- [sssnake](https://github.com/AngelJumbo/sssnake) - Cli snake game that plays itself. <sub>`C` · ★ 234</sub>
- [nSnake](https://github.com/alexdantas/nSnake) - The classic snake game with textual interface. <sub>`C++` · ★ 228</sub>
- [BalatroTUI](https://github.com/Passeriform/BalatroTUI) - A TUI clone of Balatro, a game by LocalThunk. <sub>`Rust` · ★ 203</sub>
- [tetris](https://github.com/troglobit/tetris) - Micro Tetris™, based on the 1989 IOCCC Obfuscated Tetris version by John Tromp. <sub>`C` · ★ 173</sub>
- [sshattrick](https://github.com/ricott1/sshattrick) - Play Hattrick in your terminal over SSH. <sub>`Rust` · ★ 148</sub>
- [go-life](https://github.com/sachaos/go-life) - Terminal based Conway's Game of Life. Implemented in Go. <sub>`Go` · ★ 147</sub>
- [maze](https://github.com/itchyny/maze) - A maze command written in Go. <sub>`Go` · ★ 130</sub>
- [terminal-space-program](https://github.com/jasonfen/terminal-space-program) - Terminal-native orbital-mechanics rocket simulator. KSP-in-your-terminal, distributed as a single static Go binary. <sub>`Go` · ★ 115</sub>
- [csol](https://github.com/nielssp/csol) - A small collection of solitaire/patience games (Klondike, FreeCell, Spider, Yukon, etc.) to play in the terminal. <sub>`C` · ★ 114</sub>
- [snake](https://github.com/wick3dr0se/snake) - Snake: A super minimal TUI snake game written in pure BASH v5.1+. <sub>`Shell` · ★ 114</sub>
- [inertia](https://github.com/aclfe/inertia) - A physics sandbox that runs in your terminal: rigid bodies, n-body gravity, cloth, and fluid, projected in 3D onto braille with no GPU. <sub>`Rust` · ★ 113</sub>
- [moon-buggy](https://github.com/seehuhn/moon-buggy) - Drive some car across the moon. <sub>`C` · ★ 111</sub>
- [maze-tui](https://github.com/agl-alexglopez/maze-tui) - This repository implements various maze building and solving algorithms in Rust. Unicode characters help explore these beautiful algorithms in a TUI! <sub>`Rust` · ★ 84</sub>
- [terminal_gameboy](https://github.com/dquigles/terminal_gameboy) - Terminal-based Game Boy and Game Boy Color emulator with ASCII art and block rendering modes. <sub>`Rust` · ★ 76</sub>
- [rmcl](https://github.com/objz/rmcl) - A minecraft TUI/CLI launcher written in Rust. <sub>`Rust` · ★ 72</sub>
- [typing-game-cli](https://github.com/akgondber/typing-game-cli) - Command line game to practice your typing speed by competing against typer-robot or against your best result. <sub>`JavaScript` · ★ 64</sub>
- [termrex](https://github.com/SATYADAHAL/termrex) - Chrome Dino Runner clone for the terminal. Playable on Linux, macOS, and other Unix-like systems. <sub>`C++` · ★ 50</sub>
- [snake](https://github.com/troglobit/snake) - Micro Snake, based on Simon Huggins snake game. <sub>`C` · ★ 38</sub>
- [terminal.pong](https://github.com/IshmamR/terminal.pong) - A ping pong game in your terminal. <sub>`Rust` · ★ 34</sub>
- [sudoku-rs](https://github.com/MitchelPaulin/sudoku-rs) - Sudoku right in the terminal. <sub>`Rust` · ★ 33</sub>
- [Typeinc](https://github.com/AnirudhG07/Typeinc) - Typeinc is a cool ncurses based Typing Speed Test tool where you can enjoy typing experience in Terminal with different difficulty levels. <sub>`Python` · ★ 33</sub>
- [zigtris](https://github.com/ringtailsoftware/zigtris) - A minimal terminal Tetris written in Zig. <sub>`Zig` · ★ 33</sub>
- [brickgame-4bit](https://github.com/ilyakurdyukov/brickgame-4bit) - Brick Game emulator (4-bit Holtek chip), runs in a terminal. <sub>`C` · ★ 29</sub>
- [go-solar-system](https://github.com/furan917/go-solar-system) - Explore the Solar System, Alpha Centauri, TRAPPIST-1 and more from your terminal. Real astronomical data, animated orbits, and multi-star systems. A Go/tcell TUI. <sub>`Go` · ★ 27 · [deep dive](https://awesometui.com/go-solar-system)</sub>
- [minesweeper_4d_rs](https://github.com/itabesamesa/minesweeper_4d_rs) - 4d minesweeper TUI in rust. <sub>`Rust` · ★ 22</sub>
- [nchess](https://github.com/billyvinning/nchess) - Chess in the terminal; rendered with ncurses and C99. <sub>`C` · ★ 21</sub>
- [zoridor](https://github.com/ringtailsoftware/zoridor) - A Quoridor game for terminal and web. <sub>`Zig` · ★ 16</sub>
- [onx](https://github.com/jerkyworks/onx) - Noughts & Crosses terminal based, client-server online game with your partner through websockets. <sub>`Python` · ★ 15</sub>
- [gokemon](https://github.com/nathanieltooley/gokemon) - A terminal-based Pokemon battle Simulator! <sub>`Go` · ★ 12</sub>
- [UniPac](https://github.com/jesper-olsen/UniPac) - UniPac: Unicode-powered Pacman Adventure. <sub>`Rust` · ★ 11</sub>
- [sweeper](https://github.com/igor47/sweeper) - Ncurses minesweer using python3 + curtsies. <sub>`Python` · ★ 8</sub>
- [blackguard](https://github.com/ElnurBDa/blackguard) - A beautiful terminal implementation of Scoundrel - the single-player rogue­like card game by Zach Gage and Kurt Bieg - built in Rust with ratatui. <sub>`Rust` · ★ 6</sub>
- [tui-2048](https://github.com/ps06756/tui-2048) - A TUI based 2048 game. <sub>`Python` · ★ 6</sub>
- [ASCII_Board_Game_Engine](https://github.com/tjunruh/ASCII_Board_Game_Engine) - This repository contains software intended to act as a graphics engine to create 2D board games using ASCII characters. <sub>`C++` · ★ 1</sub>
- [daggerdeep](https://github.com/chadlung/daggerdeep) - Return to Daggerdeep. <sub>`Rust` · ★ 1 · [deep dive](https://awesometui.com/daggerdeep)</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

<!-- Utilities -->
## Utilities

> Clipboard tools, launchers, calculators, pickers, and everyday helpers. <sub>[browse on awesometui.com →](https://awesometui.com/utilities)</sub>

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - A feature-rich command-line audio/video downloader. <sub>`Python` · ★ 188k</sub>
- [Mole](https://github.com/tw93/Mole) - 🐹 Clean, uninstall, analyze, optimize, and monitor your Mac. Free open-source CLI, plus a native Mac app. <sub>`Shell` · ★ 65k</sub>
- [aria2](https://github.com/aria2/aria2) - Aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink. <sub>`C++` · ★ 42k</sub>
- [zoxide](https://github.com/ajeetdsouza/zoxide) - A smarter cd command. Supports all major shells. <sub>`Rust` · ★ 39k</sub>
- [restic](https://github.com/restic/restic) - Fast, secure, efficient backup program. <sub>`Go` · ★ 36k</sub>
- [gallery-dl](https://github.com/mikf/gallery-dl) - Command-line program to download image galleries and collections from several image hosting sites. <sub>`Python` · ★ 19k</sub>
- [asciinema](https://github.com/asciinema/asciinema) - Terminal session recorder, streamer and player 📹. <sub>`Rust` · ★ 18k</sub>
- [monolith](https://github.com/Y2Z/monolith) - ⬛️ CLI tool and library for saving complete web pages as a single HTML file. <sub>`Rust` · ★ 15k</sub>
- [hexyl](https://github.com/sharkdp/hexyl) - A command-line hex viewer. <sub>`Rust` · ★ 10k</sub>
- [mapscii](https://github.com/rastapasta/mapscii) - 🗺 MapSCII is a Braille & ASCII world map renderer for your console - enter => telnet mapscii.me <= on Mac (brew install telnet) and Linux, connect with PuTTY on Windows. <sub>`JavaScript` · ★ 9.2k</sub>
- [peco](https://github.com/peco/peco) - Simplistic interactive filtering tool. <sub>`Go` · ★ 7.9k</sub>
- [pastel](https://github.com/sharkdp/pastel) - A command-line tool to generate, analyze, convert and manipulate colors. <sub>`Rust` · ★ 6.5k</sub>
- [television](https://github.com/alexpasmantier/television) - A very fast, portable and hackable fuzzy finder. <sub>`Rust` · ★ 6.2k</sub>
- [viddy](https://github.com/sachaos/viddy) - 👀 A modern watch command. Time machine and pager etc. <sub>`Rust` · ★ 5.4k</sub>
- [mdp](https://github.com/visit1985/mdp) - A command-line based markdown presentation tool. <sub>`C` · ★ 5.3k</sub>
- [cmatrix](https://github.com/abishekvashok/cmatrix) - Terminal based "The Matrix" like implementation. <sub>`C` · ★ 5.2k</sub>
- [YouPlot](https://github.com/red-data-tools/YouPlot) - A command line tool that draw plots on the terminal. <sub>`Ruby` · ★ 4.8k</sub>
- [hstr](https://github.com/dvorka/hstr) - Bash and Zsh shell history TUI suggest box - easily view, navigate, search and manage your command history. <sub>`C` · ★ 4.5k</sub>
- [lsix](https://github.com/hackerb9/lsix) - Like "ls", but for images. Shows thumbnails in terminal using sixel graphics. <sub>`Shell` · ★ 4.2k</sub>
- [ouch](https://github.com/ouch-org/ouch) - Painless compression and decompression in the terminal. <sub>`Rust` · ★ 3.7k</sub>
- [ddgr](https://github.com/jarun/ddgr) - Duck: DuckDuckGo from the terminal. <sub>`Python` · ★ 3.5k</sub>
- [Surge](https://github.com/SurgeDM/Surge) - Blazing fast TUI download manager built in Go for power users. <sub>`Go` · ★ 3.5k</sub>
- [weathr](https://github.com/Veirt/weathr) - A terminal weather app with ascii animation. <sub>`Rust` · ★ 3k</sub>
- [gobackup](https://github.com/gobackup/gobackup) - 🗄 CLI tool for backup your databases, files to cloud storages in schedully. <sub>`Go` · ★ 2.9k</sub>
- [patat](https://github.com/jaspervdj/patat) - Terminal-based presentations using Pandoc. <sub>`Haskell` · ★ 2.7k</sub>
- [kondo](https://github.com/tbillington/kondo) - Cleans dependencies and build artifacts from your projects. <sub>`Rust` · ★ 2.4k</sub>
- [gowall](https://github.com/Achno/gowall) - A tool to convert a Wallpaper's color scheme / palette, OCR with VLM's Traditional & Hybrid, Image Compression ,color palette extraction, image upsacling with Adversarial Networks and more image… <sub>`Go` · ★ 2.3k</sub>
- [mop](https://github.com/mop-tracker/mop) - Stock market tracker for hackers. <sub>`Go` · ★ 2.2k</sub>
- [astroterm](https://github.com/da-luce/astroterm) - A planetarium for your terminal! Explore stars, planets, constellations, and more, all rendered right in the command line—no telescope required. ✨🪐. <sub>`C` · ★ 2k</sub>
- [kalker](https://github.com/PaddiM8/kalker) - Scientific calculator with math syntax that supports user-defined variables and functions, complex numbers, and estimation of derivatives and integrals. <sub>`Rust` · ★ 1.9k</sub>
- [tickrs](https://github.com/tarkah/tickrs) - Realtime ticker data in your terminal 📈. <sub>`Rust` · ★ 1.7k</sub>
- [httm](https://github.com/kimono-koans/httm) - Interactive, file-level Time Machine-like tool for ZFS/btrfs/nilfs2 (and even Time Machine and Restic backups!) <sub>`Rust` · ★ 1.7k</sub>
- [xleak](https://github.com/bgreenwell/xleak) - A fast terminal Excel viewer with an interactive TUI. Features full-text search, formula display, lazy loading for large files, clipboard support, and export to CSV/JSON. Built with Rust and ratatui. <sub>`Rust` · ★ 1.5k</sub>
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - A cross-platform TUI bluetooth manager. <sub>`Go` · ★ 1.4k</sub>
- [mcat](https://github.com/Skardyy/mcat) - Terminal image, video, and Markdown viewer. <sub>`Rust` · ★ 1.4k</sub>
- [ttyplot](https://github.com/tenox7/ttyplot) - A realtime plotting utility for terminal/console with data input from stdin. <sub>`C` · ★ 1.4k</sub>
- [t-rec-rs](https://github.com/sassman/t-rec-rs) - Blazingly fast terminal recorder that generates animated gif images for the web written in rust. <sub>`Rust` · ★ 1.3k</sub>
- [torrra](https://github.com/stabldev/torrra) - A Python tool that lets you search and download torrents without leaving your CLI. <sub>`Python` · ★ 1.2k</sub>
- [cyme](https://github.com/tuna-f1sh/cyme) - List system USB buses and devices. A modern cross-platform lsusb that attempts to maintain compatibility with, but also add new features. <sub>`Rust` · ★ 1.2k</sub>
- [moor](https://github.com/walles/moor) - Moor is a pager. It's designed to just do the right thing without any configuration. <sub>`Go` · ★ 1.1k</sub>
- [w3m](https://github.com/tats/w3m) - Debian's w3m: WWW browsable pager. <sub>`C` · ★ 1.1k</sub>
- [wiremix](https://github.com/tsowell/wiremix) - Simple TUI audio mixer for PipeWire. <sub>`Rust` · ★ 1k</sub>
- [clipse](https://github.com/savedra1/clipse) - Configurable TUI clipboard manager for Unix. <sub>`Go` · ★ 1k</sub>
- [fend](https://github.com/printfn/fend) - Arbitrary-precision unit-aware calculator. <sub>`Rust` · ★ 1k</sub>
- [wikiman](https://github.com/filiparag/wikiman) - Wikiman is a universal offline documentation search engine for manual pages, tldr-pages, ArchWiki, Gentoo Wiki, DevDocs, and FreeBSD documentation. <sub>`Shell` · ★ 1k</sub>
- [typioca](https://github.com/bloznelis/typioca) - Cozy typing speed tester in terminal. <sub>`Go` · ★ 951</sub>
- [eva](https://github.com/oppiliappan/eva) - A calculator REPL, similar to bc(1) <sub>`Rust` · ★ 915</sub>
- [tz](https://github.com/oz/tz) - 🌐 A time zone helper. <sub>`Go` · ★ 898</sub>
- [golazo](https://github.com/0xjuanma/golazo) - The beautiful game in your terminal. Minimal TUI app to keep up with live & recent football/soccer matches written in Go. <sub>`Go` · ★ 826</sub>
- [bttf](https://github.com/BurntSushi/bttf) - A command line tool for datetime arithmetic, parsing, formatting and more. <sub>`Rust` · ★ 763</sub>
- [stormy](https://github.com/ashish0kumar/stormy) - Minimal neofetch-style weather cli. <sub>`Go` · ★ 732</sub>
- [scope-tui](https://github.com/alemidev/scope-tui) - Oscilloscope/vectorscope/spectroscope for your terminal. <sub>`Rust` · ★ 704</sub>
- [bcal](https://github.com/jarun/bcal) - 1234: Bits, bytes and general-purpose calculator. <sub>`C` · ★ 699</sub>
- [intermodal](https://github.com/casey/intermodal) - Command-line utility for BitTorrent torrent file creation, verification, and more. <sub>`Rust` · ★ 659</sub>
- [usbtree](https://github.com/gnomeria/usbtree) - Live USB device tree in your terminal. Rust TUI, no root, no libusb. Full activity metrics on Linux; device tree on macOS/Windows. <sub>`Rust` · ★ 644</sub>
- [fnt](https://github.com/alexmyczko/fnt) - Apt for fonts, the missing font manager for macOS/linux. <sub>`Shell` · ★ 637</sub>
- [snowmachine](https://github.com/sontek/snowmachine) - A python script that allows your terminal to snow. <sub>`Python` · ★ 608</sub>
- [qman](https://github.com/plp13/qman) - A more modern man page viewer for our terminals. <sub>`C` · ★ 597</sub>
- [pik](https://github.com/jacek-kurlit/pik) - Process Interactive Kill. <sub>`Rust` · ★ 570</sub>
- [goto](https://github.com/grafviktor/goto) - Easy to use terminal SSH manager with advanced features. Binaries included! 😉. <sub>`Go` · ★ 534</sub>
- [imgcat](https://github.com/danielgatis/imgcat) - Display images and gifs in your terminal. <sub>`Go` · ★ 412</sub>
- [qrc](https://github.com/fumiyas/qrc) - QR code generator for text terminals (ANSI color, Unicode, Sixel) <sub>`Go` · ★ 403</sub>
- [kbt](https://github.com/bloznelis/kbt) - Keyboard tester in terminal. <sub>`Rust` · ★ 393</sub>
- [daylight](https://github.com/jbreckmckye/daylight) - A command-line program for tracking sunrise and sunset times. <sub>`Go` · ★ 367</sub>
- [sbb-tui](https://github.com/Necrom4/sbb-tui) - TUI client for Switzerland's public transport timetables, inspidered by the SBB/CFF/FFS app. <sub>`Go` · ★ 326 · [deep dive](https://awesometui.com/sbb-tui)</sub>
- [tracker](https://github.com/ShenMian/tracker) - A terminal-based real-time satellite tracking and orbit prediction application. <sub>`Rust` · ★ 315</sub>
- [gruyere](https://github.com/savannahostrowski/gruyere) - ✨ A tiny (and pretty) program for viewing + killing listening ports. <sub>`Python` · ★ 298</sub>
- [qrtool](https://github.com/sorairolake/qrtool) - A command-line utility for encoding and decoding QR code. <sub>`Rust` · ★ 294</sub>
- [rsyncy](https://github.com/laktak/rsyncy) - A status/progress bar for rsync. <sub>`Python` · ★ 282</sub>
- [countryfetch](https://github.com/nik-rev/countryfetch) - A Command-line tool similar to Neofetch for obtaining information about your country. <sub>`Rust` · ★ 280</sub>
- [numr](https://github.com/nasedkinpv/numr) - Natural-language text calculator with TUI/CLI: variables, units, currencies, and live exchange rates. <sub>`Rust` · ★ 263 · [deep dive](https://awesometui.com/numr)</sub>
- [moji](https://github.com/Microck/moji) - Find and download fonts from the terminal. <sub>`Go` · ★ 242</sub>
- [tzupdate](https://github.com/cdown/tzupdate) - Set the system timezone based on IP geolocation. <sub>`Rust` · ★ 240</sub>
- [linecast](https://github.com/ashuttl/linecast) - Weather, tides, the sun, the moon, and maps, in your terminal. The Old Farmer's Almanac meets Minitel. <sub>`Python` · ★ 215 · [deep dive](https://awesometui.com/linecast)</sub>
- [petiglyph](https://github.com/petipoua/petiglyph) - Petiglyph is a TUI and CLI tool for turning images and videos into custom font glyphs. <sub>`Rust` · ★ 203</sub>
- [chmod-cli](https://github.com/Mayowa-Ojo/chmod-cli) - Effortlessly generate chmod commands. <sub>`Go` · ★ 198</sub>
- [steamfetch](https://github.com/unhappychoice/steamfetch) - Neofetch for Steam - Display your Steam stats in terminal. <sub>`Rust` · ★ 195</sub>
- [tempy](https://github.com/noprobelm/tempy) - A simple, visually pleasing weather report in your terminal. <sub>`Python` · ★ 194</sub>
- [aim](https://github.com/mihaigalos/aim) - 🎯 A command line download/upload tool with resume. <sub>`Rust` · ★ 193</sub>
- [rssnix](https://github.com/aidlx/rssnix) - Unix-style filesystem-based RSS/Atom/JSON Feed fetcher/reader. <sub>`Go` · ★ 189</sub>
- [mlbt](https://github.com/mlb-rs/mlbt) - A terminal user interface for the MLB Stats API. Check scores, standings, and stats. Even watch a baseball game in your terminal! ⚾. <sub>`Rust` · ★ 158</sub>
- [ansizalizer](https://github.com/Zebbeni/ansizalizer) - A TUI to convert Images to ANSI strings using bubbletea. <sub>`Go` · ★ 155</sub>
- [gotz](https://github.com/merschformann/gotz) - CLI timezone info. <sub>`Go` · ★ 149</sub>
- [pathos](https://github.com/chip/pathos) - Pathos - CLI for editing a PATH env variable. <sub>`Go` · ★ 144</sub>
- [oh-my-reddit](https://github.com/renatoworks/oh-my-reddit) - Beautiful Reddit threads, live in your terminal. <sub>`Go` · ★ 141</sub>
- [gtab](https://github.com/Franvy/gtab) - Save and restore Ghostty terminal tab layouts with a single command — on macOS. <sub>`Rust` · ★ 137</sub>
- [termframe](https://github.com/pamburus/termframe) - 📸 Terminal output SVG screenshot tool. <sub>`Rust` · ★ 136</sub>
- [tuime](https://github.com/nthnd/tuime) - Tui clock written in rust. <sub>`Rust` · ★ 136</sub>
- [kanarenshu](https://github.com/nuixyz/kanarenshu) - A minimal TUI application to practise Japanese from the terminal. <sub>`Go` · ★ 125</sub>
- [carl](https://github.com/b1rger/carl) - Mirror of https://codeberg.org/birger/carl. <sub>`Rust` · ★ 123</sub>
- [sigye](https://github.com/am2rican5/sigye) - A beautiful terminal clock with ASCII art fonts. <sub>`Rust` · ★ 122</sub>
- [dusage](https://github.com/mihaigalos/dusage) - 💾 A command line disk usage information tool. <sub>`Rust` · ★ 121</sub>
- [veet](https://github.com/swadhinbiswas/veet) - Universal Linux Application Uninstaller & Deep-Clean Residual Purger. <sub>`Go` · ★ 120</sub>
- [ttymap](https://github.com/Kohei-Wada/ttymap) - Mapscii-inspired Terminal-native scriptable globe. <sub>`Rust` · ★ 118</sub>
- [tinifier](https://github.com/tarampampam/tinifier) - 🐼 CLI tool for compressing images using the TinyPNG. <sub>`Go` · ★ 117</sub>
- [outside](https://github.com/BaconIsAVeg/outside) - A multi-purpose weather client for your terminal! <sub>`Rust` · ★ 105</sub>
- [incplot](https://github.com/InCom-0/incplot) - CLI tool for drawing great looking plots in the terminal and in HTML focused on user ergonomics and simplicity. <sub>`CMake` · ★ 104</sub>
- [keep-alive](https://github.com/stigoleg/keep-alive) - Keep-Alive is a lightweight, cross-platform utility to prevent your system from sleeping. Perfect for uninterrupted downloads, active connections, or long-running tasks, like vibe coding. <sub>`Go` · ★ 104</sub>
- [ADS-B_TUI](https://github.com/j4v3l/ADS-B_TUI) - A modern, fast, and user-friendly terminal interface for tracking aircraft using ADS-B data. Display real-time flight information in a beautiful table format with country flags, routes, and more. <sub>`Rust` · ★ 98</sub>
- [termpicker](https://github.com/ChausseBenjamin/termpicker) - A color picker for the terminal. <sub>`Go` · ★ 95</sub>
- [aria2tui](https://github.com/grimandgreedy/aria2tui) - Aria2TUI is a TUI client for the Aria2 download utility. <sub>`Python` · ★ 92</sub>
- [putzen-rs](https://github.com/sassman/putzen-rs) - "putzen" is German and means cleaning. It helps keeping your disk clean of build and dependency artifacts safely. <sub>`Rust` · ★ 88</sub>
- [hzfind](https://github.com/clouedoc/hzfind) - A TUI to find the best Hetzner dedicated server auction deals, with PassMark CPU benchmarks built-in. <sub>`Rust` · ★ 87</sub>
- [rustormy](https://github.com/Tairesh/rustormy) - 🌦️ Minimal neofetch-like weather CLI. <sub>`Rust` · ★ 86</sub>
- [humble-explorer](https://github.com/koenvervloesem/humble-explorer) - Cross-platform, command-line and human-friendly Bluetooth Low Energy scanner. <sub>`Python` · ★ 84</sub>
- [rfc_reader](https://github.com/ozan2003/rfc_reader) - An RFC viewer with TUI. <sub>`Rust` · ★ 73 · [deep dive](https://awesometui.com/rfc-reader)</sub>
- [archwiki-tui](https://github.com/Harshil-Anuwadia/archwiki-tui) - A terminal browser for the Arch Wiki. No bloat. No browser. Just the wiki. <sub>`Go` · ★ 68</sub>
- [blueutil-tui](https://github.com/Zaloog/blueutil-tui) - Tui for Mac to interact with bluetooth devices via blueutil. <sub>`Python` · ★ 53</sub>
- [pgtree](https://github.com/joknarf/pgtree) - Unix process hierachy tree for specific processes (mixed pgrep + pstree) <sub>`Shell` · ★ 39</sub>
- [starlit](https://github.com/ashuhlee/starlit) - A minimal, cute and customizable weather cli package to match any terminal config ✨. <sub>`Python` · ★ 39</sub>
- [pqviewer](https://github.com/thread53/pqviewer) - View Apache Parquet Files In Your Terminal. <sub>`Python` · ★ 24</sub>
- [bkp](https://github.com/gergelyk/bkp) - Utility that makes backups of your files/directories. <sub>`Python` · ★ 23</sub>
- [vectro](https://github.com/gurgeous/vectro) - Rpn calculator for your terminal. <sub>`Go` · ★ 21</sub>
- [appmop](https://github.com/cesarferreira/appmop) - Clean macOS apps from a terminal. <sub>`Rust` · ★ 17</sub>
- [gsty](https://github.com/tappunk/gsty) - Ghostty live preview theme browser and installer TUI. <sub>`Rust` · ★ 12</sub>
- [tuiweathergirl](https://github.com/StrayFeral/tuiweathergirl) - Terminal Weather and Disaster Station (Linux/Windows/Unix/MacOS) <sub>`Python` · ★ 10</sub>
- [tram_btrfs](https://github.com/Xiaomony/tram_btrfs) - A TUI Btrfs snapshot manager with scheduling support. <sub>`Rust` · ★ 9</sub>
- [glipboard](https://github.com/bedirmirac/glipboard) - A lightweight, cross-platform clipboard manager written in Go. Runs as a silent background daemon with a built-in Terminal UI (TUI). <sub>`Go` · ★ 6</sub>
- [para-cada](https://github.com/gergelyk/para-cada) - Executes your command for each file selected using glob expression(s). <sub>`Python` · ★ 6</sub>
- [soundwatch](https://github.com/matthart1983/soundwatch) - Read-only audio diagnostics for macOS and Linux, in ten tabs. Why does my audio sound wrong? <sub>`Rust` · ★ 6</sub>
- [bittorrent-cli](https://github.com/matyas-toth/bittorrent-cli) - A persistent, full-screen (and also headless) BitTorrent client for people who live in the terminal. <sub>`TypeScript` · ★ 5</sub>
- [feedln](https://github.com/xqtr/feedln) - A terminal RSS reader, using Python. <sub>`Python` · ★ 5 · [deep dive](https://awesometui.com/feedln)</sub>
- [starwheel](https://github.com/Igfray/starwheel) - A live planisphere in your terminal. Real star positions for your location and clock, drawn in braille. <sub>`JavaScript` · ★ 4 · [deep dive](https://awesometui.com/starwheel)</sub>
- [Torm](https://github.com/realAndi/Torm) - A Simple TUI BitTorrent Client. <sub>`TypeScript` · ★ 2 · [deep dive](https://awesometui.com/torm)</sub>
- [welchost](https://github.com/scoobynko/welchost) - Create and manage a Ghostty terminal welcome screen. <sub>`Python` · ★ 2 · [deep dive](https://awesometui.com/welchost)</sub>
- [rust-space-cleaner](https://github.com/Johannuel/rust-space-cleaner) - A cache hunter: scans 24 sources of disk junk (Dev, Games, Web, System, Tools) and reclaims the space safely with a ratatui TUI — Rust. <sub>`Rust` · ★ 0</sub>

<p align="right"><a href="#contents">↑ back to contents</a></p>

---

## Spotlight

Projects with a full deep-dive page on awesometui.com — overview, source-backed install options, keybindings, and screenshots. All 87 are marked **deep dive** throughout this list; here are the most-starred.

| Project | What it is | Language | Stars | |
|---|---|---|---|---|
| [lazygit](https://github.com/jesseduffield/lazygit) | Simple terminal UI for git commands. | Go | 82k | [deep dive](https://awesometui.com/lazygit) |
| [lazydocker](https://github.com/jesseduffield/lazydocker) | The lazier way to manage everything docker. | Go | 53k | [deep dive](https://awesometui.com/lazydocker) |
| [yazi](https://github.com/sxyazi/yazi) | 💥 Blazing fast terminal file manager written in Rust, based on async I/O. | Rust | 42k | [deep dive](https://awesometui.com/yazi) |
| [llmfit](https://github.com/AlexsJones/llmfit) | Hundreds of models & providers. One command to find what runs on your hardware. | Rust | 35k | [deep dive](https://awesometui.com/llmfit) |
| [btop](https://github.com/aristocratos/btop) | A monitor of resources. | C++ | 34k | [deep dive](https://awesometui.com/btop) |
| [herdr](https://github.com/herdrdev/herdr) | The runtime your coding agents live on. | Rust | 33k | [deep dive](https://awesometui.com/herdr) |
| [gitui](https://github.com/gitui-org/gitui) | Blazing 💥 fast terminal-ui for git written in rust 🦀. | Rust | 22k | [deep dive](https://awesometui.com/gitui) |
| [witr](https://github.com/pranshuparmar/witr) | Why is this running? Trace any process, port, container, or file back to what started it - CLI + TUI. | Go | 22k | [deep dive](https://awesometui.com/witr) |
| [nnn](https://github.com/jarun/nnn) | N³ The unorthodox terminal file manager. | C | 22k | [deep dive](https://awesometui.com/nnn) |
| [goaccess](https://github.com/allinurl/goaccess) | GoAccess is a real-time web log analyzer and interactive viewer that runs in a terminal in nix systems or through your browser. | C | 21k | [deep dive](https://awesometui.com/goaccess) |
| [hunk](https://github.com/modem-dev/hunk) | Review-first terminal diff viewer for agentic coders. | TypeScript | 8.9k | [deep dive](https://awesometui.com/hunk) |
| [cliamp](https://github.com/bjarneo/cliamp) | Cliamp - Terminal music player inspired by winamp. | Go | 3.8k | [deep dive](https://awesometui.com/cliamp) |

## Recently created

The newest repositories in the catalog, by GitHub creation date. Young projects, rough edges, real ideas.

- [resmon](https://github.com/pacrox/resmon) - Zero-dependency TUI resource monitor written in LuaJIT, compiled into a single self-contained ELF binary. <sub>`Lua` · ★ 0 · [deep dive](https://awesometui.com/resmon)</sub>
- [streamtop](https://github.com/Jorji49/streamtop) - HLS/DASH/IPTV stream diagnostics TUI · v1.0.1. <sub>`Rust` · ★ 29 · [deep dive](https://awesometui.com/streamtop)</sub>
- [proc-manager](https://github.com/novitaswebworks/proc-manager) - The Modern, Blazing-Fast TUI System & Docker Manager. <sub>`Rust` · ★ 9 · [deep dive](https://awesometui.com/proc-manager)</sub>
- [termdock](https://github.com/padovanl/termdock) - 📟 A terminal multiplexer with persistent sessions, split panes, detach, reattach. Written from scratch in Go. <sub>`Go` · ★ 18 · [deep dive](https://awesometui.com/termdock)</sub>
- [lsoff-rs](https://github.com/vyrti/lsoff-rs) - Cli tool to find who use your ports (crossplatform), lsoff fork in Rust. <sub>`Rust` · ★ 1 · [deep dive](https://awesometui.com/lsoff-rs)</sub>
- [keywise](https://github.com/lkraider/keywise) - Reads a Firefox profile's saved logins with no dependencies. One static binary for macOS, Windows and Linux. <sub>`Zig` · ★ 1 · [deep dive](https://awesometui.com/keywise)</sub>
- [veet](https://github.com/swadhinbiswas/veet) - Universal Linux Application Uninstaller & Deep-Clean Residual Purger. <sub>`Go` · ★ 120</sub>
- [lsoff](https://github.com/yutat23/lsoff) - CLI / TUI that lists listening TCP/UDP ports. <sub>`Go` · ★ 234 · [deep dive](https://awesometui.com/lsoff)</sub>
- [halpradio](https://github.com/halpworld/halpradio) - 📻 LazyVim-inspired Terminal Internet Radio Streamer built with Go & Bubble Tea. 30,000+ stations, beat-reactive animal DJ visualizers, live ICY metadata, and zero-dependency audio. <sub>`Go` · ★ 3 · [deep dive](https://awesometui.com/halpradio)</sub>
- [pkgtui](https://github.com/padovanl/pkgtui) - 🐧 A fast & intuitive terminal UI for managing APT and Snap packages on Linux. 📦⚡. <sub>`Go` · ★ 17</sub>

## By the numbers

| Language | Projects | Share |
|---|---|---|
| Rust | 482 | `███████████████` 36.5% |
| Go | 405 | `████████████` 30.7% |
| Python | 186 | `██████` 14.1% |
| C | 87 | `███` 6.6% |
| C++ | 37 | `█` 2.8% |
| TypeScript | 34 | `█` 2.6% |
| Shell | 18 | `█` 1.4% |
| C# | 12 | `█` 0.9% |

| Group | Projects |
|---|---|
| Development | 386 |
| AI | 49 |
| Operate | 332 |
| Data & Files | 171 |
| Work & Communication | 139 |
| Media & Play | 118 |
| Utilities | 126 |
| **Total** | **1,321** |

## How this list is built

This repository is the read-only, Git-friendly mirror of the [awesometui.com](https://awesometui.com) catalog.

- `scripts/build.mjs` pulls every published project from the public API (`/api/projects`), writes a slim snapshot to `data/projects.json`, and renders this README. No dependencies; Node 18+.
- Placement mirrors the site taxonomy: a project tagged with a focused sub-collection (e.g. *Kubernetes*, *Music Players*) is listed there; otherwise it sits under its primary category. Each project appears once.
- Descriptions come from the GitHub repository (falling back to the catalog summary), trimmed to one line.
- A GitHub Action re-syncs weekly. Star counts drift between syncs; the badge at the top shows the last sync date.

```sh
node scripts/build.mjs            # fetch live catalog, rebuild data + README
node scripts/build.mjs --offline  # rebuild README from data/projects.json
```

## Contributing

The list is generated, so edits to `README.md` by hand will be overwritten. Instead:

- **Add a TUI** — submit it at [awesometui.com/contribute](https://awesometui.com/contribute). It gets imported from GitHub, classified, and published to the catalog, and lands here on the next sync.
- **Fix a category, description, or dead project** — [open an issue](https://github.com/alvinunreal/awesometui/issues/new/choose) with the repo and what is wrong.
- **Maintainers** — sign in with GitHub at [awesometui.com/my-projects](https://awesometui.com/my-projects) to claim your project, correct its metadata, and add screenshots.
- **Improve the generator** — pull requests to `scripts/build.mjs`, the workflow, or this repo's docs are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

What belongs: real terminal user interfaces — interactive, keyboard-driven, drawn in the terminal. Plain CLIs, GUI apps, and web dashboards are out of scope. Libraries and frameworks for building TUIs are in.

---

<div align="center">

<sub>Synced 2026-08-30 16:36 UTC from <a href="https://awesometui.com">awesometui.com</a> · 1,321 projects · Made for people who love the terminal.</sub>

<sub>To the extent possible under law, this list is released under <a href="LICENSE">CC0 1.0</a>. Project names and descriptions belong to their authors.</sub>

</div>
