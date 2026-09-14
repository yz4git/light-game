import * as T from 'three';
import {paintRoom} from './environment.js';

export function roomFloor(view, parent, room, theme, random) {
  const canvas=document.createElement('canvas');
  canvas.width=Math.min(768,Math.ceil(room.w*48));canvas.height=Math.min(768,Math.ceil(room.d*48));
  const c=canvas.getContext('2d');c.translate(canvas.width/2,canvas.height/2);c.scale(canvas.width/room.w,canvas.height/room.d);
  paintRoom(c,{x:0,z:0,w:room.w,d:room.d},theme,random);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
  const floor=view.mesh(new T.PlaneGeometry(room.w,room.d),new T.MeshStandardMaterial({map:texture,roughness:.94}),parent,room.x,.035,room.z);
  floor.rotation.x=-Math.PI/2;floor.castShadow=false;
}

export function sceneryProp(v,p,o,theme) {
  const {x,z,w,d}=o,kind=o.visual||o.kind;
  if(kind==='car'){v.car(p,o);return;}
  if(kind==='crate'){v.crate(p,x,z,w,d);return;}
  const base=theme.wall,trim=theme.cap,accent=theme.accent;
  if(kind==='locker'){
    v.box(p,x,.73,z,w,1.46,d,base);
    for(let i=0;i<3;i++){const a=x-w/2+(i+.5)*w/3;v.box(p,a,.75,z+d/2+.015,w/3-.035,1.34,.04,trim);v.box(p,a+w/9,.73,z+d/2+.05,.04,.18,.04,0xc0bda3);for(let j=0;j<3;j++)v.box(p,a,1.13+j*.08,z+d/2+.04,w*.18,.025,.02,0x263739);}
  }else if(kind==='shelf'){
    v.box(p,x,.8,z-d/2+.05,w,1.6,.1,0x463b37);
    for(const sx of [-1,1])v.box(p,x+sx*(w/2-.06),.8,z,.12,1.6,d,0x8b7152);
    const colors=[0x9b5d58,0x657b72,0xbb9b65,0x738297,0x7f6683];
    for(let j=0;j<3;j++){const y=.12+j*.5;v.box(p,x,y,z,w,.08,d,0x917857);for(let i=0;i<Math.floor(w/.2)-1;i++){const a=x-w/2+.23+i*.2,h=.26+(i%3)*.055;v.box(p,a,y+.07+h/2,z+d*.23,.15,h,d*.46,colors[(i+j)%colors.length]);v.box(p,a,y+.13,z+d*.46,.11,.025,.02,0xc6b38b);}}
  }else if(kind==='planter'){
    v.box(p,x,.25,z,w,.5,d,0x5e6656);v.box(p,x,.52,z,w+.02,.08,d+.02,0x91a084);v.box(p,x,.57,z,w-.18,.03,d-.18,0x253c31);
    for(let i=0;i<7;i++){const a=x+(v.random()-.5)*(w-.25),b=z+(v.random()-.5)*(d-.25);v.ball(p,a,.75+v.random()*.2,b,.17,.3,.17,i%2?0x59855a:0x426c52,0);}
  }else if(kind==='machine'){
    v.box(p,x,.49,z,w,.98,d,base);v.box(p,x,.99,z,w,.09,d,trim);
    v.box(p,x-w*.2,.69,z+d/2+.04,w*.34,.36,.06,0x172f35);v.box(p,x-w*.2,.69,z+d/2+.08,w*.24,.22,.025,v.mat(0x91d6c0,.5,.35));
    for(let j=0;j<5;j++)v.box(p,x+w*.24,.32+j*.1,z+d/2+.035,w*.27,.025,.03,0x182b33);
    const pipe=v.cylinder(p,x,.76,z,.09,.09,w*.83,accent,8);pipe.rotation.z=Math.PI/2;
    for(const sx of [-1,1])v.cylinder(p,x+sx*w*.35,.5,z,.12,.12,1,0x829193,8);
  }else if(kind==='tank'){
    v.box(p,x,.1,z,w,.2,d,trim);
    const count=Math.max(1,Math.floor(w/1.1));
    for(let i=0;i<count;i++){const a=x+(i-(count-1)/2)*w/count,r=Math.min(w/count,d)*.35;v.cylinder(p,a,.7,z,r,r,1.16,0x356570,12);v.cylinder(p,a,1.3,z,r*1.1,r*1.1,.15,trim,12);v.box(p,a,.77,z+r+.015,r*.64,.7,.035,v.mat(theme.light,.45,.4));v.cylinder(p,a,1.45,z,r*.28,r*.28,.2,accent,8);}
  }else if(kind==='crystal'){
    v.box(p,x,.09,z,w,.18,d,0x779cad);
    for(let i=0;i<6;i++){const a=x+(v.random()-.5)*w*.7,b=z+(v.random()-.5)*d*.7,h=.5+v.random()*.9;const crystal=v.mesh(new T.ConeGeometry(.17+v.random()*.18,h,5),v.mat(i%2?0x9cccd9:0x74aeca,.38,.12),p,a,h/2+.16,b);crystal.rotation.z=(v.random()-.5)*.35;}
  }else if(kind==='stone'){
    v.box(p,x,.14,z,w,.28,d,trim);v.box(p,x,.42,z,w*.85,.28,d*.85,base);
    for(const sx of [-.28,.28])v.cylinder(p,x+w*sx,.92,z,.14,.2,1,trim,8);
    v.box(p,x,1.45,z,w*.86,.17,d*.65,trim);v.box(p,x,.99,z+d*.28,w*.24,.11,.04,v.mat(accent,.7,.25));
  }else if(kind==='rubble'){
    v.box(p,x,.13,z,w,.26,d,0x403638);
    for(let i=0;i<9;i++){const a=x+(v.random()-.5)*w*.75,b=z+(v.random()-.5)*d*.75,size=.2+v.random()*.35;const rock=v.ball(p,a,.22+size*.25,b,size,size*.65,size,i%4?0x58484a:0x8c5c48,0);rock.rotation.y=v.random()*3;}
    for(let i=0;i<3;i++)v.ball(p,x+(v.random()-.5)*w*.5,.35,z+(v.random()-.5)*d*.5,.07,.04,.07,v.mat(0xc58354,.8,.5),0);
  }
}
