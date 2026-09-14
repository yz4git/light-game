import {THEMES} from './environment.js';
import {rng,blocked,distance} from './geometry.js';

export const MAX_FLOORS = 999;
export const CAMERA_ZOOM = 2.25;
export const DEFAULT_RUN_SEED = 740129;
const W = 39, H = 43;
const point = index => ({x:index % W - 19,z:Math.floor(index / W) - 21});

function flood(mask, start) {
  const distances = new Int16Array(W*H).fill(-1);
  const queue = new Int16Array(W*H);
  let count = 1;
  queue[0] = start;
  distances[start] = 0;
  for(let head=0;head<count;head++) {
    const i=queue[head],x=i%W,z=Math.floor(i/W);
    for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx=x+dx,nz=z+dz,next=nz*W+nx;
      if(nx<0||nx>=W||nz<0||nz>=H||!mask[next]||distances[next]>=0)continue;
      distances[next]=distances[i]+1;
      queue[count++]=next;
    }
  }
  return {distances,count};
}

export function generateFloor(stage, runSeed=DEFAULT_RUN_SEED) {
  if(!Number.isInteger(stage)||stage<0||stage>=MAX_FLOORS)throw new RangeError('Floor must be 1–999');
  const seed=((runSeed>>>0)^Math.imul(stage+1,0x9e3779b1))>>>0;
  const random=rng(seed),int=(a,b)=>a+Math.floor(random()*(b-a+1));
  const tiles=new Uint8Array(W*H),rooms=[],corridors=[];
  const carve=(x,z)=>{if(x>0&&x<W-1&&z>0&&z<H-1)tiles[z*W+x]=1;};
  function connect(a,b) {
    const turn=random()<.5?{cx:b.cx,cz:a.cz}:{cx:a.cx,cz:b.cz};
    for(const [from,to] of [[a,turn],[turn,b]]) {
      let x=from.cx,z=from.cz;
      const paint=()=>{for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++)carve(x+dx,z+dz);};
      paint();
      while(x!==to.cx||z!==to.cz){x+=Math.sign(to.cx-x);z+=Math.sign(to.cz-z);paint();}
    }
    corridors.push([point(a.cz*W+a.cx),point(b.cz*W+b.cx)]);
  }
  function split(area,depth) {
    if(depth<3&&(area.w>=16||area.d>=16)) {
      const vertical=area.w<16?false:area.d<16?true:area.w/area.d>1.3?true:area.d/area.w>1.3?false:random()<.5;
      const span=vertical?area.w:area.d,cut=int(7,span-7);
      const a=split({...area,w:vertical?cut:area.w,d:vertical?area.d:cut},depth+1);
      const b=split({...area,x:area.x+(vertical?cut:0),z:area.z+(vertical?0:cut),w:vertical?span-cut:area.w,d:vertical?area.d:span-cut},depth+1);
      connect(a,b);
      return random()<.5?a:b;
    }
    const w=int(5,Math.max(5,area.w-2)),d=int(5,Math.max(5,area.d-2));
    const x=area.x+int(1,Math.max(1,area.w-w-1)),z=area.z+int(1,Math.max(1,area.d-d-1));
    for(let j=z;j<z+d;j++)for(let i=x;i<x+w;i++)carve(i,j);
    const room={x:x-19+(w-1)/2,z:z-21+(d-1)/2,w,d,cx:x+Math.floor(w/2),cz:z+Math.floor(d/2)};
    rooms.push(room);return room;
  }
  split({x:1,z:1,w:37,d:41},0);
  for(let i=0;i<2;i++){const a=int(0,rooms.length-1),b=(a+int(1,rooms.length-1))%rooms.length;connect(rooms[a],rooms[b]);}

  // Merge solid cells, so render geometry, visibility and collision share one layout.
  const walls=[];let previous=new Map();
  for(let z=0;z<H;z++) {
    const row=new Map();
    for(let x=0;x<W;) {
      if(tiles[z*W+x]){x++;continue;}
      const first=x;while(x<W&&!tiles[z*W+x])x++;
      const width=x-first,key=first+':'+width,existing=previous.get(key);
      if(existing){existing.d++;existing.z+=.5;row.set(key,existing);}
      else{const wall={x:first-19+(width-1)/2,z:z-21,w:width,d:1,kind:'wall'};walls.push(wall);row.set(key,wall);}
    }
    previous=row;
  }
  const baseMask=new Uint8Array(W*H);
  for(let z=1;z<H-1;z++)for(let x=1;x<W-1;x++) {
    let clear=true;
    for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++)if(!tiles[(z+dz)*W+x+dx])clear=false;
    baseMask[z*W+x]=clear?1:0;
  }
  const candidates=Array.from(baseMask,(_,i)=>i).filter(i=>baseMask[i]);
  const props=[];
  let mask=baseMask;
  for(let attempt=0;attempt<8;attempt++) {
    const p=point(candidates[int(0,candidates.length-1)]);
    if(rooms.some(room=>distance(p,{x:room.cx-19,z:room.cz-21})<2.5))continue;
    const car=random()<.22,prop={...p,w:car?3.8:1.4,d:car?1.9:1.4,kind:car?'car':'crate'};
    // Keep props entirely on carved floor and preserve the connected walkable area.
    if(blocked(p.x,p.z,car?2.4:1.5,walls))continue;
    const next=new Uint8Array(baseMask);
    let free=0,origin=-1;
    for(const i of candidates) {
      const q=point(i);
      if(blocked(q.x,q.z,.95,[...props,prop]))next[i]=0;
      else{free++;origin=i;}
    }
    if(free<100||flood(next,origin).count!==free)continue;
    props.push(prop);mask=next;
  }
  const free=candidates.filter(i=>mask[i]);
  const startRoom=rooms[int(0,rooms.length-1)];
  const desired={x:startRoom.cx-19,z:startRoom.cz-21};
  const startIndex=free.reduce((best,i)=>distance(point(i),desired)<distance(point(best),desired)?i:best,free[0]);
  const fromStart=flood(mask,startIndex).distances;
  const far=free.filter(i=>fromStart[i]>=0).sort((a,b)=>fromStart[b]-fromStart[a]);
  const keyIndex=far[int(0,Math.max(0,Math.floor(far.length*.08)-1))];
  const fromKey=flood(mask,keyIndex).distances;
  const exits=free.filter(i=>fromStart[i]>8&&fromKey[i]>12).sort((a,b)=>(fromKey[b]+fromStart[b]*.35)-(fromKey[a]+fromStart[a]*.35));
  const exitIndex=exits.length?exits[int(0,Math.min(12,exits.length-1))]:startIndex;
  const start=point(startIndex),key=point(keyIndex),exit=point(exitIndex);
  const shuffled=free.slice();for(let i=shuffled.length-1;i>0;i--){const j=int(0,i);[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  const spawns=[],desiredCount=Math.min(26,8+Math.floor(Math.log2(stage+2)*2));
  for(const i of shuffled) {
    const p=point(i);
    if(distance(p,start)<6||distance(p,key)<1.8||distance(p,exit)<2||spawns.some(e=>distance(p,e)<2.1))continue;
    spawns.push(p);if(spawns.length>=desiredCount)break;
  }
  const pickups=[];
  for(const i of shuffled.slice().reverse()) {
    const p=point(i);
    if(distance(p,start)<2||distance(p,key)<1.8||distance(p,exit)<1.8||pickups.some(q=>distance(p,q)<5))continue;
    pickups.push({...p,type:pickups.length%2?'heal':'cell'});if(pickups.length===3)break;
  }
  const theme=THEMES[stage%THEMES.length];
  for(const prop of props)prop.visual=prop.kind==='car'?theme.largeProp:theme.prop;
  return {seed,floor:stage+1,name:theme.name,sub:theme.sub,theme,count:spawns.length,start,key,exit,rooms,corridors,tiles,spawns,pickups,obstacles:[...walls,...props],lamps:rooms.map(room=>({x:room.cx-19,z:room.cz-21-1.7}))};
}
