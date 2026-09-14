export const THEMES = [
  {id:'school', name:'廃校の迷宮', sub:'THE LOST SCHOOL', floor:'#424c45', wall:'#414e51', cap:'#687775', room:'#555344', accent:'#bca474', light:'#ffcf8a', pattern:'wood', prop:'locker', largeProp:'shelf', sign:'CLASSROOM'},
  {id:'canal', name:'水音の地下水路', sub:'THE DROWNED PASSAGE', floor:'#263d47', wall:'#3a5360', cap:'#65838e', room:'#35515a', accent:'#62a6b7', light:'#8edff1', pattern:'water', prop:'tank', largeProp:'machine', sign:'PUMP 02'},
  {id:'library', name:'忘却の図書室', sub:'THE FORGOTTEN LIBRARY', floor:'#403431', wall:'#57463d', cap:'#877159', room:'#665044', accent:'#bd9267', light:'#f2c27c', pattern:'library', prop:'shelf', largeProp:'shelf', sign:'SILENCE'},
  {id:'court', name:'蔦に覆われた中庭', sub:'THE OVERGROWN COURT', floor:'#364c41', wall:'#3d5147', cap:'#687d65', room:'#405b48', accent:'#8fa16c', light:'#ebd895', pattern:'garden', prop:'planter', largeProp:'planter', sign:'KEEP OUT'},
  {id:'lab', name:'封鎖された研究室', sub:'THE SEALED LABORATORY', floor:'#293f48', wall:'#39555d', cap:'#78989a', room:'#486768', accent:'#9ed1b4', light:'#a3ffcd', pattern:'lab', prop:'tank', largeProp:'machine', sign:'LAB / 07'},
  {id:'works', name:'沈黙の機械室', sub:'THE SILENT WORKS', floor:'#454345', wall:'#514c48', cap:'#807363', room:'#5a514b', accent:'#d6a65f', light:'#ffa869', pattern:'grate', prop:'machine', largeProp:'machine', sign:'HIGH VOLTAGE'},
  {id:'frost', name:'凍りついた北棟', sub:'THE FROZEN WING', floor:'#334b61', wall:'#4b677d', cap:'#92b8ca', room:'#6c95a7', accent:'#d0f0f5', light:'#b7eeff', pattern:'ice', prop:'crystal', largeProp:'crystal', sign:'NORTH WING'},
  {id:'depot', name:'忘れられた倉庫', sub:'THE FORGOTTEN DEPOT', floor:'#404b50', wall:'#3b4851', cap:'#657985', room:'#485761', accent:'#bbab77', light:'#ffcf84', pattern:'depot', prop:'crate', largeProp:'car', sign:'LOADING BAY'},
  {id:'chapel', name:'月影の礼拝堂', sub:'THE MOONLIT CHAPEL', floor:'#36384f', wall:'#494b65', cap:'#7c809c', room:'#55536c', accent:'#c6a7cb', light:'#dab7ff', pattern:'mosaic', prop:'stone', largeProp:'stone', sign:'REMEMBER'},
  {id:'greenhouse', name:'光る苔の温室', sub:'THE LUMINOUS GREENHOUSE', floor:'#263e3b', wall:'#345653', cap:'#63897a', room:'#3c6253', accent:'#89c997', light:'#a0f0a9', pattern:'greenhouse', prop:'planter', largeProp:'planter', sign:'BOTANICAL'},
  {id:'cinders', name:'燃え跡の南棟', sub:'THE ASHEN HALL', floor:'#3b3034', wall:'#4c3838', cap:'#826054', room:'#58413a', accent:'#d68a60', light:'#ffad7b', pattern:'ash', prop:'rubble', largeProp:'rubble', sign:'EVACUATE'},
  {id:'arcade', name:'夜明けの回廊', sub:'THE DAWN ARCADE', floor:'#3f4553', wall:'#444957', cap:'#73768d', room:'#4b5062', accent:'#99c4d0', light:'#c4eaff', pattern:'arcade', prop:'stone', largeProp:'stone', sign:'DAWN AHEAD'},
];

