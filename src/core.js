import {makeEnemy,rosterForFloor} from './enemies.js';
import {clamp,distance,angleDelta,rng,blocked,moveBody,visible,beamHits} from './geometry.js';
import {generateFloor,DEFAULT_RUN_SEED,MAX_FLOORS} from './world.js';
export {clamp,distance,angleDelta,rng,blocked,moveBody,visible,beamHits} from './geometry.js';
export {MAX_FLOORS} from './world.js';
export class Game {
 constructor(stage=0,upgrades=[],score=0,runSeed=DEFAULT_RUN_SEED){this.upgrades=upgrades;this.score=score;this.stage=stage;this.runSeed=runSeed>>>0;this.config=generateFloor(stage,this.runSeed);this.obstacles=this.config.obstacles;this.time=0;this.status='playing';this.kills=0;this.events=[];this.hasKey=false;this.keyAvailable=true;this.keyDiscovered=false;this.lit=false;this.exhausted=false;this.flash=0;this.player={...this.config.start,r:.43,hp:5,maxHp:5,battery:100,angle:2.5,invulnerable:1.4,dashTime:0,dashCd:0,heal:2,cells:2,dx:0,dz:0};this.range=upgrades.includes('range')?11.5:9;this.damage=upgrades.includes('power')?42:31;this.halfAngle=upgrades.includes('wide')?.69:.48;this.enemies=[];this.pickups=[];this.projectiles=[];this.pulses=[];this.nextAttackId=0;this.rand=rng(this.config.seed);this.buildEnemies();this.buildNav();this.navTimer=0;this.navTarget='';}
 buildEnemies(){const roster=rosterForFloor(this.stage);this.enemies=this.config.spawns.map((point,i)=>makeEnemy(i===this.config.spawns.length-1?'brute':i===0?'shadow':roster[i%roster.length],i,point,this.stage,this.rand()*6.28));this.pickups=this.config.pickups.map(q=>({...q,taken:false}));}
 get keyVisibleOnMap(){return this.keyDiscovered&&!this.hasKey;}
 get isFinalFloor(){return this.stage===MAX_FLOORS-1;}
 buildNav(){this.navW=39;this.navD=43;this.walkable=new Uint8Array(this.navW*this.navD);for(let z=0;z<this.navD;z++)for(let x=0;x<this.navW;x++)this.walkable[z*this.navW+x]=blocked(x-19,z-21,.55,this.obstacles)?0:1;this.flow=new Int16Array(this.walkable.length);}
 updateNav(){const px=clamp(Math.round(this.player.x+19),0,38),pz=clamp(Math.round(this.player.z+21),0,42);let start=pz*this.navW+px;if(!this.walkable[start]){let best=Infinity;for(let i=0;i<this.walkable.length;i++)if(this.walkable[i]){const d=Math.hypot(i%39-px,Math.floor(i/39)-pz);if(d<best){start=i;best=d;}}}this.flow.fill(-1);this.flow[start]=0;const queue=[start];for(let q=0;q<queue.length;q++){const i=queue[q],x=i%39,z=Math.floor(i/39);for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,nz=z+dz,ni=nz*39+nx;if(nx<0||nx>=39||nz<0||nz>=43||!this.walkable[ni]||this.flow[ni]>=0)continue;this.flow[ni]=this.flow[i]+1;queue.push(ni);}}}
 direction(e){const p=this.player;if(visible(e,p,this.obstacles))return{x:p.x-e.x,z:p.z-e.z};const cx=clamp(Math.round(e.x+19),0,38),cz=clamp(Math.round(e.z+21),0,42);let target=null,best=Infinity;for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){const x=cx+dx,z=cz+dz,i=z*39+x;if(x<0||x>=39||z<0||z>=43||this.flow[i]<0)continue;const point={x:x-19,z:z-21};if(!visible(e,point,this.obstacles))continue;const score=this.flow[i]+Math.hypot(point.x-e.x,point.z-e.z)*.1;if(score<best){best=score;target=point;}}return target?{x:target.x-e.x,z:target.z-e.z}:{x:0,z:0};}
 emit(type,data={}){this.events.push({type,...data});}
 consume(type){if(this.status!=='playing')return false;const p=this.player;if(type==='heal'&&p.heal>0&&p.hp<p.maxHp){p.heal--;p.hp=Math.min(p.maxHp,p.hp+2);this.emit('heal');return true;}if(type==='cell'&&p.cells>0&&p.battery<95){p.cells--;p.battery=Math.min(100,p.battery+70);this.exhausted=false;this.emit('cell');return true;}return false;}
 dash(mx,mz){const p=this.player;if(this.status!=='playing'||p.dashCd>0)return;let d=Math.hypot(mx,mz);p.dx=d>.1?mx/d:Math.sin(p.angle);p.dz=d>.1?mz/d:Math.cos(p.angle);p.dashTime=.22;p.dashCd=this.upgrades.includes('dash')?.85:1.3;p.invulnerable=Math.max(p.invulnerable,.35);this.emit('dash',{x:p.x,z:p.z});}
 hit(dmg,e){const p=this.player;if(p.invulnerable>0)return;p.hp=Math.max(0,p.hp-dmg);p.invulnerable=1.25;this.flash=.3;const d=Math.max(.1,distance(p,e));moveBody(p,(p.x-e.x)/d*.65,(p.z-e.z)/d*.65,this.obstacles);this.emit('hurt');if(p.hp<=0){this.status='dead';this.emit('dead');}}
 // Ranged enemies have readable, interruptible preparations instead of contact charges.
 tickSpecial(e,dt,lit,d){
  if(e.type!=='wisp'&&e.type!=='spore')return false;
  const p=this.player,shot=e.type==='wisp',sight=visible(e,p,this.obstacles);
  if(e.state==='recover'){
   e.timer-=dt;if(e.timer<=0){e.state='hunt';e.cooldown=shot?1.5:1.8;}return true;
  }
  if(e.state==='cast'||e.state==='puff'){
   e.litTime=lit?e.litTime+dt:Math.max(0,e.litTime-dt*2);
   if(e.litTime>(shot?.32:.4)){e.state='recover';e.timer=1.25;this.emit('stagger',{x:e.x,z:e.z});return true;}
   e.timer-=dt;
   if(e.timer<=0){
    if(shot&&this.projectiles.length<18){
     this.projectiles.push({id:this.nextAttackId++,x:e.x+e.chargeX*(e.r+.22),z:e.z+e.chargeZ*(e.r+.22),r:.17,vx:e.chargeX*3.5,vz:e.chargeZ*3.5,life:2.6});
     this.emit('shot');
    }else if(!shot&&this.pulses.length<8){
     this.pulses.push({id:this.nextAttackId++,x:e.x,z:e.z,radius:0,previous:0,maxRadius:4.2,hit:false});
     this.emit('pulse');
    }
    e.state='recover';e.timer=shot?1.25:1.6;
   }
   return true;
  }
  if(e.cooldown<=0&&d<(shot?6.2:3.7)&&sight){
   e.state=shot?'cast':'puff';e.timer=e.maxTimer=shot?.95:1.25;e.litTime=0;
   e.chargeX=(p.x-e.x)/Math.max(.01,d);e.chargeZ=(p.z-e.z)/Math.max(.01,d);
   e.angle=Math.atan2(e.chargeX,e.chargeZ);this.emit('windup',{kind:e.type});return true;
  }
  let dir=this.direction(e);
  if(shot&&sight&&d<6.2){const nx=dir.x/Math.max(.01,d),nz=dir.z/Math.max(.01,d),radial=d<4?-1:d>5.6?1:0;dir={x:nx*radial-nz*e.strafe*.55,z:nz*radial+nx*e.strafe*.55};}
  const len=Math.hypot(dir.x,dir.z);
  if(len>.01){e.angle=Math.atan2(p.x-e.x,p.z-e.z);const speed=e.speed*(lit?.32:1);moveBody(e,dir.x/len*speed*dt,dir.z/len*speed*dt,this.obstacles);}
  return true;
 }
 tickAttacks(dt){
  for(let i=this.projectiles.length-1;i>=0;i--){
   const q=this.projectiles[i];q.life-=dt;let gone=q.life<=0;
   const steps=Math.max(1,Math.ceil(Math.hypot(q.vx,q.vz)*dt/.12));
   for(let n=0;n<steps&&!gone;n++){
    const next={x:q.x+q.vx*dt/steps,z:q.z+q.vz*dt/steps};
    if(blocked(next.x,next.z,q.r,this.obstacles)||!visible(q,next,this.obstacles)){gone=true;break;}
    Object.assign(q,next);
    if(this.lit&&beamHits(this.player,q,this.obstacles,this.range,this.halfAngle)){gone=true;this.emit('extinguish',{x:q.x,z:q.z});}
    else if(distance(q,this.player)<q.r+this.player.r){gone=true;this.hit(1,q);}
   }
   if(gone)this.projectiles.splice(i,1);
  }
  for(let i=this.pulses.length-1;i>=0;i--){
   const q=this.pulses[i];q.previous=q.radius;q.radius=Math.min(q.maxRadius,q.radius+dt*4.8);
   const d=distance(q,this.player);
   if(!q.hit&&d>=q.previous-this.player.r&&d<=q.radius+this.player.r&&visible(q,this.player,this.obstacles)){q.hit=true;this.hit(1,q);}
   if(q.radius>=q.maxRadius)this.pulses.splice(i,1);
  }
 }
 tick(dt,input={}){if(this.status!=='playing')return;dt=Math.min(dt,1/30);this.time+=dt;const p=this.player;this.flash=Math.max(0,this.flash-dt);p.invulnerable=Math.max(0,p.invulnerable-dt);p.dashCd=Math.max(0,p.dashCd-dt);let mx=input.x||0,mz=input.z||0;const md=Math.hypot(mx,mz);if(md>1){mx/=md;mz/=md;}if(input.dash)this.dash(mx,mz);
 this.lit=!!input.light&&!this.exhausted&&p.battery>0;if(this.lit){p.battery=Math.max(0,p.battery-dt*(this.upgrades.includes('battery')?8.5:12));if(p.battery<=0){this.exhausted=true;this.lit=false;this.emit('empty');}}else{p.battery=Math.min(100,p.battery+dt*16);if(this.exhausted&&p.battery>=28)this.exhausted=false;}
 if(p.dashTime>0){p.dashTime-=dt;moveBody(p,p.dx*dt*16,p.dz*dt*16,this.obstacles);}else moveBody(p,mx*dt*(this.lit?3.5:4.6),mz*dt*(this.lit?3.5:4.6),this.obstacles);
 let aim=input.aim;if(aim==null&&this.lit){let best=Infinity,target;for(const e of this.enemies){if(e.hp<=0)continue;const d=distance(e,p);if(d<this.range+2&&d<best&&visible(p,e,this.obstacles)){best=d;target=e;}}if(target)aim=Math.atan2(target.x-p.x,target.z-p.z);}if(aim==null&&md>.12)aim=Math.atan2(mx,mz);if(aim!=null)p.angle+=angleDelta(aim,p.angle)*Math.min(1,dt*12);
 this.navTimer-=dt;if(this.navTimer<=0){this.navTimer=.45;this.updateNav();}
 for(const e of this.enemies){if(e.hp<=0){e.death+=dt;continue;}e.cooldown=Math.max(0,e.cooldown-dt);const d=distance(e,p),lit=this.lit&&beamHits(p,e,this.obstacles,this.range,this.halfAngle);e.exposure=clamp(e.exposure+(lit?dt*4:-dt*3),0,1);if(lit){e.hp-=this.damage*dt*(e.state==='windup'?.75:1);if(e.hp<=0){this.kills++;this.score+=e.type==='brute'?500:100;this.emit('kill',{x:e.x,z:e.z,brute:e.type==='brute'});if(e.type==='brute')this.emit('bruteDown');if(this.kills%4===0)this.pickups.push({x:e.x,z:e.z,type:'energy',taken:false});continue;}}
 if(e.state==='idle'){e.angle+=dt*.3;if(d<9&&visible(e,p,this.obstacles)){e.state='hunt';this.emit('alert',{brute:e.type==='brute',kind:e.type});}else continue;}
 if(this.tickSpecial(e,dt,lit,d))continue;
 if(e.state==='windup'){e.timer-=dt;if(e.timer<=0){e.state='charge';e.timer=e.type==='brute'?.68:e.type==='stalker'?.34:.25;}continue;}
 if(e.state==='charge'){e.timer-=dt;moveBody(e,e.chargeX*dt*(e.type==='brute'?10:7),e.chargeZ*dt*(e.type==='brute'?10:7),this.obstacles);if(distance(e,p)<e.r+p.r+.16)this.hit(1,e);if(e.timer<=0){e.state='recover';e.timer=e.type==='brute'?1.2:.7;}continue;}
 if(e.state==='recover'){e.timer-=dt;if(e.timer<=0){e.state='hunt';e.cooldown=1.1;}continue;}
 if(d<(e.type==='brute'?5.1:1.5)&&e.cooldown<=0&&visible(e,p,this.obstacles)){e.state='windup';e.timer=e.maxTimer=e.type==='brute'?1.05:e.type==='stalker'?.75:.6;e.chargeX=(p.x-e.x)/Math.max(.01,d);e.chargeZ=(p.z-e.z)/Math.max(.01,d);e.angle=Math.atan2(e.chargeX,e.chargeZ);this.emit('windup',{brute:e.type==='brute'});continue;}
 const nav=this.direction(e),flank=e.type==='stalker'&&d>2.1&&visible(e,p,this.obstacles),dir=flank?{x:nav.x*.72-nav.z*.7*e.strafe,z:nav.z*.72+nav.x*.7*e.strafe}:nav,len=Math.hypot(dir.x,dir.z);if(len>.01){const s=e.speed*(lit?.32:1);e.angle=Math.atan2(dir.x,dir.z);moveBody(e,dir.x/len*s*dt,dir.z/len*s*dt,this.obstacles);if(lit&&d<3.4)moveBody(e,-dir.x/len*dt*.75,-dir.z/len*dt*.75,this.obstacles);}
 }
 this.tickAttacks(dt);
 // Resolve overlap so a group remains readable and cannot occupy a single attack point.
 for(let i=0;i<this.enemies.length;i++){const a=this.enemies[i];if(a.hp<=0)continue;for(let j=i+1;j<this.enemies.length;j++){const b=this.enemies[j];if(b.hp<=0)continue;const d=distance(a,b),overlap=a.r+b.r+.15-d;if(overlap>0){const ax=d>.001?(a.x-b.x)/d:1,az=d>.001?(a.z-b.z)/d:0;moveBody(a,ax*overlap*.25,az*overlap*.25,this.obstacles);moveBody(b,-ax*overlap*.25,-az*overlap*.25,this.obstacles);}}}
 if(!this.keyDiscovered&&this.lit&&beamHits(p,{...this.config.key,r:.25},this.obstacles,this.range,this.halfAngle)){this.keyDiscovered=true;this.emit('keyReveal');}if(this.status==='playing'&&!this.hasKey&&distance(p,this.config.key)<1.2&&visible(p,this.config.key,this.obstacles)){this.hasKey=true;this.keyDiscovered=true;this.score+=250;this.emit('key');}for(const q of this.pickups){if(!q.taken&&distance(p,q)<1.05&&visible(p,q,this.obstacles)){if(q.type==='energy'){p.battery=Math.min(100,p.battery+32);q.taken=true;}else if(q.type==='cell'&&p.cells<5){p.cells++;q.taken=true;}else if(q.type==='heal'&&p.heal<5){p.heal++;q.taken=true;}if(q.taken)this.emit('pickup',{item:q.type});}}
 if(this.status==='playing'&&this.hasKey&&distance(p,this.config.exit)<1.3&&visible(p,this.config.exit,this.obstacles)){this.status='clear';this.score+=p.hp*100+Math.max(0,Math.round(350-this.time));this.emit('clear');}}
}
