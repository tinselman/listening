var Re=Object.defineProperty;var Ve=(v,e,l)=>e in v?Re(v,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):v[e]=l;var j=(v,e,l)=>Ve(v,typeof e!="symbol"?e+"":e,l);import{G as Fe,_ as pe,e as Le,v as we,V,Q as be,u as He,I as se,K as fe,o as ye,b as ve,k as ke,c as Me,D as ze,F as Ee,z as Pe,O as Ae,U as Ge,B as We,l as ne}from"./audio-DSctFY4G.js";const Se={x0:-.62,x1:.62,z0:-.32,z1:1.05,depth:22},Z={x0:-.355,x1:.355,z0:-.025,z1:.605},Ie=`
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
  }`,qe=`
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
  }`;function $e(v,e){const l={};return e.map&&(l.MAP=1),e.vcol&&(l.VCOL=1),new Me({defines:l,uniforms:{...v,uColor:{value:new ve(e.color)},uGloss:{value:e.gloss??.1},uShin:{value:e.shin??24},uGrime:{value:e.grime??.6},...e.map?{uMap:{value:e.map}}:{}},vertexShader:Ie,fragmentShader:qe,vertexColors:!!e.vcol,side:e.side??ze})}function De(){return{uToShaft:{value:new Le},uLamp:{value:new V(0,1,0)},uLampC:{value:new ve(0,0,0)},uTopK:{value:1},uEye:{value:new V},uBotY:{value:-1e4},uBotK:{value:0}}}function Ke(v={}){const e=new Fe;e.name="shaft",e.visible=!1;const l=De(),t=[],f=[],g=k=>{const z=$e(l,k);return f.push(z),z},s=(k,z)=>{t.push(k);const L=new ke(k,z);return L.userData.noCast=!0,L.raycast=()=>{},L.frustumCulled=!1,e.add(L),L},{x0:r,x1:n,z0:c,z1:i}=Se,d=v.depth??Se.depth,m=v.ends??!0,w=g({color:3815734,gloss:.04,shin:8,grime:1}),p=g({color:2763048,gloss:.02,shin:8,grime:1,side:Ee}),h=g({color:3814192,gloss:.35,shin:30,grime:.7}),u=g({color:2762790,gloss:.5,shin:40,grime:.5}),x=g({color:6962212,gloss:.7,shin:50,grime:.6}),o=g({color:5921882,gloss:.6,shin:45,grime:.5});{const k=(L,C,N,A)=>{const D=new pe(Math.hypot(N-L,A-C),d),B=s(D,w);B.position.set((L+N)/2,-d/2,(C+A)/2),B.rotation.y=Math.atan2(N-L,A-C)-Math.PI/2};k(r,c,n,c),k(n,c,n,i),k(n,i,r,i),k(r,i,r,c);const z=(L,C,N,A)=>{const D=new pe(C-L,A-N).rotateX(Math.PI/2);s(D,p).position.set((L+C)/2,-.004,(N+A)/2)};if(m){z(r,n,c,Z.z0),z(r,n,Z.z1,i),z(r,Z.x0,Z.z0,Z.z1),z(Z.x1,n,Z.z0,Z.z1);const L=new pe(n-r,i-c).rotateX(-Math.PI/2);s(L,w).position.set((r+n)/2,-d,(c+i)/2)}}const a=new Le,b=new be,y=new V,S=new V;{const k=[[-.44,c+.1,.075,u],[-.22,c+.07,.04,x],[.3,c+.085,.05,o],[r+.09,.12,.06,u],[r+.06,.52,.03,x],[r+.075,.74,.045,o],[n-.11,.24,.085,u],[n-.06,.66,.03,x],[-.2,i-.07,.04,o],[.36,i-.075,.045,u]],z=[],L=[];for(const[H,M,P,$]of k){if(v.frontPipes===!1&&M>i-.15)continue;const O=-.15-Math.random()*.4,U=-d+.55+Math.random()*.35,R=O-U,G=new we(P,P,R,14,1,!0);s(G,$).position.set(H,O-R/2,M),z.push(a.compose(S.set(H,U,M),b.identity(),y.set(P+.022,.05,P+.022)).clone());const _=new He(P+.022,16).rotateX(Math.PI/2);s(_,u).position.set(H,U-.025,M);for(let X=O-1.2-Math.random()*1.5;X>U+.4;X-=2.6+Math.random()*1.4)z.push(a.compose(S.set(H,X,M),b.identity(),y.set(P+.022,.05,P+.022)).clone());const W=H<r+.15?[-1,0]:H>n-.15?[1,0]:M<c+.15?[0,-1]:[0,1];for(let X=O-.6;X>U+.2;X-=1.5)L.push(a.compose(S.set(H+W[0]*(P+.02),X,M+W[1]*(P+.02)),b.setFromAxisAngle(new V(0,1,0),Math.atan2(W[0],W[1])),y.set(P*2.4,.035,.04)).clone())}const C=new we(1,1,1,16),N=new se(C,u,z.length);z.forEach((H,M)=>N.setMatrixAt(M,H)),t.push(C),N.userData.noCast=!0,N.raycast=()=>{},N.frustumCulled=!1,e.add(N);const A=new fe(1,1,1),D=new se(A,h,L.length);L.forEach((H,M)=>D.setMatrixAt(M,H)),t.push(A),D.userData.noCast=!0,D.raycast=()=>{},D.frustumCulled=!1,e.add(D);const B=[{y:-4.6,along:"x",at:c+.2,r:.035,m:x},{y:-9.3,along:"z",at:n-.22,r:.05,m:o},{y:-14.8,along:"x",at:i-.18,r:.04,m:u},{y:-18.6,along:"z",at:r+.2,r:.06,m:u}];for(const H of B){const M=H.along==="x"?n-r:i-c,P=new we(H.r,H.r,M,12,1,!0);H.along==="x"?P.rotateZ(Math.PI/2):P.rotateX(Math.PI/2),s(P,H.m).position.set(H.along==="x"?(r+n)/2:H.at,H.y,H.along==="x"?H.at:(c+i)/2)}}{const z=[],L=[],C=[],N=r+.06,A=n-.12/2,D=c+.12/2,B=i-.12/2;for(let R=-1.6;R>-d+.6;R-=2.35){const G=[[new V(r,R,D),new V(n,R,D),new V(0,0,1)],[new V(r,R,B),new V(n,R,B),new V(0,0,-1)],[new V(N,R,c),new V(N,R,i),new V(1,0,0)],[new V(A,R,c),new V(A,R,i),new V(-1,0,0)]];for(const[_,W,X]of G){const oe=_.distanceTo(W),de=W.clone().sub(_).normalize();b.setFromUnitVectors(new V(1,0,0),de),z.push(a.compose(S.copy(_).add(W).multiplyScalar(.5),b,y.set(oe,.12,.12)).clone());for(let re=.06;re<oe-.04;re+=.075)for(const ae of[-.12*.3,.12*.3]){const he=_.clone().addScaledVector(de,re).addScaledVector(X,.06).add(new V(0,ae,0));L.push(a.compose(he,b.setFromUnitVectors(new V(0,1,0),X),y.set(.011,.008,.011)).clone())}}for(const[_,W]of[[N,D],[A,D],[N,B],[A,B]])C.push(a.compose(S.set(_,R-.12*.9,W),b.identity(),y.set(.12*1.6,.12*1.4,.12*1.6)).clone())}const H=new fe(1,1,1),M=new se(H,h,z.length);z.forEach((R,G)=>M.setMatrixAt(G,R));const P=new ye(1,8,4,0,Math.PI*2,0,Math.PI/2),$=new se(P,h,L.length);L.forEach((R,G)=>$.setMatrixAt(G,R));const O=new fe(1,1,1),U=new se(O,h,C.length);C.forEach((R,G)=>U.setMatrixAt(G,R));for(const[R,G]of[[H,M],[P,$],[O,U]])t.push(R),G.userData.noCast=!0,G.raycast=()=>{},G.frustumCulled=!1,e.add(G)}const T=new Map,q=k=>{let z=T.get(k);if(!z){const L=k;z=g({color:L.color??16777215,map:L.map??null,vcol:!!L.vertexColors,gloss:.2,shin:20,grime:.15}),T.set(k,z)}return z};let K=!1;return{group:e,depth:d,darkFor:q,slab:k=>{if(K)return;K=!0;const z=.34,L=.04,C=.13,N=.028,A=k+.015,D=[],B=[],H=[],M=[],P=[[new V(r,0,c),new V(n,0,c),new V(0,0,1)],[new V(n,0,i),new V(r,0,i),new V(0,0,-1)],[new V(r,0,i),new V(r,0,c),new V(1,0,0)],[new V(n,0,c),new V(n,0,i),new V(-1,0,0)]];for(const[R,G,_]of P){const W=R.distanceTo(G),X=G.clone().sub(R).normalize(),oe=R.clone().add(G).multiplyScalar(.5);b.setFromUnitVectors(new V(1,0,0),X),D.push(a.compose(S.copy(oe).addScaledVector(_,L/2).setY(A-z/2),b,y.set(W,z,L)).clone());for(const ae of[A-N/2,A-z+N/2])B.push(a.compose(S.copy(oe).addScaledVector(_,C/2).setY(ae),b,y.set(W,N,C)).clone());const de=new be().setFromUnitVectors(new V(0,1,0),_),re=new be;for(let ae=.07;ae<W-.05;ae+=.085){const he=R.clone().addScaledVector(X,ae);H.push(a.compose(S.copy(he).addScaledVector(_,L).setY(A-z/2),de,y.set(.012,.009,.012)).clone()),H.push(a.compose(S.copy(he).addScaledVector(_,C*.6).setY(A),re,y.set(.011,.008,.011)).clone())}}for(const[R,G]of[[r,c],[n,c],[r,i],[n,i]]){const _=R+Math.sign((r+n)/2-R)*.1,W=G+Math.sign((c+i)/2-G)*.1;M.push(a.compose(S.set(_,A-z/2,W),b.setFromAxisAngle(new V(0,1,0),Math.sign((R-(r+n)/2)*(G-(c+i)/2))*Math.PI/4),y.set(.2,z*.9,.02)).clone())}const $=new fe(1,1,1),O=new ye(1,8,4,0,Math.PI*2,0,Math.PI/2),U=g({color:8158584,gloss:.7,shin:40,grime:.5});for(const[R,G,_]of[[$,D,U],[$,B,U],[O,H,U],[$,M,o]]){const W=new se(R,_,G.length);G.forEach((X,oe)=>W.setMatrixAt(oe,X)),W.userData.noCast=!0,W.raycast=()=>{},W.frustumCulled=!1,W.name="slab-frame",W.layers.mask=e.layers.mask,e.add(W)}t.push($,O)},hole(){return e.updateWorldMatrix(!0,!1),{m:e.matrixWorld.clone().invert(),x0:r,x1:n,z0:c,z1:i}},light(k,z,L,C,N){e.updateWorldMatrix(!0,!1),l.uToShaft.value.copy(e.matrixWorld).invert(),l.uLamp.value.copy(k),l.uLampC.value.setRGB(1,.62,.25).multiplyScalar(z),l.uTopK.value=L,l.uEye.value.copy(C),l.uBotY.value=(N==null?void 0:N.y)??-1e4,l.uBotK.value=(N==null?void 0:N.k)??0},dispose(){for(const k of t)k.dispose();for(const k of f)k.dispose()}}}const F=(v,e,l)=>new V(v,e,l),Y=F(1,0,0),Q=F(0,1,0),Be=F(0,0,1);function Xe(v){let e=v>>>0;return()=>{e=e+1831565813>>>0;let l=e;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}}const ge=(v,e)=>{const l=document.createElement("canvas");return l.width=v,l.height=e,l},Ye=(v,e,l,t,f,g)=>{v.beginPath(),v.moveTo(e+g,l),v.arcTo(e+t,l,e+t,l+f,g),v.arcTo(e+t,l+f,e,l+f,g),v.arcTo(e,l+f,e,l,g),v.arcTo(e,l,e+t,l,g),v.closePath()};class je{constructor(){j(this,"pos",[]);j(this,"nor",[]);j(this,"col",[]);j(this,"uv",[]);j(this,"wuv",[]);j(this,"wk",[]);j(this,"wx",[]);j(this,"at",e=>e.clone());j(this,"way",e=>e.clone());j(this,"shade",null);j(this,"c",new ve)}triN(e,l,t,f,g,s,r,n={},c=[[0,0],[0,0],[0,0]],i){const d=[e,l,t].map(y=>this.shade?this.shade(y):1);let m=this.at(e),w=this.at(l),p=this.at(t),h=this.way(f),u=this.way(g),x=this.way(s);const o=w.clone().sub(m).cross(p.clone().sub(m));o.dot(h)+o.dot(u)+o.dot(x)<0&&([w,p]=[p,w],[u,x]=[x,u],c=[c[0],c[2],c[1]],[d[1],d[2]]=[d[2],d[1]],i&&(i=[i[0],i[2],i[1]]),o.negate()),o.normalize();let a=this.way(n.along??Y).normalize(),b=o.clone().cross(a);b.lengthSq()<.04&&(a=Math.abs(o.y)<.9?Q.clone():Y.clone(),a.addScaledVector(o,-a.dot(o)).normalize(),b=o.clone().cross(a)),b.normalize(),this.c.set(r),[[m,h],[w,u],[p,x]].forEach(([y,S],T)=>{this.pos.push(y.x,y.y,y.z),this.nor.push(S.x,S.y,S.z),this.col.push(this.c.r*d[T],this.c.g*d[T],this.c.b*d[T]),this.uv.push(c[T][0],c[T][1]),i?this.wuv.push(i[T][0],i[T][1]):this.wuv.push(y.dot(a),y.dot(b)),this.wk.push(n.seed??0,n.grain??0,n.board??0,n.gloss??.5),this.wx.push(n.mode??0,n.wear??0)})}tri(e,l,t,f,g,s){const r=l.clone().sub(e).cross(t.clone().sub(e)).normalize();this.triN(e,l,t,r,r,r,f,g,s)}quad(e,l,t,f,g,s,r){const n=l.clone().sub(e).cross(t.clone().sub(e)).add(t.clone().sub(e).cross(f.clone().sub(e))).normalize();this.triN(e,l,t,n,n,n,g,s,r&&[r[0],r[1],r[2]]),this.triN(e,t,f,n,n,n,g,s,r&&[r[0],r[2],r[3]])}box(e,l,t,f,g,s,r,n,c=""){const[i,d,m,w,p,h,u,x]=[F(e,l,t),F(f,l,t),F(f,l,s),F(e,l,s),F(e,g,t),F(f,g,t),F(f,g,s),F(e,g,s)];c.includes("t")||this.quad(p,x,u,h,r,n),c.includes("f")||this.quad(w,m,u,x,r,n),c.includes("k")||this.quad(d,i,p,h,r,n),c.includes("l")||this.quad(i,w,x,p,r,n),c.includes("r")||this.quad(m,d,h,u,r,n),c.includes("b")||this.quad(i,d,m,w,r,n)}obox(e,l,t,f,g,s,r,n){const c=l.clone().cross(t).normalize(),i=(m,w,p)=>e.clone().addScaledVector(l,m*f/2).addScaledVector(t,w*g/2).addScaledVector(c,p*s/2),d=[[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],[[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],[[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]],[[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]],[[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]],[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]];for(const m of d)this.quad(i(...m[0]),i(...m[1]),i(...m[2]),i(...m[3]),r,{along:l,...n})}beam(e,l,t,f,g,s,r={},n=.02,c=3){const i=l.clone().sub(e),d=i.length();i.divideScalar(d);const m=t.clone().addScaledVector(i,-t.dot(i)).normalize(),w=i.clone().cross(m).normalize(),p=f/2,h=g/2;n=Math.min(n,.45*Math.min(f,g));const u=[];for(let a=0;a<4;a++){const b=(a===0||a===3?1:-1)*(p-n),y=(a<2?1:-1)*(h-n);for(let S=0;S<=c;S++){const T=(a+S/c)*(Math.PI/2);u.push({y:b+n*Math.cos(T),z:y+n*Math.sin(T),n:m.clone().multiplyScalar(Math.cos(T)).addScaledVector(w,Math.sin(T))})}}const x=(a,b)=>e.clone().addScaledVector(i,a).addScaledVector(m,b.y).addScaledVector(w,b.z),o={along:i,...r};for(let a=0;a<u.length;a++){const b=u[a],y=u[(a+1)%u.length];this.triN(x(0,b),x(d,b),x(d,y),b.n,b.n,y.n,s,o),this.triN(x(0,b),x(d,y),x(0,y),b.n,y.n,y.n,s,o)}for(const[a,b]of[[0,i.clone().negate()],[d,i]]){const y=e.clone().addScaledVector(i,a);for(let S=0;S<u.length;S++)this.triN(y,x(a,u[S]),x(a,u[(S+1)%u.length]),b,b,b,s,o)}}lathe(e,l,t,f,g,s=Q,r=Y,n=0,c=Math.PI*2){const i=r.clone().cross(s).normalize(),d=(m,w,p)=>e.clone().addScaledVector(s,w).addScaledVector(r,m*Math.cos(p)).addScaledVector(i,m*Math.sin(p));for(let m=0;m+1<l.length;m++){const[w,p]=l[m],[h,u]=l[m+1],x=Math.hypot(h-w,u-p)||1,o=(u-p)/x,a=-(h-w)/x,b=y=>r.clone().multiplyScalar(o*Math.cos(y)).addScaledVector(i,o*Math.sin(y)).addScaledVector(s,a);for(let y=0;y<t;y++){const S=n+y/t*(c-n),T=n+(y+1)/t*(c-n);this.triN(d(w,p,S),d(w,p,T),d(h,u,T),b(S),b(T),b(T),f,g),this.triN(d(w,p,S),d(h,u,T),d(h,u,S),b(S),b(T),b(S),f,g)}}}tube(e,l,t,f,g={},s,r){const n=e.length,c=[],i=[],d=[];for(let o=0;o<n;o++)c.push(e[Math.min(n-1,o+1)].clone().sub(e[Math.max(0,o-1)]).normalize());let m=Math.abs(c[0].y)<.9?Q.clone().cross(c[0]).normalize():Y.clone().cross(c[0]).normalize();for(let o=0;o<n;o++)o&&m.addScaledVector(c[o],-m.dot(c[o])).normalize(),i.push(m.clone()),d.push(c[o].clone().cross(m).normalize());const w=o=>{const a=[];for(let b=0;b<=t;b++){const y=b/t*Math.PI*2,S=l(o,y),T=i[o].clone().multiplyScalar(Math.cos(y)).addScaledVector(d[o],Math.sin(y));a.push({p:e[o].clone().addScaledVector(T,S),n:T})}return a},p=e.map((o,a)=>w(a)),h=[0];for(let o=1;o<n;o++)h.push(h[o-1]+e[o].distanceTo(e[o-1]));const u=(o,a)=>{const b=p[Math.min(n-1,o+1)][a].p.clone().sub(p[Math.max(0,o-1)][a].p),S=p[o][(a+1)%t].p.clone().sub(p[o][(a+t-1)%t].p).cross(b).normalize();return S.dot(p[o][a].n)<0?S.negate():S},x=p.map((o,a)=>o.map((b,y)=>u(a,y%t)));for(let o=0;o+1<n;o++)for(let a=0;a<t;a++){const b=p[o][a],y=p[o][a+1],S=p[o+1][a+1],T=p[o+1][a],q=x[o][a],K=x[o][a+1],J=x[o+1][a+1],k=x[o+1][a],z=(C,N)=>[h[C],N/t*2*Math.PI*l(C,N/t*Math.PI*2)],L=(C,N)=>[N/t,C/(n-1)];if(this.triN(b.p,y.p,S.p,q,K,J,f,g,[L(o,a),L(o,a+1),L(o+1,a+1)],[z(o,a),z(o,a+1),z(o+1,a+1)]),this.triN(b.p,S.p,T.p,q,J,k,f,g,[L(o,a),L(o+1,a+1),L(o+1,a)],[z(o,a),z(o+1,a+1),z(o+1,a)]),s){const C=N=>N.clone().negate();this.triN(b.p,S.p,y.p,C(q),C(J),C(K),s,r??g,[L(o,a),L(o+1,a+1),L(o,a+1)],[z(o,a),z(o+1,a+1),z(o,a+1)]),this.triN(b.p,T.p,S.p,C(q),C(k),C(J),s,r??g,[L(o,a),L(o+1,a),L(o+1,a+1)],[z(o,a),z(o+1,a),z(o+1,a+1)])}}return p}leaf(e,l,t,f,g,s,r={}){const n=e.length,c=[0];for(let d=1;d<n;d++)c.push(c[d-1]+e[d].distanceTo(e[d-1]));const i=e.map((d,m)=>{const w=e[Math.min(n-1,m+1)].clone().sub(e[Math.max(0,m-1)]).normalize(),p=t[m].clone().addScaledVector(w,-t[m].dot(w)).normalize(),h=w.clone().cross(p).normalize(),u=l[m]/2,x=Math.cos(f),o=Math.sin(f),a=d.clone().addScaledVector(h,-u*x).addScaledVector(p,-u*o),b=d.clone().addScaledVector(h,u*x).addScaledVector(p,-u*o),y=p.clone().multiplyScalar(x).addScaledVector(h,-o).normalize(),S=p.clone().multiplyScalar(x).addScaledVector(h,o).normalize();return{L:a,M:d,R:b,nL:y,nR:S,nM:p,hw:u}});for(let d=0;d+1<n;d++){const m=i[d],w=i[d+1],p=(h,u,x)=>[c[u],x*h.hw];for(const[h,u,x,o,a,b,y,S,T,q]of[[m.L,m.M,w.L,w.M,m.nL,m.nM,w.nL,w.nM,-1,0],[m.M,m.R,w.M,w.R,m.nM,m.nR,w.nM,w.nR,0,1]]){this.triN(h,u,o,a,b,S,g,r,void 0,[p(m,d,T),p(m,d,q),p(w,d+1,q)]),this.triN(h,o,x,a,S,y,g,r,void 0,[p(m,d,T),p(w,d+1,q),p(w,d+1,T)]);const K=J=>J.clone().negate();this.triN(h,o,u,K(a),K(S),K(b),s,r,void 0,[p(m,d,T),p(w,d+1,q),p(m,d,q)]),this.triN(h,x,o,K(a),K(y),K(S),s,r,void 0,[p(m,d,T),p(w,d+1,T),p(w,d+1,q)])}}}disc(e,l,t,f,g={},s=Q,r=Y){const n=s.clone().cross(r).normalize();for(let c=0;c<t;c++){const i=c/t*Math.PI*2,d=(c+1)/t*Math.PI*2,m=p=>e.clone().addScaledVector(r,l*Math.cos(p)).addScaledVector(n,l*Math.sin(p)),w=p=>[.5+.5*Math.cos(p),.5+.5*Math.sin(p)];this.triN(e.clone(),m(d),m(i),s,s,s,f,g,[[.5,.5],w(d),w(i)])}}get empty(){return this.pos.length===0}geometry(){const e=new We;return e.setAttribute("position",new ne(this.pos,3)),e.setAttribute("normal",new ne(this.nor,3)),e.setAttribute("color",new ne(this.col,3)),e.setAttribute("uv",new ne(this.uv,2)),e.setAttribute("wUV",new ne(this.wuv,2)),e.setAttribute("wK",new ne(this.wk,4)),e.setAttribute("wX",new ne(this.wx,2)),e.computeBoundingSphere(),e}}const le=16,Je=3,Qe=0,Ze=1,e0=2,t0=4,o0=5,a0=6,n0=7,l0=8,ce=3,Ne=`
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
${Array.from({length:ce},(v,e)=>`uniform samplerCube lSM${e};
uniform samplerCube lSN${e};`).join(`
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
${Array.from({length:ce},(v,e)=>`float lReach${e}(vec3 d) {
  float z = lUnpack(textureLod(lSM${e}, d, 0.0));
  // (and what moves — the creature at his desk, an arcade going down or coming up — drawn afresh each frame, its own)
  if (lShO[${e}].y > 0.5) z = min(z, lUnpack(textureLod(lSN${e}, d, 0.0)));
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
${Array.from({length:ce},(v,e)=>`float lShadow${e}(vec3 P, vec3 Nr) {
  if (lShO[${e}].x < 0.5) return 1.0;
  vec3 LP = lShP[${e}];
  float lBulbR = lShO[${e}].z;
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
  for (int i = 0; i < ${e?6:8}; i++) {
    vec2 o = lVogel(i, ${e?"6.0":"8.0"}, rot) * search;
    vec3 s = normalize(dir + t1 * o.x + t2 * o.y);
    float z = lReach${e}(s);
    if (z < lPlaneT(Nr, D, s, d) - 0.015) { zs += z; nb += 1.0; }
  }
  if (nb < 0.5) return 1.0;
  if (nb > ${e?"5.5":"7.5"}) return 0.0;                 // (all of it in the way: in the bulb's full shadow — nothing to soften)
  float zb = zs / nb;
  float pen = clamp(lBulbR * (d - zb) / max(zb, 0.05) / d, 0.0015, 0.08);
  float lit = 0.0;
  for (int i = 0; i < ${e?10:16}; i++) {
    vec2 o = lVogel(i, ${e?"10.0":"16.0"}, rot) * pen;
    vec3 s = normalize(dir + t1 * o.x + t2 * o.y);
    float z = lReach${e}(s);
    lit += smoothstep(-0.006, 0.006, z - (lPlaneT(Nr, D, s, d) - 0.008 - 0.003 * d));
  }
  return lit / ${e?"10.0":"16.0"};
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
`;function s0(v,e,l=!1){const t=new Pe({vertexColors:!0,map:e??null,alphaTest:l?.5:0});return t.onBeforeCompile=f=>{Object.assign(f.uniforms,v),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
`+Ne).replace("#include <color_fragment>",`#include <color_fragment>
  vec3 lN = normalize(vLN);
  if (!gl_FrontFacing) lN = -lN;
  float lGloss = vLK.w;
  libWood(diffuseColor.rgb, lN, lGloss);`).replace("#include <opaque_fragment>",`outgoingLight = libLight(diffuseColor.rgb, lN, lGloss);
  #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`library-paint9${e?"-map":""}${l?"-cut":""}`,t}function r0(v,e,l,t=.3,f=!1,g={}){const s=new Pe({color:e,vertexColors:l,polygonOffset:f,polygonOffsetFactor:f?1:0,polygonOffsetUnits:f?1:0});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,v,{lFill:{value:new ve(0,0,0)}},g),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 lToH;
varying vec3 vLH;
varying vec3 vLN;
varying vec2 vLG;
varying vec4 vLK;
varying vec2 vLX;
varying vec2 vLU;`).replace("#include <fog_vertex>",`#include <fog_vertex>
  vLH = (lToH * modelMatrix * vec4(position, 1.0)).xyz;
  vLN = mat3(lToH) * (mat3(modelMatrix) * normal);
  vLG = vec2(0.0); vLK = vec4(0.0, 0.0, 0.0, ${t.toFixed(3)}); vLX = vec2(0.0); vLU = vec2(0.0);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 lFill;
`+Ne).replace("#include <color_fragment>",`#include <color_fragment>
  vec3 lN = normalize(vLN);
  if (!gl_FrontFacing) lN = -lN;
  float lGloss = vLK.w;`).replace("#include <opaque_fragment>",`outgoingLight = libLight(diffuseColor.rgb, lN, lGloss) + diffuseColor.rgb * lFill;
  #include <opaque_fragment>`)},s.customProgramCacheKey=()=>`library-lit10-${t.toFixed(3)}${l?"-vc":""}`,s}function c0(v,e){return new Me({side:ze,uniforms:{uL:{value:v},uFar:{value:e}},vertexShader:"varying vec3 vP; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uL; uniform float uFar; varying vec3 vP;
      void main() {
        float v = clamp(length(vP - uL) / uFar, 0.0, 0.9999);
        vec4 e = fract(v * vec4(1.0, 255.0, 65025.0, 16581375.0));
        e -= e.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
        gl_FragColor = e;
      }`})}function i0(v=0,e=2.2){const l=ge(256,256),t=l.getContext("2d"),f=t.createImageData(256,256);for(let s=0;s<256;s++)for(let r=0;r<256;r++){const n=Math.hypot(r-127.5,s-127.5)/127.5,c=n>=1?0:Math.pow(Math.max(0,1-Math.max(0,n-v)/(1-v)),e),i=(s*256+r)*4;f.data[i]=f.data[i+1]=f.data[i+2]=255,f.data[i+3]=Math.round(255*c)}t.putImageData(f,0,0);const g=new Ae(l);return g.colorSpace=Ge,g}const E={y0:.82,z0:.66,len:.68,th:Math.PI/6,w:1.04},Ce=Math.sin(E.th),Te=Math.cos(E.th),me=F(0,Ce,-Te),ie=F(0,Te,Ce),I=(v,e,l=0)=>F(v,E.y0,E.z0).addScaledVector(me,e).addScaledVector(ie,l),ue={u0:-.43,u1:.37,v0:.07,v1:.6},d0={stand:F(.1,0,E.z0+.5),draw:{u0:.06,u1:.32,v0:.26,v1:.46}},ee="#a87442",xe="#7a5230",te="#1b1c1e",Oe="#b48a3c";function h0(){const l=ge(1400,930),t=l.getContext("2d");t.fillStyle="#efe7d0",t.fillRect(0,0,1400,930);const g=(h=>{let u=h;return()=>(u=u*16807%2147483647)/2147483647})(7);for(let h=0;h<2600;h++)t.fillStyle=`rgba(${g()<.5?"120,100,60":"255,255,240"},${.025+g()*.03})`,t.fillRect(g()*1400,g()*930,2+g()*6,2+g()*6);t.strokeStyle="rgba(90,130,190,0.18)",t.lineWidth=1;for(let h=40;h<1400;h+=30)t.beginPath(),t.moveTo(h,30),t.lineTo(h,900),t.stroke();for(let h=30;h<930;h+=30)t.beginPath(),t.moveTo(40,h),t.lineTo(1360,h),t.stroke();const s=(h,u=3,x=.85,o="45,48,56")=>{t.strokeStyle=`rgba(${o},${x})`,t.lineWidth=u,t.lineCap="round",t.lineJoin="round",t.beginPath(),h.forEach(([a,b],y)=>{const S=()=>(g()-.5)*1.2;y?t.lineTo(a+S(),b+S()):t.moveTo(a+S(),b+S())}),t.stroke()},r=(h,u,x,o)=>{s([[h,u],[x,u],[x,o],[h,o],[h,u]],7,.8),s([[h+9,u+9],[x-9,u+9],[x-9,o-9],[h+9,o-9],[h+9,u+9]],2,.55)},n=(h,u,x,o,a)=>{t.strokeStyle="rgba(45,48,56,0.6)",t.lineWidth=1.6,t.beginPath(),t.arc(h,u,x,o,a),t.stroke(),s([[h,u],[h+Math.cos(a)*x,u+Math.sin(a)*x]],2.4,.75)},c=(h,u,x,o=22,a=.8)=>{t.fillStyle=`rgba(40,42,50,${a})`,t.font=`600 ${o}px "Courier New", Courier, monospace`,t.textAlign="center",t.textBaseline="middle",t.fillText(h,u,x)},i=(h,u,x,o,a)=>{s([[h,u],[x,o]],1.4,.5,"60,90,150");for(const[b,y]of[[h,u],[x,o]])s([[b-6,y-6],[b+6,y+6]],1.4,.6,"60,90,150");t.save(),t.translate((h+x)/2,(u+o)/2),Math.abs(x-h)<Math.abs(o-u)&&t.rotate(-Math.PI/2),t.fillStyle="rgba(60,90,150,0.7)",t.font='16px "Courier New", monospace',t.textAlign="center",t.fillText(a,0,-8),t.restore()};r(90,90,560,470),c("GALLERY",325,270,30),r(560,90,900,330),c("LISTENING",730,190,24),c("ROOM",730,222,24),r(560,330,760,470),c("OFFICE",660,400,22),n(560,200,50,-Math.PI/2,0),n(660,330,46,0,Math.PI/2),t.setLineDash([14,10]),s([[600,470],[600,720],[720,720],[720,470]],3,.55),t.setLineDash([]),c("HALL",660,600,20,.65),c("(BELOW)",660,626,16,.55),r(720,640,1180,860),c("TROPICAL ROOM",950,690,24),s([[900,740],[1010,740],[1010,830],[900,830],[900,740]],4,.85),c("SHACK",955,770,16),c("LIBRARY",955,800,13,.7);for(let h=0;h<9;h++){const u=905+h*12;s([[u,815],[u+7,825]],1,.4)}t.setLineDash([6,8]),s([[900,90],[1300,90],[1300,600],[1180,600]],2,.45,"60,90,150"),t.setLineDash([]),s([[900,90],[1120,90]],7,.75),s([[900,330],[990,330]],7,.75),s([[1120,90],[1120,150]],7,.6),c("NEW WING",1110,300,26,.55),c("???",1110,340,22,.45),s([[1190,470],[1290,470]],3,.6),s([[1270,455],[1292,470],[1270,485]],3,.6),c("MORE →",1240,500,16,.5),t.fillStyle="rgba(255,250,235,0.35)",t.fillRect(940,400,210,120),s([[960,420],[1120,420],[1120,500]],3,.18),i(90,60,560,60,`47'-0"`),i(560,60,900,60,`34'-0"`),i(1215,640,1215,860,`22'-0"`),s([[200,600],[200,520]],3,.8),s([[188,540],[200,515],[212,540]],3,.8),c("N",200,500,22),t.strokeStyle="rgba(45,48,56,0.6)",t.lineWidth=2,t.beginPath(),t.arc(200,560,46,0,Math.PI*2),t.stroke();const d=90,m=760,w=560,p=130;t.strokeStyle="rgba(45,48,56,0.8)",t.lineWidth=3,t.strokeRect(d,m,w,p),t.lineWidth=1.5,t.beginPath(),t.moveTo(d,m+60),t.lineTo(d+w,m+60),t.moveTo(d+330,m+60),t.lineTo(d+330,m+p),t.stroke(),c("THE WORLD",d+w/2,m+32,34,.9),c("PLAN — REV. 14",d+165,m+82,18,.8),c("SCALE: GROWING",d+165,m+110,16,.7),c("UNDER",d+445,m+82,18,.8),c("CONSTRUCTION",d+445,m+108,18,.8);for(let h=0;h<26;h++)t.fillStyle=`rgba(70,72,80,${.02+g()*.03})`,t.beginPath(),t.ellipse(980+g()*260,250+g()*260,20+g()*50,8+g()*20,g()*3,0,Math.PI*2),t.fill();return l}function f0(){const v=ge(256,256),e=v.getContext("2d");e.fillStyle="#f7e36a",e.fillRect(0,0,256,256);const l=e.createLinearGradient(0,0,0,256);return l.addColorStop(0,"rgba(255,255,255,0.18)"),l.addColorStop(.2,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(120,90,0,0.12)"),e.fillStyle=l,e.fillRect(0,0,256,256),e.fillStyle="rgba(150,110,0,0.25)",e.fillRect(0,0,256,34),e.fillStyle="#1f2a6b",e.textAlign="center",e.textBaseline="middle",e.font='italic 600 44px "Bradley Hand", "Marker Felt", "Comic Sans MS", cursive',e.save(),e.translate(128,112),e.rotate(-.05),e.fillText("Out of",0,-26),e.fillText("order",0,22),e.restore(),e.font='italic 500 34px "Bradley Hand", "Marker Felt", "Comic Sans MS", cursive',e.save(),e.translate(150,196),e.rotate(-.08),e.fillText("- Robyn",0,0),e.restore(),e.strokeStyle="#1f2a6b",e.lineWidth=3,e.beginPath(),e.moveTo(60,160),e.quadraticCurveTo(128,150,196,158),e.stroke(),v}function u0(){const l=ge(512,456),t=l.getContext("2d"),f=(()=>{let s=99;return()=>(s=s*16807%2147483647)/2147483647})();t.fillStyle="#2c2d30",t.fillRect(0,0,512,456);for(let s=0;s<1400;s++){const r=f()*512,n=f()*456,c=Math.min(r,n,512-r,456-n),i=Math.hypot(r-512/2,n-456*.55)/260,d=Math.max(0,1-c/60)*.9+Math.max(0,1-i)*.5;f()>d||(t.fillStyle=`rgba(${140+f()*50},${138+f()*46},${130+f()*40},${.12+f()*.3})`,t.beginPath(),t.ellipse(r,n,2+f()*9,1+f()*4,f()*3,0,Math.PI*2),t.fill())}for(let s=0;s<90;s++){const r=f()*512,n=f()*456,c=f()*Math.PI,i=10+f()*60;t.strokeStyle=`rgba(170,168,160,${.08+f()*.18})`,t.lineWidth=.6+f(),t.beginPath(),t.moveTo(r,n),t.lineTo(r+Math.cos(c)*i,n+Math.sin(c)*i),t.stroke()}const g=38;for(let s=g/2+8;s<504;s+=g)t.fillStyle="rgba(0,0,0,0.75)",t.fillRect(s-2,10,4,436),t.fillStyle="rgba(200,196,186,0.34)",t.fillRect(s+2,10,2,436);for(let s=g/2+6;s<448;s+=g)t.fillStyle="rgba(0,0,0,0.75)",t.fillRect(10,s-2,492,4),t.fillStyle="rgba(200,196,186,0.34)",t.fillRect(10,s+2,492,2);t.strokeStyle="rgba(0,0,0,0.8)",t.lineWidth=6,t.strokeRect(6,6,500,444);for(const[s,r]of[[22,22],[490,22],[22,434],[490,434]]){const n=t.createRadialGradient(s-2,r-2,1,s,r,9);n.addColorStop(0,"#9a968c"),n.addColorStop(1,"#2a2a2a"),t.fillStyle=n,t.beginPath(),t.arc(s,r,9,0,Math.PI*2),t.fill()}return l}function m0(v,e,l,t,f,g){const s={seed:61,grain:1.1,gloss:.7,along:Y},{w:r}=E,n=r/2,c=I(-n,0),i=I(n,0),d=I(n,E.len),m=I(-n,E.len),w=ie.clone().multiplyScalar(-.028);v.quad(c,i,d,m,"#b98a55",{...s,gloss:.55,along:Y}),v.quad(i.clone().add(w),c.clone().add(w),m.clone().add(w),d.clone().add(w),xe,s),v.quad(c.clone().add(w),i.clone().add(w),i,c,ee,s),v.quad(d.clone().add(w),m.clone().add(w),m,d,ee,s),v.quad(m.clone().add(w),c.clone().add(w),c,m,ee,{...s,along:me}),v.quad(i.clone().add(w),d.clone().add(w),d,i,ee,{...s,along:me}),v.box(-n,E.y0-.035,E.z0-.005,n,E.y0+.012,E.z0+.03,ee,s),v.box(-n,E.y0+.012,E.z0+.018,n,E.y0+.024,E.z0+.03,ee,s);for(const[M,P,$]of[[-.3,.18,"#e9b724"],[-.08,.17,"#e9b724"],[.24,.16,"#c23b2a"],[.4,.07,"#e9b724"]])v.obox(F(M,E.y0+.018,E.z0+.006),Y,Q,P,.008,.008,$,{gloss:.7}),v.obox(F(M+P/2+.008,E.y0+.018,E.z0+.006),Y,Q,.016,.005,.005,"#d9b48a",{gloss:.3});for(const M of[-1,1]){const P=M*(n-.07);v.box(P-.03,0,.05,P+.03,.055,E.z0+.02,xe,{...s,along:F(0,0,1)}),v.box(P-.025,.055,.31,P+.025,.93,.36,ee,{...s,along:Q}),v.lathe(F(P+M*.026,.93,.335),[[0,0],[.055,0],[.055,.004],[0,.004]],14,Oe,{gloss:1.35,mode:1},F(M,0,0),Q,0,Math.PI)}v.box(-n+.07,.2,.32,n-.07,.25,.35,ee,s),v.box(-n+.07,.07,E.z0-.06,n-.07,.1,E.z0-.03,xe,s);const p=.47;v.obox(I(0,p,.009),Y,ie,r-.06,.008,.04,"#e7e2d6",{gloss:.8}),v.obox(I(0,p+.012,.0145),Y,ie,r-.08,.003,.01,"#8e8a80",{gloss:.9});for(const M of[-1,1])v.obox(I(M*(n-.02),E.len/2,.002),me,ie,E.len-.02,.002,.002,"#9a9aa0",{gloss:1.2,mode:1});{const M=I(-.36,.12,.004),P=I(-.16,.12,.004),$=I(-.36,.3,.004);v.tri(M,P,$,"#e19a2c",{gloss:.95});const O=I(-.33,.15,.0045),U=I(-.23,.15,.0045),R=I(-.33,.24,.0045);v.tri(O,U,R,"#9a5f12",{gloss:.3})}v.lathe(F(n-.02,0,E.z0+.06),[[.035,0],[.035,.62],[0,.62]],16,"#e8e0c8",{gloss:.2},F(.12,1,.05).normalize(),Y),v.lathe(F(n-.02,0,E.z0+.06),[[0,0],[.035,0]],16,"#cfc5a8",{gloss:.2},F(-.12,-1,-.05).normalize(),Y);const h=ue.u0,u=ue.u1,x=ue.v0,o=ue.v1;e.quad(I(h,x,.0025),I(u,x,.0025),I(u,o,.0025),I(h,o,.0025),"#ffffff",{gloss:.18},[[0,0],[1,0],[1,1],[0,1]]),v.quad(I(h-.03,x+.03,.0012),I(u-.05,x+.01,.0012),I(u-.04,o+.035,.0012),I(h-.02,o+.05,.0012),"#e3dcc6",{gloss:.15});const a=I(-n+.03,E.len,0);f.box(a.x-.025,a.y-.06,a.z-.03,a.x+.025,a.y+.025,a.z+.025,te,{gloss:.9}),f.lathe(F(a.x,a.y-.11,a.z),[[.006,0],[.006,.05]],8,te,{gloss:.8}),f.lathe(F(a.x,a.y-.12,a.z),[[0,0],[.018,0],[.018,.012],[0,.012]],12,te,{gloss:.8});const b=F(a.x,a.y+.025,a.z);f.lathe(b,[[.012,0],[.012,.07]],10,te,{gloss:.9});const y=b.clone().add(F(0,.08,0)),S=F(-.45,1.74,.06),T=F(-.27,1.98,.3),q=F(-.2,1.8,.44),K=I(0,.32,0),J=K.clone().sub(q).normalize(),k=(M,P,$,O=te)=>f.tube([M,P],()=>$,8,O,{gloss:1}),z=(M,P)=>P.clone().sub(M).cross(Q).normalize().multiplyScalar(.016);for(const[M,P]of[[y,S],[S,T]]){const $=z(M,P);k(M.clone().add($),P.clone().add($),.006),k(M.clone().sub($),P.clone().sub($),.006);const O=M.clone().lerp(P,.12).add(F(0,-.025,0)),U=M.clone().lerp(P,.62).add(F(0,-.025,0));k(O,U,.0045,"#3a3a3c");for(let R=0;R<=10;R++)f.lathe(O.clone().lerp(U,R/10),[[.0065,-.002],[.0065,.002]],8,"#58585c",{gloss:1.2},U.clone().sub(O).normalize())}for(const M of[y,S,T])f.lathe(M.clone().add(F(0,0,-.022)),[[0,0],[.016,0],[.016,.044],[0,.044]],12,te,{gloss:1},F(0,0,1));const L=q.clone().addScaledVector(J,-.075),C=J.clone().negate(),N=Math.abs(C.y)>.9?Y.clone():Q.clone(),A=[[.118,-.07],[.116,-.055],[.104,-.025],[.08,.02],[.05,.055],[.028,.072],[.012,.078]];l.lathe(q,A.slice(0,3),32,"#2c8b55",{},C,N),l.lathe(q,A.slice(2),32,"#3fa868",{},C,N),l.lathe(q,[[.122,-.074],[.122,-.064],[.117,-.064]],32,"#9ad8a8",{},C,N);const D=A.map(([M,P])=>[M-.004,P]).reverse();t.lathe(q,D,32,"#fff3d6",{},C,N);const B=q.clone().addScaledVector(C,.012),H=[];for(let M=0;M<=8;M++){const P=-Math.PI/2+M/8*Math.PI;H.push([Math.max(5e-4,Math.cos(P)*.032),Math.sin(P)*.034])}return t.lathe(B,H,18,"#ffffff",{},C,N),g.lathe(L,[[.015,-.01],[.015,.025],[.008,.03]],12,te,{gloss:1},C,N),{bulb:B,hood:q,axis:J,target:K,top:L,joint:T}}function v0(v,e,l){v.tube([e,l],()=>.007,8,te,{gloss:1})}export{je as B,E as D,le as L,ie as N,Se as S,F as V,d0 as W,Y as X,Q as Y,Be as Z,Xe as a,Ke as b,ge as c,ce as d,Qe as e,m0 as f,i0 as g,h0 as h,l0 as i,I as j,o0 as k,r0 as l,Ze as m,t0 as n,a0 as o,s0 as p,n0 as q,Ye as r,f0 as s,e0 as t,Je as u,c0 as v,u0 as w,v0 as y};