// Paint in world units. Both renderers use this same floor artwork.
export function paintRoom(c, room, theme, random) {
  const {x,z,w,d} = room, left=x-w/2, top=z-d/2;
  c.save();
  c.beginPath();c.rect(left,top,w,d);c.clip();
  c.fillStyle=theme.room;c.fillRect(left,top,w,d);
  c.lineWidth=.025;c.strokeStyle='#12232b65';
  const line=(x1,z1,x2,z2)=>{c.beginPath();c.moveTo(x1,z1);c.lineTo(x2,z2);c.stroke();};
  const rect=(px,pz,pw,pd,color)=>{c.fillStyle=color;c.fillRect(px,pz,pw,pd);};
  const pattern=theme.pattern;
  if(pattern==='wood'||pattern==='library') {
    for(let j=0;j<d;j+=.7){line(left,top+j,left+w,top+j);for(let i=(Math.round(j*10)%2)*1.1;i<w;i+=2.2)line(left+i,top+j,left+i,top+j+.7);}
    if(pattern==='library') {rect(left+1,top+1,w-2,d-2,'#573b4899');c.strokeStyle='#c09c6755';c.lineWidth=.1;c.strokeRect(left+1.2,top+1.2,w-2.4,d-2.4);}
    for(let i=0;i<6;i++){const a=left+.5+random()*(w-1),b=top+.5+random()*(d-1);c.save();c.translate(a,b);c.rotate(random()*2);rect(-.18,-.12,.36,.24,'#c8bf9955');c.restore();}
  } else if(pattern==='water') {
    for(let i=0;i<w;i++)line(left+i,top,left+i,top+d);
    rect(left+.6,z-.75,w-1.2,1.5,'#214b5e');
    c.strokeStyle='#8ececf66';for(let i=0;i<8;i++){const a=left+.8+random()*(w-1.6),b=z-.5+random();line(a,b,a+.55,b-.05);}
    rect(x-.75,z-.88,1.5,1.76,'#5d6a68');c.strokeStyle='#202f37';for(let i=-.65;i<.7;i+=.2)line(x+i,z-.84,x+i,z+.84);
  } else if(pattern==='garden'||pattern==='greenhouse') {
    for(let j=0;j<d;j+=1.2)for(let i=0;i<w;i+=1.2)rect(left+i+.06,top+j+.06,1.08,1.08,(i+j)%2?'#56715b66':'#243f3555');
    for(let i=0;i<45;i++){const a=left+random()*w,b=top+random()*d;c.fillStyle=i%3?'#83aa652c':'#b7d59b32';c.beginPath();c.ellipse(a,b,.16+random()*.3,.1+random()*.25,random()*3,0,Math.PI*2);c.fill();}
    if(pattern==='greenhouse'){c.strokeStyle='#98c4a644';c.lineWidth=.045;for(let i=0;i<w;i+=2)line(left+i,top,left+i+d*.5,top+d);}
  } else if(pattern==='ice') {
    c.strokeStyle='#d5f7ff7a';c.lineWidth=.04;
    for(let i=0;i<15;i++){const a=left+random()*w,b=top+random()*d;line(a,b,a+.8,b-.5);line(a+.8,b-.5,a+1,b-1.1);line(a+.8,b-.5,a+1.5,b-.4);}
    c.fillStyle='#e8ffff19';for(let i=0;i<8;i++){c.beginPath();c.ellipse(left+random()*w,top+random()*d,1.3,.6,random()*3,0,Math.PI*2);c.fill();}
  } else if(pattern==='ash') {
    for(let j=0;j<d;j+=.8)line(left,top+j,left+w,top+j);
    for(let i=0;i<30;i++){const a=left+random()*w,b=top+random()*d;rect(a,b,.2+random()*.6,.08+random()*.3,i%5?'#201e2677':'#ee956d55');}
  } else if(pattern==='mosaic'||pattern==='arcade') {
    for(let j=0;j<d;j++)for(let i=0;i<w;i++)rect(left+i+.04,top+j+.04,.92,.92,(i+j)%2?'#a4a3b929':'#252c4a55');
    c.strokeStyle=theme.accent+'88';c.lineWidth=.09;c.beginPath();c.ellipse(x,z,Math.min(w,d)*.31,Math.min(w,d)*.31,0,0,Math.PI*2);c.stroke();
    c.beginPath();for(let i=0;i<9;i++){const a=i*Math.PI/4,r=Math.min(w,d)*(i%2?.12:.25);const px=x+Math.sin(a)*r,pz=z+Math.cos(a)*r;i?c.lineTo(px,pz):c.moveTo(px,pz);}c.stroke();
  } else {
    const step=pattern==='grate'?.4:1;
    for(let i=0;i<w;i+=step)line(left+i,top,left+i,top+d);
    for(let j=0;j<d;j+=step)line(left,top+j,left+w,top+j);
    if(pattern==='lab') {rect(left+.6,top+.6,w-1.2,.12,theme.accent+'88');rect(left+.6,top+.6,.12,d-1.2,theme.accent+'88');c.strokeStyle='#bdeaca88';c.lineWidth=.15;line(x-.45,z,x+.45,z);line(x,z-.45,x,z+.45);}
    else {for(let i=0;i<w-1;i+=.5)rect(left+.5+i,top+.45,.24,.18,theme.accent+'aa');c.strokeStyle=theme.accent+'66';c.lineWidth=.06;c.strokeRect(left+.4,top+.4,w-.8,d-.8);}
  }
  c.fillStyle=theme.accent+'88';c.textAlign='center';c.font='bold .32px sans-serif';c.fillText(theme.sign,x,top+.65);
  c.restore();
}

