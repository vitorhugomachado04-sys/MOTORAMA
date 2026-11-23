(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _d="modulepreload",Md=function(i,t){return new URL(i,t).href},yl={},yd=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Md(l,n),l in yl)return;yl[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const x=o[p];if(x.href===l&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":_d,h||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((p,x)=>{u.addEventListener("load",p),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Vh=new URL(""+new URL("panorama-official-Bo5c5oU8.png",import.meta.url).href,import.meta.url).href;let gr;async function Sd(){gr=new Image,gr.src=Vh,await gr.decode()}function Xi(i,t,e,n,s){if(!gr)throw new Error("O logo Panorama ainda não carregou.");const r=546/131,o=Math.min(n,s*r),a=o/r;i.drawImage(gr,60,70,546,131,t+(n-o)/2,e+(s-a)/2,o,a)}function Br(i="official-logo"){return`<img class="${i}" src="${Vh}" alt="Panorama">`}const X={step:1/120,slowMotion:{scale:.35},gravity:14,drive:{acceleration:15.5,maxSpeed:28,brake:23,rollingDrag:.1,steering:1.9,steerResponse:5,arrowSteering:.35,maxLean:.43},bike:{halfWheelbase:.91,wheelRadius:.39,axleDrop:.35,inertia:.86,groundBarAngle:.24,whipBarAngle:.42,barResponse:10},suspension:{front:{spring:245,compressionDamping:15.5,reboundDamping:15.5,travel:.29},rear:{spring:130,compressionDamping:7,reboundDamping:10,travel:.36,progressiveStart:.18,progressiveSpring:1600},maxForce:200,pitchDamping:5.5},flip:{acceleration:11.4,maxRate:4.9,heldDamping:1.2,releaseDamping:5.8,naturalPitchResponse:1.45},airControl:{wheelLimit:140,throttleAcceleration:115,brakeDeceleration:260,inertiaRatio:.016,returnResponse:1.45,maxPitch:.28,smallJumpPitch:.2,smallJumpLift:7,fullJumpLift:12,whoopScale:.05},whip:{maxYaw:1.08,maxRoll:.68,attack:14,returnSpring:14,damping:6.6,maxRate:2.25},tricks:{enterTime:.32,returnTime:.26,spinDuration:1.75},manual:{minSpeed:4,angle:.42,response:6,returnResponse:8,balanceSpring:85,balanceDamping:14,maxGroundSlope:.4,carryTime:1.2,maxCarryHeight:4,whoopDrive:6,whoopMaxSpeed:31,frontDrag:1.8,minBalanceTime:.06},landing:{cleanPitch:.43,crashPitch:1.2,cleanYaw:.3,crashYaw:.9,crashRoll:.95,skidRetention:.8,respawnDelay:2.1},crash:{scatter:4.6,lift:4.8,momentum:.34,riderMomentum:.43,riderLift:6.2,bounce:.32,cameraDistance:1.5},effects:{cloudLimit:320,gritLimit:128,dustRate:42,dustLife:1.65,dustOpacity:.44,smokeIdleRate:12,smokeThrottleRate:20,smokeLife:1.4,smokeOpacity:.36},barriers:{halfTrack:7.3,whoopsHalfTrack:6.5,width:.92,height:.82,length:2.2,gap:.14,crashSpeed:10,rebound:.06,scrapeRetention:.94},assistance:{alignmentTolerance:.23,preparationDistance:5,maxReduction:.12,predictionMargin:.35,predictionStep:1/120},camera:{distance:7.3,height:3.6,lookAhead:7,idleDistance:3.5,idleHeight:5.5,idleSide:2.5,idleLookAhead:8.3,trickSide:1.6,fov:65}};let zt={north:74,south:-94,outerLane:80,returnZ:116,returnRadius:22,halfWidth:112,halfLength:142,trackWidth:13},zo=[-80,-48,-16,16,48,80],tn=[{id:"whip",name:"01 · WHIP LINE",x:-48,z:-55,heading:0,width:12,takeoff:{length:14,height:4.8,power:2.2,back:1.5},landing:{start:42.05,crest:45.55,end:59.05,height:3.8,width:13,power:2,crown:.9,usefulStart:46.25,endMargin:1.2},checkpoint:-24,color:"#c8ea91"},{id:"air",name:"02 · BIG AIR",x:-16,z:20,heading:Math.PI,width:12,takeoff:{length:14,height:8,power:2.2,back:1.5},landing:{start:56.35,crest:59.85,end:72.85,height:6,width:13,power:2,crown:1.1,usefulStart:60.65,endMargin:1.2},checkpoint:-40,color:"#aaa1dd"},{id:"table",type:"tabletop",name:"03 · MESA",x:16,z:-55,heading:0,width:12,takeoff:{length:14,height:4.8,power:2,back:0},landing:{start:14,crest:51,end:64,height:4.8,width:13,power:2,crown:1,usefulStart:51.7,endMargin:1.2},checkpoint:-24,color:"#b3c98d"},{id:"flow-north",type:"tabletop",name:"01B · MESA DE SAÍDA",x:-48,z:14,heading:0,width:12,takeoff:{length:10,height:1.6,power:2,back:0},landing:{start:10,crest:32,end:41,height:1.6,width:13,power:2,crown:.8,usefulStart:32.7,endMargin:1.2},checkpoint:-8,color:"#b3c98d"},{id:"table-link",type:"tabletop",name:"03B · MESA DE RITMO",x:16,z:20,heading:0,width:12,takeoff:{length:10,height:1.6,power:2,back:0},landing:{start:10,crest:32,end:41,height:1.6,width:13,power:2,crown:.8,usefulStart:32.7,endMargin:1.2},checkpoint:-8,color:"#b3c98d"},{id:"return-table",type:"tabletop",name:"06 · MESA DO RETORNO",x:-80,z:50,heading:Math.PI,width:12,takeoff:{length:12,height:2.6,power:2,back:0},landing:{start:12,crest:45,end:56,height:2.6,width:13,power:2,crown:.8,usefulStart:45.7,endMargin:1.2},checkpoint:-24,color:"#b3c98d"},{id:"finish-table",type:"tabletop",name:"06B · ÚLTIMA MESA",x:-80,z:-28,heading:Math.PI,width:12,takeoff:{length:10,height:1.6,power:2,back:0},landing:{start:10,crest:32,end:41,height:1.6,width:13,power:2,crown:.8,usefulStart:32.7,endMargin:1.2},checkpoint:-14,color:"#b3c98d"},{id:"big-table",type:"tabletop",name:"05 · MESA GRANDE",x:80,z:-48,heading:0,width:12,takeoff:{length:17,height:7.2,power:2.2,back:0},landing:{start:17,crest:60,end:76,height:7.2,width:13,power:2,crown:1.2,usefulStart:60.8,endMargin:1.2},checkpoint:-24,color:"#b3c98d"}],Ie=null,He={id:"rhythm",name:"04 · ONDULAÇÕES",x:48,z:44,heading:Math.PI,width:12,count:6,spacing:12,height:1.2,checkpoint:-12,color:"#d6b58a"};const Bn=(i,t,e,n,s)=>({id:i,x:t,z:e,radius:n,direction:s,inner:n-6,crest:n+7,outer:n+10.5,height:4.8,power:2,crown:1.6,entry:14,fullBank:14,ruts:[n-2,n+1,n+4],rutDepth:.055,rutWidth:.38});let zs=[Bn("north-west",-32,zt.north,16,1),Bn("south-middle",0,zt.south,16,-1),Bn("north-east",32,zt.north,16,1),Bn("south-east",64,zt.south,16,-1),{...Bn("return-east",58,94,22,1),angleStart:Math.PI/2,angleEnd:Math.PI,entry:18,fullBank:8},{...Bn("return-west",-58,94,22,1),angleStart:0,angleEnd:Math.PI/2,entry:18,fullBank:8},Bn("south-west",-64,zt.south,16,-1)];const Ze={color:"#a9613b",grain:"#cb9363",dust:"#8b5a35",textureScale:6},bd={name:"VITOR",number:"04"},Hh={id:"red-dirt",number:"03",name:"Terra Vermelha",tag:"TREINO AO AR LIVRE",theme:"outdoor",description:"Seis linhas de terra, ondulações e uma mesa grande de 7,2 m. Encontre seu ritmo.",arena:zt,lanes:zo,jumps:tn,whoops:Ie,rhythm:He,berms:zs},wd={id:"indoor",number:"01",name:"Panorama Indoor",tag:"SUPERCROSS",theme:"indoor",description:"Quatro linhas, curvas de apoio e arquibancadas. Só mais uma volta.",arena:{north:55,south:-75,halfWidth:85,halfLength:141,trackWidth:13},lanes:[-48,-16,16,48],jumps:[{...tn[0],z:-34},{...tn[1],checkpoint:-26},{...tn[2],z:-34}].map(i=>({...i,takeoff:{...i.takeoff},landing:{...i.landing}})),whoops:{id:"whoops",name:"04 · COSTELINHAS",x:48,z:30,heading:Math.PI,width:12,count:13,spacing:4.6,height:.55,checkpoint:-24,color:"#b6aad9"},rhythm:null,berms:[Bn("indoor-nw",-32,55,16,1),Bn("indoor-ne",32,55,16,1),Bn("indoor-inner",0,-75,16,-1),Bn("indoor-return",0,-75,48,-1)]},dr=4*2.6,Wa={id:"truck",name:"01 · CAMINHÃO",surface:"metal",x:0,z:-35,heading:0,width:2,sideFeather:.08,takeoff:{length:14,height:5.8,power:2.2,back:.2},landing:{start:48.5+dr,crest:52+dr,end:66+dr,height:4.8,width:8/3,power:2,crown:1,usefulStart:52.1+dr,endMargin:1.2},checkpoint:-48,color:"#c8ea91"},Ed={id:"foam",name:"02 · PISCINA DE ESPUMA",surface:"metal",type:"foam",x:-36,z:27,heading:Math.PI,width:4,sideFeather:.08,takeoff:{length:14,height:7.2,power:2.2,back:.2},landing:{start:51,crest:51,end:83,height:0,width:16,power:2,crown:1,usefulStart:51,endMargin:1.2},checkpoint:-30,color:"#aaa1dd"},Ri={x:0,z:Wa.z+Wa.landing.crest-17/2,width:3.1,depth:17,height:4.8,floor:1.15,heading:Math.PI,cabZ:-3.6+dr},Ye={id:"foam-pit",jump:"foam",x:-36,z:-40,width:16,depth:32,surface:3.3,bottom:.15,wall:.45,wallHeight:3.6,cubeSize:.55,cubes:8192,sinkDepth:.45,drag:5.2,spring:45,damping:18},Ad={id:"desert",number:"02",name:"Desert Market",tag:"MISSÃO · MOTORAMA TEAM",theme:"desert",description:"Pouse na traseira do caminhão. Volte pelo estacionamento e voe para a piscina de espuma.",arena:{north:85,south:-95,halfWidth:105,halfLength:125,trackWidth:5},lanes:[0,-36],jumps:[Wa,Ed],whoops:null,rhythm:null,berms:[],trailer:Ri,foamPit:Ye,platforms:[{...Ri}],solids:[{x:59,z:16,width:61,depth:72,height:12},{x:0,z:Ri.cabZ-.5,width:3.1,depth:6.4,height:4.05},{x:Ri.x,z:Ri.z,width:Ri.width,depth:Ri.depth,height:Ri.height-.45},...[-1,1].flatMap(i=>[{x:Ye.x+i*(Ye.width+Ye.wall)/2,z:Ye.z,width:Ye.wall,depth:Ye.depth+2*Ye.wall,height:Ye.wallHeight},{x:Ye.x,z:Ye.z+i*(Ye.depth+Ye.wall)/2,width:Ye.width,depth:Ye.wall,height:Ye.wallHeight}]),...Array.from({length:12},(i,t)=>({x:t%2?-68:-83,z:-78+Math.floor(t/2)*27,width:2.1,depth:4.5,height:2}))],mission:{jump:"truck",finish:"foam-pit",title:"01 / POUSO NA TRASEIRA",hint:"Acelere alinhado. A recepção fica na ponta de trás da carreta.",nextTitle:"02 / PISCINA DE ESPUMA",nextHint:"Faça a volta à esquerda no asfalto. A segunda rampa aponta para a espuma."}},Td={id:"stadium",number:"04",name:"Panorama Big Air",tag:"ARENA FECHADA · TRÊS DUPLOS",theme:"stadium",description:"Madeira preta, três duplos de terra e uma arena inteira de esportes de ação.",arena:{north:194,south:-237,halfWidth:105,halfLength:270,trackWidth:13},lanes:[-22,2],trackBarriers:!1,dirt:{left:-37,right:-7,start:-128,end:183},returnLane:{x:2,radius:12},rollIn:{top:22,start:-218,end:-128,back:-262,left:-34,right:14,feather:3},venue:{centerZ:-27,halfWidth:158,halfLength:282,roofHeight:65,bowl:{x:54,z:-78,width:53,depth:66,height:4.3},street:{x:56,z:25,width:58,depth:92,height:2.4},vert:{x:54,z:130,width:38,depth:48,height:6.2}},jumps:[-116,-12,92].map((i,t)=>({id:"stadium-"+(t+1),name:`0${t+1} · DUPLO ${t+1}`,x:-22,z:i,heading:0,width:12,takeoff:{length:16,height:8.8,power:2.2,back:1.5},landing:{start:59,crest:63,end:79,height:6.8,width:13,power:2,crown:1.2,usefulStart:63.8,endMargin:1.4},checkpoint:t===0?-121:-40,color:"#b6aad9"})),whoops:null,rhythm:null,berms:[],solids:[{x:-82,z:18,width:13,depth:34,height:1.5},{x:54,z:-78,width:53,depth:66,height:4.3},{x:56,z:25,width:58,depth:92,height:2.4},{x:54,z:130,width:38,depth:48,height:6.2}]},Bo=[wd,Ad,Hh,Td];let St=Hh;function Gh(i){const t=Bo.find(e=>e.id===i);if(!t)throw new Error("Fase desconhecida: "+i);return St=t,zt=t.arena,zo=t.lanes,tn=t.jumps,Ie=t.whoops,He=t.rhythm,zs=t.berms,t}const Wh=[{id:"seatLeft",keys:["KeyA","KeyQ"],name:"SEAT GRAB · ESQ."},{id:"cliffhanger",keys:["KeyS","KeyW"],name:"CLIFFHANGER"},{id:"seatRight",keys:["KeyD","KeyE"],name:"SEAT GRAB · DIR."},{id:"heelClicker",keys:["KeyA","KeyS"],name:"HEEL CLICKER"},{id:"superman",keys:["KeyS","KeyD"],name:"SUPERMAN"},{id:"tsunami",keys:["KeyE","KeyW"],name:"TSUNAMI"},{id:"spin360",keys:["KeyW","KeyQ"],name:"360",spin:!0}],xr=[{id:"noHander",keys:["Space"],name:"NO HANDER"},{id:"noFooter",keys:["ShiftLeft","ShiftRight"],name:"NO FOOTER"}],Rd={id:"nothing",keys:["Space","ShiftLeft","ShiftRight"],name:"NOTHING"},sa=i=>i==="nothing"||xr.some(t=>t.id===i);function Xh(i){const t=i.has("Space"),e=i.has("ShiftLeft")||i.has("ShiftRight");return t&&e?"nothing":t?"noHander":e?"noFooter":null}const Ro=i=>[...Wh,...xr,Rd].find(t=>t.id===i);function qh(i,t,e){if(e){const l=Object.entries(e).map(([f,u])=>[qh(f,t),u]),h=f=>l.reduce((u,[p,x])=>u+f(p)*x,0),d=f=>[0,1,2].map(u=>h(p=>f(p)[u]));return{hip:d(f=>f.hip),shoulder:d(f=>f.shoulder),torso:d(f=>f.torso),helmet:d(f=>f.helmet),angle:h(f=>f.angle),limbs:[-1,1].map((f,u)=>({side:f,hand:d(p=>p.limbs[u].hand),elbow:d(p=>p.limbs[u].elbow),knee:d(p=>p.limbs[u].knee),foot:d(p=>p.limbs[u].foot),bootAngle:h(p=>p.limbs[u].bootAngle),attached:l.every(([p])=>p.limbs[u].attached)}))}}let n,s;if(i==="superman"||i==="seatLeft"||i==="seatRight"){const l=i==="seatLeft"?1:i==="seatRight"?-1:0;n=[l*.1,1.04,-.74],s=[l*.04,1.1,-.18]}else if(i==="cliffhanger")n=[0,1.5,.37],s=[0,2.05,.38];else if(i==="heelClicker")n=[0,.93,-.12],s=[0,1.42,.04];else if(i==="tsunami")n=[0,1.54,-.03],s=[0,1.02,.12];else if(i==="noHander")n=[0,.82,-.24],s=[0,1.3,-.2];else if(i==="noFooter")n=[0,.86,-.24],s=[0,1.25,-.04];else if(i==="nothing")n=[0,1.04,-.24],s=[0,1.51,-.14];else return null;const r=Math.atan2(s[2]-n[2],s[1]-n[1]),o=n.map((l,h)=>(l+s[h])*.5),a=[s[0],s[1]+Math.cos(r)*.3-Math.sin(r)*.07,s[2]+Math.sin(r)*.3+Math.cos(r)*.07],c=[-1,1].map(l=>{const h=t.get(l),d={side:l,hand:[...h],elbow:[l*.37,.94,.17],knee:[l*.2,1.03,-1.18],foot:[l*.18,1.01,-1.62],bootAngle:Math.PI/2,attached:!0};if(i==="seatLeft"&&l===1||i==="seatRight"&&l===-1)d.hand=[l*.145,.468,-.58],d.elbow=[l*.4,.79,-.53],d.attached=!1;else if(i==="cliffhanger"){const f=t.get(-l),u=h.map((p,x)=>(p+f[x])*.5+(p-f[x])*.5*(.21/.38));d.foot=[u[0],u[1]-.075,u[2]],d.knee=[l*.22,1.06,.4],d.hand=[l*.57,2.51,.4],d.elbow=[l*.42,2.23,.38],d.bootAngle=-.65,d.attached=!1}else i==="heelClicker"?(d.knee=[l*.54,1.18,.31],d.foot=[l*.065,1.43,.68],d.elbow=[l*.44,1.14,.38],d.bootAngle=-.55):i==="tsunami"?(d.knee=[l*.18,1.97,-.1],d.foot=[l*.16,2.41,-.17],d.elbow=[l*.35,1.13,.25],d.bootAngle=Math.PI):i==="noHander"?(d.hand=[l*.88,1.49,-.15],d.elbow=[l*.54,1.33,-.18],d.attached=!1,d.knee=[l*.3,.4,.19],d.foot=[l*.24,-.1,-.04],d.bootAngle=0):i==="noFooter"?(d.knee=[l*.51,.52,-.12],d.foot=[l*.82,.2,-.29],d.bootAngle=.22):i==="nothing"&&(d.hand=[l*.92,1.72,-.1],d.elbow=[l*.56,1.54,-.14],d.attached=!1,d.knee=[l*.53,.78,-.15],d.foot=[l*.93,.45,-.28],d.bootAngle=.25);return d});return{hip:n,shoulder:s,torso:o,helmet:a,angle:r,limbs:c}}function Vr(i=.5){const t=[],e=(f,u,p,x)=>{const m=Math.ceil(Math.hypot(p-f,x-u)/i);for(let g=0;g<m;g++)t.push({x:f+(p-f)*g/m,z:u+(x-u)*g/m})},n=(f,u,p,x,m=0,g=Math.PI)=>{const v=Math.ceil(Math.abs(g-m)*p/i);for(let _=0;_<v;_++){const M=m+(g-m)*_/v;t.push({x:f-p*Math.cos(M),z:u+x*p*Math.sin(M)})}};if(St.theme==="desert"){const f=St.jumps[0];return e(f.x,f.z+f.checkpoint,0,65),n(-18,65,18,1,Math.PI,0),e(-36,65,-36,-42),t}if(St.theme==="indoor"){const[f,u,p,x]=zo;return e(f,zt.south,f,zt.north),n(-32,zt.north,16,1),e(u,zt.north,u,zt.south),n(0,zt.south,16,-1),e(p,zt.south,p,zt.north),n(32,zt.north,16,1),e(x,zt.north,x,zt.south),n(0,zt.south,48,-1,Math.PI,0),t}if(St.theme==="stadium"){const f=St.jumps[0].x,u=St.returnLane.x,p=St.returnLane.radius,x=(f+u)/2;return e(f,zt.south,f,zt.north),n(x,zt.north,p,1),e(u,zt.north,u,zt.south),n(x,zt.south,p,-1,Math.PI,0),t}const[s,r,o,a,c,l]=zo,h=zt.returnRadius,d=zt.returnZ-h;return e(r,zt.south,r,zt.north),n((r+o)/2,zt.north,(o-r)/2,1),e(o,zt.north,o,zt.south),n((o+a)/2,zt.south,(a-o)/2,-1),e(a,zt.south,a,zt.north),n((a+c)/2,zt.north,(c-a)/2,1),e(c,zt.north,c,zt.south),n((c+l)/2,zt.south,(l-c)/2,-1),e(l,zt.south,l,d),n(l-h,d,h,1,Math.PI,Math.PI/2),e(l-h,zt.returnZ,s+h,zt.returnZ),n(s+h,d,h,1,Math.PI/2,0),e(s,d,s,zt.south),n((s+r)/2,zt.south,(r-s)/2,-1),t}const ra=new WeakMap,Fi=8,Yh=(i,t,e)=>Math.max(t,Math.min(e,i)),$h=(i,t)=>i.x*t.x+i.y*t.y+i.z*t.z,Sl=i=>{const t=Math.hypot(i.x,i.y,i.z);return{x:i.x/t,y:i.y/t,z:i.z/t}},Cd=(i,t)=>({x:i.y*t.z-i.z*t.y,y:i.z*t.x-i.x*t.z,z:i.x*t.y-i.y*t.x});function Pd(i){const t=X.barriers,e=St.whoops;if(!e)return t.halfTrack;const n=i.x-e.x,s=i.z-e.z,r=n*Math.sin(e.heading)+s*Math.cos(e.heading),o=n*Math.cos(e.heading)-s*Math.sin(e.heading);if(Math.abs(o)>e.width/2)return t.halfTrack;const a=Math.max(0,-r,r-e.count*e.spacing),c=Yh(1-a/14,0,1),l=c*c*(3-2*c);return t.halfTrack+(t.whoopsHalfTrack-t.halfTrack)*l}function Kh(i){if(ra.has(St))return ra.get(St);const t=[],e=new Map,n={blocks:t,grid:e};if(ra.set(St,n),St.theme==="desert"||St.trackBarriers===!1)return n;const s=Vr(.5),r=X.barriers;for(const o of[-1,1]){const a=s.map((u,p)=>{const x=s[(p+s.length-1)%s.length],m=s[(p+1)%s.length],g=m.x-x.x,v=m.z-x.z,_=Math.hypot(g,v),M=o*Pd(u);return{x:u.x+v/_*M,z:u.z-g/_*M}}),c=[0];for(let u=0;u<a.length;u++){const p=a[u],x=a[(u+1)%a.length];c.push(c.at(-1)+Math.hypot(x.x-p.x,x.z-p.z))}const l=c.at(-1),h=Math.round(l/(r.length+r.gap)),d=l/h,f=u=>{u=(u%l+l)%l;let p=0,x=a.length;for(;x-p>1;){const _=p+x>>1;c[_]>u?x=_:p=_}const m=a[p],g=a[(p+1)%a.length],v=(u-c[p])/(c[p+1]-c[p]);return{x:m.x+(g.x-m.x)*v,z:m.z+(g.z-m.z)*v}};for(let u=0;u<h;u++){const p=f(u*d),x=f(u*d-r.length/2),m=f(u*d+r.length/2),g=m.x-x.x,v=m.z-x.z,_=Math.hypot(g,v),M=v/_,E=-g/_,A=Sl({x:g,y:i(m.x,m.z)-i(x.x,x.z),z:v}),P=(i(p.x+M*r.width/2,p.z+E*r.width/2)-i(p.x-M*r.width/2,p.z-E*r.width/2))/r.width;let C={x:M,y:P,z:E};const b=$h(C,A);C=Sl({x:C.x-b*A.x,y:C.y-b*A.y,z:C.z-b*A.z});const S=Cd(A,C),L=i(p.x,p.z),O={id:t.length,side:o,x:p.x+S.x*r.height/2,y:L+S.y*r.height/2,z:p.z+S.z*r.height/2,right:C,up:S,forward:A,width:r.width,height:r.height,length:r.length};t.push(O);const V=(r.length+r.width+r.height)/2;for(let z=Math.floor((O.x-V)/Fi);z<=Math.floor((O.x+V)/Fi);z++)for(let F=Math.floor((O.z-V)/Fi);F<=Math.floor((O.z+V)/Fi);F++){const B=z+","+F;e.has(B)||e.set(B,[]),e.get(B).push(O)}}}return n}function Id(i,t,e){const n={x:i.x-e.x,y:i.y-e.y,z:i.z-e.z},s=[e.right,e.up,e.forward],r=[e.width/2,e.height/2,e.length/2],o=s.map(d=>$h(n,d)),a=o.map((d,f)=>d-Yh(d,-r[f],r[f])),c=Math.hypot(...a);if(c>=t)return null;let l=t-c,h;if(c>1e-7)h=a.map(d=>d/c);else{const d=o.map((u,p)=>r[p]-Math.abs(u));let f=d.indexOf(Math.min(...d));h=[0,0,0],h[f]=Math.sign(o[f])||1,l=t+d[f]}return{depth:l,x:s.reduce((d,f,u)=>d+f.x*h[u],0),y:s.reduce((d,f,u)=>d+f.y*h[u],0),z:s.reduce((d,f,u)=>d+f.z*h[u],0)}}function Ld(i,t){const e=Kh(t);if(!e.blocks.length)return null;const n=new Set;for(let r=Math.floor((i.x-1.7)/Fi);r<=Math.floor((i.x+1.7)/Fi);r++)for(let o=Math.floor((i.z-1.7)/Fi);o<=Math.floor((i.z+1.7)/Fi);o++)for(const a of e.grid.get(r+","+o)||[])n.add(a);let s=null;for(const r of n){const o=[...i.wheelPositions().map(a=>({...a,r:X.bike.wheelRadius})),{x:i.x,y:i.y-.1,z:i.z,r:.43}];for(const a of o){const c=Id(a,a.r,r);if(!c)continue;i.x+=c.x*(c.depth+.001),i.y+=c.y*(c.depth+.001),i.z+=c.z*(c.depth+.001);const l=i.vx*c.x+i.vy*c.y+i.vz*c.z,h=Math.max(0,-l);if((!s||h>s.impact)&&(s={id:r.id,impact:h}),l<0){const d=-l*(1+X.barriers.rebound);i.vx+=c.x*d,i.vy+=c.y*d,i.vz+=c.z*d,i.vx*=X.barriers.scrapeRetention,i.vz*=X.barriers.scrapeRetention}break}}return s}const Jh=Math.PI*2,qt=(i,t,e)=>Math.max(t,Math.min(e,i)),Sn=i=>Math.atan2(Math.sin(i),Math.cos(i)),sn=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function li(i,t,e){const n=t-i.x,s=e-i.z;return{s:n*Math.sin(i.heading)+s*Math.cos(i.heading),u:n*Math.cos(i.heading)-s*Math.sin(i.heading)}}function Ni(i,t,e=0){return{x:i.x+Math.sin(i.heading)*t+Math.cos(i.heading)*e,z:i.z+Math.cos(i.heading)*t-Math.sin(i.heading)*e}}const Xa=i=>(i=qt(i,0,1),i*i*(3-2*i));function Zh(i,t,e,n,s,r){const o=s*s,a=o*s;return(2*a-3*o+1)*i+(a-2*o+s)*r*e+(-2*a+3*o)*t+(a-o)*r*n}function Dd(i,t){if(i.base){if(t>=i.end&&t<i.deckEnd)return i.base;if(t>=i.deckEnd&&t<i.exitEnd)return i.base*(1-Xa((t-i.deckEnd)/(i.exitEnd-i.deckEnd)))}if(t<i.start||t>=i.end)return 0;if(t<i.crest)return i.height*Xa((t-i.start)/(i.crest-i.start));const e=i.base||0,n=i.height-e,s=i.end-i.crest,r=t-i.crest,o=i.crown,a=i.power;if(r<o){const c=1-o/s;return e+Zh(n,n*c**a,0,-n*a/s*c**(a-1),r/o,o)}return e+n*((i.end-t)/s)**a}function is(i,t){const e=i.takeoff;return t>=0&&t<=e.length?e.height*Math.pow(t/e.length,e.power):i.type==="tabletop"&&t>e.length&&t<i.landing.crest?e.height:t>e.length&&t<e.length+e.back?e.height*(1-(t-e.length)/e.back):Dd(i.landing,t)}function bl(i,t,e=i.radius){const n=i.angleStart??0,s=i.angleEnd??Math.PI,r=(s-n)*i.radius,o=n+qt(t,0,r)/i.radius,a=t<0?t:t>r?t-r:0;return{x:i.x-e*Math.cos(o)+a*Math.sin(o),z:i.z+i.direction*(e*Math.sin(o)+a*Math.cos(o))}}const Vo=i=>(i=qt(i,0,1),i*i*i*(i*(i*6-15)+10));function Ud(i,t,e){const n=t-i.x,s=(e-i.z)*i.direction,r=i.angleStart??0,o=i.angleEnd??Math.PI;if(Math.abs(n)>i.outer+i.entry||Math.abs(s)>i.outer+i.entry)return 0;const a=(r+o)*.5,c=a+Sn(Math.atan2(s,-n)-a),l=qt(c,r,o);let h,d,f;if(c<r||c>o){h=-n*Math.cos(l)+s*Math.sin(l);const g=n*Math.sin(l)+s*Math.cos(l),v=h*(o-r);d=c<r?g:v+g,f=c<r?v-g:-g}else h=Math.hypot(n,s),d=h*(c-r),f=h*(o-c);if(h<=i.inner||h>=i.outer||d<=-i.entry||f<=-i.entry)return 0;const u=i.entry+i.fullBank,p=Vo((d+i.entry)/u)*Vo((f+i.entry)/u),x=i.crest-i.inner;let m;if(h>i.crest)m=i.height*(1-Xa((h-i.crest)/(i.outer-i.crest)));else if(h>i.crest-i.crown){const g=1-i.crown/x;m=Zh(i.height*g**i.power,i.height,i.height*i.power/x*g**(i.power-1),0,(h-i.crest+i.crown)/i.crown,i.crown)}else m=i.height*((h-i.inner)/x)**i.power;for(const g of i.ruts)m-=i.rutDepth*Math.exp(-(((h-g)/i.rutWidth)**2));return Math.max(0,m)*p}function Od(i){return!Ie||i<0||i>Ie.count*Ie.spacing?0:Ie.height*Math.sin(Math.PI*i/Ie.spacing)**2}function Nd(i){return!He||i<0||i>He.count*He.spacing?0:He.height*Math.sin(Math.PI*i/He.spacing)**2}function Oi(i,t){const e=St.rollIn;if(!e||t<e.back||t>e.end||i<e.left||i>e.right)return 0;const n=Vo(Math.min(i-e.left,e.right-i,t-e.back)/e.feather);return e.top*(1-Vo((t-e.start)/(e.end-e.start)))*n}function kd(i,t){if(St.theme==="desert")return!1;const e=St.dirt;return!e||i>=e.left&&i<=e.right&&t>=e.start&&t<=e.end}function qa(i,t,e=0){if(!Ie)return null;const n=li(Ie,i,t);return n.s>=-e&&n.s<=Ie.count*Ie.spacing+e&&Math.abs(n.u)<Ie.width/2?n:null}function te(i,t){let e=Oi(i,t);for(const n of tn){const{s,u:r}=li(n,i,t),o=s>n.takeoff.length+n.takeoff.back?n.landing.width:n.width,a=n.sideFeather??2.8,c=qt((o*.5+a-Math.abs(r))/a,0,1);c>0&&(e=Math.max(e,is(n,s)*c))}if(Ie){const n=li(Ie,i,t),s=qt((Ie.width*.5+2.8-Math.abs(n.u))/2.8,0,1);s>0&&(e=Math.max(e,Od(n.s)*s))}if(He){const n=li(He,i,t),s=qt((He.width*.5+2.8-Math.abs(n.u))/2.8,0,1);s>0&&(e=Math.max(e,Nd(n.s)*s))}for(const n of St.platforms||[])Math.abs(i-n.x)<=n.width/2&&Math.abs(t-n.z)<=n.depth/2&&(e=Math.max(e,n.height));for(const n of zs)e=Math.max(e,Ud(n,i,t));return e}function Co(i,t,e){const n=$o(i,t);return Math.atan2(-(n.x*Math.cos(e)-n.z*Math.sin(e)),n.y)}function $o(i,t){const n=(te(i+.045,t)-te(i-.045,t))/.09,s=(te(i,t+.045)-te(i,t-.045))/(.045*2),r=Math.hypot(n,1,s);return{x:-n/r,y:1/r,z:-s/r}}function Us(i,t,e){const n=$o(i,t);return Math.atan2(-(n.x*Math.sin(e)+n.z*Math.cos(e)),n.y)}function Fd({x:i,y:t,z:e,vx:n,vy:s,vz:r},o=6){const a=X.assistance.predictionStep;for(let c=a;c<=o;c+=a){const l=i+n*c,h=e+r*c;if(t+s*c-.5*X.gravity*c*c<=te(l,h)+.73)return{x:l,z:h,y:te(l,h),t:c}}return null}function jr(i,t,e=i.heading,n=0){const s=i.takeoff.height*i.takeoff.power/i.takeoff.length,r=Math.cos(e-i.heading),o=t/Math.sqrt(1+(s*r)**2),a=Ni(i,i.takeoff.length+X.bike.halfWheelbase*.85,n);return Fd({...a,y:i.takeoff.height+1.17,vx:Math.sin(e)*o,vz:Math.cos(e)*o,vy:o*s*r})}function zd(i,t,e,n=0){const s=i.landing,r=jr(i,t,e,n),o=Math.abs(Sn(e-i.heading)),a={active:!1,targetSpeed:t,natural:r,corrected:r};if(i.type==="foam"||o>X.assistance.alignmentTolerance||!r)return a;const c=li(i,r.x,r.z),l=s.end-s.endMargin;if(Math.abs(c.u)>s.width*.5-.7||c.s<=l||c.s<s.usefulStart)return a;const h=l-X.assistance.predictionMargin;let d=t*(1-X.assistance.maxReduction),f=t;const u=jr(i,d,e,n);if(!u||li(i,u.x,u.z).s>h)return a;for(let p=0;p<18;p++){const x=(d+f)/2,m=jr(i,x,e,n);m&&li(i,m.x,m.z).s>h?f=x:d=x}return{...a,active:!0,targetSpeed:d,corrected:jr(i,d,e,n)}}class Xc{constructor(){this.checkpoint=tn[0],this.reset()}reset(t=this.checkpoint){this.checkpoint=t;const e=Ni(t,t.checkpoint);Object.assign(this,{...e,y:te(e.x,e.z)+.703,vx:0,vy:0,vz:0,heading:t.heading,pitch:Us(e.x,e.z,t.heading),pitchRate:0,roll:Co(e.x,e.z,t.heading),steer:0,barAngle:0,whip:0,whipRate:0,flip:0,flipRate:0,basePitch:0,rearWheelSpeed:0,frontWheelSpeed:0,rearSpin:0,frontSpin:0,airPitch:0,airPitchRate:0,barrierHits:0,barrierContact:null,foam:null,airborne:!1,airTime:0,contacts:2,compression:[.037,.037],wheels:[],spin:0,crashed:!1,crashTime:0,skid:0,impact:0,launch:null,assist:null,activeJump:null,maxWhip:0,rotation:0,manual:0,manualBalance:0,manualBoost:0,manualCarry:!1,trick:null,trickHeld:!1,trickPose:null,trickProgress:0,trickBlend:0,trickTime:0,trickYaw:0,trickPoseMix:null,trickPoseFrom:null,trickSwitchProgress:1,completed360:!1})}startTrick(t){if(!this.airborne||this.crashed||this.foam||!Ro(t))return!1;if(this.trick||this.trickProgress>0){if(!this.trickHeld||!sa(this.trick)||!sa(t)||t===this.trick)return!1;this.trickPoseFrom={...this.trickPoseMix||{[this.trickPose]:1}},this.trickPoseMix={...this.trickPoseFrom},this.trickSwitchProgress=0}return this.trick=t,this.trickHeld=!0,this.trickTime=0,t!=="spin360"&&(this.trickPose=t),!0}releaseTrick(t,e){var n;if(sa(this.trick)&&Ro(this.trick).keys.includes(t)){const s=e&&Xh(e);if(s&&this.trickHeld&&this.startTrick(s))return}this.trick!=="spin360"&&((n=Ro(this.trick))!=null&&n.keys.includes(t))&&(this.trickHeld=!1)}endTrick(){this.heading=Sn(this.heading+this.trickYaw),this.trickYaw=0,this.trick=null,this.trickHeld=!1,this.trickTime=0}updateTrickPose(t){if(this.trickPoseFrom){this.trickSwitchProgress=Math.min(1,this.trickSwitchProgress+t/X.tricks.enterTime);const s=this.trickSwitchProgress,r=s*s*(3-2*s);this.trickPoseMix=Object.fromEntries(Object.entries(this.trickPoseFrom).map(([o,a])=>[o,a*(1-r)])),this.trickPoseMix[this.trickPose]=(this.trickPoseMix[this.trickPose]||0)+r,s===1&&(this.trickPoseMix=null,this.trickPoseFrom=null)}const e=this.trick&&this.trick!=="spin360"&&this.trickHeld;this.trickProgress=qt(this.trickProgress+t*(e?1/X.tricks.enterTime:-1/X.tricks.returnTime),0,1);const n=this.trickProgress;this.trickBlend=n*n*(3-2*n),n||(this.trickPose=null,this.trickPoseMix=null,this.trickPoseFrom=null,this.trick!=="spin360"&&!this.trickHeld&&(this.trick=null))}get speed(){return Math.hypot(this.vx,this.vz)}wheelPositions(){const t=this.heading+this.trickYaw-this.whip,e={x:Math.sin(t),z:Math.cos(t)},n={x:Math.cos(t),z:-Math.sin(t)};return[-1,1].map(s=>{const r=s*X.bike.halfWheelbase,o=X.bike.axleDrop*Math.sin(this.roll),a=-.35*Math.cos(this.roll),c=r*Math.cos(this.pitch)-a*Math.sin(this.pitch),l=r*Math.sin(this.pitch)+a*Math.cos(this.pitch);return{x:this.x+e.x*c+n.x*o,y:this.y+l,z:this.z+e.z*c+n.z*o,along:c,ry:l,sign:s}})}step(t={},e=X.step){var L,O,V;if(this.crashed)return this.crashTime+=e,null;if(this.updateTrickPose(e),this.foam)return this.settleInFoam(e),null;const n=St.foamPit;if(n&&this.airborne&&this.vy<0&&Math.abs(this.x-n.x)<n.width/2-.6&&Math.abs(this.z-n.z)<n.depth/2-.6&&Math.min(...this.wheelPositions().map(F=>F.y-X.bike.wheelRadius),this.y+Math.cos(this.pitch)*Math.cos(this.roll)*.95)<=n.surface)return this.catchFoam(n);const s=qt(t.throttle||0,0,1),r=qt(t.brake||0,0,1),o=qt(t.steer||0,-1,1),a=qt(t.flip||0,-1,1),c=qt(t.whip||0,-1,1);this.impact*=Math.exp(-e*5),this.skid=Math.max(0,this.skid-e);let l=0,h=-14,d=0,f=0,u=0;const p=this.speed,x={x:Math.sin(this.heading),z:Math.cos(this.heading)},m=this.wheelPositions();for(let z=0;z<2;z++){const F=m[z],B=$o(F.x,F.z),K=(te(F.x,F.z)+X.bike.wheelRadius-F.y)*B.y,G=(this.vx-x.x*this.pitchRate*F.ry)*B.x+(this.vy+this.pitchRate*F.along)*B.y+(this.vz-x.z*this.pitchRate*F.ry)*B.z,st=z===0?X.suspension.rear:X.suspension.front;if(this.compression[z]=qt(K,0,st.travel),K>0){u++;const ft=G<0?st.compressionDamping:st.reboundDamping,vt=Math.max(0,K-(st.progressiveStart??st.travel)),Ot=qt(st.spring*K+(st.progressiveSpring||0)*vt**2-ft*G,0,X.suspension.maxForce);if(l+=B.x*Ot,h+=B.y*Ot,d+=B.z*Ot,f+=(F.along*B.y-F.ry*(B.x*x.x+B.z*x.z))*Ot,K>st.travel){const Zt=Math.min(K-st.travel,.08);this.y+=Zt*B.y*.5}}F.compression=this.compression[z],F.grounded=K>0}this.wheels=m;const g=qa(this.x,this.z),v=qa(this.x,this.z,10),_=Us(this.x,this.z,this.heading),M=m[0].grounded;this.manualCarry=!!(!u&&v&&this.manual>.1&&this.airTime<X.manual.carryTime&&this.y-te(this.x,this.z)<X.manual.maxCarryHeight);const E=a>0&&p>X.manual.minSpeed&&r<.2&&(u&&Math.abs(_)<X.manual.maxGroundSlope||this.manualCarry);this.manual=sn(this.manual,E?1:0,E?X.manual.response:X.manual.returnResponse,e);const A=!!(g&&M&&!m[1].grounded&&this.manual>.55&&Math.abs(Sn(this.heading-Ie.heading))<.25&&this.pitch>.18&&this.pitch<.75&&Math.abs(this.roll)<.35&&!r);this.manualBalance=A?this.manualBalance+e:this.manualCarry?this.manualBalance:Math.max(0,this.manualBalance-e*3),this.manualBoost=sn(this.manualBoost,A&&this.manualBalance>X.manual.minBalanceTime?1:0,7,e),v&&u&&(this.checkpoint=Ie,this.activeJump=null);const P=He?li(He,this.x,this.z):null;if(u&&P&&P.s>=-8&&P.s<He.count*He.spacing&&Math.abs(P.u)<He.width/2&&(this.checkpoint=He,this.activeJump=null),this.airborne&&this.airTime>.15&&(this.y+Math.cos(this.pitch)*Math.cos(this.roll)*.95<te(this.x,this.z)+.15||this.y<te(this.x,this.z)+.2))return this.fall("Aponte as rodas para a descida.");let C=null;if(u&&this.airborne&&(this.airTime>.16||this.trick)){const z=v&&this.manual>.55&&M&&!m[1].grounded,F=this.heading+this.trickYaw-this.whip,B=Math.abs(Sn(this.pitch-(z?X.manual.angle:Us(this.x,this.z,F)))),K=Math.abs(Sn(this.trickYaw-this.whip)),G=Math.abs(Sn(this.roll-Co(this.x,this.z,F)));if(B>X.landing.crashPitch||K>X.landing.crashYaw||G>X.landing.crashRoll)return this.fall("Recolha a manobra antes de tocar.");const st=B<X.landing.cleanPitch&&K<X.landing.cleanYaw?"clean":"skid";this.impact=qt(Math.abs(this.vy)*.055,.12,1),st==="skid"&&(this.vx*=X.landing.skidRetention,this.vz*=X.landing.skidRetention,this.skid=.85);const ft=this.activeJump?li(this.activeJump,this.x,this.z):null,vt=!!(ft&&ft.s>=this.activeJump.landing.usefulStart&&ft.s<=this.activeJump.landing.end-this.activeJump.landing.endMargin&&Math.abs(ft.u)<this.activeJump.landing.width/2);C={type:"landing",quality:st,onReception:vt,manual:!!z,flight:this.airTime,rotation:this.flip,whip:this.maxWhip,x:this.x,z:this.z,speed:this.speed,jump:(L=this.activeJump)==null?void 0:L.id,pitchError:B,yawError:K,spin360:this.completed360},this.endTrick(),this.airborne=!1,this.airTime=0,this.pitch=Sn(this.pitch),this.pitchRate*=.15,this.flip=0,this.flipRate=0}if(u){this.airPitch=0,this.airPitchRate=0;const z=Math.hypot(this.vx,this.vy,this.vz)/X.bike.wheelRadius;m[0].grounded&&(this.rearWheelSpeed=z),m[1].grounded&&(this.frontWheelSpeed=z),this.airborne||(this.airTime=0);const F=qt(o+c*X.drive.arrowSteering,-1-X.drive.arrowSteering,1+X.drive.arrowSteering);this.steer=sn(this.steer,F,X.drive.steerResponse,e);const B=X.drive.steering*this.steer*qt(p/7,0,1)/(1+p*.024);this.heading-=B*e;const K={x:Math.sin(this.heading),z:Math.cos(this.heading)},G=this.vx*x.x+this.vz*x.z,st=this.skid>0?2.8:18;this.vx=sn(this.vx,K.x*G,st,e),this.vz=sn(this.vz,K.z*G,st,e);const ft=Us(this.x,this.z,this.heading),vt=X.drive.maxSpeed+this.manualBoost*(X.manual.whoopMaxSpeed-X.drive.maxSpeed),Ot=s*(X.drive.acceleration+this.manualBoost*X.manual.whoopDrive)*(1-(p/vt)**4)-r*X.drive.brake,Zt=p<.15&&!s?0:Ot;if(l+=K.x*(Zt*Math.cos(ft)-p*X.drive.rollingDrag),d+=K.z*(Zt*Math.cos(ft)-p*X.drive.rollingDrag),h+=Zt*Math.sin(ft),f-=this.pitchRate*X.suspension.pitchDamping,this.manual>.001){const Ft=(v?0:_)+X.manual.angle;f=f*(1-this.manual)+this.manual*(X.manual.balanceSpring*Sn(Ft-this.pitch)-X.manual.balanceDamping*this.pitchRate)}g&&m[1].grounded&&(l-=K.x*p*X.manual.frontDrag,d-=K.z*p*X.manual.frontDrag);const he=Co(this.x,this.z,this.heading);this.roll=sn(this.roll,qt(he+this.steer*X.drive.maxLean*qt(p/15,0,1),-.95,.95),7,e),this.whip=sn(this.whip,0,9,e),this.whipRate=0;for(const Ft of tn){const $=li(Ft,this.x,this.z);if($.s>Ft.checkpoint-8&&$.s<Ft.takeoff.length+1.5&&Math.abs($.u)<Ft.width*.5&&Math.abs(Sn(this.heading-Ft.heading))<.7&&(this.checkpoint=Ft,this.activeJump=Ft,$.s>Ft.takeoff.length-X.assistance.preparationDistance&&$.s<Ft.takeoff.length+.9&&(this.assist=zd(Ft,Math.hypot(this.vx,this.vy,this.vz),this.heading,$.u),this.assist.active))){const et=this.vx*Math.sin(Ft.heading)+this.vz*Math.cos(Ft.heading),bt=this.assist.targetSpeed/Math.hypot(this.vx,this.vy,this.vz),Dt=et*(1-bt)*(1-Math.exp(-14*e));this.vx-=Math.sin(Ft.heading)*Dt,this.vz-=Math.cos(Ft.heading)*Dt}}r&&p<.3&&(this.vx=0,this.vz=0,l=0,d=0)}else{if(this.airborne||(this.airborne=!0,this.airTime=0,this.basePitch=this.pitch,this.flip=0,this.flipRate=0,this.maxWhip=0,this.completed360=!1,this.airPitch=0,this.airPitchRate=0,this.launch={x:this.x,y:this.y,z:this.z,vx:this.vx,vy:this.vy,vz:this.vz},C||(C={type:"launch",...this.launch,jump:(O=this.activeJump)==null?void 0:O.id})),this.airTime+=e,this.trick==="spin360"){this.trickTime=Math.min(X.tricks.spinDuration,this.trickTime+e);const vt=this.trickTime/X.tricks.spinDuration;this.trickYaw=Jh*(.5-.5*Math.cos(Math.PI*vt)),vt>=1&&(this.trickYaw=0,this.trick=null,this.trickHeld=!1,this.completed360=!0)}const z=this.manualCarry?0:a;this.flipRate+=z*X.flip.acceleration*e,this.flipRate*=Math.exp(-(z?X.flip.heldDamping:X.flip.releaseDamping)*e),this.flipRate=qt(this.flipRate,-4.9,X.flip.maxRate),this.flip+=this.flipRate*e;const F=X.airControl,B=this.rearWheelSpeed,K=s-r,G=K>0?K*F.throttleAcceleration:K<0?K*F.brakeDeceleration:-1.2;if(this.rearWheelSpeed=qt(B+G*e,0,F.wheelLimit),!this.manualCarry){this.airPitchRate+=(this.rearWheelSpeed-B)*F.inertiaRatio*(v?F.whoopScale:1),this.airPitchRate*=Math.exp(-2.2*e);const vt=qt(((((V=this.launch)==null?void 0:V.vy)||0)-F.smallJumpLift)/(F.fullJumpLift-F.smallJumpLift),0,1),Ot=F.smallJumpPitch+(F.maxPitch-F.smallJumpPitch)*vt;this.airPitch=qt(sn(this.airPitch,0,F.returnResponse,e)+this.airPitchRate*e,-Ot,Ot),Math.abs(this.airPitch)===Ot&&Math.sign(this.airPitchRate)===Math.sign(this.airPitch)&&(this.airPitchRate=0)}const st=this.manualCarry?X.manual.angle*this.manual:qt(Math.atan2(this.vy,Math.max(p,1)),-.42,1.1);this.basePitch=sn(this.basePitch,st,X.flip.naturalPitchResponse,e),this.pitch=this.basePitch+this.flip+this.airPitch,this.pitchRate=this.flipRate+this.airPitchRate;const ft=c?c*X.whip.attack-X.whip.returnSpring*.35*this.whip:-14*this.whip;this.whipRate=qt(this.whipRate+(ft-X.whip.damping*this.whipRate)*e,-2.25,X.whip.maxRate),this.whip=qt(this.whip+this.whipRate*e,-1.08,X.whip.maxYaw),Math.abs(this.whip)===X.whip.maxYaw&&Math.sign(this.whipRate)===Math.sign(this.whip)&&(this.whipRate=0),this.roll=sn(this.roll,-this.whip/X.whip.maxYaw*X.whip.maxRoll,8,e),this.maxWhip=Math.max(this.maxWhip,Math.abs(this.whip))}const b=u?-this.steer*X.bike.groundBarAngle:this.whip/X.whip.maxYaw*X.bike.whipBarAngle;this.barAngle=sn(this.barAngle,b,X.bike.barResponse,e),this.vx+=l*e,this.vy+=h*e,this.vz+=d*e,u&&(this.pitchRate=qt(this.pitchRate+f/X.bike.inertia*e,-7,7),this.pitch+=this.pitchRate*e),this.x+=this.vx*e,this.y+=this.vy*e,this.z+=this.vz*e,this.spin+=this.speed*e/X.bike.wheelRadius,this.rearSpin+=this.rearWheelSpeed*e,this.frontSpin+=this.frontWheelSpeed*e,this.contacts=u;const S=Ld(this,te);if(S&&(this.barrierContact||this.barrierHits++,this.skid=Math.max(this.skid,.25),this.impact=Math.max(this.impact,qt(S.impact*.08,0,.6)),S.impact>X.barriers.crashSpeed))return this.fall("Bateu na proteção. R para tentar de novo.");this.barrierContact=S;for(const z of St.solids||[])if(Math.abs(this.x-z.x)<z.width/2+.4&&Math.abs(this.z-z.z)<z.depth/2+.6&&this.y<z.height+.5)return this.fall("Fora da linha. R para tentar de novo.");return Math.abs(this.x)>zt.halfWidth-2||Math.abs(this.z)>zt.halfLength-2?this.fall("Fim da arena. Vamos de novo."):C}catchFoam(t){var n;const e={type:"foamLanding",pit:t.id,jump:(n=this.activeJump)==null?void 0:n.id,quality:"foam",x:this.x,y:this.y,z:this.z,speed:this.speed,flight:this.airTime,rotation:this.flip,whip:this.maxWhip,spin360:this.completed360};return this.foam={pit:t,time:0,impact:Math.hypot(this.vx,this.vy,this.vz),x:this.x,y:t.surface,z:this.z,vx:this.vx,vz:this.vz},this.foamSerial=(this.foamSerial||0)+1,this.endTrick(),this.airborne=!1,this.contacts=0,this.airTime=0,this.flipRate=0,this.pitchRate=0,this.whipRate=0,this.manual=0,this.manualBoost=0,e}settleInFoam(t){const e=this.foam,n=e.pit;e.time+=t,this.vx*=Math.exp(-n.drag*t),this.vz*=Math.exp(-n.drag*t);const s=n.surface-n.sinkDepth;this.vy+=((s-this.y)*n.spring-this.vy*n.damping)*t,this.x=qt(this.x+this.vx*t,n.x-n.width/2+1,n.x+n.width/2-1),this.z=qt(this.z+this.vz*t,n.z-n.depth/2+1,n.z+n.depth/2-1),this.y=Math.max(n.bottom+.3,this.y+this.vy*t),this.roll=sn(this.roll,.32,1.5,t),this.barAngle=sn(this.barAngle,0,3,t),this.compression=this.compression.map(r=>sn(r,0,4,t)),this.wheels=this.wheelPositions().map(r=>({...r,grounded:!1,compression:0}))}fall(t){const e=this.trickYaw;return this.endTrick(),this.crashed=!0,this.crashTime=0,this.crashSerial=(this.crashSerial||0)+1,{type:"crash",reason:t,trickYaw:e}}}class Bd{constructor(){this.bike=new Xc,this.accumulator=0,this.time=0,this.events=[],this.landings=0,this.best=0,this.score=0,this.crashes=0}retry(t){this.bike.reset(t),this.events.push({type:"reset",jump:this.bike.checkpoint.id})}step(t={}){this.time+=X.step;const e=this.bike.step(t);if(e&&(this.events.push(e),e.type==="crash"&&this.crashes++,e.type==="landing"||e.type==="foamLanding")){this.landings++;const n=Math.floor((Math.abs(e.rotation)+.14)/Jh),s=n*1e3+(e.whip>.35?Math.round(e.whip*300):0);e.points=e.quality==="clean"?s:Math.floor(s*.6),this.score+=e.points,this.best=Math.max(this.best,e.points)}this.bike.crashed&&this.bike.crashTime>X.landing.respawnDelay&&this.retry()}advance(t,e={}){for(this.accumulator+=Math.min(t,.1);this.accumulator+1e-10>=X.step;)this.step(e),this.accumulator-=X.step;return this.accumulator/X.step}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="180",Vd=0,wl=1,Hd=2,jh=1,Qh=2,Mi=3,Gi=0,pn=1,Re=2,Bi=0,Bs=1,Ya=2,El=3,Al=4,Gd=5,os=100,Wd=101,Xd=102,qd=103,Yd=104,$d=200,Kd=201,Jd=202,Zd=203,$a=204,Ka=205,jd=206,Qd=207,tf=208,ef=209,nf=210,sf=211,rf=212,of=213,af=214,Ja=0,Za=1,ja=2,Hs=3,Qa=4,tc=5,ec=6,nc=7,tu=0,cf=1,lf=2,Vi=0,hf=1,uf=2,df=3,Yc=4,ff=5,pf=6,mf=7,eu=300,Gs=301,Ws=302,ic=303,sc=304,Ko=306,us=1e3,ls=1001,rc=1002,Ge=1003,gf=1004,Qr=1005,ri=1006,oa=1007,hs=1008,Yn=1009,nu=1010,iu=1011,br=1012,$c=1013,Wi=1014,In=1015,qi=1016,Kc=1017,Jc=1018,wr=1020,su=35902,ru=35899,ou=1021,au=1022,wn=1023,Er=1026,Ar=1027,Zc=1028,Jo=1029,cu=1030,jc=1031,Qc=1033,Po=33776,Io=33777,Lo=33778,Do=33779,oc=35840,ac=35841,cc=35842,lc=35843,hc=36196,uc=37492,dc=37496,fc=37808,pc=37809,mc=37810,gc=37811,xc=37812,vc=37813,_c=37814,Mc=37815,yc=37816,Sc=37817,bc=37818,wc=37819,Ec=37820,Ac=37821,Tc=36492,Rc=36494,Cc=36495,Pc=36283,Ic=36284,Lc=36285,Dc=36286,xf=3200,vf=3201,lu=0,_f=1,ki="",be="srgb",Xs="srgb-linear",Ho="linear",me="srgb",xs=7680,Tl=519,Mf=512,yf=513,Sf=514,hu=515,bf=516,wf=517,Ef=518,Af=519,Rl=35044,uu=35048,Cl="300 es",Xn=2e3,Go=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const vr=Math.PI/180,Tr=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function tl(i,t){return(i%t+t)%t}function Tf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rf(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function Cf(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function Pf(i,t=1){return t-Math.abs(tl(i,t*2)-t)}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uf(i,t){return i+Math.random()*(t-i)}function Of(i){return i*(.5-Math.random())}function Nf(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(i){return i*vr}function Ff(i){return i*Tr}function zf(i){return(i&i-1)===0&&i!==0}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*u,a*l);break;case"YXY":i.set(c*u,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*u,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Il={DEG2RAD:vr,RAD2DEG:Tr,generateUUID:fs,clamp:Qt,euclideanModulo:tl,mapLinear:Tf,inverseLerp:Rf,lerp:_r,damp:Cf,pingpong:Pf,smoothstep:If,smootherstep:Lf,randInt:Df,randFloat:Uf,randFloatSpread:Of,seededRandom:Nf,degToRad:kf,radToDeg:Ff,isPowerOfTwo:zf,ceilPowerOfTwo:Bf,floorPowerOfTwo:Vf,setQuaternionFromProperEuler:Hf,normalize:rn,denormalize:Ls};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=p,t[e+3]=x;return}if(d!==x||c!==f||l!==u||h!==p){let m=1-a;const g=c*f+l*u+h*p+d*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const E=Math.sqrt(_),A=Math.atan2(E,g*v);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const M=a*v;if(c=c*m+f*M,l=l*m+u*M,h=h*m+p*M,d=d*m+x*M,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+c*u-l*f,t[e+1]=c*p+h*f+l*d-a*u,t[e+2]=l*p+h*u+a*f-c*d,t[e+3]=h*p-a*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),u=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new R,Ll=new Ti;class Jt{constructor(t,e,n,s,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],_=s[4],M=s[7],E=s[2],A=s[5],P=s[8];return r[0]=o*x+a*v+c*E,r[3]=o*m+a*_+c*A,r[6]=o*g+a*M+c*P,r[1]=l*x+h*v+d*E,r[4]=l*m+h*_+d*A,r[7]=l*g+h*M+d*P,r[2]=f*x+u*v+p*E,r[5]=f*m+u*_+p*A,r[8]=f*g+u*M+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,u=l*r-o*c,p=e*d+n*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Jt;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){const i=Wo("canvas");return i.style.display="block",i}const Dl={};function Rr(i){i in Dl||(Dl[i]=!0,console.warn(i))}function Wf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ul=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){const i={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xs]:{primaries:t,whitePoint:n,transfer:Ho,toXYZ:Ul,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Ul,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}const oe=Xf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vs;class qf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vs===void 0&&(vs=Wo("canvas")),vs.width=t.width,vs.height=t.height;const s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yf=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const ha=new R;class en extends Zs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=ls,s=ls,r=ri,o=hs,a=wn,c=Yn,l=en.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=fs(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=eu;en.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(u+1)/2,E=(g+1)/2,A=(h+f)/4,P=(d+x)/4,C=(p+m)/4;return _>M&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=P/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=P/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends Zs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new en(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new el(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Kf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jf extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),eo.subVectors(this.max,er),_s.subVectors(t.a,er),Ms.subVectors(t.b,er),ys.subVectors(t.c,er),Ci.subVectors(Ms,_s),Pi.subVectors(ys,Ms),Ki.subVectors(_s,ys);let e=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Ki.z,Ki.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Ki.z,0,-Ki.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Ki.y,Ki.x,0];return!ua(e,_s,Ms,ys,eo)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,_s,Ms,ys,eo))?!1:(no.crossVectors(Ci,Pi),e=[no.x,no.y,no.z],ua(e,_s,Ms,ys,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mi=[new R,new R,new R,new R,new R,new R,new R,new R],Nn=new R,to=new Dn,_s=new R,Ms=new R,ys=new R,Ci=new R,Pi=new R,Ki=new R,er=new R,eo=new R,no=new R,Ji=new R;function ua(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zf=new Dn,nr=new R,da=new R;class wi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(da)),this.expandByPoint(nr.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const gi=new R,fa=new R,io=new R,Ii=new R,pa=new R,so=new R,ma=new R;class jf{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fa.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(fa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Ii.dot(this.direction),c=-Ii.dot(io),l=Ii.lengthSq(),h=Math.abs(1-o*o);let d,f,u,p;if(h>0)if(d=o*c-a,f=o*a-c,p=r*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fa).addScaledVector(io,f),u}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){pa.subVectors(e,t),so.subVectors(n,t),ma.crossVectors(pa,so);let o=this.direction.dot(ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(Ii,so));if(c<0)return null;const l=a*this.direction.dot(pa.cross(Ii));if(l<0||c+l>o)return null;const h=-a*Ii.dot(ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,c,l,h,d,f,u,p,x,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,u,p,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,f,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+p*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=p+u*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,u=c*d,p=l*h,x=l*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,u=c*d,p=l*h,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,u=o*d,p=a*h,x=a*d;e[0]=c*h,e[4]=p*l-u,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=u*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,u=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,u=o*l,p=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Li.crossVectors(n,Mn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Li.crossVectors(n,Mn)),Li.normalize(),ro.crossVectors(Mn,Li),s[0]=Li.x,s[4]=ro.x,s[8]=Mn.x,s[1]=Li.y,s[5]=ro.y,s[9]=Mn.y,s[2]=Li.z,s[6]=ro.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],_=n[7],M=n[11],E=n[15],A=s[0],P=s[4],C=s[8],b=s[12],S=s[1],L=s[5],O=s[9],V=s[13],z=s[2],F=s[6],B=s[10],K=s[14],G=s[3],st=s[7],ft=s[11],vt=s[15];return r[0]=o*A+a*S+c*z+l*G,r[4]=o*P+a*L+c*F+l*st,r[8]=o*C+a*O+c*B+l*ft,r[12]=o*b+a*V+c*K+l*vt,r[1]=h*A+d*S+f*z+u*G,r[5]=h*P+d*L+f*F+u*st,r[9]=h*C+d*O+f*B+u*ft,r[13]=h*b+d*V+f*K+u*vt,r[2]=p*A+x*S+m*z+g*G,r[6]=p*P+x*L+m*F+g*st,r[10]=p*C+x*O+m*B+g*ft,r[14]=p*b+x*V+m*K+g*vt,r[3]=v*A+_*S+M*z+E*G,r[7]=v*P+_*L+M*F+E*st,r[11]=v*C+_*O+M*B+E*ft,r[15]=v*b+_*V+M*K+E*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*u-n*c*u)+x*(+e*c*u-e*l*f+r*o*f-s*o*u+s*l*h-r*c*h)+m*(+e*l*d-e*a*u-r*o*d+n*o*u+r*a*h-n*l*h)+g*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=d*m*l-x*f*l+x*c*u-a*m*u-d*c*g+a*f*g,_=p*f*l-h*m*l-p*c*u+o*m*u+h*c*g-o*f*g,M=h*x*l-p*d*l+p*a*u-o*x*u-h*a*g+o*d*g,E=p*d*c-h*x*c-p*a*f+o*x*f+h*a*m-o*d*m,A=e*v+n*_+s*M+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=v*P,t[1]=(x*f*r-d*m*r-x*s*u+n*m*u+d*s*g-n*f*g)*P,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*g+n*c*g)*P,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*u-n*c*u)*P,t[4]=_*P,t[5]=(h*m*r-p*f*r+p*s*u-e*m*u-h*s*g+e*f*g)*P,t[6]=(p*c*r-o*m*r-p*s*l+e*m*l+o*s*g-e*c*g)*P,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*u+e*c*u)*P,t[8]=M*P,t[9]=(p*d*r-h*x*r-p*n*u+e*x*u+h*n*g-e*d*g)*P,t[10]=(o*x*r-p*a*r+p*n*l-e*x*l-o*n*g+e*a*g)*P,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*u-e*a*u)*P,t[12]=E*P,t[13]=(h*x*s-p*d*s+p*n*f-e*x*f-h*n*m+e*d*m)*P,t[14]=(p*a*s-o*x*s-p*n*c+e*x*c+o*n*m-e*a*m)*P,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,u=r*h,p=r*d,x=o*h,m=o*d,g=a*d,v=c*l,_=c*h,M=c*d,E=n.x,A=n.y,P=n.z;return s[0]=(1-(x+g))*E,s[1]=(u+M)*E,s[2]=(p-_)*E,s[3]=0,s[4]=(u-M)*A,s[5]=(1-(f+g))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(p+_)*P,s[9]=(m-v)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);const l=1/r,h=1/o,d=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,e.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Go)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Go)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new R,kn=new fe,Qf=new R(0,0,0),tp=new R(1,1,1),Li=new R,ro=new R,Mn=new R,Nl=new fe,kl=new Ti;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const Fl=new R,bs=new Ti,xi=new fe,oo=new R,ir=new R,np=new R,ip=new Ti,zl=new R(1,0,0),Bl=new R(0,1,0),Vl=new R(0,0,1),Hl={type:"added"},sp={type:"removed"},ws={type:"childadded",child:null},ga={type:"childremoved",child:null};class Ee extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new R,e=new Un,n=new Ti,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ir,oo,this.up):xi.lookAt(oo,ir,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(xi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new R(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new R,vi=new R,xa=new R,_i=new R,Es=new R,As=new R,Gl=new R,va=new R,_a=new R,Ma=new R,ya=new ge,Sa=new ge,ba=new ge;class Hn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),vi.subVectors(n,e),xa.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(vi),c=Fn.dot(xa),l=vi.dot(vi),h=vi.dot(xa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ya.setScalar(0),Sa.setScalar(0),ba.setScalar(0),ya.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),vi.subVectors(t,e),Fn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Fn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,n),As.subVectors(r,n),va.subVectors(t,n);const c=Es.dot(va),l=As.dot(va);if(c<=0&&l<=0)return e.copy(n);_a.subVectors(t,s);const h=Es.dot(_a),d=As.dot(_a);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Es,o);Ma.subVectors(t,r);const u=Es.dot(Ma),p=As.dot(Ma);if(p>=0&&u<=p)return e.copy(r);const x=u*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(As,a);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Gl.subVectors(r,s),a=(d-h)/(d-h+(u-p)),e.copy(s).addScaledVector(Gl,a);const g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Es,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},ao={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=tl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return oe.workingToColorSpace(Ke.copy(this),t),Math.round(Qt(Ke.r*255,0,255))*65536+Math.round(Qt(Ke.g*255,0,255))*256+Math.round(Qt(Ke.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=be){oe.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(ao);const n=_r(Di.h,ao.h,e),s=_r(Di.s,ao.s,e),r=_r(Di.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Wt;Wt.NAMES=mu;let rp=0;class Hr extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Bs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ka,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class di extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new R,co=new lt;let op=0;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}}class gu extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xu extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Lt extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ap=0;const Tn=new fe,Ea=new Ee,Ts=new R,yn=new Dn,sr=new Dn,Be=new R;class ie extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?xu:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(yn.min,sr.min),yn.expandByPoint(Be),Be.addVectors(yn.max,sr.max),yn.expandByPoint(Be)):(yn.expandByPoint(sr.min),yn.expandByPoint(sr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(t,l),Be.add(Ts)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new R,c[C]=new R;const l=new R,h=new R,d=new R,f=new lt,u=new lt,p=new lt,x=new R,m=new R;function g(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),u.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),h.sub(l),d.sub(l),u.sub(f),p.sub(f);const L=1/(u.x*p.y-p.x*u.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(L),a[C].add(x),a[b].add(x),a[S].add(x),c[C].add(m),c[b].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const S=v[C],L=S.start,O=S.count;for(let V=L,z=L+O;V<z;V+=3)g(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new R,M=new R,E=new R,A=new R;function P(C){E.fromBufferAttribute(s,C),A.copy(E);const b=a[C];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(A,b);const L=M.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,b=v.length;C<b;++C){const S=v[C],L=S.start,O=S.count;for(let V=L,z=L+O;V<z;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let u=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*h;for(let g=0;g<h;g++)f[p++]=l[u++]}return new mn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new fe,Zi=new jf,lo=new wi,Xl=new R,ho=new R,uo=new R,fo=new R,Aa=new R,po=new R,ql=new R,mo=new R;class le extends Ee{constructor(t=new ie,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Aa.fromBufferAttribute(d,t),o?po.addScaledVector(Aa,h):po.addScaledVector(Aa.sub(e),h))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(lo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(lo,Xl)===null||Zi.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,E=_;M<E;M+=3){const A=a.getX(M),P=a.getX(M+1),C=a.getX(M+2);s=go(this,g,t,n,l,h,d,A,P,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const v=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=go(this,o,t,n,l,h,d,v,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,E=_;M<E;M+=3){const A=M,P=M+1,C=M+2;s=go(this,g,t,n,l,h,d,A,P,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const v=m,_=m+1,M=m+2;s=go(this,o,t,n,l,h,d,v,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cp(i,t,e,n,s,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Gi,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ho),i.getVertexPosition(c,uo),i.getVertexPosition(l,fo);const h=cp(i,t,e,n,ho,uo,fo,ql);if(h){const d=new R;Hn.getBarycoord(ql,ho,uo,fo,d),s&&(h.uv=Hn.getInterpolatedAttribute(s,a,c,l,d,new lt)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,c,l,d,new lt)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};Hn.getNormal(ho,uo,fo,f.normal),h.face=f,h.barycoord=d}return h}class gn extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function p(x,m,g,v,_,M,E,A,P,C,b){const S=M/P,L=E/C,O=M/2,V=E/2,z=A/2,F=P+1,B=C+1;let K=0,G=0;const st=new R;for(let ft=0;ft<B;ft++){const vt=ft*L-V;for(let Ot=0;Ot<F;Ot++){const Zt=Ot*S-O;st[x]=Zt*v,st[m]=vt*_,st[g]=z,l.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[g]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Ot/P),d.push(1-ft/C),K+=1}}for(let ft=0;ft<C;ft++)for(let vt=0;vt<P;vt++){const Ot=f+vt+F*ft,Zt=f+vt+F*(ft+1),he=f+(vt+1)+F*(ft+1),Ft=f+(vt+1)+F*ft;c.push(Ot,Zt,Ft),c.push(Zt,he,Ft),G+=6}a.addGroup(u,G,b),u+=G,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=qs(i[e]);for(const s in n)t[s]=n[s]}return t}function lp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const _u={clone:qs,merge:on};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gr extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new R,Yl=new lt,$l=new lt;class dn extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,$l),e.subVectors($l,Yl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class dp extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const r=new dn(Rs,Cs,t,e);r.layers=this.layers,this.add(r);const o=new dn(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new dn(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const c=new dn(Rs,Cs,t,e);c.layers=this.layers,this.add(c);const l=new dn(Rs,Cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Mu extends en{constructor(t=[],e=Gs,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fp extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Bi});r.uniforms.tEquirect.value=e;const o=new le(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=ri),new dp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class de extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ps{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new ps(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wr extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uo extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ge,h=Ge,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ps=new fe,Kl=new fe,xo=[],Jl=new Dn,mp=new fe,rr=new le,or=new wi;class qn extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),Jl.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ps),or.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),Kl.multiplyMatrices(n,Ps),rr.matrixWorld=Kl,rr.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){const c=xo[o];c.instanceId=r,c.object=this,e.push(c)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uo(new Float32Array(s*this.count),s,this.count,Zc,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new R,gp=new R,xp=new Jt;class ss{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ra.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xp.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new wi,vp=new lt(.5,.5),vo=new R;class Xr{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],_=r[13],M=r[14],E=r[15];if(s[0].setComponents(l-o,u-h,g-p,E-v).normalize(),s[1].setComponents(l+o,u+h,g+p,E+v).normalize(),s[2].setComponents(l+a,u+d,g+x,E+_).normalize(),s[3].setComponents(l-a,u-d,g-x,E-_).normalize(),n)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,u-f,g-m,E-M).normalize();else if(s[4].setComponents(l-c,u-f,g-m,E-M).normalize(),e===Xn)s[5].setComponents(l+c,u+f,g+m,E+M).normalize();else if(e===Go)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);const e=vp.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vo.x=s.normal.x>0?t.max.x:t.min.x,vo.y=s.normal.y>0?t.max.y:t.min.y,vo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Jn=new fe,Zn=new Xr;class nl{constructor(){this.coordinateSystem=Xn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Zn.setFromProjectionMatrix(Jn,s.coordinateSystem,s.reversedDepth),Zn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Zn.setFromProjectionMatrix(Jn,s.coordinateSystem,s.reversedDepth),Zn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Zn.setFromProjectionMatrix(Jn,s.coordinateSystem,s.reversedDepth),Zn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Zn.setFromProjectionMatrix(Jn,s.coordinateSystem,s.reversedDepth),Zn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(Jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),Zn.setFromProjectionMatrix(Jn,s.coordinateSystem,s.reversedDepth),Zn.containsPoint(t))return!0}return!1}clone(){return new nl}}function Ca(i,t){return i-t}function _p(i,t){return i.z-t.z}function Mp(i,t){return t.z-i.z}class yp{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const hn=new fe,Sp=new Wt(1,1,1),Zl=new Xr,bp=new nl,_o=new Dn,Qi=new wi,ar=new R,jl=new R,wp=new R,Pa=new yp,Je=new le,Mo=[];function Ep(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function ts(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class Ap extends le{constructor(t,e,n=e*2,s){super(new ie,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Uo(e,t,t,wn,In);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Uo(e,t,t,Jo,Wi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Uo(e,t,t,wn,In);n.colorSpace=oe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),d=new mn(h,c,l);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new mn(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,hn),this.getBoundingBoxAt(r,_o).applyMatrix4(hn),t.union(_o)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,hn),this.getBoundingSphereAt(r,Qi).applyMatrix4(hn),t.union(Qi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ca),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;hn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Sp.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ca),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),f=n.getAttribute(h);Ep(d,f,c);const u=d.itemSize;for(let p=d.count,x=l;p<x;p++){const m=c+p;for(let g=0;g<u;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(c*u,l*u)}if(s){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)r.setX(h+f,c+o.getX(f));for(let f=o.count,u=d;f<u;f++)r.setX(h+f,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:f}=l,u=r.index,p=u.array,x=t-d;for(let m=h;m<h+f;m++)p[m]=p[m]+x;u.array.copyWithin(e,h,h+f),u.addUpdateRange(e,f),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=l,f=r.attributes;for(const u in f){const p=f[u],{array:x,itemSize:m}=p;x.copyWithin(t*m,h*m,(h+d)*m),p.addUpdateRange(t*m,d*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new Dn,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(ar.fromBufferAttribute(a,h))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new wi;this.getBoundingBoxAt(t,_o),_o.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let d=l;o&&(d=o.getX(d)),ar.fromBufferAttribute(a,d),c=Math.max(c,r.center.distanceToSquared(ar))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,s=this._matricesTexture.image.data;return e.toArray(s,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Ca);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);ts(this._multiDrawCounts,s),ts(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),ts(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),ts(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),ts(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ie,this._initializeGeometry(r));const o=this.geometry;r.index&&ts(r.index.array,o.index.array);for(const a in r.attributes)ts(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Je.material=this.material,Je.geometry.index=o.index,Je.geometry.attributes=o.attributes,Je.geometry.boundingBox===null&&(Je.geometry.boundingBox=new Dn),Je.geometry.boundingSphere===null&&(Je.geometry.boundingSphere=new wi);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=s[l];Je.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Je.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Je.geometry.boundingBox),this.getBoundingSphereAt(l,Je.geometry.boundingSphere),Je.raycast(t,Mo);for(let d=0,f=Mo.length;d<f;d++){const u=Mo[d];u.object=this,u.batchId=a,e.push(u)}Mo.length=0}Je.material=null,Je.geometry.index=null,Je.geometry.attributes={},Je.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,f=this.perObjectFrustumCulled,u=this._indirectTexture,p=u.image.data,x=n.isArrayCamera?bp:Zl;f&&!n.isArrayCamera&&(hn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Zl.setFromProjectionMatrix(hn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){hn.copy(this.matrixWorld).invert(),ar.setFromMatrixPosition(n.matrixWorld).applyMatrix4(hn),jl.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(hn);for(let _=0,M=c.length;_<M;_++)if(c[_].visible&&c[_].active){const E=c[_].geometryIndex;this.getMatrixAt(_,hn),this.getBoundingSphereAt(E,Qi).applyMatrix4(hn);let A=!1;if(f&&(A=!x.intersectsSphere(Qi,n)),!A){const P=d[E],C=wp.subVectors(Qi.center,ar).dot(jl);Pa.push(P.start,P.count,C,_)}}const g=Pa.list,v=this.customSort;v===null?g.sort(r.transparent?Mp:_p):v.call(this,g,n);for(let _=0,M=g.length;_<M;_++){const E=g[_];l[m]=E.start*a,h[m]=E.count,p[m]=E.index,m++}Pa.reset()}else for(let g=0,v=c.length;g<v;g++)if(c[g].visible&&c[g].active){const _=c[g].geometryIndex;let M=!1;if(f&&(this.getMatrixAt(g,hn),this.getBoundingSphereAt(_,Qi).applyMatrix4(hn),M=!x.intersectsSphere(Qi,n)),!M){const E=d[_];l[m]=E.start*a,h[m]=E.count,p[m]=g,m++}}u.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class xn extends en{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yu extends en{constructor(t,e,n=Wi,s,r,o,a=Ge,c=Ge,l,h=Er,d=1){if(h!==Er&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new el(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Su extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xo extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(u,2));function v(){const M=new R,E=new R;let A=0;const P=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,L=S*(e-t)+t;for(let O=0;O<=s;O++){const V=O/s,z=V*c+a,F=Math.sin(z),B=Math.cos(z);E.x=L*F,E.y=-S*n+m,E.z=L*B,d.push(E.x,E.y,E.z),M.set(F,P,B).normalize(),f.push(M.x,M.y,M.z),u.push(V,1-S),b.push(p++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=x[b][C],L=x[b+1][C],O=x[b+1][C+1],V=x[b][C+1];(t>0||b!==0)&&(h.push(S,L,V),A+=3),(e>0||b!==r-1)&&(h.push(L,O,V),A+=3)}l.addGroup(g,A,0),g+=A}function _(M){const E=p,A=new lt,P=new R;let C=0;const b=M===!0?t:e,S=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*S,0),f.push(0,S,0),u.push(.5,.5),p++;const L=p;for(let O=0;O<=s;O++){const z=O/s*c+a,F=Math.cos(z),B=Math.sin(z);P.x=b*B,P.y=m*S,P.z=b*F,d.push(P.x,P.y,P.z),f.push(0,S,0),A.x=F*.5+.5,A.y=B*.5*S+.5,u.push(A.x,A.y),p++}for(let O=0;O<s;O++){const V=E+O,z=L+O;M===!0?h.push(z,z+1,V):h.push(z+1,z,V),C+=3}l.addGroup(g,C,M===!0?1:2),g+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qr extends Le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new R,M=new R,E=new R;for(let A=0;A<e.length;A+=3)u(e[A+0],_),u(e[A+1],M),u(e[A+2],E),c(_,M,E,v)}function c(v,_,M,E){const A=E+1,P=[];for(let C=0;C<=A;C++){P[C]=[];const b=v.clone().lerp(M,C/A),S=_.clone().lerp(M,C/A),L=A-C;for(let O=0;O<=L;O++)O===0&&C===A?P[C][O]=b:P[C][O]=b.clone().lerp(S,O/L)}for(let C=0;C<A;C++)for(let b=0;b<2*(A-C)-1;b++){const S=Math.floor(b/2);b%2===0?(f(P[C][S+1]),f(P[C+1][S]),f(P[C][S])):(f(P[C][S+1]),f(P[C+1][S+1]),f(P[C+1][S]))}}function l(v){const _=new R;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){const v=new R;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const M=m(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(M,1-E)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const _=o[v+0],M=o[v+2],E=o[v+4],A=Math.max(_,M,E),P=Math.min(_,M,E);A>.9&&P<.1&&(_<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,_){const M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function p(){const v=new R,_=new R,M=new R,E=new R,A=new lt,P=new lt,C=new lt;for(let b=0,S=0;b<r.length;b+=9,S+=6){v.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),E.copy(v).add(_).add(M).divideScalar(3);const L=m(E);x(A,S+0,v,L),x(P,S+2,_,L),x(C,S+4,M,L)}}function x(v,_,M,E){E<0&&v.x===1&&(o[_]=v.x-1),M.x===0&&M.z===0&&(o[_]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.vertices,t.indices,t.radius,t.details)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new fe;for(let u=0;u<=t;u++){const p=u/t;s[u]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Qt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Qt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sl extends $n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tp extends sl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const yo=new R,Ia=new rl,La=new rl,Da=new rl;class Zo extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),l=yo);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ia.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,p,x,m),La.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,p,x,m),Da.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),La.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Da.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Ia.calc(c),La.calc(c),Da.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ql(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Rp(i,t){const e=1-i;return e*e*t}function Cp(i,t){return 2*(1-i)*i*t}function Pp(i,t){return i*i*t}function Mr(i,t,e,n){return Rp(i,t)+Cp(i,e)+Pp(i,n)}function Ip(i,t){const e=1-i;return e*e*e*t}function Lp(i,t){const e=1-i;return 3*e*e*i*t}function Dp(i,t){return 3*(1-i)*i*i*t}function Up(i,t){return i*i*i*t}function yr(i,t,e,n,s){return Ip(i,t)+Lp(i,e)+Dp(i,n)+Up(i,s)}class bu extends $n{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Op extends $n{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wu extends $n{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends $n{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends $n{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends $n{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ql(a,c.x,l.x,h.x,d.x),Ql(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:Tp,CatmullRomCurve3:Zo,CubicBezierCurve:bu,CubicBezierCurve3:Op,EllipseCurve:sl,LineCurve:wu,LineCurve3:Np,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Au,SplineCurve:Tu});class kp extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qo[s.type]().fromJSON(s))}return this}}class th extends kp{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wu(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Eu(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new bu(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new sl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class js extends th{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new th().fromJSON(s))}return this}}function Fp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ru(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Gp(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let f=e;f<s;f+=e){const u=i[f],p=i[f+1];u<a&&(a=u),p<c&&(c=p),u>h&&(h=u),p>d&&(d=p)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Cr(r,o,e,a,c,l,0),o}function Ru(i,t,e,n,s){let r;if(s===tm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=eh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=eh(o/n|0,i[o],i[o+1],r);return r&&Ys(r,r.next)&&(Ir(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ys(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&$p(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Bp(i,n,s,r):zp(i)){t.push(c.i,i.i,l.i),Ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Vp(ds(i),t),Cr(i,t,e,n,s,r,2)):o===2&&Hp(i,t,e,n,s,r):Cr(ds(i),t,e,n,s,r,1);break}}}function zp(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),u=Math.max(a,c,l);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&fr(s,a,r,c,o,l,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,c,l),p=Math.min(h,d,f),x=Math.max(a,c,l),m=Math.max(h,d,f),g=Oc(u,p,t,e,n),v=Oc(x,m,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=g&&M&&M.z<=v;){if(_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&fr(a,h,c,d,l,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fr(a,h,c,d,l,f,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&fr(a,h,c,d,l,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=u&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&fr(a,h,c,d,l,f,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ys(n,s)&&Pu(n,e,e.next,s)&&Pr(n,s)&&Pr(s,n)&&(t.push(n.i,e.i,s.i),Ir(e),Ir(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function Hp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zp(o,a)){let c=Iu(o,a);o=ds(o,o.next),c=ds(c,c.next),Cr(o,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ru(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Jp(l))}s.sort(Wp);for(let r=0;r<s.length;r++)e=Xp(s[r],e);return e}function Wp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Xp(i,t){const e=qp(i,t);if(!e)return t;const n=Iu(e,i);return ds(n,n.next),ds(e,e.next)}function qp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ys(i,e))return e;do{if(Ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Cu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Pr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Yp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Yp(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function $p(i,t,e,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Cu(i,t,e,n,s,r,o,a)}function Zp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!jp(i,t)&&(Pr(i,t)&&Pr(t,i)&&Qp(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Ys(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ys(i,t){return i.x===t.x&&i.y===t.y}function Pu(i,t,e,n){const s=bo(Ce(i,t,e)),r=bo(Ce(i,t,n)),o=bo(Ce(e,n,i)),a=bo(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&So(i,e,t)||r===0&&So(i,n,t)||o===0&&So(e,i,n)||a===0&&So(e,t,n))}function So(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function jp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Qp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Iu(i,t){const e=Nc(i.i,i.x,i.y),n=Nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eh(i,t,e,n){const s=Nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class em{static triangulate(t,e,n=2){return Fp(t,e,n)}}class Si{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Si.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];nh(t),ih(n,t);let o=t.length;e.forEach(nh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ih(n,e[c]);const a=em.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function nh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class jo extends ie{constructor(t=new js([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Lt(s,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:nm;let _,M=!1,E,A,P,C;g&&(_=g.getSpacedPoints(h),M=!0,f=!1,E=g.computeFrenetFrames(h,!1),A=new R,P=new R,C=new R),f||(m=0,u=0,p=0,x=0);const b=a.extractPoints(l);let S=b.shape;const L=b.holes;if(!Si.isClockWise(S)){S=S.reverse();for(let it=0,Q=L.length;it<Q;it++){const j=L[it];Si.isClockWise(j)&&(L[it]=j.reverse())}}function V(it){const j=10000000000000001e-36;let J=it[0];for(let pt=1;pt<=it.length;pt++){const rt=pt%it.length,mt=it[rt],Yt=mt.x-J.x,Xt=mt.y-J.y,T=Yt*Yt+Xt*Xt,y=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(J.x),Math.abs(J.y)),k=j*y*y;if(T<=k){it.splice(rt,1),pt--;continue}J=mt}}V(S),L.forEach(V);const z=L.length,F=S;for(let it=0;it<z;it++){const Q=L[it];S=S.concat(Q)}function B(it,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(Q,j)}const K=S.length;function G(it,Q,j){let J,pt,rt;const mt=it.x-Q.x,Yt=it.y-Q.y,Xt=j.x-it.x,T=j.y-it.y,y=mt*mt+Yt*Yt,k=mt*T-Yt*Xt;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(y),nt=Math.sqrt(Xt*Xt+T*T),Y=Q.x-Yt/q,It=Q.y+mt/q,dt=j.x-T/nt,Rt=j.y+Xt/nt,Ct=((dt-Y)*T-(Rt-It)*Xt)/(mt*T-Yt*Xt);J=Y+mt*Ct-it.x,pt=It+Yt*Ct-it.y;const ot=J*J+pt*pt;if(ot<=2)return new lt(J,pt);rt=Math.sqrt(ot/2)}else{let q=!1;mt>Number.EPSILON?Xt>Number.EPSILON&&(q=!0):mt<-Number.EPSILON?Xt<-Number.EPSILON&&(q=!0):Math.sign(Yt)===Math.sign(T)&&(q=!0),q?(J=-Yt,pt=mt,rt=Math.sqrt(y)):(J=mt,pt=Yt,rt=Math.sqrt(y/2))}return new lt(J/rt,pt/rt)}const st=[];for(let it=0,Q=F.length,j=Q-1,J=it+1;it<Q;it++,j++,J++)j===Q&&(j=0),J===Q&&(J=0),st[it]=G(F[it],F[j],F[J]);const ft=[];let vt,Ot=st.concat();for(let it=0,Q=z;it<Q;it++){const j=L[it];vt=[];for(let J=0,pt=j.length,rt=pt-1,mt=J+1;J<pt;J++,rt++,mt++)rt===pt&&(rt=0),mt===pt&&(mt=0),vt[J]=G(j[J],j[rt],j[mt]);ft.push(vt),Ot=Ot.concat(vt)}let Zt;if(m===0)Zt=Si.triangulateShape(F,L);else{const it=[],Q=[];for(let j=0;j<m;j++){const J=j/m,pt=u*Math.cos(J*Math.PI/2),rt=p*Math.sin(J*Math.PI/2)+x;for(let mt=0,Yt=F.length;mt<Yt;mt++){const Xt=B(F[mt],st[mt],rt);Dt(Xt.x,Xt.y,-pt),J===0&&it.push(Xt)}for(let mt=0,Yt=z;mt<Yt;mt++){const Xt=L[mt];vt=ft[mt];const T=[];for(let y=0,k=Xt.length;y<k;y++){const q=B(Xt[y],vt[y],rt);Dt(q.x,q.y,-pt),J===0&&T.push(q)}J===0&&Q.push(T)}}Zt=Si.triangulateShape(it,Q)}const he=Zt.length,Ft=p+x;for(let it=0;it<K;it++){const Q=f?B(S[it],Ot[it],Ft):S[it];M?(P.copy(E.normals[0]).multiplyScalar(Q.x),A.copy(E.binormals[0]).multiplyScalar(Q.y),C.copy(_[0]).add(P).add(A),Dt(C.x,C.y,C.z)):Dt(Q.x,Q.y,0)}for(let it=1;it<=h;it++)for(let Q=0;Q<K;Q++){const j=f?B(S[Q],Ot[Q],Ft):S[Q];M?(P.copy(E.normals[it]).multiplyScalar(j.x),A.copy(E.binormals[it]).multiplyScalar(j.y),C.copy(_[it]).add(P).add(A),Dt(C.x,C.y,C.z)):Dt(j.x,j.y,d/h*it)}for(let it=m-1;it>=0;it--){const Q=it/m,j=u*Math.cos(Q*Math.PI/2),J=p*Math.sin(Q*Math.PI/2)+x;for(let pt=0,rt=F.length;pt<rt;pt++){const mt=B(F[pt],st[pt],J);Dt(mt.x,mt.y,d+j)}for(let pt=0,rt=L.length;pt<rt;pt++){const mt=L[pt];vt=ft[pt];for(let Yt=0,Xt=mt.length;Yt<Xt;Yt++){const T=B(mt[Yt],vt[Yt],J);M?Dt(T.x,T.y+_[h-1].y,_[h-1].x+j):Dt(T.x,T.y,d+j)}}}$(),et();function $(){const it=s.length/3;if(f){let Q=0,j=K*Q;for(let J=0;J<he;J++){const pt=Zt[J];Tt(pt[2]+j,pt[1]+j,pt[0]+j)}Q=h+m*2,j=K*Q;for(let J=0;J<he;J++){const pt=Zt[J];Tt(pt[0]+j,pt[1]+j,pt[2]+j)}}else{for(let Q=0;Q<he;Q++){const j=Zt[Q];Tt(j[2],j[1],j[0])}for(let Q=0;Q<he;Q++){const j=Zt[Q];Tt(j[0]+K*h,j[1]+K*h,j[2]+K*h)}}n.addGroup(it,s.length/3-it,0)}function et(){const it=s.length/3;let Q=0;bt(F,Q),Q+=F.length;for(let j=0,J=L.length;j<J;j++){const pt=L[j];bt(pt,Q),Q+=pt.length}n.addGroup(it,s.length/3-it,1)}function bt(it,Q){let j=it.length;for(;--j>=0;){const J=j;let pt=j-1;pt<0&&(pt=it.length-1);for(let rt=0,mt=h+m*2;rt<mt;rt++){const Yt=K*rt,Xt=K*(rt+1),T=Q+J+Yt,y=Q+pt+Yt,k=Q+pt+Xt,q=Q+J+Xt;ee(T,y,k,q)}}}function Dt(it,Q,j){c.push(it),c.push(Q),c.push(j)}function Tt(it,Q,j){ye(it),ye(Q),ye(j);const J=s.length/3,pt=v.generateTopUV(n,s,J-3,J-2,J-1);I(pt[0]),I(pt[1]),I(pt[2])}function ee(it,Q,j,J){ye(it),ye(Q),ye(J),ye(Q),ye(j),ye(J);const pt=s.length/3,rt=v.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);I(rt[0]),I(rt[1]),I(rt[3]),I(rt[1]),I(rt[2]),I(rt[3])}function ye(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function I(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return im(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qo[s.type]().fromJSON(s)),new jo(n,t.options)}}const nm={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-d),new lt(f,1-p),new lt(x,1-g)]:[new lt(a,1-c),new lt(h,1-d),new lt(u,1-p),new lt(m,1-g)]}};function im(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hi extends il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hi(t.radius,t.detail)}}class ae extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const v=g*f-o;for(let _=0;_<l;_++){const M=_*d-r;p.push(M,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){const _=v+l*g,M=v+l*(g+1),E=v+1+l*(g+1),A=v+1+l*g;u.push(_,M,A),u.push(M,E,A)}this.setIndex(u),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.widthSegments,t.heightSegments)}}class ol extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const f=(e-t)/s,u=new R,p=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;u.x=d*Math.cos(g),u.y=d*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const v=g+m,_=v,M=v+n+1,E=v+n+2,A=v+1;a.push(_,M,A),a.push(M,E,A)}}this.setIndex(a),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qo extends ie{constructor(t=new js([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(o,2));function l(h){const d=s.length/3,f=h.extractPoints(e);let u=f.shape;const p=f.holes;Si.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];Si.isClockWise(v)===!0&&(p[m]=v.reverse())}const x=Si.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];u=u.concat(v)}for(let m=0,g=u.length;m<g;m++){const v=u[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){const v=x[m],_=v[0]+d,M=v[1]+d,E=v[2]+d;n.push(_,M,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return sm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Qo(n,t.curveSegments)}}function sm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Yr extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,f=new R,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const v=[],_=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const A=E/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-_),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const _=h[g][v+1],M=h[g][v],E=h[g+1][v],A=h[g+1][v+1];(g!==0||o>0)&&u.push(_,M,A),(g!==n-1||c<Math.PI)&&u.push(M,E,A)}this.setIndex(u),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $s extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,d=new R,f=new R;for(let u=0;u<=n;u++)for(let p=0;p<=s;p++){const x=p/s*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let p=1;p<=s;p++){const x=(s+1)*u+p-1,m=(s+1)*(u-1)+p-1,g=(s+1)*(u-1)+p,v=(s+1)*u+p;o.push(x,m,v),o.push(m,g,v)}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ks extends ie{constructor(t=new Au(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new lt;let h=new R;const d=[],f=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(u,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),g()}function m(_){h=t.getPointAt(_/e,h);const M=o.normals[_],E=o.binormals[_];for(let A=0;A<=s;A++){const P=A/s*Math.PI*2,C=Math.sin(P),b=-Math.cos(P);c.x=b*M.x+C*E.x,c.y=b*M.y+C*E.y,c.z=b*M.z+C*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){const E=(s+1)*(_-1)+(M-1),A=(s+1)*_+(M-1),P=(s+1)*_+M,C=(s+1)*(_-1)+M;p.push(E,A,C),p.push(A,P,C)}}function v(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)l.x=_/e,l.y=M/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ks(new qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Gt extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rm extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class om extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class al extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lu extends al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new fe,sh=new R,rh=new R;class Du{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oh=new fe,cr=new R,Oa=new R;class am extends Du{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(cr),Oa.copy(n.position),Oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oa),n.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh,n.coordinateSystem,n.reversedDepth)}}class cm extends al{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uu extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lm extends Du{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new lm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hm extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class um extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ah(i,t,e,n){const s=dm(n);switch(e){case ou:return i*t;case Zc:return i*t/s.components*s.byteLength;case Jo:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case jc:return i*t*2/s.components*s.byteLength;case au:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Qc:return i*t*4/s.components*s.byteLength;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tc:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(i){switch(i){case Yn:case nu:return{byteLength:1,components:1};case br:case iu:case qi:return{byteLength:2,components:1};case Kc:case Jc:return{byteLength:2,components:4};case Wi:case $c:case In:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fm(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,km=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,dg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,jg=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,y0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,I0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O0=`#define PHONG
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
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,k0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,z0=`#define TOON
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
}`,B0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,V0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,W0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:xm,alphatest_fragment:vm,alphatest_pars_fragment:_m,aomap_fragment:Mm,aomap_pars_fragment:ym,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Am,iridescence_fragment:Tm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Um,color_pars_vertex:Om,color_vertex:Nm,common:km,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Bm,displacementmap_vertex:Vm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:$m,envmap_pars_vertex:Km,envmap_physical_pars_fragment:og,envmap_vertex:Jm,fog_vertex:Zm,fog_pars_vertex:jm,fog_fragment:Qm,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:cg,lights_phong_fragment:lg,lights_phong_pars_fragment:hg,lights_physical_fragment:ug,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:_g,map_fragment:Mg,map_pars_fragment:yg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Ag,morphcolor_vertex:Tg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Pg,normal_fragment_begin:Ig,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Bg,opaque_fragment:Vg,packing:Hg,premultiplied_alpha_fragment:Gg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:t0,skinning_vertex:e0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:o0,transmission_fragment:a0,transmission_pars_fragment:c0,uv_pars_fragment:l0,uv_pars_vertex:h0,uv_vertex:u0,worldpos_vertex:d0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:x0,cube_frag:v0,depth_vert:_0,depth_frag:M0,distanceRGBA_vert:y0,distanceRGBA_frag:S0,equirect_vert:b0,equirect_frag:w0,linedashed_vert:E0,linedashed_frag:A0,meshbasic_vert:T0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:I0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:U0,meshphong_vert:O0,meshphong_frag:N0,meshphysical_vert:k0,meshphysical_frag:F0,meshtoon_vert:z0,meshtoon_frag:B0,points_vert:V0,points_frag:H0,shadow_vert:G0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},xt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ni={basic:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:on([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:on([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:on([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:on([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:on([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:on([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:on([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:on([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:on([xt.common,xt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:on([xt.lights,xt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ni.physical={uniforms:on([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const wo={r:0,b:0,g:0},es=new Un,Y0=new fe;function $0(i,t,e,n,s,r,o){const a=new Wt(0);let c=r===!0?0:1,l,h,d=null,f=0,u=null;function p(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const E=p(_);E===null?g(a,c):E&&E.isColor&&(g(E,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){const E=p(M);E&&(E.isCubeTexture||E.mapping===Ko)?(h===void 0&&(h=new le(new gn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:qs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(M.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(es)),h.material.toneMapped=oe.getTransfer(E.colorSpace)!==me,(d!==E||f!==E.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new le(new ae(2,2),new On({name:"BackgroundMaterial",uniforms:qs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(wo,vu(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,M,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,g(a,c)},render:x,addToRenderList:m,dispose:v}}function K0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,O,V,z){let F=!1;const B=d(V,O,L);r!==B&&(r=B,l(r.object)),F=u(S,V,O,z),F&&p(S,V,O,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(S,L,O,V),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,L,O){const V=O.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let F=z[L.id];F===void 0&&(F={},z[L.id]=F);let B=F[V];return B===void 0&&(B=f(c()),F[V]=B),B}function f(S){const L=[],O=[],V=[];for(let z=0;z<e;z++)L[z]=0,O[z]=0,V[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:V,object:S,attributes:{},index:null}}function u(S,L,O,V){const z=r.attributes,F=L.attributes;let B=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){const ft=z[G];let vt=F[G];if(vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;B++}return r.attributesNum!==B||r.index!==V}function p(S,L,O,V){const z={},F=L.attributes;let B=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){let ft=F[G];ft===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),z[G]=vt,B++}r.attributes=z,r.attributesNum=B,r.index=V}function x(){const S=r.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function m(S){g(S,0)}function g(S,L){const O=r.newAttributes,V=r.enabledAttributes,z=r.attributeDivisors;O[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),z[S]!==L&&(i.vertexAttribDivisor(S,L),z[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let O=0,V=L.length;O<V;O++)L[O]!==S[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function _(S,L,O,V,z,F,B){B===!0?i.vertexAttribIPointer(S,L,O,z,F):i.vertexAttribPointer(S,L,O,V,z,F)}function M(S,L,O,V){x();const z=V.attributes,F=O.getAttributes(),B=L.defaultAttributeValues;for(const K in F){const G=F[K];if(G.location>=0){let st=z[K];if(st===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ft=st.normalized,vt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const Zt=Ot.buffer,he=Ot.type,Ft=Ot.bytesPerElement,$=he===i.INT||he===i.UNSIGNED_INT||st.gpuType===$c;if(st.isInterleavedBufferAttribute){const et=st.data,bt=et.stride,Dt=st.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<G.locationSize;Tt++)g(G.location+Tt,et.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<G.locationSize;Tt++)m(G.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Tt=0;Tt<G.locationSize;Tt++)_(G.location+Tt,vt/G.locationSize,he,ft,bt*Ft,(Dt+vt/G.locationSize*Tt)*Ft,$)}else{if(st.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)g(G.location+et,st.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let et=0;et<G.locationSize;et++)_(G.location+et,vt/G.locationSize,he,ft,vt*Ft,vt/G.locationSize*et*Ft,$)}}else if(B!==void 0){const ft=B[K];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}v()}function E(){C();for(const S in n){const L=n[S];for(const O in L){const V=L[O];for(const z in V)h(V[z].object),delete V[z];delete L[O]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const O in L){const V=L[O];for(const z in V)h(V[z].object),delete V[z];delete L[O]}delete n[S.id]}function P(S){for(const L in n){const O=n[L];if(O[S.id]===void 0)continue;const V=O[S.id];for(const z in V)h(V[z].object),delete V[z];delete O[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function J0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];e.update(u,n,1)}function c(l,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x]*f[x];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const C=P===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!C)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:E,maxSamples:A}}function j0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ss,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,_=v*4;let M=g.clippingState||null;c.value=M,M=h(p,f,_,u);for(let E=0;E!==_;++E)M[E]=e[E];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,p!==!0||m===null){const g=u+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,M=u;_!==x;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Q0(i){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=Gs:a===sc&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===sc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fp(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Os=4,ch=[.125,.215,.35,.446,.526,.582],as=20,Na=new Uu,lh=new Wt;let ka=null,Fa=0,za=0,Ba=!1;const rs=(1+Math.sqrt(5))/2,Is=1/rs,hh=[new R(-rs,Is,0),new R(rs,Is,0),new R(-Is,0,rs),new R(Is,0,rs),new R(0,rs,-Is),new R(0,rs,Is),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],tx=new R;class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=tx}=r;ka=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Fa,za),this._renderer.xr.enabled=Ba,t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:qi,format:wn,colorSpace:Xs,depthBuffer:!1},s=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(r)),this._blurMaterial=nx(r,t,e)}return s}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s,r){const c=new dn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(lh),d.toneMapping=Vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new di({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new le(new gn,x);let g=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,g=!0):(x.color.copy(lh),g=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;Eo(s,M*E,_>2?E:0,E,E),d.setRenderTarget(s),g&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Eo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hh[(s-r-1)%hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new le(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*as-1),x=r/p,m=isFinite(r)?1+Math.floor(h*x):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const g=[];let v=0;for(let P=0;P<as;++P){const C=P/x,b=Math.exp(-C*C/2);g.push(b),P===0?v+=b:P<m&&(v+=2*b)}for(let P=0;P<g.length;P++)g[P]=g[P]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=p,f.mipInt.value=_-n;const M=this._sizeLods[s],E=3*M*(s>_-Os?s-_+Os:0),A=4*(this._cubeSize-M);Eo(e,E,A,3*M,2*M),c.setRenderTarget(e),c.render(d,Na)}}function ex(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Os?c=ch[o-i+Os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,p=6,x=3,m=2,g=1,v=new Float32Array(x*p*u),_=new Float32Array(m*p*u),M=new Float32Array(g*p*u);for(let A=0;A<u;A++){const P=A%3*2/3-1,C=A>2?0:-1,b=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];v.set(b,x*p*A),_.set(f,m*p*A);const S=[A,A,A,A,A,A];M.set(S,g*p*A)}const E=new ie;E.setAttribute("position",new mn(v,x)),E.setAttribute("uv",new mn(_,m)),E.setAttribute("faceIndex",new mn(M,g)),t.push(E),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nx(i,t,e){const n=new Float32Array(as),s=new R(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function fh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ph(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function ix(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ic||c===sc,h=c===Gs||c===Ws;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new uh(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new uh(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rx(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const u in f)t.update(f[u],i.ARRAY_BUFFER)}function l(d){const f=[],u=d.index,p=d.attributes.position;let x=0;if(u!==null){const v=u.array;x=u.version;for(let _=0,M=v.length;_<M;_+=3){const E=v[_+0],A=v[_+1],P=v[_+2];f.push(E,A,A,P,P,E)}}else if(p!==void 0){const v=p.array;x=p.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const E=_+0,A=_+1,P=_+2;f.push(E,A,A,P,P,E)}}else return;const m=new(du(f)?xu:gu)(f,1);m.version=x;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ox(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function l(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*o,p),e.update(u,n,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];e.update(m,n,1)}function d(f,u,p,x){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/o,u[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v]*x[v];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ax(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cx(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;u===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let M=a.attributes.position.count*_,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*E*4*d),P=new fu(A,M,E,d);P.type=In,P.needsUpdate=!0;const C=_*4;for(let S=0;S<d;S++){const L=m[S],O=g[S],V=v[S],z=M*E*4*S;for(let F=0;F<L.count;F++){const B=F*C;u===!0&&(s.fromBufferAttribute(L,F),A[z+B+0]=s.x,A[z+B+1]=s.y,A[z+B+2]=s.z,A[z+B+3]=0),p===!0&&(s.fromBufferAttribute(O,F),A[z+B+4]=s.x,A[z+B+5]=s.y,A[z+B+6]=s.z,A[z+B+7]=0),x===!0&&(s.fromBufferAttribute(V,F),A[z+B+8]=s.x,A[z+B+9]=s.y,A[z+B+10]=s.z,A[z+B+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new lt(M,E)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];const p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const ku=new en,mh=new yu(1,1),Fu=new fu,zu=new Jf,Bu=new Mu,gh=[],xh=[],vh=new Float32Array(16),_h=new Float32Array(9),Mh=new Float32Array(4);function Qs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function px(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),ze(e,n)}}function mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;_h.set(n),i.uniformMatrix3fv(this.addr,!1,_h),ze(e,n)}}function gx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),ze(e,n)}}function xx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function yx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=hu,r=mh):r=ku,e.setTexture2D(t||r,s)}function Ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zu,s)}function Tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bu,s)}function Rx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fu,s)}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return vx;case 35668:case 35672:return _x;case 35669:case 35673:return Mx;case 5125:return yx;case 36294:return Sx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Ix(i,t){const e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lx(i,t){const e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dx(i,t){const e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ux(i,t){const e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ox(i,t){const e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nx(i,t){const e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Fx(i,t){i.uniform2iv(this.addr,t)}function zx(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function Vx(i,t){i.uniform1uiv(this.addr,t)}function Hx(i,t){i.uniform2uiv(this.addr,t)}function Gx(i,t){i.uniform3uiv(this.addr,t)}function Wx(i,t){i.uniform4uiv(this.addr,t)}function Xx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function qx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zu,r[o])}function Yx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bu,r[o])}function $x(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fu,r[o])}function Kx(i){switch(i){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Ox;case 35676:return Nx;case 5124:case 35670:return kx;case 35667:case 35671:return Fx;case 35668:case 35672:return zx;case 35669:case 35673:return Bx;case 5125:return Vx;case 36294:return Hx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}class Jx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}}class Zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kx(e.type)}}class jx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function yh(i,t){i.seq.push(t),i.map[t.id]=t}function Qx(i,t,e){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),o=Va.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yh(e,l===void 0?new Jx(a,i,t):new Zx(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new jx(a),yh(e,d)),e=d}}}class Oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Qx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tv=37297;let ev=0;function nv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bh=new Jt;function iv(i){oe._getMatrix(bh,oe.workingColorSpace,i);const t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+nv(i.getShaderSource(t),a)}else return r}function sv(i,t){const e=iv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rv(i,t){let e;switch(t){case hf:e="Linear";break;case uf:e="Reinhard";break;case df:e="Cineon";break;case Yc:e="ACESFilmic";break;case pf:e="AgX";break;case mf:e="Neutral";break;case ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ao=new R;function ov(){oe.getLuminanceCoefficients(Ao);const i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function cv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(hv,dv)}const uv=new Map;function dv(i,t){let e=jt[t];if(e===void 0){const n=uv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(fv,pv)}function pv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function gv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function vv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case cf:t="ENVMAP_BLENDING_MIX";break;case lf:t="ENVMAP_BLENDING_ADD";break}return t}function _v(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=mv(e),l=gv(e),h=xv(e),d=vv(e),f=_v(e),u=av(e),p=cv(r),x=s.createProgram();let m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,sv("linearToOutputTexel",e.outputColorSpace),ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=kc(o),o=Eh(o,e),o=Ah(o,e),a=kc(a),a=Eh(a,e),a=Ah(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+m+o,M=v+g+a,E=Sh(s,s.VERTEX_SHADER,_),A=Sh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(A)||"",F=O.trim(),B=V.trim(),K=z.trim();let G=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{const ft=wh(s,E,"vertex"),vt=wh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+ft+`
`+vt)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||K==="")&&(st=!1);st&&(L.diagnostics={runnable:G,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:g}})}s.deleteShader(E),s.deleteShader(A),C=new Oo(s,x),b=lv(s,x)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,tv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ev++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let yv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bv(t),e.set(t,n)),n}}class bv{constructor(t){this.id=yv++,this.code=t,this.usedTimes=0}}function wv(i,t,e,n,s,r,o){const a=new pu,c=new Sv,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,O,V){const z=O.fog,F=V.geometry,B=b.isMeshStandardMaterial?O.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),G=K&&K.mapping===Ko?K.image.height:null,st=p[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const ft=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=ft!==void 0?ft.length:0;let Ot=0;F.morphAttributes.position!==void 0&&(Ot=1),F.morphAttributes.normal!==void 0&&(Ot=2),F.morphAttributes.color!==void 0&&(Ot=3);let Zt,he,Ft,$;if(st){const ue=ni[st];Zt=ue.vertexShader,he=ue.fragmentShader}else Zt=b.vertexShader,he=b.fragmentShader,c.update(b),Ft=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);const et=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Dt=V.isInstancedMesh===!0,Tt=V.isBatchedMesh===!0,ee=!!b.map,ye=!!b.matcap,I=!!K,it=!!b.aoMap,Q=!!b.lightMap,j=!!b.bumpMap,J=!!b.normalMap,pt=!!b.displacementMap,rt=!!b.emissiveMap,mt=!!b.metalnessMap,Yt=!!b.roughnessMap,Xt=b.anisotropy>0,T=b.clearcoat>0,y=b.dispersion>0,k=b.iridescence>0,q=b.sheen>0,nt=b.transmission>0,Y=Xt&&!!b.anisotropyMap,It=T&&!!b.clearcoatMap,dt=T&&!!b.clearcoatNormalMap,Rt=T&&!!b.clearcoatRoughnessMap,Ct=k&&!!b.iridescenceMap,ot=k&&!!b.iridescenceThicknessMap,yt=q&&!!b.sheenColorMap,Vt=q&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,_t=!!b.specularColorMap,Kt=!!b.specularIntensityMap,D=nt&&!!b.transmissionMap,ht=nt&&!!b.thicknessMap,gt=!!b.gradientMap,Et=!!b.alphaMap,at=b.alphaTest>0,tt=!!b.alphaHash,Pt=!!b.extensions;let $t=Vi;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($t=i.toneMapping);const Se={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:he,defines:b.defines,customVertexShaderID:Ft,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&V._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&V.instanceColor!==null,instancingMorph:Dt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xs,alphaToCoverage:!!b.alphaToCoverage,map:ee,matcap:ye,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:G,aoMap:it,lightMap:Q,bumpMap:j,normalMap:J,displacementMap:f&&pt,emissiveMap:rt,normalMapObjectSpace:J&&b.normalMapType===_f,normalMapTangentSpace:J&&b.normalMapType===lu,metalnessMap:mt,roughnessMap:Yt,anisotropy:Xt,anisotropyMap:Y,clearcoat:T,clearcoatMap:It,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,dispersion:y,iridescence:k,iridescenceMap:Ct,iridescenceThicknessMap:ot,sheen:q,sheenColorMap:yt,sheenRoughnessMap:Vt,specularMap:Ut,specularColorMap:_t,specularIntensityMap:Kt,transmission:nt,transmissionMap:D,thicknessMap:ht,gradientMap:gt,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:at,alphaHash:tt,combine:b.combine,mapUv:ee&&x(b.map.channel),aoMapUv:it&&x(b.aoMap.channel),lightMapUv:Q&&x(b.lightMap.channel),bumpMapUv:j&&x(b.bumpMap.channel),normalMapUv:J&&x(b.normalMap.channel),displacementMapUv:pt&&x(b.displacementMap.channel),emissiveMapUv:rt&&x(b.emissiveMap.channel),metalnessMapUv:mt&&x(b.metalnessMap.channel),roughnessMapUv:Yt&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:It&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(b.sheenRoughnessMap.channel),specularMapUv:Ut&&x(b.specularMap.channel),specularColorMapUv:_t&&x(b.specularColorMap.channel),specularIntensityMapUv:Kt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ht&&x(b.thicknessMap.channel),alphaMapUv:Et&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(J||Xt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&(ee||Et),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:V.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:ee&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===me,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Re,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function g(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const S=p[b.type];let L;if(S){const O=ni[S];L=_u.clone(O.uniforms)}else L=b.uniforms;return L}function E(b,S){let L;for(let O=0,V=h.length;O<V;O++){const z=h[O];if(z.cacheKey===S){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Mv(i,S,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:C}}function Ev(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Av(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ph(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,u,p,x,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:f,material:u,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=u,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),t++,g}function a(d,f,u,p,x,m){const g=o(d,f,u,p,x,m);u.transmission>0?n.push(g):u.transparent===!0?s.push(g):e.push(g)}function c(d,f,u,p,x,m){const g=o(d,f,u,p,x,m);u.transmission>0?n.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function l(d,f){e.length>1&&e.sort(d||Av),n.length>1&&n.sort(f||Ch),s.length>1&&s.sort(f||Ch)}function h(){for(let d=t,f=i.length;d<f;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Tv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Wt};break;case"SpotLight":e={position:new R,direction:new R,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Cv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pv=0;function Iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lv(i){const t=new Rv,e=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new fe,o=new fe;function a(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,_=0,M=0,E=0,A=0,P=0;l.sort(Iv);for(let b=0,S=l.length;b<S;b++){const L=l[b],O=L.color,V=L.intensity,z=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*V,d+=O.g*V,f+=O.b*V;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],V);P++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=F,n.directionalShadowMatrix[u]=L.shadow.matrix,v++}n.directional[u]=B,u++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(O).multiplyScalar(V),B.distance=z,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[x]=B;const K=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,K.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=K.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=F,M++}x++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(O).multiplyScalar(V),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const K=L.shadow,G=e.get(L);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=L.shadow.matrix,_++}n.point[p]=B,p++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(V),B.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[g]=B,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==u||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==g||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==M||C.numSpotMaps!==E||C.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,C.directionalLength=u,C.pointLength=p,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=g,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=M,C.numSpotMaps=E,C.numLightProbes=P,n.version=Pv++)}function c(l,h){let d=0,f=0,u=0,p=0,x=0;const m=h.matrixWorldInverse;for(let g=0,v=l.length;g<v;g++){const _=l[g];if(_.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=n.spot[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ih(i){const t=new Lv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Dv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ih(i),t.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nv(i,t,e){let n=new Xr;const s=new lt,r=new lt,o=new ge,a=new rm({depthPacking:vf}),c=new om,l={},h=e.maxTextureSize,d={[Gi]:pn,[pn]:Gi,[Re]:Re},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Uv,fragmentShader:Ov}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new ie;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new le(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let g=this.type;this.render=function(A,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=g!==Mi&&this.type===Mi,z=g===Mi&&this.type!==Mi;for(let F=0,B=A.length;F<B;F++){const K=A[F],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||V===!0||z===!0){const vt=this.type!==Mi?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new ui(s.x,s.y,vt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ft=G.getViewportCount();for(let vt=0;vt<ft;vt++){const Ot=G.getViewport(vt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),O.viewport(o),G.updateMatrices(K,vt),n=G.getFrustum(),M(P,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&v(G,C),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function v(A,P){const C=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,C,f,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,C,u,x,null)}function _(A,P,C,b){let S=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=S.uuid,V=P.uuid;let z=l[O];z===void 0&&(z={},l[O]=z);let F=z[V];F===void 0&&(F=S.clone(),z[V]=F,P.addEventListener("dispose",E)),S=F}if(S.visible=P.visible,S.wireframe=P.wireframe,b===Mi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=C}return S}function M(A,P,C,b,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const V=t.update(A),z=A.material;if(Array.isArray(z)){const F=V.groups;for(let B=0,K=F.length;B<K;B++){const G=F[B],st=z[G.materialIndex];if(st&&st.visible){const ft=_(A,st,b,S);A.onBeforeShadow(i,A,P,C,V,ft,G),i.renderBufferDirect(C,null,V,ft,A,G),A.onAfterShadow(i,A,P,C,V,ft,G)}}}else if(z.visible){const F=_(A,z,b,S);A.onBeforeShadow(i,A,P,C,V,F,null),i.renderBufferDirect(C,null,V,F,A,null),A.onAfterShadow(i,A,P,C,V,F,null)}}const O=A.children;for(let V=0,z=O.length;V<z;V++)M(O[V],P,C,b,S)}function E(A){A.target.removeEventListener("dispose",E);for(const C in l){const b=l[C],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const kv={[Ja]:Za,[ja]:ec,[Qa]:nc,[Hs]:tc,[Za]:Ja,[ec]:ja,[nc]:Qa,[tc]:Hs};function Fv(i,t){function e(){let D=!1;const ht=new ge;let gt=null;const Et=new ge(0,0,0,0);return{setMask:function(at){gt!==at&&!D&&(i.colorMask(at,at,at,at),gt=at)},setLocked:function(at){D=at},setClear:function(at,tt,Pt,$t,Se){Se===!0&&(at*=$t,tt*=$t,Pt*=$t),ht.set(at,tt,Pt,$t),Et.equals(ht)===!1&&(i.clearColor(at,tt,Pt,$t),Et.copy(ht))},reset:function(){D=!1,gt=null,Et.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,gt=null,Et=null,at=null;return{setReversed:function(tt){if(ht!==tt){const Pt=t.get("EXT_clip_control");tt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ht=tt;const $t=at;at=null,this.setClear($t)}},getReversed:function(){return ht},setTest:function(tt){tt?et(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(tt){gt!==tt&&!D&&(i.depthMask(tt),gt=tt)},setFunc:function(tt){if(ht&&(tt=kv[tt]),Et!==tt){switch(tt){case Ja:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=tt}},setLocked:function(tt){D=tt},setClear:function(tt){at!==tt&&(ht&&(tt=1-tt),i.clearDepth(tt),at=tt)},reset:function(){D=!1,gt=null,Et=null,at=null,ht=!1}}}function s(){let D=!1,ht=null,gt=null,Et=null,at=null,tt=null,Pt=null,$t=null,Se=null;return{setTest:function(ue){D||(ue?et(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ue){ht!==ue&&!D&&(i.stencilMask(ue),ht=ue)},setFunc:function(ue,pi,Kn){(gt!==ue||Et!==pi||at!==Kn)&&(i.stencilFunc(ue,pi,Kn),gt=ue,Et=pi,at=Kn)},setOp:function(ue,pi,Kn){(tt!==ue||Pt!==pi||$t!==Kn)&&(i.stencilOp(ue,pi,Kn),tt=ue,Pt=pi,$t=Kn)},setLocked:function(ue){D=ue},setClear:function(ue){Se!==ue&&(i.clearStencil(ue),Se=ue)},reset:function(){D=!1,ht=null,gt=null,Et=null,at=null,tt=null,Pt=null,$t=null,Se=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,u=[],p=null,x=!1,m=null,g=null,v=null,_=null,M=null,E=null,A=null,P=new Wt(0,0,0),C=0,b=!1,S=null,L=null,O=null,V=null,z=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=K>=2);let st=null,ft={};const vt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Zt=new ge().fromArray(vt),he=new ge().fromArray(Ot);function Ft(D,ht,gt,Et){const at=new Uint8Array(4),tt=i.createTexture();i.bindTexture(D,tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<gt;Pt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ht+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return tt}const $={};$[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Hs),j(!1),J(wl),et(i.CULL_FACE),it(Bi);function et(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,ht){return d[D]!==ht?(i.bindFramebuffer(D,ht),d[D]=ht,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Tt(D,ht){let gt=u,Et=!1;if(D){gt=f.get(ht),gt===void 0&&(gt=[],f.set(ht,gt));const at=D.textures;if(gt.length!==at.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Pt=at.length;tt<Pt;tt++)gt[tt]=i.COLOR_ATTACHMENT0+tt;gt.length=at.length,Et=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(gt)}function ee(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const ye={[os]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};ye[qd]=i.MIN,ye[Yd]=i.MAX;const I={[$d]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function it(D,ht,gt,Et,at,tt,Pt,$t,Se,ue){if(D===Bi){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),D!==Gd){if(D!==m||ue!==b){if((g!==os||M!==os)&&(i.blendEquation(i.FUNC_ADD),g=os,M=os),ue)switch(D){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,_=null,E=null,A=null,P.set(0,0,0),C=0,m=D,b=ue}return}at=at||ht,tt=tt||gt,Pt=Pt||Et,(ht!==g||at!==M)&&(i.blendEquationSeparate(ye[ht],ye[at]),g=ht,M=at),(gt!==v||Et!==_||tt!==E||Pt!==A)&&(i.blendFuncSeparate(I[gt],I[Et],I[tt],I[Pt]),v=gt,_=Et,E=tt,A=Pt),($t.equals(P)===!1||Se!==C)&&(i.blendColor($t.r,$t.g,$t.b,Se),P.copy($t),C=Se),m=D,b=!1}function Q(D,ht){D.side===Re?bt(i.CULL_FACE):et(i.CULL_FACE);let gt=D.side===pn;ht&&(gt=!gt),j(gt),D.blending===Bs&&D.transparent===!1?it(Bi):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Et=D.stencilWrite;a.setTest(Et),Et&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function J(D){D!==Vd?(et(i.CULL_FACE),D!==L&&(D===wl?i.cullFace(i.BACK):D===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=D}function pt(D){D!==O&&(B&&i.lineWidth(D),O=D)}function rt(D,ht,gt){D?(et(i.POLYGON_OFFSET_FILL),(V!==ht||z!==gt)&&(i.polygonOffset(ht,gt),V=ht,z=gt)):bt(i.POLYGON_OFFSET_FILL)}function mt(D){D?et(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Yt(D){D===void 0&&(D=i.TEXTURE0+F-1),st!==D&&(i.activeTexture(D),st=D)}function Xt(D,ht,gt){gt===void 0&&(st===null?gt=i.TEXTURE0+F-1:gt=st);let Et=ft[gt];Et===void 0&&(Et={type:void 0,texture:void 0},ft[gt]=Et),(Et.type!==D||Et.texture!==ht)&&(st!==gt&&(i.activeTexture(gt),st=gt),i.bindTexture(D,ht||$[D]),Et.type=D,Et.texture=ht)}function T(){const D=ft[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function Vt(D){he.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Ut(D,ht){let gt=l.get(ht);gt===void 0&&(gt=new WeakMap,l.set(ht,gt));let Et=gt.get(D);Et===void 0&&(Et=i.getUniformBlockIndex(ht,D.name),gt.set(D,Et))}function _t(D,ht){const Et=l.get(ht).get(D);c.get(ht)!==Et&&(i.uniformBlockBinding(ht,Et,D.__bindingPointIndex),c.set(ht,Et))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ft={},d={},f=new WeakMap,u=[],p=null,x=!1,m=null,g=null,v=null,_=null,M=null,E=null,A=null,P=new Wt(0,0,0),C=0,b=!1,S=null,L=null,O=null,V=null,z=null,Zt.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:bt,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:ee,setBlending:it,setMaterial:Q,setFlipSided:j,setCullFace:J,setLineWidth:pt,setPolygonOffset:rt,setScissorTest:mt,activeTexture:Yt,bindTexture:Xt,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ct,texImage3D:ot,updateUBOMapping:Ut,uniformBlockBinding:_t,texStorage2D:dt,texStorage3D:Rt,texSubImage2D:q,texSubImage3D:nt,compressedTexSubImage2D:Y,compressedTexSubImage3D:It,scissor:yt,viewport:Vt,reset:Kt}}function zv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,y){return u?new OffscreenCanvas(T,y):Wo("canvas")}function x(T,y,k){let q=1;const nt=Xt(T);if((nt.width>k||nt.height>k)&&(q=k/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*nt.width),It=Math.floor(q*nt.height);d===void 0&&(d=p(Y,It));const dt=y?p(Y,It):d;return dt.width=Y,dt.height=It,dt.getContext("2d").drawImage(T,0,0,Y,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Y+"x"+It+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function g(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,y,k,q,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){const It=nt?Ho:oe.getTransfer(q);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=It===me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(T,y){let k;return T?y===null||y===Wi||y===wr?k=i.DEPTH24_STENCIL8:y===In?k=i.DEPTH32F_STENCIL8:y===br&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wi||y===wr?k=i.DEPTH_COMPONENT24:y===In?k=i.DEPTH_COMPONENT32F:y===br&&(k=i.DEPTH_COMPONENT16),k}function E(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ge&&T.minFilter!==ri?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y)}function P(T){const y=T.target;y.removeEventListener("dispose",P),S(y)}function C(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,q=f.get(k);if(q){const nt=q[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(k)}n.remove(T)}function b(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const k=T.source,q=f.get(k);delete q[y.__cacheKey],o.memory.textures--}function S(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let nt=0;nt<y.__webglFramebuffer[q].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[q][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let q=0,nt=k.length;q<nt;q++){const Y=n.get(k[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(T)}let L=0;function O(){L=0}function V(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function z(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function F(T,y){const k=n.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,y);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function B(T,y){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function K(T,y){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function G(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const st={[us]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[rc]:i.MIRRORED_REPEAT},ft={[Ge]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[ri]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},vt={[Mf]:i.NEVER,[Af]:i.ALWAYS,[yf]:i.LESS,[hu]:i.LEQUAL,[Sf]:i.EQUAL,[Ef]:i.GEQUAL,[bf]:i.GREATER,[wf]:i.NOTEQUAL};function Ot(T,y){if(y.type===In&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ri||y.magFilter===oa||y.magFilter===Qr||y.magFilter===hs||y.minFilter===ri||y.minFilter===oa||y.minFilter===Qr||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ft[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ft[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==Qr&&y.minFilter!==hs||y.type===In&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let nt=f.get(q);nt===void 0&&(nt={},f.set(q,nt));const Y=z(y);if(Y!==T.__cacheKey){nt[Y]===void 0&&(nt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),nt[Y].usedTimes++;const It=nt[T.__cacheKey];It!==void 0&&(nt[T.__cacheKey].usedTimes--,It.usedTimes===0&&b(y)),T.__cacheKey=Y,T.__webglTexture=nt[Y].texture}return k}function he(T,y,k){return Math.floor(Math.floor(T/k)/y)}function Ft(T,y,k,q){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,q,y.data);else{Y.sort((ot,yt)=>ot.start-yt.start);let It=0;for(let ot=1;ot<Y.length;ot++){const yt=Y[It],Vt=Y[ot],Ut=yt.start+yt.count,_t=he(Vt.start,y.width,4),Kt=he(yt.start,y.width,4);Vt.start<=Ut+1&&_t===Kt&&he(Vt.start+Vt.count-1,y.width,4)===_t?yt.count=Math.max(yt.count,Vt.start+Vt.count-yt.start):(++It,Y[It]=Vt)}Y.length=It+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ot=0,yt=Y.length;ot<yt;ot++){const Vt=Y[ot],Ut=Math.floor(Vt.start/4),_t=Math.ceil(Vt.count/4),Kt=Ut%y.width,D=Math.floor(Ut/y.width),ht=_t,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Kt,D,ht,gt,k,q,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function $(T,y,k){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const nt=Zt(T,y),Y=y.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+k);const It=n.get(Y);if(Y.version!==It.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);const dt=oe.getPrimaries(oe.workingColorSpace),Rt=y.colorSpace===ki?null:oe.getPrimaries(y.colorSpace),Ct=y.colorSpace===ki||dt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ot=x(y.image,!1,s.maxTextureSize);ot=Yt(y,ot);const yt=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type);let Ut=_(y.internalFormat,yt,Vt,y.colorSpace,y.isVideoTexture);Ot(q,y);let _t;const Kt=y.mipmaps,D=y.isVideoTexture!==!0,ht=It.__version===void 0||nt===!0,gt=Y.dataReady,Et=E(y,ot);if(y.isDepthTexture)Ut=M(y.format===Ar,y.type),ht&&(D?e.texStorage2D(i.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,yt,Vt,null));else if(y.isDataTexture)if(Kt.length>0){D&&ht&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,Kt[0].width,Kt[0].height);for(let at=0,tt=Kt.length;at<tt;at++)_t=Kt[at],D?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,yt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,at,Ut,_t.width,_t.height,0,yt,Vt,_t.data);y.generateMipmaps=!1}else D?(ht&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,ot.width,ot.height),gt&&Ft(y,ot,yt,Vt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,yt,Vt,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ut,Kt[0].width,Kt[0].height,ot.depth);for(let at=0,tt=Kt.length;at<tt;at++)if(_t=Kt[at],y.format!==wn)if(yt!==null)if(D){if(gt)if(y.layerUpdates.size>0){const Pt=ah(_t.width,_t.height,y.format,y.type);for(const $t of y.layerUpdates){const Se=_t.data.subarray($t*Pt/_t.data.BYTES_PER_ELEMENT,($t+1)*Pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,$t,_t.width,_t.height,1,yt,Se)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,yt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Ut,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,_t.width,_t.height,ot.depth,yt,Vt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Ut,_t.width,_t.height,ot.depth,0,yt,Vt,_t.data)}else{D&&ht&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,Kt[0].width,Kt[0].height);for(let at=0,tt=Kt.length;at<tt;at++)_t=Kt[at],y.format!==wn?yt!==null?D?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,_t.width,_t.height,yt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,at,Ut,_t.width,_t.height,0,yt,Vt,_t.data)}else if(y.isDataArrayTexture)if(D){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ut,ot.width,ot.height,ot.depth),gt)if(y.layerUpdates.size>0){const at=ah(ot.width,ot.height,y.format,y.type);for(const tt of y.layerUpdates){const Pt=ot.data.subarray(tt*at/ot.data.BYTES_PER_ELEMENT,(tt+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,yt,Vt,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Vt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,yt,Vt,ot.data);else if(y.isData3DTexture)D?(ht&&e.texStorage3D(i.TEXTURE_3D,Et,Ut,ot.width,ot.height,ot.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Vt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,yt,Vt,ot.data);else if(y.isFramebufferTexture){if(ht)if(D)e.texStorage2D(i.TEXTURE_2D,Et,Ut,ot.width,ot.height);else{let at=ot.width,tt=ot.height;for(let Pt=0;Pt<Et;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Ut,at,tt,0,yt,Vt,null),at>>=1,tt>>=1}}else if(Kt.length>0){if(D&&ht){const at=Xt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ut,at.width,at.height)}for(let at=0,tt=Kt.length;at<tt;at++)_t=Kt[at],D?gt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,yt,Vt,_t):e.texImage2D(i.TEXTURE_2D,at,Ut,yt,Vt,_t);y.generateMipmaps=!1}else if(D){if(ht){const at=Xt(ot);e.texStorage2D(i.TEXTURE_2D,Et,Ut,at.width,at.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Vt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ut,yt,Vt,ot);m(y)&&g(q),It.__version=Y.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function et(T,y,k){if(y.image.length!==6)return;const q=Zt(T,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const Y=n.get(nt);if(nt.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+k);const It=oe.getPrimaries(oe.workingColorSpace),dt=y.colorSpace===ki?null:oe.getPrimaries(y.colorSpace),Rt=y.colorSpace===ki||It===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let tt=0;tt<6;tt++)!Ct&&!ot?yt[tt]=x(y.image[tt],!0,s.maxCubemapSize):yt[tt]=ot?y.image[tt].image:y.image[tt],yt[tt]=Yt(y,yt[tt]);const Vt=yt[0],Ut=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),Kt=_(y.internalFormat,Ut,_t,y.colorSpace),D=y.isVideoTexture!==!0,ht=Y.__version===void 0||q===!0,gt=nt.dataReady;let Et=E(y,Vt);Ot(i.TEXTURE_CUBE_MAP,y);let at;if(Ct){D&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Kt,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){at=yt[tt].mipmaps;for(let Pt=0;Pt<at.length;Pt++){const $t=at[Pt];y.format!==wn?Ut!==null?D?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,0,0,$t.width,$t.height,Ut,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,Kt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,0,0,$t.width,$t.height,Ut,_t,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt,Kt,$t.width,$t.height,0,Ut,_t,$t.data)}}}else{if(at=y.mipmaps,D&&ht){at.length>0&&Et++;const tt=Xt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){D?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,yt[tt].width,yt[tt].height,Ut,_t,yt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,yt[tt].width,yt[tt].height,0,Ut,_t,yt[tt].data);for(let Pt=0;Pt<at.length;Pt++){const Se=at[Pt].image[tt].image;D?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,0,0,Se.width,Se.height,Ut,_t,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,Kt,Se.width,Se.height,0,Ut,_t,Se.data)}}else{D?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,_t,yt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Ut,_t,yt[tt]);for(let Pt=0;Pt<at.length;Pt++){const $t=at[Pt];D?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,0,0,Ut,_t,$t.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt+1,Kt,Ut,_t,$t.image[tt])}}}m(y)&&g(i.TEXTURE_CUBE_MAP),Y.__version=nt.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,k,q,nt,Y){const It=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),Rt=_(k.internalFormat,It,dt,k.colorSpace),Ct=n.get(y),ot=n.get(k);if(ot.__renderTarget=y,!Ct.__hasExternalTextures){const yt=Math.max(1,y.width>>Y),Vt=Math.max(1,y.height>>Y);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Y,Rt,yt,Vt,y.depth,0,It,dt,null):e.texImage2D(nt,Y,Rt,yt,Vt,0,It,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),rt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,nt,ot.__webglTexture,0,pt(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,nt,ot.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const q=y.depthTexture,nt=q&&q.isDepthTexture?q.type:null,Y=M(y.stencilBuffer,nt),It=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=pt(y);rt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Y,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,T)}else{const q=y.textures;for(let nt=0;nt<q.length;nt++){const Y=q[nt],It=r.convert(Y.format,Y.colorSpace),dt=r.convert(Y.type),Rt=_(Y.internalFormat,It,dt,Y.colorSpace),Ct=pt(y);k&&rt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Rt,y.width,y.height):rt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const nt=q.__webglTexture,Y=pt(y);if(y.depthTexture.format===Er)rt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Ar)rt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function ee(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Tt(y.__webglFramebuffer[0],T):Tt(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),Dt(y.__webglDepthbuffer[q],T,!1);else{const nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Dt(y.__webglDepthbuffer,T,!1);else{const nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(T,y,k){const q=n.get(T);y!==void 0&&bt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ee(T)}function I(T){const y=T.texture,k=n.get(T),q=n.get(y);T.addEventListener("dispose",P);const nt=T.textures,Y=T.isWebGLCubeRenderTarget===!0,It=nt.length>1;if(It||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)k.__webglFramebuffer[dt][Rt]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(It)for(let dt=0,Rt=nt.length;dt<Rt;dt++){const Ct=n.get(nt[dt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&rt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const Rt=nt[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const Ct=r.convert(Rt.format,Rt.colorSpace),ot=r.convert(Rt.type),yt=_(Rt.internalFormat,Ct,ot,Rt.colorSpace,T.isXRRenderTarget===!0),Vt=pt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)bt(k.__webglFramebuffer[dt][Rt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt);else bt(k.__webglFramebuffer[dt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,Rt=nt.length;dt<Rt;dt++){const Ct=nt[dt],ot=n.get(Ct);let yt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(yt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ot.__webglTexture),Ot(yt,Ct),bt(k.__webglFramebuffer,T,Ct,i.COLOR_ATTACHMENT0+dt,yt,0),m(Ct)&&g(yt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,q.__webglTexture),Ot(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)bt(k.__webglFramebuffer[Rt],T,y,i.COLOR_ATTACHMENT0,dt,Rt);else bt(k.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,dt,0);m(y)&&g(dt),e.unbindTexture()}T.depthBuffer&&ee(T)}function it(T){const y=T.textures;for(let k=0,q=y.length;k<q;k++){const nt=y[k];if(m(nt)){const Y=v(T),It=n.get(nt).__webglTexture;e.bindTexture(Y,It),g(Y),e.unbindTexture()}}}const Q=[],j=[];function J(T){if(T.samples>0){if(rt(T)===!1){const y=T.textures,k=T.width,q=T.height;let nt=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(T),dt=y.length>1;if(dt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);const ot=n.get(y[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,nt,i.NEAREST),c===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,It.__webglColorRenderbuffer[Ct]);const ot=n.get(y[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function pt(T){return Math.min(s.maxSamples,T.samples)}function rt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function mt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Yt(T,y){const k=T.colorSpace,q=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Xs&&k!==ki&&(oe.getTransfer(k)===me?(q!==wn||nt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=ye,this.setupRenderTarget=I,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=rt}function Bv(i,t){function e(n,s=ki){let r;const o=oe.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===wn)return i.RGBA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===Po||n===Io||n===Lo||n===Do)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===cc||n===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===uc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===Mc||n===yc||n===Sc||n===bc||n===wc||n===Ec||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Rc||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tc)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`;class Gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Su(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends Zs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new Gv,g={},v=e.getContextAttributes();let _=null,M=null;const E=[],A=[],P=new lt;let C=null;const b=new dn;b.viewport=new ge;const S=new dn;S.viewport=new ge;const L=[b,S],O=new um;let V=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=E[$];return et===void 0&&(et=new Ta,E[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=E[$];return et===void 0&&(et=new Ta,E[$]=et),et.getGripSpace()},this.getHand=function($){let et=E[$];return et===void 0&&(et=new Ta,E[$]=et),et.getHandSpace()};function F($){const et=A.indexOf($.inputSource);if(et===-1)return;const bt=E[et];bt!==void 0&&(bt.update($.inputSource,$.frame,l||o),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let $=0;$<E.length;$++){const et=A[$];et!==null&&(A[$]=null,E[$].disconnect(et))}V=null,z=null,m.reset();for(const $ in g)delete g[$];t.setRenderTarget(_),u=null,f=null,d=null,s=null,M=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Dt=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?Ar:Er,Dt=v.stencil?wr:Wi);const ee={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ee),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ui(f.textureWidth,f.textureHeight,{format:wn,type:Yn,depthTexture:new yu(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new ui(u.framebufferWidth,u.framebufferHeight,{format:wn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let et=0;et<$.removed.length;et++){const bt=$.removed[et],Dt=A.indexOf(bt);Dt>=0&&(A[Dt]=null,E[Dt].disconnect(bt))}for(let et=0;et<$.added.length;et++){const bt=$.added[et];let Dt=A.indexOf(bt);if(Dt===-1){for(let ee=0;ee<E.length;ee++)if(ee>=A.length){A.push(bt),Dt=ee;break}else if(A[ee]===null){A[ee]=bt,Dt=ee;break}if(Dt===-1)break}const Tt=E[Dt];Tt&&Tt.connect(bt)}}const G=new R,st=new R;function ft($,et,bt){G.setFromMatrixPosition(et.matrixWorld),st.setFromMatrixPosition(bt.matrixWorld);const Dt=G.distanceTo(st),Tt=et.projectionMatrix.elements,ee=bt.projectionMatrix.elements,ye=Tt[14]/(Tt[10]-1),I=Tt[14]/(Tt[10]+1),it=(Tt[9]+1)/Tt[5],Q=(Tt[9]-1)/Tt[5],j=(Tt[8]-1)/Tt[0],J=(ee[8]+1)/ee[0],pt=ye*j,rt=ye*J,mt=Dt/(-j+J),Yt=mt*-j;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Yt),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Xt=ye+mt,T=I+mt,y=pt-Yt,k=rt+(Dt-Yt),q=it*I/T*Xt,nt=Q*I/T*Xt;$.projectionMatrix.makePerspective(y,k,q,nt,Xt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function vt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,bt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),O.near=S.near=b.near=et,O.far=S.far=b.far=bt,(V!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,z=O.far),O.layers.mask=$.layers.mask|6,b.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Dt=$.parent,Tt=O.cameras;vt(O,Dt);for(let ee=0;ee<Tt.length;ee++)vt(Tt[ee],Dt);Tt.length===2?ft(O,b,S):O.projectionMatrix.copy(b.projectionMatrix),Ot($,O,Dt)};function Ot($,et,bt){bt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Tr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return g[$]};let Zt=null;function he($,et){if(h=et.getViewerPose(l||o),p=et,h!==null){const bt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Dt=!1;bt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let I=0;I<bt.length;I++){const it=bt[I];let Q=null;if(u!==null)Q=u.getViewport(it);else{const J=d.getViewSubImage(f,it);Q=J.viewport,I===0&&(t.setRenderTargetTextures(M,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(M))}let j=L[I];j===void 0&&(j=new dn,j.layers.enable(I),j.viewport=new ge,L[I]=j),j.matrix.fromArray(it.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(it.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(O.matrix.copy(j.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(j)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const I=d.getDepthInformation(bt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let I=0;I<bt.length;I++){const it=bt[I].camera;if(it){let Q=g[it];Q||(Q=new Su,g[it]=Q);const j=d.getCameraImage(it);Q.sourceTexture=j}}}}for(let bt=0;bt<E.length;bt++){const Dt=A[bt],Tt=E[bt];Dt!==null&&Tt!==void 0&&Tt.update(Dt,et,l||o)}Zt&&Zt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const Ft=new Nu;Ft.setAnimationLoop(he),this.setAnimationLoop=function($){Zt=$},this.dispose=function(){}}}const ns=new Un,Xv=new fe;function qv(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,vu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,_,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,v,_):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,ns.copy(M),ns.x*=-1,ns.y*=-1,ns.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(ns)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const M=_.program;n.uniformBlockBinding(v,M)}function l(v,_){let M=s[v.id];M===void 0&&(p(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(v,E);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const _=d();v.__bindingPointIndex=_;const M=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=s[v.id],M=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,P=M.length;A<P;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,S=C.length;b<S;b++){const L=C[b];if(u(L,A,b,E)===!0){const O=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let F=0;F<V.length;F++){const B=V[F],K=x(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,O+z,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,_,M,E){const A=v.value,P=_+"_"+M;if(E[P]===void 0)return typeof A=="number"||typeof A=="boolean"?E[P]=A:E[P]=A.clone(),!0;{const C=E[P];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[P]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function p(v){const _=v.uniforms;let M=0;const E=16;for(let P=0,C=_.length;P<C;P++){const b=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,L=b.length;S<L;S++){const O=b[S],V=Array.isArray(O.value)?O.value:[O.value];for(let z=0,F=V.length;z<F;z++){const B=V[z],K=x(B),G=M%E,st=G%K.boundary,ft=G+st;M+=st,ft!==0&&E-ft<K.storage&&(M+=E-ft),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const A=M%E;return A>0&&(M+=E-A),v.__size=M,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}class Vu{constructor(t={}){const{canvas:e=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const p=new Uint32Array(4),x=new Int32Array(4);let m=null,g=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=be;let A=0,P=0,C=null,b=-1,S=null;const L=new ge,O=new ge;let V=null;const z=new Wt(0);let F=0,B=e.width,K=e.height,G=1,st=null,ft=null;const vt=new ge(0,0,B,K),Ot=new ge(0,0,B,K);let Zt=!1;const he=new Xr;let Ft=!1,$=!1;const et=new fe,bt=new R,Dt=new ge,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ye(){return C===null?G:1}let I=n;function it(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const U="webgl2";if(I=it(U,w),I===null)throw it(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,j,J,pt,rt,mt,Yt,Xt,T,y,k,q,nt,Y,It,dt,Rt,Ct,ot,yt,Vt,Ut,_t,Kt;function D(){Q=new sx(I),Q.init(),Ut=new Bv(I,Q),j=new Z0(I,Q,t,Ut),J=new Fv(I,Q),j.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),pt=new ax(I),rt=new Ev,mt=new zv(I,Q,J,rt,j,Ut,pt),Yt=new Q0(M),Xt=new ix(M),T=new fm(I),_t=new K0(I,T),y=new rx(I,T,pt,_t),k=new lx(I,y,T,pt),ot=new cx(I,j,mt),dt=new j0(rt),q=new wv(M,Yt,Xt,Q,j,_t,dt),nt=new qv(M,rt),Y=new Tv,It=new Dv(Q),Ct=new $0(M,Yt,Xt,J,k,u,c),Rt=new Nv(M,k,j),Kt=new Yv(I,pt,j,J),yt=new J0(I,Q,pt),Vt=new ox(I,Q,pt),pt.programs=q.programs,M.capabilities=j,M.extensions=Q,M.properties=rt,M.renderLists=Y,M.shadowMap=Rt,M.state=J,M.info=pt}D();const ht=new Wv(M,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(B,K,!1))},this.getSize=function(w){return w.set(B,K)},this.setSize=function(w,U,H=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,K=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(B*G,K*G).floor()},this.setDrawingBufferSize=function(w,U,H){B=w,K=U,G=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,U,H,W){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,U,H,W),J.viewport(L.copy(vt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,U,H,W){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,U,H,W),J.scissor(O.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){J.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,H=!0){let W=0;if(w){let N=!1;if(C!==null){const ct=C.texture.format;N=ct===Qc||ct===jc||ct===Jo}if(N){const ct=C.texture.type,Mt=ct===Yn||ct===Wi||ct===br||ct===wr||ct===Kc||ct===Jc,At=Ct.getClearColor(),wt=Ct.getClearAlpha(),Bt=At.r,Ht=At.g,Nt=At.b;Mt?(p[0]=Bt,p[1]=Ht,p[2]=Nt,p[3]=wt,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=Bt,x[1]=Ht,x[2]=Nt,x[3]=wt,I.clearBufferiv(I.COLOR,0,x))}else W|=I.COLOR_BUFFER_BIT}U&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Ct.dispose(),Y.dispose(),It.dispose(),rt.dispose(),Yt.dispose(),Xt.dispose(),k.dispose(),_t.dispose(),Kt.dispose(),q.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Kn),ht.removeEventListener("sessionend",ml),Yi.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=pt.autoReset,U=Rt.enabled,H=Rt.autoUpdate,W=Rt.needsUpdate,N=Rt.type;D(),pt.autoReset=w,Rt.enabled=U,Rt.autoUpdate=H,Rt.needsUpdate=W,Rt.type=N}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){const U=w.target;U.removeEventListener("dispose",tt),Pt(U)}function Pt(w){$t(w),rt.remove(w)}function $t(w){const U=rt.get(w).programs;U!==void 0&&(U.forEach(function(H){q.releaseProgram(H)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,W,N,ct){U===null&&(U=Tt);const Mt=N.isMesh&&N.matrixWorld.determinant()<0,At=fd(w,U,H,W,N);J.setMaterial(W,Mt);let wt=H.index,Bt=1;if(W.wireframe===!0){if(wt=y.getWireframeAttribute(H),wt===void 0)return;Bt=2}const Ht=H.drawRange,Nt=H.attributes.position;let ne=Ht.start*Bt,pe=(Ht.start+Ht.count)*Bt;ct!==null&&(ne=Math.max(ne,ct.start*Bt),pe=Math.min(pe,(ct.start+ct.count)*Bt)),wt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,wt.count)):Nt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,Nt.count));const Pe=pe-ne;if(Pe<0||Pe===1/0)return;_t.setup(N,W,At,H,wt);let we,xe=yt;if(wt!==null&&(we=T.get(wt),xe=Vt,xe.setIndex(we)),N.isMesh)W.wireframe===!0?(J.setLineWidth(W.wireframeLinewidth*ye()),xe.setMode(I.LINES)):xe.setMode(I.TRIANGLES);else if(N.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),J.setLineWidth(kt*ye()),N.isLineSegments?xe.setMode(I.LINES):N.isLineLoop?xe.setMode(I.LINE_LOOP):xe.setMode(I.LINE_STRIP)}else N.isPoints?xe.setMode(I.POINTS):N.isSprite&&xe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))xe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const kt=N._multiDrawStarts,Ae=N._multiDrawCounts,ce=N._multiDrawCount,vn=wt?T.get(wt).bytesPerElement:1,gs=rt.get(W).currentProgram.getUniforms();for(let _n=0;_n<ce;_n++)gs.setValue(I,"_gl_DrawID",_n),xe.render(kt[_n]/vn,Ae[_n])}else if(N.isInstancedMesh)xe.renderInstances(ne,Pe,N.count);else if(H.isInstancedBufferGeometry){const kt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ae=Math.min(H.instanceCount,kt);xe.renderInstances(ne,Pe,Ae)}else xe.render(ne,Pe)};function Se(w,U,H){w.transparent===!0&&w.side===Re&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,Zr(w,U,H),w.side=Gi,w.needsUpdate=!0,Zr(w,U,H),w.side=Re):Zr(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),g=It.get(H),g.init(U),_.push(g),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),w!==H&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){const At=ct[Mt];Se(At,H,N),W.add(At)}else Se(ct,H,N),W.add(ct)}),g=_.pop(),W},this.compileAsync=function(w,U,H=null){const W=this.compile(w,U,H);return new Promise(N=>{function ct(){if(W.forEach(function(Mt){rt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){N(w);return}setTimeout(ct,10)}Q.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ue=null;function pi(w){ue&&ue(w)}function Kn(){Yi.stop()}function ml(){Yi.start()}const Yi=new Nu;Yi.setAnimationLoop(pi),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(w){ue=w,ht.setAnimationLoop(w),w===null?Yi.stop():Yi.start()},ht.addEventListener("sessionstart",Kn),ht.addEventListener("sessionend",ml),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(U),U=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,U,C),g=It.get(w,_.length),g.init(U),_.push(g),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),he.setFromProjectionMatrix(et,Xn,U.reversedDepth),$=this.localClippingEnabled,Ft=dt.init(this.clippingPlanes,$),m=Y.get(w,v.length),m.init(),v.push(m),ht.enabled===!0&&ht.isPresenting===!0){const ct=M.xr.getDepthSensingMesh();ct!==null&&na(ct,U,-1/0,M.sortObjects)}na(w,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ft),ee=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ee&&Ct.addToRenderList(m,w),this.info.render.frame++,Ft===!0&&dt.beginShadows();const H=g.state.shadowsArray;Rt.render(H,w,U),Ft===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(g.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let Mt=0,At=ct.length;Mt<At;Mt++){const wt=ct[Mt];xl(W,N,w,wt)}ee&&Ct.render(w);for(let Mt=0,At=ct.length;Mt<At;Mt++){const wt=ct[Mt];gl(m,w,wt,wt.viewport)}}else N.length>0&&xl(W,N,w,U),ee&&Ct.render(w),gl(m,w,U);C!==null&&P===0&&(mt.updateMultisampleRenderTarget(C),mt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(M,w,U),_t.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(g=_[_.length-1],Ft===!0&&dt.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function na(w,U,H,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){W&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Mt=k.update(w),At=w.material;At.visible&&m.push(w,Mt,At,H,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const Mt=k.update(w),At=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Dt.copy(Mt.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(At)){const wt=Mt.groups;for(let Bt=0,Ht=wt.length;Bt<Ht;Bt++){const Nt=wt[Bt],ne=At[Nt.materialIndex];ne&&ne.visible&&m.push(w,Mt,ne,H,Dt.z,Nt)}}else At.visible&&m.push(w,Mt,At,H,Dt.z,null)}}const ct=w.children;for(let Mt=0,At=ct.length;Mt<At;Mt++)na(ct[Mt],U,H,W)}function gl(w,U,H,W){const N=w.opaque,ct=w.transmissive,Mt=w.transparent;g.setupLightsView(H),Ft===!0&&dt.setGlobalState(M.clippingPlanes,H),W&&J.viewport(L.copy(W)),N.length>0&&Jr(N,U,H),ct.length>0&&Jr(ct,U,H),Mt.length>0&&Jr(Mt,U,H),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function xl(w,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new ui(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?qi:Yn,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ct=g.state.transmissionRenderTarget[W.id],Mt=W.viewport||L;ct.setSize(Mt.z*M.transmissionResolutionScale,Mt.w*M.transmissionResolutionScale);const At=M.getRenderTarget(),wt=M.getActiveCubeFace(),Bt=M.getActiveMipmapLevel();M.setRenderTarget(ct),M.getClearColor(z),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),ee&&Ct.render(H);const Ht=M.toneMapping;M.toneMapping=Vi;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),Ft===!0&&dt.setGlobalState(M.clippingPlanes,W),Jr(w,H,W),mt.updateMultisampleRenderTarget(ct),mt.updateRenderTargetMipmap(ct),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let pe=0,Pe=U.length;pe<Pe;pe++){const we=U[pe],xe=we.object,kt=we.geometry,Ae=we.material,ce=we.group;if(Ae.side===Re&&xe.layers.test(W.layers)){const vn=Ae.side;Ae.side=pn,Ae.needsUpdate=!0,vl(xe,H,W,kt,Ae,ce),Ae.side=vn,Ae.needsUpdate=!0,ne=!0}}ne===!0&&(mt.updateMultisampleRenderTarget(ct),mt.updateRenderTargetMipmap(ct))}M.setRenderTarget(At,wt,Bt),M.setClearColor(z,F),Nt!==void 0&&(W.viewport=Nt),M.toneMapping=Ht}function Jr(w,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=w.length;N<ct;N++){const Mt=w[N],At=Mt.object,wt=Mt.geometry,Bt=Mt.group;let Ht=Mt.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),At.layers.test(H.layers)&&vl(At,U,H,wt,Ht,Bt)}}function vl(w,U,H,W,N,ct){w.onBeforeRender(M,U,H,W,N,ct),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(M,U,H,W,w,ct),N.transparent===!0&&N.side===Re&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,M.renderBufferDirect(H,U,W,N,w,ct),N.side=Gi,N.needsUpdate=!0,M.renderBufferDirect(H,U,W,N,w,ct),N.side=Re):M.renderBufferDirect(H,U,W,N,w,ct),w.onAfterRender(M,U,H,W,N,ct)}function Zr(w,U,H){U.isScene!==!0&&(U=Tt);const W=rt.get(w),N=g.state.lights,ct=g.state.shadowsArray,Mt=N.state.version,At=q.getParameters(w,N.state,ct,U,H),wt=q.getProgramCacheKey(At);let Bt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?Xt:Yt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",tt),Bt=new Map,W.programs=Bt);let Ht=Bt.get(wt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===Mt)return Ml(w,At),Ht}else At.uniforms=q.getUniforms(w),w.onBeforeCompile(At,M),Ht=q.acquireProgram(At,wt),Bt.set(wt,Ht),W.uniforms=At.uniforms;const Nt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=dt.uniform),Ml(w,At),W.needsLights=md(w),W.lightsStateVersion=Mt,W.needsLights&&(Nt.ambientLightColor.value=N.state.ambient,Nt.lightProbe.value=N.state.probe,Nt.directionalLights.value=N.state.directional,Nt.directionalLightShadows.value=N.state.directionalShadow,Nt.spotLights.value=N.state.spot,Nt.spotLightShadows.value=N.state.spotShadow,Nt.rectAreaLights.value=N.state.rectArea,Nt.ltc_1.value=N.state.rectAreaLTC1,Nt.ltc_2.value=N.state.rectAreaLTC2,Nt.pointLights.value=N.state.point,Nt.pointLightShadows.value=N.state.pointShadow,Nt.hemisphereLights.value=N.state.hemi,Nt.directionalShadowMap.value=N.state.directionalShadowMap,Nt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Nt.spotShadowMap.value=N.state.spotShadowMap,Nt.spotLightMatrix.value=N.state.spotLightMatrix,Nt.spotLightMap.value=N.state.spotLightMap,Nt.pointShadowMap.value=N.state.pointShadowMap,Nt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function _l(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Oo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ml(w,U){const H=rt.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function fd(w,U,H,W,N){U.isScene!==!0&&(U=Tt),mt.resetTextureUnits();const ct=U.fog,Mt=W.isMeshStandardMaterial?U.environment:null,At=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xs,wt=(W.isMeshStandardMaterial?Xt:Yt).get(W.envMap||Mt),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Nt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,pe=!!H.morphAttributes.color;let Pe=Vi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=M.toneMapping);const we=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=we!==void 0?we.length:0,kt=rt.get(W),Ae=g.state.lights;if(Ft===!0&&($===!0||w!==S)){const nn=w===S&&W.id===b;dt.setState(W,w,nn)}let ce=!1;W.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ae.state.version||kt.outputColorSpace!==At||N.isBatchedMesh&&kt.batching===!1||!N.isBatchedMesh&&kt.batching===!0||N.isBatchedMesh&&kt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&kt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&kt.instancing===!1||!N.isInstancedMesh&&kt.instancing===!0||N.isSkinnedMesh&&kt.skinning===!1||!N.isSkinnedMesh&&kt.skinning===!0||N.isInstancedMesh&&kt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&kt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&kt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&kt.instancingMorph===!1&&N.morphTexture!==null||kt.envMap!==wt||W.fog===!0&&kt.fog!==ct||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==dt.numPlanes||kt.numIntersection!==dt.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Ht||kt.morphTargets!==Nt||kt.morphNormals!==ne||kt.morphColors!==pe||kt.toneMapping!==Pe||kt.morphTargetsCount!==xe)&&(ce=!0):(ce=!0,kt.__version=W.version);let vn=kt.currentProgram;ce===!0&&(vn=Zr(W,U,N));let gs=!1,_n=!1,tr=!1;const Te=vn.getUniforms(),En=kt.uniforms;if(J.useProgram(vn.program)&&(gs=!0,_n=!0,tr=!0),W.id!==b&&(b=W.id,_n=!0),gs||S!==w){J.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Te.setValue(I,"projectionMatrix",w.projectionMatrix),Te.setValue(I,"viewMatrix",w.matrixWorldInverse);const ln=Te.map.cameraPosition;ln!==void 0&&ln.setValue(I,bt.setFromMatrixPosition(w.matrixWorld)),j.logarithmicDepthBuffer&&Te.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Te.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,_n=!0,tr=!0)}if(N.isSkinnedMesh){Te.setOptional(I,N,"bindMatrix"),Te.setOptional(I,N,"bindMatrixInverse");const nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Te.setValue(I,"boneTexture",nn.boneTexture,mt))}N.isBatchedMesh&&(Te.setOptional(I,N,"batchingTexture"),Te.setValue(I,"batchingTexture",N._matricesTexture,mt),Te.setOptional(I,N,"batchingIdTexture"),Te.setValue(I,"batchingIdTexture",N._indirectTexture,mt),Te.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&Te.setValue(I,"batchingColorTexture",N._colorsTexture,mt));const An=H.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ot.update(N,H,vn),(_n||kt.receiveShadow!==N.receiveShadow)&&(kt.receiveShadow=N.receiveShadow,Te.setValue(I,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(En.envMap.value=wt,En.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(En.envMapIntensity.value=U.environmentIntensity),_n&&(Te.setValue(I,"toneMappingExposure",M.toneMappingExposure),kt.needsLights&&pd(En,tr),ct&&W.fog===!0&&nt.refreshFogUniforms(En,ct),nt.refreshMaterialUniforms(En,W,G,K,g.state.transmissionRenderTarget[w.id]),Oo.upload(I,_l(kt),En,mt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Oo.upload(I,_l(kt),En,mt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Te.setValue(I,"center",N.center),Te.setValue(I,"modelViewMatrix",N.modelViewMatrix),Te.setValue(I,"normalMatrix",N.normalMatrix),Te.setValue(I,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const nn=W.uniformsGroups;for(let ln=0,ia=nn.length;ln<ia;ln++){const $i=nn[ln];Kt.update($i,vn),Kt.bind($i,vn)}}return vn}function pd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function md(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,H){const W=rt.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),rt.get(w.texture).__webglTexture=U,rt.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const H=rt.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const gd=I.createFramebuffer();this.setRenderTarget=function(w,U=0,H=0){C=w,A=U,P=H;let W=!0,N=null,ct=!1,Mt=!1;if(w){const wt=rt.get(w);if(wt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)mt.setupRenderTarget(w);else if(wt.__hasExternalTextures)mt.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(wt.__boundDepthTexture!==Nt){if(Nt!==null&&rt.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);const Ht=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?N=Ht[U][H]:N=Ht[U],ct=!0):w.samples>0&&mt.useMultisampledRTT(w)===!1?N=rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[H]:N=Ht,L.copy(w.viewport),O.copy(w.scissor),V=w.scissorTest}else L.copy(vt).multiplyScalar(G).floor(),O.copy(Ot).multiplyScalar(G).floor(),V=Zt;if(H!==0&&(N=gd),J.bindFramebuffer(I.FRAMEBUFFER,N)&&W&&J.drawBuffers(w,N),J.viewport(L),J.scissor(O),J.setScissorTest(V),ct){const wt=rt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,H)}else if(Mt){const wt=U;for(let Bt=0;Bt<w.textures.length;Bt++){const Ht=rt.get(w.textures[Bt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,H,wt)}}else if(w!==null&&H!==0){const wt=rt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(w,U,H,W,N,ct,Mt,At=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){J.bindFramebuffer(I.FRAMEBUFFER,wt);try{const Bt=w.textures[At],Ht=Bt.format,Nt=Bt.type;if(!j.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&H>=0&&H<=w.height-N&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At),I.readPixels(U,H,W,N,Ut.convert(Ht),Ut.convert(Nt),ct))}finally{const Bt=C!==null?rt.get(C).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,W,N,ct,Mt,At=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt)if(U>=0&&U<=w.width-W&&H>=0&&H<=w.height-N){J.bindFramebuffer(I.FRAMEBUFFER,wt);const Bt=w.textures[At],Ht=Bt.format,Nt=Bt.type;if(!j.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,ct.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At),I.readPixels(U,H,W,N,Ut.convert(Ht),Ut.convert(Nt),0);const pe=C!==null?rt.get(C).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,pe);const Pe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wf(I,Pe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ct),I.deleteBuffer(ne),I.deleteSync(Pe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,H=0){const W=Math.pow(2,-H),N=Math.floor(w.image.width*W),ct=Math.floor(w.image.height*W),Mt=U!==null?U.x:0,At=U!==null?U.y:0;mt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Mt,At,N,ct),J.unbindTexture()};const xd=I.createFramebuffer(),vd=I.createFramebuffer();this.copyTextureToTexture=function(w,U,H=null,W=null,N=0,ct=null){ct===null&&(N!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=N,N=0):ct=0);let Mt,At,wt,Bt,Ht,Nt,ne,pe,Pe;const we=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(H!==null)Mt=H.max.x-H.min.x,At=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Bt=H.min.x,Ht=H.min.y,Nt=H.isBox3?H.min.z:0;else{const An=Math.pow(2,-N);Mt=Math.floor(we.width*An),At=Math.floor(we.height*An),w.isDataArrayTexture?wt=we.depth:w.isData3DTexture?wt=Math.floor(we.depth*An):wt=1,Bt=0,Ht=0,Nt=0}W!==null?(ne=W.x,pe=W.y,Pe=W.z):(ne=0,pe=0,Pe=0);const xe=Ut.convert(U.format),kt=Ut.convert(U.type);let Ae;U.isData3DTexture?(mt.setTexture3D(U,0),Ae=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(mt.setTexture2DArray(U,0),Ae=I.TEXTURE_2D_ARRAY):(mt.setTexture2D(U,0),Ae=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gs=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),tr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);const Te=w.isDataArrayTexture||w.isData3DTexture,En=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const An=rt.get(w),nn=rt.get(U),ln=rt.get(An.__renderTarget),ia=rt.get(nn.__renderTarget);J.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let $i=0;$i<wt;$i++)Te&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rt.get(w).__webglTexture,N,Nt+$i),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rt.get(U).__webglTexture,ct,Pe+$i)),I.blitFramebuffer(Bt,Ht,Mt,At,ne,pe,Mt,At,I.DEPTH_BUFFER_BIT,I.NEAREST);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||w.isRenderTargetTexture||rt.has(w)){const An=rt.get(w),nn=rt.get(U);J.bindFramebuffer(I.READ_FRAMEBUFFER,xd),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,vd);for(let ln=0;ln<wt;ln++)Te?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,N,Nt+ln):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,N),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,ct,Pe+ln):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,ct),N!==0?I.blitFramebuffer(Bt,Ht,Mt,At,ne,pe,Mt,At,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(Ae,ct,ne,pe,Pe+ln,Bt,Ht,Mt,At):I.copyTexSubImage2D(Ae,ct,ne,pe,Bt,Ht,Mt,At);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ae,ct,ne,pe,Pe,Mt,At,wt,xe,kt,we.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,ct,ne,pe,Pe,Mt,At,wt,xe,we.data):I.texSubImage3D(Ae,ct,ne,pe,Pe,Mt,At,wt,xe,kt,we):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ct,ne,pe,Mt,At,xe,kt,we.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ct,ne,pe,we.width,we.height,xe,we.data):I.texSubImage2D(I.TEXTURE_2D,ct,ne,pe,Mt,At,xe,kt,we);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gs),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tr),ct===0&&U.generateMipmaps&&I.generateMipmap(Ae),J.unbindTexture()},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&mt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?mt.setTextureCube(w,0):w.isData3DTexture?mt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?mt.setTexture2DArray(w,0):mt.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){A=0,P=0,C=null,J.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}function $v(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ie;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=i[f].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Lh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);const p=Lh(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Lh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new mn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const jn=(i,t=!1)=>new Gt({color:i,roughness:.72,...t?{emissive:i,emissiveIntensity:1}:{}});class Kv{constructor(t){const e=this.root=new de;e.name="Panorama Live · banda e plateia",e.position.set(-80,0,18),e.rotation.y=Math.PI/2,t.scene.add(e),this.members=[],this.lights=[];const n={dark:jn("#20222d"),metal:jn("#8b8b98"),purple:jn("#6A659E"),skin:jn("#c49375"),white:jn("#dddcd5"),orange:jn("#ef8055"),light:jn("#bcb0ff",!0)},s=(f,u,p,x)=>{const m=new le(new gn(...u),x);return m.position.set(...p),m.castShadow=!0,f.add(m),m},r=(f,u,p,x,m)=>{const g=new R(...u),v=new R(...p),_=new le(new Le(x,x,g.distanceTo(v),6),m);return _.position.copy(g).add(v).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new R(0,1,0),v.sub(g).normalize()),f.add(_),_};s(e,[31,1.5,13],[0,.75,-2],n.dark),s(e,[34,.4,15],[0,12,-2],n.dark);for(const f of[-15,15])for(const u of[-8,4]){r(e,[f,0,u],[f,12,u],.18,n.metal),r(e,[f-.4,0,u],[f-.4,12,u],.08,n.metal);for(let p=0;p<11;p+=1.5)r(e,[f,p,u],[f-.4,p+1.5,u],.06,n.metal)}const o=document.createElement("canvas");o.width=1024,o.height=512;const a=o.getContext("2d");a.fillStyle="#1e1e1e",a.fillRect(0,0,1024,512),Xi(a,60,45,904,250),a.fillStyle="#c0b2ff",a.textAlign="center",a.font="bold 54px Arial",a.fillText("L I V E   /   M O T O R A M A",512,390),a.font="24px Arial",a.fillStyle="white",a.fillText("TERRA. MOTOR. SOM.",512,456);const c=new xn(o);c.colorSpace=be;const l=new le(new ae(27,10),new di({map:c}));l.position.set(0,6.5,-8.02),e.add(l);for(const f of[-16.5,16.5]){for(let u=0;u<3;u++)s(e,[2.7,2.5,2.5],[f,2+u*2.4,1],n.dark);s(e,[3.4,1.6,3],[f,.8,3.5],n.dark)}for(let f=0;f<5;f++){const u=new de;u.position.set([-9,-4,0,7,0][f],1.5,[0,-1,2,0,-5][f]),e.add(u);const p=s(u,[.65,.85,.35],[0,1.28,0],f%2?n.purple:n.dark);s(u,[.38,.46,.38],[0,1.97,0],n.skin),s(u,[.44,.16,.42],[0,2.18,-.03],n.dark);for(const m of[-1,1])r(u,[m*.19,.95,0],[m*.3,0,.13],.12,n.dark);const x=[];for(const m of[-1,1]){const g=new de;g.position.set(m*.4,1.65,0),u.add(g),r(g,[0,0,0],[m*.12,-.65,.15],.09,n.skin),x.push(g)}if(f===2)r(e,[0,1.5,2.5],[0,3.15,2.5],.025,n.metal),s(e,[.1,.12,.3],[0,3.13,2.5],n.dark);else if(f!==4){const m=new de;m.position.set(.05,.95,.35),m.rotation.z=-.65,s(m,[.55,.65,.13],[0,0,0],f===3?n.orange:n.purple),s(m,[.12,.95,.1],[0,.65,0],n.metal),u.add(m)}this.members.push({person:u,arms:x,torso:p})}s(e,[5,.35,4],[0,1.65,-5],n.dark);for(const[f,u,p,x]of[[0,2.3,-4,.65],[-.7,2.9,-4.6,.35],[.7,2.8,-4.6,.4]]){const m=new le(new Le(x,x,.65,14),n.purple);m.position.set(f,u,p),m.rotation.x=Math.PI/2,e.add(m)}for(const f of[-1.4,1.4]){r(e,[f,1.7,-4.6],[f,3.4,-4.6],.035,n.metal);const u=new le(new Le(.6,.6,.025,16),jn("#bd9d60"));u.position.set(f,3.4,-4.6),e.add(u)}for(let f=0;f<8;f++){const u=new de;u.position.set(-12+f*3.4,11,3),e.add(u),s(u,[.55,.5,.7],[0,0,0],n.light);const p=new le(new qr(3,16,12,1,!0),new di({color:f%2?"#a198ee":"#f6d9ba",transparent:!0,opacity:.045,depthWrite:!1,side:Re,blending:Ya}));p.position.y=-8,u.add(p),this.lights.push(u)}this.people=Array.from({length:168},(f,u)=>({x:(u%14-6.5)*1.65+Math.sin(u)*.35,z:7+Math.floor(u/14)*1.4,phase:u*2.399,height:.92+u%7*.025})),this.body=new qn(new gn(.48,.72,.3),jn("white"),168),this.head=new qn(new Hi(.2,1),n.skin,168),this.limbs=new qn(new Le(.07,.08,1,5),jn("white"),168*4);const h=["#716b9d","#3c4050","#deded3","#a16b55","#899d89"],d=new Wt;this.people.forEach((f,u)=>{d.set(h[u%h.length]),this.body.setColorAt(u,d);for(let p=0;p<4;p++)this.limbs.setColorAt(u*4+p,new Wt(p<2?"#ba907c":"#2a2e36"))});for(const f of[this.body,this.head,this.limbs])f.frustumCulled=!1,e.add(f);this.pose=new Ee,this.update(0)}update(t){for(const[n,s]of this.members.entries())s.person.position.y=1.5+Math.abs(Math.sin(t*4+n))*(n===4?.02:.12),s.person.rotation.z=Math.sin(t*2+n)*.05,s.arms.forEach((r,o)=>{r.rotation.x=n===4?-.5+Math.sin(t*13+o*Math.PI)*.6:n===2?-.7+Math.sin(t*2+o)*.45:-.4+Math.sin(t*9+o)*.18});this.lights.forEach((n,s)=>{n.rotation.z=Math.sin(t*.7+s)*.45,n.rotation.x=-.45+Math.sin(t*.6+s)*.15});const e=this.pose;this.people.forEach((n,s)=>{const r=Math.max(0,Math.sin(t*5.2+n.phase))**2*.38,o=n.height+r;e.rotation.set(0,Math.PI,Math.sin(t*2+n.phase)*.07),e.scale.setScalar(1),e.position.set(n.x,o,n.z),e.updateMatrix(),this.body.setMatrixAt(s,e.matrix),e.position.y=o+.58,e.updateMatrix(),this.head.setMatrixAt(s,e.matrix);for(let a=0;a<4;a++){const c=a%2?-1:1,l=a<2;e.position.set(n.x+c*(l?.4:.17),o+(l?.45:-.63),n.z),e.rotation.set(0,0,l?c*(.45+Math.sin(t*4+n.phase)*.2):c*.1),e.scale.set(1,l?.65:.72,1),e.updateMatrix(),this.limbs.setMatrixAt(s*4+a,e.matrix)}});for(const n of[this.body,this.head,this.limbs])n.instanceMatrix.needsUpdate=!0}}const Cn=(i,t={})=>new Gt({color:i,roughness:.85,...t});function Lr(i,t=1024,e=256,n={}){const s=document.createElement("canvas");s.width=t,s.height=e,i(s.getContext("2d"),t,e);const r=new xn(s);return r.colorSpace=be,r.anisotropy=8,Cn("#ffffff",{map:r,...n})}function Fc(i="natural"){const t={natural:{base:"#af7947",grain:"rgba(60,29,13,.12)",seam:"#765233",screw:"#5f4e3b"},black:{base:"#222326",grain:"rgba(159,159,148,.055)",seam:"#111215",screw:"#55565a"},gray:{base:"#81858b",grain:"rgba(210,212,215,.09)",seam:"#656a71",screw:"#464b52"}}[i],e=Lr((n,s,r)=>{n.fillStyle=t.base,n.fillRect(0,0,s,r);for(let o=0;o<1100;o++){const a=(Math.sin(o*123.4)*.5+.5)*s,c=(Math.sin(o*33.9)*.5+.5)*r;n.fillStyle=t.grain,n.fillRect(a,c,28+o%83,.7)}n.strokeStyle=t.seam,n.lineWidth=2;for(let o=0;o<r;o+=128)n.beginPath(),n.moveTo(0,o),n.lineTo(s,o),n.stroke();for(let o=0;o<4;o++)for(let a=o%2*256;a<s;a+=512)n.beginPath(),n.moveTo(a,o*128),n.lineTo(a,(o+1)*128),n.stroke();n.fillStyle=t.screw;for(let o=8;o<r;o+=128)for(let a=10;a<s;a+=64)n.beginPath(),n.arc(a,o,1.7,0,Math.PI*2),n.fill()},1024,512,{roughness:.94});return e.map.wrapS=e.map.wrapT=us,e}function zi(i,t,e,n,s,r,o,a=1,c=0,l={x:1.2,z:.5}){const h=[],d=[],f=[],u=Math.max(2,Math.ceil((e-t)/l.x)),p=Math.max(2,Math.ceil((s-n)/l.z));for(let m=0;m<=p;m++)for(let g=0;g<=u;g++){const v=t+(e-t)*g/u,_=n+(s-n)*m/p;if(h.push(v,r(v,_)+c,_),d.push((v-t)/a,(_-n)/a),m<p&&g<u){const M=m*(u+1)+g;f.push(M,M+u+1,M+1,M+1,M+u+1,M+u+2)}}const x=new ie;return x.setAttribute("position",new Lt(h,3)),x.setAttribute("uv",new Lt(d,2)),x.setIndex(f),x.computeVertexNormals(),i.add(x,o)}function je(i,t,e,n,s){const r=new R(...t),o=new R(...e),a=o.clone().sub(r),c=i.box([n,a.length(),n],r.add(o).multiplyScalar(.5).toArray(),s);return c.quaternion.setFromUnitVectors(new R(0,1,0),a.normalize()),c}function ti(i,t,e,n,s,r,o,a=0){const c=i.add(new ae(e,n),t,[s,r,o]);return c.rotation.y=a,c}function lr(i=""){return Lr((t,e,n)=>{t.fillStyle="#1e1e1e",t.fillRect(0,0,e,n),Xi(t,60,8,e-120,i?n*.72:n-16),i&&(t.fillStyle="#c5bde9",t.textAlign="center",t.font="700 26px Arial",t.fillText(i,e/2,n-20))},1024,256,{side:Re,emissive:"#ffffff",emissiveIntensity:.2})}function Jv(i,t,e,n,s){const r=Lr((l,h,d)=>{Xi(l,0,0,h,d);const f=l.getImageData(0,0,h,d);for(let u=0;u<f.data.length;u+=4)f.data[u+3]=Math.max(0,(f.data[u]-38)*255/217),f.data[u]=f.data[u+1]=f.data[u+2]=255;l.putImageData(f,0,0)},1024,256,{transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}),o=zi(i,t-n/2,t+n/2,e-s/2,e+s/2,te,r,1,.045),a=o.geometry.attributes.position,c=o.geometry.attributes.uv;for(let l=0;l<a.count;l++)c.setXY(l,.5-(a.getX(l)-t)/n,.5+(a.getZ(l)-e)/s);o.castShadow=!1}function Zv(i){const t=St.rollIn,e=St.dirt,n=St.venue,s=Lr((u,p,x)=>{u.fillStyle="#50545b",u.fillRect(0,0,p,x),u.strokeStyle="#494c52",u.lineWidth=3,u.strokeRect(0,0,p,x);for(let m=0;m<3e3;m++)u.fillStyle=m%2?"#5a5c63":"#454850",u.globalAlpha=.23,u.fillRect(m*157%p,m*237%x,2,1);u.globalAlpha=1},512,512);s.map.wrapS=s.map.wrapT=us,zi(i,-n.halfWidth,n.halfWidth,n.centerZ-n.halfLength,n.centerZ+n.halfLength,()=>-.045,s,10,0,{x:400,z:600}).castShadow=!1;const r=zi(i,e.left,e.right,e.start,e.end,()=>0,i.materials.dirt,Ze.textureScale,.006,{x:40,z:400});r.castShadow=!1;const o=Fc("black"),a=Fc("gray"),c=Cn("#292d34",{metalness:.5}),l=St.jumps[0],h=l.x+l.width/2+3;zi(i,t.left+t.feather,h,t.back+t.feather,t.end,Oi,o,4,.02,{x:24,z:.5}),zi(i,h,t.right-t.feather,t.back+t.feather,t.end,Oi,a,4,.02,{x:24,z:.5});for(const u of[t.left+t.feather,t.right-t.feather]){const p=[],x=[];for(let g=t.back+t.feather,v=0;g<=t.end;g+=.5,v++)if(p.push(u,0,g,u,Oi(u,g),g),v){const _=v*2;x.push(_-2,_-1,_,_,_-1,_+1)}const m=new ie;m.setAttribute("position",new Lt(p,3)),m.setIndex(x),m.computeVertexNormals(),i.add(m,Cn("#171a20",{side:Re}));for(let g=t.back+6;g<t.end-4;g+=9){const v=Oi(u,g);je(i,[u,0,g],[u,v,g],.26,c),v>3&&je(i,[u,.2,g],[u,Oi(u,g+9),g+9],.18,c)}for(let g=t.back+5;g<t.end-10;g+=4){const v=Oi(u,g),_=Oi(u,g+4);je(i,[u,v,g],[u,v+1.05,g],.09,c),je(i,[u,v+1.05,g],[u,_+1.05,g+4],.08,c)}}Jv(i,l.x,(t.start+t.end)/2,16,5.5);const d=Cn("#8e9194",{transparent:!0,opacity:.45});for(const u of[-3,7])i.box([.06,.009,307],[u,.008,27.5],d).castShadow=!1;const f=Lr((u,p,x)=>{u.fillStyle="#a9a9b2",u.beginPath(),u.moveTo(p*.5,15),u.lineTo(p*.83,x*.4),u.lineTo(p*.6,x*.4),u.lineTo(p*.6,x-15),u.lineTo(p*.4,x-15),u.lineTo(p*.4,x*.4),u.lineTo(p*.17,x*.4),u.closePath(),u.fill()},128,256,{transparent:!0,depthWrite:!1});for(const u of[-105,-30,45,120]){const p=ti(i,f,1.2,2.4,2,.028,u);p.rotation.x=-Math.PI/2,p.rotation.z=Math.PI}}function jv(i,t,e,n){const s=t.width*.41,r=t.depth*.4,o=t.height-.35,a=112,c=28,l=[],h=[],d=[];for(let v=0;v<=c;v++)for(let _=0;_<=a;_++){const M=_/a*Math.PI*2,E=v/c,A=1+.065*Math.sin(M*3),P=E<.55?E*.92:.506+.494*Math.sin((E-.55)/.45*Math.PI/2),C=E<.55?.35:.35+o*(1-Math.cos((E-.55)/.45*Math.PI/2));if(l.push(t.x+Math.cos(M)*s*P*A,C,t.z+Math.sin(M)*r*P),h.push(_/a,v/c),v<c&&_<a){const b=v*(a+1)+_;d.push(b,b+1,b+a+1,b+1,b+a+2,b+a+1)}}const f=new ie;f.setAttribute("position",new Lt(l,3)),f.setAttribute("uv",new Lt(h,2)),f.setIndex(d),f.computeVertexNormals(),i.add(f,e.concrete);const u=[],p=[];for(let v=0;v<=a;v++){const _=v/a*Math.PI*2,M=Math.cos(_),E=Math.sin(_),A=1+.065*Math.sin(_*3),P=Math.min(t.width/2/Math.max(Math.abs(M),1e-6),t.depth/2/Math.max(Math.abs(E),1e-6));if(u.push(t.x+M*s*A,t.height,t.z+E*r,t.x+M*P,t.height,t.z+E*P),v<a){const C=v*2;p.push(C,C+2,C+1,C+1,C+2,C+3)}}const x=new ie;x.setAttribute("position",new Lt(u,3)),x.setAttribute("uv",new Lt(u.flatMap((v,_)=>_%3===0?[0,0]:[]),2)),x.setIndex(p),x.computeVertexNormals(),i.add(x,e.concrete);const m=[];for(let v=0;v<=a;v++){const _=v/a*Math.PI*2;m.push(new R(t.x+Math.cos(_)*s*(1+.065*Math.sin(_*3)),t.height+.06,t.z+Math.sin(_)*r))}i.add(new Ks(new Zo(m),168,.1,6,!1),e.metal);for(const v of[-1,1])i.box([t.width,t.height,.35],[t.x,t.height/2,t.z+v*t.depth/2],e.dark),i.box([.35,t.height,t.depth],[t.x+v*t.width/2,t.height/2,t.z],e.dark);ti(i,n,16,4,t.x,t.height/2,t.z-t.depth/2-.2),i.add(new Yr(1,24,12),e.concrete,[t.x+8,.3,t.z+3]).scale.set(4,1.4,7);for(let v=0;v<8;v++)i.box([6,.28*(v+1),1],[t.x-t.width/2+5,.14*(v+1),t.z-t.depth/2-8+v],e.concrete)}function Qv(i,t,e,n){i.box([t.width,.35,t.depth],[t.x,.175,t.z],e.concrete);const s=t.z-10;i.box([t.width-7,2.4,18],[t.x,1.55,s-13],e.concrete);for(let a=0;a<8;a++)i.box([17,2.4-a*.3,1.2],[t.x-7,.35+(2.4-a*.3)/2,s-3.4+a*1.2],e.concrete);const r=(a,c)=>{je(i,a,c,.14,e.metal);for(const l of[.12,.5,.88]){const h=a[0]+(c[0]-a[0])*l,d=a[2]+(c[2]-a[2])*l,f=a[1]+(c[1]-a[1])*l;je(i,[h,.35,d],[h,f,d],.1,e.metal)}};r([t.x-7,3.65,s-4],[t.x-7,1.25,s+7]);for(const a of[t.x-17,t.x+3])je(i,[a,3.08,s-4],[a,.85,s+7],.65,e.purple);zi(i,t.x+8,t.x+21,s-4,s+10,(a,c)=>.35+2.4*Math.max(0,1-(c-(s-4))/14),e.concrete,6);for(const a of[t.x-18,t.x+15])i.box([2.3,.65,15],[a,.675,t.z+24],e.concrete),i.box([2.4,.08,15.1],[a,1.04,t.z+24],e.purple);r([t.x-4,1.25,t.z+17],[t.x-4,1.25,t.z+34]);const o=i.add(new Le(2,7,1.8,4),e.concrete,[t.x+8,1.25,t.z+4]);o.rotation.y=Math.PI/4,zi(i,t.x-23,t.x-7,t.z+32,t.z+43,(a,c)=>.35+3*(1-Math.cos(Math.max(0,(c-t.z-32)/11)*Math.PI/2)),e.concrete,6),ti(i,n,19,4.75,t.x,2.8,t.z-t.depth/2-.2)}function t_(i,t,e){const n=Fc(),s=t.height-.35,r=5,o=r+s,a=t.depth-8,c=[],l=[],h=[],d=96;for(let u=0;u<=d;u++){const p=u/d*2-1,x=Math.sign(p);let m,g;if(Math.abs(p)<.3)m=p/.3*r,g=.35;else{const v=(Math.abs(p)-.3)/.7*Math.PI/2;m=x*(r+s*Math.sin(v)),g=.35+s*(1-Math.cos(v))}for(const v of[-a/2,a/2])c.push(t.x+m,g,t.z+v),l.push(m/3,v/3);if(u<d){const v=u*2;h.push(v,v+1,v+2,v+1,v+3,v+2)}}const f=new ie;f.setAttribute("position",new Lt(c,3)),f.setAttribute("uv",new Lt(l,2)),f.setIndex(h),f.computeVertexNormals(),i.add(f,n);for(const u of[-1,1]){i.box([5,.25,a],[t.x+u*(o+2.5),t.height-.125,t.z],n),je(i,[t.x+u*o,t.height+.08,t.z-a/2],[t.x+u*o,t.height+.08,t.z+a/2],.16,e.metal);for(let p=t.z-a/2;p<=t.z+a/2;p+=5)je(i,[t.x+u*(o+4.8),0,p],[t.x+u*(o+4.8),t.height+1.2,p],.18,e.metal);je(i,[t.x+u*(o+4.8),t.height+1.2,t.z-a/2],[t.x+u*(o+4.8),t.height+1.2,t.z+a/2],.12,e.metal),i.box([.25,t.height,a],[t.x+u*(o+4.8),t.height/2,t.z],e.dark);for(const p of[t.z-a/2,t.z+a/2]){const x=new js;x.moveTo(u*r,0),x.lineTo(u*(o+5),0),x.lineTo(u*(o+5),t.height);for(let m=Math.PI/2;m>=0;m-=Math.PI/80)x.lineTo(u*(r+s*Math.sin(m)),.35+s*(1-Math.cos(m)));x.closePath(),i.add(new Qo(x),e.purple,[t.x,0,p])}}}function e_(i){const t=St.venue,e=St.rollIn,n={concrete:Cn("#a4a8aa"),dark:Cn("#252934"),metal:Cn("#525966",{metalness:.6,roughness:.5}),purple:Cn("#6A659E",{side:Re}),seat:Cn("#504967"),light:new di({color:"#e8e9ff"})},s=lr("MOTORAMA  /  ACTION SPORTS"),r=lr();i.scene.background=new Wt("#242733"),i.scene.fog=new ps("#303440",290,740),i.camera.far=900,i.ambient.color.set("#e7edff"),i.ambient.groundColor.set("#64616a"),i.ambient.intensity=1.85,i.sun.color.set("#fff0dc"),i.sun.intensity=2.2;for(const u of[-1,1])i.box([2,67,t.halfLength*2],[u*t.halfWidth,33.5,t.centerZ],n.dark).castShadow=!1;for(const u of[t.centerZ-t.halfLength,t.centerZ+t.halfLength])i.box([t.halfWidth*2,67,2],[0,33.5,u],n.dark).castShadow=!1;const o=Cn("#20242c",{side:Re}),a=u=>t.roofHeight+10*(1-Math.abs(u)/t.halfWidth);zi(i,-t.halfWidth,t.halfWidth,t.centerZ-t.halfLength,t.centerZ+t.halfLength,a,o,20,0,{x:400,z:600}).castShadow=!1;const c=[];for(const u of[-1,1]){for(let p=0;p<11;p++){const x=u*(113+p*3.8),m=3+p*2;i.box([3.9,m,510],[x,m/2,t.centerZ],n.dark);for(let g=-280;g<225;g+=4)i.box([2.4,.6,3.2],[x,m+.35,g],p%3?n.seat:n.purple),Math.abs(Math.sin(g*11+p*7))>.15&&c.push({x,y:m,z:g,n:Math.abs(Math.sin(g*17+p*13))})}i.box([1.5,3,515],[u*109,1.5,t.centerZ],n.dark);for(let p=-245;p<221;p+=52)ti(i,r,28,7,u*108,7,p,u>0?-Math.PI/2:Math.PI/2);i.box([.3,2,518],[u*153,29,t.centerZ],n.purple);for(let p=-270;p<=225;p+=45)i.box([1.2,63,1.2],[u*155,31.5,p],n.metal).castShadow=!1,ti(i,r,22,5.5,u*154,39,p,u>0?-Math.PI/2:Math.PI/2)}for(const u of[-1,1]){for(let x=0;x<8;x++){const m=t.centerZ+u*(250+x*3.8),g=4+x*2.4;i.box([220,g,3.9],[0,g/2,m],n.dark);for(let v=-105;v<107;v+=4)i.box([3.1,.6,2.3],[v,g+.35,m],n.seat),Math.abs(Math.sin(v*9+x*3))>.2&&c.push({x:v,y:g,z:m,n:Math.abs(Math.sin(v*2+x*5))})}const p=t.centerZ+u*248;i.box([68,18,1],[0,40,p],n.dark),ti(i,s,65,16.25,0,40,p-u*.6,u>0?Math.PI:0)}for(let u=-285;u<=240;u+=35){for(const p of[0,-3])je(i,[-155,a(-155)+p,u],[0,a(0)+p,u],.32,n.metal).castShadow=!1,je(i,[0,a(0)+p,u],[155,a(155)+p,u],.32,n.metal).castShadow=!1;for(let p=-150;p<150;p+=15)je(i,[p,a(p),u],[p+15,a(p+15)-3,u],.14,n.metal).castShadow=!1;for(const p of[-90,-45,0,45,90])i.box([7,.5,2.3],[p,58,u],n.dark).castShadow=!1,i.box([6.5,.1,1.7],[p,57.7,u],n.light).castShadow=!1,je(i,[p,58,u],[p,a(p),u],.08,n.metal).castShadow=!1}const l=new Ee,h=new qn(new gn(.6,.9,.5),Cn("#ffffff"),c.length),d=new qn(new Hi(.24,0),Cn("#bc967f"),c.length),f=["#d6d6db","#6A659E","#222735","#879477","#b87962"];c.forEach((u,p)=>{l.position.set(u.x,u.y+1,u.z),l.updateMatrix(),h.setMatrixAt(p,l.matrix),h.setColorAt(p,new Wt(f[Math.floor(u.n*99)%f.length])),l.position.y+=.65,l.updateMatrix(),d.setMatrixAt(p,l.matrix)}),h.computeBoundingSphere(),d.computeBoundingSphere(),i.scene.add(h,d),jv(i,t.bowl,n,lr("PARK / BOWL")),Qv(i,t.street,n,lr("SKATE / STREET")),t_(i,t.vert,n);for(const u of[-92,116]){i.box([12,3.2,7],[-75,1.6,u],n.dark),i.box([14,.25,9],[-75,3.5,u],n.purple),ti(i,s,10,2.5,-75,2,u+3.55);for(const p of[-5,5])for(const x of[-3,3])je(i,[-75+p,0,u+x],[-75+p,3.4,u+x],.13,n.metal)}for(const u of St.jumps)for(const p of[-40,-4])i.box([1,4,1],[p,2,u.z+8],n.dark),ti(i,r,3.8,.95,p,3.3,u.z+7.48);for(const u of[-31,-12])je(i,[u,e.top,-254],[u,e.top+5,-254],.18,n.metal);ti(i,r,19,4.75,-21.5,e.top+4.9,-254,Math.PI),i.concert=new Kv(i),ti(i,lr("RETORNO AO TOPO  →"),10,2.5,-10,2.7,213,Math.PI)}function Ei(i,t,e="#6A659E",n="#ffffff"){const s=document.createElement("canvas");s.width=1024,s.height=256;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1024,256),r.fillStyle=n,r.font="italic 900 111px Arial",r.textAlign="center",i==="PANORAMA"?(r.fillStyle="#1e1e1e",r.fillRect(0,0,1024,180),Xi(r,130,8,764,168)):r.fillText(i,512,142),r.fillStyle=n,r.font="700 30px Arial",r.fillText(t,512,208);const o=new xn(s);return o.colorSpace=be,new Gt({map:o,roughness:.65,side:Re})}function n_(){const i=document.createElement("canvas");i.width=1536,i.height=512;const t=i.getContext("2d");t.fillStyle="#242b29",t.fillRect(0,0,1536,512);for(let n=0;n<6;n++)t.fillStyle=n%2?"#6A659E":"#b9eb76",t.beginPath(),t.moveTo(740+n*90,0),t.lineTo(1040+n*90,0),t.lineTo(590+n*90,512),t.lineTo(290+n*90,512),t.fill();t.fillStyle="#222827",t.fillRect(65,122,1165,244),t.fillStyle="#fff",t.font="italic 900 158px Arial",t.fillText("MOTORAMA",95,280),t.font="700 39px Arial",t.fillText("04   /   VITOR   /   FREESTYLE RACING TEAM",102,338),t.strokeStyle="#d6f6aa",t.lineWidth=12;for(const n of[1260,1440])t.beginPath(),t.arc(n,385,52,0,Math.PI*2),t.stroke();t.beginPath(),t.moveTo(1260,385),t.lineTo(1324,302),t.lineTo(1397,300),t.lineTo(1440,385),t.moveTo(1303,332),t.lineTo(1372,385),t.lineTo(1260,385),t.moveTo(1380,282),t.lineTo(1422,282),t.stroke(),t.fillStyle="#1e1e1e",t.fillRect(80,380,530,125),Xi(t,95,386,500,110);const e=new xn(i);return e.colorSpace=be,new Gt({map:e,roughness:.65,side:Re})}function i_(i){St.theme==="indoor"?s_(i):St.theme==="desert"?c_(i):St.theme==="stadium"&&e_(i)}function s_(i){const t=i.materials,e=new Gt({color:"#303b43",roughness:.65,metalness:.35}),n=new Gt({color:"#85898a",roughness:1}),s=new Gt({color:"#505d67",roughness:1});i.scene.background=new Wt("#343b42"),i.scene.fog=new ps("#575c63",180,370),i.ambient.color.set("#e8edff"),i.ambient.intensity=1.7,i.sun.color.set("#fff0d7"),i.sun.intensity=2.2;for(const l of[-1,1]){i.box([2,28,300],[l*100,14,0],s),i.box([1.2,1.15,275],[l*81,.57,-5],t.purple);for(let h=0;h<5;h++){i.box([3,1.2+h*1.35,265],[l*(84+h*3),.6+h*.675,-5],n);for(let d=-133;d<127;d+=4.3)i.box([1.8,.5,2.6],[l*(84+h*3),1.45+h*1.35,d],(Math.floor(d/10)+h)%3===0?t.purple:t.pale)}for(let h=-135;h<145;h+=28)i.box([.8,31,.8],[l*98,15.5,h],e)}for(const l of[-150,150])i.box([202,28,2],[0,14,l],s);const r=i.box([202,.5,302],[0,32,0],e);r.castShadow=!1;const o=new Gt({color:"#fffce7",emissive:"#fffce7",emissiveIntensity:3});for(let l=-135;l<=145;l+=28){for(const h of[28,30.5])i.box([196,.25,.25],[0,h,l],e).castShadow=!1;for(let h=-96;h<96;h+=12){const d=i.box([13.1,.15,.15],[h+6,29.25,l],e);d.rotation.z=(Math.floor(h/12)%2?1:-1)*.2,d.castShadow=!1}for(const h of[-60,-20,20,60])i.box([5,.12,1.4],[h,27.8,l],o).castShadow=!1}const a=Ei("MOTORAMA","PANORAMA INDOOR  /  FREESTYLE");for(const l of[-1,1]){const h=i.add(new ae(44,11),a,[l*98.8,19,-8]);h.rotation.y=l>0?-Math.PI/2:Math.PI/2}const c=i.add(new ae(42,10.5),Ei("PANORAMA","MOTO CLUB  •  04"),[0,19,147.8]);c.rotation.y=Math.PI,i.add(new ae(22,7),Ei("01 / INDOOR","TERRA. MOTOR. REPETE.","#232b35"),[0,18,-148]);for(const l of[-130,96])for(const h of[-68,68])i.box([1.5,1,5],[h,.5,l],t.purple)}function r_(i,t){const e=new Gt({color:"#8c9992",metalness:.65,roughness:.6}),n=new Gt({color:"#303a38",metalness:.5,roughness:.65}),s=new de;s.position.set(t.x,0,t.z),s.rotation.y=t.heading,i.static.add(s);const r=(c,l,h)=>i.add(new gn(...c),h,l,s),o=(c,l,h,d)=>{const f=[],u=[],p=[],x=Math.ceil((l-c)/.16),m=9;for(let v=0;v<=x;v++)for(let _=0;_<m;_++){const M=c+(l-c)*v/x,E=(_/(m-1)-.5)*h;if(f.push(E,is(t,M)+.015,M),u.push(E*.5,M*.5),v<x&&_<m-1){const A=v*m+_;p.push(A,A+m,A+1,A+1,A+m,A+m+1)}}const g=new ie;g.setAttribute("position",new Lt(f,3)),g.setAttribute("uv",new Lt(u,2)),g.setIndex(p),g.computeVertexNormals(),i.add(g,d,[0,0,0],s)};if(o(0,t.takeoff.length,t.width,e),t.type!=="foam"){o(t.landing.crest,t.landing.end,t.landing.width,e);for(const c of[-t.landing.width/2,t.landing.width/2]){const l=new js;l.moveTo(t.landing.crest,0);for(let d=t.landing.crest;d<t.landing.end;d+=.15)l.lineTo(d,is(t,d));l.lineTo(t.landing.end,0),l.closePath();const h=i.add(new Qo(l),i.materials.purple,[c,0,0],s);h.rotation.y=-Math.PI/2,h.material=new Gt({color:"#6A659E",side:Re,roughness:.8})}}for(const c of[-t.width/2,t.width/2]){for(let l=1;l<=t.takeoff.length;l+=1){const h=is(t,l),d=is(t,l-1);r([.1,h,.1],[c,h/2,l],n);const f=r([.12,.12,Math.hypot(1,h-d)],[c,(h+d)/2,l-.5],e);f.rotation.x=-Math.atan2(h-d,1)}for(let l=3;l<t.takeoff.length;l+=3){const h=is(t,l),d=r([.1,.1,Math.hypot(3,h)],[c,h/2,l-1.5],n);d.rotation.x=-Math.atan2(h,3)}r([.15,.12,t.takeoff.length],[c,.06,t.takeoff.length/2],n)}for(let c=1;c<t.takeoff.length;c+=.65){const l=r([t.width,.025,.07],[0,is(t,c)+.035,c],n);l.rotation.x=-Math.atan2(t.takeoff.height*t.takeoff.power/t.takeoff.length*(c/t.takeoff.length)**(t.takeoff.power-1),1)}const a=i.add(new ae(3.6,1),Ei("MOTORAMA",t.type==="foam"?"FOAM SESSION":"TAKE OFF","#252d2d"),[t.width/2+.015,1.4,11],s);a.rotation.y=Math.PI/2}function o_(i,t,e){const n=St.trailer,s=i.materials,r=n.z-n.depth/2,o=n.z+n.depth/2,a=n_(),c=.14,l=n.height-c;i.box([n.width,l-n.floor,n.depth],[n.x,(l+n.floor)/2,n.z],s.black),i.box([n.width+.08,c,n.depth+.06],[n.x,n.height-c/2,n.z],s.pale),i.box([n.width,.3,n.depth],[n.x,n.floor-.15,n.z],s.metal);for(const f of[-1,1]){const u=n.x+f*(n.width/2+.012),p=i.add(new ae(n.depth-.15,n.height-n.floor-.12),a,[u,(n.height+n.floor)/2,n.z]);p.rotation.y=f*Math.PI/2;for(const x of[o-5,o-3]){const m=i.add(new Le(.67,.67,.32,18),e,[u,.68,x]);m.rotation.z=Math.PI/2;const g=i.add(new Le(.3,.3,.35,12),s.metal,[u,.68,x]);g.rotation.z=Math.PI/2}i.box([.06,l-n.floor,.08],[u,(l+n.floor)/2,r],s.pale)}i.add(new ae(n.width-.08,n.height-n.floor-.12),Ei("04","MOTORAMA TEAM","#6A659E"),[0,(n.height+n.floor)/2,o+.012]);for(const f of[-.7,.7])i.box([.045,2.8,.045],[f,2.9,o+.04],s.metal);const h=n.cabZ;i.box([3.1,2.9,4.6],[0,2.35,h],s.purple),i.box([3,1.4,1.6],[0,1.7,h-2.4],s.purple),i.box([3.15,.18,4.65],[0,3.96,h],s.pale),i.box([2.8,1.1,.1],[0,3.15,h-2.34],t);for(const f of[-1,1]){i.box([.08,1.15,1.8],[f*1.56,3.15,h-.7],t),i.box([.28,.8,.2],[f*1.8,3.2,h-2.1],s.black);for(const u of[h-1.9,h+1.5]){const p=i.add(new Le(.7,.7,.32,18),e,[f*1.48,.7,u]);p.rotation.z=Math.PI/2}i.box([.4,.15,2],[f*1.6,.8,h],s.metal)}i.box([3.2,.35,.3],[0,.95,h-3.28],s.metal),i.box([1.4,.85,.05],[0,1.65,h-3.23],s.black);for(const f of[-1.13,1.13])i.box([.55,.35,.06],[f,1.65,h-3.25],s.pale);const d=i.add(new ae(2.8,.65),Ei("MOTORAMA","04 / VITOR","#6A659E"),[0,2.5,h-2.36]);d.rotation.y=Math.PI}function a_(i){const t=St.foamPit,e=i.materials;i.box([t.width,.18,t.depth],[t.x,.09,t.z],e.purple);for(const n of[-1,1]){const s=t.x+n*(t.width+t.wall)/2,r=t.z+n*(t.depth+t.wall)/2;i.box([t.wall,t.wallHeight,t.depth+2*t.wall],[s,t.wallHeight/2,t.z],e.purple),i.box([t.width,t.wallHeight,t.wall],[t.x,t.wallHeight/2,r],e.purple),i.box([t.wall+.1,.16,t.depth+2*t.wall],[s,t.wallHeight+.08,t.z],e.black),i.box([t.width,.16,t.wall+.1],[t.x,t.wallHeight+.08,r],e.black);const o=i.add(new ae(10,1.2),Ei("PANORAMA","FOAM SESSION / 04","#6A659E"),[s+n*(t.wall/2+.01),t.wallHeight*.52,t.z]);o.rotation.y=n*Math.PI/2}i.sign(tn[1],83,0,"FOAM SESSION","MOTORAMA  /  ATERRISSE NA ESPUMA",12)}function c_(i){const t=i.materials,e=new Gt({color:"#c79b70",roughness:1}),n=new Gt({color:"#626362",roughness:1}),s=new Gt({color:"#ddd2b8",roughness:1}),r=new Gt({color:"#c66c42",roughness:.85}),o=new Gt({color:"#60868a",metalness:.4,roughness:.23}),a=new Gt({color:"#252824",roughness:.95});i.scene.background=new Wt("#d5c3a5"),i.scene.fog=new ps("#d5c3a5",160,520),i.ambient.color.set("#ffe4ba"),i.ambient.groundColor.set("#98704b"),i.ambient.intensity=1.4,i.sun.color.set("#fff0c6"),i.sun.intensity=3.2,i.box([1200,.1,1200],[0,-.12,0],e).castShadow=!1,i.box([190,.06,225],[0,-.035,0],n).castShadow=!1;for(const f of[-83,-68,-53,20])for(let u=-86;u<78;u+=9)i.box([7,.015,.12],[f,.009,u],s).castShadow=!1;for(const f of[-92,92])i.box([.5,.22,220],[f,.11,0],s);for(let f=-75;f<-25;f+=8)for(const u of[-7,7])i.add(new qr(.22,.65,6),r,[u,.325,f]),i.box([.45,.06,.45],[u,.03,f],a);i.box([61,12,72],[59,6,16],s),i.box([63,.5,74],[59,12.2,16],r),i.box([53,5,.14],[59,3,-20.1],o);for(let f=34;f<87;f+=4)i.box([.16,5.2,.22],[f,3,-20.3],t.pale);i.box([64,.28,6],[59,6.2,-22],r);for(const f of[29,89])i.box([.35,6.2,.35],[f,3.1,-24],t.pale);const c=i.add(new ae(39,7),Ei("DESERT MARKET","FRESH FOOD  •  OPEN 24H","#eee1c6","#a34c32"),[59,9,-20.2]);c.rotation.y=Math.PI;for(const f of[40,67,80])i.box([5,1.5,5],[f,13.2,20],t.metal);i.box([.55,19,.55],[29,9.5,-76],t.metal);const l=i.add(new ae(14,7),Ei("MARKET","OPEN 24H","#6A659E"),[29,16,-76]);l.rotation.y=Math.PI;const h=["#718888","#b2b196","#b76349","#c7b9a2"];for(let f=0;f<12;f++){const u=f%2?-68:-83,p=-78+Math.floor(f/2)*27,x=new Gt({color:h[f%4],roughness:.5});i.box([2.1,.9,4.5],[u,.9,p],x),i.box([1.8,.85,2.4],[u,1.6,p-.15],o);for(const m of[-1,1])for(const g of[-1.3,1.3]){const v=i.add(new Le(.42,.42,.24,12),a,[u+m*1.05,.47,p+g]);v.rotation.z=Math.PI/2}}for(const f of tn)r_(i,f);o_(i,o,a),a_(i);for(let f=0;f<14;f++){const u=-180+f*28,p=f%2?141:-152,x=5+f%4*2;i.box([17,x,18],[u,x/2,p],f%2?s:r),i.box([18,.35,19],[u,x,p],s);for(const m of[-4,4])i.box([3,2,.08],[u+m,2.8,p-9.05],o)}for(let f=0;f<10;f++){const u=f/10*Math.PI*2,p=22+f%3*13,x=i.add(new Le(15,46,p,6),f%2?r:e,[Math.sin(u)*310,p/2-3,Math.cos(u)*310]);x.castShadow=!1}const d=new Gt({color:"#698060",roughness:1});for(let f=0;f<18;f++){const u=(f%2?1:-1)*(105+f%4*12),p=-110+f*14,x=2.5+f%3;i.add(new Le(.3,.4,x,7),d,[u,x/2,p]);for(const m of[-1,1])i.box([1.6,.35,.35],[u+m*.7,x*.55,p],d),i.box([.35,1.25,.35],[u+m*1.4,x*.55+.5,p],d)}for(const f of[-96,96])for(const u of[-90,-30,30,90])i.box([.22,9,.22],[f,4.5,u],t.metal),i.box([3,.25,.7],[f,9,u],s)}function Hu(i,t){t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.children.forEach((e,n)=>Hu(e,t.children[n]))}class l_{constructor(t,e){this.model=e,this.root=new de,this.root.name="queda-arcade",this.root.visible=!1,t.add(this.root),this.time=0,this.active=!1,this.focus=new R,this.origin=new R;const n=[e.wheels[0],...e.frame.children.filter(s=>s!==e.rider&&s!==e.steering&&(s.isMesh||s.isGroup)),...e.steering.children.filter(s=>s.isMesh||s.isGroup),e.rider];this.parts=n.map(s=>{const r=new de,o=s.clone(!0);return r.add(o),this.root.add(r),{source:s,body:r,visual:o,velocity:new R,spin:new R,rider:s===e.rider,wheel:e.wheels.includes(s),bounces:0}}),this.rider=this.parts.find(s=>s.rider),this.limbs=e.limbs.map(s=>Object.fromEntries(Object.entries(s).map(([r,o])=>[r,r==="side"?o:this.rider.visual.children[e.rider.children.indexOf(o)]]))),this.puffs=new qn(new Hi(1,1),new Gt({color:Ze.dust,transparent:!0,opacity:.28,depthWrite:!1,roughness:1}),28),this.sparks=new qn(new Hi(1,0),new di({color:"#ffe8a0",transparent:!0,depthWrite:!1}),24),this.puffs.frustumCulled=this.sparks.frustumCulled=!1,this.root.add(this.puffs,this.sparks),this.flash=new le(new Hi(1,1),new di({color:"#ffd578",transparent:!0,depthWrite:!1})),this.root.add(this.flash),this.light=new cm("#ffba5c",0,9,2),this.root.add(this.light),this.dummy=new Ee,this.spinRotation=new Ti,this.point=new R}start(t){this.active=!0,this.root.visible=!0,this.time=0,this.origin.set(t.x,t.y,t.z),this.heading=t.heading,this.serial=t.crashSerial;let e=291;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);this.model.root.updateMatrixWorld(!0);const s=new R(Math.cos(t.heading),0,-Math.sin(t.heading)),r=new R(Math.sin(t.heading),0,Math.cos(t.heading));for(const o of this.parts){Hu(o.source,o.visual);const a=new Dn().setFromObject(o.source),c=a.getCenter(new R),l=a.getSize(new R);o.body.position.copy(c),o.body.quaternion.identity(),o.source.getWorldPosition(o.visual.position),o.visual.position.sub(c),o.source.getWorldQuaternion(o.visual.quaternion),o.source.getWorldScale(o.visual.scale),o.bounces=0,o.radius=o.wheel?X.bike.wheelRadius:qt(l.length()*.22,.045,.24);const h=n()*Math.PI*2,d=X.crash.scatter*(.45+n()*.7);o.velocity.set(t.vx*X.crash.momentum+Math.cos(h)*d,X.crash.lift*(.6+n()*.6),t.vz*X.crash.momentum+Math.sin(h)*d),o.spin.set((n()-.5)*13,(n()-.5)*10,(n()-.5)*12),o.wheel&&(o.spin.x+=6),o.rider&&(o.velocity.set(t.vx*X.crash.riderMomentum,X.crash.riderLift,t.vz*X.crash.riderMomentum).addScaledVector(s,2.8).addScaledVector(r,2),o.spin.copy(s).multiplyScalar(-4.6).addScaledVector(r,3.3),this.initialHands=this.limbs.map(f=>f.glove.position.clone()),this.initialFeet=this.limbs.map(f=>f.boot.position.clone()))}this.particles=Array.from({length:28},()=>{const o=n()*Math.PI*2;return{x:Math.cos(o),z:Math.sin(o),speed:1.5+n()*4,rise:.4+n()*2.5,size:.25+n()*.48}}),this.flash.position.copy(this.origin),this.light.position.copy(this.origin),this.focus.copy(this.origin),this.model.root.visible=!1,this.animateParticles(0)}reset(){this.active=!1,this.root.visible=!1,this.light.intensity=0,this.model.root.visible=!0}loosenRider(t){const e=1-Math.exp(-t*14),n=this.rider.visual,s=n.children[this.model.rider.children.indexOf(this.model.hip)].position,r=n.children[this.model.rider.children.indexOf(this.model.upperBody)].position;for(let o=0;o<this.limbs.length;o++){const a=this.limbs[o],c=a.side,l=Math.sin(t*8+c)*.08,h=this.initialHands[o].clone().lerp(new R(c*(.62+l),r.y+.28+l,.13),e),d=this.initialFeet[o].clone().lerp(new R(c*.36,s.y-.61,.02+c*.18+l),e),f=[s.x+c*.32,s.y-.34,.24+c*.09],u=[r.x+c*.38,r.y+.06,.1];a.glove.position.copy(h),a.boot.position.copy(d),a.boot.rotation.x=e*(.3+l),a.knee.position.set(...f),this.model.segment(a.thigh,[s.x+c*.16,s.y,s.z],f),this.model.segment(a.shin,f,d.toArray()),this.model.segment(a.upper,[r.x+c*.2,r.y+.16,r.z+.09],u),this.model.segment(a.fore,u,h.toArray())}}integrate(t){for(const e of this.parts){e.velocity.y-=X.gravity*t,e.body.position.addScaledVector(e.velocity,t);const n=e.spin.length();n>.001&&(this.spinRotation.setFromAxisAngle(this.point.copy(e.spin).normalize(),n*t),e.body.quaternion.premultiply(this.spinRotation));let s=te(e.body.position.x,e.body.position.z)+e.radius-e.body.position.y,r=e.body.position;if(e.rider){e.body.updateMatrixWorld(!0),s=-1/0;const o=[[this.model.helmet,.235],[this.model.hip,.19],[this.model.upperBody,.23]].map(([a,c])=>[e.visual.children[this.model.rider.children.indexOf(a)],c]);for(const a of this.limbs)o.push([a.glove,.075],[a.boot,.14],[a.knee,.1]);for(const[a,c]of o){const l=a.getWorldPosition(new R),h=te(l.x,l.z)+c-l.y;h>s&&(s=h,r=l)}}if(s>0){e.body.position.y+=s;const o=$o(r.x,r.z),a=new R(o.x,o.y,o.z),c=e.velocity.dot(a);c<0&&(e.velocity.addScaledVector(a,-c*(1+(e.rider?.12:X.crash.bounce))),c<-.6&&e.bounces++),e.rider&&e.spin.addScaledVector(this.point.copy(r).sub(e.body.position).cross(a),X.gravity*t*2.5),e.velocity.multiplyScalar(Math.exp(-(e.rider?3.8:2.8)*t)),e.spin.multiplyScalar(Math.exp(-(e.rider?3:4)*t))}}}animateParticles(t){const e=Math.max(0,1-t/.18);this.flash.visible=e>0,this.flash.scale.setScalar(.4+(1-e)*1.35),this.flash.material.opacity=e*.8,this.light.intensity=e*15,this.puffs.material.opacity=.28*qt(1-t/1.65,0,1),this.sparks.material.opacity=qt(1-t/.65,0,1),this.particles.forEach((n,s)=>{this.dummy.position.copy(this.origin).add(new R(n.x*n.speed*t,.25+n.rise*t*.5,n.z*n.speed*t)),this.dummy.position.y=Math.max(this.dummy.position.y,te(this.dummy.position.x,this.dummy.position.z)+.25),this.dummy.scale.setScalar(n.size*(.35+t*1.5)),this.dummy.rotation.set(s,t*.5,s*.3),this.dummy.updateMatrix(),this.puffs.setMatrixAt(s,this.dummy.matrix),s<24&&(this.dummy.position.copy(this.origin).add(new R(n.x*n.speed*t*2,n.rise*t*2-X.gravity*t*t*.5,n.z*n.speed*t*2)),this.dummy.scale.set(.024,.06,.024),this.dummy.updateMatrix(),this.sparks.setMatrixAt(s,this.dummy.matrix))}),this.puffs.instanceMatrix.needsUpdate=this.sparks.instanceMatrix.needsUpdate=!0}update(t){if(!t.crashed){this.active&&this.reset();return}for((!this.active||this.serial!==t.crashSerial)&&this.start(t);this.time+X.step<=t.crashTime+1e-8;)this.time+=X.step,this.loosenRider(this.time),this.integrate(X.step);this.animateParticles(this.time),this.focus.copy(this.origin).lerp(this.rider.body.position,.6)}}const ea=[{id:"kawasaki",name:"Kawasaki",model:"KX",color:"#58c92e",light:"#75e238",ink:"#17251d",fender:1,shroud:1},{id:"yamaha",name:"Yamaha",model:"YZ",color:"#2754d7",light:"#4776f5",ink:"#172353",fender:1.06,shroud:.95},{id:"honda",name:"Honda",model:"CR",color:"#e33332",light:"#f14d3c",ink:"#5a1721",fender:.96,shroud:1.08},{id:"ktm",name:"KTM",model:"SX",color:"#f77b20",light:"#ff9c39",ink:"#24282c",fender:.92,shroud:1.12},{id:"suzuki",name:"Suzuki",model:"RM",color:"#f2cd25",light:"#ffe054",ink:"#213653",fender:1.04,shroud:.91}],Qn=(i,t,e,n,s,r,o,a,c,l,h="#eeeeea")=>({id:i,brand:t,name:e,tag:n,base:s,accent:r,trim:o,pants:a,helmet:c,peak:l,boots:h}),Dr=[Qn("kawa-factory","kawasaki","Green 99","TOM DA MOTO","#193e30","#f2f1df","#66cf3b","#174532","#57c933","#f3f0dc"),Qn("kawa-flare","kawasaki","Orange Riot","ARQUIVO 2000","#f16d28","#f2eee6","#242b35","#e46727","#f3eee2","#f78230"),Qn("yama-factory","yamaha","Blue Works","TOM DA MOTO","#264cb4","#efeee5","#91b5ec","#243763","#2356ce","#eff0e8"),Qn("yama-voltage","yamaha","Blue Voltage","ARQUIVO 2000","#343d9b","#fa692c","#b1b4f0","#30347f","#f5ad27","#414bbe"),Qn("honda-factory","honda","Red Line","TOM DA MOTO","#d83737","#f6eee4","#292f3b","#b82731","#dd3434","#f4eade"),Qn("honda-ice","honda","Ice Rider","ARQUIVO 2000","#202d38","#58bcdc","#e8edf0","#27353c","#dbe6e7","#62bad6"),Qn("ktm-factory","ktm","Orange Works","TOM DA MOTO","#e86f24","#222b33","#eee8da","#262c32","#f27d24","#252d37"),Qn("ktm-cobalt","ktm","Cobalt Heat","ARQUIVO 2000","#244896","#f17525","#e8eee7","#26458b","#e98530","#3654ad"),Qn("suzuki-factory","suzuki","Yellow Works","TOM DA MOTO","#efca2c","#253248","#eeeadd","#263445","#f0cf2b","#f5eab3"),Qn("suzuki-flame","suzuki","Red Flame","ARQUIVO 2000","#ac2535","#efce30","#202632","#b82b34","#eacf32","#e34e31")],zc=Object.freeze({bike:"kawasaki",outfit:"kawa-factory"});function Ur(i={}){return{bike:ea.some(t=>t.id===(i==null?void 0:i.bike))?i.bike:zc.bike,outfit:Dr.some(t=>t.id===(i==null?void 0:i.outfit))?i.outfit:zc.outfit}}function Gu(i){const t=Ur(i);return{...t,bikeSpec:ea.find(e=>e.id===t.bike),kit:Dr.find(e=>e.id===t.outfit)}}class h_{constructor(t){this.storage=t;let e;try{e=JSON.parse(t==null?void 0:t.getItem("motorama.garage.v1"))}catch{}this.selection=Ur(e)}save(t){var e;this.selection=Ur(t);try{(e=this.storage)==null||e.setItem("motorama.garage.v1",JSON.stringify(this.selection))}catch{}return this.selection}}const u_=["CAIO","NINA","RAFA","LEO","BIA","DAVI","LUNA","TOM","JADE","NOAH","LIA","THEO","MAYA","ENZO","IRIS","GUS","YURI","LUCA","SOL"];function Wu(i=zc){const t=Ur(i),e=Dr.find(s=>s.id===t.outfit);return[e,...Dr.filter(s=>s!==e)].flatMap((s,r)=>Array.from({length:2},(o,a)=>{const c=r*2+a,l=r===0?{...t}:{bike:s.brand,outfit:s.id};return{id:c,team:s.id,teamName:s.name,name:c?u_[c-1]:"VITOR",number:c?String(10+c).padStart(2,"0"):"04",appearance:l,color:ea.find(h=>h.id===l.bike).color}}))}const Oe=(i,t=.65,e=0)=>new Gt({color:i,roughness:t,metalness:e});function d_(i){const{bikeSpec:t,kit:e}=i;return{green:Oe(t.color,.4),bright:Oe(t.light,.35),black:Oe("#141919"),rubber:Oe("#1c2422",.98),metal:Oe("#b4c1bc",.33,.72),darkMetal:Oe("#535f5e",.48,.6),white:Oe("#efeee4"),purple:Oe("#6A659E"),visor:Oe("#3b6376",.2,.15),shirt:Oe(e.base,.95),armor:Oe("#263735",.8),armorEdge:Oe("#86948e",.75),jersey:Oe(e.accent),trim:Oe(e.trim),pants:Oe(e.pants),boot:Oe(e.boots),helmet:Oe(e.helmet,.38),peak:Oe(e.peak,.36),bikeInk:Oe(t.ink)}}function _e(i,t,e,n=[0,0,0]){const s=new le(i,t);return s.position.set(...n),s.castShadow=!0,s.receiveShadow=!0,e.add(s),s}function zn(i,t,e,n){return _e(new gn(...t),n,i,e)}function Ns(i,t,e,n){const s=_e(new Yr(1,16,12),n,i,e);return s.scale.set(...t),s}function Ne(i,t,e,n,s,r=n){const o=new R(...t),a=new R(...e),c=_e(new Le(r,n,o.distanceTo(a),10),s,i);return c.position.copy(o).add(a).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new R(0,1,0),a.sub(o).normalize()),c}function ei(i,t,e,n){const s=new js;t.forEach(([o,a],c)=>c?s.lineTo(o,a):s.moveTo(o,a));const r=new jo(s,{depth:e,bevelEnabled:!0,bevelSize:.025,bevelThickness:.02,bevelSegments:1,steps:1});return r.rotateY(-Math.PI/2),r.translate(e/2,0,0),_e(r,n,i)}function Bc(i,t="#e3e6d9",e="#1b2820"){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,256,256),s.fillStyle=e,s.font="italic 900 156px Arial",s.textAlign="center",s.fillText(i,128,181);const r=new xn(n);return r.colorSpace=be,new Gt({map:r,roughness:.6})}function Gn(i,t,e,n,s=[0,0,0],r=.012){const o=new js;t.forEach(([c,l],h)=>h?o.lineTo(c,l):o.moveTo(c,l)),o.closePath();const a=new jo(o,{depth:e,bevelEnabled:r>0,bevelSize:r,bevelThickness:r,bevelSegments:2,steps:1});return a.translate(0,0,-e/2),_e(a,n,i,s)}function f_(i){const t=document.createElement("canvas");t.width=512,t.height=640;const e=t.getContext("2d");e.fillStyle="#fff",e.textAlign="center",e.font="900 82px Arial",e.fillText(i.name,256,112),e.font="italic 900 330px Arial",e.fillText(i.number,246,465);const n=new xn(t);return n.colorSpace=be,n.anisotropy=4,new Gt({map:n,transparent:!0,alphaTest:.1,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1})}function p_(i,t){const e=[],n=[];for(let c=0;c<25;c++)for(let l=0;l<49;l++){const h=.03+c/24*2.24,d=-Math.PI+l/48*Or;if(e.push(.224*Math.sin(h)*Math.sin(d),.246*Math.cos(h)+.012,.252*Math.sin(h)*Math.cos(d)-.018),c<24&&l<48){const f=.03+(c+.5)/24*2.24,u=-Math.PI+(l+.5)/48*Or;if(Math.abs(u)<.94&&.246*Math.cos(f)+.012<.105)continue;const p=c*49+l;n.push(p,p+49,p+1,p+1,p+49,p+49+1)}}const o=new ie;o.setAttribute("position",new Lt(e,3)),o.setIndex(n),o.computeVertexNormals();const a=_e(o,t.helmet,i);return a.material=t.helmet.clone(),a.material.side=Re,a}function m_(i,t){const e=[[-.035,.183,.143],[.12,.221,.19],[.3,.209,.208],[.46,.157,.172]],n=[],s=[];for(const a of[1,-1])for(const[c,l,h]of e)for(let d=0;d<7;d++){const f=d/3-1;n.push(f*l,h+.025*(1-f*f)+(a<0?-.018:0),c)}for(let a=0;a<2;a++)for(let c=0;c<3;c++)for(let l=0;l<6;l++){const h=a*28+c*7+l,d=[h,h+7,h+1,h+1,h+7,h+8];a===1&&d.reverse(),s.push(...d)}const r=new ie;r.setAttribute("position",new Lt(n,3)),r.setIndex(s),r.addGroup(0,108,0),r.addGroup(108,108,1),r.computeVertexNormals(),_e(r,[t.peak.clone(),t.black.clone()],i).material.forEach(a=>a.side=Re),Ne(i,[-.154,.172,.461],[.154,.172,.461],.011,t.helmet);for(const a of[-1,1])Ne(i,[a*.095,.229,.16],[a*.09,.219,.3],.012,t.black)}function g_(i,t){const e=new de;i.add(e),e.name="capacete-motocross",p_(e,t),m_(e,t),Ns(e,[.16,.115,.09],[0,-.012,.15],t.black);const n=new Zo(Array.from({length:33},(h,d)=>{const f=.95+d/32*(Or-1.9);return new R(.227*Math.sin(f),-.012,.254*Math.cos(f)-.018)}));_e(new Ks(n,40,.024,5,!1),t.black,e);const s=[[-.165,.052],[-.11,.079],[.11,.079],[.165,.052],[.153,-.034],[.063,-.06],[0,-.044],[-.063,-.06],[-.153,-.034]];Gn(e,s,.024,t.black,[0,.012,.235],.012),Gn(e,s,.012,t.white,[0,.012,.256],.005).scale.set(.92,.9,1),Gn(e,s,.008,t.visor,[0,.013,.267],.004).scale.set(.82,.72,1);for(const h of[-1,1]){const d=ei(e,[[.01,-.055],[.12,-.065],[.3,-.106],[.388,-.14],[.342,-.217],[.09,-.188],[-.045,-.125]],.044,t.helmet);d.position.x=h*.147;const f=ei(e,[[.08,-.082],[.2,-.11],[.3,-.14],[.27,-.176],[.1,-.145]],.008,t.black);f.position.x=h*.178;const u=ei(e,[[.02,-.1],[.1,-.153],[.28,-.192],[.3,-.202],[.09,-.169]],.009,t.white);u.position.x=h*.182,Ne(e,[h*.204,.113,.078],[h*.212,.085,.153],.019,t.darkMetal);const p=[],x=[];for(let g=0;g<=24;g++)for(const v of[-1,1]){const _=h*.084+v*.013,M=.12-g/24*.34,E=.012+.246*Math.sqrt(Math.max(0,1-(_/.224)**2-((M+.018)/.252)**2));if(p.push(_,E+.003,M),v===1&&g<24){const A=g*2;x.push(A,A+1,A+2,A+1,A+3,A+2)}}const m=new ie;m.setAttribute("position",new Lt(p,3)),m.setIndex(x),m.computeVertexNormals(),_e(m,t.black,e)}const a=Gn(e,[[-.142,.038],[0,.071],[.142,.038],[.125,-.043],[0,-.064],[-.125,-.043]],.047,t.peak,[0,-.166,.345]);a.rotation.x=-.16;const c=Gn(a,[[-.086,.015],[0,.038],[.086,.015],[.071,-.025],[-.071,-.025]],.006,t.black,[0,0,.036],.004);for(const h of[-.045,0,.045])zn(c,[.009,.043,.009],[h,.005,.009],t.darkMetal);const l=_e(new $s(.128,.028,8,24),t.black,e,[0,-.169,-.044]);return l.rotation.x=Math.PI/2,l.scale.y=1.2,e}function x_(i,t,e){const n=new de;i.add(n);const s=Gn(n,[[-.14,-.275],[-.19,-.16],[-.235,.13],[-.17,.265],[.17,.265],[.235,.13],[.19,-.16],[.14,-.275]],.26,t.shirt,[0,0,0],.028);s.name="camiseta-"+e.name.toLowerCase()+"-"+e.number;const r=_e(new ae(.37,.46),f_(e),n,[0,.015,-.162]);r.rotation.y=Math.PI,r.name=e.name+"-"+e.number;for(const h of[-1,1]){Gn(n,[[h*.15,-.23],[h*.21,-.12],[h*.218,.13],[h*.166,.21]],.28,t.jersey,[0,0,0],.009),Ne(n,[h*.15,.2,-.145],[h*.15,.205,.147],.043,t.armor),Ne(n,[h*.188,-.15,-.12],[h*.202,-.15,.13],.031,t.black);const d=Ns(n,[.084,.046,.11],[h*.185,.203,.025],t.armor);d.rotation.z=h*.22}const o=new de;n.add(o),o.name="colete-peitoral";const a=[[-.165,.19],[-.08,.22],[0,.17],[.08,.22],[.165,.19],[.203,.095],[.155,-.165],[0,-.23],[-.155,-.165],[-.203,.095]];Gn(o,a,.035,t.armorEdge,[0,0,.165],.014),Gn(o,a,.033,t.armor,[0,0,.189],.008).scale.set(.92,.91,1);for(const h of[-1,1])Ne(o,[h*.025,.115,.213],[h*.13,.074,.213],.012,t.darkMetal),Ne(o,[h*.025,.055,.213],[h*.122,.021,.213],.009,t.darkMetal),Ne(o,[h*.02,-.018,.213],[h*.1,-.045,.213],.008,t.darkMetal);_e(new ae(.1,.1),Bc(e.number,"#34453e","#e8f1df"),o,[0,-.118,.217]);const l=_e(new $s(.079,.026,8,20),t.black,n,[0,.274,.014]);return l.rotation.x=Math.PI/2,{group:n,body:s,vest:o}}class $r{constructor(t,e={},n=bd,{crash:s=!0}={}){this.appearance=Gu(e),this.identity={...n};const r=d_(this.appearance);this.materials=r,this.root=new de,t.add(this.root),this.pose=new de,this.root.add(this.pose),this.frame=new de,this.pose.add(this.frame);const o=this.frame;this.steering=new de,o.add(this.steering),this.steeringAxis=new R(0,.84,-.36).normalize(),this.steeringPivot=new R(0,.49,.55),this.grips=new Map,this.wheels=[];for(const m of[-.91,.91]){const g=new de;g.position.set(0,-.35,m),(m>0?this.steering:this.pose).add(g),this.wheels.push(g);const v=_e(new $s(.305,.086,10,28),r.rubber,g);v.rotation.y=Math.PI/2;const _=_e(new $s(.266,.018,8,28),r.metal,g);_.rotation.y=Math.PI/2,Ne(g,[-.12,0,0],[.12,0,0],.055,r.darkMetal);for(let E=0;E<20;E++){const A=E/20*Math.PI*2;Ne(g,[E%2?.035:-.035,0,0],[0,Math.cos(A)*.26,Math.sin(A)*.26],.006,r.metal)}for(let E=0;E<28;E++)for(const A of[-.065,.065]){const P=E/28*Math.PI*2+(A>0?.06:0),C=zn(g,[.075,.044,.065],[A,Math.cos(P)*.38,Math.sin(P)*.38],r.rubber);C.rotation.x=P}const M=_e(new Le(.13,.13,.014,18),r.metal,g,[.085,0,0]);M.rotation.z=Math.PI/2}this.swingarms=[];for(const m of[-.13,.13]){Ne(o,[m,-.21,-.15],[m,.32,.45],.037,r.metal),Ne(o,[m,.32,.45],[m,.31,-.46],.035,r.metal),Ne(o,[m,.31,-.46],[m,-.21,-.15],.032,r.metal);const g=_e(new Le(.046,.046,1,10),r.darkMetal,o);this.segment(g,[m,-.2,-.18],[m,-.35,-.91]),this.swingarms.push({mesh:g,x:m})}this.forks=[];for(const m of[-.135,.135]){const g=new de;this.steering.add(g),this.forks.push(g),Ne(g,[m,.49,.55],[m,-.35,.91],.029,r.metal),Ne(g,[m,.48,.55],[m,.08,.73],.044,r.darkMetal)}this.rearShock=new de,o.add(this.rearShock),_e(new Le(.035,.035,1,10),r.metal,this.rearShock);const a=new $n;a.getPoint=m=>new R(Math.cos(m*Or*7)*.073,m-.5,Math.sin(m*Or*7)*.073),_e(new Ks(a,84,.012,6,!1),r.bright,this.rearShock),this.segment(this.rearShock,[0,-.263,-.4866],[0,.26,-.43]),Ns(o,[.23,.22,.25],[0,-.09,.02],r.darkMetal);for(let m=0;m<5;m++)zn(o,[.43,.018,.25],[0,.025+m*.034,.05],r.metal);const c=_e(new Le(.125,.125,.45,16),r.metal,o,[0,-.13,.02]);c.rotation.z=Math.PI/2;const l=new Zo([[.16,.09,.28],[.28,.02,.42],[.3,-.22,.22],[.3,-.2,-.2],[.28,.17,-.65]].map(m=>new R(...m)));_e(new Ks(l,24,.045,8,!1),r.darkMetal,o),Ne(o,[.28,.17,-.65],[.28,.24,-.96],.075,r.metal),this.exhaustOutlet=new Ee,this.exhaustOutlet.name="saida-do-escape",this.exhaustOutlet.position.set(.28,.258,-1.035),o.add(this.exhaustOutlet),ei(o,[[-1.03,.48],[-.61,.44],[-.26,.39],[-.3,.28],[-.82,.44]],.3,r.green);const h=ei(o,[[.04,.41],[.44,.4],[.49,.21],[.22,.04],[.02,.12]],.4,r.green);h.scale.z=this.appearance.bikeSpec.shroud,h.name="carenagem-"+this.appearance.bike,ei(o,[[-.57,.31],[-.12,.34],[.03,.15],[-.38,.11]],.41,r.white);const d=ei(this.steering,[[.43,.28],[.66,.32],[1.21,.29],[1.32,.2],[.98,.23],[.49,.23]],.28,r.bright);d.scale.z=this.appearance.bikeSpec.fender,d.name="paralama-"+this.appearance.bike;const f=zn(o,[.285,.105,.79],[0,.412,-.32],r.black);f.rotation.x=-.035;const u=zn(this.steering,[.3,.31,.045],[0,.51,.67],r.white);u.rotation.x=-.27;const p=_e(new ae(.25,.25),Bc(n.number),this.steering,[0,.51,.7]);p.rotation.x=-.27;for(const m of[-.242,.242]){const g=_e(new ae(.36,.24),Bc(n.number),o,[m,.24,-.34]);g.rotation.y=m>0?Math.PI/2:-Math.PI/2}Ne(this.steering,[0,.49,.49],[0,.72,.47],.027,r.metal),Ne(this.steering,[-.42,.7,.5],[.42,.7,.5],.024,r.metal);for(const m of[-.39,.39])Ne(this.steering,[m-.06,.7,.5],[m+.06,.7,.5],.035,r.black),zn(o,[.14,.035,.12],[m*.615,-.17,-.06],r.metal);for(const m of[-1,1]){const g=new Ee;g.position.set(m*.38,.7,.5),this.steering.add(g),this.grips.set(m,g)}this.steering.position.copy(this.steeringPivot);for(const m of this.steering.children)m.position.sub(this.steeringPivot);this.wheelRest=this.wheels.map(m=>m.position.clone()),this.forkRest=this.forks.map(m=>m.position.clone()),this.rider=new de,o.add(this.rider);const x=x_(this.rider,r,n);this.upperBody=x.group,this.torso=x.body,this.vest=x.vest,this.hip=Ns(this.rider,[.23,.16,.19],[0,.68,-.23],r.pants),this.helmet=g_(this.rider,r),this.limbs=[];for(const m of[-1,1]){const g={side:m};for(const v of["thigh","shin","upper","fore"])g[v]=_e(new Le(v==="thigh"?.093:.06,v==="thigh"?.09:.055,1,10),v==="thigh"?r.pants:v==="shin"?r.boot:r.jersey,this.rider);g.knee=Ns(this.rider,[.09,.1,.09],[0,0,0],r.black),g.glove=Ns(this.rider,[.065,.065,.08],[m*.38,.7,.5],r.black),g.boot=zn(this.rider,[.13,.12,.29],[m*.24,-.11,.01],r.boot),this.limbs.push(g)}this.addGraphics(r),this.crash=s?new l_(t,this):{active:!1,update(){},reset(){}}}addGraphics(t){for(const o of[-1,1]){const a=ei(this.frame,[[.05,.36],[.4,.35],[.31,.25],[.07,.16]],.008,t.white);a.position.x=o*.217;const c=ei(this.frame,[[.08,.3],[.38,.33],[.26,.23],[.13,.2]],.009,t.bikeInk);c.position.x=o*.223;const l=ei(this.frame,[[-.82,.43],[-.5,.39],[-.31,.35],[-.61,.39]],.008,t.bikeInk);l.position.x=o*.16;for(const[h,d,f]of[[.96,t.white,.24],[1.04,t.trim,.09]]){const u=[],p=[];for(let g=0;g<=24;g++)for(let v=0;v<2;v++){const _=o*(1.07+g/24*1.55),M=h+v*f+.13*Math.sin(g/24*Math.PI);if(u.push(.227*Math.sin(M)*Math.sin(_),.249*Math.cos(M)+.012,.255*Math.sin(M)*Math.cos(_)-.018),v===1&&g<24){const E=g*2;p.push(E,E+2,E+1,E+1,E+2,E+3)}}const x=new ie;x.setAttribute("position",new Lt(u,3)),x.setIndex(p),x.computeVertexNormals();const m=d.clone();m.side=Re,_e(x,m,this.helmet)}for(const h of[-.153,.141])Gn(this.upperBody,[[o*.06,.2],[o*.18,.23],[o*.223,.1],[o*.14,.13]],.008,t.trim,[0,0,h],.002),Gn(this.upperBody,[[o*.08,-.23],[o*.16,-.21],[o*.2,-.1],[o*.135,-.15]],.008,t.jersey,[0,0,h],.002)}const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#16221e",n.font="italic 900 77px Arial",n.textAlign="center",n.fillText(this.appearance.bikeSpec.name.toUpperCase(),256,93);const s=new xn(e);s.colorSpace=be;const r=new Gt({map:s,transparent:!0,alphaTest:.1,roughness:.65,depthWrite:!1});for(const o of[-1,1]){const a=_e(new ae(.34,.085),r,this.frame,[o*.235,.31,.23]);a.rotation.y=o*Math.PI/2}for(const o of this.limbs){const a=o.side;for(const[c,l]of[[o.upper,.063],[o.fore,.059],[o.thigh,.095]])for(const[h,d,f]of[[.18,.18,t.trim],[-.2,.1,t.jersey]]){const u=new Le(l+.001,l-.003,d,10,1,!0),p=u.attributes.position;for(let x=0;x<p.count;x++)p.setY(x,p.getY(x)+h+a*p.getX(x)*1.2);u.computeVertexNormals(),_e(u,f,c)}zn(o.boot,[.137,.045,.18],[0,.042,-.015],t.trim),zn(o.shin,[.09,.48,.018],[0,.02,.062],t.white),zn(o.shin,[.1,.045,.022],[0,.13,.07],t.black),zn(o.shin,[.1,.045,.022],[0,-.1,.07],t.black)}}dispose(){const t=new Set,e=new Set,n=new Set;for(const s of[this.root,this.crash.root].filter(Boolean))s.removeFromParent(),s.traverse(r=>{r.isInstancedMesh&&r.dispose(),r.geometry&&t.add(r.geometry);for(const o of[].concat(r.material||[])){e.add(o);for(const a of Object.values(o))a!=null&&a.isTexture&&n.add(a)}});t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}segment(t,e,n){const s=new R(...e),r=new R(...n);t.position.copy(s).add(r).multiplyScalar(.5),t.scale.y=s.distanceTo(r),t.quaternion.setFromUnitVectors(new R(0,1,0),r.sub(s).normalize())}update(t,e){if(t.crashed&&this.crash.active&&this.crash.serial===t.crashSerial){this.crash.update(t);return}!t.crashed&&this.crash.active&&this.crash.reset(),this.root.position.set(t.x,t.y,t.z),this.root.rotation.y=t.heading+t.trickYaw,this.pose.rotation.set(-t.pitch,-t.whip,t.roll,"YXZ"),this.steering.quaternion.setFromAxisAngle(this.steeringAxis,t.barAngle),this.wheels.forEach((x,m)=>{x.position.copy(this.wheelRest[m]),x.position.y+=t.compression[m],x.rotation.x=m===0?t.rearSpin:t.frontSpin});const n=this.wheels[0].position;for(const x of this.swingarms)this.segment(x.mesh,[x.x,-.2,-.18],[x.x,n.y,n.z]);this.segment(this.rearShock,[0,-.2+(n.y+.2)*.42,-.18+(n.z+.18)*.42],[0,.26,-.43]);const s=(t.compression[0]+t.compression[1])*.5;this.forks.forEach((x,m)=>{x.position.copy(this.forkRest[m]),x.position.y+=t.compression[1]*.35});const r=(t.airborne?.11:Math.max(0,Math.sin(t.pitch))*.15)-s*.5-t.impact*.09,o=t.manual||0,a=t.trickBlend||0,c=(x,m)=>x.map((g,v)=>g+(m[v]-g)*a);this.root.updateMatrixWorld(!0);const l=new Map(this.limbs.map(x=>[x.side,this.rider.worldToLocal(this.grips.get(x.side).getWorldPosition(new R)).toArray()])),h=qh(t.trickPose,l,t.trickPoseMix);let d=[-t.whip*.07,.72+r-o*.08,-.24-o*.27],f=[-t.whip*.11,1.16+r-o*.06,-.04-o*.16],u=[f[0]*.7,.98+r-o*.07,-.13-o*.2],p=[f[0],1.48+r-o*.06,.07-o*.16];h&&(d=c(d,h.hip),f=c(f,h.shoulder),u=c(u,h.torso),p=c(p,h.helmet)),this.hip.position.set(...d),this.hip.rotation.x=((h==null?void 0:h.angle)||0)*a,this.upperBody.position.set(...u),this.upperBody.rotation.x=(.22-o*.16)*(1-a)+((h==null?void 0:h.angle)||0)*a,this.helmet.position.set(...p),this.helmet.rotation.x=(.08-o*.1)*(1-a)+((h==null?void 0:h.angle)||0)*a;for(const x of this.limbs){const m=x.side;let g=l.get(m),v=[m*(.3+Math.abs(t.whip)*.04)-t.whip*.05,.35+r*.45-o*.05,.19-o*.12],_=[m*.24,-.1,-.04],M=[m*.39+(g[0]-m*.38)*.55,1+r*.45+(g[1]-.7)*.45-o*.06,.19+(g[2]-.5)*.6-o*.08];const E=h==null?void 0:h.limbs.find(P=>P.side===m);E&&(g=c(g,E.hand),v=c(v,E.knee),_=c(_,E.foot),M=c(M,E.elbow),t.trickPose==="heelClicker"&&(_[0]+=m*.3*Math.sin(Math.PI*a),_[1]+=.18*Math.sin(Math.PI*a))),x.glove.position.set(...g),x.glove.quaternion.copy(this.steering.quaternion);const A=((E==null?void 0:E.bootAngle)||0)*a;x.boot.rotation.set(A,0,0),x.boot.position.set(_[0],_[1]-.01-Math.sin(A)*.05,_[2]+Math.cos(A)*.05),this.segment(x.thigh,[d[0]+m*.16,d[1],d[2]],v),this.segment(x.shin,v,_),x.knee.position.set(...v),this.segment(x.upper,[f[0]+m*.2,f[1]-.06,f[2]],M),this.segment(x.fore,M,g)}this.crash.update(t)}}const Or=Math.PI*2;class Xu{constructor(t,e){this.pit=e,this.active=new Set,this.serial=0,this.peak=0;const n=new Gt({color:16777215,roughness:1});this.mesh=new qn(new gn(1,1,1),n,e.cubes),this.mesh.instanceMatrix.setUsage(uu),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.name=`${e.cubes} cubos de espuma`,t.add(this.mesh),this.dummy=new Ee,this.nodes=[];let s=40;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),o=["#8881ba","#c3b7db","#d7ddb8","#a6c274","#ded6c1"].map(h=>new Wt(h)),a=Math.floor(e.width/e.cubeSize),c=Math.floor(e.depth/e.cubeSize),l=a*c;for(let h=0;h<e.cubes;h++){const d=h%a,f=Math.floor(h/a)%c,u=Math.floor(h/l),p=e.x-e.width/2+(d+.5)*e.width/a+(r()-.5)*.18,x=e.z-e.depth/2+(f+.5)*e.depth/c+(r()-.5)*.18,m=e.surface-e.cubeSize*.45-u*e.cubeSize*.72+(r()-.5)*.22,g={x:p,y:m,z:x,hx:p,hy:m,hz:x,rx:(r()-.5)*.65,ry:r()*Math.PI,rz:(r()-.5)*.65,size:e.cubeSize*(.9+r()*.2),vx:0,vy:0,vz:0,time:0};g.hrx=g.rx,g.hry=g.ry,g.hrz=g.rz,this.nodes.push(g),this.write(h,g),this.mesh.setColorAt(h,o[Math.floor(r()*o.length)])}this.mesh.instanceMatrix.needsUpdate=!0}write(t,e){const n=this.dummy;n.position.set(e.x,e.y,e.z),n.rotation.set(e.rx,e.ry,e.rz),n.scale.setScalar(e.size),n.updateMatrix(),this.mesh.setMatrixAt(t,n.matrix)}reset(){this.active.clear(),this.serial=0,this.peak=0,this.nodes.forEach((t,e)=>{Object.assign(t,{x:t.hx,y:t.hy,z:t.hz,rx:t.hrx,ry:t.hry,rz:t.hrz,vx:0,vy:0,vz:0,time:0}),this.write(e,t)}),this.mesh.instanceMatrix.needsUpdate=!0}impact(t){for(let e=0;e<this.nodes.length;e++){const n=this.nodes[e],s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r);if(o>4.4||n.hy<this.pit.surface-1.1)continue;const a=1-o/4.4,c=1/Math.max(o,.35),l=Math.min(t.impact*.28,9);n.vx=s*c*l*a+t.vx*.2*a,n.vz=r*c*l*a+t.vz*.2*a,n.vy=(3+l)*a,n.time=0,this.active.add(e)}this.peak=Math.max(this.peak,this.active.size)}update(t,e){if(t.foam&&this.serial!==t.foamSerial&&(this.serial=t.foamSerial,this.impact(t.foam)),!e||!this.active.size)return;const n=this.pit;e=Math.min(e,.05);for(const s of this.active){const r=this.nodes[s];r.time+=e,r.vy-=11*e,r.vx*=Math.exp(-e*.9),r.vz*=Math.exp(-e*.9),r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e;const o=t.foam?Math.max(0,1-Math.hypot(r.x-t.x,r.z-t.z)/1.8):0,a=Math.max(n.bottom+r.size*.45,r.hy-o*.85);if(r.y<a&&(r.y=a,r.vy=Math.abs(r.vy)>.8?-r.vy*.22:0,r.vx*=.65,r.vz*=.65),r.x=Il.clamp(r.x,n.x-n.width/2+.3,n.x+n.width/2-.3),r.z=Il.clamp(r.z,n.z-n.depth/2+.3,n.z+n.depth/2-.3),r.rx+=r.vz*e*.8,r.rz-=r.vx*e*.8,r.time>2.8){const c=1-Math.exp(-e*1.5);r.x+=(r.hx-r.x)*c,r.z+=(r.hz-r.z)*c}r.time>7&&!t.foam&&(r.x=r.hx,r.y=r.hy,r.z=r.hz,r.vx=r.vy=r.vz=0,this.active.delete(s)),this.write(s,r)}this.mesh.instanceMatrix.needsUpdate=!0}get stats(){return{cubes:this.pit.cubes,moving:this.active.size,peak:this.peak}}}class qu{constructor(t){this.clouds=Array.from({length:X.effects.cloudLimit},()=>({life:0,position:new R,velocity:new R})),this.grit=Array.from({length:X.effects.gritLimit},()=>({life:0,position:new R,velocity:new R})),this.index=0,this.gritIndex=0,this.seed=714,this.budget=[0,0,0],this.previousImpact=0,this.stats={dust:0,smoke:0,grit:0},this.point=new R,this.direction=new R,this.dummy=new Ee,this.dirtColor=new Wt(Ze.dust),this.smokeColor=new Wt("#c2cbd1");const e=new ae(1,1),n=new hm;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,this.attributes={};for(const[r,o]of[["center",3],["size",1],["alpha",1],["tint",3],["angle",1]]){const a=new Uc(new Float32Array(this.clouds.length*o),o);a.setUsage(uu),n.setAttribute("particle"+r,a),this.attributes[r]=a}n.instanceCount=0;const s=new On({transparent:!0,depthWrite:!1,fog:!0,uniforms:_u.clone(xt.fog),vertexShader:`
        attribute vec3 particlecenter, particletint;
        attribute float particlesize, particlealpha, particleangle;
        varying vec2 cloudUV; varying vec3 cloudTint; varying float cloudAlpha;
        #include <fog_pars_vertex>
        void main(){
          cloudUV=uv;cloudTint=particletint;cloudAlpha=particlealpha;
          float s=sin(particleangle),c=cos(particleangle);
          vec2 corner=mat2(c,-s,s,c)*position.xy*particlesize;
          vec4 mvPosition=modelViewMatrix*vec4(particlecenter,1.0);
          mvPosition.xy+=corner;gl_Position=projectionMatrix*mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        varying vec2 cloudUV; varying vec3 cloudTint; varying float cloudAlpha;
        #include <fog_pars_fragment>
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        void main(){
          float radius=length((cloudUV-.5)*2.0);
          float grain=noise(cloudUV*7.0)*.65+noise(cloudUV*17.0)*.35;
          float edge=1.0-smoothstep(.18,.98,radius+grain*.16);
          float alpha=cloudAlpha*edge*(.55+grain*.45);
          if(alpha<.003)discard;
          gl_FragColor=vec4(cloudTint*(.92+grain*.13),alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`});this.mesh=new le(n,s),this.mesh.frustumCulled=!1,this.mesh.name="poeira-e-fumaca",t.add(this.mesh),this.gritMesh=new qn(new Hi(1,0),new Gt({color:Ze.color,roughness:1}),this.grit.length),this.gritMesh.count=0,this.gritMesh.frustumCulled=!1,this.gritMesh.name="terra-dos-pneus",t.add(this.gritMesh)}random(){return this.seed=this.seed*1664525+1013904223>>>0,this.seed/4294967296}reset(){for(const t of this.clouds)t.life=0;for(const t of this.grit)t.life=0;this.budget.fill(0),this.previousImpact=0,this.mesh.geometry.instanceCount=0,this.gritMesh.count=0,this.stats={dust:0,smoke:0,grit:0}}cloud(t,e,n,s=1){const r=this.clouds[this.index++%this.clouds.length],o=this.random();r.kind=t,r.position.copy(e),r.velocity.copy(n),r.life=r.duration=t==="smoke"?X.effects.smokeLife*(.7+o*.5):X.effects.dustLife*(.7+o*.5),r.size=t==="smoke"?.16+o*.12:.45+o*.4,r.growth=t==="smoke"?.65+o*.25:1.8+o,r.opacity=t==="smoke"?X.effects.smokeOpacity*(.65+s*.35):X.effects.dustOpacity*s,r.angle=this.random()*Math.PI*2,r.spin=(this.random()-.5)*.8}wheelDust(t,e,n,s){const r=n.throttle||0,o=n.brake||0,a=qt(Math.abs(e.steer)*e.speed/18+(e.skid?1:0),0,1.8),c=s?.7+r*.65+o*.3+a*.4:.35+o*.65+a*.25,l=t.x+(this.random()-.5)*.22,h=t.z+(this.random()-.5)*.22;this.point.set(l,te(l,h)+.1,h);const d=Math.sin(e.heading),f=Math.cos(e.heading),u=(this.random()-.5)*(1.1+a*2),p=s?1.3+r*2.4:.55;if(this.direction.set(-d*p+f*u,(s?.8+r*.4:.4)+this.random()*.8,-f*p-d*u),this.cloud("dust",this.point,this.direction,c),s&&e.speed>3&&this.random()<.45+r*.4+a*.2){const x=this.grit[this.gritIndex++%this.grit.length];x.life=x.duration=.65+this.random()*.45,x.size=.022+this.random()*.035,x.position.copy(this.point),x.velocity.copy(this.direction).multiplyScalar(1.8+this.random()).y=1.5+this.random()*2.2,x.angle=this.random()*6,x.spin=3+this.random()*8}}update(t,e,n,s,r){n=qt(n,0,.06);for(const o of this.clouds)o.life<=0||(o.life-=n,o.position.addScaledVector(o.velocity,n),o.velocity.x*=Math.exp(-n*1.6),o.velocity.z*=Math.exp(-n*1.6),o.velocity.y+=(o.kind==="smoke"?.45:.12)*n,o.size+=o.growth*n,o.angle+=o.spin*n,o.kind==="dust"&&(o.position.y=Math.max(o.position.y,te(o.position.x,o.position.z)+.06)));for(const o of this.grit){if(o.life<=0)continue;o.life-=n,o.velocity.y-=X.gravity*n,o.position.addScaledVector(o.velocity,n),o.angle+=o.spin*n;const a=te(o.position.x,o.position.z)+o.size;o.position.y<a&&(o.position.y=a,o.velocity.y=Math.abs(o.velocity.y)*.18,o.velocity.x*=.65,o.velocity.z*=.65)}if(n>0&&!t.crashed){for(let o=0;o<2;o++){const a=t.wheels[o],c=o===0;if(!(a!=null&&a.grounded)||t.speed<.9||!kd(a.x,a.z)){this.budget[o]=0;continue}const l=X.effects.dustRate*qt(t.speed/12,.12,1.5)*(c?1:.45)*(1+(s.throttle||0)*.3+(s.brake||0)*.45+Math.abs(t.steer)*.25);for(this.budget[o]+=l*n;this.budget[o]>=1;)this.budget[o]--,this.wheelDust(a,t,s,c);if(t.impact>.3&&this.previousImpact<.3)for(let h=0;h<7;h++)this.wheelDust(a,t,s,c)}for(e.exhaustOutlet.getWorldPosition(this.point),this.direction.set(0,.22,-1).transformDirection(e.frame.matrixWorld),this.budget[2]+=(X.effects.smokeIdleRate+(s.throttle||0)*X.effects.smokeThrottleRate)*n;this.budget[2]>=1;){this.budget[2]--;const o=this.direction.clone().multiplyScalar(1.1+(s.throttle||0)*1.5);o.x+=t.vx*.08+(this.random()-.5)*.12,o.y+=.2,o.z+=t.vz*.08+(this.random()-.5)*.12,this.cloud("smoke",this.point,o,s.throttle||0)}}else t.crashed&&this.budget.fill(0);this.previousImpact=t.impact,this.draw(r)}draw(t){this.stats={dust:0,smoke:0,grit:0};const e=this.clouds.filter(s=>s.life>0);for(const s of e)s.distance=s.position.distanceToSquared(t.position);e.sort((s,r)=>r.distance-s.distance),e.forEach((s,r)=>{const o=1-s.life/s.duration,a=Math.min(o*12,1)*(1-o)**1.5,c=s.kind==="smoke"?this.smokeColor:this.dirtColor;this.attributes.center.setXYZ(r,s.position.x,s.position.y,s.position.z),this.attributes.size.setX(r,s.size),this.attributes.alpha.setX(r,s.opacity*a),this.attributes.angle.setX(r,s.angle),this.attributes.tint.setXYZ(r,c.r,c.g,c.b),this.stats[s.kind]++}),this.mesh.geometry.instanceCount=e.length;for(const s of Object.values(this.attributes))s.needsUpdate=!0;let n=0;for(const s of this.grit)s.life<=0||(this.dummy.position.copy(s.position),this.dummy.rotation.set(s.angle,s.angle*.7,0),this.dummy.scale.setScalar(s.size*Math.min(s.life*7,1)),this.dummy.updateMatrix(),this.gritMesh.setMatrixAt(n++,this.dummy.matrix));this.gritMesh.count=n,this.gritMesh.instanceMatrix.needsUpdate=!0,this.stats.grit=n}}const v_=Math.PI*2;let Ha=12;const We=()=>(Ha=Ha*1664525+1013904223>>>0,Ha/4294967296);function Dh(i,t){const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,512,512);for(let r=0;r<24e3;r++){n.fillStyle=r%3===0?t:"#462f1a",n.globalAlpha=.07+We()*.14;const o=.4+We()*1.5;n.fillRect(We()*512,We()*512,o,o*.65)}const s=new xn(e);return s.colorSpace=be,s.wrapS=s.wrapT=us,s.repeat.set(1,1),s.anisotropy=4,s}function Uh(i,t,e="#6A659E",n="#f0f1df"){const s=document.createElement("canvas");s.width=1024,s.height=256;const r=s.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1024,256),r.fillStyle=n,r.font="italic 900 100px Arial",r.textAlign="center",i==="PANORAMA"?(r.fillStyle="#1e1e1e",r.fillRect(0,0,1024,180),Xi(r,130,8,764,168)):r.fillText(i,512,143),r.fillStyle=n,t&&(r.font="bold 25px Arial",r.letterSpacing="6px",r.fillText(t,512,206));const o=new xn(s);return o.colorSpace=be,o}function __(){const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"#ffffff00"),e.addColorStop(.35,"#ffffffcc"),e.addColorStop(.65,"#ffffffaa"),e.addColorStop(1,"#ffffff00"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-out";for(let s=0;s<350;s++)t.fillStyle=`rgba(0,0,0,${.15+We()*.6})`,t.fillRect(We()*64,We()*256,3+We()*15,1+We()*5);const n=new xn(i);return n.colorSpace=be,n.wrapT=us,n.anisotropy=4,n}class Yu{constructor(t,e=null,n=null,s){this.filters=n,this.renderer=e||new Vu({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),this.renderer.info.autoReset=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qh,this.renderer.outputColorSpace=be,this.renderer.toneMapping=Yc,this.renderer.toneMappingExposure=.95,this.scene=new Wr,this.scene.background=new Wt("#bfcdd0"),this.scene.fog=new ps("#bfcdd0",320,720),this.camera=new dn(X.camera.fov,1,.1,650),this.camHeading=0,this.initial=!0,this.ambient=new Lu("#edf4e7","#8e7056",1.25),this.scene.add(this.ambient),this.sun=new Ou("#fff0ce",2.9),this.sun.position.set(-45,90,-35),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:180}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.035,this.scene.add(this.sun),this.scene.add(this.sun.target),this.static=new de,this.scene.add(this.static),this.materials={dirt:new Gt({map:Dh(Ze.color,Ze.grain),roughness:1}),rut:new Gt({map:__(),color:"#6e3924",roughness:1,transparent:!0,opacity:.34,depthWrite:!1}),purple:new Gt({color:"#6A659E"}),pale:new Gt({color:"#e4e1c8"}),black:new Gt({color:"#303e39"}),metal:new Gt({color:"#64736c",metalness:.4,roughness:.7}),green:new Gt({color:"#8aaa70"})},St.theme!=="desert"&&this.makeGround(),St.theme==="outdoor"?this.makeArena():i_(this),this.batchStatics(),this.makeTrackBarriers(),this.bike=new $r(this.scene,s),this.foam=St.foamPit?new Xu(this.scene,St.foamPit):null,this.effects=new qu(this.scene),this.makeShadow(),this.resize()}add(t,e,n=[0,0,0],s=this.static){const r=new le(t,e);return r.position.set(...n),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}box(t,e,n){return this.add(new gn(...t),n,e)}ribbon(t,e,n,s=.025){const r=[],o=[],a=[];for(let l=0;l<t.length;l++){const h=t[Math.max(0,l-1)],d=t[Math.min(t.length-1,l+1)],f=d.x-h.x,u=d.z-h.z,p=Math.hypot(f,u)||1;for(const x of[-1,1]){const m=t[l].x+u/p*e*.5*x,g=t[l].z-f/p*e*.5*x;r.push(m,te(m,g)+s,g),o.push(x===1?1:0,l*.12)}if(l<t.length-1){const x=l*2;a.push(x,x+2,x+1,x+1,x+2,x+3)}}const c=new ie;return c.setAttribute("position",new Lt(r,3)),c.setAttribute("uv",new Lt(o,2)),c.setIndex(a),c.computeVertexNormals(),this.add(c,n)}trackPoints(){return Vr()}makeTrackBarriers(){const{blocks:t}=Kh(te);if(!t.length)return;const e=new gn(1,1,1),n=e.attributes.position;for(let v=0;v<n.count;v++)n.getY(v)>0&&(n.setX(v,n.getX(v)*.9),n.setZ(v,n.getZ(v)*.97));e.computeVertexNormals();const s=new qn(e,new Gt({color:16777215,roughness:.93}),t.length);s.name="Proteções retangulares da pista",s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s);const r=document.createElement("canvas");r.width=512,r.height=128;const o=r.getContext("2d");Xi(o,6,3,500,122);const a=o.getImageData(0,0,512,128);for(let v=0;v<a.data.length;v+=4)a.data[v+3]=Math.max(0,(a.data[v]-38)*255/217),a.data[v]=a.data[v+1]=a.data[v+2]=255;o.putImageData(a,0,0);const c=new xn(r);c.colorSpace=be,c.anisotropy=4;const l=new qn(new ae(1,1),new Gt({map:c,color:16777215,alphaTest:.2,roughness:1}),t.length*2);l.name="Logo oficial Panorama nas proteções",l.receiveShadow=!0,this.scene.add(l);const h=new Ee,d=new fe,f=new R,u=new R,p=new R,x=new Ti,m=new Wt("#6A659E"),g=new Wt("#ece7da");for(let v=0;v<t.length;v++){const _=t[v],M=v%5===4;f.set(_.right.x,_.right.y,_.right.z),u.set(_.up.x,_.up.y,_.up.z),p.set(_.forward.x,_.forward.y,_.forward.z),d.makeBasis(f,u,p),h.position.set(_.x,_.y,_.z),h.quaternion.setFromRotationMatrix(d),h.scale.set(_.width,_.height,_.length),h.updateMatrix(),s.setMatrixAt(v,h.matrix),s.setColorAt(v,M?g:m);for(const E of[-1,1]){h.position.set(_.x,_.y,_.z).addScaledVector(f,E*(_.width/2+.009)),h.quaternion.setFromRotationMatrix(d).multiply(x.setFromAxisAngle(new R(0,1,0),E*Math.PI/2)),h.scale.set(_.length*.86,_.height*.46,1),h.updateMatrix();const A=v*2+(E===1?1:0);l.setMatrixAt(A,h.matrix),l.setColorAt(A,M?m:g)}}s.computeBoundingSphere(),l.computeBoundingSphere(),this.barrierCount=t.length}makeGround(){if(St.theme==="stadium")Zv(this);else{const n=new ae((zt.halfWidth-6)*2,(zt.halfLength-10)*2);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=n.attributes.uv;for(let d=0;d<s.count;d++)r.setXY(d,s.getX(d)/Ze.textureScale,s.getZ(d)/Ze.textureScale);const o=this.add(n,this.materials.dirt,[0,-.035,0]);o.castShadow=!1;const a=new Gt({map:Dh("#68744d","#9b9d6b"),roughness:1}),c=new ae(1200,1200);c.rotateX(-Math.PI/2);const l=c.attributes.position,h=c.attributes.uv;for(let d=0;d<l.count;d++)h.setXY(d,l.getX(d)/9,l.getZ(d)/9);this.add(c,a,[0,-.07,0]).castShadow=!1}const t=this.trackPoints();if(St.rollIn&&St.theme!=="stadium"){const n=St.rollIn,s=[],r=[],o=[],a=Math.ceil((n.right-n.left)/.6)+1,c=Math.ceil((n.end-n.back)/.6)+1;for(let h=0;h<c;h++)for(let d=0;d<a;d++){const f=n.left+(n.right-n.left)*d/(a-1),u=n.back+(n.end-n.back)*h/(c-1);if(s.push(f,te(f,u)+.02,u),r.push(f/Ze.textureScale,u/Ze.textureScale),h<c-1&&d<a-1){const p=h*a+d;o.push(p,p+a,p+1,p+1,p+a,p+a+1)}}const l=new ie;l.setAttribute("position",new Lt(s,3)),l.setAttribute("uv",new Lt(r,2)),l.setIndex(o),l.computeVertexNormals(),this.add(l,this.materials.dirt)}for(const n of zs){const s=((n.angleEnd??Math.PI)-(n.angleStart??0))*n.radius,r=[],o=[],a=[],c=Math.ceil((s+n.entry*2)/.35)+1,l=81;for(let d=0;d<c;d++)for(let f=0;f<l;f++){const u=-n.entry+(s+2*n.entry)*d/(c-1),p=n.inner+(n.outer-n.inner)*f/(l-1),{x,z:m}=bl(n,u,p);if(r.push(x,te(x,m)+.02,m),o.push(x/Ze.textureScale,m/Ze.textureScale),d<c-1&&f<l-1){const g=d*l+f,v=[g,g+1,g+l,g+1,g+l+1,g+l];n.direction<0&&v.reverse(),a.push(...v)}}const h=new ie;h.setAttribute("position",new Lt(r,3)),h.setAttribute("uv",new Lt(o,2)),h.setIndex(a),h.computeVertexNormals(),this.add(h,this.materials.dirt);for(let d=(n.angleStart??0)+.15;d<(n.angleEnd??Math.PI)-.1;d+=.38){const f=n.crest+1,u=n.x-f*Math.cos(d),p=n.z+n.direction*f*Math.sin(d),x=te(u,p);this.box([.12,.8,.12],[u,x+.4,p],this.materials.pale),this.box([.17,.2,.17],[u,x+.75,p],this.materials.purple)}}for(const n of tn){const s=new Set([0,n.takeoff.length,n.takeoff.length+n.takeoff.back,n.landing.start,n.landing.crest,n.landing.crest+n.landing.crown,n.landing.end]);for(let d=0;d<n.landing.end;d+=.35)s.add(d);const r=[...s].sort((d,f)=>d-f),o=[],a=[],c=[],l=65;for(let d=0;d<r.length;d++)for(let f=0;f<l;f++){const u=(f/(l-1)-.5)*22,p=Ni(n,r[d],u);if(o.push(p.x,te(p.x,p.z)+.02,p.z),a.push(p.x/Ze.textureScale,p.z/Ze.textureScale),d<r.length-1&&f<l-1){const x=d*l+f;c.push(x,x+l,x+1,x+1,x+l,x+l+1)}}const h=new ie;h.setAttribute("position",new Lt(o,3)),h.setAttribute("uv",new Lt(a,2)),h.setIndex(c),h.computeVertexNormals(),this.add(h,this.materials.dirt);for(const d of[-n.landing.width/2-.5,n.landing.width/2+.5])for(let f=n.landing.crest;f<n.landing.end-1;f+=6){const u=Ni(n,f,d);this.box([.15,.75,.15],[u.x,te(u.x,u.z)+.37,u.z],this.materials.pale),this.box([.19,.16,.19],[u.x,te(u.x,u.z)+.7,u.z],this.materials.purple)}St.theme!=="stadium"&&["whip","air","table","return-table","big-table"].includes(n.id)&&this.sign(n,-3,-9.5,n.name.split(" · ")[1],n.id==="whip"?St.number+" · "+St.name.toUpperCase():"PANORAMA • MOTOR CLUB",4.2)}for(const n of[Ie,He].filter(Boolean)){const s=[],r=[],o=[],c=n.count*n.spacing,l=Math.ceil(c/.14)+1;for(let d=0;d<l;d++)for(let f=0;f<65;f++){const u=Ni(n,c*d/(l-1),(f/64-.5)*22);if(s.push(u.x,te(u.x,u.z)+.02,u.z),r.push(u.x/Ze.textureScale,u.z/Ze.textureScale),d<l-1&&f<64){const p=d*65+f;o.push(p,p+65,p+1,p+1,p+65,p+65+1)}}const h=new ie;h.setAttribute("position",new Lt(s,3)),h.setAttribute("uv",new Lt(r,2)),h.setIndex(o),h.computeVertexNormals(),this.add(h,this.materials.dirt),this.sign(n,-8,-9.5,n===Ie?"COSTELINHAS":"ONDULAÇÕES",n===Ie?"W + ↓  •  MANUAL":"ENCONTRE O RITMO",4.6)}const e=St.dirt?t.filter(n=>n.x<St.dirt.right&&n.z>=St.dirt.start&&n.z<=St.dirt.end):t;for(const n of[-4.6,-3.8,-3,-2.1,-1.3,-.5,.5,1.3,2.2,3.1,4,4.7]){const s=e.map((r,o)=>{const a=e[St.dirt?Math.min(o+1,e.length-1):(o+1)%e.length],c=a.x-r.x,l=a.z-r.z,h=Math.hypot(c,l)||1,d=n+Math.sin(o*.021+n)*.14+Math.sin(o*.071+n*3)*.045;return{x:r.x+l/h*d,z:r.z-c/h*d}});this.ribbon(s,.13+We()*.08,this.materials.rut,.046)}for(const n of zs)for(const s of n.ruts){const r=[],o=((n.angleEnd??Math.PI)-(n.angleStart??0))*n.radius;for(let a=-n.entry;a<=o+n.entry;a+=.35)r.push(bl(n,a,s));this.ribbon(r,.1,this.materials.rut,.028)}}sign(t,e,n,s,r,o=5){const a=Ni(t,e,n),c=3.5;for(const d of[-1,1]){const f=Ni(t,e,n+d*(o*.5-.2));this.box([.09,c,.09],[f.x,c/2,f.z],this.materials.metal)}const l=new Gt({map:Uh(s,r),side:Re,roughness:.7}),h=this.add(new ae(o,o/4),l,[a.x,c-.05,a.z]);h.rotation.y=t.heading+Math.PI}makeArena(){const t=this.materials,e=new Gt({color:"#dedecb",roughness:.9}),n=(c,l,h,d)=>{const f=Math.hypot(h-c,d-l),u=Math.ceil(f/5),p=Math.atan2(h-c,d-l);for(let x=0;x<=u;x++)this.box([.18,1.7,.18],[c+(h-c)*x/u,.85,l+(d-l)*x/u],e);for(const x of[.55,1.05,1.5]){const m=this.box([.1,.1,f],[(c+h)/2,x,(l+d)/2],e);m.rotation.y=p}};n(-107,-128,107,-128),n(-107,132,107,132),n(-107,-128,-107,132),n(107,-128,107,132);const s=[new Gt({color:"#324e36",roughness:1}),new Gt({color:"#455c3b",roughness:1}),new Gt({color:"#536744",roughness:1})],r=new Gt({color:"#675442",roughness:1}),o=(c,l,h)=>{this.box([.38,h*.45,.38],[c,h*.22,l],r);for(let d=0;d<3;d++)this.add(new qr(h*(.26-d*.045),h*.63,8),s[d],[c,h*(.4+d*.2),l])};for(const c of[-1,1])for(let l=-123;l<143;l+=14)o(c*(123+We()*9),l+We()*5,6+We()*6);for(let c=-110;c<115;c+=12)o(c,143+We()*9,8+We()*6);const a=this.box([310,.04,8],[0,-.02,163],new Gt({color:"#626963",roughness:1}));a.castShadow=!1,this.box([310,.04,.14],[0,.01,163],t.pale);for(let c=0;c<12;c++){const l=c/12*v_,h=310+We()*80,d=12+We()*23,f=this.add(new Yr(1,12,8),s[2],[Math.sin(l)*h,-6,Math.cos(l)*h]);f.scale.set(95,d,100),f.castShadow=!1}for(const c of[-99,99])for(const l of[-118,126]){this.box([.12,5,.12],[c,2.5,l],t.metal);const h=this.add(new ae(1.1,2.5),t.purple,[c+.6,3.6,l]);h.rotation.y=.25}this.box([9,3.8,5],[-96,1.9,-120],t.black),this.add(new ae(8,2),new Gt({map:Uh("PANORAMA","MOTORAMA • TERRA VERMELHA")}),[-96,2.6,-117.45]);for(const c of zs.filter(l=>l.angleStart===void 0)){const l=c.x,h=c.z+c.direction*(c.crest+2),d=te(l,h);this.box([2.2,.75,.16],[l,d+.65,h],t.purple)}}batchStatics(){this.static.updateMatrixWorld(!0);const t=new Map;this.static.traverse(e=>{if(!e.isMesh)return;const n=e.material.uuid+e.castShadow;t.has(n)||t.set(n,{material:e.material,castShadow:e.castShadow,geometries:[]});const s=e.geometry.clone();s.applyMatrix4(e.matrixWorld),s.index?t.get(n).geometries.push(s.toNonIndexed()):t.get(n).geometries.push(s)}),this.scene.remove(this.static),this.static=new de,this.scene.add(this.static);for(const e of t.values()){const n=$v(e.geometries);if(n){const s=this.add(n,e.material);s.castShadow=e.castShadow&&!e.material.transparent}}}dispose(){var s,r,o;(s=this.raceVisuals)==null||s.dispose(),(r=this.replayView)==null||r.dispose();const t=new Set,e=new Set,n=new Set;for(const a of[this.scene])a.traverse(c=>{c.isInstancedMesh&&c.dispose(),c.geometry&&t.add(c.geometry);for(const l of[].concat(c.material||[])){e.add(l);for(const h of Object.values(l))h!=null&&h.isTexture&&n.add(h)}});for(const a of t)a.dispose();for(const a of e)a.dispose();for(const a of n)a.dispose();(o=this.sun.shadow.map)==null||o.dispose(),this.renderer.renderLists.dispose()}makeShadow(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,3,64,64,64);n.addColorStop(0,"rgba(25,27,20,.50)"),n.addColorStop(.45,"rgba(25,27,20,.24)"),n.addColorStop(1,"rgba(25,27,20,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),this.shadow=new le(new ae(2.5,3.8),new di({map:new xn(t),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.scene.add(this.shadow)}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}render(t,e,n,s={},r=e,o=n,a=null){var E,A,P;this.renderer.info.reset(),this.bike.update(t,n),(E=this.concert)==null||E.update(n),(A=this.raceVisuals)==null||A.update((a==null?void 0:a.race)||void 0);const c=t.speed>2?Math.atan2(t.vx,t.vz):t.heading;this.initial&&(this.camHeading=c,this.initial=!1,this.snap=!0),this.camHeading+=Sn(c-this.camHeading)*(1-Math.exp(-3.1*e));const l=new R(Math.sin(this.camHeading),0,Math.cos(this.camHeading)),h=t.y-te(t.x,t.z),d=qt(1-t.speed/9,0,1),f=X.camera.distance+qt(t.speed*.08,0,2.1)+d*X.camera.idleDistance,u=X.camera.height+d*X.camera.idleHeight+qt(h*.1,0,1),p=t.crashed?this.bike.crash:null,x=(p==null?void 0:p.focus)||new R(t.x,t.y,t.z),m=x.clone().add(new R(0,u+(p?4:0),0)).addScaledVector(l,-f-(p?X.crash.cameraDistance:0));m.x+=Math.cos(this.camHeading)*(1.35+d*X.camera.idleSide+t.trickBlend*X.camera.trickSide),m.z-=Math.sin(this.camHeading)*(1.35+d*X.camera.idleSide+t.trickBlend*X.camera.trickSide),m.y=Math.max(m.y,te(m.x,m.z)+2),this.snap?(this.camera.position.copy(m),this.snap=!1):this.camera.position.lerp(m,1-Math.exp(-5.5*e));const g=x.clone().add(new R(0,.8,0)).addScaledVector(l,p?0:X.camera.lookAhead*.42+d*(X.camera.idleLookAhead-X.camera.lookAhead*.42));if(this.camera.lookAt(g),this.camera.fov=sn(this.camera.fov,X.camera.fov+Math.min(t.speed*.18,4),2,e),this.camera.updateProjectionMatrix(),this.inspection){const C=this.inspection,b=t.heading+C.yaw,S=t.x+Math.sin(t.heading)*(C.forward||0),L=t.z+Math.cos(t.heading)*(C.forward||0);this.camera.position.set(S+Math.sin(b)*C.distance,t.y+C.height,L+Math.cos(b)*C.distance),this.camera.lookAt(S,t.y+C.target,L),this.camera.fov=C.fov,this.camera.updateProjectionMatrix()}if(a!=null&&a.camera){const{position:C,look:b,fov:S}=a.camera;this.camera.position.set(C.x,C.y,C.z),this.camera.lookAt(b.x,b.y,b.z),this.camera.fov=S,this.camera.updateProjectionMatrix()}const v=!!(this.inspection&&this.inspection.height>100),_=v?170:32;this.shadowCoverage!==_&&(this.shadowCoverage=_,Object.assign(this.sun.shadow.camera,{left:-_,right:_,top:_,bottom:-_,far:v?550:180}),this.sun.shadow.camera.updateProjectionMatrix()),this.sun.position.set(t.x-(v?95:35),v?220:80,t.z-(v?120:30)),this.sun.target.position.set(t.x,0,t.z);const M=te(t.x,t.z);this.shadow.visible=!t.crashed&&!t.foam,this.shadow.position.set(t.x,M+.055,t.z),this.shadow.rotation.set(-Math.PI/2,0,-t.heading),this.shadow.scale.setScalar(1+h*.05),this.shadow.material.opacity=qt(1-h*.025,.3,1),(P=this.foam)==null||P.update(t,r),this.effects.update(t,this.bike,r,s,this.camera),this.filters?this.filters.render(this.renderer,this.scene,this.camera,o):this.renderer.render(this.scene,this.camera)}}const Oh={throttle:"KeyW",brake:"KeyS",left:"KeyA",right:"KeyD",frontflip:"ArrowUp",backflip:"ArrowDown",whipLeft:"ArrowLeft",whipRight:"ArrowRight"};class M_{constructor(t,{retry:e,pause:n,interact:s,blur:r,trickStart:o,trickRelease:a,slowMotion:c,shortcutsEnabled:l=()=>!0}){this.keys=new Set,this.touch=new Map,this.qa=new Set,this.canvas=t,this.trickStart=o,this.trickRelease=a,this.slowMotion=c;const h=new Set(["CapsLock",...xr.flatMap(f=>f.keys)]),d=new Set([...Object.values(Oh),"KeyQ","KeyE","KeyR","Escape",...h]);window.addEventListener("keydown",f=>{var u,p;f.target instanceof HTMLInputElement||!l()&&f.code!=="Escape"||h.has(f.code)&&(!l()||(p=(u=f.target)==null?void 0:u.closest)!=null&&p.call(u,'button,select,textarea,[contenteditable="true"]'))||d.has(f.code)&&(f.preventDefault(),s==null||s(),f.repeat||this.keyDown(f.code),f.repeat||(f.code==="KeyR"&&e(),f.code==="Escape"&&n()))}),window.addEventListener("keyup",f=>{d.has(f.code)&&(!h.has(f.code)||this.keys.has(f.code))&&f.preventDefault(),this.keyUp(f.code)}),window.addEventListener("blur",()=>{this.clear(),r==null||r()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),r==null||r())}),t.addEventListener("pointerdown",()=>{t.focus(),s==null||s()}),document.querySelectorAll("[data-control]").forEach(f=>{f.addEventListener("pointerdown",u=>{u.preventDefault(),f.setPointerCapture(u.pointerId);const p=f.dataset.control;p==="retry"?e():this.touch.set(u.pointerId,Oh[p]),s==null||s()});for(const u of["pointerup","pointercancel","lostpointercapture"])f.addEventListener(u,p=>this.touch.delete(p.pointerId))})}keyDown(t){var s,r,o;if(this.keys.has(t))return;const e=[...this.keys].reverse();if(this.keys.add(t),t==="CapsLock"){(s=this.slowMotion)==null||s.call(this);return}if(xr.find(a=>a.keys.includes(t))){(r=this.trickStart)==null||r.call(this,Xh(this.keys));return}for(const a of e){const c=Wh.find(l=>l.keys.includes(t)&&l.keys.includes(a));if(c){(o=this.trickStart)==null||o.call(this,c.id);break}}}keyUp(t){var n;this.keys.delete(t);const e=xr.find(s=>s.keys.includes(t));e!=null&&e.keys.some(s=>this.keys.has(s))||(n=this.trickRelease)==null||n.call(this,t,this.keys)}clear(){var t;for(const e of this.keys)(t=this.trickRelease)==null||t.call(this,e);this.keys.clear(),this.touch.clear(),this.qa.clear()}sample(){const t=new Set([...this.keys,...this.touch.values(),...this.qa]);return{throttle:+t.has("KeyW"),brake:+t.has("KeyS"),steer:+t.has("KeyD")-+t.has("KeyA"),flip:+t.has("ArrowDown")-+t.has("ArrowUp"),whip:+t.has("ArrowRight")-+t.has("ArrowLeft")}}}class y_{constructor(){this.enabled=!1,this.size=new lt,this.target=null}toggle(){return this.enabled=!this.enabled,this.enabled}init(){this.target=new ui(1,1,{type:qi,depthBuffer:!0}),this.material=new On({depthTest:!1,depthWrite:!1,uniforms:{film:{value:this.target.texture},time:{value:0},resolution:{value:new lt(1,1)}},vertexShader:`varying vec2 uvFilm;
   void main(){uvFilm=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`
   uniform sampler2D film;uniform float time;uniform vec2 resolution;varying vec2 uvFilm;
   float noise(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   void main(){
    vec2 uv=uvFilm;float tick=floor(time*24.);float line=floor(uv.y*480.);
    float tracking=exp(-pow((uv.y-fract(time*.035))/.018,2.));
    float wobble=sin(uv.y*37.+time*1.7)*.00085+(noise(vec2(line,tick))-.5)*.001;
    uv.x+=wobble+tracking*sin(time*8.+uv.y*200.)*.0026;
    uv=clamp(uv,vec2(.002),vec2(.998));
    vec2 bleed=vec2(2.2/resolution.x,0.);
    vec3 col=vec3(texture2D(film,clamp(uv+bleed,0.,1.)).r,texture2D(film,uv).g,texture2D(film,clamp(uv-bleed,0.,1.)).b);
    gl_FragColor=vec4(col,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    col=gl_FragColor.rgb;
    float luma=dot(col,vec3(.299,.587,.114));col=mix(vec3(luma),col,.78);
    col=col*.91+vec3(.038,.029,.043);
    // Tape grain and occasional short dropouts, without full-screen flashes.
    vec2 tapePixel=floor(uvFilm*vec2(min(resolution.x,960.),min(resolution.y,540.)));
    float grain=(noise(tapePixel+vec2(tick,tick*.71))-.5)*.085;
    float dropout=step(.994,noise(vec2(line,tick*.37)))*step(.78,noise(vec2(floor(uvFilm.x*32.),line+tick)));
    col+=grain+dropout*.09;
    col+=tracking*(.018+(noise(vec2(line,tick))-.5)*.045);
    // Resolve at least three physical pixels per scanline to avoid moire on small screens.
    float scanCount=min(360.,resolution.y/3.);
    float scan=.5+.5*cos(uvFilm.y*scanCount*6.28318);
    col*=1.-.075*scan;
    // Very light RGB phosphor grille, locked to physical output pixels.
    float phosphor=mod(floor(gl_FragCoord.x),3.);
    vec3 mask=vec3(.978);
    if(phosphor<1.)mask.r=1.;else if(phosphor<2.)mask.g=1.;else mask.b=1.;
    col*=mask;
    vec2 edge=uvFilm*(1.-uvFilm);col*=.82+.18*pow(clamp(edge.x*edge.y*16.,0.,1.),.22);
    gl_FragColor=vec4(col,1.);
   }`}),this.scene=new Wr,this.camera=new Gr,this.scene.add(new le(new ae(2,2),this.material))}render(t,e,n,s){if(!this.enabled){t.render(e,n);return}this.target||this.init(),t.getDrawingBufferSize(this.size),(this.target.width!==this.size.x||this.target.height!==this.size.y)&&(this.target.setSize(this.size.x,this.size.y),this.material.uniforms.resolution.value.copy(this.size)),this.material.uniforms.time.value=s;const r=t.getRenderTarget();try{t.setRenderTarget(this.target),t.render(e,n),t.setRenderTarget(r),t.render(this.scene,this.camera)}finally{t.setRenderTarget(r)}}}class S_{constructor(){this.enabled=!1,this.size=new lt,this.target=null}init(){this.target=new ui(1,1,{type:qi,depthBuffer:!0,minFilter:Ge,magFilter:Ge}),this.material=new On({depthTest:!1,depthWrite:!1,uniforms:{film:{value:this.target.texture},pixels:{value:new lt(160,144)}},vertexShader:`varying vec2 uvFilm;
   void main(){uvFilm=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`
   uniform sampler2D film;uniform vec2 pixels;varying vec2 uvFilm;
   float bayer2(vec2 p){return p.x<1.?(p.y<1.?0.:3.):(p.y<1.?2.:1.);}
   void main(){
    vec2 pixel=min(floor(uvFilm*pixels),pixels-1.);
    vec2 uv=(pixel+.5)/pixels;
    gl_FragColor=vec4(texture2D(film,uv).rgb,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    float light=dot(gl_FragColor.rgb,vec3(.299,.587,.114));
    light=clamp((light-.5)*1.55+.5,0.,1.);
    // Fixed ordered dithering: no random flicker as the camera moves.
    float pattern=(4.*bayer2(mod(pixel,2.))+bayer2(mod(floor(pixel/2.),2.))+.5)/16.-.5;
    float level=floor(clamp(light*3.+.5+pattern*.8,0.,3.));
    vec3 ink=vec3(15.,56.,15.)/255.;
    if(level>2.5)ink=vec3(155.,188.,15.)/255.;
    else if(level>1.5)ink=vec3(139.,172.,15.)/255.;
    else if(level>.5)ink=vec3(48.,98.,48.)/255.;
    gl_FragColor=vec4(ink,1.);
   }`}),this.scene=new Wr,this.camera=new Gr,this.scene.add(new le(new ae(2,2),this.material))}render(t,e,n){if(!this.enabled){t.render(e,n);return}this.target||this.init(),t.getDrawingBufferSize(this.size);const s=Math.max(1,Math.min(144,Math.round(this.size.y))),r=Math.max(1,Math.round(s*this.size.x/Math.max(1,this.size.y)));(this.target.width!==r||this.target.height!==s)&&(this.target.setSize(r,s),this.material.uniforms.pixels.value.set(r,s));const o=t.getRenderTarget();try{t.setRenderTarget(this.target),t.render(e,n),t.setRenderTarget(o),t.render(this.scene,this.camera)}finally{t.setRenderTarget(o)}}}const $u=["gbc","virtualboy","film35","super8","camcorder","nightvision","ascii","macintosh","synthwave"];class b_{constructor(){this.size=new lt,this.lastCapture=-1/0,this.lastMode=""}init(t){var o,a,c;if(this.target)return;const e=(o=t.extensions)==null?void 0:o.has("EXT_color_buffer_float");this.target=new ui(1,1,{type:e?qi:Yn,depthBuffer:!0,minFilter:Ge,magFilter:Ge});const n=document.createElement("canvas");n.width=320,n.height=32;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,320,32),s.fillStyle="#fff",s.font="bold 28px monospace",s.textAlign="center",s.textBaseline="middle",[..." .:-=+*#%@"].forEach((l,h)=>s.fillText(l,h*32+16,16)),this.atlas=new xn(n),this.atlas.minFilter=this.atlas.magFilter=Ge,this.atlas.generateMipmaps=!1,this.material=new On({depthTest:!1,depthWrite:!1,uniforms:{film:{value:this.target.texture},atlas:{value:this.atlas},time:{value:0},pixels:{value:new lt(1,1)},resolution:{value:new lt(1,1)},mode:{value:0},strength:{value:1},asciiMode:{value:0},dither:{value:1},interlace:{value:0}},vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
  uniform sampler2D film,atlas;uniform vec2 pixels,resolution;uniform float time,strength,dither,interlace;uniform int mode,asciiMode;varying vec2 v;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float lum(vec3 c){return dot(c,vec3(.299,.587,.114));}
  float b2(vec2 p){return p.x<1.?(p.y<1.?0.:3.):(p.y<1.?2.:1.);}
  float bayer(vec2 p){return (4.*b2(mod(p,2.))+b2(mod(floor(p/2.),2.))+.5)/16.;}
  vec3 color(vec2 uv){gl_FragColor=vec4(texture2D(film,clamp(uv,0.,1.)).rgb,1.);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
   return gl_FragColor.rgb;
  }
  vec3 palette(float i){if(i<.5)return vec3(.07,.10,.17);if(i<1.5)return vec3(.25,.22,.37);if(i<2.5)return vec3(.20,.38,.52);if(i<3.5)return vec3(.25,.59,.69);if(i<4.5)return vec3(.55,.79,.79);if(i<5.5)return vec3(.18,.34,.23);if(i<6.5)return vec3(.38,.53,.28);if(i<7.5)return vec3(.66,.73,.36);if(i<8.5)return vec3(.47,.32,.23);if(i<9.5)return vec3(.71,.51,.33);if(i<10.5)return vec3(.86,.72,.48);if(i<11.5)return vec3(.96,.91,.71);if(i<12.5)return vec3(.65,.25,.28);if(i<13.5)return vec3(.87,.43,.37);if(i<14.5)return vec3(.55,.46,.66);return vec3(.89,.86,.91);}
  void main(){vec2 uv=v;float tick=floor(time*24.);vec2 p=floor(v*pixels);float grain=hash(floor(v*resolution)+vec2(tick,tick*.71))-.5;
   if(mode==3){uv+=(vec2(hash(vec2(tick,8.)),hash(vec2(9.,tick)))-.5)*.0025*strength;}
   vec3 c=color(uv),original=c;float l=lum(c),pattern=bayer(p)-.5;
   if(mode==0){vec3 source=c+pattern*.10*dither;vec3 best=vec3(0.);float distance=9.;for(int i=0;i<16;i++){vec3 ink=palette(float(i));float d=dot(source-ink,source-ink);if(d<distance){distance=d;best=ink;}}c=best;}
   else if(mode==1){float red=floor(clamp((l-.13)*1.32,0.,1.)*3.+.5)/3.;c=vec3(red,0.,0.);}
   else if(mode==2||mode==3){vec2 texel=1./pixels;vec3 blur=(color(uv+texel*vec2(2.,0.))+color(uv-texel*vec2(2.,0.))+color(uv+texel*vec2(0.,2.))+color(uv-texel*vec2(0.,2.)))*.25;
    c=mix(c,blur,mode==3?.24:.09);c=c*c*(3.-2.*c);c=mix(c,vec3(.025)+c*.96,.3);vec3 glow=max(blur-.72,0.);c+=glow*vec3(.21,.065,.035);
    c+=grain*(mode==3?.14:.055)*(1.-l*.45);c*=1.+(hash(vec2(tick,3.))-.5)*(mode==3?.075:.018);
    if(mode==3){c.r+=sin(tick*.27)*.012;c.b-=sin(tick*.19)*.01;float scratch=step(.989,hash(vec2(floor(uv.x*270.),floor(time*3.))));c+=scratch*.12;float dust=step(.998,hash(floor(uv*vec2(300.,200.))+tick));c-=dust*.28;c*=.83+.17*pow(max(0.,16.*uv.x*uv.y*(1.-uv.x)*(1.-uv.y)),.25);}
   }
   else if(mode==4){vec2 t=1./pixels;vec3 near=(color(uv+t)+color(uv-t))*.5;c+=(c-near)*.65;c.r=color(uv+vec2(t.x,0.)).r;c.b=color(uv-vec2(t.x,0.)).b;c=clamp((c-.035)*1.13,0.,1.);c+=grain*.06*(1.-l);c*=1.-interlace*.065*mod(p.y+mod(tick,2.),2.);}
   else if(mode==5){vec2 t=4./pixels;float halo=(lum(color(uv+t))+lum(color(uv-t))+lum(color(uv+vec2(t.x,-t.y))) )/3.;float gain=pow(max(l,0.),.55)*1.12+max(halo-.55,0.)*.7+grain*.09;float edge=(1.-smoothstep(.32,.78,length((uv-.5)*vec2(1.1,1.))));c=vec3(.12,1.,.22)*gain*mix(.25,1.,edge);}
   else if(mode==6){vec2 grid=vec2(max(24.,floor(pixels.x/7.)),max(16.,floor(pixels.y/12.)));vec2 cell=floor(v*grid),local=fract(v*grid);vec3 cellColor=color((cell+.5)/grid);float density=floor(clamp(lum(cellColor)*1.2,0.,.999)*10.);float glyph=texture2D(atlas,vec2((density+local.x)/10.,local.y)).r;c=glyph*(asciiMode==0?vec3(.22,1.,.4):asciiMode==1?vec3(1.):cellColor);}
   else if(mode==7){c=vec3(step(bayer(p),clamp((l-.5)*1.25+.5,0.,1.)));}
   else if(mode==8){vec3 shadow=vec3(.12,.025,.29),mid=vec3(.52,.06,.58),high=vec3(1.,.5,.26);vec3 neon=l<.5?mix(shadow,mid,l*2.):mix(mid,high,(l-.5)*2.);c=mix(c,neon,.67);vec2 t=3./pixels;vec3 bloom=max((color(uv+t)+color(uv-t))*.5-.65,0.);c+=bloom*vec3(.65,.15,.5);}
   // Discrete displays keep exact palettes; their intensity changes pixel density instead.
   if(mode!=0&&mode!=1&&mode!=6&&mode!=7)c=mix(original,c,strength);
   gl_FragColor=vec4(clamp(c,0.,1.),1.);
  }`}),this.scene=new Wr,this.camera=new Gr,this.quad=new le(new ae(2,2),this.material),this.scene.add(this.quad);const r=(a=t.debug)==null?void 0:a.onShaderError;try{t.debug&&(t.debug.onShaderError=()=>{throw Error("Visual filter shader unavailable")}),(c=t.compile)==null||c.call(t,this.scene,this.camera)}catch(l){throw this.dispose(),l}finally{t.debug&&(t.debug.onShaderError=r)}}render(t,e,n,s,r){this.target||this.init(t),t.getDrawingBufferSize(this.size);const{mode:o,intensity:a,asciiMode:c,dither:l,interlace:h,cadence:d}=r;let f=o==="gbc"?Math.round(288-144*a):o==="virtualboy"?Math.round(448-224*a):o==="macintosh"?Math.round(540-198*a):o==="ascii"?Math.round(720-360*a):o==="camcorder"?480:o==="super8"?540:720;f=Math.max(1,Math.min(f,this.size.y));const u=Math.max(1,Math.round(f*this.size.x/Math.max(1,this.size.y))),p=this.target.width!==u||this.target.height!==f;p&&this.target.setSize(u,f);const x=this.material.uniforms;x.pixels.value.set(u,f),x.resolution.value.copy(this.size),x.time.value=s,x.mode.value=$u.indexOf(o),x.strength.value=a,x.asciiMode.value=["green","mono","color"].indexOf(c),x.dither.value=l?1:0,x.interlace.value=h?1:0;const m=t.getRenderTarget();try{(o!=="super8"||!d||s-this.lastCapture>=1/18||this.lastMode!==o||p)&&(t.setRenderTarget(this.target),t.render(e,n),this.lastCapture=s),t.setRenderTarget(m),t.render(this.scene,this.camera),this.lastMode=o}finally{t.setRenderTarget(m)}}dispose(){var t,e,n,s;(t=this.target)==null||t.dispose(),(e=this.material)==null||e.dispose(),(n=this.atlas)==null||n.dispose(),(s=this.quad)==null||s.geometry.dispose(),this.target=null}}const Vc=[["off","ORIGINAL",""],["dmg","Game Boy DMG","RETRO GAMING"],["gbc","Game Boy Color","RETRO GAMING"],["virtualboy","Virtual Boy","RETRO GAMING"],["macintosh","Macintosh 1984","RETRO GAMING"],["vhs","VHS / CRT","ANALOG & CINEMA"],["film35","35mm Film","ANALOG & CINEMA"],["super8","Super 8","ANALOG & CINEMA"],["camcorder","Camcorder 2000 · OFICIAL","ANALOG & CINEMA"],["nightvision","Night Vision","EXPERIMENTAL"],["ascii","ASCII","EXPERIMENTAL"],["synthwave","Synthwave","EXPERIMENTAL"]],w_=()=>({mode:"camcorder",intensity:1,asciiMode:"green",dither:!0,interlace:!1,cadence:!1,overlay:!1});class E_{constructor(t=globalThis.localStorage){this.storage=t,this.settings=w_(),this.vhs=new y_,this.dmg=new S_,this.retro=new b_;try{this.configure(JSON.parse((t==null?void 0:t.getItem("motorama.visualFilters"))||"{}"))}catch{}this.error=""}get mode(){return this.settings.mode}configure(t={}){const e=t||{};Vc.some(n=>n[0]===e.mode)&&(this.settings.mode=e.mode),Number.isFinite(e.intensity)&&(this.settings.intensity=Math.max(0,Math.min(1,e.intensity))),["green","mono","color"].includes(e.asciiMode)&&(this.settings.asciiMode=e.asciiMode);for(const n of["dither","interlace","cadence","overlay"])typeof e[n]=="boolean"&&(this.settings[n]=e[n]);this.vhs.enabled=this.mode==="vhs",this.dmg.enabled=this.mode==="dmg"}save(){var t;try{return(t=this.storage)==null||t.setItem("motorama.visualFilters",JSON.stringify(this.settings)),!0}catch{return!1}}toggle(t){return Vc.some(e=>e[0]===t)?(this.configure({mode:this.mode===t?"off":t}),this.save(),this.mode===t):!1}prepare(t){try{this.retro.init(t)}catch{this.retroUnavailable=!0,this.error="Este dispositivo não suporta os filtros novos."}}render(t,e,n,s){try{if(this.settings.intensity===0||this.mode==="off")t.render(e,n);else if($u.includes(this.mode)){if(this.retroUnavailable)throw Error("unsupported");this.retro.render(t,e,n,s,this.settings)}else(this.dmg.enabled?this.dmg:this.vhs).render(t,e,n,s)}catch{this.error="Filtro indisponível neste dispositivo. Visual original restaurado.",this.configure({mode:"off"}),t.render(e,n)}}}class A_{constructor(t,e,n){this.filters=t,this.onOpen=e,this.onClose=n;const s=document.createElement("section");this.root=s,s.id="filter-menu",s.hidden=!0,s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label","Filtros visuais"),s.innerHTML=`<div class="filter-heading">${Br()}<small>MOTORAMA</small><h2>FILTROS VISUAIS</h2><p>PRÉVIA AO VIVO · a cena mostra sua escolha em tempo real.</p></div><label>FILTRO<select id="filter-choice"></select></label><label>INTENSIDADE <output id="filter-value"></output><input id="filter-intensity" type="range" min="0" max="100" step="5"></label><p id="filter-description"></p><div id="filter-options"></div><p id="filter-error" role="status"></p><div class="filter-buttons"><button id="filter-reset">RESTAURAR CAMCORDER</button><button id="filter-apply" class="primary">APLICAR E VOLTAR</button><button id="filter-cancel">CANCELAR</button></div>`,document.getElementById("arena").append(s);const r=s.querySelector("select");for(const o of["","RETRO GAMING","ANALOG & CINEMA","EXPERIMENTAL"]){const a=document.createElement(o?"optgroup":"option");if(o){a.label=o;for(const[c,l,h]of Vc)if(h===o){const d=new Option(l,c);a.append(d)}r.append(a)}else a.value="off",a.textContent="ORIGINAL · sem filtro",r.append(a)}r.onchange=()=>{t.configure({mode:r.value}),this.refresh()},this.el("intensity").oninput=o=>{t.configure({intensity:+o.target.value/100}),this.el("value").textContent=o.target.value+"%"},this.el("reset").onclick=()=>{t.configure({mode:"camcorder",intensity:1,asciiMode:"green",dither:!0,interlace:!1,cadence:!1,overlay:!1}),this.refresh()},this.el("apply").onclick=()=>{t.save(),this.close(!0)},this.el("cancel").onclick=()=>this.close(!1),this.overlay=document.createElement("div"),this.overlay.id="camcorder-overlay",this.overlay.hidden=!0,document.getElementById("arena").append(this.overlay),window.addEventListener("keydown",o=>{if(this.isOpen){if(o.stopImmediatePropagation(),o.code==="Escape")o.preventDefault(),this.close(!1);else if(o.code==="Tab"){const a=[...this.root.querySelectorAll("button,select,input")].filter(h=>!h.disabled),c=a[0],l=a.at(-1);o.shiftKey&&document.activeElement===c?(o.preventDefault(),l.focus()):!o.shiftKey&&document.activeElement===l&&(o.preventDefault(),c.focus())}}},!0)}el(t){return this.root.querySelector("#filter-"+t)}get isOpen(){return!this.root.hidden}open(){if(!this.isOpen){this.previous={...this.filters.settings},this.focus=document.activeElement,this.onOpen(),this.root.hidden=!1,document.body.classList.add("filter-editing"),this.inert=[...this.root.parentElement.children].filter(t=>t!==this.root).map(t=>[t,t.inert]);for(const[t]of this.inert)t.inert=!0;this.refresh(),this.el("choice").focus()}}close(t=!1){var e;if(this.isOpen){t||this.filters.configure(this.previous),this.root.hidden=!0,document.body.classList.remove("filter-editing");for(const[n,s]of this.inert)n.inert=s;this.onClose(),(e=this.focus)==null||e.focus()}}refresh(){const t=this.filters.settings;this.el("choice").value=t.mode,this.el("intensity").value=Math.round(t.intensity*100),this.el("value").textContent=Math.round(t.intensity*100)+"%",this.el("error").textContent=this.filters.error,this.el("description").textContent=["dmg","vhs"].includes(t.mode)?"Efeito clássico preservado. 0% desliga; demais valores mantêm a assinatura original.":["gbc","virtualboy","macintosh","ascii"].includes(t.mode)?"A intensidade ajusta a densidade de pixels. As cores do display permanecem puras.":"A intensidade ajusta a presença do efeito. O HUD permanece nítido.";const e=this.el("options");e.replaceChildren();for(const[n,s,r]of[["gbc","dither","Dithering"],["super8","cadence","Cadência de película · 18 FPS visuais"],["camcorder","interlace","Vídeo entrelaçado"],["camcorder","overlay","REC, data e bateria decorativos"]])if(t.mode===n){const o=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.checked=t[s],a.onchange=()=>this.filters.configure({[s]:a.checked}),o.append(a,document.createTextNode(r)),e.append(o)}if(t.mode==="ascii"){const n=document.createElement("label");n.textContent="TERMINAL";const s=document.createElement("select");for(const[r,o]of[["green","Green Terminal"],["mono","Monochrome"],["color","Color ASCII"]])s.add(new Option(o,r));s.value=t.asciiMode,s.onchange=()=>this.filters.configure({asciiMode:s.value}),n.append(s),e.append(n)}}update(t){const e=this.filters.settings;this.overlay.hidden=e.mode!=="camcorder"||!e.overlay||e.intensity===0,this.overlay.textContent=`● REC   ▰▰▰   20 NOV 2003
00:${String(Math.floor(t/60)%60).padStart(2,"0")}:${String(Math.floor(t)%60).padStart(2,"0")}`,this.isOpen&&(this.el("error").textContent=this.filters.error),document.body.dataset.vhs=e.mode==="vhs"?"on":"off",document.body.dataset.filter=e.mode}}class Ku{constructor(t){this.stage=t,this.reset()}reset(){this.complete=!1,this.progress=0,this.attempts=0,this.lastLanding=null}get title(){const t=this.stage.mission;return this.complete?"MISSÃO CONCLUÍDA":this.progress?t==null?void 0:t.nextTitle:t==null?void 0:t.title}get hint(){const t=this.stage.mission;return this.complete?"R para repetir a piscina. Ou siga para a fase 03.":this.progress?t==null?void 0:t.nextHint:t==null?void 0:t.hint}observe(t){var n,s;const e=this.stage.mission;return!e||(t.type==="launch"&&t.jump===e.jump&&this.attempts++,t.type==="reset"&&(this.complete=!1,this.progress=Math.min(this.progress,1),t.jump!==((n=this.stage.foamPit)==null?void 0:n.jump)&&(this.progress=0,this.lastLanding=null)),t.type==="landing"&&t.jump===e.jump&&t.onReception&&!t.manual&&(this.progress=1,this.lastLanding={speed:t.speed,quality:t.quality}),t.type!=="foamLanding"||t.pit!==e.finish||t.jump!==((s=this.stage.foamPit)==null?void 0:s.jump)||!this.progress||this.complete)?!1:(this.complete=!0,this.progress=2,!0)}}class T_{constructor(){this.slow=!1,this.time=0}get scale(){return this.slow?X.slowMotion.scale:1}toggle(){return this.slow=!this.slow,this.slow}advance(t,e=!1){const n=e?0:t*this.scale;return this.time+=n,n}}const No={chassisRadius:.27,riderRadius:.22,barRadius:.065,sweepStep:.18},Ds=i=>Math.max(0,Math.min(1,i));function R_(i,t,e,n){const s=t.clone().sub(i),r=n.clone().sub(e),o=i.clone().sub(e),a=s.dot(s),c=r.dot(r),l=r.dot(o);let h,d;if(a<1e-10&&c<1e-10)return o.lengthSq();if(a<1e-10)h=0,d=Ds(l/c);else{const f=s.dot(o);if(c<1e-10)d=0,h=Ds(-f/a);else{const u=s.dot(r),p=a*c-u*u;h=p>1e-10?Ds((u*l-f*c)/p):0,d=(u*h+l)/c,d<0?(d=0,h=Ds(-f/a)):d>1&&(d=1,h=Ds((u-f)/a))}}return o.addScaledVector(s,h).addScaledVector(r,-d).lengthSq()}function Hc(i){const t=new Ti().setFromEuler(new Un(0,i.heading+(i.trickYaw||0),0)).multiply(new Ti().setFromEuler(new Un(-i.pitch,-(i.whip||0),i.roll,"YXZ"))),e=(n,s,r)=>new R(n,s,r).applyQuaternion(t);return[[e(0,-.14,-.96),e(0,-.14,.99),No.chassisRadius],[e(0,.65,-.22),e(0,1.43,.06),No.riderRadius],[e(-.43,.7,.5),e(.43,.7,.5),No.barRadius]]}function C_(i,t,e=i,n=t,s=Hc(i),r=Hc(t)){const o=new R(e.x-n.x,e.y-n.y,e.z-n.z),a=new R(i.x-t.x,i.y-t.y,i.z-t.z),c=a.clone().sub(o);if(o.clone().addScaledVector(c,Ds(-o.dot(c)/(c.lengthSq()||1))).lengthSq()>16)return!1;const h=Math.max(1,Math.ceil(c.length()/No.sweepStep));for(let d=0;d<=h;d++){const f=o.clone().lerp(a,d/h);for(const[u,p,x]of s)for(const[m,g,v]of r)if(R_(u.clone().add(f),p.clone().add(f),m,g)<=(x+v)**2)return!0}return!1}function P_(i,t=[]){const e=i.filter(r=>!r.bike.crashed&&!(r.clearTime>4)),n=new Map(e.map(r=>[r,Hc(r.bike)])),s=[];for(let r=0;r<e.length;r++)for(let o=r+1;o<e.length;o++){const a=e[r],c=e[o];C_(a.bike,c.bike,t[a.id]||a.bike,t[c.id]||c.bike,n.get(a),n.get(c))&&s.push([a,c])}return s}const hr={riders:20,laps:3,countdown:3,trackTolerance:7,recoveryDelay:2.1},Rn={cornerSpeed:19,openCornerSpeed:25,straightSpeed:28,tightBend:.8,openBend:.38,headingLimit:.55,steeringGain:2.65,followingGap:8,followingWidth:1.2,reactionDelay:.06,reactionSpread:.055},To=(i,t)=>(i%t+t)%t,ks=i=>Number.isFinite(i)?`${Math.floor(i/60)}:${(i%60).toFixed(2).padStart(5,"0")}`:"—";class I_{constructor(){if(!["indoor","red-dirt"].includes(St.id))throw new Error("Esta fase não tem circuito de corrida.");const t=Vr(1),e=tn[0],n=e.z+e.checkpoint+6;let s=0,r=1/0;t.forEach((o,a)=>{const c=(o.x-e.x)**2+(o.z-n)**2;c<r&&(r=c,s=a)}),this.points=[...t.slice(s),...t.slice(0,s)],this.segments=[],this.length=0,this.points.forEach((o,a)=>{const c=this.points[(a+1)%this.points.length],l=c.x-o.x,h=c.z-o.z,d=Math.hypot(l,h);this.segments.push({...o,dx:l,dz:h,length:d,s:this.length}),this.length+=d})}at(t,e=0){t=To(t,this.length);let n=0,s=this.segments.length-1;for(;n<s;){const c=n+s+1>>1;this.segments[c].s<=t?n=c:s=c-1}const r=this.segments[n],o=(t-r.s)/r.length,a=Math.atan2(r.dx,r.dz);return{x:r.x+r.dx*o+Math.cos(a)*e,z:r.z+r.dz*o-Math.sin(a)*e,heading:a,index:n}}project(t,e){let n={distance:1/0};const s=this.segments.length,r=o=>{const a=this.segments[To(o,s)],c=qt(((t.x-a.x)*a.dx+(t.z-a.z)*a.dz)/(a.length*a.length),0,1),l=a.x+c*a.dx,h=a.z+c*a.dz,d=Math.hypot(t.x-l,t.z-h);d<n.distance&&(n={s:a.s+c*a.length,distance:d,index:To(o,s)})};if(e===void 0)for(let o=0;o<s;o++)r(o);else for(let o=e-35;o<=e+35;o++)r(o);return n}delta(t,e){return To(t-e+this.length/2,this.length)-this.length/2}}class L_{constructor(t,{laps:e=hr.laps,count:n=hr.riders,appearance:s,collisions:r=!0}={}){this.session=t,this.collisions=r,this.collisionCount=0,this.course=new I_,this.laps=e,this.time=0,this.countdown=hr.countdown,this.status="countdown",this.accumulator=0,this.finished=[],this.events=[],this.riders=Wu(s).slice(0,n).map((o,a)=>({...o,bike:a?new Xc:t.bike,progress:-4-Math.floor(a/4)*4,gridOffset:(a%4-1.5)*2.15,offset:(a%4-1.5)*1.65,lap:1,lapTimes:[],lapStart:0,finishedAt:null,recoveries:0,stuck:0}));for(const o of this.riders)this.place(o,o.progress,o.gridOffset);this.player=this.riders[0],this.originalRetry=t.retry,t.retry=()=>this.recover(this.player)}dispose(){this.session.retry=this.originalRetry}place(t,e,n=0){const s=this.course.at(e,n);t.bike.reset({id:"race",name:"CORRIDA · LINHA DE LARGADA",x:s.x,z:s.z,heading:s.heading,checkpoint:0}),t.bike.y=te(s.x,s.z)+.703,t.bike.pitch=Us(s.x,s.z,s.heading),t.bike.roll=Co(s.x,s.z,s.heading),t.projection=this.course.project(t.bike,s.index),t.lastS=t.projection.s,t.progress=e,t.offTrack=!1,t.stuck=0}recover(t=this.player){if(this.status!=="running"||t.finishedAt!==null)return;let e=t.progress-6;for(let n=0;n<70;n++,e--){const s=this.course.at(e);if(te(s.x,s.z)<.3&&Math.abs(Us(s.x,s.z,s.heading))<.12)break}for(let n=0;n<40;n++,e-=3){const s=this.course.at(e,t.offset);if(this.riders.every(r=>r===t||Math.hypot(r.bike.x-s.x,r.bike.z-s.z)>5))break}this.place(t,e,t.offset),t.recoveries++,t.id||this.session.events.push({type:"reset",jump:"race"})}inputFor(t){const e=t.bike,n=this.course.project(e,t.projection.index),s=n.s,r=this.course.at(s+12),o=this.course.at(s+30),a=this.course.at(s),c=Math.abs(Sn(Math.atan2(o.x-r.x,o.z-r.z)-Math.atan2(r.x-a.x,r.z-a.z))),l=Math.max(0,1-(t.progress+4)/40);let h=t.offset+(t.gridOffset-t.offset)*l;if(!e.airborne){(t.avoidUntil||0)<this.time&&(t.avoidOffset=0);for(const v of this.riders){if(v===t||v.bike.crashed||v.bike.speed>5)continue;const _=v.bike.x-e.x,M=v.bike.z-e.z,E=_*Math.sin(e.heading)+M*Math.cos(e.heading),A=_*Math.cos(e.heading)-M*Math.sin(e.heading);if(E>1&&E<13&&Math.abs(A)<1.15&&!t.avoidOffset){const P=[-2.1,2.1].filter(C=>Math.abs(h+C)<4.7).sort((C,b)=>Math.abs(h+C)-Math.abs(h+b));for(const C of P){const b=this.course.at(s+6,h+C);if(this.riders.every(S=>S===t||S===v||Math.hypot(S.bike.x-b.x,S.bike.z-b.z)>3)){t.avoidOffset=C,t.avoidUntil=this.time+2.1;break}}}}}h+=t.avoidOffset||0;const d=this.course.at(s+5+e.speed*.34,h),f=Sn(Math.atan2(d.x-e.x,d.z-e.z)-e.heading);let u=c>Rn.tightBend||Math.abs(f)>Rn.headingLimit?Rn.cornerSpeed:c>Rn.openBend?Rn.openCornerSpeed:Rn.straightSpeed-t.id%4*.08;const p=(e.x-a.x)*Math.cos(a.heading)-(e.z-a.z)*Math.sin(a.heading);if(!e.airborne)for(const v of this.riders){if(v===t||v.bike.crashed||v.bike.airborne||v.finishedAt!==null)continue;const _=this.course.delta(v.projection.s,s);if(_<=0||_>=Rn.followingGap)continue;const M=this.course.at(v.projection.s),E=(v.bike.x-M.x)*Math.cos(M.heading)-(v.bike.z-M.z)*Math.sin(M.heading)-p;Math.abs(E)<Rn.followingWidth&&(u=Math.min(u,Math.max(0,v.bike.speed-(Rn.followingGap-_)*2)))}const x=-f*Rn.steeringGain,m=qt(x,-1,1),g=!e.airborne&&e.contacts===2?qt((x-m)/X.drive.arrowSteering,-1,1):0;return{throttle:e.speed>u?0:1,brake:e.speed>u+1?1:0,steer:m,whip:g,flip:qa(e.x,e.z,10)?1:0}}measure(t){const e=this.course.project(t.bike,t.projection.index),n=this.course.delta(e.s,t.lastS),s=e.distance<hr.trackTolerance&&Math.abs(n)<1.5;if(t.offTrack=!s,t.projection=e,!s)return;t.progress+=n,t.lastS=e.s,Math.floor(Math.max(0,t.progress)/this.course.length)>=t.lap&&(t.lapTimes.push(this.time-t.lapStart),t.lapStart=this.time,t.lap++,t.id||this.events.push({type:"lap",lap:t.lap})),t.progress>=this.course.length*this.laps&&t.finishedAt===null&&(t.finishedAt=this.time,this.finished.push(t),this.events.push({type:"finish",rider:t.id}),t.id||(this.status="finished"))}step(t){if(this.status==="finished")return;if(this.countdown>0){this.countdown=Math.max(0,this.countdown-X.step),this.countdown<1e-6&&(this.countdown=0,this.status="running",this.events.push({type:"go"}));return}this.time+=X.step;const e=this.riders.map(n=>({x:n.bike.x,y:n.bike.y,z:n.bike.z}));this.session.step(t),this.measure(this.player);for(const n of this.riders.slice(1)){if(n.finishedAt!==null){(n.clearTime||0)<4&&(n.bike.step(this.inputFor(n)),n.projection=this.course.project(n.bike,n.projection.index)),n.clearTime=(n.clearTime||0)+X.step;continue}n.bike.step(this.time<Rn.reactionDelay+n.id%5*Rn.reactionSpread?{}:this.inputFor(n)),this.measure(n),n.stuck=n.bike.speed<2?n.stuck+X.step:0,(n.bike.crashTime>hr.recoveryDelay||n.stuck>4||n.offTrack)&&this.recover(n)}this.collide(e.map((n,s)=>this.riders[s].bike.crashTime===0&&Math.hypot(this.riders[s].bike.x-n.x,this.riders[s].bike.z-n.z)>2?this.riders[s].bike:n))}collide(t=[]){if(!this.collisions||this.status==="countdown")return[];const e=P_(this.riders,t),n=new Set(e.flat());for(const s of n){const r=s.bike.fall("CONTATO ENTRE PILOTOS");s.id||(this.session.events.push(r),this.session.crashes++)}return e.length&&(this.collisionCount+=e.length,this.events.push({type:"collision",pairs:e.map(s=>s.map(r=>r.id))})),e}advance(t,e={}){for(this.accumulator+=Math.min(t,.1);this.accumulator+1e-10>=X.step;)this.step(e),this.accumulator-=X.step}get ranking(){return[...this.riders].sort((t,e)=>t.finishedAt!==null&&e.finishedAt!==null?t.finishedAt-e.finishedAt:t.finishedAt!==null?-1:e.finishedAt!==null?1:e.progress-t.progress||t.id-e.id)}get position(){return this.ranking.indexOf(this.player)+1}get result(){return{position:this.position,time:this.player.finishedAt,laps:this.player.lapTimes,standings:this.ranking.map(t=>({name:t.name,number:t.number,time:t.finishedAt,progress:t.progress,player:!t.id}))}}}function D_(i,t){var s,r;let e=2166136261;const n=o=>{e=Math.imul(e^Math.round(o*1e5),16777619)};for(const o of["position","normal","uv"]){const a=(s=i.getAttribute(o))==null?void 0:s.array;if(a)for(const c of a)n(c)}if(i.index)for(const o of i.index.array)n(o);return`${i.getAttribute("position").count}:${((r=i.index)==null?void 0:r.count)||0}:${e}:${(t==null?void 0:t.start)||0}:${(t==null?void 0:t.count)||0}`}function U_(i,t){const e=new ie;for(const s of["position","normal","uv"]){const r=i.getAttribute(s);e.setAttribute(s,r?r.clone():new Lt(new Float32Array(i.getAttribute("position").count*2),2))}const n=i.index?Array.from(i.index.array):Array.from({length:i.getAttribute("position").count},(s,r)=>r);return e.setIndex(t?n.slice(t.start,t.start+t.count):n),e}function O_(i){const t=new Map,e=(n,s)=>{n.isMesh&&t.set(n,s),n.children.forEach((r,o)=>e(r,s.children[o]))};for(const n of i.crash.parts)e(n.source,n.visual);return t}class ll{constructor(t,e,{parent:n=t.scene,gate:s=!0}={}){this.race=e,this.root=new de,this.root.name="Pelotão · modelagem completa",n.add(this.root),this.models=[],this.entries=[],this.batches=[],this.lights=[];const r=new Map,o=new Map;for(const a of e.riders.slice(1)){const c=new $r(new de,a.appearance,a);this.models.push(c);const l=O_(c),h=new de;this.root.add(h),c.raceEffects=h,h.add(c.crash.puffs,c.crash.sparks,c.crash.flash),c.crash.light.visible=!1,c.root.traverse(d=>{var f;if(d.isMesh)for(const[u,p]of[].concat(d.material).entries()){const x=Array.isArray(d.material)?d.geometry.groups[u]:null,m=D_(d.geometry,x);o.has(m)||o.set(m,U_(d.geometry,x));const g=[((f=p.map)==null?void 0:f.uuid)||"",p.roughness,p.metalness,p.side,p.transparent,p.opacity,p.alphaTest,p.depthWrite,p.polygonOffset,p.polygonOffsetFactor].join(":");r.has(g)||r.set(g,{material:p,entries:[],geometries:new Map});const v=r.get(g),_={model:c,source:d,fragment:l.get(d),color:p.color.clone(),key:m};v.entries.push(_),v.geometries.set(m,o.get(m)),this.entries.push(_)}})}for(const a of r.values()){let c=0,l=0;for(const u of a.geometries.values())c+=u.attributes.position.count,l+=u.index.count;const h=a.material.clone();h.color.set("white");const d=new Ap(a.entries.length,c,l,h);d.castShadow=!0,d.receiveShadow=!0,d.name="Pilotos · peças compartilhadas",d.frustumCulled=!1,this.root.add(d),this.batches.push(d);const f=new Map;for(const[u,p]of a.geometries)f.set(u,d.addGeometry(p));for(const u of a.entries)u.batch=d,u.instance=d.addInstance(f.get(u.key)),d.setColorAt(u.instance,u.color)}for(const a of o.values())a.dispose();s&&this.gate(t),this.update()}gate(t){const e=this.race.course.at(0),n=new de;n.position.set(e.x,te(e.x,e.z),e.z),n.rotation.y=e.heading,this.root.add(n);const s=(l,h,d)=>{const f=new le(new gn(...l),new Gt({color:d}));return f.position.set(...h),n.add(f),f};for(const l of[-6.7,6.7])s([.24,5,.24],[l,2.5,0],"#34343d");const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle="#1e1e1e",o.fillRect(0,0,1024,256),Xi(o,170,0,684,165),o.fillStyle="white",o.font="bold 35px Arial",o.textAlign="center",o.fillText("MOTORAMA  /  LARGADA & CHEGADA",512,223);const a=new xn(r);a.colorSpace=be;const c=new le(new ae(13.5,2.3),new Gt({map:a,side:Re}));c.position.y=5.9,c.rotation.y=Math.PI,n.add(c);for(let l=-6;l<6;l+=.6)for(let h=-.6;h<.6;h+=.6)s([.6,.025,.6],[l+.3,.04,h],(Math.round(l/.6)+Math.round(h/.6))%2?"#edeae2":"#25292c");this.lights=Array.from({length:3},(l,h)=>s([.38,.38,.12],[(h-1)*.7,4.4,-.05],"#c43331"))}update(t=this.race){for(const[e,n]of t.riders.slice(1).entries()){const s=this.models[e],r=n.bike;s.crash.active&&(s.crash.time>r.crashTime||s.crash.serial!==r.crashSerial)&&s.crash.reset(),s.update(r,t.time||0),s.root.updateMatrixWorld(!0),s.crash.root.updateMatrixWorld(!0),s.raceVisible=!(n.clearTime>4),s.raceEffects.visible=s.raceVisible&&r.crashed}for(const e of this.entries){const n=e.model.crash.active&&e.fragment;e.batch.setMatrixAt(e.instance,(n||e.source).matrixWorld),e.batch.setVisibleAt(e.instance,e.model.raceVisible)}this.lights.forEach((e,n)=>{const s=t.status==="countdown"?3-Math.ceil(t.countdown)>=n?"#ff493e":"#4e2725":"#9de456";e.material.color.set(s),e.material.emissive.set(s).multiplyScalar(.6)})}dispose(){for(const s of this.models)s.dispose();const t=new Set,e=new Set,n=new Set;this.root.traverse(s=>{(s.isBatchedMesh||s.isInstancedMesh)&&s.dispose(),s.geometry&&t.add(s.geometry);for(const r of[].concat(s.material||[]))e.add(r),r.map&&n.add(r.map)}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),this.root.removeFromParent()}}const Nr=[{id:"race-indoor",discipline:"race",stage:"indoor",name:"01 / Estreia indoor",description:"20 pilotos. Três voltas. Termine entre os 10 primeiros.",objective:"TOP 10 · 3 VOLTAS",unlock:null},{id:"race-red",discipline:"race",stage:"red-dirt",name:"02 / Terra Vermelha",description:"Mesas e ondulações. Entre os 10 primeiros para fechar a etapa.",objective:"TOP 10 · 3 VOLTAS",unlock:"race-indoor"},{id:"style-desert",discipline:"freestyle",stage:"desert",name:"01 / Desert Market",description:"Acerte a recepção no caminhão e termine na piscina de espuma.",objective:"CAMINHÃO + ESPUMA",unlock:null},{id:"style-stadium",discipline:"freestyle",stage:"stadium",name:"02 / Panorama Big Air",description:"Três minutos para somar 1.500 pontos em manobras aterrissadas.",objective:"1.500 PONTOS · 3 MIN",unlock:"style-desert"}],Nh="motorama.career.v1";class N_{constructor(t){this.storage=t,this.records={};try{const e=JSON.parse((t==null?void 0:t.getItem(Nh))||"{}");for(const n of Nr){const s=e[n.id];s&&typeof s.complete=="boolean"&&(this.records[n.id]=s)}}catch{}}unlocked(t){var e;return!t.unlock||!!((e=this.records[t.unlock])!=null&&e.complete)}record(t,e){var r;if(!this.unlocked(t))return!1;const n=t.discipline==="race"?Number.isFinite(e.time)&&e.position<=10:!!e.complete,s=this.records[t.id]||{};this.records[t.id]={complete:n||!!s.complete,position:Math.min(s.position||20,e.position||20),time:Math.min(s.time||1/0,e.time||1/0),score:Math.max(s.score||0,e.score||0)};try{(r=this.storage)==null||r.setItem(Nh,JSON.stringify(this.records))}catch{}return n}get completed(){return Nr.filter(t=>{var e;return(e=this.records[t.id])==null?void 0:e.complete}).length}}class k_{constructor(t){this.event=t,this.time=0,this.score=0,this.remaining=180,this.finished=!1,this.complete=!1,this.poses=new Set}step(t,e){this.finished||(this.time+=t,e.airborne&&e.trickBlend>.55&&e.trickPose&&this.poses.add(e.trickPose),this.event.stage==="stadium"&&(this.remaining=Math.max(0,180-this.time),this.remaining||(this.finished=!0)))}observe(t,e=!1){if(!this.finished){if((t.type==="crash"||t.type==="reset")&&this.poses.clear(),t.type==="landing"&&t.manual&&this.poses.clear(),t.type==="landing"&&!t.manual||t.type==="foamLanding"){const n=(t.spin360?900:0)+this.poses.size*450;this.score+=(t.points||0)+Math.round(n*(t.quality==="skid"?.6:1)),this.poses.clear()}this.complete=this.event.stage==="desert"?e:this.score>=1500,this.complete&&(this.finished=!0)}}}class F_{constructor({career:t,start:e,open:n,close:s,garage:r}){this.career=t,this.start=e,this.onOpen=n,this.onClose=s,this.mode="practice",this.discipline="race",this.hasRide=!1,this.isOpen=!1,this.panel=document.createElement("section"),this.panel.id="main-menu",this.panel.hidden=!0,this.panel.setAttribute("role","dialog"),this.panel.setAttribute("aria-modal","true"),this.panel.setAttribute("aria-label","Menu principal Motorama"),this.panel.innerHTML=`<div class="menu-top"><div>${Br()}<span>FLIPERAMA / VOL. 04</span></div><div class="menu-top-actions"><button id="menu-garage">GARAGEM ↗</button><button id="menu-resume" hidden>CONTINUAR PILOTANDO ↗</button></div></div><div class="menu-hero"><small>TERRA. MOTOR. REPETE.</small><h2>MOTO<span>RAMA</span></h2><p>Encontre sua linha.<br>O próximo salto pode ser o melhor.</p></div><div class="mode-nav" aria-label="Modo de jogo"><button data-mode="career">Carreira <small>NA LARGADA. RUMO AO PÓDIO.</small></button><button data-mode="practice">Practice <small>SEM RELÓGIO. SÓ MAIS UM SALTO.</small></button><span id="career-save"></span></div><div id="career-disciplines" hidden><button data-discipline="race">CORRIDA</button><button data-discipline="freestyle">FREESTYLE</button><button disabled>ENDURO <small>EM BREVE</small></button></div><div id="menu-cards"></div><div class="menu-bottom"><span>VITOR / <b>04</b></span><span>W A S D · PILOTAR <i> / </i> SETAS · MANOBRAS <i> / </i> ESC · PAUSAR</span><span id="menu-footnote">QUATRO LUGARES. UMA MOTO.</span></div>`,document.getElementById("arena").append(this.panel),this.panel.querySelector("#menu-garage").onclick=r,this.panel.querySelector("#menu-resume").onclick=()=>this.hide();for(const o of this.panel.querySelectorAll("[data-mode]"))o.onclick=()=>{this.mode=o.dataset.mode,this.render()};for(const o of this.panel.querySelectorAll("[data-discipline]"))o.onclick=()=>{this.discipline=o.dataset.discipline,this.render()};window.addEventListener("keydown",o=>{if(this.isOpen&&(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyR","CapsLock","ShiftLeft","ShiftRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&o.stopImmediatePropagation(),o.code==="Escape"&&(o.preventDefault(),o.stopImmediatePropagation(),this.hasRide&&this.hide()),o.code==="Tab")){const a=[...this.panel.querySelectorAll("button:not([disabled])")].filter(h=>!h.hidden),c=a[0],l=a.at(-1);o.shiftKey&&document.activeElement===c?(o.preventDefault(),l.focus()):!o.shiftKey&&document.activeElement===l&&(o.preventDefault(),c.focus())}},!0)}show(t=!0){if(!this.isOpen){this.hasRide=t,this.isOpen=!0,this.onOpen(),this.panel.hidden=!1,document.getElementById("arena").classList.add("menu-open"),this.inert=[...document.getElementById("arena").children].filter(e=>e!==this.panel).map(e=>[e,e.inert]);for(const[e]of this.inert)e.inert=!0;this.render(),this.panel.querySelector(`[data-mode="${this.mode}"]`).focus()}}hide(){if(this.isOpen){this.isOpen=!1,this.panel.hidden=!0;for(const[t,e]of this.inert)t.inert=e;this.inert=[],document.getElementById("arena").classList.remove("menu-open"),this.onClose()}}render(){var n;this.panel.querySelector("#menu-resume").hidden=!this.hasRide;for(const s of this.panel.querySelectorAll("[data-mode]"))s.setAttribute("aria-pressed",String(s.dataset.mode===this.mode));for(const s of this.panel.querySelectorAll("[data-discipline]"))s.setAttribute("aria-pressed",String(s.dataset.discipline===this.discipline));this.panel.querySelector("#career-disciplines").hidden=this.mode!=="career",this.panel.querySelector("#career-save").textContent=`${this.career.completed} / 4 ETAPAS · PROGRESSO LOCAL`,this.panel.querySelector("#menu-footnote").textContent=this.mode==="practice"?"QUATRO LUGARES. UMA MOTO.":this.discipline==="race"?"TOP 10 ABRE A PRÓXIMA CORRIDA.":"POUSE AS MANOBRAS. COMPLETE AS MISSÕES.";const t=this.panel.querySelector("#menu-cards");t.replaceChildren(),t.classList.toggle("career-cards",this.mode==="career");const e=this.mode==="practice"?Bo.map(s=>({stage:s.id,name:s.name,description:s.description})):Nr.filter(s=>s.discipline===this.discipline);for(const s of e){const r=Bo.find(l=>l.id===s.stage),o=this.mode==="career"&&!this.career.unlocked(s),a=(n=this.career.records[s.id])==null?void 0:n.complete,c=document.createElement("button");c.className=`menu-card ${r.theme}`,c.disabled=o,c.innerHTML=`<span class="stage-illustration" aria-hidden="true"><span>${r.number}</span></span><span class="card-text"><small>${s.objective||r.tag}</small><strong>${s.name}</strong><span>${s.description}</span><b>${o?"CONCLUA A ETAPA 01":a?"✓ CONCLUÍDA · JOGAR NOVAMENTE ↗":this.mode==="practice"?"PILOTAR ↗":"LARGAR ↗"}</b></span>`,c.onclick=()=>{this.hide(),this.start({mode:this.mode,stage:r.id,event:this.mode==="career"?s:null})},t.append(c)}}}class z_{constructor(){this.nextBeat=0,this.beat=0}update(t,e,n,s=t==null?void 0:t.destination){if(!t)return;this.bus||(this.bus=t.createGain(),this.bus.gain.value=0,this.bus.connect(s));const r=Math.hypot(n.x+80,n.z-18),o=e?.035*Math.max(.08,1-r/150):0;if(this.bus.gain.setTargetAtTime(o,t.currentTime,.2),!e){this.nextBeat=t.currentTime;return}const a=t.currentTime;if(this.nextBeat>a+.1)return;const c=Math.max(a,this.nextBeat),l=this.beat++%16;this.nextBeat=c+.3;const h=(x,m,g,v,_=x)=>{const M=t.createOscillator(),E=t.createGain();M.type=m,M.frequency.setValueAtTime(x,c),M.frequency.exponentialRampToValueAtTime(_,c+g),E.gain.setValueAtTime(v,c),E.gain.exponentialRampToValueAtTime(.001,c+g),M.connect(E).connect(this.bus),M.start(c),M.stop(c+g),M.onended=()=>{M.disconnect(),E.disconnect()}},d=[82.41,82.41,98,82.41,110,98,82.41,73.42][Math.floor(l/2)];if(h(d,"sawtooth",.24,.42),h(d*1.5,"triangle",.22,.22),l%4===0&&h(130,"sine",.16,1,35),!this.noise){this.noise=t.createBuffer(1,Math.floor(t.sampleRate*.13),t.sampleRate);const x=this.noise.getChannelData(0);for(let m=0;m<x.length;m++)x[m]=(Math.random()*2-1)*(1-m/x.length)**3}const f=t.createBufferSource(),u=t.createGain(),p=t.createBiquadFilter();f.buffer=this.noise,p.type="highpass",p.frequency.value=l%4===2?650:6e3,u.gain.value=l%4===2?.55:.18,f.connect(p).connect(u).connect(this.bus),f.start(c),f.onended=()=>{f.disconnect(),p.disconnect(),u.disconnect()}}}const B_=""+new URL("engine-worklet-Die6I56W.js",import.meta.url).href,kh={kawasaki:{name:"KX / 2T",character:"Encorpado · escape grave",idle:1950,redline:10800,body:285,bark:790,rasp:2140,pipe:.0037,ring:.76,grit:.24,intake:.19,level:1.05,seed:104},yamaha:{name:"YZ / 2T",character:"Agudo · giro solto",idle:2250,redline:12400,body:385,bark:1130,rasp:2920,pipe:.0028,ring:.82,grit:.19,intake:.26,level:.96,seed:211},honda:{name:"CR / 2T",character:"Seco · ataque forte",idle:2050,redline:11200,body:315,bark:930,rasp:2480,pipe:.0032,ring:.63,grit:.34,intake:.16,level:1.03,seed:318},ktm:{name:"SX / 2T",character:"Metálico · médio presente",idle:2100,redline:11700,body:345,bark:1020,rasp:3290,pipe:.003,ring:.91,grit:.28,intake:.23,level:.97,seed:425},suzuki:{name:"RM / 2T",character:"Rasgado · resposta rápida",idle:2200,redline:12100,body:365,bark:1260,rasp:2670,pipe:.0026,ring:.72,grit:.38,intake:.21,level:.98,seed:532}},hl=i=>kh[i]||kh.kawasaki,Ju={engine:.78,rivals:.46,ambience:.45,music:.5},si=(i,t,e)=>Math.max(t,Math.min(e,Number.isFinite(i)?i:t));class V_{constructor(t="kawasaki"){this.setProfile(t)}setProfile(t){this.profile=hl(t),this.rpm=this.profile.idle,this.gear=0,this.shift=0,this.cooldown=0,this.load=0,this.throttle=0,this.previousSpeed=0,this.initialized=!1}update(t,e={},n={}){t=si(t,0,.1);const s=this.profile,r=si(n.throttle||0,0,1),o=si(n.brake||0,0,1),a=Number.isFinite(e.speed)?e.speed:Math.hypot(e.vx||0,e.vz||0),c=e.airborne?Math.max(0,e.rearWheelSpeed||0):a/.39,l=[31,24,19,15.5,13.2],h=c*60/(Math.PI*2);if(!this.initialized){const m=a/.39*60/(Math.PI*2);for(;this.gear<l.length-1&&m*l[this.gear]>s.redline*.85;)this.gear++;this.previousSpeed=a,this.initialized=!0}if(this.shift=Math.max(0,this.shift-t),this.cooldown=Math.max(0,this.cooldown-t),!e.airborne&&!this.cooldown){const m=h*l[this.gear];m>s.redline*.9&&r>.25&&this.gear<l.length-1?(this.gear++,this.shift=.115,this.cooldown=.45):this.gear>0&&m<s.redline*.47&&(this.gear--,this.shift=.075,this.cooldown=.35)}a<.5&&!e.airborne&&r<.1&&(this.gear=0);const d=t?(a-this.previousSpeed)/t:0;this.previousSpeed=a;const f=s.idle+r*(e.airborne?2300:3500),u=h*l[this.gear],p=e.crashed||e.foam?s.idle:si(Math.max(f,u)-o*850,s.idle*.85,s.redline*1.035);this.rpm+=(p-this.rpm)*(1-Math.exp(-t/(this.shift>0?.045:e.airborne?.095:.12))),this.throttle+=(r-this.throttle)*(1-Math.exp(-t/.045));const x=e.crashed||e.foam?0:r*(e.airborne?.34:.68+si(d/20,-.15,.32));return this.load+=(x-this.load)*(1-Math.exp(-t/.075)),{rpm:this.rpm,throttle:this.throttle,load:this.load,cut:this.shift>0?.82:0,gear:this.gear+1,overrun:r<.1&&this.rpm>s.idle*1.7?1:0}}}function H_(i){let t;try{t=JSON.parse(i==null?void 0:i.getItem("motorama.audio.v1"))}catch{}return Object.fromEntries(Object.entries(Ju).map(([e,n])=>[e,Number.isFinite(t==null?void 0:t[e])?si(t[e],0,1):n]))}const Vn=(i,t,e,n=.045)=>i.setTargetAtTime(t,e,n);class Fh{constructor(t,e,n,s=0){this.profile=n,this.drive=new V_(n),this.node=new AudioWorkletNode(t,"motorama-two-stroke",{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[1],processorOptions:{profile:n,seed:s}}),this.node.port.onmessage=({data:r})=>{this.dsp=r},this.filter=t.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=7e3,this.filter.Q.value=.5,this.pan=t.createStereoPanner(),this.gain=t.createGain(),this.gain.gain.value=0,this.node.connect(this.filter).connect(this.pan).connect(this.gain).connect(e),this.ctx=t,this.state={}}update(t,e,n,{volume:s=1,pan:r=0,pitch:o=1,distance:a=0,playing:c=!0}={}){const l=this.drive.update(t,e,n);return this.state=l,this.node.port.postMessage({...l,pitch:o,level:c&&!e.crashed&&!e.foam?1:0}),Vn(this.gain.gain,s,this.ctx.currentTime),Vn(this.pan.pan,r,this.ctx.currentTime,.08),Vn(this.filter.frequency,7e3/(1+a*.055),this.ctx.currentTime,.08),l}mute(){this.node.port.postMessage({...this.state,level:0})}dispose(){Vn(this.gain.gain,0,this.ctx.currentTime,.018),setTimeout(()=>{this.node.port.postMessage({dispose:!0}),this.node.port.close(),this.node.disconnect(),this.filter.disconnect(),this.pan.disconnect(),this.gain.disconnect()},130)}}class G_{constructor({storage:t,onError:e=()=>{}}={}){this.storage=t,this.onError=e,this.mix=H_(t),this.enabled=!1,this.rivals=new Map,this.ready=!1,this.preview=null,this.mode=null,this.accumulator=0}start(){var t;if(this.pending)return(t=this.ctx)==null||t.resume().catch(()=>{}),this.pending;try{this.ctx=new AudioContext({latencyHint:"interactive"});const e=this.ctx.resume();return this.pending=(async()=>(await e,await this.initialize(),!0))().catch(n=>this.failed(n)),this.pending}catch(e){return Promise.resolve(this.failed(e))}}failed(t){var e;return this.ready=!1,this.pending=null,this.enabled=!1,this.stopPreview(),(e=this.ctx)==null||e.close().catch(()=>{}),this.ctx=null,this.onError(t),!1}async initialize(){var a;const t=this.ctx;await t.audioWorklet.addModule(B_),this.master=t.createGain(),this.master.gain.value=.8;const e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=8,e.ratio.value=4,e.attack.value=.004,e.release.value=.14;const n=t.createBiquadFilter();n.type="highpass",n.frequency.value=38,n.Q.value=.5;const s=t.createBiquadFilter();s.type="peaking",s.frequency.value=3400,s.Q.value=.7,s.gain.value=-2,n.connect(s).connect(e).connect(this.master).connect(t.destination),this.buses={};for(const c of["engine","rivals","ambience","music","effects"]){const l=t.createGain();l.gain.value=c==="effects"?.65:this.mix[c],l.connect(n),this.buses[c]=l}this.room=t.createConvolver();const r=t.createBuffer(2,Math.ceil(t.sampleRate*.29),t.sampleRate);let o=7404;for(let c=0;c<2;c++){const l=r.getChannelData(c);for(let h=0;h<l.length;h++)o=Math.imul(o,1664525)+1013904223|0,l[h]=((o>>>0)/2147483648-1)*Math.exp(-h/(t.sampleRate*.047))*.18,h<t.sampleRate*.014&&(l[h]=0)}this.room.buffer=r,this.wet=t.createGain(),this.wet.gain.value=0,this.buses.engine.connect(this.room),this.buses.rivals.connect(this.room),this.room.connect(this.wet).connect(n),this.analyser=t.createAnalyser(),this.analyser.fftSize=1024,this.master.connect(this.analyser),this.meter=new Float32Array(1024),this.ready=!0,Vn(this.master.gain,this.enabled||(a=this.preview)!=null&&a.active?.8:0,t.currentTime)}async enable(t){return this.enabled=!!t,t?this.start():(this.ready&&Vn(this.master.gain,0,this.ctx.currentTime,.025),this.stopPreview(),!0)}setMix(t,e){var n;if(t in Ju){this.mix[t]=si(Number(e),0,1);try{(n=this.storage)==null||n.setItem("motorama.audio.v1",JSON.stringify(this.mix))}catch{}this.ready&&Vn(this.buses[t].gain,this.mix[t],this.ctx.currentTime)}}async audition(t){this.stopPreview(),this.peakHold=0,this.rpmHold=0;const e={profile:t,active:!0,start:null};this.preview=e,!(!await this.start()||this.preview!==e)&&(e.start=this.ctx.currentTime)}stopPreview(){this.preview&&(this.preview.active=!1),this.preview=null}reset(){var t;(t=this.player)==null||t.drive.setProfile(this.player.profile);for(const e of this.rivals.values())e.drive.setProfile(e.profile);this.mode=null}update(t,{bike:e,input:n={},profile:s="kawasaki",playing:r=!1,scale:o=1,theme:a="indoor",riders:c=[],heading:l=(e==null?void 0:e.heading)||0,mode:h="live"}={}){var m,g;if(!this.ready||(this.accumulator+=t,this.accumulator<1/30))return;t=Math.min(this.accumulator,.1),this.accumulator=0;const d=this.ctx,f=this.preview;if(f!=null&&f.active&&f.start!==null){const v=d.currentTime-f.start;if(v>5.2)this.stopPreview();else{s=f.profile,h="preview",r=!0,o=1,c=[];const _=v>.65&&v<1.05?.65:v>1.55&&v<2?.85:v>2.45&&v<3.65?1:0;e={speed:0,rearWheelSpeed:_*40,airborne:!0},n={throttle:_}}}const u=r&&(this.enabled||!!((m=this.preview)!=null&&m.active))&&!document.hidden;this.audible=u,Vn(this.master.gain,u?.8:0,d.currentTime,.035),Vn(this.wet.gain,a==="stadium"?.065:a==="indoor"?.04:0,d.currentTime,.2),Vn(this.buses.music.gain,this.mix.music*(1-(u&&n.throttle||0)*.2),d.currentTime,.2),(!this.player||this.player.profile!==s)&&((g=this.player)==null||g.dispose(),this.player=new Fh(d,this.buses.engine,s)),h!==this.mode&&(this.player.drive.setProfile(s),this.mode=h),this.player.update(t*o,e,n,{volume:.84,pitch:Math.sqrt(o),playing:u}),this.rpmHold=Math.max(this.rpmHold||0,this.player.drive.rpm);const p=u&&h==="live"?c.filter(v=>v.id&&!v.bike.crashed).map(v=>({r:v,d:Math.hypot(v.bike.x-e.x,v.bike.y-e.y,v.bike.z-e.z)})).filter(v=>v.d<38).sort((v,_)=>v.d-(this.rivals.has(v.r.id)?2:0)-(_.d-(this.rivals.has(_.r.id)?2:0))).slice(0,4):[],x=new Set(p.map(({r:v})=>v.id));for(const[v,_]of this.rivals)x.has(v)||(_.dispose(),this.rivals.delete(v));for(const{r:v,d:_}of p){let M=this.rivals.get(v.id);M&&M.profile!==v.appearance.bike&&(M.dispose(),M=null),M||(M=new Fh(d,this.buses.rivals,v.appearance.bike,v.id*971),this.rivals.set(v.id,M));const E=v.bike,A=Number.isFinite(E.speed)?E.speed:Math.hypot(E.vx||0,E.vz||0),P=E.airborne?.8:si(.4+(A-M.drive.previousSpeed)/Math.max(t,.001)*.08,0,1),C=E.x-e.x,b=E.z-e.z,S=C*Math.cos(l)-b*Math.sin(l),L=((E.vx-e.vx)*C+(E.vz-e.vz)*b)/Math.max(1,_),O=si(343/(343+L),.9,1.1);M.update(t*o,E,{throttle:P},{volume:.5/(1+_/5)**1.35,pan:si(-S/Math.max(5,_),-.95,.95),distance:_,pitch:Math.sqrt(o)*O,playing:u})}}silence(){var t;if(this.stopPreview(),this.ready){Vn(this.master.gain,0,this.ctx.currentTime,.02),(t=this.player)==null||t.mute();for(const e of this.rivals.values())e.mute()}}diagnostics(){var n,s,r,o,a,c,l;if(!this.ready)return{ready:!1,enabled:this.enabled,context:((n=this.ctx)==null?void 0:n.state)||"off"};this.analyser.getFloatTimeDomainData(this.meter);let t=0,e=0;for(const h of this.meter)t=Math.max(t,Math.abs(h)),e+=h*h;return this.peakHold=Math.max(this.peakHold||0,t),{ready:!0,enabled:this.enabled,audible:this.audible,context:this.ctx.state,profile:(s=this.player)==null?void 0:s.profile,character:hl((r=this.player)==null?void 0:r.profile).character,rpm:Math.round(((o=this.player)==null?void 0:o.drive.rpm)||0),maxRpm:Math.round(this.rpmHold||0),gear:(((a=this.player)==null?void 0:a.drive.gear)||0)+1,load:Number((((c=this.player)==null?void 0:c.drive.load)||0).toFixed(2)),rivals:this.rivals.size,preview:!!this.preview,peak:Number(t.toFixed(4)),peakHold:Number(this.peakHold.toFixed(4)),rms:Number(Math.sqrt(e/this.meter.length).toFixed(4)),dsp:(l=this.player)==null?void 0:l.dsp,mix:this.mix}}}function W_(i,{toggle:t,qa:e=!1}={}){const n=document.createElement("details");n.className="audio-settings",n.innerHTML='<summary>SOM & MIXAGEM +</summary><button id="audio-enabled">ATIVAR SOM</button>';for(const[r,o]of[["engine","Minha moto"],["rivals","Outras motos"],["ambience","Ambiente / show"]]){const a=document.createElement("label");a.innerHTML=`<span>${o}</span><input type="range" min="0" max="100" step="1" aria-label="Volume ${o.toLowerCase()}" value="${Math.round(i.mix[r]*100)}"><output>${Math.round(i.mix[r]*100)}%</output>`;const c=a.querySelector("input");c.oninput=()=>{i.setMix(r,Number(c.value)/100),a.querySelector("output").textContent=c.value+"%"},n.append(a)}document.querySelector(".pause-controls").after(n),n.querySelector("button").onclick=t;let s;return e&&(s=document.createElement("output"),s.id="audio-qa-state",s.setAttribute("aria-label","Diagnóstico do áudio"),document.getElementById("arena").append(s)),{update(){const r=n.querySelector("button");r.textContent=i.enabled?"DESATIVAR SOM":"ATIVAR SOM",r.setAttribute("aria-pressed",String(i.enabled));const o=document.getElementById("garage-engine-preview");o&&(o.textContent=i.preview?"■ PARAR MOTOR":"▶ OUVIR MOTOR",o.setAttribute("aria-label",i.preview?"Parar prévia do motor":"Ouvir motor selecionado"),o.setAttribute("aria-pressed",String(!!i.preview))),s&&(s.textContent=JSON.stringify(i.diagnostics()))}}}const X_={seconds:300,hz:30,minDuration:1},Wn=["x","y","z","vx","vy","vz","heading","pitch","roll","whip","trickYaw","barAngle","rearSpin","frontSpin","spin","impact","manual","trickBlend","crashTime","crashSerial","foamSerial","steer","skid","rearWheelSpeed","airTime"],cs=Wn,Gc=cs.length+5,Zu=new Set(["heading","pitch","roll","trickYaw"]),Ga=Math.PI*2,Wc=(i,t,e)=>Math.max(t,Math.min(e,i)),ju=i=>((i+Math.PI)%Ga+Ga)%Ga-Math.PI,Ln=(i,t,e)=>i+(t-i)*e,mr=i=>Number.isFinite(i)?i:0;function ur(i){const t=Math.max(0,Math.floor(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function q_(i){const t=new Float32Array(Wn.length+10);Wn.forEach((n,s)=>t[s]=mr(i[n])),t[Wn.length]=i.compression[0],t[Wn.length+1]=i.compression[1];for(let n=0;n<2;n++){const s=i.wheels[n]||{};t.set([mr(s.x),mr(s.y),mr(s.z),+!!s.grounded],Wn.length+2+n*4)}const e=i.foam?Object.fromEntries(["x","y","z","vx","vz","impact","time"].map(n=>[n,i.foam[n]])):null;return{values:t,airborne:!!i.airborne,crashed:!!i.crashed,pose:i.trickPose,poseMix:i.trickPoseMix?{...i.trickPoseMix}:null,foam:e}}function Y_(i,t,e){const n={};Wn.forEach((s,r)=>n[s]=i.values[r]+(Zu.has(s)?ju(t.values[r]-i.values[r]):t.values[r]-i.values[r])*e);for(const s of["crashSerial","foamSerial"])n[s]=i.values[Wn.indexOf(s)];return n.compression=[0,1].map(s=>Ln(i.values[Wn.length+s],t.values[Wn.length+s],e)),n.wheels=[0,1].map(s=>{const r=Wn.length+2+s*4;return{x:Ln(i.values[r],t.values[r],e),y:Ln(i.values[r+1],t.values[r+1],e),z:Ln(i.values[r+2],t.values[r+2],e),grounded:!!i.values[r+3]}}),Object.assign(n,{airborne:i.airborne,crashed:i.crashed,trickPose:i.pose,trickPoseMix:i.poseMix?{...i.poseMix}:null,foam:i.foam?{...i.foam}:null}),n.speed=Math.hypot(n.vx,n.vz),n}function $_(i){if(!i)return null;const t=new Float32Array((i.riders.length-1)*Gc);return i.riders.slice(1).forEach((e,n)=>{const s=e.bike;t.set([...cs.map(r=>mr(s[r])),...s.compression,+s.crashed,e.clearTime||0,+s.airborne],n*Gc)}),{values:t,status:i.status,countdown:i.countdown}}function K_(i,t,e){if(!i)return null;t=t||i;const n=[null];for(let s=0;s<i.values.length;s+=Gc){const r=Math.hypot(i.values[s]-t.values[s],i.values[s+2]-t.values[s+2])>8||i.values[s+cs.indexOf("crashSerial")]!==t.values[s+cs.indexOf("crashSerial")]?0:e,o={};cs.forEach((c,l)=>o[c]=i.values[s+l]+(Zu.has(c)?ju(t.values[s+l]-i.values[s+l]):t.values[s+l]-i.values[s+l])*r);const a=s+cs.length;o.compression=[Ln(i.values[a],t.values[a],r),Ln(i.values[a+1],t.values[a+1],r)],o.crashed=!!i.values[a+2],o.airborne=!!i.values[a+4],o.crashSerial=i.values[s+cs.indexOf("crashSerial")],o.trickPose=null,n.push({bike:o,clearTime:i.values[a+3]})}return{riders:n,status:i.status,countdown:Ln(i.countdown,t.countdown,e)}}class J_{constructor(t={}){this.options={...X_,...t},this.capacity=Math.ceil(this.options.seconds*this.options.hz)+4,this.clear()}clear(){this.frames=new Array(this.capacity),this.first=0,this.count=0,this.time=0,this.segment=0,this.pending=!0}getFrame(t){return this.frames[(this.first+t)%this.capacity]}get start(){return this.count?this.getFrame(0).at:0}get end(){return this.count?this.getFrame(this.count-1).at:0}get duration(){return this.end-this.start}get ready(){return this.count>1&&this.duration>=this.options.minDuration}markCut(){this.segment++,this.pending=!0}record(t,e,n,s,r=null,{force:o=!1}={}){if(t<=0&&!o)return!1;this.time+=Math.max(0,t);const a=this.count?this.getFrame(this.count-1):null;if(!o&&!this.pending&&a&&this.time-a.at<1/this.options.hz-1e-7)return!1;const c={at:this.time,visualTime:s,segment:this.segment,bike:q_(e),input:{throttle:n.throttle||0,brake:n.brake||0},race:$_(r)};for(a&&Math.abs(a.at-c.at)<1e-8?this.frames[(this.first+this.count-1)%this.capacity]=c:(this.count===this.capacity&&(this.first=(this.first+1)%this.capacity,this.count--),this.frames[(this.first+this.count++)%this.capacity]=c);this.count>1&&c.at-this.start>this.options.seconds+1e-7;)this.frames[this.first]=void 0,this.first=(this.first+1)%this.capacity,this.count--;return this.pending=!1,!0}sample(t){if(!this.count)return null;const e=Wc(this.start+t,this.start,this.end);let n=0,s=this.count-1;for(;n<s;){const l=Math.ceil((n+s)/2);this.getFrame(l).at<=e+1e-9?n=l:s=l-1}const r=this.getFrame(n),o=this.getFrame(Math.min(n+1,this.count-1)),c=r.segment!==o.segment||Math.hypot(r.bike.values[0]-o.bike.values[0],r.bike.values[2]-o.bike.values[2])>8||o.at===r.at?0:Wc((e-r.at)/(o.at-r.at),0,1);return{at:e,segment:r.segment,visualTime:Ln(r.visualTime,o.visualTime,c),bike:Y_(r.bike,o.bike,c),input:{...r.input},race:K_(r.race,o.race,c)}}}class Z_{constructor(t){this.recording=t,this.position=0,this.speed=1,this.playing=!0,this.revision=0}seek(t){return this.position=Wc(t,0,this.recording.duration),this.revision++,this.position>=this.recording.duration&&(this.playing=!1),this.frame}get frame(){return this.recording.sample(this.position)}toggle(){!this.playing&&this.position>=this.recording.duration&&this.seek(0),this.playing=!this.playing}advance(t){return this.playing&&(this.position=Math.min(this.recording.duration,this.position+Math.max(0,t)*this.speed),this.position>=this.recording.duration&&(this.playing=!1)),this.frame}}function j_(i,t,e=()=>0,n=0){const s=i.bike,r=(t==null?void 0:t.segment)===i.segment?t.bike:s,o=s.speed>2?Math.atan2(s.vx,s.vz):s.heading,a=(Math.floor(i.at/8)+n)%3,c=[-2.2,-1.35,2.25],l=o+c[a],h=!!(s.foam||r.foam),d=Math.max(0,s.y-e(s.x,s.z)),f=h?15:9+Math.min(s.speed*.15,4)+(s.crashed?3:0),u={x:Ln(s.x,r.x,.12)+Math.sin(o)*.8,y:s.y+.65,z:Ln(s.z,r.z,.12)+Math.cos(o)*.8},p={x:s.x+Math.sin(l)*f,y:s.y+(h?12:a===1?3:5)+d*.1,z:s.z+Math.cos(l)*f};p.y=Math.max(p.y,e(p.x,p.z)+2);for(let x=.1;x<.96;x+=.1){const m=e(Ln(p.x,u.x,x),Ln(p.z,u.z,x))+.25;p.y=Math.max(p.y,(m-u.y*x)/(1-x))}return{position:p,look:u,fov:48,shot:a,name:["TRÊS QUARTOS","LATERAL","FRENTE / TRÊS QUARTOS"][a]}}class Q_{constructor(t){this.view=t,this.root=new de,this.root.name="Replay cinematográfico",t.scene.add(this.root),this.bike=new $r(this.root,t.bike.appearance),this.raceVisuals=t.raceVisuals?new ll(t,t.raceVisuals.race,{parent:this.root,gate:!1}):null,this.effects=new qu(this.root),this.foam=t.foam?new Xu(this.root,t.foam.pit):null,this.root.visible=!1}enter(){var e,n;const t=this.view;this.saved={raceVisuals:t.raceVisuals,bike:t.bike,effects:t.effects,foam:t.foam,inspection:t.inspection,camHeading:t.camHeading,initial:t.initial,snap:t.snap,camera:t.camera.clone()},this.visibility=[t.bike.root,t.bike.crash.root,t.effects.mesh,t.effects.gritMesh,(e=t.foam)==null?void 0:e.mesh,(n=t.raceVisuals)==null?void 0:n.root].filter(Boolean).map(s=>[s,s.visible]);for(const[s]of this.visibility)s.visible=!1;Object.assign(t,{raceVisuals:this.raceVisuals,bike:this.bike,effects:this.effects,foam:this.foam,inspection:null}),this.root.visible=!0,this.previous=null,this.revision=-1}resetEffects(){var t;this.bike.crash.reset(),this.effects.reset(),this.effects.seed=714,this.effects.index=this.effects.gritIndex=0,(t=this.foam)==null||t.reset()}render(t,e,n=0){var d;const s=t.frame;if(!s)return;const r=this.revision!==t.revision||!this.previous||this.previous.segment!==s.segment,o=r?0:Math.max(0,s.at-this.previous.at);if(r){this.resetEffects();const f=Math.max(0,t.position-(this.foam?7:1.5));for(let u=f;u<t.position-1/60;u+=1/30){const p=t.recording.sample(u);p.segment===s.segment&&(this.bike.update(p.bike,p.visualTime),this.effects.update(p.bike,this.bike,1/30,p.input,this.view.camera),(d=this.foam)==null||d.update(p.bike,1/30))}}this.bike.crash.active&&this.bike.crash.time>s.bike.crashTime+1e-7&&this.bike.crash.reset(),this.bike.update(s.bike,s.visualTime);const a=t.recording.sample(t.position+.4),c=s.bike.crashed?this.bike.crash.focus:null,l=c?{...s,bike:{...s.bike,x:c.x,y:c.y,z:c.z}}:s,h=j_(l,c?null:a,te,n);return this.view.render(s.bike,e,s.visualTime,s.input,o,s.visualTime,{camera:h,race:s.race}),this.previous=s,this.revision=t.revision,this.cameraName=h.name,s}dispose(){var s;(s=this.raceVisuals)==null||s.dispose(),this.bike.dispose();const t=new Set,e=new Set,n=new Set;this.root.traverse(r=>{r.isInstancedMesh&&r.dispose(),r.geometry&&t.add(r.geometry);for(const o of[].concat(r.material||[])){e.add(o);for(const a of Object.values(o))a!=null&&a.isTexture&&n.add(a)}}),t.forEach(r=>r.dispose()),e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),this.root.removeFromParent()}leave(){var n;const t=this.view,e=this.saved;this.root.visible=!1;for(const[s,r]of this.visibility)s.visible=r;Object.assign(t,{raceVisuals:e.raceVisuals,bike:e.bike,effects:e.effects,foam:e.foam,inspection:e.inspection,camHeading:e.camHeading,initial:e.initial,snap:e.snap}),t.camera.position.copy(e.camera.position),t.camera.quaternion.copy(e.camera.quaternion),t.camera.fov=e.camera.fov,t.camera.updateProjectionMatrix(),(n=t.raceVisuals)==null||n.update(),this.saved=null,this.previous=null}}class tM{constructor({recording:t,getView:e,close:n,diagnostics:s}){Object.assign(this,{recording:t,getView:e,onClose:n,diagnostics:s}),this.playback=null,this.shot=0;const r=document.createElement("section");r.id="replay-panel",r.hidden=!0,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Replay cinematográfico"),r.innerHTML=`<div class="replay-heading"><div>${Br()}<span>MOTORAMA / REPLAY</span></div><button id="replay-close">VOLTAR À PAUSA <kbd>ESC</kbd></button></div>
   <div class="replay-caption"><span id="replay-camera-name"></span><span id="replay-state">REPLAY</span></div>
   <div class="replay-transport"><div class="replay-progress"><output id="replay-time">0:00</output><input id="replay-timeline" type="range" min="0" max="1" step="0.01" value="0" aria-label="Posição do replay"><output id="replay-duration">0:00</output></div>
   <div class="replay-buttons"><button id="replay-play" aria-label="Pausar replay">Ⅱ PAUSAR</button><button id="replay-restart">↺ INÍCIO</button><button id="replay-back" aria-label="Voltar cinco segundos">−5 S</button><button id="replay-forward" aria-label="Avançar cinco segundos">+5 S</button><button id="replay-speed" aria-label="Velocidade do replay">1×</button><button id="replay-camera">CÂMERA ↗</button><small>ÚLTIMOS 5 MIN · SESSÃO EM PAUSA</small></div></div><output id="replay-qa-state" hidden></output>`,document.getElementById("arena").append(r),this.panel=r,this.$=a=>r.querySelector("#replay-"+a),this.$("close").onclick=()=>this.close(),this.$("play").onclick=()=>{this.playback.toggle(),this.update()},this.$("restart").onclick=()=>{this.playback.seek(0),this.playback.playing=!0,this.update()},this.$("back").onclick=()=>this.seek(-5),this.$("forward").onclick=()=>this.seek(5),this.$("speed").onclick=()=>{const a=this.playback;a.speed=a.speed===1?.5:a.speed===.5?.25:1,this.update()},this.$("camera").onclick=()=>{this.shot=(this.shot+1)%3},this.$("timeline").oninput=a=>{const c=Number(a.target.value);this.playback.playing=!1,this.playback.seek(c>=this.recording.duration-.011?this.recording.duration:c),this.update()},window.addEventListener("keydown",a=>{if(this.active){if(a.code==="Tab"){const c=[...r.querySelectorAll("button,input")],l=c[0],h=c.at(-1);a.shiftKey&&document.activeElement===l?(a.preventDefault(),h.focus()):!a.shiftKey&&document.activeElement===h&&(a.preventDefault(),l.focus())}else a.code==="Escape"?(a.preventDefault(),this.close()):a.code==="Space"&&!(a.target instanceof HTMLButtonElement)?(a.preventDefault(),this.playback.toggle(),this.update()):(a.code==="ArrowLeft"||a.code==="ArrowRight")&&a.target!==this.$("timeline")&&(a.preventDefault(),this.seek(a.code==="ArrowLeft"?-5:5));a.stopImmediatePropagation()}},!0),window.addEventListener("keyup",a=>{this.active&&a.stopImmediatePropagation()},!0);const o=()=>{this.active&&(this.playback.playing=!1,this.update())};window.addEventListener("blur",o),document.addEventListener("visibilitychange",()=>{document.hidden&&o()})}get active(){return!!this.playback}refresh(){const t=document.getElementById("pause-replay");t.disabled=!this.recording.ready,document.getElementById("pause-replay-duration").textContent=this.recording.ready?ur(this.recording.duration)+" GRAVADOS":"PILOTE POR UM INSTANTE"}open(){var e;if(this.active||!this.recording.ready)return;this.returnFocus=document.activeElement,this.panelWasInert=this.panel.inert,this.panel.inert=!1,this.$("close").innerHTML=(((e=this.returnFocus)==null?void 0:e.id)==="results-replay"?"VOLTAR AO RESULTADO":"VOLTAR À PAUSA")+" <kbd>ESC</kbd>";const t=this.getView();this.rig=t.replayView||(t.replayView=new Q_(t)),this.rig.enter(),this.playback=new Z_(this.recording),this.shot=0,this.panel.hidden=!1,document.getElementById("pause-panel").hidden=!0,document.getElementById("arena").classList.add("replaying"),document.body.classList.add("replay-open"),this.inert=[...document.getElementById("arena").children,...document.body.children].filter(n=>n!==this.panel&&n.id!=="arena"&&n.tagName!=="SCRIPT"&&n.tagName!=="STYLE").map(n=>[n,n.inert]);for(const[n]of this.inert)n.inert=!0;this.$("timeline").max=String(this.recording.duration),this.$("duration").textContent=ur(this.recording.duration),this.$("play").focus(),this.update()}close(){var t;if(this.active){this.rig.leave(),this.rig=null,this.playback=null,this.panel.hidden=!0;for(const[e,n]of this.inert)e.inert=n;this.inert=[],document.getElementById("arena").classList.remove("replaying"),document.body.classList.remove("replay-open"),this.panel.inert=this.panelWasInert,this.onClose(),(t=this.returnFocus)==null||t.focus()}}seek(t){this.playback.seek(this.playback.position+t),this.update()}frame(t){const e=this.playback;e.advance(t);const n=this.rig.render(e,t,this.shot);return this.update(),n}update(){var e;const t=this.playback;if(t&&(this.$("play").textContent=t.playing?"Ⅱ PAUSAR":t.position>=this.recording.duration?"↺ REVER":"▶ REPRODUZIR",this.$("play").setAttribute("aria-label",t.playing?"Pausar replay":"Reproduzir replay"),this.$("time").textContent=ur(t.position),this.$("timeline").value=String(t.position),this.$("timeline").setAttribute("aria-valuetext",`${ur(t.position)} de ${ur(this.recording.duration)}`),this.$("speed").textContent=t.speed+"×",this.$("camera-name").textContent=this.rig.cameraName||"TRÊS QUARTOS",this.$("state").textContent=t.position>=this.recording.duration?"FIM DO REPLAY":t.playing?"REPLAY":"REPLAY PAUSADO",this.diagnostics)){const n=t.frame;this.$("qa-state").hidden=!1,this.$("qa-state").textContent=JSON.stringify({live:this.diagnostics(),playback:{position:t.position,playing:t.playing,speed:t.speed,frames:this.recording.count,duration:this.recording.duration,segment:n.segment,bike:{x:n.bike.x,y:n.bike.y,z:n.bike.z,airborne:n.bike.airborne,pitch:n.bike.pitch,whip:n.bike.whip,crashed:n.bike.crashed,crashTime:n.bike.crashTime},riders:((e=n.race)==null?void 0:e.riders.length)||1,camera:this.rig.cameraName}},null,1)}}}class eM{constructor({store:t,open:e,close:n,apply:s,audition:r=()=>{},stopSound:o=()=>{}}){Object.assign(this,{store:t,onOpen:e,onClose:n,onApply:s,onAudition:r,stopSound:o}),this.isOpen=!1;const a=document.createElement("section");a.id="garage-panel",a.hidden=!0,a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","Garagem Motorama"),a.innerHTML=`<header class="garage-top"><div>${Br()}<span>MOTORAMA / EQUIPAMENTO</span></div><button id="garage-close">VOLTAR <kbd>ESC</kbd></button></header>
   <div class="garage-layout"><div class="garage-showroom"><canvas id="garage-preview" aria-label="Prévia 3D da moto e do piloto. Arraste para girar."></canvas><div class="garage-title"><small>ARQUIVO / 2000</small><h2>Seu jeito<br>de voar.</h2></div><div class="garage-identity"><span>VITOR <b>04</b></span><div><strong id="garage-model"></strong><small id="garage-kit"></small></div></div><div class="garage-rotate"><button id="garage-left" aria-label="Girar prévia para a esquerda">←</button><span>ARRASTE PARA GIRAR</span><button id="garage-right" aria-label="Girar prévia para a direita">→</button></div></div>
   <div class="garage-options"><div class="garage-section-heading"><span>01 / MOTO</span><small>CINCO FAMÍLIAS · MESMA PILOTAGEM</small></div><div id="garage-bikes"></div><div class="garage-section-heading"><span>02 / ROUPA + CAPACETE</span><small>COMBINE DO SEU JEITO</small></div><div id="garage-outfits"></div><p class="garage-note">Dez equipes. Dois pilotos por equipe.<br>Seu parceiro de largada usa a sua combinação.</p><button id="garage-apply">VESTIR E VOLTAR ↗</button><span id="garage-save-note">SALVO NESTE NAVEGADOR</span></div></div>`,document.getElementById("arena").append(a),this.panel=a,this.$=h=>a.querySelector("#garage-"+h);const c=document.createElement("div");c.className="garage-engine",c.innerHTML='<div><small>ESCAPE / 2 TEMPOS</small><span id="garage-engine-character"></span></div><button id="garage-engine-preview" aria-label="Ouvir motor selecionado">▶ OUVIR MOTOR</button>',this.$("bikes").after(c),this.$("engine-preview").onclick=()=>this.onAudition(this.draft.bike);for(const h of ea){const d=document.createElement("button");d.dataset.bike=h.id,d.style.setProperty("--swatch",h.color),d.innerHTML=`<i></i><span>${h.name}<small>${h.model}</small></span>`,d.onclick=()=>{this.draft.bike=h.id,this.refresh()},this.$("bikes").append(d)}for(const h of Dr){const d=document.createElement("button");d.dataset.outfit=h.id,d.innerHTML=`<span class="kit-swatches"><i style="background:${h.base}"></i><i style="background:${h.accent}"></i><i style="background:${h.trim}"></i></span><strong>${h.name}</strong><small>${h.tag}</small>`,d.onclick=()=>{this.draft.outfit=h.id,this.refresh()},this.$("outfits").append(d)}this.$("close").onclick=()=>this.close(),this.$("apply").onclick=()=>{this.store.save(this.draft),this.onApply(this.store.selection),this.close()},this.$("left").onclick=()=>this.angle-=.55,this.$("right").onclick=()=>this.angle+=.55;const l=this.$("preview");l.onpointerdown=h=>{this.drag=h.clientX,l.setPointerCapture(h.pointerId)},l.onpointermove=h=>{this.drag!==void 0&&(this.angle+=(h.clientX-this.drag)*.012,this.drag=h.clientX)},l.onpointerup=l.onpointercancel=()=>{this.drag=void 0},window.addEventListener("keydown",h=>{if(this.isOpen)if(h.stopImmediatePropagation(),h.code==="Escape")h.preventDefault(),this.close();else if(h.code==="Tab"){const d=[...a.querySelectorAll("button")],f=d[0],u=d.at(-1);h.shiftKey&&document.activeElement===f?(h.preventDefault(),u.focus()):!h.shiftKey&&document.activeElement===u&&(h.preventDefault(),f.focus())}else["Space","Enter"].includes(h.code)||h.preventDefault()},!0),window.addEventListener("keyup",h=>{this.isOpen&&h.stopImmediatePropagation()},!0)}open(){if(!this.isOpen){this.returnFocus=document.activeElement,this.wasInert=this.panel.inert,this.panel.inert=!1,this.isOpen=!0,this.onOpen(),this.panel.hidden=!1,this.angle=-.6,this.draft=Ur(this.store.selection),this.inert=[...document.getElementById("arena").children].filter(t=>t!==this.panel).map(t=>[t,t.inert]);for(const[t]of this.inert)t.inert=!0;this.renderer||this.makePreview(),this.refresh(),this.$("close").focus(),this.animate()}}close(){var t;if(this.isOpen){this.stopSound(),this.isOpen=!1,cancelAnimationFrame(this.frame),this.panel.hidden=!0;for(const[e,n]of this.inert)e.inert=n;this.panel.inert=this.wasInert,this.onClose(),(t=this.returnFocus)==null||t.focus()}}makePreview(){this.renderer=new Vu({canvas:this.$("preview"),antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=be,this.renderer.toneMapping=Yc,this.renderer.toneMappingExposure=1.05,this.scene=new Wr,this.scene.background=new Wt("#191d23"),this.scene.fog=new ps("#191d23",8,18),this.camera=new dn(36,1,.05,30),this.scene.add(new Lu("#f6f4e8","#585665",2));for(const[s,r,o]of[["#ffffff",2.5,[3,5,3]],["#bab6f4",1.5,[-3,3,-3]]]){const a=new Ou(s,r);a.position.set(...o),this.scene.add(a)}const t=new le(new Xo(6,64),new Gt({color:"#252a32",roughness:.9}));t.rotation.x=-Math.PI/2,t.position.y=-.02,this.scene.add(t);const e=new le(new ol(2.25,2.27,80),new di({color:"#6A659E",side:Re}));e.rotation.x=-Math.PI/2,e.position.y=.001,this.scene.add(e);const n=new le(new Xo(1,40),new di({color:"#0f1116",transparent:!0,opacity:.45}));n.rotation.x=-Math.PI/2,n.scale.set(.42,1.4,1),n.position.y=.002,this.scene.add(n),this.pose=new Xc,Object.assign(this.pose,{x:0,y:.704,z:0,pitch:0,roll:0,heading:0,airborne:!1,impact:0})}refresh(){var e;this.stopSound(),this.$("engine-character").textContent=hl(this.draft.bike).character;const t=Gu(this.draft);this.panel.style.setProperty("--garage-accent",t.bikeSpec.color);for(const n of this.$("bikes").children)n.setAttribute("aria-pressed",String(n.dataset.bike===t.bike));for(const n of this.$("outfits").children)n.setAttribute("aria-pressed",String(n.dataset.outfit===t.outfit));this.$("model").textContent=t.bikeSpec.name.toUpperCase()+" / "+t.bikeSpec.model,this.$("kit").textContent=t.kit.name+" · "+t.kit.tag,(e=this.model)==null||e.dispose(),this.model=new $r(this.scene,this.draft,void 0,{crash:!1}),this.model.update(this.pose,0)}animate(){if(!this.isOpen)return;const t=this.$("preview").getBoundingClientRect();(this.width!==t.width||this.height!==t.height)&&(this.width=t.width,this.height=t.height,this.renderer.setSize(t.width,t.height,!1),this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix()),this.camera.position.set(Math.sin(this.angle)*6.4,2.8,-Math.cos(this.angle)*6.4),this.camera.lookAt(0,1.07,0),this.renderer.render(this.scene,this.camera),this.frame=requestAnimationFrame(()=>this.animate())}}const oi=new URLSearchParams(location.search).has("qa");Gh("indoor");for(const i of document.querySelectorAll("[data-panorama]"))i.innerHTML=Br();let Qu=Vr(2),ii=new Ku(St);const ko=new E_;let ke,ut=null,qe=null,Xe=null,td=null,fi=!1,bn=null,Fs=!1,Ai=!1,Js=1/0,ai;try{ai=localStorage}catch{}const ed=new N_(ai),kr=new h_(oi?{getItem:i=>ai==null?void 0:ai.getItem(i)}:ai);let cn,Qe,ms=!1;const nd=new Set,Z=i=>document.getElementById(i),re=new Bd;let se,Ve=!1,Fr=!1,Sr=performance.now(),ul=0,ci=0;const un=new T_,yi=new J_;let Me;function nM(){const i=un.toggle();Z("slow-motion-state").hidden=!i,Z("slow-motion-state").textContent=`SLOW MOTION · ${Math.round(un.scale*100)}% · CAPS LOCK`}const iM=new z_;let hi=!1,Fo;const Ue=new G_({storage:oi?{getItem:i=>ai==null?void 0:ai.getItem(i)}:ai,onError:i=>{console.error("Motorama audio:",i),hi=!1,id(),an("Som indisponível","TOQUE EM SOM PARA TENTAR NOVAMENTE")}});function id(){Z("sound").textContent=hi?"SOM ON":"SOM OFF",Z("sound").setAttribute("aria-label",hi?"Desativar som":"Ativar som"),Z("sound").title=hi?"Desativar som":"Ativar som"}function sd(){hi&&Ue.start()}function rd(){hi=!hi,id(),Ue.enable(hi)}window.addEventListener("blur",()=>Ue.silence());document.addEventListener("visibilitychange",()=>{document.hidden&&Ue.silence()});function sM(){const i=Ue.ctx;if(!hi||!Ue.ready)return;const t=Ue.buses.effects,e=i.currentTime,n=i.createBuffer(1,i.sampleRate*.45,i.sampleRate),s=n.getChannelData(0);for(let h=0;h<s.length;h++)s[h]=(Math.random()*2-1)*(1-h/s.length)**2;const r=i.createBufferSource(),o=i.createGain(),a=i.createBiquadFilter();r.buffer=n,a.type="lowpass",a.frequency.value=1800,o.gain.setValueAtTime(.16,e),o.gain.exponentialRampToValueAtTime(.001,e+.45),r.connect(a).connect(o).connect(t),r.start(),r.onended=()=>{r.disconnect(),a.disconnect(),o.disconnect()};const c=i.createOscillator(),l=i.createGain();c.frequency.setValueAtTime(110,e),c.frequency.exponentialRampToValueAtTime(35,e+.22),l.gain.setValueAtTime(.18,e),l.gain.exponentialRampToValueAtTime(.001,e+.3),c.connect(l).connect(t),c.start(),c.stop(e+.3),c.onended=()=>{c.disconnect(),l.disconnect()}}function dl(){sd(),Fr||(Fr=!0,Z("intro").classList.add("faded"))}function od(){Me!=null&&Me.active||cn!=null&&cn.isOpen||Qe!=null&&Qe.isOpen||ms||ke!=null&&ke.isOpen||fi||(Ai=!1,Js=1/0,re.retry(),se&&(se.snap=!0),fn(!1),dl())}function rM(){!Ve||Me!=null&&Me.active||cn!=null&&cn.isOpen||Qe!=null&&Qe.isOpen||ms||ke!=null&&ke.isOpen||fi||(Kr({mode:Xe?"career":"practice",stage:St.id,event:Xe}),dl())}function ad(){Z("pause-mode").textContent=ut?"MOTORAMA / CORRIDA":Xe?"MOTORAMA / CARREIRA · FREESTYLE":"MOTORAMA / PRACTICE",Z("restart").textContent=Xe?"REINICIAR PARTIDA":"REINICIAR SESSÃO"}function fn(i){if(Me!=null&&Me.active||cn!=null&&cn.isOpen||Qe!=null&&Qe.isOpen||ms||ke!=null&&ke.isOpen||fi){Pn.clear();return}i&&!Ve&&yi.record(0,re.bike,Pn.sample(),un.time,ut,{force:!0}),Ve=i,Me==null||Me.refresh(),Z("pause-panel").hidden=!i,Z("pause").textContent=i?"▶":"Ⅱ",i?Pn.clear():(Sr=performance.now(),Z("game").focus({preventScroll:!0}))}const Pn=new M_(Z("game"),{retry:od,pause:()=>fn(!Ve),interact:dl,blur:()=>{Fr&&fn(!0)},trickStart:i=>!Ve&&re.bike.startTrick(i),trickRelease:(i,t)=>{Me!=null&&Me.active||re.bike.releaseTrick(i,t)},slowMotion:nM,shortcutsEnabled:()=>!Ve&&!(cn!=null&&cn.isOpen)&&!ms&&!(Qe!=null&&Qe.isOpen)&&!(ke!=null&&ke.isOpen)&&!fi});let zr=!0;try{zr=localStorage.getItem("motorama.controlsVisible")!=="false"}catch{}function cd(i){zr=i,Z("control-guide").hidden=!i,Z("arena").classList.toggle("controls-hidden",!i),Z("controls-toggle").textContent=i?"controles −":"controles +",Z("controls-toggle").setAttribute("aria-expanded",String(i)),Z("controls-toggle").setAttribute("aria-label",i?"Ocultar controles":"Mostrar controles")}cd(zr);Z("controls-toggle").onclick=()=>{cd(!zr);try{localStorage.setItem("motorama.controlsVisible",String(zr))}catch{}Z("game").focus({preventScroll:!0})};Z("pause").onclick=()=>fn(!Ve);Z("resume").onclick=()=>{fn(!1),sd()};Z("restart").onclick=rM;Z("sound").onclick=rd;Fo=W_(Ue,{toggle:rd,qa:oi});Z("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await Z("arena").requestFullscreen()}catch{an("Tela cheia indisponível","O jogo continua aqui.")}};function an(i,t="",e=!1){Z("callout").innerHTML=`${i}<small>${t}</small>`,Z("callout").className="callout visible"+(e?" crash":""),ul=ci+2.2}function oM(){var o;const i=Z("map").getContext("2d"),t=re.bike;i.clearRect(0,0,170,210);const e=76/zt.halfWidth,n=98/zt.halfLength,s=(a,c)=>[85+a*e,105-c*n];i.lineWidth=7,i.strokeStyle="#29433670",i.beginPath(),Qu.forEach((a,c)=>{const l=s(a.x,a.z);c?i.lineTo(...l):i.moveTo(...l)}),St.theme!=="desert"&&i.closePath(),i.stroke(),i.lineWidth=1,i.strokeStyle="#e3edca60",i.stroke();for(const a of[...tn,Ie,He].filter(Boolean)){const c=Ni(a,((o=a.takeoff)==null?void 0:o.length)||0),l=s(c.x,c.z);i.fillStyle=a.color,i.fillRect(l[0]-4,l[1]-2,8,a===Ie?9:4)}if(St.foamPit){const a=St.foamPit,c=s(a.x,a.z);i.fillStyle="#aaa1dd",i.fillRect(c[0]-a.width*e/2,c[1]-a.depth*n/2,a.width*e,a.depth*n)}if(ut)for(const a of ut.riders.slice(1)){const c=s(a.bike.x,a.bike.z);i.fillStyle="#d9c9f2",i.beginPath(),i.arc(c[0],c[1],1.4,0,Math.PI*2),i.fill()}const r=s(t.x,t.z);i.save(),i.translate(...r),i.rotate(t.heading),i.fillStyle="#d4ffa2",i.beginPath(),i.moveTo(0,-6),i.lineTo(4,5),i.lineTo(0,3),i.lineTo(-4,5),i.closePath(),i.fill(),i.restore()}function aM(){const i=re.bike;Z("speed").textContent=i.crashed?"—":String(Math.round(i.speed*3.6)).padStart(2,"0"),Z("speed-meter").style.width=`${i.crashed?0:Math.min(i.speed/28,1)*100}%`,Z("landings").textContent=String(re.landings).padStart(2,"0"),Z("best").textContent=re.best||"—",Z("line-name").textContent=i.checkpoint.name.replace(" · "," / "),Z("surface-state").textContent=i.crashed?"R · TENTE DE NOVO":i.foam?"NA ESPUMA · R PARA REPETIR":i.manualBoost>.2?"MANUAL · EMBALO +":i.manual>.55?"MANUAL":i.airborne?"ENCONTRE A DESCIDA":i.skid?"RECUPERANDO A LINHA":i.speed<1?"PRONTO PARA VOAR":St.theme==="desert"?"MOTORAMA TEAM · 04":"TERRA. MOTOR. REPETE.";const t=Math.max(0,i.y-te(i.x,i.z)-.7);Z("air-info").classList.toggle("visible",i.airborne&&i.airTime>.1&&!i.crashed&&!i.manualCarry),Z("air-height").innerHTML=t.toFixed(1)+" <small>m</small>",Z("air-bar").style.width=`${qt(t/12,0,1)*100}%`,Z("trick-name").textContent=i.trick==="spin360"?"360 · "+Math.round(i.trickYaw*180/Math.PI)+"°":i.trickBlend>.05?Ro(i.trickPose).name:i.completed360?"360 COMPLETO":Math.abs(i.flip)>.7?(i.flip>0?"BACKFLIP":"FRONTFLIP")+" "+Math.round(Math.abs(i.flip)*180/Math.PI)+"°":Math.abs(i.whip)>.2?"WHIP "+(i.whip>0?"ESQ.":"DIR."):"NO AR",lM(),ci>ul&&Z("callout").classList.remove("visible"),oM()}function cM(){var i,t;for(const e of re.events.splice(0)){const n=ii.progress,s=ii.observe(e);if(qe==null||qe.observe(e,ii.complete),St.mission&&(Z("mission-title").textContent=ii.title,Z("mission-description").textContent=ii.hint),s){nd.add(St.id),Z("mission-complete").hidden=!!Xe,an("Na espuma!","MISSÃO CONCLUÍDA · MOTORAMA TEAM");continue}if(ii.progress===1&&n===0){an("No caminhão!","FAÇA A VOLTA À ESQUERDA · PRÓXIMA PARADA: ESPUMA");continue}if(e.type==="foamLanding"){an("Na espuma!","R · MAIS UMA TENTATIVA");continue}if(e.type==="crash"&&(sM(),an("Desmontou!","R para repetir agora",!0)),e.type==="reset"&&(Ue.reset(),yi.markCut(),Z("mission-complete").hidden=!0,se.snap=!0,se.effects.reset(),Z("callout").classList.remove("visible")),e.type==="landing"&&!e.manual){const r=Math.floor((Math.abs(e.rotation)+.14)/(Math.PI*2));!e.onReception&&e.jump&&((i=tn.find(o=>o.id===e.jump))==null?void 0:i.type)!=="tabletop"?an("Mais embalo.","R · REPITA A APROXIMAÇÃO"):e.quality==="skid"?an("Quase no eixo.","Derrapou — solte a seta um pouco antes."):e.spin360?an("360!","VOLTA COMPLETA · POUSO LIMPO"):r?an(e.rotation>0?"BACKFLIP!":"FRONTFLIP!",`+${e.points} · POUSO LIMPO`):e.whip>.35?an("WHIP! ",`+${e.points} · POUSO LIMPO`):((t=tn.find(o=>o.id===e.jump))==null?void 0:t.type)==="tabletop"&&!e.onReception?an("Na mesa.","MAIS EMBALO PARA A DESCIDA"):e.flight>.5&&an("Na descida.","MANTENHA O EMBALO")}}}let ve;async function ld(){if(!oi||ut)return;const{installQA:i}=await yd(async()=>{const{installQA:t}=await import("./qa-DgMBw2pw.js");return{installQA:t}},[],import.meta.url);ut||(ve==null||ve.dispose(),ve=i({session:re,controls:Pn,view:se,rideClock:un,reset:()=>{se.inspection=null,se.snap=!0,se.effects.reset(),fn(!1)},report:an}))}let hd=!1;function ud(){Z("stage-label").textContent=St.number+" / "+St.name.toUpperCase(),Z("mission-hint").hidden=!St.mission,Z("mission-title").textContent=ii.title||"",Z("mission-description").textContent=ii.hint||"",Z("mission-complete").hidden=!ii.complete,Z("intro-title").textContent=St.mission?"O pouso é na carreta.":St.theme==="stadium"?"Lá de cima. Três voos.":"Só mais um salto.";for(const i of Z("stage-list").children)i.setAttribute("aria-current",String(i.dataset.stage===St.id)),i.querySelector(".stage-state").textContent=i.dataset.stage===St.id?"VOCÊ ESTÁ AQUI":nd.has(i.dataset.stage)?"MISSÃO CONCLUÍDA":"PILOTAR →"}function fl(){ms=!1,Z("stage-panel").hidden=!0;for(const[i,t]of zh)i.inert=t;zh=[],fn(hd)}let zh=[];function pl(i){Ue.reset(),Ue.silence(),yi.clear(),ut==null||ut.dispose(),ut=null,qe=null,Xe=null,bn==null||bn.remove(),bn=null,Fs=!1,Ai=!1,Js=1/0,Z("arena").classList.remove("racing"),Z("race-hud").hidden=!0,Z("race-countdown").hidden=!0,Z("freestyle-hud").hidden=!0,ve==null||ve.dispose(),ve=null;const t=se.renderer;se.dispose(),Gh(i),re.bike.reset(tn[0]),Object.assign(re,{accumulator:0,time:0,events:[],landings:0,best:0,score:0,crashes:0}),un.time=0,ad(),Pn.clear(),Qu=Vr(2),ii=new Ku(St),se=new Yu(Z("game"),t,ko,kr.selection),hd=!1,ms?fl():fn(!1),Fr=!1,Z("intro").classList.remove("faded"),Z("callout").classList.remove("visible"),ul=0,ud(),ld(),Z("game").focus()}for(const i of Bo){const t=document.createElement("button");t.className="stage-card "+i.theme,t.dataset.stage=i.id,t.innerHTML=`<span class="stage-number">${i.number}</span><span class="stage-illustration" aria-hidden="true"></span><small>${i.tag}</small><strong>${i.name}</strong><p>${i.description}</p><span class="stage-state">PILOTAR →</span>`,t.onclick=()=>pl(i.id),Z("stage-list").append(t)}Z("stages").onclick=()=>ke.show(!0);Z("pause-stages").onclick=()=>ke.show(!0);Z("stage-close").onclick=fl;Z("mission-retry").onclick=od;Z("mission-next").onclick=()=>pl("red-dirt");window.addEventListener("keydown",i=>{if(ms){if(i.stopImmediatePropagation(),i.code==="Escape")i.preventDefault(),fl();else if(i.code==="Tab"){const t=[...Z("stage-panel").querySelectorAll("button")],e=t[0],n=t.at(-1);i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())}}},!0);function Kr(i){if(dd(),td=i,pl(i.stage),Xe=i.event,(Xe==null?void 0:Xe.discipline)==="race"){if(ve==null||ve.dispose(),ve=null,ut=new L_(re,{appearance:kr.selection}),se.raceVisuals=new ll(se,ut),Z("arena").classList.add("racing"),Z("race-hud").hidden=!1,Z("intro").classList.add("faded"),oi){bn=document.createElement("div"),bn.className="qa-panel",bn.style.top="310px";const t=document.createElement("button");t.textContent="QA · pilotar corrida",t.onclick=()=>{Fs=!Fs,t.setAttribute("aria-pressed",String(Fs)),Z("game").focus()};const e=document.createElement("output");e.id="race-qa-state",bn.append(t,e);const n=document.createElement("button");n.textContent="QA · corrida Terra Vermelha",n.onclick=()=>Kr({mode:"career",stage:"red-dirt",event:Nr[1]}),bn.append(n);for(const[r,o]of[["QA · colisão CPU × CPU",[1,2]],["QA · colisão jogador × CPU",[0,1]]]){const a=document.createElement("button");a.textContent=r,a.onclick=()=>{Fs=!1,Ai=!1,se.inspection=null,se.snap=!0,ut.countdown=0,ut.status="running";const c=-12;for(const l of ut.riders)ut.place(l,c-18-l.id*4,l.offset);ut.place(ut.player,c,0),o.forEach((l,h)=>ut.place(ut.riders[l],c+(l?4:0),h*.48)),o[0]===0&&ut.place(ut.riders[1],c,.48),ut.collide(),Js=ut.time+.35,fn(!1)},bn.append(a)}const s=document.createElement("button");s.textContent="QA · congelar / continuar",s.onclick=()=>{Ai=!Ai,Js=1/0},bn.append(s),Z("arena").append(bn)}}else Xe&&(qe=new k_(Xe),Z("freestyle-hud").hidden=Xe.stage!=="stadium");ad(),un.slow=!1,Z("slow-motion-state").hidden=!0,Fr=!0,Sr=performance.now(),se.snap=!0,Pn.clear(),fn(!1),yi.record(0,re.bike,{},un.time,ut,{force:!0})}function lM(){if(ut){Z("race-position").textContent=String(ut.position).padStart(2,"0"),Z("race-lap").textContent=`${Math.min(ut.player.lap,ut.laps)} / ${ut.laps}`,Z("race-time").textContent=ks(ut.time),Z("race-hint").textContent=ut.player.offTrack?"VOLTE À LINHA · R PARA REPOSICIONAR":ut.player.bike.crashed?"R · VOLTE À PISTA":"20 PILOTOS · R REPOSICIONA NA PISTA";const i=ut.status==="countdown"?String(Math.ceil(ut.countdown)):ut.time<1?"VAI!":null;if(Z("race-countdown").hidden=!i,i&&(Z("race-countdown").innerHTML=`${i}<small>W · ACELERE</small>`),Math.floor(ci*5)!==ut.hudTick){ut.hudTick=Math.floor(ci*5);const t=ut.ranking,e=t.slice(0,3);e.includes(ut.player)||e.push(ut.player),Z("race-leaders").innerHTML=e.map(n=>`<li class="${n.id?"":"you"}">${String(t.indexOf(n)+1).padStart(2,"0")} &nbsp; ${n.name} <span> / ${n.number}</span></li>`).join(""),bn&&(Z("race-qa-state").textContent=JSON.stringify({stage:St.id,status:ut.status,riders:ut.riders.length,position:ut.position,lap:ut.player.lap,time:ut.time,progress:ut.player.progress,crashes:re.crashes,airborne:re.bike.airborne,drawCalls:se.renderer.info.render.calls,triangles:se.renderer.info.render.triangles,collisions:ut.collisionCount,frozen:Ai,crashVisuals:se.raceVisuals.models.map((n,s)=>({id:s+1,active:n.crash.active,parts:n.crash.active?n.crash.parts.length:0,time:n.crash.time,riderDistance:n.crash.active?n.crash.rider.body.position.distanceTo(n.crash.origin):0})).filter(n=>n.active),teams:ut.riders.map(n=>({id:n.id,team:n.team,bike:n.appearance.bike,outfit:n.appearance.outfit,crashed:n.bike.crashed})),aiRecoveries:ut.riders.slice(1).map(n=>n.recoveries)},null,1))}for(const t of ut.events.splice(0))t.type==="lap"&&t.lap<=ut.laps&&an(t.lap===ut.laps?"ÚLTIMA VOLTA":`VOLTA ${t.lap} / ${ut.laps}`,"MANTENHA O EMBALO")}qe&&(Z("freestyle-hud").innerHTML=Xe.stage==="stadium"?`<b>${qe.score}</b> / 1.500 PTS<br>${ks(qe.remaining)} · MANOBRAS ATERRISSADAS`:"CARREIRA / FREESTYLE")}let Yo=[];function dd(){if(fi){fi=!1,Z("results-panel").hidden=!0;for(const[i,t]of Yo)i.inert=t;Yo=[]}}function hM(){if(fi||!Xe)return;fi=!0,Ve=!0,Pn.clear(),Z("pause-panel").hidden=!0,Z("race-countdown").hidden=!0;const i=ut?ut.result:{complete:qe.complete,score:qe.score,time:qe.time},t=oi?ut?i.position<=10:i.complete:ed.record(Xe,i);Z("results-kicker").textContent=`CARREIRA / ${ut?"CORRIDA":"FREESTYLE"} · ${St.name.toUpperCase()}`,Z("results-title").textContent=ut?`${i.position}º lugar.`:t?"Linha completa.":"Mais uma tentativa.",Z("results-description").textContent=t?oi?"Etapa concluída no teste. Progresso da carreira preservado.":"Etapa concluída. Seu resultado foi salvo neste navegador.":ut?"Chegue entre os 10 primeiros para abrir a próxima etapa.":"Aterrisse as manobras para somar pontos. A próxima pode ser a melhor.",Z("results-summary").innerHTML=ut?`<span>TEMPO TOTAL<b>${ks(i.time)}</b></span><span>MELHOR VOLTA<b>${ks(Math.min(...i.laps))}</b></span><span>VOLTAS<b>${ut.laps} / ${ut.laps}</b></span>`:`<span>PONTUAÇÃO<b>${i.score}</b></span><span>TEMPO<b>${ks(i.time)}</b></span>`,Z("results-ranking").innerHTML=ut?i.standings.map((n,s)=>`<li class="${n.player?"you":""}"><b>${String(s+1).padStart(2,"0")}</b><span>${n.name} / ${n.number}</span><span>${n.time===null?Math.ceil(Math.max(0,ut.course.length*ut.laps-n.progress))+" m restantes":ks(n.time)}</span></li>`).join(""):"";const e=Nr.find(n=>n.unlock===Xe.id);Z("results-next").hidden=!e||!t&&!oi,Z("results-next").textContent=oi?"QA · TESTAR PRÓXIMA ETAPA →":"PRÓXIMA ETAPA →",Z("results-next").onclick=()=>Kr({mode:"career",stage:e.stage,event:e}),Z("results-panel").hidden=!1,Yo=[...Z("arena").children].filter(n=>n!==Z("results-panel")).map(n=>[n,n.inert]);for(const[n]of Yo)n.inert=!0;Z("results-again").focus()}Z("results-again").onclick=()=>Kr(td);Z("results-menu").onclick=()=>{dd(),ke.mode="career",ke.show(!1)};window.addEventListener("keydown",i=>{if(!(!fi||Me!=null&&Me.active)&&(i.code==="Escape"&&(i.preventDefault(),i.stopImmediatePropagation(),Z("results-menu").click()),i.code==="Tab")){const t=[...Z("results-panel").querySelectorAll("button")].filter(s=>!s.hidden),e=t[0],n=t.at(-1);i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())}},!0);function Bh(i,t,e,n,s=1,r="live"){Ue.update(n,{bike:i,input:t,profile:kr.selection.bike,playing:e,scale:s,mode:r,theme:St.theme,riders:(ut==null?void 0:ut.riders)||[],heading:se.camHeading}),Ue.ready&&iM.update(Ue.ctx,hi&&e&&St.theme==="stadium",i,Ue.buses.ambience),Math.floor(ci*5)!==Fo.tick&&(Fo.tick=Math.floor(ci*5),Fo.update())}async function uM(){try{let n=function(s){const r=Math.min((s-Sr)/1e3,.06);if(Sr=s,Me.active){const c=Me.frame(r);ci+=r,Bh(c.bike,c.input,Me.playback.playing,r,Me.playback.speed,"replay:"+c.segment+":"+Me.playback.revision),requestAnimationFrame(n);return}ci+=r,Ve||ve==null||ve.beforeStep();const o=Ve?{}:ut&&Fs?ut.inputFor(ut.player):(ve==null?void 0:ve.sample(Pn.sample()))||Pn.sample(),a=un.advance(r,Ve||(ve==null?void 0:ve.frozen)||Ai);a&&(ut?ut.advance(a,o):re.advance(a,o),qe==null||qe.step(a,re.bike),cM(),ut&&ut.time>=Js&&(Ai=!0,Js=1/0),yi.record(a,re.bike,o,un.time,ut),((ut==null?void 0:ut.status)==="finished"||qe!=null&&qe.finished)&&(yi.record(0,re.bike,o,un.time,ut,{force:!0}),hM())),se.render(re.bike,Ve?0:r,un.time,o,a,ci),aM(),ve==null||ve.update(),Qe.update(ci),Bh(re.bike,o,!Ve&&!(ve!=null&&ve.frozen)&&!Ai,r,un.scale),requestAnimationFrame(n)};await Sd(),se=new Yu(Z("game"),null,ko,kr.selection),ko.prepare(se.renderer);let i=!1;Qe=new A_(ko,()=>{i=Ve,Ve=!0,Pn.clear(),Z("pause-panel").hidden=!0},()=>{fn(i)}),Z("filters").onclick=()=>Qe.open(),Z("pause-filters").onclick=()=>Qe.open();let t=!1;cn=new eM({store:kr,audition:s=>Ue.preview?Ue.stopPreview():Ue.audition(s),stopSound:()=>Ue.stopPreview(),open:()=>{t=Ve,Ve=!0,Pn.clear(),Z("pause-panel").hidden=!0},close:()=>{ke.isOpen||fn(t)},apply:s=>{var r;if(Ue.reset(),(r=se.replayView)==null||r.dispose(),se.replayView=null,yi.clear(),se.bike.dispose(),se.bike=new $r(se.scene,s),se.bike.update(re.bike,un.time),ut){const o=Wu(s);ut.riders.forEach((a,c)=>Object.assign(a,o[c])),se.raceVisuals.dispose(),se.raceVisuals=new ll(se,ut)}yi.record(0,re.bike,{},un.time,ut,{force:!0})}});const e=document.createElement("button");e.id="pause-garage",e.textContent="GARAGEM · MOTO E EQUIPAMENTO",e.onclick=()=>cn.open(),Z("pause-stages").after(e),ke=new F_({career:ed,start:Kr,garage:()=>cn.open(),open:()=>{Ve=!0,Pn.clear(),Z("pause-panel").hidden=!0,se.inspection=null},close:()=>{fn(!1)}}),Me=new tM({recording:yi,getView:()=>se,close:()=>{Sr=performance.now(),fi||fn(!0)},diagnostics:oi?()=>({sessionTime:re.time,raceTime:(ut==null?void 0:ut.time)||0,score:re.score,crashes:re.crashes,bike:[re.bike.x,re.bike.y,re.bike.z,re.bike.pitch,re.bike.vx,re.bike.vy,re.bike.vz]}):null}),Z("pause-replay").onclick=()=>Me.open(),Z("results-replay").onclick=()=>Me.open(),Me.refresh(),ud(),ld(),window.addEventListener("resize",()=>se.resize()),ke.show(!1),requestAnimationFrame(n)}catch(i){console.error(i),Z("error").hidden=!1,Z("error-message").textContent="Use um navegador com WebGL 2 e aceleração de hardware. Detalhe: "+i.message}}uM();export{zs as B,tn as J,He as R,St as S,X as T,Ie as W,qa as a,bl as b,qt as c,Ud as d,te as e,Wh as f,xr as g,Ni as h,Co as i,Us as j,Ro as k,li as l,Vr as t,Sn as w};
