var H0=Object.defineProperty;var V0=(s,t,e)=>t in s?H0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>V0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const G0="modulepreload",W0=function(s,t){return new URL(s,t).href},zu={},X0=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=W0(c,n),c in zu)return;zu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===c&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":G0,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="186",q0=0,Fu=1,Y0=2,cr=1,$0=2,or=3,As=0,Sn=1,Zn=2,Fi=0,hr=1,za=2,ku=3,Ou=4,K0=5,so=100,Z0=101,J0=102,Q0=103,j0=104,tm=200,em=201,nm=202,im=203,sp=204,op=205,sm=206,om=207,rm=208,am=209,lm=210,cm=211,hm=212,um=213,fm=214,Lc=0,Ic=1,Dc=2,vr=3,Nc=4,Uc=5,zc=6,Fc=7,Dh=0,dm=1,pm=2,mi=0,rp=1,ap=2,lp=3,cp=4,hp=5,up=6,Nh=7,fp=300,Rs=301,_o=302,Ll=303,Il=304,gl=306,Fa=1e3,Ni=1001,kc=1002,qe=1003,mm=1004,zr=1005,en=1006,Dl=1007,rs=1008,wn=1009,dp=1010,pp=1011,yr=1012,Uh=1013,xi=1014,jn=1015,In=1016,zh=1017,Fh=1018,Mr=1020,mp=35902,gp=35899,xp=1021,vp=1022,Pn=1023,Bi=1026,Es=1027,xl=1028,kh=1029,Cs=1030,Oh=1031,Bh=1033,Ca=33776,Pa=33777,La=33778,Ia=33779,Oc=35840,Bc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,Xc=37496,qc=37488,Yc=37489,ka=37490,$c=37491,Kc=37808,Zc=37809,Jc=37810,Qc=37811,jc=37812,th=37813,eh=37814,nh=37815,ih=37816,sh=37817,oh=37818,rh=37819,ah=37820,lh=37821,ch=36492,hh=36494,uh=36495,fh=36283,dh=36284,Oa=36285,ph=36286,gm=3200,xm=3201,Ba=0,vm=1,is="",Ne="srgb",Ha="srgb-linear",Va="linear",Se="srgb",Nl=7680,ym=519,Mm=512,_m=513,wm=514,Hh=515,Sm=516,bm=517,Vh=518,Em=519,yp=35044,Bu="300 es",fi=2e3,_r=2001;function Tm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Am(){const s=wr("canvas");return s.style.display="block",s}const Hu={};function Ga(...s){const t="THREE."+s.shift();console.log(t,...s)}function Mp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=Mp(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ge(...s){s=Mp(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function go(...s){const t=s.join(" ");t in Hu||(Hu[t]=!0,Qt(...s))}function Rm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Cm={[Lc]:Ic,[Dc]:zc,[Nc]:Fc,[vr]:Uc,[Ic]:Lc,[zc]:Dc,[Fc]:Nc,[Uc]:vr};class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const ur=Math.PI/180,wo=180/Math.PI;function gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Gh(s,t){return(s%t+t)%t}function Pm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Lm(s,t,e){return s!==t?(e-s)/(t-s):0}function fr(s,t,e){return(1-e)*s+e*t}function Im(s,t,e,n){return fr(s,t,1-Math.exp(-e*n))}function Dm(s,t=1){return t-Math.abs(Gh(s,t*2)-t)}function Nm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Um(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function zm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Fm(s,t){return s+Math.random()*(t-s)}function km(s){return s*(.5-Math.random())}function Om(s){s!==void 0&&(Vu=s);let t=Vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bm(s){return s*ur}function Hm(s){return s*wo}function Vm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xm(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _e={DEG2RAD:ur,RAD2DEG:wo,generateUUID:gi,clamp:ae,euclideanModulo:Gh,mapLinear:Pm,inverseLerp:Lm,lerp:fr,damp:Im,pingpong:Dm,smoothstep:Nm,smootherstep:Um,randInt:zm,randFloat:Fm,randFloatSpread:km,seededRandom:Om,degToRad:Bm,radToDeg:Hm,isPowerOfTwo:Vm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Xm,normalize:be,denormalize:Jn},_u=class _u{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_u.prototype.isVector2=!0;let mt=_u;class pe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=o[r+0],d=o[r+1],p=o[r+2],m=o[r+3];if(u!==m||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*m;x<0&&(f=-f,d=-d,p=-p,m=-m,x=-x);let g=1-a;if(x<.9995){const y=Math.acos(x),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),f=l(n/2),d=l(i/2),p=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wu=class wu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wu.prototype.isVector3=!0;let I=wu;const Ul=new I,Gu=new pe,Su=class Su{constructor(t,e,n,i,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],x=i[3],g=i[6],y=i[1],w=i[4],v=i[7],M=i[2],S=i[5],E=i[8];return o[0]=r*m+a*y+l*M,o[3]=r*x+a*w+l*S,o[6]=r*g+a*v+l*E,o[1]=c*m+h*y+u*M,o[4]=c*x+h*w+u*S,o[7]=c*g+h*v+u*E,o[2]=f*m+d*y+p*M,o[5]=f*x+d*w+p*S,o[8]=f*g+d*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*r)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*o-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(r*e-n*o)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;let te=Su;const zl=new te,Wu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qm(){const s={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Se&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Se&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===is?Va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ha]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const xe=qm();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class Ym{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zs===void 0&&(zs=wr("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=ki(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $m=0;class Wh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Fl(i[r].image)):o.push(Fl(i[r]))}else o=Fl(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Fl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ym.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let Km=0;const kl=new I;class on extends Is{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Ni,i=Ni,o=en,r=rs,a=Pn,l=wn,c=on.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=gi(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=fp;on.DEFAULT_ANISOTROPY=1;const bu=class bu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],m=l[2],x=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(d+1)/2,M=(g+1)/2,S=(h+f)/4,E=(u+m)/4,_=(p+x)/4;return w>v&&w>M?w<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(w),i=S/n,o=E/n):v>M?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=S/i,o=_/i):M<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(M),n=E/o,i=_/o),this.set(n,i,o,e),this}let y=Math.sqrt((x-p)*(x-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;let Ee=bu;class Zm extends Is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},o=new on(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Wh(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Zm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _p extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ml=class ml{constructor(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x)}set(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),o=1/Fs.setFromMatrixColumn(t,1).length(),r=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,p=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f+m*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f-m*a,e[4]=-r*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*h,e[9]=m-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,p=a*h,m=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,p=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=p*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-m*u}else if(t.order==="XZY"){const f=r*l,d=r*c,p=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=r*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,jm)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(n,En),Xi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(n,En)),Xi.normalize(),Fr.crossVectors(En,Xi),i[0]=Xi.x,i[4]=Fr.x,i[8]=En.x,i[1]=Xi.y,i[5]=Fr.y,i[9]=En.y,i[2]=Xi.z,i[6]=Fr.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],x=n[10],g=n[14],y=n[3],w=n[7],v=n[11],M=n[15],S=i[0],E=i[4],_=i[8],b=i[12],T=i[1],C=i[5],P=i[9],U=i[13],F=i[2],k=i[6],$=i[10],Y=i[14],it=i[3],G=i[7],Z=i[11],st=i[15];return o[0]=r*S+a*T+l*F+c*it,o[4]=r*E+a*C+l*k+c*G,o[8]=r*_+a*P+l*$+c*Z,o[12]=r*b+a*U+l*Y+c*st,o[1]=h*S+u*T+f*F+d*it,o[5]=h*E+u*C+f*k+d*G,o[9]=h*_+u*P+f*$+d*Z,o[13]=h*b+u*U+f*Y+d*st,o[2]=p*S+m*T+x*F+g*it,o[6]=p*E+m*C+x*k+g*G,o[10]=p*_+m*P+x*$+g*Z,o[14]=p*b+m*U+x*Y+g*st,o[3]=y*S+w*T+v*F+M*it,o[7]=y*E+w*C+v*k+M*G,o[11]=y*_+w*P+v*$+M*Z,o[15]=y*b+w*U+v*Y+M*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],m=t[7],x=t[11],g=t[15],y=l*d-c*f,w=a*d-c*u,v=a*f-l*u,M=r*d-c*h,S=r*f-l*h,E=r*u-a*h;return e*(m*y-x*w+g*v)-n*(p*y-x*M+g*S)+i*(p*w-m*M+g*E)-o*(p*v-m*S+x*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+i*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],m=t[13],x=t[14],g=t[15],y=e*a-n*r,w=e*l-i*r,v=e*c-o*r,M=n*l-i*a,S=n*c-o*a,E=i*c-o*l,_=h*m-u*p,b=h*x-f*p,T=h*g-d*p,C=u*x-f*m,P=u*g-d*m,U=f*g-d*x,F=y*U-w*P+v*C+M*T-S*b+E*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return t[0]=(a*U-l*P+c*C)*k,t[1]=(i*P-n*U-o*C)*k,t[2]=(m*E-x*S+g*M)*k,t[3]=(f*S-u*E-d*M)*k,t[4]=(l*T-r*U-c*b)*k,t[5]=(e*U-i*T+o*b)*k,t[6]=(x*v-p*E-g*w)*k,t[7]=(h*E-f*v+d*w)*k,t[8]=(r*P-a*T+c*_)*k,t[9]=(n*T-e*P-o*_)*k,t[10]=(p*S-m*v+g*y)*k,t[11]=(u*v-h*S-d*y)*k,t[12]=(a*b-r*C-l*_)*k,t[13]=(e*C-n*b+i*_)*k,t[14]=(m*w-p*M-x*y)*k,t[15]=(h*M-u*w+f*y)*k,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,p=o*u,m=r*h,x=r*u,g=a*u,y=l*c,w=l*h,v=l*u,M=n.x,S=n.y,E=n.z;return i[0]=(1-(m+g))*M,i[1]=(d+v)*M,i[2]=(p-w)*M,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+g))*S,i[6]=(x+y)*S,i[7]=0,i[8]=(p+w)*E,i[9]=(x-y)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Fs.set(i[0],i[1],i[2]).length();const a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();o<0&&(r=-r),Vn.copy(this);const c=1/r,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,i,o,r,a=fi,l=!1){const c=this.elements,h=2*o/(e-t),u=2*o/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,m;if(l)p=o/(r-o),m=r*o/(r-o);else if(a===fi)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===_r)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=fi,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,m;if(l)p=1/(r-o),m=r/(r-o);else if(a===fi)p=-2/(r-o),m=-(r+o)/(r-o);else if(a===_r)p=-1/(r-o),m=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ml.prototype.isMatrix4=!0;let Kt=ml;const Fs=new I,Vn=new Kt,Qm=new I(0,0,0),jm=new I(1,1,1),Xi=new I,Fr=new I,En=new I,qu=new Kt,Yu=new pe;class Dn{constructor(t=0,e=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tg=0;const $u=new I,ks=new pe,_i=new Kt,kr=new I,Po=new I,eg=new I,ng=new pe,Ku=new I(1,0,0),Zu=new I(0,1,0),Ju=new I(0,0,1),Qu={type:"added"},ig={type:"removed"},Os={type:"childadded",child:null},Ol={type:"childremoved",child:null};class He extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new I,e=new Dn,n=new pe,i=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new te}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Ku,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ku,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Po,kr,this.up):_i.lookAt(kr,Po,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Os.child=t,this.dispatchEvent(Os),Os.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*i,o[13]+=n-o[1]*e-o[5]*n-o[9]*i,o[14]+=i-o[2]*e-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class he extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const m of t.hand.values()){const x=e.getJointPose(m,n),g=this._getHandJoint(c,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Gh(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Hl(r,o,t+1/3),this.g=Hl(r,o,t),this.b=Hl(r,o,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return xe.workingToColorSpace(ln.copy(this),t),Math.round(ae(ln.r*255,0,255))*65536+Math.round(ae(ln.g*255,0,255))*256+Math.round(ae(ln.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,o=ln.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ne){xe.workingToColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Or);const n=fr(qi.h,Or.h,e),i=fr(qi.s,Or.s,e),o=fr(qi.l,Or.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ct;Ct.NAMES=wp;class qh extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gn=new I,wi=new I,Vl=new I,Si=new I,Bs=new I,Hs=new I,ju=new I,Gl=new I,Wl=new I,Xl=new I,ql=new Ee,Yl=new Ee,$l=new Ee;class Bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Gn.subVectors(i,e),wi.subVectors(n,e),Vl.subVectors(t,e);const r=Gn.dot(Gn),a=Gn.dot(wi),l=Gn.dot(Vl),c=wi.dot(wi),h=wi.dot(Vl),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(r*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Si.x),l.addScaledVector(r,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return ql.setScalar(0),Yl.setScalar(0),$l.setScalar(0),ql.fromBufferAttribute(t,e),Yl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ql,o.x),r.addScaledVector(Yl,o.y),r.addScaledVector($l,o.z),r}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),wi.subVectors(t,e),Gn.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Gn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Bs.subVectors(i,n),Hs.subVectors(o,n),Gl.subVectors(t,n);const l=Bs.dot(Gl),c=Hs.dot(Gl);if(l<=0&&c<=0)return e.copy(n);Wl.subVectors(t,i);const h=Bs.dot(Wl),u=Hs.dot(Wl);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Bs,r);Xl.subVectors(t,o);const d=Bs.dot(Xl),p=Hs.dot(Xl);if(p>=0&&d<=p)return e.copy(o);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Hs,a);const x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return ju.subVectors(o,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(ju,a);const g=1/(x+m+f);return r=m*g,a=f*g,e.copy(n).addScaledVector(Bs,r).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ds{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Wn):Wn.fromBufferAttribute(o,r),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),Hr.subVectors(this.max,Lo),Vs.subVectors(t.a,Lo),Gs.subVectors(t.b,Lo),Ws.subVectors(t.c,Lo),Yi.subVectors(Gs,Vs),$i.subVectors(Ws,Gs),gs.subVectors(Vs,Ws);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!Kl(e,Vs,Gs,Ws,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,Vs,Gs,Ws,Hr))?!1:(Vr.crossVectors(Yi,$i),e=[Vr.x,Vr.y,Vr.z],Kl(e,Vs,Gs,Ws,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,Br=new Ds,Vs=new I,Gs=new I,Ws=new I,Yi=new I,$i=new I,gs=new I,Lo=new I,Hr=new I,Vr=new I,xs=new I;function Kl(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){xs.fromArray(s,o);const a=i.x*Math.abs(xs.x)+i.y*Math.abs(xs.y)+i.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Li=og();function og(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const o=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,o[l]=c|h}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:r,offsetTable:a}}function rg(s){Math.abs(s)>65504&&Qt("DataUtils.toHalfFloat(): Value out of range."),s=ae(s,-65504,65504),Li.floatView[0]=s;const t=Li.uint32View[0],e=t>>23&511;return Li.baseTable[e]+((t&8388607)>>Li.shiftTable[e])}function ag(s){const t=s>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[t]+(s&1023)]+Li.exponentTable[t],Li.floatView[0]}class lg{static toHalfFloat(t){return rg(t)}static fromHalfFloat(t){return ag(t)}}const Ge=new I,Gr=new mt;let cg=0;class xn extends Is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yp,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),o=be(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Sp extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bp extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ot extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hg=new Ds,Io=new I,Zl=new I;class Ao{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hg.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const e=Io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(Zl)),this.expandByPoint(Io.copy(t.center).sub(Zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ug=0;const Un=new Kt,Jl=new He,Xs=new I,Tn=new Ds,Do=new Ds,Je=new I;class we extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?bp:Sp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Tn.min,Do.min),Tn.expandByPoint(Je),Je.addVectors(Tn.max,Do.max),Tn.expandByPoint(Je)):(Tn.expandByPoint(Do.min),Tn.expandByPoint(Do.max))}Tn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Je.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),Je.add(Xs)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;const c=new I,h=new I,u=new I,f=new mt,d=new mt,p=new mt,m=new I,x=new I;function g(_,b,T){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,T),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(m),a[b].add(m),a[T].add(m),l[_].add(x),l[b].add(x),l[T].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const T=y[_],C=T.start,P=T.count;for(let U=C,F=C+P;U<F;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new I,v=new I,M=new I,S=new I;function E(_){M.fromBufferAttribute(i,_),S.copy(M);const b=a[_];w.copy(b),w.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(S,b);const C=v.dot(l[_])<0?-1:1;r.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,b=y.length;_<b;++_){const T=y[_],C=T.start,P=T.count;for(let U=C,F=C+P;U<F;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new xn(f,h,u)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yp,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const un=new I;class Wa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),o=be(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ql=new I,dg=new I,pg=new te;class Ri{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ql.subVectors(n,e).cross(dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ql),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pg.getNormalMatrix(t),i=this.coplanarPoint(Ql).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let mg=0;class ds extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=hr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=op,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vl extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qs;const No=new I,Ys=new I,$s=new I,Ks=new mt,Uo=new mt,Ep=new Kt,Wr=new I,zo=new I,Xr=new I,tf=new mt,jl=new mt,ef=new mt;class Yh extends He{constructor(t=new vl){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fg(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new Wa(n,3,0,!1)),qs.setAttribute("uv",new Wa(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Ep.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-$s.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;qr(Wr.set(-.5,-.5,0),$s,r,Ys,i,o),qr(zo.set(.5,-.5,0),$s,r,Ys,i,o),qr(Xr.set(.5,.5,0),$s,r,Ys,i,o),tf.set(0,0),jl.set(1,0),ef.set(1,1);let a=t.ray.intersectTriangle(Wr,zo,Xr,!1,No);if(a===null&&(qr(zo.set(-.5,.5,0),$s,r,Ys,i,o),jl.set(0,1),a=t.ray.intersectTriangle(Wr,Xr,zo,!1,No),a===null))return;const l=t.ray.origin.distanceTo(No);l<t.near||l>t.far||e.push({distance:l,point:No.clone(),uv:Bn.getInterpolation(No,Wr,zo,Xr,tf,jl,ef,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qr(s,t,e,n,i,o){Ks.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Uo.x=o*Ks.x-i*Ks.y,Uo.y=i*Ks.x+o*Ks.y):Uo.copy(Ks),s.copy(t),s.x+=Uo.x,s.y+=Uo.y,s.applyMatrix4(Ep)}const Ei=new I,tc=new I,Yr=new I,$r=new I;class $h{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){tc.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),$r.copy(this.origin).sub(tc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Yr),a=$r.dot(this.direction),l=-$r.dot(Yr),c=$r.lengthSq(),h=Math.abs(1-r*r);let u,f,d,p;if(h>0)if(u=r*l-a,f=r*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){const m=1/h;u*=m,f*=m,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(tc).addScaledVector(Yr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,i,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-r.x,f=t.y-r.y,d=t.z-r.z,p=e.x-r.x,m=e.y-r.y,x=e.z-r.z,g=n.x-r.x,y=n.y-r.y,w=n.z-r.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h);let E,_,b,T,C,P,U,F,k,$,Y,it;if(v>=M&&v>=S?(b=l,P=u,k=p,it=g,l>=0?(E=c,_=h,T=f,C=d,U=m,F=x,$=y,Y=w):(E=h,_=c,T=d,C=f,U=x,F=m,$=w,Y=y)):M>=S?(b=c,P=f,k=m,it=y,c>=0?(E=h,_=l,T=d,C=u,U=x,F=p,$=w,Y=g):(E=l,_=h,T=u,C=d,U=p,F=x,$=g,Y=w)):(b=h,P=d,k=x,it=w,h>=0?(E=l,_=c,T=u,C=f,U=p,F=m,$=g,Y=y):(E=c,_=l,T=f,C=u,U=m,F=p,$=y,Y=g)),b===0)return null;const G=E/b,Z=_/b,st=1/b,ut=T-G*P,B=C-Z*P,H=U-G*k,L=F-Z*k,V=$-G*it,D=Y-Z*it,z=V*L-D*H,X=ut*D-B*V,tt=H*B-L*ut;if(i){if(z<0||X<0||tt<0)return null}else if((z<0||X<0||tt<0)&&(z>0||X>0||tt>0))return null;const et=z+X+tt;if(et===0)return null;const xt=st*(z*P+X*k+tt*it);return(et>0?xt<0:xt>0)?null:this.at(xt/et,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nf=new Kt,vs=new $h,Kr=new Ao,sf=new I,Zr=new I,Jr=new I,Qr=new I,ec=new I,jr=new I,of=new I,ta=new I;class wt extends He{constructor(t=new we,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){jr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(ec.fromBufferAttribute(u,t),r?jr.addScaledVector(ec,h):jr.addScaledVector(ec.sub(e),h))}e.add(jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(Kr.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Kr,sf)===null||vs.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(nf.copy(o).invert(),vs.copy(t.ray).applyMatrix4(nf),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=r[x.materialIndex],y=Math.max(x.start,d.start),w=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,M=w;v<M;v+=3){const S=a.getX(v),E=a.getX(v+1),_=a.getX(v+2);i=ea(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const y=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);i=ea(this,r,t,n,c,h,u,y,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=r[x.materialIndex],y=Math.max(x.start,d.start),w=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,M=w;v<M;v+=3){const S=v,E=v+1,_=v+2;i=ea(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const y=x,w=x+1,v=x+2;i=ea(this,r,t,n,c,h,u,y,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function gg(s,t,e,n,i,o,r,a){let l;if(t.side===Sn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===As,a),l===null)return null;ta.copy(a),ta.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:s}}function ea(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,Zr),s.getVertexPosition(l,Jr),s.getVertexPosition(c,Qr);const h=gg(s,t,e,n,Zr,Jr,Qr,of);if(h){const u=new I;Bn.getBarycoord(of,Zr,Jr,Qr,u),i&&(h.uv=Bn.getInterpolatedAttribute(i,a,l,c,u,new mt)),o&&(h.uv1=Bn.getInterpolatedAttribute(o,a,l,c,u,new mt)),r&&(h.normal=Bn.getInterpolatedAttribute(r,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Bn.getNormal(Zr,Jr,Qr,f.normal),h.face=f,h.barycoord=u}return h}class So extends on{constructor(t=null,e=1,n=1,i,o,r,a,l,c=qe,h=qe,u,f){super(null,r,a,l,c,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rf extends xn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zs=new Kt,af=new Kt,na=[],lf=new Ds,xg=new Kt,Fo=new wt,ko=new Ao;class vo extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),lf.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(lf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ao),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),ko.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(ko)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),t.ray.intersectsSphere(ko)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Zs),af.multiplyMatrices(n,Zs),Fo.matrixWorld=af,Fo.raycast(t,na);for(let r=0,a=na.length;r<a;r++){const l=na[r];l.instanceId=o,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new rf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new So(new Float32Array(i*this.count),i,this.count,xl,jn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ys=new Ao,vg=new mt(.5,.5),ia=new I;class Kh{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,o=new Ri,r=new Ri){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){const i=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],m=o[9],x=o[10],g=o[11],y=o[12],w=o[13],v=o[14],M=o[15];if(i[0].setComponents(c-r,d-h,g-p,M-y).normalize(),i[1].setComponents(c+r,d+h,g+p,M+y).normalize(),i[2].setComponents(c+a,d+u,g+m,M+w).normalize(),i[3].setComponents(c-a,d-u,g-m,M-w).normalize(),n)i[4].setComponents(l,f,x,v).normalize(),i[5].setComponents(c-l,d-f,g-x,M-v).normalize();else if(i[4].setComponents(c-l,d-f,g-x,M-v).normalize(),e===fi)i[5].setComponents(c+l,d+f,g+x,M+v).normalize();else if(e===_r)i[5].setComponents(l,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const e=vg.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ia.x=i.normal.x>0?t.max.x:t.min.x,ia.y=i.normal.y>0?t.max.y:t.min.y,ia.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tp extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xa=new I,qa=new I,cf=new Kt,Oo=new $h,sa=new Ao,nc=new I,hf=new I;class yg extends He{constructor(t=new we,e=new Tp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Xa.fromBufferAttribute(e,i-1),qa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new Ot(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=o,t.ray.intersectsSphere(sa)===!1)return;cf.copy(i).invert(),Oo.copy(t.ray).applyMatrix4(cf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=d,x=p-1;m<x;m+=c){const g=h.getX(m),y=h.getX(m+1),w=oa(this,t,Oo,l,g,y,m);w&&e.push(w)}if(this.isLineLoop){const m=h.getX(p-1),x=h.getX(d),g=oa(this,t,Oo,l,m,x,p-1);g&&e.push(g)}}else{const d=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let m=d,x=p-1;m<x;m+=c){const g=oa(this,t,Oo,l,m,m+1,m);g&&e.push(g)}if(this.isLineLoop){const m=oa(this,t,Oo,l,p-1,d,p-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function oa(s,t,e,n,i,o,r){const a=s.geometry.attributes.position;if(Xa.fromBufferAttribute(a,i),qa.fromBufferAttribute(a,o),e.distanceSqToSegment(Xa,qa,nc,hf)>n)return;nc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(nc);if(!(c<t.near||c>t.far))return{distance:c,point:hf.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const uf=new I,ff=new I;class Mg extends yg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)uf.fromBufferAttribute(e,i),ff.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uf.distanceTo(ff);t.setAttribute("lineDistance",new Ot(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ap extends on{constructor(t=[],e=Rs,n,i,o,r,a,l,c,h){super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ps extends on{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sr extends on{constructor(t,e,n=xi,i,o,r,a=qe,l=qe,c,h=Bi,u=1){if(h!==Bi&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _g extends Sr{constructor(t,e=xi,n=Rs,i,o,r=qe,a=qe,l,c=Bi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rp extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nn extends we{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function p(m,x,g,y,w,v,M,S,E,_,b){const T=v/E,C=M/_,P=v/2,U=M/2,F=S/2,k=E+1,$=_+1;let Y=0,it=0;const G=new I;for(let Z=0;Z<$;Z++){const st=Z*C-U;for(let ut=0;ut<k;ut++){const B=ut*T-P;G[m]=B*y,G[x]=st*w,G[g]=F,c.push(G.x,G.y,G.z),G[m]=0,G[x]=0,G[g]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ut/E),u.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let st=0;st<E;st++){const ut=f+st+k*Z,B=f+st+k*(Z+1),H=f+(st+1)+k*(Z+1),L=f+(st+1)+k*Z;l.push(ut,B,L),l.push(B,H,L),it+=6}a.addGroup(d,it,b),d+=it,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oi extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new I,h=new mt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends we{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],d=[];let p=0;const m=[],x=n/2;let g=0;y(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function y(){const v=new I,M=new I;let S=0;const E=(e-t)/n;for(let _=0;_<=o;_++){const b=[],T=_/o,C=T*(e-t)+t;for(let P=0;P<=i;P++){const U=P/i,F=U*l+a,k=Math.sin(F),$=Math.cos(F);M.x=C*k,M.y=-T*n+x,M.z=C*$,u.push(M.x,M.y,M.z),v.set(k,E,$).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-T),b.push(p++)}m.push(b)}for(let _=0;_<i;_++)for(let b=0;b<o;b++){const T=m[b][_],C=m[b+1][_],P=m[b+1][_+1],U=m[b][_+1];(t>0||b!==0)&&(h.push(T,C,U),S+=3),(e>0||b!==o-1)&&(h.push(C,P,U),S+=3)}c.addGroup(g,S,0),g+=S}function w(v){const M=p,S=new mt,E=new I;let _=0;const b=v===!0?t:e,T=v===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,x*T,0),f.push(0,T,0),d.push(.5,.5),p++;const C=p;for(let P=0;P<=i;P++){const F=P/i*l+a,k=Math.cos(F),$=Math.sin(F);E.x=b*$,E.y=x*T,E.z=b*k,u.push(E.x,E.y,E.z),f.push(0,T,0),S.x=k*.5+.5,S.y=$*.5*T+.5,d.push(S.x,S.y),p++}for(let P=0;P<i;P++){const U=M+P,F=C+P;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new mt:new I);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],o=[],r=[],a=new I,l=new Kt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new I)}o[0]=new I,r[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ae(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(ae(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zh extends Mi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wg extends Zh{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Jh(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const df=new I,pf=new I,ic=new Jh,sc=new Jh,oc=new Jh;class br extends Mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(pf.subVectors(i[0],i[1]).add(i[0]),c=pf);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(df.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=df),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),x<1e-4&&(x=m),ic.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,m,x),sc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,m,x),oc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,m,x)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),oc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ic.calc(l),sc.calc(l),oc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mf(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function Sg(s,t){const e=1-s;return e*e*t}function bg(s,t){return 2*(1-s)*s*t}function Eg(s,t){return s*s*t}function dr(s,t,e,n){return Sg(s,t)+bg(s,e)+Eg(s,n)}function Tg(s,t){const e=1-s;return e*e*e*t}function Ag(s,t){const e=1-s;return 3*e*e*s*t}function Rg(s,t){return 3*(1-s)*s*s*t}function Cg(s,t){return s*s*s*t}function pr(s,t,e,n,i){return Tg(s,t)+Ag(s,e)+Rg(s,n)+Cg(s,i)}class Cp extends Mi{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(pr(t,i.x,o.x,r.x,a.x),pr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pp extends Mi{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(pr(t,i.x,o.x,r.x,a.x),pr(t,i.y,o.y,r.y,a.y),pr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lp extends Mi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Er extends Mi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ip extends Mi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(dr(t,i.x,o.x,r.x),dr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Mi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(dr(t,i.x,o.x,r.x),dr(t,i.y,o.y,r.y),dr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(mf(a,l.x,c.x,h.x,u.x),mf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Ya=Object.freeze({__proto__:null,ArcCurve:wg,CatmullRomCurve3:br,CubicBezierCurve:Cp,CubicBezierCurve3:Pp,EllipseCurve:Zh,LineCurve:Lp,LineCurve3:Er,QuadraticBezierCurve:Ip,QuadraticBezierCurve3:Qh,SplineCurve:Dp});class jh extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ya[i.type]().fromJSON(i))}return this}}let yo=class extends jh{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lp(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Ip(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Cp(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new Zh(t,e,n,i,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class Ir extends yo{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yo().fromJSON(i))}return this}}function Pg(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Np(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Ug(s,t,o,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let f=e;f<i;f+=e){const d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Tr(o,r,e,a,l,c,0),r}function Np(s,t,e,n,i){let o;if(i===qg(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=gf(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=gf(r/n|0,s[r],s[r+1],o);return o&&bo(o,o.next)&&(Rr(o),o=o.next),o}function Ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Bg(s,n,i,o);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(o?Ig(s,n,i,o):Lg(s)){t.push(l.i,s.i,c.i),Rr(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=Dg(Ps(s),t),Tr(s,t,e,n,i,o,2)):r===2&&Ng(s,t,e,n,i,o):Tr(Ps(s),t,e,n,i,o,1);break}}}function Lg(s){const t=s.prev,e=s,n=s.next;if(Fe(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,o,r),u=Math.min(a,l,c),f=Math.max(i,o,r),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&rr(i,a,o,l,r,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ig(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Fe(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,f=r.y,d=Math.min(a,l,c),p=Math.min(h,u,f),m=Math.max(a,l,c),x=Math.max(h,u,f),g=mh(d,p,t,e,n),y=mh(m,x,t,e,n);let w=s.prevZ,v=s.nextZ;for(;w&&w.z>=g&&v&&v.z<=y;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&rr(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==r&&rr(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&rr(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==r&&rr(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dg(s,t){let e=s;do{const n=e.prev,i=e.next.next;!bo(n,i)&&zp(n,e,e.next,i)&&Ar(n,i)&&Ar(i,n)&&(t.push(n.i,e.i,i.i),Rr(e),Rr(e.next),e=s=i),e=e.next}while(e!==s);return Ps(e)}function Ng(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Gg(r,a)){let l=Fp(r,a);r=Ps(r,r.next),l=Ps(l,l.next),Tr(r,t,e,n,i,o,0),Tr(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Ug(s,t,e,n){const i=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=Np(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Vg(c))}i.sort(zg);for(let o=0;o<i.length;o++)e=Fg(i[o],e);return e}function zg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Fg(s,t){const e=kg(s,t);if(!e)return t;const n=Fp(e,s);return Ps(n,n.next),Ps(e,e.next)}function kg(s,t){let e=t;const n=s.x,i=s.y;let o=-1/0,r;if(bo(s,e))return e;do{if(bo(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Up(i<c?n:o,i,l,c,i<c?o:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Ar(e,s)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Og(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function Og(s,t){return Fe(s.prev,s,t.prev)<0&&Fe(t.next,s,s.next)<0}function Bg(s,t,e,n){let i=s;do i.z===0&&(i.z=mh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hg(i)}function Hg(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function mh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Vg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Up(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function rr(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Up(s,t,e,n,i,o,r,a)}function Gg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Wg(s,t)&&(Ar(s,t)&&Ar(t,s)&&Xg(s,t)&&(Fe(s.prev,s,t.prev)||Fe(s,t.prev,t))||bo(s,t)&&Fe(s.prev,s,s.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function bo(s,t){return s.x===t.x&&s.y===t.y}function zp(s,t,e,n){const i=aa(Fe(s,t,e)),o=aa(Fe(s,t,n)),r=aa(Fe(e,n,s)),a=aa(Fe(e,n,t));return!!(i!==o&&r!==a||i===0&&ra(s,e,t)||o===0&&ra(s,n,t)||r===0&&ra(e,s,n)||a===0&&ra(e,t,n))}function ra(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function aa(s){return s>0?1:s<0?-1:0}function Wg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&zp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ar(s,t){return Fe(s.prev,s,s.next)<0?Fe(s,t,s.next)>=0&&Fe(s,s.prev,t)>=0:Fe(s,t,s.prev)<0||Fe(s,s.next,t)<0}function Xg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Fp(s,t){const e=gh(s.i,s.x,s.y),n=gh(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function gf(s,t,e,n){const i=gh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qg(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Yg{static triangulate(t,e,n=2){return Pg(t,e,n)}}class di{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];xf(t),vf(n,t);let r=t.length;e.forEach(xf);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,vf(n,e[l]);const a=Yg.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function xf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function vf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class yl extends we{constructor(t=new Ir([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Ot(i,3)),this.setAttribute("uv",new Ot(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:$g;let w,v=!1,M,S,E,_;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;const lt=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,lt),S=new I,E=new I,_=new I}f||(x=0,d=0,p=0,m=0);const b=a.extractPoints(c);let T=b.shape;const C=b.holes;if(!di.isClockWise(T)){T=T.reverse();for(let lt=0,pt=C.length;lt<pt;lt++){const ft=C[lt];di.isClockWise(ft)&&(C[lt]=ft.reverse())}}function U(lt){const ft=10000000000000001e-36;let yt=lt[0];for(let vt=1;vt<=lt.length;vt++){const Gt=vt%lt.length,Bt=lt[Gt],Zt=Bt.x-yt.x,qt=Bt.y-yt.y,K=Zt*Zt+qt*qt,me=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(yt.x),Math.abs(yt.y)),se=ft*me*me;if(K<=se){lt.splice(Gt,1),vt--;continue}yt=Bt}}U(T),C.forEach(U);const F=C.length,k=T;for(let lt=0;lt<F;lt++){const pt=C[lt];T=T.concat(pt)}function $(lt,pt,ft){return pt||ge("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(pt,ft)}const Y=T.length;function it(lt,pt,ft){let yt,vt,Gt;const Bt=lt.x-pt.x,Zt=lt.y-pt.y,qt=ft.x-lt.x,K=ft.y-lt.y,me=Bt*Bt+Zt*Zt,se=Bt*K-Zt*qt;if(Math.abs(se)>Number.EPSILON){const O=Math.sqrt(me),A=Math.sqrt(qt*qt+K*K),nt=pt.x-Zt/O,ot=pt.y+Bt/O,ht=ft.x-K/A,St=ft.y+qt/A,q=((ht-nt)*K-(St-ot)*qt)/(Bt*K-Zt*qt);yt=nt+Bt*q-lt.x,vt=ot+Zt*q-lt.y;const W=yt*yt+vt*vt;if(W<=2)return new mt(yt,vt);Gt=Math.sqrt(W/2)}else{let O=!1;Bt>Number.EPSILON?qt>Number.EPSILON&&(O=!0):Bt<-Number.EPSILON?qt<-Number.EPSILON&&(O=!0):Math.sign(Zt)===Math.sign(K)&&(O=!0),O?(yt=-Zt,vt=Bt,Gt=Math.sqrt(me)):(yt=Bt,vt=Zt,Gt=Math.sqrt(me/2))}return new mt(yt/Gt,vt/Gt)}const G=[];for(let lt=0,pt=k.length,ft=pt-1,yt=lt+1;lt<pt;lt++,ft++,yt++)ft===pt&&(ft=0),yt===pt&&(yt=0),G[lt]=it(k[lt],k[ft],k[yt]);const Z=[];let st,ut=G.concat();for(let lt=0,pt=F;lt<pt;lt++){const ft=C[lt];st=[];for(let yt=0,vt=ft.length,Gt=vt-1,Bt=yt+1;yt<vt;yt++,Gt++,Bt++)Gt===vt&&(Gt=0),Bt===vt&&(Bt=0),st[yt]=it(ft[yt],ft[Gt],ft[Bt]);Z.push(st),ut=ut.concat(st)}let B;if(x===0)B=di.triangulateShape(k,C);else{const lt=[],pt=[];for(let ft=0;ft<x;ft++){const yt=ft/x,vt=d*Math.cos(yt*Math.PI/2),Gt=p*Math.sin(yt*Math.PI/2)+m;for(let Bt=0,Zt=k.length;Bt<Zt;Bt++){const qt=$(k[Bt],G[Bt],Gt);X(qt.x,qt.y,-vt),yt===0&&lt.push(qt)}for(let Bt=0,Zt=F;Bt<Zt;Bt++){const qt=C[Bt];st=Z[Bt];const K=[];for(let me=0,se=qt.length;me<se;me++){const O=$(qt[me],st[me],Gt);X(O.x,O.y,-vt),yt===0&&K.push(O)}yt===0&&pt.push(K)}}B=di.triangulateShape(lt,pt)}const H=B.length,L=p+m;for(let lt=0;lt<Y;lt++){const pt=f?$(T[lt],ut[lt],L):T[lt];v?(E.copy(M.normals[0]).multiplyScalar(pt.x),S.copy(M.binormals[0]).multiplyScalar(pt.y),_.copy(w[0]).add(E).add(S),X(_.x,_.y,_.z)):X(pt.x,pt.y,0)}for(let lt=1;lt<=h;lt++)for(let pt=0;pt<Y;pt++){const ft=f?$(T[pt],ut[pt],L):T[pt];v?(E.copy(M.normals[lt]).multiplyScalar(ft.x),S.copy(M.binormals[lt]).multiplyScalar(ft.y),_.copy(w[lt]).add(E).add(S),X(_.x,_.y,_.z)):X(ft.x,ft.y,u/h*lt)}for(let lt=x-1;lt>=0;lt--){const pt=lt/x,ft=d*Math.cos(pt*Math.PI/2),yt=p*Math.sin(pt*Math.PI/2)+m;for(let vt=0,Gt=k.length;vt<Gt;vt++){const Bt=$(k[vt],G[vt],yt);X(Bt.x,Bt.y,u+ft)}for(let vt=0,Gt=C.length;vt<Gt;vt++){const Bt=C[vt];st=Z[vt];for(let Zt=0,qt=Bt.length;Zt<qt;Zt++){const K=$(Bt[Zt],st[Zt],yt);v?X(K.x,K.y+w[h-1].y,w[h-1].x+ft):X(K.x,K.y,u+ft)}}}V(),D();function V(){const lt=i.length/3;if(f){let pt=0,ft=Y*pt;for(let yt=0;yt<H;yt++){const vt=B[yt];tt(vt[2]+ft,vt[1]+ft,vt[0]+ft)}pt=h+x*2,ft=Y*pt;for(let yt=0;yt<H;yt++){const vt=B[yt];tt(vt[0]+ft,vt[1]+ft,vt[2]+ft)}}else{for(let pt=0;pt<H;pt++){const ft=B[pt];tt(ft[2],ft[1],ft[0])}for(let pt=0;pt<H;pt++){const ft=B[pt];tt(ft[0]+Y*h,ft[1]+Y*h,ft[2]+Y*h)}}n.addGroup(lt,i.length/3-lt,0)}function D(){const lt=i.length/3;let pt=0;z(k,pt),pt+=k.length;for(let ft=0,yt=C.length;ft<yt;ft++){const vt=C[ft];z(vt,pt),pt+=vt.length}n.addGroup(lt,i.length/3-lt,1)}function z(lt,pt){let ft=lt.length;for(;--ft>=0;){const yt=ft;let vt=ft-1;vt<0&&(vt=lt.length-1);for(let Gt=0,Bt=h+x*2;Gt<Bt;Gt++){const Zt=Y*Gt,qt=Y*(Gt+1),K=pt+yt+Zt,me=pt+vt+Zt,se=pt+vt+qt,O=pt+yt+qt;et(K,me,se,O)}}}function X(lt,pt,ft){l.push(lt),l.push(pt),l.push(ft)}function tt(lt,pt,ft){xt(lt),xt(pt),xt(ft);const yt=i.length/3,vt=y.generateTopUV(n,i,yt-3,yt-2,yt-1);_t(vt[0]),_t(vt[1]),_t(vt[2])}function et(lt,pt,ft,yt){xt(lt),xt(pt),xt(yt),xt(pt),xt(ft),xt(yt);const vt=i.length/3,Gt=y.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);_t(Gt[0]),_t(Gt[1]),_t(Gt[3]),_t(Gt[1]),_t(Gt[2]),_t(Gt[3])}function xt(lt){i.push(l[lt*3+0]),i.push(l[lt*3+1]),i.push(l[lt*3+2])}function _t(lt){o.push(lt.x),o.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ya[i.type]().fromJSON(i)),new yl(n,t.options)}}const $g={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(o,r),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[o*3],x=t[o*3+1],g=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new mt(r,1-l),new mt(c,1-u),new mt(f,1-p),new mt(m,1-g)]:[new mt(a,1-l),new mt(h,1-u),new mt(d,1-p),new mt(x,1-g)]}};function Kg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ml extends we{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new I,f=new mt,d=new I,p=new I,m=new I;let x=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-x,d.z=g*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-x,d.z=g*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let y=0;y<=e;y++){const w=n+y*h*i,v=Math.sin(w),M=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*M,r.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);const E=l[3*S+0]*v,_=l[3*S+1],b=l[3*S+0]*M;c.push(E,_,b)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const v=w+y*t.length,M=v,S=v+t.length,E=v+t.length+1,_=v+1;o.push(M,S,_),o.push(E,_,S)}this.setIndex(o),this.setAttribute("position",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2)),this.setAttribute("normal",new Ot(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.points,t.segments,t.phiStart,t.phiLength)}}class Ue extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],m=[],x=[];for(let g=0;g<h;g++){const y=g*f-r;for(let w=0;w<c;w++){const v=w*u-o;p.push(v,-y,0),m.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const w=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),S=y+1+c*g;d.push(w,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(m,3)),this.setAttribute("uv",new Ot(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class tu extends we{constructor(t=new Ir([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ot(i,3)),this.setAttribute("normal",new Ot(o,3)),this.setAttribute("uv",new Ot(r,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const p=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const y=p[x];di.isClockWise(y)===!0&&(p[x]=y.reverse())}const m=di.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const y=p[x];d=d.concat(y)}for(let x=0,g=d.length;x<g;x++){const y=d[x];i.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let x=0,g=m.length;x<g;x++){const y=m[x],w=y[0]+u,v=y[1]+u,M=y[2]+u;n.push(w,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Zg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new tu(n,t.curveSegments)}}function Zg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ro extends we{constructor(t=new Qh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new I,l=new I,c=new mt;let h=new I;const u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(d,2));function m(){for(let w=0;w<e;w++)x(w);x(o===!1?e:0),y(),g()}function x(w){h=t.getPointAt(w/e,h);const v=r.normals[w],M=r.binormals[w];for(let S=0;S<=i;S++){const E=S/i*Math.PI*2,_=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+_*M.x,l.y=b*v.y+_*M.y,l.z=b*v.z+_*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){const M=(i+1)*(w-1)+(v-1),S=(i+1)*w+(v-1),E=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(M,S,_),p.push(S,E,_)}}function y(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ro(new Ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Eo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(yf(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(yf(i[0])){const o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();t[e][n]=o}else t[e][n]=i.slice();else t[e][n]=i}}return t}function dn(s){const t={};for(let e=0;e<s.length;e++){const n=Eo(s[e]);for(const i in n)t[i]=n[i]}return t}function yf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Qg={clone:Eo,merge:dn};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ex extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ce extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yn extends Ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $a extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Dh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Op extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Mf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Mf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Mf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ix{constructor(t,e,n){const i=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sx=new ix;class eu{constructor(t){this.manager=t!==void 0?t:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}eu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Js=new WeakMap;class ox extends eu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=rc.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let u=Js.get(r);u===void 0&&(u=[],Js.set(r,u)),u.push({onLoad:e,onError:i})}return r}const a=wr("img");function l(){h(),e&&e(this);const u=Js.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Js.delete(this),o.manager.itemEnd(t)}function c(u){h(),i&&i(u),rc.remove(`image:${t}`);const f=Js.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}Js.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rc.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Ka extends eu{constructor(t){super(t)}load(t,e,n,i){const o=new on,r=new ox(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class _l extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class rx extends _l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ac=new Kt,_f=new I,wf=new I;class nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=i?i.z/o.x:1,a=i?i.w/o.y:1,l=i?i.x/o.x:0,c=i?i.y/o.y:0;t.coordinateSystem===_r||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const la=new I,ca=new pe,ni=new I;class Bp extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(la,ca,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(la,ca,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new I,Sf=new mt,bf=new mt;class tn extends Bp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Sf,bf),e.subVectors(bf,Sf)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ax extends nu{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=wo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class lx extends _l{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new ax}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class cx extends nu{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Hp extends _l{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class wl extends Bp{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hx extends nu{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends _l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new hx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Qs=-90,js=1;class Vp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Qs,js,t,e);i.layers=this.layers,this.add(i);const o=new tn(Qs,js,t,e);o.layers=this.layers,this.add(o);const r=new tn(Qs,js,t,e);r.layers=this.layers,this.add(r);const a=new tn(Qs,js,t,e);a.layers=this.layers,this.add(a);const l=new tn(Qs,js,t,e);l.layers=this.layers,this.add(l);const c=new tn(Qs,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class fx extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ef=new Kt;class Ts{constructor(t,e,n=0,i=1/0){this.ray=new $h(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(t,e=!0,n=[]){return xh(t,this,n,e),n.sort(Tf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)xh(t[i],this,n,e);return n.sort(Tf),n}}function Tf(s,t){return s.distance-t.distance}function xh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)xh(o[r],t,e,!0)}}const Eu=class Eu{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}};Eu.prototype.isMatrix2=!0;let Af=Eu;function Rf(s,t,e,n){const i=dx(n);switch(e){case xp:return s*t;case xl:return s*t/i.components*i.byteLength;case kh:return s*t/i.components*i.byteLength;case Cs:return s*t*2/i.components*i.byteLength;case Oh:return s*t*2/i.components*i.byteLength;case vp:return s*t*3/i.components*i.byteLength;case Pn:return s*t*4/i.components*i.byteLength;case Bh:return s*t*4/i.components*i.byteLength;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case La:case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bc:case Vc:return Math.max(s,16)*Math.max(t,8)/4;case Oc:case Hc:return Math.max(s,8)*Math.max(t,8)/2;case Gc:case Wc:case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case ka:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case th:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case oh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ah:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ch:case hh:case uh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fh:case dh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Oa:case ph:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dx(s){switch(s){case wn:case dp:return{byteLength:1,components:1};case yr:case pp:case In:return{byteLength:2,components:1};case zh:case Fh:return{byteLength:2,components:4};case xi:case Uh:case jn:return{byteLength:4,components:1};case mp:case gp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gp(){let s=null,t=!1,e=null,n=null;function i(o,r){n=s.requestAnimationFrame(i),e(o,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function px(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],m=u[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const m=u[d];s.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
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
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kx=`#define PI 3.141592653589793
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
} // validated`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rv=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,av=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,dv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,pv=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,b1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,L1=`#define LAMBERT
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
}`,I1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,z1=`#define NORMAL
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
}`,F1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,B1=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,H1=`#define TOON
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
}`,V1=`#define TOON
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
}`,G1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,q1=`uniform vec3 color;
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
}`,Y1=`uniform float rotation;
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
}`,$1=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:xx,alphamap_pars_fragment:vx,alphatest_fragment:yx,alphatest_pars_fragment:Mx,aomap_fragment:_x,aomap_pars_fragment:wx,batching_pars_vertex:Sx,batching_vertex:bx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:zx,color_vertex:Fx,common:kx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Bx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:av,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:jx,fog_fragment:tv,fog_pars_fragment:ev,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:rv,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:dv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:xv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:_v,map_fragment:wv,map_pars_fragment:Sv,map_particle_fragment:bv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Iv,normal_fragment_begin:Dv,normal_fragment_maps:Nv,normal_pars_fragment:Uv,normal_pars_vertex:zv,normal_vertex:Fv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Vv,opaque_fragment:Gv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:jv,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:r1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:h1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:x1,backgroundCube_frag:v1,cube_vert:y1,cube_frag:M1,depth_vert:_1,depth_frag:w1,distance_vert:S1,distance_frag:b1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:I1,meshmatcap_vert:D1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:z1,meshphong_vert:F1,meshphong_frag:k1,meshphysical_vert:O1,meshphysical_frag:B1,meshtoon_vert:H1,meshtoon_frag:V1,points_vert:G1,points_frag:W1,shadow_vert:X1,shadow_frag:q1,sprite_vert:Y1,sprite_frag:$1},Pt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ci={basic:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:dn([Pt.points,Pt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:dn([Pt.common,Pt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:dn([Pt.sprite,Pt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:dn([Pt.lights,Pt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ha={r:0,b:0,g:0},K1=new Kt,Wp=new te;Wp.set(-1,0,0,0,1,0,0,0,1);function Z1(s,t,e,n,i,o){const r=new Ct(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(y){let w=!1;const v=d(y);v===null?x(r,a):v&&v.isColor&&(x(v,1),w=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===gl)?(c===void 0&&(c=new wt(new nn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Eo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wp),c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wt(new Ue(2,2),new bn({name:"BackgroundMaterial",uniforms:Eo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,w){y.getRGB(ha,kp(s)),e.buffers.color.setClear(ha.r,ha.g,ha.b,w,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,w=1){r.set(y),a=w,x(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(r,a)},render:p,addToRenderList:m,dispose:g}}function J1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(C,P,U,F,k){let $=!1;const Y=u(C,F,U,P);o!==Y&&(o=Y,c(o.object)),$=d(C,F,U,k),$&&p(C,F,U,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,v(C,P,U,F),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,P,U,F){const k=F.wireframe===!0;let $=n[P.id];$===void 0&&($={},n[P.id]=$);const Y=C.isInstancedMesh===!0?C.id:0;let it=$[Y];it===void 0&&(it={},$[Y]=it);let G=it[U.id];G===void 0&&(G={},it[U.id]=G);let Z=G[k];return Z===void 0&&(Z=f(l()),G[k]=Z),Z}function f(C){const P=[],U=[],F=[];for(let k=0;k<e;k++)P[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:C,attributes:{},index:null}}function d(C,P,U,F){const k=o.attributes,$=P.attributes;let Y=0;const it=U.getAttributes();for(const G in it)if(it[G].location>=0){const st=k[G];let ut=$[G];if(ut===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;Y++}return o.attributesNum!==Y||o.index!==F}function p(C,P,U,F){const k={},$=P.attributes;let Y=0;const it=U.getAttributes();for(const G in it)if(it[G].location>=0){let st=$[G];st===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),k[G]=ut,Y++}o.attributes=k,o.attributesNum=Y,o.index=F}function m(){const C=o.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function x(C){g(C,0)}function g(C,P){const U=o.newAttributes,F=o.enabledAttributes,k=o.attributeDivisors;U[C]=1,F[C]===0&&(s.enableVertexAttribArray(C),F[C]=1),k[C]!==P&&(s.vertexAttribDivisor(C,P),k[C]=P)}function y(){const C=o.newAttributes,P=o.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==C[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function w(C,P,U,F,k,$,Y){Y===!0?s.vertexAttribIPointer(C,P,U,k,$):s.vertexAttribPointer(C,P,U,F,k,$)}function v(C,P,U,F){m();const k=F.attributes,$=U.getAttributes(),Y=P.defaultAttributeValues;for(const it in $){const G=$[it];if(G.location>=0){let Z=k[it];if(Z===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){const st=Z.normalized,ut=Z.itemSize,B=t.get(Z);if(B===void 0)continue;const H=B.buffer,L=B.type,V=B.bytesPerElement,D=L===s.INT||L===s.UNSIGNED_INT||Z.gpuType===Uh;if(Z.isInterleavedBufferAttribute){const z=Z.data,X=z.stride,tt=Z.offset;if(z.isInstancedInterleavedBuffer){for(let et=0;et<G.locationSize;et++)g(G.location+et,z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let et=0;et<G.locationSize;et++)x(G.location+et);s.bindBuffer(s.ARRAY_BUFFER,H);for(let et=0;et<G.locationSize;et++)w(G.location+et,ut/G.locationSize,L,st,X*V,(tt+ut/G.locationSize*et)*V,D)}else{if(Z.isInstancedBufferAttribute){for(let z=0;z<G.locationSize;z++)g(G.location+z,Z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let z=0;z<G.locationSize;z++)x(G.location+z);s.bindBuffer(s.ARRAY_BUFFER,H);for(let z=0;z<G.locationSize;z++)w(G.location+z,ut/G.locationSize,L,st,ut*V,ut/G.locationSize*z*V,D)}}else if(Y!==void 0){const st=Y[it];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(G.location,st);break;case 3:s.vertexAttrib3fv(G.location,st);break;case 4:s.vertexAttrib4fv(G.location,st);break;default:s.vertexAttrib1fv(G.location,st)}}}}y()}function M(){b();for(const C in n){const P=n[C];for(const U in P){const F=P[U];for(const k in F){const $=F[k];for(const Y in $)h($[Y].object),delete $[Y];delete F[k]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;const P=n[C.id];for(const U in P){const F=P[U];for(const k in F){const $=F[k];for(const Y in $)h($[Y].object),delete $[Y];delete F[k]}}delete n[C.id]}function E(C){for(const P in n){const U=n[P];for(const F in U){const k=U[F];if(k[C.id]===void 0)continue;const $=k[C.id];for(const Y in $)h($[Y].object),delete $[Y];delete k[C.id]}}}function _(C){for(const P in n){const U=n[P],F=C.isInstancedMesh===!0?C.id:0,k=U[F];if(k!==void 0){for(const $ in k){const Y=k[$];for(const it in Y)h(Y[it].object),delete Y[it];delete k[$]}delete U[F],Object.keys(U).length===0&&delete n[P]}}}function b(){T(),r=!0,o!==i&&(o=i,c(o.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function Q1(s,t,e){let n;function i(l){n=l}function o(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function j1(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==Pn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const _=E===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&E!==jn&&!_&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:S}}function ty(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Ri,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||o&&!x)o?h(null):c();else{const y=o?0:n,w=y*4;let v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let M=0;M!==w;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const m=u!==null?u.length:0;let x=null;if(m!==0){if(x=l.value,p!==!0||x===null){const g=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,v=d;w!==m;++w,v+=4)r.copy(u[w]).applyMatrix4(y,a),r.normal.toArray(x,v),x[v+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}const ho=4,ey=6,ny=20,iy=256,Bo=new wl,Cf=new Ct;let lc=null,cc=0,hc=0,uc=!1;const sy=new I,Ms=new I;class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){const{size:r=256,position:a=sy}=o;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,cc,hc),this._renderer.xr.enabled=uc,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===_o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:In,format:Pn,colorSpace:Ha,depthBuffer:!1},i=Pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oy(o)),this._blurMaterial=ay(o,t,e),this._ggxMaterial=ry(o,t,e)}return i}_compileMaterial(t){const e=new wt(new we,t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,i,o){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Cf),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new nn,new Ye({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,x=m.material;let g=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,g=!0):(x.color.copy(Cf),g=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[w],o.y,o.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[w]));const M=this._cubeSize;to(i,v*M,w>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(m,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Rs||t.mapping===_o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());const o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;to(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,m=this._sizeLods[n],x=3*m*(n>p-ho?n-p+ho:0),g=4*(this._cubeSize-m);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,to(o,x,g,3*m,2*m),i.setRenderTarget(o),i.render(a,Bo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,to(t,x,g,3*m,2*m),i.setRenderTarget(t),i.render(a,Bo)}_blur(t,e,n,i){const o=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,i,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-ho?i-this._lodMax+ho:0),f=4*(this._cubeSize-h);to(e,u,f,3*h,2*h),r.setRenderTarget(e),r.render(l,Bo)}}function oy(s){const t=[],e=[];let n=s;const i=s-ho+1+ey;for(let o=0;o<i;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),m=new Float32Array(d*f*u);for(let g=0;g<u;g++){const y=g%3*2/3-1,w=g>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(v,d*f*g);for(let M=0;M<f;M++){const S=h[M*2]*2-1,E=h[M*2+1]*2-1;g===0?Ms.set(1,E,S):g===1?Ms.set(-S,1,-E):g===2?Ms.set(-S,E,1):g===3?Ms.set(-1,E,-S):g===4?Ms.set(-S,-1,E):Ms.set(S,E,-1),Ms.toArray(m,(g*f+M)*d)}}const x=new we;x.setAttribute("position",new xn(p,d)),x.setAttribute("outputDirection",new xn(m,d)),e.push(new wt(x,null)),n>ho&&n--}return{lodMeshes:e,sizeLods:t}}function Pf(s,t,e){const n=new Ln(s,t,e);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function to(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ry(s,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ay(s,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Lf(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function If(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class iu extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ap(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nn(5,5,5),o=new bn({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Fi});o.uniforms.tEquirect.value=e;const r=new wt(i,o),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=en),new Vp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}function ly(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?r(f):o(f)}function o(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ll||d===Il)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new iu(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Ll||d===Il,m=d===Rs||d===_o;if(p||m){let x=e.get(f);const g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new vh(s)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return p&&y&&y.height>0||m&&y&&l(y)?(n===null&&(n=new vh(s)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Ll?f.mapping=Rs:d===Il&&(f.mapping=_o),f}function l(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function cy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&go("WebGLRenderer: "+n+" extension not supported."),i}}}function hy(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",r),delete i[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let m=0;if(p===void 0)return;if(d!==null){const y=d.array;m=d.version;for(let w=0,v=y.length;w<v;w+=3){const M=y[w+0],S=y[w+1],E=y[w+2];f.push(M,S,S,E,E,M)}}else{const y=p.array;m=p.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const M=w+0,S=w+1,E=w+2;f.push(M,S,S,E,E,M)}}const x=new(p.count>=65535?bp:Sp)(f,1);x.version=m;const g=o.get(u);g&&t.remove(g),o.set(u,x)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function uy(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,o,u*r,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x];e.update(m,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:ge("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dy(s,t,e){const n=new WeakMap,i=new Ee;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),p===!0&&(w=2),m===!0&&(w=3);let v=a.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const S=new Float32Array(v*M*4*u),E=new _p(S,v,M,u);E.type=jn,E.needsUpdate=!0;const _=w*4;for(let T=0;T<u;T++){const C=x[T],P=g[T],U=y[T],F=v*M*4*T;for(let k=0;k<C.count;k++){const $=k*_;d===!0&&(i.fromBufferAttribute(C,k),S[F+$+0]=i.x,S[F+$+1]=i.y,S[F+$+2]=i.z,S[F+$+3]=0),p===!0&&(i.fromBufferAttribute(P,k),S[F+$+4]=i.x,S[F+$+5]=i.y,S[F+$+6]=i.z,S[F+$+7]=0),m===!0&&(i.fromBufferAttribute(U,k),S[F+$+8]=i.x,S[F+$+9]=i.y,S[F+$+10]=i.z,S[F+$+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new mt(v,M)},n.set(a,f),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function py(s,t,e,n,i){let o=new WeakMap;function r(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const my={[rp]:"LINEAR_TONE_MAPPING",[ap]:"REINHARD_TONE_MAPPING",[lp]:"CINEON_TONE_MAPPING",[cp]:"ACES_FILMIC_TONE_MAPPING",[up]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function gy(s,t,e,n,i,o){const r=new Ln(t,e,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new we;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const h=new ex({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wt(c,h),f=new wl(-1,1,1,-1,0,1);let d=null,p=null,m=!1,x,g=null,y=[],w=!1;this.setSize=function(v,M){r.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<y.length;S++){const E=y[S];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const M=r.width,S=r.height;y.length>0&&a===null&&(a=new Ln(M,S,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(M,S,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){const _=y[E];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(m||v.toneMapping===mi&&y.length===0)return!1;if(g=M,M!==null){const S=M.width,E=M.height;(r.width!==S||r.height!==E)&&this.setSize(S,E)}return w===!1&&v.setRenderTarget(r),x=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=x,m=!0;let S=r,E=a;for(let _=0;_<y.length;_++){const b=y[_];b.enabled!==!1&&(b.render(v,E,S,M),b.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},xe.getTransfer(d)===Se&&(h.defines.SRGB_TRANSFER="");const _=my[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(u,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Xp=new on,yh=new Sr(1,1),qp=new _p,Yp=new Jm,$p=new Ap,Df=[],Nf=[],Uf=new Float32Array(16),zf=new Float32Array(9),Ff=new Float32Array(4);function Co(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Df[i];if(o===void 0&&(o=new Float32Array(i),Df[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bl(s,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2fv(this.addr,t),Ze(e,t)}}function yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;s.uniform3fv(this.addr,t),Ze(e,t)}}function My(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4fv(this.addr,t),Ze(e,t)}}function _y(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Ff.set(n),s.uniformMatrix2fv(this.addr,!1,Ff),Ze(e,n)}}function wy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;zf.set(n),s.uniformMatrix3fv(this.addr,!1,zf),Ze(e,n)}}function Sy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Uf.set(n),s.uniformMatrix4fv(this.addr,!1,Uf),Ze(e,n)}}function by(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2iv(this.addr,t),Ze(e,t)}}function Ty(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3iv(this.addr,t),Ze(e,t)}}function Ay(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4iv(this.addr,t),Ze(e,t)}}function Ry(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2uiv(this.addr,t),Ze(e,t)}}function Py(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3uiv(this.addr,t),Ze(e,t)}}function Ly(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4uiv(this.addr,t),Ze(e,t)}}function Iy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(yh.compareFunction=e.isReversedDepthBuffer()?Vh:Hh,o=yh):o=Xp,e.setTexture2D(t||o,i)}function Dy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yp,i)}function Ny(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$p,i)}function Uy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qp,i)}function zy(s){switch(s){case 5126:return xy;case 35664:return vy;case 35665:return yy;case 35666:return My;case 35674:return _y;case 35675:return wy;case 35676:return Sy;case 5124:case 35670:return by;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Fy(s,t){s.uniform1fv(this.addr,t)}function ky(s,t){const e=Co(t,this.size,2);s.uniform2fv(this.addr,e)}function Oy(s,t){const e=Co(t,this.size,3);s.uniform3fv(this.addr,e)}function By(s,t){const e=Co(t,this.size,4);s.uniform4fv(this.addr,e)}function Hy(s,t){const e=Co(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vy(s,t){const e=Co(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gy(s,t){const e=Co(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wy(s,t){s.uniform1iv(this.addr,t)}function Xy(s,t){s.uniform2iv(this.addr,t)}function qy(s,t){s.uniform3iv(this.addr,t)}function Yy(s,t){s.uniform4iv(this.addr,t)}function $y(s,t){s.uniform1uiv(this.addr,t)}function Ky(s,t){s.uniform2uiv(this.addr,t)}function Zy(s,t){s.uniform3uiv(this.addr,t)}function Jy(s,t){s.uniform4uiv(this.addr,t)}function Qy(s,t,e){const n=this.cache,i=t.length,o=bl(e,i);Ke(n,o)||(s.uniform1iv(this.addr,o),Ze(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=yh:r=Xp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function jy(s,t,e){const n=this.cache,i=t.length,o=bl(e,i);Ke(n,o)||(s.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Yp,o[r])}function tM(s,t,e){const n=this.cache,i=t.length,o=bl(e,i);Ke(n,o)||(s.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||$p,o[r])}function eM(s,t,e){const n=this.cache,i=t.length,o=bl(e,i);Ke(n,o)||(s.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||qp,o[r])}function nM(s){switch(s){case 5126:return Fy;case 35664:return ky;case 35665:return Oy;case 35666:return By;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return Ky;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zy(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class oM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function kf(s,t){s.seq.push(t),s.map[t.id]=t}function rM(s,t,e){const n=s.name,i=n.length;for(fc.lastIndex=0;;){const o=fc.exec(n),r=fc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){kf(e,c===void 0?new iM(a,s,t):new sM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new oM(a),kf(e,u)),e=u}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);rM(a,l,this)}const i=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Of(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const aM=37297;let lM=0;function cM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Bf=new te;function hM(s){xe._getMatrix(Bf,xe.workingColorSpace,s);const t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case Va:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Hf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+cM(s.getShaderSource(t),a)}else return o}function uM(s,t){const e=hM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fM={[rp]:"Linear",[ap]:"Reinhard",[lp]:"Cineon",[cp]:"ACESFilmic",[up]:"AgX",[Nh]:"Neutral",[hp]:"Custom"};function dM(s,t){const e=fM[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ua=new I;function pM(){xe.getLuminanceCoefficients(ua);const s=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function gM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function ar(s){return s!==""}function Vf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(s){return s.replace(vM,MM)}const yM=new Map;function MM(s,t){let e=re[t];if(e===void 0){const n=yM.get(t);if(n!==void 0)e=re[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(s){return s.replace(_M,wM)}function wM(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Xf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const SM={[cr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function bM(s){return SM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EM={[Rs]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[gl]:"ENVMAP_TYPE_CUBE_UV"};function TM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":EM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[_o]:"ENVMAP_MODE_REFRACTION"};function RM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CM={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[dm]:"ENVMAP_BLENDING_MIX",[pm]:"ENVMAP_BLENDING_ADD"};function PM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":CM[s.combine]||"ENVMAP_BLENDING_NONE"}function LM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function IM(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=bM(e),c=TM(e),h=RM(e),u=PM(e),f=LM(e),d=mM(e),p=gM(o),m=i.createProgram();let x,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ar).join(`
`),g.length>0&&(g+=`
`)):(x=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),g=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?re.tonemapping_pars_fragment:"",e.toneMapping!==mi?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),r=Mh(r),r=Vf(r,e),r=Gf(r,e),a=Mh(a),a=Vf(a,e),a=Gf(a,e),r=Wf(r),a=Wf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=y+x+r,v=y+g+a,M=Of(i,i.VERTEX_SHADER,w),S=Of(i,i.FRAGMENT_SHADER,v);i.attachShader(m,M),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(M)||"",F=i.getShaderInfoLog(S)||"",k=P.trim(),$=U.trim(),Y=F.trim();let it=!0,G=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,M,S);else{const Z=Hf(i,M,"vertex"),st=Hf(i,S,"fragment");ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+Z+`
`+st)}else k!==""?Qt("WebGLProgram: Program Info Log:",k):($===""||Y==="")&&(G=!1);G&&(C.diagnostics={runnable:it,programLog:k,vertexShader:{log:$,prefix:x},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(M),i.deleteShader(S),_=new Da(i,m),b=xM(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,aM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}let DM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UM(t),e.set(t,n)),n}}class UM{constructor(t){this.id=DM++,this.code=t,this.usedTimes=0}}function zM(s){return s===Cs||s===ka||s===Oa}function FM(s,t,e,n,i,o){const r=new Xh,a=new NM,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,T,C,P,U){const F=C.fog,k=P.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||$,Y),G=it&&it.mapping===gl?it.image.height:null,Z=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=st!==void 0?st.length:0;let B=0;k.morphAttributes.position!==void 0&&(B=1),k.morphAttributes.normal!==void 0&&(B=2),k.morphAttributes.color!==void 0&&(B=3);let H,L,V,D;if(Z){const Le=ci[Z];H=Le.vertexShader,L=Le.fragmentShader}else{H=_.vertexShader,L=_.fragmentShader;const Le=a.getVertexShaderStage(_),ye=a.getFragmentShaderStage(_);a.update(_,Le,ye),V=Le.id,D=ye.id}const z=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),tt=P.isInstancedMesh===!0,et=P.isBatchedMesh===!0,xt=!!_.map,_t=!!_.matcap,lt=!!it,pt=!!_.aoMap,ft=!!_.lightMap,yt=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,Gt=!!_.displacementMap,Bt=!!_.emissiveMap,Zt=!!_.metalnessMap,qt=!!_.roughnessMap,K=_.anisotropy>0,me=_.clearcoat>0,se=_.dispersion>0,O=_.retroreflectivity>0,A=_.iridescence>0,nt=_.sheen>0,ot=_.transmission>0,ht=K&&!!_.anisotropyMap,St=me&&!!_.clearcoatMap,q=me&&!!_.clearcoatNormalMap,W=me&&!!_.clearcoatRoughnessMap,j=A&&!!_.iridescenceMap,dt=A&&!!_.iridescenceThicknessMap,Tt=nt&&!!_.sheenColorMap,bt=nt&&!!_.sheenRoughnessMap,Et=!!_.specularMap,kt=!!_.specularColorMap,Jt=!!_.specularIntensityMap,ie=ot&&!!_.transmissionMap,Q=ot&&!!_.thicknessMap,At=!!_.gradientMap,gt=!!_.alphaMap,Rt=_.alphaTest>0,Dt=!!_.alphaHash,Mt=!!_.extensions;let Yt=mi;_.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Yt=s.toneMapping);const Wt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:L,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:D,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:et,batchingColor:et&&P._colorsTexture!==null,instancing:tt,instancingColor:tt&&P.instanceColor!==null,instancingMorph:tt&&P.morphTexture!==null,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xt,matcap:_t,envMap:lt,envMapMode:lt&&it.mapping,envMapCubeUVHeight:G,aoMap:pt,lightMap:ft,bumpMap:yt,normalMap:vt,displacementMap:Gt,emissiveMap:Bt,normalMapObjectSpace:vt&&_.normalMapType===vm,normalMapTangentSpace:vt&&_.normalMapType===Ba,packedNormalMap:vt&&_.normalMapType===Ba&&zM(_.normalMap.format),metalnessMap:Zt,roughnessMap:qt,anisotropy:K,anisotropyMap:ht,clearcoat:me,clearcoatMap:St,clearcoatNormalMap:q,clearcoatRoughnessMap:W,dispersion:se,retroreflection:O,iridescence:A,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:nt,sheenColorMap:Tt,sheenRoughnessMap:bt,specularMap:Et,specularColorMap:kt,specularIntensityMap:Jt,transmission:ot,transmissionMap:ie,thicknessMap:Q,gradientMap:At,opaque:_.transparent===!1&&_.blending===hr&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:Rt,alphaHash:Dt,combine:_.combine,mapUv:xt&&p(_.map.channel),aoMapUv:pt&&p(_.aoMap.channel),lightMapUv:ft&&p(_.lightMap.channel),bumpMapUv:yt&&p(_.bumpMap.channel),normalMapUv:vt&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:Bt&&p(_.emissiveMap.channel),metalnessMapUv:Zt&&p(_.metalnessMap.channel),roughnessMapUv:qt&&p(_.roughnessMap.channel),anisotropyMapUv:ht&&p(_.anisotropyMap.channel),clearcoatMapUv:St&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:q&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(_.sheenRoughnessMap.channel),specularMapUv:Et&&p(_.specularMap.channel),specularColorMapUv:kt&&p(_.specularColorMap.channel),specularIntensityMapUv:Jt&&p(_.specularIntensityMap.channel),transmissionMapUv:ie&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:gt&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||K),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(xt||gt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:B,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,decodeVideoTexture:xt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&xe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)b.push(T),b.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(g(b,_),y(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function w(_){const b=d[_.type];let T;if(b){const C=ci[b];T=Qg.clone(C.uniforms)}else T=_.uniforms;return T}function v(_,b){let T=h.get(b);return T!==void 0?++T.usedTimes:(T=new IM(s,b,_,i),c.push(T),h.set(b,T)),T}function M(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function kM(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function OM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,m,x,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:r(f),groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=r(f),y.groupOrder=m,y.renderOrder=f.renderOrder,y.z=x,y.group=g),t++,y}function l(f,d,p,m,x,g,y){y.reversedDepth===!0&&(x=-x);const w=a(f,d,p,m,x,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(f,d,p,m,x,g){const y=a(f,d,p,m,x,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||OM),n.length>1&&n.sort(d||qf),i.length>1&&i.sort(d||qf)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:l,unshift:c,finish:u,sort:h}}function BM(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Yf,s.set(n,[r])):i>=o.length?(r=new Yf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function HM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ct};break;case"SpotLight":e={position:new I,direction:new I,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function VM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let GM=0;function WM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function XM(s){const t=new HM,e=VM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,o=new Kt,r=new Kt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,m=0,x=0,g=0,y=0,w=0,v=0,M=0,S=0,E=0,_=0,b=0,T=0;c.sort(WM);for(let P=0,U=c.length;P<U;P++){const F=c[P],k=F.color,$=F.intensity,Y=F.distance;let it=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Cs?it=F.shadow.map.texture:it=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=k.r*$,u+=k.g*$,f+=k.b*$;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],$);T++}else if(F.isSunLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,st=e.get(F);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=it;const ut=Z.getViewportCount();for(let B=0;B<ut;B++)n.sunShadowMatrix[m+B]=Z.getMatrix(B),n.sunShadowCascade[m+B]=Z._cascadeData[B];m+=ut,p++}n.sun[d]=G,d++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,st=e.get(F);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.directionalShadow[x]=st,n.directionalShadowMap[x]=it,n.directionalShadowMatrix[x]=F.shadow.matrix,M++}n.directional[x]=G,x++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(k).multiplyScalar($),G.distance=Y,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[y]=G;const Z=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,Z.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[y]=Z.matrix,F.castShadow){const st=e.get(F);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,n.spotShadow[y]=st,n.spotShadowMap[y]=it,E++}y++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(k).multiplyScalar($),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=G,w++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const Z=F.shadow,st=e.get(F);st.shadowIntensity=Z.intensity,st.shadowBias=Z.bias,st.shadowNormalBias=Z.normalBias,st.shadowRadius=Z.radius,st.shadowMapSize=Z.mapSize,st.shadowCameraNear=Z.camera.near,st.shadowCameraFar=Z.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=G,g++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar($),G.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[v]=G,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==x||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==E||C.numSpotMaps!==_||C.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=x,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.sunLength=d,C.directionalLength=x,C.pointLength=g,C.spotLength=y,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=E,C.numSpotMaps=_,C.numLightProbes=T,n.version=GM++)}function l(c,h){let u=0,f=0,d=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const v=c[y];if(v.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(v.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(v.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function $f(s){const t=new XM(s),e=[],n=[],i=[];function o(f){u.camera=f,e.length=0,n.length=0,i.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function qM(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new $f(s),t.set(i,[a])):o>=r.length?(a=new $f(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`,KM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ZM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Kf=new Kt,Ho=new I,dc=new I;function JM(s,t,e){let n=new Kh;const i=new mt,o=new mt,r=new Ee,a=new Op,l=new nx,c={},h=e.maxTextureSize,u={[As]:Sn,[Sn]:As,[Zn]:Zn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:YM,fragmentShader:$M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new we;p.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new wt(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let g=this.type;this.render=function(S,E,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===$0&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const b=s.getRenderTarget(),T=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=g!==this.type;U&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=S.length;F<k;F++){const $=S[F],Y=$.shadow;if(Y===void 0){Qt("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const it=Y.getFrameExtents();i.multiply(it),o.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/it.x),i.x=o.x*it.x,Y.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/it.y),i.y=o.y*it.y,Y.mapSize.y=o.y));const G=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=G,Y.map===null||U===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===or){if($.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ln(i.x,i.y,{format:Cs,type:In,minFilter:en,magFilter:en,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new Sr(i.x,i.y,jn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=Bi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe}else $.isPointLight?(Y.map=new iu(i.x),Y.map.depthTexture=new _g(i.x,xi)):(Y.map=new Ln(i.x,i.y),Y.map.depthTexture=new Sr(i.x,i.y,xi)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=Bi,this.type===cr?(Y.map.depthTexture.compareFunction=G?Vh:Hh,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,_);for(let st=0;st<Z;st++){const ut=Y.getCamera(st);if($.isPointLight){const B=Y.camera,H=Y.matrix,L=$.distance||B.far;L!==B.far&&(B.far=L,B.updateProjectionMatrix()),Ho.setFromMatrixPosition($.matrixWorld),B.position.copy(Ho),dc.copy(B.position),dc.add(KM[st]),B.up.copy(ZM[st]),B.lookAt(dc),B.updateMatrixWorld(),H.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Kf.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Kf,B.coordinateSystem,B.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,st),s.clear();else{st===0&&(s.setRenderTarget(Y.map),s.clear());const B=Y.getViewport(st);r.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),P.viewport(r)}n=Y.getFrustum(st),v(E,_,ut,$,this.type)}Y.isPointLightShadow!==!0&&this.type===or&&y(Y,_),Y.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(b,T,C)};function y(S,E){const _=t.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ln(i.x,i.y,{format:Cs,type:In}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,_,f,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,_,d,m,null)}function w(S,E,_,b){let T=null;const C=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)T=C;else if(T=_.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=T.uuid,U=E.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let k=F[U];k===void 0&&(k=T.clone(),F[U]=k,E.addEventListener("dispose",M)),T=k}if(T.visible=E.visible,T.wireframe=E.wireframe,b===or?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=s.properties.get(T);P.light=_}return T}function v(S,E,_,b,T){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===or)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const U=t.update(S),F=S.material;if(Array.isArray(F)){const k=U.groups;for(let $=0,Y=k.length;$<Y;$++){const it=k[$],G=F[it.materialIndex];if(G&&G.visible){const Z=w(S,G,b,T);S.onBeforeShadow(s,S,E,_,U,Z,it),s.renderBufferDirect(_,null,U,Z,S,it),S.onAfterShadow(s,S,E,_,U,Z,it)}}}else if(F.visible){const k=w(S,F,b,T);S.onBeforeShadow(s,S,E,_,U,k,null),s.renderBufferDirect(_,null,U,k,S,null),S.onAfterShadow(s,S,E,_,U,k,null)}}const P=S.children;for(let U=0,F=P.length;U<F;U++)v(P[U],E,_,b,T)}function M(S){S.target.removeEventListener("dispose",M);for(const _ in c){const b=c[_],T=S.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function QM(s,t){function e(){let Q=!1;const At=new Ee;let gt=null;const Rt=new Ee(0,0,0,0);return{setMask:function(Dt){gt!==Dt&&!Q&&(s.colorMask(Dt,Dt,Dt,Dt),gt=Dt)},setLocked:function(Dt){Q=Dt},setClear:function(Dt,Mt,Yt,Wt,Le){Le===!0&&(Dt*=Wt,Mt*=Wt,Yt*=Wt),At.set(Dt,Mt,Yt,Wt),Rt.equals(At)===!1&&(s.clearColor(Dt,Mt,Yt,Wt),Rt.copy(At))},reset:function(){Q=!1,gt=null,Rt.set(-1,0,0,0)}}}function n(){let Q=!1,At=!1,gt=null,Rt=null,Dt=null;return{setReversed:function(Mt){if(At!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=Mt;const Wt=Dt;Dt=null,this.setClear(Wt)}},getReversed:function(){return At},setTest:function(Mt){Mt?z(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(Mt){gt!==Mt&&!Q&&(s.depthMask(Mt),gt=Mt)},setFunc:function(Mt){if(At&&(Mt=Cm[Mt]),Rt!==Mt){switch(Mt){case Lc:s.depthFunc(s.NEVER);break;case Ic:s.depthFunc(s.ALWAYS);break;case Dc:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case Nc:s.depthFunc(s.EQUAL);break;case Uc:s.depthFunc(s.GEQUAL);break;case zc:s.depthFunc(s.GREATER);break;case Fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=Mt}},setLocked:function(Mt){Q=Mt},setClear:function(Mt){Dt!==Mt&&(Dt=Mt,At&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){Q=!1,gt=null,Rt=null,Dt=null,At=!1}}}function i(){let Q=!1,At=null,gt=null,Rt=null,Dt=null,Mt=null,Yt=null,Wt=null,Le=null;return{setTest:function(ye){Q||(ye?z(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(ye){At!==ye&&!Q&&(s.stencilMask(ye),At=ye)},setFunc:function(ye,Hn,ti){(gt!==ye||Rt!==Hn||Dt!==ti)&&(s.stencilFunc(ye,Hn,ti),gt=ye,Rt=Hn,Dt=ti)},setOp:function(ye,Hn,ti){(Mt!==ye||Yt!==Hn||Wt!==ti)&&(s.stencilOp(ye,Hn,ti),Mt=ye,Yt=Hn,Wt=ti)},setLocked:function(ye){Q=ye},setClear:function(ye){Le!==ye&&(s.clearStencil(ye),Le=ye)},reset:function(){Q=!1,At=null,gt=null,Rt=null,Dt=null,Mt=null,Yt=null,Wt=null,Le=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,y=null,w=null,v=null,M=null,S=null,E=null,_=new Ct(0,0,0),b=0,T=!1,C=null,P=null,U=null,F=null,k=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=it>=2);let Z=null,st={};const ut=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),H=new Ee().fromArray(ut),L=new Ee().fromArray(B);function V(Q,At,gt,Rt){const Dt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(Q,Mt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<gt;Yt++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(At+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Mt}const D={};D[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),z(s.DEPTH_TEST),r.setFunc(vr),yt(!1),vt(Fu),z(s.CULL_FACE),pt(Fi);function z(Q){h[Q]!==!0&&(s.enable(Q),h[Q]=!0)}function X(Q){h[Q]!==!1&&(s.disable(Q),h[Q]=!1)}function tt(Q,At){return f[Q]!==At?(s.bindFramebuffer(Q,At),f[Q]=At,Q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=At),Q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=At),!0):!1}function et(Q,At){let gt=p,Rt=!1;if(Q){gt=d.get(At),gt===void 0&&(gt=[],d.set(At,gt));const Dt=Q.textures;if(gt.length!==Dt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=Dt.length;Mt<Yt;Mt++)gt[Mt]=s.COLOR_ATTACHMENT0+Mt;gt.length=Dt.length,Rt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(gt)}function xt(Q){return m!==Q?(s.useProgram(Q),m=Q,!0):!1}const _t={[so]:s.FUNC_ADD,[Z0]:s.FUNC_SUBTRACT,[J0]:s.FUNC_REVERSE_SUBTRACT};_t[Q0]=s.MIN,_t[j0]=s.MAX;const lt={[tm]:s.ZERO,[em]:s.ONE,[nm]:s.SRC_COLOR,[sp]:s.SRC_ALPHA,[lm]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[sm]:s.DST_ALPHA,[im]:s.ONE_MINUS_SRC_COLOR,[op]:s.ONE_MINUS_SRC_ALPHA,[am]:s.ONE_MINUS_DST_COLOR,[om]:s.ONE_MINUS_DST_ALPHA,[cm]:s.CONSTANT_COLOR,[hm]:s.ONE_MINUS_CONSTANT_COLOR,[um]:s.CONSTANT_ALPHA,[fm]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(Q,At,gt,Rt,Dt,Mt,Yt,Wt,Le,ye){if(Q===Fi){x===!0&&(X(s.BLEND),x=!1);return}if(x===!1&&(z(s.BLEND),x=!0),Q!==K0){if(Q!==g||ye!==T){if((y!==so||M!==so)&&(s.blendEquation(s.FUNC_ADD),y=so,M=so),ye)switch(Q){case hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.ONE,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ou:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ge("WebGLState: Invalid blending: ",Q);break}else switch(Q){case hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ku:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",Q);break}w=null,v=null,S=null,E=null,_.set(0,0,0),b=0,g=Q,T=ye}return}Dt=Dt||At,Mt=Mt||gt,Yt=Yt||Rt,(At!==y||Dt!==M)&&(s.blendEquationSeparate(_t[At],_t[Dt]),y=At,M=Dt),(gt!==w||Rt!==v||Mt!==S||Yt!==E)&&(s.blendFuncSeparate(lt[gt],lt[Rt],lt[Mt],lt[Yt]),w=gt,v=Rt,S=Mt,E=Yt),(Wt.equals(_)===!1||Le!==b)&&(s.blendColor(Wt.r,Wt.g,Wt.b,Le),_.copy(Wt),b=Le),g=Q,T=!1}function ft(Q,At){Q.side===Zn?X(s.CULL_FACE):z(s.CULL_FACE);let gt=Q.side===Sn;At&&(gt=!gt),yt(gt),Q.blending===hr&&Q.transparent===!1?pt(Fi):pt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),r.setFunc(Q.depthFunc),r.setTest(Q.depthTest),r.setMask(Q.depthWrite),o.setMask(Q.colorWrite);const Rt=Q.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Bt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(Q){C!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),C=Q)}function vt(Q){Q!==q0?(z(s.CULL_FACE),Q!==P&&(Q===Fu?s.cullFace(s.BACK):Q===Y0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),P=Q}function Gt(Q){Q!==U&&(Y&&s.lineWidth(Q),U=Q)}function Bt(Q,At,gt){Q?(z(s.POLYGON_OFFSET_FILL),(F!==At||k!==gt)&&(F=At,k=gt,r.getReversed()&&(At=-At),s.polygonOffset(At,gt))):X(s.POLYGON_OFFSET_FILL)}function Zt(Q){Q?z(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function qt(Q){Q===void 0&&(Q=s.TEXTURE0+$-1),Z!==Q&&(s.activeTexture(Q),Z=Q)}function K(Q,At,gt){gt===void 0&&(Z===null?gt=s.TEXTURE0+$-1:gt=Z);let Rt=st[gt];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[gt]=Rt),(Rt.type!==Q||Rt.texture!==At)&&(Z!==gt&&(s.activeTexture(gt),Z=gt),s.bindTexture(Q,At||D[Q]),Rt.type=Q,Rt.texture=At)}function me(){const Q=st[Z];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function se(){try{s.compressedTexImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function A(){try{s.texSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function nt(){try{s.texSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function ht(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function St(){try{s.texStorage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function q(){try{s.texStorage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function W(){try{s.texImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function j(){try{s.texImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function dt(Q){return u[Q]!==void 0?u[Q]:s.getParameter(Q)}function Tt(Q,At){u[Q]!==At&&(s.pixelStorei(Q,At),u[Q]=At)}function bt(Q){H.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),H.copy(Q))}function Et(Q){L.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),L.copy(Q))}function kt(Q,At){let gt=c.get(At);gt===void 0&&(gt=new WeakMap,c.set(At,gt));let Rt=gt.get(Q);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,Q.name),gt.set(Q,Rt))}function Jt(Q,At){const Rt=c.get(At).get(Q);l.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,Q.__bindingPointIndex),l.set(At,Rt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,st={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,y=null,w=null,v=null,M=null,S=null,E=null,_=new Ct(0,0,0),b=0,T=!1,C=null,P=null,U=null,F=null,k=null,H.set(0,0,s.canvas.width,s.canvas.height),L.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:z,disable:X,bindFramebuffer:tt,drawBuffers:et,useProgram:xt,setBlending:pt,setMaterial:ft,setFlipSided:yt,setCullFace:vt,setLineWidth:Gt,setPolygonOffset:Bt,setScissorTest:Zt,activeTexture:qt,bindTexture:K,unbindTexture:me,compressedTexImage2D:se,compressedTexImage3D:O,texImage2D:W,texImage3D:j,pixelStorei:Tt,getParameter:dt,updateUBOMapping:kt,uniformBlockBinding:Jt,texStorage2D:St,texStorage3D:q,texSubImage2D:A,texSubImage3D:nt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:bt,viewport:Et,reset:ie}}function jM(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,A){return p?new OffscreenCanvas(O,A):wr("canvas")}function x(O,A,nt){let ot=1;const ht=se(O);if((ht.width>nt||ht.height>nt)&&(ot=nt/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const St=Math.floor(ot*ht.width),q=Math.floor(ot*ht.height);f===void 0&&(f=m(St,q));const W=A?m(St,q):f;return W.width=St,W.height=q,W.getContext("2d").drawImage(O,0,0,St,q),Qt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+St+"x"+q+")."),W}else return"data"in O&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),O;return O}function g(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(O,A,nt,ot,ht,St=!1){if(O!==null){if(s[O]!==void 0)return s[O];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let q;ot&&(q=t.get("EXT_texture_norm16"),q||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=A;if(A===s.RED&&(nt===s.FLOAT&&(W=s.R32F),nt===s.HALF_FLOAT&&(W=s.R16F),nt===s.UNSIGNED_BYTE&&(W=s.R8),nt===s.UNSIGNED_SHORT&&q&&(W=q.R16_EXT),nt===s.SHORT&&q&&(W=q.R16_SNORM_EXT)),A===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(W=s.R8UI),nt===s.UNSIGNED_SHORT&&(W=s.R16UI),nt===s.UNSIGNED_INT&&(W=s.R32UI),nt===s.BYTE&&(W=s.R8I),nt===s.SHORT&&(W=s.R16I),nt===s.INT&&(W=s.R32I)),A===s.RG&&(nt===s.FLOAT&&(W=s.RG32F),nt===s.HALF_FLOAT&&(W=s.RG16F),nt===s.UNSIGNED_BYTE&&(W=s.RG8),nt===s.UNSIGNED_SHORT&&q&&(W=q.RG16_EXT),nt===s.SHORT&&q&&(W=q.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(W=s.RG8UI),nt===s.UNSIGNED_SHORT&&(W=s.RG16UI),nt===s.UNSIGNED_INT&&(W=s.RG32UI),nt===s.BYTE&&(W=s.RG8I),nt===s.SHORT&&(W=s.RG16I),nt===s.INT&&(W=s.RG32I)),A===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(W=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(W=s.RGB16UI),nt===s.UNSIGNED_INT&&(W=s.RGB32UI),nt===s.BYTE&&(W=s.RGB8I),nt===s.SHORT&&(W=s.RGB16I),nt===s.INT&&(W=s.RGB32I)),A===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),nt===s.UNSIGNED_INT&&(W=s.RGBA32UI),nt===s.BYTE&&(W=s.RGBA8I),nt===s.SHORT&&(W=s.RGBA16I),nt===s.INT&&(W=s.RGBA32I)),A===s.RGB&&(nt===s.UNSIGNED_SHORT&&q&&(W=q.RGB16_EXT),nt===s.SHORT&&q&&(W=q.RGB16_SNORM_EXT),nt===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),nt===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),A===s.RGBA){const j=St?Va:xe.getTransfer(ht);nt===s.FLOAT&&(W=s.RGBA32F),nt===s.HALF_FLOAT&&(W=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(W=j===Se?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT&&q&&(W=q.RGBA16_EXT),nt===s.SHORT&&q&&(W=q.RGBA16_SNORM_EXT),nt===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(O,A){let nt;return O?A===null||A===xi||A===Mr?nt=s.DEPTH24_STENCIL8:A===jn?nt=s.DEPTH32F_STENCIL8:A===yr&&(nt=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xi||A===Mr?nt=s.DEPTH_COMPONENT24:A===jn?nt=s.DEPTH_COMPONENT32F:A===yr&&(nt=s.DEPTH_COMPONENT16),nt}function S(O,A){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==qe&&O.minFilter!==en?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function E(O){const A=O.target;A.removeEventListener("dispose",E),b(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function _(O){const A=O.target;A.removeEventListener("dispose",_),C(A)}function b(O){const A=n.get(O);if(A.__webglInit===void 0)return;const nt=O.source,ot=d.get(nt);if(ot){const ht=ot[A.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(O),Object.keys(ot).length===0&&d.delete(nt)}n.remove(O)}function T(O){const A=n.get(O);s.deleteTexture(A.__webglTexture);const nt=O.source,ot=d.get(nt);delete ot[A.__cacheKey],r.memory.textures--}function C(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(A.__webglFramebuffer[ot]))for(let ht=0;ht<A.__webglFramebuffer[ot].length;ht++)s.deleteFramebuffer(A.__webglFramebuffer[ot][ht]);else s.deleteFramebuffer(A.__webglFramebuffer[ot]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ot])}else{if(Array.isArray(A.__webglFramebuffer))for(let ot=0;ot<A.__webglFramebuffer.length;ot++)s.deleteFramebuffer(A.__webglFramebuffer[ot]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ot=0;ot<A.__webglColorRenderbuffer.length;ot++)A.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ot]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=O.textures;for(let ot=0,ht=nt.length;ot<ht;ot++){const St=n.get(nt[ot]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),r.memory.textures--),n.remove(nt[ot])}n.remove(O)}let P=0;function U(){P=0}function F(){return P}function k(O){P=O}function $(){const O=P;return O>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,O}function Y(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function it(O,A){const nt=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&nt.__version!==O.version){const ot=O.image;if(ot===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(nt,O,A);return}}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+A)}function G(O,A){const nt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){X(nt,O,A);return}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+A)}function Z(O,A){const nt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){X(nt,O,A);return}e.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+A)}function st(O,A){const nt=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&nt.__version!==O.version){tt(nt,O,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+A)}const ut={[Fa]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[kc]:s.MIRRORED_REPEAT},B={[qe]:s.NEAREST,[mm]:s.NEAREST_MIPMAP_NEAREST,[zr]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Dl]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},H={[Mm]:s.NEVER,[Em]:s.ALWAYS,[_m]:s.LESS,[Hh]:s.LEQUAL,[wm]:s.EQUAL,[Vh]:s.GEQUAL,[Sm]:s.GREATER,[bm]:s.NOTEQUAL};function L(O,A){if(A.type===jn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===en||A.magFilter===Dl||A.magFilter===zr||A.magFilter===rs||A.minFilter===en||A.minFilter===Dl||A.minFilter===zr||A.minFilter===rs)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ut[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ut[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ut[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,B[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,B[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,H[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qe||A.minFilter!==zr&&A.minFilter!==rs||A.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function V(O,A){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",E));const ot=A.source;let ht=d.get(ot);ht===void 0&&(ht={},d.set(ot,ht));const St=Y(A);if(St!==O.__cacheKey){ht[St]===void 0&&(ht[St]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,nt=!0),ht[St].usedTimes++;const q=ht[O.__cacheKey];q!==void 0&&(ht[O.__cacheKey].usedTimes--,q.usedTimes===0&&T(A)),O.__cacheKey=St,O.__webglTexture=ht[St].texture}return nt}function D(O,A,nt){return Math.floor(Math.floor(O/nt)/A)}function z(O,A,nt,ot){const St=O.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,nt,ot,A.data);else{St.sort((Tt,bt)=>Tt.start-bt.start);let q=0;for(let Tt=1;Tt<St.length;Tt++){const bt=St[q],Et=St[Tt],kt=bt.start+bt.count,Jt=D(Et.start,A.width,4),ie=D(bt.start,A.width,4);Et.start<=kt+1&&Jt===ie&&D(Et.start+Et.count-1,A.width,4)===Jt?bt.count=Math.max(bt.count,Et.start+Et.count-bt.start):(++q,St[q]=Et)}St.length=q+1;const W=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Tt=0,bt=St.length;Tt<bt;Tt++){const Et=St[Tt],kt=Math.floor(Et.start/4),Jt=Math.ceil(Et.count/4),ie=kt%A.width,Q=Math.floor(kt/A.width),At=Jt,gt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(s.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(s.TEXTURE_2D,0,ie,Q,At,gt,nt,ot,A.data)}O.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,W),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function X(O,A,nt){let ot=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=s.TEXTURE_3D);const ht=V(O,A),St=A.source;e.bindTexture(ot,O.__webglTexture,s.TEXTURE0+nt);const q=n.get(St);if(St.version!==q.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+nt),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const gt=xe.getPrimaries(xe.workingColorSpace),Rt=A.colorSpace===is?null:xe.getPrimaries(A.colorSpace),Dt=A.colorSpace===is||gt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let j=x(A.image,!1,i.maxTextureSize);j=me(A,j);const dt=o.convert(A.format,A.colorSpace),Tt=o.convert(A.type);let bt=v(A.internalFormat,dt,Tt,A.normalized,A.colorSpace,A.isVideoTexture);L(ot,A);let Et;const kt=A.mipmaps,Jt=A.isVideoTexture!==!0,ie=q.__version===void 0||ht===!0,Q=St.dataReady,At=S(A,j);if(A.isDepthTexture)bt=M(A.format===Es,A.type),ie&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,bt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,bt,j.width,j.height,0,dt,Tt,null));else if(A.isDataTexture)if(kt.length>0){Jt&&ie&&e.texStorage2D(s.TEXTURE_2D,At,bt,kt[0].width,kt[0].height);for(let gt=0,Rt=kt.length;gt<Rt;gt++)Et=kt[gt],Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,dt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,dt,Tt,Et.data);A.generateMipmaps=!1}else Jt?(ie&&e.texStorage2D(s.TEXTURE_2D,At,bt,j.width,j.height),Q&&z(A,j,dt,Tt)):e.texImage2D(s.TEXTURE_2D,0,bt,j.width,j.height,0,dt,Tt,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,bt,kt[0].width,kt[0].height,j.depth);for(let gt=0,Rt=kt.length;gt<Rt;gt++)if(Et=kt[gt],A.format!==Pn)if(dt!==null)if(Jt){if(Q)if(A.layerUpdates.size>0){const Dt=Rf(Et.width,Et.height,A.format,A.type);for(const Mt of A.layerUpdates){const Yt=Et.data.subarray(Mt*Dt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*Dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,Mt,Et.width,Et.height,1,dt,Yt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,j.depth,dt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,bt,Et.width,Et.height,j.depth,0,Et.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?Q&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,j.depth,dt,Tt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,bt,Et.width,Et.height,j.depth,0,dt,Tt,Et.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Jt&&ie&&e.texStorage2D(s.TEXTURE_2D,At,bt,kt[0].width,kt[0].height);for(let gt=0,Rt=kt.length;gt<Rt;gt++)Et=kt[gt],A.format!==Pn?dt!==null?Jt?Q&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,dt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,Et.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,dt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,dt,Tt,Et.data)}else if(A.isDataArrayTexture)if(Jt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,bt,j.width,j.height,j.depth),Q)if(A.layerUpdates.size>0){const gt=Rf(j.width,j.height,A.format,A.type);for(const Rt of A.layerUpdates){const Dt=j.data.subarray(Rt*gt/j.data.BYTES_PER_ELEMENT,(Rt+1)*gt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,j.width,j.height,1,dt,Tt,Dt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,Tt,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,j.width,j.height,j.depth,0,dt,Tt,j.data);else if(A.isData3DTexture)Jt?(ie&&e.texStorage3D(s.TEXTURE_3D,At,bt,j.width,j.height,j.depth),Q&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,Tt,j.data)):e.texImage3D(s.TEXTURE_3D,0,bt,j.width,j.height,j.depth,0,dt,Tt,j.data);else if(A.isFramebufferTexture){if(ie)if(Jt)e.texStorage2D(s.TEXTURE_2D,At,bt,j.width,j.height);else{let gt=j.width,Rt=j.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,bt,gt,Rt,0,dt,Tt,null),gt>>=1,Rt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const gt=s.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),j.parentNode!==gt){gt.appendChild(j),u.add(A),gt.onpaint=Rt=>{const Dt=Rt.changedElements;for(const Mt of u)Dt.includes(Mt.image)&&(Mt.needsUpdate=!0)},gt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{const Dt=s.RGBA,Mt=s.RGBA,Yt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Dt,Mt,Yt,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Jt&&ie){const gt=se(kt[0]);e.texStorage2D(s.TEXTURE_2D,At,bt,gt.width,gt.height)}for(let gt=0,Rt=kt.length;gt<Rt;gt++)Et=kt[gt],Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,dt,Tt,Et):e.texImage2D(s.TEXTURE_2D,gt,bt,dt,Tt,Et);A.generateMipmaps=!1}else if(Jt){if(ie){const gt=se(j);e.texStorage2D(s.TEXTURE_2D,At,bt,gt.width,gt.height)}Q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Tt,j)}else e.texImage2D(s.TEXTURE_2D,0,bt,dt,Tt,j);g(A)&&y(ot),q.__version=St.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function tt(O,A,nt){if(A.image.length!==6)return;const ot=V(O,A),ht=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+nt);const St=n.get(ht);if(ht.version!==St.__version||ot===!0){e.activeTexture(s.TEXTURE0+nt);const q=xe.getPrimaries(xe.workingColorSpace),W=A.colorSpace===is?null:xe.getPrimaries(A.colorSpace),j=A.colorSpace===is||q===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const dt=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,bt=[];for(let Mt=0;Mt<6;Mt++)!dt&&!Tt?bt[Mt]=x(A.image[Mt],!0,i.maxCubemapSize):bt[Mt]=Tt?A.image[Mt].image:A.image[Mt],bt[Mt]=me(A,bt[Mt]);const Et=bt[0],kt=o.convert(A.format,A.colorSpace),Jt=o.convert(A.type),ie=v(A.internalFormat,kt,Jt,A.normalized,A.colorSpace),Q=A.isVideoTexture!==!0,At=St.__version===void 0||ot===!0,gt=ht.dataReady;let Rt=S(A,Et);L(s.TEXTURE_CUBE_MAP,A);let Dt;if(dt){Q&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ie,Et.width,Et.height);for(let Mt=0;Mt<6;Mt++){Dt=bt[Mt].mipmaps;for(let Yt=0;Yt<Dt.length;Yt++){const Wt=Dt[Yt];A.format!==Pn?kt!==null?Q?gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Wt.width,Wt.height,kt,Wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,ie,Wt.width,Wt.height,0,Wt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Wt.width,Wt.height,kt,Jt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,ie,Wt.width,Wt.height,0,kt,Jt,Wt.data)}}}else{if(Dt=A.mipmaps,Q&&At){Dt.length>0&&Rt++;const Mt=se(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,ie,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Tt){Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,bt[Mt].width,bt[Mt].height,kt,Jt,bt[Mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,bt[Mt].width,bt[Mt].height,0,kt,Jt,bt[Mt].data);for(let Yt=0;Yt<Dt.length;Yt++){const Le=Dt[Yt].image[Mt].image;Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,Le.width,Le.height,kt,Jt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,ie,Le.width,Le.height,0,kt,Jt,Le.data)}}else{Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,kt,Jt,bt[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,kt,Jt,bt[Mt]);for(let Yt=0;Yt<Dt.length;Yt++){const Wt=Dt[Yt];Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,kt,Jt,Wt.image[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,ie,kt,Jt,Wt.image[Mt])}}}g(A)&&y(s.TEXTURE_CUBE_MAP),St.__version=ht.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function et(O,A,nt,ot,ht,St){const q=o.convert(nt.format,nt.colorSpace),W=o.convert(nt.type),j=v(nt.internalFormat,q,W,nt.normalized,nt.colorSpace),dt=n.get(A),Tt=n.get(nt);if(Tt.__renderTarget=A,!dt.__hasExternalTextures){const bt=Math.max(1,A.width>>St),Et=Math.max(1,A.height>>St);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,St,j,bt,Et,A.depth,0,q,W,null):e.texImage2D(ht,St,j,bt,Et,0,q,W,null)}e.bindFramebuffer(s.FRAMEBUFFER,O),qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,ht,Tt.__webglTexture,0,Zt(A)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,ht,Tt.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(O,A,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){const ot=A.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,St=M(A.stencilBuffer,ht),q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;qt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(A),St,A.width,A.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(A),St,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,St,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,O)}else{const ot=A.textures;for(let ht=0;ht<ot.length;ht++){const St=ot[ht],q=o.convert(St.format,St.colorSpace),W=o.convert(St.type),j=v(St.internalFormat,q,W,St.normalized,St.colorSpace);qt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(A),j,A.width,A.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(A),j,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,j,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(O,A,nt){const ot=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(A.depthTexture);if(ht.__renderTarget=A,(!ht.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ot){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),ht.__webglTexture===void 0){ht.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),L(s.TEXTURE_CUBE_MAP,A.depthTexture);const dt=o.convert(A.depthTexture.format),Tt=o.convert(A.depthTexture.type);let bt;A.depthTexture.format===Bi?bt=s.DEPTH_COMPONENT24:A.depthTexture.format===Es&&(bt=s.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,bt,A.width,A.height,0,dt,Tt,null)}}else it(A.depthTexture,0);const St=ht.__webglTexture,q=Zt(A),W=ot?s.TEXTURE_CUBE_MAP_POSITIVE_X+nt:s.TEXTURE_2D,j=A.depthTexture.format===Es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Bi)qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,W,St,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,j,W,St,0);else if(A.depthTexture.format===Es)qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,W,St,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,j,W,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(O){const A=n.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const ot=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ot){const ht=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),A.__depthDisposeCallback=ht}A.__boundDepthTexture=ot}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(nt)for(let ot=0;ot<6;ot++)_t(A.__webglFramebuffer[ot],O,ot);else{const ot=O.texture.mipmaps;ot&&ot.length>0?_t(A.__webglFramebuffer[0],O,0):_t(A.__webglFramebuffer,O,0)}else if(nt){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]===void 0)A.__webglDepthbuffer[ot]=s.createRenderbuffer(),xt(A.__webglDepthbuffer[ot],O,!1);else{const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,St)}}else{const ot=O.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xt(A.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,St)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(O,A,nt){const ot=n.get(O);A!==void 0&&et(ot.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&lt(O)}function ft(O){const A=O.texture,nt=n.get(O),ot=n.get(A);O.addEventListener("dispose",_);const ht=O.textures,St=O.isWebGLCubeRenderTarget===!0,q=ht.length>1;if(q||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=A.version,r.memory.textures++),St){nt.__webglFramebuffer=[];for(let W=0;W<6;W++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[W]=[];for(let j=0;j<A.mipmaps.length;j++)nt.__webglFramebuffer[W][j]=s.createFramebuffer()}else nt.__webglFramebuffer[W]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let W=0;W<A.mipmaps.length;W++)nt.__webglFramebuffer[W]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(q)for(let W=0,j=ht.length;W<j;W++){const dt=n.get(ht[W]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),r.memory.textures++)}if(O.samples>0&&qt(O)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let W=0;W<ht.length;W++){const j=ht[W];nt.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[W]);const dt=o.convert(j.format,j.colorSpace),Tt=o.convert(j.type),bt=v(j.internalFormat,dt,Tt,j.normalized,j.colorSpace,O.isXRRenderTarget===!0),Et=Zt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,bt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,nt.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(nt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),L(s.TEXTURE_CUBE_MAP,A);for(let W=0;W<6;W++)if(A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)et(nt.__webglFramebuffer[W][j],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else et(nt.__webglFramebuffer[W],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(A)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let W=0,j=ht.length;W<j;W++){const dt=ht[W],Tt=n.get(dt);let bt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(bt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,Tt.__webglTexture),L(bt,dt),et(nt.__webglFramebuffer,O,dt,s.COLOR_ATTACHMENT0+W,bt,0),g(dt)&&y(bt)}e.unbindTexture()}else{let W=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(W=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(W,ot.__webglTexture),L(W,A),A.mipmaps&&A.mipmaps.length>0)for(let j=0;j<A.mipmaps.length;j++)et(nt.__webglFramebuffer[j],O,A,s.COLOR_ATTACHMENT0,W,j);else et(nt.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,W,0);g(A)&&y(W),e.unbindTexture()}O.depthBuffer&&lt(O)}function yt(O){const A=O.textures;for(let nt=0,ot=A.length;nt<ot;nt++){const ht=A[nt];if(g(ht)){const St=w(O),q=n.get(ht).__webglTexture;e.bindTexture(St,q),y(St),e.unbindTexture()}}}const vt=[],Gt=[];function Bt(O){if(O.samples>0){if(qt(O)===!1){const A=O.textures,nt=O.width,ot=O.height;let ht=s.COLOR_BUFFER_BIT;const St=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=n.get(O),W=A.length>1;if(W)for(let dt=0;dt<A.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);const j=O.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let dt=0;dt<A.length;dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,q.__webglColorRenderbuffer[dt]);const Tt=n.get(A[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,nt,ot,0,0,nt,ot,ht,s.NEAREST),l===!0&&(vt.length=0,Gt.length=0,vt.push(s.COLOR_ATTACHMENT0+dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(vt.push(St),Gt.push(St),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let dt=0;dt<A.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,q.__webglColorRenderbuffer[dt]);const Tt=n.get(A[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){const A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Zt(O){return Math.min(i.maxSamples,O.samples)}function qt(O){const A=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function K(O){const A=r.render.frame;h.get(O)!==A&&(h.set(O,A),O.update())}function me(O,A){const nt=O.colorSpace,ot=O.format,ht=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Ha&&nt!==is&&(xe.getTransfer(nt)===Se?(ot!==Pn||ht!==wn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",nt)),A}function se(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=st,this.rebindTextures=pt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function t_(s,t){function e(n,i=is){let o;const r=xe.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===zh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===dp)return s.BYTE;if(n===pp)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===Uh)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===xp)return s.ALPHA;if(n===vp)return s.RGB;if(n===Pn)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===xl)return s.RED;if(n===kh)return s.RED_INTEGER;if(n===Cs)return s.RG;if(n===Oh)return s.RG_INTEGER;if(n===Bh)return s.RGBA_INTEGER;if(n===Ca||n===Pa||n===La||n===Ia)if(r===Se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===Hc||n===Vc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Oc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===ka||n===$c)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Gc||n===Wc)return r===Se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return o.COMPRESSED_R11_EAC;if(n===Yc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ka)return o.COMPRESSED_RG11_EAC;if(n===$c)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kc||n===Zc||n===Jc||n===Qc||n===jc||n===th||n===eh||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah||n===lh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Kc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return r===Se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===hh||n===uh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ch)return r===Se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===dh||n===Oa||n===ph)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===fh)return o.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Is{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const m=typeof XRWebGLBinding<"u",x=new i_,g={},y=e.getContextAttributes();let w=null,v=null;const M=[],S=[],E=new mt;let _=null,b=null;const T=new tn;T.viewport=new Ee;const C=new tn;C.viewport=new Ee;const P=[T,C],U=new fx;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=M[D];return z===void 0&&(z=new Bl,M[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=M[D];return z===void 0&&(z=new Bl,M[D]=z),z.getGripSpace()},this.getHand=function(D){let z=M[D];return z===void 0&&(z=new Bl,M[D]=z),z.getHandSpace()};function $(D){const z=S.indexOf(D.inputSource);if(z===-1)return;const X=M[z];X!==void 0&&(X.update(D.inputSource,D.frame,c||r),X.dispatchEvent({type:D.type,data:D.inputSource}))}function Y(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",it);for(let D=0;D<M.length;D++){const z=S[D];z!==null&&(S[D]=null,M[D].disconnect(z))}F=null,k=null,x.reset();for(const D in g)delete g[D];if(t.setRenderTarget(w),d=null,f=null,u=null,i=null,v=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),b!==null){const D=b.camera;D.fov=b.fov,D.zoom=b.zoom,D.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,tt=null,et=null;y.depth&&(et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=y.stencil?Es:Bi,tt=y.stencil?Mr:xi);const xt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ln(f.textureWidth,f.textureHeight,{format:Pn,type:wn,depthTexture:new Sr(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function it(D){for(let z=0;z<D.removed.length;z++){const X=D.removed[z],tt=S.indexOf(X);tt>=0&&(S[tt]=null,M[tt].disconnect(X))}for(let z=0;z<D.added.length;z++){const X=D.added[z];let tt=S.indexOf(X);if(tt===-1){for(let xt=0;xt<M.length;xt++)if(xt>=S.length){S.push(X),tt=xt;break}else if(S[xt]===null){S[xt]=X,tt=xt;break}if(tt===-1)break}const et=M[tt];et&&et.connect(X)}}const G=new I,Z=new I;function st(D,z,X){G.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(X.matrixWorld);const tt=G.distanceTo(Z),et=z.projectionMatrix.elements,xt=X.projectionMatrix.elements,_t=et[14]/(et[10]-1),lt=et[14]/(et[10]+1),pt=(et[9]+1)/et[5],ft=(et[9]-1)/et[5],yt=(et[8]-1)/et[0],vt=(xt[8]+1)/xt[0],Gt=_t*yt,Bt=_t*vt,Zt=tt/(-yt+vt),qt=Zt*-yt;if(z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(qt),D.translateZ(Zt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),et[10]===-1)D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const K=_t+Zt,me=lt+Zt,se=Gt-qt,O=Bt+(tt-qt),A=pt*lt/me*K,nt=ft*lt/me*K;D.projectionMatrix.makePerspective(se,O,A,nt,K,me),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ut(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let z=D.near,X=D.far;x.texture!==null&&(x.depthNear>0&&(z=x.depthNear),x.depthFar>0&&(X=x.depthFar)),U.near=C.near=T.near=z,U.far=C.far=T.far=X,(F!==U.near||k!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,k=U.far),U.layers.mask=D.layers.mask|6,T.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const tt=D.parent,et=U.cameras;ut(U,tt);for(let xt=0;xt<et.length;xt++)ut(et[xt],tt);et.length===2?st(U,T,C):U.projectionMatrix.copy(T.projectionMatrix),b===null&&D.isPerspectiveCamera&&(b={camera:D,fov:D.fov,zoom:D.zoom}),B(D,U,tt)};function B(D,z,X){X===null?D.matrix.copy(z.matrixWorld):(D.matrix.copy(X.matrixWorld),D.matrix.invert(),D.matrix.multiply(z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=wo*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(D){return g[D]};let H=null;function L(D,z){if(h=z.getViewerPose(c||r),p=z,h!==null){const X=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let tt=!1;X.length!==U.cameras.length&&(U.cameras.length=0,tt=!0);for(let lt=0;lt<X.length;lt++){const pt=X[lt];let ft=null;if(d!==null)ft=d.getViewport(pt);else{const vt=u.getViewSubImage(f,pt);ft=vt.viewport,lt===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let yt=P[lt];yt===void 0&&(yt=new tn,yt.layers.enable(lt),yt.viewport=new Ee,P[lt]=yt),yt.matrix.fromArray(pt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(pt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(ft.x,ft.y,ft.width,ft.height),lt===0&&(U.matrix.copy(yt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),tt===!0&&U.cameras.push(yt)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const lt=u.getDepthInformation(X[0]);lt&&lt.isValid&&lt.texture&&x.init(lt,i.renderState)}if(et&&et.includes("camera-access")&&m){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<X.length;lt++){const pt=X[lt].camera;if(pt){let ft=g[pt];ft||(ft=new Rp,g[pt]=ft);const yt=u.getCameraImage(pt);ft.sourceTexture=yt}}}}for(let X=0;X<M.length;X++){const tt=S[X],et=M[X];tt!==null&&et!==void 0&&et.update(tt,z,c||r)}H&&H(D,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}const V=new Gp;V.setAnimationLoop(L),this.setAnimationLoop=function(D){H=D},this.dispose=function(){}}}const o_=new Kt,Kp=new te;Kp.set(-1,0,0,0,1,0,0,0,1);function r_(s,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,kp(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(x,g):g.isMeshLambertMaterial?(o(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(x,g),u(x,g)):g.isMeshPhongMaterial?(o(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(x,g),f(x,g),g.isMeshPhysicalMaterial&&d(x,g,v)):g.isMeshMatcapMaterial?(o(x,g),p(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),m(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(r(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,y,w):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Sn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Sn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const y=t.get(g),w=y.envMap,v=y.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Kp),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function r(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,y){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function m(x,g){const y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a_(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=i[v.id];S===void 0&&(x(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",y));const E=M.program;n.updateUBOMapping(v,E);const _=t.render.frame;o[v.id]!==_&&(f(v),o[v.id]=_)}function h(v){const M=u();v.__bindingPointIndex=M;const S=s.createBuffer(),E=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,E,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],S=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,b=S.length;_<b;_++){const T=S[_];if(Array.isArray(T))for(let C=0,P=T.length;C<P;C++)d(T[C],_,C,E);else d(T,_,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,S,E){if(m(v,M,S,E)===!0){const _=v.__offset,b=v.value;if(Array.isArray(b)){let T=0;for(let C=0;C<b.length;C++){const P=b[C],U=g(P);p(P,v.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function m(v,M,S,E){const _=v.value,b=M+"_"+S;if(E[b]===void 0)return typeof _=="number"||typeof _=="boolean"?E[b]=_:ArrayBuffer.isView(_)?E[b]=_.slice():E[b]=_.clone(),!0;{const T=E[b];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return E[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function x(v){const M=v.uniforms;let S=0;const E=16;for(let b=0,T=M.length;b<T;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let P=0,U=C.length;P<U;P++){const F=C[P],k=Array.isArray(F.value)?F.value:[F.value];for(let $=0,Y=k.length;$<Y;$++){const it=k[$],G=g(it),Z=S%E,st=Z%G.boundary,ut=Z+st;S+=st,ut!==0&&E-ut<G.storage&&(S+=E-ut),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}const _=S%E;return _>0&&(S+=E-_),v.__size=S,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),M}function y(v){const M=v.target;M.removeEventListener("dispose",y);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);r=[],i={},o={}}return{bind:l,update:c,dispose:w}}const l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function c_(){return ii===null&&(ii=new So(l_,16,16,Cs,In),ii.name="DFG_LUT",ii.minFilter=en,ii.magFilter=en,ii.wrapS=Ni,ii.wrapT=Ni,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class h_{constructor(t={}){const{canvas:e=Am(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=d,x=new Set([Bh,Oh,kh]),g=new Set([wn,xi,yr,Mr,zh,Fh]),y=new Uint32Array(4),w=new Int32Array(4),v=new I;let M=null,S=null;const E=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,P=null,U=null,F=null,k=null;this._outputColorSpace=Ne;let $=0,Y=0,it=null,G=-1,Z=null;const st=new Ee,ut=new Ee;let B=null;const H=new Ct(0);let L=0,V=e.width,D=e.height,z=1,X=null,tt=null;const et=new Ee(0,0,V,D),xt=new Ee(0,0,V,D);let _t=!1;const lt=new Kh;let pt=!1,ft=!1;const yt=new Kt,vt=new I,Gt=new Ee,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function qt(){return it===null?z:1}let K=n;function me(N,J){return e.getContext(N,J)}let se,O,A,nt,ot,ht,St,q,W,j,dt,Tt,bt,Et,kt,Jt,ie,Q,At,gt,Rt,Dt,Mt;try{const N={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ih}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),K===null){const J="webgl2";if(K=me(J,N),K===null)throw me(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(N){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),ge("WebGLRenderer: "+N.message),N}function Yt(){se=new cy(K),se.init(),Rt=new t_(K,se),O=new j1(K,se,t,Rt),A=new QM(K,se),O.reversedDepthBuffer&&f&&A.buffers.depth.setReversed(!0),U=K.createFramebuffer(),F=K.createFramebuffer(),k=K.createFramebuffer(),nt=new fy(K),ot=new kM,ht=new jM(K,se,A,ot,O,Rt,nt),St=new ly(T),q=new px(K),Dt=new J1(K,q),W=new hy(K,q,nt,Dt),j=new py(K,W,q,Dt,nt),Q=new dy(K,O,ht),kt=new ty(ot),dt=new FM(T,St,se,O,Dt,kt),Tt=new r_(T,ot),bt=new BM,Et=new qM(se),ie=new Z1(T,St,A,j,p,l),Jt=new JM(T,j,O),Mt=new a_(K,nt,O,A),At=new Q1(K,se,nt),gt=new uy(K,se,nt),nt.programs=dt.programs,T.capabilities=O,T.extensions=se,T.properties=ot,T.renderLists=bt,T.shadowMap=Jt,T.state=A,T.info=nt}m!==wn&&(b=new gy(m,e.width,e.height,a,i,o));const Wt=new s_(T,K);this.xr=Wt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=se.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=se.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(N){N!==void 0&&(z=N,this.setSize(V,D,!1))},this.getSize=function(N){return N.set(V,D)},this.setSize=function(N,J,ct=!0){if(Wt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,D=J,e.width=Math.floor(N*z),e.height=Math.floor(J*z),ct===!0&&(e.style.width=N+"px",e.style.height=J+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(V*z,D*z).floor()},this.setDrawingBufferSize=function(N,J,ct){V=N,D=J,z=ct,e.width=Math.floor(N*ct),e.height=Math.floor(J*ct),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(m===wn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(st)},this.getViewport=function(N){return N.copy(et)},this.setViewport=function(N,J,ct,rt){N.isVector4?et.set(N.x,N.y,N.z,N.w):et.set(N,J,ct,rt),A.viewport(st.copy(et).multiplyScalar(z).round())},this.getScissor=function(N){return N.copy(xt)},this.setScissor=function(N,J,ct,rt){N.isVector4?xt.set(N.x,N.y,N.z,N.w):xt.set(N,J,ct,rt),A.scissor(ut.copy(xt).multiplyScalar(z).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(N){A.setScissorTest(_t=N)},this.setOpaqueSort=function(N){X=N},this.setTransparentSort=function(N){tt=N},this.getClearColor=function(N){return N.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,ct=!0){let rt=0;if(N){let at=!1;if(it!==null){const It=it.texture.format;at=x.has(It)}if(at){const It=it.texture.type,Ft=g.has(It),Lt=ie.getClearColor(),Ht=ie.getClearAlpha(),Xt=Lt.r,le=Lt.g,fe=Lt.b;Ft?(y[0]=Xt,y[1]=le,y[2]=fe,y[3]=Ht,K.clearBufferuiv(K.COLOR,0,y)):(w[0]=Xt,w[1]=le,w[2]=fe,w[3]=Ht,K.clearBufferiv(K.COLOR,0,w))}else rt|=K.COLOR_BUFFER_BIT}J&&(rt|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(rt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&K.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),P=N},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),ie.dispose(),bt.dispose(),Et.dispose(),ot.dispose(),St.dispose(),j.dispose(),Dt.dispose(),Mt.dispose(),dt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Au),Wt.removeEventListener("sessionend",Ru),ms.stop()};function Le(N){N.preventDefault(),Ga("WebGLRenderer: Context Lost."),C=!0}function ye(){Ga("WebGLRenderer: Context Restored."),C=!1;const N=nt.autoReset,J=Jt.enabled,ct=Jt.autoUpdate,rt=Jt.needsUpdate,at=Jt.type;Yt(),nt.autoReset=N,Jt.enabled=J,Jt.autoUpdate=ct,Jt.needsUpdate=rt,Jt.type=at}function Hn(N){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ti(N){const J=N.target;J.removeEventListener("dispose",ti),N0(J)}function N0(N){U0(N),ot.remove(N)}function U0(N){const J=ot.get(N).programs;J!==void 0&&(J.forEach(function(ct){dt.releaseProgram(ct)}),N.isShaderMaterial&&dt.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,ct,rt,at,It){J===null&&(J=Bt);const Ft=at.isMesh&&at.matrixWorld.determinantAffine()<0,Lt=k0(N,J,ct,rt,at);A.setMaterial(rt,Ft);let Ht=ct.index,Xt=1;if(rt.wireframe===!0){if(Ht=W.getWireframeAttribute(ct),Ht===void 0)return;Xt=2}const le=ct.drawRange,fe=ct.attributes.position;let Vt=le.start*Xt,Me=(le.start+le.count)*Xt;It!==null&&(Vt=Math.max(Vt,It.start*Xt),Me=Math.min(Me,(It.start+It.count)*Xt)),Ht!==null?(Vt=Math.max(Vt,0),Me=Math.min(Me,Ht.count)):fe!=null&&(Vt=Math.max(Vt,0),Me=Math.min(Me,fe.count));const Ve=Me-Vt;if(Ve<0||Ve===1/0)return;Dt.setup(at,rt,Lt,ct,Ht);let De,Pe=At;if(Ht!==null&&(De=q.get(Ht),Pe=gt,Pe.setIndex(De)),at.isMesh)rt.wireframe===!0?(A.setLineWidth(rt.wireframeLinewidth*qt()),Pe.setMode(K.LINES)):Pe.setMode(K.TRIANGLES);else if(at.isLine){let rn=rt.linewidth;rn===void 0&&(rn=1),A.setLineWidth(rn*qt()),at.isLineSegments?Pe.setMode(K.LINES):at.isLineLoop?Pe.setMode(K.LINE_LOOP):Pe.setMode(K.LINE_STRIP)}else at.isPoints?Pe.setMode(K.POINTS):at.isSprite&&Pe.setMode(K.TRIANGLES);if(at.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Pe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const rn=at._multiDrawStarts,zt=at._multiDrawCounts,hn=at._multiDrawCount,ve=Ht?q.get(Ht).bytesPerElement:1,Nn=ot.get(rt).currentProgram.getUniforms();for(let ei=0;ei<hn;ei++)Nn.setValue(K,"_gl_DrawID",ei),Pe.render(rn[ei]/ve,zt[ei])}else if(at.isInstancedMesh)Pe.renderInstances(Vt,Ve,at.count);else if(ct.isInstancedBufferGeometry){const rn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,zt=Math.min(ct.instanceCount,rn);Pe.renderInstances(Vt,Ve,zt)}else Pe.render(Vt,Ve)};function Tu(N,J,ct,rt){P!==null&&N.isNodeMaterial&&P.setObject(rt,N),pt===!0&&kt.setState(N,ct,!1),N.transparent===!0&&N.side===Zn&&N.forceSinglePass===!1?(N.side=Sn,N.needsUpdate=!0,Ur(N,J,rt),N.side=As,N.needsUpdate=!0,Ur(N,J,rt),N.side=Zn):Ur(N,J,rt)}this.compile=function(N,J,ct=null){ct===null&&(ct=N),P!==null&&P.renderStart(N,J,ct),S=Et.get(ct),S.init(J),_.push(S),ct.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),N!==ct&&N.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),ft=this.localClippingEnabled,pt=kt.init(this.clippingPlanes,ft),pt===!0&&kt.setGlobalState(this.clippingPlanes,J),P!==null&&Jt.render(S.state.shadowsArray,ct,J);const rt=new Set;return N.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Ft=0;Ft<It.length;Ft++){const Lt=It[Ft];Tu(Lt,ct,J,at),rt.add(Lt)}else Tu(It,ct,J,at),rt.add(It)}),S=_.pop(),P!==null&&P.renderEnd(),rt},this.compileAsync=function(N,J,ct=null){const rt=this.compile(N,J,ct);return new Promise(at=>{function It(){if(rt.forEach(function(Ft){const Ht=ot.get(Ft).currentProgram;(Ht===void 0||Ht.isReady())&&rt.delete(Ft)}),rt.size===0){at(N);return}setTimeout(It,10)}se.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Cl=null;function z0(N){Cl&&Cl(N)}function Au(){ms.stop()}function Ru(){ms.start()}const ms=new Gp;ms.setAnimationLoop(z0),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(N){Cl=N,Wt.setAnimationLoop(N),N===null?ms.stop():ms.start()},Wt.addEventListener("sessionstart",Au),Wt.addEventListener("sessionend",Ru),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(N,J);const ct=Wt.enabled===!0&&Wt.isPresenting===!0,rt=b!==null&&(it===null||ct)&&b.begin(T,it);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(J),J=Wt.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,J,it),S=Et.get(N,_.length),S.init(J),S.state.textureUnits=ht.getTextureUnits(),_.push(S),yt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),lt.setFromProjectionMatrix(yt,fi,J.reversedDepth),ft=this.localClippingEnabled,pt=kt.init(this.clippingPlanes,ft),M=bt.get(N,E.length),M.init(),E.push(M),Wt.enabled===!0&&Wt.isPresenting===!0){const Ft=T.xr.getDepthSensingMesh();Ft!==null&&Pl(Ft,J,-1/0,T.sortObjects)}Pl(N,J,0,T.sortObjects),M.finish(),P!==null&&P.updateLights(S.state.lightsArray),T.sortObjects===!0&&M.sort(X,tt),Zt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,Zt&&ie.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&kt.beginShadows();const at=S.state.shadowsArray;if(Jt.render(at,N,J),pt===!0&&kt.endShadows(),(rt&&b.hasRenderPass())===!1){const Ft=M.opaque,Lt=M.transmissive;if(S.setupLights(),J.isArrayCamera){const Ht=J.cameras;if(Lt.length>0)for(let Xt=0,le=Ht.length;Xt<le;Xt++){const fe=Ht[Xt];Pu(Ft,Lt,N,fe)}Zt&&ie.render(N);for(let Xt=0,le=Ht.length;Xt<le;Xt++){const fe=Ht[Xt];Cu(M,N,fe,fe.viewport)}}else Lt.length>0&&Pu(Ft,Lt,N,J),Zt&&ie.render(N),Cu(M,N,J)}it!==null&&Y===0&&(ht.updateMultisampleRenderTarget(it),ht.updateRenderTargetMipmap(it)),rt&&b.end(T),N.isScene===!0&&N.onAfterRender(T,N,J),Dt.resetDefaultState(),G=-1,Z=null,_.pop(),_.length>0?(S=_[_.length-1],ht.setTextureUnits(S.state.textureUnits),pt===!0&&kt.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,P!==null&&P.renderEnd()};function Pl(N,J,ct,rt){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)ct=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLightProbeGrid)S.pushLightProbeGrid(N);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(lt)){rt&&Gt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(yt);const Ft=j.update(N),Lt=N.material;Lt.visible&&M.push(N,Ft,Lt,ct,Gt.z,null,J)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(lt))){const Ft=j.update(N),Lt=N.material;if(rt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Gt.copy(N.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Gt.copy(Ft.boundingSphere.center)),Gt.applyMatrix4(N.matrixWorld).applyMatrix4(yt)),Array.isArray(Lt)){const Ht=Ft.groups;for(let Xt=0,le=Ht.length;Xt<le;Xt++){const fe=Ht[Xt],Vt=Lt[fe.materialIndex];Vt&&Vt.visible&&M.push(N,Ft,Vt,ct,Gt.z,fe,J)}}else Lt.visible&&M.push(N,Ft,Lt,ct,Gt.z,null,J)}}const It=N.children;for(let Ft=0,Lt=It.length;Ft<Lt;Ft++)Pl(It[Ft],J,ct,rt)}function Cu(N,J,ct,rt){const{opaque:at,transmissive:It,transparent:Ft}=N;S.setupLightsView(ct),pt===!0&&kt.setGlobalState(T.clippingPlanes,ct),rt&&A.viewport(st.copy(rt)),at.length>0&&Nr(at,J,ct),It.length>0&&Nr(It,J,ct),Ft.length>0&&Nr(Ft,J,ct),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Pu(N,J,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[rt.id]===void 0){const Vt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[rt.id]=new Ln(1,1,{generateMipmaps:!0,type:Vt?In:wn,minFilter:rs,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const It=S.state.transmissionRenderTarget[rt.id],Ft=rt.viewport||st;It.setSize(Ft.z*T.transmissionResolutionScale,Ft.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Ht=T.getActiveCubeFace(),Xt=T.getActiveMipmapLevel();T.setRenderTarget(It),T.getClearColor(H),L=T.getClearAlpha(),L<1&&T.setClearColor(16777215,.5),T.clear(),Zt&&ie.render(ct);const le=T.toneMapping;T.toneMapping=mi;const fe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),pt===!0&&kt.setGlobalState(T.clippingPlanes,rt),Nr(N,ct,rt),ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It),se.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Me=0,Ve=J.length;Me<Ve;Me++){const De=J[Me],{object:Pe,geometry:rn,material:zt,group:hn}=De;if(zt.side===Zn&&Pe.layers.test(rt.layers)){const ve=zt.side;zt.side=Sn,zt.needsUpdate=!0,Lu(Pe,ct,rt,rn,zt,hn),zt.side=ve,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It))}T.setRenderTarget(Lt,Ht,Xt),T.setClearColor(H,L),fe!==void 0&&(rt.viewport=fe),T.toneMapping=le}function Nr(N,J,ct){const rt=J.isScene===!0?J.overrideMaterial:null;for(let at=0,It=N.length;at<It;at++){const Ft=N[at],{object:Lt,geometry:Ht,group:Xt}=Ft;let le=Ft.material;le.allowOverride===!0&&rt!==null&&(le=rt),Lt.layers.test(ct.layers)&&Lu(Lt,J,ct,Ht,le,Xt)}}function Lu(N,J,ct,rt,at,It){P!==null&&at.isNodeMaterial&&P.setObject(N,at),N.onBeforeRender(T,J,ct,rt,at,It),N.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),at.onBeforeRender(T,J,ct,rt,N,It),at.transparent===!0&&at.side===Zn&&at.forceSinglePass===!1?(at.side=Sn,at.needsUpdate=!0,T.renderBufferDirect(ct,J,rt,at,N,It),at.side=As,at.needsUpdate=!0,T.renderBufferDirect(ct,J,rt,at,N,It),at.side=Zn):T.renderBufferDirect(ct,J,rt,at,N,It),N.onAfterRender(T,J,ct,rt,at,It)}function Ur(N,J,ct){J.isScene!==!0&&(J=Bt);const rt=ot.get(N),at=S.state.lights,It=S.state.shadowsArray,Ft=at.state.version,Lt=dt.getParameters(N,at.state,It,J,ct,S.state.lightProbeGridArray),Ht=dt.getProgramCacheKey(Lt);let Xt=rt.programs;rt.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,rt.fog=J.fog;const le=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;rt.envMap=St.get(N.envMap||rt.environment,le),rt.envMapRotation=rt.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,Xt===void 0&&(N.addEventListener("dispose",ti),Xt=new Map,rt.programs=Xt);let fe=Xt.get(Ht);if(fe!==void 0){if(rt.currentProgram===fe&&rt.lightsStateVersion===Ft)return Du(N,Lt),fe}else Lt.uniforms=dt.getUniforms(N),P!==null&&N.isNodeMaterial&&P.build(N,ct,Lt),N.onBeforeCompile(Lt,T),fe=dt.acquireProgram(Lt,Ht),Xt.set(Ht,fe),rt.uniforms=Lt.uniforms;const Vt=rt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Vt.clippingPlanes=kt.uniform),Du(N,Lt),rt.needsLights=B0(N),rt.lightsStateVersion=Ft,rt.needsLights&&(Vt.ambientLightColor.value=at.state.ambient,Vt.lightProbe.value=at.state.probe,Vt.sunLights.value=at.state.sun,Vt.sunLightShadows.value=at.state.sunShadow,Vt.directionalLights.value=at.state.directional,Vt.directionalLightShadows.value=at.state.directionalShadow,Vt.spotLights.value=at.state.spot,Vt.spotLightShadows.value=at.state.spotShadow,Vt.rectAreaLights.value=at.state.rectArea,Vt.ltc_1.value=at.state.rectAreaLTC1,Vt.ltc_2.value=at.state.rectAreaLTC2,Vt.pointLights.value=at.state.point,Vt.pointLightShadows.value=at.state.pointShadow,Vt.hemisphereLights.value=at.state.hemi,Vt.sunShadowMatrix.value=at.state.sunShadowMatrix,Vt.sunShadowCascade.value=at.state.sunShadowCascade,Vt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Vt.spotLightMatrix.value=at.state.spotLightMatrix,Vt.spotLightMap.value=at.state.spotLightMap,Vt.pointShadowMatrix.value=at.state.pointShadowMatrix),rt.lightProbeGrid=S.state.lightProbeGridArray.length>0,rt.currentProgram=fe,rt.uniformsList=null,fe}function Iu(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=Da.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Du(N,J){const ct=ot.get(N);ct.outputColorSpace=J.outputColorSpace,ct.batching=J.batching,ct.batchingColor=J.batchingColor,ct.instancing=J.instancing,ct.instancingColor=J.instancingColor,ct.instancingMorph=J.instancingMorph,ct.skinning=J.skinning,ct.morphTargets=J.morphTargets,ct.morphNormals=J.morphNormals,ct.morphColors=J.morphColors,ct.morphTargetsCount=J.morphTargetsCount,ct.numClippingPlanes=J.numClippingPlanes,ct.numIntersection=J.numClipIntersection,ct.vertexAlphas=J.vertexAlphas,ct.vertexTangents=J.vertexTangents,ct.toneMapping=J.toneMapping}function F0(N,J){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;v.setFromMatrixPosition(J.matrixWorld);for(let ct=0,rt=N.length;ct<rt;ct++){const at=N[ct];if(at.texture!==null&&at.boundingBox.containsPoint(v))return at}return null}function k0(N,J,ct,rt,at){J.isScene!==!0&&(J=Bt),ht.resetTextureUnits();const It=J.fog,Ft=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?J.environment:null,Lt=it===null?T.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,Ht=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Xt=St.get(rt.envMap||Ft,Ht),le=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,fe=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Vt=!!ct.morphAttributes.position,Me=!!ct.morphAttributes.normal,Ve=!!ct.morphAttributes.color;let De=mi;rt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(De=T.toneMapping);const Pe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,rn=Pe!==void 0?Pe.length:0,zt=ot.get(rt),hn=S.state.lights;if(pt===!0&&(ft===!0||N!==Z)){const Ie=N===Z&&rt.id===G;kt.setState(rt,N,Ie)}let ve=!1;rt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==hn.state.version||zt.outputColorSpace!==Lt||at.isBatchedMesh&&zt.batching===!1||!at.isBatchedMesh&&zt.batching===!0||at.isBatchedMesh&&zt.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&zt.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&zt.instancing===!1||!at.isInstancedMesh&&zt.instancing===!0||at.isSkinnedMesh&&zt.skinning===!1||!at.isSkinnedMesh&&zt.skinning===!0||at.isInstancedMesh&&zt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&zt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&zt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&zt.instancingMorph===!1&&at.morphTexture!==null||zt.envMap!==Xt||rt.fog===!0&&zt.fog!==It||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==kt.numPlanes||zt.numIntersection!==kt.numIntersection)||zt.vertexAlphas!==le||zt.vertexTangents!==fe||zt.morphTargets!==Vt||zt.morphNormals!==Me||zt.morphColors!==Ve||zt.toneMapping!==De||zt.morphTargetsCount!==rn||!!zt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,zt.__version=rt.version);let Nn=zt.currentProgram;ve===!0&&(Nn=Ur(rt,J,at),P&&rt.isNodeMaterial&&P.onUpdateProgram(rt,Nn,zt));let ei=!1,Vi=!1,Ns=!1;const Te=Nn.getUniforms(),Oe=zt.uniforms;if(A.useProgram(Nn.program)&&(ei=!0,Vi=!0,Ns=!0),rt.id!==G&&(G=rt.id,Vi=!0),zt.needsLights){const Ie=F0(S.state.lightProbeGridArray,at);zt.lightProbeGrid!==Ie&&(zt.lightProbeGrid=Ie,Vi=!0)}if(ei||Z!==N){A.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Te.setValue(K,"projectionMatrix",N.projectionMatrix),Te.setValue(K,"viewMatrix",N.matrixWorldInverse);const Wi=Te.map.cameraPosition;Wi!==void 0&&Wi.setValue(K,vt.setFromMatrixPosition(N.matrixWorld)),O.logarithmicDepthBuffer&&Te.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Te.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),Z!==N&&(Z=N,Vi=!0,Ns=!0)}if(zt.needsLights&&(hn.state.sunShadowMap.length>0&&Te.setValue(K,"sunShadowMap",hn.state.sunShadowMap,ht),hn.state.directionalShadowMap.length>0&&Te.setValue(K,"directionalShadowMap",hn.state.directionalShadowMap,ht),hn.state.spotShadowMap.length>0&&Te.setValue(K,"spotShadowMap",hn.state.spotShadowMap,ht),hn.state.pointShadowMap.length>0&&Te.setValue(K,"pointShadowMap",hn.state.pointShadowMap,ht)),at.isSkinnedMesh){Te.setOptional(K,at,"bindMatrix"),Te.setOptional(K,at,"bindMatrixInverse");const Ie=at.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Te.setValue(K,"boneTexture",Ie.boneTexture,ht))}at.isBatchedMesh&&(Te.setOptional(K,at,"batchingTexture"),Te.setValue(K,"batchingTexture",at._matricesTexture,ht),Te.setOptional(K,at,"batchingIdTexture"),Te.setValue(K,"batchingIdTexture",at._indirectTexture,ht),Te.setOptional(K,at,"batchingColorTexture"),at._colorsTexture!==null&&Te.setValue(K,"batchingColorTexture",at._colorsTexture,ht));const Gi=ct.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Q.update(at,ct,Nn),(Vi||zt.receiveShadow!==at.receiveShadow)&&(zt.receiveShadow=at.receiveShadow,Te.setValue(K,"receiveShadow",at.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&J.environment!==null&&(Oe.envMapIntensity.value=J.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=c_()),Vi){if(Te.setValue(K,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&O0(Oe,Ns),It&&rt.fog===!0&&Tt.refreshFogUniforms(Oe,It),Tt.refreshMaterialUniforms(Oe,rt,z,D,S.state.transmissionRenderTarget[N.id]),zt.needsLights&&zt.lightProbeGrid){const Ie=zt.lightProbeGrid;Oe.probesSH.value=Ie.texture,Oe.probesMin.value.copy(Ie.boundingBox.min),Oe.probesMax.value.copy(Ie.boundingBox.max),Oe.probesResolution.value.copy(Ie.resolution)}Da.upload(K,Iu(zt),Oe,ht)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Da.upload(K,Iu(zt),Oe,ht),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Te.setValue(K,"center",at.center),Te.setValue(K,"modelViewMatrix",at.modelViewMatrix),Te.setValue(K,"normalMatrix",at.normalMatrix),Te.setValue(K,"modelMatrix",at.matrixWorld),rt.uniformsGroups!==void 0){const Ie=rt.uniformsGroups;for(let Wi=0,Us=Ie.length;Wi<Us;Wi++){const Uu=Ie[Wi];Mt.update(Uu,Nn),Mt.bind(Uu,Nn)}}return Nn}function O0(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function B0(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(N,J,ct){const rt=ot.get(N);rt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ot.get(N.texture).__webglTexture=J,ot.get(N.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const ct=ot.get(N);ct.__webglFramebuffer=J,ct.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,ct=0){it=N,$=J,Y=ct;let rt=null,at=!1,It=!1;if(N){const Lt=ot.get(N);if(Lt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(K.FRAMEBUFFER,Lt.__webglFramebuffer),st.copy(N.viewport),ut.copy(N.scissor),B=N.scissorTest,A.viewport(st),A.scissor(ut),A.setScissorTest(B),G=-1;return}else if(Lt.__webglFramebuffer===void 0)ht.setupRenderTarget(N);else if(Lt.__hasExternalTextures)ht.rebindTextures(N,ot.get(N.texture).__webglTexture,ot.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const le=N.depthTexture;if(Lt.__boundDepthTexture!==le){if(le!==null&&ot.has(le)&&(N.width!==le.image.width||N.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(N)}}const Ht=N.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(It=!0);const Xt=ot.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Xt[J])?rt=Xt[J][ct]:rt=Xt[J],at=!0):N.samples>0&&ht.useMultisampledRTT(N)===!1?rt=ot.get(N).__webglMultisampledFramebuffer:Array.isArray(Xt)?rt=Xt[ct]:rt=Xt,st.copy(N.viewport),ut.copy(N.scissor),B=N.scissorTest}else st.copy(et).multiplyScalar(z).floor(),ut.copy(xt).multiplyScalar(z).floor(),B=_t;if(ct!==0&&(rt=U),A.bindFramebuffer(K.FRAMEBUFFER,rt)&&A.drawBuffers(N,rt),A.viewport(st),A.scissor(ut),A.setScissorTest(B),at){const Lt=ot.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt.__webglTexture,ct)}else if(It){const Lt=J;for(let Ht=0;Ht<N.textures.length;Ht++){const Xt=ot.get(N.textures[Ht]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,ct,Lt)}}else if(N!==null&&ct!==0){const Lt=ot.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Lt.__webglTexture,ct)}G=-1};function Nu(N){const J=ot.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=O.textureFormatReadable(N.format),J.__typeReadable=O.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,ct,rt,at,It,Ft,Lt=0){if(!(N&&N.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){A.bindFramebuffer(K.FRAMEBUFFER,Ht);try{const Xt=N.textures[Lt],le=Xt.format,fe=Xt.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const Vt=Nu(Xt);if(Vt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-rt&&ct>=0&&ct<=N.height-at&&K.readPixels(J,ct,rt,at,Rt.convert(le),Rt.convert(fe),It)}finally{const Xt=it!==null?ot.get(it).__webglFramebuffer:null;A.bindFramebuffer(K.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(N,J,ct,rt,at,It,Ft,Lt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ot.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(J>=0&&J<=N.width-rt&&ct>=0&&ct<=N.height-at){A.bindFramebuffer(K.FRAMEBUFFER,Ht);const Xt=N.textures[Lt],le=Xt.format,fe=Xt.type;N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Lt);const Vt=Nu(Xt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Me),K.bufferData(K.PIXEL_PACK_BUFFER,It.byteLength,K.STREAM_READ),K.readPixels(J,ct,rt,at,Rt.convert(le),Rt.convert(fe),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Ve=it!==null?ot.get(it).__webglFramebuffer:null;A.bindFramebuffer(K.FRAMEBUFFER,Ve);const De=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Rm(K,De,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Me),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,It),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Me),K.deleteSync(De),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,ct=0){const rt=Math.pow(2,-ct),at=Math.floor(N.image.width*rt),It=Math.floor(N.image.height*rt),Ft=J!==null?J.x:0,Lt=J!==null?J.y:0;ht.setTexture2D(N,0),K.copyTexSubImage2D(K.TEXTURE_2D,ct,0,0,Ft,Lt,at,It),A.unbindTexture()},this.copyTextureToTexture=function(N,J,ct=null,rt=null,at=0,It=0){let Ft,Lt,Ht,Xt,le,fe,Vt,Me,Ve;const De=N.isCompressedTexture?N.mipmaps[It]:N.image;if(ct!==null)Ft=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,Ht=ct.isBox3?ct.max.z-ct.min.z:1,Xt=ct.min.x,le=ct.min.y,fe=ct.isBox3?ct.min.z:0;else{const Oe=Math.pow(2,-at);Ft=Math.floor(De.width*Oe),Lt=Math.floor(De.height*Oe),N.isDataArrayTexture?Ht=De.depth:N.isData3DTexture?Ht=Math.floor(De.depth*Oe):Ht=1,Xt=0,le=0,fe=0}rt!==null?(Vt=rt.x,Me=rt.y,Ve=rt.z):(Vt=0,Me=0,Ve=0);const Pe=Rt.convert(J.format),rn=Rt.convert(J.type);let zt;J.isData3DTexture?(ht.setTexture3D(J,0),zt=K.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ht.setTexture2DArray(J,0),zt=K.TEXTURE_2D_ARRAY):(ht.setTexture2D(J,0),zt=K.TEXTURE_2D),A.activeTexture(K.TEXTURE0),A.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),A.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),A.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);const hn=A.getParameter(K.UNPACK_ROW_LENGTH),ve=A.getParameter(K.UNPACK_IMAGE_HEIGHT),Nn=A.getParameter(K.UNPACK_SKIP_PIXELS),ei=A.getParameter(K.UNPACK_SKIP_ROWS),Vi=A.getParameter(K.UNPACK_SKIP_IMAGES);A.pixelStorei(K.UNPACK_ROW_LENGTH,De.width),A.pixelStorei(K.UNPACK_IMAGE_HEIGHT,De.height),A.pixelStorei(K.UNPACK_SKIP_PIXELS,Xt),A.pixelStorei(K.UNPACK_SKIP_ROWS,le),A.pixelStorei(K.UNPACK_SKIP_IMAGES,fe);const Ns=N.isDataArrayTexture||N.isData3DTexture,Te=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const Oe=ot.get(N),Gi=ot.get(J),Ie=ot.get(Oe.__renderTarget),Wi=ot.get(Gi.__renderTarget);A.bindFramebuffer(K.READ_FRAMEBUFFER,Ie.__webglFramebuffer),A.bindFramebuffer(K.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Us=0;Us<Ht;Us++)Ns&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ot.get(N).__webglTexture,at,fe+Us),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ot.get(J).__webglTexture,It,Ve+Us)),K.blitFramebuffer(Xt,le,Ft,Lt,Vt,Me,Ft,Lt,K.DEPTH_BUFFER_BIT,K.NEAREST);A.bindFramebuffer(K.READ_FRAMEBUFFER,null),A.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(at!==0||N.isRenderTargetTexture||ot.has(N)){const Oe=ot.get(N),Gi=ot.get(J);A.bindFramebuffer(K.READ_FRAMEBUFFER,F),A.bindFramebuffer(K.DRAW_FRAMEBUFFER,k);for(let Ie=0;Ie<Ht;Ie++)Ns?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Oe.__webglTexture,at,fe+Ie):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Oe.__webglTexture,at),Te?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gi.__webglTexture,It,Ve+Ie):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gi.__webglTexture,It),at!==0?K.blitFramebuffer(Xt,le,Ft,Lt,Vt,Me,Ft,Lt,K.COLOR_BUFFER_BIT,K.NEAREST):Te?K.copyTexSubImage3D(zt,It,Vt,Me,Ve+Ie,Xt,le,Ft,Lt):K.copyTexSubImage2D(zt,It,Vt,Me,Xt,le,Ft,Lt);A.bindFramebuffer(K.READ_FRAMEBUFFER,null),A.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Te?N.isDataTexture||N.isData3DTexture?K.texSubImage3D(zt,It,Vt,Me,Ve,Ft,Lt,Ht,Pe,rn,De.data):J.isCompressedArrayTexture?K.compressedTexSubImage3D(zt,It,Vt,Me,Ve,Ft,Lt,Ht,Pe,De.data):K.texSubImage3D(zt,It,Vt,Me,Ve,Ft,Lt,Ht,Pe,rn,De):N.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,It,Vt,Me,Ft,Lt,Pe,rn,De.data):N.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,It,Vt,Me,De.width,De.height,Pe,De.data):K.texSubImage2D(K.TEXTURE_2D,It,Vt,Me,Ft,Lt,Pe,rn,De);A.pixelStorei(K.UNPACK_ROW_LENGTH,hn),A.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ve),A.pixelStorei(K.UNPACK_SKIP_PIXELS,Nn),A.pixelStorei(K.UNPACK_SKIP_ROWS,ei),A.pixelStorei(K.UNPACK_SKIP_IMAGES,Vi),It===0&&J.generateMipmaps&&K.generateMipmap(zt),A.unbindTexture()},this.initRenderTarget=function(N){ot.get(N).__webglFramebuffer===void 0&&ht.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ht.setTextureCube(N,0):N.isData3DTexture?ht.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ht.setTexture2DArray(N,0):ht.setTexture2D(N,0),A.unbindTexture()},this.resetState=function(){$=0,Y=0,it=null,A.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}const fa={bpm:100,punch:1.3,pulse:.2,steady:.55},u_=s=>!!s&&s.bpm>fa.bpm&&(!s.double&&s.punch>=fa.punch&&s.pulse>=fa.pulse||s.pulse>=fa.steady),f_=s=>s.bpm>150?2:1,d_=(s,t)=>!!t&&(s.dance??u_(t)),Zp="#f7f7f7",gn=.0254,su={canvas:.038,panel:.022,paper:.012,digital:.012},Za={face:.75*gn,depth:1.5*gn,mat:3*gn,lip:.25*gn,bevel:.125*gn},p_={black:"#161616",white:"#efeee9"},m_={white:"#f4f2ec",black:"#1c1c1c"},g_="#faf9f4",Ja={strip:.25*gn,depth:2*gn,gap:.25*gn,below:.25*gn},x_="#e3cba2",v_="#111111";function ou(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const ru=s=>!!s&&s.style==="float";function y_(s){const t=ou(s),e=t?ru(t)?2*(Ja.gap+Ja.strip):2*(Za.mat+Za.face):0;return[s.w*gn+e,s.h*gn+e]}const M_=s=>{const t=ou(s);return t?ru(t)?Ja.depth:Za.depth:su[s.kind]};async function __(){const s={},t=async a=>{const l=await fetch(`data/${a}.json?${Date.now()}`,{cache:"no-store"});if(!l.ok)throw new Error(`data/${a}.json: ${l.status}`);return s[a]=l.headers.get("x-rev")??"",l.json()},[e,n,i,o,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("albums").catch(()=>[]),t("beats").catch(()=>({}))]);return n.pieces??(n.pieces=[]),{catalogue:e,layout:n,images:i,albums:Array.isArray(o)?o:[],beats:r??{},revs:s}}const w_=(s,t)=>`${s}:${t}`,pc=(s,t,e)=>s.paint[w_(t,e)]??s.defaultPaint;function Qa(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,o=Math.round(i*8);return o===0?`${n}`:o===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[o]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const ja=s=>s.title.trim()||"Untitled",Zf=.004;function S_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const r=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:r,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:r,a1:a,sides:[1,-1]})}else{const r=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:r,z1:a},a0:r,a1:a,sides:[1,-1]})}return n}const b_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,Jf=(s,t,e,n)=>s.some(i=>i.id!==n&&b_(i.rect,t,e));function Qf(s,t,e){let n=[[s,t]];for(const[i,o]of e){const r=[];for(const[a,l]of n){if(o<=a||i>=l){r.push([a,l]);continue}i>a&&r.push([a,i]),o<l&&r.push([o,l])}n=r}return n.filter(([i,o])=>o-i>.05)}function E_(s){var d;const t=S_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,o=s.doorHeight,r={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const m=s.doors.filter(x=>x.wall===p).map(x=>[Math.min(x.a,x.b),Math.max(x.a,x.b)]);return p==="S"&&m.push([r.a,r.b]),m},l=[],c=[];for(const p of t){for(const x of p.sides){const g=p.rect,y=p.axis==="x"?x>0?g.z1:g.z0:x>0?g.x1:g.x0,w=p.axis==="x"?[0,x]:[x,0],v=[w[1],-w[0]],M=[];for(const b of t){if(b===p)continue;const T=b.rect,C=p.axis==="x"?T.z0:T.x0,P=p.axis==="x"?T.z1:T.x1;if(!(x>0?C<=y+Zf&&P>=y+.01:P>=y-Zf&&C<=y-.01))continue;const F=p.axis==="x"?T.x0:T.z0,k=p.axis==="x"?T.x1:T.z1;M.push([F,k])}const S=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),E=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[b,T]of Qf(S,E,M)){const C=P=>{const U=p.axis==="x"?P:y+w[0]*.02,F=p.axis==="x"?y+w[1]*.02:P;return Jf(t,U,F,p.id)};l.push({key:`${p.id}:${x}:${b.toFixed(3)}`,wall:p.id,side:x,axis:p.axis,plane:y,u0:b,u1:T,n:w,right:v,cornerA:C(b-.02),cornerB:C(T+.02),freeA:!p.outer&&!C(b-.02)&&Math.abs(b-p.a0)<1e-6,freeB:!p.outer&&!C(T+.02)&&Math.abs(T-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([P,U])=>[Math.max(P,b),Math.min(U,T)]).filter(([P,U])=>U-P>.01),color:((d=(s.paintAt??[]).find(P=>P.wall===p.id&&P.side===x&&P.u>=b-1e-6&&P.u<=T+1e-6))==null?void 0:d.color)??pc(s,p.id,x)})}}if(p.outer)continue;const m=pc(s,p.id,1);for(const x of[p.a0,p.a1]){const g=x===p.a0?-1:1,y=p.axis==="x"?x+g*.02:(p.rect.x0+p.rect.x1)/2,w=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:x+g*.02;Jf(t,y,w,p.id)||(p.axis==="x"?c.push(Zi(x,p.rect.z0,x,p.rect.z1,[g,0,0],i,m)):c.push(Zi(p.rect.x0,x,p.rect.x1,x,[0,0,g],i,m)))}for(const[x,g]of a(p.id)){const y=p.rect;p.axis==="x"?(c.push(Zi(x,y.z0,x,y.z1,[1,0,0],o,m)),c.push(Zi(g,y.z0,g,y.z1,[-1,0,0],o,m)),c.push(mc(x,g,y.z0,y.z1,"x",o,m))):(c.push(Zi(y.x0,x,y.x1,x,[0,0,1],o,m)),c.push(Zi(y.x0,g,y.x1,g,[0,0,-1],o,m)),c.push(mc(x,g,y.x0,y.x1,"z",o,m)))}}const h=.04,u=pc(s,"S",-1);c.push(Zi(r.a,e.z1,r.a,e.z1+h,[1,0,0],o,u)),c.push(Zi(r.b,e.z1,r.b,e.z1+h,[-1,0,0],o,u)),c.push(mc(r.a,r.b,e.z1,e.z1+h,"x",o,u));const f=[];for(const p of t){const m=p.rect,x=p.axis==="x"?[m.x0,m.x1]:[m.z0,m.z1];for(const[g,y]of Qf(x[0],x[1],a(p.id)))f.push(p.axis==="x"?{x0:g,x1:y,z0:m.z0,z1:m.z1}:{x0:m.x0,x1:m.x1,z0:g,z1:y})}return{inner:n,H:i,doorH:o,walls:t,faces:l,extra:c,solids:f,entrance:r,ceilColor:s.ceilingPaint??Zp,ceilAt:s.ceilingAt??[]}}function Zi(s,t,e,n,i,o,r){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],o,u[1]],[h[0],o,h[1]]],n:i,color:r}}function mc(s,t,e,n,i,o,r){const a=(c,h)=>i==="x"?[c,o,h]:[h,o,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:r}}const cs=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],au=s=>s.axis==="x"?s.right[0]:s.right[1];function Ls(s,t,e,n,i,o=0){const r=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>c&&(c=p)}else{if(p<c)return!1;p<h&&(h=p)}return!0};if(u(-r,t-l.x0)&&u(r,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>o&&c<1-o)return!0}return!1}function T_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),o=t/2,r=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-o-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+o-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-o-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+o-e.z0)/t));for(let m=d;m<=p;m++)for(let x=u;x<=f;x++)r[m*n+x]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(r[c]===-2){for(r[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&r[h-1]===-2&&(r[h-1]=a,l.push(h-1)),u<n-1&&r[h+1]===-2&&(r[h+1]=a,l.push(h+1)),f>0&&r[h-n]===-2&&(r[h-n]=a,l.push(h-n)),f<i-1&&r[h+n]===-2&&(r[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:r,rooms:a}}function A_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function R_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=A_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const uo=.125,mr=.086,jf=.12,tl=1e3,el='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',gr=140,nl=62,Jp=46;let Vo=null;function C_(s){Vo??(Vo=document.createElement("canvas").getContext("2d")),Vo.font=`300 ${gr}px ${el}`;const t=Vo.measureText(s.title).width;Vo.font=`400 ${nl}px ${el}`;const e=s.sub?Vo.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/tl,h:(gr+(s.sub?Jp+nl:0)+30)/tl}}const _h=.03,P_=.35,td=1.1;function L_(s,t){if(s.text){const n=C_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?y_(e):[.3,.3]}function I_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const o=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;o<n&&(n=o,e=i)}return e}function D_(s,t,e,n,i,o){const r=s.u0+i/2+_h,a=s.u1-i/2-_h,l=r>a?(s.u0+s.u1)/2:Math.max(r,Math.min(a,e)),c=o/2+.05,h=t-.12-o/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function N_(s,t,e,n,i){const o=au(s),r=t*o,a=o>0?s.u1:-s.u0;let l=r+n/2+jf+uo/2;l+uo/2>a-_h&&(l=r-n/2-jf-uo/2);const c=Math.max(.2+mr/2,e-i/2+mr/2);return{pos:cs(s,l*o,c),w:uo,h:mr}}function U_(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=I_(t,l);if(!c){n.push(l);continue}const[h,u]=L_(l,e),f=D_(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);i.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:cs(c,f.u,f.y),w:h,h:u,depth:d?M_(d):.001,label:d?N_(c,f.u,f.y,h,u):null,over:!1})}const o=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)o(c)+c.w/2>h&&o(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const f=Math.abs(o(c)-o(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const r=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((m,x)=>x),u=m=>h[m]===m?m:h[m]=u(h[m]);for(let m=0;m<c.length;m++)for(let x=m+1;x<c.length;x++){const g=c[m],y=c[x];if(g.text||y.text)continue;const w=Math.abs(o(g)-o(y))-(g.w+y.w)/2,v=Math.abs(g.pos[1]-y.pos[1])-(g.h+y.h)/2;Math.max(w,v)<P_&&(h[u(m)]=u(x))}const f=new Map;c.forEach((m,x)=>{const g=u(x);f.has(g)||f.set(g,[]),f.get(g).push(m)});const d=[l.n[0],0,l.n[1]],p=[l.right[0],0,l.right[1]];for(const m of f.values()){const x=Math.min(...m.map(S=>o(S)-S.w/2)),g=Math.max(...m.map(S=>o(S)+S.w/2)),y=Math.min(...m.map(S=>S.pos[1]-S.h/2)),w=Math.max(...m.map(S=>S.pos[1]+S.h/2)),v=cs(l,(x+g)/2,(y+w)/2),M={w:g-x,h:w-y};r.push({face:l,centre:v,normal:d,right:p,w:M.w,h:M.h,items:m,lamp:z_(v,d,p,M,m,t)})}}return{placed:r,items:i,homeless:n}}function z_(s,t,e,n,i,o){const r=o.H-.03;let a=td;for(let y=.2;y<=td+.25;y+=.05)if(Ls(o.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*y,s[2]+t[2]*y)){a=Math.max(.35,(y-.25)*.8);break}const l=[s[0]+t[0]*a,r,s[2]+t[2]*a],c=i.reduce((y,w)=>y+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[y,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*y*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*y*n.w/2-l[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}const F_=1.45,Qp=.07,jp=.07,t0=.125,k_=.086,e0=.12,O_=1.3,n0=.16,ed=1e3,nd='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',id=140,sd=62,B_=46,H_=1.6;let Go=null;function i0(s){Go??(Go=document.createElement("canvas").getContext("2d")),Go.font=`300 ${id}px ${nd}`;const t=Go.measureText(s.title).width;Go.font=`400 ${sd}px ${nd}`;const e=s.sub?Go.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/ed,h:(id+(s.sub?B_+sd:0)+30)/ed,colW:[],colH:[]}}const V_=6400;function G_(s){return s.map(t=>({title:ja(t),detail:[t.medium,Qa(t),t.year].filter(Boolean).join(", ")}))}const W_=s=>(150+G_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/V_,od=.45,rd=.25,gc=.4,ad=.12,ld=1.1,wh=s=>[s.w*gn,s.h*gn];function s0(s,t){const e=[],n=[];for(const r of s){const a=r.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>wh(l)[0]))),n.push(a.reduce((l,c)=>l+wh(c)[1],0)+jp*Math.max(0,a.length-1))}const i=e.reduce((r,a)=>r+a,0)+Qp*Math.max(0,s.length-1),o=Math.max(0,...n);return{w:i,h:o,colW:e,colH:n}}const X_=s=>s.cols.reduce((t,e)=>t+e.length,0),q_=s=>X_(s)>1?n0:t0,Y_=(s,t)=>s.text?i0(s.text).w:s0(s.cols,t).w+e0+q_(s);function $_(s){const t=[];let e=s.u0+(s.cornerA?od:rd);const n=s.u1-(s.cornerB?od:rd);for(const[i,o]of[...s.doors].sort((r,a)=>r[0]-a[0]))i-gc-e>.3&&t.push([e,i-gc]),e=Math.max(e,o+gc);return n-e>.3&&t.push([e,n]),t}function K_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const o=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;o<n&&(n=o,e=i)}return e}function Z_(s,t,e){const n=new Map,i=[];for(const r of s.hang){if(!r.text&&(r.cols=r.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!r.cols.length))continue;const a=K_(t,r);if(!a){i.push(r);continue}n.has(a)||n.set(a,[]),n.get(a).push(r)}const o=[];for(const[r,a]of n){const l=$_(r);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([p,m],x)=>{const g=u.u<p?p-u.u:u.u>m?u.u-m:0;g<d&&(d=g,f=x)}),c[f].push(u)}const h=au(r);l.forEach(([u,f],d)=>{const p=c[d].sort((S,E)=>(S.u-E.u)*h);if(!p.length)return;const m=p.map(S=>Y_(S,e)),x=f-u,g=m.reduce((S,E)=>S+E,0);let y=(x-g)/(p.length+1);const w=y<ad;w&&(y=ad);const v=g+y*(p.length+1);let M=(h>0?u:-f)+(x-v)/2+y;p.forEach((S,E)=>{const _=S.text?i0(S.text):s0(S.cols,e),T=(M+_.w/2)*h;S.u=+T.toFixed(4),o.push(J_(S,r,T,_,e,t,w)),M+=m[E]+y})})}return{placed:o,homeless:i}}function J_(s,t,e,n,i,o,r){const a=au(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?H_:F_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>o.H-.3&&(h=Math.max(n.h/2+.1,o.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((w,v)=>{const M=n.colW[v],S=n.colH[v];let E=h+S/2;for(const _ of w){const b=i.get(_),[T,C]=wh(b),P=f+M/2;u.push({work:b,pos:cs(t,e+P*a,E-C/2),w:T,h:C,depth:su[b.kind]}),E-=C+jp}f+=M+Qp});const d=s.cols.flat().map(w=>i.get(w)),p=d.length>1?n0:t0,m=d.length>1?W_(d):k_,x=e+(n.w/2+e0+p/2)*a,g=Math.min(O_,h+n.h/2-m/2),y=cs(t,e,h);return{def:s,face:t,centre:y,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:cs(t,x,Math.max(g,.3+m/2)),w:p,h:m,works:d},lamp:Q_(y,l,c,n,u,o),over:r,text:s.text}}function Q_(s,t,e,n,i,o){const r=o.H-.03;let a=ld;for(let y=.2;y<=ld+.25;y+=.05)if(Ls(o.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*y,s[2]+t[2]*y)){a=Math.max(.35,(y-.25)*.8);break}const l=[s[0]+t[0]*a,r,s[2]+t[2]*a],c=i.reduce((y,w)=>y+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[y,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*y*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*y*n.w/2-l[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}function j_(s,t,e){if(s.version===2||!s.hang.some(r=>"cols"in r))return!1;const{placed:n}=Z_(s,t,e),i=[],o=(r,a)=>+(r.axis==="x"?a[0]:a[2]).toFixed(4);for(const r of n){const a=r.face;r.text&&i.push({id:r.def.id,wall:a.wall,side:a.side,u:o(a,r.centre),y:+r.centre[1].toFixed(4),text:r.text});for(const l of r.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:o(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const tw=["b","c","s","t","sh","hl"],o0=s=>!s||tw.every(t=>!s[t]);function r0(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const cd=s=>Math.min(1,Math.max(0,s));function ew(s,t){let e=Math.pow(s,t.gamma);e=cd(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return cd(e+t.sh*.25*n+t.hl*.25*i)}const nw=`
  uniform float uAdj; uniform vec3 uWarm; uniform float uGamma; uniform float uContrast; uniform float uShadows; uniform float uHigh; uniform float uSat;
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  vec3 adjust(vec3 lin) {
    if (uAdj < 0.5) return lin;
    vec3 s = clamp(toSRGB(lin) * uWarm, 0.0, 1.0);
    s = pow(s, vec3(uGamma));
    s = clamp(0.5 + (s - 0.5) * uContrast, 0.0, 1.0);
    vec3 ws = s * (1.0 - s) * (1.0 - s) * 6.75, wh = s * s * (1.0 - s) * 6.75;
    s = clamp(s + uShadows * 0.25 * ws + uHigh * 0.25 * wh, 0.0, 1.0);
    float y = dot(s, vec3(0.2126, 0.7152, 0.0722));
    return toLinear(clamp(mix(vec3(y), s, uSat), 0.0, 1.0));
  }`;function iw(s){const t=r0(s);return{uAdj:{value:o0(s)?0:1},uWarm:{value:new I(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let Ji=null;const hd="http://www.w3.org/2000/svg";function sw(s,t){if(o0(t))return"";Ji||(Ji=document.createElementNS(hd,"svg"),Ji.setAttribute("width","0"),Ji.setAttribute("height","0"),Ji.style.position="absolute",document.body.append(Ji));const e=`adj-${s}`;let n=Ji.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(hd,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),Ji.append(n));const i=r0(t),[o,,r]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,f)=>ew(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${o} 0 0 0 0  0 1 0 0 0  0 0 ${r} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const ri=4,El=6,zn=1024,ow=.035,lr=8;class rw{constructor(){R(this,"rt",new Ln(zn*2,zn*2,{depthBuffer:!0,magFilter:qe,minFilter:qe,generateMipmaps:!1}));R(this,"depth",new Op({depthPacking:xm,side:Zn}));R(this,"cam",new tn(60,1,.3,8));R(this,"uniforms",{uFLN:{value:0},uFLP:{value:Array.from({length:ri},()=>new I)},uFLD:{value:Array.from({length:ri},()=>new I(0,-1,0))},uFLC:{value:Array.from({length:ri},()=>new mt(1,1))},uFLI:{value:new Array(ri).fill(0)},uFSM:{value:Array.from({length:ri},()=>new Kt)},uFTile:{value:Array.from({length:ri},()=>new Ee)},uFCam:{value:Array.from({length:ri},()=>new Ee)},uFAtlas:{value:this.rt.texture},uFAN:{value:0},uFA:{value:Array.from({length:lr},()=>new Ee)},uFAS:{value:Array.from({length:lr},()=>new I)}})}setLamps(t,e){const n=this.uniforms;n.uFLN.value=Math.min(ri,t.length),t.slice(0,ri).forEach((i,o)=>{n.uFLP.value[o].set(...i.p),n.uFLD.value[o].set(...i.d),n.uFLC.value[o].set(i.cOuter,i.cInner),n.uFLI.value[o]=i.i}),n.uFAN.value=Math.min(lr,e.length),e.slice(0,lr).forEach((i,o)=>{const r=_e.degToRad(i.rot);n.uFA.value[o].set(i.x,i.z,Math.cos(r),Math.sin(r)),n.uFAS.value[o].set(i.hw,i.hd,i.k)})}render(t,e){const n=this.uniforms,i=this.cam,o=t.getRenderTarget(),r=e.overrideMaterial,a=e.background,l=t.getClearColor(new Ct),c=t.getClearAlpha(),h=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,e.overrideMaterial=this.depth,e.background=null,t.setClearColor(16777215,1),i.layers.set(El);for(let u=0;u<n.uFLN.value;u++){const f=n.uFLP.value[u],d=n.uFLD.value[u],p=Math.acos(_e.clamp(n.uFLC.value[u].x,-1,1))+.05;i.fov=_e.radToDeg(Math.min(1.45,p)*2),i.near=.3,i.far=8,i.position.copy(f),Math.abs(d.y)>.99?i.up.set(0,0,-1):i.up.set(0,1,0),i.lookAt(f.clone().add(d)),i.updateProjectionMatrix(),i.updateMatrixWorld();const m=u%2*zn,x=Math.floor(u/2)*zn;this.rt.viewport.set(m,x,zn,zn),this.rt.scissor.set(m,x,zn,zn),this.rt.scissorTest=!0,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),n.uFSM.value[u].multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),n.uFTile.value[u].set(m/(zn*2),x/(zn*2),.5,.5),n.uFCam.value[u].set(i.near,i.far,1/(2*Math.tan(_e.degToRad(i.fov)/2)),0)}this.rt.scissorTest=!1,this.rt.viewport.set(0,0,zn*2,zn*2),t.setRenderTarget(o),t.setClearColor(l,c),e.overrideMaterial=r,e.background=a,t.shadowMap.autoUpdate=h}dispose(){this.rt.dispose(),this.depth.dispose()}}const a0=`
  #define MAXF ${ri}
  #define MAXA ${lr}
  #define FLENS ${ow.toFixed(3)}
  ${re.packing}
  uniform int uFLN;
  uniform vec3 uFLP[MAXF]; uniform vec3 uFLD[MAXF]; uniform vec2 uFLC[MAXF]; uniform float uFLI[MAXF];
  uniform mat4 uFSM[MAXF]; uniform vec4 uFTile[MAXF]; uniform vec4 uFCam[MAXF];
  uniform sampler2D uFAtlas;
  uniform int uFAN; uniform vec4 uFA[MAXA]; uniform vec3 uFAS[MAXA];
  const vec2 FPOIS[12] = vec2[12](vec2(-0.326, -0.406), vec2(-0.840, -0.074), vec2(-0.696, 0.457), vec2(-0.203, 0.621),
    vec2(0.962, -0.195), vec2(0.473, -0.480), vec2(0.519, 0.767), vec2(0.185, -0.893), vec2(0.507, 0.064),
    vec2(0.896, 0.412), vec2(-0.322, -0.933), vec2(-0.792, -0.598));
  float fDist(int k, vec2 uv) {
    vec4 t = uFTile[k];
    uv = clamp(uv, vec2(0.0005), vec2(0.9995));
    return -perspectiveDepthToViewZ(unpackRGBAToDepth(texture2D(uFAtlas, t.xy + uv * t.zw)), uFCam[k].x, uFCam[k].y);
  }
  float fShadow(int k, vec3 p) {
    vec4 c = uFSM[k] * vec4(p, 1.0);
    if (c.w <= 0.0) return 1.0;
    vec2 st = c.xy / c.w * 0.5 + 0.5;
    if (st.x < 0.0 || st.x > 1.0 || st.y < 0.0 || st.y > 1.0) return 1.0;
    float zr = c.w;                                   // how far in front of the lamp
    float uvm = uFCam[k].z / zr;                      // uv across a metre, out there
    float bias = 0.012 + 0.004 * zr;
    // a turn of the pattern for every spot (no banding)
    float a = fract(sin(dot(p.xz, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    mat2 R = mat2(cos(a), sin(a), -sin(a), cos(a));
    // what's in the way, near here, and how far from the lamp
    float sr = FLENS * 2.5 * uvm, zb = 0.0, nb = 0.0;
    for (int i = 0; i < 12; i++) {
      float d = fDist(k, st + R * FPOIS[i] * sr);
      if (d < zr - bias) { zb += d; nb += 1.0; }
    }
    if (nb < 0.5) return 1.0;
    zb /= nb;
    // the penumbra: the lens seen past the blocker
    float pr = clamp(FLENS * (zr - zb) / zb * uvm, 0.7 / 1024.0, 14.0 / 1024.0);
    float lit = 0.0;
    for (int i = 0; i < 12; i++) lit += step(zr - bias, fDist(k, st + R * FPOIS[i] * pr));
    return lit / 12.0;
  }
  float furnLight(vec3 p, vec3 n) {
    float e = 0.0;
    for (int k = 0; k < MAXF; k++) {
      if (k >= uFLN) break;
      vec3 L = uFLP[k] - p;
      float d2 = dot(L, L);
      vec3 l = L * inversesqrt(d2);
      float spot = smoothstep(uFLC[k].x, uFLC[k].y, dot(-l, uFLD[k]));
      float nl = max(dot(n, l), 0.0);
      if (spot * nl <= 0.0) continue;
      e += uFLI[k] * spot * nl / d2 * fShadow(k, p + n * 0.004);
    }
    return e;
  }
  float furnAO(vec3 p) {
    float ao = 1.0;
    for (int j = 0; j < MAXA; j++) {
      if (j >= uFAN) break;
      vec2 d = p.xz - uFA[j].xy;
      float c = uFA[j].z, s = uFA[j].w;
      vec2 q = vec2(d.x * c - d.y * s, d.x * s + d.y * c);
      vec2 e = abs(q) - uFAS[j].xy;
      float out_ = length(max(e, 0.0)), in_ = min(max(e.x, e.y), 0.0);
      // under it: darker towards the middle; round it, a soft falloff
      float under = 1.0 - smoothstep(-0.25, 0.0, in_);
      ao *= 1.0 - uFAS[j].z * (0.55 * exp(-out_ / 0.06) + 0.25 * exp(-out_ / 0.3) + 0.2 * under);
    }
    return clamp(ao, 0.0, 1.0);
  }
`,Ci=16,oo=48,Dr=new Ct(1,.84,.64),l0=.06,aw=.3,c0=.05,lu=4,lw=.6,h0=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,cu=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,u0=`
varying vec3 vW;
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,hu=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,uu=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),f0=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),d0=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function ud(s,t,e,n,i,o){const r=(a,l,c)=>{const h=a.slice(0,l);for(;h.length<l;)h.push(c());return h};return new bn({uniforms:{uN:{value:Math.min(s.lamps.length,Ci)},uLP:{value:r(s.lamps.map(a=>a.p),Ci,()=>new I)},uLD:{value:r(s.lamps.map(a=>a.d),Ci,()=>new I(0,-1,0))},uLC:{value:r(s.lamps.map(a=>a.c),Ci,()=>new mt(1,1))},uLI:{value:r(s.lamps.map(a=>a.i),Ci,()=>0)},uB:{value:Math.min(s.boxes.length,oo)},uBC:{value:r(s.boxes.map(a=>a.c),oo,()=>new I(0,-99,0))},uBS:{value:r(s.boxes.map(a=>a.s),oo,()=>new I)},uBL:{value:r(s.boxes.map(a=>a.lamp),oo,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:l0},uBounceK:{value:lu},uLampK:{value:aw},uCeilK:{value:c0},...f0(i),uLCol:{value:Dr},...uu(n),...o.uniforms},vertexShader:u0,fragmentShader:`
      ${a0}
      #define MAXL ${Ci}
      #define MAXB ${oo}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${d0}
      ${cu}
      ${h0}
      float occ(float d) { return 1.0 - 0.40 * exp(-max(d, 0.0) / 0.30); }
      // rounded corners and coves gather far less shadow than sharp ones
      float occSoft(float d) { return 1.0 - 0.16 * exp(-max(d, 0.0) / 0.30); }

      // 1 = lit, 0 = in the shadow box j throws from its own lamp
      float boxShadow(int j, vec3 p, out float contact) {
        contact = 1.0;
        vec3 q = p - uBC[j];
        if (abs(dot(q, uFN)) > 0.004) return 1.0;
        vec2 P = vec2(dot(q, uFR), q.y);
        vec2 hs = uBS[j].xy;
        contact = 1.0 - 0.30 * exp(-length(max(abs(P) - hs, 0.0)) / 0.010);
        int k = int(uBL[j] + 0.5);
        vec3 lq = uLP[k] - uBC[j];
        vec2 Lw = vec2(dot(lq, uFR), lq.y);
        float lz = dot(lq, uFN);
        if (lz <= uBS[j].z + 0.01) return 1.0;
        float s = lz / (lz - uBS[j].z);
        vec2 dl = P - Lw;
        float lo = 1.0 / s, hi = 1.0;
        for (int a = 0; a < 2; a++) {
          float dla = a == 0 ? dl.x : dl.y;
          float La = a == 0 ? Lw.x : Lw.y;
          float h = a == 0 ? hs.x : hs.y;
          if (abs(dla) < 1e-5) {
            if (La < -h || La > h) return 1.0;
          } else {
            float t0 = (-h - La) / dla, t1 = (h - La) / dla;
            lo = max(lo, min(t0, t1));
            hi = min(hi, max(t0, t1));
          }
        }
        float slack = (hi - lo) * length(dl);
        return 1.0 - smoothstep(-0.003, 0.003, slack);
      }

      void main() {
        vec3 n = normalize(vN);
        float sh[MAXL];
        for (int k = 0; k < MAXL; k++) sh[k] = 1.0;
        float contact = 1.0;
        for (int j = 0; j < MAXB; j++) {
          if (j >= uB) break;
          float c;
          float s = boxShadow(j, vW, c);
          contact *= c;
          int k = int(uBL[j] + 0.5);
          sh[k] *= s;
        }
        float direct = 0.0;
        for (int k = 0; k < MAXL; k++) {
          if (k >= uN) break;
          vec3 L = uLP[k] - vW;
          float d2 = dot(L, L);
          vec3 l = L * inversesqrt(d2);
          float spot = smoothstep(uLC[k].x, uLC[k].y, dot(-l, uLD[k]));
          if (spot > 0.0) direct += uLI[k] * spot * max(dot(n, l), 0.0) / d2 * sh[k];
        }
        float ao = occ(vW.y) * occSoft(uH - vW.y);
        float u = uAxisX > 0.5 ? vW.x : vW.z;
        if (uCA > 0.5) ao *= occSoft(u - uU0);
        if (uCB > 0.5) ao *= occSoft(uU1 - u);
        vec3 bounce = bakedLight(vW.xz + n.xz * 0.25);
        // the room's light leans a little one way, so each wall and every curve takes its own shade;
        // a cove turning to face down takes on the ceiling's brightness, and runs into it seamlessly;
        // the wall's paint stops halfway round the cove, where a painter would cut in the ceiling white
        // (only up in the cove: a doorway's head keeps the wall's paint); the ceiling's colour is
        // the one over this room, looked up a little way out from the wall
        float up = clamp(-n.y, 0.0, 1.0);
        vec3 ceil = ceilingAt(vW.xz + n.xz * 0.1);
        vec3 paint = mix(uAlb, ceil, smoothstep(0.68, 0.74, up) * step(uH - 0.35, vW.y));
        float amb = uAmb * (0.95 + 0.07 * dot(n.xz, vec2(0.45, 0.893)));
        float lum = max(dot(paint, vec3(0.299, 0.587, 0.114)), 0.5);
        amb = mix(amb, uCeilK * dot(ceil, vec3(0.299, 0.587, 0.114)) / lum, up);
        // the furniture's lamps (the stereo wall's wash), with the furniture's shadows in it
        vec3 lightIn = uLCol * (direct * uLampK + furnLight(vW, n)) * contact + (vec3(amb) + uBounceK * bounce) * ao * contact;
        vec2 t = abs(n.x) > 0.5 ? vW.zy : vW.xy;
        float grain = 1.0 + 0.018 * (vnoise(t * 41.0) - 0.5) + 0.012 * (fbm(t * 1.7) - 0.5);
        vec3 alb = paint * grain;
        if (vW.y < 0.015) alb *= 0.25;
        gl_FragColor = vec4(alb * lightIn, 1.0);
        ${hu}
      }`})}function cw(s,t){return new bn({uniforms:{uAmb:{value:c0},uBounceK:{value:lu},...f0(t),...uu(s)},vertexShader:u0,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${cu}
      ${d0}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${hu}
      }`})}const Sh={value:1};function hw(s,t,e,n){return new bn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:l0},uBounceK:{value:lu},uSpillK:{value:lw},uLCol:{value:Dr},uGlossK:Sh,...uu(e),...n.uniforms},vertexShader:`
      uniform mat4 uTexMat;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = vec3(0.0, 1.0, 0.0); vUv = uv;
        vR = uTexMat * w;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uRefl;
      uniform float uAmb; uniform float uBounceK; uniform float uSpillK; uniform vec3 uLCol; uniform float uGlossK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      ${cu}
      ${h0}
      ${a0}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      void main() {
        vec2 xz = vW.xz;
        float m = 0.55 * fbm(xz * 0.45) + 0.30 * fbm(xz * 2.6 + 5.0) + 0.15 * vnoise(xz * 23.0);
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        float speck = step(0.93, vnoise(xz * 140.0));
        alb = mix(alb, alb * 1.35, speck * 0.5);
        vec2 g = abs(fract(xz / 2.1 + 0.5) - 0.5) * 2.1;
        float joint = min(g.x, g.y);
        alb *= mix(0.55, 1.0, smoothstep(0.0015, 0.0045, joint));
        float ao = bakedAO(xz) * furnAO(vW);
        vec3 base = alb * (vec3(uAmb) * ao + (uBounceK * bakedLight(xz) + vec3(uSpillK * bakedSpill(xz))) * mix(1.0, ao, 0.5)
                           + uLCol * furnLight(vW, vec3(0.0, 1.0, 0.0)) * mix(1.0, ao, 0.4));
        vec2 ruv = vR.xy / vR.w;
        vec2 wob = (vec2(fbm(xz * 7.0 + 3.1), fbm(xz * 7.0 - 7.3)) - 0.5) * 0.010;
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        // the reflection, blurred over what is really there (empty sky is alpha 0 and left out);
        // nothing at all there: the white outside
        vec4 acc = vec4(0.0);
        for (int k = 0; k < 8; k++) { vec4 t = texture2D(uRefl, ruv + wob + DISC[k] * blur); acc += vec4(t.rgb * t.a, t.a); }
        // (the wobble can carry every sample past a wall's foot: then the point itself, unwobbled)
        vec4 t0 = texture2D(uRefl, ruv);
        vec3 rc = acc.a > 0.04 ? acc.rgb / acc.a : t0.a > 0.02 ? t0.rgb / t0.a : vec3(1.0);
        float F = 0.045 + 0.955 * pow(1.0 - max(V.y, 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m) * uGlossK;
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${hu}
      }`})}function fd(s,t,e,n){return new bn({uniforms:{uMap:{value:s},...iw(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Ct(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Dr}},toneMapped:!1,vertexShader:`
      attribute float aSide; attribute vec3 aCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide; vCol = aCol;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI;
      uniform vec3 uSide; uniform float uSideMode; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      ${nw}
      void main() {
        vec3 n = normalize(vN);
        vec3 L = uLP - vW;
        float d2 = dot(L, L);
        vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        float e = uLI * spot * max(dot(n, l), 0.0) / d2;
        vec3 c = adjust(texture2D(uMap, vUv).rgb);        // the photo, with its colour corrections
        if (vSide > 0.5 && uSideMode > 0.5) c = uSide;
        if (vSide > 1.5) c = vCol;                         // a frame, its mat and the mat's cut edge
        // light on the front is ~1 at the centre; mix a touch of the lamp's warmth in. A frame's sides,
        // turned from the lamp, still get the room's light (wood there isn't black)
        float amb = vSide > 1.5 ? mix(0.24, 0.07, clamp(e, 0.0, 1.0)) : 0.07;
        vec3 lit = c * (amb + 0.95 * e * mix(vec3(1.0), uLCol, 0.35));
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}const Wo=.05,Xo=.2;function uw(s,t,e){const n=s.inner,i=n.x1-n.x0,o=n.z1-n.z0,r=Math.ceil(i/Wo)+1,a=Math.ceil(o/Wo)+1,l=new Uint8Array(r*a),c=s.solids;for(let w=0;w<a;w++){const v=n.z0+w*Wo;for(let M=0;M<r;M++){const S=n.x0+M*Wo;let E=1;for(const _ of c){const b=Math.max(_.x0-S,0,S-_.x1),T=Math.max(_.z0-v,0,v-_.z1),C=b*b+T*T;C>1.44||(E*=1-.42*Math.exp(-Math.sqrt(C)/.28))}l[w*r+M]=Math.round(Math.max(0,Math.min(1,E))*255)}}const h=Math.ceil(i/Xo)+1,u=Math.ceil(o/Xo)+1,f=new Float32Array(h*u*4),d=Dr,p=t.map(w=>{const v=new Ct(w.face.color),S=(w.w+.5)*(w.h+1)*.7*.55;return{c:[w.centre[0]+w.normal[0]*.05,1.2,w.centre[2]+w.normal[2]*.05],n:w.normal,rgb:[v.r*d.r*S,v.g*d.g*S,v.b*d.b*S],lamp:w.lamp}});for(let w=0;w<u;w++){const v=n.z0+w*Xo;for(let M=0;M<h;M++){const S=n.x0+M*Xo;let E=0,_=0,b=0,T=0;for(const P of p){const U=S-P.c[0],F=v-P.c[2],k=U*U+F*F;if(k>64)continue;const $=U*P.n[0]+F*P.n[2];if($>.02){const H=Math.max(k+P.c[1]*P.c[1],.3),L=Math.sqrt(H),V=$/L*(P.c[1]/L)/(Math.PI*H);V>5e-4&&!Ls(s.solids,P.c[0],P.c[2],S,v)&&(E+=P.rgb[0]*V,_+=P.rgb[1]*V,b+=P.rgb[2]*V)}const Y=P.lamp,it=S-Y.p[0],G=-Y.p[1],Z=v-Y.p[2],st=it*it+G*G+Z*Z,ut=Math.sqrt(st),B=(it*Y.d[0]+G*Y.d[1]+Z*Y.d[2])/ut;if(B>Y.cOuter){const H=Math.min(1,(B-Y.cOuter)/(Y.cInner-Y.cOuter)),L=H*H*(3-2*H),V=Y.i*L*(Y.p[1]/ut)/st;V>.002&&!Ls(s.solids,Y.p[0],Y.p[2],S,v)&&(T+=V)}}const C=(w*h+M)*4;f[C]=E,f[C+1]=_,f[C+2]=b,f[C+3]=T}}e==null||e.ao.dispose(),e==null||e.light.dispose();const m=new So(l,r,a,xl,wn);m.magFilter=m.minFilter=en,m.needsUpdate=!0;const x=new Uint16Array(f.length);for(let w=0;w<f.length;w++)x[w]=lg.toHalfFloat(f[w]);const g=new So(x,h,u,Pn,In);g.magFilter=g.minFilter=en,g.needsUpdate=!0;const y=(w,v,M)=>new Ee(1/(w*v),1/(w*M),.5/v,.5/M);return{ao:m,light:g,origin:new mt(n.x0,n.z0),aoXf:y(Wo,r,a),lightXf:y(Xo,h,u)}}const je=.15,sn=8,Pi=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ti=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],da=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],dd=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],pd=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],fw=[0,1,0];class p0{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((r,a)=>this.v(r,e[a])),i=dd(da(t[2],t[0]),da(t[3],t[1])),o=Pi(Pi(e[0],e[1]),Pi(e[2],e[3]));pd(i,o)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));pd(dd(da(t[1],t[0]),da(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new we;return t.setAttribute("position",new Ot(this.pos,3)),t.setAttribute("normal",new Ot(this.nor,3)),t.setAttribute("uv",new Ot(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const m0=(s,t)=>s?je:Math.max(0,Math.min(je,t/2-.002));function dw(s,t,e){const n=new p0,i=[s.n[0],0,s.n[1]],o=s.axis==="x"?[1,0,0]:[0,0,1],r=(_,b,T)=>{const C=cs(s,_,T);return[C[0]+i[0]*b,T,C[2]+i[2]*b]},a=m0(s.outer,s.t),l=t-je,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?je:h==="free"?a:0),d=s.u1-(u==="in"?je:u==="free"?a:0);if(d-f<.01)return n;const p=(_,b,T,C)=>{b-_<1e-4||C-T<1e-4||n.quad([r(_,0,T),r(b,0,T),r(b,0,C),r(_,0,C)],[i,i,i,i])},m=[...s.doors].sort((_,b)=>_[0]-b[0]);if(!m.length)p(f,d,0,l);else{let _=f;for(const[b,T]of m)p(_,Math.min(d,b-a),0,c),_=Math.max(_,T+a);p(_,d,0,c),p(f,d,c,l)}const x=(_,b,T,C)=>{if(a<.01)return;const P=U=>Pi(Ti(i,Math.cos(U)),Ti(b,Math.sin(U)));for(let U=0;U<sn;U++){const F=U/sn*Math.PI/2,k=(U+1)/sn*Math.PI/2,$=(Y,it)=>Pi(r(_,-a,it),Ti(P(Y),a));n.quad([$(F,T),$(k,T),$(k,C),$(F,C)],[P(F),P(k),P(k),P(F)])}},g=_=>[-_[0],-_[1],-_[2]];for(const[_,b]of m)_-s.u0>a+.01&&x(_-a,o,0,c),s.u1-b>a+.01&&x(b+a,g(o),0,c);h==="free"&&x(s.u0+a,g(o),0,t),u==="free"&&x(s.u1-a,o,0,t);const y=(_,b)=>{const T=Pi(Pi(r(_,0,0),Ti(i,je)),Ti(b,je)),C=U=>Pi(Ti(i,Math.cos(U)),Ti(b,Math.sin(U))),P=Math.PI/4;for(let U=0;U<sn/2;U++){const F=U/(sn/2)*P,k=(U+1)/(sn/2)*P,$=(Y,it)=>[T[0]-je*C(Y)[0],it,T[2]-je*C(Y)[2]];n.quad([$(F,0),$(k,0),$(k,l),$(F,l)],[C(F),C(k),C(k),C(F)]);for(let Y=0;Y<sn;Y++){const it=Y/sn*Math.PI/2,G=(Y+1)/sn*Math.PI/2,Z=(ut,B)=>{const H=C(ut);return[T[0]-je*Math.cos(B)*H[0],l+je*Math.sin(B),T[2]-je*Math.cos(B)*H[2]]},st=(ut,B)=>{const H=C(ut);return[Math.cos(B)*H[0],-Math.sin(B),Math.cos(B)*H[2]]};n.quad([Z(F,it),Z(k,it),Z(k,G),Z(F,G)],[st(F,it),st(k,it),st(k,G),st(F,G)])}}};h==="in"&&y(s.u0,o),u==="in"&&y(s.u1,g(o));const w=h==="in"?s.u0+je:f,v=u==="in"?s.u1-je:d,M=(_,b)=>r(_,je-je*Math.cos(b),l+je*Math.sin(b)),S=_=>Pi(Ti(i,Math.cos(_)),Ti(fw,-Math.sin(_)));for(let _=0;_<sn;_++){const b=_/sn*Math.PI/2,T=(_+1)/sn*Math.PI/2;n.quad([M(w,b),M(v,b),M(v,T),M(w,T)],[S(b),S(b),S(T),S(T)])}const E=(_,b)=>{const T=r(_,0,t);for(let C=0;C<sn;C++){const P=C/sn*Math.PI/2,U=(C+1)/sn*Math.PI/2;n.tri([T,M(_,P),M(_,U)],b)}};return h!=="in"&&E(w,g(o)),u!=="in"&&E(v,o),n}function pw(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new p0),e.get(a)),i=s.H,o=Math.min(s.doorH,i-je),r=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(r(a.id)),h=(w,v,M)=>a.axis==="x"?[w,M,v]:[v,M,w],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=m0(a.outer,a.t),m=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],x=f+p,g=l?f+t:d-p,y=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(w=>w.wall===a.id).flatMap(w=>w.doors).filter((w,v,M)=>M.findIndex(S=>Math.abs(S[0]-w[0])<1e-6)===v);for(const[w,v]of y){const M=(_,b)=>{g-x>.001&&c.quad([h(_,x,0),h(_,g,0),h(_,g,o),h(_,x,o)],[b,b,b,b])};M(w,u),M(v,[-u[0],0,-u[2]]);const S=[0,-1,0],E=l?f+t:d;c.quad([h(w,f,o),h(v,f,o),h(v,E,o),h(w,E,o)],[S,S,S,S]);for(const{c:_,s:b}of m)for(const[T,C]of[[w,1],[v,-1]]){if(p<.01)continue;const P=T-C*p,U=_-b*p,F=h(T,_,o);for(let k=0;k<sn;k++){const $=Y=>{const it=Y/sn*Math.PI/2;return h(P+C*p*Math.sin(it),U+b*p*Math.cos(it),o)};c.tri([F,$(k),$(k+1)],S)}}}if(!a.outer)for(const w of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(M,S)=>{d-p-(f+p)>.001&&c.quad([h(M,f+p,0),h(M,d-p,0),h(M,d-p,i),h(M,f+p,i)],[S,S,S,S])};w.freeA&&v(w.u0,[-u[0],0,-u[2]]),w.freeB&&v(w.u1,u)}}return e}const md=new Ct(1,1,1),g0=.2,il=2;function mw(s,t,e,n){const i=new he;s.background=md,s.fog=null;const o=n.outline,r=o.t-g0,a=o.x0-o.t,l=o.x1+o.t,c=o.z0-o.t,h=o.z1+o.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,m=n.entrance.x+n.entrance.w/2,x=n.entrance.x,g=new Ye({color:md,toneMapped:!1}),y=(_,b,T,C,P,U)=>{const F=new wt(new nn(C,P,U),g);return F.position.set(_,b,T),F.userData.outside=!0,F.layers.set(il),i.add(F),F},w=-.5,v=d,M=(w+v)/2,S=v-w;y((a+p)/2,M,h-r/2,p-a,S,r),y((m+l)/2,M,h-r/2,l-m,S,r),y(x,(f+v)/2,h-r/2,m-p,v-f,r),y((a+l)/2,M,c+r/2,l-a,S,r),y(a+r/2,M,(c+h)/2,r,S,h-c-2*r),y(l-r/2,M,(c+h)/2,r,S,h-c-2*r),y((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const E=new wt(new Ue(400,400).rotateX(-Math.PI/2),g);return E.position.y=-.002,E.layers.set(il),i.add(E),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var C;const b=_;b.geometry&&b.geometry.dispose();const T=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const P of T)(C=P.map)==null||C.dispose(),P.dispose()})}}}class gd{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"uv",[]);R(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new we;return t.setAttribute("position",new Ot(this.pos,3)),t.setAttribute("normal",new Ot(this.nor,3)),t.setAttribute("uv",new Ot(this.uv,2)),t.setIndex(this.idx),t}}const Cr=s=>new I(s[0],s[1],s[2]),x0=s=>({p:Cr(s.p),d:Cr(s.d),c:new mt(s.cOuter,s.cInner),i:s.i});function gw(s,t,e,n=[]){const i=t.filter(h=>h.face===s),o=i.map(h=>h.lamp),r=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(cs(s,u,f))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of a){const m=p[0]-h.p[0],x=p[1]-h.p[1],g=p[2]-h.p[2],y=Math.hypot(m,x,g);y>7||(m*h.d[0]+x*h.d[1]+g*h.d[2])/y<=h.cOuter||Ls(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,y))}d<1/0&&r.push({L:h,d})}r.sort((h,u)=>h.d-u.d);for(const h of r){if(o.length>=Ci)break;o.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=Ci))for(const f of h.items)c.length>=oo||f.text||c.push({c:Cr(f.pos),s:new I(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:o.slice(0,Ci).map(x0),boxes:c,normal:new I(s.n[0],0,s.n[1]),right:new I(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const xw={lamps:[],boxes:[],normal:new I(0,0,1),right:new I(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function xd(s,t,e,n=[0,1,0,1]){const[i,o,r,a]=n,l=[],c=[],h=[],u=[],f=[],d=(S,E,_,b)=>{const T=l.length/3;S.forEach((C,P)=>{l.push(...C),c.push(...E),h.push(..._[P]),u.push(b)}),f.push(T,T+1,T+2,T,T+2,T+3)},p=s/2,m=t/2,x=.004,g=i+x,y=o-x,w=r+x,v=a-x;d([[-p,-m,e],[p,-m,e],[p,m,e],[-p,m,e]],[0,0,1],[[i,r],[o,r],[o,a],[i,a]],0),d([[-p,m,e],[p,m,e],[p,m,0],[-p,m,0]],[0,1,0],[[i,v],[o,v],[o,v],[i,v]],1),d([[-p,-m,0],[p,-m,0],[p,-m,e],[-p,-m,e]],[0,-1,0],[[i,w],[o,w],[o,w],[i,w]],1),d([[-p,-m,0],[-p,-m,e],[-p,m,e],[-p,m,0]],[-1,0,0],[[g,r],[g,r],[g,a],[g,a]],1),d([[p,-m,e],[p,-m,0],[p,m,0],[p,m,e]],[1,0,0],[[y,r],[y,r],[y,a],[y,a]],1);const M=new we;return M.setAttribute("position",new Ot(l,3)),M.setAttribute("normal",new Ot(c,3)),M.setAttribute("uv",new Ot(h,2)),M.setAttribute("aSide",new Ot(u,1)),M.setIndex(f),M}function vw(s,t,e,n=[0,1,0,1]){const{face:i,depth:o,mat:r,lip:a,bevel:l}=Za,c=s/2,h=t/2,u=c+r+i,f=h+r+i,d=c+r,p=h+r,m=c+l,x=h+l,g=o-a,y=g-l,w=new Ct(p_[e.color]),v=new Ct(m_[e.mat]),M=new Ct(g_),S=[],E=[],_=[],b=[],T=[],C=[],P=G=>new I(G[0],G[1],G[2]),U=(G,Z,st,ut=[[0,0],[0,0],[0,0],[0,0]])=>{const B=new I().crossVectors(P(G[1]).sub(P(G[0])),P(G[3]).sub(P(G[0]))).normalize();B.dot(P(Z))<0&&(G=[G[0],G[3],G[2],G[1]],ut=[ut[0],ut[3],ut[2],ut[1]],B.negate());const H=S.length/3;G.forEach((L,V)=>{S.push(...L),E.push(B.x,B.y,B.z),_.push(...ut[V]),b.push(st?2:0),T.push(...st?[st.r,st.g,st.b]:[0,0,0])}),C.push(H,H+1,H+2,H,H+2,H+3)};U([[-u,p,o],[u,p,o],[u,f,o],[-u,f,o]],[0,0,1],w),U([[-u,-f,o],[u,-f,o],[u,-p,o],[-u,-p,o]],[0,0,1],w),U([[-u,-p,o],[-d,-p,o],[-d,p,o],[-u,p,o]],[0,0,1],w),U([[d,-p,o],[u,-p,o],[u,p,o],[d,p,o]],[0,0,1],w),U([[-u,f,0],[u,f,0],[u,f,o],[-u,f,o]],[0,1,0],w),U([[-u,-f,0],[u,-f,0],[u,-f,o],[-u,-f,o]],[0,-1,0],w),U([[-u,-f,0],[-u,f,0],[-u,f,o],[-u,-f,o]],[-1,0,0],w),U([[u,-f,0],[u,f,0],[u,f,o],[u,-f,o]],[1,0,0],w),U([[-d,p,g],[d,p,g],[d,p,o],[-d,p,o]],[0,-1,0],w),U([[-d,-p,g],[d,-p,g],[d,-p,o],[-d,-p,o]],[0,1,0],w),U([[-d,-p,g],[-d,p,g],[-d,p,o],[-d,-p,o]],[1,0,0],w),U([[d,-p,g],[d,p,g],[d,p,o],[d,-p,o]],[-1,0,0],w),U([[-d,x,g],[d,x,g],[d,p,g],[-d,p,g]],[0,0,1],v),U([[-d,-p,g],[d,-p,g],[d,-x,g],[-d,-x,g]],[0,0,1],v),U([[-d,-x,g],[-m,-x,g],[-m,x,g],[-d,x,g]],[0,0,1],v),U([[m,-x,g],[d,-x,g],[d,x,g],[m,x,g]],[0,0,1],v),U([[-m,x,g],[m,x,g],[c,h,y],[-c,h,y]],[0,-1,1],M),U([[-m,-x,g],[m,-x,g],[c,-h,y],[-c,-h,y]],[0,1,1],M),U([[-m,-x,g],[-m,x,g],[-c,h,y],[-c,-h,y]],[1,0,1],M),U([[m,-x,g],[m,x,g],[c,h,y],[c,-h,y]],[-1,0,1],M);const[F,k,$,Y]=n;U([[-c,-h,y],[c,-h,y],[c,h,y],[-c,h,y]],[0,0,1],null,[[F,$],[k,$],[k,Y],[F,Y]]);const it=new we;return it.setAttribute("position",new Ot(S,3)),it.setAttribute("normal",new Ot(E,3)),it.setAttribute("uv",new Ot(_,2)),it.setAttribute("aSide",new Ot(b,1)),it.setAttribute("aCol",new Ot(T,3)),it.setIndex(C),it}function yw(s,t,e,n=[0,1,0,1]){const{strip:i,depth:o,gap:r,below:a}=Ja,l=s/2,c=t/2,h=l+r,u=c+r,f=h+i,d=u+i,p=o-a,m=Math.max(.004,p-e),x=new Ct(x_),g=new Ct(v_),y=[],w=[],v=[],M=[],S=[],E=[],_=Z=>new I(Z[0],Z[1],Z[2]),b=(Z,st,ut,B,H=[[0,0],[0,0],[0,0],[0,0]])=>{const L=new I().crossVectors(_(Z[1]).sub(_(Z[0])),_(Z[3]).sub(_(Z[0]))).normalize();L.dot(_(st))<0&&(Z=[Z[0],Z[3],Z[2],Z[1]],H=[H[0],H[3],H[2],H[1]],L.negate());const V=y.length/3;Z.forEach((D,z)=>{y.push(...D),w.push(L.x,L.y,L.z),v.push(...H[z]),M.push(ut),S.push(...B?[B.r,B.g,B.b]:[0,0,0])}),E.push(V,V+1,V+2,V,V+2,V+3)};b([[-f,u,o],[f,u,o],[f,d,o],[-f,d,o]],[0,0,1],2,x),b([[-f,-d,o],[f,-d,o],[f,-u,o],[-f,-u,o]],[0,0,1],2,x),b([[-f,-u,o],[-h,-u,o],[-h,u,o],[-f,u,o]],[0,0,1],2,x),b([[h,-u,o],[f,-u,o],[f,u,o],[h,u,o]],[0,0,1],2,x),b([[-f,d,0],[f,d,0],[f,d,o],[-f,d,o]],[0,1,0],2,x),b([[-f,-d,0],[f,-d,0],[f,-d,o],[-f,-d,o]],[0,-1,0],2,x),b([[-f,-d,0],[-f,d,0],[-f,d,o],[-f,-d,o]],[-1,0,0],2,x),b([[f,-d,0],[f,d,0],[f,d,o],[f,-d,o]],[1,0,0],2,x),b([[-h,u,0],[h,u,0],[h,u,o],[-h,u,o]],[0,-1,0],2,g),b([[-h,-u,0],[h,-u,0],[h,-u,o],[-h,-u,o]],[0,1,0],2,g),b([[-h,-u,0],[-h,u,0],[-h,u,o],[-h,-u,o]],[1,0,0],2,g),b([[h,-u,0],[h,u,0],[h,u,o],[h,-u,o]],[-1,0,0],2,g),b([[-h,c,m],[h,c,m],[h,u,m],[-h,u,m]],[0,0,1],2,g),b([[-h,-u,m],[h,-u,m],[h,-c,m],[-h,-c,m]],[0,0,1],2,g),b([[-h,-c,m],[-l,-c,m],[-l,c,m],[-h,c,m]],[0,0,1],2,g),b([[l,-c,m],[h,-c,m],[h,c,m],[l,c,m]],[0,0,1],2,g);const[T,C,P,U]=n,F=.004,k=T+F,$=C-F,Y=P+F,it=U-F;b([[-l,-c,p],[l,-c,p],[l,c,p],[-l,c,p]],[0,0,1],0,null,[[T,P],[C,P],[C,U],[T,U]]),b([[-l,c,p],[l,c,p],[l,c,m],[-l,c,m]],[0,1,0],1,null,[[T,it],[C,it],[C,it],[T,it]]),b([[-l,-c,m],[l,-c,m],[l,-c,p],[-l,-c,p]],[0,-1,0],1,null,[[T,Y],[C,Y],[C,Y],[T,Y]]),b([[-l,-c,m],[-l,-c,p],[-l,c,p],[-l,c,m]],[-1,0,0],1,null,[[k,P],[k,P],[k,U],[k,U]]),b([[l,-c,p],[l,-c,m],[l,c,m],[l,c,p]],[1,0,0],1,null,[[$,P],[$,P],[$,U],[$,U]]);const G=new we;return G.setAttribute("position",new Ot(y,3)),G.setAttribute("normal",new Ot(w,3)),G.setAttribute("uv",new Ot(v,2)),G.setAttribute("aSide",new Ot(M,1)),G.setAttribute("aCol",new Ot(S,3)),G.setIndex(E),G}function Mw(s,t,e,n){const[i,o,r,a]=n??[0,0,1,1];let l=i,c=r,h=1-a,u=1-o;if(!e)return[l,c,h,u];const f=s/t,d=e[0]*(r-i)/(e[1]*(a-o));if(d>f){const p=f/d,m=(l+c)/2,x=(c-l)*p/2;l=m-x,c=m+x}else{const p=d/f,m=(h+u)/2,x=(u-h)*p/2;h=m-x,u=m+x}return[l,c,h,u]}const xc=(s,t,e,n)=>{const i=new Kt().makeBasis(Cr(e),new I(0,1,0),Cr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class _w{constructor(t,e){R(this,"map",new Map);R(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${ja(t)}|${t.medium}|${Qa(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*mr/uo),o=v0(1024,i),r=o.getContext("2d");r.fillStyle="#f6f5f1",r.fillRect(0,0,1024,i),r.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,ja(t)]];for(const h of[t.medium,Qa(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)r.font=h,l=ww(r,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return o})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new ps(e()),n.colorSpace=Ne,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const v0=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function ww(s,t,e,n,i,o){let r="";for(const a of t.split(" ")){const l=r?r+" "+a:a;s.measureText(l).width>i&&r?(s.fillText(r,e,n),n+=o,r=a):r=l}return s.fillText(r,e,n),n+o}const Sw=s=>{const t=new Ct(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function bw(s,t,e,n){const i=v0(Math.ceil(t*tl),Math.ceil(e*tl)),o=i.getContext("2d");o.fillStyle=Sw(n)?"#eeede8":"#262625",o.textBaseline="alphabetic",o.font=`300 ${gr}px ${el}`,o.fillText(s.title,8,gr*.8),s.sub&&(o.font=`400 ${nl}px ${el}`,o.fillText(s.sub,10,gr+Jp+nl*.8));const r=new ps(i);return r.colorSpace=Ne,r.anisotropy=8,r}function Ew(s){const t=T_(s),e=R_(s,t).map(c=>new Ct(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let o=[];for(let c=0;c<i;c++)n[c]>=0&&o.push(c);for(;o.length;){const c=[];for(const h of o){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],c.push(f))}o=c}const r=new Uint8Array(i*4),a=new Ct(Zp);for(let c=0;c<i;c++){const h=e[n[c]]??a;r[c*4]=Math.round(h.r*255),r[c*4+1]=Math.round(h.g*255),r[c*4+2]=Math.round(h.b*255),r[c*4+3]=255}const l=new So(r,t.nx,t.nz,Pn);return l.magFilter=l.minFilter=qe,l.needsUpdate=!0,{tex:l,origin:new mt(t.x0,t.z0),scale:new mt(1/(t.nx*t.c),1/(t.nz*t.c))}}function Tw(s,t,e,n,i,o,r,a,l,c){const h=new he,u=s.H,f=Ew(s),d=[],p=[],m=[f.tex],x=(C,P)=>{p.push(C),d.push(P);const U=new wt(C,P);return h.add(U),U},g=[];for(const C of s.faces){const P=dw(C,u,s.doorH);if(P.empty)continue;const U=x(P.geometry(),ud(gw(C,t,s),new Ct(C.color),u,e,f,l));U.userData.face=C,g.push(U)}for(const[C,P]of pw(s,g0))P.empty||x(P.geometry(),ud(xw,new Ct(C),u,e,f,l));const y=s.inner,w=s.entrance,v=new gd;v.add([[y.x0,0,y.z1],[y.x1,0,y.z1],[y.x1,0,y.z0],[y.x0,0,y.z0]],[0,1,0]),v.add([[w.a,0,w.z+.4],[w.b,0,w.z+.4],[w.b,0,w.z],[w.a,0,w.z]],[0,1,0]),x(v.geometry(),hw(r,a,e,l)).layers.set(1);const S=new gd;S.add([[y.x0,u,y.z0],[y.x1,u,y.z0],[y.x1,u,y.z1],[y.x0,u,y.z1]],[0,-1,0]),x(S.geometry(),cw(e,f));const E=[...t.map(C=>C.lamp.p),...c.map(C=>C.p)],_=E.length;if(_){const C=new Oi(.068,28).rotateX(Math.PI/2).translate(0,u-.0015,0),P=new Oi(.05,24).rotateX(Math.PI/2).translate(0,u-.0025,0),U=new Oi(.026,20).rotateX(Math.PI/2).translate(0,u-.0035,0),F=new Ye({color:14276820,toneMapped:!1}),k=new Ye({color:11842479,toneMapped:!1}),$=new Ye({color:new Ct(1,.94,.86),toneMapped:!1});$.userData.lens=!0,p.push(C,P,U),d.push(F,k,$);const Y=new vo(C,F,_),it=new vo(P,k,_),G=new vo(U,$,_),Z=new Kt;E.forEach((st,ut)=>{Z.makeTranslation(st[0],0,st[2]),Y.setMatrixAt(ut,Z),it.setMatrixAt(ut,Z),G.setMatrixAt(ut,Z)}),h.add(Y,it,G)}const b=[],T=[];o.begin();for(const C of t){const P=x0(C.lamp);for(const U of C.items){if(U.text){const H=bw(U.text,U.w,U.h,U.face.color);m.push(H);const L=x(new Ue(U.w,U.h),new Ye({map:H,transparent:!0,depthWrite:!1,toneMapped:!1}));xc(L,C.normal,C.right,[U.pos[0]+C.normal[0]*.002,U.pos[1],U.pos[2]+C.normal[2]*.002]),L.userData.title=U.id;continue}const F=U.work,k=F.kind==="paper"||F.kind==="digital"?new Ct().setRGB(.92,.91,.88):null,$=fd(n(F.id),P,k,F.adjust),Y=ou(F),it=F.w*gn,G=F.h*gn,Z=Mw(it,G,i(F.id),F.crop),st=Y?ru(Y)?yw(it,G,su[F.kind],Z):vw(it,G,Y,Z):xd(U.w,U.h,U.depth,Z),ut=x(st,$);xc(ut,C.normal,C.right,U.pos),ut.userData.work=F.id;const B={work:F,placed:C,mesh:ut,mat:$,w:U.w,h:U.h,label:null};if(b.push(B),U.label){const H=x(xd(uo,mr,.003),fd(o.single(F),P,new Ct(.95,.95,.93)));xc(H,C.normal,C.right,U.label.pos),H.userData.work=F.id,H.userData.label=!0,T.push(H),B.label=H}}}return o.end(),{group:h,pictures:b,labels:T,faceMeshes:g,dispose(){for(const C of p)C.dispose();for(const C of d)C.dispose();for(const C of m)C.dispose();h.traverse(C=>{const P=C;P.isInstancedMesh&&P.dispose()})}}}const qo=new I;function Fn(s,t,e,n,i,o){const r=2*Math.PI*i/4,a=Math.max(o-2*i,0),l=Math.PI/4;qo.copy(t),qo[n]=0,qo.normalize();const c=.5*r/(r+a),h=1-qo.angleTo(s)/l;return Math.sign(qo[e])===1?h*c:a/(r+a)+c+c*(1-h)}class Yn extends nn{constructor(t=1,e=1,n=1,i=2,o=.1){const r=i*2+1;if(o=Math.min(t/2,e/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:o},r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,m=new I,x=.5/r;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*o,u[g+1]=h.y*Math.sign(l.y)+c.y*o,u[g+2]=h.z*Math.sign(l.z)+c.z*o,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[y+0]=Fn(m,c,"z","y",o,n),d[y+1]=1-Fn(m,c,"y","z",o,e);break;case 1:m.set(-1,0,0),d[y+0]=1-Fn(m,c,"z","y",o,n),d[y+1]=1-Fn(m,c,"y","z",o,e);break;case 2:m.set(0,1,0),d[y+0]=1-Fn(m,c,"x","z",o,t),d[y+1]=Fn(m,c,"z","x",o,n);break;case 3:m.set(0,-1,0),d[y+0]=1-Fn(m,c,"x","z",o,t),d[y+1]=1-Fn(m,c,"z","x",o,n);break;case 4:m.set(0,0,1),d[y+0]=1-Fn(m,c,"x","y",o,t),d[y+1]=1-Fn(m,c,"y","x",o,e);break;case 5:m.set(0,0,-1),d[y+0]=Fn(m,c,"x","y",o,t),d[y+1]=1-Fn(m,c,"y","x",o,e);break}}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.segments,t.radius)}}function Aw(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in o){const u=vd(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<r[h].length;++m)d.push(r[h][m][f]);const p=vd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function vd(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new xn(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const m=h.getComponent(f,p);a.setComponent(f+u,p,m)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function fu(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),o=n?n.count:i.count;let r=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const v=a[y],M=s.attributes[v];l[v]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((E,_)=>{const b=new E.array.constructor(E.count*E.itemSize);c[v][_]=new E.constructor(b,E.itemSize,E.normalized)}))}const d=t*.5,p=Math.log10(1/t),m=Math.pow(10,p),x=d*m;for(let y=0;y<o;y++){const w=n?n.getX(y):y;let v="";for(let M=0,S=a.length;M<S;M++){const E=a[M],_=s.getAttribute(E),b=_.itemSize;for(let T=0;T<b;T++)v+=`${Math.trunc(_[u[T]](w)*m+x)},`}if(v in e)h.push(e[v]);else{for(let M=0,S=a.length;M<S;M++){const E=a[M],_=s.getAttribute(E),b=s.morphAttributes[E],T=_.itemSize,C=l[E],P=c[E];for(let U=0;U<T;U++){const F=u[U],k=f[U];if(C[k](r,_[F](w)),b)for(let $=0,Y=b.length;$<Y;$++)P[$][k](r,b[$][F](w))}}e[v]=r,h.push(r),r++}}const g=s.clone();for(const y in s.attributes){const w=l[y];if(g.setAttribute(y,new w.constructor(w.array.slice(0,r*w.itemSize),w.itemSize,w.normalized)),y in c)for(let v=0;v<c[y].length;v++){const M=c[y][v];g.morphAttributes[y][v]=new M.constructor(M.array.slice(0,r*M.itemSize),M.itemSize,M.normalized)}}return g.setIndex(h),g}function pi(s,t,e){let n=s*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Rw(s,t,e,n){const i=Math.floor(s),o=Math.floor(t),r=s-i,a=t-o,l=r*r*(3-2*r),c=a*a*(3-2*a),h=m=>(m%e+e)%e,u=pi(h(i),h(o),n),f=pi(h(i+1),h(o),n),d=pi(h(i),h(o+1),n),p=pi(h(i+1),h(o+1),n);return u+(f-u)*l+(d-u)*c+(u-f-d+p)*l*c}function Mo(s,t,e,n,i){let o=0,r=.5,a=0,l=e;for(let c=0;c<n;c++)o+=r*Rw(s*l,t*l,l,i+c*17),a+=r,r*=.5,l*=2;return o/a}function vi(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function yi(s,t=!0,e=!0){const n=new ps(s);return t&&(n.colorSpace=Ne),e&&(n.wrapS=n.wrapT=Fa),n.anisotropy=8,n}function yd(s,t,e){const[i,o]=vi(512),[r,a]=vi(512),l=o.createImageData(512,512),c=a.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=u/512,d=h/512,p=Mo(f,d,3,4,e),m=Mo(f*.6,d*2.2,4,3,e+5),x=Math.max(0,Mo(f,d,5,4,e+9)-.52)*3.2,g=pi(u,h,e)-.5;let y=.82+.34*(p-.5)*2*.5+.12*(m-.5)+.05*g;y=Math.max(.5,y);const w=Math.min(1,x),v=(h*512+u)*4;for(let S=0;S<3;S++)l.data[v+S]=Math.max(0,Math.min(255,(s[S]*(1-w)+t[S]*w)*y));l.data[v+3]=255;const M=128+60*(p-.5)+30*(m-.5)+14*g;c.data[v]=c.data[v+1]=c.data[v+2]=Math.max(0,Math.min(255,M)),c.data[v+3]=255}return o.putImageData(l,0,0),a.putImageData(c,0,0),{map:yi(i),bump:yi(r,!1)}}function bh(s,t,e,n=1){const[r,a]=vi(1024,256),l=a.createImageData(1024,256);for(let h=0;h<256;h++)for(let u=0;u<1024;u++){const f=u/1024,d=h/256,p=Mo(f,d,2,3,e)*3+Mo(f,d,8,2,e+3)*.35,m=.5+.5*Math.sin((d*38+p*4.2)*Math.PI*2*.5),x=Math.pow(m,3),g=pi(Math.floor(u/2),h,e+7)>.93?.85:1,y=Mo(f*.5,d*6,4,3,e+11),w=.5+.5*Math.sin((d*210+p*9)*Math.PI);let v=.45*x*n+.3*y+.12*w*n+.08*(pi(u,h,e)-.5);v=Math.max(0,Math.min(1,v));const M=(h*1024+u)*4;for(let S=0;S<3;S++)l.data[M+S]=(s[S]*(1-v)+t[S]*v)*g;l.data[M+3]=255}a.putImageData(l,0,0);const c=yi(r);return c.repeat.set(2,1/.25),c}const Pr=16,y0=[["#c4492f","#f0e2c4","#1d1d1b"],["#2f4c6b","#e9d8a6","#c96f3b"],["#e7d9bd","#1e1e1e","#b8452f"],["#3e6250","#e8c766","#f2ede1"],["#1b1b1d","#d9a441","#efe8da"],["#8c3b4a","#f3dcc8","#233040"],["#d6b24c","#2b2b2b","#f4f0e6"],["#5d7f9b","#f2efe7","#1f2a36"],["#ece6d8","#c23b22","#2a2a2a"],["#31302e","#7fb0a6","#e9e1cf"],["#a8562f","#2e3b33","#efd9b4"],["#f1ece0","#3d5a80","#e07a3f"],["#20302a","#c9a227","#d9d2c3"],["#6b4f7a","#f0d7a1","#1c1c1c"],["#d9cfc1","#556b2f","#8b2e2e"],["#0f1a24","#e3e3e3","#d14b2b"]];function Cw(){const[t,e]=vi(1024,1024);for(let i=0;i<Pr;i++){const o=i%4*256,r=Math.floor(i/4)*256,[a,l,c]=y0[i];e.save(),e.translate(o,r),e.beginPath(),e.rect(0,0,256,256),e.clip(),e.fillStyle=a,e.fillRect(0,0,256,256);const h=f=>pi(i,f,99);switch(i%8){case 0:e.fillStyle=l,e.beginPath(),e.arc(256*.5,256*.55,256*.3,0,Math.PI*2),e.fill();break;case 1:for(let f=0;f<7;f++)e.fillStyle=f%2?l:c,e.fillRect(0,256*(.12+f*.11),256,256*.05);break;case 2:e.fillStyle=l,e.fillRect(256*.12,256*.12,256*.5,256*.76),e.fillStyle=c,e.fillRect(256*.66,256*.58,256*.22,256*.3);break;case 3:for(let f=0;f<5;f++)for(let d=0;d<5;d++)e.fillStyle=(d+f)%2?l:c,e.beginPath(),e.arc(256*(.18+d*.16),256*(.18+f*.16),256*.05,0,7),e.fill();break;case 4:{const f=e.createLinearGradient(0,0,0,256);f.addColorStop(0,l),f.addColorStop(1,a),e.fillStyle=f,e.fillRect(0,0,256,256),e.fillStyle=c,e.fillRect(256*.1,256*.78,256*.8,256*.03);break}case 5:e.strokeStyle=l,e.lineWidth=256*.035;for(let f=1;f<6;f++)e.beginPath(),e.arc(256*.3,256*.7,256*.11*f,0,Math.PI*2),e.stroke();break;case 6:e.fillStyle=l,e.beginPath(),e.moveTo(0,256),e.lineTo(256,0),e.lineTo(256,256),e.fill(),e.fillStyle=c,e.fillRect(256*.1,256*.1,256*.18,256*.18);break;case 7:e.fillStyle=l,e.fillRect(256*.08,256*.08,256*.84,256*.84),e.fillStyle=c,e.beginPath(),e.arc(256*(.3+h(1)*.4),256*(.3+h(2)*.4),256*.16,0,7),e.fill();break}e.fillStyle=i%3?c:l,e.globalAlpha=.85;for(let f=0;f<3+i%4;f++)e.fillRect(256*.1+f*256*.07,256*.06,256*.05,256*.02);e.globalAlpha=1,i%3===1&&(e.strokeStyle="rgba(255,255,255,0.13)",e.lineWidth=256*.03,e.beginPath(),e.arc(256/2,256/2,256*.46,0,7),e.stroke());const u=e.createRadialGradient(256/2,256/2,256*.45,256/2,256/2,256*.75);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(40,30,20,0.25)"),e.fillStyle=u,e.fillRect(0,0,256,256),e.restore()}return yi(t,!0,!1)}const Pw=s=>y0[s%Pr][0];function Lw(s){const[e,n]=vi(1024),[i,o]=vi(1024),r=1024/2;n.fillStyle="#0b0b0c",n.fillRect(0,0,1024,1024);for(let h=r*.33;h<r*.985;h+=1.4){const u=Math.floor((h-r*.36)/(r*.12)),f=(h-r*.36)%(r*.12)<2.5&&h>r*.37;n.strokeStyle=f?"rgba(60,60,64,0.55)":`rgba(${18+u%2*4},${18+u%2*4},${20+u%2*4},0.9)`,n.lineWidth=.8,n.beginPath(),n.arc(r,r,h,0,Math.PI*2),n.stroke()}n.fillStyle=s,n.beginPath(),n.arc(r,r,r*.33,0,7),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=3,n.beginPath(),n.arc(r,r,r*.29,0,7),n.stroke(),n.fillStyle="rgba(20,20,20,0.7)";for(let h=0;h<4;h++)n.fillRect(r-r*.16,r-r*.18+h*r*.05,r*(.32-h*.05),r*.022);n.fillStyle="#d8d8d8",n.beginPath(),n.arc(r,r,r*.025,0,7),n.fill();const a=o.createImageData(1024,1024);for(let h=0;h<1024;h++)for(let u=0;u<1024;u++){const f=(u+.5-r)/r,d=(h+.5-r)/r,p=Math.hypot(f,d)||1,m=-d/p,x=-f/p,g=(h*1024+u)*4;a.data[g]=(m*.5+.5)*255,a.data[g+1]=(x*.5+.5)*255,a.data[g+2]=p>.34&&p<.985?255:0,a.data[g+3]=255}o.putImageData(a,0,0);const l=yi(e,!0,!1),c=yi(i,!1,!1);return{map:l,aniso:c}}function Iw(){const[e,n]=vi(256,160),i=n.createRadialGradient(256*.5,160*.9,10,256*.5,160*.7,256*.75);i.addColorStop(0,"#ffd89a"),i.addColorStop(.6,"#f0a64a"),i.addColorStop(1,"#9a5a1e"),n.fillStyle=i,n.fillRect(0,0,256,160);const o=256/2,r=160*1.05,a=160*.82;n.lineWidth=2,n.strokeStyle="#2a1a0c",n.beginPath(),n.arc(o,r,a,Math.PI*1.25,Math.PI*1.62),n.stroke(),n.strokeStyle="#b0261a",n.lineWidth=4,n.beginPath(),n.arc(o,r,a,Math.PI*1.62,Math.PI*1.75),n.stroke(),n.strokeStyle="#2a1a0c",n.lineWidth=1.6;for(let l=0;l<=12;l++){const c=Math.PI*(1.25+.5*(l/12)),h=l%3?7:13;n.strokeStyle=c>Math.PI*1.62?"#b0261a":"#2a1a0c",n.beginPath(),n.moveTo(o+Math.cos(c)*a,r+Math.sin(c)*a),n.lineTo(o+Math.cos(c)*(a+h),r+Math.sin(c)*(a+h)),n.stroke()}return n.fillStyle="#2a1a0c",n.font='600 22px "Inter Tight", sans-serif',n.textAlign="center",n.fillText("VU",o,160*.62),yi(e,!0,!1)}function Dw(){const[e,n]=vi(1024,96),i=n.createLinearGradient(0,0,0,96);i.addColorStop(0,"#2a1d10"),i.addColorStop(.5,"#4a321a"),i.addColorStop(1,"#2a1d10"),n.fillStyle=i,n.fillRect(0,0,1024,96),n.fillStyle="#ffd59a",n.strokeStyle="#ffd59a",n.font='500 22px "Inter Tight", sans-serif',n.textAlign="center";for(let r=88;r<=108;r+=1){const a=60+(r-88)/20*904,l=r%4===0;n.globalAlpha=.9,n.lineWidth=l?2.2:1.2,n.beginPath(),n.moveTo(a,96*.62),n.lineTo(a,96*(l?.38:.48)),n.stroke(),l&&n.fillText(String(r),a,96*.3)}n.globalAlpha=.6,n.fillRect(40,96*.66,944,2),n.globalAlpha=1;const o=60+10/20*904;return n.fillStyle="#ff4a22",n.fillRect(o-2.5,6,5,84),yi(e,!0,!1)}let pa=null;function M0(){if(pa)return pa;const s=128,[t,e]=vi(s),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.12,"rgba(255,255,255,0.55)"),n.addColorStop(.35,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),pa=yi(t,!1,!1),pa}function Nw(s){const[e,n]=vi(512),i=n.createImageData(512,512);for(let o=0;o<512;o++)for(let r=0;r<512;r++){const a=r-256,l=o-512/2,c=Math.round(Math.hypot(a,l)*2),h=200+40*(pi(c,0,5)-.5)+10*(pi(r,o,6)-.5),u=(o*512+r)*4;i.data[u]=i.data[u+1]=i.data[u+2]=h,i.data[u+3]=255}return n.putImageData(i,0,0),yi(e,!1,!1)}const as={w:1.48,d:2.11},hi=as.w/2,kn=as.d/2,_s=.64,Yo=.99,ma=.725,On=.8,Na=.0235,ro=52*Na,Md=-ro/2,Qi=.88,_d=1.04,wd=.985,vc=.6,Kn={z:1.5,w:.76,d:.36},fo={look:[0,.725,.96],pitch:-.58,near:.72,span:.64},Uw=[0,.9,-.1],Sd=s=>[1,3,6,8,10].includes(s%12);let bd=null;function zw(){return{ebony:new yn({color:"#141414",roughness:.16,clearcoat:1,clearcoatRoughness:.06}),satin:new yn({color:"#0b0b0b",roughness:.4,clearcoat:.3}),ivory:new yn({color:"#f1eee6",roughness:.28,clearcoat:.4,clearcoatRoughness:.2}),sharp:new yn({color:"#0d0d0d",roughness:.32,clearcoat:.4}),gold:new Ce({color:"#b98f34",metalness:.85,roughness:.36}),brass:new Ce({color:"#c9a24a",metalness:1,roughness:.25}),steel:new Ce({color:"#d4d4d2",metalness:1,roughness:.22}),copper:new Ce({color:"#b5713a",metalness:1,roughness:.32}),pin:new Ce({color:"#8a8a88",metalness:1,roughness:.3}),felt:new Ce({color:"#141414",roughness:.9}),redFelt:new Ce({color:"#5a1414",roughness:.95}),spruce:new Ce({map:bh([226,196,150],[196,160,112],31,.5),roughness:.6}),leather:new yn({color:"#0e0e0e",roughness:.55,sheen:.4,sheenColor:new Ct("#555")}),paper:new Ce({map:Ow(),roughness:.9})}}function du(){return bd??(bd=zw()),bd}function Qe(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(El),s}function cn(s,t,e,n){return s.position.set(t,e,n),s}const ws=(s,t,e,n)=>Qe(new wt(new nn(s,t,e),n));function Fw(){const s=new br([[-hi,-.62],[-.735,-.78],[-.69,-.9],[-.6,-.99],[-.46,-1.045],[-.3,-kn],[-.16,-1.04],[-.02,-.99],[.12,-.9],[.25,-.77],[.35,-.6],[.43,-.4],[.5,-.18],[.58,.04],[.66,.24],[.715,.42],[.737,.58],[hi,.7]].map(([e,n])=>new I(e,0,n)),!1,"centripetal"),t=[[-hi,On]];for(const e of s.getSpacedPoints(110))t.push([e.x,e.z]);return t.push([hi,On]),t}function Ed(s,t){const e=s.length;let n=0;for(let o=0;o<e;o++){const r=s[o],a=s[(o+1)%e];n+=r[0]*a[1]-a[0]*r[1]}const i=n>0?1:-1;return s.map((o,r)=>{const a=s[(r-1+e)%e],l=s[(r+1)%e],c=[o[0]-a[0],o[1]-a[1]],h=[l[0]-o[0],l[1]-o[1]],u=Math.hypot(c[0],c[1])||1,f=Math.hypot(h[0],h[1])||1,d=[-c[1]/u*i,c[0]/u*i],p=[-h[1]/f*i,h[0]/f*i];let m=d[0]+p[0],x=d[1]+p[1];const g=Math.hypot(m,x)||1;m/=g,x/=g;const y=1/Math.max(.5,m*d[0]+x*d[1]);return[o[0]+m*t*y,o[1]+x*t*y]})}const $o=s=>new Ir(s.map(([t,e])=>new mt(t,-e)));function Ko(s,t,e,n=0){const i=new yl(s,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:24,steps:1});return i.rotateX(-Math.PI/2),i.translate(0,t+n,0),i}function kw(s,t){let e=-kn,n=!1;for(let i=0;i<s.length;i++){const o=s[i],r=s[(i+1)%s.length];if((o[0]-t)*(r[0]-t)>0||o[0]===r[0])continue;const a=(t-o[0])/(r[0]-o[0]),l=o[1]+(r[1]-o[1])*a;l<.5&&(!n||l>e)&&(e=l,n=!0)}return e}function Ow(){const s=document.createElement("canvas");s.width=512,s.height=360;const t=s.getContext("2d");t.fillStyle="#efe9da",t.fillRect(0,0,512,360),t.strokeStyle="rgba(40,36,30,0.85)",t.fillStyle="rgba(30,28,24,0.9)";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let o=0;o<6;o++){const r=40+o*52;t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(24,r+a*5),t.lineTo(488,r+a*5),t.stroke();for(let a=60;a<480;a+=14+n()*10){const l=r+Math.round(n()*12-2)*2.5;t.beginPath(),t.ellipse(a,l,3.4,2.5,-.4,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(a+3,l),t.lineTo(a+3,l-15),t.stroke()}for(let a=140;a<480;a+=116)t.beginPath(),t.moveTo(a,r),t.lineTo(a,r+20),t.stroke()}const i=new ps(s);return i.colorSpace=Ne,i.anisotropy=8,i}function Bw(){const s=du(),t=new he,e=Fw(),n=Ed(e,.035),i=$o(e);i.holes.push(new yo(n.map(([H,L])=>new mt(H,-L)).reverse())),t.add(Qe(new wt(Ko(i,_s,Yo,.01),s.ebony))),t.add(Qe(new wt(Ko($o(e),_s,_s+.03),s.ebony))),t.add(Qe(new wt(Ko($o(n),.79,.8),s.spruce)));const o=Ed(e,.065),r=$o(o.filter(([,H])=>H<.74).concat([[o.at(-1)[0],.74],[o[0][0],.74]]));for(const[H,L,V,D]of[[-.36,-.68,.15,.13],[-.02,-.62,.13,.11],[-.38,-.24,.17,.12],[.16,-.26,.12,.13],[-.1,.06,.1,.07]]){const z=new yo;z.absellipse(H,-L,V,D,0,Math.PI*2,!0),r.holes.push(z)}for(let H=0;H<9;H++){const L=new yo;L.absarc(-.52+H*.13,-.3,.022,0,Math.PI*2,!0),r.holes.push(L)}t.add(Qe(new wt(Ko(r,.875,.895,.003),s.gold)));const a=[],l=[],c=100,h=-.64,u=.66,f=.6,d=1024,p=Math.round(d*(On+kn)/as.w),m=document.createElement("canvas");m.width=d,m.height=p;const x=m.getContext("2d"),g=H=>(H+hi)/as.w*d,y=H=>(H+kn)/(On+kn)*p;x.lineCap="round";for(const H of[0,1])for(let L=0;L<c;L++){const V=L/(c-1),D=h+(u-h)*V,z=L<22;if(H===0!=!z)continue;const X=z?D+.22+.1*(1-L/22):D,tt=kw(n,X)+.045;x.strokeStyle=z?"#c07a42":"#e6e6e2",x.lineWidth=z?2.4+1.6*(1-L/22):1.1+.5*(1-V),x.beginPath(),x.moveTo(g(D),y(f)),x.lineTo(g(X),y(tt)),x.stroke();for(const et of[.03,.075])a.push(new Kt().makeTranslation(D+(et>.05?.004:-.004),.915,f+et));V<.78&&l.push(new Kt().makeTranslation(D,.945,f-.13-(z?.05:0)))}const w=new ps(m);w.colorSpace=Ne,w.anisotropy=8;const v=new wt(new Ue(as.w,On+kn).rotateX(-Math.PI/2),new Ce({map:w,transparent:!0,metalness:.9,roughness:.28,depthWrite:!1}));v.position.set(0,.912,(On-kn)/2),v.receiveShadow=!0,v.renderOrder=1,t.add(v);const M=new vo(new Xe(.0032,.0032,.03,8),s.pin,a.length);a.forEach((H,L)=>M.setMatrixAt(L,H));const S=new vo(new nn(.011,.04,.05),s.felt,l.length);l.forEach((H,L)=>S.setMatrixAt(L,H));for(const H of[M,S])H.castShadow=!0,H.receiveShadow=!0,H.layers.enable(El),t.add(H);t.add(cn(ws(ro+.02,.006,.02,s.redFelt),0,.9,.7));const E=e.filter(([,H])=>H<.62),_=$o([[E[0][0],.62],...E,[E.at(-1)[0],.62]].map(([H,L])=>[H+hi,L])),b=Qe(new wt(Ko(_,0,.022,.003),s.ebony)),T=new he;T.position.set(-hi,Yo,0),T.rotation.z=vc,T.add(b),t.add(T);const C=new I(.5,Yo,-.1),P=1.18,U=new I(-hi+P*Math.cos(vc),Yo+P*Math.sin(vc),-.1),F=Qe(new wt(new Xe(.009,.009,C.distanceTo(U),10),s.ebony));F.position.copy(C).add(U).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new I(0,1,0),U.clone().sub(C).normalize()),t.add(F);const k=new he;k.add(cn(ws(.8,.29,.014,s.ebony),0,.145,0)),k.add(cn(ws(.8,.02,.05,s.ebony),0,.01,.02));const $=Qe(new wt(new Ue(.42,.29),s.paper));k.add(cn($,0,.165,.008)),k.rotation.x=-.26,k.position.set(0,Yo,.7),t.add(k),t.add(cn(ws(as.w,.06,kn-On,s.ebony),0,_s+.03,(kn+On)/2));for(const H of[-1,1]){const L=Qe(new wt(new Yn(hi-ro/2,.17,kn-On,3,.012),s.ebony));t.add(cn(L,H*(hi+ro/2)/2,_s+.085,(kn+On)/2))}t.add(cn(ws(ro,.1,Qi-On+.01,s.ebony),0,ma+.04,(Qi+On)/2)),t.add(cn(ws(ro,.035,.015,s.ebony),0,ma-.03,kn-.0075));const Y=new Map,it=new Yn(Na-.0011,.022,_d-Qi,2,.0015).translate(0,-.011,(_d-Qi)/2),G=new Yn(.0125,.017,wd-Qi-.01,2,.002).translate(0,.0045,(wd-Qi-.01)/2+.01);let Z=0;for(let H=21;H<=108;H++){let L;Sd(H)?(L=Qe(new wt(G,s.sharp)),L.position.set(Md+Z*Na,ma,Qi)):(L=Qe(new wt(it,s.ivory)),L.position.set(Md+(Z+.5)*Na,ma,Qi),Z++),L.userData.key=H,Y.set(H,L),t.add(L)}const st=new Ml([[.03,0],[.036,.05],[.038,.07],[.042,.25],[.05,.46],[.056,.56],[.068,.585],[.068,.6]].map(([H,L])=>new mt(H,L)),28);for(const[H,L]of[[-.62,.9],[.62,.9],[-.42,-.84]])t.add(cn(Qe(new wt(st,s.ebony)),H,.045,L)),t.add(cn(Qe(new wt(new Xe(.022,.022,.03,16).rotateZ(Math.PI/2),s.brass)),H,.022,L));for(const H of[-1,1])t.add(cn(ws(.03,_s-.14,.03,s.ebony),H*.07,.14+(_s-.14)/2,.76));t.add(cn(Qe(new wt(new Yn(.34,.09,.13,2,.01),s.ebony)),0,.09,.77));for(const H of[-.07,0,.07]){const L=Qe(new wt(new Yn(.026,.008,.13,2,.003),s.brass));L.rotation.x=.12,t.add(cn(L,H,.07,.89))}const ut=new he;for(const[H,L]of[[-.33,-.14],[.33,-.14],[-.33,.14],[.33,.14]])ut.add(cn(Qe(new wt(new Xe(.022,.016,.45,14),s.ebony)),H,.225,L));ut.add(cn(Qe(new wt(new Yn(Kn.w,.07,Kn.d,2,.008),s.ebony)),0,.46,0)),ut.add(cn(Qe(new wt(new Yn(Kn.w-.02,.045,Kn.d-.02,4,.018),s.leather)),0,.51,0)),ut.position.z=Kn.z,t.add(ut);const B=new Map;return{group:t,keys:Y,press(H,L){Y.has(H)&&B.set(H,L?1:0)},update(H){for(const[L,V]of B){const D=Y.get(L),z=V?Sd(L)?.07:.06:0,X=V?60:22;D.rotation.x+=(z-D.rotation.x)*(1-Math.exp(-X*H)),!V&&Math.abs(D.rotation.x)<1e-4&&(D.rotation.x=0,B.delete(L))}}}}const hs=1.62,Hw=12,Vw=6.5,Gw=2,Ww=1.7,si=1.15,ga=.0022,Xw=2.6,qw=4.6,vn=.3;class Yw{constructor(t){R(this,"pos",new I(6.6,hs,10.2));R(this,"vel",new I);R(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));R(this,"pitch",.05);R(this,"yawVel",0);R(this,"pitchVel",0);R(this,"keys",new Set);R(this,"taps",new Map);R(this,"frozen",!1);R(this,"glide",new mt);R(this,"spin",0);R(this,"goal",null);R(this,"moved",!1);R(this,"seated",!1);R(this,"onSeatedMove",()=>{});R(this,"solids",[]);R(this,"obstacles",[]);R(this,"boxes",[]);R(this,"world",{x0:-22,x1:39,z0:-38,z1:30});R(this,"mouseLooks",()=>!0);this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||!this.mouseLooks()||(this.yaw-=e.movementX*ga,this.pitch=Math.max(-si,Math.min(si,this.pitch-e.movementY*ga)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}edgeTurn(t,e){this.yaw-=t*ga,this.pitch=Math.max(-si,Math.min(si,this.pitch-e*ga)),this.moved=!0}drag(t,e){if(this.seated){this.onSeatedMove();return}this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-si,Math.min(si,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Gw-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*Ww-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>si||this.pitch<-si)&&(this.pitch=Math.max(-si,Math.min(si,this.pitch)),this.pitchVel=0);let o=0,r=0;this.seated||(e.has("KeyW")&&(o+=1),e.has("KeyS")&&(o-=1),e.has("KeyD")&&(r+=1),e.has("KeyA")&&(r-=1)),(o||r||n||i)&&(this.moved=!0);let a=0,l=0;if(o||r){const h=e.has("ShiftLeft")||e.has("ShiftRight")?qw:Xw,u=Math.hypot(o,r),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*o+d*r)/u*h,l=(-d*o-f*r)/u*h}const c=1-Math.exp(-(o||r?Hw:Vw)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const m=f/p,x=d/p,g=this.vel.x*m+this.vel.z*x;g<0&&(this.vel.x-=m*g,this.vel.z-=x*g)}}!this.frozen&&!this.seated&&this.coast(t),this.seated&&(this.vel.set(0,0,0),this.glide.set(0,0),this.goal=null)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,o=Math.hypot(n,i),r=1-Math.exp(-2.6*t),a=Math.min(o,Math.max(o*r,Math.min(o,.9*t)));if(o>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/o*a,this.pos.z+=i/o*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*r),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*r),o<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const o=(this.pos.x-n)/Math.max(t,1e-6),r=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(o,r).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let n=0;n<2;n++)for(const i of this.solids){const o=Math.max(i.x0,Math.min(t.x,i.x1)),r=Math.max(i.z0,Math.min(t.z,i.z1)),a=t.x-o,l=t.z-r,c=a*a+l*l;if(!(c>=vn*vn))if(c>1e-12){const h=Math.sqrt(c);t.x+=a/h*(vn-h),t.z+=l/h*(vn-h)}else{const h=[t.x-i.x0+vn,i.x1-t.x+vn,t.z-i.z0+vn,i.z1-t.z+vn],u=Math.min(...h);u===h[0]?t.x=i.x0-vn:u===h[1]?t.x=i.x1+vn:u===h[2]?t.z=i.z0-vn:t.z=i.z1+vn}}for(const n of this.obstacles){const i=t.x-n.x,o=t.z-n.z,r=Math.hypot(i,o),a=vn*.7+n.r;r<a&&r>1e-6&&(t.x=n.x+i/r*a,t.z=n.z+o/r*a)}const e=vn*.75;for(const n of this.boxes){const i=t.x-n.x,o=t.z-n.z,r=i*n.c-o*n.s,a=i*n.s+o*n.c,l=Math.max(-n.hw,Math.min(n.hw,r)),c=Math.max(-n.hd,Math.min(n.hd,a));let h=r-l,u=a-c;const f=Math.hypot(h,u);if(f>=e)continue;let d,p;if(f>1e-6)h/=f,u/=f,d=l+h*e,p=c+u*e;else{const m=[r+n.hw,n.hw-r,a+n.hd,n.hd-a],x=Math.min(...m);d=x===m[0]?-n.hw-e:x===m[1]?n.hw+e:r,p=x===m[2]?-n.hd-e:x===m[3]?n.hd+e:a}t.x=n.x+d*n.c+p*n.s,t.z=n.z-d*n.s+p*n.c}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const $w={couch:{name:"Couch",w:2.3,d:.98},table:{name:"Coffee table",w:1.2,d:.6},cabinet:{name:"Stereo cabinet",w:.62,d:.46},speakerL:{name:"Left speaker",w:.44,d:.5},speakerR:{name:"Right speaker",w:.44,d:.5},piano:{name:"Grand piano",w:as.w,d:as.d}},xa={couch:.38,table:.8,stereo:.085,piano:.5},Kw=.0254;let Hi=null;function _0(){const s=yd([36,64,56],[90,106,100],3),t=yd([42,74,60],[84,102,92],7),e=u=>new yn({color:16777215,map:u.map,bumpMap:u.bump,bumpScale:.35,roughness:.93,sheen:1,sheenRoughness:.4,sheenColor:new Ct("#9fbdb4"),vertexColors:!0}),n=bh([118,80,50],[74,47,29],11,.55),i=bh([214,200,176],[184,166,138],21,.4),o=Cw(),r=Array.from({length:Pr},(u,f)=>{const d=o.clone();return d.repeat.set(.25,.25),d.offset.set(f%4*.25,1-(Math.floor(f/4)+1)*.25),new Ce({map:d,roughness:.72})}),a=Array.from({length:Pr},(u,f)=>new Ce({color:new Ct(Pw(f)).multiplyScalar(.8),roughness:.75})),l=Lw("#c8692c"),c=Nw(),h={side:Zn};return{velvet:e(s),pillow:e(t),walnut:new yn({map:n,roughness:.48,clearcoat:.3,clearcoatRoughness:.38}),birch:new Ce({map:i,roughness:.66}),lacquer:new yn({color:"#ecebe6",roughness:.3,clearcoat:.55,clearcoatRoughness:.16}),whiteMatte:new yn({color:"#e8e6df",roughness:.48,clearcoat:.2,clearcoatRoughness:.3}),shadowGap:new Ce({color:"#141414",roughness:.8}),steel:new Ce({color:"#161616",metalness:.85,roughness:.4}),alu:new Ce({color:"#cfcfcf",metalness:1,roughness:.3,roughnessMap:c}),chrome:new Ce({color:"#e6e6e6",metalness:1,roughness:.1}),rubber:new Ce({color:"#141414",roughness:.36,...h}),paper:new Ce({color:"#3c3c3b",roughness:.62,...h}),cap:new Ce({color:"#161616",roughness:.18,...h}),trim:new Ce({color:"#1f1f21",metalness:.5,roughness:.42}),ring:new Ce({color:"#a7a7a5",metalness:.25,roughness:.38,...h}),silk:new yn({color:"#2b2b2b",roughness:.7,sheen:.6,sheenColor:new Ct("#777"),...h}),faceplate:new Ce({color:"#232325",metalness:.3,roughness:.5,...h}),hole:new Ye({color:"#050505"}),cord:new Ce({color:"#0e0e0e",roughness:.45}),glass:new yn({color:"#0b0b0d",roughness:.06,clearcoat:1,clearcoatRoughness:.05}),smoked:new yn({color:"#0b0b0d",roughness:.05,transparent:!0,opacity:.45,depthWrite:!1}),record:new yn({map:l.map,roughness:.3,anisotropy:.85,anisotropyMap:l.aniso,clearcoat:.3,clearcoatRoughness:.25}),vinylEdge:new Ce({color:"#0a0a0a",roughness:.3}),covers:r,spines:a,vu:new Ye({map:Iw(),color:new Ct(.62,.6,.58),toneMapped:!1}),dial:new Ye({map:Dw(),color:new Ct(.55,.55,.55),toneMapped:!1}),invisible:new Ye({visible:!1})}}function Zw(s){const t=[...ol.values()].flatMap(e=>[e.cover,e.spine]);for(const e of Object.values(s))for(const n of Array.isArray(e)?e:[e])n.isMeshStandardMaterial&&t.push(n);return t}function ue(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(El),s}function $t(s,t,e,n){return s.position.set(t,e,n),s}function Ui(s,t,e,n){return ue(new wt(new nn(s,t,e),n))}function pu(s,t=!1){s.deleteAttribute("normal"),s.deleteAttribute("uv");const e=t?s:fu(s,1e-5);return e.computeVertexNormals(),Jw(e),e}function Jw(s){const t=s.attributes.position,e=s.attributes.normal,n=new Float32Array(t.count*2);for(let i=0;i<t.count;i++){const o=Math.abs(e.getX(i)),r=Math.abs(e.getY(i)),a=Math.abs(e.getZ(i)),[l,c]=r>=o&&r>=a?[t.getX(i),t.getZ(i)]:o>=a?[t.getZ(i),t.getY(i)]:[t.getX(i),t.getY(i)];n[i*2]=l,n[i*2+1]=c}s.setAttribute("uv",new xn(n,2))}function w0(s,t,e=.5){const n=[],i=s.length;for(let o=0;o<i;o++){const r=s[(o-1+i)%i],a=s[o],l=s[(o+1)%i],c=r[0]-a[0],h=r[1]-a[1],u=l[0]-a[0],f=l[1]-a[1],d=Math.hypot(c,h),p=Math.hypot(u,f),m=(c*u+h*f)/(d*p),x=Math.PI-Math.acos(Math.max(-1,Math.min(1,m)));if(x<e||d<1e-6||p<1e-6){n.push(a);continue}const g=Math.min(t/Math.tan((Math.PI-x)/2),d*.45,p*.45),y=[a[0]+c/d*g,a[1]+h/d*g],w=[a[0]+u/p*g,a[1]+f/p*g];for(let v=0;v<=6;v++){const M=v/6,S=1-M;n.push([S*S*y[0]+2*S*M*a[0]+M*M*w[0],S*S*y[1]+2*S*M*a[1]+M*M*w[1]])}}return n}function mu(s,t,e,n,i=4){const o=new Ir(s.map(([a,l])=>new mt(a,-l))),r=new yl(o,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:i,curveSegments:8,steps:1});return r.rotateX(-Math.PI/2),r.translate(0,t+n,0),r}function ls(s,t=64){const e=new Ml(s.map(([n,i])=>new mt(Math.max(n,0),i)),t);return e.rotateX(Math.PI/2),e}const sl=(s,t,e,n,i,o)=>Array.from({length:o+1},(r,a)=>{const l=n+(i-n)*a/o;return[s+e*Math.cos(l),t+e*Math.sin(l)]}),gu={red:new Ct(1,.16,.06),green:new Ct(.25,1,.35),amber:new Ct(1,.62,.18),warm:new Ct(1,.72,.38)};function fs(s,t,e,n,i,o=.0022,r=1){const a=gu[i],l=new wt(new Oi(o,16),new Ye({color:a.clone().multiplyScalar(1.4*r).addScalar(.15*r),toneMapped:!1}));$t(l,t,e,n+6e-4);const c=new Yh(new vl({map:M0(),color:a.clone().multiplyScalar(.55*r),blending:za,depthWrite:!1,transparent:!0,toneMapped:!1}));return c.scale.setScalar(o*11),$t(c,t,e,n+.004),s.add(l,c),h=>{l.material.color.copy(a).multiplyScalar(1.4*h).addScalar(.15*h),c.material.color.copy(a).multiplyScalar(.55*h)}}function S0(s,t,e,n,i,o,r=.22){const a=new Yh(new vl({map:M0(),color:gu[o].clone().multiplyScalar(r),blending:za,depthWrite:!1,transparent:!0,toneMapped:!1}));a.scale.set(i*2.2,i*1.5,1),$t(a,t,e,n+.01),s.add(a)}const ee={a:1.15,zJ:-.03,zA:.4,zF:.49,T:.034,n:3,y0:.17,armH:.6,backH:.8,endR:.07,base:.3,seat:.455},Qw=ee.zJ+.49;function jw(s){const t=[];for(let h=0;h<=40;h++)t.push([-1.15,ee.zA-(ee.zA-ee.zJ)*h/40]);const e=2400;for(let h=1;h<e;h++){const u=Math.PI-Math.PI*h/e,f=Math.cos(u),d=Math.sin(u);t.push([ee.a*Math.sign(f)*Math.pow(Math.abs(f),2/ee.n),ee.zJ-Qw*Math.pow(Math.abs(d),2/ee.n)])}for(let h=0;h<=40;h++)t.push([ee.a,ee.zJ+(ee.zA-ee.zJ)*h/40]);const n=[0];for(let h=1;h<t.length;h++)n.push(n[h-1]+Math.hypot(t[h][0]-t[h-1][0],t[h][1]-t[h-1][1]));const i=n[n.length-1],o=Math.ceil(i/s),r=[],a=[];let l=0;for(let h=0;h<=o;h++){const u=i*h/o;for(;l<t.length-2&&n[l+1]<u;)l++;const f=(u-n[l])/Math.max(1e-9,n[l+1]-n[l]);r.push([t[l][0]+(t[l+1][0]-t[l][0])*f,t[l][1]+(t[l+1][1]-t[l][1])*f]),a.push(u)}const c=r.map((h,u)=>{const f=r[Math.max(0,u-1)],d=r[Math.min(r.length-1,u+1)],p=d[0]-f[0],m=d[1]-f[1],x=Math.hypot(p,m);return[m/x,-p/x]});return{p:r,n:c,s:a}}const xu=(s,t)=>s.p.map(([e,n],i)=>[e-s.n[i][0]*t,n-s.n[i][1]*t]);function tS(s){const t=ee.T,e=t/2,n=10,i=s.p.length-1,o=s.s[i],r=y=>{const w=s.p[y][1],v=Math.min(s.s[y],o-s.s[y]);let M=ee.armH+(ee.backH-ee.armH)*(1-_e.smoothstep(w,-.25,.3));return v<ee.endR&&(M-=ee.endR-Math.sqrt(Math.max(0,ee.endR*ee.endR-(ee.endR-v)**2))),Math.max(M,ee.y0+.12)},a=[],l=[],c=[],h=n+3;for(let y=0;y<=i;y++){const[w,v]=s.p[y],[M,S]=s.n[y],E=w-M*e,_=v-S*e,b=r(y),T=[[E+M*e,ee.y0,_+S*e]];for(let P=0;P<=n;P++){const U=Math.PI*P/n;T.push([E+M*e*Math.cos(U),b-e+e*Math.sin(U),_+S*e*Math.cos(U)])}T.push([E-M*e,ee.y0,_-S*e]);let C=0;T.forEach((P,U)=>{U&&(C+=Math.hypot(P[0]-T[U-1][0],P[1]-T[U-1][1],P[2]-T[U-1][2])),a.push(...P),l.push(s.s[y],C)})}for(let y=0;y<i;y++)for(let w=0;w<h-1;w++){const v=y*h+w,M=(y+1)*h+w,S=M+1,E=v+1;c.push(v,S,M,v,E,S)}const u=new we;u.setAttribute("position",new Ot(a,3)),u.setAttribute("uv",new Ot(l,2)),u.setIndex(c),u.computeVertexNormals();const f=[],d=[],p=[],m=(y,w)=>{const v=f.length/3,M=y.reduce((S,E)=>[S[0]+E[0]/y.length,S[1]+E[1]/y.length,S[2]+E[2]/y.length],[0,0,0]);f.push(...M),p.push(M[0]+M[2],M[1]);for(const S of y)f.push(S[0],S[1],S[2]),p.push(S[0]+S[2],S[1]);for(let S=0;S<y.length;S++){const E=v+1+S,_=v+1+(S+1)%y.length,b=new I(...y[S]),T=new I(...y[(S+1)%y.length]),C=new I(...M);new I().crossVectors(b.clone().sub(C),T.clone().sub(C)).dot(new I(...w))>=0?d.push(v,E,_):d.push(v,_,E)}};for(const[y,w]of[[0,-1],[i,1]]){const v=s.p[Math.max(0,y-1)],M=s.p[Math.min(i,y+1)],S=Math.hypot(M[0]-v[0],M[1]-v[1]),E=[];for(let _=0;_<h;_++)E.push([a[(y*h+_)*3],a[(y*h+_)*3+1],a[(y*h+_)*3+2]]);m(E,[(M[0]-v[0])/S*w,0,(M[1]-v[1])/S*w])}for(let y=0;y<i;y++){const w=(M,S)=>[a[(M*h+S)*3],a[(M*h+S)*3+1],a[(M*h+S)*3+2]],v=f.length/3;for(const M of[w(y,0),w(y+1,0),w(y+1,h-1),w(y,h-1)])f.push(M[0],M[1],M[2]),p.push(M[0],M[2]);d.push(v,v+1,v+2,v,v+2,v+3)}const x=new we;x.setAttribute("position",new Ot(f,3)),x.setAttribute("uv",new Ot(p,2)),x.setIndex(d),x.computeVertexNormals();const g=x.attributes.normal;for(let y=0;y<g.count;y++)if(Math.abs(g.getY(y))>.9&&g.getY(y)>0){x.index.array.reverse(),x.computeVertexNormals();break}return[u,x]}const eS=[90/36,106/64,100/56];function Tl(s,t){const e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){const o=Math.max(0,Math.min(1,t(e.getX(i),e.getY(i),e.getZ(i))))*.55;for(let r=0;r<3;r++)n[i*3+r]=1+o*(eS[r]-1)}s.setAttribute("color",new xn(n,3))}const ss=(s,t)=>Math.exp(-(s*s)/(t*t));function nS(s,t){const i=t*.038000000000000006,o=xu(s,ee.T+.003+.034),r=ee.zF+.015-.034,a=t<0?o.map((f,d)=>d):o.map((f,d)=>o.length-1-d),l=[[o[a[0]][0],r]];for(const f of a){const[d,p]=o[f];if(t*d<=t*i){l.push([i,p]);break}p<=r&&l.push([d,p])}l.push([i,r]);const c=pu(mu(w0(l,.05),ee.base,ee.seat,.034,5)),h=c.attributes.position,u=t*.55;for(let f=0;f<h.count;f++){const d=h.getX(f),p=h.getY(f),m=h.getZ(f),x=_e.smoothstep(p,ee.seat-.06,ee.seat),g=Math.max(0,1-((d-u)/.6)**2)*Math.max(0,1-((m-.05)/.5)**2),y=ss(d-u,.22)*ss(m-.18,.18);h.setY(f,p+x*(.016*g-.012*y))}return c.computeVertexNormals(),Tl(c,(f,d,p)=>(d>ee.seat-.05?.8*ss(f-u,.25)*ss(p-.2,.2):0)+(p>ee.zF-.04?.7*_e.smoothstep(d,ee.base+.04,ee.seat-.03)*ss(f-u,.4):0)),c}function iS(s){const e=xu(s,ee.T+.002+.014),n=ee.zF-.014,i=[[e[0][0],n],...e.filter(([,r])=>r<=n),[e[e.length-1][0],n]],o=pu(mu(w0(i,.03),ee.y0,ee.base+.01,.014,3));return Tl(o,(r,a,l)=>l>ee.zF-.03&&a<ee.y0+.04?.6:0),o}function sS(s,t){const e=xu(s,ee.T+.002),n=e.reduce((P,U,F)=>Math.abs(U[0])<Math.abs(e[P][0])?F:P,0),i=[];if(t<0)for(let P=n;P>=0&&(i.push(P),!(e[P][1]>ee.zJ+.1&&e[P][0]<0));P--);else for(let P=n;P<e.length&&(i.push(P),!(e[P][1]>ee.zJ+.1&&e[P][0]>0));P++);const o=i.filter(P=>t*e[P][0]>.006),r=ee.seat-.03,a=.77,l=(a-r)/2,c=(a+r)/2,h=.2,u=.115,f=36,d=.1;let p=0;const m=[0];for(let P=1;P<o.length;P++)p+=Math.hypot(e[o[P]][0]-e[o[P-1]][0],e[o[P]][1]-e[o[P-1]][1]),m.push(p);const x=[],g=[],y=[];o.forEach((P,U)=>{const[F,k]=e[P],[$,Y]=s.n[P],it=Math.min(m[U],p-m[U]),G=it>=d?1:Math.sqrt(Math.max(0,1-(1-it/d)**2));for(let Z=0;Z<f;Z++){const st=Z/f*Math.PI*2,ut=Math.cos(st),B=Math.sin(st),H=Math.sign(ut)*Math.pow(Math.abs(ut),.5),L=Math.sign(B)*Math.pow(Math.abs(B),.5),V=c+L*l,D=(V-r)/(a-r),z=(h+(u-h)*D)/2;let X=z+H*z+(H>0?H*.022*(1-L*L):0);const tt=.08,et=c+(V-c)*G;X=tt+(X-tt)*G,x.push(F-$*X,et,k-Y*X),g.push(m[U],Z/f*.9)}});for(let P=0;P<o.length-1;P++)for(let U=0;U<f;U++){const F=P*f+U,k=(P+1)*f+U,$=(P+1)*f+(U+1)%f,Y=P*f+(U+1)%f;t<0?y.push(F,k,$,F,$,Y):y.push(F,$,k,F,Y,$)}const w=new we;w.setAttribute("position",new Ot(x,3)),w.setAttribute("uv",new Ot(g,2)),w.setIndex(y);const v=fu(w,1e-6);v.computeVertexNormals();const M=Math.floor(o.length/2),[S,E]=s.n[o[M]],_=v.attributes.normal,b=new I(x[M*f*3],x[M*f*3+1],x[M*f*3+2]);let T=0,C=1/0;for(let P=0;P<v.attributes.position.count;P++){const U=b.distanceToSquared(new I().fromBufferAttribute(v.attributes.position,P));U<C&&(C=U,T=P)}if(_.getX(T)*-S+_.getZ(T)*-E<0){const P=v.index.array;for(let U=0;U<P.length;U+=3){const F=P[U+1];P[U+1]=P[U+2],P[U+2]=F}v.index.needsUpdate=!0,v.computeVertexNormals()}return Tl(v,(P,U,F)=>.6*ss(P-t*.5,.3)*ss(U-.62,.1)*(F>-.35?1:.5)),v}function oS(s,t,e){const i=[],o=[];for(const h of[1,-1]){const u=i.length/3;for(let f=0;f<=22;f++)for(let d=0;d<=22;d++){const p=-1+2*d/22,m=-1+2*f/22,x=p*s/2*(1-.07*(1-m*m)),g=m*t/2*(1-.07*(1-p*p)),y=e/2*Math.pow(Math.max(0,(1-p**4)*(1-m**4)),.55)*h;i.push(x,g,y)}for(let f=0;f<22;f++)for(let d=0;d<22;d++){const p=u+f*23+d,m=p+1,x=p+22+2,g=p+22+1;h>0?o.push(p,m,x,p,x,g):o.push(p,x,m,p,g,x)}}const r=new we;r.setAttribute("position",new Ot(i,3)),r.setIndex(o);const a=fu(r,1e-6);a.computeVertexNormals();const l=a.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++)c[h*2]=l.getX(h)+(l.getZ(h)>0?0:.5),c[h*2+1]=l.getY(h);return a.setAttribute("uv",new xn(c,2)),Tl(a,(h,u)=>.35*ss(Math.hypot(h,u),.15)),a}function rS(s){const t=new he,e=jw(.012),[n,i]=tS(e);t.add(ue(new wt(n,s.walnut)),ue(new wt(i,s.walnut))),t.add(ue(new wt(iS(e),s.velvet)));for(const r of[-1,1]){t.add(ue(new wt(nS(e,r),s.velvet))),t.add(ue(new wt(sS(e,r),s.velvet)));const a=ue(new wt(oS(.44,.44,.15),s.pillow));a.rotation.set(-.38,r*-.62,r*-.1,"YXZ"),$t(a,r*.76,.68,-.12),t.add(a)}const o=new Xe(.021,.0125,.18,20).translate(0,-.09,0);for(const[r,a]of[[-.98,.36],[.98,.36],[-.9,-.3],[.9,-.3]]){const l=ue(new wt(o,s.walnut));l.rotation.set(a>0?-.09:.09,0,r<0?-.12:.12),$t(l,r,.178,a),t.add(l)}return t}const Qn=.4;function aS(s,t,e){const n=t*.028,i=e*.022,o=Qn-.038,r=new jh,a=new I(-.05,o,0),l=new I(n-.011,.028,i),c=new I(n+.011,.028,i),h=new I(.05,o,0);r.add(new Er(a,l)),r.add(new Pp(l,new I(n-.009,.004,i),new I(n+.009,.004,i),c)),r.add(new Er(c,h));const u=new he;return u.add(ue(new wt(new Ro(r,80,.0055,10),s.steel))),u.add($t(Ui(.13,.004,.055,s.steel),0,o+.001,0)),u}function lS(s){const t=new he,e=.06,n=.6,i=.3,o=[];for(const[a,l,c]of[[n-e,i-e,0],[-n+e,i-e,Math.PI/2],[-n+e,-i+e,Math.PI],[n-e,-i+e,Math.PI*1.5]])o.push(...sl(a,l,e,c,c+Math.PI/2,10));const r=pu(mu(o,Qn-.035,Qn,.007,3));t.add(ue(new wt(r,s.walnut)));for(const[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add($t(aS(s,a,l),a*(n-.11),0,l*(i-.075)));return t.add($t(uS(s),cS,Qn,-.01)),t.add($t(mS(s),hS,Qn,-.02)),t}const cS=-.2,hS=.24,Td=[-.2+.12,Qn+.035,-.01-.172];let Eh=null;function uS(s){const t=new he;for(const[y,w]of[[-.19,-.14],[.19,-.14],[-.19,.14],[.19,.14]])t.add($t(ue(new wt(new Xe(.016,.017,.012,20),s.rubber)),y,.006,w));const e=.012+.075;t.add($t(ue(new wt(new Yn(.44,.075,.34,3,.008),s.lacquer)),0,.012+.0375,0));const n=-.055,i=e+.003,o=new he;o.position.set(n,0,0),o.add($t(ue(new wt(new Xe(.15,.15,.022,96),s.alu)),0,i+.011,0));const r=[s.vinylEdge,s.record,s.vinylEdge],a=ue(new wt(new Xe(.1515,.1515,.0018,128),r));o.add($t(a,0,i+.022+9e-4,0)),o.add($t(ue(new wt(new Xe(.0036,.0036,.016,16),s.chrome)),0,i+.024+.008,0)),t.add(o);const l=.158,c=-.1,h=e+.046;t.add($t(ue(new wt(new Xe(.024,.026,.03,32),s.alu)),l,e+.015,c));const u=new he;u.position.set(l,0,c),u.add($t(ue(new wt(new Xe(.009,.011,.018,20),s.rubber)),0,e+.037,0));const f=new br([new I(0,h,-.01),new I(.006,h-.002,.07),new I(.012,h-.004,.15),new I(-.004,h-.007,.215)]);u.add(ue(new wt(new Ro(f,40,.0042,10),s.chrome)));const d=$t(Ui(.018,.006,.042,s.rubber),-.008,h-.012,.232);d.rotation.y=.25,u.add(d);const p=ue(new wt(new Xe(.017,.017,.032,28),s.alu));p.rotation.x=Math.PI/2,u.add($t(p,0,h,-.05)),t.add(u),t.add($t(ue(new wt(new Xe(.004,.004,.034,12),s.chrome)),l+.024,e+.017,c+.19)),t.add($t(ue(new wt(new Xe(.014,.015,.012,32),s.alu)),-.175,e+.006,.13)),t.add($t(Ui(.022,.006,.012,s.whiteMatte),-.125,e+.003,.138)),t.traverse(y=>{y.userData.deck=!0});const m=new mt(-.012,.25),x=new mt(n-l,-c);return Eh={spin:o,arm:u,record:a,armAt:y=>{let w=-1.2,v=0;for(let M=0;M<40;M++){const S=(w+v)/2,E=Math.cos(S),_=Math.sin(S),b=m.x*E+m.y*_,T=-m.x*_+m.y*E;Math.hypot(b-x.x,T-x.y)>y?v=S:w=S}return(w+v)/2},restRecord:r},t}const Ad=new Map;function Th(s){const t=`${s.id}|${s.v??0}`;let e=Ad.get(t);if(e)return e;const n=Hi,i=n.record.map.image,o=document.createElement("canvas");o.width=i.width,o.height=i.height;const r=o.getContext("2d");r.drawImage(i,0,0);const a=new ps(o);a.colorSpace=Ne,a.anisotropy=8;const l=o.width/2;if(r.fillStyle=s.tint??"#c8692c",r.beginPath(),r.arc(l,l,l*.33,0,Math.PI*2),r.fill(),s.cover){const h=new Image;h.onload=()=>{r.save(),r.beginPath(),r.arc(l,l,l*.33,0,Math.PI*2),r.clip(),r.drawImage(h,l-l*.33,l-l*.33,l*.66,l*.66),r.restore(),r.fillStyle="#d8d8d8",r.beginPath(),r.arc(l,l,l*.025,0,Math.PI*2),r.fill(),a.needsUpdate=!0},h.src=`${s.cover}?v=${s.v??0}`}const c=new yn({map:a,roughness:.3,anisotropy:.85,anisotropyMap:n.record.anisotropyMap,clearcoat:.3,clearcoatRoughness:.25,envMap:n.record.envMap});return e=[n.vinylEdge,c,n.vinylEdge],Ad.set(t,e),e}function fS(s,t=.0034,e=.003){const n=t/2,i=s/2,o=6,r=8,a=[];for(const[w,v,M]of[[i-e,i-e,0],[e-i,i-e,Math.PI/2],[e-i,e-i,Math.PI],[i-e,e-i,1.5*Math.PI]])for(let S=0;S<=o;S++){const E=M+S/o*(Math.PI/2);a.push([w+Math.cos(E)*e,v+Math.sin(E)*e,Math.cos(E),Math.sin(E)])}const l=a.length,c=[],h=[],u=[],f=[];for(let w=0;w<=r;w++){const v=w/r*Math.PI,M=Math.sin(v),S=Math.cos(v);for(const[E,_,b,T]of a){const C=E-b*n*(1-M),P=_-T*n*(1-M);c.push(C,P,n*S);const U=[b*M,T*M,S];h.push(...U),u.push(C/s+.5,P/s+.5);const F=S>=0?Math.max(.35,Math.min(1.08,1+.2*U[1]-.4*(1-U[2]))):.55;f.push(F,F,F)}}const d=[],p=(w,v)=>v*l+(w+l)%l,m=(w,v)=>{for(let M=w;M<v;M++)for(let S=0;S<l;S++)d.push(p(S,M),p(S,M+1),p(S+1,M),p(S+1,M),p(S,M+1),p(S+1,M+1))},x=(w,v)=>{const M=a.map((P,U)=>new mt(c[p(U,w)*3],c[p(U,w)*3+1])),S=di.triangulateShape(M,[]),[E,_,b]=S[0],C=(M[_].x-M[E].x)*(M[b].y-M[E].y)-(M[_].y-M[E].y)*(M[b].x-M[E].x)>0===v;for(const[P,U,F]of S)C?d.push(p(P,w),p(U,w),p(F,w)):d.push(p(P,w),p(F,w),p(U,w))},g=new we;x(0,!0),m(0,r/2);const y=d.length;return m(r/2,r),x(r,!1),g.setIndex(d),g.setAttribute("position",new Ot(c,3)),g.setAttribute("normal",new Ot(h,3)),g.setAttribute("uv",new Ot(u,2)),g.setAttribute("color",new Ot(f,3)),g.addGroup(0,y,4),g.addGroup(y,d.length-y,5),g}function b0(s,t,e=.315,n){if(n){const{cover:r,spine:a,bright:l}=dS(n),c=ue(new wt(fS(e),[a,a,a,a,r,a]));return c.userData.lit=r,c.userData.bright=l,c}const i=s.spines[t],o=s.covers[t];return ue(new wt(new nn(e,e,.0034),[i,i,i,i,o,o]))}function Rd(s,t=!1){return s.onBeforeCompile=e=>{t&&(e.uniforms.uFanRel=s.userData.fanShade.rel,e.uniforms.uFanShade=s.userData.fanShade.shade,e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform mat4 uFanRel; uniform float uFanShade;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
        if (uFanShade > 0.0) {
          // where this point of the cover is on the album in front of it, less the light's offset: inside that one's
          // shadow (its rounded outline, a little lower and to the right, softening ${ya.soft*1e3} mm out), darker
          vec2 p = vec2((vMapUv.x - 0.5) * ${va.toFixed(4)}, vMapUv.y * ${va.toFixed(4)});
          vec2 q = (uFanRel * vec4(p, 0.0, 1.0)).xy - vec2(${ya.dx.toFixed(4)}, ${ya.dy.toFixed(4)});
          vec2 b = abs(q - vec2(0.0, ${(va/2).toFixed(4)})) - vec2(${(va/2-.003).toFixed(4)});
          float d = length(max(b, 0.0)) + min(max(b.x, b.y), 0.0) - 0.003;
          float s = 1.0 - smoothstep(-0.001, ${ya.soft.toFixed(4)}, d);
          diffuseColor.rgb *= 1.0 - uFanShade * s * s;
        }`)),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        float edgeHi = (1.0 - smoothstep(0.0, 0.010, 1.0 - vMapUv.y)) * 0.10;
        float edgeSh = (1.0 - smoothstep(0.0, 0.032, vMapUv.y)) * 0.18;
        diffuseColor.rgb = (diffuseColor.rgb + edgeHi) * (1.0 - edgeSh);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance = (totalEmissiveRadiance + edgeHi * emissiveIntensityEdge(totalEmissiveRadiance)) * (1.0 - edgeSh);
        #ifdef USE_COLOR
        totalEmissiveRadiance *= vColor.rgb;           // (the fold's shading, on its glow too)
        #endif`).replace("void main() {",`float emissiveIntensityEdge(vec3 e) { return min(1.0, max(e.r, max(e.g, e.b)) * 4.0); }
void main() {`)},s.customProgramCacheKey=()=>t?"sleeve-edge-fan":"sleeve-edge",t&&(s.userData.fanShade={rel:{value:new Kt},shade:{value:0}}),s}const va=.315,ya={dx:.003,dy:-.0045,soft:.011},Cd=new Map,ol=new Map;function dS(s){const t=`${s.id}|${s.cover??""}|${s.v??0}|${s.tint??""}`;let e=ol.get(t);if(e)return e;const n=new Ce({color:new Ct(s.tint??"#3a3a38").multiplyScalar(.85),roughness:.75});let i=n,o=n;if(s.cover){const r=`${s.cover}?v=${s.v??0}`;let a=Cd.get(r);a||(a=new Ka().load(r),a.colorSpace=Ne,a.anisotropy=8,Cd.set(r,a)),i=Rd(new Ce({map:a,roughness:.7,emissive:16777215,emissiveMap:a,emissiveIntensity:0,vertexColors:!0})),o=Rd(new Ye({map:a,toneMapped:!1,vertexColors:!0}),!0)}return e={cover:i,spine:n,bright:o},ol.set(t,e),e}let rl=[];const E0=26,us={hw:.125,z0:-.07,lean:.18,N:E0,pitch:.0059,r:.0028},T0=s=>us.z0+s*us.pitch/Math.cos(us.lean),pS=T0(us.N-1)+.035;function Ma(s,t,e=!1){const n=new jh,i=.012,o=t.length,r=l=>t[(l+o)%o];let a=e?r(0).clone().lerp(r(1),.5):r(0).clone();for(let l=1;l<(e?o+1:o-1);l++){const c=r(l-1),h=r(l),u=r(l+1),f=h.clone().add(c.clone().sub(h).setLength(Math.min(i,c.distanceTo(h)/2))),d=h.clone().add(u.clone().sub(h).setLength(Math.min(i,u.distanceTo(h)/2)));n.add(new Er(a,f)),n.add(new Qh(f,h,d)),a=d}return n.add(new Er(a,e?r(0).clone().lerp(r(1),.5):r(o-1))),ue(new wt(new Ro(n,160,us.r,8),s.steel))}let al=[],Ah=null;function mS(s){const t=new he,{hw:e,r:n,lean:i}=us,o=n,r=us.z0-.006,a=pS,l=.2,c=.1,h=(p,m,x)=>new I(p,m,x),u=p=>r-Math.tan(i)*p;t.add(Ma(s,[h(-e,o,r),h(-e,l,u(l)),h(e,l,u(l)),h(e,o,r)])),t.add(Ma(s,[h(-e,o,a),h(-e,c,a),h(e,c,a),h(e,o,a)]));for(const p of[-1,1])t.add(Ma(s,[h(p*e,o,r),h(p*e,o,a)]));for(const p of[r+.03,(r+a)/2,a-.03])t.add(Ma(s,[h(-e,o,p),h(e,o,p)]));al=[];const f=[],d=Math.min(rl.length,us.N);for(let p=0;p<d;p++){const m=y=>Math.sin(p*12.9898+y*78.233)*.5,x=rl[d-1-p],g=b0(s,0,.315,x);g.userData.album=x.id,g.geometry.translate(0,.315/2,0),g.rotation.set(-(i+m(1)*.03),m(3)*.02,0),$t(g,m(4)*.008,2*n+Math.abs(m(2))*.004,T0(p)),g.userData.records=!0,t.add(g),f.unshift({mesh:g,rest:g.rotation.clone(),base:g.position.clone()})}return al=f,Ah=t,t.traverse(p=>{p.userData.records=!0}),t}const es=.25*Kw,ao=.72,Pd=-.79,To={needles:[],bar:[]},mn={W:.62,D:.46,t:.022,plinth:.1,lp:.4,back:.008,setback:.003},A0=[[.15,yS],[.13,R0],[.09,MS],[.13,_S]],gS=mn.plinth+mn.t+2*(mn.lp+mn.t)+A0.reduce((s,[t])=>s+t+2*es+mn.t,0);function Ld(s,t,e,n,i,o=[]){let r=-.286;for(let a=0;a<n;a++){const l=(a*5+i)%Pr,c=a<n-6?0:.06+(a-(n-6))*.05,h=b0(t,l,.315,o[a]);h.geometry.rotateY(Math.PI/2).translate(.0017,.315/2,0),h.rotation.z=-c,$t(h,r,e,-.035),s.add(h),r+=.0052/Math.cos(c)+(a>=n-6?4e-4:0)}}function xS(s){To.needles=[],To.bar=[];const t=new he,{W:e,D:n,t:i,plinth:o}=mn,r=gS,a=e-2*i;t.add($t(Ui(e-.06,o,n-.06,s.shadowGap),0,o/2,-.01));for(const d of[-1,1])t.add($t(Ui(i,r-o,n,s.lacquer),d*(e/2-i/2),(r+o)/2,0));t.add($t(Ui(a,r-o-i,mn.back,s.lacquer),0,(r+o)/2,-n/2+mn.back/2));const l=d=>t.add($t(Ui(a,i,n-mn.back,s.lacquer),0,d+i/2,mn.back/2));let c=o;l(c),c+=i;const h=rl.slice(E0);Ld(t,s,c,44,1,h.slice(40)),c+=mn.lp,l(c),c+=i,Ld(t,s,c,40,4,h.slice(0,40)),c+=mn.lp,l(c),c+=i;const u=a-2*es,f=n-mn.back-mn.setback-.03;for(const[d,p]of A0){const m=new he;for(const[g,y]of[[-u/2+.04,-f/2+.04],[u/2-.04,-f/2+.04],[-u/2+.04,f/2-.04],[u/2-.04,f/2-.04]])m.add($t(ue(new wt(new Xe(.012,.014,es,16),s.rubber)),g,es/2,y));m.add($t(ue(new wt(new Yn(u,d,f,2,.003),s.whiteMatte)),0,es+d/2,0));const x=new he;if($t(x,0,es+d/2,f/2),p(x,u,d),m.add(x),$t(m,0,c,n/2-mn.setback-f/2),t.add(m),p===R0){const g=new Hp(gu.warm,.012,.9,2);g.layers.enable(5),$t(g,-u/2+.1,c+es+d/2,n/2+.04),t.add(g)}c+=d+2*es,l(c),c+=i}return t}const ll=(s,t,e)=>{const n=ue(new wt(new Xe(t,t*1.04,e,40),s.alu));return n.rotation.x=Math.PI/2,n};function vS(s,t,e){return new wt(new Ue(t,e),s.glass)}function yS(s,t,e){const n=Hi;s.add($t(ll(n,.018,.012),-t/2+.05,-.01,.006));const i=vS(n,.16,.012);s.add($t(i,.06,.02,8e-4));for(let o=0;o<12;o++)To.bar.push(fs(s,-.01+o*.0125,.02,.001,o<7?"amber":"red",.0028,o<7?.45:.08));fs(s,t/2-.04,-.035,5e-4,"red",.0022);for(let o=0;o<6;o++)s.add($t(new wt(new Ue(.22,.0016),n.shadowGap),.05,-.03-o*.006,6e-4))}function R0(s,t,e){const n=Hi;for(const i of[0,1]){const o=-t/2+.06+i*.088;s.add($t(new wt(new Ue(.084,.056),n.trim),o,.012,6e-4)),s.add($t(new wt(new Ue(.076,.048),n.vu),o,.012,.0012)),S0(s,o,.012,.0012,.08,"warm",.16);const r=new wt(new Ue(9e-4,.03).translate(0,.027,0),new Ye({color:"#140f08",toneMapped:!1}));r.position.set(o,.012-.024-.0024,.0016),r.rotation.z=ao,s.add(r),To.needles.push(r)}s.add($t(ll(n,.03,.022),t/2-.065,.006,.011));for(let i=0;i<3;i++)s.add($t(ll(n,.009,.012),-.01+i*.038,-.04,.006));for(let i=0;i<4;i++)fs(s,.03+i*.016,.042,5e-4,"green",.0018,i===1?1:.06);fs(s,-t/2+.02,-.045,5e-4,"red",.0022)}function MS(s,t,e){const n=Hi;s.add($t(new wt(new Ue(.29,.038),n.trim),-.045,.01,6e-4)),s.add($t(new wt(new Ue(.28,.03),n.dial),-.045,.01,.0012)),S0(s,-.045,.01,.0012,.22,"warm",.1),s.add($t(ll(n,.02,.018),t/2-.05,.002,.009)),fs(s,-t/2+.03,-.028,5e-4,"red",.002),fs(s,-t/2+.045,-.028,5e-4,"green",.002)}function _S(s,t,e){const n=Hi;s.add($t(new wt(new Ue(.16,.08),n.trim),-t/2+.1,.012,6e-4));const i=new wt(new Ue(.15,.072),new Ye({color:new Ct(.05,.04,.03),toneMapped:!1}));s.add($t(i,-t/2+.1,.012,.001));const o=new wt(new Ue(.1,.06),new Ye({color:new Ct(.3,.24,.16),toneMapped:!1}));s.add($t(o,-t/2+.1,.012,.0013));for(const r of[-1,1])s.add($t(new wt(new Oi(.011,20),new Ye({color:"#050505"})),-t/2+.1+r*.026,.014,.0016));s.add($t(new wt(new Ue(.15,.072),n.smoked),-t/2+.1,.012,.002));for(let r=0;r<2;r++)for(let a=0;a<12;a++){const l=a<8?"green":a<10?"amber":"red";fs(s,.02+a*.0105,.035-r*.012,5e-4,l,.0026,a<5-r?.5:.05)}for(let r=0;r<6;r++)s.add($t(Ui(.022,.012,.006,n.whiteMatte),.025+r*.026,-.03,.003));fs(s,t/2-.025,.04,5e-4,"red",.0022)}const Rh={W:.44,D:.5,H:1.92,plinth:.03};function Id(s,t){const e=new he;e.add(ue(new wt(ls([[.098*t,-.001],[.098*t,.004],[.112*t,.0045],[.115*t,.002],[.115*t,-.001]]),s.ring)));const n=sl(.091*t,5e-4,.0072*t,Math.PI,0,14).map(([r,a])=>[r,a]);e.add(ue(new wt(ls(n),s.rubber)));const i=[];for(let r=0;r<=12;r++){const a=r/12;i.push([.084*t-.049*t*a,-.044*t*Math.pow(a,.85)])}e.add(ue(new wt(ls(i.reverse()),s.paper)));const o=sl(0,-.044*t,.035*t,Math.PI/2,0,10).map(([r,a])=>[r*1,-.044*t+(a+.044*t)*.55]);e.add(ue(new wt(ls(o.reverse()),s.cap)));for(let r=0;r<8;r++){const a=r/8*Math.PI*2+.3,l=new wt(new Xe(.0032*t+8e-4,.0032*t+8e-4,.002,10),s.trim);l.rotation.x=Math.PI/2,e.add($t(l,Math.cos(a)*.1065*t,Math.sin(a)*.1065*t,.005))}return e}function wS(s,t){const e=new he,n=i=>i.map(([o,r])=>[o*t,r*t]);return e.add(ue(new wt(ls(n([[.014,-.004],[.017,0],[.022,.003],[.046,.0045],[.05,.0025],[.05,-.001]])),s.faceplate))),e.add(ue(new wt(ls(n([[.047,.0046],[.05,.0028],[.0505,-.001]])),s.ring))),e.add(ue(new wt(ls(n(sl(0,0,.0145,Math.PI/2,0,12).map(([i,o])=>[i,o*.8-.001]).reverse())),s.silk))),e}function Dd(s){const t=new he,{W:e,D:n,H:i,plinth:o}=Rh;t.add($t(Ui(e-.04,o,n-.04,s.shadowGap),0,o/2,0));const r=ue(new wt(new nn(e,i,n),[s.lacquer,s.lacquer,s.lacquer,s.lacquer,s.invisible,s.lacquer]));t.add($t(r,0,o+i/2,0));const a=[[1.7,.06,"t"],[1.47,.085,"m"],[1.14,.13,"w"],[.8,.13,"w"],[.46,.13,"w"],[.17,.05,"p"]],l=new Ir([new mt(-e/2,0),new mt(e/2,0),new mt(e/2,i),new mt(-e/2,i)]);for(const[h,u]of a){const f=new yo;f.absarc(0,h,u,0,Math.PI*2,!0),l.holes.push(f)}const c=ue(new wt(new tu(l,48),s.lacquer));t.add($t(c,0,o,n/2));for(const[h,,u]of a){let f;if(u==="w")f=Id(s,1.3);else if(u==="m")f=Id(s,.85);else if(u==="t")f=wS(s,1.3);else{f=new he,f.add(ue(new wt(ls([[.058,-.001],[.058,.0025],[.05,.005],[.045,0],[.0425,-.012],[.0425,-.18]]),s.rubber)));const d=new wt(new Oi(.044,24),s.hole);f.add($t(d,0,0,-.18))}t.add($t(f,0,o+h,n/2))}t.add($t(new wt(new Ue(e-.02,i-.02),s.hole),0,o+i/2,n/2-.2));for(const h of[-1,1])for(const u of[.12,.7,1.3,1.85])t.add($t(new wt(new Oi(.0045,14),s.hole),h*(e/2-.025),o+u,n/2+6e-4));return t}function C0(s,t,e,n){const i=new I(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));return s.clone().addScaledVector(i,-n)}const yc=s=>Math.atan2(-s.x,-s.z),eo=s=>new Kt().makeRotationY(_e.degToRad(s.rot)).setPosition(s.x,0,s.z),Ae=(s,t)=>new I(...t).applyMatrix4(s);function _a(s,t,e,n,i){const o=s.clone().sub(t),r=o.length();return o.divideScalar(r),{p:[t.x,t.y,t.z],d:[o.x,o.y,o.z],cInner:Math.cos(n),cOuter:Math.cos(n+i),i:e*r*r}}function SS(s,t=[]){Hi??(Hi=_0());const e=Hi;rl=t.filter(E=>!E.off&&E.tracks.length+(E.cover?1:0)>0),Eh=null,Ah=null,al=[];const n=()=>new Set([...Object.values(e).flat(),...Object.values(du()),...[...ol.values()].flatMap(E=>[E.cover,E.spine,E.bright])]),i=new he,o=new Map((s.pieces??[]).map(E=>[E.id,E])),r=[],a=[],l=[],c=s.ceiling-.03;let h=null,u=null,f=null;const d=[];let p=null,m=null,x=null;const g={couch:()=>rS(e),table:()=>lS(e),cabinet:()=>xS(e),speakerL:()=>Dd(e),speakerR:()=>Dd(e),piano:()=>(h=Bw(),h.group)},y={couch:.45,table:.22,cabinet:.8,speakerL:.8,speakerR:.8,piano:.22},w=(E,_)=>new I(..._).transformDirection(E);for(const[E,_]of Object.entries($w)){const b=o.get(E);if(!b)continue;const T=eo(b),C=g[E]();C.matrixAutoUpdate=!1,C.matrix.copy(T),C.userData.piece=E,C.traverse(U=>{U.userData.piece=E}),i.add(C);const P=_e.degToRad(b.rot);if(l.push({x:b.x,z:b.z,c:Math.cos(P),s:Math.sin(P),hw:_.w/2,hd:_.d/2}),a.push({x:b.x,z:b.z,rot:b.rot,hw:_.w/2,hd:_.d/2,k:y[E]}),E==="couch"&&(p=_a(Ae(T,[0,.5,-.02]),Ae(T,[0,c,.55]),xa.couch,.32,.18),r.push(p),m=Ae(T,[0,.45,0])),E==="table"&&r.push(_a(Ae(T,[0,Qn+.08,0]),Ae(T,[0,c,.85]),xa.table,.2,.16)),E==="cabinet"&&r.push(_a(Ae(T,[0,.75,-.05]),Ae(T,[0,c,2.2]),xa.stereo,.27,.2)),E==="piano"&&r.push(_a(Ae(T,[0,.8,.3]),Ae(T,[.55,c,1.05]),xa.piano,.42,.2)),E==="couch"){const U=w(T,[0,0,1]);for(const F of[0])d.push({eye:Ae(T,[F,1.08,.36]),yaw:yc(U),pitch:-.06,stand:Ae(T,[F*.8,hs,.86]),standYaw:yc(U)})}if(E==="piano"){const U=w(T,[0,0,-1]),F=Ae(T,fo.look),k=yc(U);f={eye:C0(F,k,fo.pitch,fo.near),yaw:k,pitch:fo.pitch,stand:Ae(T,[0,hs,Kn.z+.62]),standYaw:k,look:F},u=Ae(T,Uw);const $=Ae(T,[0,0,Kn.z]);l.push({x:$.x,z:$.z,c:Math.cos(P),s:Math.sin(P),hw:Kn.w/2,hd:Kn.d/2}),a.push({x:$.x,z:$.z,rot:b.rot,hw:Kn.w/2,hd:Kn.d/2,k:.3})}}const v=o.get("table"),M=o.get("cabinet");if(v&&M){const E=eo(v),_=eo(M),[b,,T]=Td,C=[Ae(E,Td),Ae(E,[b+.01,Qn+.0034,T-.04]),Ae(E,[b+.05,Qn+.0034,-.27]),Ae(E,[b+.07,Qn+.001,-.302]),Ae(E,[b+.08,Qn-.05,-.318]),Ae(E,[b+.1,.16,-.36]),Ae(E,[b+.12,.0034,-.47])],P=C[C.length-1],U=Ae(_,[-.62/2-.02,.0034,-.46/2+.06]);for(let Y=1;Y<=3;Y++){const it=Y/4,G=P.clone().lerp(U,it),Z=U.clone().sub(P).normalize();G.addScaledVector(new I(-Z.z,0,Z.x),Math.sin(Y*2.1)*.05),G.y=.0034,C.push(G)}C.push(U,Ae(_,[-.62/2+.06,.0034,-.46/2-.013]),Ae(_,[-.62/2+.14,.12,-.46/2-.013]),Ae(_,[-.62/2+.16,.3,-.46/2-.013]));const F=new br(C,!1,"centripetal"),k=new br(F.getSpacedPoints(500).map(Y=>Y.y<.0036?Y.setY(.0036):Y),!1,"centripetal"),$=ue(new wt(new Ro(k,700,.0032,8),e.cord));$.userData.piece="cord",i.add($)}for(const E of r){const _=Math.acos(E.cOuter),b=Math.acos(E.cInner),T=new lx(Dr,E.i*Math.PI,0,_,1-b/_,2);T.position.set(...E.p),T.target.position.set(E.p[0]+E.d[0],E.p[1]+E.d[1],E.p[2]+E.d[2]),T.castShadow=!0,T.shadow.mapSize.set(2048,2048),T.shadow.camera.near=.4,T.shadow.camera.far=7,T.shadow.bias=-2e-4,T.shadow.normalBias=.012,T.shadow.radius=4,T.layers.enable(5),i.add(T,T.target),E===p&&m&&(x={centre:m,light:T,base:T.intensity})}const S=[];return i.traverse(E=>{E.isMesh&&S.push(E)}),i.updateMatrixWorld(!0),{group:i,lamps:r,feet:a,solids:l,meshes:S,piano:h,soundAt:u,couchSeats:d,pianoSeat:f,couch:x,records:al,tableMatrix:o.get("table")?eo(o.get("table")):null,deck:o.get("table")?Eh:null,stand:o.get("table")?Ah:null,meters:{needles:[...To.needles],bar:[...To.bar]},speakers:o.get("speakerL")&&o.get("speakerR")?[Ae(eo(o.get("speakerL")),[0,1.25,Rh.D/2]),Ae(eo(o.get("speakerR")),[0,1.25,Rh.D/2])]:null,dispose(){const E=n();i.traverse(_=>{var T;const b=_;if(b.isMesh||_.isSprite){(T=b.geometry)==null||T.dispose();for(const C of Array.isArray(b.material)?b.material:[b.material])C&&!E.has(C)&&C.dispose()}_.isSpotLight&&_.shadow.dispose()})}}}let Nd=null;function bS(s,t,e,n,i,o){const r=[];t.traverse(a=>{var c;const l=a.material;(c=l==null?void 0:l.userData)!=null&&c.lens&&!r.includes(l)&&r.push(l)}),r.forEach(a=>a.color.multiplyScalar(14)),Hi??(Hi=_0()),Nd=zd(s,t,e,n,i,Zw(Hi),Nd),o&&(Ud=zd(s,t,o,n,i,Object.values(du()),Ud)),r.forEach(a=>a.color.multiplyScalar(1/14))}let Ud=null;function zd(s,t,e,n,i,o,r){const a=new iu(256,{type:In}),l=new Vp(.05,60,a);for(const d of l.children)for(const p of i)d.layers.enable(p);l.position.copy(e),l.updateMatrixWorld(!0);const c=n.map(d=>d.visible);n.forEach(d=>{d.visible=!1});const h=t.background;t.background=null,l.update(s,t),t.background=h,n.forEach((d,p)=>{d.visible=c[p]});const u=new vh(s),f=u.fromCubemap(a.texture);u.dispose(),a.dispose(),r==null||r.dispose();for(const d of o)d.isMeshStandardMaterial&&(d.envMap=f.texture,d.envMapIntensity=1,d.needsUpdate=!0);return f}const xr=class xr{constructor(t,e,n,i,o,r){R(this,"cat",new Map);R(this,"arch");R(this,"placed",[]);R(this,"items",[]);R(this,"furniture",null);R(this,"furnLight",new rw);R(this,"migrated",!1);R(this,"interior",null);R(this,"outside",null);R(this,"sharp",new Map);R(this,"small",new Map);R(this,"baked");R(this,"labels");R(this,"outsideKey","");R(this,"blank",new So(new Uint8Array([128,128,128,255]),1,1));R(this,"onRebuilt",()=>{});R(this,"prepTex",t=>(t.colorSpace=Ne,t.anisotropy=this.aniso,t.minFilter=rs,t));R(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);R(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=o,this.aniso=r,this.labels=new _w(o,r),this.blank.needsUpdate=!0}async loadSmall(){const t=new Ka;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(xr.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new Ka().loadAsync(`${xr.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var c;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(h=>[h.id,h])),this.arch=E_(t),j_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=U_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(h=>!i.includes(h))),this.placed=e,this.items=n,this.baked=uw(this.arch,e,this.baked);const o=this.interior,r=this.furniture,a=SS(t,this.data.albums);this.furniture=a,this.furnLight.setLamps(a.lamps,a.feet),this.interior=Tw(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.furnLight,a.lamps),this.interior.group.add(a.group),this.scene.add(this.interior.group),o&&(this.scene.remove(o.group),o.dispose()),r==null||r.dispose();const l=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);l!==this.outsideKey&&((c=this.outside)==null||c.dispose(),this.outside=mw(this.scene,this.font,this.aniso,t),this.outsideKey=l),this.light(),this.onRebuilt(i)}light(){const t=this.furniture,e=this.renderer;this.scene.updateMatrixWorld(!0),this.furnLight.render(e,this.scene);const n=this.data.layout,i=(n.pieces??[]).find(c=>c.id==="couch"),o=(n.pieces??[]).find(c=>c.id==="table"),r=n.outline,a=i&&o?new I((i.x+o.x)/2,.95,(i.z+o.z)/2):new I((r.x0+r.x1)/2,1.2,(r.z0+r.z1)/2);Sh.value=0;const l=(n.pieces??[]).find(c=>c.id==="piano");bS(e,this.scene,a,[t.group],[0,1,il],l?new I(l.x,1.3,l.z):void 0),Sh.value=1,e.shadowMap.needsUpdate=!0}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};R(xr,"url",(t,e)=>`art/${t}-${e}.jpg`);let po=xr;class ES{constructor(t,e){R(this,"target");R(this,"texMat",new Kt);R(this,"cam",new tn);R(this,"plane",new Ri);R(this,"clip",new Ee);R(this,"q",new Ee);R(this,"n",new I(0,1,0));R(this,"p0",new I(0,0,0));R(this,"camPos",new I);R(this,"rot",new Kt);R(this,"look",new I);R(this,"view",new I);R(this,"tgt",new I);this.target=new Ln(t,e,{type:In,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const o=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+o[8])/o[0],this.q.y=(Math.sign(this.clip.y)+o[9])/o[5],this.q.z=-1,this.q.w=(1+o[10])/o[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),o[2]=this.clip.x,o[6]=this.clip.y,o[10]=this.clip.z+1,o[14]=this.clip.w;const r=t.getRenderTarget(),a=e.background,l=t.getClearColor(new Ct),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(r),t.setClearColor(l,c),e.background=a}}let cl=null;function Fd(s){return cl?(parent.postMessage(s,cl),!0):!1}const TS=()=>!!cl;addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(cl=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class AS{constructor(){R(this,"el");R(this,"tools");R(this,"low");R(this,"high");R(this,"cap");R(this,"frame");R(this,"open",!1);R(this,"busy",!1);R(this,"work",null);R(this,"px",[1,1]);R(this,"crop",[0,0,1,1]);R(this,"onClose",()=>{});R(this,"onShow",()=>{});R(this,"reserveRight",0);R(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(sw(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${kd(ja(t))}</i>`],n=[t.medium,Qa(t),t.year].filter(Boolean).map(i=>kd(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,o,r,a]=this.crop,l=this.px[0]*(r-i),c=this.px[1]*(a-o),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),p=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const m=d/(r-i),x=p/(a-o);for(const g of[this.low,this.high])Object.assign(g.style,{width:`${m}px`,height:`${x}px`,left:`${-i*m}px`,top:`${-o*x}px`})}}const kd=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),RS=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),CS=.62,Mc=5,Od=.18;class PS{constructor(t=!0){R(this,"pic",null);R(this,"lit",null);R(this,"held",null);R(this,"dark",0);R(this,"veil");R(this,"vScene",new qh);R(this,"vCam",new wl(-1,1,1,-1,0,1));R(this,"hintEl");R(this,"hinted",null);R(this,"hintDone",!1);R(this,"v",new I);R(this,"f",new I);this.veil=new wt(new Ue(2,2),new Ye({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}hold(t,e=.72){this.held=t?{t,k:e}:null}update(t,e,n,i,o){if(this.held){this.pic=null,this.lit=this.held.t,this.dark+=(this.held.k-this.dark)*(1-Math.exp(-t/Od));return}let r=null,a=1/0,l=1/0;if(o){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.centre,m=d.normal,x=p.x-u.x,g=p.y-u.y,y=p.z-u.z,w=Math.hypot(x,g,y);if(w>d.reach||m[0]*-x+m[2]*-y<=0)continue;const v=Math.acos(Math.min(1,(x*f.x+g*f.y+y*f.z)/w)),M=Math.atan2(d.size*.5,w)+.17;if(v>M||Ls(i,u.x,u.z,p.x+m[0]*.05,p.z+m[2]*.05))continue;const S=v/M;S<a&&(a=S,r=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=S)}this.pic&&l<a+.15&&(r=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??r)}this.pic=r,r&&(this.lit=r);let c=0;if(r){const u=r.centre.distanceTo(e.getWorldPosition(this.v)),f=r.reach,d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));c=CS*p*p*(3-2*p)}this.dark+=(c-this.dark)*(1-Math.exp(-t/Od)),this.dark<.003&&!r&&(this.lit=null),!this.hintDone&&r&&r.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=r);const h=!!this.hinted&&r===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const o=i.meshes;for(const l of o)l.layers.enable(Mc);const r=n.layers.mask,a=e.background;n.layers.set(Mc),e.background=null,t.render(e,n),e.background=a,n.layers.mask=r;for(const l of o)l.layers.disable(Mc);t.autoClear=!0}}const LS=4.5,IS=380,DS=10,NS=1.8;class US{constructor(t,e,n,i,o,r){R(this,"ndc",new mt);R(this,"ray",new Ts);R(this,"v",new I);R(this,"d",null);R(this,"trail",[]);R(this,"pts",new Map);R(this,"two",null);R(this,"spent",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=o,this.enabled=r,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>{this.lift(a.pointerId),this.d=null}),t.addEventListener("lostpointercapture",a=>{var l;this.pts.has(a.pointerId)&&this.lift(a.pointerId),((l=this.d)==null?void 0:l.id)===a.pointerId&&(this.d=null)}),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}at(t){const e=this.canvas.getBoundingClientRect();return this.ndc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new I(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;for(const l of[...this.pts.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.d&&!this.canvas.hasPointerCapture(this.d.id)&&(this.d=null),t.preventDefault(),(a=getSelection())==null||a.removeAllRanges(),this.pts.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.canvas.setPointerCapture(t.pointerId),this.pts.size===2&&!this.spent){this.d=null,this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.two=this.pair(),this.trail=[];return}if(this.pts.size>1||this.spent||this.d)return;this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),o=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),r=o||n.kind==="wall"&&(n.dist??99)<=LS?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:o?"ground":"turn",grip:r,p0:o?i:null,moved:!1,lx:t.clientX,ly:t.clientY},this.trail=[]}pair(){const[t,e]=[...this.pts.values()];return{dist:Math.max(24,Math.hypot(t.x-e.x,t.y-e.y)),mx:(t.x+e.x)/2,my:(t.y+e.y)/2}}lift(t){this.pts.delete(t)&&(this.two&&this.pts.size<2?(this.two=null,this.spent=this.pts.size>0,this.coastOn("both")):this.pts.size||(this.spent=!1))}coastOn(t){const e=performance.now(),n=this.trail.filter(l=>e-l.t<120);if(!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let o=0,r=0,a=0;for(const l of n)o+=l.dx,r+=l.dz,a+=l.dyaw;t!=="turn"&&(this.player.glide.set(o/i,r/i),this.player.glide.length()>7&&this.player.glide.setLength(7)),t!=="ground"&&(this.player.spin=_e.clamp(a/i,-7,7))}move(t){const e=this.pts.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY),this.two&&e){t.preventDefault();const a=this.pair(),l=this.two,c=performance.now(),h=NS*Math.log(a.dist/l.dist),u=_e.degToRad(this.camera.fov)/this.canvas.clientHeight,f=this.player.pos.x,d=this.player.pos.z;h&&this.player.drag(-Math.sin(this.player.yaw)*h,-Math.cos(this.player.yaw)*h);const p=(a.mx-l.mx)*u;for(this.player.turnBy(p,(a.my-l.my)*u),this.trail.push({t:c,dx:this.player.pos.x-f,dz:this.player.pos.z-d,dyaw:p});this.trail.length&&c-this.trail[0].t>120;)this.trail.shift();this.two=a;return}const n=this.d;if(!n||t.pointerId!==n.id)return;t.preventDefault(),!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)>DS&&(n.moved=!0);const i=t.clientX-n.lx,o=t.clientY-n.ly;if(n.lx=t.clientX,n.ly=t.clientY,!n.moved)return;const r=performance.now();if(n.mode==="ground"&&n.p0){const a=this.floorAt(this.at(t));if(!a)return;let l=n.p0.x-a.x,c=n.p0.z-a.z;const h=Math.hypot(l,c);h>1.2&&(l*=1.2/h,c*=1.2/h);const u=this.player.pos.x,f=this.player.pos.z;this.player.drag(l,c),this.trail.push({t:r,dx:this.player.pos.x-u,dz:this.player.pos.z-f,dyaw:0})}else{const a=_e.degToRad(this.camera.fov)/this.canvas.clientHeight*n.grip;this.player.turnBy(i*a,o*a),this.trail.push({t:r,dx:0,dz:0,dyaw:i*a})}for(;this.trail.length&&r-this.trail[0].t>120;)this.trail.shift()}end(t){const e=!!this.two;if(this.lift(t.pointerId),e)return;const n=this.d;if(!(!n||t.pointerId!==n.id)){if(this.d=null,!n.moved&&performance.now()-n.t<IS){this.tap(this.pick(this.at(t)));return}this.coastOn(n.mode)}}}const zS=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],FS=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],P0=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],Lr=.12,vu=[58,44,40],_c=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},kS=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function Al(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,o=s[n],r=s[n+1];return[0,1,2].map(a=>kS(_c(o[a])+(_c(r[a])-_c(o[a]))*i))}function hl([s,t,e]){const n=s/255,i=t/255,o=e/255,r=Math.max(n,i,o),a=Math.min(n,i,o),l=(r+a)/2,c=r-a;if(!c)return[0,0,l];const h=l>.5?c/(2-r-a):c/(r+a);let u;return r===n?u=(i-o)/c+(i<o?6:0):r===i?u=(o-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function OS(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),o=e-n/2;let r=0,a=0,l=0;return s<60?(r=n,a=i):s<120?(r=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(r=i,l=n):(r=n,l=i),[Math.round((r+o)*255),Math.round((a+o)*255),Math.round((l+o)*255)]}function BS(s,t){const[e,n,i]=hl(s);return n<.02?s:OS(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const yu=s=>Al(zS,s.skin),HS=s=>Al(FS,s.mouthColor),VS=s=>Al(P0,(s.cheeks-Lr)/(1-Lr)),GS=s=>{const t=Math.max(0,Math.min(1,s.cheeks/Lr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=Al(P0,t/16);s.push(`rgb(${e},${n},${i}) ${((Lr+t/16*(1-Lr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const WS={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:hl(vu)[0]/360,hat:"none"},jt=16,ne=16,ce=16,Zo=[26,32,42],Bd=[236,240,246],An=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Nt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:vu,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Ai=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Hd=2.2,XS=18,qS=6,Vd=.55;function YS(s){const t=Hd*Math.pow(XS/Hd,Math.max(0,Math.min(1,s))),e=jt/2,n=ne/2,i=ce/2;return(o,r,a)=>{const l=Math.abs(o+.5-e)/e,c=Math.abs(r+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=ce-qS){const f=h<=Vd?1:((1-h)/(1-Vd))**(1/t);return u<=f}return h+u**t<=1}}function $S(s){const t=yu(s),e=YS(s.shape),n=new Map,i=(B,H,L)=>`${B},${H},${L}`;let o=null;const r=new Set,a=new Set;let l;const c=(B,H,L,V)=>{const D=i(B,H,L);n.set(D,l?{x:B,y:H,z:L,c:V,part:l}:{x:B,y:H,z:L,c:V}),o&&o.add(D)},h=(B,H,L,V)=>{const D=i(B,H,L);n.set(D,{x:B,y:H,z:L,c:V}),r.delete(D),a.delete(D)},u=(B,H,L)=>n.has(i(B,H,L));for(let B=0;B<jt;B++)for(let H=0;H<ne;H++)for(let L=0;L<ce;L++)e(B,H,L)&&c(B,H,L,t);const f=(B,H)=>{for(let L=ne-1;L>=0;L--)if(u(B,L,H))return L;return-1},d=(B,H)=>{for(let L=ce-1;L>=0;L--)if(u(B,H,L))return L;return-1},p=(B,H,L)=>{if(B<0||B>=jt||H<0||H>=ne)return;const V=d(B,H);V>=0&&c(B,H,V,L)},m=jt/2,x=1+Ai(s.eyeSize,3),g=1+Ai(s.eyeSize,3),y=Math.max(1,6-x),w=1+Ai(s.eyeSpacing,y-1),v=8+Ai(s.eyeHeight,4)-2-Math.floor((g-1)/2),M=v+g-1,S=[[m-w-x,m-w-1],[m+w,m+w+x-1]],E=x>=3&&g>=3;for(const[B,H]of S)for(let L=B;L<=H;L++)for(let V=v;V<=M;V++){const D=!!(E&&L>B&&L<H&&V>v&&V<M);l=E&&!D?"eye":"pupil",p(L,V,E?D?Zo:Bd:Zo)}l=void 0,o=r;const _=Ai(s.browWeight,3),b=M+2+(Ai(s.browHeight,4)-2);if(_>0){l="brow";for(const[B,H]of S)for(let L=B-1;L<=H+1;L++)for(let V=0;V<_;V++)p(L,b+V,Nt.hair);l=void 0}o=null;const T=Ai(s.noseLength,8),C=5+(Ai(s.noseHeight,6)-3);if(T>0){const B=An(t,.9);l="nose";for(let H=m-1;H<=m;H++)for(let L=C;L<=C+1;L++){const V=d(H,L);if(!(V<0))for(let D=1;D<=T;D++)c(H,L,V+D,B)}l=void 0}const P=2*Ai(s.mouthWidth,4),U=3;if(P>0){const B=HS(s),H=P>=6?2:1;l="mouth";for(let L=m-P/2;L<=m+P/2-1;L++)for(let V=U;V<U+H;V++)p(L,V,B);l=void 0}const F=GS(s);if(F>0){const B=VS(s),H=(z,X)=>z[0]===X[0]&&z[1]===X[1]&&z[2]===X[2],L=v-1,V=U+(P>=6?2:1),D=Math.max(V+.5,L-.5);for(const[z,X]of S){const tt=X<m,et=(z+X)/2,xt=et+.35*((tt?m-1.5:m+.5)-et);for(let _t=Math.floor(xt-2);_t<=Math.ceil(xt+2);_t++)if(!(tt?_t>m-2:_t<m+1))for(let lt=V;lt<=L;lt++){const pt=1-((_t-xt)/1.9)**2-((lt-D)/1.3)**2;if(pt<=0)continue;const ft=d(_t,lt),yt=ft>=0?n.get(i(_t,lt,ft)):void 0;if(!yt||yt.part||!H(yt.c,t))continue;const vt=F*.72*Math.pow(pt,.8),Gt=[0,1,2].map(Bt=>Math.round(t[Bt]+(B[Bt]-t[Bt])*vt));n.set(i(_t,lt,ft),{x:_t,y:lt,z:ft,c:Gt,blend:t})}}}const k=(B,H=1)=>{for(let L=0;L<jt;L++)for(let V=0;V<ce;V++){const D=f(L,V);if(!(D<0))for(let z=1;z<=H;z++)c(L,D+z,V,B)}},$=(B,H,L)=>{const V=Math.ceil(H)+1;for(let D=m-V;D<m+V;D++)for(let z=m-V;z<m+V;z++)Math.hypot(D+.5-m,z+.5-m)<=H&&c(D,B,z,L)},Y=(B,H,L,V)=>{for(let D=B;D<=H;D++)for(let z=0;z<jt;z++)for(let X=0;X<ce;X++)Math.hypot(z+.5-m,X+.5-m)<=L&&c(z,D,X,V)},it=(B,H,L,V,D)=>{const z=Math.ceil(V)+1;for(let X=Math.floor(B-z);X<=B+z;X++)for(let tt=Math.floor(H-z);tt<=H+z;tt++)for(let et=Math.floor(L-z);et<=L+z;et++)Math.hypot(X+.5-B,tt+.5-H,et+.5-L)<=V&&c(X,tt,et,D)},G=(B,H,L,V=1)=>{for(let D=B;D<=H;D++)for(let z=0;z<jt;z++){const X=d(z,D);X>=0&&c(z,D,X+V,L)}};switch(o=a,s.hat){case"birthday":{for(let B=0;B<9;B++)Y(ne+B,ne+B,5.4-B*.62,B%2?Nt.partyAlt:Nt.party);it(m,ne+9.5,m,1.6,Bd);break}case"mickey":{const B=f(m,m)+2;for(const H of[-.5,jt+.5])it(H,B,m,4.2,Zo);break}case"tophat":{$(ne,8.6,Nt.felt),Y(ne+1,ne+10,5,Nt.felt),Y(ne+3,ne+4,5.05,Nt.band);break}case"gangster":{$(ne,9.6,Nt.felt),Y(ne+1,ne+5,5,Nt.felt),Y(ne+1,ne+2,5.05,Nt.band);break}case"goggles":{G(v,M,Nt.brass);for(const[B,H]of S)for(let L=B;L<=H;L++)for(let V=v;V<=M;V++){const D=d(L,V);D>=0&&c(L,V,D+1,Nt.glass)}break}case"pilot":{k(Nt.leather,2),G(ne-4,ne-3,Nt.brass);for(let B=ne-4;B>=4;B--)for(const H of[0,1,jt-2,jt-1])for(let L=0;L<ce;L++)u(H,B,L)&&c(H,B,L,Nt.leather);break}case"model":{$(ne,12.5,Nt.partyAlt),Y(ne+1,ne+2,4.4,Nt.partyAlt);break}case"curls":{let B=7;const H=()=>(B=(B*1103515245+12345)%2147483648)/2147483648;for(let L=-2;L<jt+2;L++)for(let V=-2;V<ce+2;V++){const D=f(Math.max(0,Math.min(jt-1,L)),Math.max(0,Math.min(ce-1,V)));D<0||(H()<.6&&c(L,D+1,V,Nt.hair),H()<.34&&c(L,D+2,V,Nt.hair),H()<.14&&c(L,D+3,V,Nt.hair))}break}case"bob":{k(Nt.hair,2);for(let B=M+1;B<ne;B++)for(let H=0;H<jt;H++)for(let L=0;L<ce;L++)(H<=1||H>=jt-2||L<=1)&&u(H,B,L)&&c(H,B,L,Nt.hair);break}case"pigtails":{k(Nt.hair,2);for(const B of[-1.5,jt+1.5])it(B,ne-5,m,3.4,Nt.hair);break}case"crown":{const B=Nt.gold,H=An(B,1.15),L=Nt.band,V=(X,tt)=>{const et=Math.hypot(X+.5-m,tt+.5-m);return et>=5.1&&et<=6.9};let D=0;for(let X=0;X<jt;X++)for(let tt=0;tt<ce;tt++)V(X,tt)&&(D=Math.max(D,f(X,tt)+3));for(let X=0;X<jt;X++)for(let tt=0;tt<ce;tt++){if(!V(X,tt))continue;const et=f(X,tt);if(!(et<0))for(let xt=et+1;xt<=D;xt++)c(X,xt,tt,xt===D?H:B)}const z=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[X,tt]of z){const et=Math.hypot(X+1-m,tt+1-m);for(let xt=X;xt<=X+1;xt++)for(let _t=tt;_t<=tt+1;_t++){const lt=Math.hypot(xt+.5-m,_t+.5-m)>et;for(let pt=1;pt<=(lt?5:3);pt++)c(xt,D+pt,_t,lt&&pt===5?H:B)}}for(let X=m-1;X<=m;X++)for(let tt=D+2;tt<=D+3;tt++)for(let et=14;et<=15;et++)c(X,tt,et,L);break}case"beanie":{const B=Nt.red,H=Nt.cream,L=Math.max(M+1,ne-6),V=Math.min(L+2,ne-1),D=[];for(let z=L;z<=V;z++)for(let X=-1;X<=jt;X++)for(let tt=-1;tt<=ce;tt++)u(X,z,tt)?c(X,z,tt,H):(u(X-1,z,tt)||u(X+1,z,tt)||u(X,z,tt-1)||u(X,z,tt+1))&&D.push([X,z,tt]);for(const[z,X,tt]of D)c(z,X,tt,H);for(let z=V+1;z<ne;z++)for(let X=0;X<jt;X++)for(let tt=0;tt<ce;tt++)u(X,z,tt)&&c(X,z,tt,z===V+1?An(B,.82):B);for(let z=0;z<jt;z++)for(let X=0;X<ce;X++){const tt=f(z,X);tt<=V||(c(z,tt+1,X,B),c(z,tt+2,X,B))}it(m,f(m,m)+4.5,m,1.9,H);break}case"cowboy":{let B=0;for(let H=0;H<jt;H++)for(let L=0;L<ce;L++)B=Math.max(B,f(H,L)+1);for(let H=0;H<jt;H++)for(let L=0;L<ce;L++){const V=f(H,L);if(!(V<0||Math.hypot(H+.5-m,L+.5-m)>5))for(let D=V+1;D<B;D++)c(H,D,L,Nt.leather)}for(let H=m-11;H<m+11;H++)for(let L=m-11;L<m+11;L++){const V=Math.abs(H+.5-m);if(Math.hypot(V,L+.5-m)>10.7)continue;const D=V>7.5?2:V>5.5?1:0;for(let z=0;z<=D;z++)c(H,B+z,L,Nt.leather)}for(let H=0;H<jt;H++)for(let L=0;L<ce;L++){const V=Math.abs(H+.5-m);if(Math.hypot(V,L+.5-m)>5)continue;const D=V<1?2:V<2?1:0;for(let z=B+1;z<=B+7-D;z++)c(H,z,L,Nt.leather);D>0&&c(H,B+7-D,L,An(Nt.leather,.8))}Y(B+1,B+2,5.05,Nt.felt);break}case"wizard":{const B=Nt.plum,H=An(B,.82),L=f(m,m)+1;for(let X=m-6;X<m+6;X++)for(let tt=m-6;tt<m+6;tt++){if(Math.hypot(X+.5-m,tt+.5-m)>5.2)continue;const et=f(X,tt);if(!(et<0))for(let xt=et+1;xt<=L;xt++)c(X,xt,tt,B)}const V=11;for(let X=m-12;X<m+12;X++)for(let tt=m-12;tt<m+12;tt++){const et=Math.hypot(X+.5-m,tt+.5-m);if(et<=5.2||et>V)continue;const xt=X>=0&&X<jt&&tt>=0&&tt<ce?f(X,tt):-1;c(X,Math.max(L-Math.max(0,Math.round(et)-8),xt+1,M+2),tt,H)}const D=13;for(let X=0;X<=D;X++){const tt=X/D,et=5-4.1*tt,xt=m-6.5*tt*tt;for(let _t=m-6;_t<m+6;_t++)for(let lt=-2;lt<ce;lt++)Math.hypot(_t+.5-m,lt+.5-xt)<=et&&c(_t,L+X,lt,B)}const z=(X,tt)=>{for(let et=m-tt;et<m+tt;et++){const xt=d(et,X);xt>=0&&c(et,X,xt,Nt.gold)}};z(L+3,1),z(L+4,2),z(L+5,1),z(L+8,1),z(L+11,1);break}case"halo":{let B=-1;for(let X=0;X<jt;X++)for(let tt=0;tt<ce;tt++)B=Math.max(B,f(X,tt));const H=B+3,L=An(Nt.gold,1.15),V=4.9,D=6.7,z=Math.ceil(D)+1;for(let X=m-z;X<m+z;X++)for(let tt=m-z;tt<m+z;tt++){const et=Math.hypot(X+.5-m,tt+.5-m);et<V||et>D||c(X,H,tt,tt>=m?L:Nt.gold)}break}case"headphones":{const B=Math.min(M+1,10),H=m-2,L=m+1;for(let V=0;V<jt;V++)for(let D=H;D<=L;D++){const z=f(V,D);z<0||(c(V,z+1,D,Nt.steel),c(V,z+2,D,Nt.steel))}for(let V=B+3;V<ne;V++)for(const D of[0,jt-1])for(let z=H;z<=L;z++)u(D,V,z)&&c(D,V,z,Nt.steel);for(let V=0;V<3;V++)for(let D=B-4;D<=B+3;D++)for(let z=m-4;z<=m+3;z++)Math.hypot(D+.5-B,z+.5-m)>3.6||(c(-V,D,z,Zo),c(jt-1+V,D,z,Zo));for(let V=B-2;V<=B+1;V++)for(let D=m-2;D<=m+1;D++)Math.hypot(V+.5-B,D+.5-m)<=1.6&&(c(-2,V,D,Nt.steel),c(jt+1,V,D,Nt.steel));break}case"viking":{const B=An(Nt.steel,.78),H=Math.max(M+2,ne-5);for(let D=H;D<ne;D++)for(let z=0;z<jt;z++)for(let X=0;X<ce;X++)u(z,D,X)&&c(z,D,X,D===H?B:Nt.steel);for(let D=0;D<jt;D++)for(let z=0;z<ce;z++){const X=f(D,z);X<H||(c(D,X+1,z,Nt.steel),c(D,X+2,z,Nt.steel))}const L=Math.max(M+1,H-1);for(let D=L;D<=ne;D++)for(let z=m-1;z<=m;z++){const X=d(z,D);X>=0&&c(z,D,X+1,B)}const V=Math.max(f(5,m)-4,M+4);for(const D of[-1,1])for(let z=0;z<=18;z++){const X=z/18,tt=X*2.05,et=m+D*(6.2+6*Math.sin(tt));it(et,V+8.4-8.4*Math.cos(tt),m,2.6-1.6*X,Nt.cream)}break}case"flowers":{const B=Math.max(M+1,Math.min(M+3,ne-4)),H=Nt.leaf,L=An(Nt.leaf,.82),V=(et,xt)=>Math.floor(m+et*xt),D=[[0,1],[.87,.5],[.87,-.5],[0,-1]],z=[];for(const[et,xt]of D){let _t=2;for(;_t<12&&u(V(et,_t),B,V(xt,_t));)_t+=.5;z.push(_t)}const X=[];for(let et=B;et<=B+1;et++)for(let xt=0;xt<jt;xt++)for(let _t=0;_t<ce;_t++){if(!u(xt,et,_t))continue;let lt=!1;for(let pt=-1;pt<=1;pt++)for(let ft=-1;ft<=1;ft++)u(xt+pt,et,_t+ft)||(lt=!0,X.push([xt+pt,et,_t+ft]));lt&&X.push([xt,et,_t])}for(const[et,xt,_t]of X)c(et,xt,_t,xt===B?L:H);const tt=[Nt.red,Nt.gold,Nt.cream];for(let et=0;et<D.length;et++){const[xt,_t]=D[et],lt=Math.round(m+xt*(z[et]+1)),pt=Math.round(m+_t*(z[et]+1)),ft=tt[et%tt.length];it(lt,B+1.5,pt,1.5,ft),xt>0&&it(2*m-lt,B+1.5,pt,1.5,ft)}break}case"afro":{const L=f(m,m),V=Math.max(M+2,ne-3);for(let D=m-10;D<m+10;D++)for(let z=m-10;z<m+10;z++){const X=Math.abs(D+.5-m),tt=Math.abs(z+.5-m),et=(X*X+tt*tt)/(10*10),xt=f(D,z);if(et>1&&xt<0)continue;const _t=et>1?0:7.5*Math.sqrt(1-et),pt=z>=ce-6?Math.max(M+1,V-Math.max(0,X-4.5)):M+1,ft=xt>=0?pt:Math.max(pt,Math.ceil(L+.5-_t)),yt=et>1?xt:Math.max(xt,Math.floor(L-.5+_t));for(let vt=ft;vt<=yt;vt++)c(D,vt,z,vt<pt+2?An(Nt.hair,.8):Nt.hair)}break}case"mohawk":{const B=Nt.hair,H=An(t,.74);for(let V=0;V<jt;V++)for(let D=0;D<ce;D++){const z=f(V,D);if(!(z<0))for(let X=M+2;X<=z;X++)u(V,X,D)&&h(V,X,D,H)}const L=f(m,m);for(let V=1;V<ce-1;V++){if(f(m,V)<L-4)continue;const z=(V-1)/(ce-3),X=2+Math.round(4*Math.sin(Math.PI*z));for(const tt of[m-1,m])for(let et=f(tt,V)+1;et<=f(tt,V)+X;et++)c(tt,et,V,B)}break}case"ponytail":{const B=Nt.hair,H=Math.max(f(m-1,2),f(m,2))-2;for(let L=0;L<jt;L++)for(let V=0;V<ce;V++){const D=f(L,V);D>M&&c(L,D,V,B)}k(B,2);for(let L=M+1;L<ne;L++)for(let V=0;V<jt;V++)for(let D=0;D<ce;D++)(V<=1||V>=jt-2||D<=3)&&u(V,L,D)&&c(V,L,D,B);for(let L=3;L<=M;L++){const V=6-Math.max(0,Math.min(3,M-L));for(let D=m-V;D<m+V;D++)for(let z=0;z<=2;z++)u(D,L,z)&&c(D,L,z,B)}for(let L=0;L<=14;L++){const V=L/14;it(m,H-10*V*V,1.5-4.4*Math.sqrt(V),2.7-1.3*V,B)}it(m,H-.5,-.6,2.1,Nt.band);break}case"longhair":{const B=Nt.hair,H=ce-5,L=2;k(B,2);for(let V=0;V<ne;V++)for(let D=0;D<jt;D++)for(let z=0;z<ce;z++){if(!u(D,V,z))continue;const X=z>=H,tt=D<L||D>=jt-L;X&&!tt||X&&tt&&V>=v&&V<=M||c(D,V,z,B)}for(let V=Math.max(ne-3,M+2);V<ne;V++)for(let D=0;D<jt;D++)for(let z=H;z<ce;z++)u(D,V,z)&&c(D,V,z,B);for(let V=0;V<jt;V++)for(let D=0;D<ce;D++){if(!(V<L||V>=jt-L||D<L)||f(V,D)<0)continue;let X=0;for(;!u(V,X,D);)X++;for(let tt=X-1;tt>=X-3;tt--)c(V,tt,D,B)}break}case"buzz":{const B=Nt.hair,H=An(Nt.hair,1.75),L=Math.min(ne-2,Math.max(M+3,ne-3));for(let V=0;V<jt;V++)for(let D=0;D<ce;D++){const z=f(V,D);if(z<0)continue;const X=Math.abs(V+.5-m),et=D>=ce-6?X<5.5?0:X<6.5?1:2:3,xt=Math.max(M+1,Math.min(L-et,z-1));for(let _t=xt;_t<=z;_t++)u(V,_t,D)&&c(V,_t,D,_t<L?H:B)}break}case"bun":{const B=An(Nt.hair,.74),H=M+2;for(let D=0;D<jt;D++)for(let z=0;z<ce;z++){const X=f(D,z);if(X<H)continue;const tt=z<=5?5:z<=9?3:2;for(let et=X;et>X-tt&&et>=H;et--)u(D,et,z)&&c(D,et,z,Nt.hair);c(D,X+1,z,Nt.hair)}const L=4.5,V=f(m,4);it(m,V+3,L,3.1,Nt.hair);for(let D=m-4;D<m+4;D++)for(let z=1;z<=8;z++)if(Math.hypot(D+.5-m,z+.5-L)<=2.6)for(let X=V+1;X<=V+2;X++)c(D,X,z,B);break}case"braids":{k(Nt.hair,2);for(let L=M+1;L<ne;L++)for(let V=0;V<jt;V++)for(let D=0;D<ce;D++)(V<=1||V>=jt-2||D<=1)&&u(V,L,D)&&c(V,L,D,Nt.hair);const B=An(Nt.hair,1.3),H=-5;for(const L of[-1,jt]){const V=Math.max(0,Math.min(jt-1,L)),D=Math.min(f(V,6),ne-4);if(!(D<0)){for(let z=H;z<=D;z++){const X=z<=H+3,tt=z<=H+1;let et=(z%4+4)%4<2?Nt.hair:B;tt&&(et=Nt.band);for(let xt=-1;xt<=1;xt++)for(let _t=-1;_t<=1;_t++)(!X||Math.abs(xt)+Math.abs(_t)<2)&&c(L+xt,z,6+_t,et)}it(L+.5,H-2,6.5,1.9,Nt.band)}}break}}o=null;const Z=.18,st=.25;let ut=-1;if(a.size){const B=new Map;let H=0,L=0;for(const z of a){const X=n.get(z);if(!X)continue;L++;const tt=`${X.c[0]},${X.c[1]},${X.c[2]}`,et=B.get(tt);et?et.n++:B.set(tt,{n:1,c:X.c,chroma:(Math.max(...X.c)-Math.min(...X.c))/255}),B.get(tt).chroma>=Z&&H++}const V=L>0&&H/L<st;let D=null;for(const z of B.values())!V&&z.chroma<Z||(!D||z.n>D.n)&&(D=z);D&&(ut=hl(D.c)[0])}else r.size&&(ut=hl(vu)[0]);if(ut>=0){const B=s.hairColor*360-ut;if(Math.abs(B)>.5)for(const H of[...a,...r]){const L=n.get(H);L&&(L.c=BS(L.c,B))}}return{voxels:[...n.values()],anchor:ut}}function KS(s){return $S(s).voxels}const ZS=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],wc=.42,wa=new Ct,Gd=(s,t,e)=>(wa.setRGB(s/255,t/255,e/255,Ne),[wa.r,wa.g,wa.b]);function JS(s,t){const e=new Map;for(const b of s)e.set(`${b.x},${b.y},${b.z}`,b);const n=(b,T,C)=>e.get(`${b},${T},${C}`),i=(b,T)=>b[0]===T[0]&&b[1]===T[1]&&b[2]===T[2],o=(b,T)=>i(b.c,T.c)||!!b.blend&&(!!T.blend||i(b.blend,T.c))||!!T.blend&&i(T.blend,b.c);let r=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const b of s)b.x<r&&(r=b.x),b.y<a&&(a=b.y),b.z<l&&(l=b.z),b.x>c&&(c=b.x),b.y>h&&(h=b.y),b.z>u&&(u=b.z);const f=t?t[0]:(r+c)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(l+u)/2,m=[],x=[],g=[],y=[],w=[],v=new Set;for(const b of s){const T=b.x-f,C=b.y-d,P=b.z-p,U=Gd(b.c[0],b.c[1],b.c[2]),F=Gd(b.c[0]*wc,b.c[1]*wc,b.c[2]*wc);for(const{n:k,t1:$,t2:Y}of ZS){if(n(b.x+k[0],b.y+k[1],b.z+k[2]))continue;const it=(B,H)=>[T+k[0]/2+$[0]*B+Y[0]*H,C+k[1]/2+$[1]*B+Y[1]*H,P+k[2]/2+$[2]*B+Y[2]*H],G=it(-.5,-.5),Z=it(.5,-.5),st=it(.5,.5),ut=it(-.5,.5);for(const B of[G,Z,st,G,st,ut])m.push(B[0],B[1],B[2]),x.push(k[0],k[1],k[2]),g.push(U[0],U[1],U[2]);for(const[B,H,L]of[[$,Y,1],[$,Y,-1],[Y,$,1],[Y,$,-1]]){const V=n(b.x+B[0]*L,b.y+B[1]*L,b.z+B[2]*L);if(V&&o(V,b)&&!n(b.x+B[0]*L+k[0],b.y+B[1]*L+k[1],b.z+B[2]*L+k[2]))continue;const D=lt=>[T+k[0]/2+B[0]*L/2+H[0]*lt/2,C+k[1]/2+B[1]*L/2+H[1]*lt/2,P+k[2]/2+B[2]*L/2+H[2]*lt/2],z=D(1),X=D(-1),tt=z.map(lt=>lt.toFixed(2)).join(),et=X.map(lt=>lt.toFixed(2)).join(),xt=tt<et?`${tt}|${et}`:`${et}|${tt}`;if(v.has(xt))continue;v.add(xt);const _t=.006;y.push(z[0]+k[0]*_t,z[1]+k[1]*_t,z[2]+k[2]*_t,X[0]+k[0]*_t,X[1]+k[1]*_t,X[2]+k[2]*_t),w.push(F[0],F[1],F[2],F[0],F[1],F[2])}}}const M=new we;M.setAttribute("position",new Ot(m,3)),M.setAttribute("normal",new Ot(x,3)),M.setAttribute("color",new Ot(g,3));const S=new we;S.setAttribute("position",new Ot(y,3)),S.setAttribute("color",new Ot(w,3));const E=[(c-r)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(E[0],E[1],E[2])*1.15;return{faces:M,edges:S,radius:_}}const L0=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],de=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),QS={calm:{...de("lid",.1),smile:.08},pleased:{...de("lid",.2),...de("low",.3),...de("raise",.1),smile:.65},happy:{...de("raise",.35),...de("arch",.25),...de("low",.42),smile:.9,open:.16},joy:{...de("raise",.85),...de("arch",.4),...de("low",.55),smile:1,open:.6,roll:.06},surprised:{...de("raise",1.5),...de("arch",.45),...de("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...de("lid",.2),skew:.42},sad:{...de("inner",.95),...de("raise",-.1),...de("lid",.36),...de("tilt",-.5),smile:-.75,nod:.08},bored:{...de("lid",.5),...de("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...de("lid",.72),...de("tilt",-.25),...de("raise",-.2),...de("inner",.2),smile:-.05,nod:.18},yawn:{...de("lid",1),...de("raise",.75),...de("inner",.3),open:1,round:.55,nod:-.14},asleep:{...de("lid",1.05),...de("raise",-.12),...de("inner",.12),smile:.05,open:.06},excited:{...de("raise",.9),...de("inner",-.1),...de("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...de("raise",.85),...de("arch",.3),...de("lid",.04),roll:.12,smile:.25}},jS={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Wd=()=>Object.fromEntries(L0.map(s=>[s,s==="pupil"?1:0])),tb=s=>new Ct().setRGB(s[0]/255,s[1]/255,s[2]/255,Ne);class eb{constructor(t){R(this,"head",new he);R(this,"solid",[]);R(this,"drop");R(this,"roll",0);R(this,"nod",0);R(this,"own",[]);R(this,"brows",[]);R(this,"eyes",[]);R(this,"mouth",[]);R(this,"seam",0);R(this,"lipH",.5);R(this,"browLo",0);R(this,"browHi",0);R(this,"d",Wd());R(this,"mood","calm");R(this,"feeling",null);R(this,"feelFor",0);R(this,"blinkIn",1.5);R(this,"blinkT",-1);R(this,"blinkLen",.13);R(this,"glance",new mt);R(this,"glanceIn",1);R(this,"micro",new mt);R(this,"microIn",.5);R(this,"talkT",0);R(this,"syl",0);R(this,"sylLen",.16);R(this,"sylAmp",0);R(this,"sylRound",0);R(this,"pause",0);R(this,"beat",0);R(this,"wasTalking",!1);R(this,"lookX",0);R(this,"lookY",0);const e=KS(t);let n=1/0,i=1/0,o=1/0,r=-1/0,a=-1/0,l=-1/0;for(const G of e)n=Math.min(n,G.x),r=Math.max(r,G.x),i=Math.min(i,G.y),a=Math.max(a,G.y),o=Math.min(o,G.z),l=Math.max(l,G.z);const c=(n+r)/2,h=(i+a)/2,u=(o+l)/2;this.drop=(h-(ne-1)/2)/16;const f=yu(t),d=8,p=G=>G<d?0:1,m=[!1,!1];for(const G of e)G.part==="eye"&&(m[p(G.x)]=!0);const x=[236,240,246],g=e.map(G=>G.part==="brow"||G.part==="mouth"?{...G,c:f,part:void 0}:G.part==="pupil"&&m[p(G.x)]?{...G,c:x}:G),{faces:y,edges:w}=JS(g,[c,h,u]),v=new $a({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),M=new Tp({vertexColors:!0});this.own.push(y,w,v,M);const S=new wt(y,v);this.head.add(S,new Mg(w,M)),this.solid.push(S);const E=new nn(1,1,1);this.own.push(E);const _=new Map,b=G=>{const Z=G.join();let st=_.get(Z);return st||(st=new $a({color:tb(G)}),_.set(Z,st),this.own.push(st)),st},T=G=>{const Z=new wt(E,b(G));return this.head.add(Z),this.solid.push(Z),Z},C=G=>G.z-u+.5,P=e.filter(G=>G.part==="brow");for(const G of[0,1]){const Z=P.filter(V=>p(V.x)===G);if(!Z.length)continue;const st=Z.map(V=>V.x),ut=Math.min(...st),B=Math.max(...st),H=(ut+B)/2,L=Math.max(.5,(B-ut)/2);for(const V of Z){const D=G===0?(H-V.x)/L:(V.x-H)/L;this.brows.push({m:T(V.c),x:V.x-c,y:V.y-h,z:C(V),xn:D,side:G})}}const U=e.filter(G=>G.part==="eye"||G.part==="pupil"),F=f.map(G=>Math.round(G*.88));let k=-1/0;for(const G of[0,1]){const Z=U.filter(ft=>p(ft.x)===G);if(!Z.length)continue;const st=Z.map(ft=>ft.x),ut=Z.map(ft=>ft.y),B=Math.min(...st),H=Math.max(...st),L=Math.min(...ut),V=Math.max(...ut);k=Math.max(k,V);const D=Math.max(...Z.map(C)),z=(B+H)/2-c,X=(L+V)/2-h,tt=H-B+1,et=V-L+1;let xt=null;const _t=Math.max(1,tt-2),lt=Math.max(1,et-2);if(m[G]){const ft=Z.find(yt=>yt.part==="pupil").c;xt=T(ft),xt.scale.set(_t,lt,.05)}const pt=[];for(let ft=B;ft<=H;ft++){const yt=tt>1?G===0?(ft-B)/(tt-1):(H-ft)/(tt-1):.5;pt.push({x:ft-c,k:yt,up:T(F),low:T(F)})}this.eyes.push({side:G,y0:L-h-.5,y1:V-h+.5,z:D,cx:z,cy:X,pupil:xt,pw:_t,ph:lt,reach:(tt-_t)/2,cols:pt})}const $=e.filter(G=>G.part==="mouth");if($.length){const G=[...new Set($.map(D=>D.x))].sort((D,z)=>D-z),Z=$.map(D=>D.y),st=Math.min(...Z),ut=Math.max(...Z),B=ut-st+1;this.seam=B>=2?(st+ut)/2-h:st-h,this.lipH=B>=2?1:.5;const H=(G[0]+G[G.length-1])/2,L=Math.max(.5,(G[G.length-1]-G[0])/2),V=$[0].c;for(const D of G){const z=Math.max(...$.filter(X=>X.x===D).map(C));this.mouth.push({x:D-c,z,xn:(D-H)/L,top:T(V),bot:T(V),inside:T([46,22,28])})}}const Y=this.brows.map(G=>G.y),it=Math.max(...e.filter(G=>G.c[0]===f[0]&&G.c[1]===f[1]&&G.c[2]===f[2]).map(G=>G.y));this.browLo=k===-1/0?-2:k-h+.85-(Y.length?Math.min(...Y):0),this.browHi=it-h-.8-(Y.length?Math.max(...Y):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const o=this.current,r={...Wd(),...QS[o]};if(i!==null&&(r.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),r.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);r.open=Math.max(r.open*.6,f),r.round=Math.max(r.round,this.sylRound*f),r.lid0-=.05,r.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),r.raise0+=.42*this.beat,r.raise1+=.42*this.beat,r.nod+=.05*this.beat;const a=jS[o]??8;for(const u of L0){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(r[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=o==="asleep"?0:t,this.blinkIn<=0&&(this.blink(o==="sleepy"),this.blinkIn=(o==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}o==="thinking"&&(c=.7,h=.6),this.lookX+=(_e.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(_e.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=o=>e[o],i=.1;for(const o of this.brows){const r=o.side;let a=n("raise"+r)+n("inner"+r)*-o.xn*.65+n("arch"+r)*(1-o.xn*o.xn)*.9;a=_e.clamp(a,this.browLo,this.browHi),o.m.position.set(o.x,o.y+a,o.z+.14+i/2),o.m.scale.set(1.001,1,i)}for(const o of this.eyes){const r=o.side,a=o.y1-o.y0;for(const l of o.cols){const c=_e.clamp(Math.max(t*1.05,n("lid"+r)+n("tilt"+r)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:_e.clamp(n("low"+r)*h,0,1)*a*.6;this.lid(l.up,l.x,o.y1+.08,-(c+(c>.01?.08:0)),o.z),this.lid(l.low,l.x,o.y0-.08,u+(u>.01?.08:0),o.z)}if(o.pupil){const l=_e.clamp(e.pupil,.6,1.25);o.pupil.scale.set(o.pw*l,o.ph*l,.05),o.pupil.position.set(o.cx+this.lookX*o.reach*.95,o.cy+this.lookY*o.reach*.7,o.z+.02)}}for(const o of this.mouth){const r=o.xn,a=e.smile*(1.25*r*r-.25)+e.skew*r*.7,l=_e.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*r*r)*(1-l*.75*r*r)*2.4,h=1-l*.35*Math.max(0,Math.abs(r)-.5)*2,u=this.seam+a;o.top.position.set(o.x,u+this.lipH/2,o.z+.01+i/2),o.top.scale.set(h,this.lipH,i),o.bot.position.set(o.x,u-c-this.lipH/2,o.z+.01+i/2),o.bot.scale.set(h,this.lipH,i),o.inside.visible=c>.02,o.inside.position.set(o.x,u-c/2,o.z+.005+i/4),o.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,o){const r=Math.abs(i);t.visible=r>.01,t.visible&&(t.position.set(e,n+i/2,o+.07+.03),t.scale.set(1.001,r,.06))}dispose(){for(const t of this.own)t.dispose()}}const ze=22,I0=.6,We=Math.PI*2,Be=(s,t,e)=>s<t?t:s>e?e:s,qn=s=>s<0?0:s>1?1:s,Ut=(s,t,e)=>s+(t-s)*e,oe=s=>{const t=qn(s);return t*t*(3-2*t)},Jo=s=>{const t=qn(s);return t*t*t*(t*(t*6-15)+10)},no=s=>s-Math.floor(s),fn=s=>Math.atan2(Math.sin(s),Math.cos(s)),D0=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Ii=-.06,_n=.11,pn=.19;class nb{constructor(t){R(this,"xs",[]);R(this,"zs",[]);R(this,"cum",[]);R(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,o)=>{const r=this.xs.length;if(r){const a=Math.hypot(i-this.xs[r-1],o-this.zs[r-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(o),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const o=e[i-1],r=e[i],a=e[i+1],l=Math.hypot(r.x-o.x,r.z-o.z),c=Math.hypot(a.x-r.x,a.z-r.z),h=(r.x-o.x)/l,u=(r.z-o.z)/l,f=(a.x-r.x)/c,d=(a.z-r.z)/c;if(h*f+u*d>.999){n(r.x,r.z);continue}const p=Math.min(.42,l*.5,c*.5),m=r.x-h*p,x=r.z-u*p,g=r.x+f*p,y=r.z+d*p;for(let w=0;w<=8;w++){const v=w/8,M=1-v;n(M*M*m+2*M*v*r.x+v*v*g,M*M*x+2*M*v*r.z+v*v*y)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const o=n+i>>1;e[o]<=t?n=o:i=o}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],o=i>0?qn((t-this.cum[n])/i):0;return e.x=Ut(this.xs[n],this.xs[n+1],o),e.z=Ut(this.zs[n],this.zs[n+1],o),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Be(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const Sa=.05,ba=.12;class ib{constructor(t,e){R(this,"L");R(this,"thigh");R(this,"shin");R(this,"footH",.06);R(this,"hipX",.17);R(this,"armLen");R(this,"legless");R(this,"pos",new I);R(this,"yaw",0);R(this,"lean",0);R(this,"roll",0);R(this,"twist",0);R(this,"swayRoll",0);R(this,"squash",0);R(this,"stretch",0);R(this,"feet");R(this,"arms");R(this,"dance",null);R(this,"dancing",!1);R(this,"danceBag",null);R(this,"danceJump",!1);R(this,"dmove",null);R(this,"danceDip",0);R(this,"danceTwist",0);R(this,"danceRoll",0);R(this,"danceOff",0);R(this,"lastStep",-1e9);R(this,"danceSteps",!1);R(this,"lastBeat",null);R(this,"beatRate",0);R(this,"standAt",new I);R(this,"onPuff",null);R(this,"onPrint",null);R(this,"airborne",!1);R(this,"rest","stand");R(this,"breath",0);R(this,"asleep",!1);R(this,"headDrop",0);R(this,"hipDrop",0);R(this,"scratch",null);R(this,"scratchIn",5);R(this,"world");R(this,"base",new I);R(this,"vy",0);R(this,"qv",0);R(this,"qRest",0);R(this,"leanV",0);R(this,"leanRest",0);R(this,"sv",0);R(this,"stretchRest",0);R(this,"speed",0);R(this,"accel",0);R(this,"lastSpeed",0);R(this,"wantYaw",null);R(this,"trip",null);R(this,"pending",null);R(this,"act",null);R(this,"phase",0);R(this,"running",0);R(this,"clockOn",!1);R(this,"gRef",0);R(this,"held",!1);R(this,"wallSide",0);R(this,"sway",0);R(this,"swayV",0);R(this,"shift",0);R(this,"shiftIn",3);R(this,"clock",0);R(this,"tapT",-1);R(this,"seq",null);R(this,"queued",[]);R(this,"restYaw",null);R(this,"anchor",{x:0,z:0,g:0,yaw:0});R(this,"t1",new I);R(this,"t2",new I);R(this,"t3",new I);R(this,"e1",new Dn);R(this,"turning",null);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=r=>({side:r,mode:"ground",sole:new I,yaw:0,pitch:0,from:new I,to:new I,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new I,kneeOut:0,sy:0,ankle:new I,q:new pe,toe:0});this.feet=[i(-1),i(1)];const o=r=>({side:r,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[o(-1),o(1)]}standBase(t=this.danceOff){return this.standAt.set(this.base.x+Math.cos(this.yaw)*t,this.base.y,this.base.z-Math.sin(this.yaw)*t)}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ze*e):t==="run"?Math.sqrt(.45*ze*e):Math.min(9,Math.sqrt(1.15*ze*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ze*e)),i=Be(2*n**.3*e,.35*e,2.6*e),o=Math.max(i,t/this.boundFreq);return Ut(i,o,this.running)}get duty(){return Ut(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const o={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[o,...t]}]:this.split(o,t);this.trip={gait:e,stride:i,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const o=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!o)return!1;t==="lie"&&!o.lie&&(t="kneel"),this.restYaw=o.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),o=i.find(a=>this.roomToRest(a,!0,t,e));if(o!==void 0)return{yaw:o,lie:!0};const r=i.find(a=>this.roomToRest(a,!1,t,e));return r===void 0?null:{yaw:r,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const o=this.world.groundAt(n,i),r=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,i-l*u+a*f)-o)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=r*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=r*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],o={x:Math.round(t.x),z:Math.round(t.z)},r=this.world.groundAt(o.x,o.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-r,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-o.x),z:Math.sign(a.z-o.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:o.x+u.x*f,z:o.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:o,b:a,ha:r,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);o=a,r=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new nb(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let o=0;o<=i.total+Sa;o+=Sa)i.at(o,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},o=new I(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),r=e.type==="climb",a=r?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",o,a,Math.atan2(i.x,i.z)),r){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new I(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=r=>(r.sole.x-this.base.x)*e+(r.sole.z-this.base.z)*n;for(const r of this.feet)r.mode==="swing"&&!r.clocked&&(r.mode="ground",r.sole.copy(r.to),r.yaw=r.toYaw);const o=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=o*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;if(!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand")this.stepRest(t);else if(this.asleep)this.breath=no(this.breath+t/3.6);else if(this.act)this.stepAct(t);else if(e&&e.path)this.legless?this.stepHopper(t,e):this.stepWalk(t,e);else{const n=this.dance&&!this.legless?this.dance():null;n!==null?this.stepDance(t,n):this.stepStand(t)}this.dancing&&(this.act||this.trip||this.seq||this.rest!=="stand"||!this.dance||this.dance()===null)&&(this.act&&this.danceJump?this.dancing=!1:this.endDance()),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),o=e.gait==="bound",r=o?4.5:e.gait==="run"?4:3,a=o?4.5:e.gait==="run"?5:4.5,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,l-.03))),h=1/0;this.held=!1;for(const S of this.feet)S.mode==="ground"&&(h=Math.min(h,S.sole.y));if(h<1/0){const S=Math.sin(this.yaw),E=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let b=0;b<=.8;b+=.05){const T=this.world.groundAt(this.base.x+S*b,this.base.z+E*b);if(T>Math.max(h,_)+.2){T<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,b-.18))),this.held=b<.45);break}}}const u=Math.abs(fn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=qn((1.6-u)/1.1);const f=Be((c-this.speed)*3,-a*1.6,r);this.accel+=(f-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),l<=.01&&(this.speed=0,this.accel=0);const d=this.gaitSpeed("walk"),p=this.gaitSpeed("bound"),m=qn((this.speed-d*1.05)/(p*.85-d*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=Ut(4.5,8,this.running)*t;this.yaw+=Be(fn(x-this.yaw),-g,g);const y=d/this.strideAt(d),w=Math.max(y*Ut(.75,1.5,oe((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,M=this.running>.45;if(this.clockOn){this.phase+=w*t;for(let S=0;S<2;S++){const E=this.feet[S],_=no(this.phase-S*.5);_<v?E.mode==="swing"&&E.clocked&&this.touchDown(E,M?1:.55):(E.mode!=="swing"&&(this.liftOff(E,!0,0),this.feet.every(b=>b.mode!=="ground")&&(this.qv+=1.6*this.running)),E.s=(_-v)/(1-v),E.s<.7&&this.aimSwing(E,e,(1-_)/w,v/2/w)),this.footPitch(E,_,v,M)}}if(this.airborne=this.clockOn&&this.feet.every(S=>S.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const E of this.feet)E.mode!=="swing"||!E.clocked||(E.clocked=!1,E.dur=Math.max(.08,(1-E.s)*((1-v)/w)),E.s=0,E.from.set(E.ankle.x,E.ankle.y-this.footH,E.ankle.z),E.fromYaw=E.yaw,E.apex=Math.max(E.from.y,E.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(E=>E.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,M?"run":"walk",w,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const o=e.path,r=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(o.total,e.s+Math.max(r*(n+i),this.held?.55:0)),l=o.at(a,this.t1),c=o.yawAt(a>=o.total-.01?o.total:a),h=Math.abs(fn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Ut(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const o=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*o,i.z=e.z-Math.sin(n)*o,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),o=Be(.3+.08*this.legW,.35,.55);for(let r=0;r<10;r++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(pn+.01),t.z+i*(pn+.01)),c=this.world.groundAt(t.x+n*o,t.z+i*o),h=this.world.groundAt(t.x+n*(Ii-.02),t.z+i*(Ii-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Be(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let o=1;o<6;o++){const r=o/6;i=Math.max(i,this.world.groundAt(Ut(t.from.x,t.to.x,r),Ut(t.from.z,t.to.z,r)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const o=e/n;i?t.pitch=o<.5?0:-.85*oe((o-.5)/.5):t.pitch=o<.12?.22*(1-oe(o/.12)):o<.6?0:-.7*oe((o-.6)/.4)}else if(t.mode==="swing"){const o=t.s;t.pitch=o<.3?Ut(-.7,-.8,o/.3):o<.82?Ut(-.8,0,oe((o-.3)/.52)):(i?-.05:.22)*oe((o-.82)/.18)}}bodyOver(t,e,n,i,o="stroll"){let r=this.shift;const a=o==="strut"?1:0,l=e!=="stand"&&this.clockOn,c=l?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(l)r=-(Ut(Ut(.95,1.2,a),.1,this.running)*(this.hipX+.015)*c)*Math.cos(We*(this.phase-i/2)),h=Ut(Ut(.09,.15,a),.04,this.running)*c*Math.sin(We*(this.phase-i/2));else if(this.dancing)h=this.danceTwist;else{const w=this.feet.filter(v=>v.mode==="ground");w.length===1&&(r=w[0].side*this.hipX*.85)}r+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(r-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((l?-.13*this.sway/Math.max(.1,this.hipX+.015):this.dancing?this.danceRoll:0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*(this.sway+this.danceOff),this.pos.z=this.base.z-Math.sin(this.yaw)*(this.sway+this.danceOff);const f=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(f+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const d=this.reachTop();let p=d.soft-.012*this.legW;if(e!=="stand"){let w=-1/0,v=!1;for(const M of this.feet)M.mode==="ground"&&(w=Math.max(w,M.sole.y));for(const M of this.feet)M.mode==="swing"&&M.to.y>w+.2&&(v=!0);w>-1/0&&!v&&(p=Math.min(p,w+this.footH+(this.thigh+this.shin)*.955+.5))}if(l&&this.running<.45){const w=Ut(.045,.085,a)*this.legW*c*(1-this.running/.45),v=no(this.phase*2);p-=w*(.5-.5*Math.cos(We*(v-i)))}let m=p;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const w=.5/n,v=i/n,M=Math.max(0,w-v),S=ze*M*v/We,E=this.speed*v/2,_=(this.thigh+this.shin)*.985,b=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-E*E))+.5,T=no(this.phase*2),C=v/w;let P;if(T<C)P=b-S*Math.sin(Math.PI*(T/C));else{const U=(T-C)*w;P=b+ze*M/2*U-ze/2*U*U}m=Ut(p,P,oe((this.running-.45)/.25))}e==="stand"&&(m-=this.dancing?this.danceDip:.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const w of this.feet){if(w.mode!=="ground")continue;const v=this.kneeAt(w,this.t2),M=Math.sin(w.yaw)*.06,S=Math.cos(w.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+M,v.y-.06,v.z+S))&&(m=Math.max(m,d.hard))}const x=e==="run"?We*7:We*4.2,g=e==="run"?.9:.72;this.vy+=(x*x*(m-this.pos.y)-2*g*x*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>d.hard&&(this.pos.y=d.hard,this.vy>0&&(this.vy=0));const y=f+this.footH+.45*this.legW+.5;this.pos.y<y&&(this.pos.y=y,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),o=t.pitch,r=o>0?Ii:o<0?_n:0,a=-r,l=this.footH,c=Math.cos(o),h=Math.sin(o),u=r+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),o=this.pos.x+n*t.side*this.hipX,r=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-o,c=t.ankle.y-r,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,p=Be(u,Math.abs(f-d)+.001,f+d-1e-4),m=l/u,x=c/u,g=h/u,y=Be((f*f+p*p-d*d)/(2*f*p),-1,1),w=Math.sqrt(1-y*y),v=t.kneeOut,M=n*t.side,S=-i*t.side;let E=Math.sin(t.yaw)*(1-v*1.3)+M*(.12+1.2*v),_=D0(-c,this.legW),b=Math.cos(t.yaw)*(1-v*1.3)+S*(.12+1.2*v);const T=E*m+_*x+b*g;E-=m*T,_-=x*T,b-=g*T;const C=Math.hypot(E,_,b)||1;return e.set(o+f*(y*m+w*E/C),r+f*(y*x+w*_/C),a+f*(y*g+w*b/C))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,o=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},r=t.kneeOut;if(!o(r)){t.kneeOut=Math.max(0,r-e*2),o(t.kneeOut)&&(t.kneeOut=r);return}for(let a=.2;a<=1.001;a+=.2)if(r+a<=1.001&&!o(Math.min(1,r+a))||r-a>=-.001&&!o(Math.max(0,r-a)))return;t.kneeOut=r}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,o=.5+.14,r=.45+.45*this.running,a=Math.sin(this.yaw)*r,l=Math.cos(this.yaw)*r,c=(x,g)=>this.world.solidAt(x,n,g)||this.world.solidAt(x,i,g),h=x=>c(this.base.x+t*o*x,this.base.z+e*o*x),u=x=>c(this.base.x+t*o*x+a,this.base.z+e*o*x+l),f=h(1),d=h(-1),p=f||u(1)&&!d,m=d||u(-1)&&!f;return this.wallSide=p&&!m?-1:m&&!p?1:0,p&&!m?.22:m&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,p=t*t-f*f-d*d;return c.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let o=1/0;for(const l of this.feet)l.mode==="ground"&&(o=Math.min(o,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let r=o;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=oe((l.s-.55)/.4);h>0&&(r=Math.min(r,r===1/0?c+.3*(1-h):Ut(r,c,h))),l.s>.88&&(o=Math.min(o,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return o===1/0&&(o=a+2),r===1/0&&(r=a),{hard:o,soft:Math.min(r,o)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&this.turning===null&&(this.yaw+=Be(fn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&!this.danceSteps&&this.feet.every(i=>i.mode==="ground")){let i=null,o=0;for(const r of this.feet){const a=this.neutral(r,this.standBase(),this.yaw,this.t2),l=Math.hypot(a.x-r.sole.x,a.z-r.sole.z)+Math.abs(fn(this.yaw-r.yaw))*.35;l>o&&(o=l,i=r)}if(i&&o>.09+.03*this.legW){const r=i;this.liftOff(r,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(r,this.standBase(),this.yaw,r.to),r.toYaw=this.yaw,this.safeFoot(r.to,this.yaw),this.planApex(r,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}stepDance(t,e){var w;this.dancing||(this.dancing=!0,this.danceJump||(this.dmove=null),this.danceJump=!1);const n=Math.floor(e/8);if(!this.dmove||this.dmove.seg!==n){const v=(w=this.dmove)==null?void 0:w.kind,M=this.danceBag??["groove","groove","shimmy","point","roll","spin"];let S=M[Math.floor(Math.random()*M.length)];for(let E=0;E<6&&S===v;E++)S=M[Math.floor(Math.random()*M.length)];this.dmove={seg:n,kind:S},this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null)}const i=this.dmove.kind,o=e-n*8;this.lastBeat!==null&&t>0&&e>this.lastBeat&&(this.beatRate+=((e-this.lastBeat)/t-this.beatRate)*Math.min(1,t*3)),this.lastBeat=e;const r=this.beatRate>.3?1/this.beatRate:.4,a=.5+.5*Math.cos(We*e),l=Math.cos(Math.PI*e);let c=.9*l,h=a,u=.14*l,f=.04+.05*a,d=-.1*l;const p=Math.max(0,Math.cos(We*(e-.5)))**4;let m={tp:-.35+.35*l,to:.18+.22*p,te:1.75-.25*p},x={tp:-.35-.35*l,to:.18+.22*p,te:1.75-.25*p},g=0,y=0;if(i==="groove"){const v=1.1*this.hipX,M=_=>{const b=(_%4+4)%4;return b<1.5?-v:b<2?Ut(-v,v,Jo((b-1.5)/.5)):b<3.5?v:Ut(v,-v,Jo((b-3.5)/.5))};y=M(e);const S=(e%4+4)%4;c=S<2?S<1?-.95:-.35:S<3?.95:.35,d=-.13*Math.sign(c);const E=Math.ceil(e+.45-1e-6);if(E!==this.lastStep&&E-e<=.45){this.lastStep=E;const _=(E%4+4)%4,b=this.feet[_===0||_===3?0:1];b.mode==="ground"&&(this.liftOff(b,!1,Math.max(.12,(E-e)*r)),this.neutral(b,this.standBase(M(E)),this.yaw,b.to),b.toYaw=this.yaw,this.safeFoot(b.to,this.yaw),this.planApex(b,.05+.03*this.legW))}}if(this.danceOff=i==="groove"?y:this.danceOff*(1-Math.min(1,t*3)),this.danceSteps=i==="groove",i==="shimmy")c*=.35,u=.26*Math.sin(Math.PI*e),m={tp:-.55-.2*Math.sin(Math.PI*e),to:.45,te:1.5},x={tp:-.55+.2*Math.sin(Math.PI*e),to:.45,te:1.5};else if(i==="point"){const v=o%4,M=oe(v/.5)*(1-oe((v-2)/.6));x={tp:Ut(x.tp,-2.3,M),to:Ut(x.to,.62,M),te:Ut(x.te,.12,M)},m={tp:.3,to:.62,te:1.95},c=Ut(c,.85,M),d=Ut(d,-.1,M)}else if(i==="roll")f=.02+.11*Math.sin(We*e-.6),h=.35+.65*a,c*=.6,m.te=x.te=.7;else if(i==="jump"){h=.5+.9*a,m={tp:-1.2-.9*a,to:.5,te:.5},x={tp:-1.2-.9*a,to:.5,te:.5};const v=o%4;v>3.25&&v<3.5&&this.lastStep!==Math.floor(e)+.5&&!this.act&&(this.lastStep=Math.floor(e)+.5,this.danceJump=!0,this.perform(Math.floor(o/4)%2?"cheer":"jump"))}else if(i==="spin"){const v=(o-6)/2;v>-.25&&(g=oe((v+.25)/.3)*(1-oe((v-.86)/.14)),c=Ut(c,-.9,oe((v+.25)/.25)),v>=0&&v<=1&&this.turning!==null&&(this.yaw=this.turning+Jo(v)*We),m={tp:-.35,to:.25+1*g,te:.3},x={tp:-.35,to:.25+1*g,te:.3}),v<0?this.turning=null:v<=1?this.turning??(this.turning=this.yaw-Jo(v)*We):this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null)}if(this.shift=c*this.hipX,this.shiftIn=10,this.danceDip=.09*this.legW*h,this.danceTwist=u,this.danceRoll=d,this.leanRest=f,this.qRest=-.05*a*a*a,this.arms[1].tp=m.tp,this.arms[1].to=m.to,this.arms[1].te=m.te,this.arms[0].tp=x.tp,this.arms[0].to=x.to,this.arms[0].te=x.te,this.oneLegPose(g),this.feet[0].mode==="ground"&&g>.02&&(this.feet[0].yaw=this.yaw),this.stepStand(t),g<.02)for(const v of this.feet){if(v.mode!=="ground")continue;const M=qn(-v.side*c/.72);v.pitch=-.38*M*M}}endDance(){this.dancing=!1,this.dmove=null,this.danceDip=this.danceTwist=this.danceRoll=0,this.danceOff=0,this.danceSteps=!1,this.danceJump=!1,this.lastBeat=null,this.leanRest=0,this.qRest=0,this.shiftIn=1,this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null),this.oneLegPose(0)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*We*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Ut(-n*.97,-n*.55,oe(t)),Ut(0,.1*n,oe(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(r,a,l)=>new I(r,a,l),n=this.thigh+this.shin,i=this.footH,o=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-o,i,0),e(o,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const r=ba/2,a=pn-.02,l=a+.07,c=Math.asin(Be((a-r)/this.shin,-1,1)),h=Math.max(r+this.thigh*Math.sin(c+.19),l),u=Math.asin(Be((h-r)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),p=this.hipX+.03,m=-.08,x=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(m,0,0))),g=this.fromPivot(x,m,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),y=2*Math.max(.12,this.armLen/2-.05)*.92,w=g.head.y-.08-.04;return y*y-w*w>.35*.35&&(g.hands=[this.palm(g.head,m,0,0,-.12,.92),this.palm(g.head,m,0,1,.12,.92)]),g}case"lie":{const a=Math.PI/2,l=e(-.25,.5+ba,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new pe().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=ba/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new pe().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const o of[-.5,.5])for(const r of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(o,r,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,o,r,a){const l=new pe().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=r*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new I(c.x+Math.sin(o)*f,Math.max(a,c.y-h),c.z+Math.cos(o)*f)}palm(t,e,n,i,o,r,a=.04){const l=new pe().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new I(c*(.5+ba/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*r,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new I(h.x+Math.sin(o)*d,a,h.z+Math.cos(o)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(fn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new I(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,o,r,a=0){return{head:t.clone().add(new I(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:o,hands:r,hips:a}}kneelDown(){var m,x;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),o=this.pivotOf(n),r=this.pivotOf(i),a=.14*e,l=o.y+.03*e,c=.12*t,h=Math.sqrt(2*ze*(l-(o.y-a))),u=c+h/ze+Math.sqrt(2*(l-r.y)/ze),f=u+.12*t,d=[],p=[];for(let g=0;;g=Math.min(f,g+1/40)){if(g<=c){const y=oe(g/c);d.push(this.fromPivot(new I(0,o.y-a*y,0),.08*y,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(g<u){const y=g-c,w=y/(u-c),v=oe(w),M=new I(0,o.y-a+h*y-.5*ze*y*y,r.z*v),S=[0,1].map(b=>n.ankles[b].clone().lerp(i.ankles[b],v)),E=Ut(0,i.feet[0],v),_=w>.5?[((m=i.hands[0])==null?void 0:m.clone())??null,((x=i.hands[1])==null?void 0:x.clone())??null]:[null,null];d.push(this.fromPivot(M,Ut(.08,i.lean,v),0,S,[E,E],_,v))}else d.push(i);if(p.push(g/f),g>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var w,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),o=this.pivotOf(n),r=(M,S)=>new pe().setFromEuler(this.e1.set(M,0,S)),a=r(e.lean,e.roll),l=r(n.lean,n.roll),c=[0,1].map(M=>e.ankles[M].clone().sub(this.hipOf(e.head,a,M,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(M=>n.ankles[M].clone().sub(this.hipOf(n.head,l,M,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(i.y,o.y)+.2,d=.14*t,p=Math.sqrt(2*ze*(f-i.y)),m=d+p/ze+Math.sqrt(2*(f-o.y)/ze),x=m+.2*t,g=[],y=[];for(let M=0;;M=Math.min(x,M+1/40)){if(M<=d){const S=oe(M/d);g.push(this.fromPivot(i.clone(),Ut(e.lean,u,S),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((w=e.hands[0])==null?void 0:w.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(M<m){const S=M-d,E=S/(m-d),_=oe(E),b=new I(Ut(i.x,o.x,_),i.y+p*S-.5*ze*S*S,Ut(i.z,o.z,_)),T=Ut(u,n.lean,_),C=Ut(0,n.roll,_),P=r(T,C),U=b.clone().add(new I(0,.5,0).applyQuaternion(P)),F=[0,1].map(Y=>{const it=Ut(c[Y].length(),h[Y].length(),_),G=c[Y].clone().normalize().lerp(h[Y].clone().normalize(),_).normalize().multiplyScalar(it).applyQuaternion(P),Z=this.hipOf(U,P,Y,1).add(G);return Z.y=Math.max(Z.y,this.footH+.02),Z}),k=[0,1].map(Y=>Ut(e.feet[Y],n.feet[Y],_)),$=[0,1].map(Y=>{const it=e.hands[Y],G=n.hands[Y];return it&&G?it.clone().lerp(G,_):G&&E>.5?G.clone():null});g.push(this.fromPivot(b,T,C,F,k,$,1))}else g.push(n);if(y.push(M/x),M>=x)break}return{keys:g,at:y,dur:x,t:0,to:"lie",thud:m/x,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/x,pushDone:!1}}springUp(t){var S,E;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),o=this.pose("stand"),r=this.pivotOf(i),a=this.pivotOf(o),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ze*(c-r.y)),f=h+u/ze+Math.sqrt(2*(c-(a.y-l))/ze),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,m=t==="lie"?i.roll-.35:i.roll,x=new pe().setFromEuler(this.e1.set(i.lean,0,i.roll)),g=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,x,_,i.hips))),y=new I(a.x,a.y-l,a.z),w=[0,1].map(_=>o.ankles[_].clone().sub(y.clone().add(new I(this.feet[_].side*this.hipX,0,0)))),v=[],M=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const b=oe(_/h);v.push(this.fromPivot(r.clone(),Ut(i.lean,p,b),Ut(i.roll,m,b),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((S=i.hands[0])==null?void 0:S.clone())??null,((E=i.hands[1])==null?void 0:E.clone())??null],i.hips))}else if(_<f){const b=_-h,T=b/(f-h),C=new I(Ut(r.x,a.x,oe(T)),r.y+u*b-.5*ze*b*b,Ut(r.z,a.z,oe(T))),P=Ut(p,0,oe(T)),U=Ut(m,0,oe(Math.min(1,T*1.4))),F=new pe().setFromEuler(this.e1.set(P,0,U)),k=C.clone().add(new I(0,.5,0).applyQuaternion(F)),$=oe(Math.min(1,T*1.3)),Y=Ut(i.hips,0,$),it=[0,1].map(ut=>{const B=Ut(g[ut].length(),w[ut].length(),T)-.08*n*Math.sin(Math.PI*T),H=g[ut].clone().normalize().lerp(w[ut].clone().normalize(),$).normalize(),L=this.hipOf(k,F,ut,Y).addScaledVector(H,B);return L.y=Math.max(L.y,this.footH+.02),L}),G=[0,1].map(ut=>Ut(i.feet[ut],0,oe(T))),Z=k.y-.08<this.armLen*.92,st=[0,1].map(ut=>Z&&i.hands[ut]&&i.hands[ut].y<.15?i.hands[ut].clone():null);v.push(this.fromPivot(C,P,U,it,G,st,Y))}else{const b=oe((_-f)/(d-f));v.push(this.fromPivot(new I(a.x,Ut(a.y-l,a.y,b),a.z),0,0,[o.ankles[0].clone(),o.ankles[1].clone()],[0,0],[null,null]))}if(M.push(_/d),_>=d)break}return{keys:v,at:M,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var r;const e=this.seq;let n;if(e){e.t+=t;const a=qn(e.t/e.dur),l=e.linear?a:oe(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=qn((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(r=this.onPrint)==null||r.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=no(this.breath+t/(this.rest==="lie"?3.6:4));const o=Math.sin(We*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*o:0,i&&this.rest==="lie"&&(n.head.y+=.012*o),i&&this.rest==="kneel"){const a=.5+.5*o;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,o=e.dur-n-i;e.w=e.t<n?oe(e.t/n):e.t>e.dur-i?oe((e.dur-e.t)/i):1;const r=e.t-n;e.wiggle=r>0&&r<o?Math.sin(We*(e.kind==="chin"?4.5:5.5)*r)*oe(r/.15)*oe((o-r)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(x,g)=>x&&g?x.clone().lerp(g,n):n<.5?x?x.clone():null:g?g.clone():null,o=Ut(t.lean,e.lean,n),r=Ut(t.roll,e.roll,n),a=(x,g)=>new pe().setFromEuler(this.e1.set(x,0,g)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(o,r),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(o,r));const f=Ut(t.hips,e.hips,n),d=[0,1].map(x=>{const g=t.ankles[x].clone().sub(this.hipOf(t.head,l,x,t.hips)),y=e.ankles[x].clone().sub(this.hipOf(e.head,c,x,e.hips)),w=Ut(g.length(),y.length(),n),v=Ut(t.ankles[x].y,e.ankles[x].y,n),M=this.hipOf(u,h,x,f),S=Ut(g.x,y.x,n),E=Ut(g.z,y.z,n),_=Math.hypot(S,E),b=M.y-v,T=Math.sqrt(Math.max(0,w*w-b*b)),C=new I(M.x,Math.max(v,M.y-w),M.z);return _>1e-4&&(C.x+=S/_*T,C.z+=E/_*T),C.y=Math.max(C.y,this.footH+.02),C}),p=x=>{const g=t.hands[x],y=e.hands[x];if(!g||!y)return i(g,y);const w=Math.atan2(g.x-t.head.x,g.z-t.head.z),v=Math.atan2(y.x-e.head.x,y.z-e.head.z),M=w+fn(v-w)*n,S=Ut(Math.hypot(g.x-t.head.x,g.z-t.head.z),Math.hypot(y.x-e.head.x,y.z-e.head.z),n);return new I(u.x+Math.sin(M)*S,Ut(g.y,y.y,n),u.z+Math.cos(M)*S)},m=[p(0),p(1)];return m.forEach((x,g)=>{x&&(this.outsideBody(x,u,h,this.arms[g].side),x.y=Math.max(x.y,.03))}),{head:u,lean:o,roll:r,ankles:d,feet:[Ut(t.feet[0],e.feet[0],n),Ut(t.feet[1],e.feet[1],n)],hands:m,hips:f}}outsideBody(t,e,n,i){const o=t.clone().sub(e).applyQuaternion(n.clone().invert()),r=.5+.12;if(Math.abs(o.x)>=r||Math.abs(o.y)>=r||Math.abs(o.z)>=r)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=r-u*o.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(o.setComponent(l,c*r),t.copy(o.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const o=this.feet[n].side;return t.clone().add(new I(o*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),o=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const r=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));o(this.t1.copy(t.head).sub(r).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",o(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new pe().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new pe().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*oe((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=o(c,new I),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const o=t.ground;let r=-1/0;for(let a=Math.max(0,Math.floor((e-n)/Sa));a<=Math.min(o.length-1,Math.ceil((e+i)/Sa));a++)r=Math.max(r,o[a]);return r===-1/0?this.world.groundAt(this.base.x,this.base.z):r}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),o=n.total-e.s;this.speed+=Be(Math.min(i,Math.sqrt(2*6*Math.max(0,o)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Be(fn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const r=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(r)&&(this.qv-=2.6);const a=no(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),o<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const o=this.feet.map(r=>{const a=this.neutral(r,e,i,new I);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:o,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*We*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=oe(n/.15)*(1-oe((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+Jo((n-.12)/.74)*We,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*qn(n/.45)):0,o=n>.4?Math.sin(Math.PI*qn((n-.4)/.6)):0;this.qRest=.08*i-.12*o,this.armsTo(.12*o,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=fn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),o=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const r=oe(e.t/i);this.vy=0,this.pos.y=Ut(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,r),this.leanRest=.16*r,this.qRest=-.24*r,this.armsTo(.95*r,.12,.3),this.yaw+=Be(fn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const r=oe(e.t/o);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*r);if(this.pos.y=Ut(e.y0,this.reachTop().hard,r),this.qRest=.22*r,this.armsTo(-1.5*r,.15,.25),e.t>=o){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/ze),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ze);this.vy=ze*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ze*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Be(fn(e.yawTo-this.yaw),-6*t,6*t);const r=e.t/e.air,a=Math.sin(Math.PI*qn(r*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Ut(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&r>.12&&r<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Be(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const o=new I((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new I(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),o,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=We*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Be(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const r=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=r?Ut(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=We*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(r?3.5*Be(a,-12,12):0))*t,this.lean=Be(this.lean+this.leanV*t,-.6,.7),this.roll=Be(-(this.sway/this.hipX)*.045,-.08,.08),r&&this.clockOn){const d=this.running,p=Ut(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const m of this.arms)m.tp=(m.side===-1?1:-1)*p*Math.cos(We*(this.phase-.04)),m.to=m.side===this.wallSide?.03:Ut(.07,.2,d),m.te=Ut(.24,1.55,d)+Math.max(0,-m.tp)*.35}else if(!this.act&&!this.dancing)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=We*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const o=i.s,r=oe(o),a=Ut(i.from.x,i.to.x,r),l=Ut(i.from.z,i.to.z,r),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Ut(i.from.y,i.to.y,oe((o-.15)/.75))+c*Math.pow(Math.sin(Math.PI*o),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,m=f/d,x=Math.min(pn+.08+.35*(1-o),(1-r)*d+pn+.04);let g=-1/0;for(let E=0;E<=4;E++){const _=Ii-.04+(x-Ii+.04)*(E/4);g=Math.max(g,this.world.groundAt(a+p*_,l+m*_))}const y=g+.07*(1-oe((o-.82)/.18)),w=Math.max(h,o>.97?i.to.y:y);i.sy=w>i.sy?w:i.sy+(w-i.sy)*Math.min(1,t*30),o<.02&&(i.sy=Math.max(w,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+fn(i.toYaw-i.fromYaw)*r,this.kneeClear(i,t);const v=Math.sin(i.yaw),M=Math.cos(i.yaw),S=i.ankle.y;for(let E=0;E<8;E++){const _=i.ankle.y-this.footH*.5,b=this.kneeAt(i,this.t2),T=b.x+v*.07,C=b.z+M*.07,P=(this.world.solidAt(b.x,b.y,b.z)||this.world.solidAt(T,b.y-.07,C))&&this.world.groundAt(T,C)<b.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*pn,_,i.ankle.z+M*pn)&&!P||i.ankle.y-S>.45)break;i.ankle.y+=.06}i.toe=Ut(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*o),oe(o/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let o=0;o<2;o++){const r=this.kneeAt(i,this.t3),a=(r.x-i.ankle.x)*Math.sin(i.yaw)+(r.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,r.y-i.ankle.y),c=I0-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const o=i.side*(this.hipX+i.rel.x),r=i.rel.z;i.ankle.set(this.pos.x+e*o+n*r,this.pos.y-.5+i.rel.y,this.pos.z-n*o+e*r),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*c*pn,d=i.ankle.y-this.footH+h*pn,p=i.ankle.z+l*c*pn;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const o=i.pitch,r=Math.cos(o),a=Math.sin(o),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*r*_n,u=i.ankle.z+c*r*_n,f=i.ankle.y-this.footH*r+_n*a,d=(this.world.groundAt(h+l*(pn-_n),u+c*(pn-_n))+.005-f)/(pn-_n);d>-1&&(i.toe=Math.min(i.toe,o-Math.asin(Be(d,-1,1))))}}}}const Sc=5,sb=4935768,Xd=.3,ob=14;function rb(){const s=new Ue(.11,_n-Ii-.01).rotateX(-Math.PI/2).translate(0,0,(_n+Ii)/2-.005),t=new Ue(.11,pn-_n-.02).rotateX(-Math.PI/2).translate(0,0,(pn+_n)/2+.01),e=Aw([s,t]);return s.dispose(),t.dispose(),e}const qd=72,ab=2.6;let Qo=null;function lb(){if(Qo)return Qo;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Qo=new ps(s),Qo.colorSpace=Ne,Qo}class cb{constructor(){R(this,"group",new he);R(this,"puffs",[]);R(this,"dust");R(this,"zeds",[]);R(this,"prints",[]);R(this,"printGeo",rb());R(this,"own",[]);R(this,"m",new Kt);R(this,"q",new pe);R(this,"s",new I);const t=new nn(1,1,1),e=new $a({color:15987958});this.dust=new vo(t,e,qd),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new Ye({color:sb,transparent:!0,opacity:Xd,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new wt(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>Sc+6){const o=this.prints.shift();o.m.removeFromParent(),o.mat.dispose()}}puff(t,e,n){this.puffs.length>=qd&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new Dn(Math.random(),Math.random(),Math.random())})}z(t){const e=new vl({map:lb(),transparent:!0,depthWrite:!1,opacity:0}),n=new Yh(e);this.group.add(n),this.zeds.push({s:n,age:0,life:ab,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const o=i.age/i.life,r=o<.18?o/.18:1-(o-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(r,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,o)=>{i.age+=t;const r=n-1-o,a=r<Sc?1:Math.max(0,1-(r-Sc+1)/3),l=1-Math.min(1,Math.max(0,(i.age-ob)/3)),c=Xd*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const o=i.age/i.life;return o>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*o+.06*Math.sin(o*7)),i.y0+.75*o,i.z0),i.s.scale.setScalar(.14+.2*o),i.s.material.opacity=Math.min(1,o*5)*(1-Math.max(0,(o-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const ns=.12,jo={thick:.07,long:.15,wide:.135},Yd=2.6,hb=2.9,tr=2.5,Ea={back:-.55,fwd:2.1,inward:-.22,out:1},io={up:-I0,down:.95,side:.3,twist:.35},bc={flex:1.55,side:.45,turn:1.6},ke=(s,t,e)=>s<t?t:s>e?e:s,Ec=(s,t,e)=>s+(t-s)*e;function Ta(s,t,e,n){const i=new nn(ns,s-t,ns).translate(0,(s+t)/2,0);return n.push(i),new wt(i,e)}function Tc(s,t,e){return e.push(s),new wt(s,t)}const Cn=new I,Mn=new I,ui=new I,ul=new Kt;function fl(s,t,e){return Mn.copy(s).negate().normalize(),ui.copy(t).addScaledVector(Mn,-t.dot(Mn)),ui.lengthSq()<1e-8&&ui.set(1,0,0).cross(Mn),ui.normalize(),Cn.crossVectors(Mn,ui),ul.makeBasis(Cn,Mn,ui),e.setFromRotationMatrix(ul)}const mo=new I,ai=new I,os=new I,Ua=new I,Ch=new I,$d=new pe;function Ss(s,t,e,n,i,o,r,a=Math.PI){mo.subVectors(t,s);const l=mo.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=ke(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?ai.set(0,-1,0):ai.copy(mo).divideScalar(l);const u=ke((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);os.copy(i).addScaledVector(ai,-i.dot(ai)),os.lengthSq()<1e-8&&os.set(0,0,1).addScaledVector(ai,-ai.z),os.normalize(),Ua.copy(s).addScaledVector(ai,e*u).addScaledVector(os,e*f),Ch.copy(s).addScaledVector(ai,h),fl(mo.subVectors(Ua,s),i,o),fl(Ch.sub(Ua),i,$d),r.copy(o).invert().multiply($d)}const ji=new Dn,ub=new I;function Kd(s,t,e,n,i="XYZ"){ji.setFromQuaternion(s,i);const o=ke(ji.x,t[0],t[1]),r=ke(ji.y,e[0],e[1]),a=ke(ji.z,n[0],n[1]);(o!==ji.x||r!==ji.y||a!==ji.z)&&s.setFromEuler(ji.set(o,r,a,i))}class fb{constructor(t,e,n){R(this,"root",new he);R(this,"fx",new cb);R(this,"motion");R(this,"placed",!1);R(this,"face");R(this,"world");R(this,"pelvis",new he);R(this,"turn",new he);R(this,"squash",new he);R(this,"legs",[]);R(this,"arms",[]);R(this,"solid",[]);R(this,"own",[]);R(this,"look",null);R(this,"targets",[null,null]);R(this,"talkCh",null);R(this,"clock",0);R(this,"lastBreath",0);R(this,"showing",null);R(this,"yawLook",0);R(this,"pitchLook",0);R(this,"a2");R(this,"v1",new I);R(this,"v2",new I);R(this,"v3",new I);R(this,"v4",new I);R(this,"v5",new I);R(this,"qa",new pe);R(this,"qb",new pe);R(this,"qc",new pe);R(this,"qd",new pe);R(this,"qm",new Kt);R(this,"headCap",0);R(this,"scratchSeen",null);R(this,"sc1",new I);R(this,"sc2",new I);R(this,"sc3",new I);R(this,"qf",new pe);R(this,"pts",[0,1,2,3,4].map(()=>new I));R(this,"kg",[0,1,2,3,4,5].map(()=>new I));this.world=n,this.motion=new ib(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new eb(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,o,r]=yu(t),a=new Ct().setRGB(i/255,o/255,r/255,Ne);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new $a({color:t});this.own.push(n);const i=ns/2;if(!e.legless)for(const r of[-1,1]){const a=new he,l=new he,c=new he,h=new he;a.position.set(r*e.hipX,0,0);const u=Ta(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=Ta(i,-e.shin-i,n,this.own);l.add(f),c.position.y=-e.shin;const d=Tc(new nn(ns,e.footH,_n-Ii).translate(0,-e.footH/2,(_n+Ii)/2),n,this.own);h.position.set(0,-e.footH,_n);const p=Tc(new nn(ns,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:r}),this.solid.push(u,f,d,p)}const o=this.a2;for(const r of[-1,1]){const a=new he,l=new he,c=new he,h=Ta(i,-o,n,this.own);a.add(h),l.position.y=-o;const u=Ta(i,-o-i,n,this.own);l.add(u),c.position.y=-o;const f=Tc(new nn(jo.thick,jo.long,jo.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new pe;this.arms.push({shoulder:a,elbow:l,wrist:c,side:r,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new I,pushE:0,pushETo:new I,pushN:new I,flatW:0,palm:new I,palmDir:new I(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new I){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new I){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new I).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(ke(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(ke(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const o=Ec(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),r=Ec(this.face.roll,ke(this.face.roll,-.03,.03),this.headCap),a=1-ke(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(o*a,this.yawLook*a,r*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+ns/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),o=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-o&&i.y<1+e-o&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const o=t.parent,r=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let m=0;m<h.length;m++){const x=this.squash.worldToLocal(this.v4.copy(h[m]));if(!(Math.abs(x.x)<.5+n&&x.y>.02-r&&x.y<1+n-r&&Math.abs(x.z)<.5+n))continue;const g=[[.5+n-x.x,1,0,0],[x.x+.5+n,-1,0,0],[.5+n-x.z,0,0,1],[x.z+.5+n,0,0,-1],[1+n-r-x.y,0,1,0]];i&&g.push([x.y+r,0,-1,0]);let y=null;for(const w of g)!i&&this.v2.set(w[1],w[2],w[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!y||w[0]<y[0])&&(y=w);y&&y[0]>c&&(c=y[0],l=m,u.set(y[1],y[2],y[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=o.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(o.matrixWorld).invert()),p=os.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,o)=>{const r=t.feet[o],a=this.pelvis.worldToLocal(this.v1.copy(r.ankle)),l=this.v3.set(0,0,1).applyQuaternion(r.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?ke(c,-.2,.7):ke(c,-.7,.2);if(h!==c){const S=Math.hypot(l.x,l.z);l.x=Math.sin(h)*S,l.z=Math.cos(h)*S}let u=r.q;if(r.mode!=="free"&&Math.abs(c-h)>io.twist*.85){const S=c-h-Math.sign(c-h)*io.twist*.85;u=this.qf.setFromAxisAngle(ui.set(0,1,0),-S).multiply(r.q)}const f=r.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(Cn.set(i.side*(.12+1.2*f),D0(-a.y,t.L),0)),p=ub.set(0,1,0).applyQuaternion(n);if(r.mode==="free"){const S=ke(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,Ec(.6,1,S)).addScaledVector(p,1-.85*S);const E=ke(-a.z/.25,0,1);d.z+=1.6*E,d.addScaledVector(p,-.9*E)}const m=r.mode==="free"?hb:Yd;Ss(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,m),r.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(Cn.set(i.side*.3,0,0)),m);const x=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),g=Math.atan2(x.z,-x.y),y=Math.asin(ke(x.x*i.side,-1,1)),w=ke(g,Ea.back,Ea.fwd),v=ke(y,r.mode==="free"?-.45:Ea.inward,Ea.out);if(w!==g||v!==y){const S=Mn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(w),Math.cos(v)*Math.sin(w));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(x,S))}r.mode==="free"&&this.kneeOverGround(i,a,m),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const M=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(M.invert()).multiply(u),Kd(i.ankle.quaternion,[io.up,io.down],[-.35,io.twist],[-.3,io.side]),i.toes.rotation.set(ke(r.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,o=Yd){const r=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-r.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const m=this.v4.crossVectors(h,d).normalize();m.dot(i)<0&&m.negate();let x=Math.PI/2;for(let y=1;y<=18;y++){const w=y/18*(Math.PI/2);if(f.y+p*(Math.cos(w)*d.y+Math.sin(w)*m.y)<=n){x=w;break}}const g=d.multiplyScalar(Math.cos(x)).addScaledVector(m,Math.sin(x));Ss(a,l,r.thigh,r.shin,g,t.hip.quaternion,t.knee.quaternion,o)}kneeOverGround(t,e,n){const i=this.motion,[o,r,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(o),o.y>=this.world.groundAt(o.x,o.z)+ns/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),r.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,r);const p=a.length();if(p<1e-4)return;a.divideScalar(p),l.crossVectors(c,a).normalize(),l.dot(o.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let m=-1;for(let g=1;g<=24&&m<0;g++){const y=g/24*Math.PI;this.pelvis.localToWorld(h.copy(r).addScaledVector(a,p*Math.cos(y)).addScaledVector(l,p*Math.sin(y))),h.y>=this.world.groundAt(h.x,h.z)+ns/2&&(m=y)}if(m<0)return;const x=h.copy(a).multiplyScalar(Math.cos(m)).addScaledVector(l,Math.sin(m));Ss(u,e,i.thigh,i.shin,x,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,o=n+i,r=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[r(l)]=l),c){const d=r(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const m=e.arms[p],x=this.v2.set(d.side*.5,-.35,-1);if(f){x.set(0,1,0).applyQuaternion(f);const b=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();x.dot(b)>.3&&x.set(0,1,0),x.multiplyScalar(.45).add(Mn.set(0,0,-1))}d.fk[0].setFromEuler(new Dn(m.pitch,0,d.side*Math.max(.04,m.out))),d.fk[1].setFromAxisAngle(Cn.set(1,0,0),-ke(m.elbow,0,tr));let g=0,y=!1;const w=m.reach??(h?a[p]:null);if(w){const b=d.shoulder.position;if(m.reach&&m.flat){y=!0;const T=d.shoulder.getWorldPosition(this.v3),C=d.elbow.getWorldPosition(Ua);d.palm.copy(w);const P=mo.set(w.x-T.x,0,w.z-T.z);P.lengthSq()>1e-6&&P.normalize();const U=ai.set(w.x-C.x,0,w.z-C.z).addScaledVector(P,.25);U.lengthSq()<1e-4&&U.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),U.normalize(),d.palmDir.lerp(U,d.flatW<.05?1:Math.min(1,t*10)).normalize();const F=this.v1.copy(w).add(Mn.set(0,jo.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),k=this.turn.worldToLocal(F);Ss(b,k,n,i,x,d.ik[0],d.ik[1],tr)}else{const T=this.turn.worldToLocal(this.v1.copy(w));if(m.reach||w===c){if(w===c){const C=d.shoulder.getWorldPosition(Ch),P=mo.set(ke(C.x,c.x-.5,c.x+.5),ke(C.y,c.y-.5,c.y+.5),ke(C.z,c.z-.5,c.z+.5));P.addScaledVector(ai.subVectors(C,P).normalize(),.06),this.turn.worldToLocal(T.copy(P))}T.distanceTo(b)<=o*.98||m.reach?Ss(b,T,n,i,x,d.ik[0],d.ik[1],tr):this.pointAlong(d,T)}else this.pointAlong(d,T)}g=m.reach?m.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&m.reach){const b=d.shoulder.position,T=e.headDrop,C=this.turn.worldToLocal(this.sc1.copy(m.reach).add(Mn.set(0,jo.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),P=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-T-.15,.62):this.sc2.set(d.side*.4,1.14-T,-.04+.05*v.wiggle);let U=C;if(v.kind==="chin")U=C.lerp(P,v.w);else{const F=this.sc3.set(d.side*.9,1.25-T,.1),k=v.w,$=1-k;U=C.multiplyScalar($*$).addScaledVector(F,2*k*$).addScaledVector(P,k*k)}x.lerp(v.kind==="chin"?Cn.set(d.side,-.3,.1):Cn.set(d.side,.35,-.15),v.w),Ss(b,U,n,i,x,d.ik[0],d.ik[1],tr),y=v.w<.05,g=1}d.aimW+=((w?g:0)-d.aimW)*Math.min(1,t*(m.reach?30:7)),d.flatW+=((y?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const M=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=M?1:0,M&&d.pushETo.copy(M),d.pushE>0){const b=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);fl(b,x,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const S=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),E=y?null:this.pushOut(S,.13,d.shoulder.getWorldPosition(this.v3));if(E?(d.pushTo.copy(E),d.pushN.subVectors(E,S).normalize(),d.push=1):d.push=0,d.push>0){const b=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));b.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const T=this.turn.worldToLocal(this.v1.copy(d.pushTo));Ss(d.shoulder.position,T,n,i,b,this.qa,this.qb,tr),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(Cn.set(1,0,0),ke(-.1-.05*m.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const b=d.elbow.getWorldQuaternion(this.qb);Cn.set(0,this.v3.set(1,0,0).applyQuaternion(b).y<0?-1:1,0),Mn.copy(d.palmDir).negate(),ui.crossVectors(Cn,Mn).normalize(),Mn.crossVectors(ui,Cn).normalize(),ul.makeBasis(Cn,Mn,ui);const T=this.qc.setFromRotationMatrix(ul),C=b.invert().multiply(T);Kd(C,[-.45,bc.side],[-1.6,bc.turn],[-1.55,bc.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,C,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),o=this.v5.subVectors(i,n);if(o.lengthSq()<1e-6)return;o.normalize();const r=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=os.crossVectors(o,r).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(o,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(o,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=os.subVectors(e,t.shoulder.position);fl(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(Cn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),o=Math.round(t.y),r=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,o+h,r+u))continue;const f=c?(i+c*.5-t.x)*c:h?o+.5-t.y:(r+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<l&&(l=p,a=new I(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new I).distanceTo(t.feet[l].ankle));let n=0,i=0;const o=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},r=[0,1,2,3,4].map(()=>new I);for(const a of this.legs)this.legPoints(a,r),[r[2],r[3],r[4]].forEach(o),i+=r.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,r),[r[1],r[4]].forEach(o),i+=r.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const db="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",pb="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",mb="I hid your mouse pointer! If you want it back, press the {ESC} key!",gb="Click anywhere to look around.",xb="Click anywhere to carry on.",vb="That's it! This way.",yb="Hi, Welcome to Robyn Miller's Listening Room. Feel free to take a look around.",Mb="You are currently one of {x} people in the room.",_b="Things are quiet. You are the only person in the room.",wb="Have a seat and listen to some of my favorite grooves, man.",Sb="Just so you know, the sweet spot for listening to Robyn's awesome tunes is the couch. And it's more comfy!",bb=["Ooh. I know this one.","Now this has a beat.","Excuse me. I have to.","Finally, a groove."],Eb=["I've been practising.","Smooth, right?","Don't watch my feet. Watch the hat.","I learned this from a record. This record, actually.","Try to keep up.","I don't dance for just anybody. Well. I do."],Tb="I hope you enjoyed your listening experience! Anything we could do to make it more enjoyable? Or maybe you just want to leave Robyn a note?",Ab="Sure!",Rb="No thanks",Cb="Okay! Come back soon!",Pb="I get lonely here. Please come visit! And any suggestions?",Lb="Yeah...",Ib="Not really.",Db="Bye!",Nb=["You may think that I'm not an appropriate host for a listening room? Hm. Well maybe you're not an appropriate guest for our listening room!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Have a seat. The couch is very forgiving.","That couch has been sat on by a lot of very important listeners. Mostly me.","The green velvet is a little worn. That means it works.","Go on, try the piano. It doesn't bite. The lid might.","I'd play the piano myself, but my arms only reach middle C.","Those speakers are taller than me. Most things are.","I asked the speakers to keep it down. They said they'd think about it.","The records are in the stand on the table. Sit on the couch and have a look. Gently.","Somewhere in that stand is my favourite record. I'm not telling which.","Turn it up? I don't know where the knob is. I've been told not to look for it.","Shh. The room is listening.","The best seat is the middle of the couch. Second best: anywhere on the couch.","Every room needs a host. This one got me. Lucky room.","I polished the piano myself. You can see me in it. Hello, me.","Music is best enjoyed slowly. Like soup.","I used to be just a block. Now I'm a block with legs. That's progress.","No hurry. I'm on listening-room time.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","If you hear snoring later, that was the bass.","Those little lights on the amplifier? I counted them. Twice. Two different answers.","Close your eyes. Now open them. See? Still a listening room.","Don't mind me. I'm just here for the ambience. I am the ambience.","I'm a professional. I've hosted at least one listener before. Possibly two.","Did you know a piano has eighty-eight keys? I checked. With my hat.","The lights are low on purpose. Ears work better in the dark. I read that somewhere. On a record.","That cord goes from the record player all the way to the back of the cabinet. I followed it. It took a while.","If you need me, I'll be right behind you. Always. Right behind you.","Do you play? You have a piano player's way of standing.","Some people listen with their ears. I listen with my whole block."],Ub=["Yes? Can I help you?","Hey! Listen to the room, not to me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a record.","Me? I'm not part of the furniture. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was humming.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],zb=["Hm? Oh! I wasn't asleep. I was listening with my eyes closed.","I'm up! I'm up!","Was I snoring? I don't snore. That was the bass.","Huh? Who? Oh. You. Welcome back."],Fb=["Back again! I knew you would be.","Welcome back. I kept the couch warm.","Oh good, you're back. It's quiet in here without you."],kb=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an ear on things.","Bye! The records will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],Ob=["Lovely, isn't it?","Good choice.","That's one of my favourites. Don't tell the others."],Bb=["Oh! Someone else just came in. There are {x} of you now.","Another listener! That makes {x} of you."],Hb=["Somebody just left. Now there are {x} of you."],Vb=["Somebody just left. It's just you and me now."];function oi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const Re=.2,Gb=Math.sqrt(9.81/(22*Re)),Wb={...WS,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},er=(s,t,e,n=new I)=>n.set(s/Re,t/Re-.5,e/Re),nr=(s,t=new I)=>t.set(s.x*Re,(s.y+.5)*Re,s.z*Re);class Xb{constructor(t,e,n,i=!1){R(this,"scene",new qh);R(this,"cam",new tn);R(this,"mcam",new tn);R(this,"shadow");R(this,"rig");R(this,"count",null);R(this,"onEnter",()=>{});R(this,"onLeave",()=>{});R(this,"el");R(this,"textEl");R(this,"bubble",null);R(this,"onKey",()=>{});R(this,"hidden",!1);R(this,"wasLocked",!1);R(this,"hidSaid",!1);R(this,"choicesEl");R(this,"pendingChoices",null);R(this,"queue",[]);R(this,"used",new Set);R(this,"grid",null);R(this,"stage","waiting");R(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});R(this,"inside",!1);R(this,"wasInside",!1);R(this,"wasOut",!0);R(this,"quiet",0);R(this,"resting","no");R(this,"soughtRest",!1);R(this,"idleIn",6);R(this,"remarkIn",45);R(this,"followIn",0);R(this,"hemi");R(this,"sun");R(this,"dim",1);R(this,"glanceIn",2);R(this,"glanceAt",null);R(this,"dest",null);R(this,"last",{x:0,z:0,yaw:0,pitch:0});R(this,"countSaid",0);R(this,"lastCrowd",-999);R(this,"clock",0);R(this,"standH",0);R(this,"v1",new I);R(this,"v2",new I);R(this,"waitAt",null);R(this,"danceBeat",()=>null);R(this,"dancingNow",!1);R(this,"danceSpotIn",0);R(this,"danceTalkIn",0);R(this,"danceRound",[]);R(this,"danceAt",-1);R(this,"danceNext",0);R(this,"bpmAt",null);R(this,"bpmSeen",110);R(this,"heardMusic",!1);R(this,"onSite",()=>!1);R(this,"openContact",()=>{});R(this,"farewell","none");R(this,"doorWas",-1);R(this,"doorAt",0);R(this,"nearing",!1);R(this,"headingFor",0);R(this,"lookedAt",0);R(this,"couchAt",-1e9);R(this,"sweetAt",-1e9);R(this,"scaleM",new Kt().makeScale(Re,Re,Re));this.gallery=t,this.player=e,this.main=n,this.touch=i;const o={groundAt:(f,d)=>this.wallAt(f*Re,d*Re)?this.gallery.arch.H/Re:-.5,solidAt:(f,d,p)=>{const m=(d+.5)*Re;return m<0?!0:m<this.gallery.arch.H&&this.wallAt(f*Re,p*Re)}};this.rig=new fb(Wb,3,o),this.scene.add(this.rig.root,this.rig.fx.group),this.hemi=new rx(16777215,13815492,1.9),this.scene.add(this.hemi);const r=new ux(16777215,1.5);this.sun=r,r.position.set(.4,1,.7),this.scene.add(r.target),this.scene.add(r);const a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.62)"),c.addColorStop(.55,"rgba(0,0,0,0.3)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);const h=new ps(a);this.shadow=new wt(new Ue(1.5,1.2),new Ye({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),this.choicesEl=document.createElement("div"),this.choicesEl.className="hb-choices",u.append(this.textEl,this.choicesEl),this.el.append(u),this.textEl.addEventListener("click",f=>{var p;const d=(p=f.target.closest(".hk"))==null?void 0:p.dataset.k;d&&(f.preventDefault(),f.stopPropagation(),this.onKey(d),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get asking(){var t;return!!((t=this.bubble)!=null&&t.choices)}ask(t,e,n="happy"){this.queue=[],this.bubble&&this.endBubble(),this.pendingChoices=e,this.start(t,n)}showChoices(t){t.forEach(([e,n],i)=>{const o=document.createElement("button");o.textContent=e,i===0&&(o.className="yes"),o.addEventListener("pointerdown",r=>r.stopPropagation()),o.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),this.endBubble(),n()}),this.choicesEl.append(o)}),this.choicesEl.classList.add("on")}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*Re,z:this.rig.pos.z*Re}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}farewellSpot(){const t=this.arch.entrance,e=(t.a+t.b)/2,n=this.player.pos,i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw);let r=null,a=1/0;for(let l=.6;l<=2.41;l+=.2)for(let c=-1.2;c<=1.21;c+=.15){const h=e+c,u=t.z-l,f=Math.hypot(h-n.x,u-n.z),d=((h-n.x)*i+(u-n.z)*o)/Math.max(f,1e-6);if(f<.9||d<.75||!this.freeAt(h,u)||!this.seen(h,u))continue;const p=Math.abs(Math.abs(c)-.6)+Math.abs(l-1)*.6+Math.max(0,1.8-f);p<a&&(a=p,r={x:h,z:u})}return r??this.doorSpot()}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/Re,t.z/Re,0),this.dest=null}gridFor(){var d;if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,o=this.gallery.data.layout.outline.t,r=7,a=e.x0-o-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(o+2.5))/n),h=Math.ceil((e.z1-e.z0+o+r)/n),u=new Uint8Array(c*h),f=((d=this.gallery.furniture)==null?void 0:d.solids)??[];for(let p=0;p<h;p++)for(let m=0;m<c;m++){const x=a+(m+.5)*n,g=l+(p+.5)*n,y=x>e.x0+i&&x<e.x1-i&&g>e.z0+i&&g<e.z1-i,w=g>e.z1+o+i,v=x>t.entrance.a+i&&x<t.entrance.b-i&&g>e.z1-i-.01&&g<e.z1+o+i+.01;!y&&!w&&!v||t.solids.some(M=>x>M.x0-i&&x<M.x1+i&&g>M.z0-i&&g<M.z1+i)||f.some(M=>{const S=x-M.x,E=g-M.z,_=S*M.c-E*M.s,b=S*M.s+E*M.c;return Math.abs(_)<M.hw+i*.8&&Math.abs(b)<M.hd+i*.8})||(u[p*c+m]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),o=Math.floor((e-n.z0)/n.c);return i>=0&&o>=0&&i<n.nx&&o<n.nz&&n.free[o*n.nx+i]===1}clear(t,e,n,i){const o=Math.hypot(n-t,i-e),r=Math.max(1,Math.ceil(o/.1));for(let a=0;a<=r;a++)if(!this.freeAt(t+(n-t)*a/r,e+(i-e)*a/r))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,o=(v,M)=>[Math.floor((v-n.x0)/n.c),Math.floor((M-n.z0)/n.c)];let[r,a]=o(i.x,i.z);const[l,c]=o(t,e),h=(v,M)=>v>=0&&M>=0&&v<n.nx&&M<n.nz&&n.free[M*n.nx+v]===1;if(!h(l,c))return null;if(!h(r,a)){let v=null,M=1/0;for(let S=-4;S<=4;S++)for(let E=-4;E<=4;E++)h(r+E,a+S)&&E*E+S*S<M&&(M=E*E+S*S,v=[r+E,a+S]);if(!v)return null;[r,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,M)=>{const S=Math.abs(v-l),E=Math.abs(M-c);return Math.max(S,E)+.414*Math.min(S,E)},m=[[p(r,a),a*n.nx+r]];f[a*n.nx+r]=0;const x=c*n.nx+l;for(;m.length;){let v=0;for(let _=1;_<m.length;_++)m[_][0]<m[v][0]&&(v=_);const[,M]=m.splice(v,1)[0];if(M===x)break;const S=M%n.nx,E=Math.floor(M/n.nx);for(const[_,b]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const T=S+_,C=E+b;if(!h(T,C)||_&&b&&(!h(S+_,E)||!h(S,E+b)))continue;const P=C*n.nx+T,U=f[M]+(_&&b?1.414:1);U<f[P]&&(f[P]=U,d[P]=M,m.push([U+p(T,C),P]))}}if(!isFinite(f[x]))return null;const g=[];for(let v=x;v!==-1;v=d[v])g.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});g[g.length-1]={x:t,z:e};const y=[i];let w=0;for(;w<g.length-1;){let v=g.length-1;const M=y[y.length-1];for(;v>w+1&&!this.clear(M.x,M.z,g[v].x,g[v].z);)v--;y.push(g[v]),w=v}return y}goTo(t,e,n,i=!1){const o=this.route(t,e);if(!o||o.length<2)return!1;let r=0;for(let c=1;c<o.length;c++)r+=Math.hypot(o[c].x-o[c-1].x,o[c].z-o[c-1].z);if(r<.25)return!1;const a=i&&r<3.2?"walk":r>3.2?"bound":r>1.6?"run":"walk",l=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(o.slice(1).map(c=>({x:c.x/Re,z:c.z/Re})),a,()=>{this.dest=null},l),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Ls(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),o=-Math.sin(this.player.yaw),r=-Math.cos(this.player.yaw),a=((t-n.x)*o+(e-n.z)*r)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(t=!1){const e=this.player.pos,n=this.at;if(this.goodSpot(n.x,n.z)&&!this.dest)return;const i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),a=-Math.sin(this.player.yaw),l=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,h=1/0;if(l.forEach(([f,d],p)=>{const m=e.x+i*f+r*d,x=e.z+o*f+a*d;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-n.x,x-n.z)+p*.15;g<h&&(h=g,c={x:m,z:x})}),!c)return;const u=c;this.dest&&Math.hypot(this.dest.x-u.x,this.dest.z-u.z)<.8||this.goTo(u.x,u.z,t?"strut":void 0,t)}stageSpot(){const t=this.gallery.data.layout.pieces??[],e=t.find(a=>a.id==="table"),n=t.find(a=>a.id==="couch");if(!e||!n)return null;const i=e.x-n.x,o=e.z-n.z,r=Math.hypot(i,o)||1;for(const a of[.9,1.1,.75]){const l=e.x+i/r*a,c=e.z+o/r*a;if(this.freeAt(l,c))return{x:l,z:c}}return null}buildRound(){const t=this.arch.inner,e=1.05,n=t.x0+e,i=t.x1-e,o=t.z0+e,r=t.z1-e,a=[],l=(p,m,x,g)=>{const y=Math.max(1,Math.round(Math.hypot(x-p,g-m)/2));for(let w=0;w<y;w++)a.push({x:p+(x-p)*w/y,z:m+(g-m)*w/y})},c=(n+i)/2;l(c,o,i,o),l(i,o,i,r),l(i,r,n,r),l(n,r,n,o),l(n,o,c,o);const h=(t.x0+t.x1)/2,u=(t.z0+t.z1)/2,f=[],d=this.stageSpot();d&&f.push({...d,stage:!0});for(const p of a)for(let m=0;m<=3;m++){const x=m*.18,g=p.x+(h-p.x)*x,y=p.z+(u-p.z)*x;if(this.freeAt(g,y)&&!f.some(w=>Math.hypot(w.x-g,w.z-y)<1.2)){f.push({x:g,z:y,stage:!1});break}}this.danceRound=f}danceAbout(t){if(this.rig.busy())return;this.danceRound.length||this.buildRound();const e=this.danceRound;if(!e.length)return;const n=this.at;if(this.danceAt<0){const i=e.findIndex(l=>Math.hypot(l.x-n.x,l.z-n.z)<.6);let o=0;e.forEach((l,c)=>{Math.hypot(l.x-n.x,l.z-n.z)<Math.hypot(e[o].x-n.x,e[o].z-n.z)&&(o=c)}),this.danceAt=i>=0?i:o;const r=i>=0&&e[i].stage;this.rig.motion.danceBag=r?["spin","jump","spin","jump","point"]:null;const a=this.danceBpm();this.danceSpotIn=(r?16:8)*(60/a)*(.9+Math.random()*.3);return}if(!((this.danceSpotIn-=t)>0))for(let i=1;i<=e.length;i++){const o=(this.danceAt+i)%e.length;if(this.goTo(e[o].x,e[o].z,"strut",!0)){this.danceNext=o,this.danceAt=-1,this.rig.motion.danceBag=null;return}}}danceBpm(){const t=this.danceBeat(),e=performance.now();if(t!==null&&this.bpmAt&&e-this.bpmAt.t>400){const n=(t-this.bpmAt.b)/((e-this.bpmAt.t)/1e3)*60;this.bpmAt={b:t,t:e},n>30&&n<240&&(this.bpmSeen=n)}else t!==null&&!this.bpmAt&&(this.bpmAt={b:t,t:e});return this.bpmSeen}screenAt(){const t=nr(this.rig.headCentre(this.v1),this.v2).project(this.main);return t.z<1&&Math.abs(t.x)<1&&Math.abs(t.y)<1?{x:(t.x+1)/2,y:(1-t.y)/2}:null}leaving(t){const e=this.player,n=this.arch.entrance,i=(n.a+n.b)/2,o=Math.hypot(e.pos.x-i,e.pos.z-n.z),r=-Math.sin(e.yaw),a=-Math.cos(e.yaw),l=(i-e.pos.x)/Math.max(o,1e-6),c=(n.z-e.pos.z)/Math.max(o,1e-6);(this.doorAt-=t)<=0&&(this.nearing=this.doorWas>=0&&o<this.doorWas-.04,this.doorWas=o,this.doorAt=.25);const h=r*l+a*c>.8&&this.nearing&&o<5.5;if(this.headingFor=h?this.headingFor+t:Math.max(0,this.headingFor-t*2),!(this.stage!=="company"||!this.inside||this.hidden)){if(this.farewell==="none"&&this.heardMusic&&this.onSite()&&this.headingFor>.4){this.farewell="going",this.wake(),this.rig.motion.dance=null;const u=this.waitAt=this.farewellSpot();this.goTo(u.x,u.z)||this.rig.stop();return}if(this.farewell==="going"){if(o>6.5&&this.headingFor===0){this.farewell="none";return}(!this.rig.busy()||o<2.6)&&this.screenAt()&&this.visible(9)&&(this.farewell="asked",this.ask(Tb,[[Ab,()=>{this.farewell="done",this.openContact()}],[Rb,()=>{this.farewell="no",this.say(Cb,"pleased"),this.rig.perform("wave")}]]));return}if(this.asking&&(this.farewell==="asked"||this.farewell==="lonely")&&this.keepInView(t),this.farewell==="asked"&&!this.asking&&(this.farewell="no"),this.farewell==="lonely"&&!this.asking&&(this.farewell="done"),this.farewell==="no"&&!this.bubble){const u=this.rig.headCentre(this.v1),f=nr(u,this.v2),d=this.main.getWorldDirection(new I),p=f.clone().sub(this.main.position),m=p.length()<9&&d.angleTo(p)<.08&&this.visible(9);this.lookedAt=m?this.lookedAt+t:0,this.lookedAt>=.5&&this.askLonely()}}}keepInView(t){const e=this.main.position,n=nr(this.rig.headCentre(this.v1),this.v2),i=n.clone().project(this.main),o=n.x-e.x,r=n.z-e.z,a=Math.hypot(o,r);if(a<.5)return;const l=1-Math.exp(-t*2.5),c=this.player;if(i.z>=1||Math.abs(i.x)>.55){let u=Math.atan2(-o,-r)-c.yaw;u=Math.atan2(Math.sin(u),Math.cos(u)),c.yaw+=u*l}(i.z>=1||i.y<-.4||i.y>.5)&&(c.pitch+=(Math.atan2(n.y-e.y,a)+.2-c.pitch)*l)}askLonely(){this.farewell="lonely",this.lookedAt=0,this.ask(Pb,[[Lb,()=>{this.farewell="done",this.openContact()}],[Ib,()=>{this.farewell="done",this.say(Db,"pleased"),this.rig.perform("wave")}]],"sad")}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?_b:Mb),t.includes("{x}")&&this.count===null){const o=this.queue.shift();o&&this.start(o.text,o.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT|ESC)\}/).map((o,r)=>(r%2,o)).filter(o=>o!==""),i=n.map(o=>Ac(o)?"o":o).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0,choices:this.pendingChoices??void 0},this.pendingChoices=null,this.textEl.textContent="",this.choicesEl.replaceChildren(),this.choicesEl.classList.remove("on"),this.bubble.choices&&this.showChoices(this.bubble.choices),this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.choicesEl.classList.remove("on"),this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const o=Ac(i)?1:i.length,r=Math.max(t.drawn,n),a=Math.min(e,n+o);if(a>r)if(Ac(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=Yb[i],l.textContent=qb[i],this.textEl.append(l)}else{const l=i.slice(r-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=o}t.drawn=e}countLine(){return"{count}"}poke(){if(this.quiet=0,this.wake(),this.farewell==="no"&&!this.asking){this.askLonely();return}this.bubble||(this.say(oi(Ub,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}couch(){this.stage!=="company"||this.hidden||this.clock-this.couchAt<45||(this.couchAt=this.clock,this.wake(),this.bubble&&(this.queue=[],this.endBubble()),this.say(wb,"happy"))}sweetSpot(){return this.stage!=="company"||this.hidden||this.bubble||this.clock-this.sweetAt<150?!1:(this.sweetAt=this.clock,this.wake(),this.say(Sb,"happy"),!0)}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(oi(Ob,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(oi(Bb,this.used),"excited"):this.say(t<=1?Vb[0]:oi(Hb,this.used),"curious"))}hit(t){const e=new Ts(er(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/Re);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=nr(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(oi(zb,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){{const d=this.arch.inner,p=this.at,m=p.x>d.x0&&p.x<d.x1&&p.z>d.z0&&p.z<d.z1;this.dim+=((m?0:1)-this.dim)*(1-Math.exp(-2.5*t));const x=.3+.7*this.dim;this.hemi.intensity=1.9*x,this.sun.intensity=1.5*x,this.sun.color.setRGB(1,.84+.16*this.dim,.64+.36*this.dim)}this.clock+=t;const e=this.player,n=this.rig,i=this.arch,o=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=o?0:this.quiet+t;const r=i.inner;this.inside=e.pos.x>r.x0&&e.pos.x<r.x1&&e.pos.z>r.z0&&e.pos.z<r.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.inv.hello||this.say(yb,"happy"),this.say(this.countLine(),"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(oi(Fb,this.used),"happy")));const a=e.pos.z>r.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.asking&&(this.endBubble(),this.farewell==="asked"?this.farewell="no":this.farewell==="lonely"&&(this.farewell="done")),this.stage==="company"&&(this.queue=[],this.wake(),this.say(oi(kb,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const d=this.outsideSpot();this.goTo(d.x,d.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!e.seated&&this.say(xb,"pleased"),!this.wasLocked&&l&&!this.hidSaid&&!this.hidden&&(this.hidSaid=!0,this.say(mb,"pleased")),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;c&&(c.shown=Math.min(c.text.length,c.shown+t*34),!c.choices&&c.until===1/0&&(c.until=this.clock+Math.max(3,1.2+c.text.split(/\s+/).length/3.6)),this.clock>c.until&&this.endBubble());const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),o&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=er(this.main.position.x,this.main.position.y,this.main.position.z,new I),f=this.stage==="company"&&this.inside&&!this.hidden&&this.farewell!=="going"&&!this.asking?this.danceBeat():null;if(f!==null!==this.dancingNow&&(this.dancingNow=f!==null,n.motion.dance=this.dancingNow?()=>this.danceBeat():null,this.dancingNow&&(this.wake(),n.mood("happy"),this.danceRound=[],this.danceAt=-1,this.danceNext=0,this.danceSpotIn=2+Math.random()*3,this.danceTalkIn=40+Math.random()*40,!this.bubble&&Math.random()<.5&&this.say(oi(bb,this.used),"happy"))),this.leaving(t),this.stage==="company"&&this.resting==="no"&&(this.farewell==="going"||this.asking)||(this.stage==="company"&&this.resting==="no"&&this.dancingNow?(this.danceBpm(),(this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.danceAbout(.45)),!this.bubble&&(this.danceTalkIn-=t)<=0&&(this.danceTalkIn=60+Math.random()*60,this.visible(5.5)&&this.say(oi(Eb,this.used),"happy"))):this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(oi(Nb,this.used),Math.random()<.5?"pleased":"curious")))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),(this.stage==="company"||this.stage==="waiting")&&!this.dancingNow){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const d=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),p=n.roomAt(n.pos.x,n.pos.z,d);if(!(p!=null&&p.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(d);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",d)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?pb:db,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(gb,"pleased"));const o=this.arch.entrance,r=Math.hypot(t.pos.x-(o.a+o.b)/2,t.pos.z-o.z);if(e.startD<0&&(e.startD=r),r<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(vb,"excited");const a=this.doorSpot();this.goTo(a.x,a.z,"strut");return}}after(t){this.rig.update(t*Gb);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const o=Math.max(.35,1-i/1.6);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.5*o*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let o=0;o<12;o++){const r=o/12*Math.PI*2,a=e.x+Math.cos(r)*i,l=e.z+Math.sin(r)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/Re,l/Re,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,o=e<.75?2.5:6;for(const r of this.gallery.placed){const a=Math.hypot(r.centre[0]-n.x,r.centre[2]-n.z);a<o&&this.seen(r.centre[0],r.centre[2])&&(o=a,i=er(r.centre[0],r.centre[1],r.centre[2]))}return i??t.clone()}place(){const t=this.main;if(er(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/Re)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/Re,this.cam.far=t.far/Re,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=nr(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let o=(e.x*.5+.5)*n,r=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);o=Math.max(170,Math.min(n-170,o)),r=Math.max(90,Math.min(i-30,r)),this.el.style.left=`${o}px`,this.el.style.top=`${r}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;er(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Ac=s=>s==="W"||s==="LEFT"||s==="RIGHT"||s==="ESC",qb={W:"W",LEFT:"←",RIGHT:"→",ESC:"esc"},Yb={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right",ESC:"Your mouse pointer back"};let Di=null;const $b=/^((?!chrome|chromium|crios|fxios|edg|opr|android).)*safari/i.test(navigator.userAgent)&&!new URLSearchParams(location.search).has("direct");let lo=null,zi=null;function dl(){const s=$n();if(!lo)if(lo=s.createGain(),$b&&typeof s.createMediaStreamDestination=="function"){const t=s.createMediaStreamDestination();lo.connect(t),zi=new Audio,zi.srcObject=t.stream,zi.play().catch(()=>{})}else lo.connect(s.destination);return lo}const Kb=()=>zi?`streamed to a player (${zi.paused?"stopped":"playing"})`:lo?"straight out":"not yet";function $n(){if(!Di){const s=window.AudioContext??window.webkitAudioContext;Di=new s({latencyHint:"interactive"})}return Di.state!=="running"&&Di.resume().catch(()=>{}),Di}const Zd=()=>Di;let Jd=!1;function Zb(){const s=t=>{if(t instanceof KeyboardEvent&&(t.key==="Escape"||t.metaKey||t.ctrlKey))return;const e=$n(),n=navigator.audioSession;if(n&&n.type!=="playback"&&matchMedia("(pointer: coarse)").matches)try{n.type="playback"}catch{}if(dl(),zi!=null&&zi.paused&&zi.play().catch(()=>{}),Jd&&e.state==="running")return;Jd=!0;const i=e.createBufferSource();i.buffer=e.createBuffer(1,1,e.sampleRate),i.connect(dl()),i.start()};for(const t of["pointerdown","mousedown","touchend","keydown","click"])addEventListener(t,s,{capture:!0,passive:!0})}function Jb(s){if(!Di)return;const t=Di.listener,e=Di.currentTime,n=s.position,i=s.matrixWorld.elements,o=-i[8],r=-i[9],a=-i[10];t.positionX?(t.positionX.setValueAtTime(n.x,e),t.positionY.setValueAtTime(n.y,e),t.positionZ.setValueAtTime(n.z,e),t.forwardX.setValueAtTime(o,e),t.forwardY.setValueAtTime(r,e),t.forwardZ.setValueAtTime(a,e),t.upX.setValueAtTime(i[4],e),t.upY.setValueAtTime(i[5],e),t.upZ.setValueAtTime(i[6],e)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(o,r,a,i[4],i[5],i[6]))}const Qd=s=>`piano/n${s}.m4a`,jd=90,Qb=48;class jb{constructor(){R(this,"ctx",null);R(this,"files",new Map);R(this,"buffers",new Map);R(this,"decoding",new Map);R(this,"voices",[]);R(this,"out",null);R(this,"panner",null);R(this,"pedal",!1);R(this,"where",{x:0,y:1,z:0})}fetchAll(){for(let t=21;t<=108;t++)this.files.has(t)||this.files.set(t,fetch(Qd(t)).then(e=>{if(!e.ok)throw new Error(`${Qd(t)}: ${e.status}`);return e.arrayBuffer()}))}setPosition(t,e,n){if(this.where={x:t,y:e,z:n},this.panner&&this.ctx){const i=this.ctx.currentTime;this.panner.positionX.setValueAtTime(t,i),this.panner.positionY.setValueAtTime(e,i),this.panner.positionZ.setValueAtTime(n,i)}}wake(){if(!this.ctx){const t=$n();this.ctx=t;const e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=6,e.ratio.value=4,e.attack.value=.002,e.release.value=.25;const n=t.createPanner();n.panningModel="equalpower",n.distanceModel="inverse",n.refDistance=1.6,n.rolloffFactor=.7,this.panner=n,this.out=t.createGain(),this.out.gain.value=.9,this.out.connect(n).connect(e).connect(dl()),this.setPosition(this.where.x,this.where.y,this.where.z)}$n(),this.fetchAll()}async decodeAll(){const t=Array.from({length:88},(i,o)=>21+o).sort((i,o)=>Math.abs(i-60)-Math.abs(o-60));let e=0;const n=async()=>{const i=t[e++];if(i!==void 0)return await this.decode(i).catch(()=>{}),n()};await Promise.all([n(),n(),n(),n()])}decode(t){if(this.buffers.has(t))return Promise.resolve();let e=this.decoding.get(t);return e||(this.fetchAll(),e=this.files.get(t).then(n=>this.ctx.decodeAudioData(n.slice(0))).then(n=>{const i=n.getChannelData(0);let o=0;for(let a=0;a<Math.min(i.length,9600);a++)o=Math.max(o,Math.abs(i[a]));let r=0;for(;r<i.length&&Math.abs(i[r])<o*.02;)r++;this.buffers.set(t,{buf:n,at:Math.max(0,r-24)/n.sampleRate})}),this.decoding.set(t,e),e)}noteOn(t){if(t<21||t>108||!this.ctx||!this.out)return;if(!this.buffers.get(t)){this.decode(t).then(()=>this.start(t,!0));return}this.start(t,!1)}start(t,e){const n=this.ctx,i=this.buffers.get(t);for(const c of this.voices)c.m===t&&this.release(c,.03);this.voices.length>=Qb&&this.release(this.voices[0],.02);const o=n.createBufferSource(),r=n.createGain();o.buffer=i.buf,o.connect(r).connect(this.out);const a=n.currentTime;r.gain.setValueAtTime(e?.85:1,a),o.start(a,i.at);const l={m:t,src:o,gain:r,held:!0,t:a};o.onended=()=>{this.voices=this.voices.filter(c=>c!==l)},this.voices.push(l)}noteOff(t){for(const e of this.voices)e.m===t&&e.held&&(e.held=!1,!this.pedal&&t<jd&&this.release(e))}setPedal(t){if(this.pedal=t,!t)for(const e of this.voices)!e.held&&e.m<jd&&this.release(e)}allOff(){for(const t of[...this.voices])this.release(t,.15);this.pedal=!1}release(t,e){if(!this.ctx)return;const n=this.ctx.currentTime,i=e??(t.m<40?.12:t.m<60?.09:.06);t.gain.gain.cancelScheduledValues(n),t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.setTargetAtTime(0,n,i);try{t.src.stop(n+i*8)}catch{}this.voices=this.voices.filter(o=>o!==t)}get sounding(){return this.voices.length}get unpacked(){return this.buffers.size}}const ir="https://listening-music.robynmiller.workers.dev".replace(/\/$/,"")||null,tp=(()=>{const t=new Uint8Array(844),e=new DataView(t.buffer),n=(o,r)=>{for(let a=0;a<4;a++)t[o+a]=r.charCodeAt(a)};n(0,"RIFF"),e.setUint32(4,836,!0),n(8,"WAVE"),n(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,800,!0),t.fill(128,44);let i="";for(const o of t)i+=String.fromCharCode(o);return`data:audio/wav;base64,${btoa(i)}`})(),ts=s=>!!s.getAttribute("src")&&!s.getAttribute("src").startsWith("data:");class t2{constructor(){R(this,"album",null);R(this,"track",0);R(this,"playing",!1);R(this,"cueing",!1);R(this,"moving",!1);R(this,"needleTo",0);R(this,"route","trying");R(this,"lastError","");R(this,"el",null);R(this,"plain",null);R(this,"out",null);R(this,"room",null);R(this,"pan",[]);R(this,"meters",[]);R(this,"buf",new Float32Array(1024));R(this,"speakers",[{x:-1.5,y:1.2,z:0},{x:1.5,y:1.2,z:0}]);R(this,"inside",!0);R(this,"heard",0);R(this,"loudest",0);R(this,"plainVol",0);R(this,"parked",!1);R(this,"waiting",null);R(this,"starts",0);R(this,"holding",!1);R(this,"holdSince",0);R(this,"sought",!1);R(this,"seekedAt",0);R(this,"onChange",()=>{});R(this,"links",new Map);R(this,"asking",new Map);R(this,"readied",!1);R(this,"relinkAt",0)}get players(){return[this.route!=="plain"?this.el:null,this.route!=="speakers"?this.plain:null].filter(t=>!!t)}fromTop(){const t=this.waiting;this.parked=!1,this.waiting=null;const e=$n().currentTime;if(this.out.gain.cancelScheduledValues(e),this.out.gain.setValueAtTime(0,e),this.sought=!1,this.seekedAt=0,t){if(this.playing){const n=this.starts,i=this.addr(t);i?this.put(i):this.prime([t]).then(()=>{const o=this.addr(t);o&&n===this.starts&&this.playing&&this.put(o)})}}else for(const n of this.players){if(n.currentTime>.05){n===this.main&&(this.sought=!0,n.addEventListener("seeked",()=>{this.seekedAt=performance.now()},{once:!0}));try{n.currentTime=0}catch{}}n.paused&&this.playing&&n.play().catch(i=>this.failed(i))}this.holding=!0,this.holdSince=performance.now()}prime(t){if(!ir)return Promise.resolve();const e=Date.now(),n=[...new Set(t)].filter(r=>{var a;return!((((a=this.links.get(r))==null?void 0:a.until)??0)-e>12*6e4)&&!this.asking.has(r)}),i=t.map(r=>this.asking.get(r)).filter(Boolean);if(!n.length)return Promise.all(i).then(()=>{});if(n.length>150)return Promise.all([this.prime(n.slice(0,150)),this.prime(n.slice(150)),...i]).then(()=>{});const o=(async()=>{try{const r=await fetch(`${ir}/link`,{method:"POST",headers:{"content-type":"text/plain"},body:JSON.stringify({files:n})});if(!r.ok)throw new Error(`music server: ${r.status}`);const a=await r.json(),l=Date.now()+a.ttl*1e3-3e4;for(const[c,h]of Object.entries(a.links))this.links.set(c,{url:h,until:l})}catch(r){this.failed(r)}finally{for(const r of n)this.asking.delete(r)}})();for(const r of n)this.asking.set(r,o);return Promise.all([o,...i]).then(()=>{})}addr(t){if(!ir)return t;const e=this.links.get(t);return e&&e.until-Date.now()>5*6e4?e.url:null}ready(){if(!this.readied){this.wire();for(const t of[this.el,this.plain])ts(t)||(t.src=tp,t.play().then(()=>{this.readied=!0}).catch(()=>{}))}}primeAlbums(t){this.prime(t.flatMap(e=>e.tracks.map(n=>n.file)))}failed(t){if((t==null?void 0:t.name)==="AbortError")return;const e=t;this.lastError=`${(e==null?void 0:e.name)??"Error"}: ${(e==null?void 0:e.message)??String(t)}`,console.warn("music:",this.lastError)}get element(){return this.route==="plain"?this.plain:this.el}get main(){return this.element}wire(){if(this.el)return;const t=$n(),e=()=>{const o=new Audio;return o.preload="auto",ir&&(o.crossOrigin="anonymous"),o.addEventListener("ended",()=>{o===this.main&&ts(o)&&this.next(!0)}),o.addEventListener("play",()=>{o===this.main&&!this.parked&&ts(o)&&(this.playing=!0,this.onChange())}),o.addEventListener("pause",()=>{o===this.main&&!this.parked&&ts(o)&&(this.playing=!1,this.onChange())}),o.addEventListener("error",()=>{ts(o)&&this.relink(o)}),o};this.el=e(),this.plain=e(),this.plain.volume=0;const n=t.createMediaElementSource(this.el),i=t.createChannelSplitter(2);this.out=t.createGain(),this.room=t.createGain(),n.connect(i);for(let o=0;o<2;o++){const r=t.createPanner();r.panningModel="equalpower",r.distanceModel="inverse",r.refDistance=2.4,r.rolloffFactor=.85;const a=t.createAnalyser();a.fftSize=1024,i.connect(a,o),i.connect(r,o),r.connect(this.out),this.pan.push(r),this.meters.push(a)}this.out.connect(this.room).connect(dl()),this.place()}setSpeakers(t,e){this.speakers=[t,e],this.place()}place(){const t=Zd();if(!t)return;const e=t.currentTime;this.pan.forEach((n,i)=>{const o=this.speakers[i];n.positionX.setValueAtTime(o.x,e),n.positionY.setValueAtTime(o.y,e),n.positionZ.setValueAtTime(o.z,e)})}setInside(t){if(this.inside=t,!this.room)return;const e=$n();this.room.gain.setTargetAtTime(t?1:0,e.currentTime,.6)}start(t,e=!1){const n=this.route,i=++this.starts;this.parked=e,this.waiting=e?t:null,e&&(this.playing=!0),n!=="speakers"&&(this.plain.volume=n==="plain"?this.plainVol:0);const o=this.addr(t);if(o&&!e){this.put(o);return}for(const r of this.players)r.src=tp,r.play().catch(()=>{});this.prime([t]).then(()=>{const r=this.addr(t);!e&&r&&i===this.starts&&this.put(r)})}put(t){for(const e of this.players)e.src=t,e.play().catch(n=>this.failed(n))}relink(t){var r;const e=this.album;if(!ir||!e||performance.now()-this.relinkAt<5e3)return;this.relinkAt=performance.now();const n=(r=e.tracks[this.track])==null?void 0:r.file,i=t.currentTime,o=this.playing&&t===this.main;n&&(this.links.delete(n),this.prime([n]).then(()=>{var l;const a=this.addr(n);!a||e!==this.album||n!==((l=e.tracks[this.track])==null?void 0:l.file)||(t.src=a,t.addEventListener("loadedmetadata",()=>{try{t.currentTime=i}catch{}o&&t.play().catch(c=>this.failed(c))},{once:!0}))}))}load(t,e=0,n=!1){if(!t.tracks.length)return;this.wire(),this.prime(t.tracks.map(o=>o.file));const i=$n();this.album=t,this.track=Math.max(0,Math.min(t.tracks.length-1,e)),this.cueing=n,this.out.gain.cancelScheduledValues(i.currentTime),this.out.gain.setValueAtTime(n?0:1,i.currentTime),this.route==="plain"&&n&&(this.plainVol=0),this.start(t.tracks[this.track].file,n),this.heard=0,this.loudest=0,this.onChange()}cued(){!this.cueing||!this.el||!this.out||(this.cueing=!1,this.fromTop(),this.heard=0,this.loudest=0,this.onChange())}song(t){const e=this.album;!e||!this.el||t<0||t>=e.tracks.length||(this.track=t,this.start(e.tracks[t].file),this.onChange())}startOf(t){const e=this.album;if(!e)return 0;const n=e.tracks.reduce((i,o)=>i+(o.dur||0),0)||1;return e.tracks.slice(0,t).reduce((i,o)=>i+(o.dur||0),0)/n}skip(t){const e=this.album;if(!e||!this.el||this.cueing||t<0||t>=e.tracks.length)return;const n=$n();this.out.gain.cancelScheduledValues(n.currentTime),this.out.gain.setValueAtTime(0,n.currentTime),this.track=t,this.moving=!0,this.needleTo=this.startOf(t),this.start(e.tracks[t].file,!0),this.onChange()}skipBy(t){const e=this.main;if(!this.album||!e)return;const n=t>0?this.track+1:!this.moving&&e.currentTime>3?this.track:this.track-1;this.skip(Math.max(0,Math.min(this.album.tracks.length-1,n)))}drop(){!this.moving||!this.el||!this.out||(this.moving=!1,this.fromTop(),this.onChange())}play(){if(!(!this.el||!this.album)){if($n(),!this.main||!ts(this.main)){this.start(this.album.tracks[this.track].file);return}this.route!=="plain"&&this.el.play().catch(t=>this.failed(t)),this.route!=="speakers"&&this.plain.play().catch(t=>this.failed(t))}}pause(){var t,e;this.parked&&(this.parked=!1,this.playing=!1,this.onChange()),(t=this.el)==null||t.pause(),(e=this.plain)==null||e.pause()}toggle(){this.playing?this.pause():this.play()}next(t=!1){const e=this.album;if(!(!e||!this.el)){if(this.track+1>=e.tracks.length){if(t){this.track=0;const n=this.addr(e.tracks[0].file);for(const i of this.players)n?i.src=n:(i.removeAttribute("src"),i.load());this.playing=!1,this.onChange()}return}this.track++,this.start(e.tracks[this.track].file),this.onChange()}}prev(){const t=this.album,e=this.main;if(!(!t||!e)){if(e.currentTime>3||this.track===0){for(const n of[this.el,this.plain])try{n.currentTime=0}catch{}return}this.track--,this.start(t.tracks[this.track].file),this.onChange()}}tick(t,e){const n=this.el,i=this.plain;if(!(!n||!i||!this.album)){if(this.holding){const o=this.main,r=performance.now();if(ts(o)&&!o.paused&&o.currentTime>.04&&o.currentTime<.8&&r-this.holdSince>60&&(!this.sought||this.seekedAt&&r-this.seekedAt>250)||r-this.holdSince>1500){this.holding=!1;const l=$n().currentTime;this.out.gain.cancelScheduledValues(l),this.out.gain.setValueAtTime(0,l),this.out.gain.linearRampToValueAtTime(1,l+.05)}}if(this.route==="trying"&&!this.cueing&&!this.moving&&!this.holding&&ts(n)&&!n.paused&&n.currentTime>.3){this.heard+=t;const[o,r]=this.rms();if(this.loudest=Math.max(this.loudest,o,r),this.loudest>1e-4)this.route="speakers",i.pause(),i.removeAttribute("src"),i.load(),this.onChange();else if(this.heard>1.2){if(this.route="plain",Math.abs(i.currentTime-n.currentTime)>.2)try{i.currentTime=n.currentTime}catch{}i.paused&&i.play().catch(a=>this.failed(a)),n.pause(),this.playing=!i.paused,this.onChange()}}if(this.route==="plain"){const o={x:(this.speakers[0].x+this.speakers[1].x)/2,y:(this.speakers[0].y+this.speakers[1].y)/2,z:(this.speakers[0].z+this.speakers[1].z)/2},r=Math.hypot(e.x-o.x,e.y-o.y,e.z-o.z),a=this.cueing||this.moving||this.holding||!this.inside?0:Math.min(1,2.4/(2.4+.85*Math.max(0,r-2.4))),l=this.moving||this.holding?.02:a>this.plainVol+.3?.06:.4;this.plainVol+=(a-this.plainVol)*(1-Math.exp(-t/l)),i.volume=Math.max(0,Math.min(1,this.plainVol))}}}get progress(){const t=this.album,e=this.main;if(!t||!e)return 0;const n=t.tracks.reduce((o,r)=>o+(r.dur||0),0)||1,i=t.tracks.slice(0,this.track).reduce((o,r)=>o+(r.dur||0),0);return Math.min(1,(i+(e.currentTime||0))/n)}get current(){var t;return((t=this.album)==null?void 0:t.tracks[this.track])??null}get heardTime(){const t=this.main,e=Zd();if(!t)return 0;const n=e&&this.route!=="plain"?(e.outputLatency||0)+(e.baseLatency||0):.05;return t.currentTime-n}rms(){return this.meters.length?this.meters.map(t=>{t.getFloatTimeDomainData(this.buf);let e=0;for(let n=0;n<this.buf.length;n++)e+=this.buf[n]*this.buf[n];return Math.sqrt(e/this.buf.length)}):[0,0]}levels(){if(!this.playing||this.cueing||this.moving||this.holding)return[0,0];if(this.route==="plain"){const t=performance.now()/1e3,e=.05*this.plainVol;return[e*(1+.45*Math.sin(t*7.1)*Math.sin(t*2.3)),e*(1+.45*Math.sin(t*6.3+1)*Math.sin(t*1.9))]}return this.rms()}}function pl(s,t){const n=document.createElement("canvas");n.width=n.height=32*t;const i=n.getContext("2d");i.scale(t,t);const o=32/2,r=8,a=2.5,l=(c,h)=>{i.strokeStyle=h,i.lineWidth=c,i.lineCap="round",i.beginPath(),i.moveTo(o-r,o),i.lineTo(o-a,o),i.moveTo(o+a,o),i.lineTo(o+r,o),i.moveTo(o,o-r),i.lineTo(o,o-a),i.moveTo(o,o+a),i.lineTo(o,o+r),i.stroke()};return l(3.4,"rgba(0,0,0,0.55)"),l(1.5,"#fff"),n.toDataURL("image/png")}const e2=s=>`-webkit-image-set(url(${pl(s,1)}) 1x, url(${pl(s,2)}) 2x) 16 16, crosshair`,Mu="var(--cross)";function n2(){document.documentElement.style.setProperty("--cross",e2(!1));const t=document.createElement("div");return t.id="crosshair",t.style.backgroundImage=`-webkit-image-set(url(${pl(!1,1)}) 1x, url(${pl(!1,2)}) 2x)`,document.body.append(t),(e,n,i)=>{t.classList.toggle("on",e),t.style.transform=e&&n!==void 0&&i!==void 0?`translate(${n-innerWidth/2}px, ${i-innerHeight/2}px)`:""}}const $e={x:innerWidth/2,y:innerHeight/2};let Rl=()=>!1;function i2(s){Rl=s}const Aa=()=>Rl();function Rc(s,t){if(document.pointerLockElement===t){if(Rl())return[$e.x,$e.y];const e=t.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]}return[s.clientX,s.clientY]}function Ph(s){if(document.pointerLockElement!==s||!Rl())return!1;const t=document.elementFromPoint($e.x,$e.y),e=t&&t!==s?t.closest("button, li, a"):null;return e?(e.click(),!0):!1}const Lh=.47,bs=.33,Xn=.1575,s2=.09,Rn=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)},Ra=s=>`<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="${s}" fill="currentColor"/></svg>`,Cc={"⏮":Ra("M2.5 3h2v10h-2z M13 3 5.5 8 13 13z"),"⏭":Ra("M3 3 10.5 8 3 13z M11.5 3h2v10h-2z"),"▶":Ra("M4.5 2.5 13 8 4.5 13.5z"),"⏸":Ra("M4 3h2.6v10H4z M9.4 3H12v10H9.4z")};function ep(s){const t=Math.atan(Math.tan(_e.degToRad(s.fov)/2)*s.aspect),e=co(s)*Math.tan(t)*.95;return Math.min(1.15,Math.asin(Math.min(1,e/bs)))}function co(s){const t=Math.atan(Math.tan(_e.degToRad(s.fov)/2)*s.aspect);return Math.max(Lh,Xn*1.25/Math.tan(t*.92))}class o2{constructor(t,e,n,i,o){R(this,"isOpen",!1);R(this,"sel",0);R(this,"cards",[]);R(this,"hover",-1);R(this,"hoverEase",0);R(this,"openL",0);R(this,"openR",0);R(this,"side",0);R(this,"closing",!1);R(this,"tight",!1);R(this,"pivot",new I);R(this,"choseAt",null);R(this,"pre",0);R(this,"preTarget",0);R(this,"clock",0);R(this,"shuf",null);R(this,"oldSel",0);R(this,"disc",null);R(this,"discRun",null);R(this,"listOn",!1);R(this,"listEase",0);R(this,"ray",new Ts);R(this,"ndc",new mt);R(this,"ui");R(this,"songs");R(this,"albumLine");R(this,"playBtn");R(this,"listFor",null);R(this,"onClosed",()=>{});R(this,"handLight",new Hp(16773856,0,3,2));R(this,"shown",!0);this.camera=t,this.canvas=e,this.music=n,this.F=i,this.albums=o,this.ui=document.createElement("div"),this.ui.id="fan-controls";const r=document.createElement("div");r.className="fc-list",this.albumLine=document.createElement("div"),this.albumLine.className="fc-album",this.songs=document.createElement("ol"),this.songs.className="fc-songs",this.songs.addEventListener("click",h=>{const u=h.target.closest("li");u&&(h.stopPropagation(),this.skip(()=>n.skip(+u.dataset.k)))}),r.append(this.albumLine,this.songs);const a=document.createElement("div");a.className="fc-row";const l=(h,u,f)=>{const d=document.createElement("button");return d.innerHTML=Cc[h],d.title=u,d.addEventListener("pointerdown",p=>p.stopPropagation()),d.addEventListener("click",p=>{p.stopPropagation(),f()}),a.append(d),d};l("⏮","Back",()=>this.skip(()=>n.skipBy(-1))),this.playBtn=l("⏸","Pause",()=>n.toggle()),l("⏭","Next song",()=>this.skip(()=>n.skipBy(1))),this.ui.append(r,a),this.ui.addEventListener("pointerdown",h=>h.stopPropagation()),document.body.append(this.ui);const c=n.onChange;n.onChange=()=>{c(),this.refresh()}}open(){const t=this.F(),e=new Map(this.albums().map(i=>[i.id,i]));if(this.cards=t.records.map(i=>{const o=e.get(i.mesh.userData.album),r=new Kt().compose(i.base,new pe().setFromEuler(i.rest),new I(1,1,1));return{mesh:i.mesh,album:o,rest:r,a:0,z:0,lift:0,out:0,wait:0}}).filter(i=>i.album),!this.cards.length)return!1;const n=this.music.album?this.cards.findIndex(i=>i.album.id===this.music.album.id):-1;return this.sel=this.oldSel=n>=0?n:0,this.cards.forEach((i,o)=>{i.a=this.restAngle(o),i.z=this.depth(o)}),this.isOpen=!0,this.closing=!1,this.tight=!1,this.hover=-1,this.side=0,this.openL=this.openR=0,this.shuf=null,this.listOn=!1,this.listEase=0,this.refresh(),!0}close(){this.isOpen&&(this.reorder(),this.closing=!0,this.preTarget=0,this.hover=-1,this.side=0,this.refresh(),this.canvas.style.cursor="",this.finishDisc())}reorder(){var r;const t=(r=this.music.album)==null?void 0:r.id,e=this.F().records,n=e.findIndex(a=>a.mesh.userData.album===t);if(n<=0)return;const i=e.map(a=>a.mesh),o=[i[n],...i.slice(0,n),...i.slice(n+1)];e.forEach((a,l)=>{a.mesh=o[l]});for(const a of this.cards){const l=e.find(c=>c.mesh===a.mesh);l&&a.rest.compose(l.base,new pe().setFromEuler(l.rest),new I(1,1,1))}}beckon(t){this.isOpen||(this.preTarget=Math.max(0,Math.min(1,t)))}restCentre(){const t=this.F().stand;return t?t.localToWorld(new I(0,.17,.02)):null}pileCentre(){const t=this.F().stand;if(!t)return null;const e=t.localToWorld(new I(0,.17,.02));return this.pre>.001?e.applyMatrix4(this.hoverMatrix(Rn(this.pre))):e}restAngle(t){const e=t-this.sel,n=Math.abs(e);return n?-Math.sign(e)*.2*(1-.5**n):0}depth(t){const e=Math.abs(t-this.sel);return e?-(.004+.006*e):0}hoverMatrix(t){const e=this.F().stand,n=this.F().records[0],i=e.localToWorld(new I(0,.17,.02)),o=this.camera.position,r=i.clone().lerp(o,.5);r.y+=Math.sin(this.clock*2.1)*.006;const a=n?e.matrixWorld.clone().multiply(new Kt().makeRotationFromEuler(n.rest)):e.matrixWorld,l=new I(0,0,1).transformDirection(a),c=o.clone().sub(r).normalize(),h=new I(l.x,0,l.z).normalize(),u=new I(c.x,0,c.z).normalize(),f=new pe().setFromUnitVectors(h,u),d=new pe().setFromUnitVectors(l.clone().applyQuaternion(f),c),p=new pe().setFromAxisAngle(new I(0,1,0),Math.sin(this.clock*1.3)*.025),m=new pe().slerp(p.multiply(d.multiply(f)),t),x=i.clone().lerp(r,t);return new Kt().makeTranslation(x.x,x.y,x.z).multiply(new Kt().makeRotationFromQuaternion(m)).multiply(new Kt().makeTranslation(-i.x,-i.y,-i.z))}shade(t){const e=new Kt;this.cards.forEach((n,i)=>{var l;const o=(l=n.mesh.userData.bright)==null?void 0:l.userData.fanShade;if(!o)return;const r=i-this.sel,a=r===0?null:this.cards[i-Math.sign(r)];o.shade.value=a?t:0,a&&(a.mesh.updateWorldMatrix(!0,!1),n.mesh.updateWorldMatrix(!0,!1),o.rel.value.copy(e.copy(a.mesh.matrixWorld).invert().multiply(n.mesh.matrixWorld)))})}glow(t){for(const e of this.F().records){const n=e.mesh.userData.lit;n&&n.emissiveMap&&(n.emissiveIntensity=.85*t)}}update(t){var w;this.clock+=t;const e=this.F();if(!e.stand)return;if(!this.isOpen){const v=this.pre,M=this.preTarget-this.pre;if(this.pre=Math.max(0,Math.min(1,this.pre+Math.max(-t/.7,Math.min(t/.85,M)))),this.pre===0&&v===0)return;const S=Rn(this.pre),E=this.hoverMatrix(S);for(const _ of e.records){const b=new Kt().compose(_.base,new pe().setFromEuler(_.rest),new I(1,1,1)),T=_.mesh.parent,C=E.clone().multiply(T.matrixWorld).multiply(b);new Kt().copy(T.matrixWorld).invert().multiply(C).decompose(_.mesh.position,_.mesh.quaternion,_.mesh.scale)}this.glow(S);return}const n=this.camera;n.updateMatrixWorld();const i=n.matrixWorld.elements,o=new I(i[0],i[1],i[2]),r=new I(i[4],i[5],i[6]),a=new I(-i[8],-i[9],-i[10]);this.listEase+=((this.listOn&&!this.closing?1:0)-this.listEase)*(1-Math.exp(-5*t));const l=co(n),c=n.position.clone().addScaledVector(a,l).addScaledVector(r,-.015+s2*Rn(this.listEase)),h=e.group;this.handLight.parent!==h&&(this.handLight.layers.set(5),h.add(this.handLight)),this.handLight.position.copy(n.position).addScaledVector(r,.25).addScaledVector(o,-.15),this.handLight.intensity+=((this.closing?0:.32)-this.handLight.intensity)*(1-Math.exp(-4*t));const u=c.clone().addScaledVector(r,-bs),f=a.clone().negate();this.closing&&(this.pre=Math.max(0,this.pre-t/.7));const d=this.pre>0?this.hoverMatrix(Rn(this.pre)):null;this.glow(Rn(this.pre)),this.pivot.copy(u);const p=!this.closing&&(this.tight||!!this.discRun),m=co(n)>Lh+.01,x=1-Math.exp(-6*t);this.openL+=((this.side<0&&!p?1:0)-this.openL)*x,this.openR+=((this.side>0&&!p?1:0)-this.openR)*x,this.hoverEase+=((this.hover>=0&&this.hover!==this.sel&&!this.shuf&&!p?1:0)-this.hoverEase)*x;const g=this.shuf;g&&(g.t+=t,g.t>=g.dur&&(this.shuf=null,this.startDisc()));let y=!0;if(this.cards.forEach((v,M)=>{v.wait=Math.max(0,v.wait-t);const S=v.wait>0?this.oldSel:this.sel,E=S,_=this.cards.length-1-S,b=M-S,T=Math.abs(b),C=Math.sign(b);let P=0,U=0,F=0;if(T){const qt=C<0?E:_,K=C<0?this.openL:this.openR,me=.2*(1-.5**T),se=T*Math.min(.3,ep(n)/Math.max(1,qt));let O=me+(se-me)*K;if(this.hover>=0&&Math.sign(this.hover-S)===C){const A=Math.abs(this.hover-S);T>=A&&(O+=.09*this.hoverEase),T>A&&(O+=.07*this.hoverEase),M===this.hover&&(F=.012*this.hoverEase)}P=-C*O,U=-(.004+.006*T)}const k=m&&this.hover>=0&&M===this.hover&&M!==this.sel&&!g;k&&(P*=.06,U=.012,F=.2*this.hoverEase);const $=1-Math.exp(-4.5*t);if(g&&M===g.k){const qt=Math.min(1,g.t/g.dur),K=Rn(qt);v.lift=.13*Math.sin(Math.PI*Math.min(1,qt*1.05)),v.a=g.a0*(1-Rn(qt*1.25)),v.z=g.z0+(.006-g.z0)*K}else v.a+=(P-v.a)*$,v.z+=(U-v.z)*$,v.lift+=(F-v.lift)*$;const Y=this.closing?0:1,it=this.closing?2.6:2.2;v.out=Math.max(0,Math.min(1,v.out+(Y?1:-1)*it*t)),(this.closing?v.out>0:v.out<1)&&(y=!1);const G=v.out,Z=Rn(G),st=v.mesh.material,ut=v.mesh.userData.lit,B=v.mesh.userData.bright,H=!!B&&B!==ut&&B.isMeshBasicMaterial,L=G>.001&&H?B:ut;if(L&&st[4]!==L&&(st[4]=L),H&&L===B){const qt=.15+.75*Rn(this.pre);B.color.setScalar(qt+(1-qt)*Z)}const V=r.clone().multiplyScalar(Math.cos(v.a)).addScaledVector(o,-Math.sin(v.a)),D=V.clone().cross(f),X=u.clone().addScaledVector(V,bs).addScaledVector(r,v.lift).addScaledVector(f,v.z).clone().addScaledVector(V,-Xn),tt=new Kt().makeBasis(D,V,f).setPosition(X),et=v.mesh.parent,xt=et.matrixWorld.clone().multiply(v.rest);d&&xt.premultiply(d);const _t=new I,lt=new pe,pt=new I,ft=new I,yt=new pe,vt=new I;xt.decompose(_t,lt,pt),tt.decompose(ft,yt,vt);const Gt=_t.clone().lerp(ft,Z).addScaledVector(new I(0,1,0),Math.sin(Z*Math.PI)*.08*(1-this.pre)),Bt=lt.clone().slerp(yt,Z);new Kt().copy(et.matrixWorld).invert().multiply(new Kt().compose(Gt,Bt,new I(1,1,1))).decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=g&&M===g.k&&g.t>g.dur*.45||k?12:10-Math.min(9,Math.abs(M-this.sel))}),this.updateDisc(t),this.shade(.5*Rn(((w=this.cards[0])==null?void 0:w.out)??0)),this.closing&&y&&this.pre===0){for(const v of this.cards)v.rest.decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=0,v.mesh.userData.lit&&(v.mesh.material[4]=v.mesh.userData.lit);this.glow(0),this.shade(0),this.isOpen=!1,this.closing=!1,this.cards=[],this.shuf=null,this.handLight.intensity=0,this.onClosed()}}startDisc(){const t=this.discRun;if(!t||t.phase!=="wait")return;const e=this.cards[t.k];if(!e){this.finishDisc();return}this.disc||(this.disc=new wt(new Xe(.1515,.1515,.0018,96),Th(t.album)),this.disc.layers.enable(5)),this.disc.material=Th(t.album),e.mesh.add(this.disc),this.disc.rotation.set(Math.PI/2,0,0),this.disc.position.set(0,Xn,0),this.disc.visible=!0,t.phase="out",t.t=0,this.refresh()}updateDisc(t){const e=this.discRun,n=this.disc;if(!e||e.phase==="wait"||!n)return;e.t+=t;const i=this.F(),o=i.deck;if(!o){this.finishDisc();return}const r=1,a=1.4,l=.8,c=.1;o.record.updateWorldMatrix(!0,!1);const h=new I,u=new pe,f=new I;o.record.matrixWorld.decompose(h,u,f);const d=(p,m)=>{const x=new Kt().compose(p,m,new I(1,1,1));new Kt().copy(i.group.matrixWorld).invert().multiply(x).decompose(n.position,n.quaternion,n.scale)};if(e.phase==="out"){if(n.position.x=(Xn+.1515+.012)*Rn(Math.min(1,e.t/r)),e.t>=r){n.updateWorldMatrix(!0,!1);const p=new I,m=new pe,x=new I;n.matrixWorld.decompose(p,m,x),i.group.add(n);const g=h.clone().add(new I(0,c,0)),y=g.clone().sub(p).setY(0);e.p0=p,e.q0=m,e.above=g,e.c1=p.clone().add(new I(0,-.3,0)).addScaledVector(y,.15),e.c2=g.clone().add(new I(0,.22,0)).addScaledVector(y,-.35),e.phase="carry",e.t=0,d(p,m)}}else if(e.phase==="carry"){const p=Math.min(1,e.t/a),m=Rn(p),x=e.p0,g=e.c1,y=e.c2,w=e.above,v=1-m,M=x.clone().multiplyScalar(v*v*v).addScaledVector(g,3*v*v*m).addScaledVector(y,3*v*m*m).addScaledVector(w,m*m*m),S=e.q0.clone().slerp(u,Rn(Math.min(1,p/.8)));d(M,S),p>=1&&(e.phase="lower",e.t=0)}else if(e.phase==="lower"){const p=Math.min(1,e.t/l),m=1-(1-p)**3;d(e.above.clone().lerp(h,m),u),p>=1&&this.finishDisc()}}finishDisc(){this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun&&(this.discRun=null,this.music.cued(),this.refresh())}cardAt(t,e){var r;const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObjects(this.cards.map(a=>a.mesh),!1);i.sort((a,l)=>l.object.renderOrder-a.object.renderOrder||a.distance-l.distance);const o=(r=i[0])==null?void 0:r.object;return o?this.cards.findIndex(a=>a.mesh===o):-1}roundAt(t,e){if(Math.max(this.openL,this.openR)<.5||this.tight||this.discRun||this.shuf)return null;const i=this.openR>=this.openL?1:-1,o=this.sel,r=i>0?this.cards.length-1-o:o;if(!r)return null;const a=this.polar(t,e);if(!a.amongst)return null;const l=a.a*i,c=Math.atan(Xn/Math.max(bs-Xn,Math.min(bs+Xn,a.rho)));if(l<c*.8)return this.cardAt(t,e)===o?o:null;const h=Math.min(.3,ep(this.camera)/Math.max(1,r)),u=Math.ceil((l-c*.8)/h);return u>=1&&u<=r?o+i*u:null}polar(t,e){const n=this.canvas.getBoundingClientRect(),i=this.camera,o=this.pivot.clone().project(i),r=t-(n.left+(o.x+1)/2*n.width),a=n.top+(1-o.y)/2*n.height-e,l=2*co(i)*Math.tan(_e.degToRad(i.fov)/2)/n.height,c=Math.hypot(r,a)*l,u=a*l>(bs-Xn)*.85;return{a:Math.atan2(r,a),rho:c,level:u,amongst:u&&c<Math.hypot(bs+Xn,Xn)+.02}}move(t,e){if(!this.isOpen||this.closing)return;let n=this.cardAt(t,e);const i=this.roundAt(t,e);if(i!==null&&(n=i),this.hover=n,n>=0&&n!==this.sel)this.side=Math.sign(n-this.sel);else{const o=this.canvas.getBoundingClientRect(),r=(t-o.left)/o.width-.5,a=Math.atan(Xn/co(this.camera))/(2*Math.atan(Math.tan(_e.degToRad(this.camera.fov)/2)*this.camera.aspect));this.side=n===this.sel?0:Math.abs(r)>a*.9&&this.polar(t,e).level?Math.sign(r):0}if(this.tight&&this.side!==0&&!this.discRun){const o=this.canvas.getBoundingClientRect();(!this.choseAt||Math.hypot(t-this.choseAt.x,e-this.choseAt.y)>o.width*.12)&&(this.tight=!1)}this.canvas.style.cursor=n>=0?Mu:""}click(t,e){if(!this.isOpen||this.closing)return!1;const n=co(this.camera)>Lh+.01?null:this.roundAt(t,e),i=n??this.cardAt(t,e);return i<0?(this.close(),!0):(this.choseAt={x:t,y:e},this.choose(i),!1)}choose(t){var i;const e=this.cards[t];if(!e||this.shuf)return;const n=this.music;if(!(this.discRun&&this.discRun.album.id===e.album.id)){if(t===this.sel&&((i=n.album)==null?void 0:i.id)===e.album.id&&!this.discRun){n.playing?this.listOn=!this.listOn:n.play(),this.refresh();return}t!==this.sel&&(this.oldSel=this.sel,this.shuf={k:t,t:0,dur:.75+.06*Math.min(6,Math.abs(t-this.sel)),a0:e.a,z0:e.z},this.cards.forEach((o,r)=>{o.wait=r===t?0:.3+.05*Math.abs(r-t)}),this.sel=t),this.hover=-1,this.side=0,this.tight=!0,this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun={k:t,album:e.album,phase:"wait",t:0},n.load(e.album,0,!0),this.listOn=!1,this.shuf||this.startDisc(),this.refresh()}}step(t){if(!this.isOpen||!this.cards.length)return;const e=this.hover>=0?this.hover:this.sel,n=Math.max(0,Math.min(this.cards.length-1,e+t));this.hover=n,this.side=n===this.sel?0:Math.sign(n-this.sel),this.side!==0&&!this.discRun&&(this.tight=!1)}chooseHovered(){this.choseAt=null,this.choose(this.hover>=0?this.hover:this.sel)}skip(t){t(),this.refresh()}setShown(t){t!==this.shown&&(this.shown=t,this.refresh())}refresh(){const t=this.music,e=t.current,n=this.shown&&!!t.album,i=this.isOpen&&!this.closing;if(this.ui.classList.toggle("on",n),this.ui.classList.toggle("list",n&&i&&this.listOn),!t.album||!e)return;this.playBtn.innerHTML=t.playing?Cc["⏸"]:Cc["▶"],this.playBtn.title=t.playing?"Pause":"Play";const o=t.album;if(this.listFor!==`${o.id}|${o.tracks.length}`){this.listFor=`${o.id}|${o.tracks.length}`,this.albumLine.textContent=o.title,this.songs.replaceChildren(...o.tracks.map((a,l)=>{const c=document.createElement("li");return c.dataset.k=String(l),c.textContent=a.title,c}));const r=o.tracks.length>20?3:o.tracks.length>8?2:1;this.songs.style.columnCount=String(r),this.songs.style.width=r===1?"auto":""}this.songs.querySelectorAll("li").forEach((r,a)=>r.classList.toggle("now",a===t.track))}}const r2={KeyA:0,KeyW:1,KeyS:2,KeyE:3,KeyD:4,KeyF:5,KeyT:6,KeyG:7,KeyY:8,KeyH:9,KeyU:10,KeyJ:11,KeyK:12,KeyO:13,KeyL:14,KeyP:15},np=4;class a2{constructor(t,e,n,i){R(this,"state","none");R(this,"sound",new jb);R(this,"seat",null);R(this,"anim",null);R(this,"octave",0);R(this,"byKey",new Map);R(this,"byPointer",new Map);R(this,"ray",new Ts);R(this,"ndc",new mt);R(this,"recBack",null);R(this,"music",new t2);R(this,"fan");R(this,"wheelAt",0);R(this,"beckonRest",!1);R(this,"engaged",!1);R(this,"handledAt",-1e9);R(this,"onChange",()=>{});R(this,"fanTouch",null);R(this,"flick",[]);this.player=t,this.camera=e,this.canvas=n,this.gallery=i,this.fan=new o2(e,n,this.music,()=>this.F,()=>this.gallery.data.albums),this.fan.onClosed=()=>this.recordsAway(),t.onSeatedMove=()=>{this.state==="couch"&&this.stand()},addEventListener("keydown",o=>this.key(o,!0)),addEventListener("keyup",o=>this.key(o,!1)),n.addEventListener("pointerdown",o=>this.down(o)),n.addEventListener("wheel",o=>{if(this.state!=="records"||this.anim)return;o.preventDefault();const r=Math.abs(o.deltaX)>Math.abs(o.deltaY)?o.deltaX:o.deltaY;performance.now()-this.wheelAt<280||Math.abs(r)<4||(this.wheelAt=performance.now(),this.fan.step(r>0?1:-1))},{passive:!1}),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o)),addEventListener("pointercancel",o=>this.up(o)),addEventListener("blur",()=>{for(const o of this.byKey.values())this.off(o);this.byKey.clear(),this.sound.setPedal(!1)})}get busy(){return this.state!=="none"||!!this.anim}get moving(){return!!this.anim}get F(){return this.gallery.furniture}sitCouch(t,e=!0){const n=this.F.couchSeats;if(!n.length||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>np)return!1;let i=n.reduce((r,a)=>a.eye.distanceTo(t)<r.eye.distanceTo(t)?a:r);const o=e?this.fan.restCentre():null;return o&&(i={...i,yaw:Math.atan2(-(o.x-i.eye.x),-(o.z-i.eye.z)),pitch:Math.atan2(o.y-i.eye.y,Math.hypot(o.x-i.eye.x,o.z-i.eye.z))+.08}),this.go("couch",i,1),!0}sitPiano(t){const e=this.F.pianoSeat;return!e||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>np?!1:(this.sound.wake(),this.sound.decodeAll(),this.go("piano",e,1.2),!0)}fit(t){if(!t.look)return;const e=this.camera,n=Math.atan(Math.tan(_e.degToRad(e.fov)/2)*e.aspect);t.eye.copy(C0(t.look,t.yaw,t.pitch,Math.max(fo.near,fo.span/Math.tan(n))))}go(t,e,n){this.fit(e),this.seat=e,this.state=t,this.engaged=!1,this.beckonRest=!1,t==="couch"&&this.music.primeAlbums(this.gallery.data.albums.filter(i=>!i.off)),this.player.seated=!0,this.anim={from:this.pose(),to:{x:e.eye.x,y:e.eye.y,z:e.eye.z,yaw:e.yaw,pitch:e.pitch},t:0,dur:n},this.onChange(t)}stand(){const t=this.seat;if(!(!t||this.state==="none")){for(const e of[...this.byKey.values(),...this.byPointer.values()])this.off(e);this.byKey.clear(),this.byPointer.clear(),this.sound.setPedal(!1),this.state="none",this.anim={from:this.pose(),to:{x:t.stand.x,y:hs,z:t.stand.z,yaw:this.player.yaw,pitch:Math.max(-.25,Math.min(.1,this.player.pitch))},t:0,dur:.8,then:()=>{this.player.seated=!1,this.seat=null,this.player.collide()}},this.canvas.style.cursor="",this.onChange("none")}}pose(){const t=this.player;return{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw,pitch:t.pitch}}update(t){var i,o;const e=this.player,n=this.anim;if(n){n.t=Math.min(1,n.t+t/n.dur);const r=n.t*n.t*(3-2*n.t),a=n.to.y<n.from.y?r*r*(3-2*r):1-(1-r)*(1-r);e.pos.set(n.from.x+(n.to.x-n.from.x)*r,n.from.y+(n.to.y-n.from.y)*a,n.from.z+(n.to.z-n.from.z)*r),e.yaw=n.from.yaw+Math.atan2(Math.sin(n.to.yaw-n.from.yaw),Math.cos(n.to.yaw-n.from.yaw))*r,e.pitch=n.from.pitch+(n.to.pitch-n.from.pitch)*r,n.t>=1&&(this.anim=null,(i=n.then)==null||i.call(n))}else if(this.state==="records"&&this.recBack){const r=this.recBack.pose;e.pos.set(r.x,r.y,r.z),e.yaw=r.yaw,e.pitch+=(Math.max(r.pitch,-.12)-e.pitch)*(1-Math.exp(-6*t))}else this.seat&&this.state!=="none"&&(this.fit(this.seat),e.pos.copy(this.seat.eye));this.beckon(),this.fan.update(t),(o=this.F.piano)==null||o.update(t),Jb(this.camera)}rebuilt(){const t=this.F.soundAt;t&&this.sound.setPosition(t.x,t.y,t.z),this.state!=="none"&&(this.state="none",this.player.seated=!1,this.seat=null,this.anim=null),this.fan.isOpen&&this.fan.close(),this.recBack=null;const e=this.F.speakers;e&&this.music.setSpeakers(e[0],e[1])}beckon(){let t=0;const e=this.state==="couch"&&!this.fan.isOpen&&(!this.anim||this.anim.t>.6)?this.fan.restCentre():null;if(e){const n=this.camera.position,i=e.distanceTo(n),o=this.camera.getWorldDirection(new I).angleTo(e.clone().sub(n)),r=Math.atan2(.17,i)+.06;if(o>r+.08&&(this.beckonRest=!1),!this.engaged&&o<r&&!this.beckonRest&&(this.engaged=!0),this.engaged){const a=Math.max(0,Math.min(1,(o-r)/.2));t=1-a*a*(3-2*a),t===0&&this.fan.pre<.02&&(this.engaged=!1)}}else this.state!=="couch"&&(this.engaged=!1);this.fan.beckon(t)}get recordsEngaged(){return this.engaged}recordsBack(){this.state==="couch"&&(this.engaged=!1,this.beckonRest=!0,this.fan.beckon(0))}get recordsUp(){return this.state==="couch"&&this.fan.pre>.7}lookAtRecords(){return this.anim||this.state!=="couch"||this.fan.isOpen||!this.fan.open()?!1:(this.music.primeAlbums(this.gallery.data.albums.filter(t=>!t.off)),this.recBack={state:"couch",pose:this.pose()},this.state="records",this.player.seated=!0,this.onChange("records"),!0)}recordsAway(){const t=this.recBack;this.recBack=null,t&&(this.state=t.state,this.beckonRest=!0,this.engaged=!1,t.state==="none"&&(this.player.seated=!1,this.player.pos.y=hs,this.player.collide()),this.canvas.style.cursor="",this.onChange(this.state))}relock(){var t,e;try{(e=(t=this.canvas.requestPointerLock())==null?void 0:t.catch)==null||e.call(t,()=>{})}catch{}}on(t){var e;this.sound.noteOn(t),(e=this.F.piano)==null||e.press(t,!0)}off(t){var e;this.sound.noteOff(t),(e=this.F.piano)==null||e.press(t,!1)}keyAt(t,e){const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObject(this.F.group,!0).find(r=>r.object.isMesh);if(!i)return{key:null,piano:!1,records:!1};const o=i.object.userData;return{key:typeof o.key=="number"?o.key:null,piano:o.piece==="piano",records:!!o.records}}down(t){const[e,n]=Rc(t,this.canvas);if(this.state==="records"){if(this.anim||(t.preventDefault(),this.handledAt=performance.now(),Ph(this.canvas)))return;if(t.pointerType==="touch"){for(const r of this.flick)clearTimeout(r);this.flick=[],this.fanTouch={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),moved:!1,lx:t.clientX,acc:0,trail:[{t:performance.now(),x:t.clientX}]};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return}this.fan.click(e,n);return}if(this.state!=="piano"||this.anim)return;this.handledAt=performance.now();const{key:i,piano:o}=this.keyAt(e,n);if(i!==null){t.preventDefault(),this.byPointer.set(t.pointerId,i),this.on(i);try{this.canvas.setPointerCapture(t.pointerId)}catch{}}else o||this.stand()}move(t){if(this.state==="records"){const r=this.fanTouch;if(t.pointerType==="touch"){if(!r||r.id!==t.pointerId)return;for(Math.hypot(t.clientX-r.x,t.clientY-r.y)>12&&(r.moved=!0),r.acc+=t.clientX-r.lx,r.lx=t.clientX;Math.abs(r.acc)>=44;)this.fan.step(r.acc<0?1:-1),r.acc-=Math.sign(r.acc)*44;const c=performance.now();for(r.trail.push({t:c,x:t.clientX});r.trail.length>2&&c-r.trail[0].t>120;)r.trail.shift();return}const[a,l]=Rc(t,this.canvas);this.fan.move(a,l);return}if(this.state!=="piano")return;const[e,n]=Rc(t,this.canvas),{key:i}=this.keyAt(e,n);t.pointerType==="mouse"&&(this.canvas.style.cursor=i!==null?Mu:"");const o=this.byPointer.get(t.pointerId);o!==void 0&&i!==null&&i!==o&&(this.off(o),this.on(i),this.byPointer.set(t.pointerId,i))}up(t){const e=this.fanTouch;if(e&&e.id===t.pointerId){if(this.fanTouch=null,this.handledAt=performance.now(),this.state==="records"&&!e.moved&&performance.now()-e.t<600)this.fan.click(t.clientX,t.clientY);else if(this.state==="records"&&e.trail.length>1){const i=e.trail[0],o=e.trail[e.trail.length-1],r=(o.x-i.x)/Math.max(16,o.t-i.t)*1e3,a=Math.min(4,Math.floor(Math.abs(r)/450));for(let l=1;l<=a;l++)this.flick.push(window.setTimeout(()=>this.fan.step(r<0?1:-1),l*110))}return}const n=this.byPointer.get(t.pointerId);n!==void 0&&(this.byPointer.delete(t.pointerId),this.off(n))}key(t,e){var i,o;if(t.metaKey||t.ctrlKey||t.altKey||(o=(i=t.target).closest)!=null&&o.call(i,"input, textarea, select"))return;if(this.state==="couch"&&e&&!this.anim&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){this.stand();return}if(this.state==="records"){if(!e||this.anim)return;["ArrowRight","KeyD"].includes(t.code)?(t.preventDefault(),this.fan.step(1)):["ArrowLeft","KeyA"].includes(t.code)?(t.preventDefault(),this.fan.step(-1)):["Space","Enter"].includes(t.code)?(t.preventDefault(),this.fan.chooseHovered()):["Escape","KeyW","KeyS"].includes(t.code)&&this.fan.close();return}if(this.state!=="piano")return;if(e&&t.code==="Escape"){this.stand();return}if(t.code==="Space"){t.preventDefault(),this.sound.setPedal(e);return}if(e&&(t.code==="KeyZ"||t.code==="KeyX")){t.repeat||(this.octave=Math.max(-3,Math.min(3,this.octave+(t.code==="KeyX"?1:-1))));return}const n=r2[t.code];if(n!==void 0)if(t.preventDefault(),e){if(t.repeat||this.byKey.has(t.code))return;const r=60+this.octave*12+n;if(r<21||r>108)return;this.byKey.set(t.code,r),this.on(r)}else{const r=this.byKey.get(t.code);if(r===void 0)return;this.byKey.delete(t.code),this.off(r)}}}const l2=33.333/60*Math.PI*2,Pc=-.379;class c2{constructor(t,e,n,i){R(this,"speed",0);R(this,"arm",0);R(this,"vu",[ao,ao]);R(this,"on",null);R(this,"wasPlaying",!1);R(this,"lift",0);R(this,"move",null);this.music=t,this.F=e,this.inside=n,this.you=i}update(t){const e=this.music,n=this.F(),i=n.deck;if(e.setInside(this.inside()),e.tick(t,this.you()),!i&&e.moving&&e.drop(),i){const a=e.playing&&!e.cueing,l=a?l2:0;this.speed+=(l-this.speed)*(1-Math.exp(-(a?2.2:.9)*t)),i.spin.rotation.y-=this.speed*t,i.record.visible=!e.cueing;const c=e.cueing?null:e.album,h=(c==null?void 0:c.id)??null;(h!==this.on||c&&i.record.material===i.restRecord)&&(i.record.material=c?Th(c):i.restRecord,this.on=h);const u=f=>.146-(.146-.064)*f;if(e.moving&&c){const f=i.armAt(u(e.needleTo));this.move||(this.move={phase:"lift",t:0,from:this.arm,to:f,dur:0,aim:e.needleTo});const d=this.move;if(d.aim!==e.needleTo&&(d.aim=e.needleTo,d.from=this.arm,d.to=f,d.phase="lift",d.t=0),d.t+=t,d.phase==="lift")this.lift=Math.min(1,this.lift+t/.35),this.lift>=1&&(d.phase="swing",d.t=0,d.from=this.arm,d.dur=.45+Math.abs(d.to-d.from)*2.2);else if(d.phase==="swing"){const p=Math.min(1,d.t/d.dur),m=p*p*(3-2*p);this.arm=d.from+(d.to-d.from)*m,p>=1&&(d.phase="lower",d.t=0)}else{const p=Math.min(1,d.t/.6);this.lift=(1-p)**2,p>=1&&(this.lift=0,this.move=null,e.drop())}}else{this.move=null,this.lift=Math.max(0,this.lift-t/.35);const d=!!c&&(e.playing||e.progress>5e-4)?i.armAt(u(e.progress)):0,p=.9*t;this.arm+=Math.max(-p,Math.min(p,d-this.arm))}i.arm.rotation.order="YXZ",i.arm.rotation.y=this.arm,i.arm.rotation.x=-.055*(this.lift*this.lift*(3-2*this.lift))}const o=e.levels(),r=1-Math.exp(-t/.3);if(n.meters.needles.forEach((a,l)=>{const c=20*Math.log10((o[l]??0)+1e-6),h=c+18,u=h<=-20?ao:h<=0?ao+(h+20)/20*(Pc-ao):Math.max(Pd,Pc+h/3*(Pd-Pc));this.vu[l]+=(u-this.vu[l])*r,a.rotation.z=this.vu[l]}),e.playing&&!e.cueing){const a=20*Math.log10(Math.max(o[0],o[1])+1e-6),l=Math.round(Math.max(0,Math.min(12,(a+42)/40*12)));n.meters.bar.forEach((c,h)=>c(h<l?h<7?.9:1:h<7?.06:.03))}else this.wasPlaying&&n.meters.bar.forEach((a,l)=>a(l<7?.45:.08));this.wasPlaying=e.playing}}var ip;class h2{constructor(t){R(this,"count",null);R(this,"onCount",()=>{});R(this,"id",(((ip=crypto.randomUUID)==null?void 0:ip.call(crypto))??String(Math.random()).slice(2)).slice(0,36));R(this,"inside",!1);R(this,"timer",0);R(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const li=new URLSearchParams(location.search),u2=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,sr=(matchMedia("(hover: none) and (pointer: coarse)").matches||u2)&&!li.has("desk")||li.has("touch");f2().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function f2(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([__(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(q=>document.fonts.load(q))),new Promise(q=>setTimeout(q,2500))])]);Zb();const e=new h_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,sr?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=Nh,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=cr,e.shadowMap.autoUpdate=!1;const o=e.domElement;document.getElementById("stage").appendChild(o);const r=e.capabilities.getMaxAnisotropy(),a=new qh,l=new tn(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(il);const c=new ES(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const q=e.getDrawingBufferSize(new mt);c.setSize(Math.round(q.x/2),Math.round(q.y/2))};h(),addEventListener("resize",h);const u=new po(t,a,e,c,s,r);await u.loadSmall();const f=new Yw(o),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,hs,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const m=li.get("at");if(m){const[q,W,j,dt]=m.split(",").map(Number);f.pos.set(q,hs,W),f.yaw=_e.degToRad(j||0),f.pitch=_e.degToRad(dt||0)}li.get("hud");const x=document.getElementById("dot"),g=n2();x.style.display="none";const y=new PS(!1),w=new Ts;w.far=14,w.layers.enableAll();let v=[];const M=()=>{v=[],u.interior.group.traverse(q=>{q.isMesh&&!q.isInstancedMesh&&v.push(q)}),u.outside.group.traverse(q=>{q.isMesh&&q.userData.outside&&v.push(q)})},S=()=>E(new mt(0,0)),E=q=>{w.setFromCamera(q,l);const W=w.intersectObjects(v,!1)[0];if(!W)return{kind:"none"};const j=W.object.userData;return j.piece?{kind:"piece",piece:j.piece,records:!!j.records,deck:!!j.deck,point:W.point,dist:W.distance}:j.label?{kind:"label",work:j.work,point:W.point,dist:W.distance}:j.work?{kind:"work",work:j.work,point:W.point,dist:W.distance}:j.face?{kind:"face",face:j.face,point:W.point,dist:W.distance}:{kind:"none",point:W.point,dist:W.distance}},_=(q=3.2)=>{var j,dt;const W=(dt=(j=u.furniture)==null?void 0:j.couch)==null?void 0:dt.centre;return!!W&&Math.hypot(W.x-f.pos.x,W.z-f.pos.z)<q},b=q=>q.kind!=="piece"||!q.point?!1:q.records&&L.state==="couch"?L.lookAtRecords():q.deck&&L.music.album&&Math.hypot(q.point.x-f.pos.x,q.point.z-f.pos.z)<4?(L.music.toggle(),!0):q.piece==="couch"?L.state!=="couch"&&L.sitCouch(q.point):q.piece==="table"&&L.state==="none"&&_()?L.sitCouch(u.furniture.couch.centre,!0):q.piece==="piano"?L.sitPiano(q.point):!1,T=new Ka,C=new Set;let P=1;const U=q=>{let W=99;for(const j of u.interior.pictures)j.work.id===q&&(W=Math.min(W,Math.hypot(j.mesh.position.x-f.pos.x,j.mesh.position.z-f.pos.z)));return W};function F(){P=0;for(const[q,W]of u.sharp)if(!(U(q)<=14)){u.sharp.delete(q);for(const j of u.interior.pictures)j.work.id===q&&(j.mat.uniforms.uMap.value=u.texture(q));W.dispose()}for(const q of u.interior.pictures){const W=q.work.id;u.sharp.has(W)||U(W)>7.5||(P++,!(C.has(W)||C.size>=4)&&(C.add(W),T.loadAsync(po.url(W,"m")).then(j=>{C.delete(W),u.sharp.set(W,u.prepTex(j));for(const dt of u.interior.pictures)dt.work.id===W&&(dt.mat.uniforms.uMap.value=j)}).catch(()=>C.delete(W))))}}const k=new AS;let $=!0;const Y=q=>{const W=u.cat.get(q);W&&($=f.locked,f.frozen=!0,k.show(W,t.images[q],po.url(q,u.sharp.has(q)?"m":"s"),po.url(q,"l")),y.opened())};k.onClose=()=>{f.frozen=!1,vt.looked()};const it=q=>{const W=(t.layout.pieces??[]).find(Et=>Et.id===q);if(!W)return;const j=_e.degToRad(W.rot),dt=Math.sin(j),Tt=Math.cos(j),bt=q==="couch"?2.2:1.7;f.pos.set(W.x+dt*bt,hs,W.z+Tt*bt),f.yaw=Math.atan2(dt,Tt),f.pitch=-.32,f.collide()};let G=[],Z=null;const st=q=>Y(q.id);let ut=0,B=!1;const H=()=>{var kt;const q=(kt=u.furniture)==null?void 0:kt.couch,W=t.layout.outline,j=f.pos;if(!q||L.state!=="none"||L.moving||k.open||document.body.classList.contains("ed-page")||!(j.x>W.x0&&j.x<W.x1&&j.z>W.z0&&j.z<W.z1))return!1;const dt=q.centre,Tt=l.position,bt=Math.hypot(dt.x-Tt.x,dt.z-Tt.z);return bt>3.2?!1:l.getWorldDirection(new I).angleTo(dt.clone().sub(Tt))<Math.atan2(1.2,bt)+(B?.14:.06)},L=new a2(f,l,o,u);for(const q of["pointerdown","touchend","keydown"])addEventListener(q,W=>{W instanceof KeyboardEvent&&(W.key==="Escape"||W.metaKey||W.ctrlKey)||q==="pointerdown"&&f.locked||L.music.ready()},{capture:!0});let V=()=>!1;i2(()=>L.state==="couch"||L.state==="records"||L.state==="piano"||V()),f.mouseLooks=()=>!Aa(),L.onChange=q=>{if(q==="couch"||q==="piano"){const W=o.getBoundingClientRect();L.fan.isOpen||($e.x=W.left+W.width/2,$e.y=W.top+W.height/2)}},addEventListener("pointermove",q=>{if(!f.locked||!Aa()||q.pointerType!=="mouse")return;const W=o.getBoundingClientRect(),j=$e.x+q.movementX,dt=$e.y+q.movementY;$e.x=Math.max(W.left+2,Math.min(W.right-2,j)),$e.y=Math.max(W.top+2,Math.min(W.bottom-2,dt)),L.state==="couch"&&!L.moving&&f.edgeTurn(j-$e.x,dt-$e.y)},{capture:!0});const D=()=>{const q=t.layout.outline,W=f.pos;return W.x>q.x0&&W.x<q.x1&&W.z>q.z0&&W.z<q.z1},z=new c2(L.music,()=>u.furniture,D,()=>l.position);let X=0,tt=!1,et=null;const xt=()=>L.state==="couch"&&!L.moving&&!L.fan.isOpen&&!document.body.classList.contains("ed-page")&&!k.open,_t=q=>{const W=o.getBoundingClientRect();return E(new mt((q.clientX-W.left)/W.width*2-1,-((q.clientY-W.top)/W.height)*2+1))},lt=q=>{if(et!=null&&et.moved){o.style.cursor="";return}const W=_t(q),j=L.recordsUp;o.style.cursor=W.kind==="piece"&&W.records||W.deck&&L.music.album||j&&W.records?Mu:""},pt=q=>{const W=_t(q);if(W.kind==="piece"&&W.records){L.lookAtRecords();return}if(L.recordsUp){L.recordsBack();return}if(W.deck&&L.music.album){L.music.toggle();return}L.stand()};addEventListener("mousemove",q=>{if(!xt()||f.locked||sr){et&&(et=null);return}if(et&&q.buttons&1&&(!et.moved&&Math.hypot(q.clientX-et.x,q.clientY-et.y)>5&&(et.moved=!0),et.moved)){const W=_e.degToRad(l.fov)/(o.clientHeight||800);f.turnBy(q.movementX*W,q.movementY*W)}lt(q)}),addEventListener("mouseup",q=>{const W=et;et=null,!(!W||q.button!==0||!xt())&&(W.moved||pt(q),lt(q))});let ft=0;const yt={gallery:u,player:f,camera:l,renderer:e,canvas:o,viewer:k,scene:a,aim:S,openWork:Y,standAt:it,dot:x};u.onRebuilt=()=>{f.solids=u.arch.solids,f.boxes=u.furniture.solids;const q=t.layout.outline;f.world={x0:q.x0-30,x1:q.x1+30,z0:q.z0-30,z1:q.z1+30},f.collide(),M(),G=u.interior.pictures.map(RS);const W=u.furniture.stand;if(W&&u.furniture.records.length){const j=W.localToWorld(new I(0,.17,.02)),dt=new I(0,0,1).transformDirection(W.matrixWorld),Tt=[];W.traverse(bt=>{bt.isMesh&&Tt.push(bt)}),Z={kind:"records",id:"records",centre:j,normal:[dt.x,0,dt.z],size:.42,reach:2.9,meshes:Tt}}else Z=null;L.rebuilt(),ft=0},u.rebuild();const vt=new Xb(u,f,l,sr);V=()=>vt.asking,vt.onSite=TS,vt.openContact=()=>{Fd({rmiContact:{about:"the Listening Room",from:vt.screenAt()}})},vt.danceBeat=()=>{const q=L.music,W=q.current,j=q.element;if(!W||!j||!q.playing||q.cueing||q.moving||!D())return null;const dt=t.beats[W.file];return!dt||!d_(W,dt)?null:(q.heardTime-dt.beat0)*dt.bpm/60/f_(dt)};const Gt=new h2((li.get("count"),void 0));Gt.onCount=q=>vt.setCount(q),li.get("count")&&(vt.count=+li.get("count"));const Bt=(()=>{const q=document.createElement("div");q.id="leaving",document.body.append(q);let W=0;const j=()=>{if(Fd({rmiLeave:!0}))return;const dt=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(dt)?(history.back(),setTimeout(()=>{location.href=dt},1500)):q.classList.remove("on")};return{start(){clearTimeout(W),q.classList.add("on"),W=window.setTimeout(j,1900)},cancel(){clearTimeout(W),q.classList.remove("on")}}})();vt.onEnter=()=>{Gt.enter(),Bt.cancel(),L.sound.fetchAll()},vt.onKey=q=>{if(q==="ESC"){f.locked&&document.exitPointerLock();return}f.tap(q==="W"?"KeyW":q==="LEFT"?"ArrowLeft":"ArrowRight",q==="W"?.3:.4),f.locked||o.requestPointerLock()},vt.onLeave=()=>{Gt.exit(),Bt.start()};const Zt=new Ts;Zt.far=12;let qt=null,K=-1e9;const me=q=>{if(q.button!==0&&q.button!==2||performance.now()-K<900)return;if(k.open){k.hide();return}if(L.state==="piano"||L.state==="records"||performance.now()-L.handledAt<400)return;const W=document.body.classList.contains("ed-page");if(L.state==="couch"&&!W){if(L.moving)return;if(!f.locked){q.button===0&&(et={x:q.clientX,y:q.clientY,moved:!1});return}if(Ph(o))return;pt({clientX:$e.x,clientY:$e.y});return}if(!f.locked){const dt=o.getBoundingClientRect(),Tt=W?null:E(new mt((q.clientX-dt.left)/dt.width*2-1,-((q.clientY-dt.top)/dt.height)*2+1));if(Tt&&b(Tt))return;if(y.pic){st(y.pic);return}o.requestPointerLock();return}if(vt.asking&&Aa()){Ph(o);return}if(Zt.setFromCamera(new mt(0,0),l),vt.hit(Zt)){vt.poke();return}if(y.pic){st(y.pic);return}const j=S();!W&&b(j)||(j.kind==="work"||j.kind==="label")&&Y(j.work)};o.addEventListener("mousedown",me),addEventListener("pointerdown",q=>{q.pointerType==="touch"&&(K=performance.now())},!0);const se=q=>{w.setFromCamera(q,l);const W=w.intersectObjects(v,!1)[0];if(!W)return{kind:"none"};const j=W.object.userData,dt={point:W.point,dist:W.distance};return j.face?{kind:"wall",...dt}:W.point.y<.02?{kind:"floor",...dt}:{kind:"other",piece:j.piece,records:!!j.records,deck:!!j.deck,...dt}};new US(o,l,f,se,q=>{if(L.state==="couch"){if(L.moving)return;if(q.records){L.lookAtRecords();return}if(L.recordsUp){L.recordsBack();return}if(q.deck&&L.music.album){L.music.toggle();return}L.stand();return}if(!(q.point&&(q.piece==="couch"||q.piece==="piano"||q.piece==="table")&&b({kind:"piece",piece:q.piece,records:q.records,deck:q.deck,point:q.point}))&&q.kind==="floor"&&q.point){const W=q.point.x-f.pos.x,j=q.point.z-f.pos.z,dt=Math.hypot(W,j),Tt=Math.max(0,dt-.5)/Math.max(dt,1e-6);f.goal={x:f.pos.x+W*Tt,z:f.pos.z+j*Tt}}},()=>!k.open&&!document.body.classList.contains("ed-page")&&L.state!=="piano"&&L.state!=="records"),document.addEventListener("selectstart",q=>{var j;const W=q.target instanceof Element?q.target:(j=q.target)==null?void 0:j.parentElement;W!=null&&W.closest("input, textarea, select, [contenteditable]")||q.preventDefault()}),addEventListener("mouseup",q=>qt==null?void 0:qt.release(q)),k.relock=()=>$&&!document.body.classList.contains("ed-page"),k.el.addEventListener("mousedown",q=>{k.busy||q.target.closest(".view-tools")||(q.preventDefault(),k.hide(),!k.open&&!f.locked&&k.relock()&&o.requestPointerLock())}),document.addEventListener("contextmenu",q=>{q.target.closest("input, textarea, select")||q.preventDefault()}),addEventListener("keydown",q=>{var j,dt;if((dt=(j=q.target).closest)!=null&&dt.call(j,"input, textarea, select, button"))return;const W=q.code==="Enter"||q.code==="Space";if(k.open){(W||q.code==="Escape")&&!k.busy&&(q.preventDefault(),k.hide());return}W&&y.pic&&!document.body.classList.contains("ed-page")&&(q.preventDefault(),st(y.pic))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&k.open&&k.hide()});const O=li.get("open");O!==null&&Y(O.padStart(2,"0"));let A=performance.now(),nt=0,ot=0;const ht=li.get("near")==="1";function St(){var Et;const q=performance.now(),W=Math.min((q-A)/1e3,.05);A=q,W>.024?ot+=W:ot=Math.max(0,ot-W*.5),ot>1.5&&i>1&&(i=Math.max(1,i-.25),ot=0,h()),f.update(W),L.update(W),f.apply(l),l.updateMatrixWorld();const j=document.body.classList.contains("ed-page");if(vt.hide(j||k.open),vt.update(W),f.obstacles=[vt.obstacle],(ft-=W)<=0&&(ft=.3,F()),y.hold(L.state==="records"&&!j?Z:null),j||k.open?y.clear():y.update(W,l,G,u.arch.solids,!0),z.update(W),L.music.playing&&(vt.heardMusic=!0),vt.asking!==tt&&(tt=vt.asking,tt&&L.state==="none")){const kt=o.getBoundingClientRect();$e.x=kt.left+kt.width/2,$e.y=kt.top+kt.height/2}L.fan.setShown(!j&&!k.open&&D()),Aa()?g(f.locked&&!j&&!k.open&&!sr,$e.x,$e.y):g(f.locked&&!j&&!k.open&&!sr);const dt=H();dt&&!B&&vt.couch(),B=dt,ut+=((dt?1:0)-ut)*(1-Math.exp(-W/.35));const Tt=(Et=u.furniture)==null?void 0:Et.couch;Tt&&(Tt.light.intensity=Tt.base*(1+.8*ut));const bt=L.music;bt.playing&&!bt.cueing&&L.state==="none"&&!L.moving&&!dt&&!j&&!k.open&&D()&&!_(1.8)?X+=W:X=0,X>7&&vt.sweetSpot()&&(X=0),c.render(e,a,l),e.render(a,l),j||vt.render(e),j||y.render(e,a,l),nt++,!window.__gReady&&nt>3&&(!ht||P===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(St)}requestAnimationFrame(St);try{document.hasFocus()||window.focus()}catch{}li.has("sound")&&X0(()=>import("./soundcheck-DS8IbHNn.js"),[],import.meta.url).then(q=>q.soundPanel(L.music)),window.__g={...yt,data:t,editor:qt,host:vt,presence:Gt,focus:y,standAt:it,sitting:L,outWay:Kb,Raycaster:Ts},window.__crossVp=$e}export{Zd as a,$n as b,Kb as o,dl as s};
