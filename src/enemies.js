// Shared combat and visual identities. Colors also identify enemies on the map.
export const ENEMY_TYPES = {
  shadow: {name:'影', hp:43, speed:1.55, radius:.46, scale:1, skin:'#192331', glow:'#ffdd8a'},
  skitter: {name:'走り影', hp:30, speed:2.55, radius:.35, scale:.72, skin:'#29393a', glow:'#ffe5a2'},
  brute: {name:'影の番人', hp:175, speed:1.23, radius:.88, scale:1.72, skin:'#373c45', glow:'#ffb478'},
  wisp: {name:'鬼火', hp:36, speed:1.05, radius:.42, scale:1, skin:'#244f69', glow:'#82eaff'},
  stalker: {name:'忍び影', hp:48, speed:2.15, radius:.44, scale:1.04, skin:'#433c61', glow:'#cbadff'},
  spore: {name:'胞子ランタン', hp:72, speed:.72, radius:.59, scale:1.12, skin:'#415d48', glow:'#b9ee89'},
};

export function makeEnemy(type, id, point, stage, phase = 0) {
  const spec = ENEMY_TYPES[type];
  const pressure = Math.min(1.5, Math.log2(stage + 1) / 7);
  const hp = Math.round(spec.hp * (1 + pressure));
  return {id, ...point, type, r:spec.radius, hp, maxHp:hp,
    speed:spec.speed * (1 + pressure * .18), angle:0, state:'idle', timer:0,
    cooldown:0, exposure:0, phase, chargeX:0, chargeZ:0, death:0, litTime:0,
    strafe:id % 2 ? 1 : -1};
}

export function rosterForFloor(stage) {
  const roster = ['shadow', 'skitter', 'wisp', 'stalker', 'spore'];
  const offset = stage % roster.length;
  return [...roster.slice(offset), ...roster.slice(0, offset)];
}
