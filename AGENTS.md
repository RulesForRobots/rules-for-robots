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

## Finishing work

Please avoid stopping while you still owe work the user asked for. Be persistent and do not stop unless needed.

While status notes are welcome, as is clarifying with the user on open decisions, carry on with work that does not depend on the user's answer without unnecessary stops.

If you notice yourself inviting the user to redirect you or offering to wait, instead proceed on the next part of the task. You may meet ordinary obstacles like errors, timeouts, locked files, empty results or failing tools. Diagnose them first, and when they are not real blockers, work through them with the access you have (wait and retry, fix the request, use another tool or source) rather than stopping unnecessarily.

If someone clearly decided something is a hard blocker, such as a file marked not to be touched, access that was intentionally withheld, or a safety guardrail, leave it alone, say plainly what you found, and look for another safe way to finish the task. Stopping before the task is complete is very rarely merited, as in when the task can't move forward without user input, or where the blocker is deliberate and should not be worked past. This does not override the need for confirmation on risky or destructive actions.
