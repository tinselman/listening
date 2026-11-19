var Ve=Object.defineProperty;var He=(m,t,l)=>t in m?Ve(m,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):m[t]=l;var j=(m,t,l)=>He(m,typeof t!="symbol"?t+"":t,l);import{G as Fe,l as ge,b as Me,t as pe,V as E,at as we,p as ke,I as se,m as fe,aY as Le,C as ve,k as Ae,e as ze,D as Ne,bu as Ge,j as Pe,n as Ie,o as We,B as qe,F as ne}from"./says-CAmG0S1j.js";const Se={x0:-.62,x1:.62,z0:-.32,z1:1.05,depth:22},Z={x0:-.355,x1:.355,z0:-.025,z1:.605},$e=`
  uniform mat4 uToShaft;
  varying vec3 vP; varying vec3 vN; varying vec2 vUv; varying vec3 vC;
  #ifdef USE_INSTANCING
  #endif
  void main() {
    vec4 p = vec4(position, 1.0); vec3 n = normal;
    #ifdef USE_INSTANCING
    p = instanceMatrix * p; n = mat3(instanceMatrix) * n;
    #endif
    vec4 w = modelMatrix * p;
    vP = (uToShaft * w).xyz;
    vN = normalize(mat3(uToShaft) * (mat3(modelMatrix) * n));
    vUv = uv;
    #ifdef VCOL
    vC = color;
    #else
    vC = vec3(1.0);
    #endif
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,De=`
  uniform vec3 uColor; uniform float uGloss; uniform float uShin; uniform float uGrime;
  uniform vec3 uLamp; uniform vec3 uLampC; uniform float uTopK; uniform vec3 uEye; uniform float uBotY; uniform float uBotK;
  #ifdef MAP
  uniform sampler2D uMap;
  #endif
  varying vec3 vP; varying vec3 vN; varying vec2 vUv; varying vec3 vC;
  float h31(vec3 p) { p = fract(p * vec3(0.1031, 0.103, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.x + p.y) * p.z); }
  float vn(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z); }
  void main() {
    vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
    vec3 base = uColor * vC;
    #ifdef MAP
    base *= texture2D(uMap, vUv).rgb;
    #endif
    // grime: streaks running down, blotches
    float g = vn(vec3(vP.x * 3.0, vP.y * 0.35, vP.z * 3.0)) * 0.6 + vn(vP * 9.0) * 0.4;
    base *= mix(1.0, 0.55 + 0.7 * g, uGrime);
    vec3 V = normalize(uEye - vP);
    // the lamp you're riding with: amber, close, falling off fast
    vec3 Lv = uLamp - vP; float d2 = dot(Lv, Lv); vec3 l = Lv * inversesqrt(d2);
    float nl = max(dot(n, l), 0.0);
    vec3 E = uLampC * nl / (d2 + 0.04);
    vec3 h = normalize(l + V);
    vec3 spec = uLampC * uGloss * pow(max(dot(n, h), 0.0), uShin) * nl / (d2 + 0.04);
    // and the room's light, down through the hole, less the deeper
    float below = max(0.0, -vP.y);
    E += vec3(0.55, 0.5, 0.42) * uTopK * exp(-below / 1.6) * (0.35 + 0.65 * max(n.y, 0.0));
    // (and, in the cave, the tunnel's warm light up through the hole at its foot, less the higher)
    E += vec3(1.0, 0.62, 0.32) * uBotK * exp(-max(0.0, vP.y - uBotY) / 1.4) * (0.35 + 0.65 * max(-n.y, 0.0));
    gl_FragColor = vec4(base * E + spec, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;function Oe(m,t){const l={};return t.map&&(l.MAP=1),t.vcol&&(l.VCOL=1),new ze({defines:l,uniforms:{...m,uColor:{value:new ve(t.color)},uGloss:{value:t.gloss??.1},uShin:{value:t.shin??24},uGrime:{value:t.grime??.6},...t.map?{uMap:{value:t.map}}:{}},vertexShader:$e,fragmentShader:De,vertexColors:!!t.vcol,side:t.side??Ne})}function _e(){return{uToShaft:{value:new Me},uLamp:{value:new E(0,1,0)},uLampC:{value:new ve(0,0,0)},uTopK:{value:1},uEye:{value:new E},uBotY:{value:-1e4},uBotK:{value:0}}}function Ye(m={}){const t=new Fe;t.name="shaft",t.visible=!1;const l=_e(),e=[],f=[],g=F=>{const z=Oe(l,F);return f.push(z),z},s=(F,z)=>{e.push(F);const S=new Ae(F,z);return S.userData.noCast=!0,S.raycast=()=>{},S.frustumCulled=!1,t.add(S),S},{x0:r,x1:n,z0:c,z1:i}=Se,d=m.depth??Se.depth,v=m.ends??!0,w=g({color:3815734,gloss:.04,shin:8,grime:1}),p=g({color:2763048,gloss:.02,shin:8,grime:1,side:Ge}),h=g({color:3814192,gloss:.35,shin:30,grime:.7}),u=g({color:2762790,gloss:.5,shin:40,grime:.5}),y=g({color:6962212,gloss:.7,shin:50,grime:.6}),o=g({color:5921882,gloss:.6,shin:45,grime:.5});{const F=(S,C,P,A)=>{const D=new ge(Math.hypot(P-S,A-C),d),B=s(D,w);B.position.set((S+P)/2,-d/2,(C+A)/2),B.rotation.y=Math.atan2(P-S,A-C)-Math.PI/2};F(r,c,n,c),F(n,c,n,i),F(n,i,r,i),F(r,i,r,c);const z=(S,C,P,A)=>{const D=new ge(C-S,A-P).rotateX(Math.PI/2);s(D,p).position.set((S+C)/2,-.004,(P+A)/2)};if(v){z(r,n,c,Z.z0),z(r,n,Z.z1,i),z(r,Z.x0,Z.z0,Z.z1),z(Z.x1,n,Z.z0,Z.z1);const S=new ge(n-r,i-c).rotateX(-Math.PI/2);s(S,w).position.set((r+n)/2,-d,(c+i)/2)}}const a=new Me,b=new we,x=new E,L=new E;{const F=[[-.44,c+.1,.075,u],[-.22,c+.07,.04,y],[.3,c+.085,.05,o],[r+.09,.12,.06,u],[r+.06,.52,.03,y],[r+.075,.74,.045,o],[n-.11,.24,.085,u],[n-.06,.66,.03,y],[-.2,i-.07,.04,o],[.36,i-.075,.045,u]],z=[],S=[];for(const[H,M,N,$]of F){if(m.frontPipes===!1&&M>i-.15)continue;const O=-.15-Math.random()*.4,_=-d+.55+Math.random()*.35,R=O-_,G=new pe(N,N,R,14,1,!0);s(G,$).position.set(H,O-R/2,M),z.push(a.compose(L.set(H,_,M),b.identity(),x.set(N+.022,.05,N+.022)).clone());const U=new ke(N+.022,16).rotateX(Math.PI/2);s(U,u).position.set(H,_-.025,M);for(let X=O-1.2-Math.random()*1.5;X>_+.4;X-=2.6+Math.random()*1.4)z.push(a.compose(L.set(H,X,M),b.identity(),x.set(N+.022,.05,N+.022)).clone());const I=H<r+.15?[-1,0]:H>n-.15?[1,0]:M<c+.15?[0,-1]:[0,1];for(let X=O-.6;X>_+.2;X-=1.5)S.push(a.compose(L.set(H+I[0]*(N+.02),X,M+I[1]*(N+.02)),b.setFromAxisAngle(new E(0,1,0),Math.atan2(I[0],I[1])),x.set(N*2.4,.035,.04)).clone())}const C=new pe(1,1,1,16),P=new se(C,u,z.length);z.forEach((H,M)=>P.setMatrixAt(M,H)),e.push(C),P.userData.noCast=!0,P.raycast=()=>{},P.frustumCulled=!1,t.add(P);const A=new fe(1,1,1),D=new se(A,h,S.length);S.forEach((H,M)=>D.setMatrixAt(M,H)),e.push(A),D.userData.noCast=!0,D.raycast=()=>{},D.frustumCulled=!1,t.add(D);const B=[{y:-4.6,along:"x",at:c+.2,r:.035,m:y},{y:-9.3,along:"z",at:n-.22,r:.05,m:o},{y:-14.8,along:"x",at:i-.18,r:.04,m:u},{y:-18.6,along:"z",at:r+.2,r:.06,m:u}];for(const H of B){const M=H.along==="x"?n-r:i-c,N=new pe(H.r,H.r,M,12,1,!0);H.along==="x"?N.rotateZ(Math.PI/2):N.rotateX(Math.PI/2),s(N,H.m).position.set(H.along==="x"?(r+n)/2:H.at,H.y,H.along==="x"?H.at:(c+i)/2)}}{const z=[],S=[],C=[],P=r+.06,A=n-.12/2,D=c+.12/2,B=i-.12/2;for(let R=-1.6;R>-d+.6;R-=2.35){const G=[[new E(r,R,D),new E(n,R,D),new E(0,0,1)],[new E(r,R,B),new E(n,R,B),new E(0,0,-1)],[new E(P,R,c),new E(P,R,i),new E(1,0,0)],[new E(A,R,c),new E(A,R,i),new E(-1,0,0)]];for(const[U,I,X]of G){const oe=U.distanceTo(I),de=I.clone().sub(U).normalize();b.setFromUnitVectors(new E(1,0,0),de),z.push(a.compose(L.copy(U).add(I).multiplyScalar(.5),b,x.set(oe,.12,.12)).clone());for(let re=.06;re<oe-.04;re+=.075)for(const ae of[-.12*.3,.12*.3]){const he=U.clone().addScaledVector(de,re).addScaledVector(X,.06).add(new E(0,ae,0));S.push(a.compose(he,b.setFromUnitVectors(new E(0,1,0),X),x.set(.011,.008,.011)).clone())}}for(const[U,I]of[[P,D],[A,D],[P,B],[A,B]])C.push(a.compose(L.set(U,R-.12*.9,I),b.identity(),x.set(.12*1.6,.12*1.4,.12*1.6)).clone())}const H=new fe(1,1,1),M=new se(H,h,z.length);z.forEach((R,G)=>M.setMatrixAt(G,R));const N=new Le(1,8,4,0,Math.PI*2,0,Math.PI/2),$=new se(N,h,S.length);S.forEach((R,G)=>$.setMatrixAt(G,R));const O=new fe(1,1,1),_=new se(O,h,C.length);C.forEach((R,G)=>_.setMatrixAt(G,R));for(const[R,G]of[[H,M],[N,$],[O,_]])e.push(R),G.userData.noCast=!0,G.raycast=()=>{},G.frustumCulled=!1,t.add(G)}const T=new Map,q=F=>{let z=T.get(F);if(!z){const S=F;z=g({color:S.color??16777215,map:S.map??null,vcol:!!S.vertexColors,gloss:.2,shin:20,grime:.15}),T.set(F,z)}return z};let K=!1;return{group:t,depth:d,darkFor:q,slab:F=>{if(K)return;K=!0;const z=.34,S=.04,C=.13,P=.028,A=F+.015,D=[],B=[],H=[],M=[],N=[[new E(r,0,c),new E(n,0,c),new E(0,0,1)],[new E(n,0,i),new E(r,0,i),new E(0,0,-1)],[new E(r,0,i),new E(r,0,c),new E(1,0,0)],[new E(n,0,c),new E(n,0,i),new E(-1,0,0)]];for(const[R,G,U]of N){const I=R.distanceTo(G),X=G.clone().sub(R).normalize(),oe=R.clone().add(G).multiplyScalar(.5);b.setFromUnitVectors(new E(1,0,0),X),D.push(a.compose(L.copy(oe).addScaledVector(U,S/2).setY(A-z/2),b,x.set(I,z,S)).clone());for(const ae of[A-P/2,A-z+P/2])B.push(a.compose(L.copy(oe).addScaledVector(U,C/2).setY(ae),b,x.set(I,P,C)).clone());const de=new we().setFromUnitVectors(new E(0,1,0),U),re=new we;for(let ae=.07;ae<I-.05;ae+=.085){const he=R.clone().addScaledVector(X,ae);H.push(a.compose(L.copy(he).addScaledVector(U,S).setY(A-z/2),de,x.set(.012,.009,.012)).clone()),H.push(a.compose(L.copy(he).addScaledVector(U,C*.6).setY(A),re,x.set(.011,.008,.011)).clone())}}for(const[R,G]of[[r,c],[n,c],[r,i],[n,i]]){const U=R+Math.sign((r+n)/2-R)*.1,I=G+Math.sign((c+i)/2-G)*.1;M.push(a.compose(L.set(U,A-z/2,I),b.setFromAxisAngle(new E(0,1,0),Math.sign((R-(r+n)/2)*(G-(c+i)/2))*Math.PI/4),x.set(.2,z*.9,.02)).clone())}const $=new fe(1,1,1),O=new Le(1,8,4,0,Math.PI*2,0,Math.PI/2),_=g({color:8158584,gloss:.7,shin:40,grime:.5});for(const[R,G,U]of[[$,D,_],[$,B,_],[O,H,_],[$,M,o]]){const I=new se(R,U,G.length);G.forEach((X,oe)=>I.setMatrixAt(oe,X)),I.userData.noCast=!0,I.raycast=()=>{},I.frustumCulled=!1,I.name="slab-frame",I.layers.mask=t.layers.mask,t.add(I)}e.push($,O)},hole(){return t.updateWorldMatrix(!0,!1),{m:t.matrixWorld.clone().invert(),x0:r,x1:n,z0:c,z1:i}},light(F,z,S,C,P){t.updateWorldMatrix(!0,!1),l.uToShaft.value.copy(t.matrixWorld).invert(),l.uLamp.value.copy(F),l.uLampC.value.setRGB(1,.62,.25).multiplyScalar(z),l.uTopK.value=S,l.uEye.value.copy(C),l.uBotY.value=(P==null?void 0:P.y)??-1e4,l.uBotK.value=(P==null?void 0:P.k)??0},dispose(){for(const F of e)F.dispose();for(const F of f)F.dispose()}}}const Ce="listening.boat.table1",Ue=[15921126,13115436,15759898,15910942,4173385,2056144,8011701,1842208],ye="listening-table-blocks";function je(){try{const m=JSON.parse(localStorage.getItem(Ce)??"null");return!m||!Array.isArray(m.blocks)?[]:m.blocks.filter(t=>Array.isArray(t)&&t.length===4&&t.every(l=>Number.isInteger(l))&&t[1]>=0&&t[3]>=0&&t[3]<Ue.length)}catch{return[]}}function Je(){dispatchEvent(new Event(ye))}function Qe(m){const t=l=>{l.key===Ce&&m()};return addEventListener(ye,m),addEventListener("storage",t),()=>{removeEventListener(ye,m),removeEventListener("storage",t)}}const V=(m,t,l)=>new E(m,t,l),Y=V(1,0,0),Q=V(0,1,0),Ze=V(0,0,1);function e0(m){let t=m>>>0;return()=>{t=t+1831565813>>>0;let l=t;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}}const xe=(m,t)=>{const l=document.createElement("canvas");return l.width=m,l.height=t,l},t0=(m,t,l,e,f,g)=>{m.beginPath(),m.moveTo(t+g,l),m.arcTo(t+e,l,t+e,l+f,g),m.arcTo(t+e,l+f,t,l+f,g),m.arcTo(t,l+f,t,l,g),m.arcTo(t,l,t+e,l,g),m.closePath()};class o0{constructor(){j(this,"pos",[]);j(this,"nor",[]);j(this,"col",[]);j(this,"uv",[]);j(this,"wuv",[]);j(this,"wk",[]);j(this,"wx",[]);j(this,"at",t=>t.clone());j(this,"way",t=>t.clone());j(this,"shade",null);j(this,"c",new ve)}triN(t,l,e,f,g,s,r,n={},c=[[0,0],[0,0],[0,0]],i){const d=[t,l,e].map(x=>this.shade?this.shade(x):1);let v=this.at(t),w=this.at(l),p=this.at(e),h=this.way(f),u=this.way(g),y=this.way(s);const o=w.clone().sub(v).cross(p.clone().sub(v));o.dot(h)+o.dot(u)+o.dot(y)<0&&([w,p]=[p,w],[u,y]=[y,u],c=[c[0],c[2],c[1]],[d[1],d[2]]=[d[2],d[1]],i&&(i=[i[0],i[2],i[1]]),o.negate()),o.normalize();let a=this.way(n.along??Y).normalize(),b=o.clone().cross(a);b.lengthSq()<.04&&(a=Math.abs(o.y)<.9?Q.clone():Y.clone(),a.addScaledVector(o,-a.dot(o)).normalize(),b=o.clone().cross(a)),b.normalize(),this.c.set(r),[[v,h],[w,u],[p,y]].forEach(([x,L],T)=>{this.pos.push(x.x,x.y,x.z),this.nor.push(L.x,L.y,L.z),this.col.push(this.c.r*d[T],this.c.g*d[T],this.c.b*d[T]),this.uv.push(c[T][0],c[T][1]),i?this.wuv.push(i[T][0],i[T][1]):this.wuv.push(x.dot(a),x.dot(b)),this.wk.push(n.seed??0,n.grain??0,n.board??0,n.gloss??.5),this.wx.push(n.mode??0,n.wear??0)})}tri(t,l,e,f,g,s){const r=l.clone().sub(t).cross(e.clone().sub(t)).normalize();this.triN(t,l,e,r,r,r,f,g,s)}quad(t,l,e,f,g,s,r){const n=l.clone().sub(t).cross(e.clone().sub(t)).add(e.clone().sub(t).cross(f.clone().sub(t))).normalize();this.triN(t,l,e,n,n,n,g,s,r&&[r[0],r[1],r[2]]),this.triN(t,e,f,n,n,n,g,s,r&&[r[0],r[2],r[3]])}box(t,l,e,f,g,s,r,n,c=""){const[i,d,v,w,p,h,u,y]=[V(t,l,e),V(f,l,e),V(f,l,s),V(t,l,s),V(t,g,e),V(f,g,e),V(f,g,s),V(t,g,s)];c.includes("t")||this.quad(p,y,u,h,r,n),c.includes("f")||this.quad(w,v,u,y,r,n),c.includes("k")||this.quad(d,i,p,h,r,n),c.includes("l")||this.quad(i,w,y,p,r,n),c.includes("r")||this.quad(v,d,h,u,r,n),c.includes("b")||this.quad(i,d,v,w,r,n)}obox(t,l,e,f,g,s,r,n){const c=l.clone().cross(e).normalize(),i=(v,w,p)=>t.clone().addScaledVector(l,v*f/2).addScaledVector(e,w*g/2).addScaledVector(c,p*s/2),d=[[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]];for(const v of d)this.quad(i(...v[0]),i(...v[1]),i(...v[2]),i(...v[3]),r,{along:l,...n})}beam(t,l,e,f,g,s,r={},n=.02,c=3){const i=l.clone().sub(t),d=i.length();i.divideScalar(d);const v=e.clone().addScaledVector(i,-e.dot(i)).normalize(),w=i.clone().cross(v).normalize(),p=f/2,h=g/2;n=Math.min(n,.45*Math.min(f,g));const u=[];for(let a=0;a<4;a++){const b=(a===0||a===3?1:-1)*(p-n),x=(a<2?1:-1)*(h-n);for(let L=0;L<=c;L++){const T=(a+L/c)*(Math.PI/2);u.push({y:b+n*Math.cos(T),z:x+n*Math.sin(T),n:v.clone().multiplyScalar(Math.cos(T)).addScaledVector(w,Math.sin(T))})}}const y=(a,b)=>t.clone().addScaledVector(i,a).addScaledVector(v,b.y).addScaledVector(w,b.z),o={along:i,...r};for(let a=0;a<u.length;a++){const b=u[a],x=u[(a+1)%u.length];this.triN(y(0,b),y(d,b),y(d,x),b.n,b.n,x.n,s,o),this.triN(y(0,b),y(d,x),y(0,x),b.n,x.n,x.n,s,o)}for(const[a,b]of[[0,i.clone().negate()],[d,i]]){const x=t.clone().addScaledVector(i,a);for(let L=0;L<u.length;L++)this.triN(x,y(a,u[L]),y(a,u[(L+1)%u.length]),b,b,b,s,o)}}lathe(t,l,e,f,g,s=Q,r=Y,n=0,c=Math.PI*2){const i=r.clone().cross(s).normalize(),d=(v,w,p)=>t.clone().addScaledVector(s,w).addScaledVector(r,v*Math.cos(p)).addScaledVector(i,v*Math.sin(p));for(let v=0;v+1<l.length;v++){const[w,p]=l[v],[h,u]=l[v+1],y=Math.hypot(h-w,u-p)||1,o=(u-p)/y,a=-(h-w)/y,b=x=>r.clone().multiplyScalar(o*Math.cos(x)).addScaledVector(i,o*Math.sin(x)).addScaledVector(s,a);for(let x=0;x<e;x++){const L=n+x/e*(c-n),T=n+(x+1)/e*(c-n);this.triN(d(w,p,L),d(w,p,T),d(h,u,T),b(L),b(T),b(T),f,g),this.triN(d(w,p,L),d(h,u,T),d(h,u,L),b(L),b(T),b(L),f,g)}}}tube(t,l,e,f,g={},s,r){const n=t.length,c=[],i=[],d=[];for(let o=0;o<n;o++)c.push(t[Math.min(n-1,o+1)].clone().sub(t[Math.max(0,o-1)]).normalize());let v=Math.abs(c[0].y)<.9?Q.clone().cross(c[0]).normalize():Y.clone().cross(c[0]).normalize();for(let o=0;o<n;o++)o&&v.addScaledVector(c[o],-v.dot(c[o])).normalize(),i.push(v.clone()),d.push(c[o].clone().cross(v).normalize());const w=o=>{const a=[];for(let b=0;b<=e;b++){const x=b/e*Math.PI*2,L=l(o,x),T=i[o].clone().multiplyScalar(Math.cos(x)).addScaledVector(d[o],Math.sin(x));a.push({p:t[o].clone().addScaledVector(T,L),n:T})}return a},p=t.map((o,a)=>w(a)),h=[0];for(let o=1;o<n;o++)h.push(h[o-1]+t[o].distanceTo(t[o-1]));const u=(o,a)=>{const b=p[Math.min(n-1,o+1)][a].p.clone().sub(p[Math.max(0,o-1)][a].p),L=p[o][(a+1)%e].p.clone().sub(p[o][(a+e-1)%e].p).cross(b).normalize();return L.dot(p[o][a].n)<0?L.negate():L},y=p.map((o,a)=>o.map((b,x)=>u(a,x%e)));for(let o=0;o+1<n;o++)for(let a=0;a<e;a++){const b=p[o][a],x=p[o][a+1],L=p[o+1][a+1],T=p[o+1][a],q=y[o][a],K=y[o][a+1],J=y[o+1][a+1],F=y[o+1][a],z=(C,P)=>[h[C],P/e*2*Math.PI*l(C,P/e*Math.PI*2)],S=(C,P)=>[P/e,C/(n-1)];if(this.triN(b.p,x.p,L.p,q,K,J,f,g,[S(o,a),S(o,a+1),S(o+1,a+1)],[z(o,a),z(o,a+1),z(o+1,a+1)]),this.triN(b.p,L.p,T.p,q,J,F,f,g,[S(o,a),S(o+1,a+1),S(o+1,a)],[z(o,a),z(o+1,a+1),z(o+1,a)]),s){const C=P=>P.clone().negate();this.triN(b.p,L.p,x.p,C(q),C(J),C(K),s,r??g,[S(o,a),S(o+1,a+1),S(o,a+1)],[z(o,a),z(o+1,a+1),z(o,a+1)]),this.triN(b.p,T.p,L.p,C(q),C(F),C(J),s,r??g,[S(o,a),S(o+1,a),S(o+1,a+1)],[z(o,a),z(o+1,a),z(o+1,a+1)])}}return p}leaf(t,l,e,f,g,s,r={}){const n=t.length,c=[0];for(let d=1;d<n;d++)c.push(c[d-1]+t[d].distanceTo(t[d-1]));const i=t.map((d,v)=>{const w=t[Math.min(n-1,v+1)].clone().sub(t[Math.max(0,v-1)]).normalize(),p=e[v].clone().addScaledVector(w,-e[v].dot(w)).normalize(),h=w.clone().cross(p).normalize(),u=l[v]/2,y=Math.cos(f),o=Math.sin(f),a=d.clone().addScaledVector(h,-u*y).addScaledVector(p,-u*o),b=d.clone().addScaledVector(h,u*y).addScaledVector(p,-u*o),x=p.clone().multiplyScalar(y).addScaledVector(h,-o).normalize(),L=p.clone().multiplyScalar(y).addScaledVector(h,o).normalize();return{L:a,M:d,R:b,nL:x,nR:L,nM:p,hw:u}});for(let d=0;d+1<n;d++){const v=i[d],w=i[d+1],p=(h,u,y)=>[c[u],y*h.hw];for(const[h,u,y,o,a,b,x,L,T,q]of[[v.L,v.M,w.L,w.M,v.nL,v.nM,w.nL,w.nM,-1,0],[v.M,v.R,w.M,w.R,v.nM,v.nR,w.nM,w.nR,0,1]]){this.triN(h,u,o,a,b,L,g,r,void 0,[p(v,d,T),p(v,d,q),p(w,d+1,q)]),this.triN(h,o,y,a,L,x,g,r,void 0,[p(v,d,T),p(w,d+1,q),p(w,d+1,T)]);const K=J=>J.clone().negate();this.triN(h,o,u,K(a),K(L),K(b),s,r,void 0,[p(v,d,T),p(w,d+1,q),p(v,d,q)]),this.triN(h,y,o,K(a),K(x),K(L),s,r,void 0,[p(v,d,T),p(w,d+1,T),p(w,d+1,q)])}}}disc(t,l,e,f,g={},s=Q,r=Y){const n=s.clone().cross(r).normalize();for(let c=0;c<e;c++){const i=c/e*Math.PI*2,d=(c+1)/e*Math.PI*2,v=p=>t.clone().addScaledVector(r,l*Math.cos(p)).addScaledVector(n,l*Math.sin(p)),w=p=>[.5+.5*Math.cos(p),.5+.5*Math.sin(p)];this.triN(t.clone(),v(d),v(i),s,s,s,f,g,[[.5,.5],w(d),w(i)])}}get empty(){return this.pos.length===0}geometry(){const t=new qe;return t.setAttribute("position",new ne(this.pos,3)),t.setAttribute("normal",new ne(this.nor,3)),t.setAttribute("color",new ne(this.col,3)),t.setAttribute("uv",new ne(this.uv,2)),t.setAttribute("wUV",new ne(this.wuv,2)),t.setAttribute("wK",new ne(this.wk,4)),t.setAttribute("wX",new ne(this.wx,2)),t.computeBoundingSphere(),t}}const le=16,a0=3,n0=0,l0=1,s0=2,r0=4,c0=5,i0=6,d0=7,h0=8,ce=3,Te=`
uniform mat4 lToH;
uniform vec3 lLP[${le}];
uniform vec3 lLC[${le}];
uniform vec4 lLD[${le}];
uniform vec4 lLS[${le}];
uniform vec3 lLO[${le}];
uniform vec2 lLX[${le}];
uniform int lCount;
uniform vec3 lUp;
uniform vec3 lDown;
uniform vec2 lRoom;
uniform float lExpo;
uniform vec3 lGP[3];
uniform vec4 lGC[3];
uniform vec3 lOut;
uniform vec4 lWin;
uniform vec4 lDoor;
${Array.from({length:ce},(m,t)=>`uniform samplerCube lSM${t};
uniform samplerCube lSN${t};`).join(`
`)}
uniform vec3 lShP[${ce}];
uniform vec3 lShO[${ce}];
uniform float lShadowFar;
varying vec3 vLH;
varying vec3 vLN;
varying vec2 vLG;
varying vec4 vLK;
varying vec2 vLX;
varying vec2 vLU;
/** (set by libWood for libLight: metal, and how worn) */
float lMetal = 0.0, lWear = 0.0;
float lHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(lHash(i), lHash(i + vec2(1.0, 0.0)), u.x), mix(lHash(i + vec2(0.0, 1.0)), lHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float lFbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * lNoise(p); p = p * 2.03 + 1.7; a *= 0.5; } return s; }
/** the light lifted along a little height h (m) on the surface: its way out tipped by how h climbs across the screen */
vec3 lBump(vec3 N, vec3 p, float h) {
  vec3 dpx = dFdx(p), dpy = dFdy(p);
  float dhx = dFdx(h), dhy = dFdy(h);
  vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
  float det = dot(dpx, r1);
  if (abs(det) < 1e-12) return N;
  vec3 gr = sign(det) * (dhx * r1 + dhy * r2);
  return normalize(abs(det) * N - gr);
}
/** the grain: g along the board and across it (m), s the board's own; its latewood lines, and how many to a pixel */
float lGrain(vec2 g, float s, out float px) {
  vec2 q = g + vec2(s * 31.0, s * 7.0);
  float w = lFbm(vec2(q.x * 0.6, q.y * 7.0)) - 0.5;
  float arch = 0.016 * sin(q.x * 1.3 + s * 9.0) + 0.009 * sin(q.x * 3.1 + s * 3.0);
  float r = (q.y + arch + w * 0.022) * 68.0;
  px = fwidth(r);
  float f = fract(r);
  return smoothstep(0.0, 0.08, f) * (1.0 - smoothstep(0.08, 0.42, f));
}
/** how much of a dark line w wide (m) a pixel d from its middle (m), px across, takes in — and, the line thinner than the
    pixel, its share of it */
float lLine(float d, float w, float px) {
  float cov = clamp((w * 0.5 - d) / px + 0.5, 0.0, 1.0);
  return mix(cov, min(1.0, w / px), smoothstep(0.6, 2.0, px / w));
}
void libWood(inout vec3 col, inout vec3 N, inout float gloss) {
  float seed = vLK.x, grainK = vLK.y, board = vLK.z, mode = vLX.x;
  vec2 g = vLG;
  // a book's spine: round (the light rolling over it across its width), its cloth
  if (mode > 1.5 && mode < 2.5) {
    vec3 dpx = dFdx(vLH), dpy = dFdy(vLH);
    vec2 dux = dFdx(vLU), duy = dFdy(vLU);
    float det = dux.x * duy.y - duy.x * dux.y;
    if (abs(det) > 1e-14) {
      vec3 T = (dpx * duy.y - dpy * dux.y) / det;
      T -= N * dot(T, N);
      if (dot(T, T) > 1e-12) {
        float a = clamp(vLU.x * 2.0 - 1.0, -1.0, 1.0), th = a * 1.05;
        N = normalize(N * cos(th) + normalize(T) * sin(th));
        col *= 0.86 + 0.14 * cos(a * 1.3);
      }
    }
    vec2 q = g * 1400.0;
    float k = 1.0 - smoothstep(0.5, 1.5, max(fwidth(q.x), fwidth(q.y)));
    col *= 1.0 + (lNoise(q) - 0.5) * 0.12 * k;
    return;
  }
  // a rug: its knots, the nap
  if (grainK < 0.0) {
    vec2 q = g * 360.0;
    float px = max(fwidth(q.x), fwidth(q.y));
    float k = 1.0 - smoothstep(0.6, 1.6, px);
    float n = lNoise(q) * 0.6 + lNoise(q * 2.3 + 4.1) * 0.4;
    float nap = lFbm(g * 5.0 + seed);
    col *= (0.94 + 0.12 * nap) * (1.0 + (n - 0.5) * 0.3 * k);
    N = lBump(N, vLH, (n - 0.5) * 0.0011 * k + nap * 0.002);
    gloss = 0.0;
    return;
  }
  if (mode > 0.5 && mode < 1.5) lMetal = 1.0;
  if (grainK == 0.0 && board == 0.0 && mode < 0.5) return;
  float h = 0.0, id = seed;
  if (board < 0.0) {
    // FLOORBOARDS laid straight: the creases between them clear, their eased edges darker into them; the boards' ends
    // butted, staggered
    float bw = -board, bv = g.y / bw, row = floor(bv), fv = fract(bv);
    float rs = lHash(vec2(row * 0.37, seed + 0.5));
    float L = 1.4 + 1.6 * rs, bu = g.x / L + rs * 3.7, fu = fract(bu);
    float dE = min(fv, 1.0 - fv) * bw, dJ = min(fu, 1.0 - fu) * L;
    float pv = fwidth(g.y) + 1e-6, pu = fwidth(g.x) + 1e-6;
    float crease = max(lLine(dE, 0.0032, pv), 0.9 * lLine(dJ, 0.0024, pu));
    float ease = (1.0 - smoothstep(0.0, 0.007, dE)) * (1.0 - smoothstep(0.004, 0.012, pv));
    col *= (1.0 - 0.72 * crease) * (1.0 - 0.16 * ease);
    gloss *= 1.0 - 0.9 * crease;
    id = row * 7.13 + floor(bu) * 3.1 + seed;
    col *= 0.93 + 0.14 * lHash(vec2(id, 1.7));
    h -= ease * 0.0005;
  } else if (board > 0.0) {
    float bv = g.y / board, row = floor(bv), fv = fract(bv);
    float rs = lHash(vec2(row * 0.37, seed + 0.5));
    float L = 1.3 + 1.5 * rs, bu = g.x / L + rs * 3.7, fu = fract(bu);
    float dE = min(fv, 1.0 - fv) * board, dJ = min(fu, 1.0 - fu) * L;
    float pv = fwidth(g.y) + 1e-6, pu = fwidth(g.x) + 1e-6;
    float vis = 1.0 - smoothstep(0.003, 0.008, max(pv, pu));
    float groove = 1.0 - smoothstep(0.0011, 0.0011 + pv, dE);
    float joint = 1.0 - smoothstep(0.0006, 0.0006 + pu, dJ);
    float s = max(groove, joint * 0.85) * vis;
    col *= 1.0 - 0.5 * s;
    gloss *= 1.0 - 0.8 * s;
    id = row * 7.13 + floor(bu) * 3.1 + seed;
    col *= 0.955 + 0.09 * lHash(vec2(id, 1.7));
  }
  if (grainK > 0.0) {
    float px;
    float gl = lGrain(g, lHash(vec2(id, 9.1)), px);
    gl *= (1.0 - smoothstep(0.12, 0.4, px)) * grainK;
    col *= 1.0 - 0.09 * min(gl, 1.0) * (grainK > 1.0 ? 1.8 : 1.0);
    gloss *= 1.0 - 0.35 * min(gl, 1.0);
    h -= gl * 0.00012;
  }
  // brushed on: the brush's marks along the timber, lumps where it went on thick, a fine orange peel
  if (mode > 2.5) {
    float px = max(fwidth(g.x), fwidth(g.y));
    float k = 1.0 - smoothstep(0.004, 0.02, px);
    // (the brush's ridges wander, and come and go along the stroke; lumps and sags where it was laid on thick)
    float warp = lFbm(vec2(g.x * 2.0, g.y * 30.0) + seed) * 0.02;
    float ridge = lNoise(vec2(g.x * 1.5 + seed, (g.y + warp) * 140.0)) - 0.5;
    ridge *= smoothstep(0.25, 0.7, lNoise(vec2(g.x * 4.0 - seed, g.y * 9.0)));
    float lump = lFbm(vec2(g.x * 7.0, g.y * 22.0) + seed * 3.1) - 0.5;
    float sag = smoothstep(0.62, 0.9, lNoise(vec2(g.x * 2.2 + seed * 1.7, g.y * 11.0)));
    float peel = (lNoise(g * 900.0) - 0.5) * (1.0 - smoothstep(0.0008, 0.002, px));
    h += (ridge * 0.0004 + lump * 0.0008 + sag * 0.0009 + peel * 0.00004) * k;
    col *= 1.0 + lump * 0.07 * k;
  }
  // metal worn at its edges (a horn's rim, the crests of its flutes): duller, darker, scuffed
  if (lMetal > 0.5 && vLX.y > 0.0) {
    float n = lFbm(g * 7.0 + seed);
    float rim = smoothstep(0.78, 0.985, vLU.y);
    float crest = smoothstep(0.55, 1.0, cos(vLU.x * 6.2831853 * 8.0)) * pow(vLU.y, 4.0);
    lWear = clamp((rim * (0.45 + 0.9 * n) + crest * 0.7 * n + step(0.7, n) * 0.3 * vLU.y) * vLX.y, 0.0, 1.0);
    col = mix(col, col * vec3(0.5, 0.44, 0.34), lWear);
    gloss = 1.0 + (gloss - 1.0) * (1.0 - 0.65 * lWear);
    h += (lNoise(g * 260.0) - 0.5) * 0.00025 * lWear;
  }
  N = lBump(N, vLH, h);
}
/** how much of a rectangle (x0, x1, y0, y1) in the front wall's plane the ray from P along R falls in — its edges
    softened by how glossy (rough: the blur's angle) and how far */
float lPane(vec3 P, vec3 R, vec4 r, float rough) {
  if (R.z < 1e-3) return 0.0;
  float t = (lRoom.y - P.z) / R.z;
  if (t < 0.0) return 0.0;
  vec2 h = P.xy + R.xy * t, b = vec2(0.004 + t * rough);
  vec2 k = smoothstep(r.xz - b, r.xz + b, h) * (1.0 - smoothstep(r.yw - b, r.yw + b, h));
  return k.x * k.y;
}
/* THE BULB'S SHADOWS: how far its light gets each way (the picture, packed in four bytes), and so how much of the bulb
   this point sees */
float lUnpack(vec4 c) { return dot(c, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0)); }
${Array.from({length:ce},(m,t)=>`float lReach${t}(vec3 d) {
  float z = lUnpack(textureLod(lSM${t}, d, 0.0));
  // (and what moves — the creature at his desk, an arcade going down or coming up — drawn afresh each frame, its own)
  if (lShO[${t}].y > 0.5) z = min(z, lUnpack(textureLod(lSN${t}, d, 0.0)));
  return z * lShadowFar;
}`).join(`
`)}
/* (the receiver's own plane: how far the light's ray along s meets it — so a surface the light skims doesn't shadow
   itself; Vogel's spiral for where to look, turned a little differently at each pixel) */
float lPlaneT(vec3 Nr, vec3 D, vec3 s, float d) {
  float c = dot(Nr, s);
  if (abs(c) < 0.05) return d;
  return clamp(dot(Nr, D) / c, d * 0.6, d * 1.6);
}
vec2 lVogel(int i, float n, float rot) {
  float r = sqrt((float(i) + 0.5) / n), t = float(i) * 2.39996323 + rot;
  return vec2(cos(t), sin(t)) * r;
}
${Array.from({length:ce},(m,t)=>`float lShadow${t}(vec3 P, vec3 Nr) {
  if (lShO[${t}].x < 0.5) return 1.0;
  vec3 LP = lShP[${t}];
  float lBulbR = lShO[${t}].z;
  vec3 D0 = P - LP;
  float d0 = length(D0);
  vec3 Pn = P + Nr * (0.003 + 0.0025 * d0);
  vec3 D = Pn - LP;
  float d = length(D);
  vec3 dir = D / d;
  vec3 t1 = normalize(cross(dir, abs(dir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 t2 = cross(dir, t1);
  float rot = 6.2831853 * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  // (what's in the way, and how far from the bulb: looked for as widely as the bulb is seen from here)
  float search = lBulbR * 2.0 / max(d, 0.2);
  float zs = 0.0, nb = 0.0;
  for (int i = 0; i < ${t?6:8}; i++) {
    vec2 o = lVogel(i, ${t?"6.0":"8.0"}, rot) * search;
    vec3 s = normalize(dir + t1 * o.x + t2 * o.y);
    float z = lReach${t}(s);
    if (z < lPlaneT(Nr, D, s, d) - 0.015) { zs += z; nb += 1.0; }
  }
  if (nb < 0.5) return 1.0;
  if (nb > ${t?"5.5":"7.5"}) return 0.0;                 // (all of it in the way: in the bulb's full shadow — nothing to soften)
  float zb = zs / nb;
  float pen = clamp(lBulbR * (d - zb) / max(zb, 0.05) / d, 0.0015, 0.08);
  float lit = 0.0;
  for (int i = 0; i < ${t?10:16}; i++) {
    vec2 o = lVogel(i, ${t?"10.0":"16.0"}, rot) * pen;
    vec3 s = normalize(dir + t1 * o.x + t2 * o.y);
    float z = lReach${t}(s);
    lit += smoothstep(-0.006, 0.006, z - (lPlaneT(Nr, D, s, d) - 0.008 - 0.003 * d));
  }
  return lit / ${t?"10.0":"16.0"};
}`).join(`
`)}
vec3 libLight(vec3 col, vec3 N, float gloss) {
  vec3 P = vLH;
  vec3 cam = (lToH * vec4(cameraPosition, 1.0)).xyz;
  vec3 Vd = normalize(cam - P);
  vec3 diff = mix(lDown, lUp, N.y * 0.5 + 0.5);
  vec3 spec = vec3(0.0);
  bool metal = lMetal > 0.5;
  float sm = clamp(gloss - 1.0, 0.0, 1.0);
  float shin = metal ? mix(5.0, 120.0, sm * sm) : mix(8.0, 160.0, gloss * gloss);
  vec3 N0 = normalize(vLN); if (!gl_FrontFacing) N0 = -N0;
  // (the first light's shadows, here — the lamp's: its glint wants them too; the others' only where their light reaches)
  float sh0 = lShadow0(P, N0);
  for (int i = 0; i < ${le}; i++) {
    if (i >= lCount) break;
    vec3 L = lLP[i] - P;
    float d2 = max(dot(L, L), 1e-4);
    L *= inversesqrt(d2);
    vec4 S = lLS[i];
    float att = 1.0 / (lLX[i].x + pow(d2, S.z * 0.5));
    if (lLD[i].w > 0.0) att *= pow(max(dot(-L, lLD[i].xyz), 0.0), lLD[i].w);
    float nd = dot(N, L), nl = max(nd, 0.0);
    // (a spot: its colour in its beam, softening out at its edge; out of it, what spills to its sides — the desk lamp's
    // dim green out through its hood's glass. Its shadows either way)
    vec3 c = S.x > -1.5 ? mix(lLO[i], lLC[i], smoothstep(S.x, S.y, dot(-L, lLD[i].xyz))) : lLC[i];
    c *= att;
    if (S.w > -0.5) {
      if (S.w < 0.5) c *= sh0;
      else if (c.r + c.g + c.b > 0.003) { if (S.w < 1.5) c *= lShadow1(P, N0); else c *= lShadow2(P, N0); }
    }
    diff += c * max((nd + 0.12) / 1.12, 0.0);
    vec3 Hh = normalize(L + Vd);
    // (only the lights that shine do in the gloss: the glows — the tanks, the arcades — light things, but a highlight
    // from one of them is a blob in the air)
    if (lLX[i].y > 0.5) spec += c * nl * pow(max(dot(N, Hh), 0.0), shin) * (shin + 8.0) / 25.0;
  }
  float sh = lLS[0].w > -0.5 && lLS[0].w < 0.5 ? sh0 : 1.0;
  float F = 0.06 + 0.94 * pow(1.0 - max(dot(N, Vd), 0.0), 5.0);
  // the gloss of the paint: what's bright in the room mirrored in it — the bulb, the lamps' shades, the window, the door
  // open — sharp on the glossiest, blurred on the rest
  vec3 R = reflect(-Vd, N), glint = vec3(0.0);
  float rough = metal ? mix(0.5, 0.05, sm) : mix(0.2, 0.012, gloss);
  for (int i = 0; i < 3; i++) {
    vec3 Lb = lGP[i] - P;
    float d = length(Lb), ar = lGC[i].w / d, c = dot(R, Lb / d);
    float k = smoothstep(cos(ar + rough), cos(max(ar - rough * 0.5, 0.0)), c);
    glint += lGC[i].rgb * k * (ar * ar) / ((ar + rough) * (ar + rough)) * (i == 0 ? mix(0.25, 1.0, sh) : 1.0);
  }
  glint += lOut * lPane(P, R, lWin, rough) + lOut * 0.8 * lDoor.w * lPane(P, R, vec4(lDoor.xy, 0.0, lDoor.z), rough);
  // (down into the corners: where the floor meets the walls, and up and down the room's corners)
  vec2 dw = vec2(lRoom.x - abs(P.x), lRoom.y - abs(P.z));
  float ao = 1.0 - 0.38 * (1.0 - smoothstep(0.0, 0.6, min(dw.x, dw.y))) * (1.0 - smoothstep(0.0, 0.9, P.y));
  ao *= 1.0 - 0.3 * (1.0 - smoothstep(0.0, 0.5, dw.x)) * (1.0 - smoothstep(0.0, 0.5, dw.y));
  if (metal) {
    // the room in it, blurred: the dark floor, the pink walls, the green roof over them — and the bulb, broad when it's
    // rough; the highlights the metal's own colour
    vec3 env = mix(vec3(0.03, 0.022, 0.02), vec3(0.34, 0.14, 0.2), smoothstep(-0.5, 0.05, R.y));
    env = mix(env, vec3(0.17, 0.28, 0.2), smoothstep(0.25, 0.8, R.y)) * mix(0.55, 1.0, sm);
    vec3 Fm = col + (1.0 - col) * pow(1.0 - max(dot(N, Vd), 0.0), 5.0);
    return (col * diff * 0.12 + spec * col * 2.4 + glint * Fm * 0.9 + env * Fm * (0.6 + 0.5 * sm)) * ao * lExpo;
  }
  return (col * diff + spec * gloss * (0.35 + F) * 2.4 + glint * F * gloss * 1.6) * ao * lExpo;
}
`;function f0(m,t,l=!1){const e=new Pe({vertexColors:!0,map:t??null,alphaTest:l?.5:0});return e.onBeforeCompile=f=>{Object.assign(f.uniforms,m),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 lToH;
attribute vec2 wUV;
attribute vec4 wK;
attribute vec2 wX;
varying vec3 vLH;
varying vec3 vLN;
varying vec2 vLG;
varying vec4 vLK;
varying vec2 vLX;
varying vec2 vLU;`).replace("#include <fog_vertex>",`#include <fog_vertex>
  vLH = (lToH * modelMatrix * vec4(position, 1.0)).xyz;
  vLN = mat3(lToH) * (mat3(modelMatrix) * normal);
  vLG = wUV; vLK = wK; vLX = wX; vLU = uv;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
`+Te).replace("#include <color_fragment>",`#include <color_fragment>
  vec3 lN = normalize(vLN);
  if (!gl_FrontFacing) lN = -lN;
  float lGloss = vLK.w;
  libWood(diffuseColor.rgb, lN, lGloss);`).replace("#include <opaque_fragment>",`outgoingLight = libLight(diffuseColor.rgb, lN, lGloss);
  #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`library-paint9${t?"-map":""}${l?"-cut":""}`,e}function u0(m,t,l,e=.3,f=!1,g={}){const s=new Pe({color:t,vertexColors:l,polygonOffset:f,polygonOffsetFactor:f?1:0,polygonOffsetUnits:f?1:0});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,m,{lFill:{value:new ve(0,0,0)}},g),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 lToH;
varying vec3 vLH;
varying vec3 vLN;
varying vec2 vLG;
varying vec4 vLK;
varying vec2 vLX;
varying vec2 vLU;`).replace("#include <fog_vertex>",`#include <fog_vertex>
  vLH = (lToH * modelMatrix * vec4(position, 1.0)).xyz;
  vLN = mat3(lToH) * (mat3(modelMatrix) * normal);
  vLG = vec2(0.0); vLK = vec4(0.0, 0.0, 0.0, ${e.toFixed(3)}); vLX = vec2(0.0); vLU = vec2(0.0);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 lFill;
`+Te).replace("#include <color_fragment>",`#include <color_fragment>
  vec3 lN = normalize(vLN);
  if (!gl_FrontFacing) lN = -lN;
  float lGloss = vLK.w;`).replace("#include <opaque_fragment>",`outgoingLight = libLight(diffuseColor.rgb, lN, lGloss) + diffuseColor.rgb * lFill;
  #include <opaque_fragment>`)},s.customProgramCacheKey=()=>`library-lit10-${e.toFixed(3)}${l?"-vc":""}`,s}function m0(m,t){return new ze({side:Ne,uniforms:{uL:{value:m},uFar:{value:t}},vertexShader:"varying vec3 vP; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uL; uniform float uFar; varying vec3 vP;
      void main() {
        float v = clamp(length(vP - uL) / uFar, 0.0, 0.9999);
        vec4 e = fract(v * vec4(1.0, 255.0, 65025.0, 16581375.0));
        e -= e.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
        gl_FragColor = e;
      }`})}function v0(m=0,t=2.2){const l=xe(256,256),e=l.getContext("2d"),f=e.createImageData(256,256);for(let s=0;s<256;s++)for(let r=0;r<256;r++){const n=Math.hypot(r-127.5,s-127.5)/127.5,c=n>=1?0:Math.pow(Math.max(0,1-Math.max(0,n-m)/(1-m)),t),i=(s*256+r)*4;f.data[i]=f.data[i+1]=f.data[i+2]=255,f.data[i+3]=Math.round(255*c)}e.putImageData(f,0,0);const g=new Ie(l);return g.colorSpace=We,g}const k={y0:.82,z0:.66,len:.68,th:Math.PI/6,w:1.04},Re=Math.sin(k.th),Ee=Math.cos(k.th),me=V(0,Re,-Ee),ie=V(0,Ee,Re),W=(m,t,l=0)=>V(m,k.y0,k.z0).addScaledVector(me,t).addScaledVector(ie,l),ue={u0:-.43,u1:.37,v0:.07,v1:.6},g0={stand:V(.1,0,k.z0+.5),draw:{u0:.06,u1:.32,v0:.26,v1:.46}},ee="#a87442",be="#7a5230",te="#1b1c1e",Ke="#b48a3c";function p0(){const l=xe(1400,930),e=l.getContext("2d");e.fillStyle="#efe7d0",e.fillRect(0,0,1400,930);const g=(h=>{let u=h;return()=>(u=u*16807%2147483647)/2147483647})(7);for(let h=0;h<2600;h++)e.fillStyle=`rgba(${g()<.5?"120,100,60":"255,255,240"},${.025+g()*.03})`,e.fillRect(g()*1400,g()*930,2+g()*6,2+g()*6);e.strokeStyle="rgba(90,130,190,0.18)",e.lineWidth=1;for(let h=40;h<1400;h+=30)e.beginPath(),e.moveTo(h,30),e.lineTo(h,900),e.stroke();for(let h=30;h<930;h+=30)e.beginPath(),e.moveTo(40,h),e.lineTo(1360,h),e.stroke();const s=(h,u=3,y=.85,o="45,48,56")=>{e.strokeStyle=`rgba(${o},${y})`,e.lineWidth=u,e.lineCap="round",e.lineJoin="round",e.beginPath(),h.forEach(([a,b],x)=>{const L=()=>(g()-.5)*1.2;x?e.lineTo(a+L(),b+L()):e.moveTo(a+L(),b+L())}),e.stroke()},r=(h,u,y,o)=>{s([[h,u],[y,u],[y,o],[h,o],[h,u]],7,.8),s([[h+9,u+9],[y-9,u+9],[y-9,o-9],[h+9,o-9],[h+9,u+9]],2,.55)},n=(h,u,y,o,a)=>{e.strokeStyle="rgba(45,48,56,0.6)",e.lineWidth=1.6,e.beginPath(),e.arc(h,u,y,o,a),e.stroke(),s([[h,u],[h+Math.cos(a)*y,u+Math.sin(a)*y]],2.4,.75)},c=(h,u,y,o=22,a=.8)=>{e.fillStyle=`rgba(40,42,50,${a})`,e.font=`600 ${o}px "Courier New", Courier, monospace`,e.textAlign="center",e.textBaseline="middle",e.fillText(h,u,y)},i=(h,u,y,o,a)=>{s([[h,u],[y,o]],1.4,.5,"60,90,150");for(const[b,x]of[[h,u],[y,o]])s([[b-6,x-6],[b+6,x+6]],1.4,.6,"60,90,150");e.save(),e.translate((h+y)/2,(u+o)/2),Math.abs(y-h)<Math.abs(o-u)&&e.rotate(-Math.PI/2),e.fillStyle="rgba(60,90,150,0.7)",e.font='16px "Courier New", monospace',e.textAlign="center",e.fillText(a,0,-8),e.restore()};r(90,90,560,470),c("GALLERY",325,270,30),r(560,90,900,330),c("LISTENING",730,190,24),c("ROOM",730,222,24),r(560,330,760,470),c("OFFICE",660,400,22),n(560,200,50,-Math.PI/2,0),n(660,330,46,0,Math.PI/2),e.setLineDash([14,10]),s([[600,470],[600,720],[720,720],[720,470]],3,.55),e.setLineDash([]),c("HALL",660,600,20,.65),c("(BELOW)",660,626,16,.55),r(720,640,1180,860),c("TROPICAL ROOM",950,690,24),s([[900,740],[1010,740],[1010,830],[900,830],[900,740]],4,.85),c("SHACK",955,770,16),c("LIBRARY",955,800,13,.7);for(let h=0;h<9;h++){const u=905+h*12;s([[u,815],[u+7,825]],1,.4)}e.setLineDash([6,8]),s([[900,90],[1300,90],[1300,600],[1180,600]],2,.45,"60,90,150"),e.setLineDash([]),s([[900,90],[1120,90]],7,.75),s([[900,330],[990,330]],7,.75),s([[1120,90],[1120,150]],7,.6),c("NEW WING",1110,300,26,.55),c("???",1110,340,22,.45),s([[1190,470],[1290,470]],3,.6),s([[1270,455],[1292,470],[1270,485]],3,.6),c("MORE →",1240,500,16,.5),e.fillStyle="rgba(255,250,235,0.35)",e.fillRect(940,400,210,120),s([[960,420],[1120,420],[1120,500]],3,.18),i(90,60,560,60,`47'-0"`),i(560,60,900,60,`34'-0"`),i(1215,640,1215,860,`22'-0"`),s([[200,600],[200,520]],3,.8),s([[188,540],[200,515],[212,540]],3,.8),c("N",200,500,22),e.strokeStyle="rgba(45,48,56,0.6)",e.lineWidth=2,e.beginPath(),e.arc(200,560,46,0,Math.PI*2),e.stroke();const d=90,v=760,w=560,p=130;e.strokeStyle="rgba(45,48,56,0.8)",e.lineWidth=3,e.strokeRect(d,v,w,p),e.lineWidth=1.5,e.beginPath(),e.moveTo(d,v+60),e.lineTo(d+w,v+60),e.moveTo(d+330,v+60),e.lineTo(d+330,v+p),e.stroke(),c("THE WORLD",d+w/2,v+32,34,.9),c("PLAN — REV. 14",d+165,v+82,18,.8),c("SCALE: GROWING",d+165,v+110,16,.7),c("UNDER",d+445,v+82,18,.8),c("CONSTRUCTION",d+445,v+108,18,.8);for(let h=0;h<26;h++)e.fillStyle=`rgba(70,72,80,${.02+g()*.03})`,e.beginPath(),e.ellipse(980+g()*260,250+g()*260,20+g()*50,8+g()*20,g()*3,0,Math.PI*2),e.fill();return l}function w0(){const l=xe(512,456),e=l.getContext("2d"),f=(()=>{let s=99;return()=>(s=s*16807%2147483647)/2147483647})();e.fillStyle="#2c2d30",e.fillRect(0,0,512,456);for(let s=0;s<1400;s++){const r=f()*512,n=f()*456,c=Math.min(r,n,512-r,456-n),i=Math.hypot(r-512/2,n-456*.55)/260,d=Math.max(0,1-c/60)*.9+Math.max(0,1-i)*.5;f()>d||(e.fillStyle=`rgba(${140+f()*50},${138+f()*46},${130+f()*40},${.12+f()*.3})`,e.beginPath(),e.ellipse(r,n,2+f()*9,1+f()*4,f()*3,0,Math.PI*2),e.fill())}for(let s=0;s<90;s++){const r=f()*512,n=f()*456,c=f()*Math.PI,i=10+f()*60;e.strokeStyle=`rgba(170,168,160,${.08+f()*.18})`,e.lineWidth=.6+f(),e.beginPath(),e.moveTo(r,n),e.lineTo(r+Math.cos(c)*i,n+Math.sin(c)*i),e.stroke()}const g=38;for(let s=g/2+8;s<504;s+=g)e.fillStyle="rgba(0,0,0,0.75)",e.fillRect(s-2,10,4,436),e.fillStyle="rgba(200,196,186,0.34)",e.fillRect(s+2,10,2,436);for(let s=g/2+6;s<448;s+=g)e.fillStyle="rgba(0,0,0,0.75)",e.fillRect(10,s-2,492,4),e.fillStyle="rgba(200,196,186,0.34)",e.fillRect(10,s+2,492,2);e.strokeStyle="rgba(0,0,0,0.8)",e.lineWidth=6,e.strokeRect(6,6,500,444);for(const[s,r]of[[22,22],[490,22],[22,434],[490,434]]){const n=e.createRadialGradient(s-2,r-2,1,s,r,9);n.addColorStop(0,"#9a968c"),n.addColorStop(1,"#2a2a2a"),e.fillStyle=n,e.beginPath(),e.arc(s,r,9,0,Math.PI*2),e.fill()}return l}function b0(m,t,l,e,f,g){const s={seed:61,grain:1.1,gloss:.7,along:Y},{w:r}=k,n=r/2,c=W(-n,0),i=W(n,0),d=W(n,k.len),v=W(-n,k.len),w=ie.clone().multiplyScalar(-.028);m.quad(c,i,d,v,"#b98a55",{...s,gloss:.55,along:Y}),m.quad(i.clone().add(w),c.clone().add(w),v.clone().add(w),d.clone().add(w),be,s),m.quad(c.clone().add(w),i.clone().add(w),i,c,ee,s),m.quad(d.clone().add(w),v.clone().add(w),v,d,ee,s),m.quad(v.clone().add(w),c.clone().add(w),c,v,ee,{...s,along:me}),m.quad(i.clone().add(w),d.clone().add(w),d,i,ee,{...s,along:me}),m.box(-n,k.y0-.035,k.z0-.005,n,k.y0+.012,k.z0+.03,ee,s),m.box(-n,k.y0+.012,k.z0+.018,n,k.y0+.024,k.z0+.03,ee,s);for(const[M,N,$]of[[-.3,.18,"#e9b724"],[-.08,.17,"#e9b724"],[.24,.16,"#c23b2a"],[.4,.07,"#e9b724"]])m.obox(V(M,k.y0+.018,k.z0+.006),Y,Q,N,.008,.008,$,{gloss:.7}),m.obox(V(M+N/2+.008,k.y0+.018,k.z0+.006),Y,Q,.016,.005,.005,"#d9b48a",{gloss:.3});for(const M of[-1,1]){const N=M*(n-.07);m.box(N-.03,0,.05,N+.03,.055,k.z0+.02,be,{...s,along:V(0,0,1)}),m.box(N-.025,.055,.31,N+.025,.93,.36,ee,{...s,along:Q}),m.lathe(V(N+M*.026,.93,.335),[[0,0],[.055,0],[.055,.004],[0,.004]],14,Ke,{gloss:1.35,mode:1},V(M,0,0),Q,0,Math.PI)}m.box(-n+.07,.2,.32,n-.07,.25,.35,ee,s),m.box(-n+.07,.07,k.z0-.06,n-.07,.1,k.z0-.03,be,s);const p=.47;m.obox(W(0,p,.009),Y,ie,r-.06,.008,.04,"#e7e2d6",{gloss:.8}),m.obox(W(0,p+.012,.0145),Y,ie,r-.08,.003,.01,"#8e8a80",{gloss:.9});for(const M of[-1,1])m.obox(W(M*(n-.02),k.len/2,.002),me,ie,k.len-.02,.002,.002,"#9a9aa0",{gloss:1.2,mode:1});{const M=W(-.36,.12,.004),N=W(-.16,.12,.004),$=W(-.36,.3,.004);m.tri(M,N,$,"#e19a2c",{gloss:.95});const O=W(-.33,.15,.0045),_=W(-.23,.15,.0045),R=W(-.33,.24,.0045);m.tri(O,_,R,"#9a5f12",{gloss:.3})}m.lathe(V(n-.02,0,k.z0+.06),[[.035,0],[.035,.62],[0,.62]],16,"#e8e0c8",{gloss:.2},V(.12,1,.05).normalize(),Y),m.lathe(V(n-.02,0,k.z0+.06),[[0,0],[.035,0]],16,"#cfc5a8",{gloss:.2},V(-.12,-1,-.05).normalize(),Y);const h=ue.u0,u=ue.u1,y=ue.v0,o=ue.v1;t.quad(W(h,y,.0025),W(u,y,.0025),W(u,o,.0025),W(h,o,.0025),"#ffffff",{gloss:.18},[[0,0],[1,0],[1,1],[0,1]]),m.quad(W(h-.03,y+.03,.0012),W(u-.05,y+.01,.0012),W(u-.04,o+.035,.0012),W(h-.02,o+.05,.0012),"#e3dcc6",{gloss:.15});const a=W(-n+.03,k.len,0);f.box(a.x-.025,a.y-.06,a.z-.03,a.x+.025,a.y+.025,a.z+.025,te,{gloss:.9}),f.lathe(V(a.x,a.y-.11,a.z),[[.006,0],[.006,.05]],8,te,{gloss:.8}),f.lathe(V(a.x,a.y-.12,a.z),[[0,0],[.018,0],[.018,.012],[0,.012]],12,te,{gloss:.8});const b=V(a.x,a.y+.025,a.z);f.lathe(b,[[.012,0],[.012,.07]],10,te,{gloss:.9});const x=b.clone().add(V(0,.08,0)),L=V(-.45,1.74,.06),T=V(-.27,1.98,.3),q=V(-.2,1.8,.44),K=W(0,.32,0),J=K.clone().sub(q).normalize(),F=(M,N,$,O=te)=>f.tube([M,N],()=>$,8,O,{gloss:1}),z=(M,N)=>N.clone().sub(M).cross(Q).normalize().multiplyScalar(.016);for(const[M,N]of[[x,L],[L,T]]){const $=z(M,N);F(M.clone().add($),N.clone().add($),.006),F(M.clone().sub($),N.clone().sub($),.006);const O=M.clone().lerp(N,.12).add(V(0,-.025,0)),_=M.clone().lerp(N,.62).add(V(0,-.025,0));F(O,_,.0045,"#3a3a3c");for(let R=0;R<=10;R++)f.lathe(O.clone().lerp(_,R/10),[[.0065,-.002],[.0065,.002]],8,"#58585c",{gloss:1.2},_.clone().sub(O).normalize())}for(const M of[x,L,T])f.lathe(M.clone().add(V(0,0,-.022)),[[0,0],[.016,0],[.016,.044],[0,.044]],12,te,{gloss:1},V(0,0,1));const S=q.clone().addScaledVector(J,-.075),C=J.clone().negate(),P=Math.abs(C.y)>.9?Y.clone():Q.clone(),A=[[.118,-.07],[.116,-.055],[.104,-.025],[.08,.02],[.05,.055],[.028,.072],[.012,.078]];l.lathe(q,A.slice(0,3),32,"#2c8b55",{},C,P),l.lathe(q,A.slice(2),32,"#3fa868",{},C,P),l.lathe(q,[[.122,-.074],[.122,-.064],[.117,-.064]],32,"#9ad8a8",{},C,P);const D=A.map(([M,N])=>[M-.004,N]).reverse();e.lathe(q,D,32,"#fff3d6",{},C,P);const B=q.clone().addScaledVector(C,.012),H=[];for(let M=0;M<=8;M++){const N=-Math.PI/2+M/8*Math.PI;H.push([Math.max(5e-4,Math.cos(N)*.032),Math.sin(N)*.034])}return e.lathe(B,H,18,"#ffffff",{},C,P),g.lathe(S,[[.015,-.01],[.015,.025],[.008,.03]],12,te,{gloss:1},C,P),{bulb:B,hood:q,axis:J,target:K,top:S,joint:T}}function y0(m,t,l){m.tube([t,l],()=>.007,8,te,{gloss:1})}export{o0 as B,Ue as C,k as D,le as L,ie as N,ce as S,Ce as T,V,g0 as W,Y as X,Q as Y,Ze as Z,e0 as a,n0 as b,xe as c,Ye as d,b0 as e,p0 as f,v0 as g,h0 as h,W as i,c0 as j,l0 as k,u0 as l,r0 as m,i0 as n,Qe as o,f0 as p,d0 as q,t0 as r,s0 as s,je as t,a0 as u,m0 as v,w0 as w,Se as x,y0 as y,Je as z};
