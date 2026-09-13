import {DEFAULT_RUN_SEED,MAX_FLOORS} from './world.js';
const UPGRADE_IDS=['power','range','wide','battery','dash'];
export const SAVE_KEY='light-game-save-v1';
export function decodeSave(text) {
  try {
    const value=JSON.parse(text);
    if(!value||!Number.isInteger(value.stage)||value.stage<0||value.stage>=MAX_FLOORS||!Array.isArray(value.upgrades)||!value.upgrades.every(x=>UPGRADE_IDS.includes(x))||!Number.isFinite(value.score)||value.score<0)return null;
    if(value.runSeed!==undefined&&(!Number.isInteger(value.runSeed)||value.runSeed<0||value.runSeed>0xffffffff))return null;
    return {...value,upgrades:[...new Set(value.upgrades)],runSeed:value.runSeed??DEFAULT_RUN_SEED};
  } catch {return null;}
}
export function newRunSeed() {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}
