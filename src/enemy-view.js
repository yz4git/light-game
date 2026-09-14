import * as T from 'three';
import {ENEMY_TYPES} from './enemies.js';
import {visible} from './geometry.js';

export function specialEnemy(v,e) {
  const spec=ENEMY_TYPES[e.type],root=new T.Group(),body=new T.Group(),limbs=[],eyes=[];
  root.add(body);root.scale.setScalar(spec.scale);
  const skin=v.mat(spec.skin),glow=v.mat(spec.glow,.4,1.4);
  let eyeY=1.1,eyeZ=.34;
  if(e.type==='wisp'){
    v.ball(body,0,1,0,.4,.44,.36,skin,2);v.ball(body,0,1.08,.28,.26,.27,.12,v.mat(0x142f49),1);
    for(let i=0;i<3;i++){const tail=new T.Group();tail.position.set((i-1)*.19,.7,-.05);body.add(tail);const cone=v.mesh(new T.ConeGeometry(.11,.5,5),glow,tail,0,-.25,0);cone.rotation.z=Math.PI;limbs.push(tail);}
    v.glow(body,0,1,0,1.5,spec.glow,.35);
  }else if(e.type==='stalker'){
    v.ball(body,0,.5,-.1,.48,.24,.48,skin,1);v.ball(body,0,.69,.37,.25,.29,.32,skin,1);
    for(const sx of [-1,1])for(const sz of [-1,1]){const limb=new T.Group();limb.position.set(sx*.36,.55,sz*.32);body.add(limb);const leg=v.ball(limb,sx*.14,-.2,.08,.09,.35,.09,skin,0);leg.rotation.z=sx*.35;v.ball(limb,sx*.23,-.46,.15,.17,.07,.19,0x6c6082,0);limbs.push(limb);}
    for(const sx of [-1,1]){const horn=v.mesh(new T.ConeGeometry(.1,.4,5),skin,body,sx*.23,.93,.27);horn.rotation.z=-sx*.45;}
    const tail=v.ball(body,0,.52,-.76,.12,.12,.42,skin,0);limbs.push(tail);eyeY=.76;eyeZ=.64;
  }else{
    v.cylinder(body,0,.48,0,.19,.27,.82,0x809776,8);v.ball(body,0,1,0,.66,.26,.55,skin,1);
    v.cylinder(body,0,.91,0,.48,.36,.11,0xa4b67d,10);
    for(let i=0;i<6;i++){const a=i*Math.PI/3;v.ball(body,Math.sin(a)*.39,1.15,Math.cos(a)*.3,.065,.04,.065,glow,0);}
    for(const sx of [-1,1]){const foot=v.ball(body,sx*.27,.15,.04,.26,.1,.23,skin,0);limbs.push(foot);}
    eyeY=.71;eyeZ=.22;
  }
  for(const x of [-.13,.13]){v.ball(body,x,eyeY,eyeZ,.05,.075,.045,glow,1);eyes.push(v.glow(body,x,eyeY,eyeZ+.02,.4,spec.glow,.75));}
  const warn=v.ring(.9,0xff765d,.8);warn.scale.setScalar(1/spec.scale);root.add(warn);root.add(v.shadow(e.type==='stalker'?.7:.5));
  root.userData={body,limbs,eyes,warn,base:spec.scale,floating:e.type==='wisp'};v.scene.add(root);return root;
}

export function renderAttacks(v,game) {
  const current=new Set(game.projectiles.map(q=>q.id));
  for(const [id,mesh] of v.projectileMeshes)if(!current.has(id)){v.removeDynamic(mesh);v.projectileMeshes.delete(id);}
  for(const q of game.projectiles){let m=v.projectileMeshes.get(q.id);if(!m){m=new T.Group();v.ball(m,0,0,0,.17,.17,.17,v.mat(0x88ddff,.35,2),1);v.glow(m,0,0,0,.8,0x80dcff,.7);v.world.add(m);v.projectileMeshes.set(q.id,m);}m.position.set(q.x,.66,q.z);}
  const pulses=new Set(game.pulses.map(q=>q.id));
  for(const [id,mesh] of v.pulseMeshes)if(!pulses.has(id)){v.removeDynamic(mesh);v.pulseMeshes.delete(id);}
  for(const q of game.pulses){let m=v.pulseMeshes.get(q.id);if(!m){const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(new Float32Array(48*6),3));m=new T.LineSegments(geometry,new T.LineBasicMaterial({color:0xb9ee89,transparent:true,opacity:.8,depthWrite:false}));m.frustumCulled=false;v.world.add(m);v.pulseMeshes.set(q.id,m);}const position=m.geometry.attributes.position;
    for(let i=0;i<48;i++){const a=i/48*Math.PI*2,b=(i+1)/48*Math.PI*2,one={x:q.x+Math.sin(a)*q.radius,z:q.z+Math.cos(a)*q.radius},two={x:q.x+Math.sin(b)*q.radius,z:q.z+Math.cos(b)*q.radius};const show=visible(q,one,game.obstacles)&&visible(q,two,game.obstacles);position.setXYZ(i*2,one.x,.15,one.z);position.setXYZ(i*2+1,show?two.x:one.x,.15,show?two.z:one.z);}
    position.needsUpdate=true;m.material.opacity=.9-q.radius/q.maxRadius*.55;
  }
}
