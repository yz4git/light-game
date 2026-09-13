import test from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../src/core.js';
import {renderAreaClear} from '../src/clear-screen.js';

function openClear(stage, upgrades, selected) {
  const game = new Game(stage, upgrades, 2400);
  game.status = 'clear';
  game.kills = game.config.count;
  game.time = 83;
  let screen, next, advances = 0;
  renderAreaClear(game, upgrades, {
    modal: (...args) => { screen = args; },
    readSelection: () => selected,
    onNext: result => {
      advances++;
      next = new Game(result.stage, result.upgrades, result.score);
    },
  });
  return {screen, advance: () => screen[3][0][1](), result: () => ({next, advances})};
}

test('clear screen always provides a separate Next button with a default upgrade', () => {
  const ui = openClear(0, [], undefined);
  assert.equal(ui.screen[4], 'stage-clear');
  assert.match(ui.screen[2], /value="power" checked/);
  assert.equal(ui.screen[3].length, 1);
  assert.match(ui.screen[3][0][0], /次のエリアへ（エリア 2）/);
  ui.advance();
  const {next} = ui.result();
  assert.equal(next.status, 'playing');
  assert.equal(next.stage, 1);
  assert.equal(next.score, 2400);
  assert.deepEqual(next.upgrades, ['power']);
});

test('selecting an upgrade advances to area 3 once and preserves earlier upgrades', () => {
  const upgrades = ['power'];
  const ui = openClear(1, upgrades, 'wide');
  assert.doesNotMatch(ui.screen[2], /value="power"/);
  ui.advance();
  ui.advance();
  const {next, advances} = ui.result();
  assert.equal(next.stage, 2);
  assert.equal(next.status, 'playing');
  assert.equal(next.player.hp, 5);
  assert.equal(next.player.battery, 100);
  assert.equal(advances, 1);
  assert.deepEqual(next.upgrades, ['power', 'wide']);
  assert.deepEqual(upgrades, ['power']);
});

test('missing or stale selection cannot block Next', () => {
  const ui = openClear(1, ['power'], 'power');
  ui.advance();
  assert.deepEqual(ui.result().next.upgrades, ['power', 'range']);
});
