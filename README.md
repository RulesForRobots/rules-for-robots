<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/rules-for-robots-dark.svg">
  <img src="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/rules-for-robots-light.svg" alt="Rules for Robots" height="72">
</picture>

> Rules for Robots lets one person direct agents through a whole project by approving decisions, never commands. The person approves what the work should be (a brief, a design, the documentation users will read) and whether the result is right. Agents do everything in between without asking. What must never happen is made impossible, not asked about; what must be true is checked by CI; who approved what is recorded in GitHub. It works for a weekend script and for a product with many features, and the same approach applies to software, to pictures and film, and to research.

Rules for Robots is a set of plugins for [Claude Code](https://code.claude.com), published in one marketplace named `rfr`.

**Status:** being rebuilt in this organization. The marketplace lists no plugins yet; they arrive one at a time, starting with `rfr-core`. Until then, the plugins in use are in [lifelike-and-believable/rules-for-robots](https://github.com/lifelike-and-believable/rules-for-robots), whose marketplace is named `rules-for-robots`, so both can be installed at once. The plan is the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md); the steps and their state are in [ROADMAP.md](ROADMAP.md).

## How it works

1. **Approve decisions, never commands.** You review artifacts in GitHub. A permission prompt or a question during a run is a fault.
2. **Each control sits where it cannot be argued with.** Who approved: GitHub reviews and branch protection. What is true: CI. What can be damaged: the environment, and guards that refuse.
3. **Only what earns its place.** A rule ships when it has a mechanical check or evidence that it changes what agents do.
4. **Tried on a throwaway repository, then on a real project,** before anything is called done.

## Choose how much

One way of working, used in part or in full. [Choosing a setup](docs/choosing-a-setup.md) explains each.

| | Rules only | Full process |
|---|---|---|
| For | A script, a prototype, agent-assisted work | A product with users and features, agents running unattended |
| Installs | `rfr-core` and a domain plugin, then `/rfr-core:setup` | The same, plus `rfr-process`, then `/rfr-process:setup`, the `rfr-agent` App, and branch protection |
| Gets | Rules, guards, reviewers, the domain's skills | Approved packets, approvals in GitHub, delivery runs, lasting tutorials |

Moving up later is installing `rfr-process` and running its setup; nothing installed earlier changes.

## Getting started

When the first plugins are listed:

```
/plugin marketplace add RulesForRobots/rules-for-robots
/plugin install rfr-core@rfr
```

then a domain plugin, such as `rfr-web@rfr`, and `/rfr-core:setup`. [Channels](docs/channels.md) explains how to follow pinned releases or the latest changes.

## The plugins

| Plugin | For | Repository |
|---|---|---|
| `rfr-core` | Every project: guards, setup, the working-agreement rules | [rules-for-robots-core](https://github.com/RulesForRobots/rules-for-robots-core) |
| `rfr-process` | The full process: process state, the GitHub gate, delivery runs | [rules-for-robots-core](https://github.com/RulesForRobots/rules-for-robots-core) |
| `rfr-feedback` | Optional: report what you find, as an issue | [rules-for-robots-core](https://github.com/RulesForRobots/rules-for-robots-core) |
| `rfr-engineering` | Any software: its stages, test rules, reviewers, tutorials | [rules-for-robots-engineering](https://github.com/RulesForRobots/rules-for-robots-engineering) |
| `rfr-web`, `rfr-unreal`, `rfr-android` | Websites and web apps; Unreal Engine plugins; Android apps | [rules-for-robots-engineering](https://github.com/RulesForRobots/rules-for-robots-engineering) |
| `rfr-creation` | Pictures, video, and games | [rules-for-robots-creation](https://github.com/RulesForRobots/rules-for-robots-creation) |
| | Research: scope to come | [rules-for-robots-research](https://github.com/RulesForRobots/rules-for-robots-research) |

Where a plugin lives does not matter to you: you install it from the `rfr` marketplace, and if it moves to another repository, only its line in the marketplace changes.

## Contributing

See the organization's [CONTRIBUTING.md](https://github.com/RulesForRobots/.github/blob/main/CONTRIBUTING.md). Feedback from a project goes in an issue on the repository of the plugin concerned, or here if you are not sure.

## Licence

[MIT](LICENSE).
