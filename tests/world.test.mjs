import test from 'node:test';
import assert from 'node:assert/strict';
import {Game, blocked, distance} from '../src/core.js';
import {generateFloor, MAX_FLOORS, DEFAULT_RUN_SEED} from '../src/world.js';
import {decodeSave} from '../src/save.js';

function checkFloor(stage, seed) {
  const g = new Game(stage, [], 0, seed);
  g.updateNav();
  const points = [g.player, g.config.key, g.config.exit, ...g.enemies, ...g.pickups];
  for (const p of points) {
    const label = `floor ${stage + 1}, seed ${seed}, point ${p.x},${p.z}`;
    assert(!blocked(p.x, p.z, p.r ?? .43, g.obstacles), 'collision: ' + label);
    const i = Math.round(p.z + 21) * 39 + Math.round(p.x + 19);
    assert(g.flow[i] >= 0, 'unreachable: ' + label);
  }
  assert(distance(g.config.key, g.config.exit) > 2.6, 'key and exit must be separate');
  assert(g.enemies.length > 0 && g.enemies.length <= 26);
  assert(g.enemies.every(e => e.hp <= 438 && e.speed <= 3.25));
  assert.equal(g.pickups.length, 3);
  assert.equal(g.config.floor, stage + 1);
  return g.config;
}

test('all 999 generated floors have connected keys, exits, supplies and enemy spawns', () => {
  const layouts = new Set();
  for (let stage = 0; stage < MAX_FLOORS; stage++) {
    const floor = checkFloor(stage, DEFAULT_RUN_SEED);
    const signature = floor.tiles.join('');
    assert(!layouts.has(signature), 'each floor must have a new layout');
    layouts.add(signature);
  }
});

test('other run seeds remain connected at early, middle and final floors', () => {
  for (const seed of [0, 1, 12345678, 0xffffffff]) {
    for (const stage of [0, 1, 4, 98, 499, 997, 998]) checkFloor(stage, seed);
  }
});

test('retry and continue reproduce the map while a new run changes it', () => {
  const first = generateFloor(47, 12345);
  assert.deepEqual(generateFloor(47, 12345), first);
  assert.notDeepEqual(generateFloor(48, 12345).tiles, first.tiles);
  assert.notDeepEqual(generateFloor(47, 67890).tiles, first.tiles);
  const saved = decodeSave(JSON.stringify({stage:47, upgrades:['power'], score:1234, runSeed:12345}));
  assert.deepEqual(new Game(saved.stage, saved.upgrades, saved.score, saved.runSeed).config, first);
});

test('save migration preserves progress and accepts floor 999, but rejects invalid saves', () => {
  const old = decodeSave(JSON.stringify({stage:2, upgrades:['power'], score:3450}));
  assert.equal(old.runSeed, DEFAULT_RUN_SEED);
  assert.equal(old.stage, 2);
  const last = {stage:998, upgrades:['power', 'power'], score:999999, runSeed:0xffffffff};
  assert.deepEqual(decodeSave(JSON.stringify(last)).upgrades, ['power']);
  for (const patch of [{stage:999}, {stage:-1}, {stage:1.5}, {runSeed:-1}, {score:-1}, {upgrades:['invalid']}]) {
    assert.equal(decodeSave(JSON.stringify({...last, ...patch})), null);
  }
  assert.equal(decodeSave('not json'), null);
  assert.equal(decodeSave(null), null);
});
