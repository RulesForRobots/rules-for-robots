import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { checkMarketplace } from '../marketplace.mjs';

const entry = (source, name = 'rfr-core') => ({ name, source });
const repo = 'RulesForRobots/rules-for-robots-core';

describe('checkMarketplace', () => {
  it('accepts the committed marketplace on both channels', () => {
    const marketplace = JSON.parse(readFileSync(new URL('../../../.claude-plugin/marketplace.json', import.meta.url), 'utf8'));
    assert.deepEqual(checkMarketplace(marketplace, 'stable'), []);
    assert.deepEqual(checkMarketplace(marketplace, 'latest'), []);
  });

  it('requires the name rfr', () => {
    assert.match(checkMarketplace({ name: 'rules-for-robots', plugins: [] }, 'stable').join(), /not "rfr"/);
  });

  it('on the stable channel, requires each plugin pinned to its own release tag or a sha', () => {
    const ok = [entry({ source: 'git-subdir', url: repo, path: 'plugins/rfr-core', ref: 'rfr-core--v1.0.0' }),
      entry({ source: 'git-subdir', url: repo, path: 'plugins/rfr-web', sha: 'a'.repeat(40) }, 'rfr-web')];
    assert.deepEqual(checkMarketplace({ name: 'rfr', plugins: ok }, 'stable'), []);

    const unpinned = [entry({ source: 'git-subdir', url: repo, path: 'plugins/rfr-core' })];
    assert.match(checkMarketplace({ name: 'rfr', plugins: unpinned }, 'stable').join(), /pinned/);
    assert.deepEqual(checkMarketplace({ name: 'rfr', plugins: unpinned }, 'latest'), []);

    const wrongTag = [entry({ source: 'git-subdir', url: repo, path: 'plugins/rfr-core', ref: 'rfr-web--v1.0.0' })];
    assert.match(checkMarketplace({ name: 'rfr', plugins: wrongTag }, 'stable').join(), /pinned/);
    const branch = [entry({ source: 'git-subdir', url: repo, path: 'plugins/rfr-core', ref: 'main' })];
    assert.match(checkMarketplace({ name: 'rfr', plugins: branch }, 'stable').join(), /pinned/);
  });

  it('refuses a folder in this repository, a repository outside the organization, and duplicates', () => {
    assert.match(checkMarketplace({ name: 'rfr', plugins: [entry('./plugins/core')] }, 'latest').join(), /not a folder here/);
    const outside = [entry({ source: 'git-subdir', url: 'someone/rules-for-robots-core', path: 'x' })];
    assert.match(checkMarketplace({ name: 'rfr', plugins: outside }, 'latest').join(), /not a rules-for-robots-<domain> repository/);
    const twice = [entry({ source: 'github', repo }), entry({ source: 'github', repo })];
    assert.match(checkMarketplace({ name: 'rfr', plugins: twice }, 'latest').join(), /listed twice/);
  });
});
