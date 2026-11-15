# Roadmap

Work across the organization's repositories, and the handoff for a session that has none of the conversation behind it. Each repository's own open work is in its `ROADMAP.md`. The plan is the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md), approved on 2026-11-15; its section 10 has the maintainer's decisions (D1 to D8).

## The steps

| Step | What | State |
|---|---|---|
| 1 | Approve the rebuild plan | Done (archive pull request #279) |
| 2 | Scaffold the organization | The agent's part is in pull requests on each repository; the maintainer's part is in Settings (below) |
| 3 | Core, rules only: `rfr-core` with its guards, `setup`, and rules; tried on a throwaway repository, then one real project | Next |
| 4 | Core, full process: `rfr-process` and `rfr-engineering` as its first stages; the gate tried on a throwaway repository first | |
| 5 | Move XR Studio In A Box, with `rfr-web`. The acceptance test: one approval, no interruptions, a preview and a tutorial at the end | |
| 6 | The other projects, one at a time (Kettlebird website; Open3DPuppet with `rfr-unreal`), then the first stable release | |
| 7 | Creation: `rfr-creation`, from the logo and intro-film trials | |
| 8 | Archive: the old repository moves here as `rules-for-robots-legacy` and is archived | |

## Step 2, the maintainer's part

In Settings, not something an agent can do:

- Two-factor authentication required for members; base permission read.
- The Claude GitHub App on the organization (cloud sessions need it), and the `rfr-agent` App where projects use the gate.
- A branch ruleset on each repository's default branch: pull request required, no force push, no deletion, and the `verify` check required. Made once, then exported as JSON and imported on the others, because organization rulesets are not enforced on the Free plan.
- Default labels, including `feedback`.
- Each repository's social preview, from `brand/social/` in [RulesForRobots/.github](https://github.com/RulesForRobots/.github). The lines under the names on them have not been reviewed.
- The `latest` branch of this repository, made from `main` once the scaffolding merges: it is the latest channel, and lists the same (empty) marketplace until plugins arrive.

## Handoff

- **State on 2026-11-15:** the six repositories are scaffolded, each in one pull request: this front door with an empty `rfr` marketplace; `.github` with the profile, brand, and community files; Core and Engineering with CI and the release workflow working on an empty plugin (`rfr-core`, `rfr-engineering`, both 0.1.0 and not for release); Creation and Research with their scope and no plugin.
- **The old repository** (`lifelike-and-believable/rules-for-robots`) is frozen for features and is still what projects use. Its `docs/handoff.md` has the full history up to the rebuild.
- **CI in every domain repository** is a copy of Core's (`.github/scripts/`, `ci.yml`, `release.yml`); change it in Core first. Why: Core's ADR 0001.
- **Releases** are the maintainer's decision: Actions, Release, Run workflow, in the repository that holds the plugin. Dry run by default.
- **Next:** step 3 in Core. Its roadmap lists what carries over, including a guard fix found while planning this: the MCP guard refused Claude Code's own session tool `add_repo`, which changes the session and not an outside service.
