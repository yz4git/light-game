import {MAX_FLOORS} from './world.js';
const UPGRADES = [
  {id: 'power', title: '高出力レンズ', desc: '光のダメージ +35%'},
  {id: 'range', title: 'ロングビーム', desc: '光が届く距離 +28%'},
  {id: 'wide', title: 'ワイドリフレクター', desc: '広い光で群れを狙える'},
  {id: 'battery', title: '省電力ユニット', desc: '電池の消費 −29%'},
  {id: 'dash', title: '軽量ブーツ', desc: 'ダッシュの待ち時間 −35%'},
];

export function renderAreaClear(game, upgrades, {
  modal,
  onNext,
  readSelection = () => document.querySelector('input[name="stage-upgrade"]:checked')?.value,
}) {
  if(game.stage>=MAX_FLOORS-1)throw new RangeError('The final floor has no next floor');
  const available = UPGRADES.filter(item => !upgrades.includes(item.id)).slice(0, 3);
  const nextStage = game.stage + 1;
  const minutes = Math.floor(game.time / 60);
  const seconds = String(Math.floor(game.time % 60)).padStart(2, '0');
  const body = `
    <div class="clear-stats">
      <span>退治した影<strong>${game.kills} / ${game.config.count}</strong></span>
      <span>探索時間<strong>${minutes}:${seconds}</strong></span>
      <span>スコア<strong>${game.score.toLocaleString()}</strong></span>
    </div>
    ${available.length ? `<fieldset class="upgrade-options">
      <legend>強化を1つ選んで、次の階へ</legend>
      <div class="upgrade-grid">${available.map((item, index) => `
        <label class="upgrade-choice">
          <input type="radio" name="stage-upgrade" value="${item.id}" ${index === 0 ? 'checked' : ''}>
          <span><strong>${item.title}</strong><small>${item.desc}</small></span>
        </label>`).join('')}
      </div>
    </fieldset>` : '<p>装備はすべて強化済み。次の階へ進もう。</p>'}
    <p class="clear-note">次の階で体力・アイテムが補充されます。</p>`;
  let leaving = false;
  modal('FLOOR CLEAR', `${game.stage + 1}階 クリア！`, body, [[
    `次の階へ（${nextStage + 1} / ${MAX_FLOORS}） →`,
    () => {
      if (leaving) return;
      const selected = available.find(item => item.id === readSelection()) || available[0];
      leaving = true;
      try {
        onNext({
          stage: nextStage,
          score: game.score,
          upgrades: selected ? [...upgrades, selected.id] : [...upgrades],
        });
      } catch (error) {
        leaving = false;
        throw error;
      }
    },
  ]], 'stage-clear');
}
