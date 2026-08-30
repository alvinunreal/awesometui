# Contributing to Awesome TUI

Thanks for caring about terminal software.

This repository is the Git-friendly mirror of the [awesometui.com](https://awesometui.com) catalog. `README.md` and `data/projects.json` are **generated** by `scripts/build.mjs` from the public API and re-synced weekly by GitHub Actions, so hand edits to those two files will be overwritten on the next run.

## Adding a project

Submit it at **[awesometui.com/contribute](https://awesometui.com/contribute)**.

What happens next: the Worker fetches the GitHub metadata, records stars and release evidence, runs a best-effort TUI classification, and publishes the project to the catalog when it passes review. It appears in this README on the following sync.

What belongs:

- Real **terminal user interfaces** — interactive, keyboard-driven, drawn in the terminal (curses, ratatui, Bubble Tea, Textual, blessed, and friends).
- Libraries and frameworks for building TUIs.
- Tools that ship a TUI mode alongside a CLI.

What does not:

- Plain non-interactive CLIs, shell prompts, or one-shot scripts.
- GUI or web applications, even if they are "for developers".
- Abandoned repositories with no working release, or forks with no meaningful divergence.

## Fixing an entry

Wrong category, stale description, dead repository, misclassified CLI? [Open an issue](https://github.com/alvinunreal/awesometui/issues/new/choose) with the repository URL and what is wrong. Corrections are made in the catalog and flow back here.

If you **maintain** a listed project, sign in with GitHub at [awesometui.com/my-projects](https://awesometui.com/my-projects) to claim it. Claimed projects can correct their metadata and publish screenshots directly.

## Improving this repository

Pull requests are welcome for anything that is not generated:

- `scripts/build.mjs` — rendering, ordering, taxonomy mapping, description clean-up.
- `.github/workflows/sync.yml` — the sync schedule.
- `CONTRIBUTING.md`, issue templates, assets.

Run the generator locally (Node 18+, no dependencies):

```sh
node scripts/build.mjs            # fetch the live catalog, rebuild data + README
node scripts/build.mjs --offline  # rebuild README from the committed data snapshot
```

Please keep the README readable for humans first: one line per project, no marketing language, no hype.

## Taxonomy

Categories and sub-collections mirror the site. The single source of truth is `app/lib/categories.js` in the [site repository](https://github.com/alvinunreal/com.awesometui); the copy in `scripts/build.mjs` should follow it. A project tagged with a focused sub-collection (for example *Kubernetes* or *Music Players*) is listed there; otherwise it appears under its primary category. Every project appears exactly once.
