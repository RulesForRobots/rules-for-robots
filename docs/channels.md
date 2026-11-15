# Channels

The `rfr` marketplace has two channels, one per branch of this repository.

| Channel | Branch | Lists each plugin at | For |
|---|---|---|---|
| Stable | `main` | Its latest release, pinned to the tag `<plugin>--v<version>` | Everyone, by default |
| Latest | `latest` | Its repository's `main` | The maintainer's own projects, and anyone trying a change before it is released |

A project picks a channel with the `ref` in its `.claude/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "rfr": {
      "source": { "source": "github", "repo": "RulesForRobots/rules-for-robots", "ref": "latest" }
    }
  }
}
```

Leave out `ref` for the stable channel.

A release is the maintainer's decision, made at a pace adopters can follow. Each plugin has its own version and changelog, in the repository that holds it, and its releases are listed there.

Reusable workflows that a project calls from its own CI are called by the same tag as the plugin they belong to, for example `uses: RulesForRobots/rules-for-robots-core/.github/workflows/process.yml@rfr-process--v1.0.0`. The plugin's setup writes that line, and warns when the two drift apart.
