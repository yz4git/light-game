import test from 'node:test';
import assert from 'node:assert/strict';
import {Game,blocked} from '../src/core.js';
import {makeEnemy,ENEMY_TYPES} from '../src/enemies.js';
import {THEMES} from '../src/environment.js';
import {generateFloor} from '../src/world.js';

const advance=(g,seconds,input={})=>{for(let i=0;i<Math.round(seconds*60);i++)g.tick(1/60,input);};
function arena(type,z=4){
  const g=new Game();g.obstacles=[];g.pickups=[];
  Object.assign(g.player,{x:0,z:0,angle:0,invulnerable:0});
  g.config.key={x:15,z:15};g.config.exit={x:-15,z:15};
  const e=makeEnemy(type,0,{x:0,z},0);e.state='hunt';e.speed=0;g.enemies=[e];
  return {g,e};
}
const bullet=(x=0,z=3)=>({id:123,x,z,r:.17,vx:0,vz:-3.5,life:2.6});

test('six enemy identities appear from the first floor and rosters vary by floor',()=>{
  const first=new Game();
  assert.deepEqual(new Set(first.enemies.map(e=>e.type)),new Set(Object.keys(ENEMY_TYPES)));
  assert.notDeepEqual(first.enemies.map(e=>e.type),new Game(1).enemies.map(e=>e.type));
  assert.deepEqual(first.enemies,new Game().enemies);
});

test('wisp gives a warning, fires at the committed direction and then recovers',()=>{
  const {g,e}=arena('wisp');
  g.tick(1/60,{});assert.equal(e.state,'cast');
  advance(g,.7);assert.equal(g.projectiles.length,0);
  g.player.x=2;
  advance(g,.3);
  assert.equal(g.projectiles.length,1);
  assert.equal(g.projectiles[0].vx,0,'shot must not retarget during its warning');
  assert(g.projectiles[0].vz<0);
  assert.equal(e.state,'recover');
});

test('light interrupts wisp casting and spore pulses before they are released',()=>{
  for(const [type,z] of [['wisp',4],['spore',3]]){
    const {g,e}=arena(type,z);g.tick(1/60,{});
    advance(g,.5,{light:true,aim:0});
    assert.equal(e.state,'recover');
    assert.equal(g.projectiles.length,0);assert.equal(g.pulses.length,0);
    assert.equal(g.events.filter(event=>event.type==='stagger').length,1);
    assert(e.hp>0,'interrupt is distinct from defeating the enemy');
  }
});

test('wisp projectiles collide with walls, can be extinguished and respect dash immunity',()=>{
  const {g}=arena('wisp');g.enemies=[];
  g.obstacles=[{x:0,z:1.5,w:3,d:.12}];g.projectiles=[bullet()];
  advance(g,1);assert.equal(g.projectiles.length,0);assert.equal(g.player.hp,5);
  g.obstacles=[];g.projectiles=[bullet()];
  g.tick(1/60,{light:true,aim:0});
  assert.equal(g.projectiles.length,0);assert(g.events.some(e=>e.type==='extinguish'));
  g.lit=false;g.projectiles=[bullet(0,.5)];g.dash(1,0);g.tickAttacks(1/60);
  assert.equal(g.player.hp,5);assert.equal(g.projectiles.length,0);
  g.player.invulnerable=0;g.projectiles=[bullet(0,.5)];g.tickAttacks(1/60);
  assert.equal(g.player.hp,4);assert.equal(g.projectiles.length,0);
});

test('spore warning releases one expanding pulse with bounded damage and lifetime',()=>{
  const {g,e}=arena('spore',3);g.tick(1/60,{});assert.equal(e.state,'puff');
  advance(g,1);assert.equal(g.pulses.length,0);assert.equal(g.player.hp,5);
  advance(g,.3);assert.equal(g.pulses.length,1);assert.equal(g.player.hp,5);
  advance(g,.6);assert.equal(g.player.hp,4);
  advance(g,1);assert.equal(g.player.hp,4);assert.equal(g.pulses.length,0);
});

test('pulse damage cannot cross a wall or reach beyond its radius',()=>{
  const {g}=arena('spore',3);g.enemies=[];
  const pulse=()=>({id:1,x:0,z:3,radius:0,previous:0,maxRadius:4.2,hit:false});
  g.obstacles=[{x:0,z:1.5,w:5,d:.2}];g.pulses=[pulse()];
  advance(g,1);assert.equal(g.player.hp,5);assert.equal(g.pulses.length,0);
  g.obstacles=[];g.player.z=-2;g.pulses=[pulse()];
  advance(g,1);assert.equal(g.player.hp,5);
});

test('stalker approaches from the side while keeping solid collision',()=>{
  const {g,e}=arena('stalker');e.speed=2.15;
  advance(g,.3);assert(Math.abs(e.x)>.2);assert(e.z<4);
  g.obstacles=[{x:-1,z:3,w:.2,d:5}];
  advance(g,.5);assert(!blocked(e.x,e.z,e.r,g.obstacles));
});

test('all twelve backgrounds use distinct artwork and recognized obstacle models',()=>{
  assert.equal(new Set(THEMES.map(t=>t.id)).size,12);
  assert.equal(new Set(THEMES.map(t=>t.pattern)).size,12);
  const visuals=new Set(['car','crate','locker','shelf','planter','machine','tank','crystal','stone','rubble']);
  for(let stage=0;stage<12;stage++){
    const floor=generateFloor(stage);assert.equal(floor.theme.id,THEMES[stage].id);
    for(const prop of floor.obstacles.filter(o=>o.kind!=='wall'))assert(visuals.has(prop.visual));
  }
});