export function paintProp(view,c,o,theme,random) {
  const {x,z,w,d}=o,kind=o.visual||o.kind;
  if(kind==='car'){view.car(c,o);return;}
  if(kind==='crate'){view.crate(c,o);return;}
  const rect=(px,pz,pw,pd,color)=>{c.fillStyle=color;c.fillRect(px,pz,pw,pd);};
  rect(x-w/2,z-d/2,w,d,theme.wall);rect(x-w/2,z-d/2-.25,w,d-.1,theme.cap);
  if(kind==='locker'){
    for(let i=0;i<3;i++){const a=x-w/2+i*w/3;rect(a+.04,z-d/2-.18,w/3-.08,d-.17,theme.wall);for(let j=0;j<3;j++)rect(a+w/12,z-d/2+j*.08,w/6,.025,'#bcc5ae');rect(a+w/5,z+d/2-.5,.035,.2,'#e0cda1');}
  }else if(kind==='shelf'){
    rect(x-w/2+.08,z-d/2-.15,w-.16,d-.13,'#372c2d');
    const colors=['#9b5d58','#657b72','#bb9b65','#738297','#7f6683'];
    for(let j=0;j<3;j++){for(let i=0;i<Math.floor(w/.2)-1;i++)rect(x-w/2+.12+i*.2,z-d/2-.1+j*d/3,.15,d/3-.08,colors[(i+j)%5]);rect(x-w/2,z-d/2+.2+j*d/3,w,.06,'#b49670');}
  }else if(kind==='planter'){
    rect(x-w/2+.1,z-d/2-.12,w-.2,d-.18,'#253c31');
    for(let i=0;i<12;i++){c.fillStyle=i%2?'#649466':'#456e51';c.beginPath();c.ellipse(x+(random()-.5)*(w-.2),z-.16+(random()-.5)*(d-.25),.13+random()*.16,.2,random()*3,0,Math.PI*2);c.fill();}
  }else if(kind==='machine'){
    rect(x-w*.4,z-d*.35-.2,w*.33,d*.35,'#183238');rect(x-w*.35,z-d*.3-.2,w*.23,d*.24,'#8dcebc');
    for(let j=0;j<5;j++)rect(x+w*.04,z-d*.32-.16+j*.13,w*.32,.035,'#23333e');
    rect(x-w*.42,z+d*.24,w*.84,.12,theme.accent);
  }else if(kind==='tank'){
    const count=Math.max(1,Math.floor(w/1.1));
    for(let i=0;i<count;i++){const a=x+(i-(count-1)/2)*w/count,r=Math.min(w/count,d)*.35;rect(a-r,z-.5,r*2,.85,'#32616f');c.fillStyle=theme.cap;c.beginPath();c.ellipse(a,z-.5,r,r*.6,0,0,Math.PI*2);c.fill();rect(a-r*.3,z-.4,r*.6,.55,theme.light);}
  }else if(kind==='crystal'){
    for(let i=0;i<6;i++){const a=x+(random()-.5)*w*.7,b=z+(random()-.5)*d*.6,h=.4+random()*.7;c.fillStyle=i%2?'#acdbe4':'#77afc9';c.beginPath();c.moveTo(a,b-h);c.lineTo(a+.18,b-.05);c.lineTo(a+.1,b+.15);c.lineTo(a-.2,b);c.closePath();c.fill();c.strokeStyle='#d8fcff';c.lineWidth=.025;c.stroke();}
  }else if(kind==='stone'){
    rect(x-w*.38,z-d*.42,w*.76,d*.65,theme.wall);rect(x-w*.28-.1,z-.7,.2,1,theme.cap);rect(x+w*.28-.1,z-.7,.2,1,theme.cap);rect(x-w*.42,z-.73,w*.84,.15,theme.accent);
  }else if(kind==='rubble'){
    for(let i=0;i<12;i++){const a=x+(random()-.5)*w*.8,b=z+(random()-.5)*d*.75;rect(a-.2,b-.1,.25+random()*.25,.12+random()*.23,i%4?'#564749':'#a97350');}
  }
}
