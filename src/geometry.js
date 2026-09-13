export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export const angleDelta=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
export function blocked(x,z,r,obstacles){return Math.abs(x)>19-r||Math.abs(z)>21-r||obstacles.some(o=>Math.abs(x-o.x)<o.w/2+r&&Math.abs(z-o.z)<o.d/2+r);}
export function moveBody(b,dx,dz,obs){const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.18));for(let i=0;i<steps;i++){if(!blocked(b.x+dx/steps,b.z,b.r,obs))b.x+=dx/steps;if(!blocked(b.x,b.z+dz/steps,b.r,obs))b.z+=dz/steps;}}
export function visible(a,b,obs){const dx=b.x-a.x,dz=b.z-a.z;for(const o of obs){let lo=0,hi=1;for(const [v,d,min,max] of [[a.x,dx,o.x-o.w/2,o.x+o.w/2],[a.z,dz,o.z-o.d/2,o.z+o.d/2]]){if(Math.abs(d)<1e-8){if(v<min||v>max){lo=2;break;}}else{const t1=(min-v)/d,t2=(max-v)/d;lo=Math.max(lo,Math.min(t1,t2));hi=Math.min(hi,Math.max(t1,t2));}}if(lo<=hi&&lo<=1&&hi>=0)return false;}return true;}
export function beamHits(p,e,obs,range=9,halfAngle=.48){return distance(p,e)<range+e.r&&Math.abs(angleDelta(Math.atan2(e.x-p.x,e.z-p.z),p.angle))<halfAngle+e.r/Math.max(1,distance(p,e))&&visible(p,e,obs);}
