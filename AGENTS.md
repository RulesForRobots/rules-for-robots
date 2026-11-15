# rules-for-robots

The front door of Rules for Robots: the charter and getting started (`README.md`), the `rfr` plugin marketplace (`.claude-plugin/marketplace.json`), and documentation for people choosing and adopting it (`docs/`). It holds no plugin code; each plugin lives in a `rules-for-robots-<domain>` repository and is listed here by its repository, path, and release.

Read [ROADMAP.md](ROADMAP.md) first: it has the work across repositories and the handoff for a new session. Update it before a session ends.

## Commands

- Verify (run before reporting work as done, and include its output): `npm run verify`. It tests and runs the marketplace check, which runs `claude plugin validate` when Claude Code is on the PATH. Node 22 or later; no install step.

## The marketplace

- Two channels, one per branch ([docs/channels.md](docs/channels.md)). On `main`, the stable channel, every plugin is pinned to its own release tag, `<plugin>--v<version>`, or a commit. On `latest`, every plugin is at its repository's `main`. The check enforces both.
- Every source names a `rules-for-robots-<domain>` repository in RulesForRobots. Adding a plugin to `main` is part of releasing it; adding it to `latest` is part of creating it.
- Moving a plugin to another repository changes its line here and nothing else.

## Writing

- The README leads with the choice between "rules only" and "full process", so a small project is not handed the whole process to read.
- Canadian English. Plain sentences; no emphatic capitals, few em dashes, no "it's not X, it's Y" constructions.
