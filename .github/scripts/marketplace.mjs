// Checks .claude-plugin/marketplace.json, the rfr marketplace. Run by `npm run verify` and CI.
//
//   node .github/scripts/marketplace.mjs [--channel stable|latest]
//
// The channel is the branch's: `main` is stable, where every plugin is pinned to a released tag
// (<plugin>--v<version>) or a commit; `latest` lists plugins at their repository's main. Without
// --channel it is taken from GITHUB_BASE_REF or GITHUB_REF_NAME, and is stable unless that is `latest`.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ORG = 'RulesForRobots';
const TAG = /^(rfr-[a-z0-9-]+)--v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

export function checkMarketplace(marketplace, channel) {
  const errors = [];
  if (marketplace.name !== 'rfr') errors.push(`the marketplace is named "${marketplace.name}", not "rfr" (decision D3)`);
  if (!Array.isArray(marketplace.plugins)) return [...errors, 'plugins is not a list'];
  const seen = new Set();
  for (const [i, plugin] of marketplace.plugins.entries()) {
    const label = plugin?.name ?? `plugins[${i}]`;
    if (typeof plugin?.name !== 'string' || !/^rfr-[a-z0-9-]+$/.test(plugin.name)) {
      errors.push(`${label}: the name is not rfr-<name> in lower case`);
    }
    if (seen.has(plugin?.name)) errors.push(`${label}: listed twice`);
    seen.add(plugin?.name);
    const source = plugin?.source;
    // The front door holds no plugins, so every source names a repository in the organization.
    if (!source || typeof source !== 'object') {
      errors.push(`${label}: the source must name a repository in ${ORG}, not a folder here`);
      continue;
    }
    const where = [source.repo, source.url].filter((v) => typeof v === 'string').join(' ');
    if (!new RegExp(`(^|/|:)${ORG}/rules-for-robots-[a-z0-9-]+(\\.git)?($|\\s)`, 'i').test(where)) {
      errors.push(`${label}: the source is not a rules-for-robots-<domain> repository in ${ORG}`);
    }
    if (channel === 'stable') {
      const tag = typeof source.ref === 'string' ? source.ref.match(TAG) : null;
      if (typeof source.sha !== 'string' && !(tag && tag[1] === plugin.name)) {
        errors.push(`${label}: on the stable channel it must be pinned to its own release tag (${plugin.name}--v<version>) or a sha`);
      }
    }
  }
  return errors;
}

function main(argv) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
  const i = argv.indexOf('--channel');
  const branch = process.env.GITHUB_BASE_REF || process.env.GITHUB_REF_NAME || '';
  const channel = i !== -1 ? argv[i + 1] : branch === 'latest' ? 'latest' : 'stable';
  const marketplace = JSON.parse(readFileSync(join(root, '.claude-plugin', 'marketplace.json'), 'utf8'));
  const errors = checkMarketplace(marketplace, channel);
  if (errors.length) {
    console.error(`marketplace.json (${channel} channel):\n${errors.map((e) => `  - ${e}`).join('\n')}`);
    return 1;
  }
  console.log(`marketplace.json (${channel} channel): ${marketplace.plugins.length} plugins, ok`);

  // Strict validation treats an empty marketplace as an error, so it applies once a plugin is listed.
  const claude = spawnSync('claude', ['--version'], { encoding: 'utf8', shell: process.platform === 'win32' });
  if (claude.status !== 0) {
    console.log('claude plugin validate: skipped, Claude Code is not on the PATH (CI runs it)');
    return 0;
  }
  const args = ['plugin', 'validate', ...(marketplace.plugins.length ? ['--strict'] : []), '.'];
  const result = spawnSync('claude', args, { cwd: root, stdio: 'inherit', shell: process.platform === 'win32' });
  return result.status === 0 ? 0 : 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = main(process.argv.slice(2));
}
