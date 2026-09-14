var Ln={shadow:{name:"\u5F71",hp:43,speed:1.55,radius:.46,scale:1,skin:"#192331",glow:"#ffdd8a"},skitter:{name:"\u8D70\u308A\u5F71",hp:30,speed:2.55,radius:.35,scale:.72,skin:"#29393a",glow:"#ffe5a2"},brute:{name:"\u5F71\u306E\u756A\u4EBA",hp:175,speed:1.23,radius:.88,scale:1.72,skin:"#373c45",glow:"#ffb478"},wisp:{name:"\u9B3C\u706B",hp:36,speed:1.05,radius:.42,scale:1,skin:"#244f69",glow:"#82eaff"},stalker:{name:"\u5FCD\u3073\u5F71",hp:48,speed:2.15,radius:.44,scale:1.04,skin:"#433c61",glow:"#cbadff"},spore:{name:"\u80DE\u5B50\u30E9\u30F3\u30BF\u30F3",hp:72,speed:.72,radius:.59,scale:1.12,skin:"#415d48",glow:"#b9ee89"}};function Ic(s,t,e,n,i=0){let r=Ln[s],a=Math.min(1.5,Math.log2(n+1)/7),o=Math.round(r.hp*(1+a));return{id:t,...e,type:s,r:r.radius,hp:o,maxHp:o,speed:r.speed*(1+a*.18),angle:0,state:"idle",timer:0,cooldown:0,exposure:0,phase:i,chargeX:0,chargeZ:0,death:0,litTime:0,strafe:t%2?1:-1}}function Pc(s){let t=["shadow","skitter","wisp","stalker","spore"],e=s%t.length;return[...t.slice(e),...t.slice(0,e)]}var ke=(s,t,e)=>Math.max(t,Math.min(e,s)),re=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),Mr=(s,t)=>Math.atan2(Math.sin(s-t),Math.cos(s-t));function xn(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Dn(s,t,e,n){return Math.abs(s)>19-e||Math.abs(t)>21-e||n.some(i=>Math.abs(s-i.x)<i.w/2+e&&Math.abs(t-i.z)<i.d/2+e)}function sn(s,t,e,n){let i=Math.max(1,Math.ceil(Math.hypot(t,e)/.18));for(let r=0;r<i;r++)Dn(s.x+t/i,s.z,s.r,n)||(s.x+=t/i),Dn(s.x,s.z+e/i,s.r,n)||(s.z+=e/i)}function be(s,t,e){let n=t.x-s.x,i=t.z-s.z;for(let r of e){let a=0,o=1;for(let[l,h,f,d]of[[s.x,n,r.x-r.w/2,r.x+r.w/2],[s.z,i,r.z-r.d/2,r.z+r.d/2]])if(Math.abs(h)<1e-8){if(l<f||l>d){a=2;break}}else{let c=(f-l)/h,u=(d-l)/h;a=Math.max(a,Math.min(c,u)),o=Math.min(o,Math.max(c,u))}if(a<=o&&a<=1&&o>=0)return!1}return!0}function bs(s,t,e,n=9,i=.48){return re(s,t)<n+t.r&&Math.abs(Mr(Math.atan2(t.x-s.x,t.z-s.z),s.angle))<i+t.r/Math.max(1,re(s,t))&&be(s,t,e)}var Go=[{id:"school",name:"\u5EC3\u6821\u306E\u8FF7\u5BAE",sub:"THE LOST SCHOOL",floor:"#424c45",wall:"#414e51",cap:"#687775",room:"#555344",accent:"#bca474",light:"#ffcf8a",pattern:"wood",prop:"locker",largeProp:"shelf",sign:"CLASSROOM"},{id:"canal",name:"\u6C34\u97F3\u306E\u5730\u4E0B\u6C34\u8DEF",sub:"THE DROWNED PASSAGE",floor:"#263d47",wall:"#3a5360",cap:"#65838e",room:"#35515a",accent:"#62a6b7",light:"#8edff1",pattern:"water",prop:"tank",largeProp:"machine",sign:"PUMP 02"},{id:"library",name:"\u5FD8\u5374\u306E\u56F3\u66F8\u5BA4",sub:"THE FORGOTTEN LIBRARY",floor:"#403431",wall:"#57463d",cap:"#877159",room:"#665044",accent:"#bd9267",light:"#f2c27c",pattern:"library",prop:"shelf",largeProp:"shelf",sign:"SILENCE"},{id:"court",name:"\u8526\u306B\u8986\u308F\u308C\u305F\u4E2D\u5EAD",sub:"THE OVERGROWN COURT",floor:"#364c41",wall:"#3d5147",cap:"#687d65",room:"#405b48",accent:"#8fa16c",light:"#ebd895",pattern:"garden",prop:"planter",largeProp:"planter",sign:"KEEP OUT"},{id:"lab",name:"\u5C01\u9396\u3055\u308C\u305F\u7814\u7A76\u5BA4",sub:"THE SEALED LABORATORY",floor:"#293f48",wall:"#39555d",cap:"#78989a",room:"#486768",accent:"#9ed1b4",light:"#a3ffcd",pattern:"lab",prop:"tank",largeProp:"machine",sign:"LAB / 07"},{id:"works",name:"\u6C88\u9ED9\u306E\u6A5F\u68B0\u5BA4",sub:"THE SILENT WORKS",floor:"#454345",wall:"#514c48",cap:"#807363",room:"#5a514b",accent:"#d6a65f",light:"#ffa869",pattern:"grate",prop:"machine",largeProp:"machine",sign:"HIGH VOLTAGE"},{id:"frost",name:"\u51CD\u308A\u3064\u3044\u305F\u5317\u68DF",sub:"THE FROZEN WING",floor:"#334b61",wall:"#4b677d",cap:"#92b8ca",room:"#6c95a7",accent:"#d0f0f5",light:"#b7eeff",pattern:"ice",prop:"crystal",largeProp:"crystal",sign:"NORTH WING"},{id:"depot",name:"\u5FD8\u308C\u3089\u308C\u305F\u5009\u5EAB",sub:"THE FORGOTTEN DEPOT",floor:"#404b50",wall:"#3b4851",cap:"#657985",room:"#485761",accent:"#bbab77",light:"#ffcf84",pattern:"depot",prop:"crate",largeProp:"car",sign:"LOADING BAY"},{id:"chapel",name:"\u6708\u5F71\u306E\u793C\u62DD\u5802",sub:"THE MOONLIT CHAPEL",floor:"#36384f",wall:"#494b65",cap:"#7c809c",room:"#55536c",accent:"#c6a7cb",light:"#dab7ff",pattern:"mosaic",prop:"stone",largeProp:"stone",sign:"REMEMBER"},{id:"greenhouse",name:"\u5149\u308B\u82D4\u306E\u6E29\u5BA4",sub:"THE LUMINOUS GREENHOUSE",floor:"#263e3b",wall:"#345653",cap:"#63897a",room:"#3c6253",accent:"#89c997",light:"#a0f0a9",pattern:"greenhouse",prop:"planter",largeProp:"planter",sign:"BOTANICAL"},{id:"cinders",name:"\u71C3\u3048\u8DE1\u306E\u5357\u68DF",sub:"THE ASHEN HALL",floor:"#3b3034",wall:"#4c3838",cap:"#826054",room:"#58413a",accent:"#d68a60",light:"#ffad7b",pattern:"ash",prop:"rubble",largeProp:"rubble",sign:"EVACUATE"},{id:"arcade",name:"\u591C\u660E\u3051\u306E\u56DE\u5ECA",sub:"THE DAWN ARCADE",floor:"#3f4553",wall:"#444957",cap:"#73768d",room:"#4b5062",accent:"#99c4d0",light:"#c4eaff",pattern:"arcade",prop:"stone",largeProp:"stone",sign:"DAWN AHEAD"}];function br(s,t,e,n){let{x:i,z:r,w:a,d:o}=t,l=i-a/2,h=r-o/2;s.save(),s.beginPath(),s.rect(l,h,a,o),s.clip(),s.fillStyle=e.room,s.fillRect(l,h,a,o),s.lineWidth=.025,s.strokeStyle="#12232b65";let f=(u,p,y,g)=>{s.beginPath(),s.moveTo(u,p),s.lineTo(y,g),s.stroke()},d=(u,p,y,g,m)=>{s.fillStyle=m,s.fillRect(u,p,y,g)},c=e.pattern;if(c==="wood"||c==="library"){for(let u=0;u<o;u+=.7){f(l,h+u,l+a,h+u);for(let p=Math.round(u*10)%2*1.1;p<a;p+=2.2)f(l+p,h+u,l+p,h+u+.7)}c==="library"&&(d(l+1,h+1,a-2,o-2,"#573b4899"),s.strokeStyle="#c09c6755",s.lineWidth=.1,s.strokeRect(l+1.2,h+1.2,a-2.4,o-2.4));for(let u=0;u<6;u++){let p=l+.5+n()*(a-1),y=h+.5+n()*(o-1);s.save(),s.translate(p,y),s.rotate(n()*2),d(-.18,-.12,.36,.24,"#c8bf9955"),s.restore()}}else if(c==="water"){for(let u=0;u<a;u++)f(l+u,h,l+u,h+o);d(l+.6,r-.75,a-1.2,1.5,"#214b5e"),s.strokeStyle="#8ececf66";for(let u=0;u<8;u++){let p=l+.8+n()*(a-1.6),y=r-.5+n();f(p,y,p+.55,y-.05)}d(i-.75,r-.88,1.5,1.76,"#5d6a68"),s.strokeStyle="#202f37";for(let u=-.65;u<.7;u+=.2)f(i+u,r-.84,i+u,r+.84)}else if(c==="garden"||c==="greenhouse"){for(let u=0;u<o;u+=1.2)for(let p=0;p<a;p+=1.2)d(l+p+.06,h+u+.06,1.08,1.08,(p+u)%2?"#56715b66":"#243f3555");for(let u=0;u<45;u++){let p=l+n()*a,y=h+n()*o;s.fillStyle=u%3?"#83aa652c":"#b7d59b32",s.beginPath(),s.ellipse(p,y,.16+n()*.3,.1+n()*.25,n()*3,0,Math.PI*2),s.fill()}if(c==="greenhouse"){s.strokeStyle="#98c4a644",s.lineWidth=.045;for(let u=0;u<a;u+=2)f(l+u,h,l+u+o*.5,h+o)}}else if(c==="ice"){s.strokeStyle="#d5f7ff7a",s.lineWidth=.04;for(let u=0;u<15;u++){let p=l+n()*a,y=h+n()*o;f(p,y,p+.8,y-.5),f(p+.8,y-.5,p+1,y-1.1),f(p+.8,y-.5,p+1.5,y-.4)}s.fillStyle="#e8ffff19";for(let u=0;u<8;u++)s.beginPath(),s.ellipse(l+n()*a,h+n()*o,1.3,.6,n()*3,0,Math.PI*2),s.fill()}else if(c==="ash"){for(let u=0;u<o;u+=.8)f(l,h+u,l+a,h+u);for(let u=0;u<30;u++){let p=l+n()*a,y=h+n()*o;d(p,y,.2+n()*.6,.08+n()*.3,u%5?"#201e2677":"#ee956d55")}}else if(c==="mosaic"||c==="arcade"){for(let u=0;u<o;u++)for(let p=0;p<a;p++)d(l+p+.04,h+u+.04,.92,.92,(p+u)%2?"#a4a3b929":"#252c4a55");s.strokeStyle=e.accent+"88",s.lineWidth=.09,s.beginPath(),s.ellipse(i,r,Math.min(a,o)*.31,Math.min(a,o)*.31,0,0,Math.PI*2),s.stroke(),s.beginPath();for(let u=0;u<9;u++){let p=u*Math.PI/4,y=Math.min(a,o)*(u%2?.12:.25),g=i+Math.sin(p)*y,m=r+Math.cos(p)*y;u?s.lineTo(g,m):s.moveTo(g,m)}s.stroke()}else{let u=c==="grate"?.4:1;for(let p=0;p<a;p+=u)f(l+p,h,l+p,h+o);for(let p=0;p<o;p+=u)f(l,h+p,l+a,h+p);if(c==="lab")d(l+.6,h+.6,a-1.2,.12,e.accent+"88"),d(l+.6,h+.6,.12,o-1.2,e.accent+"88"),s.strokeStyle="#bdeaca88",s.lineWidth=.15,f(i-.45,r,i+.45,r),f(i,r-.45,i,r+.45);else{for(let p=0;p<a-1;p+=.5)d(l+.5+p,h+.45,.24,.18,e.accent+"aa");s.strokeStyle=e.accent+"66",s.lineWidth=.06,s.strokeRect(l+.4,h+.4,a-.8,o-.8)}}s.fillStyle=e.accent+"88",s.textAlign="center",s.font="bold .32px sans-serif",s.fillText(e.sign,i,h+.65),s.restore()}function Lc(s,t,e,n,i){let{x:r,z:a,w:o,d:l}=e,h=e.visual||e.kind;if(h==="car"){s.car(t,e);return}if(h==="crate"){s.crate(t,e);return}let f=(d,c,u,p,y)=>{t.fillStyle=y,t.fillRect(d,c,u,p)};if(f(r-o/2,a-l/2,o,l,n.wall),f(r-o/2,a-l/2-.25,o,l-.1,n.cap),h==="locker")for(let d=0;d<3;d++){let c=r-o/2+d*o/3;f(c+.04,a-l/2-.18,o/3-.08,l-.17,n.wall);for(let u=0;u<3;u++)f(c+o/12,a-l/2+u*.08,o/6,.025,"#bcc5ae");f(c+o/5,a+l/2-.5,.035,.2,"#e0cda1")}else if(h==="shelf"){f(r-o/2+.08,a-l/2-.15,o-.16,l-.13,"#372c2d");let d=["#9b5d58","#657b72","#bb9b65","#738297","#7f6683"];for(let c=0;c<3;c++){for(let u=0;u<Math.floor(o/.2)-1;u++)f(r-o/2+.12+u*.2,a-l/2-.1+c*l/3,.15,l/3-.08,d[(u+c)%5]);f(r-o/2,a-l/2+.2+c*l/3,o,.06,"#b49670")}}else if(h==="planter"){f(r-o/2+.1,a-l/2-.12,o-.2,l-.18,"#253c31");for(let d=0;d<12;d++)t.fillStyle=d%2?"#649466":"#456e51",t.beginPath(),t.ellipse(r+(i()-.5)*(o-.2),a-.16+(i()-.5)*(l-.25),.13+i()*.16,.2,i()*3,0,Math.PI*2),t.fill()}else if(h==="machine"){f(r-o*.4,a-l*.35-.2,o*.33,l*.35,"#183238"),f(r-o*.35,a-l*.3-.2,o*.23,l*.24,"#8dcebc");for(let d=0;d<5;d++)f(r+o*.04,a-l*.32-.16+d*.13,o*.32,.035,"#23333e");f(r-o*.42,a+l*.24,o*.84,.12,n.accent)}else if(h==="tank"){let d=Math.max(1,Math.floor(o/1.1));for(let c=0;c<d;c++){let u=r+(c-(d-1)/2)*o/d,p=Math.min(o/d,l)*.35;f(u-p,a-.5,p*2,.85,"#32616f"),t.fillStyle=n.cap,t.beginPath(),t.ellipse(u,a-.5,p,p*.6,0,0,Math.PI*2),t.fill(),f(u-p*.3,a-.4,p*.6,.55,n.light)}}else if(h==="crystal")for(let d=0;d<6;d++){let c=r+(i()-.5)*o*.7,u=a+(i()-.5)*l*.6,p=.4+i()*.7;t.fillStyle=d%2?"#acdbe4":"#77afc9",t.beginPath(),t.moveTo(c,u-p),t.lineTo(c+.18,u-.05),t.lineTo(c+.1,u+.15),t.lineTo(c-.2,u),t.closePath(),t.fill(),t.strokeStyle="#d8fcff",t.lineWidth=.025,t.stroke()}else if(h==="stone")f(r-o*.38,a-l*.42,o*.76,l*.65,n.wall),f(r-o*.28-.1,a-.7,.2,1,n.cap),f(r+o*.28-.1,a-.7,.2,1,n.cap),f(r-o*.42,a-.73,o*.84,.15,n.accent);else if(h==="rubble")for(let d=0;d<12;d++){let c=r+(i()-.5)*o*.8,u=a+(i()-.5)*l*.75;f(c-.2,u-.1,.25+i()*.25,.12+i()*.23,d%4?"#564749":"#a97350")}}var an=999,Sr=2.25,Qn=740129,_e=39,jn=43,rn=s=>({x:s%_e-19,z:Math.floor(s/_e)-21});function Ho(s,t){let e=new Int16Array(_e*jn).fill(-1),n=new Int16Array(_e*jn),i=1;n[0]=t,e[t]=0;for(let r=0;r<i;r++){let a=n[r],o=a%_e,l=Math.floor(a/_e);for(let[h,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=o+h,c=l+f,u=c*_e+d;d<0||d>=_e||c<0||c>=jn||!s[u]||e[u]>=0||(e[u]=e[a]+1,n[i++]=u)}}return{distances:e,count:i}}function Dc(s,t=Qn){if(!Number.isInteger(s)||s<0||s>=an)throw new RangeError("Floor must be 1\u2013999");let e=(t>>>0^Math.imul(s+1,2654435761))>>>0,n=xn(e),i=(F,Z)=>F+Math.floor(n()*(Z-F+1)),r=new Uint8Array(_e*jn),a=[],o=[],l=(F,Z)=>{F>0&&F<_e-1&&Z>0&&Z<jn-1&&(r[Z*_e+F]=1)};function h(F,Z){let et=n()<.5?{cx:Z.cx,cz:F.cz}:{cx:F.cx,cz:Z.cz};for(let[rt,Et]of[[F,et],[et,Z]]){let kt=rt.cx,Nt=rt.cz,H=()=>{for(let it=-1;it<=1;it++)for(let nt=-1;nt<=1;nt++)l(kt+nt,Nt+it)};for(H();kt!==Et.cx||Nt!==Et.cz;)kt+=Math.sign(Et.cx-kt),Nt+=Math.sign(Et.cz-Nt),H()}o.push([rn(F.cz*_e+F.cx),rn(Z.cz*_e+Z.cx)])}function f(F,Z){if(Z<3&&(F.w>=16||F.d>=16)){let H=F.w<16?!1:F.d<16||F.w/F.d>1.3?!0:F.d/F.w>1.3?!1:n()<.5,it=H?F.w:F.d,nt=i(7,it-7),Lt=f({...F,w:H?nt:F.w,d:H?F.d:nt},Z+1),Ut=f({...F,x:F.x+(H?nt:0),z:F.z+(H?0:nt),w:H?it-nt:F.w,d:H?F.d:it-nt},Z+1);return h(Lt,Ut),n()<.5?Lt:Ut}let et=i(5,Math.max(5,F.w-2)),rt=i(5,Math.max(5,F.d-2)),Et=F.x+i(1,Math.max(1,F.w-et-1)),kt=F.z+i(1,Math.max(1,F.d-rt-1));for(let H=kt;H<kt+rt;H++)for(let it=Et;it<Et+et;it++)l(it,H);let Nt={x:Et-19+(et-1)/2,z:kt-21+(rt-1)/2,w:et,d:rt,cx:Et+Math.floor(et/2),cz:kt+Math.floor(rt/2)};return a.push(Nt),Nt}f({x:1,z:1,w:37,d:41},0);for(let F=0;F<2;F++){let Z=i(0,a.length-1),et=(Z+i(1,a.length-1))%a.length;h(a[Z],a[et])}let d=[],c=new Map;for(let F=0;F<jn;F++){let Z=new Map;for(let et=0;et<_e;){if(r[F*_e+et]){et++;continue}let rt=et;for(;et<_e&&!r[F*_e+et];)et++;let Et=et-rt,kt=rt+":"+Et,Nt=c.get(kt);if(Nt)Nt.d++,Nt.z+=.5,Z.set(kt,Nt);else{let H={x:rt-19+(Et-1)/2,z:F-21,w:Et,d:1,kind:"wall"};d.push(H),Z.set(kt,H)}}c=Z}let u=new Uint8Array(_e*jn);for(let F=1;F<jn-1;F++)for(let Z=1;Z<_e-1;Z++){let et=!0;for(let rt=-1;rt<=1;rt++)for(let Et=-1;Et<=1;Et++)r[(F+rt)*_e+Z+Et]||(et=!1);u[F*_e+Z]=et?1:0}let p=Array.from(u,(F,Z)=>Z).filter(F=>u[F]),y=[],g=u;for(let F=0;F<8;F++){let Z=rn(p[i(0,p.length-1)]);if(a.some(H=>re(Z,{x:H.cx-19,z:H.cz-21})<2.5))continue;let et=n()<.22,rt={...Z,w:et?3.8:1.4,d:et?1.9:1.4,kind:et?"car":"crate"};if(Dn(Z.x,Z.z,et?2.4:1.5,d))continue;let Et=new Uint8Array(u),kt=0,Nt=-1;for(let H of p){let it=rn(H);Dn(it.x,it.z,.95,[...y,rt])?Et[H]=0:(kt++,Nt=H)}kt<100||Ho(Et,Nt).count!==kt||(y.push(rt),g=Et)}let m=p.filter(F=>g[F]),b=a[i(0,a.length-1)],E={x:b.cx-19,z:b.cz-21},M=m.reduce((F,Z)=>re(rn(Z),E)<re(rn(F),E)?Z:F,m[0]),A=Ho(g,M).distances,T=m.filter(F=>A[F]>=0).sort((F,Z)=>A[Z]-A[F]),C=T[i(0,Math.max(0,Math.floor(T.length*.08)-1))],_=Ho(g,C).distances,S=m.filter(F=>A[F]>8&&_[F]>12).sort((F,Z)=>_[Z]+A[Z]*.35-(_[F]+A[F]*.35)),R=S.length?S[i(0,Math.min(12,S.length-1))]:M,I=rn(M),D=rn(C),q=rn(R),X=m.slice();for(let F=X.length-1;F>0;F--){let Z=i(0,F);[X[F],X[Z]]=[X[Z],X[F]]}let B=[],Y=Math.min(26,8+Math.floor(Math.log2(s+2)*2));for(let F of X){let Z=rn(F);if(!(re(Z,I)<6||re(Z,D)<1.8||re(Z,q)<2||B.some(et=>re(Z,et)<2.1))&&(B.push(Z),B.length>=Y))break}let W=[];for(let F of X.slice().reverse()){let Z=rn(F);if(!(re(Z,I)<2||re(Z,D)<1.8||re(Z,q)<1.8||W.some(et=>re(Z,et)<5))&&(W.push({...Z,type:W.length%2?"heal":"cell"}),W.length===3))break}let Q=Go[s%Go.length];for(let F of y)F.visual=F.kind==="car"?Q.largeProp:Q.prop;return{seed:e,floor:s+1,name:Q.name,sub:Q.sub,theme:Q,count:B.length,start:I,key:D,exit:q,rooms:a,corridors:o,tiles:r,spawns:B,pickups:W,obstacles:[...d,...y],lamps:a.map(F=>({x:F.cx-19,z:F.cz-21-1.7}))}}var Ss=class{constructor(t=0,e=[],n=0,i=Qn){this.upgrades=e,this.score=n,this.stage=t,this.runSeed=i>>>0,this.config=Dc(t,this.runSeed),this.obstacles=this.config.obstacles,this.time=0,this.status="playing",this.kills=0,this.events=[],this.hasKey=!1,this.keyAvailable=!0,this.keyDiscovered=!1,this.lit=!1,this.exhausted=!1,this.flash=0,this.player={...this.config.start,r:.43,hp:5,maxHp:5,battery:100,angle:2.5,invulnerable:1.4,dashTime:0,dashCd:0,heal:2,cells:2,dx:0,dz:0},this.range=e.includes("range")?11.5:9,this.damage=e.includes("power")?42:31,this.halfAngle=e.includes("wide")?.69:.48,this.enemies=[],this.pickups=[],this.projectiles=[],this.pulses=[],this.nextAttackId=0,this.rand=xn(this.config.seed),this.buildEnemies(),this.buildNav(),this.navTimer=0,this.navTarget=""}buildEnemies(){let t=Pc(this.stage);this.enemies=this.config.spawns.map((e,n)=>Ic(n===this.config.spawns.length-1?"brute":n===0?"shadow":t[n%t.length],n,e,this.stage,this.rand()*6.28)),this.pickups=this.config.pickups.map(e=>({...e,taken:!1}))}get keyVisibleOnMap(){return this.keyDiscovered&&!this.hasKey}get isFinalFloor(){return this.stage===an-1}buildNav(){this.navW=39,this.navD=43,this.walkable=new Uint8Array(this.navW*this.navD);for(let t=0;t<this.navD;t++)for(let e=0;e<this.navW;e++)this.walkable[t*this.navW+e]=Dn(e-19,t-21,.55,this.obstacles)?0:1;this.flow=new Int16Array(this.walkable.length)}updateNav(){let t=ke(Math.round(this.player.x+19),0,38),e=ke(Math.round(this.player.z+21),0,42),n=e*this.navW+t;if(!this.walkable[n]){let r=1/0;for(let a=0;a<this.walkable.length;a++)if(this.walkable[a]){let o=Math.hypot(a%39-t,Math.floor(a/39)-e);o<r&&(n=a,r=o)}}this.flow.fill(-1),this.flow[n]=0;let i=[n];for(let r=0;r<i.length;r++){let a=i[r],o=a%39,l=Math.floor(a/39);for(let[h,f]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=o+h,c=l+f,u=c*39+d;d<0||d>=39||c<0||c>=43||!this.walkable[u]||this.flow[u]>=0||(this.flow[u]=this.flow[a]+1,i.push(u))}}}direction(t){let e=this.player;if(be(t,e,this.obstacles))return{x:e.x-t.x,z:e.z-t.z};let n=ke(Math.round(t.x+19),0,38),i=ke(Math.round(t.z+21),0,42),r=null,a=1/0;for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){let h=n+l,f=i+o,d=f*39+h;if(h<0||h>=39||f<0||f>=43||this.flow[d]<0)continue;let c={x:h-19,z:f-21};if(!be(t,c,this.obstacles))continue;let u=this.flow[d]+Math.hypot(c.x-t.x,c.z-t.z)*.1;u<a&&(a=u,r=c)}return r?{x:r.x-t.x,z:r.z-t.z}:{x:0,z:0}}emit(t,e={}){this.events.push({type:t,...e})}consume(t){if(this.status!=="playing")return!1;let e=this.player;return t==="heal"&&e.heal>0&&e.hp<e.maxHp?(e.heal--,e.hp=Math.min(e.maxHp,e.hp+2),this.emit("heal"),!0):t==="cell"&&e.cells>0&&e.battery<95?(e.cells--,e.battery=Math.min(100,e.battery+70),this.exhausted=!1,this.emit("cell"),!0):!1}dash(t,e){let n=this.player;if(this.status!=="playing"||n.dashCd>0)return;let i=Math.hypot(t,e);n.dx=i>.1?t/i:Math.sin(n.angle),n.dz=i>.1?e/i:Math.cos(n.angle),n.dashTime=.22,n.dashCd=this.upgrades.includes("dash")?.85:1.3,n.invulnerable=Math.max(n.invulnerable,.35),this.emit("dash",{x:n.x,z:n.z})}hit(t,e){let n=this.player;if(n.invulnerable>0)return;n.hp=Math.max(0,n.hp-t),n.invulnerable=1.25,this.flash=.3;let i=Math.max(.1,re(n,e));sn(n,(n.x-e.x)/i*.65,(n.z-e.z)/i*.65,this.obstacles),this.emit("hurt"),n.hp<=0&&(this.status="dead",this.emit("dead"))}tickSpecial(t,e,n,i){if(t.type!=="wisp"&&t.type!=="spore")return!1;let r=this.player,a=t.type==="wisp",o=be(t,r,this.obstacles);if(t.state==="recover")return t.timer-=e,t.timer<=0&&(t.state="hunt",t.cooldown=a?1.5:1.8),!0;if(t.state==="cast"||t.state==="puff")return t.litTime=n?t.litTime+e:Math.max(0,t.litTime-e*2),t.litTime>(a?.32:.4)?(t.state="recover",t.timer=1.25,this.emit("stagger",{x:t.x,z:t.z}),!0):(t.timer-=e,t.timer<=0&&(a&&this.projectiles.length<18?(this.projectiles.push({id:this.nextAttackId++,x:t.x+t.chargeX*(t.r+.22),z:t.z+t.chargeZ*(t.r+.22),r:.17,vx:t.chargeX*3.5,vz:t.chargeZ*3.5,life:2.6}),this.emit("shot")):!a&&this.pulses.length<8&&(this.pulses.push({id:this.nextAttackId++,x:t.x,z:t.z,radius:0,previous:0,maxRadius:4.2,hit:!1}),this.emit("pulse")),t.state="recover",t.timer=a?1.25:1.6),!0);if(t.cooldown<=0&&i<(a?6.2:3.7)&&o)return t.state=a?"cast":"puff",t.timer=t.maxTimer=a?.95:1.25,t.litTime=0,t.chargeX=(r.x-t.x)/Math.max(.01,i),t.chargeZ=(r.z-t.z)/Math.max(.01,i),t.angle=Math.atan2(t.chargeX,t.chargeZ),this.emit("windup",{kind:t.type}),!0;let l=this.direction(t);if(a&&o&&i<6.2){let f=l.x/Math.max(.01,i),d=l.z/Math.max(.01,i),c=i<4?-1:i>5.6?1:0;l={x:f*c-d*t.strafe*.55,z:d*c+f*t.strafe*.55}}let h=Math.hypot(l.x,l.z);if(h>.01){t.angle=Math.atan2(r.x-t.x,r.z-t.z);let f=t.speed*(n?.32:1);sn(t,l.x/h*f*e,l.z/h*f*e,this.obstacles)}return!0}tickAttacks(t){for(let e=this.projectiles.length-1;e>=0;e--){let n=this.projectiles[e];n.life-=t;let i=n.life<=0,r=Math.max(1,Math.ceil(Math.hypot(n.vx,n.vz)*t/.12));for(let a=0;a<r&&!i;a++){let o={x:n.x+n.vx*t/r,z:n.z+n.vz*t/r};if(Dn(o.x,o.z,n.r,this.obstacles)||!be(n,o,this.obstacles)){i=!0;break}Object.assign(n,o),this.lit&&bs(this.player,n,this.obstacles,this.range,this.halfAngle)?(i=!0,this.emit("extinguish",{x:n.x,z:n.z})):re(n,this.player)<n.r+this.player.r&&(i=!0,this.hit(1,n))}i&&this.projectiles.splice(e,1)}for(let e=this.pulses.length-1;e>=0;e--){let n=this.pulses[e];n.previous=n.radius,n.radius=Math.min(n.maxRadius,n.radius+t*4.8);let i=re(n,this.player);!n.hit&&i>=n.previous-this.player.r&&i<=n.radius+this.player.r&&be(n,this.player,this.obstacles)&&(n.hit=!0,this.hit(1,n)),n.radius>=n.maxRadius&&this.pulses.splice(e,1)}}tick(t,e={}){if(this.status!=="playing")return;t=Math.min(t,1/30),this.time+=t;let n=this.player;this.flash=Math.max(0,this.flash-t),n.invulnerable=Math.max(0,n.invulnerable-t),n.dashCd=Math.max(0,n.dashCd-t);let i=e.x||0,r=e.z||0,a=Math.hypot(i,r);a>1&&(i/=a,r/=a),e.dash&&this.dash(i,r),this.lit=!!e.light&&!this.exhausted&&n.battery>0,this.lit?(n.battery=Math.max(0,n.battery-t*(this.upgrades.includes("battery")?8.5:12)),n.battery<=0&&(this.exhausted=!0,this.lit=!1,this.emit("empty"))):(n.battery=Math.min(100,n.battery+t*16),this.exhausted&&n.battery>=28&&(this.exhausted=!1)),n.dashTime>0?(n.dashTime-=t,sn(n,n.dx*t*16,n.dz*t*16,this.obstacles)):sn(n,i*t*(this.lit?3.5:4.6),r*t*(this.lit?3.5:4.6),this.obstacles);let o=e.aim;if(o==null&&this.lit){let l=1/0,h;for(let f of this.enemies){if(f.hp<=0)continue;let d=re(f,n);d<this.range+2&&d<l&&be(n,f,this.obstacles)&&(l=d,h=f)}h&&(o=Math.atan2(h.x-n.x,h.z-n.z))}o==null&&a>.12&&(o=Math.atan2(i,r)),o!=null&&(n.angle+=Mr(o,n.angle)*Math.min(1,t*12)),this.navTimer-=t,this.navTimer<=0&&(this.navTimer=.45,this.updateNav());for(let l of this.enemies){if(l.hp<=0){l.death+=t;continue}l.cooldown=Math.max(0,l.cooldown-t);let h=re(l,n),f=this.lit&&bs(n,l,this.obstacles,this.range,this.halfAngle);if(l.exposure=ke(l.exposure+(f?t*4:-t*3),0,1),f&&(l.hp-=this.damage*t*(l.state==="windup"?.75:1),l.hp<=0)){this.kills++,this.score+=l.type==="brute"?500:100,this.emit("kill",{x:l.x,z:l.z,brute:l.type==="brute"}),l.type==="brute"&&this.emit("bruteDown"),this.kills%4===0&&this.pickups.push({x:l.x,z:l.z,type:"energy",taken:!1});continue}if(l.state==="idle")if(l.angle+=t*.3,h<9&&be(l,n,this.obstacles))l.state="hunt",this.emit("alert",{brute:l.type==="brute",kind:l.type});else continue;if(this.tickSpecial(l,t,f,h))continue;if(l.state==="windup"){l.timer-=t,l.timer<=0&&(l.state="charge",l.timer=l.type==="brute"?.68:l.type==="stalker"?.34:.25);continue}if(l.state==="charge"){l.timer-=t,sn(l,l.chargeX*t*(l.type==="brute"?10:7),l.chargeZ*t*(l.type==="brute"?10:7),this.obstacles),re(l,n)<l.r+n.r+.16&&this.hit(1,l),l.timer<=0&&(l.state="recover",l.timer=l.type==="brute"?1.2:.7);continue}if(l.state==="recover"){l.timer-=t,l.timer<=0&&(l.state="hunt",l.cooldown=1.1);continue}if(h<(l.type==="brute"?5.1:1.5)&&l.cooldown<=0&&be(l,n,this.obstacles)){l.state="windup",l.timer=l.maxTimer=l.type==="brute"?1.05:l.type==="stalker"?.75:.6,l.chargeX=(n.x-l.x)/Math.max(.01,h),l.chargeZ=(n.z-l.z)/Math.max(.01,h),l.angle=Math.atan2(l.chargeX,l.chargeZ),this.emit("windup",{brute:l.type==="brute"});continue}let d=this.direction(l),c=l.type==="stalker"&&h>2.1&&be(l,n,this.obstacles),u=c?{x:d.x*.72-d.z*.7*l.strafe,z:d.z*.72+d.x*.7*l.strafe}:d,p=Math.hypot(u.x,u.z);if(p>.01){let y=l.speed*(f?.32:1);l.angle=Math.atan2(u.x,u.z),sn(l,u.x/p*y*t,u.z/p*y*t,this.obstacles),f&&h<3.4&&sn(l,-u.x/p*t*.75,-u.z/p*t*.75,this.obstacles)}}this.tickAttacks(t);for(let l=0;l<this.enemies.length;l++){let h=this.enemies[l];if(!(h.hp<=0))for(let f=l+1;f<this.enemies.length;f++){let d=this.enemies[f];if(d.hp<=0)continue;let c=re(h,d),u=h.r+d.r+.15-c;if(u>0){let p=c>.001?(h.x-d.x)/c:1,y=c>.001?(h.z-d.z)/c:0;sn(h,p*u*.25,y*u*.25,this.obstacles),sn(d,-p*u*.25,-y*u*.25,this.obstacles)}}}!this.keyDiscovered&&this.lit&&bs(n,{...this.config.key,r:.25},this.obstacles,this.range,this.halfAngle)&&(this.keyDiscovered=!0,this.emit("keyReveal")),this.status==="playing"&&!this.hasKey&&re(n,this.config.key)<1.2&&be(n,this.config.key,this.obstacles)&&(this.hasKey=!0,this.keyDiscovered=!0,this.score+=250,this.emit("key"));for(let l of this.pickups)!l.taken&&re(n,l)<1.05&&be(n,l,this.obstacles)&&(l.type==="energy"?(n.battery=Math.min(100,n.battery+32),l.taken=!0):l.type==="cell"&&n.cells<5?(n.cells++,l.taken=!0):l.type==="heal"&&n.heal<5&&(n.heal++,l.taken=!0),l.taken&&this.emit("pickup",{item:l.type}));this.status==="playing"&&this.hasKey&&re(n,this.config.exit)<1.3&&be(n,this.config.exit,this.obstacles)&&(this.status="clear",this.score+=n.hp*100+Math.max(0,Math.round(350-this.time)),this.emit("clear"))}};var Wu=["power","range","wide","battery","dash"],Nc="light-game-save-v1";function Uc(s){try{let t=JSON.parse(s);return!t||!Number.isInteger(t.stage)||t.stage<0||t.stage>=an||!Array.isArray(t.upgrades)||!t.upgrades.every(e=>Wu.includes(e))||!Number.isFinite(t.score)||t.score<0||t.runSeed!==void 0&&(!Number.isInteger(t.runSeed)||t.runSeed<0||t.runSeed>4294967295)?null:{...t,upgrades:[...new Set(t.upgrades)],runSeed:t.runSeed??Qn}}catch{return null}}function Fc(){return crypto.getRandomValues(new Uint32Array(1))[0]}var ch=0,Al=1,hh=2;var sr=1,Da=2,ds=3,Vn=0,We=1,qe=2,En=0,Ci=1,Di=2,El=3,Cl=4,uh=5;var oi=100,fh=101,dh=102,ph=103,mh=104,gh=200,xh=201,_h=202,yh=203,$r=204,Kr=205,vh=206,Mh=207,bh=208,Sh=209,Th=210,wh=211,Ah=212,Eh=213,Ch=214,jr=0,Qr=1,ta=2,Ri=3,ea=4,na=5,ia=6,sa=7,Rl=0,Rh=1,Ih=2,un=0,Il=1,Pl=2,Ll=3,rr=4,Dl=5,Nl=6,Ul=7;var Fl=300,mi=301,Ni=302,Na=303,Ua=304,ar=306,ns=1e3,Mn=1001,ra=1002,Le=1003,Ph=1004;var or=1005;var Ne=1006,Fa=1007;var gi=1008;var Ye=1009,Ol=1010,Bl=1011,ps=1012,Oa=1013,fn=1014,dn=1015,Cn=1016,Ba=1017,za=1018,ms=1020,zl=35902,kl=35899,Vl=1021,Gl=1022,en=1023,bn=1026,xi=1027,Hl=1028,ka=1029,_i=1030,Va=1031;var Ga=1033,lr=33776,cr=33777,hr=33778,ur=33779,Ha=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,Ja=37496,$a=37488,Ka=37489,fr=37490,ja=37491,Qa=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,lo=37817,co=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,_o=36284,dr=36285,yo=36286;var Ls=2300,aa=2301,Jr=2302,gl=2303,xl=2400,_l=2401,yl=2402;var Lh=3200;var vo=0,Dh=1,Zn="",Ee="srgb",Ds="srgb-linear",Ns="linear",Jt="srgb";var Ai=7680;var vl=519,Nh=512,Uh=513,Fh=514,Mo=515,Oh=516,Bh=517,bo=518,zh=519,oa=35044;var Wl="300 es",hn=2e3,is=2001;function Xu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kh(){let s=Us("canvas");return s.style.display="block",s}var Oc={},ss=null;function Fs(...s){let t="THREE."+s.shift();ss?ss("log",t,...s):console.log(t,...s)}function Vh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ct(...s){s=Vh(s);let t="THREE."+s.shift();if(ss)ss("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Pt(...s){s=Vh(s);let t="THREE."+s.shift();if(ss)ss("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ei(...s){let t=s.join(" ");t in Oc||(Oc[t]=!0,Ct(...s))}function Gh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hh={[jr]:Qr,[ta]:ia,[ea]:sa,[Ri]:na,[Qr]:jr,[ia]:ta,[sa]:ea,[na]:Ri},Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wo=Math.PI/180,Os=180/Math.PI;function ai(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function Yu(s,t){return(s%t+t)%t}function Xo(s,t,e){return(1-e)*s+e*t}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jl=class Jl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jl.prototype.isVector2=!0;var Dt=Jl,Tn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],h=n[i+1],f=n[i+2],d=n[i+3],c=r[a+0],u=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==c||h!==u||f!==p){let g=l*c+h*u+f*p+d*y;g<0&&(c=-c,u=-u,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+c*o,h=h*m+u*o,f=f*m+p*o,d=d*m+y*o}else{l=l*m+c*o,h=h*m+u*o,f=f*m+p*o,d=d*m+y*o;let b=1/Math.sqrt(l*l+h*h+f*f+d*d);l*=b,h*=b,f*=b,d*=b}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],h=n[i+2],f=n[i+3],d=r[a],c=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+f*d+l*u-h*c,t[e+1]=l*p+f*c+h*d-o*u,t[e+2]=h*p+f*u+o*c-l*d,t[e+3]=f*p-o*d-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),f=o(i/2),d=o(r/2),c=l(n/2),u=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=c*f*d+h*u*p,this._y=h*u*d-c*f*p,this._z=h*f*p+c*u*d,this._w=h*f*d-c*u*p;break;case"YXZ":this._x=c*f*d+h*u*p,this._y=h*u*d-c*f*p,this._z=h*f*p-c*u*d,this._w=h*f*d+c*u*p;break;case"ZXY":this._x=c*f*d-h*u*p,this._y=h*u*d+c*f*p,this._z=h*f*p+c*u*d,this._w=h*f*d-c*u*p;break;case"ZYX":this._x=c*f*d-h*u*p,this._y=h*u*d+c*f*p,this._z=h*f*p-c*u*d,this._w=h*f*d+c*u*p;break;case"YZX":this._x=c*f*d+h*u*p,this._y=h*u*d+c*f*p,this._z=h*f*p-c*u*d,this._w=h*f*d-c*u*p;break;case"XZY":this._x=c*f*d-h*u*p,this._y=h*u*d-c*f*p,this._z=h*f*p+c*u*d,this._w=h*f*d+c*u*p;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],f=e[6],d=e[10],c=n+o+d;if(c>0){let u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-h)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(f-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+h)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-h)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+f)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+h)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,f=e._w;return this._x=n*f+a*o+i*h-r*l,this._y=i*f+a*l+r*o-n*h,this._z=r*f+a*h+n*l-i*o,this._w=a*f-n*o-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let h=Math.acos(o),f=Math.sin(h);l=Math.sin(l*h)/f,e=Math.sin(e*h)/f,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$l=class $l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*i-o*n),f=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*h+a*d-o*f,this.y=n+l*f+o*h-r*d,this.z=i+l*d+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$l.prototype.isVector3=!0;var L=$l,qo=new L,Bc=new Tn,Kl=class Kl{constructor(t,e,n,i,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h)}set(t,e,n,i,r,a,o,l,h){let f=this.elements;return f[0]=t,f[1]=i,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],f=n[4],d=n[7],c=n[2],u=n[5],p=n[8],y=i[0],g=i[3],m=i[6],b=i[1],E=i[4],M=i[7],A=i[2],T=i[5],C=i[8];return r[0]=a*y+o*b+l*A,r[3]=a*g+o*E+l*T,r[6]=a*m+o*M+l*C,r[1]=h*y+f*b+d*A,r[4]=h*g+f*E+d*T,r[7]=h*m+f*M+d*C,r[2]=c*y+u*b+p*A,r[5]=c*g+u*E+p*T,r[8]=c*m+u*M+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8];return e*a*f-e*o*h-n*r*f+n*o*l+i*r*h-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8],d=f*a-o*h,c=o*l-f*r,u=h*r-a*l,p=e*d+n*c+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=d*y,t[1]=(i*h-f*n)*y,t[2]=(o*n-i*a)*y,t[3]=c*y,t[4]=(f*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=u*y,t[7]=(n*l-h*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-i*h,i*l,-i*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kl.prototype.isMatrix3=!0;var Ft=Kl,Yo=new Ft,zc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zu(){let s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?Ns:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:zc,fromXYZ:kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}var Wt=Zu();function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zi,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=Us("canvas")),zi.width=t.width,zi.height=t.height;let i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Us("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ju=0,rs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Zo(i[a].image)):r.push(Zo(i[a]))}else r=Zo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?la.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var $u=0,Jo=new L,Ge=class s extends Sn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mn,i=Mn,r=Ne,a=gi,o=en,l=Ye,h=s.DEFAULT_ANISOTROPY,f=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ai(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Fl;Ge.DEFAULT_ANISOTROPY=1;var jl=class jl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],f=l[4],d=l[8],c=l[1],u=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(f-c)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(h+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(h+1)/2,M=(u+1)/2,A=(m+1)/2,T=(f+c)/4,C=(d+y)/4,_=(p+g)/4;return E>M&&E>A?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=C/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=_/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(c-f)*(c-f));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-y)/b,this.z=(c-f)/b,this.w=Math.acos((h+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jl.prototype.isVector4=!0;var ce=jl,ca=class extends Sn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ge(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bs=class extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var La=class La{constructor(t,e,n,i,r,a,o,l,h,f,d,c,u,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,h,f,d,c,u,p,y,g)}set(t,e,n,i,r,a,o,l,h,f,d,c,u,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=f,m[10]=d,m[14]=c,m[3]=u,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),h=Math.sin(i),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let c=a*f,u=a*d,p=o*f,y=o*d;e[0]=l*f,e[4]=-l*d,e[8]=h,e[1]=u+p*h,e[5]=c-y*h,e[9]=-o*l,e[2]=y-c*h,e[6]=p+u*h,e[10]=a*l}else if(t.order==="YXZ"){let c=l*f,u=l*d,p=h*f,y=h*d;e[0]=c+y*o,e[4]=p*o-u,e[8]=a*h,e[1]=a*d,e[5]=a*f,e[9]=-o,e[2]=u*o-p,e[6]=y+c*o,e[10]=a*l}else if(t.order==="ZXY"){let c=l*f,u=l*d,p=h*f,y=h*d;e[0]=c-y*o,e[4]=-a*d,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*f,e[9]=y-c*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let c=a*f,u=a*d,p=o*f,y=o*d;e[0]=l*f,e[4]=p*h-u,e[8]=c*h+y,e[1]=l*d,e[5]=y*h+c,e[9]=u*h-p,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let c=a*l,u=a*h,p=o*l,y=o*h;e[0]=l*f,e[4]=y-c*d,e[8]=p*d+u,e[1]=d,e[5]=a*f,e[9]=-o*f,e[2]=-h*f,e[6]=u*d+p,e[10]=c-y*d}else if(t.order==="XZY"){let c=a*l,u=a*h,p=o*l,y=o*h;e[0]=l*f,e[4]=-d,e[8]=h*f,e[1]=c*d+y,e[5]=a*f,e[9]=u*d-p,e[2]=p*d-u,e[6]=o*f,e[10]=y*d+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,ju)}lookAt(t,e,n){let i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ti.crossVectors(n,Je),ti.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ti.crossVectors(n,Je)),ti.normalize(),Tr.crossVectors(Je,ti),i[0]=ti.x,i[4]=Tr.x,i[8]=Je.x,i[1]=ti.y,i[5]=Tr.y,i[9]=Je.y,i[2]=ti.z,i[6]=Tr.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],f=n[1],d=n[5],c=n[9],u=n[13],p=n[2],y=n[6],g=n[10],m=n[14],b=n[3],E=n[7],M=n[11],A=n[15],T=i[0],C=i[4],_=i[8],S=i[12],R=i[1],I=i[5],D=i[9],q=i[13],X=i[2],B=i[6],Y=i[10],W=i[14],Q=i[3],F=i[7],Z=i[11],et=i[15];return r[0]=a*T+o*R+l*X+h*Q,r[4]=a*C+o*I+l*B+h*F,r[8]=a*_+o*D+l*Y+h*Z,r[12]=a*S+o*q+l*W+h*et,r[1]=f*T+d*R+c*X+u*Q,r[5]=f*C+d*I+c*B+u*F,r[9]=f*_+d*D+c*Y+u*Z,r[13]=f*S+d*q+c*W+u*et,r[2]=p*T+y*R+g*X+m*Q,r[6]=p*C+y*I+g*B+m*F,r[10]=p*_+y*D+g*Y+m*Z,r[14]=p*S+y*q+g*W+m*et,r[3]=b*T+E*R+M*X+A*Q,r[7]=b*C+E*I+M*B+A*F,r[11]=b*_+E*D+M*Y+A*Z,r[15]=b*S+E*q+M*W+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],f=t[2],d=t[6],c=t[10],u=t[14],p=t[3],y=t[7],g=t[11],m=t[15],b=l*u-h*c,E=o*u-h*d,M=o*c-l*d,A=a*u-h*f,T=a*c-l*f,C=a*d-o*f;return e*(y*b-g*E+m*M)-n*(p*b-g*A+m*T)+i*(p*E-y*A+m*C)-r*(p*M-y*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],f=t[10];return e*(a*f-o*h)-n*(r*f-o*l)+i*(r*h-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],f=t[8],d=t[9],c=t[10],u=t[11],p=t[12],y=t[13],g=t[14],m=t[15],b=e*o-n*a,E=e*l-i*a,M=e*h-r*a,A=n*l-i*o,T=n*h-r*o,C=i*h-r*l,_=f*y-d*p,S=f*g-c*p,R=f*m-u*p,I=d*g-c*y,D=d*m-u*y,q=c*m-u*g,X=b*q-E*D+M*I+A*R-T*S+C*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/X;return t[0]=(o*q-l*D+h*I)*B,t[1]=(i*D-n*q-r*I)*B,t[2]=(y*C-g*T+m*A)*B,t[3]=(c*T-d*C-u*A)*B,t[4]=(l*R-a*q-h*S)*B,t[5]=(e*q-i*R+r*S)*B,t[6]=(g*M-p*C-m*E)*B,t[7]=(f*C-c*M+u*E)*B,t[8]=(a*D-o*R+h*_)*B,t[9]=(n*R-e*D-r*_)*B,t[10]=(p*T-y*M+m*b)*B,t[11]=(d*M-f*T-u*b)*B,t[12]=(o*S-a*I-l*_)*B,t[13]=(e*I-n*S+i*_)*B,t[14]=(y*E-p*A-g*b)*B,t[15]=(f*A-d*E+c*b)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,f=r*o;return this.set(h*a+n,h*o-i*l,h*l+i*o,0,h*o+i*l,f*o+n,f*l-i*a,0,h*l-i*o,f*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,f=a+a,d=o+o,c=r*h,u=r*f,p=r*d,y=a*f,g=a*d,m=o*d,b=l*h,E=l*f,M=l*d,A=n.x,T=n.y,C=n.z;return i[0]=(1-(y+m))*A,i[1]=(u+M)*A,i[2]=(p-E)*A,i[3]=0,i[4]=(u-M)*T,i[5]=(1-(c+m))*T,i[6]=(g+b)*T,i[7]=0,i[8]=(p+E)*C,i[9]=(g-b)*C,i[10]=(1-(c+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ki.set(i[0],i[1],i[2]).length(),o=ki.set(i[4],i[5],i[6]).length(),l=ki.set(i[8],i[9],i[10]).length();r<0&&(a=-a),on.copy(this);let h=1/a,f=1/o,d=1/l;return on.elements[0]*=h,on.elements[1]*=h,on.elements[2]*=h,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=hn,l=!1){let h=this.elements,f=2*r/(e-t),d=2*r/(n-i),c=(e+t)/(e-t),u=(n+i)/(n-i),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===hn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===is)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=f,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=d,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=hn,l=!1){let h=this.elements,f=2/(e-t),d=2/(n-i),c=-(e+t)/(e-t),u=-(n+i)/(n-i),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===hn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===is)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=f,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=d,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=p,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};La.prototype.isMatrix4=!0;var le=La,ki=new L,on=new le,Ku=new L(0,0,0),ju=new L(1,1,1),ti=new L,Tr=new L,Je=new L,Vc=new le,Gc=new Tn,Gn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],h=i[5],f=i[9],d=i[2],c=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qu=0,Hc=new L,Vi=new Tn,Nn=new le,wr=new L,Ts=new L,tf=new L,ef=new Tn,Wc=new L(1,0,0),Xc=new L(0,1,0),qc=new L(0,0,1),Yc={type:"added"},nf={type:"removed"},Gi={type:"childadded",child:null},$o={type:"childremoved",child:null},pe=class s extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Gn,n=new Tn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ts,wr,this.up):Nn.lookAt(wr,Ts,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),f=a(t.images),d=a(t.shapes),c=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let h in o){let f=o[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};pe.DEFAULT_UP=new L(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(h,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],c=f.position.distanceTo(d.position),u=.02,p=.005;h.inputState.pinching&&c>u+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Yu(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ko(a,r,t+1/3),this.g=Ko(a,r,t),this.b=Ko(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Wt.workingToColorSpace(Oe.copy(this),t),Math.round(Xt(Oe.r*255,0,255))*65536+Math.round(Xt(Oe.g*255,0,255))*256+Math.round(Xt(Oe.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Oe.copy(this),e);let n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,h,f=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ee){Wt.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,i=Oe.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Ar);let n=Xo(ei.h,Ar.h,e),i=Xo(ei.s,Ar.s,e),r=Xo(ei.l,Ar.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new zt;zt.NAMES=Wh;var ks=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Vs=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new L,Un=new L,jo=new L,Fn=new L,Hi=new L,Wi=new L,Zc=new L,Qo=new L,tl=new L,el=new L,nl=new ce,il=new ce,sl=new ce,zn=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Un.subVectors(n,e),jo.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(Un),l=ln.dot(jo),h=Un.dot(Un),f=Un.dot(jo),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let c=1/d,u=(h*l-o*f)*c,p=(a*f-o*l)*c;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(t,e),il.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(il,r.y),a.addScaledVector(sl,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Un.subVectors(t,e),ln.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),ln.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Hi.subVectors(i,n),Wi.subVectors(r,n),Qo.subVectors(t,n);let l=Hi.dot(Qo),h=Wi.dot(Qo);if(l<=0&&h<=0)return e.copy(n);tl.subVectors(t,i);let f=Hi.dot(tl),d=Wi.dot(tl);if(f>=0&&d<=f)return e.copy(i);let c=l*d-f*h;if(c<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Hi,a);el.subVectors(t,r);let u=Hi.dot(el),p=Wi.dot(el);if(p>=0&&u<=p)return e.copy(r);let y=u*h-l*p;if(y<=0&&h>=0&&p<=0)return o=h/(h-p),e.copy(n).addScaledVector(Wi,o);let g=f*p-u*d;if(g<=0&&d-f>=0&&u-p>=0)return Zc.subVectors(r,i),o=(d-f)/(d-f+(u-p)),e.copy(i).addScaledVector(Zc,o);let m=1/(g+y+c);return a=y*m,o=c*m,e.copy(n).addScaledVector(Hi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),Cr.subVectors(this.max,ws),Xi.subVectors(t.a,ws),qi.subVectors(t.b,ws),Yi.subVectors(t.c,ws),ni.subVectors(qi,Xi),ii.subVectors(Yi,qi),bi.subVectors(Xi,Yi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!rl(e,Xi,qi,Yi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,Xi,qi,Yi,Cr))?!1:(Rr.crossVectors(ni,ii),e=[Rr.x,Rr.y,Rr.z],rl(e,Xi,qi,Yi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,Er=new li,Xi=new L,qi=new L,Yi=new L,ni=new L,ii=new L,bi=new L,ws=new L,Cr=new L,Rr=new L,Si=new L;function rl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Si.fromArray(s,r);let o=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),l=t.dot(Si),h=e.dot(Si),f=n.dot(Si);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>o)return!1}return!0}var Se=new L,Ir=new Dt,rf=0,ye=class extends Sn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oa&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gs=class extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hs=class extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},af=new li,As=new L,al=new L,Ii=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(al)),this.expandByPoint(As.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},of=0,tn=new le,ol=new pe,Zi=new L,$e=new li,Es=new li,Pe=new L,he=class s extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?Hs:Gs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors($e.min,Es.min),$e.expandByPoint(Pe),Pe.addVectors($e.max,Es.max),$e.expandByPoint(Pe)):($e.expandByPoint(Es.min),$e.expandByPoint(Es.max))}$e.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,f=o.count;h<f;h++)Pe.fromBufferAttribute(o,h),l&&(Zi.fromBufferAttribute(t,h),Pe.add(Zi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let h=new L,f=new L,d=new L,c=new Dt,u=new Dt,p=new Dt,y=new L,g=new L;function m(_,S,R){h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,S),d.fromBufferAttribute(n,R),c.fromBufferAttribute(r,_),u.fromBufferAttribute(r,S),p.fromBufferAttribute(r,R),f.sub(h),d.sub(h),u.sub(c),p.sub(c);let I=1/(u.x*p.y-p.x*u.y);isFinite(I)&&(y.copy(f).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(I),g.copy(d).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(I),o[_].add(y),o[S].add(y),o[R].add(y),l[_].add(g),l[S].add(g),l[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,S=b.length;_<S;++_){let R=b[_],I=R.start,D=R.count;for(let q=I,X=I+D;q<X;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let E=new L,M=new L,A=new L,T=new L;function C(_){A.fromBufferAttribute(i,_),T.copy(A);let S=o[_];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),M.crossVectors(T,S);let I=M.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,I)}for(let _=0,S=b.length;_<S;++_){let R=b[_],I=R.start,D=R.count;for(let q=I,X=I+D;q<X;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,h=new L,f=new L,d=new L;if(t)for(let c=0,u=t.count;c<u;c+=3){let p=t.getX(c+0),y=t.getX(c+1),g=t.getX(c+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),f.subVectors(a,r),d.subVectors(i,r),f.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),o.add(f),l.add(f),h.add(f),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)i.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),f.subVectors(a,r),d.subVectors(i,r),f.cross(d),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){let h=o.array,f=o.itemSize,d=o.normalized,c=new h.constructor(l.length*f),u=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*f;for(let m=0;m<f;m++)c[p++]=h[u++]}return new ye(c,f,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],h=t(l,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let f=0,d=h.length;f<d;f++){let c=h[f],u=t(c,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],f=[];for(let d=0,c=h.length;d<c;d++){let u=h[d];f.push(u.toJSON(t.data))}f.length>0&&(i[l]=f,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let f=i[h];this.setAttribute(h,f.clone(e))}let r=t.morphAttributes;for(let h in r){let f=[],d=r[h];for(let c=0,u=d.length;c<u;c++)f.push(d[c].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,f=a.length;h<f;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oa,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ve=new L,os=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lf=0,wn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ci,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=Kr,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$r&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ls=class extends wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ji,Cs=new L,$i=new L,Ki=new L,ji=new Dt,Rs=new Dt,Xh=new le,Pr=new L,Is=new L,Lr=new L,Jc=new Dt,ll=new Dt,$c=new Dt,Xs=class extends pe{constructor(t=new ls){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ws(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new os(n,3,0,!1)),Ji.setAttribute("uv",new os(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Dr(Pr.set(-.5,-.5,0),Ki,a,$i,i,r),Dr(Is.set(.5,-.5,0),Ki,a,$i,i,r),Dr(Lr.set(.5,.5,0),Ki,a,$i,i,r),Jc.set(0,0),ll.set(1,0),$c.set(1,1);let o=t.ray.intersectTriangle(Pr,Is,Lr,!1,Cs);if(o===null&&(Dr(Is.set(-.5,.5,0),Ki,a,$i,i,r),ll.set(0,1),o=t.ray.intersectTriangle(Pr,Lr,Is,!1,Cs),o===null))return;let l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:zn.getInterpolation(Cs,Pr,Is,Lr,Jc,ll,$c,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Dr(s,t,e,n,i,r){ji.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Rs.x=r*ji.x-i*ji.y,Rs.y=i*ji.x+r*ji.y):Rs.copy(ji),s.copy(t),s.x+=Rs.x,s.y+=Rs.y,s.applyMatrix4(Xh)}var Bn=new L,cl=new L,Nr=new L,si=new L,hl=new L,Ur=new L,ul=new L,qs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cl.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(cl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=si.dot(this.direction),l=-si.dot(Nr),h=si.lengthSq(),f=Math.abs(1-a*a),d,c,u,p;if(f>0)if(d=a*l-o,c=a*o-l,p=r*f,d>=0)if(c>=-p)if(c<=p){let y=1/f;d*=y,c*=y,u=d*(d+a*c+2*o)+c*(a*d+c+2*l)+h}else c=r,d=Math.max(0,-(a*c+o)),u=-d*d+c*(c+2*l)+h;else c=-r,d=Math.max(0,-(a*c+o)),u=-d*d+c*(c+2*l)+h;else c<=-p?(d=Math.max(0,-(-a*r+o)),c=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+c*(c+2*l)+h):c<=p?(d=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(d=Math.max(0,-(a*r+o)),c=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+c*(c+2*l)+h);else c=a>0?-r:r,d=Math.max(0,-(a*c+o)),u=-d*d+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(cl).addScaledVector(Nr,c),u}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,h=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,i=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,i=(t.min.x-c.x)*h),f>=0?(r=(t.min.y-c.y)*f,a=(t.max.y-c.y)*f):(r=(t.max.y-c.y)*f,a=(t.min.y-c.y)*f),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-c.z)*d,l=(t.max.z-c.z)*d):(o=(t.max.z-c.z)*d,l=(t.min.z-c.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){hl.subVectors(e,t),Ur.subVectors(n,t),ul.crossVectors(hl,Ur);let a=this.direction.dot(ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);let l=o*this.direction.dot(Ur.crossVectors(si,Ur));if(l<0)return null;let h=o*this.direction.dot(hl.cross(si));if(h<0||l+h>a)return null;let f=-o*si.dot(ul);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kc=new le,Ti=new qs,Fr=new Ii,jc=new L,Or=new L,Br=new L,zr=new L,fl=new L,kr=new L,Qc=new L,Vr=new L,Te=class extends pe{constructor(t=new he,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let f=o[l],d=r[l];f!==0&&(fl.fromBufferAttribute(d,t),a?kr.addScaledVector(fl,f):kr.addScaledVector(fl.sub(e),f))}e.add(kr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Fr,jc)===null||Ti.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,c=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=c.length;p<y;p++){let g=c[p],m=a[g.materialIndex],b=Math.max(g.start,u.start),E=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let M=b,A=E;M<A;M+=3){let T=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);i=Gr(this,m,t,n,h,f,d,T,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=p,m=y;g<m;g+=3){let b=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);i=Gr(this,a,t,n,h,f,d,b,E,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=c.length;p<y;p++){let g=c[p],m=a[g.materialIndex],b=Math.max(g.start,u.start),E=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let M=b,A=E;M<A;M+=3){let T=M,C=M+1,_=M+2;i=Gr(this,m,t,n,h,f,d,T,C,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=p,m=y;g<m;g+=3){let b=g,E=g+1,M=g+2;i=Gr(this,a,t,n,h,f,d,b,E,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function cf(s,t,e,n,i,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Vn,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Vr);return h<e.near||h>e.far?null:{distance:h,point:Vr.clone(),object:s}}function Gr(s,t,e,n,i,r,a,o,l,h){s.getVertexPosition(o,Or),s.getVertexPosition(l,Br),s.getVertexPosition(h,zr);let f=cf(s,t,e,n,Or,Br,zr,Qc);if(f){let d=new L;zn.getBarycoord(Qc,Or,Br,zr,d),i&&(f.uv=zn.getInterpolatedAttribute(i,o,l,h,d,new Dt)),r&&(f.uv1=zn.getInterpolatedAttribute(r,o,l,h,d,new Dt)),a&&(f.normal=zn.getInterpolatedAttribute(a,o,l,h,d,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new L,materialIndex:0};zn.getNormal(Or,Br,zr,c.normal),f.face=c,f.barycoord=d}return f}var ua=class extends Ge{constructor(t=null,e=1,n=1,i,r,a,o,l,h=Le,f=Le,d,c){super(null,a,o,l,h,f,i,r,d,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dl=new L,hf=new L,uf=new Ft,yn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dl.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new Ii,ff=new Dt(.5,.5),Hr=new L,cs=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,a=new yn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],f=r[4],d=r[5],c=r[6],u=r[7],p=r[8],y=r[9],g=r[10],m=r[11],b=r[12],E=r[13],M=r[14],A=r[15];if(i[0].setComponents(h-a,u-f,m-p,A-b).normalize(),i[1].setComponents(h+a,u+f,m+p,A+b).normalize(),i[2].setComponents(h+o,u+d,m+y,A+E).normalize(),i[3].setComponents(h-o,u-d,m-y,A-E).normalize(),n)i[4].setComponents(l,c,g,M).normalize(),i[5].setComponents(h-l,u-c,m-g,A-M).normalize();else if(i[4].setComponents(h-l,u-c,m-g,A-M).normalize(),e===hn)i[5].setComponents(h+l,u+c,m+g,A+M).normalize();else if(e===is)i[5].setComponents(l,c,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=ff.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Hr.x=i.normal.x>0?t.max.x:t.min.x,Hr.y=i.normal.y>0?t.max.y:t.min.y,Hr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ci=class extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fa=new L,da=new L,th=new le,Ps=new qs,Wr=new Ii,pl=new L,eh=new L,pa=class extends pe{constructor(t=new he,e=new ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)fa.fromBufferAttribute(e,i-1),da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fa.distanceTo(da);t.setAttribute("lineDistance",new $t(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;th.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,f=n.index,c=n.attributes.position;if(f!==null){let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let y=u,g=p-1;y<g;y+=h){let m=f.getX(y),b=f.getX(y+1),E=Xr(this,t,Ps,l,m,b,y);E&&e.push(E)}if(this.isLineLoop){let y=f.getX(p-1),g=f.getX(u),m=Xr(this,t,Ps,l,y,g,p-1);m&&e.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let y=u,g=p-1;y<g;y+=h){let m=Xr(this,t,Ps,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=Xr(this,t,Ps,l,p-1,u,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xr(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(fa.fromBufferAttribute(o,i),da.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,da,pl,eh)>n)return;pl.applyMatrix4(s.matrixWorld);let h=t.ray.origin.distanceTo(pl);if(!(h<t.near||h>t.far))return{distance:h,point:eh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var nh=new L,ih=new L,Pi=class extends pa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);t.setAttribute("lineDistance",new $t(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ys=class extends Ge{constructor(t=[],e=mi,n,i,r,a,o,l,h,f){super(t,e,n,i,r,a,o,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends Ge{constructor(t,e,n,i,r,a,o,l,h){super(t,e,n,i,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Ge{constructor(t,e,n=fn,i,r,a,o=Le,l=Le,h,f=bn,d=1){if(f!==bn&&f!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:d};super(c,i,r,a,o,l,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ma=class extends Xn{constructor(t,e=fn,n=mi,i,r,a=Le,o=Le,l,h=bn){let f={width:t,height:t,depth:1},d=[f,f,f,f,f,f];super(t,t,e,n,i,r,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zs=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hi=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],f=[],d=[],c=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function p(y,g,m,b,E,M,A,T,C,_,S){let R=M/C,I=A/_,D=M/2,q=A/2,X=T/2,B=C+1,Y=_+1,W=0,Q=0,F=new L;for(let Z=0;Z<Y;Z++){let et=Z*I-q;for(let rt=0;rt<B;rt++){let Et=rt*R-D;F[y]=Et*b,F[g]=et*E,F[m]=X,h.push(F.x,F.y,F.z),F[y]=0,F[g]=0,F[m]=T>0?1:-1,f.push(F.x,F.y,F.z),d.push(rt/C),d.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let et=0;et<C;et++){let rt=c+et+B*Z,Et=c+et+B*(Z+1),kt=c+(et+1)+B*(Z+1),Nt=c+(et+1)+B*Z;l.push(rt,Et,Nt),l.push(Et,kt,Nt),Q+=6}o.addGroup(u,Q,S),u+=Q,c+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hs=class s extends he{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new L,f=new Dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=e;d++,c+=3){let u=n+d/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),a.push(h.x,h.y,h.z),o.push(0,0,1),f.x=(a[c]/t+1)/2,f.y=(a[c+1]/t+1)/2,l.push(f.x,f.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},us=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;i=Math.floor(i),r=Math.floor(r);let f=[],d=[],c=[],u=[],p=0,y=[],g=n/2,m=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2));function b(){let M=new L,A=new L,T=0,C=(e-t)/n;for(let _=0;_<=r;_++){let S=[],R=_/r,I=R*(e-t)+t;for(let D=0;D<=i;D++){let q=D/i,X=q*l+o,B=Math.sin(X),Y=Math.cos(X);A.x=I*B,A.y=-R*n+g,A.z=I*Y,d.push(A.x,A.y,A.z),M.set(B,C,Y).normalize(),c.push(M.x,M.y,M.z),u.push(q,1-R),S.push(p++)}y.push(S)}for(let _=0;_<i;_++)for(let S=0;S<r;S++){let R=y[S][_],I=y[S+1][_],D=y[S+1][_+1],q=y[S][_+1];(t>0||S!==0)&&(f.push(R,I,q),T+=3),(e>0||S!==r-1)&&(f.push(I,D,q),T+=3)}h.addGroup(m,T,0),m+=T}function E(M){let A=p,T=new Dt,C=new L,_=0,S=M===!0?t:e,R=M===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,g*R,0),c.push(0,R,0),u.push(.5,.5),p++;let I=p;for(let D=0;D<=i;D++){let X=D/i*l+o,B=Math.cos(X),Y=Math.sin(X);C.x=S*Y,C.y=g*R,C.z=S*B,d.push(C.x,C.y,C.z),c.push(0,R,0),T.x=B*.5+.5,T.y=Y*.5*R+.5,u.push(T.x,T.y),p++}for(let D=0;D<i;D++){let q=A+D,X=I+D;M===!0?f.push(X,X+1,q):f.push(X+1,X,q),_+=3}h.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},An=class s extends us{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),h(n),f(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let E=new L,M=new L,A=new L;for(let T=0;T<e.length;T+=3)u(e[T+0],E),u(e[T+1],M),u(e[T+2],A),l(E,M,A,b)}function l(b,E,M,A){let T=A+1,C=[];for(let _=0;_<=T;_++){C[_]=[];let S=b.clone().lerp(M,_/T),R=E.clone().lerp(M,_/T),I=T-_;for(let D=0;D<=I;D++)D===0&&_===T?C[_][D]=S:C[_][D]=S.clone().lerp(R,D/I)}for(let _=0;_<T;_++)for(let S=0;S<2*(T-_)-1;S++){let R=Math.floor(S/2);S%2===0?(c(C[_][R+1]),c(C[_+1][R]),c(C[_][R])):(c(C[_][R+1]),c(C[_+1][R+1]),c(C[_+1][R]))}}function h(b){let E=new L;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(b),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function f(){let b=new L;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let M=g(b)/2/Math.PI+.5,A=m(b)/Math.PI+.5;a.push(M,1-A)}p(),d()}function d(){for(let b=0;b<a.length;b+=6){let E=a[b+0],M=a[b+2],A=a[b+4],T=Math.max(E,M,A),C=Math.min(E,M,A);T>.9&&C<.1&&(E<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function c(b){r.push(b.x,b.y,b.z)}function u(b,E){let M=b*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function p(){let b=new L,E=new L,M=new L,A=new L,T=new Dt,C=new Dt,_=new Dt;for(let S=0,R=0;S<r.length;S+=9,R+=6){b.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),T.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),A.copy(b).add(E).add(M).divideScalar(3);let I=g(A);y(T,R+0,b,I),y(C,R+2,E,I),y(_,R+4,M,I)}}function y(b,E,M,A){A<0&&b.x===1&&(a[E]=b.x-1),M.x===0&&M.z===0&&(a[E]=A/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var fs=class s extends ga{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var qn=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),h=o+1,f=l+1,d=t/o,c=e/l,u=[],p=[],y=[],g=[];for(let m=0;m<f;m++){let b=m*c-a;for(let E=0;E<h;E++){let M=E*d-r;p.push(M,-b,0),y.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let E=b+h*m,M=b+h*(m+1),A=b+1+h*(m+1),T=b+1+h*m;u.push(E,M,T),u.push(M,A,T)}this.setIndex(u),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Js=class s extends he{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],h=[],f=[],d=t,c=(e-t)/i,u=new L,p=new Dt;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=d*Math.cos(m),u.y=d*Math.sin(m),l.push(u.x,u.y,u.z),h.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,f.push(p.x,p.y)}d+=c}for(let y=0;y<i;y++){let g=y*(n+1);for(let m=0;m<n;m++){let b=m+g,E=b,M=b+n+1,A=b+n+2,T=b+1;o.push(E,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var $s=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],h=[],f=[],d=[],c=new L,u=new L,p=new L;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let m=0;m<=i;m++){let b=m/i*r;u.x=(t+e*Math.cos(g))*Math.cos(b),u.y=(t+e*Math.cos(g))*Math.sin(b),u.z=e*Math.sin(g),h.push(u.x,u.y,u.z),c.x=t*Math.cos(b),c.y=t*Math.sin(b),p.subVectors(u,c).normalize(),f.push(p.x,p.y,p.z),d.push(m/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let m=(i+1)*y+g-1,b=(i+1)*(y-1)+g-1,E=(i+1)*(y-1)+g,M=(i+1)*y+g;l.push(m,b,M),l.push(b,E,M)}this.setIndex(l),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ui(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(sh(i))i.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(sh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ze(s){let t={};for(let e=0;e<s.length;e++){let n=Ui(s[e]);for(let i in n)t[i]=n[i]}return t}function sh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function df(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xl(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var qh={clone:Ui,merge:ze},pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ce().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new le().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xa=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var _a=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var ui=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends ui{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case _l:r=t,o=2*e-n;break;case yl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:a=t,l=2*n-e;break;case yl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let h=(n-e)*.5,f=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,f=this._offsetPrev,d=this._offsetNext,c=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),y=p*p,g=y*p,m=-c*g+2*c*y-c*p,b=(1+c)*g+(-1.5-2*c)*y+(-.5+c)*p+1,E=(-1-u)*g+(1.5+u)*y+.5*p,M=u*g-u*y;for(let A=0;A!==o;++A)r[A]=m*a[f+A]+b*a[h+A]+E*a[l+A]+M*a[d+A];return r}},Ma=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,f=(n-e)/(i-e),d=1-f;for(let c=0;c!==o;++c)r[c]=a[h+c]*d+a[l+c]*f;return r}},ba=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends ui{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,f=this.inTangents,d=this.outTangents;if(!f||!d){let p=(n-e)/(i-e),y=1-p;for(let g=0;g!==o;++g)r[g]=a[h+g]*y+a[l+g]*p;return r}let c=o*2,u=t-1;for(let p=0;p!==o;++p){let y=a[h+p],g=a[l+p],m=u*c+p*2,b=d[m],E=d[m+1],M=t*c+p*2,A=f[M],T=f[M+1],C=(n-e)/(i-e),_,S,R,I,D;for(let q=0;q<8;q++){_=C*C,S=_*C,R=1-C,I=R*R,D=I*R;let B=D*e+3*I*C*b+3*R*_*A+S*i-n;if(Math.abs(B)<1e-10)break;let Y=3*I*(b-e)+6*R*C*(A-b)+3*_*(i-A);if(Math.abs(Y)<1e-10)break;C=C-B/Y,C=Math.max(0,Math.min(1,C))}r[p]=D*y+3*I*C*E+3*R*_*T+S*g}return r}},je=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qr(e,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qr(t.times,Array),values:qr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break;case gl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return gl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&qu(i))for(let o=0,l=i.length;o!==l;++o){let h=i[o];if(isNaN(h)){Pt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],f=t[o+1];if(h!==f&&(o!==1||h!==t[0]))if(i)l=!0;else{let d=o*n,c=d-n,u=d+n;for(let p=0;p!==n;++p){let y=e[d+p];if(y!==e[c+p]||y!==e[u+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,c=a*n;for(let u=0;u!==n;++u)e[c+u]=e[d+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=aa;var fi=class extends je{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ls;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends je{constructor(t,e,n,i){super(t,e,n,i)}};Ta.prototype.ValueTypeName="color";var wa=class extends je{constructor(t,e,n,i){super(t,e,n,i)}};wa.prototype.ValueTypeName="number";var Aa=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),h=t*o;for(let f=h+o;h!==f;h+=4)Tn.slerpFlat(r,0,a,h-o,a,h,l);return r}},Ks=class extends je{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends je{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ls;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends je{constructor(t,e,n,i){super(t,e,n,i)}};Ea.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return h.push(f,d),this},this.removeHandler=function(f){let d=h.indexOf(f);return d!==-1&&h.splice(d,2),this},this.getHandler=function(f){for(let d=0,c=h.length;d<c;d+=2){let u=h[d],p=h[d+1];if(u.global&&(u.lastIndex=0),u.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yh=new Ca,Ra=class{constructor(t){this.manager=t!==void 0?t:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li=class extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},js=class extends Li{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ml=new le,rh=new L,ah=new L,Qs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===is||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yr=new L,Zr=new Tn,_n=new L,tr=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,Zr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Yr,Zr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ri=new L,oh=new Dt,lh=new Dt,Be=class extends tr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,oh,lh),e.subVectors(lh,oh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/h,i*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ml=class extends Qs{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Os*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},er=class extends Li{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ml}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},bl=class extends Qs{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},nr=class extends Li{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},pi=class extends tr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sl=class extends Qs{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends Li{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Sl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qi=-90,ts=1,Ia=class extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(Qi,ts,t,e);i.layers=this.layers,this.add(i);let r=new Be(Qi,ts,t,e);r.layers=this.layers,this.add(r);let a=new Be(Qi,ts,t,e);a.layers=this.layers,this.add(a);let o=new Be(Qi,ts,t,e);o.layers=this.layers,this.add(o);let l=new Be(Qi,ts,t,e);l.layers=this.layers,this.add(l);let h=new Be(Qi,ts,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,f]=this.children,d=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(d,c,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Pa=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ql="\\[\\]\\.:\\/",gf=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",xf="[^"+ql.replace("\\.","")+"]",_f=/((?:WC+[\/:])*)/.source.replace("WC",Yl),yf=/(WCOD+)?/.source.replace("WCOD",xf),vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),bf=new RegExp("^"+_f+yf+vf+Mf+"$"),Sf=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let i=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gf,"")}static parseTrackName(t){let e=bf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Sf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===h){h=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[i];if(a===void 0){let h=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Tl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z0=new Float32Array(1);var Ql=class Ql{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Ql.prototype.isMatrix2=!0;var wl=Ql;function Zl(s,t,e,n){let i=Tf(n);switch(e){case Vl:return s*t;case Hl:return s*t/i.components*i.byteLength;case ka:return s*t/i.components*i.byteLength;case _i:return s*t*2/i.components*i.byteLength;case Va:return s*t*2/i.components*i.byteLength;case Gl:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case Ga:return s*t*4/i.components*i.byteLength;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:case qa:return Math.max(s,16)*Math.max(t,8)/4;case Ha:case Xa:return Math.max(s,8)*Math.max(t,8)/2;case Ya:case Za:case $a:case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ja:case fr:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case co:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xo:case _o:return Math.ceil(s/4)*Math.ceil(t/4)*8;case dr:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tf(s){switch(s){case Ye:case Ol:return{byteLength:1,components:1};case ps:case Bl:case Cn:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case fn:case Oa:case dn:return{byteLength:4,components:1};case zl:case kl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function gu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function If(s){let t=new WeakMap;function e(o,l){let h=o.array,f=o.usage,d=h.byteLength,c=s.createBuffer();s.bindBuffer(l,c),s.bufferData(l,h,f),o.onUploadCallback();let u;if(h instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=s.SHORT;else if(h instanceof Uint32Array)u=s.UNSIGNED_INT;else if(h instanceof Int32Array)u=s.INT;else if(h instanceof Int8Array)u=s.BYTE;else if(h instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,h){let f=l.array,d=l.updateRanges;if(s.bindBuffer(h,o),d.length===0)s.bufferSubData(h,0,f);else{d.sort((u,p)=>u.start-p.start);let c=0;for(let u=1;u<d.length;u++){let p=d[c],y=d[u];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++c,d[c]=y)}d.length=c+1;for(let u=0,p=d.length;u<p;u++){let y=d[u];s.bufferSubData(h,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:i,remove:r,update:a}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,td=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:Nf,alphatest_fragment:Uf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Gf,bsdfs:Hf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:$f,color_pars_fragment:Kf,color_pars_vertex:jf,color_vertex:Qf,common:td,cube_uv_reflection_fragment:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Sd,envmap_vertex:dd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:xd,gradientmap_pars_fragment:_d,lightmap_pars_fragment:yd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:bd,lights_toon_fragment:Td,lights_toon_pars_fragment:wd,lights_phong_fragment:Ad,lights_phong_pars_fragment:Ed,lights_physical_fragment:Cd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Id,lights_fragment_maps:Pd,lights_fragment_end:Ld,lightprobes_pars_fragment:Dd,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:kd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:$d,normal_pars_fragment:Kd,normal_pars_vertex:jd,normal_vertex:Qd,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:_p,skinning_vertex:yp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Tp,transmission_fragment:wp,transmission_pars_fragment:Ap,uv_pars_fragment:Ep,uv_pars_vertex:Cp,uv_vertex:Rp,worldpos_vertex:Ip,background_vert:Pp,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distance_vert:zp,distance_frag:kp,equirect_vert:Vp,equirect_frag:Gp,linedashed_vert:Hp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:$p,meshnormal_vert:Kp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},ft={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},In={basic:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new zt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:ze([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:ze([ft.lights,ft.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};In.physical={uniforms:ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var So={r:0,b:0,g:0},um=new le,xu=new Ft;xu.set(-1,0,0,0,1,0,0,0,1);function fm(s,t,e,n,i,r){let a=new zt(0),o=i===!0?0:1,l,h,f=null,d=0,c=null;function u(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let M=b.backgroundBlurriness>0;E=t.get(E,M)}return E}function p(b){let E=!1,M=u(b);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,E){let M=u(E);M&&(M.isCubeTexture||M.mapping===ar)?(h===void 0&&(h=new Te(new hi(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Ui(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(xu),h.material.toneMapped=Wt.getTransfer(M.colorSpace)!==Jt,(f!==M||d!==M.version||c!==s.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,c=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Te(new qn(2,2),new He({name:"BackgroundMaterial",uniforms:Ui(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(M.colorSpace)!==Jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||c!==s.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,c=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,E){b.getRGB(So,Xl(s)),e.buffers.color.setClear(So.r,So.g,So.b,E,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:y,dispose:m}}function dm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null),r=i,a=!1;function o(I,D,q,X,B){let Y=!1,W=d(I,X,q,D);r!==W&&(r=W,h(r.object)),Y=u(I,X,q,B),Y&&p(I,X,q,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(I,D,q,X),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function h(I){return s.bindVertexArray(I)}function f(I){return s.deleteVertexArray(I)}function d(I,D,q,X){let B=X.wireframe===!0,Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);let W=I.isInstancedMesh===!0?I.id:0,Q=Y[W];Q===void 0&&(Q={},Y[W]=Q);let F=Q[q.id];F===void 0&&(F={},Q[q.id]=F);let Z=F[B];return Z===void 0&&(Z=c(l()),F[B]=Z),Z}function c(I){let D=[],q=[],X=[];for(let B=0;B<e;B++)D[B]=0,q[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:X,object:I,attributes:{},index:null}}function u(I,D,q,X){let B=r.attributes,Y=D.attributes,W=0,Q=q.getAttributes();for(let F in Q)if(Q[F].location>=0){let et=B[F],rt=Y[F];if(rt===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),et===void 0||et.attribute!==rt||rt&&et.data!==rt.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function p(I,D,q,X){let B={},Y=D.attributes,W=0,Q=q.getAttributes();for(let F in Q)if(Q[F].location>=0){let et=Y[F];et===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let rt={};rt.attribute=et,et&&et.data&&(rt.data=et.data),B[F]=rt,W++}r.attributes=B,r.attributesNum=W,r.index=X}function y(){let I=r.newAttributes;for(let D=0,q=I.length;D<q;D++)I[D]=0}function g(I){m(I,0)}function m(I,D){let q=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;q[I]=1,X[I]===0&&(s.enableVertexAttribArray(I),X[I]=1),B[I]!==D&&(s.vertexAttribDivisor(I,D),B[I]=D)}function b(){let I=r.newAttributes,D=r.enabledAttributes;for(let q=0,X=D.length;q<X;q++)D[q]!==I[q]&&(s.disableVertexAttribArray(q),D[q]=0)}function E(I,D,q,X,B,Y,W){W===!0?s.vertexAttribIPointer(I,D,q,B,Y):s.vertexAttribPointer(I,D,q,X,B,Y)}function M(I,D,q,X){y();let B=X.attributes,Y=q.getAttributes(),W=D.defaultAttributeValues;for(let Q in Y){let F=Y[Q];if(F.location>=0){let Z=B[Q];if(Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let et=Z.normalized,rt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;let kt=Et.buffer,Nt=Et.type,H=Et.bytesPerElement,it=Nt===s.INT||Nt===s.UNSIGNED_INT||Z.gpuType===Oa;if(Z.isInterleavedBufferAttribute){let nt=Z.data,Lt=nt.stride,Ut=Z.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<F.locationSize;Rt++)m(F.location+Rt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<F.locationSize;Rt++)g(F.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Rt=0;Rt<F.locationSize;Rt++)E(F.location+Rt,rt/F.locationSize,Nt,et,Lt*H,(Ut+rt/F.locationSize*Rt)*H,it)}else{if(Z.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)m(F.location+nt,Z.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<F.locationSize;nt++)g(F.location+nt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let nt=0;nt<F.locationSize;nt++)E(F.location+nt,rt/F.locationSize,Nt,et,rt*H,rt/F.locationSize*nt*H,it)}}else if(W!==void 0){let et=W[Q];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(F.location,et);break;case 3:s.vertexAttrib3fv(F.location,et);break;case 4:s.vertexAttrib4fv(F.location,et);break;default:s.vertexAttrib1fv(F.location,et)}}}}b()}function A(){S();for(let I in n){let D=n[I];for(let q in D){let X=D[q];for(let B in X){let Y=X[B];for(let W in Y)f(Y[W].object),delete Y[W];delete X[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let q in D){let X=D[q];for(let B in X){let Y=X[B];for(let W in Y)f(Y[W].object),delete Y[W];delete X[B]}}delete n[I.id]}function C(I){for(let D in n){let q=n[D];for(let X in q){let B=q[X];if(B[I.id]===void 0)continue;let Y=B[I.id];for(let W in Y)f(Y[W].object),delete Y[W];delete B[I.id]}}}function _(I){for(let D in n){let q=n[D],X=I.isInstancedMesh===!0?I.id:0,B=q[X];if(B!==void 0){for(let Y in B){let W=B[Y];for(let Q in W)f(W[Q].object),delete W[Q];delete B[Y]}delete q[X],Object.keys(q).length===0&&delete n[D]}}}function S(){R(),a=!0,r!==i&&(r=i,h(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function pm(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(s.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let c=0;for(let u=0;u<f;u++)c+=h[u];e.update(c,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==en&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ye&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!_)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",f=l(h);f!==h&&(Ct("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let d=e.logarithmicDepthBuffer===!0,c=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&c===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:u,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,maxSamples:A,samples:T}}function gm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new yn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let u=d.length!==0||c||n!==0||i;return i=c,n=d.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,c){e=f(d,c,0)},this.setState=function(d,c,u){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?f(null):h();else{let b=r?0:n,E=b*4,M=m.clippingState||null;l.value=M,M=f(p,c,E,u);for(let A=0;A!==E;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,c,u,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=u+y*4,b=c.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=u;E!==y;++E,M+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var yi=4,Zh=[.125,.215,.35,.446,.526,.582],Fi=20,xm=256,pr=new pi,Jh=new zt,tc=null,ec=0,nc=0,ic=!1,_m=new L,wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=_m}=r;tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Cn,format:en,colorSpace:Ds,depthBuffer:!1},i=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Mm(r,t,e),this._ggxMaterial=vm(r,t,e)}return i}_compileMaterial(t){let e=new Te(new he,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,i,r){let l=new Be(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,u=d.toneMapping;d.getClearColor(Jh),d.toneMapping=un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new hi,new Hn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(Jh),m=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[E],r.y,r.z)):M===1?(l.up.set(0,0,h[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[E],r.z)):(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[E]));let A=this._cubeSize;gs(i,M*A,E>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(y,l),d.render(t,l)}d.toneMapping=u,d.autoClear=c,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===mi||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,h=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-f*f),c=0+h*1.25,u=d*c,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-yi?n-p+yi:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=p-e,gs(r,g,m,3*y,2*y),i.setRenderTarget(r),i.render(o,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,gs(t,g,m,3*y,2*y),i.setRenderTarget(t),i.render(o,pr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let f=3,d=this._lodMeshes[i];d.material=h;let c=h.uniforms,u=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Fi-1),y=r/p,g=isFinite(r)?1+Math.floor(f*y):Fi;g>Fi&&Ct(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);let m=[],b=0;for(let C=0;C<Fi;++C){let _=C/y,S=Math.exp(-_*_/2);m.push(S),C===0?b+=S:C<g&&(b+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;c.envMap.value=t.texture,c.samples.value=g,c.weights.value=m,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);let{_lodMax:E}=this;c.dTheta.value=p,c.mipInt.value=E-n;let M=this._sizeLods[i],A=3*M*(i>E-yi?i-E+yi:0),T=4*(this._cubeSize-M);gs(e,A,T,3*M,2*M),l.setRenderTarget(e),l.render(d,pr)}};function ym(s){let t=[],e=[],n=[],i=s,r=s-yi+1+Zh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-yi?l=Zh[a-s+yi-1]:a===0&&(l=0),e.push(l);let h=1/(o-2),f=-h,d=1+h,c=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,p=6,y=3,g=2,m=1,b=new Float32Array(y*p*u),E=new Float32Array(g*p*u),M=new Float32Array(m*p*u);for(let T=0;T<u;T++){let C=T%3*2/3-1,_=T>2?0:-1,S=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];b.set(S,y*p*T),E.set(c,g*p*T);let R=[T,T,T,T,T,T];M.set(R,m*p*T)}let A=new he;A.setAttribute("position",new ye(b,y)),A.setAttribute("uv",new ye(E,g)),A.setAttribute("faceIndex",new ye(M,m)),n.push(new Te(A,null)),i>yi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function $h(s,t,e){let n=new Ke(s,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function vm(s,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Mm(s,t,e){let n=new Float32Array(Fi),i=new L(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Kh(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function jh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ys(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hi(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:En});r.uniforms.tEquirect.value=e;let a=new Te(i,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Ne),new Ia(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function bm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(c,u=!1){return c==null?null:u?a(c):r(c)}function r(c){if(c&&c.isTexture){let u=c.mapping;if(u===Na||u===Ua)if(t.has(c)){let p=t.get(c).texture;return o(p,c.mapping)}else{let p=c.image;if(p&&p.height>0){let y=new Ao(p.height);return y.fromEquirectangularTexture(s,c),t.set(c,y),c.addEventListener("dispose",h),o(y.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let u=c.mapping,p=u===Na||u===Ua,y=u===mi||u===Ni;if(p||y){let g=e.get(c),m=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return n===null&&(n=new wo(s)),g=p?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{let b=c.image;return p&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new wo(s)),g=p?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",f),g.texture):null}}}return c}function o(c,u){return u===Na?c.mapping=mi:u===Ua&&(c.mapping=Ni),c}function l(c){let u=0,p=6;for(let y=0;y<p;y++)c[y]!==void 0&&u++;return u===p}function h(c){let u=c.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(c){let u=c.target;u.removeEventListener("dispose",f);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Sm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ei("WebGLRenderer: "+n+" extension not supported."),i}}}function Tm(s,t,e,n){let i={},r=new WeakMap;function a(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let p in c.attributes)t.remove(c.attributes[p]);c.removeEventListener("dispose",a),delete i[c.id];let u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(d,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,e.memory.geometries++),c}function l(d){let c=d.attributes;for(let u in c)t.update(c[u],s.ARRAY_BUFFER)}function h(d){let c=[],u=d.index,p=d.attributes.position,y=0;if(p===void 0)return;if(u!==null){let b=u.array;y=u.version;for(let E=0,M=b.length;E<M;E+=3){let A=b[E+0],T=b[E+1],C=b[E+2];c.push(A,T,T,C,C,A)}}else{let b=p.array;y=p.version;for(let E=0,M=b.length/3-1;E<M;E+=3){let A=E+0,T=E+1,C=E+2;c.push(A,T,T,C,C,A)}}let g=new(p.count>=65535?Hs:Gs)(c,1);g.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function f(d){let c=r.get(d);if(c){let u=d.index;u!==null&&c.version<u.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function wm(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,c){s.drawElements(n,c,r,d*a),e.update(c,n,1)}function h(d,c,u){u!==0&&(s.drawElementsInstanced(n,c,r,d*a,u),e.update(c,n,u))}function f(d,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,d,0,u);let y=0;for(let g=0;g<u;g++)y+=c[g];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=f}function Am(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Em(s,t,e){let n=new WeakMap,i=new ce;function r(a,o,l){let h=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,c=n.get(o);if(c===void 0||c.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};c!==void 0&&c.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;u===!0&&(E=1),p===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*d),C=new Bs(T,M,A,d);C.type=dn,C.needsUpdate=!0;let _=E*4;for(let R=0;R<d;R++){let I=g[R],D=m[R],q=b[R],X=M*A*4*R;for(let B=0;B<I.count;B++){let Y=B*_;u===!0&&(i.fromBufferAttribute(I,B),T[X+Y+0]=i.x,T[X+Y+1]=i.y,T[X+Y+2]=i.z,T[X+Y+3]=0),p===!0&&(i.fromBufferAttribute(D,B),T[X+Y+4]=i.x,T[X+Y+5]=i.y,T[X+Y+6]=i.z,T[X+Y+7]=0),y===!0&&(i.fromBufferAttribute(q,B),T[X+Y+8]=i.x,T[X+Y+9]=i.y,T[X+Y+10]=i.z,T[X+Y+11]=q.itemSize===4?i.w:1)}}c={count:d,texture:C,size:new Dt(M,A)},n.set(o,c),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let y=0;y<h.length;y++)u+=h[y];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",c.size)}return{update:r}}function Cm(s,t,e,n,i){let r=new WeakMap;function a(h){let f=i.render.frame,d=h.geometry,c=t.get(h,d);if(r.get(c)!==f&&(t.update(c),r.set(c,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==f&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,f))),h.isSkinnedMesh){let u=h.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return c}function o(){r=new WeakMap}function l(h){let f=h.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}var Rm={[Il]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Ul]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function Im(s,t,e,n,i,r){let a=new Ke(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new Xn(t,e):void 0}),o=new Ke(t,e,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new he;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));let h=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Te(l,h),d=new pi(-1,1,1,-1,0,1),c=null,u=null,p=!1,y,g=null,m=[],b=!1;this.setSize=function(E,M){a.setSize(E,M),o.setSize(E,M);for(let A=0;A<m.length;A++){let T=m[A];T.setSize&&T.setSize(E,M)}},this.setEffects=function(E){m=E,b=m.length>0&&m[0].isRenderPass===!0;let M=a.width,A=a.height;for(let T=0;T<m.length;T++){let C=m[T];C.setSize&&C.setSize(M,A)}},this.begin=function(E,M){if(p||E.toneMapping===un&&m.length===0)return!1;if(g=M,M!==null){let A=M.width,T=M.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return b===!1&&E.setRenderTarget(a),y=E.toneMapping,E.toneMapping=un,!0},this.hasRenderPass=function(){return b},this.end=function(E,M){E.toneMapping=y,p=!0;let A=a,T=o;for(let C=0;C<m.length;C++){let _=m[C];if(_.enabled!==!1&&(_.render(E,T,A,M),_.needsSwap!==!1)){let S=A;A=T,T=S}}if(c!==E.outputColorSpace||u!==E.toneMapping){c=E.outputColorSpace,u=E.toneMapping,h.defines={},Wt.getTransfer(c)===Jt&&(h.defines.SRGB_TRANSFER="");let C=Rm[u];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(g),E.render(f,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),h.dispose()}}var _u=new Ge,ac=new Xn(1,1),yu=new Bs,vu=new ha,Mu=new Ys,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function _s(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Qh[i];if(r===void 0&&(r=new Float32Array(i),Qh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ro(s,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Dm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Um(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;iu.set(n),s.uniformMatrix2fv(this.addr,!1,iu),Re(e,n)}}function Fm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;nu.set(n),s.uniformMatrix3fv(this.addr,!1,nu),Re(e,n)}}function Om(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;eu.set(n),s.uniformMatrix4fv(this.addr,!1,eu),Re(e,n)}}function Bm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Gm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Wm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Xm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function qm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ac.compareFunction=e.isReversedDepthBuffer()?bo:Mo,r=ac):r=_u,e.setTexture2D(t||r,i)}function Ym(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vu,i)}function Zm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mu,i)}function Jm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yu,i)}function $m(s){switch(s){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Nm;case 35674:return Um;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Hm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function Km(s,t){s.uniform1fv(this.addr,t)}function jm(s,t){let e=_s(t,this.size,2);s.uniform2fv(this.addr,e)}function Qm(s,t){let e=_s(t,this.size,3);s.uniform3fv(this.addr,e)}function tg(s,t){let e=_s(t,this.size,4);s.uniform4fv(this.addr,e)}function eg(s,t){let e=_s(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ng(s,t){let e=_s(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ig(s,t){let e=_s(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sg(s,t){s.uniform1iv(this.addr,t)}function rg(s,t){s.uniform2iv(this.addr,t)}function ag(s,t){s.uniform3iv(this.addr,t)}function og(s,t){s.uniform4iv(this.addr,t)}function lg(s,t){s.uniform1uiv(this.addr,t)}function cg(s,t){s.uniform2uiv(this.addr,t)}function hg(s,t){s.uniform3uiv(this.addr,t)}function ug(s,t){s.uniform4uiv(this.addr,t)}function fg(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ac:a=_u;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function dg(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||vu,r[a])}function pg(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Mu,r[a])}function mg(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||yu,r[a])}function gg(s){switch(s){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}},lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}},cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},sc=/(\w+)(\])?(\[|\.)?/g;function su(s,t){s.seq.push(t),s.map[t.id]=t}function xg(s,t,e){let n=s.name,i=n.length;for(sc.lastIndex=0;;){let r=sc.exec(n),a=sc.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===i){su(e,h===void 0?new oc(o,s,t):new lc(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new cc(o),su(e,d)),e=d}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xg(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function ru(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var _g=37297,yg=0;function vg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var au=new Ft;function Mg(s){Wt._getMatrix(au,Wt.workingColorSpace,s);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Ns:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ou(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vg(s.getShaderSource(t),o)}else return r}function bg(s,t){let e=Mg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sg={[Il]:"Linear",[Pl]:"Reinhard",[Ll]:"Cineon",[rr]:"ACESFilmic",[Nl]:"AgX",[Ul]:"Neutral",[Dl]:"Custom"};function Tg(s,t){let e=Sg[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var To=new L;function wg(){Wt.getLuminanceCoefficients(To);let s=To.x.toFixed(4),t=To.y.toFixed(4),e=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Eg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function gr(s){return s!==""}function lu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(Rg,Pg)}var Ig=new Map;function Pg(s,t){let e=Vt[t];if(e===void 0){let n=Ig.get(t);if(n!==void 0)e=Vt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hc(e)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(s){return s.replace(Lg,Dg)}function Dg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ng={[sr]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Ug(s){return Ng[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fg={[mi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function Og(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Fg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bg={[Ni]:"ENVMAP_MODE_REFRACTION"};function zg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Bg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kg={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function Vg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kg[s.combine]||"ENVMAP_BLENDING_NONE"}function Gg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ug(e),h=Og(e),f=zg(e),d=Vg(e),c=Gg(e),u=Ag(e),p=Eg(r),y=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Vt.tonemapping_pars_fragment:"",e.toneMapping!==un?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),a=hc(a),a=lu(a,e),a=cu(a,e),o=hc(o),o=lu(o,e),o=cu(o,e),a=hu(a),o=hu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=b+g+a,M=b+m+o,A=ru(i,i.VERTEX_SHADER,E),T=ru(i,i.FRAGMENT_SHADER,M);i.attachShader(y,A),i.attachShader(y,T),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(y)||"",q=i.getShaderInfoLog(A)||"",X=i.getShaderInfoLog(T)||"",B=D.trim(),Y=q.trim(),W=X.trim(),Q=!0,F=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,A,T);else{let Z=ou(i,A,"vertex"),et=ou(i,T,"fragment");Pt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Z+`
`+et)}else B!==""?Ct("WebGLProgram: Program Info Log:",B):(Y===""||W==="")&&(F=!1);F&&(I.diagnostics={runnable:Q,programLog:B,vertexShader:{log:Y,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(A),i.deleteShader(T),_=new xs(i,y),S=Cg(i,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(y,_g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=T,this}var Wg=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fc(t),e.set(t,n)),n}},fc=class{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}};function Xg(s){return s===_i||s===fr||s===dr}function qg(s,t,e,n,i,r){let a=new zs,o=new uc,l=new Set,h=[],f=new Map,d=n.logarithmicDepthBuffer,c=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,S,R,I,D,q){let X=I.fog,B=D.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=t.get(_.envMap||Y,W),F=Q&&Q.mapping===ar?Q.image.height:null,Z=u[_.type];_.precision!==null&&(c=n.getMaxPrecision(_.precision),c!==_.precision&&Ct("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));let et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=et!==void 0?et.length:0,Et=0;B.morphAttributes.position!==void 0&&(Et=1),B.morphAttributes.normal!==void 0&&(Et=2),B.morphAttributes.color!==void 0&&(Et=3);let kt,Nt,H,it;if(Z){let _t=In[Z];kt=_t.vertexShader,Nt=_t.fragmentShader}else{kt=_.vertexShader,Nt=_.fragmentShader;let _t=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,_t,fe),H=_t.id,it=fe.id}let nt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,me=!!_.map,Ht=!!_.matcap,te=!!Q,Zt=!!_.aoMap,qt=!!_.lightMap,ve=!!_.bumpMap&&_.wireframe===!1,Ae=!!_.normalMap,Ie=!!_.displacementMap,De=!!_.emissiveMap,ue=!!_.metalnessMap,Me=!!_.roughnessMap,N=_.anisotropy>0,Xe=_.clearcoat>0,Kt=_.dispersion>0,w=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,V=N&&!!_.anisotropyMap,J=Xe&&!!_.clearcoatMap,st=Xe&&!!_.clearcoatNormalMap,ot=Xe&&!!_.clearcoatRoughnessMap,$=w&&!!_.iridescenceMap,j=w&&!!_.iridescenceThicknessMap,lt=x&&!!_.sheenColorMap,Mt=x&&!!_.sheenRoughnessMap,ut=!!_.specularMap,ct=!!_.specularColorMap,wt=!!_.specularIntensityMap,It=O&&!!_.transmissionMap,Ot=O&&!!_.thicknessMap,P=!!_.gradientMap,at=!!_.alphaMap,K=_.alphaTest>0,ht=!!_.alphaHash,mt=!!_.extensions,tt=un;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(tt=s.toneMapping);let vt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:Nt,defines:_.defines,customVertexShaderID:H,customFragmentShaderID:it,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:me,matcap:Ht,envMap:te,envMapMode:te&&Q.mapping,envMapCubeUVHeight:F,aoMap:Zt,lightMap:qt,bumpMap:ve,normalMap:Ae,displacementMap:Ie,emissiveMap:De,normalMapObjectSpace:Ae&&_.normalMapType===Dh,normalMapTangentSpace:Ae&&_.normalMapType===vo,packedNormalMap:Ae&&_.normalMapType===vo&&Xg(_.normalMap.format),metalnessMap:ue,roughnessMap:Me,anisotropy:N,anisotropyMap:V,clearcoat:Xe,clearcoatMap:J,clearcoatNormalMap:st,clearcoatRoughnessMap:ot,dispersion:Kt,iridescence:w,iridescenceMap:$,iridescenceThicknessMap:j,sheen:x,sheenColorMap:lt,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:ct,specularIntensityMap:wt,transmission:O,transmissionMap:It,thicknessMap:Ot,gradientMap:P,opaque:_.transparent===!1&&_.blending===Ci&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:K,alphaHash:ht,combine:_.combine,mapUv:me&&p(_.map.channel),aoMapUv:Zt&&p(_.aoMap.channel),lightMapUv:qt&&p(_.lightMap.channel),bumpMapUv:ve&&p(_.bumpMap.channel),normalMapUv:Ae&&p(_.normalMap.channel),displacementMapUv:Ie&&p(_.displacementMap.channel),emissiveMapUv:De&&p(_.emissiveMap.channel),metalnessMapUv:ue&&p(_.metalnessMap.channel),roughnessMapUv:Me&&p(_.roughnessMap.channel),anisotropyMapUv:V&&p(_.anisotropyMap.channel),clearcoatMapUv:J&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(_.sheenRoughnessMap.channel),specularMapUv:ut&&p(_.specularMap.channel),specularColorMapUv:ct&&p(_.specularColorMap.channel),specularIntensityMapUv:wt&&p(_.specularIntensityMap.channel),transmissionMapUv:It&&p(_.transmissionMap.channel),thicknessMapUv:Ot&&p(_.thicknessMap.channel),alphaMapUv:at&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ae||N),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(me||at),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Lt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Et,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,decodeVideoTexture:me&&_.map.isVideoTexture===!0&&Wt.getTransfer(_.map.colorSpace)===Jt,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(_.emissiveMap.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),b(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function b(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let S=u[_.type],R;if(S){let I=In[S];R=qh.clone(I.uniforms)}else R=_.uniforms;return R}function M(_,S){let R=f.get(S);return R!==void 0?++R.usedTimes:(R=new Hg(s,S,_,i),h.push(R),f.set(S,R)),R}function A(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:E,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Yg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function fu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function du(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(c){let u=0;return c.isInstancedMesh&&(u+=2),c.isSkinnedMesh&&(u+=1),u}function o(c,u,p,y,g,m){let b=s[t];return b===void 0?(b={id:c.id,object:c,geometry:u,material:p,materialVariant:a(c),groupOrder:y,renderOrder:c.renderOrder,z:g,group:m},s[t]=b):(b.id=c.id,b.object=c,b.geometry=u,b.material=p,b.materialVariant=a(c),b.groupOrder=y,b.renderOrder=c.renderOrder,b.z=g,b.group=m),t++,b}function l(c,u,p,y,g,m){let b=o(c,u,p,y,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function h(c,u,p,y,g,m){let b=o(c,u,p,y,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function f(c,u,p){e.length>1&&e.sort(c||Zg),n.length>1&&n.sort(u||fu),i.length>1&&i.sort(u||fu),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let c=t,u=s.length;c<u;c++){let p=s[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:h,finish:d,sort:f}}function Jg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new du,s.set(n,[a])):i>=r.length?(a=new du,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function $g(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Kg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var jg=0;function Qg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function t0(s){let t=new $g,e=Kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);let i=new L,r=new le,a=new le;function o(h){let f=0,d=0,c=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,p=0,y=0,g=0,m=0,b=0,E=0,M=0,A=0,T=0,C=0;h.sort(Qg);for(let S=0,R=h.length;S<R;S++){let I=h[S],D=I.color,q=I.intensity,X=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_i?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=D.r*q,d+=D.g*q,c+=D.b*q;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],q);C++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,Q=e.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.directionalShadow[u]=Q,n.directionalShadowMap[u]=B,n.directionalShadowMatrix[u]=I.shadow.matrix,b++}n.directional[u]=Y,u++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(D).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[y]=Y;let W=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,W.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[y]=W.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=B,M++}y++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(D).multiplyScalar(q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Y,g++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let W=I.shadow,Q=e.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=Y,p++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(q),Y.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[m]=Y,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=c;let _=n.hash;(_.directionalLength!==u||_.pointLength!==p||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==b||_.numPointShadows!==E||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,_.directionalLength=u,_.pointLength=p,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=b,_.numPointShadows=E,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=C,n.version=jg++)}function l(h,f){let d=0,c=0,u=0,p=0,y=0,g=f.matrixWorldInverse;for(let m=0,b=h.length;m<b;m++){let E=h[m];if(E.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(E.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(E.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){let M=n.point[c];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),c++}else if(E.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:n}}function pu(s){let t=new t0(s),e=[],n=[],i=[];function r(c){d.camera=c,e.length=0,n.length=0,i.length=0}function a(c){e.push(c)}function o(c){n.push(c)}function l(c){i.push(c)}function h(){t.setup(e)}function f(c){t.setupView(e,c)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function e0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new pu(s),t.set(i,[o])):r>=a.length?(o=new pu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],r0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],mu=new le,mr=new L,rc=new L;function a0(s,t,e){let n=new cs,i=new Dt,r=new Dt,a=new ce,o=new _a,l=new ya,h={},f=e.maxTextureSize,d={[Vn]:We,[We]:Vn,[qe]:qe},c=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),u=c.clone();u.defines.HORIZONTAL_PASS=1;let p=new he;p.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Te(p,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(T,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Da&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sr);let S=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(En),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let q=m!==this.type;q&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=T.length;X<B;X++){let Y=T[X],W=Y.shadow;if(W===void 0){Ct("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let Q=W.getFrameExtents();i.multiply(Q),r.copy(W.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/Q.x),i.x=r.x*Q.x,W.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/Q.y),i.y=r.y*Q.y,W.mapSize.y=r.y));let F=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=F,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ds){if(Y.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ke(i.x,i.y,{format:_i,type:Cn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Xn(i.x,i.y,dn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=bn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Le,W.map.depthTexture.magFilter=Le}else Y.isPointLight?(W.map=new Ao(i.x),W.map.depthTexture=new ma(i.x,fn)):(W.map=new Ke(i.x,i.y),W.map.depthTexture=new Xn(i.x,i.y,fn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=bn,this.type===sr?(W.map.depthTexture.compareFunction=F?bo:Mo,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Le,W.map.depthTexture.magFilter=Le);W.camera.updateProjectionMatrix()}let Z=W.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<Z;et++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,et),s.clear();else{et===0&&(s.setRenderTarget(W.map),s.clear());let rt=W.getViewport(et);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),D.viewport(a)}if(Y.isPointLight){let rt=W.camera,Et=W.matrix,kt=Y.distance||rt.far;kt!==rt.far&&(rt.far=kt,rt.updateProjectionMatrix()),mr.setFromMatrixPosition(Y.matrixWorld),rt.position.copy(mr),rc.copy(rt.position),rc.add(s0[et]),rt.up.copy(r0[et]),rt.lookAt(rc),rt.updateMatrixWorld(),Et.makeTranslation(-mr.x,-mr.y,-mr.z),mu.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mu,rt.coordinateSystem,rt.reversedDepth)}else W.updateMatrices(Y);n=W.getFrustum(),M(C,_,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ds&&b(W,_),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,R,I)};function b(T,C){let _=t.update(y);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ke(i.x,i.y,{format:_i,type:Cn})),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value=T.mapSize,c.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,_,c,y,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,_,u,y,null)}function E(T,C,_,S){let R=null,I=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=R.uuid,q=C.uuid,X=h[D];X===void 0&&(X={},h[D]=X);let B=X[q];B===void 0&&(B=R.clone(),X[q]=B,C.addEventListener("dispose",A)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,S===ds?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=_}return R}function M(T,C,_,S,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ds)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let q=t.update(T),X=T.material;if(Array.isArray(X)){let B=q.groups;for(let Y=0,W=B.length;Y<W;Y++){let Q=B[Y],F=X[Q.materialIndex];if(F&&F.visible){let Z=E(T,F,S,R);T.onBeforeShadow(s,T,C,_,q,Z,Q),s.renderBufferDirect(_,null,q,Z,T,Q),T.onAfterShadow(s,T,C,_,q,Z,Q)}}}else if(X.visible){let B=E(T,X,S,R);T.onBeforeShadow(s,T,C,_,q,B,null),s.renderBufferDirect(_,null,q,B,T,null),T.onAfterShadow(s,T,C,_,q,B,null)}}let D=T.children;for(let q=0,X=D.length;q<X;q++)M(D[q],C,_,S,R)}function A(T){T.target.removeEventListener("dispose",A);for(let _ in h){let S=h[_],R=T.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function o0(s,t){function e(){let P=!1,at=new ce,K=null,ht=new ce(0,0,0,0);return{setMask:function(mt){K!==mt&&!P&&(s.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){P=mt},setClear:function(mt,tt,vt,_t,fe){fe===!0&&(mt*=_t,tt*=_t,vt*=_t),at.set(mt,tt,vt,_t),ht.equals(at)===!1&&(s.clearColor(mt,tt,vt,_t),ht.copy(at))},reset:function(){P=!1,K=null,ht.set(-1,0,0,0)}}}function n(){let P=!1,at=!1,K=null,ht=null,mt=null;return{setReversed:function(tt){if(at!==tt){let vt=t.get("EXT_clip_control");tt?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),at=tt;let _t=mt;mt=null,this.setClear(_t)}},getReversed:function(){return at},setTest:function(tt){tt?nt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(tt){K!==tt&&!P&&(s.depthMask(tt),K=tt)},setFunc:function(tt){if(at&&(tt=Hh[tt]),ht!==tt){switch(tt){case jr:s.depthFunc(s.NEVER);break;case Qr:s.depthFunc(s.ALWAYS);break;case ta:s.depthFunc(s.LESS);break;case Ri:s.depthFunc(s.LEQUAL);break;case ea:s.depthFunc(s.EQUAL);break;case na:s.depthFunc(s.GEQUAL);break;case ia:s.depthFunc(s.GREATER);break;case sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=tt}},setLocked:function(tt){P=tt},setClear:function(tt){mt!==tt&&(mt=tt,at&&(tt=1-tt),s.clearDepth(tt))},reset:function(){P=!1,K=null,ht=null,mt=null,at=!1}}}function i(){let P=!1,at=null,K=null,ht=null,mt=null,tt=null,vt=null,_t=null,fe=null;return{setTest:function(ie){P||(ie?nt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(ie){at!==ie&&!P&&(s.stencilMask(ie),at=ie)},setFunc:function(ie,pn,mn){(K!==ie||ht!==pn||mt!==mn)&&(s.stencilFunc(ie,pn,mn),K=ie,ht=pn,mt=mn)},setOp:function(ie,pn,mn){(tt!==ie||vt!==pn||_t!==mn)&&(s.stencilOp(ie,pn,mn),tt=ie,vt=pn,_t=mn)},setLocked:function(ie){P=ie},setClear:function(ie){fe!==ie&&(s.clearStencil(ie),fe=ie)},reset:function(){P=!1,at=null,K=null,ht=null,mt=null,tt=null,vt=null,_t=null,fe=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,h=new WeakMap,f={},d={},c={},u=new WeakMap,p=[],y=null,g=!1,m=null,b=null,E=null,M=null,A=null,T=null,C=null,_=new zt(0,0,0),S=0,R=!1,I=null,D=null,q=null,X=null,B=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=Q>=2);let Z=null,et={},rt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),kt=new ce().fromArray(rt),Nt=new ce().fromArray(Et);function H(P,at,K,ht){let mt=new Uint8Array(4),tt=s.createTexture();s.bindTexture(P,tt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<K;vt++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(at+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return tt}let it={};it[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),it[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),it[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(Ri),ve(!1),Ae(Al),nt(s.CULL_FACE),Zt(En);function nt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Lt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Ut(P,at){return c[P]!==at?(s.bindFramebuffer(P,at),c[P]=at,P===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=at),P===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Rt(P,at){let K=p,ht=!1;if(P){K=u.get(at),K===void 0&&(K=[],u.set(at,K));let mt=P.textures;if(K.length!==mt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,vt=mt.length;tt<vt;tt++)K[tt]=s.COLOR_ATTACHMENT0+tt;K.length=mt.length,ht=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ht=!0);ht&&s.drawBuffers(K)}function me(P){return y!==P?(s.useProgram(P),y=P,!0):!1}let Ht={[oi]:s.FUNC_ADD,[fh]:s.FUNC_SUBTRACT,[dh]:s.FUNC_REVERSE_SUBTRACT};Ht[ph]=s.MIN,Ht[mh]=s.MAX;let te={[gh]:s.ZERO,[xh]:s.ONE,[_h]:s.SRC_COLOR,[$r]:s.SRC_ALPHA,[Th]:s.SRC_ALPHA_SATURATE,[bh]:s.DST_COLOR,[vh]:s.DST_ALPHA,[yh]:s.ONE_MINUS_SRC_COLOR,[Kr]:s.ONE_MINUS_SRC_ALPHA,[Sh]:s.ONE_MINUS_DST_COLOR,[Mh]:s.ONE_MINUS_DST_ALPHA,[wh]:s.CONSTANT_COLOR,[Ah]:s.ONE_MINUS_CONSTANT_COLOR,[Eh]:s.CONSTANT_ALPHA,[Ch]:s.ONE_MINUS_CONSTANT_ALPHA};function Zt(P,at,K,ht,mt,tt,vt,_t,fe,ie){if(P===En){g===!0&&(Lt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),P!==uh){if(P!==m||ie!==R){if((b!==oi||A!==oi)&&(s.blendEquation(s.FUNC_ADD),b=oi,A=oi),ie)switch(P){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFunc(s.ONE,s.ONE);break;case El:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case El:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",P);break}E=null,M=null,T=null,C=null,_.set(0,0,0),S=0,m=P,R=ie}return}mt=mt||at,tt=tt||K,vt=vt||ht,(at!==b||mt!==A)&&(s.blendEquationSeparate(Ht[at],Ht[mt]),b=at,A=mt),(K!==E||ht!==M||tt!==T||vt!==C)&&(s.blendFuncSeparate(te[K],te[ht],te[tt],te[vt]),E=K,M=ht,T=tt,C=vt),(_t.equals(_)===!1||fe!==S)&&(s.blendColor(_t.r,_t.g,_t.b,fe),_.copy(_t),S=fe),m=P,R=!1}function qt(P,at){P.side===qe?Lt(s.CULL_FACE):nt(s.CULL_FACE);let K=P.side===We;at&&(K=!K),ve(K),P.blending===Ci&&P.transparent===!1?Zt(En):Zt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ht=P.stencilWrite;o.setTest(ht),ht&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(P){I!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),I=P)}function Ae(P){P!==ch?(nt(s.CULL_FACE),P!==D&&(P===Al?s.cullFace(s.BACK):P===hh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),D=P}function Ie(P){P!==q&&(W&&s.lineWidth(P),q=P)}function De(P,at,K){P?(nt(s.POLYGON_OFFSET_FILL),(X!==at||B!==K)&&(X=at,B=K,a.getReversed()&&(at=-at),s.polygonOffset(at,K))):Lt(s.POLYGON_OFFSET_FILL)}function ue(P){P?nt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function Me(P){P===void 0&&(P=s.TEXTURE0+Y-1),Z!==P&&(s.activeTexture(P),Z=P)}function N(P,at,K){K===void 0&&(Z===null?K=s.TEXTURE0+Y-1:K=Z);let ht=et[K];ht===void 0&&(ht={type:void 0,texture:void 0},et[K]=ht),(ht.type!==P||ht.texture!==at)&&(Z!==K&&(s.activeTexture(K),Z=K),s.bindTexture(P,at||it[P]),ht.type=P,ht.texture=at)}function Xe(){let P=et[Z];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function x(){try{s.texSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function O(){try{s.texSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function st(){try{s.texStorage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function ot(){try{s.texStorage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function $(){try{s.texImage2D(...arguments)}catch(P){Pt("WebGLState:",P)}}function j(){try{s.texImage3D(...arguments)}catch(P){Pt("WebGLState:",P)}}function lt(P){return d[P]!==void 0?d[P]:s.getParameter(P)}function Mt(P,at){d[P]!==at&&(s.pixelStorei(P,at),d[P]=at)}function ut(P){kt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),kt.copy(P))}function ct(P){Nt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Nt.copy(P))}function wt(P,at){let K=h.get(at);K===void 0&&(K=new WeakMap,h.set(at,K));let ht=K.get(P);ht===void 0&&(ht=s.getUniformBlockIndex(at,P.name),K.set(P,ht))}function It(P,at){let ht=h.get(at).get(P);l.get(at)!==ht&&(s.uniformBlockBinding(at,ht,P.__bindingPointIndex),l.set(at,ht))}function Ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),f={},d={},Z=null,et={},c={},u=new WeakMap,p=[],y=null,g=!1,m=null,b=null,E=null,M=null,A=null,T=null,C=null,_=new zt(0,0,0),S=0,R=!1,I=null,D=null,q=null,X=null,B=null,kt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Lt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:me,setBlending:Zt,setMaterial:qt,setFlipSided:ve,setCullFace:Ae,setLineWidth:Ie,setPolygonOffset:De,setScissorTest:ue,activeTexture:Me,bindTexture:N,unbindTexture:Xe,compressedTexImage2D:Kt,compressedTexImage3D:w,texImage2D:$,texImage3D:j,pixelStorei:Mt,getParameter:lt,updateUBOMapping:wt,uniformBlockBinding:It,texStorage2D:st,texStorage3D:ot,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:ut,viewport:ct,reset:Ot}}function l0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,f=new WeakMap,d=new Set,c,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,x){return p?new OffscreenCanvas(w,x):Us("canvas")}function g(w,x,O){let V=1,J=Kt(w);if((J.width>O||J.height>O)&&(V=O/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let st=Math.floor(V*J.width),ot=Math.floor(V*J.height);c===void 0&&(c=y(st,ot));let $=x?y(st,ot):c;return $.width=st,$.height=ot,$.getContext("2d").drawImage(w,0,0,st,ot),Ct("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+ot+")."),$}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function b(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,x,O,V,J,st=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;V&&(ot=t.get("EXT_texture_norm16"),ot||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8),O===s.UNSIGNED_SHORT&&ot&&($=ot.R16_EXT),O===s.SHORT&&ot&&($=ot.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),x===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8),O===s.UNSIGNED_SHORT&&ot&&($=ot.RG16_EXT),O===s.SHORT&&ot&&($=ot.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&ot&&($=ot.RGB16_EXT),O===s.SHORT&&ot&&($=ot.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),x===s.RGBA){let j=st?Ns:Wt.getTransfer(J);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=j===Jt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ot&&($=ot.RGBA16_EXT),O===s.SHORT&&ot&&($=ot.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function A(w,x){let O;return w?x===null||x===fn||x===ms?O=s.DEPTH24_STENCIL8:x===dn?O=s.DEPTH32F_STENCIL8:x===ps&&(O=s.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fn||x===ms?O=s.DEPTH_COMPONENT24:x===dn?O=s.DEPTH_COMPONENT32F:x===ps&&(O=s.DEPTH_COMPONENT16),O}function T(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Le&&w.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),S(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&d.delete(x)}function _(w){let x=w.target;x.removeEventListener("dispose",_),I(x)}function S(w){let x=n.get(w);if(x.__webglInit===void 0)return;let O=w.source,V=u.get(O);if(V){let J=V[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(w),Object.keys(V).length===0&&u.delete(O)}n.remove(w)}function R(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let O=w.source,V=u.get(O);delete V[x.__cacheKey],a.memory.textures--}function I(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let J=0;J<x.__webglFramebuffer[V].length;J++)s.deleteFramebuffer(x.__webglFramebuffer[V][J]);else s.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)s.deleteFramebuffer(x.__webglFramebuffer[V]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=w.textures;for(let V=0,J=O.length;V<J;V++){let st=n.get(O[V]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(w)}let D=0;function q(){D=0}function X(){return D}function B(w){D=w}function Y(){let w=D;return w>=i.maxTextures&&Ct("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),D+=1,w}function W(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Q(w,x){let O=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let V=w.image;if(V===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function F(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Lt(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Lt(O,w,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function et(w,x){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Ut(O,w,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}let rt={[ns]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[ra]:s.MIRRORED_REPEAT},Et={[Le]:s.NEAREST,[Ph]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Ne]:s.LINEAR,[Fa]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},kt={[Nh]:s.NEVER,[zh]:s.ALWAYS,[Uh]:s.LESS,[Mo]:s.LEQUAL,[Fh]:s.EQUAL,[bo]:s.GEQUAL,[Oh]:s.GREATER,[Bh]:s.NOTEQUAL};function Nt(w,x){if(x.type===dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===Fa||x.magFilter===or||x.magFilter===gi||x.minFilter===Ne||x.minFilter===Fa||x.minFilter===or||x.minFilter===gi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,rt[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,rt[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,rt[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Et[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Et[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,kt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==or&&x.minFilter!==gi||x.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function H(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let V=x.source,J=u.get(V);J===void 0&&(J={},u.set(V,J));let st=W(x);if(st!==w.__cacheKey){J[st]===void 0&&(J[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[st].usedTimes++;let ot=J[w.__cacheKey];ot!==void 0&&(J[w.__cacheKey].usedTimes--,ot.usedTimes===0&&R(x)),w.__cacheKey=st,w.__webglTexture=J[st].texture}return O}function it(w,x,O){return Math.floor(Math.floor(w/O)/x)}function nt(w,x,O,V){let st=w.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,V,x.data);else{st.sort((Mt,ut)=>Mt.start-ut.start);let ot=0;for(let Mt=1;Mt<st.length;Mt++){let ut=st[ot],ct=st[Mt],wt=ut.start+ut.count,It=it(ct.start,x.width,4),Ot=it(ut.start,x.width,4);ct.start<=wt+1&&It===Ot&&it(ct.start+ct.count-1,x.width,4)===It?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++ot,st[ot]=ct)}st.length=ot+1;let $=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Mt=0,ut=st.length;Mt<ut;Mt++){let ct=st[Mt],wt=Math.floor(ct.start/4),It=Math.ceil(ct.count/4),Ot=wt%x.width,P=Math.floor(wt/x.width),at=It,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,P),e.texSubImage2D(s.TEXTURE_2D,0,Ot,P,at,K,O,V,x.data)}w.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function Lt(w,x,O){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);let J=H(w,x),st=x.source;e.bindTexture(V,w.__webglTexture,s.TEXTURE0+O);let ot=n.get(st);if(st.version!==ot.__version||J===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let K=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===Zn?null:Wt.getPrimaries(x.colorSpace),mt=x.colorSpace===Zn||K===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let j=g(x.image,!1,i.maxTextureSize);j=Xe(x,j);let lt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),ut=M(x.internalFormat,lt,Mt,x.normalized,x.colorSpace,x.isVideoTexture);Nt(V,x);let ct,wt=x.mipmaps,It=x.isVideoTexture!==!0,Ot=ot.__version===void 0||J===!0,P=st.dataReady,at=T(x,j);if(x.isDepthTexture)ut=A(x.format===xi,x.type),Ot&&(It?e.texStorage2D(s.TEXTURE_2D,1,ut,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,ut,j.width,j.height,0,lt,Mt,null));else if(x.isDataTexture)if(wt.length>0){It&&Ot&&e.texStorage2D(s.TEXTURE_2D,at,ut,wt[0].width,wt[0].height);for(let K=0,ht=wt.length;K<ht;K++)ct=wt[K],It?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,Mt,ct.data):e.texImage2D(s.TEXTURE_2D,K,ut,ct.width,ct.height,0,lt,Mt,ct.data);x.generateMipmaps=!1}else It?(Ot&&e.texStorage2D(s.TEXTURE_2D,at,ut,j.width,j.height),P&&nt(x,j,lt,Mt)):e.texImage2D(s.TEXTURE_2D,0,ut,j.width,j.height,0,lt,Mt,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,ut,wt[0].width,wt[0].height,j.depth);for(let K=0,ht=wt.length;K<ht;K++)if(ct=wt[K],x.format!==en)if(lt!==null)if(It){if(P)if(x.layerUpdates.size>0){let mt=Zl(ct.width,ct.height,x.format,x.type);for(let tt of x.layerUpdates){let vt=ct.data.subarray(tt*mt/ct.data.BYTES_PER_ELEMENT,(tt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,tt,ct.width,ct.height,1,lt,vt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,j.depth,lt,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,ut,ct.width,ct.height,j.depth,0,ct.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,j.depth,lt,Mt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,ut,ct.width,ct.height,j.depth,0,lt,Mt,ct.data)}else{It&&Ot&&e.texStorage2D(s.TEXTURE_2D,at,ut,wt[0].width,wt[0].height);for(let K=0,ht=wt.length;K<ht;K++)ct=wt[K],x.format!==en?lt!==null?It?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,K,ut,ct.width,ct.height,0,ct.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ct.width,ct.height,lt,Mt,ct.data):e.texImage2D(s.TEXTURE_2D,K,ut,ct.width,ct.height,0,lt,Mt,ct.data)}else if(x.isDataArrayTexture)if(It){if(Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,ut,j.width,j.height,j.depth),P)if(x.layerUpdates.size>0){let K=Zl(j.width,j.height,x.format,x.type);for(let ht of x.layerUpdates){let mt=j.data.subarray(ht*K/j.data.BYTES_PER_ELEMENT,(ht+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,j.width,j.height,1,lt,Mt,mt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,lt,Mt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,j.width,j.height,j.depth,0,lt,Mt,j.data);else if(x.isData3DTexture)It?(Ot&&e.texStorage3D(s.TEXTURE_3D,at,ut,j.width,j.height,j.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,lt,Mt,j.data)):e.texImage3D(s.TEXTURE_3D,0,ut,j.width,j.height,j.depth,0,lt,Mt,j.data);else if(x.isFramebufferTexture){if(Ot)if(It)e.texStorage2D(s.TEXTURE_2D,at,ut,j.width,j.height);else{let K=j.width,ht=j.height;for(let mt=0;mt<at;mt++)e.texImage2D(s.TEXTURE_2D,mt,ut,K,ht,0,lt,Mt,null),K>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),d.add(x),K.onpaint=ht=>{let mt=ht.changedElements;for(let tt of d)mt.includes(tt.image)&&(tt.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let mt=s.RGBA,tt=s.RGBA,vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,tt,vt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(wt.length>0){if(It&&Ot){let K=Kt(wt[0]);e.texStorage2D(s.TEXTURE_2D,at,ut,K.width,K.height)}for(let K=0,ht=wt.length;K<ht;K++)ct=wt[K],It?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,lt,Mt,ct):e.texImage2D(s.TEXTURE_2D,K,ut,lt,Mt,ct);x.generateMipmaps=!1}else if(It){if(Ot){let K=Kt(j);e.texStorage2D(s.TEXTURE_2D,at,ut,K.width,K.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Mt,j)}else e.texImage2D(s.TEXTURE_2D,0,ut,lt,Mt,j);m(x)&&b(V),ot.__version=st.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ut(w,x,O){if(x.image.length!==6)return;let V=H(w,x),J=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);let st=n.get(J);if(J.version!==st.__version||V===!0){e.activeTexture(s.TEXTURE0+O);let ot=Wt.getPrimaries(Wt.workingColorSpace),$=x.colorSpace===Zn?null:Wt.getPrimaries(x.colorSpace),j=x.colorSpace===Zn||ot===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Mt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!lt&&!Mt?ut[tt]=g(x.image[tt],!0,i.maxCubemapSize):ut[tt]=Mt?x.image[tt].image:x.image[tt],ut[tt]=Xe(x,ut[tt]);let ct=ut[0],wt=r.convert(x.format,x.colorSpace),It=r.convert(x.type),Ot=M(x.internalFormat,wt,It,x.normalized,x.colorSpace),P=x.isVideoTexture!==!0,at=st.__version===void 0||V===!0,K=J.dataReady,ht=T(x,ct);Nt(s.TEXTURE_CUBE_MAP,x);let mt;if(lt){P&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Ot,ct.width,ct.height);for(let tt=0;tt<6;tt++){mt=ut[tt].mipmaps;for(let vt=0;vt<mt.length;vt++){let _t=mt[vt];x.format!==en?wt!==null?P?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,_t.width,_t.height,wt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ot,_t.width,_t.height,0,_t.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,_t.width,_t.height,wt,It,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ot,_t.width,_t.height,0,wt,It,_t.data)}}}else{if(mt=x.mipmaps,P&&at){mt.length>0&&ht++;let tt=Kt(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Ot,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Mt){P?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,wt,It,ut[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,ut[tt].width,ut[tt].height,0,wt,It,ut[tt].data);for(let vt=0;vt<mt.length;vt++){let fe=mt[vt].image[tt].image;P?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,fe.width,fe.height,wt,It,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ot,fe.width,fe.height,0,wt,It,fe.data)}}else{P?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,It,ut[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,wt,It,ut[tt]);for(let vt=0;vt<mt.length;vt++){let _t=mt[vt];P?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,wt,It,_t.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ot,wt,It,_t.image[tt])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),st.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Rt(w,x,O,V,J,st){let ot=r.convert(O.format,O.colorSpace),$=r.convert(O.type),j=M(O.internalFormat,ot,$,O.normalized,O.colorSpace),lt=n.get(x),Mt=n.get(O);if(Mt.__renderTarget=x,!lt.__hasExternalTextures){let ut=Math.max(1,x.width>>st),ct=Math.max(1,x.height>>st);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,st,j,ut,ct,x.depth,0,ot,$,null):e.texImage2D(J,st,j,ut,ct,0,ot,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Me(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,J,Mt.__webglTexture,0,ue(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,J,Mt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function me(w,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let V=x.depthTexture,J=V&&V.isDepthTexture?V.type:null,st=A(x.stencilBuffer,J),ot=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Me(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(x),st,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(x),st,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,w)}else{let V=x.textures;for(let J=0;J<V.length;J++){let st=V[J],ot=r.convert(st.format,st.colorSpace),$=r.convert(st.type),j=M(st.internalFormat,ot,$,st.normalized,st.colorSpace);Me(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue(x),j,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue(x),j,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,j,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(w,x,O){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,x.depthTexture);let lt=r.convert(x.depthTexture.format),Mt=r.convert(x.depthTexture.type),ut;x.depthTexture.format===bn?ut=s.DEPTH_COMPONENT24:x.depthTexture.format===xi&&(ut=s.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,x.width,x.height,0,lt,Mt,null)}}else Q(x.depthTexture,0);let st=J.__webglTexture,ot=ue(x),$=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,j=x.depthTexture.format===xi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===bn)Me(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,st,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,st,0);else if(x.depthTexture.format===xi)Me(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,$,st,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,j,$,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(w){let x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let V=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=V}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Ht(x.__webglFramebuffer[V],w,V);else{let V=w.texture.mipmaps;V&&V.length>0?Ht(x.__webglFramebuffer[0],w,0):Ht(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=s.createRenderbuffer(),me(x.__webglDepthbuffer[V],w,!1);else{let J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}else{let V=w.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),me(x.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(w,x,O){let V=n.get(w);x!==void 0&&Rt(V.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&te(w)}function qt(w){let x=w.texture,O=n.get(w),V=n.get(x);w.addEventListener("dispose",_);let J=w.textures,st=w.isWebGLCubeRenderTarget===!0,ot=J.length>1;if(ot||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<x.mipmaps.length;j++)O.__webglFramebuffer[$][j]=s.createFramebuffer()}else O.__webglFramebuffer[$]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[$]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ot)for(let $=0,j=J.length;$<j;$++){let lt=n.get(J[$]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Me(w)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let j=J[$];O.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let lt=r.convert(j.format,j.colorSpace),Mt=r.convert(j.type),ut=M(j.internalFormat,lt,Mt,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),ct=ue(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,ut,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,O.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),me(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Rt(O.__webglFramebuffer[$][j],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Rt(O.__webglFramebuffer[$],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let $=0,j=J.length;$<j;$++){let lt=J[$],Mt=n.get(lt),ut=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Mt.__webglTexture),Nt(ut,lt),Rt(O.__webglFramebuffer,w,lt,s.COLOR_ATTACHMENT0+$,ut,0),m(lt)&&b(ut)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,V.__webglTexture),Nt($,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Rt(O.__webglFramebuffer[j],w,x,s.COLOR_ATTACHMENT0,$,j);else Rt(O.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,$,0);m(x)&&b($),e.unbindTexture()}w.depthBuffer&&te(w)}function ve(w){let x=w.textures;for(let O=0,V=x.length;O<V;O++){let J=x[O];if(m(J)){let st=E(w),ot=n.get(J).__webglTexture;e.bindTexture(st,ot),b(st),e.unbindTexture()}}}let Ae=[],Ie=[];function De(w){if(w.samples>0){if(Me(w)===!1){let x=w.textures,O=w.width,V=w.height,J=s.COLOR_BUFFER_BIT,st=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=n.get(w),$=x.length>1;if($)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let j=w.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Mt=n.get(x[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,J,s.NEAREST),l===!0&&(Ae.length=0,Ie.length=0,Ae.push(s.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ae.push(st),Ie.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Mt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ue(w){return Math.min(i.maxSamples,w.samples)}function Me(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(w){let x=a.render.frame;f.get(w)!==x&&(f.set(w,x),w.update())}function Xe(w,x){let O=w.colorSpace,V=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ds&&O!==Zn&&(Wt.getTransfer(O)===Jt?(V!==en||J!==Ye)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),x}function Kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function c0(s,t){function e(n,i=Zn){let r,a=Wt.getTransfer(i);if(n===Ye)return s.UNSIGNED_BYTE;if(n===Ba)return s.UNSIGNED_SHORT_4_4_4_4;if(n===za)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ol)return s.BYTE;if(n===Bl)return s.SHORT;if(n===ps)return s.UNSIGNED_SHORT;if(n===Oa)return s.INT;if(n===fn)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===Vl)return s.ALPHA;if(n===Gl)return s.RGB;if(n===en)return s.RGBA;if(n===bn)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===Hl)return s.RED;if(n===ka)return s.RED_INTEGER;if(n===_i)return s.RG;if(n===Va)return s.RG_INTEGER;if(n===Ga)return s.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===fr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return r.COMPRESSED_R11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===co)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===_o||n===dr||n===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pc=class extends Sn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,h=null,f=null,d=null,c=null,u=null,p=null,y=typeof XRWebGLBinding<"u",g=new dc,m={},b=e.getContextAttributes(),E=null,M=null,A=[],T=[],C=new Dt,_=null,S=new Be;S.viewport=new ce;let R=new Be;R.viewport=new ce;let I=[S,R],D=new Pa,q=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let it=A[H];return it===void 0&&(it=new as,A[H]=it),it.getTargetRaySpace()},this.getControllerGrip=function(H){let it=A[H];return it===void 0&&(it=new as,A[H]=it),it.getGripSpace()},this.getHand=function(H){let it=A[H];return it===void 0&&(it=new as,A[H]=it),it.getHandSpace()};function B(H){let it=T.indexOf(H.inputSource);if(it===-1)return;let nt=A[it];nt!==void 0&&(nt.update(H.inputSource,H.frame,h||a),nt.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",W);for(let H=0;H<A.length;H++){let it=T[H];it!==null&&(T[H]=null,A[H].disconnect(it))}q=null,X=null,g.reset();for(let H in m)delete m[H];t.setRenderTarget(E),u=null,c=null,d=null,i=null,M=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Lt=null,Ut=null;b.depth&&(Ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?xi:bn,Lt=b.stencil?ms:fn);let Rt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=this.getBinding(),c=d.createProjectionLayer(Rt),i.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),M=new Ke(c.textureWidth,c.textureHeight,{format:en,type:Ye,depthTexture:new Xn(c.textureWidth,c.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let nt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Ke(u.framebufferWidth,u.framebufferHeight,{format:en,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await i.requestReferenceSpace(o),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(H){for(let it=0;it<H.removed.length;it++){let nt=H.removed[it],Lt=T.indexOf(nt);Lt>=0&&(T[Lt]=null,A[Lt].disconnect(nt))}for(let it=0;it<H.added.length;it++){let nt=H.added[it],Lt=T.indexOf(nt);if(Lt===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=T.length){T.push(nt),Lt=Rt;break}else if(T[Rt]===null){T[Rt]=nt,Lt=Rt;break}if(Lt===-1)break}let Ut=A[Lt];Ut&&Ut.connect(nt)}}let Q=new L,F=new L;function Z(H,it,nt){Q.setFromMatrixPosition(it.matrixWorld),F.setFromMatrixPosition(nt.matrixWorld);let Lt=Q.distanceTo(F),Ut=it.projectionMatrix.elements,Rt=nt.projectionMatrix.elements,me=Ut[14]/(Ut[10]-1),Ht=Ut[14]/(Ut[10]+1),te=(Ut[9]+1)/Ut[5],Zt=(Ut[9]-1)/Ut[5],qt=(Ut[8]-1)/Ut[0],ve=(Rt[8]+1)/Rt[0],Ae=me*qt,Ie=me*ve,De=Lt/(-qt+ve),ue=De*-qt;if(it.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ue),H.translateZ(De),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ut[10]===-1)H.projectionMatrix.copy(it.projectionMatrix),H.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Me=me+De,N=Ht+De,Xe=Ae-ue,Kt=Ie+(Lt-ue),w=te*Ht/N*Me,x=Zt*Ht/N*Me;H.projectionMatrix.makePerspective(Xe,Kt,w,x,Me,N),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function et(H,it){it===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(it.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let it=H.near,nt=H.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),D.near=R.near=S.near=it,D.far=R.far=S.far=nt,(q!==D.near||X!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),q=D.near,X=D.far),D.layers.mask=H.layers.mask|6,S.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let Lt=H.parent,Ut=D.cameras;et(D,Lt);for(let Rt=0;Rt<Ut.length;Rt++)et(Ut[Rt],Lt);Ut.length===2?Z(D,S,R):D.projectionMatrix.copy(S.projectionMatrix),rt(H,D,Lt)};function rt(H,it,nt){nt===null?H.matrix.copy(it.matrixWorld):(H.matrix.copy(nt.matrixWorld),H.matrix.invert(),H.matrix.multiply(it.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(it.projectionMatrix),H.projectionMatrixInverse.copy(it.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function(H){l=H,c!==null&&(c.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(H){return m[H]};let Et=null;function kt(H,it){if(f=it.getViewerPose(h||a),p=it,f!==null){let nt=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Lt=!1;nt.length!==D.cameras.length&&(D.cameras.length=0,Lt=!0);for(let Ht=0;Ht<nt.length;Ht++){let te=nt[Ht],Zt=null;if(u!==null)Zt=u.getViewport(te);else{let ve=d.getViewSubImage(c,te);Zt=ve.viewport,Ht===0&&(t.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(M))}let qt=I[Ht];qt===void 0&&(qt=new Be,qt.layers.enable(Ht),qt.viewport=new ce,I[Ht]=qt),qt.matrix.fromArray(te.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(te.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ht===0&&(D.matrix.copy(qt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Lt===!0&&D.cameras.push(qt)}let Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Ht=d.getDepthInformation(nt[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(Ht,i.renderState)}if(Ut&&Ut.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Ht=0;Ht<nt.length;Ht++){let te=nt[Ht].camera;if(te){let Zt=m[te];Zt||(Zt=new Zs,m[te]=Zt);let qt=d.getCameraImage(te);Zt.sourceTexture=qt}}}}for(let nt=0;nt<A.length;nt++){let Lt=T[nt],Ut=A[nt];Lt!==null&&Ut!==void 0&&Ut.update(Lt,it,h||a)}Et&&Et(H,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}let Nt=new gu;Nt.setAnimationLoop(kt),this.setAnimationLoop=function(H){Et=H},this.dispose=function(){}}},f0=new le,bu=new Ft;bu.set(-1,0,0,0,1,0,0,0,1);function d0(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Xl(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),c(g,m),m.isMeshPhysicalMaterial&&u(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,E):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),E=b.envMap,M=b.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function c(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function p0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){let T=A.program;n.uniformBlockBinding(M,T)}function h(M,A){let T=i[M.id];T===void 0&&(g(M),T=f(M),i[M.id]=T,M.addEventListener("dispose",b));let C=A.program;n.updateUBOMapping(M,C);let _=t.render.frame;r[M.id]!==_&&(c(M),r[M.id]=_)}function f(M){let A=d();M.__bindingPointIndex=A;let T=s.createBuffer(),C=M.__size,_=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(M){let A=i[M.id],T=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let _=0,S=T.length;_<S;_++){let R=T[_];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)u(R[I],_,I,C);else u(R,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,A,T,C){if(y(M,A,T,C)===!0){let _=M.__offset,S=M.value;if(Array.isArray(S)){let R=0;for(let I=0;I<S.length;I++){let D=S[I],q=m(D);p(D,M.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,M.__data)}}function p(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function y(M,A,T,C){let _=M.value,S=A+"_"+T;if(C[S]===void 0)return typeof _=="number"||typeof _=="boolean"?C[S]=_:ArrayBuffer.isView(_)?C[S]=_.slice():C[S]=_.clone(),!0;{let R=C[S];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(M){let A=M.uniforms,T=0,C=16;for(let S=0,R=A.length;S<R;S++){let I=Array.isArray(A[S])?A[S]:[A[S]];for(let D=0,q=I.length;D<q;D++){let X=I[D],B=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,W=B.length;Y<W;Y++){let Q=B[Y],F=m(Q),Z=T%C,et=Z%F.boundary,rt=Z+et;T+=et,rt!==0&&C-rt<F.storage&&(T+=C-rt),X.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=F.storage}}}let _=T%C;return _>0&&(T+=C-_),M.__size=T,M.__cache={},this}function m(M){let A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){let A=M.target;A.removeEventListener("dispose",b);let T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function E(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:h,dispose:E}}var m0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function g0(){return Rn===null&&(Rn=new ua(m0,16,16,_i,Cn),Rn.name="DFG_LUT",Rn.minFilter=Ne,Rn.magFilter=Ne,Rn.wrapS=Mn,Rn.wrapT=Mn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var Eo=class{constructor(t={}){let{canvas:e=kh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:u=Ye}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let y=u,g=new Set([Ga,Va,ka]),m=new Set([Ye,fn,ps,ms,Ba,za]),b=new Uint32Array(4),E=new Int32Array(4),M=new L,A=null,T=null,C=[],_=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,D=null,q=null,X=null,B=null;this._outputColorSpace=Ee;let Y=0,W=0,Q=null,F=-1,Z=null,et=new ce,rt=new ce,Et=null,kt=new zt(0),Nt=0,H=e.width,it=e.height,nt=1,Lt=null,Ut=null,Rt=new ce(0,0,H,it),me=new ce(0,0,H,it),Ht=!1,te=new cs,Zt=!1,qt=!1,ve=new le,Ae=new L,Ie=new ce,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Me(){return Q===null?nt:1}let N=n;function Xe(v,U){return e.getContext(v,U)}try{let v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",pn,!1),N===null){let U="webgl2";if(N=Xe(U,v),N===null)throw Xe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Pt("WebGLRenderer: "+v.message),v}let Kt,w,x,O,V,J,st,ot,$,j,lt,Mt,ut,ct,wt,It,Ot,P,at,K,ht,mt,tt;function vt(){Kt=new Sm(N),Kt.init(),ht=new c0(N,Kt),w=new mm(N,Kt,t,ht),x=new o0(N,Kt),w.reversedDepthBuffer&&c&&x.buffers.depth.setReversed(!0),q=N.createFramebuffer(),X=N.createFramebuffer(),B=N.createFramebuffer(),O=new Am(N),V=new Yg,J=new l0(N,Kt,x,V,w,ht,O),st=new bm(R),ot=new If(N),mt=new dm(N,ot),$=new Tm(N,ot,O,mt),j=new Cm(N,$,ot,mt,O),P=new Em(N,w,J),wt=new gm(V),lt=new qg(R,st,Kt,w,mt,wt),Mt=new d0(R,V),ut=new Jg,ct=new e0(Kt),Ot=new fm(R,st,x,j,p,l),It=new a0(R,j,w),tt=new p0(N,O,w,x),at=new pm(N,Kt,O),K=new wm(N,Kt,O),O.programs=lt.programs,R.capabilities=w,R.extensions=Kt,R.properties=V,R.renderLists=ut,R.shadowMap=It,R.state=x,R.info=O}vt(),y!==Ye&&(S=new Im(y,e.width,e.height,o,i,r));let _t=new pc(R,N);this.xr=_t,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(v){v!==void 0&&(nt=v,this.setSize(H,it,!1))},this.getSize=function(v){return v.set(H,it)},this.setSize=function(v,U,G=!0){if(_t.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,it=U,e.width=Math.floor(v*nt),e.height=Math.floor(U*nt),G===!0&&(e.style.width=v+"px",e.style.height=U+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(H*nt,it*nt).floor()},this.setDrawingBufferSize=function(v,U,G){H=v,it=U,nt=G,e.width=Math.floor(v*G),e.height=Math.floor(U*G),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===Ye){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(Rt)},this.setViewport=function(v,U,G,z){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,U,G,z),x.viewport(et.copy(Rt).multiplyScalar(nt).round())},this.getScissor=function(v){return v.copy(me)},this.setScissor=function(v,U,G,z){v.isVector4?me.set(v.x,v.y,v.z,v.w):me.set(v,U,G,z),x.scissor(rt.copy(me).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(v){x.setScissorTest(Ht=v)},this.setOpaqueSort=function(v){Lt=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,G=!0){let z=0;if(v){let k=!1;if(Q!==null){let pt=Q.texture.format;k=g.has(pt)}if(k){let pt=Q.texture.type,xt=m.has(pt),dt=Ot.getClearColor(),yt=Ot.getClearAlpha(),bt=dt.r,Bt=dt.g,Gt=dt.b;xt?(b[0]=bt,b[1]=Bt,b[2]=Gt,b[3]=yt,N.clearBufferuiv(N.COLOR,0,b)):(E[0]=bt,E[1]=Bt,E[2]=Gt,E[3]=yt,N.clearBufferiv(N.COLOR,0,E))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Ot.dispose(),ut.dispose(),ct.dispose(),V.dispose(),st.dispose(),j.dispose(),mt.dispose(),tt.dispose(),lt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",bc),_t.removeEventListener("sessionend",Sc),Mi.stop()};function fe(v){v.preventDefault(),Fs("WebGLRenderer: Context Lost."),I=!0}function ie(){Fs("WebGLRenderer: Context Restored."),I=!1;let v=O.autoReset,U=It.enabled,G=It.autoUpdate,z=It.needsUpdate,k=It.type;vt(),O.autoReset=v,It.enabled=U,It.autoUpdate=G,It.needsUpdate=z,It.type=k}function pn(v){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function mn(v){let U=v.target;U.removeEventListener("dispose",mn),Ou(U)}function Ou(v){Bu(v),V.remove(v)}function Bu(v){let U=V.get(v).programs;U!==void 0&&(U.forEach(function(G){lt.releaseProgram(G)}),v.isShaderMaterial&&lt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,G,z,k,pt){U===null&&(U=De);let xt=k.isMesh&&k.matrixWorld.determinantAffine()<0,dt=Vu(v,U,G,z,k);x.setMaterial(z,xt);let yt=G.index,bt=1;if(z.wireframe===!0){if(yt=$.getWireframeAttribute(G),yt===void 0)return;bt=2}let Bt=G.drawRange,Gt=G.attributes.position,Tt=Bt.start*bt,jt=(Bt.start+Bt.count)*bt;pt!==null&&(Tt=Math.max(Tt,pt.start*bt),jt=Math.min(jt,(pt.start+pt.count)*bt)),yt!==null?(Tt=Math.max(Tt,0),jt=Math.min(jt,yt.count)):Gt!=null&&(Tt=Math.max(Tt,0),jt=Math.min(jt,Gt.count));let ge=jt-Tt;if(ge<0||ge===1/0)return;mt.setup(k,z,dt,G,yt);let de,ee=at;if(yt!==null&&(de=ot.get(yt),ee=K,ee.setIndex(de)),k.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Me()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(k.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),x.setLineWidth(Ue*Me()),k.isLineSegments?ee.setMode(N.LINES):k.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else k.isPoints?ee.setMode(N.POINTS):k.isSprite&&ee.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ee.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ue=k._multiDrawStarts,gt=k._multiDrawCounts,Ze=k._multiDrawCount,Yt=yt?ot.get(yt).bytesPerElement:1,Qe=V.get(z).currentProgram.getUniforms();for(let gn=0;gn<Ze;gn++)Qe.setValue(N,"_gl_DrawID",gn),ee.render(Ue[gn]/Yt,gt[gn])}else if(k.isInstancedMesh)ee.renderInstances(Tt,ge,k.count);else if(G.isInstancedBufferGeometry){let Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Ue);ee.renderInstances(Tt,ge,gt)}else ee.render(Tt,ge)};function Mc(v,U,G){v.transparent===!0&&v.side===qe&&v.forceSinglePass===!1?(v.side=We,v.needsUpdate=!0,vr(v,U,G),v.side=Vn,v.needsUpdate=!0,vr(v,U,G),v.side=qe):vr(v,U,G)}this.compile=function(v,U,G=null){G===null&&(G=v),T=ct.get(G),T.init(U),_.push(T),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),v!==G&&v.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();let z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){let dt=pt[xt];Mc(dt,G,k),z.add(dt)}else Mc(pt,G,k),z.add(pt)}),T=_.pop(),z},this.compileAsync=function(v,U,G=null){let z=this.compile(v,U,G);return new Promise(k=>{function pt(){if(z.forEach(function(xt){V.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){k(v);return}setTimeout(pt,10)}Kt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ko=null;function zu(v){ko&&ko(v)}function bc(){Mi.stop()}function Sc(){Mi.start()}let Mi=new gu;Mi.setAnimationLoop(zu),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(v){ko=v,_t.setAnimationLoop(v),v===null?Mi.stop():Mi.start()},_t.addEventListener("sessionstart",bc),_t.addEventListener("sessionend",Sc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(v,U);let G=_t.enabled===!0&&_t.isPresenting===!0,z=S!==null&&(Q===null||G)&&S.begin(R,Q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(U),U=_t.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,U,Q),T=ct.get(v,_.length),T.init(U),T.state.textureUnits=J.getTextureUnits(),_.push(T),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(ve,hn,U.reversedDepth),qt=this.localClippingEnabled,Zt=wt.init(this.clippingPlanes,qt),A=ut.get(v,C.length),A.init(),C.push(A),_t.enabled===!0&&_t.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Vo(xt,U,-1/0,R.sortObjects)}Vo(v,U,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(Lt,Ut,U.reversedDepth),ue=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,ue&&Ot.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&wt.beginShadows();let k=T.state.shadowsArray;if(It.render(k,v,U),Zt===!0&&wt.endShadows(),(z&&S.hasRenderPass())===!1){let xt=A.opaque,dt=A.transmissive;if(T.setupLights(),U.isArrayCamera){let yt=U.cameras;if(dt.length>0)for(let bt=0,Bt=yt.length;bt<Bt;bt++){let Gt=yt[bt];wc(xt,dt,v,Gt)}ue&&Ot.render(v);for(let bt=0,Bt=yt.length;bt<Bt;bt++){let Gt=yt[bt];Tc(A,v,Gt,Gt.viewport)}}else dt.length>0&&wc(xt,dt,v,U),ue&&Ot.render(v),Tc(A,v,U)}Q!==null&&W===0&&(J.updateMultisampleRenderTarget(Q),J.updateRenderTargetMipmap(Q)),z&&S.end(R),v.isScene===!0&&v.onAfterRender(R,v,U),mt.resetDefaultState(),F=-1,Z=null,_.pop(),_.length>0?(T=_[_.length-1],J.setTextureUnits(T.state.textureUnits),Zt===!0&&wt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,D!==null&&D.renderEnd()};function Vo(v,U,G,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){z&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ve);let xt=j.update(v),dt=v.material;dt.visible&&A.push(v,xt,dt,G,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){let xt=j.update(v),dt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ie.copy(xt.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(ve)),Array.isArray(dt)){let yt=xt.groups;for(let bt=0,Bt=yt.length;bt<Bt;bt++){let Gt=yt[bt],Tt=dt[Gt.materialIndex];Tt&&Tt.visible&&A.push(v,xt,Tt,G,Ie.z,Gt)}}else dt.visible&&A.push(v,xt,dt,G,Ie.z,null)}}let pt=v.children;for(let xt=0,dt=pt.length;xt<dt;xt++)Vo(pt[xt],U,G,z)}function Tc(v,U,G,z){let{opaque:k,transmissive:pt,transparent:xt}=v;T.setupLightsView(G),Zt===!0&&wt.setGlobalState(R.clippingPlanes,G),z&&x.viewport(et.copy(z)),k.length>0&&yr(k,U,G),pt.length>0&&yr(pt,U,G),xt.length>0&&yr(xt,U,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function wc(v,U,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Tt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Ke(1,1,{generateMipmaps:!0,type:Tt?Cn:Ye,minFilter:gi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let pt=T.state.transmissionRenderTarget[z.id],xt=z.viewport||et;pt.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),yt=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(kt),Nt=R.getClearAlpha(),Nt<1&&R.setClearColor(16777215,.5),R.clear(),ue&&Ot.render(G);let Bt=R.toneMapping;R.toneMapping=un;let Gt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Zt===!0&&wt.setGlobalState(R.clippingPlanes,z),yr(v,G,z),J.updateMultisampleRenderTarget(pt),J.updateRenderTargetMipmap(pt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let jt=0,ge=U.length;jt<ge;jt++){let de=U[jt],{object:ee,geometry:Ue,material:gt,group:Ze}=de;if(gt.side===qe&&ee.layers.test(z.layers)){let Yt=gt.side;gt.side=We,gt.needsUpdate=!0,Ac(ee,G,z,Ue,gt,Ze),gt.side=Yt,gt.needsUpdate=!0,Tt=!0}}Tt===!0&&(J.updateMultisampleRenderTarget(pt),J.updateRenderTargetMipmap(pt))}R.setRenderTarget(dt,yt,bt),R.setClearColor(kt,Nt),Gt!==void 0&&(z.viewport=Gt),R.toneMapping=Bt}function yr(v,U,G){let z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,pt=v.length;k<pt;k++){let xt=v[k],{object:dt,geometry:yt,group:bt}=xt,Bt=xt.material;Bt.allowOverride===!0&&z!==null&&(Bt=z),dt.layers.test(G.layers)&&Ac(dt,U,G,yt,Bt,bt)}}function Ac(v,U,G,z,k,pt){v.onBeforeRender(R,U,G,z,k,pt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(R,U,G,z,v,pt),k.transparent===!0&&k.side===qe&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,R.renderBufferDirect(G,U,z,k,v,pt),k.side=Vn,k.needsUpdate=!0,R.renderBufferDirect(G,U,z,k,v,pt),k.side=qe):R.renderBufferDirect(G,U,z,k,v,pt),v.onAfterRender(R,U,G,z,k,pt)}function vr(v,U,G){U.isScene!==!0&&(U=De);let z=V.get(v),k=T.state.lights,pt=T.state.shadowsArray,xt=k.state.version,dt=lt.getParameters(v,k.state,pt,U,G,T.state.lightProbeGridArray),yt=lt.getProgramCacheKey(dt),bt=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let Bt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=st.get(v.envMap||z.environment,Bt),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",mn),bt=new Map,z.programs=bt);let Gt=bt.get(yt);if(Gt!==void 0){if(z.currentProgram===Gt&&z.lightsStateVersion===xt)return Cc(v,dt),Gt}else dt.uniforms=lt.getUniforms(v),D!==null&&v.isNodeMaterial&&D.build(v,G,dt),v.onBeforeCompile(dt,R),Gt=lt.acquireProgram(dt,yt),bt.set(yt,Gt),z.uniforms=dt.uniforms;let Tt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=wt.uniform),Cc(v,dt),z.needsLights=Hu(v),z.lightsStateVersion=xt,z.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Gt,z.uniformsList=null,Gt}function Ec(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=xs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Cc(v,U){let G=V.get(v);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ku(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let G=0,z=v.length;G<z;G++){let k=v[G];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Vu(v,U,G,z,k){U.isScene!==!0&&(U=De),J.resetTextureUnits();let pt=U.fog,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,dt=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wt.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,bt=st.get(z.envMap||xt,yt),Bt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color,de=un;z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(de=R.toneMapping);let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ue=ee!==void 0?ee.length:0,gt=V.get(z),Ze=T.state.lights;if(Zt===!0&&(qt===!0||v!==Z)){let se=v===Z&&z.id===F;wt.setState(z,v,se)}let Yt=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ze.state.version||gt.outputColorSpace!==dt||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==bt||z.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==wt.numPlanes||gt.numIntersection!==wt.numIntersection)||gt.vertexAlphas!==Bt||gt.vertexTangents!==Gt||gt.morphTargets!==Tt||gt.morphNormals!==jt||gt.morphColors!==ge||gt.toneMapping!==de||gt.morphTargetsCount!==Ue||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,gt.__version=z.version);let Qe=gt.currentProgram;Yt===!0&&(Qe=vr(z,U,k),D&&z.isNodeMaterial&&D.onUpdateProgram(z,Qe,gt));let gn=!1,Jn=!1,Oi=!1,ne=Qe.getUniforms(),xe=gt.uniforms;if(x.useProgram(Qe.program)&&(gn=!0,Jn=!0,Oi=!0),z.id!==F&&(F=z.id,Jn=!0),gt.needsLights){let se=ku(T.state.lightProbeGridArray,k);gt.lightProbeGrid!==se&&(gt.lightProbeGrid=se,Jn=!0)}if(gn||Z!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ne.setValue(N,"projectionMatrix",v.projectionMatrix),ne.setValue(N,"viewMatrix",v.matrixWorldInverse);let Kn=ne.map.cameraPosition;Kn!==void 0&&Kn.setValue(N,Ae.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&ne.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ne.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,Jn=!0,Oi=!0)}if(gt.needsLights&&(Ze.state.directionalShadowMap.length>0&&ne.setValue(N,"directionalShadowMap",Ze.state.directionalShadowMap,J),Ze.state.spotShadowMap.length>0&&ne.setValue(N,"spotShadowMap",Ze.state.spotShadowMap,J),Ze.state.pointShadowMap.length>0&&ne.setValue(N,"pointShadowMap",Ze.state.pointShadowMap,J)),k.isSkinnedMesh){ne.setOptional(N,k,"bindMatrix"),ne.setOptional(N,k,"bindMatrixInverse");let se=k.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),ne.setValue(N,"boneTexture",se.boneTexture,J))}k.isBatchedMesh&&(ne.setOptional(N,k,"batchingTexture"),ne.setValue(N,"batchingTexture",k._matricesTexture,J),ne.setOptional(N,k,"batchingIdTexture"),ne.setValue(N,"batchingIdTexture",k._indirectTexture,J),ne.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(N,"batchingColorTexture",k._colorsTexture,J));let $n=G.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&P.update(k,G,Qe),(Jn||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,ne.setValue(N,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(xe.envMapIntensity.value=U.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=g0()),Jn){if(ne.setValue(N,"toneMappingExposure",R.toneMappingExposure),gt.needsLights&&Gu(xe,Oi),pt&&z.fog===!0&&Mt.refreshFogUniforms(xe,pt),Mt.refreshMaterialUniforms(xe,z,nt,it,T.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.lightProbeGrid){let se=gt.lightProbeGrid;xe.probesSH.value=se.texture,xe.probesMin.value.copy(se.boundingBox.min),xe.probesMax.value.copy(se.boundingBox.max),xe.probesResolution.value.copy(se.resolution)}xs.upload(N,Ec(gt),xe,J)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xs.upload(N,Ec(gt),xe,J),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ne.setValue(N,"center",k.center),ne.setValue(N,"modelViewMatrix",k.modelViewMatrix),ne.setValue(N,"normalMatrix",k.normalMatrix),ne.setValue(N,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let se=z.uniformsGroups;for(let Kn=0,Bi=se.length;Kn<Bi;Kn++){let Rc=se[Kn];tt.update(Rc,Qe),tt.bind(Rc,Qe)}}return Qe}function Gu(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Hu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(v,U,G){let z=V.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=U,V.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let G=V.get(v);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,G=0){Q=v,Y=U,W=G;let z=null,k=!1,pt=!1;if(v){let dt=V.get(v);if(dt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(v.viewport),rt.copy(v.scissor),Et=v.scissorTest,x.viewport(et),x.scissor(rt),x.setScissorTest(Et),F=-1;return}else if(dt.__webglFramebuffer===void 0)J.setupRenderTarget(v);else if(dt.__hasExternalTextures)J.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Bt=v.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&V.has(Bt)&&(v.width!==Bt.image.width||v.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);let bt=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?z=bt[U][G]:z=bt[U],k=!0):v.samples>0&&J.useMultisampledRTT(v)===!1?z=V.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?z=bt[G]:z=bt,et.copy(v.viewport),rt.copy(v.scissor),Et=v.scissorTest}else et.copy(Rt).multiplyScalar(nt).floor(),rt.copy(me).multiplyScalar(nt).floor(),Et=Ht;if(G!==0&&(z=q),x.bindFramebuffer(N.FRAMEBUFFER,z)&&x.drawBuffers(v,z),x.viewport(et),x.scissor(rt),x.setScissorTest(Et),k){let dt=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,G)}else if(pt){let dt=U;for(let yt=0;yt<v.textures.length;yt++){let bt=V.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,bt.__webglTexture,G,dt)}}else if(v!==null&&G!==0){let dt=V.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,G)}F=-1},this.readRenderTargetPixels=function(v,U,G,z,k,pt,xt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){x.bindFramebuffer(N.FRAMEBUFFER,yt);try{let bt=v.textures[dt],Bt=bt.format,Gt=bt.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt),!w.textureFormatReadable(Bt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&G>=0&&G<=v.height-k&&N.readPixels(U,G,z,k,ht.convert(Bt),ht.convert(Gt),pt)}finally{let bt=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,U,G,z,k,pt,xt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(U>=0&&U<=v.width-z&&G>=0&&G<=v.height-k){x.bindFramebuffer(N.FRAMEBUFFER,yt);let bt=v.textures[dt],Bt=bt.format,Gt=bt.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt),!w.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(U,G,z,k,ht.convert(Bt),ht.convert(Gt),0);let jt=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,jt);let ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gh(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.deleteBuffer(Tt),N.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,G=0){let z=Math.pow(2,-G),k=Math.floor(v.image.width*z),pt=Math.floor(v.image.height*z),xt=U!==null?U.x:0,dt=U!==null?U.y:0;J.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,xt,dt,k,pt),x.unbindTexture()},this.copyTextureToTexture=function(v,U,G=null,z=null,k=0,pt=0){let xt,dt,yt,bt,Bt,Gt,Tt,jt,ge,de=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(G!==null)xt=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,Bt=G.min.y,Gt=G.isBox3?G.min.z:0;else{let xe=Math.pow(2,-k);xt=Math.floor(de.width*xe),dt=Math.floor(de.height*xe),v.isDataArrayTexture?yt=de.depth:v.isData3DTexture?yt=Math.floor(de.depth*xe):yt=1,bt=0,Bt=0,Gt=0}z!==null?(Tt=z.x,jt=z.y,ge=z.z):(Tt=0,jt=0,ge=0);let ee=ht.convert(U.format),Ue=ht.convert(U.type),gt;U.isData3DTexture?(J.setTexture3D(U,0),gt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),gt=N.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),gt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=x.getParameter(N.UNPACK_ROW_LENGTH),Yt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=x.getParameter(N.UNPACK_SKIP_PIXELS),gn=x.getParameter(N.UNPACK_SKIP_ROWS),Jn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),x.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);let Oi=v.isDataArrayTexture||v.isData3DTexture,ne=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let xe=V.get(v),$n=V.get(U),se=V.get(xe.__renderTarget),Kn=V.get($n.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,se.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Bi=0;Bi<yt;Bi++)Oi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(v).__webglTexture,k,Gt+Bi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(U).__webglTexture,pt,ge+Bi)),N.blitFramebuffer(bt,Bt,xt,dt,Tt,jt,xt,dt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||V.has(v)){let xe=V.get(v),$n=V.get(U);x.bindFramebuffer(N.READ_FRAMEBUFFER,X),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let se=0;se<yt;se++)Oi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,k,Gt+se):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,k),ne?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$n.__webglTexture,pt,ge+se):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$n.__webglTexture,pt),k!==0?N.blitFramebuffer(bt,Bt,xt,dt,Tt,jt,xt,dt,N.COLOR_BUFFER_BIT,N.NEAREST):ne?N.copyTexSubImage3D(gt,pt,Tt,jt,ge+se,bt,Bt,xt,dt):N.copyTexSubImage2D(gt,pt,Tt,jt,bt,Bt,xt,dt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ne?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(gt,pt,Tt,jt,ge,xt,dt,yt,ee,Ue,de.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(gt,pt,Tt,jt,ge,xt,dt,yt,ee,de.data):N.texSubImage3D(gt,pt,Tt,jt,ge,xt,dt,yt,ee,Ue,de):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pt,Tt,jt,xt,dt,ee,Ue,de.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pt,Tt,jt,de.width,de.height,ee,de.data):N.texSubImage2D(N.TEXTURE_2D,pt,Tt,jt,xt,dt,ee,Ue,de);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),x.pixelStorei(N.UNPACK_SKIP_ROWS,gn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Jn),pt===0&&U.generateMipmaps&&N.generateMipmap(gt),x.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&J.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?J.setTextureCube(v,0):v.isData3DTexture?J.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?J.setTexture2DArray(v,0):J.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){Y=0,W=0,Q=null,x.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};function Su(s,t,e,n,i){let r=document.createElement("canvas");r.width=Math.min(768,Math.ceil(e.w*48)),r.height=Math.min(768,Math.ceil(e.d*48));let a=r.getContext("2d");a.translate(r.width/2,r.height/2),a.scale(r.width/e.w,r.height/e.d),br(a,{x:0,z:0,w:e.w,d:e.d},n,i);let o=new Wn(r);o.colorSpace=Ee;let l=s.mesh(new qn(e.w,e.d),new Yn({map:o,roughness:.94}),t,e.x,.035,e.z);l.rotation.x=-Math.PI/2,l.castShadow=!1}function Tu(s,t,e,n){let{x:i,z:r,w:a,d:o}=e,l=e.visual||e.kind;if(l==="car"){s.car(t,e);return}if(l==="crate"){s.crate(t,i,r,a,o);return}let h=n.wall,f=n.cap,d=n.accent;if(l==="locker"){s.box(t,i,.73,r,a,1.46,o,h);for(let c=0;c<3;c++){let u=i-a/2+(c+.5)*a/3;s.box(t,u,.75,r+o/2+.015,a/3-.035,1.34,.04,f),s.box(t,u+a/9,.73,r+o/2+.05,.04,.18,.04,12631459);for(let p=0;p<3;p++)s.box(t,u,1.13+p*.08,r+o/2+.04,a*.18,.025,.02,2504505)}}else if(l==="shelf"){s.box(t,i,.8,r-o/2+.05,a,1.6,.1,4602679);for(let u of[-1,1])s.box(t,i+u*(a/2-.06),.8,r,.12,1.6,o,9138514);let c=[10181976,6650738,12295013,7570071,8349315];for(let u=0;u<3;u++){let p=.12+u*.5;s.box(t,i,p,r,a,.08,o,9533527);for(let y=0;y<Math.floor(a/.2)-1;y++){let g=i-a/2+.23+y*.2,m=.26+y%3*.055;s.box(t,g,p+.07+m/2,r+o*.23,.15,m,o*.46,c[(y+u)%c.length]),s.box(t,g,p+.13,r+o*.46,.11,.025,.02,13022091)}}}else if(l==="planter"){s.box(t,i,.25,r,a,.5,o,6186582),s.box(t,i,.52,r,a+.02,.08,o+.02,9543812),s.box(t,i,.57,r,a-.18,.03,o-.18,2440241);for(let c=0;c<7;c++){let u=i+(s.random()-.5)*(a-.25),p=r+(s.random()-.5)*(o-.25);s.ball(t,u,.75+s.random()*.2,p,.17,.3,.17,c%2?5866842:4353106,0)}}else if(l==="machine"){s.box(t,i,.49,r,a,.98,o,h),s.box(t,i,.99,r,a,.09,o,f),s.box(t,i-a*.2,.69,r+o/2+.04,a*.34,.36,.06,1519413),s.box(t,i-a*.2,.69,r+o/2+.08,a*.24,.22,.025,s.mat(9557696,.5,.35));for(let u=0;u<5;u++)s.box(t,i+a*.24,.32+u*.1,r+o/2+.035,a*.27,.025,.03,1583923);let c=s.cylinder(t,i,.76,r,.09,.09,a*.83,d,8);c.rotation.z=Math.PI/2;for(let u of[-1,1])s.cylinder(t,i+u*a*.35,.5,r,.12,.12,1,8556947,8)}else if(l==="tank"){s.box(t,i,.1,r,a,.2,o,f);let c=Math.max(1,Math.floor(a/1.1));for(let u=0;u<c;u++){let p=i+(u-(c-1)/2)*a/c,y=Math.min(a/c,o)*.35;s.cylinder(t,p,.7,r,y,y,1.16,3499376,12),s.cylinder(t,p,1.3,r,y*1.1,y*1.1,.15,f,12),s.box(t,p,.77,r+y+.015,y*.64,.7,.035,s.mat(n.light,.45,.4)),s.cylinder(t,p,1.45,r,y*.28,y*.28,.2,d,8)}}else if(l==="crystal"){s.box(t,i,.09,r,a,.18,o,7838893);for(let c=0;c<6;c++){let u=i+(s.random()-.5)*a*.7,p=r+(s.random()-.5)*o*.7,y=.5+s.random()*.9,g=s.mesh(new An(.17+s.random()*.18,y,5),s.mat(c%2?10276057:7646922,.38,.12),t,u,y/2+.16,p);g.rotation.z=(s.random()-.5)*.35}}else if(l==="stone"){s.box(t,i,.14,r,a,.28,o,f),s.box(t,i,.42,r,a*.85,.28,o*.85,h);for(let c of[-.28,.28])s.cylinder(t,i+a*c,.92,r,.14,.2,1,f,8);s.box(t,i,1.45,r,a*.86,.17,o*.65,f),s.box(t,i,.99,r+o*.28,a*.24,.11,.04,s.mat(d,.7,.25))}else if(l==="rubble"){s.box(t,i,.13,r,a,.26,o,4208184);for(let c=0;c<9;c++){let u=i+(s.random()-.5)*a*.75,p=r+(s.random()-.5)*o*.75,y=.2+s.random()*.35,g=s.ball(t,u,.22+y*.25,p,y,y*.65,y,c%4?5785674:9198664,0);g.rotation.y=s.random()*3}for(let c=0;c<3;c++)s.ball(t,i+(s.random()-.5)*a*.5,.35,r+(s.random()-.5)*o*.5,.07,.04,.07,s.mat(12944212,.8,.5),0)}}function wu(s,t){let e=Ln[t.type],n=new ae,i=new ae,r=[],a=[];n.add(i),n.scale.setScalar(e.scale);let o=s.mat(e.skin),l=s.mat(e.glow,.4,1.4),h=1.1,f=.34;if(t.type==="wisp"){s.ball(i,0,1,0,.4,.44,.36,o,2),s.ball(i,0,1.08,.28,.26,.27,.12,s.mat(1322825),1);for(let c=0;c<3;c++){let u=new ae;u.position.set((c-1)*.19,.7,-.05),i.add(u);let p=s.mesh(new An(.11,.5,5),l,u,0,-.25,0);p.rotation.z=Math.PI,r.push(u)}s.glow(i,0,1,0,1.5,e.glow,.35)}else if(t.type==="stalker"){s.ball(i,0,.5,-.1,.48,.24,.48,o,1),s.ball(i,0,.69,.37,.25,.29,.32,o,1);for(let u of[-1,1])for(let p of[-1,1]){let y=new ae;y.position.set(u*.36,.55,p*.32),i.add(y);let g=s.ball(y,u*.14,-.2,.08,.09,.35,.09,o,0);g.rotation.z=u*.35,s.ball(y,u*.23,-.46,.15,.17,.07,.19,7102594,0),r.push(y)}for(let u of[-1,1]){let p=s.mesh(new An(.1,.4,5),o,i,u*.23,.93,.27);p.rotation.z=-u*.45}let c=s.ball(i,0,.52,-.76,.12,.12,.42,o,0);r.push(c),h=.76,f=.64}else{s.cylinder(i,0,.48,0,.19,.27,.82,8427382,8),s.ball(i,0,1,0,.66,.26,.55,o,1),s.cylinder(i,0,.91,0,.48,.36,.11,10794621,10);for(let c=0;c<6;c++){let u=c*Math.PI/3;s.ball(i,Math.sin(u)*.39,1.15,Math.cos(u)*.3,.065,.04,.065,l,0)}for(let c of[-1,1]){let u=s.ball(i,c*.27,.15,.04,.26,.1,.23,o,0);r.push(u)}h=.71,f=.22}for(let c of[-.13,.13])s.ball(i,c,h,f,.05,.075,.045,l,1),a.push(s.glow(i,c,h,f+.02,.4,e.glow,.75));let d=s.ring(.9,16741981,.8);return d.scale.setScalar(1/e.scale),n.add(d),n.add(s.shadow(t.type==="stalker"?.7:.5)),n.userData={body:i,limbs:r,eyes:a,warn:d,base:e.scale,floating:t.type==="wisp"},s.scene.add(n),n}function Au(s,t){let e=new Set(t.projectiles.map(i=>i.id));for(let[i,r]of s.projectileMeshes)e.has(i)||(s.removeDynamic(r),s.projectileMeshes.delete(i));for(let i of t.projectiles){let r=s.projectileMeshes.get(i.id);r||(r=new ae,s.ball(r,0,0,0,.17,.17,.17,s.mat(8969727,.35,2),1),s.glow(r,0,0,0,.8,8445183,.7),s.world.add(r),s.projectileMeshes.set(i.id,r)),r.position.set(i.x,.66,i.z)}let n=new Set(t.pulses.map(i=>i.id));for(let[i,r]of s.pulseMeshes)n.has(i)||(s.removeDynamic(r),s.pulseMeshes.delete(i));for(let i of t.pulses){let r=s.pulseMeshes.get(i.id);if(!r){let o=new he;o.setAttribute("position",new ye(new Float32Array(288),3)),r=new Pi(o,new ci({color:12185225,transparent:!0,opacity:.8,depthWrite:!1})),r.frustumCulled=!1,s.world.add(r),s.pulseMeshes.set(i.id,r)}let a=r.geometry.attributes.position;for(let o=0;o<48;o++){let l=o/48*Math.PI*2,h=(o+1)/48*Math.PI*2,f={x:i.x+Math.sin(l)*i.radius,z:i.z+Math.cos(l)*i.radius},d={x:i.x+Math.sin(h)*i.radius,z:i.z+Math.cos(h)*i.radius},c=be(i,f,t.obstacles)&&be(i,d,t.obstacles);a.setXYZ(o*2,f.x,.15,f.z),a.setXYZ(o*2+1,c?d.x:f.x,.15,c?d.z:f.z)}a.needsUpdate=!0,r.material.opacity=.9-i.radius/i.maxRadius*.55}}function Cu(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new he,h=0;for(let f=0;f<s.length;++f){let d=s[f],c=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,u,f),h+=u}}if(e){let f=0,d=[];for(let c=0;c<s.length;++c){let u=s[c].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+f);f+=s[c].attributes.position.count}l.setIndex(d)}for(let f in r){let d=Eu(r[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;l.setAttribute(f,d)}for(let f in a){let d=a[f][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[f]=[];for(let c=0;c<d;++c){let u=[];for(let y=0;y<a[f].length;++y)u.push(a[f][y][c]);let p=Eu(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;l.morphAttributes[f].push(p)}}}return l}function Eu(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){let f=s[h];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=f.gpuType),i!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*e}let a=new t(r),o=new ye(a,e,n),l=0;for(let h=0;h<s.length;++h){let f=s[h];if(f.isInterleavedBufferAttribute){let d=l/e;for(let c=0,u=f.count;c<u;c++)for(let p=0;p<e;p++){let y=f.getComponent(c,p);o.setComponent(c+d,p,y)}}else a.set(f.array,l);l+=f.count*e}return i!==void 0&&(o.gpuType=i),o}var Io=L,Po=class{constructor(t){this.renderer=new Eo({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Da,this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=rr,this.renderer.toneMappingExposure=1.2,this.scene=new Vs,this.scene.background=new zt("#122332"),this.scene.fog=new ks("#132733",.011),this.camera=new pi(-20,20,12,-12,.1,130),this.scene.add(new js(9681115,3295293,2.1));let e=new ir(10271993,2.4);e.position.set(-15,28,-9),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:80}),e.shadow.bias=-.001,e.shadow.normalBias=.06,this.scene.add(e),this.materials=new Map,this.effects=[],this.lamps=[],this.glowTexture=this.makeGlow(),this.hero=this.makeHero(),this.scene.add(this.hero),this.spot=new er(16770720,85,15,.54,.7,1.4),this.spot.target=new pe,this.scene.add(this.spot,this.spot.target),this.personal=new nr(16767381,10,5,1.3),this.scene.add(this.personal),this.cone=this.makeBeam(),this.scene.add(this.cone),this.aimRing=this.ring(.6,16768901,.3),this.scene.add(this.aimRing),this.resize(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize()),t.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.onContextLost?.()}),this.width=innerWidth,this.camX=1,this.camZ=9}mat(t,e=.9,n=0){let i=t+":"+e+":"+n;return this.materials.has(i)||this.materials.set(i,new Yn({color:t,roughness:e,metalness:e<.5?.4:0,emissive:t,emissiveIntensity:n,flatShading:!0})),this.materials.get(i)}mesh(t,e,n,i=0,r=0,a=0){let o=new Te(t,typeof e=="object"?e:this.mat(e));return o.position.set(i,r,a),o.castShadow=!0,o.receiveShadow=!0,n.add(o),o}box(t,e,n,i,r,a,o,l,h=0){let f=this.mesh(new hi(r,a,o),l,t,e,n,i);return f.rotation.y=h,f}ball(t,e,n,i,r,a,o,l,h=1){let f=this.mesh(new fs(1,h),l,t,e,n,i);return f.scale.set(r,a,o),f}cylinder(t,e,n,i,r,a,o,l,h=10){return this.mesh(new us(r,a,o,h),l,t,e,n,i)}makeGlow(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,"rgba(255,255,235,1)"),n.addColorStop(.12,"rgba(255,240,180,.8)"),n.addColorStop(.35,"rgba(255,205,100,.22)"),n.addColorStop(1,"rgba(255,190,70,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),new Wn(t)}glow(t,e,n,i,r,a=16767119,o=.75){let l=new Xs(new ls({map:this.glowTexture,color:a,transparent:!0,depthWrite:!1,blending:Di,opacity:o}));return l.position.set(e,n,i),l.scale.set(r,r,1),t.add(l),l}ring(t,e,n){let i=new Te(new Js(t*.87,t,40),new Hn({color:e,transparent:!0,opacity:n,depthWrite:!1,side:qe}));return i.rotation.x=-Math.PI/2,i.position.y=.045,i}text(t,e,n,i="#dfe8cf",r="#17303a"){let a=document.createElement("canvas");a.width=512,a.height=256;let o=a.getContext("2d");o.fillStyle=r,o.fillRect(0,0,512,256),o.strokeStyle="#a3b3a680",o.lineWidth=8,o.strokeRect(10,10,492,236),o.textAlign="center",o.textBaseline="middle",o.fillStyle=i;let l=t.split(`
`);o.font="bold "+(l.length>1?62:70)+"px sans-serif",l.forEach((d,c)=>o.fillText(d,256,128+(c-(l.length-1)/2)*80));let h=new Wn(a);return h.colorSpace=Ee,new Te(new qn(e,n),new Yn({map:h,roughness:1,side:qe}))}floorTexture(t,e="#3a4947"){let n=document.createElement("canvas");n.width=n.height=1024;let i=n.getContext("2d"),r=xn(t);i.fillStyle=e,i.fillRect(0,0,1024,1024);for(let o=0;o<42e3;o++){let l=r()*1024,h=r()*1024,f=r()*3+.5;i.fillStyle=r()>.5?"rgba(122,135,116,.14)":"rgba(15,25,25,.19)",i.fillRect(l,h,f,f)}for(let o=0;o<60;o++){i.strokeStyle="#1b292750",i.lineWidth=r()*2+1,i.beginPath();let l=r()*1024,h=r()*1024;i.moveTo(l,h);for(let f=0;f<5;f++)l+=r()*60-25,h+=r()*50-20,i.lineTo(l,h);i.stroke()}let a=new Wn(n);return a.colorSpace=Ee,a.wrapS=a.wrapT=ns,a.repeat.set(2,2),a}makeHero(){let t=new ae,e=new ae;t.add(e),t.userData.body=e,this.ball(e,0,.83,0,.36,.43,.27,2372679,2),this.box(e,0,.62,.04,.52,.18,.36,1319728),this.ball(e,0,1.4,.03,.36,.4,.34,14987657,2),this.ball(e,0,1.58,-.035,.385,.29,.355,2630948,2),this.ball(e,.24,1.45,-.06,.14,.27,.26,2499876),this.ball(e,-.26,1.48,-.05,.12,.25,.26,2499876),this.ball(e,0,1.4,.345,.07,.08,.04,13210990);for(let a of[-.15,.15])this.ball(e,a,1.48,.316,.025,.032,.025,1054752);this.box(e,0,.95,-.32,.43,.5,.18,8412474),this.box(e,0,1.12,-.43,.26,.1,.04,13543286);for(let a of[-.29,.29])this.box(e,a,.94,.19,.07,.52,.05,11903107);this.heroLegs=[];for(let a of[-.18,.18]){let o=new ae;o.position.set(a,.55,0),e.add(o),this.box(o,0,-.15,0,.18,.42,.21,2106928),this.ball(o,0,-.43,.06,.14,.13,.24,1186594),this.heroLegs.push(o)}this.ball(e,-.33,.88,.1,.13,.33,.14,2702413),this.ball(e,.38,1.02,.2,.13,.14,.29,2702413),this.ball(e,.38,1.03,.44,.12,.11,.13,14262647);let n=this.cylinder(e,.38,1.04,.61,.1,.12,.42,2765110);n.rotation.x=Math.PI/2;let i=this.cylinder(e,.38,1.04,.86,.15,.12,.13,10918770);i.rotation.x=Math.PI/2;let r=this.cylinder(e,.38,1.04,.933,.12,.12,.015,this.mat(16771500,.2,2));return r.rotation.x=Math.PI/2,this.heroGlow=this.glow(e,.38,1.04,.96,.85),t.add(this.shadow(.65)),t}shadow(t){let e=new Te(new hs(t,24),new Hn({color:67597,transparent:!0,opacity:.4,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.025,e}makeEnemy(t){if(["wisp","stalker","spore"].includes(t.type))return wu(this,t);let e=new ae,n=new ae;e.add(n);let i=t.type==="brute",r=t.type==="skitter",a=this.mat(i?3619909:1647409),o=i?1.72:r?.72:1;if(e.scale.setScalar(o),this.ball(n,0,.63,0,.42,.49,.34,a,1),this.ball(n,0,1.08,.1,.39,.35,.36,a,2),this.ball(n,0,.31,-.18,.32,.3,.27,a),i){this.ball(n,0,.85,-.15,.62,.49,.4,4541004),this.box(n,0,.6,.23,.7,.23,.08,5857639);for(let d of[-.43,.43])this.ball(n,d,1,-.05,.25,.22,.25,5791067);this.ball(n,-.15,1.29,.1,.24,.11,.23,8225400)}let l=[];for(let d of[-.155,.155])this.ball(n,d,1.15,.407,.056,.092,.047,this.mat(16771745,.5,3),2),l.push(this.glow(n,d,1.15,.44,.45,16766057,.8));let h=[];for(let d of[-1,1]){let c=new ae;c.position.set(d*.37,.87,.03),n.add(c),this.ball(c,d*.06,-.19,.08,.13,.29,.14,a),this.ball(c,d*.12,-.38,.18,.16,.13,.17,a);for(let u=0;u<3;u++){let p=this.mesh(new An(.035,.21,5),7700858,c,d*.12+(u-1)*.09,-.47,.22);p.rotation.x=-.6}h.push(c),this.ball(n,d*.23,.2,.09,.15,.21,.22,a)}e.userData={body:n,limbs:h,eyes:l,base:o},e.add(this.shadow(.62));let f=this.ring(.9,16741981,.9);return f.scale.setScalar(1/o),e.add(f),e.userData.warn=f,this.scene.add(e),e}makeBeam(){let e=new he;e.setAttribute("position",new ye(new Float32Array(162),3)),e.setAttribute("uv",new ye(new Float32Array(108),2));let n=[];for(let a=0;a<52;a++)n.push(0,a+1,a+2);e.setIndex(n);let i=new He({transparent:!0,depthWrite:!1,side:qe,blending:Di,vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;void main(){float edge=pow(max(0.,1.-abs(v.x)),.55);float fade=pow(1.-v.y,1.4);gl_FragColor=vec4(1.,.83,.42,edge*fade*.38);}"}),r=new Te(e,i);return r.frustumCulled=!1,r}crate(t,e,n,i=1.5,r=1.5){this.box(t,e,.65,n,i,1.3,r,6705978);for(let o=0;o<4;o++)this.box(t,e,.17+o*.3,n+r/2+.02,i-.12,.035,.035,3353893);for(let o of[-1,1])this.box(t,e+o*(i/2-.09),.67,n+r/2+.04,.13,1.3,.09,9861463),this.box(t,e,.67,n+o*(r/2-.08),i,.1,.1,10124886);let a=this.box(t,e,.68,n+r/2+.1,.11,Math.hypot(i,1.2),.09,9072720);a.rotation.z=-Math.atan(i/1.2),this.box(t,e,1.33,n,i,.1,r,8415301)}car(t,e){let n=new ae;n.position.set(e.x,0,e.z),t.add(n);let i=e.w;this.box(n,0,.66,0,i,.64,1.9,2113111),this.box(n,-.15,1.18,0,i*.48,.64,1.65,2704469),this.box(n,-.15,1.52,0,i*.46,.12,1.67,4215130);for(let r of[-.86,.86])this.box(n,-.15,1.21,r,i*.39,.42,.025,this.mat(1650233,.3)),this.box(n,-.16,1.22,r,.09,.57,.045,8027245),this.box(n,0,.77,r*1.13,i-.1,.06,.07,6581356);for(let r of[-i*.31,i*.31])for(let a of[-.98,.98]){let o=this.cylinder(n,r,.4,a,.37,.37,.22,1121057,12);o.rotation.x=Math.PI/2;let l=this.cylinder(n,r,.4,a*1.12,.18,.18,.03,5464424,10);l.rotation.x=Math.PI/2}for(let r of[-.62,.62])this.box(n,i/2+.015,.77,r,.03,.18,.33,this.mat(15187059,.4,.9)),this.box(n,-i/2-.01,.77,r,.03,.19,.27,this.mat(8468785,.5,.4));this.box(n,i/2+.05,.46,0,.12,.13,1.9,6583415);for(let r=0;r<12;r++)this.box(n,(this.random()-.5)*i,1.02,(this.random()-.5)*1.8,.12+this.random()*.22,.02,.14,5326131)}lamp(t,e,n,i=16763250){this.cylinder(t,e,1.8,n,.06,.11,3.6,2701888),this.box(t,e+.26,3.55,n,.6,.09,.1,3425866),this.cylinder(t,e+.5,3.43,n,.25,.38,.2,2701888),this.cylinder(t,e+.5,3.32,n,.19,.19,.06,this.mat(i,.5,2)),this.glow(t,e+.5,3.25,n,2.3,i,.48);let r=new Te(new hs(3.8,40),new Hn({map:this.glowTexture,color:i,transparent:!0,opacity:.23,depthWrite:!1,blending:Di}));r.rotation.x=-Math.PI/2,r.position.set(e+.5,.035,n),t.add(r),this.lamps.push({x:e,z:n})}fence(t,e,n,i,r="x"){let a=new ae;a.position.set(e,0,n),r==="z"&&(a.rotation.y=Math.PI/2),t.add(a);for(let h=-i/2;h<=i/2+.1;h+=2.5)this.cylinder(a,h,.82,0,.055,.07,1.64,5730420,6);for(let h of[.28,1.47])this.box(a,0,h,0,i,.045,.045,5401453);let o=[];for(let h=-i/2;h<i/2;h+=.4)o.push(new Io(h,.3,0),new Io(Math.min(i/2,h+1.2),1.45,0),new Io(h,1.45,0),new Io(Math.min(i/2,h+1.2),.3,0));let l=new Pi(new he().setFromPoints(o),new ci({color:5402737,transparent:!0,opacity:.5}));a.add(l)}build(t){if(this.world){this.scene.remove(this.world);let f=new Set,d=new Set,c=new Set;this.world.traverse(u=>{u.geometry&&f.add(u.geometry),u.material&&!Array.isArray(u.material)&&!Array.from(this.materials.values()).includes(u.material)&&(d.add(u.material),u.material.map&&u.material.map!==this.glowTexture&&c.add(u.material.map))}),f.forEach(u=>u.dispose()),d.forEach(u=>u.dispose()),c.forEach(u=>u.dispose())}for(let f of this.enemyMeshes||[])this.removeDynamic(f);for(let f of this.effects)this.removeDynamic(f.mesh);this.effects=[],this.world=new ae,this.scene.add(this.world),this.random=xn(t.config.seed),this.lamps=[];let e=this.world,n=new Yn({map:this.floorTexture(t.config.seed,t.config.theme.floor),roughness:.99});this.box(e,0,-.18,0,57,.3,58,n);let i=t.config.theme;this.scene.background.set(i.floor).multiplyScalar(.28),this.scene.fog.color.copy(this.scene.background);for(let f of t.config.rooms)Su(this,e,f,i,this.random);for(let f of t.obstacles)f.kind==="wall"?(this.box(e,f.x,.48,f.z,f.w,.96,f.d,i.wall),this.box(e,f.x,1.02,f.z,f.w,.12,f.d,i.cap)):Tu(this,e,f,i);let r=this.text(`STAY
IN LIGHT`,2.5,1.3,"#b7b0cc",i.room);r.rotation.x=-Math.PI/2,r.position.set(t.config.start.x,.065,t.config.start.z-1.5),e.add(r);for(let f of t.config.lamps)this.lamp(e,f.x,f.z,i.light);let a=[2967869,3692357,2377013,4547402,2308921];for(let f of t.config.rooms)for(let d=0;d<(["court","greenhouse"].includes(i.id)?12:3);d++){let c=f.x+(this.random()-.5)*Math.max(1,f.w-1),u=f.z+(this.random()-.5)*Math.max(1,f.d-1);if(Math.hypot(c-t.config.key.x,u-t.config.key.z)<1.5||Math.hypot(c-t.config.exit.x,u-t.config.exit.z)<1.5)continue;let p=.12+this.random()*.17;this.ball(e,c,.09,u,p,.14,p,a[d%5],0)}this.keyMesh=new ae,this.keyMesh.position.set(t.config.key.x,1,t.config.key.z);let o=this.mat(16765810,.3,1),l=this.mesh(new $s(.22,.07,6,16),o,this.keyMesh);this.box(this.keyMesh,0,-.36,0,.1,.6,.1,o),this.box(this.keyMesh,.12,-.58,0,.24,.1,.1,o),this.glow(this.keyMesh,0,0,0,2.3,16766318,.7),e.add(this.keyMesh),this.keyRing=this.ring(1.1,16767099,.5),this.keyRing.position.set(t.config.key.x,.05,t.config.key.z),e.add(this.keyRing),this.exitMesh=new ae,this.exitMesh.position.set(t.config.exit.x,0,t.config.exit.z);for(let f of[-1.25,1.25])this.box(this.exitMesh,f,1.5,0,.22,3,.25,7241851);this.box(this.exitMesh,0,3,0,2.7,.2,.25,7241851);let h=this.text("EXIT \u2192",2,.6,"#a4eaca","#233e38");h.position.set(0,3.55,0),this.exitMesh.add(h),this.exitRing=this.ring(1.45,7858365,.55),this.exitMesh.add(this.exitRing),this.exitGlow=this.glow(this.exitMesh,0,1.5,0,4,7134652,.25),e.add(this.exitMesh),this.pickupMeshes=new Map,this.projectileMeshes=new Map,this.pulseMeshes=new Map,this.enemyMeshes=t.enemies.map(f=>this.makeEnemy(f)),this.camX=t.player.x,this.camZ=t.player.z,this.batchStatic()}batchStatic(){this.world.updateMatrixWorld(!0);let t=new Map,e=new Set;this.keyMesh.traverse(n=>e.add(n)),this.exitMesh.traverse(n=>e.add(n)),e.add(this.keyRing),this.world.traverse(n=>{if(!n.isMesh||e.has(n)||Array.isArray(n.material)||n.material.transparent||n.material.map||!Array.from(this.materials.values()).includes(n.material))return;let i=n.material.uuid;t.has(i)||t.set(i,{mat:n.material,meshes:[]}),t.get(i).meshes.push(n)});for(let{mat:n,meshes:i}of t.values()){if(i.length<2)continue;let r=i.map(o=>{let l=o.geometry.clone().applyMatrix4(o.matrixWorld);return l.deleteAttribute("uv"),l.index?l.toNonIndexed():l}),a=Cu(r);if(a){let o=new Te(a,n);o.castShadow=!0,o.receiveShadow=!0,this.world.add(o),i.forEach(l=>{l.removeFromParent(),l.geometry.dispose()})}r.forEach(o=>o.dispose())}}removeDynamic(t){t.removeFromParent(),t.traverse(e=>{e.geometry?.dispose(),e.material&&!Array.from(this.materials.values()).includes(e.material)&&e.material.dispose()})}burst(t,e,n=!1){for(let r=0;r<(n?26:15);r++){let a=this.mesh(new fs(.05+Math.random()*.1,0),this.mat(r%3?16768913:9165775,.5,1),this.scene,t,.4+Math.random(),e);this.effects.push({mesh:a,vx:(Math.random()-.5)*5,vz:(Math.random()-.5)*5,vy:2+Math.random()*3,life:.55+Math.random()*.4,max:1})}let i=this.ring(.5,n?16763257:16770983,.8);i.position.set(t,.1,e),this.scene.add(i),this.effects.push({mesh:i,ring:!0,life:.5,max:.5,vx:0,vz:0,vy:0})}updateBeam(t){let e=t.player,n=t.range,i=this.cone.geometry.attributes.position,r=this.cone.geometry.attributes.uv,a=e.x+Math.sin(e.angle)*.65+Math.cos(e.angle)*.3,o=e.z+Math.cos(e.angle)*.65-Math.sin(e.angle)*.3;i.setXYZ(0,a,1.03,o),r.setXY(0,0,0);for(let l=0;l<=52;l++){let h=e.angle+(l/52*2-1)*t.halfAngle,f=n,d=Math.sin(h),c=Math.cos(h);for(let u of t.obstacles){let p=0,y=n;for(let[g,m,b,E]of[[a,d,u.x-u.w/2,u.x+u.w/2],[o,c,u.z-u.d/2,u.z+u.d/2]])if(Math.abs(m)<1e-8){if(g<b||g>E){p=n+1;break}}else{let M=(b-g)/m,A=(E-g)/m;p=Math.max(p,Math.min(M,A)),y=Math.min(y,Math.max(M,A))}p<=y&&p<f&&(f=Math.max(.01,p))}i.setXYZ(l+1,a+d*f,.08,o+c*f),r.setXY(l+1,l/52*2-1,1)}i.needsUpdate=!0,r.needsUpdate=!0,this.spot.position.set(a,1.25,o),this.spot.target.position.set(a+Math.sin(e.angle)*6,.01,o+Math.cos(e.angle)*6),this.spot.angle=t.halfAngle,this.cone.visible=t.lit,this.spot.intensity=t.lit?90:4,this.heroGlow.material.opacity=t.lit?.85:.25}render(t,e,n=!1){let i=t.player,r=t.time;this.hero.position.set(i.x,0,i.z),this.hero.rotation.y=i.angle;let a=n?!1:Math.hypot(i.x-(this.lastX??i.x),i.z-(this.lastZ??i.z))>.001;this.lastX=i.x,this.lastZ=i.z,this.hero.userData.body.position.y=a?Math.sin(r*17)*.045:Math.sin(r*2)*.012,this.heroLegs.forEach((d,c)=>d.rotation.x=a?Math.sin(r*17+c*Math.PI)*.55:0),this.hero.visible=!(i.invulnerable>0&&Math.floor(r*13)%2&&i.hp<5),this.personal.position.set(i.x,2.3,i.z),this.aimRing.position.set(i.x,.035,i.z),this.aimRing.material.opacity=.2+Math.sin(r*2)*.04;for(let d=0;d<t.enemies.length;d++){let c=t.enemies[d],u=this.enemyMeshes[d];u.position.set(c.x,0,c.z),u.rotation.y=c.angle;let p=u.userData;if(u.visible=c.death<.45,c.hp<=0){u.scale.setScalar(p.base*Math.max(.001,1-c.death/.45)),u.position.y=c.death*.8;continue}u.scale.setScalar(p.base),p.body.position.y=p.floating?.25+Math.sin(r*3+c.phase)*.16:Math.sin(r*(c.state==="hunt"?9:3)+c.phase)*.055,p.body.rotation.z=Math.sin(r*5+c.phase)*.04*(c.exposure>0?2:1),p.limbs.forEach((g,m)=>g.rotation.x=Math.sin(r*7+c.phase+m*Math.PI)*.3);let y=["windup","cast","puff"].includes(c.state);p.warn.visible=y,p.warn.scale.setScalar((1+(1-c.timer/(c.maxTimer||1))*.8)/p.base),p.eyes.forEach(g=>g.material.color.set(y?16741981:Ln[c.type].glow)),c.type==="spore"&&p.body.scale.setScalar(y?1+Math.sin(r*15)*.06:1)}Au(this,t),this.updateBeam(t),this.keyMesh.visible=t.keyAvailable&&!t.hasKey,this.keyRing.visible=this.keyMesh.visible,this.keyMesh.position.y=1.3+Math.sin(r*3)*.18,this.keyMesh.rotation.y=r*1.5,this.exitRing.material.opacity=t.hasKey?.6:.12,this.exitGlow.material.opacity=t.hasKey?.7:.08;for(let d=0;d<t.pickups.length;d++){let c=t.pickups[d],u=this.pickupMeshes.get(d);if(!u){u=new ae;let p=c.type==="heal"?14972774:15517297;c.type==="heal"?(this.box(u,0,.3,0,.45,.45,.22,11422787),this.box(u,0,.33,.12,.09,.29,.02,16769742),this.box(u,0,.33,.13,.29,.09,.02,16769742)):(this.cylinder(u,0,.33,0,.14,.14,.5,p,8),this.cylinder(u,0,.6,0,.07,.07,.07,13618881,8)),this.glow(u,0,.3,0,1.4,p,.36),this.world.add(u),this.pickupMeshes.set(d,u)}u.visible=!c.taken,u.position.set(c.x,.18+Math.sin(r*3+d)*.1,c.z),u.rotation.y=r}for(let d=this.effects.length-1;d>=0;d--){let c=this.effects[d];if(c.life-=e,c.life<=0){this.removeDynamic(c.mesh),this.effects.splice(d,1);continue}c.ring?(c.mesh.scale.multiplyScalar(1+e*6),c.mesh.material.opacity=c.life):(c.mesh.position.x+=c.vx*e,c.mesh.position.z+=c.vz*e,c.mesh.position.y+=c.vy*e,c.vy-=e*8,c.mesh.scale.setScalar(Math.min(1,c.life*3)))}let o=1-Math.exp(-e*5),l=n?i.x-3:ke(i.x,-16,16),h=n?i.z:ke(i.z,-18,18);this.camX+=(l-this.camX)*o,this.camZ+=(h-this.camZ)*o;let f=t.flash>0?t.flash*.13:0;this.camera.position.set(this.camX+Math.sin(r*81)*f,27,this.camZ+19),this.camera.lookAt(this.camX,0,this.camZ-2),this.renderer.render(this.scene,this.camera)}resize(){let t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1);let n=t/e,i=(n<1?25:22)/Sr;this.camera.left=-i*n/2,this.camera.right=i*n/2,this.camera.top=i/2,this.camera.bottom=-i/2,this.camera.updateProjectionMatrix()}};var Lo=class{constructor(t){if(this.canvas=t,this.ctx=t.getContext("2d"),!this.ctx)throw Error("Canvas is unavailable");this.effects=[],this.camX=1,this.camZ=8,this.resize(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize())}resize(){this.w=innerWidth,this.h=innerHeight;let t=Math.min(devicePixelRatio,1.5);this.canvas.width=Math.round(this.w*t),this.canvas.height=Math.round(this.h*t),this.ctx.setTransform(t,0,0,t,0,0),this.scale=this.h*Sr/(innerWidth>innerHeight?23:29)}build(t){this.game=t,this.effects=[],this.camX=t.player.x,this.camZ=t.player.z,this.bg=document.createElement("canvas"),this.bg.width=2200,this.bg.height=2300;let e=this.bg.getContext("2d"),n=xn(t.config.seed),i=t.config.theme;e.fillStyle=i.floor,e.fillRect(0,0,2200,2300);for(let a=0;a<34e3;a++)e.fillStyle=a%3?"#9aab8b0a":"#06192016",e.fillRect(n()*2200,n()*2300,n()*4+1,n()*4+1);e.save(),e.translate(1100,1150),e.scale(40,40*.8);for(let a of t.config.rooms)br(e,a,i,n);for(let a=0;a<90;a++){let o=(n()-.5)*37,l=(n()-.5)*41;e.strokeStyle="#122a2d65",e.lineWidth=.025,e.beginPath(),e.moveTo(o,l),e.lineTo(o+.7,l+.3),e.lineTo(o+.5,l+1),e.stroke()}for(let a of t.obstacles)e.fillStyle="#030d1666",e.fillRect(a.x-a.w/2+.1,a.z-a.d/2+.1,a.w,a.d+.32),a.kind==="wall"?(e.fillStyle=i.wall,e.fillRect(a.x-a.w/2,a.z-a.d/2,a.w,a.d),e.fillStyle=i.cap,e.fillRect(a.x-a.w/2,a.z-a.d/2-.14,a.w,a.d-.04),e.strokeStyle="#152b3377",e.lineWidth=.055,e.strokeRect(a.x-a.w/2,a.z-a.d/2-.14,a.w,a.d-.04)):Lc(this,e,a,i,n);let r=["#2a4436","#35543b","#3d6144","#23463b"];for(let a of t.config.rooms)for(let o=0;o<(["court","greenhouse"].includes(i.id)?15:4);o++){let l=a.x+(n()-.5)*(a.w-1),h=a.z+(n()-.5)*(a.d-1),f=.1+n()*.16;e.fillStyle=r[o%4],e.beginPath(),e.ellipse(l,h,f,f*.5,n()*3,0,Math.PI*2),e.fill()}e.fillStyle="#b8b2c080",e.font="bold .7px sans-serif",e.textAlign="center",e.fillText("STAY IN LIGHT",t.config.start.x,t.config.start.z-1.3);for(let{x:a,z:o}of t.config.lamps){let l=e.createRadialGradient(a,o,0,a,o,2.6);l.addColorStop(0,i.light+"47"),l.addColorStop(.4,i.light+"24"),l.addColorStop(1,i.light+"00"),e.fillStyle=l,e.beginPath(),e.arc(a,o,2.6,0,Math.PI*2),e.fill(),e.fillStyle="#18303a",e.fillRect(a-.06,o-1.6,.12,1.6),e.fillRect(a-.06,o-1.6,.6,.1),e.fillStyle=i.light,e.beginPath(),e.ellipse(a+.5,o-1.42,.2,.14,0,0,Math.PI*2),e.fill()}e.restore()}fence(t,e,n,i,r){let a=Math.hypot(i-e,r-n);t.strokeStyle="#71858988",t.lineWidth=.035,t.beginPath(),t.moveTo(e,n),t.lineTo(i,r),t.moveTo(e,n-.8),t.lineTo(i,r-.8),t.stroke();for(let o=0;o<a;o+=.45){let l=e+(i-e)*o/a,h=n+(r-n)*o/a;t.beginPath(),t.moveTo(l,h),t.lineTo(l+.35,h-.8),t.moveTo(l,h-.8),t.lineTo(l+.35,h),t.stroke()}for(let o=0;o<a;o+=2.5){let l=e+(i-e)*o/a,h=n+(r-n)*o/a;t.strokeStyle="#718b8f",t.lineWidth=.12,t.beginPath(),t.moveTo(l,h+.2),t.lineTo(l,h-1.1),t.stroke()}}crate(t,e){let{x:n,z:i,w:r,d:a}=e;t.fillStyle="#5a4938",t.fillRect(n-r/2,i-a/2,r,a),t.fillStyle="#7e684a",t.fillRect(n-r/2,i-a/2-.2,r,a-.2),t.strokeStyle="#ad9164",t.lineWidth=.1,t.strokeRect(n-r/2+.1,i-a/2-.1,r-.2,a-.4),t.beginPath(),t.moveTo(n-r/2+.12,i-a/2-.1),t.lineTo(n+r/2-.12,i+a/2-.5),t.stroke(),t.strokeStyle="#403b31",t.lineWidth=.03;for(let o=-r/2+.4;o<r/2;o+=.3)t.beginPath(),t.moveTo(n+o,i-a/2),t.lineTo(n+o,i+a/2-.4),t.stroke()}car(t,e){let{x:n,z:i,w:r,d:a}=e;t.save(),t.translate(n,i),t.fillStyle="#0b1722";for(let o of[-1,1])for(let l of[-1,1])t.fillRect(o*r*.32-.25,l*a*.49-.2,.5,.4);t.fillStyle="#34566c",this.round(t,-r/2,-a/2,r,a,.3),t.fillStyle="#527084",this.round(t,-r/2+.1,-a/2-.15,r-.2,a-.15,.24),t.fillStyle="#16323e",this.round(t,-.8,-a/2,.3,a-.4,.06),this.round(t,.55,-a/2,.35,a-.4,.06),t.fillStyle="#354d60",this.round(t,-.46,-a/2-.12,.93,a-.15,.12),t.strokeStyle="#889587",t.lineWidth=.055,t.strokeRect(-r/2+.2,-a/2+.1,r-.4,a-.55),t.fillStyle="#f2d79c";for(let o of[-.63,.43])t.fillRect(r/2-.1,o,.1,.25);t.fillStyle="#ad5d51";for(let o of[-.63,.43])t.fillRect(-r/2-.01,o,.1,.25);t.restore()}round(t,e,n,i,r,a){t.beginPath(),t.roundRect(e,n,i,r,a),t.fill()}pos(t,e,n=0){return{x:this.w/2+(t-this.camX)*this.scale,y:this.h*.52+(e-this.camZ)*this.scale*.8-n*this.scale}}shadow(t,e,n){let i=this.ctx,r=this.pos(t,e);i.fillStyle="#010c176d",i.beginPath(),i.ellipse(r.x,r.y+this.scale*.17,n*this.scale,n*this.scale*.48,0,0,Math.PI*2),i.fill()}halo(t,e,n,i="#ffce72"){let r=this.ctx,a=r.createRadialGradient(t,e,0,t,e,n);a.addColorStop(0,i+"b0"),a.addColorStop(.25,i+"48"),a.addColorStop(1,i+"00"),r.fillStyle=a,r.beginPath(),r.arc(t,e,n,0,Math.PI*2),r.fill()}actor(t,e,n){if(!e&&["wisp","stalker","spore"].includes(t.type)){this.specialActor(t,n);return}let i=this.ctx,r=this.scale*(e?1:t.type==="brute"?1.7:t.type==="skitter"?.73:1);this.shadow(t.x,t.z,e?.62:t.r*1.3);let a=this.pos(t.x,t.z);i.save(),i.translate(a.x,a.y),i.scale(r,r);let o=Math.sin(n*(e?7:5)+(t.phase||0))*.035;i.translate(0,o),t.hp<=0&&(i.globalAlpha=ke(1-t.death/.5,0,1),i.scale(Math.max(.01,1-t.death),Math.max(.01,1-t.death)));let l=Math.sin(t.angle),h=Math.cos(t.angle),f=e?"#324b62":t.exposure>.1?"#455c5c":t.type==="brute"?"#444d50":"#1b2c39";i.fillStyle="#0b1925";for(let u of[-.2,.2])i.beginPath(),i.ellipse(u,.05,.17,.19,0,0,Math.PI*2),i.fill();if(i.fillStyle=f,i.beginPath(),i.ellipse(0,-.37,.38,.43,0,0,Math.PI*2),i.fill(),i.strokeStyle=e?"#476179":f,i.lineWidth=.21,i.lineCap="round",i.beginPath(),i.moveTo(-.3,-.53),i.lineTo(-.46,-.13),i.moveTo(.3,-.53),i.lineTo(.47,-.18),i.stroke(),!e){i.strokeStyle="#526569",i.lineWidth=.06;for(let u of[-.47,.47])for(let p=0;p<3;p++)i.beginPath(),i.moveTo(u+(p-1)*.09,-.17),i.lineTo(u+(p-1)*.13,.02),i.stroke()}i.fillStyle=e?"#deb691":f;let d=l*.08,c=-.86+h*.03;if(i.beginPath(),i.ellipse(d,c,.34,.33,0,0,Math.PI*2),i.fill(),e){i.fillStyle="#262f34",i.beginPath(),i.ellipse(d-.035,c-.12,.36,.25,-.2,0,Math.PI*2),i.fill(),i.fillStyle="#a88255",i.fillRect(-.28,-.68,.13,.49),i.fillStyle="#17212c",i.beginPath(),i.arc(d+.13,c+.04,.025,0,Math.PI*2),i.fill();let u=l*.68+.18,p=-.48+h*.3;i.strokeStyle="#c6a681",i.lineWidth=.19,i.beginPath(),i.moveTo(.23,-.5),i.lineTo(u*.8,p),i.stroke(),i.strokeStyle="#253c4b",i.lineWidth=.19,i.beginPath(),i.moveTo(u-l*.2,p-h*.1),i.lineTo(u+l*.25,p+h*.15),i.stroke(),i.fillStyle="#ffefb8",i.beginPath(),i.ellipse(u+l*.27,p+h*.16,.12,.1,-t.angle,0,Math.PI*2),i.fill()}else{for(let u of[-.14,.14])i.fillStyle=t.state==="windup"?"#ff8467":"#ffedb0",i.shadowColor=i.fillStyle,i.shadowBlur=10,i.beginPath(),i.ellipse(d+u+l*.06,c+.07,.055,.09,-l*.2,0,Math.PI*2),i.fill();i.shadowBlur=0,t.type==="brute"&&(i.fillStyle="#7a8178",i.beginPath(),i.ellipse(-.1,-1.1,.2,.085,-.2,0,Math.PI*2),i.fill())}if(i.restore(),t.state==="windup"){let u=this.pos(t.x,t.z);i.strokeStyle="#ff8169",i.lineWidth=2,i.beginPath(),i.ellipse(u.x,u.y,this.scale*(t.r+.35),this.scale*(t.r+.35)*.7,0,0,Math.PI*2),i.stroke()}}specialActor(t,e){let n=Ln[t.type],i=this.ctx,r=this.scale*n.scale,a=this.pos(t.x,t.z),o=["cast","puff","windup"].includes(t.state);this.shadow(t.x,t.z,t.r*1.3),i.save(),i.translate(a.x,a.y),i.scale(r,r),i.globalAlpha=t.hp<=0?ke(1-t.death/.5,0,1):1;let l=(d,c,u,p,y)=>{i.fillStyle=y,i.beginPath(),i.ellipse(d,c,u,p,0,0,Math.PI*2),i.fill()},h=-.8,f=Math.sin(t.angle)*.07;if(t.type==="wisp"){i.translate(0,-.2-Math.sin(e*3+t.phase)*.13);for(let d=0;d<3;d++){let c=(d-1)*.18;i.fillStyle=n.glow,i.beginPath(),i.moveTo(c-.1,-.55),i.quadraticCurveTo(c+.12+Math.sin(e*4+d)*.06,-.12,c,-.02),i.lineTo(c+.1,-.6),i.fill()}l(0,-.81,.39,.43,n.skin),l(f,-.76,.27,.24,"#173047")}else if(t.type==="stalker"){i.strokeStyle=n.skin,i.lineWidth=.12,i.lineCap="round";for(let d of[-1,1])for(let c of[-1,1]){let u=Math.sin(e*8+c+d)*.055;i.beginPath(),i.moveTo(d*.3,-.37+c*.12),i.lineTo(d*.57,-.28+c*.25),i.lineTo(d*.65+u,.05+c*.22),i.stroke(),l(d*.65+u,.05+c*.22,.14,.07,"#756889")}l(0,-.38,.43,.23,n.skin),l(f,-.65,.27,.28,n.skin);for(let d of[-1,1])i.beginPath(),i.moveTo(d*.16,-.8),i.lineTo(d*.35,-1.04),i.lineTo(d*.29,-.7),i.fill();h=-.62}else{l(-.25,.03,.26,.1,n.skin),l(.25,.03,.26,.1,n.skin),i.fillStyle="#819674",i.fillRect(-.18,-.77,.36,.76);let d=o?Math.sin(e*15)*.045:0;l(0,-.76,.51,.13,"#adba82"),l(0,-.95,.63+d,.26,n.skin);for(let c=0;c<6;c++){let u=c*Math.PI/3;l(Math.sin(u)*.38,-1.01+Math.cos(u)*.12,.055,.035,n.glow)}h=-.62}for(let d of[-1,1])i.shadowColor=o?"#ff8467":n.glow,i.shadowBlur=10,l(f+d*.12,h,.05,.075,o?"#ff8467":n.glow);if(i.shadowBlur=0,i.restore(),o){let d=1-t.timer/(t.maxTimer||1),c=this.scale*(t.r+.35+d*.6);i.strokeStyle="#ff957b",i.lineWidth=2,i.beginPath(),i.ellipse(a.x,a.y,c,c*.8,0,0,Math.PI*2),i.stroke()}}attacks(t){let e=this.ctx;for(let n of t.projectiles){let i=this.pos(n.x,n.z,.66);this.halo(i.x,i.y,this.scale*.6,"#80dcff"),e.fillStyle="#b1efff",e.beginPath(),e.arc(i.x,i.y,n.r*this.scale,0,Math.PI*2),e.fill()}e.save(),e.strokeStyle="#b9ee89",e.lineWidth=3;for(let n of t.pulses){e.globalAlpha=.9-n.radius/n.maxRadius*.55,e.beginPath();let i=!1;for(let r=0;r<=64;r++){let a=r/64*Math.PI*2,o={x:n.x+Math.sin(a)*n.radius,z:n.z+Math.cos(a)*n.radius};if(!be(n,o,t.obstacles)){i=!1;continue}let l=this.pos(o.x,o.z,.15);i?e.lineTo(l.x,l.y):e.moveTo(l.x,l.y),i=!0}e.stroke()}e.restore()}beam(t){if(!t.lit)return;let e=this.ctx,n=t.player,i=this.pos(n.x,n.z,.47),r=[];for(let o=0;o<=50;o++){let l=n.angle+(o/50*2-1)*t.halfAngle,h=Math.sin(l),f=Math.cos(l),d=t.range;for(let c of t.obstacles){let u=0,p=d;for(let[y,g,m,b]of[[n.x,h,c.x-c.w/2,c.x+c.w/2],[n.z,f,c.z-c.d/2,c.z+c.d/2]])if(Math.abs(g)<1e-8){if(y<m||y>b){u=d+1;break}}else{let E=(m-y)/g,M=(b-y)/g;u=Math.max(u,Math.min(E,M)),p=Math.min(p,Math.max(E,M))}u<=p&&u<d&&(d=Math.max(.01,u))}r.push(this.pos(n.x+h*d,n.z+f*d))}e.save(),e.beginPath(),e.moveTo(i.x,i.y),r.forEach(o=>e.lineTo(o.x,o.y)),e.closePath();let a=e.createRadialGradient(i.x,i.y,0,i.x,i.y,t.range*this.scale);a.addColorStop(0,"#fff3bcb0"),a.addColorStop(.18,"#ffdb7d65"),a.addColorStop(.65,"#eac67725"),a.addColorStop(1,"#eac67700"),e.fillStyle=a,e.globalCompositeOperation="screen",e.fill(),e.restore(),this.halo(i.x,i.y,this.scale*1.8,"#ffde8d")}burst(t,e,n){for(let i=0;i<(n?25:13);i++)this.effects.push({x:t,z:e,y:.5,vx:(Math.random()-.5)*6,vz:(Math.random()-.5)*6,vy:2+Math.random()*2,life:.7+Math.random()*.3})}render(t,e,n){let i=t.player,r=t.time,a=1-Math.exp(-e*5);this.camX+=((n?i.x-3:ke(i.x,-16,16))-this.camX)*a,this.camZ+=((n?i.z:ke(i.z,-18,18))-this.camZ)*a;let o=this.ctx;o.clearRect(0,0,this.w,this.h),o.fillStyle="#162a35",o.fillRect(0,0,this.w,this.h);let l=this.pos(0,0),h=this.scale/40;o.drawImage(this.bg,l.x-this.bg.width*h/2,l.y-this.bg.height*h/2,this.bg.width*h,this.bg.height*h);let f=this.pos(t.config.exit.x,t.config.exit.z);o.strokeStyle=t.hasKey?"#91e6c2":"#527d76",o.lineWidth=3,o.beginPath(),o.ellipse(f.x,f.y,this.scale*1.5,this.scale*.8,0,0,Math.PI*2),o.stroke(),o.fillStyle="#a2e2cb",o.textAlign="center",o.font=`bold ${this.scale*.48}px sans-serif`,o.fillText("EXIT \u2192",f.x,f.y-this.scale*1.3),t.hasKey&&this.halo(f.x,f.y,this.scale*2,"#82edc0"),this.beam(t),this.attacks(t);for(let c of t.pickups){if(c.taken)continue;let u=this.pos(c.x,c.z,.3);this.halo(u.x,u.y,this.scale*.8,c.type==="heal"?"#f59382":"#ead387"),o.fillStyle=c.type==="heal"?"#b85951":"#d4b570",o.fillRect(u.x-5,u.y-7,10,14),o.fillStyle="#fff1c8",o.font="bold 12px sans-serif",o.fillText(c.type==="heal"?"+":"\u2212",u.x,u.y+4)}let d=[...t.enemies.filter(c=>c.death<.5),{...i,hero:!0}].sort((c,u)=>c.z-u.z);for(let c of d)c.hero&&i.invulnerable>0&&i.hp<5&&Math.floor(r*13)%2||this.actor(c,c.hero,r);if(t.keyAvailable&&!t.hasKey){let c=this.pos(t.config.key.x,t.config.key.z,.7+Math.sin(r*3)*.15);this.halo(c.x,c.y,this.scale*1.5),o.strokeStyle="#ffdf82",o.lineWidth=3,o.beginPath(),o.arc(c.x,c.y-7,5,0,Math.PI*2),o.moveTo(c.x,c.y-2),o.lineTo(c.x,c.y+11),o.lineTo(c.x+6,c.y+11),o.stroke()}for(let c=this.effects.length-1;c>=0;c--){let u=this.effects[c];if(u.life-=e,u.life<=0){this.effects.splice(c,1);continue}u.x+=u.vx*e,u.z+=u.vz*e,u.y+=u.vy*e,u.vy-=e*7;let p=this.pos(u.x,u.z,u.y);o.globalAlpha=u.life,o.fillStyle="#ffe5a5",o.fillRect(p.x-2,p.y-2,4,4)}o.globalAlpha=1}};var Do=class{constructor(){this.keys=new Set,this.x=0,this.z=0,this.light=!1,this.aim=null,this.dash=!1,this.moveId=null,this.aimId=null,this.onAction=()=>{};let t=document.querySelector("#move"),e=document.querySelector("#knob"),n=document.querySelector("#light"),i=a=>{let o=t.getBoundingClientRect(),l=a.clientX-o.left-o.width/2,h=a.clientY-o.top-o.height/2,f=o.width*.32,d=Math.hypot(l,h),c=d>f?f/d:1;this.x=l*c/f,this.z=h*c/f,e.style.transform=`translate(${l*c}px,${h*c}px)`};t.addEventListener("pointerdown",a=>{this.moveId===null&&(this.moveId=a.pointerId,t.setPointerCapture(a.pointerId),i(a),a.preventDefault())}),t.addEventListener("pointermove",a=>{a.pointerId===this.moveId&&i(a)});let r=a=>{a.pointerId===this.moveId&&(this.moveId=null,this.x=this.z=0,e.style.transform="")};for(let a of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(a,r);n.addEventListener("pointerdown",a=>{this.aimId=a.pointerId,this.aimStart={x:a.clientX,y:a.clientY},this.dragged=!1,n.setPointerCapture(a.pointerId),a.preventDefault()}),n.addEventListener("pointermove",a=>{if(a.pointerId!==this.aimId)return;let o=a.clientX-this.aimStart.x,l=a.clientY-this.aimStart.y;Math.hypot(o,l)>13&&(this.dragged=!0,this.light=!0,this.aim=Math.atan2(o,l))}),n.addEventListener("pointerup",a=>{a.pointerId===this.aimId&&(this.dragged||(this.light=!this.light),this.aim=null,this.aimId=null)}),n.addEventListener("pointercancel",()=>{this.aim=null,this.aimId=null}),n.addEventListener("click",a=>{a.detail===0&&(this.light=!this.light)}),document.querySelector("#dash").addEventListener("pointerdown",a=>{this.dash=!0,a.preventDefault()}),document.querySelector("#dash").addEventListener("click",a=>{a.detail===0&&(this.dash=!0)}),window.addEventListener("keydown",a=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),this.keys.add(a.code),!a.repeat&&(a.code==="KeyF"&&(this.light=!this.light),(a.code==="ShiftLeft"||a.code==="ShiftRight")&&(this.dash=!0),a.code==="Escape"&&this.onAction("pause"),a.code==="KeyQ"&&this.onAction("heal"),a.code==="KeyE"&&this.onAction("cell"))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),document.addEventListener("contextmenu",a=>a.preventDefault());for(let a of["gesturestart","gesturechange","gestureend"])document.addEventListener(a,o=>o.preventDefault(),{passive:!1});document.addEventListener("touchmove",a=>{a.target.closest(".modal-card")||a.preventDefault()},{passive:!1})}read(){let t=this.x+(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),e=this.z+(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0),n={x:t,z:e,aim:this.aim,light:this.light||this.keys.has("Space"),dash:this.dash};return this.dash=!1,n}reset(){this.keys.clear(),this.x=this.z=0,this.light=!1,this.aim=null,this.dash=!1,this.moveId=this.aimId=null,document.querySelector("#knob").style.transform=""}};var No=class{constructor(){this.enabled=!1,this.ctx=null,this.time=0,this.step=0}start(){try{this.ctx||=new(window.AudioContext||window.webkitAudioContext),this.ctx.resume().catch(()=>{})}catch{}}toggle(){return this.enabled=!this.enabled,this.enabled&&this.start(),this.enabled}tone(t,e=.12,n="sine",i=.08,r=t){if(!this.enabled||!this.ctx)return;let a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(t,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+e),l.gain.setValueAtTime(.001,a),l.gain.linearRampToValueAtTime(i,a+.01),l.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(this.ctx.destination),o.start(a),o.stop(a+e+.02)}play(t){t==="kill"?(this.tone(580,.16,"triangle",.07,1100),this.tone(190,.1,"sine",.08,60)):t==="hurt"?this.tone(160,.24,"sawtooth",.045,50):t==="dash"?this.tone(450,.17,"triangle",.035,75):["key","heal","cell","pickup"].includes(t)?(this.tone(660,.18,"sine",.07,880),this.tone(1320,.35,"sine",.035,1760)):t==="clear"?[440,554,659,880].forEach((e,n)=>this.tone(e,.6+n*.12,"triangle",.035)):t==="windup"?this.tone(95,.4,"sawtooth",.026,180):t==="shot"?this.tone(540,.3,"sine",.035,180):t==="pulse"?this.tone(110,.45,"triangle",.035,60):t==="stagger"||t==="extinguish"?this.tone(920,.12,"triangle",.035,1400):t==="empty"&&this.tone(160,.15,"square",.025,90)}tick(t,e){if(!(!this.enabled||!e)&&(this.time+=t,this.time>1.2)){this.time=0;let n=[110,0,164.81,0,130.81,0,146.83,164.81],i=n[this.step++%n.length];i&&this.tone(i,.85,"sine",.016)}}};var x0=[{id:"power",title:"\u9AD8\u51FA\u529B\u30EC\u30F3\u30BA",desc:"\u5149\u306E\u30C0\u30E1\u30FC\u30B8 +35%"},{id:"range",title:"\u30ED\u30F3\u30B0\u30D3\u30FC\u30E0",desc:"\u5149\u304C\u5C4A\u304F\u8DDD\u96E2 +28%"},{id:"wide",title:"\u30EF\u30A4\u30C9\u30EA\u30D5\u30EC\u30AF\u30BF\u30FC",desc:"\u5E83\u3044\u5149\u3067\u7FA4\u308C\u3092\u72D9\u3048\u308B"},{id:"battery",title:"\u7701\u96FB\u529B\u30E6\u30CB\u30C3\u30C8",desc:"\u96FB\u6C60\u306E\u6D88\u8CBB \u221229%"},{id:"dash",title:"\u8EFD\u91CF\u30D6\u30FC\u30C4",desc:"\u30C0\u30C3\u30B7\u30E5\u306E\u5F85\u3061\u6642\u9593 \u221235%"}];function Ru(s,t,{modal:e,onNext:n,readSelection:i=()=>document.querySelector('input[name="stage-upgrade"]:checked')?.value}){if(s.stage>=an-1)throw new RangeError("The final floor has no next floor");let r=x0.filter(d=>!t.includes(d.id)).slice(0,3),a=s.stage+1,o=Math.floor(s.time/60),l=String(Math.floor(s.time%60)).padStart(2,"0"),h=`
    <div class="clear-stats">
      <span>\u9000\u6CBB\u3057\u305F\u5F71<strong>${s.kills} / ${s.config.count}</strong></span>
      <span>\u63A2\u7D22\u6642\u9593<strong>${o}:${l}</strong></span>
      <span>\u30B9\u30B3\u30A2<strong>${s.score.toLocaleString()}</strong></span>
    </div>
    ${r.length?`<fieldset class="upgrade-options">
      <legend>\u5F37\u5316\u30921\u3064\u9078\u3093\u3067\u3001\u6B21\u306E\u968E\u3078</legend>
      <div class="upgrade-grid">${r.map((d,c)=>`
        <label class="upgrade-choice">
          <input type="radio" name="stage-upgrade" value="${d.id}" ${c===0?"checked":""}>
          <span><strong>${d.title}</strong><small>${d.desc}</small></span>
        </label>`).join("")}
      </div>
    </fieldset>`:"<p>\u88C5\u5099\u306F\u3059\u3079\u3066\u5F37\u5316\u6E08\u307F\u3002\u6B21\u306E\u968E\u3078\u9032\u3082\u3046\u3002</p>"}
    <p class="clear-note">\u6B21\u306E\u968E\u3067\u4F53\u529B\u30FB\u30A2\u30A4\u30C6\u30E0\u304C\u88DC\u5145\u3055\u308C\u307E\u3059\u3002</p>`,f=!1;e("FLOOR CLEAR",`${s.stage+1}\u968E \u30AF\u30EA\u30A2\uFF01`,h,[[`\u6B21\u306E\u968E\u3078\uFF08${a+1} / ${an}\uFF09 \u2192`,()=>{if(f)return;let d=r.find(c=>c.id===i())||r[0];f=!0;try{n({stage:a,score:s.score,upgrades:d?[...t,d.id]:[...t]})}catch(c){throw f=!1,c}}]],"stage-clear")}var At=s=>document.querySelector(s),yc=Nc,xc=new Set,Iu={wisp:"\u9B3C\u706B\uFF1A\u9752\u3044\u5F3E\u306F\u5149\u3067\u6D88\u305B\u308B\u3002\u6E9C\u3081\u4E2D\u306E\u7167\u5C04\u3067\u653B\u6483\u3092\u6B62\u3081\u3088\u3046\u3002",stalker:"\u5FCD\u3073\u5F71\uFF1A\u6A2A\u3078\u56DE\u308A\u8FBC\u3093\u3067\u304F\u308B\u3002\u7A81\u9032\u306E\u4E88\u544A\u3092\u898B\u305F\u3089\u30C0\u30C3\u30B7\u30E5\u3002",spore:"\u80DE\u5B50\u30E9\u30F3\u30BF\u30F3\uFF1A\u7DD1\u306E\u6CE2\u306B\u6CE8\u610F\u3002\u6E9C\u3081\u4E2D\u306B\u5149\u3092\u5F53\u3066\u3066\u6B62\u3081\u3088\u3046\u3002"},vi,St,nn,_r,we="title",Pu="playing",Uo=performance.now(),ys=0,_c=0,gc=0,vs=[],Fo=Qn,vc=()=>{try{return Uc(localStorage.getItem(yc))}catch{return null}};function _0(s){try{localStorage.setItem(yc,JSON.stringify({stage:s,upgrades:vs,score:St.score,runSeed:Fo}))}catch{}}function y0(){try{localStorage.removeItem(yc)}catch{}}function Pn(s,t=3){At("#toast").textContent=s,At("#toast").style.opacity=1,_c=t}function Ms(s,t,e,n,i=""){let r=At("#modal");r.classList.toggle("stage-clear",i==="stage-clear"),r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","modal-heading"),At("#modal-body").scrollTop=0,At("#modal-eyebrow").textContent=s,At("#modal-heading").textContent=t,At("#modal-body").innerHTML=e,At("#modal-actions").replaceChildren();for(let[a,o]of n){let l=document.createElement("button");l.type="button",l.innerHTML=a,l.onclick=o,At("#modal-actions").append(l)}At("#modal").hidden=!1}function Oo(){At("#modal").hidden=!0}function Bo(s=0,t=0){nn.reset(),St=new Ss(s,vs,t,Fo),vi.build(St),we="playing",At("#title").hidden=!0,At("#hud").hidden=!1,Oo(),_0(s),_r.start(),Uo=performance.now(),ys=0,Pn(s===0?"\u5149\u3067\u9375\u3092\u63A2\u305D\u3046\u3002\u6575\u3092\u6B8B\u3057\u3066\u3082\u8131\u51FA\u3067\u304D\u308B\u3002":s+1+"\u968E \u2014 "+St.config.name,4),Uu()}function Du(){xc.clear(),vs=[],Fo=Fc(),Bo()}function zo(){we="title",nn.reset(),At("#hud").hidden=!0,At("#title").hidden=!1,Oo(),St=new Ss(0,[],0,Qn),St.player.angle=2.23,St.lit=!0,vi.build(St),At("#continue").hidden=!vc()}function xr(){we==="playing"?(we="paused",nn.reset(),Ms("TAKE A BREATH","\u3072\u3068\u3084\u3059\u307F","<p>\u5149\u3092\u6D88\u3057\u3066\u3044\u308B\u9593\u306F\u96FB\u6C60\u304C\u81EA\u52D5\u56DE\u5FA9\u3002<br>\u6575\u304C\u8D64\u304F\u5149\u3063\u305F\u3089\u3001\u30C0\u30C3\u30B7\u30E5\u3067\u6A2A\u306B\u304B\u308F\u305D\u3046\u3002</p>",[["\u63A2\u7D22\u306B\u3082\u3069\u308B",Lu],["\u3042\u305D\u3073\u304B\u305F",()=>Nu("paused")],["\u30BF\u30A4\u30C8\u30EB\u3078",zo]])):we==="paused"&&Lu()}function Lu(){we="playing",Oo(),Uo=performance.now(),ys=0}function Nu(s="title"){Pu=s,(we==="playing"||we==="paused")&&(we="paused",nn.reset()),Ms("HOW TO PLAY","\u5149\u3092\u3001\u5473\u65B9\u306B\u3002","<p><strong>\u2460 \u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5</strong><br>\u5468\u308A\u3092\u63A2\u3057\u3001\u5F71\u306E\u6575\u3092\u898B\u3064\u3051\u3088\u3046\u3002</p><p><strong>\u2461\u300C\u3066\u3089\u3059\u300D\u3092\u30BF\u30C3\u30D7\u3067 ON / OFF</strong><br>\u8FD1\u304F\u306E\u6575\u3092\u81EA\u52D5\u3067\u72D9\u3044\u307E\u3059\u3002\u30DC\u30BF\u30F3\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u3001\u305D\u306E\u65B9\u5411\u3092\u72D9\u3048\u307E\u3059\u3002\u6D88\u706F\u3059\u308B\u3068\u96FB\u6C60\u304C\u56DE\u5FA9\u3002</p><p><strong>\u2462 \u8D64\u3044\u4E88\u544A\u3092\u898B\u305F\u3089\u300C\u30C0\u30C3\u30B7\u30E5\u300D</strong><br>\u56DE\u907F\u4E2D\u306F\u7121\u6575\u3002\u5927\u578B\u306E\u6575\u306E\u7A81\u9032\u306B\u306F\u7279\u306B\u6CE8\u610F\uFF01</p><p><strong>\u2463 \u9375\u3092\u53D6\u308B \u2192 EXIT\uFF08\u6575\u306E\u5168\u6EC5\u306F\u4E0D\u8981\uFF09</strong><br>\u9375\u306F\u6700\u521D\u304B\u3089\u62FE\u3048\u307E\u3059\u3002\u4E00\u5EA6\u5149\u3092\u5F53\u3066\u308B\u3068\u30DF\u30CB\u30DE\u30C3\u30D7\u306B\u8A18\u9332\u3002\u6BCE\u968E\u5909\u308F\u308B\u8FF7\u5BAE\u3092999\u968E\u307E\u3067\u9032\u3082\u3046\u3002</p><p><strong>\u2464 6\u7A2E\u985E\u306E\u5F71\u3068\u300112\u7A2E\u985E\u306E\u666F\u89B3</strong><br>\u9752\u3044\u9B3C\u706B\u306E\u5F3E\u306F\u5149\u3067\u6D88\u305B\u307E\u3059\u3002\u7D2B\u306E\u5FCD\u3073\u5F71\u306F\u56DE\u308A\u8FBC\u307F\u3001\u7DD1\u306E\u80DE\u5B50\u30E9\u30F3\u30BF\u30F3\u306F\u5468\u56F2\u3078\u6CE2\u3092\u653E\u3061\u307E\u3059\u3002\u9B3C\u706B\u3068\u80DE\u5B50\u306E\u6E9C\u3081\u306F\u7167\u5C04\u3067\u4E2D\u65AD\u3067\u304D\u307E\u3059\u3002</p><p>PC\uFF1AWASD / \u77E2\u5370\u3067\u79FB\u52D5 \xB7 F\u3067\u70B9\u706F\u5207\u66FF<br>Space\u3067\u7167\u5C04 \xB7 Shift\u3067\u56DE\u907F \xB7 Q\u3067\u56DE\u5FA9 \xB7 E\u3067\u96FB\u6C60</p>",[["\u308F\u304B\u3063\u305F",()=>{Oo(),Pu==="paused"&&v0()}]])}function v0(){we="playing",xr()}function M0(){we="clear",nn.reset();let t=`<p>${St.stage+1}\u968E\u304B\u3089\u8131\u51FA\u3057\u305F\u3002</p><div class="score-row"><span>\u9000\u6CBB\u3057\u305F\u5F71</span><strong>${St.kills} / ${St.config.count}</strong></div><div class="score-row"><span>\u63A2\u7D22\u6642\u9593</span><strong>${Math.floor(St.time/60)}:${String(Math.floor(St.time%60)).padStart(2,"0")}</strong></div><div class="score-row"><span>\u30C8\u30FC\u30BF\u30EB\u30B9\u30B3\u30A2</span><strong>${St.score.toLocaleString()}</strong></div>`;St.isFinalFloor?(y0(),Ms("999 FLOORS CLEAR","999\u968E\u3001\u8E0F\u7834\uFF01",t+"<p>\u61D0\u4E2D\u96FB\u706F\u306E\u5C0F\u3055\u306A\u5149\u3067\u3001999\u306E\u8FF7\u5BAE\u3092\u629C\u3051\u51FA\u3057\u305F\u3002<br>\u304A\u3064\u304B\u308C\u3055\u307E\u3002\u307E\u305F\u6B21\u306E\u591C\u306B\u3002</p>",[["\u3082\u3046\u4E00\u5EA6\u3001\u591C\u306E\u63A2\u7D22\u3078",Du],["\u30BF\u30A4\u30C8\u30EB\u3078",zo]])):Ru(St,vs,{modal:Ms,onNext:e=>{vs=e.upgrades,Bo(e.stage,e.score)}})}function b0(){we="dead",nn.reset(),Ms("THE LIGHT WILL RETURN","\u3082\u3046\u4E00\u5EA6\u3001\u706F\u305D\u3046\u3002",`<p>\u6D88\u706F\u3067\u96FB\u6C60\u3092\u56DE\u5FA9\u3057\u306A\u304C\u3089\u3001\u6575\u3068\u306E\u8DDD\u96E2\u3092\u4FDD\u3068\u3046\u3002<br>\u5927\u578B\u306E\u6575\u306F\u3001\u7A81\u9032\u3092\u907F\u3051\u305F\u76F4\u5F8C\u304C\u30C1\u30E3\u30F3\u30B9\u3002</p><div class="score-row"><span>\u9000\u6CBB\u3057\u305F\u5F71</span><strong>${St.kills} / ${St.config.count}</strong></div>`,[["\u3053\u306E\u968E\u3092\u3084\u308A\u76F4\u3059",()=>{let s=vc();Bo(St.stage,s?.score||0)}],["\u30BF\u30A4\u30C8\u30EB\u3078",zo]])}function S0(){for(let s of St.events)_r.play(s.type),s.type==="alert"&&Iu[s.kind]&&!xc.has(s.kind)&&(xc.add(s.kind),Pn(Iu[s.kind],6)),(s.type==="extinguish"||s.type==="stagger")&&vi.burst(s.x,s.z,!1),s.type==="kill"&&vi.burst(s.x,s.z,s.brute),s.type==="keyReveal"&&Pn("\u9375\u3092\u767A\u898B\uFF01 \u30DF\u30CB\u30DE\u30C3\u30D7\u306B\u8A18\u9332\u3057\u305F\u3002",5),s.type==="key"&&Pn("\u9375\u3092\u624B\u306B\u5165\u308C\u305F\uFF01 \u7DD1\u8272\u306E EXIT \u3078\u3002",5),s.type==="empty"&&Pn("\u96FB\u6C60\u3092\u56DE\u5FA9\u4E2D\u2026 \u8DDD\u96E2\u3092\u3068\u308D\u3046\u3002",2),s.type==="bruteDown"&&Pn("\u5F71\u306E\u756A\u4EBA\u3092\u9000\u6CBB\u3057\u305F\uFF01",3),s.type==="heal"&&Pn("\u4F53\u529B\u304C\u56DE\u5FA9\u3057\u305F",1.5),s.type==="cell"&&Pn("\u96FB\u6C60\u3092\u88DC\u5145\u3057\u305F",1.5),s.type==="pickup"&&Pn(s.item==="heal"?"\u56DE\u5FA9\u30AD\u30C3\u30C8\u3092\u5165\u624B":s.item==="cell"?"\u4E88\u5099\u96FB\u6C60\u3092\u5165\u624B":"\u5149\u306E\u304B\u3051\u3089\u3067\u96FB\u6C60\u56DE\u5FA9",1.4),s.type==="clear"&&M0(),s.type==="dead"&&b0();St.events.length=0}function Uu(){let s=St.player;At("#hearts").innerHTML=Array.from({length:s.maxHp},(e,n)=>`<span class="${n<s.hp?"":"empty"}">\u2665</span>`).join(""),At("#hearts").setAttribute("aria-label",`\u4F53\u529B ${s.hp} / ${s.maxHp}`),At("#charge").style.width=s.battery+"%",At("#charge").style.background=St.exhausted?"#df7b61":"#f8d680",At("#charge-label").textContent=Math.ceil(s.battery)+"%",At("#kill-objective").textContent=`\u9000\u6CBB ${St.kills}/${St.config.count} \xB7 \u5168\u6EC5\u306F\u4E0D\u8981`,At("#kill-objective").className="",At("#key-objective").textContent=St.hasKey?"\u2713 \u9375\u3092\u5165\u624B\u3057\u305F":St.keyDiscovered?"\u25C7 \u9375\u306E\u5834\u6240\u3092\u767A\u898B\uFF01":"\u25C7 \u5149\u3092\u5F53\u3066\u3066\u9375\u3092\u63A2\u305D\u3046",At("#key-objective").className=St.hasKey?"done":"",At("#exit-objective").textContent=St.hasKey?"\u279C \u51FA\u53E3\u3078\u5411\u304B\u304A\u3046":"\u25C7 \u51FA\u53E3\u3078\u5411\u304B\u304A\u3046",At("#exit-objective").className=St.hasKey?"done":"",At("#area-number").textContent=`FLOOR ${String(St.stage+1).padStart(3,"0")} / ${an}`,At("#area-name").textContent=St.config.name,At("#light").classList.toggle("on",St.lit),At("#light-state").textContent=St.exhausted?"\u56DE\u5FA9\u4E2D\u2026":St.lit?"ON \xB7 \u81EA\u52D5\u3067\u72D9\u3046":"\u30BF\u30C3\u30D7\u3067 ON",At("#dash").classList.toggle("cooldown",s.dashCd>0),At("#dash-state").textContent=s.dashCd>0?s.dashCd.toFixed(1)+" s":"READY",At("#heal b").textContent=s.heal,At("#cell b").textContent=s.cells;let t=St.enemies.find(e=>e.type==="brute");At("#boss").hidden=!(t&&t.hp>0&&t.state!=="idle"),t&&(At("#boss b").style.width=Math.max(0,t.hp/t.maxHp*100)+"%"),T0()}function T0(){let s=At("#map"),t=s.getContext("2d"),e=s.width,n=s.height,i=Math.min((e-22)/40,(n-20)/44),r=e/2,a=n/2,o=(f,d)=>[r+f*i,a+d*i];t.clearRect(0,0,e,n),t.strokeStyle="#638182",t.lineWidth=1.5,t.strokeRect(r-19*i,a-21*i,38*i,42*i),t.fillStyle="#72858b55";for(let f of St.obstacles){let[d,c]=o(f.x-f.w/2,f.z-f.d/2);t.fillRect(d,c,f.w*i,f.d*i)}for(let f of St.enemies){if(f.hp<=0)continue;let[d,c]=o(f.x,f.z);t.fillStyle=["wisp","stalker","spore"].includes(f.type)?Ln[f.type].glow:f.type==="brute"?"#ef8f66":"#e36a6a",t.beginPath(),t.arc(d,c,f.type==="brute"?3.7:2.7,0,Math.PI*2),t.fill()}let[l,h]=o(St.config.exit.x,St.config.exit.z);t.strokeStyle=St.hasKey?"#90ebc2":"#59786e",t.lineWidth=2,t.strokeRect(l-4,h-4,8,8),St.keyVisibleOnMap&&([l,h]=o(St.config.key.x,St.config.key.z),t.fillStyle="#ffe291",t.font="bold 14px sans-serif",t.fillText("\u26BF",l-5,h+5)),[l,h]=o(St.player.x,St.player.z),t.save(),t.translate(l,h),t.rotate(-St.player.angle),t.beginPath(),t.moveTo(0,6),t.lineTo(-4,-4),t.lineTo(0,-2),t.lineTo(4,-4),t.closePath(),t.fillStyle="#ffe6a5",t.fill(),t.restore()}function Fu(s){requestAnimationFrame(Fu);let t=Math.min((s-Uo)/1e3,.05);if(Uo=s,!!St){if(we==="playing"){for(ys+=t;ys>=1/60;)if(St.tick(1/60,nn.read()),S0(),ys-=1/60,we!=="playing"){ys=0;break}_r.tick(t,!0),_c-=t,_c<=0&&(At("#toast").style.opacity=0),gc-=t,gc<=0&&(gc=.08,Uu())}else we==="title"&&(St.time+=t,St.lit=!0,St.player.angle=2.23+Math.sin(St.time*.23)*.25);At("#hit-flash").style.opacity=St.flash>0?Math.min(.65,St.flash*2):0,vi.render(St,t,we==="title")}}try{try{vi=new Po(At("#game"))}catch{console.info("WebGL unavailable; using compatible Canvas renderer.");let t=At("#game"),e=t.cloneNode(!1);t.replaceWith(e),vi=new Lo(e)}nn=new Do,_r=new No,vi.onContextLost=()=>{we="paused",nn.reset(),Ms("DISPLAY PAUSED","\u753B\u9762\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u304C\u5FC5\u8981\u3067\u3059","<p>\u3053\u306E\u968E\u306E\u9032\u884C\u306F\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p>",[["\u518D\u8AAD\u307F\u8FBC\u307F",()=>location.reload()]])},nn.onAction=s=>{s==="pause"?xr():we==="playing"&&(St.consume(s)||Pn(s==="heal"?"\u4F53\u529B\u6E80\u30BF\u30F3\u3001\u307E\u305F\u306F\u30AD\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093":"\u96FB\u6C60\u6E80\u30BF\u30F3\u3001\u307E\u305F\u306F\u4E88\u5099\u96FB\u6C60\u304C\u3042\u308A\u307E\u305B\u3093",1.5))},At("#start").onclick=Du,At("#continue").onclick=()=>{let s=vc();s&&(vs=s.upgrades,Fo=s.runSeed,Bo(s.stage,s.score))},At("#how").onclick=()=>Nu(),At("#pause").onclick=xr,At("#sound").onclick=()=>At("#sound").textContent=_r.toggle()?"SOUND ON":"SOUND OFF",At("#heal").onclick=()=>nn.onAction("heal"),At("#cell").onclick=()=>nn.onAction("cell"),At("#portrait").onclick=()=>At("#rotate").classList.add("dismissed"),document.addEventListener("visibilitychange",()=>{document.hidden&&we==="playing"&&xr()}),window.addEventListener("blur",()=>{we==="playing"&&xr()}),zo(),At("#loading").hidden=!0,requestAnimationFrame(Fu),"serviceWorker"in navigator&&location.hostname!=="localhost"&&location.hostname!=="127.0.0.1"&&navigator.serviceWorker.register("./sw.js").catch(()=>{})}catch(s){console.error(s),At("#loading").innerHTML='<strong>\u753B\u9762\u3092\u6E96\u5099\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F</strong><span>WebGL\u5BFE\u5FDC\u306ESafari / Chrome\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002</span><button onclick="location.reload()">\u3082\u3046\u4E00\u5EA6\u8AAD\u307F\u8FBC\u3080</button>'}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
