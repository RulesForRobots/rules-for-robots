# Moving from the old marketplace

Rules for Robots was built in [lifelike-and-believable/rules-for-robots](https://github.com/lifelike-and-believable/rules-for-robots), whose marketplace is named `rules-for-robots`. The plugins are being rebuilt here, in a marketplace named `rfr`, with versions starting again at 1.0.0.

The two names differ so that both marketplaces can be installed at once, and projects move one at a time. Until a project moves, nothing changes for it.

This page gets the steps for moving a project once `rfr-core` and the plugins that project uses are released here. In outline:

1. Add the `rfr` marketplace and install the new plugins (`rfr-core@rfr` and the project's domain plugin).
2. Run `/rfr-core:setup` again, which writes the rules from the new plugins.
3. For a project on the full process, change each `uses:` line in its workflows to the new repository and tag.
4. Uninstall the old plugins from the project's settings.

When no project uses the old marketplace, its repository moves into this organization as `rules-for-robots-legacy` and is archived. Links to it keep working.
