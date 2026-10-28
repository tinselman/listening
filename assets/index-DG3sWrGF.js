var B0=Object.defineProperty;var H0=(s,t,e)=>t in s?B0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>H0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const V0="modulepreload",G0=function(s,t){return new URL(s,t).href},Nu={},W0=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=G0(c,n),c in Nu)return;Nu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const m=o[p];if(m.href===c&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":V0,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="186",X0=0,Uu=1,q0=2,ao=1,Y0=2,io=3,As=0,Sn=1,Zn=2,Fi=0,lo=1,Na=2,zu=3,Fu=4,$0=5,sr=100,K0=101,Z0=102,J0=103,Q0=104,j0=200,tm=201,em=202,nm=203,np=204,ip=205,im=206,sm=207,rm=208,om=209,am=210,lm=211,cm=212,hm=213,um=214,Cc=0,Pc=1,Lc=2,xo=3,Ic=4,Dc=5,Nc=6,Uc=7,Lh=0,fm=1,dm=2,mi=0,sp=1,rp=2,op=3,ap=4,lp=5,cp=6,Ih=7,hp=300,Rs=301,yr=302,Rl=303,Cl=304,dl=306,Ua=1e3,Ni=1001,zc=1002,qe=1003,pm=1004,Uo=1005,tn=1006,Pl=1007,os=1008,wn=1009,up=1010,fp=1011,vo=1012,Dh=1013,xi=1014,jn=1015,In=1016,Nh=1017,Uh=1018,Mo=1020,dp=35902,pp=35899,mp=1021,gp=1022,Pn=1023,Bi=1026,Es=1027,pl=1028,zh=1029,Cs=1030,Fh=1031,kh=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Fc=35840,kc=35841,Oc=35842,Bc=35843,Hc=36196,Vc=37492,Gc=37496,Wc=37488,Xc=37489,za=37490,qc=37491,Yc=37808,$c=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,jc=37814,th=37815,eh=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,ah=36492,lh=36494,ch=36495,hh=36283,uh=36284,Fa=36285,fh=36286,mm=3200,gm=3201,ka=0,xm=1,is="",Ne="srgb",Oa="srgb-linear",Ba="linear",Se="srgb",Ll=7680,vm=519,Mm=512,ym=513,_m=514,Oh=515,wm=516,Sm=517,Bh=518,bm=519,xp=35044,ku="300 es",fi=2e3,yo=2001;function Em(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function _o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Tm(){const s=_o("canvas");return s.style.display="block",s}const Ou={};function Ha(...s){const t="THREE."+s.shift();console.log(t,...s)}function vp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=vp(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ge(...s){s=vp(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function mr(...s){const t=s.join(" ");t in Ou||(Ou[t]=!0,Qt(...s))}function Am(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Rm={[Cc]:Pc,[Lc]:Nc,[Ic]:Uc,[xo]:Dc,[Pc]:Cc,[Nc]:Lc,[Uc]:Ic,[Dc]:xo};class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const co=Math.PI/180,_r=180/Math.PI;function gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Hh(s,t){return(s%t+t)%t}function Cm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Pm(s,t,e){return s!==t?(e-s)/(t-s):0}function ho(s,t,e){return(1-e)*s+e*t}function Lm(s,t,e,n){return ho(s,t,1-Math.exp(-e*n))}function Im(s,t=1){return t-Math.abs(Hh(s,t*2)-t)}function Dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Um(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zm(s,t){return s+Math.random()*(t-s)}function Fm(s){return s*(.5-Math.random())}function km(s){s!==void 0&&(Bu=s);let t=Bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Om(s){return s*co}function Bm(s){return s*_r}function Hm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Vm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wm(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _e={DEG2RAD:co,RAD2DEG:_r,generateUUID:gi,clamp:ae,euclideanModulo:Hh,mapLinear:Cm,inverseLerp:Pm,lerp:ho,damp:Lm,pingpong:Im,smoothstep:Dm,smootherstep:Nm,randInt:Um,randFloat:zm,randFloatSpread:Fm,seededRandom:km,degToRad:Om,radToDeg:Bm,isPowerOfTwo:Hm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Wm,normalize:be,denormalize:Jn},Mu=class Mu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mu.prototype.isVector2=!0;let mt=Mu;class me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],m=r[o+3];if(u!==m||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*m;x<0&&(f=-f,d=-d,p=-p,m=-m,x=-x);let g=1-a;if(x<.9995){const M=Math.acos(x),w=Math.sin(M);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yu=class yu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yu.prototype.isVector3=!0;let I=yu;const Il=new I,Hu=new me,_u=class _u{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],x=i[3],g=i[6],M=i[1],w=i[4],v=i[7],y=i[2],S=i[5],E=i[8];return r[0]=o*m+a*M+l*y,r[3]=o*x+a*w+l*S,r[6]=o*g+a*v+l*E,r[1]=c*m+h*M+u*y,r[4]=c*x+h*w+u*S,r[7]=c*g+h*v+u*E,r[2]=f*m+d*M+p*y,r[5]=f*x+d*w+p*S,r[8]=f*g+d*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(t,e)),this}rotate(t){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-t)),this}translate(t,e){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;let te=_u;const Dl=new te,Vu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xm(){const s={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===is?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Oa]:{primaries:t,whitePoint:n,transfer:Ba,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const xe=Xm();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class qm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zs===void 0&&(zs=_o("canvas")),zs.width=t.width,zs.height=t.height;const i=zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ym=0;class Vh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Nl(i[o].image)):r.push(Nl(i[o]))}else r=Nl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Nl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let $m=0;const Ul=new I;class rn extends Is{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Ni,i=Ni,r=tn,o=os,a=Pn,l=wn,c=rn.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=gi(),this.name="",this.source=new Vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=hp;rn.DEFAULT_ANISOTROPY=1;const wu=class wu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],m=l[2],x=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(d+1)/2,y=(g+1)/2,S=(h+f)/4,E=(u+m)/4,_=(p+x)/4;return w>v&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=S/n,r=E/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=E/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((x-p)*(x-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(x-p)/M,this.y=(u-m)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wu.prototype.isVector4=!0;let Ee=wu;class Km extends Is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new rn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Vh(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Km{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mp extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zm extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fl=class fl{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,p,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,m,x)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,m,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f+m*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f-m*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,m=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jm,t,Qm)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(n,En),Xi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(n,En)),Xi.normalize(),zo.crossVectors(En,Xi),i[0]=Xi.x,i[4]=zo.x,i[8]=En.x,i[1]=Xi.y,i[5]=zo.y,i[9]=En.y,i[2]=Xi.z,i[6]=zo.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],x=n[10],g=n[14],M=n[3],w=n[7],v=n[11],y=n[15],S=i[0],E=i[4],_=i[8],b=i[12],A=i[1],C=i[5],P=i[9],U=i[13],F=i[2],O=i[6],Y=i[10],q=i[14],et=i[3],X=i[7],Z=i[11],it=i[15];return r[0]=o*S+a*A+l*F+c*et,r[4]=o*E+a*C+l*O+c*X,r[8]=o*_+a*P+l*Y+c*Z,r[12]=o*b+a*U+l*q+c*it,r[1]=h*S+u*A+f*F+d*et,r[5]=h*E+u*C+f*O+d*X,r[9]=h*_+u*P+f*Y+d*Z,r[13]=h*b+u*U+f*q+d*it,r[2]=p*S+m*A+x*F+g*et,r[6]=p*E+m*C+x*O+g*X,r[10]=p*_+m*P+x*Y+g*Z,r[14]=p*b+m*U+x*q+g*it,r[3]=M*S+w*A+v*F+y*et,r[7]=M*E+w*C+v*O+y*X,r[11]=M*_+w*P+v*Y+y*Z,r[15]=M*b+w*U+v*q+y*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],m=t[7],x=t[11],g=t[15],M=l*d-c*f,w=a*d-c*u,v=a*f-l*u,y=o*d-c*h,S=o*f-l*h,E=o*u-a*h;return e*(m*M-x*w+g*v)-n*(p*M-x*y+g*S)+i*(p*w-m*y+g*E)-r*(p*v-m*S+x*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],m=t[13],x=t[14],g=t[15],M=e*a-n*o,w=e*l-i*o,v=e*c-r*o,y=n*l-i*a,S=n*c-r*a,E=i*c-r*l,_=h*m-u*p,b=h*x-f*p,A=h*g-d*p,C=u*x-f*m,P=u*g-d*m,U=f*g-d*x,F=M*U-w*P+v*C+y*A-S*b+E*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=(a*U-l*P+c*C)*O,t[1]=(i*P-n*U-r*C)*O,t[2]=(m*E-x*S+g*y)*O,t[3]=(f*S-u*E-d*y)*O,t[4]=(l*A-o*U-c*b)*O,t[5]=(e*U-i*A+r*b)*O,t[6]=(x*v-p*E-g*w)*O,t[7]=(h*E-f*v+d*w)*O,t[8]=(o*P-a*A+c*_)*O,t[9]=(n*A-e*P-r*_)*O,t[10]=(p*S-m*v+g*M)*O,t[11]=(u*v-h*S-d*M)*O,t[12]=(a*b-o*C-l*_)*O,t[13]=(e*C-n*b+i*_)*O,t[14]=(m*w-p*y-x*M)*O,t[15]=(h*y-u*w+f*M)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,m=o*h,x=o*u,g=a*u,M=l*c,w=l*h,v=l*u,y=n.x,S=n.y,E=n.z;return i[0]=(1-(m+g))*y,i[1]=(d+v)*y,i[2]=(p-w)*y,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+g))*S,i[6]=(x+M)*S,i[7]=0,i[8]=(p+w)*E,i[9]=(x-M)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length();const a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Vn.copy(this);const c=1/o,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=fi,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===fi)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===yo)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fi,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===fi)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===yo)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fl.prototype.isMatrix4=!0;let Kt=fl;const Fs=new I,Vn=new Kt,Jm=new I(0,0,0),Qm=new I(1,1,1),Xi=new I,zo=new I,En=new I,Wu=new Kt,Xu=new me;class Dn{constructor(t=0,e=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jm=0;const qu=new I,ks=new me,_i=new Kt,Fo=new I,Cr=new I,tg=new I,eg=new me,Yu=new I(1,0,0),$u=new I(0,1,0),Ku=new I(0,0,1),Zu={type:"added"},ng={type:"removed"},Os={type:"childadded",child:null},zl={type:"childremoved",child:null};class He extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new I,e=new Dn,n=new me,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new te}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis($u,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return qu.copy(t).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis($u,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Cr,Fo,this.up):_i.lookAt(Fo,Cr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),Os.child=t,this.dispatchEvent(Os),Os.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ng),zl.child=t,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class he extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const x=e.getJointPose(m,n),g=this._getHandJoint(c,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function kl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Hh(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return xe.workingToColorSpace(ln.copy(this),t),Math.round(ae(ln.r*255,0,255))*65536+Math.round(ae(ln.g*255,0,255))*256+Math.round(ae(ln.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ne){xe.workingToColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(ko);const n=ho(qi.h,ko.h,e),i=ho(qi.s,ko.s,e),r=ho(qi.l,ko.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Rt;Rt.NAMES=yp;class Wh extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gn=new I,wi=new I,Ol=new I,Si=new I,Bs=new I,Hs=new I,Ju=new I,Bl=new I,Hl=new I,Vl=new I,Gl=new Ee,Wl=new Ee,Xl=new Ee;class Bn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),wi.subVectors(n,e),Ol.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(wi),l=Gn.dot(Ol),c=wi.dot(wi),h=wi.dot(Ol),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(t,e),Wl.fromBufferAttribute(t,n),Xl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Wl,r.y),o.addScaledVector(Xl,r.z),o}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),wi.subVectors(t,e),Gn.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Gn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Bs.subVectors(i,n),Hs.subVectors(r,n),Bl.subVectors(t,n);const l=Bs.dot(Bl),c=Hs.dot(Bl);if(l<=0&&c<=0)return e.copy(n);Hl.subVectors(t,i);const h=Bs.dot(Hl),u=Hs.dot(Hl);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bs,o);Vl.subVectors(t,r);const d=Bs.dot(Vl),p=Hs.dot(Vl);if(p>=0&&d<=p)return e.copy(r);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Hs,a);const x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return Ju.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Ju,a);const g=1/(x+m+f);return o=m*g,a=f*g,e.copy(n).addScaledVector(Bs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ds{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),Bo.subVectors(this.max,Pr),Vs.subVectors(t.a,Pr),Gs.subVectors(t.b,Pr),Ws.subVectors(t.c,Pr),Yi.subVectors(Gs,Vs),$i.subVectors(Ws,Gs),gs.subVectors(Vs,Ws);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!ql(e,Vs,Gs,Ws,Bo)||(e=[1,0,0,0,1,0,0,0,1],!ql(e,Vs,Gs,Ws,Bo))?!1:(Ho.crossVectors(Yi,$i),e=[Ho.x,Ho.y,Ho.z],ql(e,Vs,Gs,Ws,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,Oo=new Ds,Vs=new I,Gs=new I,Ws=new I,Yi=new I,$i=new I,gs=new I,Pr=new I,Bo=new I,Ho=new I,xs=new I;function ql(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xs.fromArray(s,r);const a=i.x*Math.abs(xs.x)+i.y*Math.abs(xs.y)+i.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Li=sg();function sg(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function rg(s){Math.abs(s)>65504&&Qt("DataUtils.toHalfFloat(): Value out of range."),s=ae(s,-65504,65504),Li.floatView[0]=s;const t=Li.uint32View[0],e=t>>23&511;return Li.baseTable[e]+((t&8388607)>>Li.shiftTable[e])}function og(s){const t=s>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[t]+(s&1023)]+Li.exponentTable[t],Li.floatView[0]}class ag{static toHalfFloat(t){return rg(t)}static fromHalfFloat(t){return og(t)}}const Ge=new I,Vo=new mt;let lg=0;class xn extends Is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xp,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wp extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class kt extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const cg=new Ds,Lr=new I,Yl=new I;class Tr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Yl)),this.expandByPoint(Lr.copy(t.center).sub(Yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hg=0;const Un=new Kt,$l=new He,Xs=new I,Tn=new Ds,Ir=new Ds,Ze=new I;class we extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Em(t)?wp:_p)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return $l.lookAt(t),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Tn.min,Ir.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,Ir.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(Ir.min),Tn.expandByPoint(Ir.max))}Tn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),Ze.add(Xs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;const c=new I,h=new I,u=new I,f=new mt,d=new mt,p=new mt,m=new I,x=new I;function g(_,b,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(m),a[b].add(m),a[A].add(m),l[_].add(x),l[b].add(x),l[A].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,b=M.length;_<b;++_){const A=M[_],C=A.start,P=A.count;for(let U=C,F=C+P;U<F;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new I,v=new I,y=new I,S=new I;function E(_){y.fromBufferAttribute(i,_),S.copy(y);const b=a[_];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(S,b);const C=v.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,b=M.length;_<b;++_){const A=M[_],C=A.start,P=A.count;for(let U=C,F=C+P;U<F;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new xn(f,h,u)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ug{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xp,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const un=new I;class Va{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kl=new I,fg=new I,dg=new te;class Ri{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Kl.subVectors(n,e).cross(fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dg.getNormalMatrix(t),i=this.coplanarPoint(Kl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pg=0;class ds extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=lo,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ml extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qs;const Dr=new I,Ys=new I,$s=new I,Ks=new mt,Nr=new mt,Sp=new Kt,Go=new I,Ur=new I,Wo=new I,Qu=new mt,Zl=new mt,ju=new mt;class Xh extends He{constructor(t=new ml){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ug(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new Va(n,3,0,!1)),qs.setAttribute("uv",new Va(n,2,3,!1))}this.geometry=qs,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-$s.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Xo(Go.set(-.5,-.5,0),$s,o,Ys,i,r),Xo(Ur.set(.5,-.5,0),$s,o,Ys,i,r),Xo(Wo.set(.5,.5,0),$s,o,Ys,i,r),Qu.set(0,0),Zl.set(1,0),ju.set(1,1);let a=t.ray.intersectTriangle(Go,Ur,Wo,!1,Dr);if(a===null&&(Xo(Ur.set(-.5,.5,0),$s,o,Ys,i,r),Zl.set(0,1),a=t.ray.intersectTriangle(Go,Wo,Ur,!1,Dr),a===null))return;const l=t.ray.origin.distanceTo(Dr);l<t.near||l>t.far||e.push({distance:l,point:Dr.clone(),uv:Bn.getInterpolation(Dr,Go,Ur,Wo,Qu,Zl,ju,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xo(s,t,e,n,i,r){Ks.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Nr.x=r*Ks.x-i*Ks.y,Nr.y=i*Ks.x+r*Ks.y):Nr.copy(Ks),s.copy(t),s.x+=Nr.x,s.y+=Nr.y,s.applyMatrix4(Sp)}const Ei=new I,Jl=new I,qo=new I,Yo=new I;class qh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jl.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),Yo.copy(this.origin).sub(Jl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=Yo.dot(this.direction),l=-Yo.dot(qo),c=Yo.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Jl).addScaledVector(qo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,m=e.y-o.y,x=e.z-o.z,g=n.x-o.x,M=n.y-o.y,w=n.z-o.z,v=Math.abs(l),y=Math.abs(c),S=Math.abs(h);let E,_,b,A,C,P,U,F,O,Y,q,et;if(v>=y&&v>=S?(b=l,P=u,O=p,et=g,l>=0?(E=c,_=h,A=f,C=d,U=m,F=x,Y=M,q=w):(E=h,_=c,A=d,C=f,U=x,F=m,Y=w,q=M)):y>=S?(b=c,P=f,O=m,et=M,c>=0?(E=h,_=l,A=d,C=u,U=x,F=p,Y=w,q=g):(E=l,_=h,A=u,C=d,U=p,F=x,Y=g,q=w)):(b=h,P=d,O=x,et=w,h>=0?(E=l,_=c,A=u,C=f,U=p,F=m,Y=g,q=M):(E=c,_=l,A=f,C=u,U=m,F=p,Y=M,q=g)),b===0)return null;const X=E/b,Z=_/b,it=1/b,dt=A-X*P,H=C-Z*P,V=U-X*O,L=F-Z*O,G=Y-X*et,N=q-Z*et,z=G*L-N*V,W=dt*N-H*G,tt=V*H-L*dt;if(i){if(z<0||W<0||tt<0)return null}else if((z<0||W<0||tt<0)&&(z>0||W>0||tt>0))return null;const st=z+W+tt;if(st===0)return null;const xt=it*(z*P+W*O+tt*et);return(st>0?xt<0:xt>0)?null:this.at(xt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tf=new Kt,vs=new qh,$o=new Tr,ef=new I,Ko=new I,Zo=new I,Jo=new I,Ql=new I,Qo=new I,nf=new I,jo=new I;class _t extends He{constructor(t=new we,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ql.fromBufferAttribute(u,t),o?Qo.addScaledVector(Ql,h):Qo.addScaledVector(Ql.sub(e),h))}e.add(Qo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!($o.containsPoint(vs.origin)===!1&&(vs.intersectSphere($o,ef)===null||vs.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(r).invert(),vs.copy(t.ray).applyMatrix4(tf),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=o[x.materialIndex],M=Math.max(x.start,d.start),w=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=M,y=w;v<y;v+=3){const S=a.getX(v),E=a.getX(v+1),_=a.getX(v+2);i=ta(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const M=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);i=ta(this,o,t,n,c,h,u,M,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=o[x.materialIndex],M=Math.max(x.start,d.start),w=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=M,y=w;v<y;v+=3){const S=v,E=v+1,_=v+2;i=ta(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const M=x,w=x+1,v=x+2;i=ta(this,o,t,n,c,h,u,M,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function mg(s,t,e,n,i,r,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===As,a),l===null)return null;jo.copy(a),jo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:s}}function ta(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ko),s.getVertexPosition(l,Zo),s.getVertexPosition(c,Jo);const h=mg(s,t,e,n,Ko,Zo,Jo,nf);if(h){const u=new I;Bn.getBarycoord(nf,Ko,Zo,Jo,u),i&&(h.uv=Bn.getInterpolatedAttribute(i,a,l,c,u,new mt)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Bn.getNormal(Ko,Zo,Jo,f.normal),h.face=f,h.barycoord=u}return h}class wr extends rn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=qe,h=qe,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sf extends xn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zs=new Kt,rf=new Kt,ea=[],of=new Ds,gg=new Kt,zr=new _t,Fr=new Tr;class xr extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),of.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(of)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Fr.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),t.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zs),rf.multiplyMatrices(n,Zs),zr.matrixWorld=rf,zr.raycast(t,ea);for(let o=0,a=ea.length;o<a;o++){const l=ea[o];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new sf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(i*this.count),i,this.count,pl,jn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ms=new Tr,xg=new mt(.5,.5),na=new I;class Yh{constructor(t=new Ri,e=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],m=r[9],x=r[10],g=r[11],M=r[12],w=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-o,d-h,g-p,y-M).normalize(),i[1].setComponents(c+o,d+h,g+p,y+M).normalize(),i[2].setComponents(c+a,d+u,g+m,y+w).normalize(),i[3].setComponents(c-a,d-u,g-m,y-w).normalize(),n)i[4].setComponents(l,f,x,v).normalize(),i[5].setComponents(c-l,d-f,g-x,y-v).normalize();else if(i[4].setComponents(c-l,d-f,g-x,y-v).normalize(),e===fi)i[5].setComponents(c+l,d+f,g+x,y+v).normalize();else if(e===yo)i[5].setComponents(l,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const e=xg.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ga=new I,Wa=new I,af=new Kt,kr=new qh,ia=new Tr,jl=new I,lf=new I;class vg extends He{constructor(t=new we,e=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ga.fromBufferAttribute(e,i-1),Wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new kt(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;af.copy(i).invert(),kr.copy(t.ray).applyMatrix4(af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,x=p-1;m<x;m+=c){const g=h.getX(m),M=h.getX(m+1),w=sa(this,t,kr,l,g,M,m);w&&e.push(w)}if(this.isLineLoop){const m=h.getX(p-1),x=h.getX(d),g=sa(this,t,kr,l,m,x,p-1);g&&e.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,x=p-1;m<x;m+=c){const g=sa(this,t,kr,l,m,m+1,m);g&&e.push(g)}if(this.isLineLoop){const m=sa(this,t,kr,l,p-1,d,p-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sa(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ga.fromBufferAttribute(a,i),Wa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ga,Wa,jl,lf)>n)return;jl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(jl);if(!(c<t.near||c>t.far))return{distance:c,point:lf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const cf=new I,hf=new I;class Mg extends vg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)cf.fromBufferAttribute(e,i),hf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cf.distanceTo(hf);t.setAttribute("lineDistance",new kt(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ep extends rn{constructor(t=[],e=Rs,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ps extends rn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends rn{constructor(t,e,n=xi,i,r,o,a=qe,l=qe,c,h=Bi,u=1){if(h!==Bi&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class yg extends wo{constructor(t,e=xi,n=Rs,i,r,o=qe,a=qe,l,c=Bi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Tp extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class en extends we{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function p(m,x,g,M,w,v,y,S,E,_,b){const A=v/E,C=y/_,P=v/2,U=y/2,F=S/2,O=E+1,Y=_+1;let q=0,et=0;const X=new I;for(let Z=0;Z<Y;Z++){const it=Z*C-U;for(let dt=0;dt<O;dt++){const H=dt*A-P;X[m]=H*M,X[x]=it*w,X[g]=F,c.push(X.x,X.y,X.z),X[m]=0,X[x]=0,X[g]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(dt/E),u.push(1-Z/_),q+=1}}for(let Z=0;Z<_;Z++)for(let it=0;it<E;it++){const dt=f+it+O*Z,H=f+it+O*(Z+1),V=f+(it+1)+O*(Z+1),L=f+(it+1)+O*Z;l.push(dt,H,L),l.push(H,V,L),et+=6}a.addGroup(d,et,b),d+=et,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oi extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends we{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const m=[],x=n/2;let g=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function M(){const v=new I,y=new I;let S=0;const E=(e-t)/n;for(let _=0;_<=r;_++){const b=[],A=_/r,C=A*(e-t)+t;for(let P=0;P<=i;P++){const U=P/i,F=U*l+a,O=Math.sin(F),Y=Math.cos(F);y.x=C*O,y.y=-A*n+x,y.z=C*Y,u.push(y.x,y.y,y.z),v.set(O,E,Y).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-A),b.push(p++)}m.push(b)}for(let _=0;_<i;_++)for(let b=0;b<r;b++){const A=m[b][_],C=m[b+1][_],P=m[b+1][_+1],U=m[b][_+1];(t>0||b!==0)&&(h.push(A,C,U),S+=3),(e>0||b!==r-1)&&(h.push(C,P,U),S+=3)}c.addGroup(g,S,0),g+=S}function w(v){const y=p,S=new mt,E=new I;let _=0;const b=v===!0?t:e,A=v===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),p++;const C=p;for(let P=0;P<=i;P++){const F=P/i*l+a,O=Math.cos(F),Y=Math.sin(F);E.x=b*Y,E.y=x*A,E.z=b*O,u.push(E.x,E.y,E.z),f.push(0,A,0),S.x=O*.5+.5,S.y=Y*.5*A+.5,d.push(S.x,S.y),p++}for(let P=0;P<i;P++){const U=y+P,F=C+P;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new mt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],o=[],a=new I,l=new Kt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ae(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ae(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $h extends yi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _g extends $h{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const uf=new I,ff=new I,tc=new Kh,ec=new Kh,nc=new Kh;class So extends yi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ff.subVectors(i[0],i[1]).add(i[0]),c=ff);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(uf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=uf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),x<1e-4&&(x=m),tc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,m,x),ec.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,m,x),nc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,m,x)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ec.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(tc.calc(l),ec.calc(l),nc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function df(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function wg(s,t){const e=1-s;return e*e*t}function Sg(s,t){return 2*(1-s)*s*t}function bg(s,t){return s*s*t}function uo(s,t,e,n){return wg(s,t)+Sg(s,e)+bg(s,n)}function Eg(s,t){const e=1-s;return e*e*e*t}function Tg(s,t){const e=1-s;return 3*e*e*s*t}function Ag(s,t){return 3*(1-s)*s*s*t}function Rg(s,t){return s*s*s*t}function fo(s,t,e,n,i){return Eg(s,t)+Tg(s,e)+Ag(s,n)+Rg(s,i)}class Ap extends yi{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,i.x,r.x,o.x,a.x),fo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rp extends yi{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,i.x,r.x,o.x,a.x),fo(t,i.y,r.y,o.y,a.y),fo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cp extends yi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bo extends yi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends yi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,i.x,r.x,o.x),uo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends yi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,i.x,r.x,o.x),uo(t,i.y,r.y,o.y),uo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(df(a,l.x,c.x,h.x,u.x),df(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Xa=Object.freeze({__proto__:null,ArcCurve:_g,CatmullRomCurve3:So,CubicBezierCurve:Ap,CubicBezierCurve3:Rp,EllipseCurve:$h,LineCurve:Cp,LineCurve3:bo,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Zh,SplineCurve:Lp});class Jh extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Xa[i.type]().fromJSON(i))}return this}}let vr=class extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cp(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Pp(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Ap(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new $h(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class Lo extends vr{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new vr().fromJSON(i))}return this}}function Cg(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ip(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ng(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let f=e;f<i;f+=e){const d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Eo(r,o,e,a,l,c,0),o}function Ip(s,t,e,n,i){let r;if(i===Xg(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=pf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=pf(o/n|0,s[o],s[o+1],r);return r&&Sr(r,r.next)&&(Ao(r),r=r.next),r}function Ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Sr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Eo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Og(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Lg(s,n,i,r):Pg(s)){t.push(l.i,s.i,c.i),Ao(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ig(Ps(s),t),Eo(s,t,e,n,i,r,2)):o===2&&Dg(s,t,e,n,i,r):Eo(Ps(s),t,e,n,i,r,1);break}}}function Pg(s){const t=s.prev,e=s,n=s.next;if(Fe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&so(i,a,r,l,o,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Lg(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Fe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),m=Math.max(a,l,c),x=Math.max(h,u,f),g=dh(d,p,t,e,n),M=dh(m,x,t,e,n);let w=s.prevZ,v=s.nextZ;for(;w&&w.z>=g&&v&&v.z<=M;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==o&&so(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==o&&so(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==o&&so(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==o&&so(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ig(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Sr(n,i)&&Np(n,e,e.next,i)&&To(n,i)&&To(i,n)&&(t.push(n.i,e.i,i.i),Ao(e),Ao(e.next),e=s=i),e=e.next}while(e!==s);return Ps(e)}function Dg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vg(o,a)){let l=Up(o,a);o=Ps(o,o.next),l=Ps(l,l.next),Eo(o,t,e,n,i,r,0),Eo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ng(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Ip(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Hg(c))}i.sort(Ug);for(let r=0;r<i.length;r++)e=zg(i[r],e);return e}function Ug(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function zg(s,t){const e=Fg(s,t);if(!e)return t;const n=Up(e,s);return Ps(n,n.next),Ps(e,e.next)}function Fg(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Sr(s,e))return e;do{if(Sr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);To(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&kg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function kg(s,t){return Fe(s.prev,s,t.prev)<0&&Fe(t.next,s,s.next)<0}function Og(s,t,e,n){let i=s;do i.z===0&&(i.z=dh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Bg(i)}function Bg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function dh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Hg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Dp(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function so(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Dp(s,t,e,n,i,r,o,a)}function Vg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gg(s,t)&&(To(s,t)&&To(t,s)&&Wg(s,t)&&(Fe(s.prev,s,t.prev)||Fe(s,t.prev,t))||Sr(s,t)&&Fe(s.prev,s,s.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Sr(s,t){return s.x===t.x&&s.y===t.y}function Np(s,t,e,n){const i=oa(Fe(s,t,e)),r=oa(Fe(s,t,n)),o=oa(Fe(e,n,s)),a=oa(Fe(e,n,t));return!!(i!==r&&o!==a||i===0&&ra(s,e,t)||r===0&&ra(s,n,t)||o===0&&ra(e,s,n)||a===0&&ra(e,t,n))}function ra(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function oa(s){return s>0?1:s<0?-1:0}function Gg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function To(s,t){return Fe(s.prev,s,s.next)<0?Fe(s,t,s.next)>=0&&Fe(s,s.prev,t)>=0:Fe(s,t,s.prev)<0||Fe(s,s.next,t)<0}function Wg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Up(s,t){const e=ph(s.i,s.x,s.y),n=ph(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pf(s,t,e,n){const i=ph(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ao(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ph(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class qg{static triangulate(t,e,n=2){return Cg(t,e,n)}}class di{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];mf(t),gf(n,t);let o=t.length;e.forEach(mf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,gf(n,e[l]);const a=qg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function mf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function gf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class gl extends we{constructor(t=new Lo([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new kt(i,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Yg;let w,v=!1,y,S,E,_;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;const lt=g.isCatmullRomCurve3?g.closed:!1;y=g.computeFrenetFrames(h,lt),S=new I,E=new I,_=new I}f||(x=0,d=0,p=0,m=0);const b=a.extractPoints(c);let A=b.shape;const C=b.holes;if(!di.isClockWise(A)){A=A.reverse();for(let lt=0,pt=C.length;lt<pt;lt++){const ut=C[lt];di.isClockWise(ut)&&(C[lt]=ut.reverse())}}function U(lt){const ut=10000000000000001e-36;let vt=lt[0];for(let wt=1;wt<=lt.length;wt++){const Gt=wt%lt.length,Ft=lt[Gt],Zt=Ft.x-vt.x,$t=Ft.y-vt.y,K=Zt*Zt+$t*$t,de=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(vt.x),Math.abs(vt.y)),ie=ut*de*de;if(K<=ie){lt.splice(Gt,1),wt--;continue}vt=Ft}}U(A),C.forEach(U);const F=C.length,O=A;for(let lt=0;lt<F;lt++){const pt=C[lt];A=A.concat(pt)}function Y(lt,pt,ut){return pt||ge("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(pt,ut)}const q=A.length;function et(lt,pt,ut){let vt,wt,Gt;const Ft=lt.x-pt.x,Zt=lt.y-pt.y,$t=ut.x-lt.x,K=ut.y-lt.y,de=Ft*Ft+Zt*Zt,ie=Ft*K-Zt*$t;if(Math.abs(ie)>Number.EPSILON){const B=Math.sqrt(de),T=Math.sqrt($t*$t+K*K),nt=pt.x-Zt/B,at=pt.y+Ft/B,k=ut.x-K/T,$=ut.y+$t/T,ct=((k-nt)*K-($-at)*$t)/(Ft*K-Zt*$t);vt=nt+Ft*ct-lt.x,wt=at+Zt*ct-lt.y;const j=vt*vt+wt*wt;if(j<=2)return new mt(vt,wt);Gt=Math.sqrt(j/2)}else{let B=!1;Ft>Number.EPSILON?$t>Number.EPSILON&&(B=!0):Ft<-Number.EPSILON?$t<-Number.EPSILON&&(B=!0):Math.sign(Zt)===Math.sign(K)&&(B=!0),B?(vt=-Zt,wt=Ft,Gt=Math.sqrt(de)):(vt=Ft,wt=Zt,Gt=Math.sqrt(de/2))}return new mt(vt/Gt,wt/Gt)}const X=[];for(let lt=0,pt=O.length,ut=pt-1,vt=lt+1;lt<pt;lt++,ut++,vt++)ut===pt&&(ut=0),vt===pt&&(vt=0),X[lt]=et(O[lt],O[ut],O[vt]);const Z=[];let it,dt=X.concat();for(let lt=0,pt=F;lt<pt;lt++){const ut=C[lt];it=[];for(let vt=0,wt=ut.length,Gt=wt-1,Ft=vt+1;vt<wt;vt++,Gt++,Ft++)Gt===wt&&(Gt=0),Ft===wt&&(Ft=0),it[vt]=et(ut[vt],ut[Gt],ut[Ft]);Z.push(it),dt=dt.concat(it)}let H;if(x===0)H=di.triangulateShape(O,C);else{const lt=[],pt=[];for(let ut=0;ut<x;ut++){const vt=ut/x,wt=d*Math.cos(vt*Math.PI/2),Gt=p*Math.sin(vt*Math.PI/2)+m;for(let Ft=0,Zt=O.length;Ft<Zt;Ft++){const $t=Y(O[Ft],X[Ft],Gt);W($t.x,$t.y,-wt),vt===0&&lt.push($t)}for(let Ft=0,Zt=F;Ft<Zt;Ft++){const $t=C[Ft];it=Z[Ft];const K=[];for(let de=0,ie=$t.length;de<ie;de++){const B=Y($t[de],it[de],Gt);W(B.x,B.y,-wt),vt===0&&K.push(B)}vt===0&&pt.push(K)}}H=di.triangulateShape(lt,pt)}const V=H.length,L=p+m;for(let lt=0;lt<q;lt++){const pt=f?Y(A[lt],dt[lt],L):A[lt];v?(E.copy(y.normals[0]).multiplyScalar(pt.x),S.copy(y.binormals[0]).multiplyScalar(pt.y),_.copy(w[0]).add(E).add(S),W(_.x,_.y,_.z)):W(pt.x,pt.y,0)}for(let lt=1;lt<=h;lt++)for(let pt=0;pt<q;pt++){const ut=f?Y(A[pt],dt[pt],L):A[pt];v?(E.copy(y.normals[lt]).multiplyScalar(ut.x),S.copy(y.binormals[lt]).multiplyScalar(ut.y),_.copy(w[lt]).add(E).add(S),W(_.x,_.y,_.z)):W(ut.x,ut.y,u/h*lt)}for(let lt=x-1;lt>=0;lt--){const pt=lt/x,ut=d*Math.cos(pt*Math.PI/2),vt=p*Math.sin(pt*Math.PI/2)+m;for(let wt=0,Gt=O.length;wt<Gt;wt++){const Ft=Y(O[wt],X[wt],vt);W(Ft.x,Ft.y,u+ut)}for(let wt=0,Gt=C.length;wt<Gt;wt++){const Ft=C[wt];it=Z[wt];for(let Zt=0,$t=Ft.length;Zt<$t;Zt++){const K=Y(Ft[Zt],it[Zt],vt);v?W(K.x,K.y+w[h-1].y,w[h-1].x+ut):W(K.x,K.y,u+ut)}}}G(),N();function G(){const lt=i.length/3;if(f){let pt=0,ut=q*pt;for(let vt=0;vt<V;vt++){const wt=H[vt];tt(wt[2]+ut,wt[1]+ut,wt[0]+ut)}pt=h+x*2,ut=q*pt;for(let vt=0;vt<V;vt++){const wt=H[vt];tt(wt[0]+ut,wt[1]+ut,wt[2]+ut)}}else{for(let pt=0;pt<V;pt++){const ut=H[pt];tt(ut[2],ut[1],ut[0])}for(let pt=0;pt<V;pt++){const ut=H[pt];tt(ut[0]+q*h,ut[1]+q*h,ut[2]+q*h)}}n.addGroup(lt,i.length/3-lt,0)}function N(){const lt=i.length/3;let pt=0;z(O,pt),pt+=O.length;for(let ut=0,vt=C.length;ut<vt;ut++){const wt=C[ut];z(wt,pt),pt+=wt.length}n.addGroup(lt,i.length/3-lt,1)}function z(lt,pt){let ut=lt.length;for(;--ut>=0;){const vt=ut;let wt=ut-1;wt<0&&(wt=lt.length-1);for(let Gt=0,Ft=h+x*2;Gt<Ft;Gt++){const Zt=q*Gt,$t=q*(Gt+1),K=pt+vt+Zt,de=pt+wt+Zt,ie=pt+wt+$t,B=pt+vt+$t;st(K,de,ie,B)}}}function W(lt,pt,ut){l.push(lt),l.push(pt),l.push(ut)}function tt(lt,pt,ut){xt(lt),xt(pt),xt(ut);const vt=i.length/3,wt=M.generateTopUV(n,i,vt-3,vt-2,vt-1);yt(wt[0]),yt(wt[1]),yt(wt[2])}function st(lt,pt,ut,vt){xt(lt),xt(pt),xt(vt),xt(pt),xt(ut),xt(vt);const wt=i.length/3,Gt=M.generateSideWallUV(n,i,wt-6,wt-3,wt-2,wt-1);yt(Gt[0]),yt(Gt[1]),yt(Gt[3]),yt(Gt[1]),yt(Gt[2]),yt(Gt[3])}function xt(lt){i.push(l[lt*3+0]),i.push(l[lt*3+1]),i.push(l[lt*3+2])}function yt(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $g(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Xa[i.type]().fromJSON(i)),new gl(n,t.options)}}const Yg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[r*3],x=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(f,1-p),new mt(m,1-g)]:[new mt(a,1-l),new mt(h,1-u),new mt(d,1-p),new mt(x,1-g)]}};function $g(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xl extends we{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new mt,d=new I,p=new I,m=new I;let x=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:x=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-x,d.z=g*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-x,d.z=g*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let M=0;M<=e;M++){const w=n+M*h*i,v=Math.sin(w),y=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*y,o.push(u.x,u.y,u.z),f.x=M/e,f.y=S/(t.length-1),a.push(f.x,f.y);const E=l[3*S+0]*v,_=l[3*S+1],b=l[3*S+0]*y;c.push(E,_,b)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const v=w+M*t.length,y=v,S=v+t.length,E=v+t.length+1,_=v+1;r.push(y,S,_),r.push(E,_,S)}this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("uv",new kt(a,2)),this.setAttribute("normal",new kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.points,t.segments,t.phiStart,t.phiLength)}}class Ue extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],m=[],x=[];for(let g=0;g<h;g++){const M=g*f-o;for(let w=0;w<c;w++){const v=w*u-r;p.push(v,-M,0),m.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const w=M+c*g,v=M+c*(g+1),y=M+1+c*(g+1),S=M+1+c*g;d.push(w,v,S),d.push(v,y,S)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(m,3)),this.setAttribute("uv",new kt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qh extends we{constructor(t=new Lo([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new kt(i,3)),this.setAttribute("normal",new kt(r,3)),this.setAttribute("uv",new kt(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const p=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const M=p[x];di.isClockWise(M)===!0&&(p[x]=M.reverse())}const m=di.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const M=p[x];d=d.concat(M)}for(let x=0,g=d.length;x<g;x++){const M=d[x];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let x=0,g=m.length;x<g;x++){const M=m[x],w=M[0]+u,v=M[1]+u,y=M[2]+u;n.push(w,v,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Qh(n,t.curveSegments)}}function Kg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Ar extends we{constructor(t=new Zh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new mt;let h=new I;const u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function m(){for(let w=0;w<e;w++)x(w);x(r===!1?e:0),M(),g()}function x(w){h=t.getPointAt(w/e,h);const v=o.normals[w],y=o.binormals[w];for(let S=0;S<=i;S++){const E=S/i*Math.PI*2,_=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+_*y.x,l.y=b*v.y+_*y.y,l.z=b*v.z+_*y.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){const y=(i+1)*(w-1)+(v-1),S=(i+1)*w+(v-1),E=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(y,S,_),p.push(S,E,_)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ar(new Xa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function br(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(xf(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(xf(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function dn(s){const t={};for(let e=0;e<s.length;e++){const n=br(s[e]);for(const i in n)t[i]=n[i]}return t}function xf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Zg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Jg={clone:br,merge:dn};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class tx extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ce extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mn extends Ce{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qa extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Lh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fp extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ex extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ic={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(vf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!vf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class nx{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ix=new nx;class jh{constructor(t){this.manager=t!==void 0?t:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}jh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Js=new WeakMap;class sx extends jh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ic.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Js.get(o);u===void 0&&(u=[],Js.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=_o("img");function l(){h(),e&&e(this);const u=Js.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Js.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),ic.remove(`image:${t}`);const f=Js.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}Js.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ic.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Ya extends jh{constructor(t){super(t)}load(t,e,n,i){const r=new rn,o=new sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class vl extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class rx extends vl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const sc=new Kt,Mf=new I,yf=new I;class tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mf),yf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===yo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const aa=new I,la=new me,ni=new I;class kp extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,la,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,la,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(aa,la,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,la,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new I,_f=new mt,wf=new mt;class je extends kp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,_f,wf),e.subVectors(wf,_f)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ox extends tu{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=_r*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class ax extends vl{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ox}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class lx extends tu{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class Op extends vl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ml extends kp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cx extends tu{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hx extends vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new cx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Qs=-90,js=1;class Bp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Qs,js,t,e);i.layers=this.layers,this.add(i);const r=new je(Qs,js,t,e);r.layers=this.layers,this.add(r);const o=new je(Qs,js,t,e);o.layers=this.layers,this.add(o);const a=new je(Qs,js,t,e);a.layers=this.layers,this.add(a);const l=new je(Qs,js,t,e);l.layers=this.layers,this.add(l);const c=new je(Qs,js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ux extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sf=new Kt;class Ts{constructor(t,e,n=0,i=1/0){this.ray=new qh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(t,e=!0,n=[]){return mh(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)mh(t[i],this,n,e);return n.sort(bf),n}}function bf(s,t){return s.distance-t.distance}function mh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)mh(r[o],t,e,!0)}}const Su=class Su{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Su.prototype.isMatrix2=!0;let Ef=Su;function Tf(s,t,e,n){const i=fx(n);switch(e){case mp:return s*t;case pl:return s*t/i.components*i.byteLength;case zh:return s*t/i.components*i.byteLength;case Cs:return s*t*2/i.components*i.byteLength;case Fh:return s*t*2/i.components*i.byteLength;case gp:return s*t*3/i.components*i.byteLength;case Pn:return s*t*4/i.components*i.byteLength;case kh:return s*t*4/i.components*i.byteLength;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kc:case Bc:return Math.max(s,16)*Math.max(t,8)/4;case Fc:case Oc:return Math.max(s,8)*Math.max(t,8)/2;case Hc:case Vc:case Wc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gc:case za:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ah:case lh:case ch:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hh:case uh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fa:case fh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(s){switch(s){case wn:case up:return{byteLength:1,components:1};case vo:case fp:case In:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case xi:case Dh:case jn:return{byteLength:4,components:1};case dp:case pp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function dx(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],m=u[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const m=u[d];s.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wx=`#ifdef USE_BATCHING
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
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ox=`vec3 transformedNormal = objectNormal;
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
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ev=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#include <lightprobes_pars_fragment>`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uv=`PhysicalMaterial material;
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
#endif`,fv=`uniform sampler2D dfgLUT;
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
}`,dv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
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
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jv=`float getShadowMask() {
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
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v1=`varying vec3 vWorldDirection;
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
}`,y1=`#include <common>
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
}`,_1=`#if DEPTH_PACKING == 3200
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
}`,w1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,P1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
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
}`,I1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,z1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,k1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,H1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,q1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:vx,alphatest_pars_fragment:Mx,aomap_fragment:yx,aomap_pars_fragment:_x,batching_pars_vertex:wx,batching_vertex:Sx,begin_vertex:bx,beginnormal_vertex:Ex,bsdfs:Tx,iridescence_fragment:Ax,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Ix,color_fragment:Dx,color_pars_fragment:Nx,color_pars_vertex:Ux,color_vertex:zx,common:Fx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Bx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:$x,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ov,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:jx,fog_pars_fragment:tv,gradientmap_pars_fragment:ev,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:sv,lights_pars_begin:rv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:hv,lights_physical_fragment:uv,lights_physical_pars_fragment:fv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,lightprobes_pars_fragment:gv,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:yv,map_fragment:_v,map_pars_fragment:wv,map_particle_fragment:Sv,map_particle_pars_fragment:bv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Tv,morphinstance_vertex:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Lv,normal_fragment_begin:Iv,normal_fragment_maps:Dv,normal_pars_fragment:Nv,normal_pars_vertex:Uv,normal_vertex:zv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:Hv,opaque_fragment:Vv,packing:Gv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Jv,shadowmap_vertex:Qv,shadowmask_pars_fragment:jv,skinbase_vertex:t1,skinning_pars_vertex:e1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:s1,specularmap_pars_fragment:r1,tonemapping_fragment:o1,tonemapping_pars_fragment:a1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:h1,uv_pars_vertex:u1,uv_vertex:f1,worldpos_vertex:d1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:x1,cube_vert:v1,cube_frag:M1,depth_vert:y1,depth_frag:_1,distance_vert:w1,distance_frag:S1,equirect_vert:b1,equirect_frag:E1,linedashed_vert:T1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:C1,meshlambert_vert:P1,meshlambert_frag:L1,meshmatcap_vert:I1,meshmatcap_frag:D1,meshnormal_vert:N1,meshnormal_frag:U1,meshphong_vert:z1,meshphong_frag:F1,meshphysical_vert:k1,meshphysical_frag:O1,meshtoon_vert:B1,meshtoon_frag:H1,points_vert:V1,points_frag:G1,shadow_vert:W1,shadow_frag:X1,sprite_vert:q1,sprite_frag:Y1},Ct={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ci={basic:{uniforms:dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:dn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:dn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:dn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Rt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:dn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:dn([Ct.points,Ct.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:dn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:dn([Ct.common,Ct.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:dn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:dn([Ct.sprite,Ct.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:dn([Ct.common,Ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:dn([Ct.lights,Ct.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const ca={r:0,b:0,g:0},$1=new Kt,Vp=new te;Vp.set(-1,0,0,0,1,0,0,0,1);function K1(s,t,e,n,i,r){const o=new Rt(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(M){let w=!1;const v=d(M);v===null?x(o,a):v&&v.isColor&&(x(v,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===dl)?(c===void 0&&(c=new _t(new en(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:br(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vp),c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _t(new Ue(2,2),new bn({name:"BackgroundMaterial",uniforms:br(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function x(M,w){M.getRGB(ca,zp(s)),e.buffers.color.setClear(ca.r,ca.g,ca.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,x(o,a)},render:p,addToRenderList:m,dispose:g}}function Z1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(C,P,U,F,O){let Y=!1;const q=u(C,F,U,P);r!==q&&(r=q,c(r.object)),Y=d(C,F,U,O),Y&&p(C,F,U,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(C,P,U,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,P,U,F){const O=F.wireframe===!0;let Y=n[P.id];Y===void 0&&(Y={},n[P.id]=Y);const q=C.isInstancedMesh===!0?C.id:0;let et=Y[q];et===void 0&&(et={},Y[q]=et);let X=et[U.id];X===void 0&&(X={},et[U.id]=X);let Z=X[O];return Z===void 0&&(Z=f(l()),X[O]=Z),Z}function f(C){const P=[],U=[],F=[];for(let O=0;O<e;O++)P[O]=0,U[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:C,attributes:{},index:null}}function d(C,P,U,F){const O=r.attributes,Y=P.attributes;let q=0;const et=U.getAttributes();for(const X in et)if(et[X].location>=0){const it=O[X];let dt=Y[X];if(dt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function p(C,P,U,F){const O={},Y=P.attributes;let q=0;const et=U.getAttributes();for(const X in et)if(et[X].location>=0){let it=Y[X];it===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(it=C.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),O[X]=dt,q++}r.attributes=O,r.attributesNum=q,r.index=F}function m(){const C=r.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function x(C){g(C,0)}function g(C,P){const U=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;U[C]=1,F[C]===0&&(s.enableVertexAttribArray(C),F[C]=1),O[C]!==P&&(s.vertexAttribDivisor(C,P),O[C]=P)}function M(){const C=r.newAttributes,P=r.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==C[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function w(C,P,U,F,O,Y,q){q===!0?s.vertexAttribIPointer(C,P,U,O,Y):s.vertexAttribPointer(C,P,U,F,O,Y)}function v(C,P,U,F){m();const O=F.attributes,Y=U.getAttributes(),q=P.defaultAttributeValues;for(const et in Y){const X=Y[et];if(X.location>=0){let Z=O[et];if(Z===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){const it=Z.normalized,dt=Z.itemSize,H=t.get(Z);if(H===void 0)continue;const V=H.buffer,L=H.type,G=H.bytesPerElement,N=L===s.INT||L===s.UNSIGNED_INT||Z.gpuType===Dh;if(Z.isInterleavedBufferAttribute){const z=Z.data,W=z.stride,tt=Z.offset;if(z.isInstancedInterleavedBuffer){for(let st=0;st<X.locationSize;st++)g(X.location+st,z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<X.locationSize;st++)x(X.location+st);s.bindBuffer(s.ARRAY_BUFFER,V);for(let st=0;st<X.locationSize;st++)w(X.location+st,dt/X.locationSize,L,it,W*G,(tt+dt/X.locationSize*st)*G,N)}else{if(Z.isInstancedBufferAttribute){for(let z=0;z<X.locationSize;z++)g(X.location+z,Z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let z=0;z<X.locationSize;z++)x(X.location+z);s.bindBuffer(s.ARRAY_BUFFER,V);for(let z=0;z<X.locationSize;z++)w(X.location+z,dt/X.locationSize,L,it,dt*G,dt/X.locationSize*z*G,N)}}else if(q!==void 0){const it=q[et];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(X.location,it);break;case 3:s.vertexAttrib3fv(X.location,it);break;case 4:s.vertexAttrib4fv(X.location,it);break;default:s.vertexAttrib1fv(X.location,it)}}}}M()}function y(){b();for(const C in n){const P=n[C];for(const U in P){const F=P[U];for(const O in F){const Y=F[O];for(const q in Y)h(Y[q].object),delete Y[q];delete F[O]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;const P=n[C.id];for(const U in P){const F=P[U];for(const O in F){const Y=F[O];for(const q in Y)h(Y[q].object),delete Y[q];delete F[O]}}delete n[C.id]}function E(C){for(const P in n){const U=n[P];for(const F in U){const O=U[F];if(O[C.id]===void 0)continue;const Y=O[C.id];for(const q in Y)h(Y[q].object),delete Y[q];delete O[C.id]}}}function _(C){for(const P in n){const U=n[P],F=C.isInstancedMesh===!0?C.id:0,O=U[F];if(O!==void 0){for(const Y in O){const q=O[Y];for(const et in q)h(q[et].object),delete q[et];delete O[Y]}delete U[F],Object.keys(U).length===0&&delete n[P]}}}function b(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:x,disableUnusedAttributes:M}}function J1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Q1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Pn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const _=E===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&E!==jn&&!_&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:y,samples:S}}function j1(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ri,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!x)r?h(null):c();else{const M=r?0:n,w=M*4;let v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let y=0;y!==w;++y)v[y]=e[y];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const m=u!==null?u.length:0;let x=null;if(m!==0){if(x=l.value,p!==!0||x===null){const g=d+m*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,v=d;w!==m;++w,v+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}const hr=4,tM=6,eM=20,nM=256,Or=new Ml,Af=new Rt;let rc=null,oc=0,ac=0,lc=!1;const iM=new I,ys=new I;class gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=iM}=r;rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:In,format:Pn,colorSpace:Oa,depthBuffer:!1},i=Rf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sM(r)),this._blurMaterial=oM(r,t,e),this._ggxMaterial=rM(r,t,e)}return i}_compileMaterial(t){const e=new _t(new we,t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,i,r){const l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Af),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new en,new Ye({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,x=m.material;let g=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,g=!0):(x.color.copy(Af),g=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const y=this._cubeSize;tr(i,v*y,w>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(m,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Rs||t.mapping===yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,m=this._sizeLods[n],x=3*m*(n>p-hr?n-p+hr:0),g=4*(this._cubeSize-m);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,tr(r,x,g,3*m,2*m),i.setRenderTarget(r),i.render(a,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,tr(t,x,g,3*m,2*m),i.setRenderTarget(t),i.render(a,Or)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-hr?i-this._lodMax+hr:0),f=4*(this._cubeSize-h);tr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Or)}}function sM(s){const t=[],e=[];let n=s;const i=s-hr+1+tM;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),m=new Float32Array(d*f*u);for(let g=0;g<u;g++){const M=g%3*2/3-1,w=g>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(v,d*f*g);for(let y=0;y<f;y++){const S=h[y*2]*2-1,E=h[y*2+1]*2-1;g===0?ys.set(1,E,S):g===1?ys.set(-S,1,-E):g===2?ys.set(-S,E,1):g===3?ys.set(-1,E,-S):g===4?ys.set(-S,-1,E):ys.set(S,E,-1),ys.toArray(m,(g*f+y)*d)}}const x=new we;x.setAttribute("position",new xn(p,d)),x.setAttribute("outputDirection",new xn(m,d)),e.push(new _t(x,null)),n>hr&&n--}return{lodMeshes:e,sizeLods:t}}function Rf(s,t,e){const n=new Ln(s,t,e);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function rM(s,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function oM(s,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:eM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Cf(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Pf(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eu extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ep(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new _t(i,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=tn),new Bp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function aM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Rl||d===Cl)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new eu(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===Rl||d===Cl,m=d===Rs||d===yr;if(p||m){let x=e.get(f);const g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new gh(s)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const M=f.image;return p&&M&&M.height>0||m&&M&&l(M)?(n===null&&(n=new gh(s)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Rl?f.mapping=Rs:d===Cl&&(f.mapping=yr),f}function l(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function lM(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&mr("WebGLRenderer: "+n+" extension not supported."),i}}}function cM(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let m=0;if(p===void 0)return;if(d!==null){const M=d.array;m=d.version;for(let w=0,v=M.length;w<v;w+=3){const y=M[w+0],S=M[w+1],E=M[w+2];f.push(y,S,S,E,E,y)}}else{const M=p.array;m=p.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const y=w+0,S=w+1,E=w+2;f.push(y,S,S,E,E,y)}}const x=new(p.count>=65535?wp:_p)(f,1);x.version=m;const g=r.get(u);g&&t.remove(g),r.set(u,x)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hM(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x];e.update(m,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ge("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fM(s,t,e){const n=new WeakMap,i=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),p===!0&&(w=2),m===!0&&(w=3);let v=a.attributes.position.count*w,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const S=new Float32Array(v*y*4*u),E=new Mp(S,v,y,u);E.type=jn,E.needsUpdate=!0;const _=w*4;for(let A=0;A<u;A++){const C=x[A],P=g[A],U=M[A],F=v*y*4*A;for(let O=0;O<C.count;O++){const Y=O*_;d===!0&&(i.fromBufferAttribute(C,O),S[F+Y+0]=i.x,S[F+Y+1]=i.y,S[F+Y+2]=i.z,S[F+Y+3]=0),p===!0&&(i.fromBufferAttribute(P,O),S[F+Y+4]=i.x,S[F+Y+5]=i.y,S[F+Y+6]=i.z,S[F+Y+7]=0),m===!0&&(i.fromBufferAttribute(U,O),S[F+Y+8]=i.x,S[F+Y+9]=i.y,S[F+Y+10]=i.z,S[F+Y+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new mt(v,y)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dM(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const pM={[sp]:"LINEAR_TONE_MAPPING",[rp]:"REINHARD_TONE_MAPPING",[op]:"CINEON_TONE_MAPPING",[ap]:"ACES_FILMIC_TONE_MAPPING",[cp]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[lp]:"CUSTOM_TONE_MAPPING"};function mM(s,t,e,n,i,r){const o=new Ln(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new we;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));const h=new tx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _t(c,h),f=new Ml(-1,1,1,-1,0,1);let d=null,p=null,m=!1,x,g=null,M=[],w=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let S=0;S<M.length;S++){const E=M[S];E.setSize&&E.setSize(v,y)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;const y=o.width,S=o.height;M.length>0&&a===null&&(a=new Ln(y,S,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(y,S,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){const _=M[E];_.setSize&&_.setSize(y,S)}},this.begin=function(v,y){if(m||v.toneMapping===mi&&M.length===0)return!1;if(g=y,y!==null){const S=y.width,E=y.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return w===!1&&v.setRenderTarget(o),x=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=x,m=!0;let S=o,E=a;for(let _=0;_<M.length;_++){const b=M[_];b.enabled!==!1&&(b.render(v,E,S,y),b.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},xe.getTransfer(d)===Se&&(h.defines.SRGB_TRANSFER="");const _=pM[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(u,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Gp=new rn,xh=new wo(1,1),Wp=new Mp,Xp=new Zm,qp=new Ep,Lf=[],If=[],Df=new Float32Array(16),Nf=new Float32Array(9),Uf=new Float32Array(4);function Rr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Lf[i];if(r===void 0&&(r=new Float32Array(i),Lf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _l(s,t){let e=If[t];e===void 0&&(e=new Int32Array(t),If[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function xM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function vM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function MM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function yM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Uf.set(n),s.uniformMatrix2fv(this.addr,!1,Uf),Ke(e,n)}}function _M(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Nf.set(n),s.uniformMatrix3fv(this.addr,!1,Nf),Ke(e,n)}}function wM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;Df.set(n),s.uniformMatrix4fv(this.addr,!1,Df),Ke(e,n)}}function SM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function bM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function EM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function TM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function AM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function RM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function CM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function PM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function LM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xh.compareFunction=e.isReversedDepthBuffer()?Bh:Oh,r=xh):r=Gp,e.setTexture2D(t||r,i)}function IM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xp,i)}function DM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qp,i)}function NM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wp,i)}function UM(s){switch(s){case 5126:return gM;case 35664:return xM;case 35665:return vM;case 35666:return MM;case 35674:return yM;case 35675:return _M;case 35676:return wM;case 5124:case 35670:return SM;case 35667:case 35671:return bM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return NM}}function zM(s,t){s.uniform1fv(this.addr,t)}function FM(s,t){const e=Rr(t,this.size,2);s.uniform2fv(this.addr,e)}function kM(s,t){const e=Rr(t,this.size,3);s.uniform3fv(this.addr,e)}function OM(s,t){const e=Rr(t,this.size,4);s.uniform4fv(this.addr,e)}function BM(s,t){const e=Rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function HM(s,t){const e=Rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function VM(s,t){const e=Rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function GM(s,t){s.uniform1iv(this.addr,t)}function WM(s,t){s.uniform2iv(this.addr,t)}function XM(s,t){s.uniform3iv(this.addr,t)}function qM(s,t){s.uniform4iv(this.addr,t)}function YM(s,t){s.uniform1uiv(this.addr,t)}function $M(s,t){s.uniform2uiv(this.addr,t)}function KM(s,t){s.uniform3uiv(this.addr,t)}function ZM(s,t){s.uniform4uiv(this.addr,t)}function JM(s,t,e){const n=this.cache,i=t.length,r=_l(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=xh:o=Gp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function QM(s,t,e){const n=this.cache,i=t.length,r=_l(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xp,r[o])}function jM(s,t,e){const n=this.cache,i=t.length,r=_l(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||qp,r[o])}function ty(s,t,e){const n=this.cache,i=t.length,r=_l(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wp,r[o])}function ey(s){switch(s){case 5126:return zM;case 35664:return FM;case 35665:return kM;case 35666:return OM;case 35674:return BM;case 35675:return HM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return $M;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return ty}}class ny{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=UM(e.type)}}class iy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ey(e.type)}}class sy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function zf(s,t){s.seq.push(t),s.map[t.id]=t}function ry(s,t,e){const n=s.name,i=n.length;for(cc.lastIndex=0;;){const r=cc.exec(n),o=cc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zf(e,c===void 0?new ny(a,s,t):new iy(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new sy(a),zf(e,u)),e=u}}}class La{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ry(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ff(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const oy=37297;let ay=0;function ly(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kf=new te;function cy(s){xe._getMatrix(kf,xe.workingColorSpace,s);const t=`mat3( ${kf.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case Ba:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Of(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ly(s.getShaderSource(t),a)}else return r}function hy(s,t){const e=cy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const uy={[sp]:"Linear",[rp]:"Reinhard",[op]:"Cineon",[ap]:"ACESFilmic",[cp]:"AgX",[Ih]:"Neutral",[lp]:"Custom"};function fy(s,t){const e=uy[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new I;function dy(){xe.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function my(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ro(s){return s!==""}function Bf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(s){return s.replace(xy,My)}const vy=new Map;function My(s,t){let e=oe[t];if(e===void 0){const n=vy.get(t);if(n!==void 0)e=oe[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vh(e)}const yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(s){return s.replace(yy,_y)}function _y(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const wy={[ao]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function Sy(s){return wy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const by={[Rs]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE_UV"};function Ey(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":by[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ty={[yr]:"ENVMAP_MODE_REFRACTION"};function Ay(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ty[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ry={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[fm]:"ENVMAP_BLENDING_MIX",[dm]:"ENVMAP_BLENDING_ADD"};function Cy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ry[s.combine]||"ENVMAP_BLENDING_NONE"}function Py(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ly(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sy(e),c=Ey(e),h=Ay(e),u=Cy(e),f=Py(e),d=py(e),p=my(r),m=i.createProgram();let x,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),g.length>0&&(g+=`
`)):(x=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),g=[Gf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?oe.tonemapping_pars_fragment:"",e.toneMapping!==mi?fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,hy("linearToOutputTexel",e.outputColorSpace),dy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=vh(o),o=Bf(o,e),o=Hf(o,e),a=vh(a),a=Bf(a,e),a=Hf(a,e),o=Vf(o),a=Vf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=M+x+o,v=M+g+a,y=Ff(i,i.VERTEX_SHADER,w),S=Ff(i,i.FRAGMENT_SHADER,v);i.attachShader(m,y),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(y)||"",F=i.getShaderInfoLog(S)||"",O=P.trim(),Y=U.trim(),q=F.trim();let et=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,S);else{const Z=Of(i,y,"vertex"),it=Of(i,S,"fragment");ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Z+`
`+it)}else O!==""?Qt("WebGLProgram: Program Info Log:",O):(Y===""||q==="")&&(X=!1);X&&(C.diagnostics={runnable:et,programLog:O,vertexShader:{log:Y,prefix:x},fragmentShader:{log:q,prefix:g}})}i.deleteShader(y),i.deleteShader(S),_=new La(i,m),b=gy(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(m,oy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ny(t),e.set(t,n)),n}}class Ny{constructor(t){this.id=Iy++,this.code=t,this.usedTimes=0}}function Uy(s){return s===Cs||s===za||s===Fa}function zy(s,t,e,n,i,r){const o=new Gh,a=new Dy,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,A,C,P,U){const F=C.fog,O=P.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||Y,q),X=et&&et.mapping===dl?et.image.height:null,Z=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Qt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const it=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,dt=it!==void 0?it.length:0;let H=0;O.morphAttributes.position!==void 0&&(H=1),O.morphAttributes.normal!==void 0&&(H=2),O.morphAttributes.color!==void 0&&(H=3);let V,L,G,N;if(Z){const Le=ci[Z];V=Le.vertexShader,L=Le.fragmentShader}else{V=_.vertexShader,L=_.fragmentShader;const Le=a.getVertexShaderStage(_),Me=a.getFragmentShaderStage(_);a.update(_,Le,Me),G=Le.id,N=Me.id}const z=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),tt=P.isInstancedMesh===!0,st=P.isBatchedMesh===!0,xt=!!_.map,yt=!!_.matcap,lt=!!et,pt=!!_.aoMap,ut=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,wt=!!_.normalMap,Gt=!!_.displacementMap,Ft=!!_.emissiveMap,Zt=!!_.metalnessMap,$t=!!_.roughnessMap,K=_.anisotropy>0,de=_.clearcoat>0,ie=_.dispersion>0,B=_.retroreflectivity>0,T=_.iridescence>0,nt=_.sheen>0,at=_.transmission>0,k=K&&!!_.anisotropyMap,$=de&&!!_.clearcoatMap,ct=de&&!!_.clearcoatNormalMap,j=de&&!!_.clearcoatRoughnessMap,ft=T&&!!_.iridescenceMap,St=T&&!!_.iridescenceThicknessMap,Ot=nt&&!!_.sheenColorMap,bt=nt&&!!_.sheenRoughnessMap,Et=!!_.specularMap,Xt=!!_.specularColorMap,Jt=!!_.specularIntensityMap,se=at&&!!_.transmissionMap,Q=at&&!!_.thicknessMap,Tt=!!_.gradientMap,gt=!!_.alphaMap,At=_.alphaTest>0,It=!!_.alphaHash,Mt=!!_.extensions;let qt=mi;_.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=s.toneMapping);const Vt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:L,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:N,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:st,batchingColor:st&&P._colorsTexture!==null,instancing:tt,instancingColor:tt&&P.instanceColor!==null,instancingMorph:tt&&P.morphTexture!==null,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xt,matcap:yt,envMap:lt,envMapMode:lt&&et.mapping,envMapCubeUVHeight:X,aoMap:pt,lightMap:ut,bumpMap:vt,normalMap:wt,displacementMap:Gt,emissiveMap:Ft,normalMapObjectSpace:wt&&_.normalMapType===xm,normalMapTangentSpace:wt&&_.normalMapType===ka,packedNormalMap:wt&&_.normalMapType===ka&&Uy(_.normalMap.format),metalnessMap:Zt,roughnessMap:$t,anisotropy:K,anisotropyMap:k,clearcoat:de,clearcoatMap:$,clearcoatNormalMap:ct,clearcoatRoughnessMap:j,dispersion:ie,retroreflection:B,iridescence:T,iridescenceMap:ft,iridescenceThicknessMap:St,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:Et,specularColorMap:Xt,specularIntensityMap:Jt,transmission:at,transmissionMap:se,thicknessMap:Q,gradientMap:Tt,opaque:_.transparent===!1&&_.blending===lo&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:At,alphaHash:It,combine:_.combine,mapUv:xt&&p(_.map.channel),aoMapUv:pt&&p(_.aoMap.channel),lightMapUv:ut&&p(_.lightMap.channel),bumpMapUv:vt&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:Ft&&p(_.emissiveMap.channel),metalnessMapUv:Zt&&p(_.metalnessMap.channel),roughnessMapUv:$t&&p(_.roughnessMap.channel),anisotropyMapUv:k&&p(_.anisotropyMap.channel),clearcoatMapUv:$&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(_.sheenRoughnessMap.channel),specularMapUv:Et&&p(_.specularMap.channel),specularColorMapUv:Xt&&p(_.specularColorMap.channel),specularIntensityMapUv:Jt&&p(_.specularIntensityMap.channel),transmissionMapUv:se&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:gt&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(wt||K),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(xt||gt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:W,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:H,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:qt,decodeVideoTexture:xt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&xe.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(b,_),M(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const b=d[_.type];let A;if(b){const C=ci[b];A=Jg.clone(C.uniforms)}else A=_.uniforms;return A}function v(_,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new Ly(s,b,_,i),c.push(A),h.set(b,A)),A}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:v,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function Fy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ky(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Wf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,m,x,g){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},s[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=p,M.materialVariant=o(f),M.groupOrder=m,M.renderOrder=f.renderOrder,M.z=x,M.group=g),t++,M}function l(f,d,p,m,x,g,M){M.reversedDepth===!0&&(x=-x);const w=a(f,d,p,m,x,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(f,d,p,m,x,g){const M=a(f,d,p,m,x,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||ky),n.length>1&&n.sort(d||Wf),i.length>1&&i.sort(d||Wf)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Oy(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xf,s.set(n,[o])):i>=r.length?(o=new Xf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function By(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Hy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Vy=0;function Gy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wy(s){const t=new By,e=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Kt,o=new Kt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,m=0,x=0,g=0,M=0,w=0,v=0,y=0,S=0,E=0,_=0,b=0,A=0;c.sort(Gy);for(let P=0,U=c.length;P<U;P++){const F=c[P],O=F.color,Y=F.intensity,q=F.distance;let et=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Cs?et=F.shadow.map.texture:et=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=O.r*Y,u+=O.g*Y,f+=O.b*Y;else if(F.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(F.sh.coefficients[X],Y);A++}else if(F.isSunLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,it=e.get(F);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=it,n.sunShadowMap[p]=et;const dt=Z.getViewportCount();for(let H=0;H<dt;H++)n.sunShadowMatrix[m+H]=Z.getMatrix(H),n.sunShadowCascade[m+H]=Z._cascadeData[H];m+=dt,p++}n.sun[d]=X,d++}else if(F.isDirectionalLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,it=e.get(F);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,n.directionalShadow[x]=it,n.directionalShadowMap[x]=et,n.directionalShadowMatrix[x]=F.shadow.matrix,y++}n.directional[x]=X,x++}else if(F.isSpotLight){const X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(O).multiplyScalar(Y),X.distance=q,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,n.spot[M]=X;const Z=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,Z.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[M]=Z.matrix,F.castShadow){const it=e.get(F);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,n.spotShadow[M]=it,n.spotShadowMap[M]=et,E++}M++}else if(F.isRectAreaLight){const X=t.get(F);X.color.copy(O).multiplyScalar(Y),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=X,w++}else if(F.isPointLight){const X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const Z=F.shadow,it=e.get(F);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,it.shadowCameraNear=Z.camera.near,it.shadowCameraFar=Z.camera.far,n.pointShadow[g]=it,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=X,g++}else if(F.isHemisphereLight){const X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(Y),X.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[v]=X,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==x||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==E||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.sunLength=d,C.directionalLength=x,C.pointLength=g,C.spotLength=M,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=E,C.numSpotMaps=_,C.numLightProbes=A,n.version=Vy++)}function l(c,h){let u=0,f=0,d=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const v=c[M];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function qf(s){const t=new Wy(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Xy(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new qf(s),t.set(i,[a])):r>=o.length?(a=new qf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,$y=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ky=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Yf=new Kt,Br=new I,hc=new I;function Zy(s,t,e){let n=new Yh;const i=new mt,r=new mt,o=new Ee,a=new Fp,l=new ex,c={},h=e.maxTextureSize,u={[As]:Sn,[Sn]:As,[Zn]:Zn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new we;p.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new _t(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let g=this.type;this.render=function(S,E,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===Y0&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);const b=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=g!==this.type;U&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(O=>O.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,O=S.length;F<O;F++){const Y=S[F],q=Y.shadow;if(q===void 0){Qt("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const et=q.getFrameExtents();i.multiply(et),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,q.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=X,q.map===null||U===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===io){if(Y.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ln(i.x,i.y,{format:Cs,type:In,minFilter:tn,magFilter:tn,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new wo(i.x,i.y,jn),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=Bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qe,q.map.depthTexture.magFilter=qe}else Y.isPointLight?(q.map=new eu(i.x),q.map.depthTexture=new yg(i.x,xi)):(q.map=new Ln(i.x,i.y),q.map.depthTexture=new wo(i.x,i.y,xi)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=Bi,this.type===ao?(q.map.depthTexture.compareFunction=X?Bh:Oh,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qe,q.map.depthTexture.magFilter=qe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);const Z=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,_);for(let it=0;it<Z;it++){const dt=q.getCamera(it);if(Y.isPointLight){const H=q.camera,V=q.matrix,L=Y.distance||H.far;L!==H.far&&(H.far=L,H.updateProjectionMatrix()),Br.setFromMatrixPosition(Y.matrixWorld),H.position.copy(Br),hc.copy(H.position),hc.add($y[it]),H.up.copy(Ky[it]),H.lookAt(hc),H.updateMatrixWorld(),V.makeTranslation(-Br.x,-Br.y,-Br.z),Yf.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Yf,H.coordinateSystem,H.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,it),s.clear();else{it===0&&(s.setRenderTarget(q.map),s.clear());const H=q.getViewport(it);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o)}n=q.getFrustum(it),v(E,_,dt,Y,this.type)}q.isPointLightShadow!==!0&&this.type===io&&M(q,_),q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(b,A,C)};function M(S,E){const _=t.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ln(i.x,i.y,{format:Cs,type:In}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,_,f,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,_,d,m,null)}function w(S,E,_,b){let A=null;const C=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=A.uuid,U=E.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let O=F[U];O===void 0&&(O=A.clone(),F[U]=O,E.addEventListener("dispose",y)),A=O}if(A.visible=E.visible,A.wireframe=E.wireframe,b===io?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=s.properties.get(A);P.light=_}return A}function v(S,E,_,b,A){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===io)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const U=t.update(S),F=S.material;if(Array.isArray(F)){const O=U.groups;for(let Y=0,q=O.length;Y<q;Y++){const et=O[Y],X=F[et.materialIndex];if(X&&X.visible){const Z=w(S,X,b,A);S.onBeforeShadow(s,S,E,_,U,Z,et),s.renderBufferDirect(_,null,U,Z,S,et),S.onAfterShadow(s,S,E,_,U,Z,et)}}}else if(F.visible){const O=w(S,F,b,A);S.onBeforeShadow(s,S,E,_,U,O,null),s.renderBufferDirect(_,null,U,O,S,null),S.onAfterShadow(s,S,E,_,U,O,null)}}const P=S.children;for(let U=0,F=P.length;U<F;U++)v(P[U],E,_,b,A)}function y(S){S.target.removeEventListener("dispose",y);for(const _ in c){const b=c[_],A=S.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function Jy(s,t){function e(){let Q=!1;const Tt=new Ee;let gt=null;const At=new Ee(0,0,0,0);return{setMask:function(It){gt!==It&&!Q&&(s.colorMask(It,It,It,It),gt=It)},setLocked:function(It){Q=It},setClear:function(It,Mt,qt,Vt,Le){Le===!0&&(It*=Vt,Mt*=Vt,qt*=Vt),Tt.set(It,Mt,qt,Vt),At.equals(Tt)===!1&&(s.clearColor(It,Mt,qt,Vt),At.copy(Tt))},reset:function(){Q=!1,gt=null,At.set(-1,0,0,0)}}}function n(){let Q=!1,Tt=!1,gt=null,At=null,It=null;return{setReversed:function(Mt){if(Tt!==Mt){const qt=t.get("EXT_clip_control");Mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=Mt;const Vt=It;It=null,this.setClear(Vt)}},getReversed:function(){return Tt},setTest:function(Mt){Mt?z(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Mt){gt!==Mt&&!Q&&(s.depthMask(Mt),gt=Mt)},setFunc:function(Mt){if(Tt&&(Mt=Rm[Mt]),At!==Mt){switch(Mt){case Cc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case xo:s.depthFunc(s.LEQUAL);break;case Ic:s.depthFunc(s.EQUAL);break;case Dc:s.depthFunc(s.GEQUAL);break;case Nc:s.depthFunc(s.GREATER);break;case Uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=Mt}},setLocked:function(Mt){Q=Mt},setClear:function(Mt){It!==Mt&&(It=Mt,Tt&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){Q=!1,gt=null,At=null,It=null,Tt=!1}}}function i(){let Q=!1,Tt=null,gt=null,At=null,It=null,Mt=null,qt=null,Vt=null,Le=null;return{setTest:function(Me){Q||(Me?z(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!Q&&(s.stencilMask(Me),Tt=Me)},setFunc:function(Me,Hn,ti){(gt!==Me||At!==Hn||It!==ti)&&(s.stencilFunc(Me,Hn,ti),gt=Me,At=Hn,It=ti)},setOp:function(Me,Hn,ti){(Mt!==Me||qt!==Hn||Vt!==ti)&&(s.stencilOp(Me,Hn,ti),Mt=Me,qt=Hn,Vt=ti)},setLocked:function(Me){Q=Me},setClear:function(Me){Le!==Me&&(s.clearStencil(Me),Le=Me)},reset:function(){Q=!1,Tt=null,gt=null,At=null,It=null,Mt=null,qt=null,Vt=null,Le=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,M=null,w=null,v=null,y=null,S=null,E=null,_=new Rt(0,0,0),b=0,A=!1,C=null,P=null,U=null,F=null,O=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,et=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=et>=2);let Z=null,it={};const dt=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),V=new Ee().fromArray(dt),L=new Ee().fromArray(H);function G(Q,Tt,gt,At){const It=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(Q,Mt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<gt;qt++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,It):s.texImage2D(Tt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,It);return Mt}const N={};N[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(s.DEPTH_TEST),o.setFunc(xo),vt(!1),wt(Uu),z(s.CULL_FACE),pt(Fi);function z(Q){h[Q]!==!0&&(s.enable(Q),h[Q]=!0)}function W(Q){h[Q]!==!1&&(s.disable(Q),h[Q]=!1)}function tt(Q,Tt){return f[Q]!==Tt?(s.bindFramebuffer(Q,Tt),f[Q]=Tt,Q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Tt),Q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function st(Q,Tt){let gt=p,At=!1;if(Q){gt=d.get(Tt),gt===void 0&&(gt=[],d.set(Tt,gt));const It=Q.textures;if(gt.length!==It.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,qt=It.length;Mt<qt;Mt++)gt[Mt]=s.COLOR_ATTACHMENT0+Mt;gt.length=It.length,At=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,At=!0);At&&s.drawBuffers(gt)}function xt(Q){return m!==Q?(s.useProgram(Q),m=Q,!0):!1}const yt={[sr]:s.FUNC_ADD,[K0]:s.FUNC_SUBTRACT,[Z0]:s.FUNC_REVERSE_SUBTRACT};yt[J0]=s.MIN,yt[Q0]=s.MAX;const lt={[j0]:s.ZERO,[tm]:s.ONE,[em]:s.SRC_COLOR,[np]:s.SRC_ALPHA,[am]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[im]:s.DST_ALPHA,[nm]:s.ONE_MINUS_SRC_COLOR,[ip]:s.ONE_MINUS_SRC_ALPHA,[om]:s.ONE_MINUS_DST_COLOR,[sm]:s.ONE_MINUS_DST_ALPHA,[lm]:s.CONSTANT_COLOR,[cm]:s.ONE_MINUS_CONSTANT_COLOR,[hm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(Q,Tt,gt,At,It,Mt,qt,Vt,Le,Me){if(Q===Fi){x===!0&&(W(s.BLEND),x=!1);return}if(x===!1&&(z(s.BLEND),x=!0),Q!==$0){if(Q!==g||Me!==A){if((M!==sr||y!==sr)&&(s.blendEquation(s.FUNC_ADD),M=sr,y=sr),Me)switch(Q){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.ONE,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ge("WebGLState: Invalid blending: ",Q);break}else switch(Q){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zu:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",Q);break}w=null,v=null,S=null,E=null,_.set(0,0,0),b=0,g=Q,A=Me}return}It=It||Tt,Mt=Mt||gt,qt=qt||At,(Tt!==M||It!==y)&&(s.blendEquationSeparate(yt[Tt],yt[It]),M=Tt,y=It),(gt!==w||At!==v||Mt!==S||qt!==E)&&(s.blendFuncSeparate(lt[gt],lt[At],lt[Mt],lt[qt]),w=gt,v=At,S=Mt,E=qt),(Vt.equals(_)===!1||Le!==b)&&(s.blendColor(Vt.r,Vt.g,Vt.b,Le),_.copy(Vt),b=Le),g=Q,A=!1}function ut(Q,Tt){Q.side===Zn?W(s.CULL_FACE):z(s.CULL_FACE);let gt=Q.side===Sn;Tt&&(gt=!gt),vt(gt),Q.blending===lo&&Q.transparent===!1?pt(Fi):pt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);const At=Q.stencilWrite;a.setTest(At),At&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Ft(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(Q){C!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),C=Q)}function wt(Q){Q!==X0?(z(s.CULL_FACE),Q!==P&&(Q===Uu?s.cullFace(s.BACK):Q===q0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),P=Q}function Gt(Q){Q!==U&&(q&&s.lineWidth(Q),U=Q)}function Ft(Q,Tt,gt){Q?(z(s.POLYGON_OFFSET_FILL),(F!==Tt||O!==gt)&&(F=Tt,O=gt,o.getReversed()&&(Tt=-Tt),s.polygonOffset(Tt,gt))):W(s.POLYGON_OFFSET_FILL)}function Zt(Q){Q?z(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function $t(Q){Q===void 0&&(Q=s.TEXTURE0+Y-1),Z!==Q&&(s.activeTexture(Q),Z=Q)}function K(Q,Tt,gt){gt===void 0&&(Z===null?gt=s.TEXTURE0+Y-1:gt=Z);let At=it[gt];At===void 0&&(At={type:void 0,texture:void 0},it[gt]=At),(At.type!==Q||At.texture!==Tt)&&(Z!==gt&&(s.activeTexture(gt),Z=gt),s.bindTexture(Q,Tt||N[Q]),At.type=Q,At.texture=Tt)}function de(){const Q=it[Z];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ie(){try{s.compressedTexImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function T(){try{s.texSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function nt(){try{s.texSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function at(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function k(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function $(){try{s.texStorage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function ct(){try{s.texStorage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function j(){try{s.texImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function ft(){try{s.texImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function St(Q){return u[Q]!==void 0?u[Q]:s.getParameter(Q)}function Ot(Q,Tt){u[Q]!==Tt&&(s.pixelStorei(Q,Tt),u[Q]=Tt)}function bt(Q){V.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),V.copy(Q))}function Et(Q){L.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),L.copy(Q))}function Xt(Q,Tt){let gt=c.get(Tt);gt===void 0&&(gt=new WeakMap,c.set(Tt,gt));let At=gt.get(Q);At===void 0&&(At=s.getUniformBlockIndex(Tt,Q.name),gt.set(Q,At))}function Jt(Q,Tt){const At=c.get(Tt).get(Q);l.get(Tt)!==At&&(s.uniformBlockBinding(Tt,At,Q.__bindingPointIndex),l.set(Tt,At))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,it={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,M=null,w=null,v=null,y=null,S=null,E=null,_=new Rt(0,0,0),b=0,A=!1,C=null,P=null,U=null,F=null,O=null,V.set(0,0,s.canvas.width,s.canvas.height),L.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:W,bindFramebuffer:tt,drawBuffers:st,useProgram:xt,setBlending:pt,setMaterial:ut,setFlipSided:vt,setCullFace:wt,setLineWidth:Gt,setPolygonOffset:Ft,setScissorTest:Zt,activeTexture:$t,bindTexture:K,unbindTexture:de,compressedTexImage2D:ie,compressedTexImage3D:B,texImage2D:j,texImage3D:ft,pixelStorei:Ot,getParameter:St,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:$,texStorage3D:ct,texSubImage2D:T,texSubImage3D:nt,compressedTexSubImage2D:at,compressedTexSubImage3D:k,scissor:bt,viewport:Et,reset:se}}function Qy(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(B,T){return p?new OffscreenCanvas(B,T):_o("canvas")}function x(B,T,nt){let at=1;const k=ie(B);if((k.width>nt||k.height>nt)&&(at=nt/Math.max(k.width,k.height)),at<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const $=Math.floor(at*k.width),ct=Math.floor(at*k.height);f===void 0&&(f=m($,ct));const j=T?m($,ct):f;return j.width=$,j.height=ct,j.getContext("2d").drawImage(B,0,0,$,ct),Qt("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+$+"x"+ct+")."),j}else return"data"in B&&Qt("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),B;return B}function g(B){return B.generateMipmaps}function M(B){s.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(B,T,nt,at,k,$=!1){if(B!==null){if(s[B]!==void 0)return s[B];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ct;at&&(ct=t.get("EXT_texture_norm16"),ct||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=T;if(T===s.RED&&(nt===s.FLOAT&&(j=s.R32F),nt===s.HALF_FLOAT&&(j=s.R16F),nt===s.UNSIGNED_BYTE&&(j=s.R8),nt===s.UNSIGNED_SHORT&&ct&&(j=ct.R16_EXT),nt===s.SHORT&&ct&&(j=ct.R16_SNORM_EXT)),T===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(j=s.R8UI),nt===s.UNSIGNED_SHORT&&(j=s.R16UI),nt===s.UNSIGNED_INT&&(j=s.R32UI),nt===s.BYTE&&(j=s.R8I),nt===s.SHORT&&(j=s.R16I),nt===s.INT&&(j=s.R32I)),T===s.RG&&(nt===s.FLOAT&&(j=s.RG32F),nt===s.HALF_FLOAT&&(j=s.RG16F),nt===s.UNSIGNED_BYTE&&(j=s.RG8),nt===s.UNSIGNED_SHORT&&ct&&(j=ct.RG16_EXT),nt===s.SHORT&&ct&&(j=ct.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(j=s.RG8UI),nt===s.UNSIGNED_SHORT&&(j=s.RG16UI),nt===s.UNSIGNED_INT&&(j=s.RG32UI),nt===s.BYTE&&(j=s.RG8I),nt===s.SHORT&&(j=s.RG16I),nt===s.INT&&(j=s.RG32I)),T===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(j=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(j=s.RGB16UI),nt===s.UNSIGNED_INT&&(j=s.RGB32UI),nt===s.BYTE&&(j=s.RGB8I),nt===s.SHORT&&(j=s.RGB16I),nt===s.INT&&(j=s.RGB32I)),T===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),nt===s.UNSIGNED_INT&&(j=s.RGBA32UI),nt===s.BYTE&&(j=s.RGBA8I),nt===s.SHORT&&(j=s.RGBA16I),nt===s.INT&&(j=s.RGBA32I)),T===s.RGB&&(nt===s.UNSIGNED_SHORT&&ct&&(j=ct.RGB16_EXT),nt===s.SHORT&&ct&&(j=ct.RGB16_SNORM_EXT),nt===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),nt===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),T===s.RGBA){const ft=$?Ba:xe.getTransfer(k);nt===s.FLOAT&&(j=s.RGBA32F),nt===s.HALF_FLOAT&&(j=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(j=ft===Se?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT&&ct&&(j=ct.RGBA16_EXT),nt===s.SHORT&&ct&&(j=ct.RGBA16_SNORM_EXT),nt===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(B,T){let nt;return B?T===null||T===xi||T===Mo?nt=s.DEPTH24_STENCIL8:T===jn?nt=s.DEPTH32F_STENCIL8:T===vo&&(nt=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xi||T===Mo?nt=s.DEPTH_COMPONENT24:T===jn?nt=s.DEPTH_COMPONENT32F:T===vo&&(nt=s.DEPTH_COMPONENT16),nt}function S(B,T){return g(B)===!0||B.isFramebufferTexture&&B.minFilter!==qe&&B.minFilter!==tn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function E(B){const T=B.target;T.removeEventListener("dispose",E),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function _(B){const T=B.target;T.removeEventListener("dispose",_),C(T)}function b(B){const T=n.get(B);if(T.__webglInit===void 0)return;const nt=B.source,at=d.get(nt);if(at){const k=at[T.__cacheKey];k.usedTimes--,k.usedTimes===0&&A(B),Object.keys(at).length===0&&d.delete(nt)}n.remove(B)}function A(B){const T=n.get(B);s.deleteTexture(T.__webglTexture);const nt=B.source,at=d.get(nt);delete at[T.__cacheKey],o.memory.textures--}function C(B){const T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let k=0;k<T.__webglFramebuffer[at].length;k++)s.deleteFramebuffer(T.__webglFramebuffer[at][k]);else s.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)s.deleteFramebuffer(T.__webglFramebuffer[at]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=B.textures;for(let at=0,k=nt.length;at<k;at++){const $=n.get(nt[at]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(nt[at])}n.remove(B)}let P=0;function U(){P=0}function F(){return P}function O(B){P=B}function Y(){const B=P;return B>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,B}function q(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function et(B,T){const nt=n.get(B);if(B.isVideoTexture&&K(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&nt.__version!==B.version){const at=B.image;if(at===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,B,T);return}}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+T)}function X(B,T){const nt=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){W(nt,B,T);return}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+T)}function Z(B,T){const nt=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){W(nt,B,T);return}e.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+T)}function it(B,T){const nt=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&nt.__version!==B.version){tt(nt,B,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+T)}const dt={[Ua]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[zc]:s.MIRRORED_REPEAT},H={[qe]:s.NEAREST,[pm]:s.NEAREST_MIPMAP_NEAREST,[Uo]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Pl]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},V={[Mm]:s.NEVER,[bm]:s.ALWAYS,[ym]:s.LESS,[Oh]:s.LEQUAL,[_m]:s.EQUAL,[Bh]:s.GEQUAL,[wm]:s.GREATER,[Sm]:s.NOTEQUAL};function L(B,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===tn||T.magFilter===Pl||T.magFilter===Uo||T.magFilter===os||T.minFilter===tn||T.minFilter===Pl||T.minFilter===Uo||T.minFilter===os)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,dt[T.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,dt[T.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,dt[T.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,H[T.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==Uo&&T.minFilter!==os||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function G(B,T){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",E));const at=T.source;let k=d.get(at);k===void 0&&(k={},d.set(at,k));const $=q(T);if($!==B.__cacheKey){k[$]===void 0&&(k[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),k[$].usedTimes++;const ct=k[B.__cacheKey];ct!==void 0&&(k[B.__cacheKey].usedTimes--,ct.usedTimes===0&&A(T)),B.__cacheKey=$,B.__webglTexture=k[$].texture}return nt}function N(B,T,nt){return Math.floor(Math.floor(B/nt)/T)}function z(B,T,nt,at){const $=B.updateRanges;if($.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,nt,at,T.data);else{$.sort((Ot,bt)=>Ot.start-bt.start);let ct=0;for(let Ot=1;Ot<$.length;Ot++){const bt=$[ct],Et=$[Ot],Xt=bt.start+bt.count,Jt=N(Et.start,T.width,4),se=N(bt.start,T.width,4);Et.start<=Xt+1&&Jt===se&&N(Et.start+Et.count-1,T.width,4)===Jt?bt.count=Math.max(bt.count,Et.start+Et.count-bt.start):(++ct,$[ct]=Et)}$.length=ct+1;const j=e.getParameter(s.UNPACK_ROW_LENGTH),ft=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ot=0,bt=$.length;Ot<bt;Ot++){const Et=$[Ot],Xt=Math.floor(Et.start/4),Jt=Math.ceil(Et.count/4),se=Xt%T.width,Q=Math.floor(Xt/T.width),Tt=Jt,gt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,se),e.pixelStorei(s.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(s.TEXTURE_2D,0,se,Q,Tt,gt,nt,at,T.data)}B.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function W(B,T,nt){let at=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=s.TEXTURE_3D);const k=G(B,T),$=T.source;e.bindTexture(at,B.__webglTexture,s.TEXTURE0+nt);const ct=n.get($);if($.version!==ct.__version||k===!0){if(e.activeTexture(s.TEXTURE0+nt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const gt=xe.getPrimaries(xe.workingColorSpace),At=T.colorSpace===is?null:xe.getPrimaries(T.colorSpace),It=T.colorSpace===is||gt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ft=x(T.image,!1,i.maxTextureSize);ft=de(T,ft);const St=r.convert(T.format,T.colorSpace),Ot=r.convert(T.type);let bt=v(T.internalFormat,St,Ot,T.normalized,T.colorSpace,T.isVideoTexture);L(at,T);let Et;const Xt=T.mipmaps,Jt=T.isVideoTexture!==!0,se=ct.__version===void 0||k===!0,Q=$.dataReady,Tt=S(T,ft);if(T.isDepthTexture)bt=y(T.format===Es,T.type),se&&(Jt?e.texStorage2D(s.TEXTURE_2D,1,bt,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,bt,ft.width,ft.height,0,St,Ot,null));else if(T.isDataTexture)if(Xt.length>0){Jt&&se&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,Xt[0].width,Xt[0].height);for(let gt=0,At=Xt.length;gt<At;gt++)Et=Xt[gt],Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,St,Ot,Et.data):e.texImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,St,Ot,Et.data);T.generateMipmaps=!1}else Jt?(se&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,ft.width,ft.height),Q&&z(T,ft,St,Ot)):e.texImage2D(s.TEXTURE_2D,0,bt,ft.width,ft.height,0,St,Ot,ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Jt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,bt,Xt[0].width,Xt[0].height,ft.depth);for(let gt=0,At=Xt.length;gt<At;gt++)if(Et=Xt[gt],T.format!==Pn)if(St!==null)if(Jt){if(Q)if(T.layerUpdates.size>0){const It=Tf(Et.width,Et.height,T.format,T.type);for(const Mt of T.layerUpdates){const qt=Et.data.subarray(Mt*It/Et.data.BYTES_PER_ELEMENT,(Mt+1)*It/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,Mt,Et.width,Et.height,1,St,qt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,ft.depth,St,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,bt,Et.width,Et.height,ft.depth,0,Et.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?Q&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,ft.depth,St,Ot,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,bt,Et.width,Et.height,ft.depth,0,St,Ot,Et.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Jt&&se&&e.texStorage2D(s.TEXTURE_2D,Tt,bt,Xt[0].width,Xt[0].height);for(let gt=0,At=Xt.length;gt<At;gt++)Et=Xt[gt],T.format!==Pn?St!==null?Jt?Q&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,Et.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Et.width,Et.height,St,Ot,Et.data):e.texImage2D(s.TEXTURE_2D,gt,bt,Et.width,Et.height,0,St,Ot,Et.data)}else if(T.isDataArrayTexture)if(Jt){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,bt,ft.width,ft.height,ft.depth),Q)if(T.layerUpdates.size>0){const gt=Tf(ft.width,ft.height,T.format,T.type);for(const At of T.layerUpdates){const It=ft.data.subarray(At*gt/ft.data.BYTES_PER_ELEMENT,(At+1)*gt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,At,ft.width,ft.height,1,St,Ot,It)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,Ot,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,ft.width,ft.height,ft.depth,0,St,Ot,ft.data);else if(T.isData3DTexture)Jt?(se&&e.texStorage3D(s.TEXTURE_3D,Tt,bt,ft.width,ft.height,ft.depth),Q&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,Ot,ft.data)):e.texImage3D(s.TEXTURE_3D,0,bt,ft.width,ft.height,ft.depth,0,St,Ot,ft.data);else if(T.isFramebufferTexture){if(se)if(Jt)e.texStorage2D(s.TEXTURE_2D,Tt,bt,ft.width,ft.height);else{let gt=ft.width,At=ft.height;for(let It=0;It<Tt;It++)e.texImage2D(s.TEXTURE_2D,It,bt,gt,At,0,St,Ot,null),gt>>=1,At>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const gt=s.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),ft.parentNode!==gt){gt.appendChild(ft),u.add(T),gt.onpaint=At=>{const It=At.changedElements;for(const Mt of u)It.includes(Mt.image)&&(Mt.needsUpdate=!0)},gt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ft);else{const It=s.RGBA,Mt=s.RGBA,qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,It,Mt,qt,ft)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&se){const gt=ie(Xt[0]);e.texStorage2D(s.TEXTURE_2D,Tt,bt,gt.width,gt.height)}for(let gt=0,At=Xt.length;gt<At;gt++)Et=Xt[gt],Jt?Q&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,St,Ot,Et):e.texImage2D(s.TEXTURE_2D,gt,bt,St,Ot,Et);T.generateMipmaps=!1}else if(Jt){if(se){const gt=ie(ft);e.texStorage2D(s.TEXTURE_2D,Tt,bt,gt.width,gt.height)}Q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ot,ft)}else e.texImage2D(s.TEXTURE_2D,0,bt,St,Ot,ft);g(T)&&M(at),ct.__version=$.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function tt(B,T,nt){if(T.image.length!==6)return;const at=G(B,T),k=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+nt);const $=n.get(k);if(k.version!==$.__version||at===!0){e.activeTexture(s.TEXTURE0+nt);const ct=xe.getPrimaries(xe.workingColorSpace),j=T.colorSpace===is?null:xe.getPrimaries(T.colorSpace),ft=T.colorSpace===is||ct===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const St=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let Mt=0;Mt<6;Mt++)!St&&!Ot?bt[Mt]=x(T.image[Mt],!0,i.maxCubemapSize):bt[Mt]=Ot?T.image[Mt].image:T.image[Mt],bt[Mt]=de(T,bt[Mt]);const Et=bt[0],Xt=r.convert(T.format,T.colorSpace),Jt=r.convert(T.type),se=v(T.internalFormat,Xt,Jt,T.normalized,T.colorSpace),Q=T.isVideoTexture!==!0,Tt=$.__version===void 0||at===!0,gt=k.dataReady;let At=S(T,Et);L(s.TEXTURE_CUBE_MAP,T);let It;if(St){Q&&Tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,se,Et.width,Et.height);for(let Mt=0;Mt<6;Mt++){It=bt[Mt].mipmaps;for(let qt=0;qt<It.length;qt++){const Vt=It[qt];T.format!==Pn?Xt!==null?Q?gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,se,Vt.width,Vt.height,0,Vt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,0,0,Vt.width,Vt.height,Xt,Jt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt,se,Vt.width,Vt.height,0,Xt,Jt,Vt.data)}}}else{if(It=T.mipmaps,Q&&Tt){It.length>0&&At++;const Mt=ie(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,se,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Ot){Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,bt[Mt].width,bt[Mt].height,Xt,Jt,bt[Mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,se,bt[Mt].width,bt[Mt].height,0,Xt,Jt,bt[Mt].data);for(let qt=0;qt<It.length;qt++){const Le=It[qt].image[Mt].image;Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,0,0,Le.width,Le.height,Xt,Jt,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,se,Le.width,Le.height,0,Xt,Jt,Le.data)}}else{Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Xt,Jt,bt[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,se,Xt,Jt,bt[Mt]);for(let qt=0;qt<It.length;qt++){const Vt=It[qt];Q?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,0,0,Xt,Jt,Vt.image[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,qt+1,se,Xt,Jt,Vt.image[Mt])}}}g(T)&&M(s.TEXTURE_CUBE_MAP),$.__version=k.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function st(B,T,nt,at,k,$){const ct=r.convert(nt.format,nt.colorSpace),j=r.convert(nt.type),ft=v(nt.internalFormat,ct,j,nt.normalized,nt.colorSpace),St=n.get(T),Ot=n.get(nt);if(Ot.__renderTarget=T,!St.__hasExternalTextures){const bt=Math.max(1,T.width>>$),Et=Math.max(1,T.height>>$);k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?e.texImage3D(k,$,ft,bt,Et,T.depth,0,ct,j,null):e.texImage2D(k,$,ft,bt,Et,0,ct,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,B),$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,k,Ot.__webglTexture,0,Zt(T)):(k===s.TEXTURE_2D||k>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,k,Ot.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(B,T,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,B),T.depthBuffer){const at=T.depthTexture,k=at&&at.isDepthTexture?at.type:null,$=y(T.stencilBuffer,k),ct=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(T),$,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(T),$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,B)}else{const at=T.textures;for(let k=0;k<at.length;k++){const $=at[k],ct=r.convert($.format,$.colorSpace),j=r.convert($.type),ft=v($.internalFormat,ct,j,$.normalized,$.colorSpace);$t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(T),ft,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(T),ft,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ft,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(B,T,nt){const at=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(T.depthTexture);if(k.__renderTarget=T,(!k.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),at){if(k.__webglInit===void 0&&(k.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),k.__webglTexture===void 0){k.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),L(s.TEXTURE_CUBE_MAP,T.depthTexture);const St=r.convert(T.depthTexture.format),Ot=r.convert(T.depthTexture.type);let bt;T.depthTexture.format===Bi?bt=s.DEPTH_COMPONENT24:T.depthTexture.format===Es&&(bt=s.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,bt,T.width,T.height,0,St,Ot,null)}}else et(T.depthTexture,0);const $=k.__webglTexture,ct=Zt(T),j=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+nt:s.TEXTURE_2D,ft=T.depthTexture.format===Es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Bi)$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,j,$,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,ft,j,$,0);else if(T.depthTexture.format===Es)$t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,j,$,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,ft,j,$,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(B){const T=n.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const at=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){const k=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",k)};at.addEventListener("dispose",k),T.__depthDisposeCallback=k}T.__boundDepthTexture=at}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(nt)for(let at=0;at<6;at++)yt(T.__webglFramebuffer[at],B,at);else{const at=B.texture.mipmaps;at&&at.length>0?yt(T.__webglFramebuffer[0],B,0):yt(T.__webglFramebuffer,B,0)}else if(nt){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=s.createRenderbuffer(),xt(T.__webglDepthbuffer[at],B,!1);else{const k=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,$)}}else{const at=B.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xt(T.__webglDepthbuffer,B,!1);else{const k=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,$)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(B,T,nt){const at=n.get(B);T!==void 0&&st(at.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&lt(B)}function ut(B){const T=B.texture,nt=n.get(B),at=n.get(T);B.addEventListener("dispose",_);const k=B.textures,$=B.isWebGLCubeRenderTarget===!0,ct=k.length>1;if(ct||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=T.version,o.memory.textures++),$){nt.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[j]=[];for(let ft=0;ft<T.mipmaps.length;ft++)nt.__webglFramebuffer[j][ft]=s.createFramebuffer()}else nt.__webglFramebuffer[j]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)nt.__webglFramebuffer[j]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(ct)for(let j=0,ft=k.length;j<ft;j++){const St=n.get(k[j]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(B.samples>0&&$t(B)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){const ft=k[j];nt.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[j]);const St=r.convert(ft.format,ft.colorSpace),Ot=r.convert(ft.type),bt=v(ft.internalFormat,St,Ot,ft.normalized,ft.colorSpace,B.isXRRenderTarget===!0),Et=Zt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,bt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,nt.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(nt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),L(s.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)st(nt.__webglFramebuffer[j][ft],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft);else st(nt.__webglFramebuffer[j],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(T)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let j=0,ft=k.length;j<ft;j++){const St=k[j],Ot=n.get(St);let bt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(bt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ot.__webglTexture),L(bt,St),st(nt.__webglFramebuffer,B,St,s.COLOR_ATTACHMENT0+j,bt,0),g(St)&&M(bt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(j=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,at.__webglTexture),L(j,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)st(nt.__webglFramebuffer[ft],B,T,s.COLOR_ATTACHMENT0,j,ft);else st(nt.__webglFramebuffer,B,T,s.COLOR_ATTACHMENT0,j,0);g(T)&&M(j),e.unbindTexture()}B.depthBuffer&&lt(B)}function vt(B){const T=B.textures;for(let nt=0,at=T.length;nt<at;nt++){const k=T[nt];if(g(k)){const $=w(B),ct=n.get(k).__webglTexture;e.bindTexture($,ct),M($),e.unbindTexture()}}}const wt=[],Gt=[];function Ft(B){if(B.samples>0){if($t(B)===!1){const T=B.textures,nt=B.width,at=B.height;let k=s.COLOR_BUFFER_BIT;const $=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(B),j=T.length>1;if(j)for(let St=0;St<T.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const ft=B.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<T.length;St++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(k|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(k|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);const Ot=n.get(T[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,nt,at,0,0,nt,at,k,s.NEAREST),l===!0&&(wt.length=0,Gt.length=0,wt.push(s.COLOR_ATTACHMENT0+St),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(wt.push($),Gt.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let St=0;St<T.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);const Ot=n.get(T[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){const T=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Zt(B){return Math.min(i.maxSamples,B.samples)}function $t(B){const T=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function K(B){const T=o.render.frame;h.get(B)!==T&&(h.set(B,T),B.update())}function de(B,T){const nt=B.colorSpace,at=B.format,k=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==Oa&&nt!==is&&(xe.getTransfer(nt)===Se?(at!==Pn||k!==wn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",nt)),T}function ie(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=O,this.setTexture2D=et,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=it,this.rebindTextures=pt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jy(s,t){function e(n,i=is){let r;const o=xe.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===Nh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===up)return s.BYTE;if(n===fp)return s.SHORT;if(n===vo)return s.UNSIGNED_SHORT;if(n===Dh)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===In)return s.HALF_FLOAT;if(n===mp)return s.ALPHA;if(n===gp)return s.RGB;if(n===Pn)return s.RGBA;if(n===Bi)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===pl)return s.RED;if(n===zh)return s.RED_INTEGER;if(n===Cs)return s.RG;if(n===Fh)return s.RG_INTEGER;if(n===kh)return s.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===kc||n===Oc||n===Bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===za||n===qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hc||n===Vc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yc||n===$c||n===Kc||n===Zc||n===Jc||n===Qc||n===jc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ah||n===lh||n===ch)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ah)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===uh||n===Fa||n===fh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Tp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i_ extends Is{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const m=typeof XRWebGLBinding<"u",x=new n_,g={},M=e.getContextAttributes();let w=null,v=null;const y=[],S=[],E=new mt;let _=null,b=null;const A=new je;A.viewport=new Ee;const C=new je;C.viewport=new Ee;const P=[A,C],U=new ux;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=y[N];return z===void 0&&(z=new Fl,y[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=y[N];return z===void 0&&(z=new Fl,y[N]=z),z.getGripSpace()},this.getHand=function(N){let z=y[N];return z===void 0&&(z=new Fl,y[N]=z),z.getHandSpace()};function Y(N){const z=S.indexOf(N.inputSource);if(z===-1)return;const W=y[z];W!==void 0&&(W.update(N.inputSource,N.frame,c||o),W.dispatchEvent({type:N.type,data:N.inputSource}))}function q(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",et);for(let N=0;N<y.length;N++){const z=S[N];z!==null&&(S[N]=null,y[N].disconnect(z))}F=null,O=null,x.reset();for(const N in g)delete g[N];if(t.setRenderTarget(w),d=null,f=null,u=null,i=null,v=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),b!==null){const N=b.camera;N.fov=b.fov,N.zoom=b.zoom,N.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",q),i.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,tt=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?Es:Bi,tt=M.stencil?Mo:xi);const xt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ln(f.textureWidth,f.textureHeight,{format:Pn,type:wn,depthTexture:new wo(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(N){for(let z=0;z<N.removed.length;z++){const W=N.removed[z],tt=S.indexOf(W);tt>=0&&(S[tt]=null,y[tt].disconnect(W))}for(let z=0;z<N.added.length;z++){const W=N.added[z];let tt=S.indexOf(W);if(tt===-1){for(let xt=0;xt<y.length;xt++)if(xt>=S.length){S.push(W),tt=xt;break}else if(S[xt]===null){S[xt]=W,tt=xt;break}if(tt===-1)break}const st=y[tt];st&&st.connect(W)}}const X=new I,Z=new I;function it(N,z,W){X.setFromMatrixPosition(z.matrixWorld),Z.setFromMatrixPosition(W.matrixWorld);const tt=X.distanceTo(Z),st=z.projectionMatrix.elements,xt=W.projectionMatrix.elements,yt=st[14]/(st[10]-1),lt=st[14]/(st[10]+1),pt=(st[9]+1)/st[5],ut=(st[9]-1)/st[5],vt=(st[8]-1)/st[0],wt=(xt[8]+1)/xt[0],Gt=yt*vt,Ft=yt*wt,Zt=tt/(-vt+wt),$t=Zt*-vt;if(z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX($t),N.translateZ(Zt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),st[10]===-1)N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const K=yt+Zt,de=lt+Zt,ie=Gt-$t,B=Ft+(tt-$t),T=pt*lt/de*K,nt=ut*lt/de*K;N.projectionMatrix.makePerspective(ie,B,T,nt,K,de),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function dt(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let z=N.near,W=N.far;x.texture!==null&&(x.depthNear>0&&(z=x.depthNear),x.depthFar>0&&(W=x.depthFar)),U.near=C.near=A.near=z,U.far=C.far=A.far=W,(F!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,O=U.far),U.layers.mask=N.layers.mask|6,A.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const tt=N.parent,st=U.cameras;dt(U,tt);for(let xt=0;xt<st.length;xt++)dt(st[xt],tt);st.length===2?it(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),b===null&&N.isPerspectiveCamera&&(b={camera:N,fov:N.fov,zoom:N.zoom}),H(N,U,tt)};function H(N,z,W){W===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(W.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=_r*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(N){return g[N]};let V=null;function L(N,z){if(h=z.getViewerPose(c||o),p=z,h!==null){const W=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let tt=!1;W.length!==U.cameras.length&&(U.cameras.length=0,tt=!0);for(let lt=0;lt<W.length;lt++){const pt=W[lt];let ut=null;if(d!==null)ut=d.getViewport(pt);else{const wt=u.getViewSubImage(f,pt);ut=wt.viewport,lt===0&&(t.setRenderTargetTextures(v,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(v))}let vt=P[lt];vt===void 0&&(vt=new je,vt.layers.enable(lt),vt.viewport=new Ee,P[lt]=vt),vt.matrix.fromArray(pt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(pt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ut.x,ut.y,ut.width,ut.height),lt===0&&(U.matrix.copy(vt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),tt===!0&&U.cameras.push(vt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const lt=u.getDepthInformation(W[0]);lt&&lt.isValid&&lt.texture&&x.init(lt,i.renderState)}if(st&&st.includes("camera-access")&&m){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<W.length;lt++){const pt=W[lt].camera;if(pt){let ut=g[pt];ut||(ut=new Tp,g[pt]=ut);const vt=u.getCameraImage(pt);ut.sourceTexture=vt}}}}for(let W=0;W<y.length;W++){const tt=S[W],st=y[W];tt!==null&&st!==void 0&&st.update(tt,z,c||o)}V&&V(N,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}const G=new Hp;G.setAnimationLoop(L),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}}const s_=new Kt,Yp=new te;Yp.set(-1,0,0,0,1,0,0,0,1);function r_(s,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,zp(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,M,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),u(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),f(x,g),g.isMeshPhysicalMaterial&&d(x,g,v)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),m(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,M,w):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Sn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Sn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const M=t.get(g),w=M.envMap,v=M.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Yp),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,M,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*M,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,M){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function m(x,g){const M=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=i[v.id];S===void 0&&(x(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",M));const E=y.program;n.updateUBOMapping(v,E);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const S=s.createBuffer(),E=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,E,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],S=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,b=S.length;_<b;_++){const A=S[_];if(Array.isArray(A))for(let C=0,P=A.length;C<P;C++)d(A[C],_,C,E);else d(A,_,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,S,E){if(m(v,y,S,E)===!0){const _=v.__offset,b=v.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){const P=b[C],U=g(P);p(P,v.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,y,S){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,S)}function m(v,y,S,E){const _=v.value,b=y+"_"+S;if(E[b]===void 0)return typeof _=="number"||typeof _=="boolean"?E[b]=_:ArrayBuffer.isView(_)?E[b]=_.slice():E[b]=_.clone(),!0;{const A=E[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return E[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function x(v){const y=v.uniforms;let S=0;const E=16;for(let b=0,A=y.length;b<A;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let P=0,U=C.length;P<U;P++){const F=C[P],O=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,q=O.length;Y<q;Y++){const et=O[Y],X=g(et),Z=S%E,it=Z%X.boundary,dt=Z+it;S+=it,dt!==0&&E-dt<X.storage&&(S+=E-dt),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=X.storage}}}const _=S%E;return _>0&&(S+=E-_),v.__size=S,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:w}}const a_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function l_(){return ii===null&&(ii=new wr(a_,16,16,Cs,In),ii.name="DFG_LUT",ii.minFilter=tn,ii.magFilter=tn,ii.wrapS=Ni,ii.wrapT=Ni,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class c_{constructor(t={}){const{canvas:e=Tm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=d,x=new Set([kh,Fh,zh]),g=new Set([wn,xi,vo,Mo,Nh,Uh]),M=new Uint32Array(4),w=new Int32Array(4),v=new I;let y=null,S=null;const E=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,P=null,U=null,F=null,O=null;this._outputColorSpace=Ne;let Y=0,q=0,et=null,X=-1,Z=null;const it=new Ee,dt=new Ee;let H=null;const V=new Rt(0);let L=0,G=e.width,N=e.height,z=1,W=null,tt=null;const st=new Ee(0,0,G,N),xt=new Ee(0,0,G,N);let yt=!1;const lt=new Yh;let pt=!1,ut=!1;const vt=new Kt,wt=new I,Gt=new Ee,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function $t(){return et===null?z:1}let K=n;function de(D,J){return e.getContext(D,J)}let ie,B,T,nt,at,k,$,ct,j,ft,St,Ot,bt,Et,Xt,Jt,se,Q,Tt,gt,At,It,Mt;try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ph}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),K===null){const J="webgl2";if(K=de(J,D),K===null)throw de(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(D){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),ge("WebGLRenderer: "+D.message),D}function qt(){ie=new lM(K),ie.init(),At=new jy(K,ie),B=new Q1(K,ie,t,At),T=new Jy(K,ie),B.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),U=K.createFramebuffer(),F=K.createFramebuffer(),O=K.createFramebuffer(),nt=new uM(K),at=new Fy,k=new Qy(K,ie,T,at,B,At,nt),$=new aM(A),ct=new dx(K),It=new Z1(K,ct),j=new cM(K,ct,nt,It),ft=new dM(K,j,ct,It,nt),Q=new fM(K,B,k),Xt=new j1(at),St=new zy(A,$,ie,B,It,Xt),Ot=new r_(A,at),bt=new Oy,Et=new Xy(ie),se=new K1(A,$,T,ft,p,l),Jt=new Zy(A,ft,B),Mt=new o_(K,nt,B,T),Tt=new J1(K,ie,nt),gt=new hM(K,ie,nt),nt.programs=St.programs,A.capabilities=B,A.extensions=ie,A.properties=at,A.renderLists=bt,A.shadowMap=Jt,A.state=T,A.info=nt}m!==wn&&(b=new mM(m,e.width,e.height,a,i,r));const Vt=new i_(A,K);this.xr=Vt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const D=ie.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ie.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(G,N,!1))},this.getSize=function(D){return D.set(G,N)},this.setSize=function(D,J,ht=!0){if(Vt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,N=J,e.width=Math.floor(D*z),e.height=Math.floor(J*z),ht===!0&&(e.style.width=D+"px",e.style.height=J+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(G*z,N*z).floor()},this.setDrawingBufferSize=function(D,J,ht){G=D,N=J,z=ht,e.width=Math.floor(D*ht),e.height=Math.floor(J*ht),this.setViewport(0,0,D,J)},this.setEffects=function(D){if(m===wn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let J=0;J<D.length;J++)if(D[J].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(it)},this.getViewport=function(D){return D.copy(st)},this.setViewport=function(D,J,ht,rt){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,J,ht,rt),T.viewport(it.copy(st).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(xt)},this.setScissor=function(D,J,ht,rt){D.isVector4?xt.set(D.x,D.y,D.z,D.w):xt.set(D,J,ht,rt),T.scissor(dt.copy(xt).multiplyScalar(z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(D){T.setScissorTest(yt=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){tt=D},this.getClearColor=function(D){return D.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(D=!0,J=!0,ht=!0){let rt=0;if(D){let ot=!1;if(et!==null){const Lt=et.texture.format;ot=x.has(Lt)}if(ot){const Lt=et.texture.type,zt=g.has(Lt),Pt=se.getClearColor(),Bt=se.getClearAlpha(),Wt=Pt.r,le=Pt.g,fe=Pt.b;zt?(M[0]=Wt,M[1]=le,M[2]=fe,M[3]=Bt,K.clearBufferuiv(K.COLOR,0,M)):(w[0]=Wt,w[1]=le,w[2]=fe,w[3]=Bt,K.clearBufferiv(K.COLOR,0,w))}else rt|=K.COLOR_BUFFER_BIT}J&&(rt|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ht&&(rt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&K.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),P=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),se.dispose(),bt.dispose(),Et.dispose(),at.dispose(),$.dispose(),ft.dispose(),It.dispose(),Mt.dispose(),St.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Eu),Vt.removeEventListener("sessionend",Tu),ms.stop()};function Le(D){D.preventDefault(),Ha("WebGLRenderer: Context Lost."),C=!0}function Me(){Ha("WebGLRenderer: Context Restored."),C=!1;const D=nt.autoReset,J=Jt.enabled,ht=Jt.autoUpdate,rt=Jt.needsUpdate,ot=Jt.type;qt(),nt.autoReset=D,Jt.enabled=J,Jt.autoUpdate=ht,Jt.needsUpdate=rt,Jt.type=ot}function Hn(D){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ti(D){const J=D.target;J.removeEventListener("dispose",ti),D0(J)}function D0(D){N0(D),at.remove(D)}function N0(D){const J=at.get(D).programs;J!==void 0&&(J.forEach(function(ht){St.releaseProgram(ht)}),D.isShaderMaterial&&St.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,ht,rt,ot,Lt){J===null&&(J=Ft);const zt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Pt=F0(D,J,ht,rt,ot);T.setMaterial(rt,zt);let Bt=ht.index,Wt=1;if(rt.wireframe===!0){if(Bt=j.getWireframeAttribute(ht),Bt===void 0)return;Wt=2}const le=ht.drawRange,fe=ht.attributes.position;let Ht=le.start*Wt,ye=(le.start+le.count)*Wt;Lt!==null&&(Ht=Math.max(Ht,Lt.start*Wt),ye=Math.min(ye,(Lt.start+Lt.count)*Wt)),Bt!==null?(Ht=Math.max(Ht,0),ye=Math.min(ye,Bt.count)):fe!=null&&(Ht=Math.max(Ht,0),ye=Math.min(ye,fe.count));const Ve=ye-Ht;if(Ve<0||Ve===1/0)return;It.setup(ot,rt,Pt,ht,Bt);let De,Pe=Tt;if(Bt!==null&&(De=ct.get(Bt),Pe=gt,Pe.setIndex(De)),ot.isMesh)rt.wireframe===!0?(T.setLineWidth(rt.wireframeLinewidth*$t()),Pe.setMode(K.LINES)):Pe.setMode(K.TRIANGLES);else if(ot.isLine){let on=rt.linewidth;on===void 0&&(on=1),T.setLineWidth(on*$t()),ot.isLineSegments?Pe.setMode(K.LINES):ot.isLineLoop?Pe.setMode(K.LINE_LOOP):Pe.setMode(K.LINE_STRIP)}else ot.isPoints?Pe.setMode(K.POINTS):ot.isSprite&&Pe.setMode(K.TRIANGLES);if(ot.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Pe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const on=ot._multiDrawStarts,Ut=ot._multiDrawCounts,hn=ot._multiDrawCount,ve=Bt?ct.get(Bt).bytesPerElement:1,Nn=at.get(rt).currentProgram.getUniforms();for(let ei=0;ei<hn;ei++)Nn.setValue(K,"_gl_DrawID",ei),Pe.render(on[ei]/ve,Ut[ei])}else if(ot.isInstancedMesh)Pe.renderInstances(Ht,Ve,ot.count);else if(ht.isInstancedBufferGeometry){const on=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Ut=Math.min(ht.instanceCount,on);Pe.renderInstances(Ht,Ve,Ut)}else Pe.render(Ht,Ve)};function bu(D,J,ht,rt){P!==null&&D.isNodeMaterial&&P.setObject(rt,D),pt===!0&&Xt.setState(D,ht,!1),D.transparent===!0&&D.side===Zn&&D.forceSinglePass===!1?(D.side=Sn,D.needsUpdate=!0,No(D,J,rt),D.side=As,D.needsUpdate=!0,No(D,J,rt),D.side=Zn):No(D,J,rt)}this.compile=function(D,J,ht=null){ht===null&&(ht=D),P!==null&&P.renderStart(D,J,ht),S=Et.get(ht),S.init(J),_.push(S),ht.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),D!==ht&&D.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),ut=this.localClippingEnabled,pt=Xt.init(this.clippingPlanes,ut),pt===!0&&Xt.setGlobalState(this.clippingPlanes,J),P!==null&&Jt.render(S.state.shadowsArray,ht,J);const rt=new Set;return D.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Lt=ot.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){const Pt=Lt[zt];bu(Pt,ht,J,ot),rt.add(Pt)}else bu(Lt,ht,J,ot),rt.add(Lt)}),S=_.pop(),P!==null&&P.renderEnd(),rt},this.compileAsync=function(D,J,ht=null){const rt=this.compile(D,J,ht);return new Promise(ot=>{function Lt(){if(rt.forEach(function(zt){const Bt=at.get(zt).currentProgram;(Bt===void 0||Bt.isReady())&&rt.delete(zt)}),rt.size===0){ot(D);return}setTimeout(Lt,10)}ie.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Tl=null;function U0(D){Tl&&Tl(D)}function Eu(){ms.stop()}function Tu(){ms.start()}const ms=new Hp;ms.setAnimationLoop(U0),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(D){Tl=D,Vt.setAnimationLoop(D),D===null?ms.stop():ms.start()},Vt.addEventListener("sessionstart",Eu),Vt.addEventListener("sessionend",Tu),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(D,J);const ht=Vt.enabled===!0&&Vt.isPresenting===!0,rt=b!==null&&(et===null||ht)&&b.begin(A,et);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(J),J=Vt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,J,et),S=Et.get(D,_.length),S.init(J),S.state.textureUnits=k.getTextureUnits(),_.push(S),vt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),lt.setFromProjectionMatrix(vt,fi,J.reversedDepth),ut=this.localClippingEnabled,pt=Xt.init(this.clippingPlanes,ut),y=bt.get(D,E.length),y.init(),E.push(y),Vt.enabled===!0&&Vt.isPresenting===!0){const zt=A.xr.getDepthSensingMesh();zt!==null&&Al(zt,J,-1/0,A.sortObjects)}Al(D,J,0,A.sortObjects),y.finish(),P!==null&&P.updateLights(S.state.lightsArray),A.sortObjects===!0&&y.sort(W,tt),Zt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Zt&&se.addToRenderList(y,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Xt.beginShadows();const ot=S.state.shadowsArray;if(Jt.render(ot,D,J),pt===!0&&Xt.endShadows(),(rt&&b.hasRenderPass())===!1){const zt=y.opaque,Pt=y.transmissive;if(S.setupLights(),J.isArrayCamera){const Bt=J.cameras;if(Pt.length>0)for(let Wt=0,le=Bt.length;Wt<le;Wt++){const fe=Bt[Wt];Ru(zt,Pt,D,fe)}Zt&&se.render(D);for(let Wt=0,le=Bt.length;Wt<le;Wt++){const fe=Bt[Wt];Au(y,D,fe,fe.viewport)}}else Pt.length>0&&Ru(zt,Pt,D,J),Zt&&se.render(D),Au(y,D,J)}et!==null&&q===0&&(k.updateMultisampleRenderTarget(et),k.updateRenderTargetMipmap(et)),rt&&b.end(A),D.isScene===!0&&D.onAfterRender(A,D,J),It.resetDefaultState(),X=-1,Z=null,_.pop(),_.length>0?(S=_[_.length-1],k.setTextureUnits(S.state.textureUnits),pt===!0&&Xt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,P!==null&&P.renderEnd()};function Al(D,J,ht,rt){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)ht=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLightProbeGrid)S.pushLightProbeGrid(D);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(lt)){rt&&Gt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(vt);const zt=ft.update(D),Pt=D.material;Pt.visible&&y.push(D,zt,Pt,ht,Gt.z,null,J)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(lt))){const zt=ft.update(D),Pt=D.material;if(rt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Gt.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Gt.copy(zt.boundingSphere.center)),Gt.applyMatrix4(D.matrixWorld).applyMatrix4(vt)),Array.isArray(Pt)){const Bt=zt.groups;for(let Wt=0,le=Bt.length;Wt<le;Wt++){const fe=Bt[Wt],Ht=Pt[fe.materialIndex];Ht&&Ht.visible&&y.push(D,zt,Ht,ht,Gt.z,fe,J)}}else Pt.visible&&y.push(D,zt,Pt,ht,Gt.z,null,J)}}const Lt=D.children;for(let zt=0,Pt=Lt.length;zt<Pt;zt++)Al(Lt[zt],J,ht,rt)}function Au(D,J,ht,rt){const{opaque:ot,transmissive:Lt,transparent:zt}=D;S.setupLightsView(ht),pt===!0&&Xt.setGlobalState(A.clippingPlanes,ht),rt&&T.viewport(it.copy(rt)),ot.length>0&&Do(ot,J,ht),Lt.length>0&&Do(Lt,J,ht),zt.length>0&&Do(zt,J,ht),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ru(D,J,ht,rt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[rt.id]===void 0){const Ht=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[rt.id]=new Ln(1,1,{generateMipmaps:!0,type:Ht?In:wn,minFilter:os,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Lt=S.state.transmissionRenderTarget[rt.id],zt=rt.viewport||it;Lt.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);const Pt=A.getRenderTarget(),Bt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Lt),A.getClearColor(V),L=A.getClearAlpha(),L<1&&A.setClearColor(16777215,.5),A.clear(),Zt&&se.render(ht);const le=A.toneMapping;A.toneMapping=mi;const fe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),pt===!0&&Xt.setGlobalState(A.clippingPlanes,rt),Do(D,ht,rt),k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ye=0,Ve=J.length;ye<Ve;ye++){const De=J[ye],{object:Pe,geometry:on,material:Ut,group:hn}=De;if(Ut.side===Zn&&Pe.layers.test(rt.layers)){const ve=Ut.side;Ut.side=Sn,Ut.needsUpdate=!0,Cu(Pe,ht,rt,on,Ut,hn),Ut.side=ve,Ut.needsUpdate=!0,Ht=!0}}Ht===!0&&(k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt))}A.setRenderTarget(Pt,Bt,Wt),A.setClearColor(V,L),fe!==void 0&&(rt.viewport=fe),A.toneMapping=le}function Do(D,J,ht){const rt=J.isScene===!0?J.overrideMaterial:null;for(let ot=0,Lt=D.length;ot<Lt;ot++){const zt=D[ot],{object:Pt,geometry:Bt,group:Wt}=zt;let le=zt.material;le.allowOverride===!0&&rt!==null&&(le=rt),Pt.layers.test(ht.layers)&&Cu(Pt,J,ht,Bt,le,Wt)}}function Cu(D,J,ht,rt,ot,Lt){P!==null&&ot.isNodeMaterial&&P.setObject(D,ot),D.onBeforeRender(A,J,ht,rt,ot,Lt),D.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ot.onBeforeRender(A,J,ht,rt,D,Lt),ot.transparent===!0&&ot.side===Zn&&ot.forceSinglePass===!1?(ot.side=Sn,ot.needsUpdate=!0,A.renderBufferDirect(ht,J,rt,ot,D,Lt),ot.side=As,ot.needsUpdate=!0,A.renderBufferDirect(ht,J,rt,ot,D,Lt),ot.side=Zn):A.renderBufferDirect(ht,J,rt,ot,D,Lt),D.onAfterRender(A,J,ht,rt,ot,Lt)}function No(D,J,ht){J.isScene!==!0&&(J=Ft);const rt=at.get(D),ot=S.state.lights,Lt=S.state.shadowsArray,zt=ot.state.version,Pt=St.getParameters(D,ot.state,Lt,J,ht,S.state.lightProbeGridArray),Bt=St.getProgramCacheKey(Pt);let Wt=rt.programs;rt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?J.environment:null,rt.fog=J.fog;const le=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;rt.envMap=$.get(D.envMap||rt.environment,le),rt.envMapRotation=rt.environment!==null&&D.envMap===null?J.environmentRotation:D.envMapRotation,Wt===void 0&&(D.addEventListener("dispose",ti),Wt=new Map,rt.programs=Wt);let fe=Wt.get(Bt);if(fe!==void 0){if(rt.currentProgram===fe&&rt.lightsStateVersion===zt)return Lu(D,Pt),fe}else Pt.uniforms=St.getUniforms(D),P!==null&&D.isNodeMaterial&&P.build(D,ht,Pt),D.onBeforeCompile(Pt,A),fe=St.acquireProgram(Pt,Bt),Wt.set(Bt,fe),rt.uniforms=Pt.uniforms;const Ht=rt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ht.clippingPlanes=Xt.uniform),Lu(D,Pt),rt.needsLights=O0(D),rt.lightsStateVersion=zt,rt.needsLights&&(Ht.ambientLightColor.value=ot.state.ambient,Ht.lightProbe.value=ot.state.probe,Ht.sunLights.value=ot.state.sun,Ht.sunLightShadows.value=ot.state.sunShadow,Ht.directionalLights.value=ot.state.directional,Ht.directionalLightShadows.value=ot.state.directionalShadow,Ht.spotLights.value=ot.state.spot,Ht.spotLightShadows.value=ot.state.spotShadow,Ht.rectAreaLights.value=ot.state.rectArea,Ht.ltc_1.value=ot.state.rectAreaLTC1,Ht.ltc_2.value=ot.state.rectAreaLTC2,Ht.pointLights.value=ot.state.point,Ht.pointLightShadows.value=ot.state.pointShadow,Ht.hemisphereLights.value=ot.state.hemi,Ht.sunShadowMatrix.value=ot.state.sunShadowMatrix,Ht.sunShadowCascade.value=ot.state.sunShadowCascade,Ht.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ht.spotLightMatrix.value=ot.state.spotLightMatrix,Ht.spotLightMap.value=ot.state.spotLightMap,Ht.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=S.state.lightProbeGridArray.length>0,rt.currentProgram=fe,rt.uniformsList=null,fe}function Pu(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=La.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function Lu(D,J){const ht=at.get(D);ht.outputColorSpace=J.outputColorSpace,ht.batching=J.batching,ht.batchingColor=J.batchingColor,ht.instancing=J.instancing,ht.instancingColor=J.instancingColor,ht.instancingMorph=J.instancingMorph,ht.skinning=J.skinning,ht.morphTargets=J.morphTargets,ht.morphNormals=J.morphNormals,ht.morphColors=J.morphColors,ht.morphTargetsCount=J.morphTargetsCount,ht.numClippingPlanes=J.numClippingPlanes,ht.numIntersection=J.numClipIntersection,ht.vertexAlphas=J.vertexAlphas,ht.vertexTangents=J.vertexTangents,ht.toneMapping=J.toneMapping}function z0(D,J){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;v.setFromMatrixPosition(J.matrixWorld);for(let ht=0,rt=D.length;ht<rt;ht++){const ot=D[ht];if(ot.texture!==null&&ot.boundingBox.containsPoint(v))return ot}return null}function F0(D,J,ht,rt,ot){J.isScene!==!0&&(J=Ft),k.resetTextureUnits();const Lt=J.fog,zt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?J.environment:null,Pt=et===null?A.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:xe.workingColorSpace,Bt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Wt=$.get(rt.envMap||zt,Bt),le=rt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,fe=!!ht.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ht=!!ht.morphAttributes.position,ye=!!ht.morphAttributes.normal,Ve=!!ht.morphAttributes.color;let De=mi;rt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(De=A.toneMapping);const Pe=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,on=Pe!==void 0?Pe.length:0,Ut=at.get(rt),hn=S.state.lights;if(pt===!0&&(ut===!0||D!==Z)){const Ie=D===Z&&rt.id===X;Xt.setState(rt,D,Ie)}let ve=!1;rt.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==hn.state.version||Ut.outputColorSpace!==Pt||ot.isBatchedMesh&&Ut.batching===!1||!ot.isBatchedMesh&&Ut.batching===!0||ot.isBatchedMesh&&Ut.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ut.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ut.instancing===!1||!ot.isInstancedMesh&&Ut.instancing===!0||ot.isSkinnedMesh&&Ut.skinning===!1||!ot.isSkinnedMesh&&Ut.skinning===!0||ot.isInstancedMesh&&Ut.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ut.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ut.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ut.instancingMorph===!1&&ot.morphTexture!==null||Ut.envMap!==Wt||rt.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Xt.numPlanes||Ut.numIntersection!==Xt.numIntersection)||Ut.vertexAlphas!==le||Ut.vertexTangents!==fe||Ut.morphTargets!==Ht||Ut.morphNormals!==ye||Ut.morphColors!==Ve||Ut.toneMapping!==De||Ut.morphTargetsCount!==on||!!Ut.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Ut.__version=rt.version);let Nn=Ut.currentProgram;ve===!0&&(Nn=No(rt,J,ot),P&&rt.isNodeMaterial&&P.onUpdateProgram(rt,Nn,Ut));let ei=!1,Vi=!1,Ns=!1;const Te=Nn.getUniforms(),Oe=Ut.uniforms;if(T.useProgram(Nn.program)&&(ei=!0,Vi=!0,Ns=!0),rt.id!==X&&(X=rt.id,Vi=!0),Ut.needsLights){const Ie=z0(S.state.lightProbeGridArray,ot);Ut.lightProbeGrid!==Ie&&(Ut.lightProbeGrid=Ie,Vi=!0)}if(ei||Z!==D){T.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Te.setValue(K,"projectionMatrix",D.projectionMatrix),Te.setValue(K,"viewMatrix",D.matrixWorldInverse);const Wi=Te.map.cameraPosition;Wi!==void 0&&Wi.setValue(K,wt.setFromMatrixPosition(D.matrixWorld)),B.logarithmicDepthBuffer&&Te.setValue(K,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Te.setValue(K,"isOrthographic",D.isOrthographicCamera===!0),Z!==D&&(Z=D,Vi=!0,Ns=!0)}if(Ut.needsLights&&(hn.state.sunShadowMap.length>0&&Te.setValue(K,"sunShadowMap",hn.state.sunShadowMap,k),hn.state.directionalShadowMap.length>0&&Te.setValue(K,"directionalShadowMap",hn.state.directionalShadowMap,k),hn.state.spotShadowMap.length>0&&Te.setValue(K,"spotShadowMap",hn.state.spotShadowMap,k),hn.state.pointShadowMap.length>0&&Te.setValue(K,"pointShadowMap",hn.state.pointShadowMap,k)),ot.isSkinnedMesh){Te.setOptional(K,ot,"bindMatrix"),Te.setOptional(K,ot,"bindMatrixInverse");const Ie=ot.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Te.setValue(K,"boneTexture",Ie.boneTexture,k))}ot.isBatchedMesh&&(Te.setOptional(K,ot,"batchingTexture"),Te.setValue(K,"batchingTexture",ot._matricesTexture,k),Te.setOptional(K,ot,"batchingIdTexture"),Te.setValue(K,"batchingIdTexture",ot._indirectTexture,k),Te.setOptional(K,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Te.setValue(K,"batchingColorTexture",ot._colorsTexture,k));const Gi=ht.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Q.update(ot,ht,Nn),(Vi||Ut.receiveShadow!==ot.receiveShadow)&&(Ut.receiveShadow=ot.receiveShadow,Te.setValue(K,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&J.environment!==null&&(Oe.envMapIntensity.value=J.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=l_()),Vi){if(Te.setValue(K,"toneMappingExposure",A.toneMappingExposure),Ut.needsLights&&k0(Oe,Ns),Lt&&rt.fog===!0&&Ot.refreshFogUniforms(Oe,Lt),Ot.refreshMaterialUniforms(Oe,rt,z,N,S.state.transmissionRenderTarget[D.id]),Ut.needsLights&&Ut.lightProbeGrid){const Ie=Ut.lightProbeGrid;Oe.probesSH.value=Ie.texture,Oe.probesMin.value.copy(Ie.boundingBox.min),Oe.probesMax.value.copy(Ie.boundingBox.max),Oe.probesResolution.value.copy(Ie.resolution)}La.upload(K,Pu(Ut),Oe,k)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(La.upload(K,Pu(Ut),Oe,k),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Te.setValue(K,"center",ot.center),Te.setValue(K,"modelViewMatrix",ot.modelViewMatrix),Te.setValue(K,"normalMatrix",ot.normalMatrix),Te.setValue(K,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){const Ie=rt.uniformsGroups;for(let Wi=0,Us=Ie.length;Wi<Us;Wi++){const Du=Ie[Wi];Mt.update(Du,Nn),Mt.bind(Du,Nn)}}return Nn}function k0(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.sunLights.needsUpdate=J,D.sunLightShadows.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function O0(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(D,J,ht){const rt=at.get(D);rt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(D.texture).__webglTexture=J,at.get(D.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ht,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,J){const ht=at.get(D);ht.__webglFramebuffer=J,ht.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(D,J=0,ht=0){et=D,Y=J,q=ht;let rt=null,ot=!1,Lt=!1;if(D){const Pt=at.get(D);if(Pt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(K.FRAMEBUFFER,Pt.__webglFramebuffer),it.copy(D.viewport),dt.copy(D.scissor),H=D.scissorTest,T.viewport(it),T.scissor(dt),T.setScissorTest(H),X=-1;return}else if(Pt.__webglFramebuffer===void 0)k.setupRenderTarget(D);else if(Pt.__hasExternalTextures)k.rebindTextures(D,at.get(D.texture).__webglTexture,at.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const le=D.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&at.has(le)&&(D.width!==le.image.width||D.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(D)}}const Bt=D.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Lt=!0);const Wt=at.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Wt[J])?rt=Wt[J][ht]:rt=Wt[J],ot=!0):D.samples>0&&k.useMultisampledRTT(D)===!1?rt=at.get(D).__webglMultisampledFramebuffer:Array.isArray(Wt)?rt=Wt[ht]:rt=Wt,it.copy(D.viewport),dt.copy(D.scissor),H=D.scissorTest}else it.copy(st).multiplyScalar(z).floor(),dt.copy(xt).multiplyScalar(z).floor(),H=yt;if(ht!==0&&(rt=U),T.bindFramebuffer(K.FRAMEBUFFER,rt)&&T.drawBuffers(D,rt),T.viewport(it),T.scissor(dt),T.setScissorTest(H),ot){const Pt=at.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pt.__webglTexture,ht)}else if(Lt){const Pt=J;for(let Bt=0;Bt<D.textures.length;Bt++){const Wt=at.get(D.textures[Bt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Bt,Wt.__webglTexture,ht,Pt)}}else if(D!==null&&ht!==0){const Pt=at.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pt.__webglTexture,ht)}X=-1};function Iu(D){const J=at.get(D);return(J.__readFormat!==D.format||J.__readType!==D.type)&&(J.__readFormat=D.format,J.__readType=D.type,J.__formatReadable=B.textureFormatReadable(D.format),J.__typeReadable=B.textureTypeReadable(D.type)),J}this.readRenderTargetPixels=function(D,J,ht,rt,ot,Lt,zt,Pt=0){if(!(D&&D.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=at.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Bt=Bt[zt]),Bt){T.bindFramebuffer(K.FRAMEBUFFER,Bt);try{const Wt=D.textures[Pt],le=Wt.format,fe=Wt.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pt);const Ht=Iu(Wt);if(Ht.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-rt&&ht>=0&&ht<=D.height-ot&&K.readPixels(J,ht,rt,ot,At.convert(le),At.convert(fe),Lt)}finally{const Wt=et!==null?at.get(et).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(D,J,ht,rt,ot,Lt,zt,Pt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=at.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Bt=Bt[zt]),Bt)if(J>=0&&J<=D.width-rt&&ht>=0&&ht<=D.height-ot){T.bindFramebuffer(K.FRAMEBUFFER,Bt);const Wt=D.textures[Pt],le=Wt.format,fe=Wt.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Pt);const Ht=Iu(Wt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.bufferData(K.PIXEL_PACK_BUFFER,Lt.byteLength,K.STREAM_READ),K.readPixels(J,ht,rt,ot,At.convert(le),At.convert(fe),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Ve=et!==null?at.get(et).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,Ve);const De=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Am(K,De,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ye),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Lt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ye),K.deleteSync(De),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,J=null,ht=0){const rt=Math.pow(2,-ht),ot=Math.floor(D.image.width*rt),Lt=Math.floor(D.image.height*rt),zt=J!==null?J.x:0,Pt=J!==null?J.y:0;k.setTexture2D(D,0),K.copyTexSubImage2D(K.TEXTURE_2D,ht,0,0,zt,Pt,ot,Lt),T.unbindTexture()},this.copyTextureToTexture=function(D,J,ht=null,rt=null,ot=0,Lt=0){let zt,Pt,Bt,Wt,le,fe,Ht,ye,Ve;const De=D.isCompressedTexture?D.mipmaps[Lt]:D.image;if(ht!==null)zt=ht.max.x-ht.min.x,Pt=ht.max.y-ht.min.y,Bt=ht.isBox3?ht.max.z-ht.min.z:1,Wt=ht.min.x,le=ht.min.y,fe=ht.isBox3?ht.min.z:0;else{const Oe=Math.pow(2,-ot);zt=Math.floor(De.width*Oe),Pt=Math.floor(De.height*Oe),D.isDataArrayTexture?Bt=De.depth:D.isData3DTexture?Bt=Math.floor(De.depth*Oe):Bt=1,Wt=0,le=0,fe=0}rt!==null?(Ht=rt.x,ye=rt.y,Ve=rt.z):(Ht=0,ye=0,Ve=0);const Pe=At.convert(J.format),on=At.convert(J.type);let Ut;J.isData3DTexture?(k.setTexture3D(J,0),Ut=K.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(k.setTexture2DArray(J,0),Ut=K.TEXTURE_2D_ARRAY):(k.setTexture2D(J,0),Ut=K.TEXTURE_2D),T.activeTexture(K.TEXTURE0),T.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(K.UNPACK_ALIGNMENT,J.unpackAlignment);const hn=T.getParameter(K.UNPACK_ROW_LENGTH),ve=T.getParameter(K.UNPACK_IMAGE_HEIGHT),Nn=T.getParameter(K.UNPACK_SKIP_PIXELS),ei=T.getParameter(K.UNPACK_SKIP_ROWS),Vi=T.getParameter(K.UNPACK_SKIP_IMAGES);T.pixelStorei(K.UNPACK_ROW_LENGTH,De.width),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,De.height),T.pixelStorei(K.UNPACK_SKIP_PIXELS,Wt),T.pixelStorei(K.UNPACK_SKIP_ROWS,le),T.pixelStorei(K.UNPACK_SKIP_IMAGES,fe);const Ns=D.isDataArrayTexture||D.isData3DTexture,Te=J.isDataArrayTexture||J.isData3DTexture;if(D.isDepthTexture){const Oe=at.get(D),Gi=at.get(J),Ie=at.get(Oe.__renderTarget),Wi=at.get(Gi.__renderTarget);T.bindFramebuffer(K.READ_FRAMEBUFFER,Ie.__webglFramebuffer),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Us=0;Us<Bt;Us++)Ns&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,at.get(D).__webglTexture,ot,fe+Us),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,at.get(J).__webglTexture,Lt,Ve+Us)),K.blitFramebuffer(Wt,le,zt,Pt,Ht,ye,zt,Pt,K.DEPTH_BUFFER_BIT,K.NEAREST);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(ot!==0||D.isRenderTargetTexture||at.has(D)){const Oe=at.get(D),Gi=at.get(J);T.bindFramebuffer(K.READ_FRAMEBUFFER,F),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,O);for(let Ie=0;Ie<Bt;Ie++)Ns?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Oe.__webglTexture,ot,fe+Ie):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Oe.__webglTexture,ot),Te?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gi.__webglTexture,Lt,Ve+Ie):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gi.__webglTexture,Lt),ot!==0?K.blitFramebuffer(Wt,le,zt,Pt,Ht,ye,zt,Pt,K.COLOR_BUFFER_BIT,K.NEAREST):Te?K.copyTexSubImage3D(Ut,Lt,Ht,ye,Ve+Ie,Wt,le,zt,Pt):K.copyTexSubImage2D(Ut,Lt,Ht,ye,Wt,le,zt,Pt);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Te?D.isDataTexture||D.isData3DTexture?K.texSubImage3D(Ut,Lt,Ht,ye,Ve,zt,Pt,Bt,Pe,on,De.data):J.isCompressedArrayTexture?K.compressedTexSubImage3D(Ut,Lt,Ht,ye,Ve,zt,Pt,Bt,Pe,De.data):K.texSubImage3D(Ut,Lt,Ht,ye,Ve,zt,Pt,Bt,Pe,on,De):D.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Lt,Ht,ye,zt,Pt,Pe,on,De.data):D.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Lt,Ht,ye,De.width,De.height,Pe,De.data):K.texSubImage2D(K.TEXTURE_2D,Lt,Ht,ye,zt,Pt,Pe,on,De);T.pixelStorei(K.UNPACK_ROW_LENGTH,hn),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ve),T.pixelStorei(K.UNPACK_SKIP_PIXELS,Nn),T.pixelStorei(K.UNPACK_SKIP_ROWS,ei),T.pixelStorei(K.UNPACK_SKIP_IMAGES,Vi),Lt===0&&J.generateMipmaps&&K.generateMipmap(Ut),T.unbindTexture()},this.initRenderTarget=function(D){at.get(D).__webglFramebuffer===void 0&&k.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?k.setTextureCube(D,0):D.isData3DTexture?k.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?k.setTexture2DArray(D,0):k.setTexture2D(D,0),T.unbindTexture()},this.resetState=function(){Y=0,q=0,et=null,T.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}const ua={bpm:100,punch:1.3,pulse:.2,steady:.55},h_=s=>!!s&&s.bpm>ua.bpm&&(!s.double&&s.punch>=ua.punch&&s.pulse>=ua.pulse||s.pulse>=ua.steady),u_=s=>s.bpm>150?2:1,f_=(s,t)=>!!t&&(s.dance??h_(t)),$p="#f7f7f7",gn=.0254,nu={canvas:.038,panel:.022,paper:.012,digital:.012},$a={face:.75*gn,depth:1.5*gn,mat:3*gn,lip:.25*gn,bevel:.125*gn},d_={black:"#161616",white:"#efeee9"},p_={white:"#f4f2ec",black:"#1c1c1c"},m_="#faf9f4",Ka={strip:.25*gn,depth:2*gn,gap:.25*gn,below:.25*gn},g_="#e3cba2",x_="#111111";function iu(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const su=s=>!!s&&s.style==="float";function v_(s){const t=iu(s),e=t?su(t)?2*(Ka.gap+Ka.strip):2*($a.mat+$a.face):0;return[s.w*gn+e,s.h*gn+e]}const M_=s=>{const t=iu(s);return t?su(t)?Ka.depth:$a.depth:nu[s.kind]};async function y_(){const s={},t=async a=>{const l=await fetch(`data/${a}.json?${Date.now()}`,{cache:"no-store"});if(!l.ok)throw new Error(`data/${a}.json: ${l.status}`);return s[a]=l.headers.get("x-rev")??"",l.json()},[e,n,i,r,o]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("albums").catch(()=>[]),t("beats").catch(()=>({}))]);return n.pieces??(n.pieces=[]),{catalogue:e,layout:n,images:i,albums:Array.isArray(r)?r:[],beats:o??{},revs:s}}const __=(s,t)=>`${s}:${t}`,uc=(s,t,e)=>s.paint[__(t,e)]??s.defaultPaint;function Za(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const Ja=s=>s.title.trim()||"Untitled",$f=.004;function w_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const S_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,Kf=(s,t,e,n)=>s.some(i=>i.id!==n&&S_(i.rect,t,e));function Zf(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,l]of n){if(r<=a||i>=l){o.push([a,l]);continue}i>a&&o.push([a,i]),r<l&&o.push([r,l])}n=o}return n.filter(([i,r])=>r-i>.05)}function b_(s){var d;const t=w_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const m=s.doors.filter(x=>x.wall===p).map(x=>[Math.min(x.a,x.b),Math.max(x.a,x.b)]);return p==="S"&&m.push([o.a,o.b]),m},l=[],c=[];for(const p of t){for(const x of p.sides){const g=p.rect,M=p.axis==="x"?x>0?g.z1:g.z0:x>0?g.x1:g.x0,w=p.axis==="x"?[0,x]:[x,0],v=[w[1],-w[0]],y=[];for(const b of t){if(b===p)continue;const A=b.rect,C=p.axis==="x"?A.z0:A.x0,P=p.axis==="x"?A.z1:A.x1;if(!(x>0?C<=M+$f&&P>=M+.01:P>=M-$f&&C<=M-.01))continue;const F=p.axis==="x"?A.x0:A.z0,O=p.axis==="x"?A.x1:A.z1;y.push([F,O])}const S=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),E=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[b,A]of Zf(S,E,y)){const C=P=>{const U=p.axis==="x"?P:M+w[0]*.02,F=p.axis==="x"?M+w[1]*.02:P;return Kf(t,U,F,p.id)};l.push({key:`${p.id}:${x}:${b.toFixed(3)}`,wall:p.id,side:x,axis:p.axis,plane:M,u0:b,u1:A,n:w,right:v,cornerA:C(b-.02),cornerB:C(A+.02),freeA:!p.outer&&!C(b-.02)&&Math.abs(b-p.a0)<1e-6,freeB:!p.outer&&!C(A+.02)&&Math.abs(A-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([P,U])=>[Math.max(P,b),Math.min(U,A)]).filter(([P,U])=>U-P>.01),color:((d=(s.paintAt??[]).find(P=>P.wall===p.id&&P.side===x&&P.u>=b-1e-6&&P.u<=A+1e-6))==null?void 0:d.color)??uc(s,p.id,x)})}}if(p.outer)continue;const m=uc(s,p.id,1);for(const x of[p.a0,p.a1]){const g=x===p.a0?-1:1,M=p.axis==="x"?x+g*.02:(p.rect.x0+p.rect.x1)/2,w=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:x+g*.02;Kf(t,M,w,p.id)||(p.axis==="x"?c.push(Zi(x,p.rect.z0,x,p.rect.z1,[g,0,0],i,m)):c.push(Zi(p.rect.x0,x,p.rect.x1,x,[0,0,g],i,m)))}for(const[x,g]of a(p.id)){const M=p.rect;p.axis==="x"?(c.push(Zi(x,M.z0,x,M.z1,[1,0,0],r,m)),c.push(Zi(g,M.z0,g,M.z1,[-1,0,0],r,m)),c.push(fc(x,g,M.z0,M.z1,"x",r,m))):(c.push(Zi(M.x0,x,M.x1,x,[0,0,1],r,m)),c.push(Zi(M.x0,g,M.x1,g,[0,0,-1],r,m)),c.push(fc(x,g,M.x0,M.x1,"z",r,m)))}}const h=.04,u=uc(s,"S",-1);c.push(Zi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),c.push(Zi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),c.push(fc(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const p of t){const m=p.rect,x=p.axis==="x"?[m.x0,m.x1]:[m.z0,m.z1];for(const[g,M]of Zf(x[0],x[1],a(p.id)))f.push(p.axis==="x"?{x0:g,x1:M,z0:m.z0,z1:m.z1}:{x0:m.x0,x1:m.x1,z0:g,z1:M})}return{inner:n,H:i,doorH:r,walls:t,faces:l,extra:c,solids:f,entrance:o,ceilColor:s.ceilingPaint??$p,ceilAt:s.ceilingAt??[]}}function Zi(s,t,e,n,i,r,o){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function fc(s,t,e,n,i,r,o){const a=(c,h)=>i==="x"?[c,r,h]:[h,r,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const cs=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],ru=s=>s.axis==="x"?s.right[0]:s.right[1];function Ls(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>c&&(c=p)}else{if(p<c)return!1;p<h&&(h=p)}return!0};if(u(-o,t-l.x0)&&u(o,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>r&&c<1-r)return!0}return!1}function E_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let m=d;m<=p;m++)for(let x=u;x<=f;x++)o[m*n+x]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(o[c]===-2){for(o[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,l.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,l.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,l.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function T_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function A_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=T_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const ur=.125,po=.086,Jf=.12,Qa=1e3,ja='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',mo=140,tl=62,Kp=46;let Hr=null;function R_(s){Hr??(Hr=document.createElement("canvas").getContext("2d")),Hr.font=`300 ${mo}px ${ja}`;const t=Hr.measureText(s.title).width;Hr.font=`400 ${tl}px ${ja}`;const e=s.sub?Hr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Qa,h:(mo+(s.sub?Kp+tl:0)+30)/Qa}}const Mh=.03,C_=.35,Qf=1.1;function P_(s,t){if(s.text){const n=R_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?v_(e):[.3,.3]}function L_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function I_(s,t,e,n,i,r){const o=s.u0+i/2+Mh,a=s.u1-i/2-Mh,l=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),c=r/2+.05,h=t-.12-r/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function D_(s,t,e,n,i){const r=ru(s),o=t*r,a=r>0?s.u1:-s.u0;let l=o+n/2+Jf+ur/2;l+ur/2>a-Mh&&(l=o-n/2-Jf-ur/2);const c=Math.max(.2+po/2,e-i/2+po/2);return{pos:cs(s,l*r,c),w:ur,h:po}}function N_(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=L_(t,l);if(!c){n.push(l);continue}const[h,u]=P_(l,e),f=I_(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);i.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:cs(c,f.u,f.y),w:h,h:u,depth:d?M_(d):.001,label:d?D_(c,f.u,f.y,h,u):null,over:!1})}const r=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)r(c)+c.w/2>h&&r(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const f=Math.abs(r(c)-r(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const o=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((m,x)=>x),u=m=>h[m]===m?m:h[m]=u(h[m]);for(let m=0;m<c.length;m++)for(let x=m+1;x<c.length;x++){const g=c[m],M=c[x];if(g.text||M.text)continue;const w=Math.abs(r(g)-r(M))-(g.w+M.w)/2,v=Math.abs(g.pos[1]-M.pos[1])-(g.h+M.h)/2;Math.max(w,v)<C_&&(h[u(m)]=u(x))}const f=new Map;c.forEach((m,x)=>{const g=u(x);f.has(g)||f.set(g,[]),f.get(g).push(m)});const d=[l.n[0],0,l.n[1]],p=[l.right[0],0,l.right[1]];for(const m of f.values()){const x=Math.min(...m.map(S=>r(S)-S.w/2)),g=Math.max(...m.map(S=>r(S)+S.w/2)),M=Math.min(...m.map(S=>S.pos[1]-S.h/2)),w=Math.max(...m.map(S=>S.pos[1]+S.h/2)),v=cs(l,(x+g)/2,(M+w)/2),y={w:g-x,h:w-M};o.push({face:l,centre:v,normal:d,right:p,w:y.w,h:y.h,items:m,lamp:U_(v,d,p,y,m,t)})}}return{placed:o,items:i,homeless:n}}function U_(s,t,e,n,i,r){const o=r.H-.03;let a=Qf;for(let M=.2;M<=Qf+.25;M+=.05)if(Ls(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,w)=>M+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[M,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}const z_=1.45,Zp=.07,Jp=.07,Qp=.125,F_=.086,jp=.12,k_=1.3,t0=.16,jf=1e3,td='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',ed=140,nd=62,O_=46,B_=1.6;let Vr=null;function e0(s){Vr??(Vr=document.createElement("canvas").getContext("2d")),Vr.font=`300 ${ed}px ${td}`;const t=Vr.measureText(s.title).width;Vr.font=`400 ${nd}px ${td}`;const e=s.sub?Vr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/jf,h:(ed+(s.sub?O_+nd:0)+30)/jf,colW:[],colH:[]}}const H_=6400;function V_(s){return s.map(t=>({title:Ja(t),detail:[t.medium,Za(t),t.year].filter(Boolean).join(", ")}))}const G_=s=>(150+V_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/H_,id=.45,sd=.25,dc=.4,rd=.12,od=1.1,yh=s=>[s.w*gn,s.h*gn];function n0(s,t){const e=[],n=[];for(const o of s){const a=o.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>yh(l)[0]))),n.push(a.reduce((l,c)=>l+yh(c)[1],0)+Jp*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Zp*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const W_=s=>s.cols.reduce((t,e)=>t+e.length,0),X_=s=>W_(s)>1?t0:Qp,q_=(s,t)=>s.text?e0(s.text).w:n0(s.cols,t).w+jp+X_(s);function Y_(s){const t=[];let e=s.u0+(s.cornerA?id:sd);const n=s.u1-(s.cornerB?id:sd);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-dc-e>.3&&t.push([e,i-dc]),e=Math.max(e,r+dc);return n-e>.3&&t.push([e,n]),t}function $_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function K_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!o.cols.length))continue;const a=$_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=Y_(o);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([p,m],x)=>{const g=u.u<p?p-u.u:u.u>m?u.u-m:0;g<d&&(d=g,f=x)}),c[f].push(u)}const h=ru(o);l.forEach(([u,f],d)=>{const p=c[d].sort((S,E)=>(S.u-E.u)*h);if(!p.length)return;const m=p.map(S=>q_(S,e)),x=f-u,g=m.reduce((S,E)=>S+E,0);let M=(x-g)/(p.length+1);const w=M<rd;w&&(M=rd);const v=g+M*(p.length+1);let y=(h>0?u:-f)+(x-v)/2+M;p.forEach((S,E)=>{const _=S.text?e0(S.text):n0(S.cols,e),A=(y+_.w/2)*h;S.u=+A.toFixed(4),r.push(Z_(S,o,A,_,e,t,w)),y+=m[E]+M})})}return{placed:r,homeless:i}}function Z_(s,t,e,n,i,r,o){const a=ru(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?B_:z_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((w,v)=>{const y=n.colW[v],S=n.colH[v];let E=h+S/2;for(const _ of w){const b=i.get(_),[A,C]=yh(b),P=f+y/2;u.push({work:b,pos:cs(t,e+P*a,E-C/2),w:A,h:C,depth:nu[b.kind]}),E-=C+Jp}f+=y+Zp});const d=s.cols.flat().map(w=>i.get(w)),p=d.length>1?t0:Qp,m=d.length>1?G_(d):F_,x=e+(n.w/2+jp+p/2)*a,g=Math.min(k_,h+n.h/2-m/2),M=cs(t,e,h);return{def:s,face:t,centre:M,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:cs(t,x,Math.max(g,.3+m/2)),w:p,h:m,works:d},lamp:J_(M,l,c,n,u,r),over:o,text:s.text}}function J_(s,t,e,n,i,r){const o=r.H-.03;let a=od;for(let M=.2;M<=od+.25;M+=.05)if(Ls(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,w)=>M+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[M,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}function Q_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=K_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const l of o.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:r(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const j_=["b","c","s","t","sh","hl"],i0=s=>!s||j_.every(t=>!s[t]);function s0(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const ad=s=>Math.min(1,Math.max(0,s));function tw(s,t){let e=Math.pow(s,t.gamma);e=ad(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return ad(e+t.sh*.25*n+t.hl*.25*i)}const ew=`
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
  }`;function nw(s){const t=s0(s);return{uAdj:{value:i0(s)?0:1},uWarm:{value:new I(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let Ji=null;const ld="http://www.w3.org/2000/svg";function iw(s,t){if(i0(t))return"";Ji||(Ji=document.createElementNS(ld,"svg"),Ji.setAttribute("width","0"),Ji.setAttribute("height","0"),Ji.style.position="absolute",document.body.append(Ji));const e=`adj-${s}`;let n=Ji.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(ld,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),Ji.append(n));const i=s0(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,f)=>tw(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const oi=4,wl=6,zn=1024,sw=.035,oo=8;class rw{constructor(){R(this,"rt",new Ln(zn*2,zn*2,{depthBuffer:!0,magFilter:qe,minFilter:qe,generateMipmaps:!1}));R(this,"depth",new Fp({depthPacking:gm,side:Zn}));R(this,"cam",new je(60,1,.3,8));R(this,"uniforms",{uFLN:{value:0},uFLP:{value:Array.from({length:oi},()=>new I)},uFLD:{value:Array.from({length:oi},()=>new I(0,-1,0))},uFLC:{value:Array.from({length:oi},()=>new mt(1,1))},uFLI:{value:new Array(oi).fill(0)},uFSM:{value:Array.from({length:oi},()=>new Kt)},uFTile:{value:Array.from({length:oi},()=>new Ee)},uFCam:{value:Array.from({length:oi},()=>new Ee)},uFAtlas:{value:this.rt.texture},uFAN:{value:0},uFA:{value:Array.from({length:oo},()=>new Ee)},uFAS:{value:Array.from({length:oo},()=>new I)}})}setLamps(t,e){const n=this.uniforms;n.uFLN.value=Math.min(oi,t.length),t.slice(0,oi).forEach((i,r)=>{n.uFLP.value[r].set(...i.p),n.uFLD.value[r].set(...i.d),n.uFLC.value[r].set(i.cOuter,i.cInner),n.uFLI.value[r]=i.i}),n.uFAN.value=Math.min(oo,e.length),e.slice(0,oo).forEach((i,r)=>{const o=_e.degToRad(i.rot);n.uFA.value[r].set(i.x,i.z,Math.cos(o),Math.sin(o)),n.uFAS.value[r].set(i.hw,i.hd,i.k)})}render(t,e){const n=this.uniforms,i=this.cam,r=t.getRenderTarget(),o=e.overrideMaterial,a=e.background,l=t.getClearColor(new Rt),c=t.getClearAlpha(),h=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,e.overrideMaterial=this.depth,e.background=null,t.setClearColor(16777215,1),i.layers.set(wl);for(let u=0;u<n.uFLN.value;u++){const f=n.uFLP.value[u],d=n.uFLD.value[u],p=Math.acos(_e.clamp(n.uFLC.value[u].x,-1,1))+.05;i.fov=_e.radToDeg(Math.min(1.45,p)*2),i.near=.3,i.far=8,i.position.copy(f),Math.abs(d.y)>.99?i.up.set(0,0,-1):i.up.set(0,1,0),i.lookAt(f.clone().add(d)),i.updateProjectionMatrix(),i.updateMatrixWorld();const m=u%2*zn,x=Math.floor(u/2)*zn;this.rt.viewport.set(m,x,zn,zn),this.rt.scissor.set(m,x,zn,zn),this.rt.scissorTest=!0,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),n.uFSM.value[u].multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),n.uFTile.value[u].set(m/(zn*2),x/(zn*2),.5,.5),n.uFCam.value[u].set(i.near,i.far,1/(2*Math.tan(_e.degToRad(i.fov)/2)),0)}this.rt.scissorTest=!1,this.rt.viewport.set(0,0,zn*2,zn*2),t.setRenderTarget(r),t.setClearColor(l,c),e.overrideMaterial=o,e.background=a,t.shadowMap.autoUpdate=h}dispose(){this.rt.dispose(),this.depth.dispose()}}const r0=`
  #define MAXF ${oi}
  #define MAXA ${oo}
  #define FLENS ${sw.toFixed(3)}
  ${oe.packing}
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
`,Ci=16,rr=48,Io=new Rt(1,.84,.64),o0=.06,ow=.3,a0=.05,ou=4,aw=.6,l0=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,au=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,c0=`
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
`,lu=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,cu=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),h0=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),u0=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function cd(s,t,e,n,i,r){const o=(a,l,c)=>{const h=a.slice(0,l);for(;h.length<l;)h.push(c());return h};return new bn({uniforms:{uN:{value:Math.min(s.lamps.length,Ci)},uLP:{value:o(s.lamps.map(a=>a.p),Ci,()=>new I)},uLD:{value:o(s.lamps.map(a=>a.d),Ci,()=>new I(0,-1,0))},uLC:{value:o(s.lamps.map(a=>a.c),Ci,()=>new mt(1,1))},uLI:{value:o(s.lamps.map(a=>a.i),Ci,()=>0)},uB:{value:Math.min(s.boxes.length,rr)},uBC:{value:o(s.boxes.map(a=>a.c),rr,()=>new I(0,-99,0))},uBS:{value:o(s.boxes.map(a=>a.s),rr,()=>new I)},uBL:{value:o(s.boxes.map(a=>a.lamp),rr,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:o0},uBounceK:{value:ou},uLampK:{value:ow},uCeilK:{value:a0},...h0(i),uLCol:{value:Io},...cu(n),...r.uniforms},vertexShader:c0,fragmentShader:`
      ${r0}
      #define MAXL ${Ci}
      #define MAXB ${rr}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${u0}
      ${au}
      ${l0}
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
        ${lu}
      }`})}function lw(s,t){return new bn({uniforms:{uAmb:{value:a0},uBounceK:{value:ou},...h0(t),...cu(s)},vertexShader:c0,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${au}
      ${u0}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${lu}
      }`})}const _h={value:1};function cw(s,t,e,n){return new bn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:o0},uBounceK:{value:ou},uSpillK:{value:aw},uLCol:{value:Io},uGlossK:_h,...cu(e),...n.uniforms},vertexShader:`
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
      ${au}
      ${l0}
      ${r0}
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
        ${lu}
      }`})}function hd(s,t,e,n){return new bn({uniforms:{uMap:{value:s},...nw(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Rt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Io}},toneMapped:!1,vertexShader:`
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
      ${ew}
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
      }`})}const Gr=.05,Wr=.2;function hw(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Gr)+1,a=Math.ceil(r/Gr)+1,l=new Uint8Array(o*a),c=s.solids;for(let w=0;w<a;w++){const v=n.z0+w*Gr;for(let y=0;y<o;y++){const S=n.x0+y*Gr;let E=1;for(const _ of c){const b=Math.max(_.x0-S,0,S-_.x1),A=Math.max(_.z0-v,0,v-_.z1),C=b*b+A*A;C>1.44||(E*=1-.42*Math.exp(-Math.sqrt(C)/.28))}l[w*o+y]=Math.round(Math.max(0,Math.min(1,E))*255)}}const h=Math.ceil(i/Wr)+1,u=Math.ceil(r/Wr)+1,f=new Float32Array(h*u*4),d=Io,p=t.map(w=>{const v=new Rt(w.face.color),S=(w.w+.5)*(w.h+1)*.7*.55;return{c:[w.centre[0]+w.normal[0]*.05,1.2,w.centre[2]+w.normal[2]*.05],n:w.normal,rgb:[v.r*d.r*S,v.g*d.g*S,v.b*d.b*S],lamp:w.lamp}});for(let w=0;w<u;w++){const v=n.z0+w*Wr;for(let y=0;y<h;y++){const S=n.x0+y*Wr;let E=0,_=0,b=0,A=0;for(const P of p){const U=S-P.c[0],F=v-P.c[2],O=U*U+F*F;if(O>64)continue;const Y=U*P.n[0]+F*P.n[2];if(Y>.02){const V=Math.max(O+P.c[1]*P.c[1],.3),L=Math.sqrt(V),G=Y/L*(P.c[1]/L)/(Math.PI*V);G>5e-4&&!Ls(s.solids,P.c[0],P.c[2],S,v)&&(E+=P.rgb[0]*G,_+=P.rgb[1]*G,b+=P.rgb[2]*G)}const q=P.lamp,et=S-q.p[0],X=-q.p[1],Z=v-q.p[2],it=et*et+X*X+Z*Z,dt=Math.sqrt(it),H=(et*q.d[0]+X*q.d[1]+Z*q.d[2])/dt;if(H>q.cOuter){const V=Math.min(1,(H-q.cOuter)/(q.cInner-q.cOuter)),L=V*V*(3-2*V),G=q.i*L*(q.p[1]/dt)/it;G>.002&&!Ls(s.solids,q.p[0],q.p[2],S,v)&&(A+=G)}}const C=(w*h+y)*4;f[C]=E,f[C+1]=_,f[C+2]=b,f[C+3]=A}}e==null||e.ao.dispose(),e==null||e.light.dispose();const m=new wr(l,o,a,pl,wn);m.magFilter=m.minFilter=tn,m.needsUpdate=!0;const x=new Uint16Array(f.length);for(let w=0;w<f.length;w++)x[w]=ag.toHalfFloat(f[w]);const g=new wr(x,h,u,Pn,In);g.magFilter=g.minFilter=tn,g.needsUpdate=!0;const M=(w,v,y)=>new Ee(1/(w*v),1/(w*y),.5/v,.5/y);return{ao:m,light:g,origin:new mt(n.x0,n.z0),aoXf:M(Gr,o,a),lightXf:M(Wr,h,u)}}const Qe=.15,nn=8,Pi=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Ti=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],fa=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],ud=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],fd=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],uw=[0,1,0];class f0{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=ud(fa(t[2],t[0]),fa(t[3],t[1])),r=Pi(Pi(e[0],e[1]),Pi(e[2],e[3]));fd(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));fd(ud(fa(t[1],t[0]),fa(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new we;return t.setAttribute("position",new kt(this.pos,3)),t.setAttribute("normal",new kt(this.nor,3)),t.setAttribute("uv",new kt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const d0=(s,t)=>s?Qe:Math.max(0,Math.min(Qe,t/2-.002));function fw(s,t,e){const n=new f0,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,b,A)=>{const C=cs(s,_,A);return[C[0]+i[0]*b,A,C[2]+i[2]*b]},a=d0(s.outer,s.t),l=t-Qe,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?Qe:h==="free"?a:0),d=s.u1-(u==="in"?Qe:u==="free"?a:0);if(d-f<.01)return n;const p=(_,b,A,C)=>{b-_<1e-4||C-A<1e-4||n.quad([o(_,0,A),o(b,0,A),o(b,0,C),o(_,0,C)],[i,i,i,i])},m=[...s.doors].sort((_,b)=>_[0]-b[0]);if(!m.length)p(f,d,0,l);else{let _=f;for(const[b,A]of m)p(_,Math.min(d,b-a),0,c),_=Math.max(_,A+a);p(_,d,0,c),p(f,d,c,l)}const x=(_,b,A,C)=>{if(a<.01)return;const P=U=>Pi(Ti(i,Math.cos(U)),Ti(b,Math.sin(U)));for(let U=0;U<nn;U++){const F=U/nn*Math.PI/2,O=(U+1)/nn*Math.PI/2,Y=(q,et)=>Pi(o(_,-a,et),Ti(P(q),a));n.quad([Y(F,A),Y(O,A),Y(O,C),Y(F,C)],[P(F),P(O),P(O),P(F)])}},g=_=>[-_[0],-_[1],-_[2]];for(const[_,b]of m)_-s.u0>a+.01&&x(_-a,r,0,c),s.u1-b>a+.01&&x(b+a,g(r),0,c);h==="free"&&x(s.u0+a,g(r),0,t),u==="free"&&x(s.u1-a,r,0,t);const M=(_,b)=>{const A=Pi(Pi(o(_,0,0),Ti(i,Qe)),Ti(b,Qe)),C=U=>Pi(Ti(i,Math.cos(U)),Ti(b,Math.sin(U))),P=Math.PI/4;for(let U=0;U<nn/2;U++){const F=U/(nn/2)*P,O=(U+1)/(nn/2)*P,Y=(q,et)=>[A[0]-Qe*C(q)[0],et,A[2]-Qe*C(q)[2]];n.quad([Y(F,0),Y(O,0),Y(O,l),Y(F,l)],[C(F),C(O),C(O),C(F)]);for(let q=0;q<nn;q++){const et=q/nn*Math.PI/2,X=(q+1)/nn*Math.PI/2,Z=(dt,H)=>{const V=C(dt);return[A[0]-Qe*Math.cos(H)*V[0],l+Qe*Math.sin(H),A[2]-Qe*Math.cos(H)*V[2]]},it=(dt,H)=>{const V=C(dt);return[Math.cos(H)*V[0],-Math.sin(H),Math.cos(H)*V[2]]};n.quad([Z(F,et),Z(O,et),Z(O,X),Z(F,X)],[it(F,et),it(O,et),it(O,X),it(F,X)])}}};h==="in"&&M(s.u0,r),u==="in"&&M(s.u1,g(r));const w=h==="in"?s.u0+Qe:f,v=u==="in"?s.u1-Qe:d,y=(_,b)=>o(_,Qe-Qe*Math.cos(b),l+Qe*Math.sin(b)),S=_=>Pi(Ti(i,Math.cos(_)),Ti(uw,-Math.sin(_)));for(let _=0;_<nn;_++){const b=_/nn*Math.PI/2,A=(_+1)/nn*Math.PI/2;n.quad([y(w,b),y(v,b),y(v,A),y(w,A)],[S(b),S(b),S(A),S(A)])}const E=(_,b)=>{const A=o(_,0,t);for(let C=0;C<nn;C++){const P=C/nn*Math.PI/2,U=(C+1)/nn*Math.PI/2;n.tri([A,y(_,P),y(_,U)],b)}};return h!=="in"&&E(w,g(r)),u!=="in"&&E(v,r),n}function dw(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new f0),e.get(a)),i=s.H,r=Math.min(s.doorH,i-Qe),o=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(o(a.id)),h=(w,v,y)=>a.axis==="x"?[w,y,v]:[v,y,w],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=d0(a.outer,a.t),m=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],x=f+p,g=l?f+t:d-p,M=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(w=>w.wall===a.id).flatMap(w=>w.doors).filter((w,v,y)=>y.findIndex(S=>Math.abs(S[0]-w[0])<1e-6)===v);for(const[w,v]of M){const y=(_,b)=>{g-x>.001&&c.quad([h(_,x,0),h(_,g,0),h(_,g,r),h(_,x,r)],[b,b,b,b])};y(w,u),y(v,[-u[0],0,-u[2]]);const S=[0,-1,0],E=l?f+t:d;c.quad([h(w,f,r),h(v,f,r),h(v,E,r),h(w,E,r)],[S,S,S,S]);for(const{c:_,s:b}of m)for(const[A,C]of[[w,1],[v,-1]]){if(p<.01)continue;const P=A-C*p,U=_-b*p,F=h(A,_,r);for(let O=0;O<nn;O++){const Y=q=>{const et=q/nn*Math.PI/2;return h(P+C*p*Math.sin(et),U+b*p*Math.cos(et),r)};c.tri([F,Y(O),Y(O+1)],S)}}}if(!a.outer)for(const w of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,S)=>{d-p-(f+p)>.001&&c.quad([h(y,f+p,0),h(y,d-p,0),h(y,d-p,i),h(y,f+p,i)],[S,S,S,S])};w.freeA&&v(w.u0,[-u[0],0,-u[2]]),w.freeB&&v(w.u1,u)}}return e}const dd=new Rt(1,1,1),p0=.2,el=2;function pw(s,t,e,n){const i=new he;s.background=dd,s.fog=null;const r=n.outline,o=r.t-p0,a=r.x0-r.t,l=r.x1+r.t,c=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,m=n.entrance.x+n.entrance.w/2,x=n.entrance.x,g=new Ye({color:dd,toneMapped:!1}),M=(_,b,A,C,P,U)=>{const F=new _t(new en(C,P,U),g);return F.position.set(_,b,A),F.userData.outside=!0,F.layers.set(el),i.add(F),F},w=-.5,v=d,y=(w+v)/2,S=v-w;M((a+p)/2,y,h-o/2,p-a,S,o),M((m+l)/2,y,h-o/2,l-m,S,o),M(x,(f+v)/2,h-o/2,m-p,v-f,o),M((a+l)/2,y,c+o/2,l-a,S,o),M(a+o/2,y,(c+h)/2,o,S,h-c-2*o),M(l-o/2,y,(c+h)/2,o,S,h-c-2*o),M((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const E=new _t(new Ue(400,400).rotateX(-Math.PI/2),g);return E.position.y=-.002,E.layers.set(el),i.add(E),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var C;const b=_;b.geometry&&b.geometry.dispose();const A=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const P of A)(C=P.map)==null||C.dispose(),P.dispose()})}}}class pd{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"uv",[]);R(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new we;return t.setAttribute("position",new kt(this.pos,3)),t.setAttribute("normal",new kt(this.nor,3)),t.setAttribute("uv",new kt(this.uv,2)),t.setIndex(this.idx),t}}const Ro=s=>new I(s[0],s[1],s[2]),m0=s=>({p:Ro(s.p),d:Ro(s.d),c:new mt(s.cOuter,s.cInner),i:s.i});function mw(s,t,e,n=[]){const i=t.filter(h=>h.face===s),r=i.map(h=>h.lamp),o=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(cs(s,u,f))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of a){const m=p[0]-h.p[0],x=p[1]-h.p[1],g=p[2]-h.p[2],M=Math.hypot(m,x,g);M>7||(m*h.d[0]+x*h.d[1]+g*h.d[2])/M<=h.cOuter||Ls(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,M))}d<1/0&&o.push({L:h,d})}o.sort((h,u)=>h.d-u.d);for(const h of o){if(r.length>=Ci)break;r.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=Ci))for(const f of h.items)c.length>=rr||f.text||c.push({c:Ro(f.pos),s:new I(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:r.slice(0,Ci).map(m0),boxes:c,normal:new I(s.n[0],0,s.n[1]),right:new I(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const gw={lamps:[],boxes:[],normal:new I(0,0,1),right:new I(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function md(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,l=[],c=[],h=[],u=[],f=[],d=(S,E,_,b)=>{const A=l.length/3;S.forEach((C,P)=>{l.push(...C),c.push(...E),h.push(..._[P]),u.push(b)}),f.push(A,A+1,A+2,A,A+2,A+3)},p=s/2,m=t/2,x=.004,g=i+x,M=r-x,w=o+x,v=a-x;d([[-p,-m,e],[p,-m,e],[p,m,e],[-p,m,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-p,m,e],[p,m,e],[p,m,0],[-p,m,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-p,-m,0],[p,-m,0],[p,-m,e],[-p,-m,e]],[0,-1,0],[[i,w],[r,w],[r,w],[i,w]],1),d([[-p,-m,0],[-p,-m,e],[-p,m,e],[-p,m,0]],[-1,0,0],[[g,o],[g,o],[g,a],[g,a]],1),d([[p,-m,e],[p,-m,0],[p,m,0],[p,m,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const y=new we;return y.setAttribute("position",new kt(l,3)),y.setAttribute("normal",new kt(c,3)),y.setAttribute("uv",new kt(h,2)),y.setAttribute("aSide",new kt(u,1)),y.setIndex(f),y}function xw(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:l}=$a,c=s/2,h=t/2,u=c+o+i,f=h+o+i,d=c+o,p=h+o,m=c+l,x=h+l,g=r-a,M=g-l,w=new Rt(d_[e.color]),v=new Rt(p_[e.mat]),y=new Rt(m_),S=[],E=[],_=[],b=[],A=[],C=[],P=X=>new I(X[0],X[1],X[2]),U=(X,Z,it,dt=[[0,0],[0,0],[0,0],[0,0]])=>{const H=new I().crossVectors(P(X[1]).sub(P(X[0])),P(X[3]).sub(P(X[0]))).normalize();H.dot(P(Z))<0&&(X=[X[0],X[3],X[2],X[1]],dt=[dt[0],dt[3],dt[2],dt[1]],H.negate());const V=S.length/3;X.forEach((L,G)=>{S.push(...L),E.push(H.x,H.y,H.z),_.push(...dt[G]),b.push(it?2:0),A.push(...it?[it.r,it.g,it.b]:[0,0,0])}),C.push(V,V+1,V+2,V,V+2,V+3)};U([[-u,p,r],[u,p,r],[u,f,r],[-u,f,r]],[0,0,1],w),U([[-u,-f,r],[u,-f,r],[u,-p,r],[-u,-p,r]],[0,0,1],w),U([[-u,-p,r],[-d,-p,r],[-d,p,r],[-u,p,r]],[0,0,1],w),U([[d,-p,r],[u,-p,r],[u,p,r],[d,p,r]],[0,0,1],w),U([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],w),U([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],w),U([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],w),U([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],w),U([[-d,p,g],[d,p,g],[d,p,r],[-d,p,r]],[0,-1,0],w),U([[-d,-p,g],[d,-p,g],[d,-p,r],[-d,-p,r]],[0,1,0],w),U([[-d,-p,g],[-d,p,g],[-d,p,r],[-d,-p,r]],[1,0,0],w),U([[d,-p,g],[d,p,g],[d,p,r],[d,-p,r]],[-1,0,0],w),U([[-d,x,g],[d,x,g],[d,p,g],[-d,p,g]],[0,0,1],v),U([[-d,-p,g],[d,-p,g],[d,-x,g],[-d,-x,g]],[0,0,1],v),U([[-d,-x,g],[-m,-x,g],[-m,x,g],[-d,x,g]],[0,0,1],v),U([[m,-x,g],[d,-x,g],[d,x,g],[m,x,g]],[0,0,1],v),U([[-m,x,g],[m,x,g],[c,h,M],[-c,h,M]],[0,-1,1],y),U([[-m,-x,g],[m,-x,g],[c,-h,M],[-c,-h,M]],[0,1,1],y),U([[-m,-x,g],[-m,x,g],[-c,h,M],[-c,-h,M]],[1,0,1],y),U([[m,-x,g],[m,x,g],[c,h,M],[c,-h,M]],[-1,0,1],y);const[F,O,Y,q]=n;U([[-c,-h,M],[c,-h,M],[c,h,M],[-c,h,M]],[0,0,1],null,[[F,Y],[O,Y],[O,q],[F,q]]);const et=new we;return et.setAttribute("position",new kt(S,3)),et.setAttribute("normal",new kt(E,3)),et.setAttribute("uv",new kt(_,2)),et.setAttribute("aSide",new kt(b,1)),et.setAttribute("aCol",new kt(A,3)),et.setIndex(C),et}function vw(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=Ka,l=s/2,c=t/2,h=l+o,u=c+o,f=h+i,d=u+i,p=r-a,m=Math.max(.004,p-e),x=new Rt(g_),g=new Rt(x_),M=[],w=[],v=[],y=[],S=[],E=[],_=Z=>new I(Z[0],Z[1],Z[2]),b=(Z,it,dt,H,V=[[0,0],[0,0],[0,0],[0,0]])=>{const L=new I().crossVectors(_(Z[1]).sub(_(Z[0])),_(Z[3]).sub(_(Z[0]))).normalize();L.dot(_(it))<0&&(Z=[Z[0],Z[3],Z[2],Z[1]],V=[V[0],V[3],V[2],V[1]],L.negate());const G=M.length/3;Z.forEach((N,z)=>{M.push(...N),w.push(L.x,L.y,L.z),v.push(...V[z]),y.push(dt),S.push(...H?[H.r,H.g,H.b]:[0,0,0])}),E.push(G,G+1,G+2,G,G+2,G+3)};b([[-f,u,r],[f,u,r],[f,d,r],[-f,d,r]],[0,0,1],2,x),b([[-f,-d,r],[f,-d,r],[f,-u,r],[-f,-u,r]],[0,0,1],2,x),b([[-f,-u,r],[-h,-u,r],[-h,u,r],[-f,u,r]],[0,0,1],2,x),b([[h,-u,r],[f,-u,r],[f,u,r],[h,u,r]],[0,0,1],2,x),b([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],2,x),b([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],2,x),b([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],2,x),b([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],2,x),b([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,g),b([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,g),b([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,g),b([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,g),b([[-h,c,m],[h,c,m],[h,u,m],[-h,u,m]],[0,0,1],2,g),b([[-h,-u,m],[h,-u,m],[h,-c,m],[-h,-c,m]],[0,0,1],2,g),b([[-h,-c,m],[-l,-c,m],[-l,c,m],[-h,c,m]],[0,0,1],2,g),b([[l,-c,m],[h,-c,m],[h,c,m],[l,c,m]],[0,0,1],2,g);const[A,C,P,U]=n,F=.004,O=A+F,Y=C-F,q=P+F,et=U-F;b([[-l,-c,p],[l,-c,p],[l,c,p],[-l,c,p]],[0,0,1],0,null,[[A,P],[C,P],[C,U],[A,U]]),b([[-l,c,p],[l,c,p],[l,c,m],[-l,c,m]],[0,1,0],1,null,[[A,et],[C,et],[C,et],[A,et]]),b([[-l,-c,m],[l,-c,m],[l,-c,p],[-l,-c,p]],[0,-1,0],1,null,[[A,q],[C,q],[C,q],[A,q]]),b([[-l,-c,m],[-l,-c,p],[-l,c,p],[-l,c,m]],[-1,0,0],1,null,[[O,P],[O,P],[O,U],[O,U]]),b([[l,-c,p],[l,-c,m],[l,c,m],[l,c,p]],[1,0,0],1,null,[[Y,P],[Y,P],[Y,U],[Y,U]]);const X=new we;return X.setAttribute("position",new kt(M,3)),X.setAttribute("normal",new kt(w,3)),X.setAttribute("uv",new kt(v,2)),X.setAttribute("aSide",new kt(y,1)),X.setAttribute("aCol",new kt(S,3)),X.setIndex(E),X}function Mw(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let l=i,c=o,h=1-a,u=1-r;if(!e)return[l,c,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const p=f/d,m=(l+c)/2,x=(c-l)*p/2;l=m-x,c=m+x}else{const p=d/f,m=(h+u)/2,x=(u-h)*p/2;h=m-x,u=m+x}return[l,c,h,u]}const pc=(s,t,e,n)=>{const i=new Kt().makeBasis(Ro(e),new I(0,1,0),Ro(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class yw{constructor(t,e){R(this,"map",new Map);R(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${Ja(t)}|${t.medium}|${Za(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*po/ur),r=g0(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,Ja(t)]];for(const h of[t.medium,Za(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)o.font=h,l=_w(o,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new ps(e()),n.colorSpace=Ne,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const g0=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function _w(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const l=o?o+" "+a:a;s.measureText(l).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=l}return s.fillText(o,e,n),n+r}const ww=s=>{const t=new Rt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function Sw(s,t,e,n){const i=g0(Math.ceil(t*Qa),Math.ceil(e*Qa)),r=i.getContext("2d");r.fillStyle=ww(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${mo}px ${ja}`,r.fillText(s.title,8,mo*.8),s.sub&&(r.font=`400 ${tl}px ${ja}`,r.fillText(s.sub,10,mo+Kp+tl*.8));const o=new ps(i);return o.colorSpace=Ne,o.anisotropy=8,o}function bw(s){const t=E_(s),e=A_(s,t).map(c=>new Rt(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let c=0;c<i;c++)n[c]>=0&&r.push(c);for(;r.length;){const c=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],c.push(f))}r=c}const o=new Uint8Array(i*4),a=new Rt($p);for(let c=0;c<i;c++){const h=e[n[c]]??a;o[c*4]=Math.round(h.r*255),o[c*4+1]=Math.round(h.g*255),o[c*4+2]=Math.round(h.b*255),o[c*4+3]=255}const l=new wr(o,t.nx,t.nz,Pn);return l.magFilter=l.minFilter=qe,l.needsUpdate=!0,{tex:l,origin:new mt(t.x0,t.z0),scale:new mt(1/(t.nx*t.c),1/(t.nz*t.c))}}function Ew(s,t,e,n,i,r,o,a,l,c){const h=new he,u=s.H,f=bw(s),d=[],p=[],m=[f.tex],x=(C,P)=>{p.push(C),d.push(P);const U=new _t(C,P);return h.add(U),U},g=[];for(const C of s.faces){const P=fw(C,u,s.doorH);if(P.empty)continue;const U=x(P.geometry(),cd(mw(C,t,s),new Rt(C.color),u,e,f,l));U.userData.face=C,g.push(U)}for(const[C,P]of dw(s,p0))P.empty||x(P.geometry(),cd(gw,new Rt(C),u,e,f,l));const M=s.inner,w=s.entrance,v=new pd;v.add([[M.x0,0,M.z1],[M.x1,0,M.z1],[M.x1,0,M.z0],[M.x0,0,M.z0]],[0,1,0]),v.add([[w.a,0,w.z+.4],[w.b,0,w.z+.4],[w.b,0,w.z],[w.a,0,w.z]],[0,1,0]),x(v.geometry(),cw(o,a,e,l)).layers.set(1);const S=new pd;S.add([[M.x0,u,M.z0],[M.x1,u,M.z0],[M.x1,u,M.z1],[M.x0,u,M.z1]],[0,-1,0]),x(S.geometry(),lw(e,f));const E=[...t.map(C=>C.lamp.p),...c.map(C=>C.p)],_=E.length;if(_){const C=new Oi(.068,28).rotateX(Math.PI/2).translate(0,u-.0015,0),P=new Oi(.05,24).rotateX(Math.PI/2).translate(0,u-.0025,0),U=new Oi(.026,20).rotateX(Math.PI/2).translate(0,u-.0035,0),F=new Ye({color:14276820,toneMapped:!1}),O=new Ye({color:11842479,toneMapped:!1}),Y=new Ye({color:new Rt(1,.94,.86),toneMapped:!1});Y.userData.lens=!0,p.push(C,P,U),d.push(F,O,Y);const q=new xr(C,F,_),et=new xr(P,O,_),X=new xr(U,Y,_),Z=new Kt;E.forEach((it,dt)=>{Z.makeTranslation(it[0],0,it[2]),q.setMatrixAt(dt,Z),et.setMatrixAt(dt,Z),X.setMatrixAt(dt,Z)}),h.add(q,et,X)}const b=[],A=[];r.begin();for(const C of t){const P=m0(C.lamp);for(const U of C.items){if(U.text){const V=Sw(U.text,U.w,U.h,U.face.color);m.push(V);const L=x(new Ue(U.w,U.h),new Ye({map:V,transparent:!0,depthWrite:!1,toneMapped:!1}));pc(L,C.normal,C.right,[U.pos[0]+C.normal[0]*.002,U.pos[1],U.pos[2]+C.normal[2]*.002]),L.userData.title=U.id;continue}const F=U.work,O=F.kind==="paper"||F.kind==="digital"?new Rt().setRGB(.92,.91,.88):null,Y=hd(n(F.id),P,O,F.adjust),q=iu(F),et=F.w*gn,X=F.h*gn,Z=Mw(et,X,i(F.id),F.crop),it=q?su(q)?vw(et,X,nu[F.kind],Z):xw(et,X,q,Z):md(U.w,U.h,U.depth,Z),dt=x(it,Y);pc(dt,C.normal,C.right,U.pos),dt.userData.work=F.id;const H={work:F,placed:C,mesh:dt,mat:Y,w:U.w,h:U.h,label:null};if(b.push(H),U.label){const V=x(md(ur,po,.003),hd(r.single(F),P,new Rt(.95,.95,.93)));pc(V,C.normal,C.right,U.label.pos),V.userData.work=F.id,V.userData.label=!0,A.push(V),H.label=V}}}return r.end(),{group:h,pictures:b,labels:A,faceMeshes:g,dispose(){for(const C of p)C.dispose();for(const C of d)C.dispose();for(const C of m)C.dispose();h.traverse(C=>{const P=C;P.isInstancedMesh&&P.dispose()})}}}const Xr=new I;function Fn(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Xr.copy(t),Xr[n]=0,Xr.normalize();const c=.5*o/(o+a),h=1-Xr.angleTo(s)/l;return Math.sign(Xr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Yn extends en{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,m=new I,x=.5/o;for(let g=0,M=0;g<u.length;g+=3,M+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[M+0]=Fn(m,c,"z","y",r,n),d[M+1]=1-Fn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[M+0]=1-Fn(m,c,"z","y",r,n),d[M+1]=1-Fn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[M+0]=1-Fn(m,c,"x","z",r,t),d[M+1]=Fn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[M+0]=1-Fn(m,c,"x","z",r,t),d[M+1]=1-Fn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[M+0]=1-Fn(m,c,"x","y",r,t),d[M+1]=1-Fn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[M+0]=Fn(m,c,"x","y",r,t),d[M+1]=1-Fn(m,c,"y","x",r,e);break}}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.segments,t.radius)}}function Tw(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=gd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][f]);const p=gd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function gd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new xn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const m=h.getComponent(f,p);a.setComponent(f+u,p,m)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function hu(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,w=a.length;M<w;M++){const v=a[M],y=s.attributes[v];l[v]=new y.constructor(new y.array.constructor(y.count*y.itemSize),y.itemSize,y.normalized);const S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((E,_)=>{const b=new E.array.constructor(E.count*E.itemSize);c[v][_]=new E.constructor(b,E.itemSize,E.normalized)}))}const d=t*.5,p=Math.log10(1/t),m=Math.pow(10,p),x=d*m;for(let M=0;M<r;M++){const w=n?n.getX(M):M;let v="";for(let y=0,S=a.length;y<S;y++){const E=a[y],_=s.getAttribute(E),b=_.itemSize;for(let A=0;A<b;A++)v+=`${Math.trunc(_[u[A]](w)*m+x)},`}if(v in e)h.push(e[v]);else{for(let y=0,S=a.length;y<S;y++){const E=a[y],_=s.getAttribute(E),b=s.morphAttributes[E],A=_.itemSize,C=l[E],P=c[E];for(let U=0;U<A;U++){const F=u[U],O=f[U];if(C[O](o,_[F](w)),b)for(let Y=0,q=b.length;Y<q;Y++)P[Y][O](o,b[Y][F](w))}}e[v]=o,h.push(o),o++}}const g=s.clone();for(const M in s.attributes){const w=l[M];if(g.setAttribute(M,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),M in c)for(let v=0;v<c[M].length;v++){const y=c[M][v];g.morphAttributes[M][v]=new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)}}return g.setIndex(h),g}function pi(s,t,e){let n=s*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Aw(s,t,e,n){const i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=m=>(m%e+e)%e,u=pi(h(i),h(r),n),f=pi(h(i+1),h(r),n),d=pi(h(i),h(r+1),n),p=pi(h(i+1),h(r+1),n);return u+(f-u)*l+(d-u)*c+(u-f-d+p)*l*c}function Mr(s,t,e,n,i){let r=0,o=.5,a=0,l=e;for(let c=0;c<n;c++)r+=o*Aw(s*l,t*l,l,i+c*17),a+=o,o*=.5,l*=2;return r/a}function vi(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Mi(s,t=!0,e=!0){const n=new ps(s);return t&&(n.colorSpace=Ne),e&&(n.wrapS=n.wrapT=Ua),n.anisotropy=8,n}function xd(s,t,e){const[i,r]=vi(512),[o,a]=vi(512),l=r.createImageData(512,512),c=a.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=u/512,d=h/512,p=Mr(f,d,3,4,e),m=Mr(f*.6,d*2.2,4,3,e+5),x=Math.max(0,Mr(f,d,5,4,e+9)-.52)*3.2,g=pi(u,h,e)-.5;let M=.82+.34*(p-.5)*2*.5+.12*(m-.5)+.05*g;M=Math.max(.5,M);const w=Math.min(1,x),v=(h*512+u)*4;for(let S=0;S<3;S++)l.data[v+S]=Math.max(0,Math.min(255,(s[S]*(1-w)+t[S]*w)*M));l.data[v+3]=255;const y=128+60*(p-.5)+30*(m-.5)+14*g;c.data[v]=c.data[v+1]=c.data[v+2]=Math.max(0,Math.min(255,y)),c.data[v+3]=255}return r.putImageData(l,0,0),a.putImageData(c,0,0),{map:Mi(i),bump:Mi(o,!1)}}function wh(s,t,e,n=1){const[o,a]=vi(1024,256),l=a.createImageData(1024,256);for(let h=0;h<256;h++)for(let u=0;u<1024;u++){const f=u/1024,d=h/256,p=Mr(f,d,2,3,e)*3+Mr(f,d,8,2,e+3)*.35,m=.5+.5*Math.sin((d*38+p*4.2)*Math.PI*2*.5),x=Math.pow(m,3),g=pi(Math.floor(u/2),h,e+7)>.93?.85:1,M=Mr(f*.5,d*6,4,3,e+11),w=.5+.5*Math.sin((d*210+p*9)*Math.PI);let v=.45*x*n+.3*M+.12*w*n+.08*(pi(u,h,e)-.5);v=Math.max(0,Math.min(1,v));const y=(h*1024+u)*4;for(let S=0;S<3;S++)l.data[y+S]=(s[S]*(1-v)+t[S]*v)*g;l.data[y+3]=255}a.putImageData(l,0,0);const c=Mi(o);return c.repeat.set(2,1/.25),c}const Co=16,x0=[["#c4492f","#f0e2c4","#1d1d1b"],["#2f4c6b","#e9d8a6","#c96f3b"],["#e7d9bd","#1e1e1e","#b8452f"],["#3e6250","#e8c766","#f2ede1"],["#1b1b1d","#d9a441","#efe8da"],["#8c3b4a","#f3dcc8","#233040"],["#d6b24c","#2b2b2b","#f4f0e6"],["#5d7f9b","#f2efe7","#1f2a36"],["#ece6d8","#c23b22","#2a2a2a"],["#31302e","#7fb0a6","#e9e1cf"],["#a8562f","#2e3b33","#efd9b4"],["#f1ece0","#3d5a80","#e07a3f"],["#20302a","#c9a227","#d9d2c3"],["#6b4f7a","#f0d7a1","#1c1c1c"],["#d9cfc1","#556b2f","#8b2e2e"],["#0f1a24","#e3e3e3","#d14b2b"]];function Rw(){const[t,e]=vi(1024,1024);for(let i=0;i<Co;i++){const r=i%4*256,o=Math.floor(i/4)*256,[a,l,c]=x0[i];e.save(),e.translate(r,o),e.beginPath(),e.rect(0,0,256,256),e.clip(),e.fillStyle=a,e.fillRect(0,0,256,256);const h=f=>pi(i,f,99);switch(i%8){case 0:e.fillStyle=l,e.beginPath(),e.arc(256*.5,256*.55,256*.3,0,Math.PI*2),e.fill();break;case 1:for(let f=0;f<7;f++)e.fillStyle=f%2?l:c,e.fillRect(0,256*(.12+f*.11),256,256*.05);break;case 2:e.fillStyle=l,e.fillRect(256*.12,256*.12,256*.5,256*.76),e.fillStyle=c,e.fillRect(256*.66,256*.58,256*.22,256*.3);break;case 3:for(let f=0;f<5;f++)for(let d=0;d<5;d++)e.fillStyle=(d+f)%2?l:c,e.beginPath(),e.arc(256*(.18+d*.16),256*(.18+f*.16),256*.05,0,7),e.fill();break;case 4:{const f=e.createLinearGradient(0,0,0,256);f.addColorStop(0,l),f.addColorStop(1,a),e.fillStyle=f,e.fillRect(0,0,256,256),e.fillStyle=c,e.fillRect(256*.1,256*.78,256*.8,256*.03);break}case 5:e.strokeStyle=l,e.lineWidth=256*.035;for(let f=1;f<6;f++)e.beginPath(),e.arc(256*.3,256*.7,256*.11*f,0,Math.PI*2),e.stroke();break;case 6:e.fillStyle=l,e.beginPath(),e.moveTo(0,256),e.lineTo(256,0),e.lineTo(256,256),e.fill(),e.fillStyle=c,e.fillRect(256*.1,256*.1,256*.18,256*.18);break;case 7:e.fillStyle=l,e.fillRect(256*.08,256*.08,256*.84,256*.84),e.fillStyle=c,e.beginPath(),e.arc(256*(.3+h(1)*.4),256*(.3+h(2)*.4),256*.16,0,7),e.fill();break}e.fillStyle=i%3?c:l,e.globalAlpha=.85;for(let f=0;f<3+i%4;f++)e.fillRect(256*.1+f*256*.07,256*.06,256*.05,256*.02);e.globalAlpha=1,i%3===1&&(e.strokeStyle="rgba(255,255,255,0.13)",e.lineWidth=256*.03,e.beginPath(),e.arc(256/2,256/2,256*.46,0,7),e.stroke());const u=e.createRadialGradient(256/2,256/2,256*.45,256/2,256/2,256*.75);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(40,30,20,0.25)"),e.fillStyle=u,e.fillRect(0,0,256,256),e.restore()}return Mi(t,!0,!1)}const Cw=s=>x0[s%Co][0];function Pw(s){const[e,n]=vi(1024),[i,r]=vi(1024),o=1024/2;n.fillStyle="#0b0b0c",n.fillRect(0,0,1024,1024);for(let h=o*.33;h<o*.985;h+=1.4){const u=Math.floor((h-o*.36)/(o*.12)),f=(h-o*.36)%(o*.12)<2.5&&h>o*.37;n.strokeStyle=f?"rgba(60,60,64,0.55)":`rgba(${18+u%2*4},${18+u%2*4},${20+u%2*4},0.9)`,n.lineWidth=.8,n.beginPath(),n.arc(o,o,h,0,Math.PI*2),n.stroke()}n.fillStyle=s,n.beginPath(),n.arc(o,o,o*.33,0,7),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=3,n.beginPath(),n.arc(o,o,o*.29,0,7),n.stroke(),n.fillStyle="rgba(20,20,20,0.7)";for(let h=0;h<4;h++)n.fillRect(o-o*.16,o-o*.18+h*o*.05,o*(.32-h*.05),o*.022);n.fillStyle="#d8d8d8",n.beginPath(),n.arc(o,o,o*.025,0,7),n.fill();const a=r.createImageData(1024,1024);for(let h=0;h<1024;h++)for(let u=0;u<1024;u++){const f=(u+.5-o)/o,d=(h+.5-o)/o,p=Math.hypot(f,d)||1,m=-d/p,x=-f/p,g=(h*1024+u)*4;a.data[g]=(m*.5+.5)*255,a.data[g+1]=(x*.5+.5)*255,a.data[g+2]=p>.34&&p<.985?255:0,a.data[g+3]=255}r.putImageData(a,0,0);const l=Mi(e,!0,!1),c=Mi(i,!1,!1);return{map:l,aniso:c}}function Lw(){const[e,n]=vi(256,160),i=n.createRadialGradient(256*.5,160*.9,10,256*.5,160*.7,256*.75);i.addColorStop(0,"#ffd89a"),i.addColorStop(.6,"#f0a64a"),i.addColorStop(1,"#9a5a1e"),n.fillStyle=i,n.fillRect(0,0,256,160);const r=256/2,o=160*1.05,a=160*.82;n.lineWidth=2,n.strokeStyle="#2a1a0c",n.beginPath(),n.arc(r,o,a,Math.PI*1.25,Math.PI*1.62),n.stroke(),n.strokeStyle="#b0261a",n.lineWidth=4,n.beginPath(),n.arc(r,o,a,Math.PI*1.62,Math.PI*1.75),n.stroke(),n.strokeStyle="#2a1a0c",n.lineWidth=1.6;for(let l=0;l<=12;l++){const c=Math.PI*(1.25+.5*(l/12)),h=l%3?7:13;n.strokeStyle=c>Math.PI*1.62?"#b0261a":"#2a1a0c",n.beginPath(),n.moveTo(r+Math.cos(c)*a,o+Math.sin(c)*a),n.lineTo(r+Math.cos(c)*(a+h),o+Math.sin(c)*(a+h)),n.stroke()}return n.fillStyle="#2a1a0c",n.font='600 22px "Inter Tight", sans-serif',n.textAlign="center",n.fillText("VU",r,160*.62),Mi(e,!0,!1)}function Iw(){const[e,n]=vi(1024,96),i=n.createLinearGradient(0,0,0,96);i.addColorStop(0,"#2a1d10"),i.addColorStop(.5,"#4a321a"),i.addColorStop(1,"#2a1d10"),n.fillStyle=i,n.fillRect(0,0,1024,96),n.fillStyle="#ffd59a",n.strokeStyle="#ffd59a",n.font='500 22px "Inter Tight", sans-serif',n.textAlign="center";for(let o=88;o<=108;o+=1){const a=60+(o-88)/20*904,l=o%4===0;n.globalAlpha=.9,n.lineWidth=l?2.2:1.2,n.beginPath(),n.moveTo(a,96*.62),n.lineTo(a,96*(l?.38:.48)),n.stroke(),l&&n.fillText(String(o),a,96*.3)}n.globalAlpha=.6,n.fillRect(40,96*.66,944,2),n.globalAlpha=1;const r=60+10/20*904;return n.fillStyle="#ff4a22",n.fillRect(r-2.5,6,5,84),Mi(e,!0,!1)}let da=null;function v0(){if(da)return da;const s=128,[t,e]=vi(s),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.12,"rgba(255,255,255,0.55)"),n.addColorStop(.35,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),da=Mi(t,!1,!1),da}function Dw(s){const[e,n]=vi(512),i=n.createImageData(512,512);for(let r=0;r<512;r++)for(let o=0;o<512;o++){const a=o-256,l=r-512/2,c=Math.round(Math.hypot(a,l)*2),h=200+40*(pi(c,0,5)-.5)+10*(pi(o,r,6)-.5),u=(r*512+o)*4;i.data[u]=i.data[u+1]=i.data[u+2]=h,i.data[u+3]=255}return n.putImageData(i,0,0),Mi(e,!1,!1)}const as={w:1.48,d:2.11},hi=as.w/2,kn=as.d/2,_s=.64,qr=.99,pa=.725,On=.8,Ia=.0235,or=52*Ia,vd=-or/2,Qi=.88,Md=1.04,yd=.985,mc=.6,Kn={z:1.5,w:.76,d:.36},fr={look:[0,.725,.96],pitch:-.58,near:.72,span:.64},Nw=[0,.9,-.1],_d=s=>[1,3,6,8,10].includes(s%12);let wd=null;function Uw(){return{ebony:new Mn({color:"#141414",roughness:.16,clearcoat:1,clearcoatRoughness:.06}),satin:new Mn({color:"#0b0b0b",roughness:.4,clearcoat:.3}),ivory:new Mn({color:"#f1eee6",roughness:.28,clearcoat:.4,clearcoatRoughness:.2}),sharp:new Mn({color:"#0d0d0d",roughness:.32,clearcoat:.4}),gold:new Ce({color:"#b98f34",metalness:.85,roughness:.36}),brass:new Ce({color:"#c9a24a",metalness:1,roughness:.25}),steel:new Ce({color:"#d4d4d2",metalness:1,roughness:.22}),copper:new Ce({color:"#b5713a",metalness:1,roughness:.32}),pin:new Ce({color:"#8a8a88",metalness:1,roughness:.3}),felt:new Ce({color:"#141414",roughness:.9}),redFelt:new Ce({color:"#5a1414",roughness:.95}),spruce:new Ce({map:wh([226,196,150],[196,160,112],31,.5),roughness:.6}),leather:new Mn({color:"#0e0e0e",roughness:.55,sheen:.4,sheenColor:new Rt("#555")}),paper:new Ce({map:kw(),roughness:.9})}}function uu(){return wd??(wd=Uw()),wd}function Je(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(wl),s}function cn(s,t,e,n){return s.position.set(t,e,n),s}const ws=(s,t,e,n)=>Je(new _t(new en(s,t,e),n));function zw(){const s=new So([[-hi,-.62],[-.735,-.78],[-.69,-.9],[-.6,-.99],[-.46,-1.045],[-.3,-kn],[-.16,-1.04],[-.02,-.99],[.12,-.9],[.25,-.77],[.35,-.6],[.43,-.4],[.5,-.18],[.58,.04],[.66,.24],[.715,.42],[.737,.58],[hi,.7]].map(([e,n])=>new I(e,0,n)),!1,"centripetal"),t=[[-hi,On]];for(const e of s.getSpacedPoints(110))t.push([e.x,e.z]);return t.push([hi,On]),t}function Sd(s,t){const e=s.length;let n=0;for(let r=0;r<e;r++){const o=s[r],a=s[(r+1)%e];n+=o[0]*a[1]-a[0]*o[1]}const i=n>0?1:-1;return s.map((r,o)=>{const a=s[(o-1+e)%e],l=s[(o+1)%e],c=[r[0]-a[0],r[1]-a[1]],h=[l[0]-r[0],l[1]-r[1]],u=Math.hypot(c[0],c[1])||1,f=Math.hypot(h[0],h[1])||1,d=[-c[1]/u*i,c[0]/u*i],p=[-h[1]/f*i,h[0]/f*i];let m=d[0]+p[0],x=d[1]+p[1];const g=Math.hypot(m,x)||1;m/=g,x/=g;const M=1/Math.max(.5,m*d[0]+x*d[1]);return[r[0]+m*t*M,r[1]+x*t*M]})}const Yr=s=>new Lo(s.map(([t,e])=>new mt(t,-e)));function $r(s,t,e,n=0){const i=new gl(s,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:24,steps:1});return i.rotateX(-Math.PI/2),i.translate(0,t+n,0),i}function Fw(s,t){let e=-kn,n=!1;for(let i=0;i<s.length;i++){const r=s[i],o=s[(i+1)%s.length];if((r[0]-t)*(o[0]-t)>0||r[0]===o[0])continue;const a=(t-r[0])/(o[0]-r[0]),l=r[1]+(o[1]-r[1])*a;l<.5&&(!n||l>e)&&(e=l,n=!0)}return e}function kw(){const s=document.createElement("canvas");s.width=512,s.height=360;const t=s.getContext("2d");t.fillStyle="#efe9da",t.fillRect(0,0,512,360),t.strokeStyle="rgba(40,36,30,0.85)",t.fillStyle="rgba(30,28,24,0.9)";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<6;r++){const o=40+r*52;t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(24,o+a*5),t.lineTo(488,o+a*5),t.stroke();for(let a=60;a<480;a+=14+n()*10){const l=o+Math.round(n()*12-2)*2.5;t.beginPath(),t.ellipse(a,l,3.4,2.5,-.4,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(a+3,l),t.lineTo(a+3,l-15),t.stroke()}for(let a=140;a<480;a+=116)t.beginPath(),t.moveTo(a,o),t.lineTo(a,o+20),t.stroke()}const i=new ps(s);return i.colorSpace=Ne,i.anisotropy=8,i}function Ow(){const s=uu(),t=new he,e=zw(),n=Sd(e,.035),i=Yr(e);i.holes.push(new vr(n.map(([V,L])=>new mt(V,-L)).reverse())),t.add(Je(new _t($r(i,_s,qr,.01),s.ebony))),t.add(Je(new _t($r(Yr(e),_s,_s+.03),s.ebony))),t.add(Je(new _t($r(Yr(n),.79,.8),s.spruce)));const r=Sd(e,.065),o=Yr(r.filter(([,V])=>V<.74).concat([[r.at(-1)[0],.74],[r[0][0],.74]]));for(const[V,L,G,N]of[[-.36,-.68,.15,.13],[-.02,-.62,.13,.11],[-.38,-.24,.17,.12],[.16,-.26,.12,.13],[-.1,.06,.1,.07]]){const z=new vr;z.absellipse(V,-L,G,N,0,Math.PI*2,!0),o.holes.push(z)}for(let V=0;V<9;V++){const L=new vr;L.absarc(-.52+V*.13,-.3,.022,0,Math.PI*2,!0),o.holes.push(L)}t.add(Je(new _t($r(o,.875,.895,.003),s.gold)));const a=[],l=[],c=100,h=-.64,u=.66,f=.6,d=1024,p=Math.round(d*(On+kn)/as.w),m=document.createElement("canvas");m.width=d,m.height=p;const x=m.getContext("2d"),g=V=>(V+hi)/as.w*d,M=V=>(V+kn)/(On+kn)*p;x.lineCap="round";for(const V of[0,1])for(let L=0;L<c;L++){const G=L/(c-1),N=h+(u-h)*G,z=L<22;if(V===0!=!z)continue;const W=z?N+.22+.1*(1-L/22):N,tt=Fw(n,W)+.045;x.strokeStyle=z?"#c07a42":"#e6e6e2",x.lineWidth=z?2.4+1.6*(1-L/22):1.1+.5*(1-G),x.beginPath(),x.moveTo(g(N),M(f)),x.lineTo(g(W),M(tt)),x.stroke();for(const st of[.03,.075])a.push(new Kt().makeTranslation(N+(st>.05?.004:-.004),.915,f+st));G<.78&&l.push(new Kt().makeTranslation(N,.945,f-.13-(z?.05:0)))}const w=new ps(m);w.colorSpace=Ne,w.anisotropy=8;const v=new _t(new Ue(as.w,On+kn).rotateX(-Math.PI/2),new Ce({map:w,transparent:!0,metalness:.9,roughness:.28,depthWrite:!1}));v.position.set(0,.912,(On-kn)/2),v.receiveShadow=!0,v.renderOrder=1,t.add(v);const y=new xr(new Xe(.0032,.0032,.03,8),s.pin,a.length);a.forEach((V,L)=>y.setMatrixAt(L,V));const S=new xr(new en(.011,.04,.05),s.felt,l.length);l.forEach((V,L)=>S.setMatrixAt(L,V));for(const V of[y,S])V.castShadow=!0,V.receiveShadow=!0,V.layers.enable(wl),t.add(V);t.add(cn(ws(or+.02,.006,.02,s.redFelt),0,.9,.7));const E=e.filter(([,V])=>V<.62),_=Yr([[E[0][0],.62],...E,[E.at(-1)[0],.62]].map(([V,L])=>[V+hi,L])),b=Je(new _t($r(_,0,.022,.003),s.ebony)),A=new he;A.position.set(-hi,qr,0),A.rotation.z=mc,A.add(b),t.add(A);const C=new I(.5,qr,-.1),P=1.18,U=new I(-hi+P*Math.cos(mc),qr+P*Math.sin(mc),-.1),F=Je(new _t(new Xe(.009,.009,C.distanceTo(U),10),s.ebony));F.position.copy(C).add(U).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new I(0,1,0),U.clone().sub(C).normalize()),t.add(F);const O=new he;O.add(cn(ws(.8,.29,.014,s.ebony),0,.145,0)),O.add(cn(ws(.8,.02,.05,s.ebony),0,.01,.02));const Y=Je(new _t(new Ue(.42,.29),s.paper));O.add(cn(Y,0,.165,.008)),O.rotation.x=-.26,O.position.set(0,qr,.7),t.add(O),t.add(cn(ws(as.w,.06,kn-On,s.ebony),0,_s+.03,(kn+On)/2));for(const V of[-1,1]){const L=Je(new _t(new Yn(hi-or/2,.17,kn-On,3,.012),s.ebony));t.add(cn(L,V*(hi+or/2)/2,_s+.085,(kn+On)/2))}t.add(cn(ws(or,.1,Qi-On+.01,s.ebony),0,pa+.04,(Qi+On)/2)),t.add(cn(ws(or,.035,.015,s.ebony),0,pa-.03,kn-.0075));const q=new Map,et=new Yn(Ia-.0011,.022,Md-Qi,2,.0015).translate(0,-.011,(Md-Qi)/2),X=new Yn(.0125,.017,yd-Qi-.01,2,.002).translate(0,.0045,(yd-Qi-.01)/2+.01);let Z=0;for(let V=21;V<=108;V++){let L;_d(V)?(L=Je(new _t(X,s.sharp)),L.position.set(vd+Z*Ia,pa,Qi)):(L=Je(new _t(et,s.ivory)),L.position.set(vd+(Z+.5)*Ia,pa,Qi),Z++),L.userData.key=V,q.set(V,L),t.add(L)}const it=new xl([[.03,0],[.036,.05],[.038,.07],[.042,.25],[.05,.46],[.056,.56],[.068,.585],[.068,.6]].map(([V,L])=>new mt(V,L)),28);for(const[V,L]of[[-.62,.9],[.62,.9],[-.42,-.84]])t.add(cn(Je(new _t(it,s.ebony)),V,.045,L)),t.add(cn(Je(new _t(new Xe(.022,.022,.03,16).rotateZ(Math.PI/2),s.brass)),V,.022,L));for(const V of[-1,1])t.add(cn(ws(.03,_s-.14,.03,s.ebony),V*.07,.14+(_s-.14)/2,.76));t.add(cn(Je(new _t(new Yn(.34,.09,.13,2,.01),s.ebony)),0,.09,.77));for(const V of[-.07,0,.07]){const L=Je(new _t(new Yn(.026,.008,.13,2,.003),s.brass));L.rotation.x=.12,t.add(cn(L,V,.07,.89))}const dt=new he;for(const[V,L]of[[-.33,-.14],[.33,-.14],[-.33,.14],[.33,.14]])dt.add(cn(Je(new _t(new Xe(.022,.016,.45,14),s.ebony)),V,.225,L));dt.add(cn(Je(new _t(new Yn(Kn.w,.07,Kn.d,2,.008),s.ebony)),0,.46,0)),dt.add(cn(Je(new _t(new Yn(Kn.w-.02,.045,Kn.d-.02,4,.018),s.leather)),0,.51,0)),dt.position.z=Kn.z,t.add(dt);const H=new Map;return{group:t,keys:q,press(V,L){q.has(V)&&H.set(V,L?1:0)},update(V){for(const[L,G]of H){const N=q.get(L),z=G?_d(L)?.07:.06:0,W=G?60:22;N.rotation.x+=(z-N.rotation.x)*(1-Math.exp(-W*V)),!G&&Math.abs(N.rotation.x)<1e-4&&(N.rotation.x=0,H.delete(L))}}}}const hs=1.62,Bw=12,Hw=6.5,Vw=2,Gw=1.7,si=1.15,ma=.0022,Ww=2.6,Xw=4.6,vn=.3;class qw{constructor(t){R(this,"pos",new I(6.6,hs,10.2));R(this,"vel",new I);R(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));R(this,"pitch",.05);R(this,"yawVel",0);R(this,"pitchVel",0);R(this,"keys",new Set);R(this,"taps",new Map);R(this,"frozen",!1);R(this,"glide",new mt);R(this,"spin",0);R(this,"goal",null);R(this,"moved",!1);R(this,"seated",!1);R(this,"onSeatedMove",()=>{});R(this,"solids",[]);R(this,"obstacles",[]);R(this,"boxes",[]);R(this,"world",{x0:-22,x1:39,z0:-38,z1:30});R(this,"mouseLooks",()=>!0);this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||!this.mouseLooks()||(this.yaw-=e.movementX*ma,this.pitch=Math.max(-si,Math.min(si,this.pitch-e.movementY*ma)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}edgeTurn(t,e){this.yaw-=t*ma,this.pitch=Math.max(-si,Math.min(si,this.pitch-e*ma)),this.moved=!0}drag(t,e){if(this.seated){this.onSeatedMove();return}this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-si,Math.min(si,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Vw-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*Gw-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>si||this.pitch<-si)&&(this.pitch=Math.max(-si,Math.min(si,this.pitch)),this.pitchVel=0);let r=0,o=0;this.seated||(e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1)),(r||o||n||i)&&(this.moved=!0);let a=0,l=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?Xw:Ww,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,l=(-d*r-f*o)/u*h}const c=1-Math.exp(-(r||o?Bw:Hw)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const m=f/p,x=d/p,g=this.vel.x*m+this.vel.z*x;g<0&&(this.vel.x-=m*g,this.vel.z-=x*g)}}!this.frozen&&!this.seated&&this.coast(t),this.seated&&(this.vel.set(0,0,0),this.glide.set(0,0),this.goal=null)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let n=0;n<2;n++)for(const i of this.solids){const r=Math.max(i.x0,Math.min(t.x,i.x1)),o=Math.max(i.z0,Math.min(t.z,i.z1)),a=t.x-r,l=t.z-o,c=a*a+l*l;if(!(c>=vn*vn))if(c>1e-12){const h=Math.sqrt(c);t.x+=a/h*(vn-h),t.z+=l/h*(vn-h)}else{const h=[t.x-i.x0+vn,i.x1-t.x+vn,t.z-i.z0+vn,i.z1-t.z+vn],u=Math.min(...h);u===h[0]?t.x=i.x0-vn:u===h[1]?t.x=i.x1+vn:u===h[2]?t.z=i.z0-vn:t.z=i.z1+vn}}for(const n of this.obstacles){const i=t.x-n.x,r=t.z-n.z,o=Math.hypot(i,r),a=vn*.7+n.r;o<a&&o>1e-6&&(t.x=n.x+i/o*a,t.z=n.z+r/o*a)}const e=vn*.75;for(const n of this.boxes){const i=t.x-n.x,r=t.z-n.z,o=i*n.c-r*n.s,a=i*n.s+r*n.c,l=Math.max(-n.hw,Math.min(n.hw,o)),c=Math.max(-n.hd,Math.min(n.hd,a));let h=o-l,u=a-c;const f=Math.hypot(h,u);if(f>=e)continue;let d,p;if(f>1e-6)h/=f,u/=f,d=l+h*e,p=c+u*e;else{const m=[o+n.hw,n.hw-o,a+n.hd,n.hd-a],x=Math.min(...m);d=x===m[0]?-n.hw-e:x===m[1]?n.hw+e:o,p=x===m[2]?-n.hd-e:x===m[3]?n.hd+e:a}t.x=n.x+d*n.c+p*n.s,t.z=n.z-d*n.s+p*n.c}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const Yw={couch:{name:"Couch",w:2.3,d:.98},table:{name:"Coffee table",w:1.2,d:.6},cabinet:{name:"Stereo cabinet",w:.62,d:.46},speakerL:{name:"Left speaker",w:.44,d:.5},speakerR:{name:"Right speaker",w:.44,d:.5},piano:{name:"Grand piano",w:as.w,d:as.d}},ga={couch:.38,table:.8,stereo:.085,piano:.5},$w=.0254;let Hi=null;function M0(){const s=xd([36,64,56],[90,106,100],3),t=xd([42,74,60],[84,102,92],7),e=u=>new Mn({color:16777215,map:u.map,bumpMap:u.bump,bumpScale:.35,roughness:.93,sheen:1,sheenRoughness:.4,sheenColor:new Rt("#9fbdb4"),vertexColors:!0}),n=wh([118,80,50],[74,47,29],11,.55),i=wh([214,200,176],[184,166,138],21,.4),r=Rw(),o=Array.from({length:Co},(u,f)=>{const d=r.clone();return d.repeat.set(.25,.25),d.offset.set(f%4*.25,1-(Math.floor(f/4)+1)*.25),new Ce({map:d,roughness:.72})}),a=Array.from({length:Co},(u,f)=>new Ce({color:new Rt(Cw(f)).multiplyScalar(.8),roughness:.75})),l=Pw("#c8692c"),c=Dw(),h={side:Zn};return{velvet:e(s),pillow:e(t),walnut:new Mn({map:n,roughness:.48,clearcoat:.3,clearcoatRoughness:.38}),birch:new Ce({map:i,roughness:.66}),lacquer:new Mn({color:"#ecebe6",roughness:.3,clearcoat:.55,clearcoatRoughness:.16}),whiteMatte:new Mn({color:"#e8e6df",roughness:.48,clearcoat:.2,clearcoatRoughness:.3}),shadowGap:new Ce({color:"#141414",roughness:.8}),steel:new Ce({color:"#161616",metalness:.85,roughness:.4}),alu:new Ce({color:"#cfcfcf",metalness:1,roughness:.3,roughnessMap:c}),chrome:new Ce({color:"#e6e6e6",metalness:1,roughness:.1}),rubber:new Ce({color:"#141414",roughness:.36,...h}),paper:new Ce({color:"#3c3c3b",roughness:.62,...h}),cap:new Ce({color:"#161616",roughness:.18,...h}),trim:new Ce({color:"#1f1f21",metalness:.5,roughness:.42}),ring:new Ce({color:"#a7a7a5",metalness:.25,roughness:.38,...h}),silk:new Mn({color:"#2b2b2b",roughness:.7,sheen:.6,sheenColor:new Rt("#777"),...h}),faceplate:new Ce({color:"#232325",metalness:.3,roughness:.5,...h}),hole:new Ye({color:"#050505"}),cord:new Ce({color:"#0e0e0e",roughness:.45}),glass:new Mn({color:"#0b0b0d",roughness:.06,clearcoat:1,clearcoatRoughness:.05}),smoked:new Mn({color:"#0b0b0d",roughness:.05,transparent:!0,opacity:.45,depthWrite:!1}),record:new Mn({map:l.map,roughness:.3,anisotropy:.85,anisotropyMap:l.aniso,clearcoat:.3,clearcoatRoughness:.25}),vinylEdge:new Ce({color:"#0a0a0a",roughness:.3}),covers:o,spines:a,vu:new Ye({map:Lw(),color:new Rt(.62,.6,.58),toneMapped:!1}),dial:new Ye({map:Iw(),color:new Rt(.55,.55,.55),toneMapped:!1}),invisible:new Ye({visible:!1})}}function Kw(s){const t=[...il.values()].flatMap(e=>[e.cover,e.spine]);for(const e of Object.values(s))for(const n of Array.isArray(e)?e:[e])n.isMeshStandardMaterial&&t.push(n);return t}function ue(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(wl),s}function Yt(s,t,e,n){return s.position.set(t,e,n),s}function Ui(s,t,e,n){return ue(new _t(new en(s,t,e),n))}function fu(s,t=!1){s.deleteAttribute("normal"),s.deleteAttribute("uv");const e=t?s:hu(s,1e-5);return e.computeVertexNormals(),Zw(e),e}function Zw(s){const t=s.attributes.position,e=s.attributes.normal,n=new Float32Array(t.count*2);for(let i=0;i<t.count;i++){const r=Math.abs(e.getX(i)),o=Math.abs(e.getY(i)),a=Math.abs(e.getZ(i)),[l,c]=o>=r&&o>=a?[t.getX(i),t.getZ(i)]:r>=a?[t.getZ(i),t.getY(i)]:[t.getX(i),t.getY(i)];n[i*2]=l,n[i*2+1]=c}s.setAttribute("uv",new xn(n,2))}function y0(s,t,e=.5){const n=[],i=s.length;for(let r=0;r<i;r++){const o=s[(r-1+i)%i],a=s[r],l=s[(r+1)%i],c=o[0]-a[0],h=o[1]-a[1],u=l[0]-a[0],f=l[1]-a[1],d=Math.hypot(c,h),p=Math.hypot(u,f),m=(c*u+h*f)/(d*p),x=Math.PI-Math.acos(Math.max(-1,Math.min(1,m)));if(x<e||d<1e-6||p<1e-6){n.push(a);continue}const g=Math.min(t/Math.tan((Math.PI-x)/2),d*.45,p*.45),M=[a[0]+c/d*g,a[1]+h/d*g],w=[a[0]+u/p*g,a[1]+f/p*g];for(let v=0;v<=6;v++){const y=v/6,S=1-y;n.push([S*S*M[0]+2*S*y*a[0]+y*y*w[0],S*S*M[1]+2*S*y*a[1]+y*y*w[1]])}}return n}function du(s,t,e,n,i=4){const r=new Lo(s.map(([a,l])=>new mt(a,-l))),o=new gl(r,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:i,curveSegments:8,steps:1});return o.rotateX(-Math.PI/2),o.translate(0,t+n,0),o}function ls(s,t=64){const e=new xl(s.map(([n,i])=>new mt(Math.max(n,0),i)),t);return e.rotateX(Math.PI/2),e}const nl=(s,t,e,n,i,r)=>Array.from({length:r+1},(o,a)=>{const l=n+(i-n)*a/r;return[s+e*Math.cos(l),t+e*Math.sin(l)]}),pu={red:new Rt(1,.16,.06),green:new Rt(.25,1,.35),amber:new Rt(1,.62,.18),warm:new Rt(1,.72,.38)};function fs(s,t,e,n,i,r=.0022,o=1){const a=pu[i],l=new _t(new Oi(r,16),new Ye({color:a.clone().multiplyScalar(1.4*o).addScalar(.15*o),toneMapped:!1}));Yt(l,t,e,n+6e-4);const c=new Xh(new ml({map:v0(),color:a.clone().multiplyScalar(.55*o),blending:Na,depthWrite:!1,transparent:!0,toneMapped:!1}));return c.scale.setScalar(r*11),Yt(c,t,e,n+.004),s.add(l,c),h=>{l.material.color.copy(a).multiplyScalar(1.4*h).addScalar(.15*h),c.material.color.copy(a).multiplyScalar(.55*h)}}function _0(s,t,e,n,i,r,o=.22){const a=new Xh(new ml({map:v0(),color:pu[r].clone().multiplyScalar(o),blending:Na,depthWrite:!1,transparent:!0,toneMapped:!1}));a.scale.set(i*2.2,i*1.5,1),Yt(a,t,e,n+.01),s.add(a)}const ee={a:1.15,zJ:-.03,zA:.4,zF:.49,T:.034,n:3,y0:.17,armH:.6,backH:.8,endR:.07,base:.3,seat:.455},Jw=ee.zJ+.49;function Qw(s){const t=[];for(let h=0;h<=40;h++)t.push([-1.15,ee.zA-(ee.zA-ee.zJ)*h/40]);const e=2400;for(let h=1;h<e;h++){const u=Math.PI-Math.PI*h/e,f=Math.cos(u),d=Math.sin(u);t.push([ee.a*Math.sign(f)*Math.pow(Math.abs(f),2/ee.n),ee.zJ-Jw*Math.pow(Math.abs(d),2/ee.n)])}for(let h=0;h<=40;h++)t.push([ee.a,ee.zJ+(ee.zA-ee.zJ)*h/40]);const n=[0];for(let h=1;h<t.length;h++)n.push(n[h-1]+Math.hypot(t[h][0]-t[h-1][0],t[h][1]-t[h-1][1]));const i=n[n.length-1],r=Math.ceil(i/s),o=[],a=[];let l=0;for(let h=0;h<=r;h++){const u=i*h/r;for(;l<t.length-2&&n[l+1]<u;)l++;const f=(u-n[l])/Math.max(1e-9,n[l+1]-n[l]);o.push([t[l][0]+(t[l+1][0]-t[l][0])*f,t[l][1]+(t[l+1][1]-t[l][1])*f]),a.push(u)}const c=o.map((h,u)=>{const f=o[Math.max(0,u-1)],d=o[Math.min(o.length-1,u+1)],p=d[0]-f[0],m=d[1]-f[1],x=Math.hypot(p,m);return[m/x,-p/x]});return{p:o,n:c,s:a}}const mu=(s,t)=>s.p.map(([e,n],i)=>[e-s.n[i][0]*t,n-s.n[i][1]*t]);function jw(s){const t=ee.T,e=t/2,n=10,i=s.p.length-1,r=s.s[i],o=M=>{const w=s.p[M][1],v=Math.min(s.s[M],r-s.s[M]);let y=ee.armH+(ee.backH-ee.armH)*(1-_e.smoothstep(w,-.25,.3));return v<ee.endR&&(y-=ee.endR-Math.sqrt(Math.max(0,ee.endR*ee.endR-(ee.endR-v)**2))),Math.max(y,ee.y0+.12)},a=[],l=[],c=[],h=n+3;for(let M=0;M<=i;M++){const[w,v]=s.p[M],[y,S]=s.n[M],E=w-y*e,_=v-S*e,b=o(M),A=[[E+y*e,ee.y0,_+S*e]];for(let P=0;P<=n;P++){const U=Math.PI*P/n;A.push([E+y*e*Math.cos(U),b-e+e*Math.sin(U),_+S*e*Math.cos(U)])}A.push([E-y*e,ee.y0,_-S*e]);let C=0;A.forEach((P,U)=>{U&&(C+=Math.hypot(P[0]-A[U-1][0],P[1]-A[U-1][1],P[2]-A[U-1][2])),a.push(...P),l.push(s.s[M],C)})}for(let M=0;M<i;M++)for(let w=0;w<h-1;w++){const v=M*h+w,y=(M+1)*h+w,S=y+1,E=v+1;c.push(v,S,y,v,E,S)}const u=new we;u.setAttribute("position",new kt(a,3)),u.setAttribute("uv",new kt(l,2)),u.setIndex(c),u.computeVertexNormals();const f=[],d=[],p=[],m=(M,w)=>{const v=f.length/3,y=M.reduce((S,E)=>[S[0]+E[0]/M.length,S[1]+E[1]/M.length,S[2]+E[2]/M.length],[0,0,0]);f.push(...y),p.push(y[0]+y[2],y[1]);for(const S of M)f.push(S[0],S[1],S[2]),p.push(S[0]+S[2],S[1]);for(let S=0;S<M.length;S++){const E=v+1+S,_=v+1+(S+1)%M.length,b=new I(...M[S]),A=new I(...M[(S+1)%M.length]),C=new I(...y);new I().crossVectors(b.clone().sub(C),A.clone().sub(C)).dot(new I(...w))>=0?d.push(v,E,_):d.push(v,_,E)}};for(const[M,w]of[[0,-1],[i,1]]){const v=s.p[Math.max(0,M-1)],y=s.p[Math.min(i,M+1)],S=Math.hypot(y[0]-v[0],y[1]-v[1]),E=[];for(let _=0;_<h;_++)E.push([a[(M*h+_)*3],a[(M*h+_)*3+1],a[(M*h+_)*3+2]]);m(E,[(y[0]-v[0])/S*w,0,(y[1]-v[1])/S*w])}for(let M=0;M<i;M++){const w=(y,S)=>[a[(y*h+S)*3],a[(y*h+S)*3+1],a[(y*h+S)*3+2]],v=f.length/3;for(const y of[w(M,0),w(M+1,0),w(M+1,h-1),w(M,h-1)])f.push(y[0],y[1],y[2]),p.push(y[0],y[2]);d.push(v,v+1,v+2,v,v+2,v+3)}const x=new we;x.setAttribute("position",new kt(f,3)),x.setAttribute("uv",new kt(p,2)),x.setIndex(d),x.computeVertexNormals();const g=x.attributes.normal;for(let M=0;M<g.count;M++)if(Math.abs(g.getY(M))>.9&&g.getY(M)>0){x.index.array.reverse(),x.computeVertexNormals();break}return[u,x]}const tS=[90/36,106/64,100/56];function Sl(s,t){const e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){const r=Math.max(0,Math.min(1,t(e.getX(i),e.getY(i),e.getZ(i))))*.55;for(let o=0;o<3;o++)n[i*3+o]=1+r*(tS[o]-1)}s.setAttribute("color",new xn(n,3))}const ss=(s,t)=>Math.exp(-(s*s)/(t*t));function eS(s,t){const i=t*.038000000000000006,r=mu(s,ee.T+.003+.034),o=ee.zF+.015-.034,a=t<0?r.map((f,d)=>d):r.map((f,d)=>r.length-1-d),l=[[r[a[0]][0],o]];for(const f of a){const[d,p]=r[f];if(t*d<=t*i){l.push([i,p]);break}p<=o&&l.push([d,p])}l.push([i,o]);const c=fu(du(y0(l,.05),ee.base,ee.seat,.034,5)),h=c.attributes.position,u=t*.55;for(let f=0;f<h.count;f++){const d=h.getX(f),p=h.getY(f),m=h.getZ(f),x=_e.smoothstep(p,ee.seat-.06,ee.seat),g=Math.max(0,1-((d-u)/.6)**2)*Math.max(0,1-((m-.05)/.5)**2),M=ss(d-u,.22)*ss(m-.18,.18);h.setY(f,p+x*(.016*g-.012*M))}return c.computeVertexNormals(),Sl(c,(f,d,p)=>(d>ee.seat-.05?.8*ss(f-u,.25)*ss(p-.2,.2):0)+(p>ee.zF-.04?.7*_e.smoothstep(d,ee.base+.04,ee.seat-.03)*ss(f-u,.4):0)),c}function nS(s){const e=mu(s,ee.T+.002+.014),n=ee.zF-.014,i=[[e[0][0],n],...e.filter(([,o])=>o<=n),[e[e.length-1][0],n]],r=fu(du(y0(i,.03),ee.y0,ee.base+.01,.014,3));return Sl(r,(o,a,l)=>l>ee.zF-.03&&a<ee.y0+.04?.6:0),r}function iS(s,t){const e=mu(s,ee.T+.002),n=e.reduce((P,U,F)=>Math.abs(U[0])<Math.abs(e[P][0])?F:P,0),i=[];if(t<0)for(let P=n;P>=0&&(i.push(P),!(e[P][1]>ee.zJ+.1&&e[P][0]<0));P--);else for(let P=n;P<e.length&&(i.push(P),!(e[P][1]>ee.zJ+.1&&e[P][0]>0));P++);const r=i.filter(P=>t*e[P][0]>.006),o=ee.seat-.03,a=.77,l=(a-o)/2,c=(a+o)/2,h=.2,u=.115,f=36,d=.1;let p=0;const m=[0];for(let P=1;P<r.length;P++)p+=Math.hypot(e[r[P]][0]-e[r[P-1]][0],e[r[P]][1]-e[r[P-1]][1]),m.push(p);const x=[],g=[],M=[];r.forEach((P,U)=>{const[F,O]=e[P],[Y,q]=s.n[P],et=Math.min(m[U],p-m[U]),X=et>=d?1:Math.sqrt(Math.max(0,1-(1-et/d)**2));for(let Z=0;Z<f;Z++){const it=Z/f*Math.PI*2,dt=Math.cos(it),H=Math.sin(it),V=Math.sign(dt)*Math.pow(Math.abs(dt),.5),L=Math.sign(H)*Math.pow(Math.abs(H),.5),G=c+L*l,N=(G-o)/(a-o),z=(h+(u-h)*N)/2;let W=z+V*z+(V>0?V*.022*(1-L*L):0);const tt=.08,st=c+(G-c)*X;W=tt+(W-tt)*X,x.push(F-Y*W,st,O-q*W),g.push(m[U],Z/f*.9)}});for(let P=0;P<r.length-1;P++)for(let U=0;U<f;U++){const F=P*f+U,O=(P+1)*f+U,Y=(P+1)*f+(U+1)%f,q=P*f+(U+1)%f;t<0?M.push(F,O,Y,F,Y,q):M.push(F,Y,O,F,q,Y)}const w=new we;w.setAttribute("position",new kt(x,3)),w.setAttribute("uv",new kt(g,2)),w.setIndex(M);const v=hu(w,1e-6);v.computeVertexNormals();const y=Math.floor(r.length/2),[S,E]=s.n[r[y]],_=v.attributes.normal,b=new I(x[y*f*3],x[y*f*3+1],x[y*f*3+2]);let A=0,C=1/0;for(let P=0;P<v.attributes.position.count;P++){const U=b.distanceToSquared(new I().fromBufferAttribute(v.attributes.position,P));U<C&&(C=U,A=P)}if(_.getX(A)*-S+_.getZ(A)*-E<0){const P=v.index.array;for(let U=0;U<P.length;U+=3){const F=P[U+1];P[U+1]=P[U+2],P[U+2]=F}v.index.needsUpdate=!0,v.computeVertexNormals()}return Sl(v,(P,U,F)=>.6*ss(P-t*.5,.3)*ss(U-.62,.1)*(F>-.35?1:.5)),v}function sS(s,t,e){const i=[],r=[];for(const h of[1,-1]){const u=i.length/3;for(let f=0;f<=22;f++)for(let d=0;d<=22;d++){const p=-1+2*d/22,m=-1+2*f/22,x=p*s/2*(1-.07*(1-m*m)),g=m*t/2*(1-.07*(1-p*p)),M=e/2*Math.pow(Math.max(0,(1-p**4)*(1-m**4)),.55)*h;i.push(x,g,M)}for(let f=0;f<22;f++)for(let d=0;d<22;d++){const p=u+f*23+d,m=p+1,x=p+22+2,g=p+22+1;h>0?r.push(p,m,x,p,x,g):r.push(p,x,m,p,g,x)}}const o=new we;o.setAttribute("position",new kt(i,3)),o.setIndex(r);const a=hu(o,1e-6);a.computeVertexNormals();const l=a.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++)c[h*2]=l.getX(h)+(l.getZ(h)>0?0:.5),c[h*2+1]=l.getY(h);return a.setAttribute("uv",new xn(c,2)),Sl(a,(h,u)=>.35*ss(Math.hypot(h,u),.15)),a}function rS(s){const t=new he,e=Qw(.012),[n,i]=jw(e);t.add(ue(new _t(n,s.walnut)),ue(new _t(i,s.walnut))),t.add(ue(new _t(nS(e),s.velvet)));for(const o of[-1,1]){t.add(ue(new _t(eS(e,o),s.velvet))),t.add(ue(new _t(iS(e,o),s.velvet)));const a=ue(new _t(sS(.44,.44,.15),s.pillow));a.rotation.set(-.38,o*-.62,o*-.1,"YXZ"),Yt(a,o*.76,.68,-.12),t.add(a)}const r=new Xe(.021,.0125,.18,20).translate(0,-.09,0);for(const[o,a]of[[-.98,.36],[.98,.36],[-.9,-.3],[.9,-.3]]){const l=ue(new _t(r,s.walnut));l.rotation.set(a>0?-.09:.09,0,o<0?-.12:.12),Yt(l,o,.178,a),t.add(l)}return t}const Qn=.4;function oS(s,t,e){const n=t*.028,i=e*.022,r=Qn-.038,o=new Jh,a=new I(-.05,r,0),l=new I(n-.011,.028,i),c=new I(n+.011,.028,i),h=new I(.05,r,0);o.add(new bo(a,l)),o.add(new Rp(l,new I(n-.009,.004,i),new I(n+.009,.004,i),c)),o.add(new bo(c,h));const u=new he;return u.add(ue(new _t(new Ar(o,80,.0055,10),s.steel))),u.add(Yt(Ui(.13,.004,.055,s.steel),0,r+.001,0)),u}function aS(s){const t=new he,e=.06,n=.6,i=.3,r=[];for(const[a,l,c]of[[n-e,i-e,0],[-n+e,i-e,Math.PI/2],[-n+e,-i+e,Math.PI],[n-e,-i+e,Math.PI*1.5]])r.push(...nl(a,l,e,c,c+Math.PI/2,10));const o=fu(du(r,Qn-.035,Qn,.007,3));t.add(ue(new _t(o,s.walnut)));for(const[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(Yt(oS(s,a,l),a*(n-.11),0,l*(i-.075)));return t.add(Yt(hS(s),lS,Qn,-.01)),t.add(Yt(pS(s),cS,Qn,-.02)),t}const lS=-.2,cS=.24,bd=[-.2+.12,Qn+.035,-.01-.172];let Sh=null;function hS(s){const t=new he;for(const[M,w]of[[-.19,-.14],[.19,-.14],[-.19,.14],[.19,.14]])t.add(Yt(ue(new _t(new Xe(.016,.017,.012,20),s.rubber)),M,.006,w));const e=.012+.075;t.add(Yt(ue(new _t(new Yn(.44,.075,.34,3,.008),s.lacquer)),0,.012+.0375,0));const n=-.055,i=e+.003,r=new he;r.position.set(n,0,0),r.add(Yt(ue(new _t(new Xe(.15,.15,.022,96),s.alu)),0,i+.011,0));const o=[s.vinylEdge,s.record,s.vinylEdge],a=ue(new _t(new Xe(.1515,.1515,.0018,128),o));r.add(Yt(a,0,i+.022+9e-4,0)),r.add(Yt(ue(new _t(new Xe(.0036,.0036,.016,16),s.chrome)),0,i+.024+.008,0)),t.add(r);const l=.158,c=-.1,h=e+.046;t.add(Yt(ue(new _t(new Xe(.024,.026,.03,32),s.alu)),l,e+.015,c));const u=new he;u.position.set(l,0,c),u.add(Yt(ue(new _t(new Xe(.009,.011,.018,20),s.rubber)),0,e+.037,0));const f=new So([new I(0,h,-.01),new I(.006,h-.002,.07),new I(.012,h-.004,.15),new I(-.004,h-.007,.215)]);u.add(ue(new _t(new Ar(f,40,.0042,10),s.chrome)));const d=Yt(Ui(.018,.006,.042,s.rubber),-.008,h-.012,.232);d.rotation.y=.25,u.add(d);const p=ue(new _t(new Xe(.017,.017,.032,28),s.alu));p.rotation.x=Math.PI/2,u.add(Yt(p,0,h,-.05)),t.add(u),t.add(Yt(ue(new _t(new Xe(.004,.004,.034,12),s.chrome)),l+.024,e+.017,c+.19)),t.add(Yt(ue(new _t(new Xe(.014,.015,.012,32),s.alu)),-.175,e+.006,.13)),t.add(Yt(Ui(.022,.006,.012,s.whiteMatte),-.125,e+.003,.138)),t.traverse(M=>{M.userData.deck=!0});const m=new mt(-.012,.25),x=new mt(n-l,-c);return Sh={spin:r,arm:u,record:a,armAt:M=>{let w=-1.2,v=0;for(let y=0;y<40;y++){const S=(w+v)/2,E=Math.cos(S),_=Math.sin(S),b=m.x*E+m.y*_,A=-m.x*_+m.y*E;Math.hypot(b-x.x,A-x.y)>M?v=S:w=S}return(w+v)/2},restRecord:o},t}const Ed=new Map;function bh(s){const t=`${s.id}|${s.v??0}`;let e=Ed.get(t);if(e)return e;const n=Hi,i=n.record.map.image,r=document.createElement("canvas");r.width=i.width,r.height=i.height;const o=r.getContext("2d");o.drawImage(i,0,0);const a=new ps(r);a.colorSpace=Ne,a.anisotropy=8;const l=r.width/2;if(o.fillStyle=s.tint??"#c8692c",o.beginPath(),o.arc(l,l,l*.33,0,Math.PI*2),o.fill(),s.cover){const h=new Image;h.onload=()=>{o.save(),o.beginPath(),o.arc(l,l,l*.33,0,Math.PI*2),o.clip(),o.drawImage(h,l-l*.33,l-l*.33,l*.66,l*.66),o.restore(),o.fillStyle="#d8d8d8",o.beginPath(),o.arc(l,l,l*.025,0,Math.PI*2),o.fill(),a.needsUpdate=!0},h.src=`${s.cover}?v=${s.v??0}`}const c=new Mn({map:a,roughness:.3,anisotropy:.85,anisotropyMap:n.record.anisotropyMap,clearcoat:.3,clearcoatRoughness:.25,envMap:n.record.envMap});return e=[n.vinylEdge,c,n.vinylEdge],Ed.set(t,e),e}function uS(s,t=.0034,e=.003){const n=t/2,i=s/2,r=6,o=8,a=[];for(const[w,v,y]of[[i-e,i-e,0],[e-i,i-e,Math.PI/2],[e-i,e-i,Math.PI],[i-e,e-i,1.5*Math.PI]])for(let S=0;S<=r;S++){const E=y+S/r*(Math.PI/2);a.push([w+Math.cos(E)*e,v+Math.sin(E)*e,Math.cos(E),Math.sin(E)])}const l=a.length,c=[],h=[],u=[],f=[];for(let w=0;w<=o;w++){const v=w/o*Math.PI,y=Math.sin(v),S=Math.cos(v);for(const[E,_,b,A]of a){const C=E-b*n*(1-y),P=_-A*n*(1-y);c.push(C,P,n*S);const U=[b*y,A*y,S];h.push(...U),u.push(C/s+.5,P/s+.5);const F=S>=0?Math.max(.35,Math.min(1.08,1+.2*U[1]-.4*(1-U[2]))):.55;f.push(F,F,F)}}const d=[],p=(w,v)=>v*l+(w+l)%l,m=(w,v)=>{for(let y=w;y<v;y++)for(let S=0;S<l;S++)d.push(p(S,y),p(S,y+1),p(S+1,y),p(S+1,y),p(S,y+1),p(S+1,y+1))},x=(w,v)=>{const y=a.map((P,U)=>new mt(c[p(U,w)*3],c[p(U,w)*3+1])),S=di.triangulateShape(y,[]),[E,_,b]=S[0],C=(y[_].x-y[E].x)*(y[b].y-y[E].y)-(y[_].y-y[E].y)*(y[b].x-y[E].x)>0===v;for(const[P,U,F]of S)C?d.push(p(P,w),p(U,w),p(F,w)):d.push(p(P,w),p(F,w),p(U,w))},g=new we;x(0,!0),m(0,o/2);const M=d.length;return m(o/2,o),x(o,!1),g.setIndex(d),g.setAttribute("position",new kt(c,3)),g.setAttribute("normal",new kt(h,3)),g.setAttribute("uv",new kt(u,2)),g.setAttribute("color",new kt(f,3)),g.addGroup(0,M,4),g.addGroup(M,d.length-M,5),g}function w0(s,t,e=.315,n){if(n){const{cover:o,spine:a,bright:l}=fS(n),c=ue(new _t(uS(e),[a,a,a,a,o,a]));return c.userData.lit=o,c.userData.bright=l,c}const i=s.spines[t],r=s.covers[t];return ue(new _t(new en(e,e,.0034),[i,i,i,i,r,r]))}function Td(s,t=!1){return s.onBeforeCompile=e=>{t&&(e.uniforms.uFanRel=s.userData.fanShade.rel,e.uniforms.uFanShade=s.userData.fanShade.shade,e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform mat4 uFanRel; uniform float uFanShade;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
        if (uFanShade > 0.0) {
          // where this point of the cover is on the album in front of it, less the light's offset: inside that one's
          // shadow (its rounded outline, a little lower and to the right, softening ${va.soft*1e3} mm out), darker
          vec2 p = vec2((vMapUv.x - 0.5) * ${xa.toFixed(4)}, vMapUv.y * ${xa.toFixed(4)});
          vec2 q = (uFanRel * vec4(p, 0.0, 1.0)).xy - vec2(${va.dx.toFixed(4)}, ${va.dy.toFixed(4)});
          vec2 b = abs(q - vec2(0.0, ${(xa/2).toFixed(4)})) - vec2(${(xa/2-.003).toFixed(4)});
          float d = length(max(b, 0.0)) + min(max(b.x, b.y), 0.0) - 0.003;
          float s = 1.0 - smoothstep(-0.001, ${va.soft.toFixed(4)}, d);
          diffuseColor.rgb *= 1.0 - uFanShade * s * s;
        }`)),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        float edgeHi = (1.0 - smoothstep(0.0, 0.010, 1.0 - vMapUv.y)) * 0.10;
        float edgeSh = (1.0 - smoothstep(0.0, 0.032, vMapUv.y)) * 0.18;
        diffuseColor.rgb = (diffuseColor.rgb + edgeHi) * (1.0 - edgeSh);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance = (totalEmissiveRadiance + edgeHi * emissiveIntensityEdge(totalEmissiveRadiance)) * (1.0 - edgeSh);
        #ifdef USE_COLOR
        totalEmissiveRadiance *= vColor.rgb;           // (the fold's shading, on its glow too)
        #endif`).replace("void main() {",`float emissiveIntensityEdge(vec3 e) { return min(1.0, max(e.r, max(e.g, e.b)) * 4.0); }
void main() {`)},s.customProgramCacheKey=()=>t?"sleeve-edge-fan":"sleeve-edge",t&&(s.userData.fanShade={rel:{value:new Kt},shade:{value:0}}),s}const xa=.315,va={dx:.003,dy:-.0045,soft:.011},Ad=new Map,il=new Map;function fS(s){const t=`${s.id}|${s.cover??""}|${s.v??0}|${s.tint??""}`;let e=il.get(t);if(e)return e;const n=new Ce({color:new Rt(s.tint??"#3a3a38").multiplyScalar(.85),roughness:.75});let i=n,r=n;if(s.cover){const o=`${s.cover}?v=${s.v??0}`;let a=Ad.get(o);a||(a=new Ya().load(o),a.colorSpace=Ne,a.anisotropy=8,Ad.set(o,a)),i=Td(new Ce({map:a,roughness:.7,emissive:16777215,emissiveMap:a,emissiveIntensity:0,vertexColors:!0})),r=Td(new Ye({map:a,toneMapped:!1,vertexColors:!0}),!0)}return e={cover:i,spine:n,bright:r},il.set(t,e),e}let sl=[];const S0=26,us={hw:.125,z0:-.07,lean:.18,N:S0,pitch:.0059,r:.0028},b0=s=>us.z0+s*us.pitch/Math.cos(us.lean),dS=b0(us.N-1)+.035;function Ma(s,t,e=!1){const n=new Jh,i=.012,r=t.length,o=l=>t[(l+r)%r];let a=e?o(0).clone().lerp(o(1),.5):o(0).clone();for(let l=1;l<(e?r+1:r-1);l++){const c=o(l-1),h=o(l),u=o(l+1),f=h.clone().add(c.clone().sub(h).setLength(Math.min(i,c.distanceTo(h)/2))),d=h.clone().add(u.clone().sub(h).setLength(Math.min(i,u.distanceTo(h)/2)));n.add(new bo(a,f)),n.add(new Zh(f,h,d)),a=d}return n.add(new bo(a,e?o(0).clone().lerp(o(1),.5):o(r-1))),ue(new _t(new Ar(n,160,us.r,8),s.steel))}let rl=[],Eh=null;function pS(s){const t=new he,{hw:e,r:n,lean:i}=us,r=n,o=us.z0-.006,a=dS,l=.2,c=.1,h=(p,m,x)=>new I(p,m,x),u=p=>o-Math.tan(i)*p;t.add(Ma(s,[h(-e,r,o),h(-e,l,u(l)),h(e,l,u(l)),h(e,r,o)])),t.add(Ma(s,[h(-e,r,a),h(-e,c,a),h(e,c,a),h(e,r,a)]));for(const p of[-1,1])t.add(Ma(s,[h(p*e,r,o),h(p*e,r,a)]));for(const p of[o+.03,(o+a)/2,a-.03])t.add(Ma(s,[h(-e,r,p),h(e,r,p)]));rl=[];const f=[],d=Math.min(sl.length,us.N);for(let p=0;p<d;p++){const m=M=>Math.sin(p*12.9898+M*78.233)*.5,x=sl[d-1-p],g=w0(s,0,.315,x);g.userData.album=x.id,g.geometry.translate(0,.315/2,0),g.rotation.set(-(i+m(1)*.03),m(3)*.02,0),Yt(g,m(4)*.008,2*n+Math.abs(m(2))*.004,b0(p)),g.userData.records=!0,t.add(g),f.unshift({mesh:g,rest:g.rotation.clone(),base:g.position.clone()})}return rl=f,Eh=t,t.traverse(p=>{p.userData.records=!0}),t}const es=.25*$w,ar=.72,Rd=-.79,Er={needles:[],bar:[]},mn={W:.62,D:.46,t:.022,plinth:.1,lp:.4,back:.008,setback:.003},E0=[[.15,vS],[.13,T0],[.09,MS],[.13,yS]],mS=mn.plinth+mn.t+2*(mn.lp+mn.t)+E0.reduce((s,[t])=>s+t+2*es+mn.t,0);function Cd(s,t,e,n,i,r=[]){let o=-.286;for(let a=0;a<n;a++){const l=(a*5+i)%Co,c=a<n-6?0:.06+(a-(n-6))*.05,h=w0(t,l,.315,r[a]);h.geometry.rotateY(Math.PI/2).translate(.0017,.315/2,0),h.rotation.z=-c,Yt(h,o,e,-.035),s.add(h),o+=.0052/Math.cos(c)+(a>=n-6?4e-4:0)}}function gS(s){Er.needles=[],Er.bar=[];const t=new he,{W:e,D:n,t:i,plinth:r}=mn,o=mS,a=e-2*i;t.add(Yt(Ui(e-.06,r,n-.06,s.shadowGap),0,r/2,-.01));for(const d of[-1,1])t.add(Yt(Ui(i,o-r,n,s.lacquer),d*(e/2-i/2),(o+r)/2,0));t.add(Yt(Ui(a,o-r-i,mn.back,s.lacquer),0,(o+r)/2,-n/2+mn.back/2));const l=d=>t.add(Yt(Ui(a,i,n-mn.back,s.lacquer),0,d+i/2,mn.back/2));let c=r;l(c),c+=i;const h=sl.slice(S0);Cd(t,s,c,44,1,h.slice(40)),c+=mn.lp,l(c),c+=i,Cd(t,s,c,40,4,h.slice(0,40)),c+=mn.lp,l(c),c+=i;const u=a-2*es,f=n-mn.back-mn.setback-.03;for(const[d,p]of E0){const m=new he;for(const[g,M]of[[-u/2+.04,-f/2+.04],[u/2-.04,-f/2+.04],[-u/2+.04,f/2-.04],[u/2-.04,f/2-.04]])m.add(Yt(ue(new _t(new Xe(.012,.014,es,16),s.rubber)),g,es/2,M));m.add(Yt(ue(new _t(new Yn(u,d,f,2,.003),s.whiteMatte)),0,es+d/2,0));const x=new he;if(Yt(x,0,es+d/2,f/2),p(x,u,d),m.add(x),Yt(m,0,c,n/2-mn.setback-f/2),t.add(m),p===T0){const g=new Op(pu.warm,.012,.9,2);g.layers.enable(5),Yt(g,-u/2+.1,c+es+d/2,n/2+.04),t.add(g)}c+=d+2*es,l(c),c+=i}return t}const ol=(s,t,e)=>{const n=ue(new _t(new Xe(t,t*1.04,e,40),s.alu));return n.rotation.x=Math.PI/2,n};function xS(s,t,e){return new _t(new Ue(t,e),s.glass)}function vS(s,t,e){const n=Hi;s.add(Yt(ol(n,.018,.012),-t/2+.05,-.01,.006));const i=xS(n,.16,.012);s.add(Yt(i,.06,.02,8e-4));for(let r=0;r<12;r++)Er.bar.push(fs(s,-.01+r*.0125,.02,.001,r<7?"amber":"red",.0028,r<7?.45:.08));fs(s,t/2-.04,-.035,5e-4,"red",.0022);for(let r=0;r<6;r++)s.add(Yt(new _t(new Ue(.22,.0016),n.shadowGap),.05,-.03-r*.006,6e-4))}function T0(s,t,e){const n=Hi;for(const i of[0,1]){const r=-t/2+.06+i*.088;s.add(Yt(new _t(new Ue(.084,.056),n.trim),r,.012,6e-4)),s.add(Yt(new _t(new Ue(.076,.048),n.vu),r,.012,.0012)),_0(s,r,.012,.0012,.08,"warm",.16);const o=new _t(new Ue(9e-4,.03).translate(0,.027,0),new Ye({color:"#140f08",toneMapped:!1}));o.position.set(r,.012-.024-.0024,.0016),o.rotation.z=ar,s.add(o),Er.needles.push(o)}s.add(Yt(ol(n,.03,.022),t/2-.065,.006,.011));for(let i=0;i<3;i++)s.add(Yt(ol(n,.009,.012),-.01+i*.038,-.04,.006));for(let i=0;i<4;i++)fs(s,.03+i*.016,.042,5e-4,"green",.0018,i===1?1:.06);fs(s,-t/2+.02,-.045,5e-4,"red",.0022)}function MS(s,t,e){const n=Hi;s.add(Yt(new _t(new Ue(.29,.038),n.trim),-.045,.01,6e-4)),s.add(Yt(new _t(new Ue(.28,.03),n.dial),-.045,.01,.0012)),_0(s,-.045,.01,.0012,.22,"warm",.1),s.add(Yt(ol(n,.02,.018),t/2-.05,.002,.009)),fs(s,-t/2+.03,-.028,5e-4,"red",.002),fs(s,-t/2+.045,-.028,5e-4,"green",.002)}function yS(s,t,e){const n=Hi;s.add(Yt(new _t(new Ue(.16,.08),n.trim),-t/2+.1,.012,6e-4));const i=new _t(new Ue(.15,.072),new Ye({color:new Rt(.05,.04,.03),toneMapped:!1}));s.add(Yt(i,-t/2+.1,.012,.001));const r=new _t(new Ue(.1,.06),new Ye({color:new Rt(.3,.24,.16),toneMapped:!1}));s.add(Yt(r,-t/2+.1,.012,.0013));for(const o of[-1,1])s.add(Yt(new _t(new Oi(.011,20),new Ye({color:"#050505"})),-t/2+.1+o*.026,.014,.0016));s.add(Yt(new _t(new Ue(.15,.072),n.smoked),-t/2+.1,.012,.002));for(let o=0;o<2;o++)for(let a=0;a<12;a++){const l=a<8?"green":a<10?"amber":"red";fs(s,.02+a*.0105,.035-o*.012,5e-4,l,.0026,a<5-o?.5:.05)}for(let o=0;o<6;o++)s.add(Yt(Ui(.022,.012,.006,n.whiteMatte),.025+o*.026,-.03,.003));fs(s,t/2-.025,.04,5e-4,"red",.0022)}const Th={W:.44,D:.5,H:1.92,plinth:.03};function Pd(s,t){const e=new he;e.add(ue(new _t(ls([[.098*t,-.001],[.098*t,.004],[.112*t,.0045],[.115*t,.002],[.115*t,-.001]]),s.ring)));const n=nl(.091*t,5e-4,.0072*t,Math.PI,0,14).map(([o,a])=>[o,a]);e.add(ue(new _t(ls(n),s.rubber)));const i=[];for(let o=0;o<=12;o++){const a=o/12;i.push([.084*t-.049*t*a,-.044*t*Math.pow(a,.85)])}e.add(ue(new _t(ls(i.reverse()),s.paper)));const r=nl(0,-.044*t,.035*t,Math.PI/2,0,10).map(([o,a])=>[o*1,-.044*t+(a+.044*t)*.55]);e.add(ue(new _t(ls(r.reverse()),s.cap)));for(let o=0;o<8;o++){const a=o/8*Math.PI*2+.3,l=new _t(new Xe(.0032*t+8e-4,.0032*t+8e-4,.002,10),s.trim);l.rotation.x=Math.PI/2,e.add(Yt(l,Math.cos(a)*.1065*t,Math.sin(a)*.1065*t,.005))}return e}function _S(s,t){const e=new he,n=i=>i.map(([r,o])=>[r*t,o*t]);return e.add(ue(new _t(ls(n([[.014,-.004],[.017,0],[.022,.003],[.046,.0045],[.05,.0025],[.05,-.001]])),s.faceplate))),e.add(ue(new _t(ls(n([[.047,.0046],[.05,.0028],[.0505,-.001]])),s.ring))),e.add(ue(new _t(ls(n(nl(0,0,.0145,Math.PI/2,0,12).map(([i,r])=>[i,r*.8-.001]).reverse())),s.silk))),e}function Ld(s){const t=new he,{W:e,D:n,H:i,plinth:r}=Th;t.add(Yt(Ui(e-.04,r,n-.04,s.shadowGap),0,r/2,0));const o=ue(new _t(new en(e,i,n),[s.lacquer,s.lacquer,s.lacquer,s.lacquer,s.invisible,s.lacquer]));t.add(Yt(o,0,r+i/2,0));const a=[[1.7,.06,"t"],[1.47,.085,"m"],[1.14,.13,"w"],[.8,.13,"w"],[.46,.13,"w"],[.17,.05,"p"]],l=new Lo([new mt(-e/2,0),new mt(e/2,0),new mt(e/2,i),new mt(-e/2,i)]);for(const[h,u]of a){const f=new vr;f.absarc(0,h,u,0,Math.PI*2,!0),l.holes.push(f)}const c=ue(new _t(new Qh(l,48),s.lacquer));t.add(Yt(c,0,r,n/2));for(const[h,,u]of a){let f;if(u==="w")f=Pd(s,1.3);else if(u==="m")f=Pd(s,.85);else if(u==="t")f=_S(s,1.3);else{f=new he,f.add(ue(new _t(ls([[.058,-.001],[.058,.0025],[.05,.005],[.045,0],[.0425,-.012],[.0425,-.18]]),s.rubber)));const d=new _t(new Oi(.044,24),s.hole);f.add(Yt(d,0,0,-.18))}t.add(Yt(f,0,r+h,n/2))}t.add(Yt(new _t(new Ue(e-.02,i-.02),s.hole),0,r+i/2,n/2-.2));for(const h of[-1,1])for(const u of[.12,.7,1.3,1.85])t.add(Yt(new _t(new Oi(.0045,14),s.hole),h*(e/2-.025),r+u,n/2+6e-4));return t}function A0(s,t,e,n){const i=new I(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));return s.clone().addScaledVector(i,-n)}const gc=s=>Math.atan2(-s.x,-s.z),er=s=>new Kt().makeRotationY(_e.degToRad(s.rot)).setPosition(s.x,0,s.z),Ae=(s,t)=>new I(...t).applyMatrix4(s);function ya(s,t,e,n,i){const r=s.clone().sub(t),o=r.length();return r.divideScalar(o),{p:[t.x,t.y,t.z],d:[r.x,r.y,r.z],cInner:Math.cos(n),cOuter:Math.cos(n+i),i:e*o*o}}function wS(s,t=[]){Hi??(Hi=M0());const e=Hi;sl=t.filter(E=>!E.off&&E.tracks.length+(E.cover?1:0)>0),Sh=null,Eh=null,rl=[];const n=()=>new Set([...Object.values(e).flat(),...Object.values(uu()),...[...il.values()].flatMap(E=>[E.cover,E.spine,E.bright])]),i=new he,r=new Map((s.pieces??[]).map(E=>[E.id,E])),o=[],a=[],l=[],c=s.ceiling-.03;let h=null,u=null,f=null;const d=[];let p=null,m=null,x=null;const g={couch:()=>rS(e),table:()=>aS(e),cabinet:()=>gS(e),speakerL:()=>Ld(e),speakerR:()=>Ld(e),piano:()=>(h=Ow(),h.group)},M={couch:.45,table:.22,cabinet:.8,speakerL:.8,speakerR:.8,piano:.22},w=(E,_)=>new I(..._).transformDirection(E);for(const[E,_]of Object.entries(Yw)){const b=r.get(E);if(!b)continue;const A=er(b),C=g[E]();C.matrixAutoUpdate=!1,C.matrix.copy(A),C.userData.piece=E,C.traverse(U=>{U.userData.piece=E}),i.add(C);const P=_e.degToRad(b.rot);if(l.push({x:b.x,z:b.z,c:Math.cos(P),s:Math.sin(P),hw:_.w/2,hd:_.d/2}),a.push({x:b.x,z:b.z,rot:b.rot,hw:_.w/2,hd:_.d/2,k:M[E]}),E==="couch"&&(p=ya(Ae(A,[0,.5,-.02]),Ae(A,[0,c,.55]),ga.couch,.32,.18),o.push(p),m=Ae(A,[0,.45,0])),E==="table"&&o.push(ya(Ae(A,[0,Qn+.08,0]),Ae(A,[0,c,.85]),ga.table,.2,.16)),E==="cabinet"&&o.push(ya(Ae(A,[0,.75,-.05]),Ae(A,[0,c,2.2]),ga.stereo,.27,.2)),E==="piano"&&o.push(ya(Ae(A,[0,.8,.3]),Ae(A,[.55,c,1.05]),ga.piano,.42,.2)),E==="couch"){const U=w(A,[0,0,1]);for(const F of[0])d.push({eye:Ae(A,[F,1.08,.36]),yaw:gc(U),pitch:-.06,stand:Ae(A,[F*.8,hs,.86]),standYaw:gc(U)})}if(E==="piano"){const U=w(A,[0,0,-1]),F=Ae(A,fr.look),O=gc(U);f={eye:A0(F,O,fr.pitch,fr.near),yaw:O,pitch:fr.pitch,stand:Ae(A,[0,hs,Kn.z+.62]),standYaw:O,look:F},u=Ae(A,Nw);const Y=Ae(A,[0,0,Kn.z]);l.push({x:Y.x,z:Y.z,c:Math.cos(P),s:Math.sin(P),hw:Kn.w/2,hd:Kn.d/2}),a.push({x:Y.x,z:Y.z,rot:b.rot,hw:Kn.w/2,hd:Kn.d/2,k:.3})}}const v=r.get("table"),y=r.get("cabinet");if(v&&y){const E=er(v),_=er(y),[b,,A]=bd,C=[Ae(E,bd),Ae(E,[b+.01,Qn+.0034,A-.04]),Ae(E,[b+.05,Qn+.0034,-.27]),Ae(E,[b+.07,Qn+.001,-.302]),Ae(E,[b+.08,Qn-.05,-.318]),Ae(E,[b+.1,.16,-.36]),Ae(E,[b+.12,.0034,-.47])],P=C[C.length-1],U=Ae(_,[-.62/2-.02,.0034,-.46/2+.06]);for(let q=1;q<=3;q++){const et=q/4,X=P.clone().lerp(U,et),Z=U.clone().sub(P).normalize();X.addScaledVector(new I(-Z.z,0,Z.x),Math.sin(q*2.1)*.05),X.y=.0034,C.push(X)}C.push(U,Ae(_,[-.62/2+.06,.0034,-.46/2-.013]),Ae(_,[-.62/2+.14,.12,-.46/2-.013]),Ae(_,[-.62/2+.16,.3,-.46/2-.013]));const F=new So(C,!1,"centripetal"),O=new So(F.getSpacedPoints(500).map(q=>q.y<.0036?q.setY(.0036):q),!1,"centripetal"),Y=ue(new _t(new Ar(O,700,.0032,8),e.cord));Y.userData.piece="cord",i.add(Y)}for(const E of o){const _=Math.acos(E.cOuter),b=Math.acos(E.cInner),A=new ax(Io,E.i*Math.PI,0,_,1-b/_,2);A.position.set(...E.p),A.target.position.set(E.p[0]+E.d[0],E.p[1]+E.d[1],E.p[2]+E.d[2]),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),A.shadow.camera.near=.4,A.shadow.camera.far=7,A.shadow.bias=-2e-4,A.shadow.normalBias=.012,A.shadow.radius=4,A.layers.enable(5),i.add(A,A.target),E===p&&m&&(x={centre:m,light:A,base:A.intensity})}const S=[];return i.traverse(E=>{E.isMesh&&S.push(E)}),i.updateMatrixWorld(!0),{group:i,lamps:o,feet:a,solids:l,meshes:S,piano:h,soundAt:u,couchSeats:d,pianoSeat:f,couch:x,records:rl,tableMatrix:r.get("table")?er(r.get("table")):null,deck:r.get("table")?Sh:null,stand:r.get("table")?Eh:null,meters:{needles:[...Er.needles],bar:[...Er.bar]},speakers:r.get("speakerL")&&r.get("speakerR")?[Ae(er(r.get("speakerL")),[0,1.25,Th.D/2]),Ae(er(r.get("speakerR")),[0,1.25,Th.D/2])]:null,dispose(){const E=n();i.traverse(_=>{var A;const b=_;if(b.isMesh||_.isSprite){(A=b.geometry)==null||A.dispose();for(const C of Array.isArray(b.material)?b.material:[b.material])C&&!E.has(C)&&C.dispose()}_.isSpotLight&&_.shadow.dispose()})}}}let Id=null;function SS(s,t,e,n,i,r){const o=[];t.traverse(a=>{var c;const l=a.material;(c=l==null?void 0:l.userData)!=null&&c.lens&&!o.includes(l)&&o.push(l)}),o.forEach(a=>a.color.multiplyScalar(14)),Hi??(Hi=M0()),Id=Nd(s,t,e,n,i,Kw(Hi),Id),r&&(Dd=Nd(s,t,r,n,i,Object.values(uu()),Dd)),o.forEach(a=>a.color.multiplyScalar(1/14))}let Dd=null;function Nd(s,t,e,n,i,r,o){const a=new eu(256,{type:In}),l=new Bp(.05,60,a);for(const d of l.children)for(const p of i)d.layers.enable(p);l.position.copy(e),l.updateMatrixWorld(!0);const c=n.map(d=>d.visible);n.forEach(d=>{d.visible=!1});const h=t.background;t.background=null,l.update(s,t),t.background=h,n.forEach((d,p)=>{d.visible=c[p]});const u=new gh(s),f=u.fromCubemap(a.texture);u.dispose(),a.dispose(),o==null||o.dispose();for(const d of r)d.isMeshStandardMaterial&&(d.envMap=f.texture,d.envMapIntensity=1,d.needsUpdate=!0);return f}const go=class go{constructor(t,e,n,i,r,o){R(this,"cat",new Map);R(this,"arch");R(this,"placed",[]);R(this,"items",[]);R(this,"furniture",null);R(this,"furnLight",new rw);R(this,"migrated",!1);R(this,"interior",null);R(this,"outside",null);R(this,"sharp",new Map);R(this,"small",new Map);R(this,"baked");R(this,"labels");R(this,"outsideKey","");R(this,"blank",new wr(new Uint8Array([128,128,128,255]),1,1));R(this,"onRebuilt",()=>{});R(this,"prepTex",t=>(t.colorSpace=Ne,t.anisotropy=this.aniso,t.minFilter=os,t));R(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);R(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new yw(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new Ya;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(go.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new Ya().loadAsync(`${go.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var c;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(h=>[h.id,h])),this.arch=b_(t),Q_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=N_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(h=>!i.includes(h))),this.placed=e,this.items=n,this.baked=hw(this.arch,e,this.baked);const r=this.interior,o=this.furniture,a=wS(t,this.data.albums);this.furniture=a,this.furnLight.setLamps(a.lamps,a.feet),this.interior=Ew(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.furnLight,a.lamps),this.interior.group.add(a.group),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose()),o==null||o.dispose();const l=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);l!==this.outsideKey&&((c=this.outside)==null||c.dispose(),this.outside=pw(this.scene,this.font,this.aniso,t),this.outsideKey=l),this.light(),this.onRebuilt(i)}light(){const t=this.furniture,e=this.renderer;this.scene.updateMatrixWorld(!0),this.furnLight.render(e,this.scene);const n=this.data.layout,i=(n.pieces??[]).find(c=>c.id==="couch"),r=(n.pieces??[]).find(c=>c.id==="table"),o=n.outline,a=i&&r?new I((i.x+r.x)/2,.95,(i.z+r.z)/2):new I((o.x0+o.x1)/2,1.2,(o.z0+o.z1)/2);_h.value=0;const l=(n.pieces??[]).find(c=>c.id==="piano");SS(e,this.scene,a,[t.group],[0,1,el],l?new I(l.x,1.3,l.z):void 0),_h.value=1,e.shadowMap.needsUpdate=!0}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};R(go,"url",(t,e)=>`art/${t}-${e}.jpg`);let dr=go;class bS{constructor(t,e){R(this,"target");R(this,"texMat",new Kt);R(this,"cam",new je);R(this,"plane",new Ri);R(this,"clip",new Ee);R(this,"q",new Ee);R(this,"n",new I(0,1,0));R(this,"p0",new I(0,0,0));R(this,"camPos",new I);R(this,"rot",new Kt);R(this,"look",new I);R(this,"view",new I);R(this,"tgt",new I);this.target=new Ln(t,e,{type:In,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,l=t.getClearColor(new Rt),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o),t.setClearColor(l,c),e.background=a}}let Ah=null;function ES(s){return Ah?(parent.postMessage(s,Ah),!0):!1}addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(Ah=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class TS{constructor(){R(this,"el");R(this,"tools");R(this,"low");R(this,"high");R(this,"cap");R(this,"frame");R(this,"open",!1);R(this,"busy",!1);R(this,"work",null);R(this,"px",[1,1]);R(this,"crop",[0,0,1,1]);R(this,"onClose",()=>{});R(this,"onShow",()=>{});R(this,"reserveRight",0);R(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(iw(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Ud(Ja(t))}</i>`],n=[t.medium,Za(t),t.year].filter(Boolean).map(i=>Ud(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,l=this.px[0]*(o-i),c=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),p=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const m=d/(o-i),x=p/(a-r);for(const g of[this.low,this.high])Object.assign(g.style,{width:`${m}px`,height:`${x}px`,left:`${-i*m}px`,top:`${-r*x}px`})}}const Ud=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),AS=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),RS=.62,xc=5,zd=.18;class CS{constructor(t=!0){R(this,"pic",null);R(this,"lit",null);R(this,"held",null);R(this,"dark",0);R(this,"veil");R(this,"vScene",new Wh);R(this,"vCam",new Ml(-1,1,1,-1,0,1));R(this,"hintEl");R(this,"hinted",null);R(this,"hintDone",!1);R(this,"v",new I);R(this,"f",new I);this.veil=new _t(new Ue(2,2),new Ye({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}hold(t,e=.72){this.held=t?{t,k:e}:null}update(t,e,n,i,r){if(this.held){this.pic=null,this.lit=this.held.t,this.dark+=(this.held.k-this.dark)*(1-Math.exp(-t/zd));return}let o=null,a=1/0,l=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.centre,m=d.normal,x=p.x-u.x,g=p.y-u.y,M=p.z-u.z,w=Math.hypot(x,g,M);if(w>d.reach||m[0]*-x+m[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(x*f.x+g*f.y+M*f.z)/w)),y=Math.atan2(d.size*.5,w)+.17;if(v>y||Ls(i,u.x,u.z,p.x+m[0]*.05,p.z+m[2]*.05))continue;const S=v/y;S<a&&(a=S,o=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=S)}this.pic&&l<a+.15&&(o=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let c=0;if(o){const u=o.centre.distanceTo(e.getWorldPosition(this.v)),f=o.reach,d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));c=RS*p*p*(3-2*p)}this.dark+=(c-this.dark)*(1-Math.exp(-t/zd)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.meshes;for(const l of r)l.layers.enable(xc);const o=n.layers.mask,a=e.background;n.layers.set(xc),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const l of r)l.layers.disable(xc);t.autoClear=!0}}const PS=4.5,LS=380,IS=10,DS=1.8;class NS{constructor(t,e,n,i,r,o){R(this,"ndc",new mt);R(this,"ray",new Ts);R(this,"v",new I);R(this,"d",null);R(this,"trail",[]);R(this,"pts",new Map);R(this,"two",null);R(this,"spent",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>{this.lift(a.pointerId),this.d=null}),t.addEventListener("lostpointercapture",a=>{var l;this.pts.has(a.pointerId)&&this.lift(a.pointerId),((l=this.d)==null?void 0:l.id)===a.pointerId&&(this.d=null)}),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}at(t){const e=this.canvas.getBoundingClientRect();return this.ndc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new I(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;for(const l of[...this.pts.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.d&&!this.canvas.hasPointerCapture(this.d.id)&&(this.d=null),t.preventDefault(),(a=getSelection())==null||a.removeAllRanges(),this.pts.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.canvas.setPointerCapture(t.pointerId),this.pts.size===2&&!this.spent){this.d=null,this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.two=this.pair(),this.trail=[];return}if(this.pts.size>1||this.spent||this.d)return;this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||n.kind==="wall"&&(n.dist??99)<=PS?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY},this.trail=[]}pair(){const[t,e]=[...this.pts.values()];return{dist:Math.max(24,Math.hypot(t.x-e.x,t.y-e.y)),mx:(t.x+e.x)/2,my:(t.y+e.y)/2}}lift(t){this.pts.delete(t)&&(this.two&&this.pts.size<2?(this.two=null,this.spent=this.pts.size>0,this.coastOn("both")):this.pts.size||(this.spent=!1))}coastOn(t){const e=performance.now(),n=this.trail.filter(l=>e-l.t<120);if(!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let r=0,o=0,a=0;for(const l of n)r+=l.dx,o+=l.dz,a+=l.dyaw;t!=="turn"&&(this.player.glide.set(r/i,o/i),this.player.glide.length()>7&&this.player.glide.setLength(7)),t!=="ground"&&(this.player.spin=_e.clamp(a/i,-7,7))}move(t){const e=this.pts.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY),this.two&&e){t.preventDefault();const a=this.pair(),l=this.two,c=performance.now(),h=DS*Math.log(a.dist/l.dist),u=_e.degToRad(this.camera.fov)/this.canvas.clientHeight,f=this.player.pos.x,d=this.player.pos.z;h&&this.player.drag(-Math.sin(this.player.yaw)*h,-Math.cos(this.player.yaw)*h);const p=(a.mx-l.mx)*u;for(this.player.turnBy(p,(a.my-l.my)*u),this.trail.push({t:c,dx:this.player.pos.x-f,dz:this.player.pos.z-d,dyaw:p});this.trail.length&&c-this.trail[0].t>120;)this.trail.shift();this.two=a;return}const n=this.d;if(!n||t.pointerId!==n.id)return;t.preventDefault(),!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)>IS&&(n.moved=!0);const i=t.clientX-n.lx,r=t.clientY-n.ly;if(n.lx=t.clientX,n.ly=t.clientY,!n.moved)return;const o=performance.now();if(n.mode==="ground"&&n.p0){const a=this.floorAt(this.at(t));if(!a)return;let l=n.p0.x-a.x,c=n.p0.z-a.z;const h=Math.hypot(l,c);h>1.2&&(l*=1.2/h,c*=1.2/h);const u=this.player.pos.x,f=this.player.pos.z;this.player.drag(l,c),this.trail.push({t:o,dx:this.player.pos.x-u,dz:this.player.pos.z-f,dyaw:0})}else{const a=_e.degToRad(this.camera.fov)/this.canvas.clientHeight*n.grip;this.player.turnBy(i*a,r*a),this.trail.push({t:o,dx:0,dz:0,dyaw:i*a})}for(;this.trail.length&&o-this.trail[0].t>120;)this.trail.shift()}end(t){const e=!!this.two;if(this.lift(t.pointerId),e)return;const n=this.d;if(!(!n||t.pointerId!==n.id)){if(this.d=null,!n.moved&&performance.now()-n.t<LS){this.tap(this.pick(this.at(t)));return}this.coastOn(n.mode)}}}const US=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],zS=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],R0=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],Po=.12,gu=[58,44,40],vc=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},FS=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function bl(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>FS(vc(r[a])+(vc(o[a])-vc(r[a]))*i))}function al([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),l=(o+a)/2,c=o-a;if(!c)return[0,0,l];const h=l>.5?c/(2-o-a):c/(o+a);let u;return o===n?u=(i-r)/c+(i<r?6:0):o===i?u=(r-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function kS(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,l=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(o=i,l=n):(o=n,l=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((l+r)*255)]}function OS(s,t){const[e,n,i]=al(s);return n<.02?s:kS(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const xu=s=>bl(US,s.skin),BS=s=>bl(zS,s.mouthColor),HS=s=>bl(R0,(s.cheeks-Po)/(1-Po)),VS=s=>{const t=Math.max(0,Math.min(1,s.cheeks/Po));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=bl(R0,t/16);s.push(`rgb(${e},${n},${i}) ${((Po+t/16*(1-Po))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const GS={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:al(gu)[0]/360,hat:"none"},jt=16,ne=16,ce=16,Kr=[26,32,42],Fd=[236,240,246],An=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Dt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:gu,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Ai=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),kd=2.2,WS=18,XS=6,Od=.55;function qS(s){const t=kd*Math.pow(WS/kd,Math.max(0,Math.min(1,s))),e=jt/2,n=ne/2,i=ce/2;return(r,o,a)=>{const l=Math.abs(r+.5-e)/e,c=Math.abs(o+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=ce-XS){const f=h<=Od?1:((1-h)/(1-Od))**(1/t);return u<=f}return h+u**t<=1}}function YS(s){const t=xu(s),e=qS(s.shape),n=new Map,i=(H,V,L)=>`${H},${V},${L}`;let r=null;const o=new Set,a=new Set;let l;const c=(H,V,L,G)=>{const N=i(H,V,L);n.set(N,l?{x:H,y:V,z:L,c:G,part:l}:{x:H,y:V,z:L,c:G}),r&&r.add(N)},h=(H,V,L,G)=>{const N=i(H,V,L);n.set(N,{x:H,y:V,z:L,c:G}),o.delete(N),a.delete(N)},u=(H,V,L)=>n.has(i(H,V,L));for(let H=0;H<jt;H++)for(let V=0;V<ne;V++)for(let L=0;L<ce;L++)e(H,V,L)&&c(H,V,L,t);const f=(H,V)=>{for(let L=ne-1;L>=0;L--)if(u(H,L,V))return L;return-1},d=(H,V)=>{for(let L=ce-1;L>=0;L--)if(u(H,V,L))return L;return-1},p=(H,V,L)=>{if(H<0||H>=jt||V<0||V>=ne)return;const G=d(H,V);G>=0&&c(H,V,G,L)},m=jt/2,x=1+Ai(s.eyeSize,3),g=1+Ai(s.eyeSize,3),M=Math.max(1,6-x),w=1+Ai(s.eyeSpacing,M-1),v=8+Ai(s.eyeHeight,4)-2-Math.floor((g-1)/2),y=v+g-1,S=[[m-w-x,m-w-1],[m+w,m+w+x-1]],E=x>=3&&g>=3;for(const[H,V]of S)for(let L=H;L<=V;L++)for(let G=v;G<=y;G++){const N=!!(E&&L>H&&L<V&&G>v&&G<y);l=E&&!N?"eye":"pupil",p(L,G,E?N?Kr:Fd:Kr)}l=void 0,r=o;const _=Ai(s.browWeight,3),b=y+2+(Ai(s.browHeight,4)-2);if(_>0){l="brow";for(const[H,V]of S)for(let L=H-1;L<=V+1;L++)for(let G=0;G<_;G++)p(L,b+G,Dt.hair);l=void 0}r=null;const A=Ai(s.noseLength,8),C=5+(Ai(s.noseHeight,6)-3);if(A>0){const H=An(t,.9);l="nose";for(let V=m-1;V<=m;V++)for(let L=C;L<=C+1;L++){const G=d(V,L);if(!(G<0))for(let N=1;N<=A;N++)c(V,L,G+N,H)}l=void 0}const P=2*Ai(s.mouthWidth,4),U=3;if(P>0){const H=BS(s),V=P>=6?2:1;l="mouth";for(let L=m-P/2;L<=m+P/2-1;L++)for(let G=U;G<U+V;G++)p(L,G,H);l=void 0}const F=VS(s);if(F>0){const H=HS(s),V=(z,W)=>z[0]===W[0]&&z[1]===W[1]&&z[2]===W[2],L=v-1,G=U+(P>=6?2:1),N=Math.max(G+.5,L-.5);for(const[z,W]of S){const tt=W<m,st=(z+W)/2,xt=st+.35*((tt?m-1.5:m+.5)-st);for(let yt=Math.floor(xt-2);yt<=Math.ceil(xt+2);yt++)if(!(tt?yt>m-2:yt<m+1))for(let lt=G;lt<=L;lt++){const pt=1-((yt-xt)/1.9)**2-((lt-N)/1.3)**2;if(pt<=0)continue;const ut=d(yt,lt),vt=ut>=0?n.get(i(yt,lt,ut)):void 0;if(!vt||vt.part||!V(vt.c,t))continue;const wt=F*.72*Math.pow(pt,.8),Gt=[0,1,2].map(Ft=>Math.round(t[Ft]+(H[Ft]-t[Ft])*wt));n.set(i(yt,lt,ut),{x:yt,y:lt,z:ut,c:Gt,blend:t})}}}const O=(H,V=1)=>{for(let L=0;L<jt;L++)for(let G=0;G<ce;G++){const N=f(L,G);if(!(N<0))for(let z=1;z<=V;z++)c(L,N+z,G,H)}},Y=(H,V,L)=>{const G=Math.ceil(V)+1;for(let N=m-G;N<m+G;N++)for(let z=m-G;z<m+G;z++)Math.hypot(N+.5-m,z+.5-m)<=V&&c(N,H,z,L)},q=(H,V,L,G)=>{for(let N=H;N<=V;N++)for(let z=0;z<jt;z++)for(let W=0;W<ce;W++)Math.hypot(z+.5-m,W+.5-m)<=L&&c(z,N,W,G)},et=(H,V,L,G,N)=>{const z=Math.ceil(G)+1;for(let W=Math.floor(H-z);W<=H+z;W++)for(let tt=Math.floor(V-z);tt<=V+z;tt++)for(let st=Math.floor(L-z);st<=L+z;st++)Math.hypot(W+.5-H,tt+.5-V,st+.5-L)<=G&&c(W,tt,st,N)},X=(H,V,L,G=1)=>{for(let N=H;N<=V;N++)for(let z=0;z<jt;z++){const W=d(z,N);W>=0&&c(z,N,W+G,L)}};switch(r=a,s.hat){case"birthday":{for(let H=0;H<9;H++)q(ne+H,ne+H,5.4-H*.62,H%2?Dt.partyAlt:Dt.party);et(m,ne+9.5,m,1.6,Fd);break}case"mickey":{const H=f(m,m)+2;for(const V of[-.5,jt+.5])et(V,H,m,4.2,Kr);break}case"tophat":{Y(ne,8.6,Dt.felt),q(ne+1,ne+10,5,Dt.felt),q(ne+3,ne+4,5.05,Dt.band);break}case"gangster":{Y(ne,9.6,Dt.felt),q(ne+1,ne+5,5,Dt.felt),q(ne+1,ne+2,5.05,Dt.band);break}case"goggles":{X(v,y,Dt.brass);for(const[H,V]of S)for(let L=H;L<=V;L++)for(let G=v;G<=y;G++){const N=d(L,G);N>=0&&c(L,G,N+1,Dt.glass)}break}case"pilot":{O(Dt.leather,2),X(ne-4,ne-3,Dt.brass);for(let H=ne-4;H>=4;H--)for(const V of[0,1,jt-2,jt-1])for(let L=0;L<ce;L++)u(V,H,L)&&c(V,H,L,Dt.leather);break}case"model":{Y(ne,12.5,Dt.partyAlt),q(ne+1,ne+2,4.4,Dt.partyAlt);break}case"curls":{let H=7;const V=()=>(H=(H*1103515245+12345)%2147483648)/2147483648;for(let L=-2;L<jt+2;L++)for(let G=-2;G<ce+2;G++){const N=f(Math.max(0,Math.min(jt-1,L)),Math.max(0,Math.min(ce-1,G)));N<0||(V()<.6&&c(L,N+1,G,Dt.hair),V()<.34&&c(L,N+2,G,Dt.hair),V()<.14&&c(L,N+3,G,Dt.hair))}break}case"bob":{O(Dt.hair,2);for(let H=y+1;H<ne;H++)for(let V=0;V<jt;V++)for(let L=0;L<ce;L++)(V<=1||V>=jt-2||L<=1)&&u(V,H,L)&&c(V,H,L,Dt.hair);break}case"pigtails":{O(Dt.hair,2);for(const H of[-1.5,jt+1.5])et(H,ne-5,m,3.4,Dt.hair);break}case"crown":{const H=Dt.gold,V=An(H,1.15),L=Dt.band,G=(W,tt)=>{const st=Math.hypot(W+.5-m,tt+.5-m);return st>=5.1&&st<=6.9};let N=0;for(let W=0;W<jt;W++)for(let tt=0;tt<ce;tt++)G(W,tt)&&(N=Math.max(N,f(W,tt)+3));for(let W=0;W<jt;W++)for(let tt=0;tt<ce;tt++){if(!G(W,tt))continue;const st=f(W,tt);if(!(st<0))for(let xt=st+1;xt<=N;xt++)c(W,xt,tt,xt===N?V:H)}const z=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[W,tt]of z){const st=Math.hypot(W+1-m,tt+1-m);for(let xt=W;xt<=W+1;xt++)for(let yt=tt;yt<=tt+1;yt++){const lt=Math.hypot(xt+.5-m,yt+.5-m)>st;for(let pt=1;pt<=(lt?5:3);pt++)c(xt,N+pt,yt,lt&&pt===5?V:H)}}for(let W=m-1;W<=m;W++)for(let tt=N+2;tt<=N+3;tt++)for(let st=14;st<=15;st++)c(W,tt,st,L);break}case"beanie":{const H=Dt.red,V=Dt.cream,L=Math.max(y+1,ne-6),G=Math.min(L+2,ne-1),N=[];for(let z=L;z<=G;z++)for(let W=-1;W<=jt;W++)for(let tt=-1;tt<=ce;tt++)u(W,z,tt)?c(W,z,tt,V):(u(W-1,z,tt)||u(W+1,z,tt)||u(W,z,tt-1)||u(W,z,tt+1))&&N.push([W,z,tt]);for(const[z,W,tt]of N)c(z,W,tt,V);for(let z=G+1;z<ne;z++)for(let W=0;W<jt;W++)for(let tt=0;tt<ce;tt++)u(W,z,tt)&&c(W,z,tt,z===G+1?An(H,.82):H);for(let z=0;z<jt;z++)for(let W=0;W<ce;W++){const tt=f(z,W);tt<=G||(c(z,tt+1,W,H),c(z,tt+2,W,H))}et(m,f(m,m)+4.5,m,1.9,V);break}case"cowboy":{let H=0;for(let V=0;V<jt;V++)for(let L=0;L<ce;L++)H=Math.max(H,f(V,L)+1);for(let V=0;V<jt;V++)for(let L=0;L<ce;L++){const G=f(V,L);if(!(G<0||Math.hypot(V+.5-m,L+.5-m)>5))for(let N=G+1;N<H;N++)c(V,N,L,Dt.leather)}for(let V=m-11;V<m+11;V++)for(let L=m-11;L<m+11;L++){const G=Math.abs(V+.5-m);if(Math.hypot(G,L+.5-m)>10.7)continue;const N=G>7.5?2:G>5.5?1:0;for(let z=0;z<=N;z++)c(V,H+z,L,Dt.leather)}for(let V=0;V<jt;V++)for(let L=0;L<ce;L++){const G=Math.abs(V+.5-m);if(Math.hypot(G,L+.5-m)>5)continue;const N=G<1?2:G<2?1:0;for(let z=H+1;z<=H+7-N;z++)c(V,z,L,Dt.leather);N>0&&c(V,H+7-N,L,An(Dt.leather,.8))}q(H+1,H+2,5.05,Dt.felt);break}case"wizard":{const H=Dt.plum,V=An(H,.82),L=f(m,m)+1;for(let W=m-6;W<m+6;W++)for(let tt=m-6;tt<m+6;tt++){if(Math.hypot(W+.5-m,tt+.5-m)>5.2)continue;const st=f(W,tt);if(!(st<0))for(let xt=st+1;xt<=L;xt++)c(W,xt,tt,H)}const G=11;for(let W=m-12;W<m+12;W++)for(let tt=m-12;tt<m+12;tt++){const st=Math.hypot(W+.5-m,tt+.5-m);if(st<=5.2||st>G)continue;const xt=W>=0&&W<jt&&tt>=0&&tt<ce?f(W,tt):-1;c(W,Math.max(L-Math.max(0,Math.round(st)-8),xt+1,y+2),tt,V)}const N=13;for(let W=0;W<=N;W++){const tt=W/N,st=5-4.1*tt,xt=m-6.5*tt*tt;for(let yt=m-6;yt<m+6;yt++)for(let lt=-2;lt<ce;lt++)Math.hypot(yt+.5-m,lt+.5-xt)<=st&&c(yt,L+W,lt,H)}const z=(W,tt)=>{for(let st=m-tt;st<m+tt;st++){const xt=d(st,W);xt>=0&&c(st,W,xt,Dt.gold)}};z(L+3,1),z(L+4,2),z(L+5,1),z(L+8,1),z(L+11,1);break}case"halo":{let H=-1;for(let W=0;W<jt;W++)for(let tt=0;tt<ce;tt++)H=Math.max(H,f(W,tt));const V=H+3,L=An(Dt.gold,1.15),G=4.9,N=6.7,z=Math.ceil(N)+1;for(let W=m-z;W<m+z;W++)for(let tt=m-z;tt<m+z;tt++){const st=Math.hypot(W+.5-m,tt+.5-m);st<G||st>N||c(W,V,tt,tt>=m?L:Dt.gold)}break}case"headphones":{const H=Math.min(y+1,10),V=m-2,L=m+1;for(let G=0;G<jt;G++)for(let N=V;N<=L;N++){const z=f(G,N);z<0||(c(G,z+1,N,Dt.steel),c(G,z+2,N,Dt.steel))}for(let G=H+3;G<ne;G++)for(const N of[0,jt-1])for(let z=V;z<=L;z++)u(N,G,z)&&c(N,G,z,Dt.steel);for(let G=0;G<3;G++)for(let N=H-4;N<=H+3;N++)for(let z=m-4;z<=m+3;z++)Math.hypot(N+.5-H,z+.5-m)>3.6||(c(-G,N,z,Kr),c(jt-1+G,N,z,Kr));for(let G=H-2;G<=H+1;G++)for(let N=m-2;N<=m+1;N++)Math.hypot(G+.5-H,N+.5-m)<=1.6&&(c(-2,G,N,Dt.steel),c(jt+1,G,N,Dt.steel));break}case"viking":{const H=An(Dt.steel,.78),V=Math.max(y+2,ne-5);for(let N=V;N<ne;N++)for(let z=0;z<jt;z++)for(let W=0;W<ce;W++)u(z,N,W)&&c(z,N,W,N===V?H:Dt.steel);for(let N=0;N<jt;N++)for(let z=0;z<ce;z++){const W=f(N,z);W<V||(c(N,W+1,z,Dt.steel),c(N,W+2,z,Dt.steel))}const L=Math.max(y+1,V-1);for(let N=L;N<=ne;N++)for(let z=m-1;z<=m;z++){const W=d(z,N);W>=0&&c(z,N,W+1,H)}const G=Math.max(f(5,m)-4,y+4);for(const N of[-1,1])for(let z=0;z<=18;z++){const W=z/18,tt=W*2.05,st=m+N*(6.2+6*Math.sin(tt));et(st,G+8.4-8.4*Math.cos(tt),m,2.6-1.6*W,Dt.cream)}break}case"flowers":{const H=Math.max(y+1,Math.min(y+3,ne-4)),V=Dt.leaf,L=An(Dt.leaf,.82),G=(st,xt)=>Math.floor(m+st*xt),N=[[0,1],[.87,.5],[.87,-.5],[0,-1]],z=[];for(const[st,xt]of N){let yt=2;for(;yt<12&&u(G(st,yt),H,G(xt,yt));)yt+=.5;z.push(yt)}const W=[];for(let st=H;st<=H+1;st++)for(let xt=0;xt<jt;xt++)for(let yt=0;yt<ce;yt++){if(!u(xt,st,yt))continue;let lt=!1;for(let pt=-1;pt<=1;pt++)for(let ut=-1;ut<=1;ut++)u(xt+pt,st,yt+ut)||(lt=!0,W.push([xt+pt,st,yt+ut]));lt&&W.push([xt,st,yt])}for(const[st,xt,yt]of W)c(st,xt,yt,xt===H?L:V);const tt=[Dt.red,Dt.gold,Dt.cream];for(let st=0;st<N.length;st++){const[xt,yt]=N[st],lt=Math.round(m+xt*(z[st]+1)),pt=Math.round(m+yt*(z[st]+1)),ut=tt[st%tt.length];et(lt,H+1.5,pt,1.5,ut),xt>0&&et(2*m-lt,H+1.5,pt,1.5,ut)}break}case"afro":{const L=f(m,m),G=Math.max(y+2,ne-3);for(let N=m-10;N<m+10;N++)for(let z=m-10;z<m+10;z++){const W=Math.abs(N+.5-m),tt=Math.abs(z+.5-m),st=(W*W+tt*tt)/(10*10),xt=f(N,z);if(st>1&&xt<0)continue;const yt=st>1?0:7.5*Math.sqrt(1-st),pt=z>=ce-6?Math.max(y+1,G-Math.max(0,W-4.5)):y+1,ut=xt>=0?pt:Math.max(pt,Math.ceil(L+.5-yt)),vt=st>1?xt:Math.max(xt,Math.floor(L-.5+yt));for(let wt=ut;wt<=vt;wt++)c(N,wt,z,wt<pt+2?An(Dt.hair,.8):Dt.hair)}break}case"mohawk":{const H=Dt.hair,V=An(t,.74);for(let G=0;G<jt;G++)for(let N=0;N<ce;N++){const z=f(G,N);if(!(z<0))for(let W=y+2;W<=z;W++)u(G,W,N)&&h(G,W,N,V)}const L=f(m,m);for(let G=1;G<ce-1;G++){if(f(m,G)<L-4)continue;const z=(G-1)/(ce-3),W=2+Math.round(4*Math.sin(Math.PI*z));for(const tt of[m-1,m])for(let st=f(tt,G)+1;st<=f(tt,G)+W;st++)c(tt,st,G,H)}break}case"ponytail":{const H=Dt.hair,V=Math.max(f(m-1,2),f(m,2))-2;for(let L=0;L<jt;L++)for(let G=0;G<ce;G++){const N=f(L,G);N>y&&c(L,N,G,H)}O(H,2);for(let L=y+1;L<ne;L++)for(let G=0;G<jt;G++)for(let N=0;N<ce;N++)(G<=1||G>=jt-2||N<=3)&&u(G,L,N)&&c(G,L,N,H);for(let L=3;L<=y;L++){const G=6-Math.max(0,Math.min(3,y-L));for(let N=m-G;N<m+G;N++)for(let z=0;z<=2;z++)u(N,L,z)&&c(N,L,z,H)}for(let L=0;L<=14;L++){const G=L/14;et(m,V-10*G*G,1.5-4.4*Math.sqrt(G),2.7-1.3*G,H)}et(m,V-.5,-.6,2.1,Dt.band);break}case"longhair":{const H=Dt.hair,V=ce-5,L=2;O(H,2);for(let G=0;G<ne;G++)for(let N=0;N<jt;N++)for(let z=0;z<ce;z++){if(!u(N,G,z))continue;const W=z>=V,tt=N<L||N>=jt-L;W&&!tt||W&&tt&&G>=v&&G<=y||c(N,G,z,H)}for(let G=Math.max(ne-3,y+2);G<ne;G++)for(let N=0;N<jt;N++)for(let z=V;z<ce;z++)u(N,G,z)&&c(N,G,z,H);for(let G=0;G<jt;G++)for(let N=0;N<ce;N++){if(!(G<L||G>=jt-L||N<L)||f(G,N)<0)continue;let W=0;for(;!u(G,W,N);)W++;for(let tt=W-1;tt>=W-3;tt--)c(G,tt,N,H)}break}case"buzz":{const H=Dt.hair,V=An(Dt.hair,1.75),L=Math.min(ne-2,Math.max(y+3,ne-3));for(let G=0;G<jt;G++)for(let N=0;N<ce;N++){const z=f(G,N);if(z<0)continue;const W=Math.abs(G+.5-m),st=N>=ce-6?W<5.5?0:W<6.5?1:2:3,xt=Math.max(y+1,Math.min(L-st,z-1));for(let yt=xt;yt<=z;yt++)u(G,yt,N)&&c(G,yt,N,yt<L?V:H)}break}case"bun":{const H=An(Dt.hair,.74),V=y+2;for(let N=0;N<jt;N++)for(let z=0;z<ce;z++){const W=f(N,z);if(W<V)continue;const tt=z<=5?5:z<=9?3:2;for(let st=W;st>W-tt&&st>=V;st--)u(N,st,z)&&c(N,st,z,Dt.hair);c(N,W+1,z,Dt.hair)}const L=4.5,G=f(m,4);et(m,G+3,L,3.1,Dt.hair);for(let N=m-4;N<m+4;N++)for(let z=1;z<=8;z++)if(Math.hypot(N+.5-m,z+.5-L)<=2.6)for(let W=G+1;W<=G+2;W++)c(N,W,z,H);break}case"braids":{O(Dt.hair,2);for(let L=y+1;L<ne;L++)for(let G=0;G<jt;G++)for(let N=0;N<ce;N++)(G<=1||G>=jt-2||N<=1)&&u(G,L,N)&&c(G,L,N,Dt.hair);const H=An(Dt.hair,1.3),V=-5;for(const L of[-1,jt]){const G=Math.max(0,Math.min(jt-1,L)),N=Math.min(f(G,6),ne-4);if(!(N<0)){for(let z=V;z<=N;z++){const W=z<=V+3,tt=z<=V+1;let st=(z%4+4)%4<2?Dt.hair:H;tt&&(st=Dt.band);for(let xt=-1;xt<=1;xt++)for(let yt=-1;yt<=1;yt++)(!W||Math.abs(xt)+Math.abs(yt)<2)&&c(L+xt,z,6+yt,st)}et(L+.5,V-2,6.5,1.9,Dt.band)}}break}}r=null;const Z=.18,it=.25;let dt=-1;if(a.size){const H=new Map;let V=0,L=0;for(const z of a){const W=n.get(z);if(!W)continue;L++;const tt=`${W.c[0]},${W.c[1]},${W.c[2]}`,st=H.get(tt);st?st.n++:H.set(tt,{n:1,c:W.c,chroma:(Math.max(...W.c)-Math.min(...W.c))/255}),H.get(tt).chroma>=Z&&V++}const G=L>0&&V/L<it;let N=null;for(const z of H.values())!G&&z.chroma<Z||(!N||z.n>N.n)&&(N=z);N&&(dt=al(N.c)[0])}else o.size&&(dt=al(gu)[0]);if(dt>=0){const H=s.hairColor*360-dt;if(Math.abs(H)>.5)for(const V of[...a,...o]){const L=n.get(V);L&&(L.c=OS(L.c,H))}}return{voxels:[...n.values()],anchor:dt}}function $S(s){return YS(s).voxels}const KS=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Mc=.42,_a=new Rt,Bd=(s,t,e)=>(_a.setRGB(s/255,t/255,e/255,Ne),[_a.r,_a.g,_a.b]);function ZS(s,t){const e=new Map;for(const b of s)e.set(`${b.x},${b.y},${b.z}`,b);const n=(b,A,C)=>e.get(`${b},${A},${C}`),i=(b,A)=>b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2],r=(b,A)=>i(b.c,A.c)||!!b.blend&&(!!A.blend||i(b.blend,A.c))||!!A.blend&&i(A.blend,b.c);let o=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const b of s)b.x<o&&(o=b.x),b.y<a&&(a=b.y),b.z<l&&(l=b.z),b.x>c&&(c=b.x),b.y>h&&(h=b.y),b.z>u&&(u=b.z);const f=t?t[0]:(o+c)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(l+u)/2,m=[],x=[],g=[],M=[],w=[],v=new Set;for(const b of s){const A=b.x-f,C=b.y-d,P=b.z-p,U=Bd(b.c[0],b.c[1],b.c[2]),F=Bd(b.c[0]*Mc,b.c[1]*Mc,b.c[2]*Mc);for(const{n:O,t1:Y,t2:q}of KS){if(n(b.x+O[0],b.y+O[1],b.z+O[2]))continue;const et=(H,V)=>[A+O[0]/2+Y[0]*H+q[0]*V,C+O[1]/2+Y[1]*H+q[1]*V,P+O[2]/2+Y[2]*H+q[2]*V],X=et(-.5,-.5),Z=et(.5,-.5),it=et(.5,.5),dt=et(-.5,.5);for(const H of[X,Z,it,X,it,dt])m.push(H[0],H[1],H[2]),x.push(O[0],O[1],O[2]),g.push(U[0],U[1],U[2]);for(const[H,V,L]of[[Y,q,1],[Y,q,-1],[q,Y,1],[q,Y,-1]]){const G=n(b.x+H[0]*L,b.y+H[1]*L,b.z+H[2]*L);if(G&&r(G,b)&&!n(b.x+H[0]*L+O[0],b.y+H[1]*L+O[1],b.z+H[2]*L+O[2]))continue;const N=lt=>[A+O[0]/2+H[0]*L/2+V[0]*lt/2,C+O[1]/2+H[1]*L/2+V[1]*lt/2,P+O[2]/2+H[2]*L/2+V[2]*lt/2],z=N(1),W=N(-1),tt=z.map(lt=>lt.toFixed(2)).join(),st=W.map(lt=>lt.toFixed(2)).join(),xt=tt<st?`${tt}|${st}`:`${st}|${tt}`;if(v.has(xt))continue;v.add(xt);const yt=.006;M.push(z[0]+O[0]*yt,z[1]+O[1]*yt,z[2]+O[2]*yt,W[0]+O[0]*yt,W[1]+O[1]*yt,W[2]+O[2]*yt),w.push(F[0],F[1],F[2],F[0],F[1],F[2])}}}const y=new we;y.setAttribute("position",new kt(m,3)),y.setAttribute("normal",new kt(x,3)),y.setAttribute("color",new kt(g,3));const S=new we;S.setAttribute("position",new kt(M,3)),S.setAttribute("color",new kt(w,3));const E=[(c-o)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(E[0],E[1],E[2])*1.15;return{faces:y,edges:S,radius:_}}const C0=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],pe=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),JS={calm:{...pe("lid",.1),smile:.08},pleased:{...pe("lid",.2),...pe("low",.3),...pe("raise",.1),smile:.65},happy:{...pe("raise",.35),...pe("arch",.25),...pe("low",.42),smile:.9,open:.16},joy:{...pe("raise",.85),...pe("arch",.4),...pe("low",.55),smile:1,open:.6,roll:.06},surprised:{...pe("raise",1.5),...pe("arch",.45),...pe("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...pe("lid",.2),skew:.42},sad:{...pe("inner",.95),...pe("raise",-.1),...pe("lid",.36),...pe("tilt",-.5),smile:-.75,nod:.08},bored:{...pe("lid",.5),...pe("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...pe("lid",.72),...pe("tilt",-.25),...pe("raise",-.2),...pe("inner",.2),smile:-.05,nod:.18},yawn:{...pe("lid",1),...pe("raise",.75),...pe("inner",.3),open:1,round:.55,nod:-.14},asleep:{...pe("lid",1.05),...pe("raise",-.12),...pe("inner",.12),smile:.05,open:.06},excited:{...pe("raise",.9),...pe("inner",-.1),...pe("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...pe("raise",.85),...pe("arch",.3),...pe("lid",.04),roll:.12,smile:.25}},QS={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Hd=()=>Object.fromEntries(C0.map(s=>[s,s==="pupil"?1:0])),jS=s=>new Rt().setRGB(s[0]/255,s[1]/255,s[2]/255,Ne);class tb{constructor(t){R(this,"head",new he);R(this,"solid",[]);R(this,"drop");R(this,"roll",0);R(this,"nod",0);R(this,"own",[]);R(this,"brows",[]);R(this,"eyes",[]);R(this,"mouth",[]);R(this,"seam",0);R(this,"lipH",.5);R(this,"browLo",0);R(this,"browHi",0);R(this,"d",Hd());R(this,"mood","calm");R(this,"feeling",null);R(this,"feelFor",0);R(this,"blinkIn",1.5);R(this,"blinkT",-1);R(this,"blinkLen",.13);R(this,"glance",new mt);R(this,"glanceIn",1);R(this,"micro",new mt);R(this,"microIn",.5);R(this,"talkT",0);R(this,"syl",0);R(this,"sylLen",.16);R(this,"sylAmp",0);R(this,"sylRound",0);R(this,"pause",0);R(this,"beat",0);R(this,"wasTalking",!1);R(this,"lookX",0);R(this,"lookY",0);const e=$S(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,l=-1/0;for(const X of e)n=Math.min(n,X.x),o=Math.max(o,X.x),i=Math.min(i,X.y),a=Math.max(a,X.y),r=Math.min(r,X.z),l=Math.max(l,X.z);const c=(n+o)/2,h=(i+a)/2,u=(r+l)/2;this.drop=(h-(ne-1)/2)/16;const f=xu(t),d=8,p=X=>X<d?0:1,m=[!1,!1];for(const X of e)X.part==="eye"&&(m[p(X.x)]=!0);const x=[236,240,246],g=e.map(X=>X.part==="brow"||X.part==="mouth"?{...X,c:f,part:void 0}:X.part==="pupil"&&m[p(X.x)]?{...X,c:x}:X),{faces:M,edges:w}=ZS(g,[c,h,u]),v=new qa({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new bp({vertexColors:!0});this.own.push(M,w,v,y);const S=new _t(M,v);this.head.add(S,new Mg(w,y)),this.solid.push(S);const E=new en(1,1,1);this.own.push(E);const _=new Map,b=X=>{const Z=X.join();let it=_.get(Z);return it||(it=new qa({color:jS(X)}),_.set(Z,it),this.own.push(it)),it},A=X=>{const Z=new _t(E,b(X));return this.head.add(Z),this.solid.push(Z),Z},C=X=>X.z-u+.5,P=e.filter(X=>X.part==="brow");for(const X of[0,1]){const Z=P.filter(G=>p(G.x)===X);if(!Z.length)continue;const it=Z.map(G=>G.x),dt=Math.min(...it),H=Math.max(...it),V=(dt+H)/2,L=Math.max(.5,(H-dt)/2);for(const G of Z){const N=X===0?(V-G.x)/L:(G.x-V)/L;this.brows.push({m:A(G.c),x:G.x-c,y:G.y-h,z:C(G),xn:N,side:X})}}const U=e.filter(X=>X.part==="eye"||X.part==="pupil"),F=f.map(X=>Math.round(X*.88));let O=-1/0;for(const X of[0,1]){const Z=U.filter(ut=>p(ut.x)===X);if(!Z.length)continue;const it=Z.map(ut=>ut.x),dt=Z.map(ut=>ut.y),H=Math.min(...it),V=Math.max(...it),L=Math.min(...dt),G=Math.max(...dt);O=Math.max(O,G);const N=Math.max(...Z.map(C)),z=(H+V)/2-c,W=(L+G)/2-h,tt=V-H+1,st=G-L+1;let xt=null;const yt=Math.max(1,tt-2),lt=Math.max(1,st-2);if(m[X]){const ut=Z.find(vt=>vt.part==="pupil").c;xt=A(ut),xt.scale.set(yt,lt,.05)}const pt=[];for(let ut=H;ut<=V;ut++){const vt=tt>1?X===0?(ut-H)/(tt-1):(V-ut)/(tt-1):.5;pt.push({x:ut-c,k:vt,up:A(F),low:A(F)})}this.eyes.push({side:X,y0:L-h-.5,y1:G-h+.5,z:N,cx:z,cy:W,pupil:xt,pw:yt,ph:lt,reach:(tt-yt)/2,cols:pt})}const Y=e.filter(X=>X.part==="mouth");if(Y.length){const X=[...new Set(Y.map(N=>N.x))].sort((N,z)=>N-z),Z=Y.map(N=>N.y),it=Math.min(...Z),dt=Math.max(...Z),H=dt-it+1;this.seam=H>=2?(it+dt)/2-h:it-h,this.lipH=H>=2?1:.5;const V=(X[0]+X[X.length-1])/2,L=Math.max(.5,(X[X.length-1]-X[0])/2),G=Y[0].c;for(const N of X){const z=Math.max(...Y.filter(W=>W.x===N).map(C));this.mouth.push({x:N-c,z,xn:(N-V)/L,top:A(G),bot:A(G),inside:A([46,22,28])})}}const q=this.brows.map(X=>X.y),et=Math.max(...e.filter(X=>X.c[0]===f[0]&&X.c[1]===f[1]&&X.c[2]===f[2]).map(X=>X.y));this.browLo=O===-1/0?-2:O-h+.85-(q.length?Math.min(...q):0),this.browHi=et-h-.8-(q.length?Math.max(...q):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...Hd(),...JS[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=QS[r]??8;for(const u of C0){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(c=.7,h=.6),this.lookX+=(_e.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(_e.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=_e.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const l of r.cols){const c=_e.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:_e.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(l.up,l.x,r.y1+.08,-(c+(c>.01?.08:0)),r.z),this.lid(l.low,l.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const l=_e.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*l,r.ph*l,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,l=_e.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*o*o)*(1-l*.75*o*o)*2.4,h=1-l*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-c-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=c>.02,r.inside.position.set(r.x,u-c/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}const ze=22,P0=.6,We=Math.PI*2,Be=(s,t,e)=>s<t?t:s>e?e:s,qn=s=>s<0?0:s>1?1:s,Nt=(s,t,e)=>s+(t-s)*e,re=s=>{const t=qn(s);return t*t*(3-2*t)},Zr=s=>{const t=qn(s);return t*t*t*(t*(t*6-15)+10)},nr=s=>s-Math.floor(s),fn=s=>Math.atan2(Math.sin(s),Math.cos(s)),L0=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Ii=-.06,_n=.11,pn=.19;class eb{constructor(t){R(this,"xs",[]);R(this,"zs",[]);R(this,"cum",[]);R(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],l=Math.hypot(o.x-r.x,o.z-r.z),c=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/l,u=(o.z-r.z)/l,f=(a.x-o.x)/c,d=(a.z-o.z)/c;if(h*f+u*d>.999){n(o.x,o.z);continue}const p=Math.min(.42,l*.5,c*.5),m=o.x-h*p,x=o.z-u*p,g=o.x+f*p,M=o.z+d*p;for(let w=0;w<=8;w++){const v=w/8,y=1-v;n(y*y*m+2*y*v*o.x+v*v*g,y*y*x+2*y*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?qn((t-this.cum[n])/i):0;return e.x=Nt(this.xs[n],this.xs[n+1],r),e.z=Nt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Be(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const wa=.05,Sa=.12;class nb{constructor(t,e){R(this,"L");R(this,"thigh");R(this,"shin");R(this,"footH",.06);R(this,"hipX",.17);R(this,"armLen");R(this,"legless");R(this,"pos",new I);R(this,"yaw",0);R(this,"lean",0);R(this,"roll",0);R(this,"twist",0);R(this,"swayRoll",0);R(this,"squash",0);R(this,"stretch",0);R(this,"feet");R(this,"arms");R(this,"dance",null);R(this,"dancing",!1);R(this,"danceBag",null);R(this,"danceJump",!1);R(this,"dmove",null);R(this,"danceDip",0);R(this,"danceTwist",0);R(this,"danceRoll",0);R(this,"danceOff",0);R(this,"lastStep",-1e9);R(this,"danceSteps",!1);R(this,"lastBeat",null);R(this,"beatRate",0);R(this,"standAt",new I);R(this,"onPuff",null);R(this,"onPrint",null);R(this,"airborne",!1);R(this,"rest","stand");R(this,"breath",0);R(this,"asleep",!1);R(this,"headDrop",0);R(this,"hipDrop",0);R(this,"scratch",null);R(this,"scratchIn",5);R(this,"world");R(this,"base",new I);R(this,"vy",0);R(this,"qv",0);R(this,"qRest",0);R(this,"leanV",0);R(this,"leanRest",0);R(this,"sv",0);R(this,"stretchRest",0);R(this,"speed",0);R(this,"accel",0);R(this,"lastSpeed",0);R(this,"wantYaw",null);R(this,"trip",null);R(this,"pending",null);R(this,"act",null);R(this,"phase",0);R(this,"running",0);R(this,"clockOn",!1);R(this,"gRef",0);R(this,"held",!1);R(this,"wallSide",0);R(this,"sway",0);R(this,"swayV",0);R(this,"shift",0);R(this,"shiftIn",3);R(this,"clock",0);R(this,"tapT",-1);R(this,"seq",null);R(this,"queued",[]);R(this,"restYaw",null);R(this,"anchor",{x:0,z:0,g:0,yaw:0});R(this,"t1",new I);R(this,"t2",new I);R(this,"t3",new I);R(this,"e1",new Dn);R(this,"turning",null);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new I,yaw:0,pitch:0,from:new I,to:new I,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new I,kneeOut:0,sy:0,ankle:new I,q:new me,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}standBase(t=this.danceOff){return this.standAt.set(this.base.x+Math.cos(this.yaw)*t,this.base.y,this.base.z-Math.sin(this.yaw)*t)}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ze*e):t==="run"?Math.sqrt(.45*ze*e):Math.min(9,Math.sqrt(1.15*ze*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ze*e)),i=Be(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Nt(i,r,this.running)}get duty(){return Nt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const r={x:this.base.x,z:this.base.z},o=this.legless?[{kind:"path",pts:[r,...t]}]:this.split(r,t);this.trip={gait:e,stride:i,legs:o,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,i-l*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-o,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new eb(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+wa;r+=wa)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new I(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new I(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;if(!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand")this.stepRest(t);else if(this.asleep)this.breath=nr(this.breath+t/3.6);else if(this.act)this.stepAct(t);else if(e&&e.path)this.legless?this.stepHopper(t,e):this.stepWalk(t,e);else{const n=this.dance&&!this.legless?this.dance():null;n!==null?this.stepDance(t,n):this.stepStand(t)}this.dancing&&(this.act||this.trip||this.seq||this.rest!=="stand"||!this.dance||this.dance()===null)&&(this.act&&this.danceJump?this.dancing=!1:this.endDance()),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?4.5:e.gait==="run"?4:3,a=r?4.5:e.gait==="run"?5:4.5,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,l-.03))),h=1/0;this.held=!1;for(const S of this.feet)S.mode==="ground"&&(h=Math.min(h,S.sole.y));if(h<1/0){const S=Math.sin(this.yaw),E=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let b=0;b<=.8;b+=.05){const A=this.world.groundAt(this.base.x+S*b,this.base.z+E*b);if(A>Math.max(h,_)+.2){A<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,b-.18))),this.held=b<.45);break}}}const u=Math.abs(fn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=qn((1.6-u)/1.1);const f=Be((c-this.speed)*3,-a*1.6,o);this.accel+=(f-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),l<=.01&&(this.speed=0,this.accel=0);const d=this.gaitSpeed("walk"),p=this.gaitSpeed("bound"),m=qn((this.speed-d*1.05)/(p*.85-d*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=Nt(4.5,8,this.running)*t;this.yaw+=Be(fn(x-this.yaw),-g,g);const M=d/this.strideAt(d),w=Math.max(M*Nt(.75,1.5,re((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,y=this.running>.45;if(this.clockOn){this.phase+=w*t;for(let S=0;S<2;S++){const E=this.feet[S],_=nr(this.phase-S*.5);_<v?E.mode==="swing"&&E.clocked&&this.touchDown(E,y?1:.55):(E.mode!=="swing"&&(this.liftOff(E,!0,0),this.feet.every(b=>b.mode!=="ground")&&(this.qv+=1.6*this.running)),E.s=(_-v)/(1-v),E.s<.7&&this.aimSwing(E,e,(1-_)/w,v/2/w)),this.footPitch(E,_,v,y)}}if(this.airborne=this.clockOn&&this.feet.every(S=>S.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const E of this.feet)E.mode!=="swing"||!E.clocked||(E.clocked=!1,E.dur=Math.max(.08,(1-E.s)*((1-v)/w)),E.s=0,E.from.set(E.ankle.x,E.ankle.y-this.footH,E.ankle.z),E.fromYaw=E.yaw,E.apex=Math.max(E.from.y,E.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(E=>E.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,y?"run":"walk",w,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),l=r.at(a,this.t1),c=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(fn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Nt(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=Be(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(pn+.01),t.z+i*(pn+.01)),c=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(Ii-.02),t.z+i*(Ii-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Be(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Nt(t.from.x,t.to.x,o),Nt(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*re((r-.5)/.5):t.pitch=r<.12?.22*(1-re(r/.12)):r<.6?0:-.7*re((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Nt(-.7,-.8,r/.3):r<.82?Nt(-.8,0,re((r-.3)/.52)):(i?-.05:.22)*re((r-.82)/.18)}}bodyOver(t,e,n,i,r="stroll"){let o=this.shift;const a=r==="strut"?1:0,l=e!=="stand"&&this.clockOn,c=l?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(l)o=-(Nt(Nt(.95,1.2,a),.1,this.running)*(this.hipX+.015)*c)*Math.cos(We*(this.phase-i/2)),h=Nt(Nt(.09,.15,a),.04,this.running)*c*Math.sin(We*(this.phase-i/2));else if(this.dancing)h=this.danceTwist;else{const w=this.feet.filter(v=>v.mode==="ground");w.length===1&&(o=w[0].side*this.hipX*.85)}o+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(o-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((l?-.13*this.sway/Math.max(.1,this.hipX+.015):this.dancing?this.danceRoll:0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*(this.sway+this.danceOff),this.pos.z=this.base.z-Math.sin(this.yaw)*(this.sway+this.danceOff);const f=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(f+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const d=this.reachTop();let p=d.soft-.012*this.legW;if(e!=="stand"){let w=-1/0,v=!1;for(const y of this.feet)y.mode==="ground"&&(w=Math.max(w,y.sole.y));for(const y of this.feet)y.mode==="swing"&&y.to.y>w+.2&&(v=!0);w>-1/0&&!v&&(p=Math.min(p,w+this.footH+(this.thigh+this.shin)*.955+.5))}if(l&&this.running<.45){const w=Nt(.045,.085,a)*this.legW*c*(1-this.running/.45),v=nr(this.phase*2);p-=w*(.5-.5*Math.cos(We*(v-i)))}let m=p;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const w=.5/n,v=i/n,y=Math.max(0,w-v),S=ze*y*v/We,E=this.speed*v/2,_=(this.thigh+this.shin)*.985,b=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-E*E))+.5,A=nr(this.phase*2),C=v/w;let P;if(A<C)P=b-S*Math.sin(Math.PI*(A/C));else{const U=(A-C)*w;P=b+ze*y/2*U-ze/2*U*U}m=Nt(p,P,re((this.running-.45)/.25))}e==="stand"&&(m-=this.dancing?this.danceDip:.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const w of this.feet){if(w.mode!=="ground")continue;const v=this.kneeAt(w,this.t2),y=Math.sin(w.yaw)*.06,S=Math.cos(w.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+y,v.y-.06,v.z+S))&&(m=Math.max(m,d.hard))}const x=e==="run"?We*7:We*4.2,g=e==="run"?.9:.72;this.vy+=(x*x*(m-this.pos.y)-2*g*x*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>d.hard&&(this.pos.y=d.hard,this.vy>0&&(this.vy=0));const M=f+this.footH+.45*this.legW+.5;this.pos.y<M&&(this.pos.y=M,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?Ii:r<0?_n:0,a=-o,l=this.footH,c=Math.cos(r),h=Math.sin(r),u=o+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-r,c=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,p=Be(u,Math.abs(f-d)+.001,f+d-1e-4),m=l/u,x=c/u,g=h/u,M=Be((f*f+p*p-d*d)/(2*f*p),-1,1),w=Math.sqrt(1-M*M),v=t.kneeOut,y=n*t.side,S=-i*t.side;let E=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=L0(-c,this.legW),b=Math.cos(t.yaw)*(1-v*1.3)+S*(.12+1.2*v);const A=E*m+_*x+b*g;E-=m*A,_-=x*A,b-=g*A;const C=Math.hypot(E,_,b)||1;return e.set(r+f*(M*m+w*E/C),o+f*(M*x+w*_/C),a+f*(M*g+w*b/C))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,l=Math.cos(this.yaw)*o,c=(x,g)=>this.world.solidAt(x,n,g)||this.world.solidAt(x,i,g),h=x=>c(this.base.x+t*r*x,this.base.z+e*r*x),u=x=>c(this.base.x+t*r*x+a,this.base.z+e*r*x+l),f=h(1),d=h(-1),p=f||u(1)&&!d,m=d||u(-1)&&!f;return this.wallSide=p&&!m?-1:m&&!p?1:0,p&&!m?.22:m&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,p=t*t-f*f-d*d;return c.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let r=1/0;for(const l of this.feet)l.mode==="ground"&&(r=Math.min(r,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=re((l.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?c+.3*(1-h):Nt(o,c,h))),l.s>.88&&(r=Math.min(r,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&this.turning===null&&(this.yaw+=Be(fn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&!this.danceSteps&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.standBase(),this.yaw,this.t2),l=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(fn(this.yaw-o.yaw))*.35;l>r&&(r=l,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.standBase(),this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}stepDance(t,e){var w;this.dancing||(this.dancing=!0,this.danceJump||(this.dmove=null),this.danceJump=!1);const n=Math.floor(e/8);if(!this.dmove||this.dmove.seg!==n){const v=(w=this.dmove)==null?void 0:w.kind,y=this.danceBag??["groove","groove","shimmy","point","roll","spin"];let S=y[Math.floor(Math.random()*y.length)];for(let E=0;E<6&&S===v;E++)S=y[Math.floor(Math.random()*y.length)];this.dmove={seg:n,kind:S},this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null)}const i=this.dmove.kind,r=e-n*8;this.lastBeat!==null&&t>0&&e>this.lastBeat&&(this.beatRate+=((e-this.lastBeat)/t-this.beatRate)*Math.min(1,t*3)),this.lastBeat=e;const o=this.beatRate>.3?1/this.beatRate:.4,a=.5+.5*Math.cos(We*e),l=Math.cos(Math.PI*e);let c=.9*l,h=a,u=.14*l,f=.04+.05*a,d=-.1*l;const p=Math.max(0,Math.cos(We*(e-.5)))**4;let m={tp:-.35+.35*l,to:.18+.22*p,te:1.75-.25*p},x={tp:-.35-.35*l,to:.18+.22*p,te:1.75-.25*p},g=0,M=0;if(i==="groove"){const v=1.1*this.hipX,y=_=>{const b=(_%4+4)%4;return b<1.5?-v:b<2?Nt(-v,v,Zr((b-1.5)/.5)):b<3.5?v:Nt(v,-v,Zr((b-3.5)/.5))};M=y(e);const S=(e%4+4)%4;c=S<2?S<1?-.95:-.35:S<3?.95:.35,d=-.13*Math.sign(c);const E=Math.ceil(e+.45-1e-6);if(E!==this.lastStep&&E-e<=.45){this.lastStep=E;const _=(E%4+4)%4,b=this.feet[_===0||_===3?0:1];b.mode==="ground"&&(this.liftOff(b,!1,Math.max(.12,(E-e)*o)),this.neutral(b,this.standBase(y(E)),this.yaw,b.to),b.toYaw=this.yaw,this.safeFoot(b.to,this.yaw),this.planApex(b,.05+.03*this.legW))}}if(this.danceOff=i==="groove"?M:this.danceOff*(1-Math.min(1,t*3)),this.danceSteps=i==="groove",i==="shimmy")c*=.35,u=.26*Math.sin(Math.PI*e),m={tp:-.55-.2*Math.sin(Math.PI*e),to:.45,te:1.5},x={tp:-.55+.2*Math.sin(Math.PI*e),to:.45,te:1.5};else if(i==="point"){const v=r%4,y=re(v/.5)*(1-re((v-2)/.6));x={tp:Nt(x.tp,-2.3,y),to:Nt(x.to,.62,y),te:Nt(x.te,.12,y)},m={tp:.3,to:.62,te:1.95},c=Nt(c,.85,y),d=Nt(d,-.1,y)}else if(i==="roll")f=.02+.11*Math.sin(We*e-.6),h=.35+.65*a,c*=.6,m.te=x.te=.7;else if(i==="jump"){h=.5+.9*a,m={tp:-1.2-.9*a,to:.5,te:.5},x={tp:-1.2-.9*a,to:.5,te:.5};const v=r%4;v>3.25&&v<3.5&&this.lastStep!==Math.floor(e)+.5&&!this.act&&(this.lastStep=Math.floor(e)+.5,this.danceJump=!0,this.perform(Math.floor(r/4)%2?"cheer":"jump"))}else if(i==="spin"){const v=(r-6)/2;v>-.25&&(g=re((v+.25)/.3)*(1-re((v-.86)/.14)),c=Nt(c,-.9,re((v+.25)/.25)),v>=0&&v<=1&&this.turning!==null&&(this.yaw=this.turning+Zr(v)*We),m={tp:-.35,to:.25+1*g,te:.3},x={tp:-.35,to:.25+1*g,te:.3}),v<0?this.turning=null:v<=1?this.turning??(this.turning=this.yaw-Zr(v)*We):this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null)}if(this.shift=c*this.hipX,this.shiftIn=10,this.danceDip=.09*this.legW*h,this.danceTwist=u,this.danceRoll=d,this.leanRest=f,this.qRest=-.05*a*a*a,this.arms[1].tp=m.tp,this.arms[1].to=m.to,this.arms[1].te=m.te,this.arms[0].tp=x.tp,this.arms[0].to=x.to,this.arms[0].te=x.te,this.oneLegPose(g),this.feet[0].mode==="ground"&&g>.02&&(this.feet[0].yaw=this.yaw),this.stepStand(t),g<.02)for(const v of this.feet){if(v.mode!=="ground")continue;const y=qn(-v.side*c/.72);v.pitch=-.38*y*y}}endDance(){this.dancing=!1,this.dmove=null,this.danceDip=this.danceTwist=this.danceRoll=0,this.danceOff=0,this.danceSteps=!1,this.danceJump=!1,this.lastBeat=null,this.leanRest=0,this.qRest=0,this.shiftIn=1,this.turning!==null&&(this.yaw=fn(this.turning),this.turning=null),this.oneLegPose(0)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*We*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Nt(-n*.97,-n*.55,re(t)),Nt(0,.1*n,re(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,l)=>new I(o,a,l),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=Sa/2,a=pn-.02,l=a+.07,c=Math.asin(Be((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(c+.19),l),u=Math.asin(Be((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),p=this.hipX+.03,m=-.08,x=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(m,0,0))),g=this.fromPivot(x,m,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,w=g.head.y-.08-.04;return M*M-w*w>.35*.35&&(g.hands=[this.palm(g.head,m,0,0,-.12,.92),this.palm(g.head,m,0,1,.12,.92)]),g}case"lie":{const a=Math.PI/2,l=e(-.25,.5+Sa,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new me().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=Sa/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new me().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=o*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new I(c.x+Math.sin(r)*f,Math.max(a,c.y-h),c.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new I(c*(.5+Sa/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new I(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(fn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new I(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new I(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var m,x;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,l=r.y+.03*e,c=.12*t,h=Math.sqrt(2*ze*(l-(r.y-a))),u=c+h/ze+Math.sqrt(2*(l-o.y)/ze),f=u+.12*t,d=[],p=[];for(let g=0;;g=Math.min(f,g+1/40)){if(g<=c){const M=re(g/c);d.push(this.fromPivot(new I(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(g<u){const M=g-c,w=M/(u-c),v=re(w),y=new I(0,r.y-a+h*M-.5*ze*M*M,o.z*v),S=[0,1].map(b=>n.ankles[b].clone().lerp(i.ankles[b],v)),E=Nt(0,i.feet[0],v),_=w>.5?[((m=i.hands[0])==null?void 0:m.clone())??null,((x=i.hands[1])==null?void 0:x.clone())??null]:[null,null];d.push(this.fromPivot(y,Nt(.08,i.lean,v),0,S,[E,E],_,v))}else d.push(i);if(p.push(g/f),g>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var w,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(y,S)=>new me().setFromEuler(this.e1.set(y,0,S)),a=o(e.lean,e.roll),l=o(n.lean,n.roll),c=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,l,y,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,p=Math.sqrt(2*ze*(f-i.y)),m=d+p/ze+Math.sqrt(2*(f-r.y)/ze),x=m+.2*t,g=[],M=[];for(let y=0;;y=Math.min(x,y+1/40)){if(y<=d){const S=re(y/d);g.push(this.fromPivot(i.clone(),Nt(e.lean,u,S),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((w=e.hands[0])==null?void 0:w.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<m){const S=y-d,E=S/(m-d),_=re(E),b=new I(Nt(i.x,r.x,_),i.y+p*S-.5*ze*S*S,Nt(i.z,r.z,_)),A=Nt(u,n.lean,_),C=Nt(0,n.roll,_),P=o(A,C),U=b.clone().add(new I(0,.5,0).applyQuaternion(P)),F=[0,1].map(q=>{const et=Nt(c[q].length(),h[q].length(),_),X=c[q].clone().normalize().lerp(h[q].clone().normalize(),_).normalize().multiplyScalar(et).applyQuaternion(P),Z=this.hipOf(U,P,q,1).add(X);return Z.y=Math.max(Z.y,this.footH+.02),Z}),O=[0,1].map(q=>Nt(e.feet[q],n.feet[q],_)),Y=[0,1].map(q=>{const et=e.hands[q],X=n.hands[q];return et&&X?et.clone().lerp(X,_):X&&E>.5?X.clone():null});g.push(this.fromPivot(b,A,C,F,O,Y,1))}else g.push(n);if(M.push(y/x),y>=x)break}return{keys:g,at:M,dur:x,t:0,to:"lie",thud:m/x,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/x,pushDone:!1}}springUp(t){var S,E;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ze*(c-o.y)),f=h+u/ze+Math.sqrt(2*(c-(a.y-l))/ze),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,m=t==="lie"?i.roll-.35:i.roll,x=new me().setFromEuler(this.e1.set(i.lean,0,i.roll)),g=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,x,_,i.hips))),M=new I(a.x,a.y-l,a.z),w=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new I(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const b=re(_/h);v.push(this.fromPivot(o.clone(),Nt(i.lean,p,b),Nt(i.roll,m,b),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((S=i.hands[0])==null?void 0:S.clone())??null,((E=i.hands[1])==null?void 0:E.clone())??null],i.hips))}else if(_<f){const b=_-h,A=b/(f-h),C=new I(Nt(o.x,a.x,re(A)),o.y+u*b-.5*ze*b*b,Nt(o.z,a.z,re(A))),P=Nt(p,0,re(A)),U=Nt(m,0,re(Math.min(1,A*1.4))),F=new me().setFromEuler(this.e1.set(P,0,U)),O=C.clone().add(new I(0,.5,0).applyQuaternion(F)),Y=re(Math.min(1,A*1.3)),q=Nt(i.hips,0,Y),et=[0,1].map(dt=>{const H=Nt(g[dt].length(),w[dt].length(),A)-.08*n*Math.sin(Math.PI*A),V=g[dt].clone().normalize().lerp(w[dt].clone().normalize(),Y).normalize(),L=this.hipOf(O,F,dt,q).addScaledVector(V,H);return L.y=Math.max(L.y,this.footH+.02),L}),X=[0,1].map(dt=>Nt(i.feet[dt],0,re(A))),Z=O.y-.08<this.armLen*.92,it=[0,1].map(dt=>Z&&i.hands[dt]&&i.hands[dt].y<.15?i.hands[dt].clone():null);v.push(this.fromPivot(C,P,U,et,X,it,q))}else{const b=re((_-f)/(d-f));v.push(this.fromPivot(new I(a.x,Nt(a.y-l,a.y,b),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=qn(e.t/e.dur),l=e.linear?a:re(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=qn((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=nr(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(We*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?re(e.t/n):e.t>e.dur-i?re((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(We*(e.kind==="chin"?4.5:5.5)*o)*re(o/.15)*re((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(x,g)=>x&&g?x.clone().lerp(g,n):n<.5?x?x.clone():null:g?g.clone():null,r=Nt(t.lean,e.lean,n),o=Nt(t.roll,e.roll,n),a=(x,g)=>new me().setFromEuler(this.e1.set(x,0,g)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Nt(t.hips,e.hips,n),d=[0,1].map(x=>{const g=t.ankles[x].clone().sub(this.hipOf(t.head,l,x,t.hips)),M=e.ankles[x].clone().sub(this.hipOf(e.head,c,x,e.hips)),w=Nt(g.length(),M.length(),n),v=Nt(t.ankles[x].y,e.ankles[x].y,n),y=this.hipOf(u,h,x,f),S=Nt(g.x,M.x,n),E=Nt(g.z,M.z,n),_=Math.hypot(S,E),b=y.y-v,A=Math.sqrt(Math.max(0,w*w-b*b)),C=new I(y.x,Math.max(v,y.y-w),y.z);return _>1e-4&&(C.x+=S/_*A,C.z+=E/_*A),C.y=Math.max(C.y,this.footH+.02),C}),p=x=>{const g=t.hands[x],M=e.hands[x];if(!g||!M)return i(g,M);const w=Math.atan2(g.x-t.head.x,g.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),y=w+fn(v-w)*n,S=Nt(Math.hypot(g.x-t.head.x,g.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new I(u.x+Math.sin(y)*S,Nt(g.y,M.y,n),u.z+Math.cos(y)*S)},m=[p(0),p(1)];return m.forEach((x,g)=>{x&&(this.outsideBody(x,u,h,this.arms[g].side),x.y=Math.max(x.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Nt(t.feet[0],e.feet[0],n),Nt(t.feet[1],e.feet[1],n)],hands:m,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(r.setComponent(l,c*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new I(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",r(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new me().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new me().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*re((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=r(c,new I),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/wa));a<=Math.min(r.length-1,Math.ceil((e+i)/wa));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Be(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Be(fn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=nr(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new I);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*We*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=re(n/.15)*(1-re((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+Zr((n-.12)/.74)*We,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*qn(n/.45)):0,r=n>.4?Math.sin(Math.PI*qn((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=fn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=re(e.t/i);this.vy=0,this.pos.y=Nt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Be(fn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=re(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Nt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/ze),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ze);this.vy=ze*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ze*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Be(fn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*qn(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Nt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Be(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new I((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new I(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=We*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Be(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=o?Nt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=We*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(o?3.5*Be(a,-12,12):0))*t,this.lean=Be(this.lean+this.leanV*t,-.6,.7),this.roll=Be(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,p=Nt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const m of this.arms)m.tp=(m.side===-1?1:-1)*p*Math.cos(We*(this.phase-.04)),m.to=m.side===this.wallSide?.03:Nt(.07,.2,d),m.te=Nt(.24,1.55,d)+Math.max(0,-m.tp)*.35}else if(!this.act&&!this.dancing)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=We*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=re(r),a=Nt(i.from.x,i.to.x,o),l=Nt(i.from.z,i.to.z,o),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Nt(i.from.y,i.to.y,re((r-.15)/.75))+c*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,m=f/d,x=Math.min(pn+.08+.35*(1-r),(1-o)*d+pn+.04);let g=-1/0;for(let E=0;E<=4;E++){const _=Ii-.04+(x-Ii+.04)*(E/4);g=Math.max(g,this.world.groundAt(a+p*_,l+m*_))}const M=g+.07*(1-re((r-.82)/.18)),w=Math.max(h,r>.97?i.to.y:M);i.sy=w>i.sy?w:i.sy+(w-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(w,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+fn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),y=Math.cos(i.yaw),S=i.ankle.y;for(let E=0;E<8;E++){const _=i.ankle.y-this.footH*.5,b=this.kneeAt(i,this.t2),A=b.x+v*.07,C=b.z+y*.07,P=(this.world.solidAt(b.x,b.y,b.z)||this.world.solidAt(A,b.y-.07,C))&&this.world.groundAt(A,C)<b.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*pn,_,i.ankle.z+y*pn)&&!P||i.ankle.y-S>.45)break;i.ankle.y+=.06}i.toe=Nt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),re(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,o.y-i.ankle.y),c=P0-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*c*pn,d=i.ankle.y-this.footH+h*pn,p=i.ankle.z+l*c*pn;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*o*_n,u=i.ankle.z+c*o*_n,f=i.ankle.y-this.footH*o+_n*a,d=(this.world.groundAt(h+l*(pn-_n),u+c*(pn-_n))+.005-f)/(pn-_n);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(Be(d,-1,1))))}}}}const yc=5,ib=4935768,Vd=.3,sb=14;function rb(){const s=new Ue(.11,_n-Ii-.01).rotateX(-Math.PI/2).translate(0,0,(_n+Ii)/2-.005),t=new Ue(.11,pn-_n-.02).rotateX(-Math.PI/2).translate(0,0,(pn+_n)/2+.01),e=Tw([s,t]);return s.dispose(),t.dispose(),e}const Gd=72,ob=2.6;let Jr=null;function ab(){if(Jr)return Jr;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Jr=new ps(s),Jr.colorSpace=Ne,Jr}class lb{constructor(){R(this,"group",new he);R(this,"puffs",[]);R(this,"dust");R(this,"zeds",[]);R(this,"prints",[]);R(this,"printGeo",rb());R(this,"own",[]);R(this,"m",new Kt);R(this,"q",new me);R(this,"s",new I);const t=new en(1,1,1),e=new qa({color:15987958});this.dust=new xr(t,e,Gd),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new Ye({color:ib,transparent:!0,opacity:Vd,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new _t(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>yc+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Gd&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new Dn(Math.random(),Math.random(),Math.random())})}z(t){const e=new ml({map:ab(),transparent:!0,depthWrite:!1,opacity:0}),n=new Xh(e);this.group.add(n),this.zeds.push({s:n,age:0,life:ob,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<yc?1:Math.max(0,1-(o-yc+1)/3),l=1-Math.min(1,Math.max(0,(i.age-sb)/3)),c=Vd*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const ns=.12,Qr={thick:.07,long:.15,wide:.135},Wd=2.6,cb=2.9,jr=2.5,ba={back:-.55,fwd:2.1,inward:-.22,out:1},ir={up:-P0,down:.95,side:.3,twist:.35},_c={flex:1.55,side:.45,turn:1.6},ke=(s,t,e)=>s<t?t:s>e?e:s,wc=(s,t,e)=>s+(t-s)*e;function Ea(s,t,e,n){const i=new en(ns,s-t,ns).translate(0,(s+t)/2,0);return n.push(i),new _t(i,e)}function Sc(s,t,e){return e.push(s),new _t(s,t)}const Cn=new I,yn=new I,ui=new I,ll=new Kt;function cl(s,t,e){return yn.copy(s).negate().normalize(),ui.copy(t).addScaledVector(yn,-t.dot(yn)),ui.lengthSq()<1e-8&&ui.set(1,0,0).cross(yn),ui.normalize(),Cn.crossVectors(yn,ui),ll.makeBasis(Cn,yn,ui),e.setFromRotationMatrix(ll)}const pr=new I,ai=new I,rs=new I,Da=new I,Rh=new I,Xd=new me;function Ss(s,t,e,n,i,r,o,a=Math.PI){pr.subVectors(t,s);const l=pr.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=ke(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?ai.set(0,-1,0):ai.copy(pr).divideScalar(l);const u=ke((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);rs.copy(i).addScaledVector(ai,-i.dot(ai)),rs.lengthSq()<1e-8&&rs.set(0,0,1).addScaledVector(ai,-ai.z),rs.normalize(),Da.copy(s).addScaledVector(ai,e*u).addScaledVector(rs,e*f),Rh.copy(s).addScaledVector(ai,h),cl(pr.subVectors(Da,s),i,r),cl(Rh.sub(Da),i,Xd),o.copy(r).invert().multiply(Xd)}const ji=new Dn,hb=new I;function qd(s,t,e,n,i="XYZ"){ji.setFromQuaternion(s,i);const r=ke(ji.x,t[0],t[1]),o=ke(ji.y,e[0],e[1]),a=ke(ji.z,n[0],n[1]);(r!==ji.x||o!==ji.y||a!==ji.z)&&s.setFromEuler(ji.set(r,o,a,i))}class ub{constructor(t,e,n){R(this,"root",new he);R(this,"fx",new lb);R(this,"motion");R(this,"placed",!1);R(this,"face");R(this,"world");R(this,"pelvis",new he);R(this,"turn",new he);R(this,"squash",new he);R(this,"legs",[]);R(this,"arms",[]);R(this,"solid",[]);R(this,"own",[]);R(this,"look",null);R(this,"targets",[null,null]);R(this,"talkCh",null);R(this,"clock",0);R(this,"lastBreath",0);R(this,"showing",null);R(this,"yawLook",0);R(this,"pitchLook",0);R(this,"a2");R(this,"v1",new I);R(this,"v2",new I);R(this,"v3",new I);R(this,"v4",new I);R(this,"v5",new I);R(this,"qa",new me);R(this,"qb",new me);R(this,"qc",new me);R(this,"qd",new me);R(this,"qm",new Kt);R(this,"headCap",0);R(this,"scratchSeen",null);R(this,"sc1",new I);R(this,"sc2",new I);R(this,"sc3",new I);R(this,"qf",new me);R(this,"pts",[0,1,2,3,4].map(()=>new I));R(this,"kg",[0,1,2,3,4,5].map(()=>new I));this.world=n,this.motion=new nb(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new tb(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=xu(t),a=new Rt().setRGB(i/255,r/255,o/255,Ne);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new qa({color:t});this.own.push(n);const i=ns/2;if(!e.legless)for(const o of[-1,1]){const a=new he,l=new he,c=new he,h=new he;a.position.set(o*e.hipX,0,0);const u=Ea(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=Ea(i,-e.shin-i,n,this.own);l.add(f),c.position.y=-e.shin;const d=Sc(new en(ns,e.footH,_n-Ii).translate(0,-e.footH/2,(_n+Ii)/2),n,this.own);h.position.set(0,-e.footH,_n);const p=Sc(new en(ns,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:o}),this.solid.push(u,f,d,p)}const r=this.a2;for(const o of[-1,1]){const a=new he,l=new he,c=new he,h=Ea(i,-r,n,this.own);a.add(h),l.position.y=-r;const u=Ea(i,-r-i,n,this.own);l.add(u),c.position.y=-r;const f=Sc(new en(Qr.thick,Qr.long,Qr.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new me;this.arms.push({shoulder:a,elbow:l,wrist:c,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new I,pushE:0,pushETo:new I,pushN:new I,flatW:0,palm:new I,palmDir:new I(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new I){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new I){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new I).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(ke(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(ke(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=wc(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=wc(this.face.roll,ke(this.face.roll,-.03,.03),this.headCap),a=1-ke(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+ns/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let m=0;m<h.length;m++){const x=this.squash.worldToLocal(this.v4.copy(h[m]));if(!(Math.abs(x.x)<.5+n&&x.y>.02-o&&x.y<1+n-o&&Math.abs(x.z)<.5+n))continue;const g=[[.5+n-x.x,1,0,0],[x.x+.5+n,-1,0,0],[.5+n-x.z,0,0,1],[x.z+.5+n,0,0,-1],[1+n-o-x.y,0,1,0]];i&&g.push([x.y+o,0,-1,0]);let M=null;for(const w of g)!i&&this.v2.set(w[1],w[2],w[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||w[0]<M[0])&&(M=w);M&&M[0]>c&&(c=M[0],l=m,u.set(M[1],M[2],M[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),p=rs.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),l=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?ke(c,-.2,.7):ke(c,-.7,.2);if(h!==c){const S=Math.hypot(l.x,l.z);l.x=Math.sin(h)*S,l.z=Math.cos(h)*S}let u=o.q;if(o.mode!=="free"&&Math.abs(c-h)>ir.twist*.85){const S=c-h-Math.sign(c-h)*ir.twist*.85;u=this.qf.setFromAxisAngle(ui.set(0,1,0),-S).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(Cn.set(i.side*(.12+1.2*f),L0(-a.y,t.L),0)),p=hb.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const S=ke(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,wc(.6,1,S)).addScaledVector(p,1-.85*S);const E=ke(-a.z/.25,0,1);d.z+=1.6*E,d.addScaledVector(p,-.9*E)}const m=o.mode==="free"?cb:Wd;Ss(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,m),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(Cn.set(i.side*.3,0,0)),m);const x=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),g=Math.atan2(x.z,-x.y),M=Math.asin(ke(x.x*i.side,-1,1)),w=ke(g,ba.back,ba.fwd),v=ke(M,o.mode==="free"?-.45:ba.inward,ba.out);if(w!==g||v!==M){const S=yn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(w),Math.cos(v)*Math.sin(w));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(x,S))}o.mode==="free"&&this.kneeOverGround(i,a,m),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const y=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(y.invert()).multiply(u),qd(i.ankle.quaternion,[ir.up,ir.down],[-.35,ir.twist],[-.3,ir.side]),i.toes.rotation.set(ke(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Wd){const o=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const m=this.v4.crossVectors(h,d).normalize();m.dot(i)<0&&m.negate();let x=Math.PI/2;for(let M=1;M<=18;M++){const w=M/18*(Math.PI/2);if(f.y+p*(Math.cos(w)*d.y+Math.sin(w)*m.y)<=n){x=w;break}}const g=d.multiplyScalar(Math.cos(x)).addScaledVector(m,Math.sin(x));Ss(a,l,o.thigh,o.shin,g,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+ns/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),o.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,o);const p=a.length();if(p<1e-4)return;a.divideScalar(p),l.crossVectors(c,a).normalize(),l.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let m=-1;for(let g=1;g<=24&&m<0;g++){const M=g/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,p*Math.cos(M)).addScaledVector(l,p*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+ns/2&&(m=M)}if(m<0)return;const x=h.copy(a).multiplyScalar(Math.cos(m)).addScaledVector(l,Math.sin(m));Ss(u,e,i.thigh,i.shin,x,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[o(l)]=l),c){const d=o(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const m=e.arms[p],x=this.v2.set(d.side*.5,-.35,-1);if(f){x.set(0,1,0).applyQuaternion(f);const b=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();x.dot(b)>.3&&x.set(0,1,0),x.multiplyScalar(.45).add(yn.set(0,0,-1))}d.fk[0].setFromEuler(new Dn(m.pitch,0,d.side*Math.max(.04,m.out))),d.fk[1].setFromAxisAngle(Cn.set(1,0,0),-ke(m.elbow,0,jr));let g=0,M=!1;const w=m.reach??(h?a[p]:null);if(w){const b=d.shoulder.position;if(m.reach&&m.flat){M=!0;const A=d.shoulder.getWorldPosition(this.v3),C=d.elbow.getWorldPosition(Da);d.palm.copy(w);const P=pr.set(w.x-A.x,0,w.z-A.z);P.lengthSq()>1e-6&&P.normalize();const U=ai.set(w.x-C.x,0,w.z-C.z).addScaledVector(P,.25);U.lengthSq()<1e-4&&U.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),U.normalize(),d.palmDir.lerp(U,d.flatW<.05?1:Math.min(1,t*10)).normalize();const F=this.v1.copy(w).add(yn.set(0,Qr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),O=this.turn.worldToLocal(F);Ss(b,O,n,i,x,d.ik[0],d.ik[1],jr)}else{const A=this.turn.worldToLocal(this.v1.copy(w));if(m.reach||w===c){if(w===c){const C=d.shoulder.getWorldPosition(Rh),P=pr.set(ke(C.x,c.x-.5,c.x+.5),ke(C.y,c.y-.5,c.y+.5),ke(C.z,c.z-.5,c.z+.5));P.addScaledVector(ai.subVectors(C,P).normalize(),.06),this.turn.worldToLocal(A.copy(P))}A.distanceTo(b)<=r*.98||m.reach?Ss(b,A,n,i,x,d.ik[0],d.ik[1],jr):this.pointAlong(d,A)}else this.pointAlong(d,A)}g=m.reach?m.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&m.reach){const b=d.shoulder.position,A=e.headDrop,C=this.turn.worldToLocal(this.sc1.copy(m.reach).add(yn.set(0,Qr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),P=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-A-.15,.62):this.sc2.set(d.side*.4,1.14-A,-.04+.05*v.wiggle);let U=C;if(v.kind==="chin")U=C.lerp(P,v.w);else{const F=this.sc3.set(d.side*.9,1.25-A,.1),O=v.w,Y=1-O;U=C.multiplyScalar(Y*Y).addScaledVector(F,2*O*Y).addScaledVector(P,O*O)}x.lerp(v.kind==="chin"?Cn.set(d.side,-.3,.1):Cn.set(d.side,.35,-.15),v.w),Ss(b,U,n,i,x,d.ik[0],d.ik[1],jr),M=v.w<.05,g=1}d.aimW+=((w?g:0)-d.aimW)*Math.min(1,t*(m.reach?30:7)),d.flatW+=((M?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const b=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);cl(b,x,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const S=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),E=M?null:this.pushOut(S,.13,d.shoulder.getWorldPosition(this.v3));if(E?(d.pushTo.copy(E),d.pushN.subVectors(E,S).normalize(),d.push=1):d.push=0,d.push>0){const b=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));b.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const A=this.turn.worldToLocal(this.v1.copy(d.pushTo));Ss(d.shoulder.position,A,n,i,b,this.qa,this.qb,jr),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(Cn.set(1,0,0),ke(-.1-.05*m.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const b=d.elbow.getWorldQuaternion(this.qb);Cn.set(0,this.v3.set(1,0,0).applyQuaternion(b).y<0?-1:1,0),yn.copy(d.palmDir).negate(),ui.crossVectors(Cn,yn).normalize(),yn.crossVectors(ui,Cn).normalize(),ll.makeBasis(Cn,yn,ui);const A=this.qc.setFromRotationMatrix(ll),C=b.invert().multiply(A);qd(C,[-.45,_c.side],[-1.6,_c.turn],[-1.55,_c.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,C,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=rs.crossVectors(r,o).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=rs.subVectors(e,t.shoulder.position);cl(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(Cn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,r+h,o+u))continue;const f=c?(i+c*.5-t.x)*c:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<l&&(l=p,a=new I(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new I).distanceTo(t.feet[l].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new I);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const fb="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",db="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",pb="I hid your mouse pointer! If you want it back, press the {ESC} key!",mb="Click anywhere to look around.",gb="Click anywhere to carry on.",xb="That's it! This way.",vb="Hi, Welcome to Robyn Miller's Listening Room. Feel free to take a look around.",Mb="You are currently one of {x} people in the room.",yb="Things are quiet. You are the only person in the room.",_b="Have a seat and listen to some of my favorite grooves, man.",wb="Just so you know, the sweet spot for listening to Robyn's awesome tunes is the couch. And it's more comfy!",Sb=["Ooh. I know this one.","Now this has a beat.","Excuse me. I have to.","Finally, a groove."],bb=["I've been practising.","Smooth, right?","Don't watch my feet. Watch the hat.","I learned this from a record. This record, actually.","Try to keep up.","I don't dance for just anybody. Well. I do."],Eb=["You may think that I'm not an appropriate host for a listening room? Hm. Well maybe you're not an appropriate guest for our listening room!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Have a seat. The couch is very forgiving.","That couch has been sat on by a lot of very important listeners. Mostly me.","The green velvet is a little worn. That means it works.","Go on, try the piano. It doesn't bite. The lid might.","I'd play the piano myself, but my arms only reach middle C.","Those speakers are taller than me. Most things are.","I asked the speakers to keep it down. They said they'd think about it.","The records are in the stand on the table. Sit on the couch and have a look. Gently.","Somewhere in that stand is my favourite record. I'm not telling which.","Turn it up? I don't know where the knob is. I've been told not to look for it.","Shh. The room is listening.","The best seat is the middle of the couch. Second best: anywhere on the couch.","Every room needs a host. This one got me. Lucky room.","I polished the piano myself. You can see me in it. Hello, me.","Music is best enjoyed slowly. Like soup.","I used to be just a block. Now I'm a block with legs. That's progress.","No hurry. I'm on listening-room time.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","If you hear snoring later, that was the bass.","Those little lights on the amplifier? I counted them. Twice. Two different answers.","Close your eyes. Now open them. See? Still a listening room.","Don't mind me. I'm just here for the ambience. I am the ambience.","I'm a professional. I've hosted at least one listener before. Possibly two.","Did you know a piano has eighty-eight keys? I checked. With my hat.","The lights are low on purpose. Ears work better in the dark. I read that somewhere. On a record.","That cord goes from the record player all the way to the back of the cabinet. I followed it. It took a while.","If you need me, I'll be right behind you. Always. Right behind you.","Do you play? You have a piano player's way of standing.","Some people listen with their ears. I listen with my whole block."],Tb=["Yes? Can I help you?","Hey! Listen to the room, not to me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a record.","Me? I'm not part of the furniture. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was humming.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],Ab=["Hm? Oh! I wasn't asleep. I was listening with my eyes closed.","I'm up! I'm up!","Was I snoring? I don't snore. That was the bass.","Huh? Who? Oh. You. Welcome back."],Rb=["Back again! I knew you would be.","Welcome back. I kept the couch warm.","Oh good, you're back. It's quiet in here without you."],Cb=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an ear on things.","Bye! The records will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],Pb=["Lovely, isn't it?","Good choice.","That's one of my favourites. Don't tell the others."],Lb=["Oh! Someone else just came in. There are {x} of you now.","Another listener! That makes {x} of you."],Ib=["Somebody just left. Now there are {x} of you."],Db=["Somebody just left. It's just you and me now."];function ri(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const Re=.2,Nb=Math.sqrt(9.81/(22*Re)),Ub={...GS,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},to=(s,t,e,n=new I)=>n.set(s/Re,t/Re-.5,e/Re),Yd=(s,t=new I)=>t.set(s.x*Re,(s.y+.5)*Re,s.z*Re);class zb{constructor(t,e,n,i=!1){R(this,"scene",new Wh);R(this,"cam",new je);R(this,"mcam",new je);R(this,"shadow");R(this,"rig");R(this,"count",null);R(this,"onEnter",()=>{});R(this,"onLeave",()=>{});R(this,"el");R(this,"textEl");R(this,"bubble",null);R(this,"onKey",()=>{});R(this,"hidden",!1);R(this,"wasLocked",!1);R(this,"hidSaid",!1);R(this,"queue",[]);R(this,"used",new Set);R(this,"grid",null);R(this,"stage","waiting");R(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});R(this,"inside",!1);R(this,"wasInside",!1);R(this,"wasOut",!0);R(this,"quiet",0);R(this,"resting","no");R(this,"soughtRest",!1);R(this,"idleIn",6);R(this,"remarkIn",45);R(this,"followIn",0);R(this,"hemi");R(this,"sun");R(this,"dim",1);R(this,"glanceIn",2);R(this,"glanceAt",null);R(this,"dest",null);R(this,"last",{x:0,z:0,yaw:0,pitch:0});R(this,"countSaid",0);R(this,"lastCrowd",-999);R(this,"clock",0);R(this,"standH",0);R(this,"v1",new I);R(this,"v2",new I);R(this,"danceBeat",()=>null);R(this,"dancingNow",!1);R(this,"danceSpotIn",0);R(this,"danceTalkIn",0);R(this,"danceRound",[]);R(this,"danceAt",-1);R(this,"danceNext",0);R(this,"bpmAt",null);R(this,"bpmSeen",110);R(this,"couchAt",-1e9);R(this,"sweetAt",-1e9);R(this,"scaleM",new Kt().makeScale(Re,Re,Re));this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(f,d)=>this.wallAt(f*Re,d*Re)?this.gallery.arch.H/Re:-.5,solidAt:(f,d,p)=>{const m=(d+.5)*Re;return m<0?!0:m<this.gallery.arch.H&&this.wallAt(f*Re,p*Re)}};this.rig=new ub(Ub,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.hemi=new rx(16777215,13815492,1.9),this.scene.add(this.hemi);const o=new hx(16777215,1.5);this.sun=o,o.position.set(.4,1,.7),this.scene.add(o.target),this.scene.add(o);const a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.62)"),c.addColorStop(.55,"rgba(0,0,0,0.3)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);const h=new ps(a);this.shadow=new _t(new Ue(1.5,1.2),new Ye({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),u.append(this.textEl),this.el.append(u),this.textEl.addEventListener("click",f=>{var p;const d=(p=f.target.closest(".hk"))==null?void 0:p.dataset.k;d&&(f.preventDefault(),f.stopPropagation(),this.onKey(d),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*Re,z:this.rig.pos.z*Re}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/Re,t.z/Re,0),this.dest=null}gridFor(){var d;if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(c*h),f=((d=this.gallery.furniture)==null?void 0:d.solids)??[];for(let p=0;p<h;p++)for(let m=0;m<c;m++){const x=a+(m+.5)*n,g=l+(p+.5)*n,M=x>e.x0+i&&x<e.x1-i&&g>e.z0+i&&g<e.z1-i,w=g>e.z1+r+i,v=x>t.entrance.a+i&&x<t.entrance.b-i&&g>e.z1-i-.01&&g<e.z1+r+i+.01;!M&&!w&&!v||t.solids.some(y=>x>y.x0-i&&x<y.x1+i&&g>y.z0-i&&g<y.z1+i)||f.some(y=>{const S=x-y.x,E=g-y.z,_=S*y.c-E*y.s,b=S*y.s+E*y.c;return Math.abs(_)<y.hw+i*.8&&Math.abs(b)<y.hd+i*.8})||(u[p*c+m]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[l,c]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(l,c))return null;if(!h(o,a)){let v=null,y=1/0;for(let S=-4;S<=4;S++)for(let E=-4;E<=4;E++)h(o+E,a+S)&&E*E+S*S<y&&(y=E*E+S*S,v=[o+E,a+S]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,y)=>{const S=Math.abs(v-l),E=Math.abs(y-c);return Math.max(S,E)+.414*Math.min(S,E)},m=[[p(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const x=c*n.nx+l;for(;m.length;){let v=0;for(let _=1;_<m.length;_++)m[_][0]<m[v][0]&&(v=_);const[,y]=m.splice(v,1)[0];if(y===x)break;const S=y%n.nx,E=Math.floor(y/n.nx);for(const[_,b]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const A=S+_,C=E+b;if(!h(A,C)||_&&b&&(!h(S+_,E)||!h(S,E+b)))continue;const P=C*n.nx+A,U=f[y]+(_&&b?1.414:1);U<f[P]&&(f[P]=U,d[P]=y,m.push([U+p(A,C),P]))}}if(!isFinite(f[x]))return null;const g=[];for(let v=x;v!==-1;v=d[v])g.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});g[g.length-1]={x:t,z:e};const M=[i];let w=0;for(;w<g.length-1;){let v=g.length-1;const y=M[M.length-1];for(;v>w+1&&!this.clear(y.x,y.z,g[v].x,g[v].z);)v--;M.push(g[v]),w=v}return M}goTo(t,e,n,i=!1){const r=this.route(t,e);if(!r||r.length<2)return!1;let o=0;for(let c=1;c<r.length;c++)o+=Math.hypot(r[c].x-r[c-1].x,r[c].z-r[c-1].z);if(o<.25)return!1;const a=i&&o<3.2?"walk":o>3.2?"bound":o>1.6?"run":"walk",l=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(r.slice(1).map(c=>({x:c.x/Re,z:c.z/Re})),a,()=>{this.dest=null},l),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Ls(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(t=!1){const e=this.player.pos,n=this.at;if(this.goodSpot(n.x,n.z)&&!this.dest)return;const i=-Math.sin(this.player.yaw),r=-Math.cos(this.player.yaw),o=Math.cos(this.player.yaw),a=-Math.sin(this.player.yaw),l=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,h=1/0;if(l.forEach(([f,d],p)=>{const m=e.x+i*f+o*d,x=e.z+r*f+a*d;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-n.x,x-n.z)+p*.15;g<h&&(h=g,c={x:m,z:x})}),!c)return;const u=c;this.dest&&Math.hypot(this.dest.x-u.x,this.dest.z-u.z)<.8||this.goTo(u.x,u.z,t?"strut":void 0,t)}stageSpot(){const t=this.gallery.data.layout.pieces??[],e=t.find(a=>a.id==="table"),n=t.find(a=>a.id==="couch");if(!e||!n)return null;const i=e.x-n.x,r=e.z-n.z,o=Math.hypot(i,r)||1;for(const a of[.9,1.1,.75]){const l=e.x+i/o*a,c=e.z+r/o*a;if(this.freeAt(l,c))return{x:l,z:c}}return null}buildRound(){const t=this.arch.inner,e=1.05,n=t.x0+e,i=t.x1-e,r=t.z0+e,o=t.z1-e,a=[],l=(p,m,x,g)=>{const M=Math.max(1,Math.round(Math.hypot(x-p,g-m)/2));for(let w=0;w<M;w++)a.push({x:p+(x-p)*w/M,z:m+(g-m)*w/M})},c=(n+i)/2;l(c,r,i,r),l(i,r,i,o),l(i,o,n,o),l(n,o,n,r),l(n,r,c,r);const h=(t.x0+t.x1)/2,u=(t.z0+t.z1)/2,f=[],d=this.stageSpot();d&&f.push({...d,stage:!0});for(const p of a)for(let m=0;m<=3;m++){const x=m*.18,g=p.x+(h-p.x)*x,M=p.z+(u-p.z)*x;if(this.freeAt(g,M)&&!f.some(w=>Math.hypot(w.x-g,w.z-M)<1.2)){f.push({x:g,z:M,stage:!1});break}}this.danceRound=f}danceAbout(t){if(this.rig.busy())return;this.danceRound.length||this.buildRound();const e=this.danceRound;if(!e.length)return;const n=this.at;if(this.danceAt<0){const i=e.findIndex(l=>Math.hypot(l.x-n.x,l.z-n.z)<.6);let r=0;e.forEach((l,c)=>{Math.hypot(l.x-n.x,l.z-n.z)<Math.hypot(e[r].x-n.x,e[r].z-n.z)&&(r=c)}),this.danceAt=i>=0?i:r;const o=i>=0&&e[i].stage;this.rig.motion.danceBag=o?["spin","jump","spin","jump","point"]:null;const a=this.danceBpm();this.danceSpotIn=(o?16:8)*(60/a)*(.9+Math.random()*.3);return}if(!((this.danceSpotIn-=t)>0))for(let i=1;i<=e.length;i++){const r=(this.danceAt+i)%e.length;if(this.goTo(e[r].x,e[r].z,"strut",!0)){this.danceNext=r,this.danceAt=-1,this.rig.motion.danceBag=null;return}}}danceBpm(){const t=this.danceBeat(),e=performance.now();if(t!==null&&this.bpmAt&&e-this.bpmAt.t>400){const n=(t-this.bpmAt.b)/((e-this.bpmAt.t)/1e3)*60;this.bpmAt={b:t,t:e},n>30&&n<240&&(this.bpmSeen=n)}else t!==null&&!this.bpmAt&&(this.bpmAt={b:t,t:e});return this.bpmSeen}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?yb:Mb),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT|ESC)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>bc(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=bc(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(bc(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=kb[i],l.textContent=Fb[i],this.textEl.append(l)}else{const l=i.slice(o-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(ri(Tb,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}couch(){this.stage!=="company"||this.hidden||this.clock-this.couchAt<45||(this.couchAt=this.clock,this.wake(),this.bubble&&(this.queue=[],this.endBubble()),this.say(_b,"happy"))}sweetSpot(){return this.stage!=="company"||this.hidden||this.bubble||this.clock-this.sweetAt<150?!1:(this.sweetAt=this.clock,this.wake(),this.say(wb,"happy"),!0)}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(ri(Pb,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(ri(Lb,this.used),"excited"):this.say(t<=1?Db[0]:ri(Ib,this.used),"curious"))}hit(t){const e=new Ts(to(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/Re);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Yd(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(ri(Ab,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){{const d=this.arch.inner,p=this.at,m=p.x>d.x0&&p.x<d.x1&&p.z>d.z0&&p.z<d.z1;this.dim+=((m?0:1)-this.dim)*(1-Math.exp(-2.5*t));const x=.3+.7*this.dim;this.hemi.intensity=1.9*x,this.sun.intensity=1.5*x,this.sun.color.setRGB(1,.84+.16*this.dim,.64+.36*this.dim)}this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.inv.hello||this.say(vb,"happy"),this.say(this.countLine(),"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(ri(Rb,this.used),"happy")));const a=e.pos.z>o.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.stage==="company"&&(this.queue=[],this.wake(),this.say(ri(Cb,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const d=this.outsideSpot();this.goTo(d.x,d.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!e.seated&&this.say(gb,"pleased"),!this.wasLocked&&l&&!this.hidSaid&&!this.hidden&&(this.hidSaid=!0,this.say(pb,"pleased")),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;c&&(c.shown=Math.min(c.text.length,c.shown+t*34),c.until===1/0&&(c.until=this.clock+Math.max(3,1.2+c.text.split(/\s+/).length/3.6)),this.clock>c.until&&this.endBubble());const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=to(this.main.position.x,this.main.position.y,this.main.position.z,new I),f=this.stage==="company"&&this.inside&&!this.hidden?this.danceBeat():null;if(f!==null!==this.dancingNow&&(this.dancingNow=f!==null,n.motion.dance=this.dancingNow?()=>this.danceBeat():null,this.dancingNow&&(this.wake(),n.mood("happy"),this.danceRound=[],this.danceAt=-1,this.danceNext=0,this.danceSpotIn=2+Math.random()*3,this.danceTalkIn=40+Math.random()*40,!this.bubble&&Math.random()<.5&&this.say(ri(Sb,this.used),"happy"))),this.stage==="company"&&this.resting==="no"&&this.dancingNow?(this.danceBpm(),(this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.danceAbout(.45)),!this.bubble&&(this.danceTalkIn-=t)<=0&&(this.danceTalkIn=60+Math.random()*60,this.visible(5.5)&&this.say(ri(bb,this.used),"happy"))):this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(ri(Eb,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),(this.stage==="company"||this.stage==="waiting")&&!this.dancingNow){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const d=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),p=n.roomAt(n.pos.x,n.pos.z,d);if(!(p!=null&&p.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(d);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",d)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?db:fb,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(mb,"pleased"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(xb,"excited");const a=this.doorSpot();this.goTo(a.x,a.z,"strut");return}}after(t){this.rig.update(t*Nb);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const r=Math.max(.35,1-i/1.6);this.shadow.scale.set(r,r,1),this.shadow.material.opacity=.5*r*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,l=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/Re,l/Re,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=to(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(to(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/Re)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/Re,this.cam.far=t.far/Re,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Yd(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;to(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const bc=s=>s==="W"||s==="LEFT"||s==="RIGHT"||s==="ESC",Fb={W:"W",LEFT:"←",RIGHT:"→",ESC:"esc"},kb={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right",ESC:"Your mouse pointer back"};let Di=null;const Ob=/^((?!chrome|chromium|crios|fxios|edg|opr|android).)*safari/i.test(navigator.userAgent)&&!new URLSearchParams(location.search).has("direct");let lr=null,zi=null;function hl(){const s=$n();if(!lr)if(lr=s.createGain(),Ob&&typeof s.createMediaStreamDestination=="function"){const t=s.createMediaStreamDestination();lr.connect(t),zi=new Audio,zi.srcObject=t.stream,zi.play().catch(()=>{})}else lr.connect(s.destination);return lr}const Bb=()=>zi?`streamed to a player (${zi.paused?"stopped":"playing"})`:lr?"straight out":"not yet";function $n(){if(!Di){const s=window.AudioContext??window.webkitAudioContext;Di=new s({latencyHint:"interactive"})}return Di.state!=="running"&&Di.resume().catch(()=>{}),Di}const $d=()=>Di;let Kd=!1;function Hb(){const s=t=>{if(t instanceof KeyboardEvent&&(t.key==="Escape"||t.metaKey||t.ctrlKey))return;const e=$n(),n=navigator.audioSession;if(n&&n.type!=="playback"&&matchMedia("(pointer: coarse)").matches)try{n.type="playback"}catch{}if(hl(),zi!=null&&zi.paused&&zi.play().catch(()=>{}),Kd&&e.state==="running")return;Kd=!0;const i=e.createBufferSource();i.buffer=e.createBuffer(1,1,e.sampleRate),i.connect(hl()),i.start()};for(const t of["pointerdown","mousedown","touchend","keydown","click"])addEventListener(t,s,{capture:!0,passive:!0})}function Vb(s){if(!Di)return;const t=Di.listener,e=Di.currentTime,n=s.position,i=s.matrixWorld.elements,r=-i[8],o=-i[9],a=-i[10];t.positionX?(t.positionX.setValueAtTime(n.x,e),t.positionY.setValueAtTime(n.y,e),t.positionZ.setValueAtTime(n.z,e),t.forwardX.setValueAtTime(r,e),t.forwardY.setValueAtTime(o,e),t.forwardZ.setValueAtTime(a,e),t.upX.setValueAtTime(i[4],e),t.upY.setValueAtTime(i[5],e),t.upZ.setValueAtTime(i[6],e)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(r,o,a,i[4],i[5],i[6]))}const Zd=s=>`piano/n${s}.m4a`,Jd=90,Gb=48;class Wb{constructor(){R(this,"ctx",null);R(this,"files",new Map);R(this,"buffers",new Map);R(this,"decoding",new Map);R(this,"voices",[]);R(this,"out",null);R(this,"panner",null);R(this,"pedal",!1);R(this,"where",{x:0,y:1,z:0})}fetchAll(){for(let t=21;t<=108;t++)this.files.has(t)||this.files.set(t,fetch(Zd(t)).then(e=>{if(!e.ok)throw new Error(`${Zd(t)}: ${e.status}`);return e.arrayBuffer()}))}setPosition(t,e,n){if(this.where={x:t,y:e,z:n},this.panner&&this.ctx){const i=this.ctx.currentTime;this.panner.positionX.setValueAtTime(t,i),this.panner.positionY.setValueAtTime(e,i),this.panner.positionZ.setValueAtTime(n,i)}}wake(){if(!this.ctx){const t=$n();this.ctx=t;const e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=6,e.ratio.value=4,e.attack.value=.002,e.release.value=.25;const n=t.createPanner();n.panningModel="equalpower",n.distanceModel="inverse",n.refDistance=1.6,n.rolloffFactor=.7,this.panner=n,this.out=t.createGain(),this.out.gain.value=.9,this.out.connect(n).connect(e).connect(hl()),this.setPosition(this.where.x,this.where.y,this.where.z)}$n(),this.fetchAll()}async decodeAll(){const t=Array.from({length:88},(i,r)=>21+r).sort((i,r)=>Math.abs(i-60)-Math.abs(r-60));let e=0;const n=async()=>{const i=t[e++];if(i!==void 0)return await this.decode(i).catch(()=>{}),n()};await Promise.all([n(),n(),n(),n()])}decode(t){if(this.buffers.has(t))return Promise.resolve();let e=this.decoding.get(t);return e||(this.fetchAll(),e=this.files.get(t).then(n=>this.ctx.decodeAudioData(n.slice(0))).then(n=>{const i=n.getChannelData(0);let r=0;for(let a=0;a<Math.min(i.length,9600);a++)r=Math.max(r,Math.abs(i[a]));let o=0;for(;o<i.length&&Math.abs(i[o])<r*.02;)o++;this.buffers.set(t,{buf:n,at:Math.max(0,o-24)/n.sampleRate})}),this.decoding.set(t,e),e)}noteOn(t){if(t<21||t>108||!this.ctx||!this.out)return;if(!this.buffers.get(t)){this.decode(t).then(()=>this.start(t,!0));return}this.start(t,!1)}start(t,e){const n=this.ctx,i=this.buffers.get(t);for(const c of this.voices)c.m===t&&this.release(c,.03);this.voices.length>=Gb&&this.release(this.voices[0],.02);const r=n.createBufferSource(),o=n.createGain();r.buffer=i.buf,r.connect(o).connect(this.out);const a=n.currentTime;o.gain.setValueAtTime(e?.85:1,a),r.start(a,i.at);const l={m:t,src:r,gain:o,held:!0,t:a};r.onended=()=>{this.voices=this.voices.filter(c=>c!==l)},this.voices.push(l)}noteOff(t){for(const e of this.voices)e.m===t&&e.held&&(e.held=!1,!this.pedal&&t<Jd&&this.release(e))}setPedal(t){if(this.pedal=t,!t)for(const e of this.voices)!e.held&&e.m<Jd&&this.release(e)}allOff(){for(const t of[...this.voices])this.release(t,.15);this.pedal=!1}release(t,e){if(!this.ctx)return;const n=this.ctx.currentTime,i=e??(t.m<40?.12:t.m<60?.09:.06);t.gain.gain.cancelScheduledValues(n),t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.setTargetAtTime(0,n,i);try{t.src.stop(n+i*8)}catch{}this.voices=this.voices.filter(r=>r!==t)}get sounding(){return this.voices.length}get unpacked(){return this.buffers.size}}const eo="https://listening-music.robynmiller.workers.dev".replace(/\/$/,"")||null,Qd=(()=>{const t=new Uint8Array(844),e=new DataView(t.buffer),n=(r,o)=>{for(let a=0;a<4;a++)t[r+a]=o.charCodeAt(a)};n(0,"RIFF"),e.setUint32(4,836,!0),n(8,"WAVE"),n(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,800,!0),t.fill(128,44);let i="";for(const r of t)i+=String.fromCharCode(r);return`data:audio/wav;base64,${btoa(i)}`})(),ts=s=>!!s.getAttribute("src")&&!s.getAttribute("src").startsWith("data:");class Xb{constructor(){R(this,"album",null);R(this,"track",0);R(this,"playing",!1);R(this,"cueing",!1);R(this,"moving",!1);R(this,"needleTo",0);R(this,"route","trying");R(this,"lastError","");R(this,"el",null);R(this,"plain",null);R(this,"out",null);R(this,"room",null);R(this,"pan",[]);R(this,"meters",[]);R(this,"buf",new Float32Array(1024));R(this,"speakers",[{x:-1.5,y:1.2,z:0},{x:1.5,y:1.2,z:0}]);R(this,"inside",!0);R(this,"heard",0);R(this,"loudest",0);R(this,"plainVol",0);R(this,"parked",!1);R(this,"waiting",null);R(this,"starts",0);R(this,"holding",!1);R(this,"holdSince",0);R(this,"sought",!1);R(this,"seekedAt",0);R(this,"onChange",()=>{});R(this,"links",new Map);R(this,"asking",new Map);R(this,"readied",!1);R(this,"relinkAt",0)}get players(){return[this.route!=="plain"?this.el:null,this.route!=="speakers"?this.plain:null].filter(t=>!!t)}fromTop(){const t=this.waiting;this.parked=!1,this.waiting=null;const e=$n().currentTime;if(this.out.gain.cancelScheduledValues(e),this.out.gain.setValueAtTime(0,e),this.sought=!1,this.seekedAt=0,t){if(this.playing){const n=this.starts,i=this.addr(t);i?this.put(i):this.prime([t]).then(()=>{const r=this.addr(t);r&&n===this.starts&&this.playing&&this.put(r)})}}else for(const n of this.players){if(n.currentTime>.05){n===this.main&&(this.sought=!0,n.addEventListener("seeked",()=>{this.seekedAt=performance.now()},{once:!0}));try{n.currentTime=0}catch{}}n.paused&&this.playing&&n.play().catch(i=>this.failed(i))}this.holding=!0,this.holdSince=performance.now()}prime(t){if(!eo)return Promise.resolve();const e=Date.now(),n=[...new Set(t)].filter(o=>{var a;return!((((a=this.links.get(o))==null?void 0:a.until)??0)-e>12*6e4)&&!this.asking.has(o)}),i=t.map(o=>this.asking.get(o)).filter(Boolean);if(!n.length)return Promise.all(i).then(()=>{});if(n.length>150)return Promise.all([this.prime(n.slice(0,150)),this.prime(n.slice(150)),...i]).then(()=>{});const r=(async()=>{try{const o=await fetch(`${eo}/link`,{method:"POST",headers:{"content-type":"text/plain"},body:JSON.stringify({files:n})});if(!o.ok)throw new Error(`music server: ${o.status}`);const a=await o.json(),l=Date.now()+a.ttl*1e3-3e4;for(const[c,h]of Object.entries(a.links))this.links.set(c,{url:h,until:l})}catch(o){this.failed(o)}finally{for(const o of n)this.asking.delete(o)}})();for(const o of n)this.asking.set(o,r);return Promise.all([r,...i]).then(()=>{})}addr(t){if(!eo)return t;const e=this.links.get(t);return e&&e.until-Date.now()>5*6e4?e.url:null}ready(){if(!this.readied){this.wire();for(const t of[this.el,this.plain])ts(t)||(t.src=Qd,t.play().then(()=>{this.readied=!0}).catch(()=>{}))}}primeAlbums(t){this.prime(t.flatMap(e=>e.tracks.map(n=>n.file)))}failed(t){if((t==null?void 0:t.name)==="AbortError")return;const e=t;this.lastError=`${(e==null?void 0:e.name)??"Error"}: ${(e==null?void 0:e.message)??String(t)}`,console.warn("music:",this.lastError)}get element(){return this.route==="plain"?this.plain:this.el}get main(){return this.element}wire(){if(this.el)return;const t=$n(),e=()=>{const r=new Audio;return r.preload="auto",eo&&(r.crossOrigin="anonymous"),r.addEventListener("ended",()=>{r===this.main&&ts(r)&&this.next(!0)}),r.addEventListener("play",()=>{r===this.main&&!this.parked&&ts(r)&&(this.playing=!0,this.onChange())}),r.addEventListener("pause",()=>{r===this.main&&!this.parked&&ts(r)&&(this.playing=!1,this.onChange())}),r.addEventListener("error",()=>{ts(r)&&this.relink(r)}),r};this.el=e(),this.plain=e(),this.plain.volume=0;const n=t.createMediaElementSource(this.el),i=t.createChannelSplitter(2);this.out=t.createGain(),this.room=t.createGain(),n.connect(i);for(let r=0;r<2;r++){const o=t.createPanner();o.panningModel="equalpower",o.distanceModel="inverse",o.refDistance=2.4,o.rolloffFactor=.85;const a=t.createAnalyser();a.fftSize=1024,i.connect(a,r),i.connect(o,r),o.connect(this.out),this.pan.push(o),this.meters.push(a)}this.out.connect(this.room).connect(hl()),this.place()}setSpeakers(t,e){this.speakers=[t,e],this.place()}place(){const t=$d();if(!t)return;const e=t.currentTime;this.pan.forEach((n,i)=>{const r=this.speakers[i];n.positionX.setValueAtTime(r.x,e),n.positionY.setValueAtTime(r.y,e),n.positionZ.setValueAtTime(r.z,e)})}setInside(t){if(this.inside=t,!this.room)return;const e=$n();this.room.gain.setTargetAtTime(t?1:0,e.currentTime,.6)}start(t,e=!1){const n=this.route,i=++this.starts;this.parked=e,this.waiting=e?t:null,e&&(this.playing=!0),n!=="speakers"&&(this.plain.volume=n==="plain"?this.plainVol:0);const r=this.addr(t);if(r&&!e){this.put(r);return}for(const o of this.players)o.src=Qd,o.play().catch(()=>{});this.prime([t]).then(()=>{const o=this.addr(t);!e&&o&&i===this.starts&&this.put(o)})}put(t){for(const e of this.players)e.src=t,e.play().catch(n=>this.failed(n))}relink(t){var o;const e=this.album;if(!eo||!e||performance.now()-this.relinkAt<5e3)return;this.relinkAt=performance.now();const n=(o=e.tracks[this.track])==null?void 0:o.file,i=t.currentTime,r=this.playing&&t===this.main;n&&(this.links.delete(n),this.prime([n]).then(()=>{var l;const a=this.addr(n);!a||e!==this.album||n!==((l=e.tracks[this.track])==null?void 0:l.file)||(t.src=a,t.addEventListener("loadedmetadata",()=>{try{t.currentTime=i}catch{}r&&t.play().catch(c=>this.failed(c))},{once:!0}))}))}load(t,e=0,n=!1){if(!t.tracks.length)return;this.wire(),this.prime(t.tracks.map(r=>r.file));const i=$n();this.album=t,this.track=Math.max(0,Math.min(t.tracks.length-1,e)),this.cueing=n,this.out.gain.cancelScheduledValues(i.currentTime),this.out.gain.setValueAtTime(n?0:1,i.currentTime),this.route==="plain"&&n&&(this.plainVol=0),this.start(t.tracks[this.track].file,n),this.heard=0,this.loudest=0,this.onChange()}cued(){!this.cueing||!this.el||!this.out||(this.cueing=!1,this.fromTop(),this.heard=0,this.loudest=0,this.onChange())}song(t){const e=this.album;!e||!this.el||t<0||t>=e.tracks.length||(this.track=t,this.start(e.tracks[t].file),this.onChange())}startOf(t){const e=this.album;if(!e)return 0;const n=e.tracks.reduce((i,r)=>i+(r.dur||0),0)||1;return e.tracks.slice(0,t).reduce((i,r)=>i+(r.dur||0),0)/n}skip(t){const e=this.album;if(!e||!this.el||this.cueing||t<0||t>=e.tracks.length)return;const n=$n();this.out.gain.cancelScheduledValues(n.currentTime),this.out.gain.setValueAtTime(0,n.currentTime),this.track=t,this.moving=!0,this.needleTo=this.startOf(t),this.start(e.tracks[t].file,!0),this.onChange()}skipBy(t){const e=this.main;if(!this.album||!e)return;const n=t>0?this.track+1:!this.moving&&e.currentTime>3?this.track:this.track-1;this.skip(Math.max(0,Math.min(this.album.tracks.length-1,n)))}drop(){!this.moving||!this.el||!this.out||(this.moving=!1,this.fromTop(),this.onChange())}play(){if(!(!this.el||!this.album)){if($n(),!this.main||!ts(this.main)){this.start(this.album.tracks[this.track].file);return}this.route!=="plain"&&this.el.play().catch(t=>this.failed(t)),this.route!=="speakers"&&this.plain.play().catch(t=>this.failed(t))}}pause(){var t,e;this.parked&&(this.parked=!1,this.playing=!1,this.onChange()),(t=this.el)==null||t.pause(),(e=this.plain)==null||e.pause()}toggle(){this.playing?this.pause():this.play()}next(t=!1){const e=this.album;if(!(!e||!this.el)){if(this.track+1>=e.tracks.length){if(t){this.track=0;const n=this.addr(e.tracks[0].file);for(const i of this.players)n?i.src=n:(i.removeAttribute("src"),i.load());this.playing=!1,this.onChange()}return}this.track++,this.start(e.tracks[this.track].file),this.onChange()}}prev(){const t=this.album,e=this.main;if(!(!t||!e)){if(e.currentTime>3||this.track===0){for(const n of[this.el,this.plain])try{n.currentTime=0}catch{}return}this.track--,this.start(t.tracks[this.track].file),this.onChange()}}tick(t,e){const n=this.el,i=this.plain;if(!(!n||!i||!this.album)){if(this.holding){const r=this.main,o=performance.now();if(ts(r)&&!r.paused&&r.currentTime>.04&&r.currentTime<.8&&o-this.holdSince>60&&(!this.sought||this.seekedAt&&o-this.seekedAt>250)||o-this.holdSince>1500){this.holding=!1;const l=$n().currentTime;this.out.gain.cancelScheduledValues(l),this.out.gain.setValueAtTime(0,l),this.out.gain.linearRampToValueAtTime(1,l+.05)}}if(this.route==="trying"&&!this.cueing&&!this.moving&&!this.holding&&ts(n)&&!n.paused&&n.currentTime>.3){this.heard+=t;const[r,o]=this.rms();if(this.loudest=Math.max(this.loudest,r,o),this.loudest>1e-4)this.route="speakers",i.pause(),i.removeAttribute("src"),i.load(),this.onChange();else if(this.heard>1.2){if(this.route="plain",Math.abs(i.currentTime-n.currentTime)>.2)try{i.currentTime=n.currentTime}catch{}i.paused&&i.play().catch(a=>this.failed(a)),n.pause(),this.playing=!i.paused,this.onChange()}}if(this.route==="plain"){const r={x:(this.speakers[0].x+this.speakers[1].x)/2,y:(this.speakers[0].y+this.speakers[1].y)/2,z:(this.speakers[0].z+this.speakers[1].z)/2},o=Math.hypot(e.x-r.x,e.y-r.y,e.z-r.z),a=this.cueing||this.moving||this.holding||!this.inside?0:Math.min(1,2.4/(2.4+.85*Math.max(0,o-2.4))),l=this.moving||this.holding?.02:a>this.plainVol+.3?.06:.4;this.plainVol+=(a-this.plainVol)*(1-Math.exp(-t/l)),i.volume=Math.max(0,Math.min(1,this.plainVol))}}}get progress(){const t=this.album,e=this.main;if(!t||!e)return 0;const n=t.tracks.reduce((r,o)=>r+(o.dur||0),0)||1,i=t.tracks.slice(0,this.track).reduce((r,o)=>r+(o.dur||0),0);return Math.min(1,(i+(e.currentTime||0))/n)}get current(){var t;return((t=this.album)==null?void 0:t.tracks[this.track])??null}get heardTime(){const t=this.main,e=$d();if(!t)return 0;const n=e&&this.route!=="plain"?(e.outputLatency||0)+(e.baseLatency||0):.05;return t.currentTime-n}rms(){return this.meters.length?this.meters.map(t=>{t.getFloatTimeDomainData(this.buf);let e=0;for(let n=0;n<this.buf.length;n++)e+=this.buf[n]*this.buf[n];return Math.sqrt(e/this.buf.length)}):[0,0]}levels(){if(!this.playing||this.cueing||this.moving||this.holding)return[0,0];if(this.route==="plain"){const t=performance.now()/1e3,e=.05*this.plainVol;return[e*(1+.45*Math.sin(t*7.1)*Math.sin(t*2.3)),e*(1+.45*Math.sin(t*6.3+1)*Math.sin(t*1.9))]}return this.rms()}}function ul(s,t){const n=document.createElement("canvas");n.width=n.height=32*t;const i=n.getContext("2d");i.scale(t,t);const r=32/2,o=8,a=2.5,l=(c,h)=>{i.strokeStyle=h,i.lineWidth=c,i.lineCap="round",i.beginPath(),i.moveTo(r-o,r),i.lineTo(r-a,r),i.moveTo(r+a,r),i.lineTo(r+o,r),i.moveTo(r,r-o),i.lineTo(r,r-a),i.moveTo(r,r+a),i.lineTo(r,r+o),i.stroke()};return l(3.4,"rgba(0,0,0,0.55)"),l(1.5,"#fff"),n.toDataURL("image/png")}const qb=s=>`-webkit-image-set(url(${ul(s,1)}) 1x, url(${ul(s,2)}) 2x) 16 16, crosshair`,vu="var(--cross)";function Yb(){document.documentElement.style.setProperty("--cross",qb(!1));const t=document.createElement("div");return t.id="crosshair",t.style.backgroundImage=`-webkit-image-set(url(${ul(!1,1)}) 1x, url(${ul(!1,2)}) 2x)`,document.body.append(t),(e,n,i)=>{t.classList.toggle("on",e),t.style.transform=e&&n!==void 0&&i!==void 0?`translate(${n-innerWidth/2}px, ${i-innerHeight/2}px)`:""}}const sn={x:innerWidth/2,y:innerHeight/2};let El=()=>!1;function $b(s){El=s}const Ec=()=>El();function Tc(s,t){if(document.pointerLockElement===t){if(El())return[sn.x,sn.y];const e=t.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]}return[s.clientX,s.clientY]}function I0(s){if(document.pointerLockElement!==s||!El())return!1;const t=document.elementFromPoint(sn.x,sn.y),e=t&&t!==s?t.closest("button, li, a"):null;return e?(e.click(),!0):!1}const Ch=.47,bs=.33,Xn=.1575,Kb=.09,Rn=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)},Ta=s=>`<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="${s}" fill="currentColor"/></svg>`,Ac={"⏮":Ta("M2.5 3h2v10h-2z M13 3 5.5 8 13 13z"),"⏭":Ta("M3 3 10.5 8 3 13z M11.5 3h2v10h-2z"),"▶":Ta("M4.5 2.5 13 8 4.5 13.5z"),"⏸":Ta("M4 3h2.6v10H4z M9.4 3H12v10H9.4z")};function jd(s){const t=Math.atan(Math.tan(_e.degToRad(s.fov)/2)*s.aspect),e=cr(s)*Math.tan(t)*.95;return Math.min(1.15,Math.asin(Math.min(1,e/bs)))}function cr(s){const t=Math.atan(Math.tan(_e.degToRad(s.fov)/2)*s.aspect);return Math.max(Ch,Xn*1.25/Math.tan(t*.92))}class Zb{constructor(t,e,n,i,r){R(this,"isOpen",!1);R(this,"sel",0);R(this,"cards",[]);R(this,"hover",-1);R(this,"hoverEase",0);R(this,"openL",0);R(this,"openR",0);R(this,"side",0);R(this,"closing",!1);R(this,"tight",!1);R(this,"pivot",new I);R(this,"choseAt",null);R(this,"pre",0);R(this,"preTarget",0);R(this,"clock",0);R(this,"shuf",null);R(this,"oldSel",0);R(this,"disc",null);R(this,"discRun",null);R(this,"listOn",!1);R(this,"listEase",0);R(this,"ray",new Ts);R(this,"ndc",new mt);R(this,"ui");R(this,"songs");R(this,"albumLine");R(this,"playBtn");R(this,"listFor",null);R(this,"onClosed",()=>{});R(this,"handLight",new Op(16773856,0,3,2));R(this,"shown",!0);this.camera=t,this.canvas=e,this.music=n,this.F=i,this.albums=r,this.ui=document.createElement("div"),this.ui.id="fan-controls";const o=document.createElement("div");o.className="fc-list",this.albumLine=document.createElement("div"),this.albumLine.className="fc-album",this.songs=document.createElement("ol"),this.songs.className="fc-songs",this.songs.addEventListener("click",h=>{const u=h.target.closest("li");u&&(h.stopPropagation(),this.skip(()=>n.skip(+u.dataset.k)))}),o.append(this.albumLine,this.songs);const a=document.createElement("div");a.className="fc-row";const l=(h,u,f)=>{const d=document.createElement("button");return d.innerHTML=Ac[h],d.title=u,d.addEventListener("pointerdown",p=>p.stopPropagation()),d.addEventListener("click",p=>{p.stopPropagation(),f()}),a.append(d),d};l("⏮","Back",()=>this.skip(()=>n.skipBy(-1))),this.playBtn=l("⏸","Pause",()=>n.toggle()),l("⏭","Next song",()=>this.skip(()=>n.skipBy(1))),this.ui.append(o,a),this.ui.addEventListener("pointerdown",h=>h.stopPropagation()),document.body.append(this.ui);const c=n.onChange;n.onChange=()=>{c(),this.refresh()}}open(){const t=this.F(),e=new Map(this.albums().map(i=>[i.id,i]));if(this.cards=t.records.map(i=>{const r=e.get(i.mesh.userData.album),o=new Kt().compose(i.base,new me().setFromEuler(i.rest),new I(1,1,1));return{mesh:i.mesh,album:r,rest:o,a:0,z:0,lift:0,out:0,wait:0}}).filter(i=>i.album),!this.cards.length)return!1;const n=this.music.album?this.cards.findIndex(i=>i.album.id===this.music.album.id):-1;return this.sel=this.oldSel=n>=0?n:0,this.cards.forEach((i,r)=>{i.a=this.restAngle(r),i.z=this.depth(r)}),this.isOpen=!0,this.closing=!1,this.tight=!1,this.hover=-1,this.side=0,this.openL=this.openR=0,this.shuf=null,this.listOn=!1,this.listEase=0,this.refresh(),!0}close(){this.isOpen&&(this.reorder(),this.closing=!0,this.preTarget=0,this.hover=-1,this.side=0,this.refresh(),this.canvas.style.cursor="",this.finishDisc())}reorder(){var o;const t=(o=this.music.album)==null?void 0:o.id,e=this.F().records,n=e.findIndex(a=>a.mesh.userData.album===t);if(n<=0)return;const i=e.map(a=>a.mesh),r=[i[n],...i.slice(0,n),...i.slice(n+1)];e.forEach((a,l)=>{a.mesh=r[l]});for(const a of this.cards){const l=e.find(c=>c.mesh===a.mesh);l&&a.rest.compose(l.base,new me().setFromEuler(l.rest),new I(1,1,1))}}beckon(t){this.isOpen||(this.preTarget=Math.max(0,Math.min(1,t)))}restCentre(){const t=this.F().stand;return t?t.localToWorld(new I(0,.17,.02)):null}pileCentre(){const t=this.F().stand;if(!t)return null;const e=t.localToWorld(new I(0,.17,.02));return this.pre>.001?e.applyMatrix4(this.hoverMatrix(Rn(this.pre))):e}restAngle(t){const e=t-this.sel,n=Math.abs(e);return n?-Math.sign(e)*.2*(1-.5**n):0}depth(t){const e=Math.abs(t-this.sel);return e?-(.004+.006*e):0}hoverMatrix(t){const e=this.F().stand,n=this.F().records[0],i=e.localToWorld(new I(0,.17,.02)),r=this.camera.position,o=i.clone().lerp(r,.5);o.y+=Math.sin(this.clock*2.1)*.006;const a=n?e.matrixWorld.clone().multiply(new Kt().makeRotationFromEuler(n.rest)):e.matrixWorld,l=new I(0,0,1).transformDirection(a),c=r.clone().sub(o).normalize(),h=new I(l.x,0,l.z).normalize(),u=new I(c.x,0,c.z).normalize(),f=new me().setFromUnitVectors(h,u),d=new me().setFromUnitVectors(l.clone().applyQuaternion(f),c),p=new me().setFromAxisAngle(new I(0,1,0),Math.sin(this.clock*1.3)*.025),m=new me().slerp(p.multiply(d.multiply(f)),t),x=i.clone().lerp(o,t);return new Kt().makeTranslation(x.x,x.y,x.z).multiply(new Kt().makeRotationFromQuaternion(m)).multiply(new Kt().makeTranslation(-i.x,-i.y,-i.z))}shade(t){const e=new Kt;this.cards.forEach((n,i)=>{var l;const r=(l=n.mesh.userData.bright)==null?void 0:l.userData.fanShade;if(!r)return;const o=i-this.sel,a=o===0?null:this.cards[i-Math.sign(o)];r.shade.value=a?t:0,a&&(a.mesh.updateWorldMatrix(!0,!1),n.mesh.updateWorldMatrix(!0,!1),r.rel.value.copy(e.copy(a.mesh.matrixWorld).invert().multiply(n.mesh.matrixWorld)))})}glow(t){for(const e of this.F().records){const n=e.mesh.userData.lit;n&&n.emissiveMap&&(n.emissiveIntensity=.85*t)}}update(t){var w;this.clock+=t;const e=this.F();if(!e.stand)return;if(!this.isOpen){const v=this.pre,y=this.preTarget-this.pre;if(this.pre=Math.max(0,Math.min(1,this.pre+Math.max(-t/.7,Math.min(t/.85,y)))),this.pre===0&&v===0)return;const S=Rn(this.pre),E=this.hoverMatrix(S);for(const _ of e.records){const b=new Kt().compose(_.base,new me().setFromEuler(_.rest),new I(1,1,1)),A=_.mesh.parent,C=E.clone().multiply(A.matrixWorld).multiply(b);new Kt().copy(A.matrixWorld).invert().multiply(C).decompose(_.mesh.position,_.mesh.quaternion,_.mesh.scale)}this.glow(S);return}const n=this.camera;n.updateMatrixWorld();const i=n.matrixWorld.elements,r=new I(i[0],i[1],i[2]),o=new I(i[4],i[5],i[6]),a=new I(-i[8],-i[9],-i[10]);this.listEase+=((this.listOn&&!this.closing?1:0)-this.listEase)*(1-Math.exp(-5*t));const l=cr(n),c=n.position.clone().addScaledVector(a,l).addScaledVector(o,-.015+Kb*Rn(this.listEase)),h=e.group;this.handLight.parent!==h&&(this.handLight.layers.set(5),h.add(this.handLight)),this.handLight.position.copy(n.position).addScaledVector(o,.25).addScaledVector(r,-.15),this.handLight.intensity+=((this.closing?0:.32)-this.handLight.intensity)*(1-Math.exp(-4*t));const u=c.clone().addScaledVector(o,-bs),f=a.clone().negate();this.closing&&(this.pre=Math.max(0,this.pre-t/.7));const d=this.pre>0?this.hoverMatrix(Rn(this.pre)):null;this.glow(Rn(this.pre)),this.pivot.copy(u);const p=!this.closing&&(this.tight||!!this.discRun),m=cr(n)>Ch+.01,x=1-Math.exp(-6*t);this.openL+=((this.side<0&&!p?1:0)-this.openL)*x,this.openR+=((this.side>0&&!p?1:0)-this.openR)*x,this.hoverEase+=((this.hover>=0&&this.hover!==this.sel&&!this.shuf&&!p?1:0)-this.hoverEase)*x;const g=this.shuf;g&&(g.t+=t,g.t>=g.dur&&(this.shuf=null,this.startDisc()));let M=!0;if(this.cards.forEach((v,y)=>{v.wait=Math.max(0,v.wait-t);const S=v.wait>0?this.oldSel:this.sel,E=S,_=this.cards.length-1-S,b=y-S,A=Math.abs(b),C=Math.sign(b);let P=0,U=0,F=0;if(A){const $t=C<0?E:_,K=C<0?this.openL:this.openR,de=.2*(1-.5**A),ie=A*Math.min(.3,jd(n)/Math.max(1,$t));let B=de+(ie-de)*K;if(this.hover>=0&&Math.sign(this.hover-S)===C){const T=Math.abs(this.hover-S);A>=T&&(B+=.09*this.hoverEase),A>T&&(B+=.07*this.hoverEase),y===this.hover&&(F=.012*this.hoverEase)}P=-C*B,U=-(.004+.006*A)}const O=m&&this.hover>=0&&y===this.hover&&y!==this.sel&&!g;O&&(P*=.06,U=.012,F=.2*this.hoverEase);const Y=1-Math.exp(-4.5*t);if(g&&y===g.k){const $t=Math.min(1,g.t/g.dur),K=Rn($t);v.lift=.13*Math.sin(Math.PI*Math.min(1,$t*1.05)),v.a=g.a0*(1-Rn($t*1.25)),v.z=g.z0+(.006-g.z0)*K}else v.a+=(P-v.a)*Y,v.z+=(U-v.z)*Y,v.lift+=(F-v.lift)*Y;const q=this.closing?0:1,et=this.closing?2.6:2.2;v.out=Math.max(0,Math.min(1,v.out+(q?1:-1)*et*t)),(this.closing?v.out>0:v.out<1)&&(M=!1);const X=v.out,Z=Rn(X),it=v.mesh.material,dt=v.mesh.userData.lit,H=v.mesh.userData.bright,V=!!H&&H!==dt&&H.isMeshBasicMaterial,L=X>.001&&V?H:dt;if(L&&it[4]!==L&&(it[4]=L),V&&L===H){const $t=.15+.75*Rn(this.pre);H.color.setScalar($t+(1-$t)*Z)}const G=o.clone().multiplyScalar(Math.cos(v.a)).addScaledVector(r,-Math.sin(v.a)),N=G.clone().cross(f),W=u.clone().addScaledVector(G,bs).addScaledVector(o,v.lift).addScaledVector(f,v.z).clone().addScaledVector(G,-Xn),tt=new Kt().makeBasis(N,G,f).setPosition(W),st=v.mesh.parent,xt=st.matrixWorld.clone().multiply(v.rest);d&&xt.premultiply(d);const yt=new I,lt=new me,pt=new I,ut=new I,vt=new me,wt=new I;xt.decompose(yt,lt,pt),tt.decompose(ut,vt,wt);const Gt=yt.clone().lerp(ut,Z).addScaledVector(new I(0,1,0),Math.sin(Z*Math.PI)*.08*(1-this.pre)),Ft=lt.clone().slerp(vt,Z);new Kt().copy(st.matrixWorld).invert().multiply(new Kt().compose(Gt,Ft,new I(1,1,1))).decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=g&&y===g.k&&g.t>g.dur*.45||O?12:10-Math.min(9,Math.abs(y-this.sel))}),this.updateDisc(t),this.shade(.5*Rn(((w=this.cards[0])==null?void 0:w.out)??0)),this.closing&&M&&this.pre===0){for(const v of this.cards)v.rest.decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=0,v.mesh.userData.lit&&(v.mesh.material[4]=v.mesh.userData.lit);this.glow(0),this.shade(0),this.isOpen=!1,this.closing=!1,this.cards=[],this.shuf=null,this.handLight.intensity=0,this.onClosed()}}startDisc(){const t=this.discRun;if(!t||t.phase!=="wait")return;const e=this.cards[t.k];if(!e){this.finishDisc();return}this.disc||(this.disc=new _t(new Xe(.1515,.1515,.0018,96),bh(t.album)),this.disc.layers.enable(5)),this.disc.material=bh(t.album),e.mesh.add(this.disc),this.disc.rotation.set(Math.PI/2,0,0),this.disc.position.set(0,Xn,0),this.disc.visible=!0,t.phase="out",t.t=0,this.refresh()}updateDisc(t){const e=this.discRun,n=this.disc;if(!e||e.phase==="wait"||!n)return;e.t+=t;const i=this.F(),r=i.deck;if(!r){this.finishDisc();return}const o=1,a=1.4,l=.8,c=.1;r.record.updateWorldMatrix(!0,!1);const h=new I,u=new me,f=new I;r.record.matrixWorld.decompose(h,u,f);const d=(p,m)=>{const x=new Kt().compose(p,m,new I(1,1,1));new Kt().copy(i.group.matrixWorld).invert().multiply(x).decompose(n.position,n.quaternion,n.scale)};if(e.phase==="out"){if(n.position.x=(Xn+.1515+.012)*Rn(Math.min(1,e.t/o)),e.t>=o){n.updateWorldMatrix(!0,!1);const p=new I,m=new me,x=new I;n.matrixWorld.decompose(p,m,x),i.group.add(n);const g=h.clone().add(new I(0,c,0)),M=g.clone().sub(p).setY(0);e.p0=p,e.q0=m,e.above=g,e.c1=p.clone().add(new I(0,-.3,0)).addScaledVector(M,.15),e.c2=g.clone().add(new I(0,.22,0)).addScaledVector(M,-.35),e.phase="carry",e.t=0,d(p,m)}}else if(e.phase==="carry"){const p=Math.min(1,e.t/a),m=Rn(p),x=e.p0,g=e.c1,M=e.c2,w=e.above,v=1-m,y=x.clone().multiplyScalar(v*v*v).addScaledVector(g,3*v*v*m).addScaledVector(M,3*v*m*m).addScaledVector(w,m*m*m),S=e.q0.clone().slerp(u,Rn(Math.min(1,p/.8)));d(y,S),p>=1&&(e.phase="lower",e.t=0)}else if(e.phase==="lower"){const p=Math.min(1,e.t/l),m=1-(1-p)**3;d(e.above.clone().lerp(h,m),u),p>=1&&this.finishDisc()}}finishDisc(){this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun&&(this.discRun=null,this.music.cued(),this.refresh())}cardAt(t,e){var o;const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObjects(this.cards.map(a=>a.mesh),!1);i.sort((a,l)=>l.object.renderOrder-a.object.renderOrder||a.distance-l.distance);const r=(o=i[0])==null?void 0:o.object;return r?this.cards.findIndex(a=>a.mesh===r):-1}roundAt(t,e){if(Math.max(this.openL,this.openR)<.5||this.tight||this.discRun||this.shuf)return null;const i=this.openR>=this.openL?1:-1,r=this.sel,o=i>0?this.cards.length-1-r:r;if(!o)return null;const a=this.polar(t,e);if(!a.amongst)return null;const l=a.a*i,c=Math.atan(Xn/Math.max(bs-Xn,Math.min(bs+Xn,a.rho)));if(l<c*.8)return this.cardAt(t,e)===r?r:null;const h=Math.min(.3,jd(this.camera)/Math.max(1,o)),u=Math.ceil((l-c*.8)/h);return u>=1&&u<=o?r+i*u:null}polar(t,e){const n=this.canvas.getBoundingClientRect(),i=this.camera,r=this.pivot.clone().project(i),o=t-(n.left+(r.x+1)/2*n.width),a=n.top+(1-r.y)/2*n.height-e,l=2*cr(i)*Math.tan(_e.degToRad(i.fov)/2)/n.height,c=Math.hypot(o,a)*l,u=a*l>(bs-Xn)*.85;return{a:Math.atan2(o,a),rho:c,level:u,amongst:u&&c<Math.hypot(bs+Xn,Xn)+.02}}move(t,e){if(!this.isOpen||this.closing)return;let n=this.cardAt(t,e);const i=this.roundAt(t,e);if(i!==null&&(n=i),this.hover=n,n>=0&&n!==this.sel)this.side=Math.sign(n-this.sel);else{const r=this.canvas.getBoundingClientRect(),o=(t-r.left)/r.width-.5,a=Math.atan(Xn/cr(this.camera))/(2*Math.atan(Math.tan(_e.degToRad(this.camera.fov)/2)*this.camera.aspect));this.side=n===this.sel?0:Math.abs(o)>a*.9&&this.polar(t,e).level?Math.sign(o):0}if(this.tight&&this.side!==0&&!this.discRun){const r=this.canvas.getBoundingClientRect();(!this.choseAt||Math.hypot(t-this.choseAt.x,e-this.choseAt.y)>r.width*.12)&&(this.tight=!1)}this.canvas.style.cursor=n>=0?vu:""}click(t,e){if(!this.isOpen||this.closing)return!1;const n=cr(this.camera)>Ch+.01?null:this.roundAt(t,e),i=n??this.cardAt(t,e);return i<0?(this.close(),!0):(this.choseAt={x:t,y:e},this.choose(i),!1)}choose(t){var i;const e=this.cards[t];if(!e||this.shuf)return;const n=this.music;if(!(this.discRun&&this.discRun.album.id===e.album.id)){if(t===this.sel&&((i=n.album)==null?void 0:i.id)===e.album.id&&!this.discRun){n.playing?this.listOn=!this.listOn:n.play(),this.refresh();return}t!==this.sel&&(this.oldSel=this.sel,this.shuf={k:t,t:0,dur:.75+.06*Math.min(6,Math.abs(t-this.sel)),a0:e.a,z0:e.z},this.cards.forEach((r,o)=>{r.wait=o===t?0:.3+.05*Math.abs(o-t)}),this.sel=t),this.hover=-1,this.side=0,this.tight=!0,this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun={k:t,album:e.album,phase:"wait",t:0},n.load(e.album,0,!0),this.listOn=!1,this.shuf||this.startDisc(),this.refresh()}}step(t){if(!this.isOpen||!this.cards.length)return;const e=this.hover>=0?this.hover:this.sel,n=Math.max(0,Math.min(this.cards.length-1,e+t));this.hover=n,this.side=n===this.sel?0:Math.sign(n-this.sel),this.side!==0&&!this.discRun&&(this.tight=!1)}chooseHovered(){this.choseAt=null,this.choose(this.hover>=0?this.hover:this.sel)}skip(t){t(),this.refresh()}setShown(t){t!==this.shown&&(this.shown=t,this.refresh())}refresh(){const t=this.music,e=t.current,n=this.shown&&!!t.album,i=this.isOpen&&!this.closing;if(this.ui.classList.toggle("on",n),this.ui.classList.toggle("list",n&&i&&this.listOn),!t.album||!e)return;this.playBtn.innerHTML=t.playing?Ac["⏸"]:Ac["▶"],this.playBtn.title=t.playing?"Pause":"Play";const r=t.album;if(this.listFor!==`${r.id}|${r.tracks.length}`){this.listFor=`${r.id}|${r.tracks.length}`,this.albumLine.textContent=r.title,this.songs.replaceChildren(...r.tracks.map((a,l)=>{const c=document.createElement("li");return c.dataset.k=String(l),c.textContent=a.title,c}));const o=r.tracks.length>20?3:r.tracks.length>8?2:1;this.songs.style.columnCount=String(o),this.songs.style.width=o===1?"auto":""}this.songs.querySelectorAll("li").forEach((o,a)=>o.classList.toggle("now",a===t.track))}}const Jb={KeyA:0,KeyW:1,KeyS:2,KeyE:3,KeyD:4,KeyF:5,KeyT:6,KeyG:7,KeyY:8,KeyH:9,KeyU:10,KeyJ:11,KeyK:12,KeyO:13,KeyL:14,KeyP:15},tp=4;class Qb{constructor(t,e,n,i){R(this,"state","none");R(this,"sound",new Wb);R(this,"seat",null);R(this,"anim",null);R(this,"octave",0);R(this,"byKey",new Map);R(this,"byPointer",new Map);R(this,"ray",new Ts);R(this,"ndc",new mt);R(this,"recBack",null);R(this,"music",new Xb);R(this,"fan");R(this,"wheelAt",0);R(this,"beckonRest",!1);R(this,"engaged",!1);R(this,"handledAt",-1e9);R(this,"onChange",()=>{});R(this,"fanTouch",null);R(this,"flick",[]);this.player=t,this.camera=e,this.canvas=n,this.gallery=i,this.fan=new Zb(e,n,this.music,()=>this.F,()=>this.gallery.data.albums),this.fan.onClosed=()=>this.recordsAway(),t.onSeatedMove=()=>{this.state==="couch"&&this.stand()},addEventListener("keydown",r=>this.key(r,!0)),addEventListener("keyup",r=>this.key(r,!1)),n.addEventListener("pointerdown",r=>this.down(r)),n.addEventListener("wheel",r=>{if(this.state!=="records"||this.anim)return;r.preventDefault();const o=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;performance.now()-this.wheelAt<280||Math.abs(o)<4||(this.wheelAt=performance.now(),this.fan.step(o>0?1:-1))},{passive:!1}),addEventListener("pointermove",r=>this.move(r)),addEventListener("pointerup",r=>this.up(r)),addEventListener("pointercancel",r=>this.up(r)),addEventListener("blur",()=>{for(const r of this.byKey.values())this.off(r);this.byKey.clear(),this.sound.setPedal(!1)})}get busy(){return this.state!=="none"||!!this.anim}get moving(){return!!this.anim}get F(){return this.gallery.furniture}sitCouch(t,e=!0){const n=this.F.couchSeats;if(!n.length||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>tp)return!1;let i=n.reduce((o,a)=>a.eye.distanceTo(t)<o.eye.distanceTo(t)?a:o);const r=e?this.fan.restCentre():null;return r&&(i={...i,yaw:Math.atan2(-(r.x-i.eye.x),-(r.z-i.eye.z)),pitch:Math.atan2(r.y-i.eye.y,Math.hypot(r.x-i.eye.x,r.z-i.eye.z))+.08}),this.go("couch",i,1),!0}sitPiano(t){const e=this.F.pianoSeat;return!e||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>tp?!1:(this.sound.wake(),this.sound.decodeAll(),this.go("piano",e,1.2),!0)}fit(t){if(!t.look)return;const e=this.camera,n=Math.atan(Math.tan(_e.degToRad(e.fov)/2)*e.aspect);t.eye.copy(A0(t.look,t.yaw,t.pitch,Math.max(fr.near,fr.span/Math.tan(n))))}go(t,e,n){this.fit(e),this.seat=e,this.state=t,this.engaged=!1,this.beckonRest=!1,t==="couch"&&this.music.primeAlbums(this.gallery.data.albums.filter(i=>!i.off)),this.player.seated=!0,this.anim={from:this.pose(),to:{x:e.eye.x,y:e.eye.y,z:e.eye.z,yaw:e.yaw,pitch:e.pitch},t:0,dur:n},this.onChange(t)}stand(){const t=this.seat;if(!(!t||this.state==="none")){for(const e of[...this.byKey.values(),...this.byPointer.values()])this.off(e);this.byKey.clear(),this.byPointer.clear(),this.sound.setPedal(!1),this.state="none",this.anim={from:this.pose(),to:{x:t.stand.x,y:hs,z:t.stand.z,yaw:this.player.yaw,pitch:Math.max(-.25,Math.min(.1,this.player.pitch))},t:0,dur:.8,then:()=>{this.player.seated=!1,this.seat=null,this.player.collide()}},this.canvas.style.cursor="",this.onChange("none")}}pose(){const t=this.player;return{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw,pitch:t.pitch}}update(t){var i,r;const e=this.player,n=this.anim;if(n){n.t=Math.min(1,n.t+t/n.dur);const o=n.t*n.t*(3-2*n.t),a=n.to.y<n.from.y?o*o*(3-2*o):1-(1-o)*(1-o);e.pos.set(n.from.x+(n.to.x-n.from.x)*o,n.from.y+(n.to.y-n.from.y)*a,n.from.z+(n.to.z-n.from.z)*o),e.yaw=n.from.yaw+Math.atan2(Math.sin(n.to.yaw-n.from.yaw),Math.cos(n.to.yaw-n.from.yaw))*o,e.pitch=n.from.pitch+(n.to.pitch-n.from.pitch)*o,n.t>=1&&(this.anim=null,(i=n.then)==null||i.call(n))}else if(this.state==="records"&&this.recBack){const o=this.recBack.pose;e.pos.set(o.x,o.y,o.z),e.yaw=o.yaw,e.pitch+=(Math.max(o.pitch,-.12)-e.pitch)*(1-Math.exp(-6*t))}else this.seat&&this.state!=="none"&&(this.fit(this.seat),e.pos.copy(this.seat.eye));this.beckon(),this.fan.update(t),(r=this.F.piano)==null||r.update(t),Vb(this.camera)}rebuilt(){const t=this.F.soundAt;t&&this.sound.setPosition(t.x,t.y,t.z),this.state!=="none"&&(this.state="none",this.player.seated=!1,this.seat=null,this.anim=null),this.fan.isOpen&&this.fan.close(),this.recBack=null;const e=this.F.speakers;e&&this.music.setSpeakers(e[0],e[1])}beckon(){let t=0;const e=this.state==="couch"&&!this.fan.isOpen&&(!this.anim||this.anim.t>.6)?this.fan.restCentre():null;if(e){const n=this.camera.position,i=e.distanceTo(n),r=this.camera.getWorldDirection(new I).angleTo(e.clone().sub(n)),o=Math.atan2(.17,i)+.06;if(r>o+.08&&(this.beckonRest=!1),!this.engaged&&r<o&&!this.beckonRest&&(this.engaged=!0),this.engaged){const a=Math.max(0,Math.min(1,(r-o)/.2));t=1-a*a*(3-2*a),t===0&&this.fan.pre<.02&&(this.engaged=!1)}}else this.state!=="couch"&&(this.engaged=!1);this.fan.beckon(t)}get recordsEngaged(){return this.engaged}recordsBack(){this.state==="couch"&&(this.engaged=!1,this.beckonRest=!0,this.fan.beckon(0))}get recordsUp(){return this.state==="couch"&&this.fan.pre>.7}lookAtRecords(){return this.anim||this.state!=="couch"||this.fan.isOpen||!this.fan.open()?!1:(this.music.primeAlbums(this.gallery.data.albums.filter(t=>!t.off)),this.recBack={state:"couch",pose:this.pose()},this.state="records",this.player.seated=!0,this.onChange("records"),!0)}recordsAway(){const t=this.recBack;this.recBack=null,t&&(this.state=t.state,this.beckonRest=!0,this.engaged=!1,t.state==="none"&&(this.player.seated=!1,this.player.pos.y=hs,this.player.collide()),this.canvas.style.cursor="",this.onChange(this.state))}relock(){var t,e;try{(e=(t=this.canvas.requestPointerLock())==null?void 0:t.catch)==null||e.call(t,()=>{})}catch{}}on(t){var e;this.sound.noteOn(t),(e=this.F.piano)==null||e.press(t,!0)}off(t){var e;this.sound.noteOff(t),(e=this.F.piano)==null||e.press(t,!1)}keyAt(t,e){const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObject(this.F.group,!0).find(o=>o.object.isMesh);if(!i)return{key:null,piano:!1,records:!1};const r=i.object.userData;return{key:typeof r.key=="number"?r.key:null,piano:r.piece==="piano",records:!!r.records}}down(t){const[e,n]=Tc(t,this.canvas);if(this.state==="records"){if(this.anim||(t.preventDefault(),this.handledAt=performance.now(),I0(this.canvas)))return;if(t.pointerType==="touch"){for(const o of this.flick)clearTimeout(o);this.flick=[],this.fanTouch={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),moved:!1,lx:t.clientX,acc:0,trail:[{t:performance.now(),x:t.clientX}]};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return}this.fan.click(e,n);return}if(this.state!=="piano"||this.anim)return;this.handledAt=performance.now();const{key:i,piano:r}=this.keyAt(e,n);if(i!==null){t.preventDefault(),this.byPointer.set(t.pointerId,i),this.on(i);try{this.canvas.setPointerCapture(t.pointerId)}catch{}}else r||this.stand()}move(t){if(this.state==="records"){const o=this.fanTouch;if(t.pointerType==="touch"){if(!o||o.id!==t.pointerId)return;for(Math.hypot(t.clientX-o.x,t.clientY-o.y)>12&&(o.moved=!0),o.acc+=t.clientX-o.lx,o.lx=t.clientX;Math.abs(o.acc)>=44;)this.fan.step(o.acc<0?1:-1),o.acc-=Math.sign(o.acc)*44;const c=performance.now();for(o.trail.push({t:c,x:t.clientX});o.trail.length>2&&c-o.trail[0].t>120;)o.trail.shift();return}const[a,l]=Tc(t,this.canvas);this.fan.move(a,l);return}if(this.state!=="piano")return;const[e,n]=Tc(t,this.canvas),{key:i}=this.keyAt(e,n);t.pointerType==="mouse"&&(this.canvas.style.cursor=i!==null?vu:"");const r=this.byPointer.get(t.pointerId);r!==void 0&&i!==null&&i!==r&&(this.off(r),this.on(i),this.byPointer.set(t.pointerId,i))}up(t){const e=this.fanTouch;if(e&&e.id===t.pointerId){if(this.fanTouch=null,this.handledAt=performance.now(),this.state==="records"&&!e.moved&&performance.now()-e.t<600)this.fan.click(t.clientX,t.clientY);else if(this.state==="records"&&e.trail.length>1){const i=e.trail[0],r=e.trail[e.trail.length-1],o=(r.x-i.x)/Math.max(16,r.t-i.t)*1e3,a=Math.min(4,Math.floor(Math.abs(o)/450));for(let l=1;l<=a;l++)this.flick.push(window.setTimeout(()=>this.fan.step(o<0?1:-1),l*110))}return}const n=this.byPointer.get(t.pointerId);n!==void 0&&(this.byPointer.delete(t.pointerId),this.off(n))}key(t,e){var i,r;if(t.metaKey||t.ctrlKey||t.altKey||(r=(i=t.target).closest)!=null&&r.call(i,"input, textarea, select"))return;if(this.state==="couch"&&e&&!this.anim&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){this.stand();return}if(this.state==="records"){if(!e||this.anim)return;["ArrowRight","KeyD"].includes(t.code)?(t.preventDefault(),this.fan.step(1)):["ArrowLeft","KeyA"].includes(t.code)?(t.preventDefault(),this.fan.step(-1)):["Space","Enter"].includes(t.code)?(t.preventDefault(),this.fan.chooseHovered()):["Escape","KeyW","KeyS"].includes(t.code)&&this.fan.close();return}if(this.state!=="piano")return;if(e&&t.code==="Escape"){this.stand();return}if(t.code==="Space"){t.preventDefault(),this.sound.setPedal(e);return}if(e&&(t.code==="KeyZ"||t.code==="KeyX")){t.repeat||(this.octave=Math.max(-3,Math.min(3,this.octave+(t.code==="KeyX"?1:-1))));return}const n=Jb[t.code];if(n!==void 0)if(t.preventDefault(),e){if(t.repeat||this.byKey.has(t.code))return;const o=60+this.octave*12+n;if(o<21||o>108)return;this.byKey.set(t.code,o),this.on(o)}else{const o=this.byKey.get(t.code);if(o===void 0)return;this.byKey.delete(t.code),this.off(o)}}}const jb=33.333/60*Math.PI*2,Rc=-.379;class t2{constructor(t,e,n,i){R(this,"speed",0);R(this,"arm",0);R(this,"vu",[ar,ar]);R(this,"on",null);R(this,"wasPlaying",!1);R(this,"lift",0);R(this,"move",null);this.music=t,this.F=e,this.inside=n,this.you=i}update(t){const e=this.music,n=this.F(),i=n.deck;if(e.setInside(this.inside()),e.tick(t,this.you()),!i&&e.moving&&e.drop(),i){const a=e.playing&&!e.cueing,l=a?jb:0;this.speed+=(l-this.speed)*(1-Math.exp(-(a?2.2:.9)*t)),i.spin.rotation.y-=this.speed*t,i.record.visible=!e.cueing;const c=e.cueing?null:e.album,h=(c==null?void 0:c.id)??null;(h!==this.on||c&&i.record.material===i.restRecord)&&(i.record.material=c?bh(c):i.restRecord,this.on=h);const u=f=>.146-(.146-.064)*f;if(e.moving&&c){const f=i.armAt(u(e.needleTo));this.move||(this.move={phase:"lift",t:0,from:this.arm,to:f,dur:0,aim:e.needleTo});const d=this.move;if(d.aim!==e.needleTo&&(d.aim=e.needleTo,d.from=this.arm,d.to=f,d.phase="lift",d.t=0),d.t+=t,d.phase==="lift")this.lift=Math.min(1,this.lift+t/.35),this.lift>=1&&(d.phase="swing",d.t=0,d.from=this.arm,d.dur=.45+Math.abs(d.to-d.from)*2.2);else if(d.phase==="swing"){const p=Math.min(1,d.t/d.dur),m=p*p*(3-2*p);this.arm=d.from+(d.to-d.from)*m,p>=1&&(d.phase="lower",d.t=0)}else{const p=Math.min(1,d.t/.6);this.lift=(1-p)**2,p>=1&&(this.lift=0,this.move=null,e.drop())}}else{this.move=null,this.lift=Math.max(0,this.lift-t/.35);const d=!!c&&(e.playing||e.progress>5e-4)?i.armAt(u(e.progress)):0,p=.9*t;this.arm+=Math.max(-p,Math.min(p,d-this.arm))}i.arm.rotation.order="YXZ",i.arm.rotation.y=this.arm,i.arm.rotation.x=-.055*(this.lift*this.lift*(3-2*this.lift))}const r=e.levels(),o=1-Math.exp(-t/.3);if(n.meters.needles.forEach((a,l)=>{const c=20*Math.log10((r[l]??0)+1e-6),h=c+18,u=h<=-20?ar:h<=0?ar+(h+20)/20*(Rc-ar):Math.max(Rd,Rc+h/3*(Rd-Rc));this.vu[l]+=(u-this.vu[l])*o,a.rotation.z=this.vu[l]}),e.playing&&!e.cueing){const a=20*Math.log10(Math.max(r[0],r[1])+1e-6),l=Math.round(Math.max(0,Math.min(12,(a+42)/40*12)));n.meters.bar.forEach((c,h)=>c(h<l?h<7?.9:1:h<7?.06:.03))}else this.wasPlaying&&n.meters.bar.forEach((a,l)=>a(l<7?.45:.08));this.wasPlaying=e.playing}}var ep;class e2{constructor(t){R(this,"count",null);R(this,"onCount",()=>{});R(this,"id",(((ep=crypto.randomUUID)==null?void 0:ep.call(crypto))??String(Math.random()).slice(2)).slice(0,36));R(this,"inside",!1);R(this,"timer",0);R(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const li=new URLSearchParams(location.search),n2=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,no=(matchMedia("(hover: none) and (pointer: coarse)").matches||n2)&&!li.has("desk")||li.has("touch");i2().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function i2(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([y_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(k=>document.fonts.load(k))),new Promise(k=>setTimeout(k,2500))])]);Hb();const e=new c_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,no?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=Ih,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=ao,e.shadowMap.autoUpdate=!1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new Wh,l=new je(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(el);const c=new bS(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?_e.radToDeg(2*Math.atan(Math.tan(_e.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const k=e.getDrawingBufferSize(new mt);c.setSize(Math.round(k.x/2),Math.round(k.y/2))};h(),addEventListener("resize",h);const u=new dr(t,a,e,c,s,o);await u.loadSmall();const f=new qw(r),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,hs,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const m=li.get("at");if(m){const[k,$,ct,j]=m.split(",").map(Number);f.pos.set(k,hs,$),f.yaw=_e.degToRad(ct||0),f.pitch=_e.degToRad(j||0)}li.get("hud");const x=document.getElementById("dot"),g=Yb();x.style.display="none";const M=new CS(!1),w=new Ts;w.far=14,w.layers.enableAll();let v=[];const y=()=>{v=[],u.interior.group.traverse(k=>{k.isMesh&&!k.isInstancedMesh&&v.push(k)}),u.outside.group.traverse(k=>{k.isMesh&&k.userData.outside&&v.push(k)})},S=()=>E(new mt(0,0)),E=k=>{w.setFromCamera(k,l);const $=w.intersectObjects(v,!1)[0];if(!$)return{kind:"none"};const ct=$.object.userData;return ct.piece?{kind:"piece",piece:ct.piece,records:!!ct.records,deck:!!ct.deck,point:$.point,dist:$.distance}:ct.label?{kind:"label",work:ct.work,point:$.point,dist:$.distance}:ct.work?{kind:"work",work:ct.work,point:$.point,dist:$.distance}:ct.face?{kind:"face",face:ct.face,point:$.point,dist:$.distance}:{kind:"none",point:$.point,dist:$.distance}},_=(k=3.2)=>{var ct,j;const $=(j=(ct=u.furniture)==null?void 0:ct.couch)==null?void 0:j.centre;return!!$&&Math.hypot($.x-f.pos.x,$.z-f.pos.z)<k},b=k=>k.kind!=="piece"||!k.point?!1:k.records&&L.state==="couch"?L.lookAtRecords():k.deck&&L.music.album&&Math.hypot(k.point.x-f.pos.x,k.point.z-f.pos.z)<4?(L.music.toggle(),!0):k.piece==="couch"?L.state!=="couch"&&L.sitCouch(k.point):k.piece==="table"&&L.state==="none"&&_()?L.sitCouch(u.furniture.couch.centre,!0):k.piece==="piano"?L.sitPiano(k.point):!1,A=new Ya,C=new Set;let P=1;const U=k=>{let $=99;for(const ct of u.interior.pictures)ct.work.id===k&&($=Math.min($,Math.hypot(ct.mesh.position.x-f.pos.x,ct.mesh.position.z-f.pos.z)));return $};function F(){P=0;for(const[k,$]of u.sharp)if(!(U(k)<=14)){u.sharp.delete(k);for(const ct of u.interior.pictures)ct.work.id===k&&(ct.mat.uniforms.uMap.value=u.texture(k));$.dispose()}for(const k of u.interior.pictures){const $=k.work.id;u.sharp.has($)||U($)>7.5||(P++,!(C.has($)||C.size>=4)&&(C.add($),A.loadAsync(dr.url($,"m")).then(ct=>{C.delete($),u.sharp.set($,u.prepTex(ct));for(const j of u.interior.pictures)j.work.id===$&&(j.mat.uniforms.uMap.value=ct)}).catch(()=>C.delete($))))}}const O=new TS;let Y=!0;const q=k=>{const $=u.cat.get(k);$&&(Y=f.locked,f.frozen=!0,O.show($,t.images[k],dr.url(k,u.sharp.has(k)?"m":"s"),dr.url(k,"l")),M.opened())};O.onClose=()=>{f.frozen=!1,ut.looked()};const et=k=>{const $=(t.layout.pieces??[]).find(Ot=>Ot.id===k);if(!$)return;const ct=_e.degToRad($.rot),j=Math.sin(ct),ft=Math.cos(ct),St=k==="couch"?2.2:1.7;f.pos.set($.x+j*St,hs,$.z+ft*St),f.yaw=Math.atan2(j,ft),f.pitch=-.32,f.collide()};let X=[],Z=null;const it=k=>q(k.id);let dt=0,H=!1;const V=()=>{var bt;const k=(bt=u.furniture)==null?void 0:bt.couch,$=t.layout.outline,ct=f.pos;if(!k||L.state!=="none"||L.moving||O.open||document.body.classList.contains("ed-page")||!(ct.x>$.x0&&ct.x<$.x1&&ct.z>$.z0&&ct.z<$.z1))return!1;const j=k.centre,ft=l.position,St=Math.hypot(j.x-ft.x,j.z-ft.z);return St>3.2?!1:l.getWorldDirection(new I).angleTo(j.clone().sub(ft))<Math.atan2(1.2,St)+(H?.14:.06)},L=new Qb(f,l,r,u);for(const k of["pointerdown","touchend","keydown"])addEventListener(k,$=>{$ instanceof KeyboardEvent&&($.key==="Escape"||$.metaKey||$.ctrlKey)||k==="pointerdown"&&f.locked||L.music.ready()},{capture:!0});$b(()=>L.state==="couch"||L.state==="records"||L.state==="piano"),f.mouseLooks=()=>!Ec(),L.onChange=k=>{if(k==="couch"||k==="piano"){const $=r.getBoundingClientRect();L.fan.isOpen||(sn.x=$.left+$.width/2,sn.y=$.top+$.height/2)}},addEventListener("pointermove",k=>{if(!f.locked||!Ec()||k.pointerType!=="mouse")return;const $=r.getBoundingClientRect(),ct=sn.x+k.movementX,j=sn.y+k.movementY;sn.x=Math.max($.left+2,Math.min($.right-2,ct)),sn.y=Math.max($.top+2,Math.min($.bottom-2,j)),L.state==="couch"&&!L.moving&&f.edgeTurn(ct-sn.x,j-sn.y)},{capture:!0});const G=()=>{const k=t.layout.outline,$=f.pos;return $.x>k.x0&&$.x<k.x1&&$.z>k.z0&&$.z<k.z1},N=new t2(L.music,()=>u.furniture,G,()=>l.position);let z=0,W=null;const tt=()=>L.state==="couch"&&!L.moving&&!L.fan.isOpen&&!document.body.classList.contains("ed-page")&&!O.open,st=k=>{const $=r.getBoundingClientRect();return E(new mt((k.clientX-$.left)/$.width*2-1,-((k.clientY-$.top)/$.height)*2+1))},xt=k=>{if(W!=null&&W.moved){r.style.cursor="";return}const $=st(k),ct=L.recordsUp;r.style.cursor=$.kind==="piece"&&$.records||$.deck&&L.music.album||ct&&$.records?vu:""},yt=k=>{const $=st(k);if($.kind==="piece"&&$.records){L.lookAtRecords();return}if(L.recordsUp){L.recordsBack();return}if($.deck&&L.music.album){L.music.toggle();return}L.stand()};addEventListener("mousemove",k=>{if(!tt()||f.locked||no){W&&(W=null);return}if(W&&k.buttons&1&&(!W.moved&&Math.hypot(k.clientX-W.x,k.clientY-W.y)>5&&(W.moved=!0),W.moved)){const $=_e.degToRad(l.fov)/(r.clientHeight||800);f.turnBy(k.movementX*$,k.movementY*$)}xt(k)}),addEventListener("mouseup",k=>{const $=W;W=null,!(!$||k.button!==0||!tt())&&($.moved||yt(k),xt(k))});let lt=0;const pt={gallery:u,player:f,camera:l,renderer:e,canvas:r,viewer:O,scene:a,aim:S,openWork:q,standAt:et,dot:x};u.onRebuilt=()=>{f.solids=u.arch.solids,f.boxes=u.furniture.solids;const k=t.layout.outline;f.world={x0:k.x0-30,x1:k.x1+30,z0:k.z0-30,z1:k.z1+30},f.collide(),y(),X=u.interior.pictures.map(AS);const $=u.furniture.stand;if($&&u.furniture.records.length){const ct=$.localToWorld(new I(0,.17,.02)),j=new I(0,0,1).transformDirection($.matrixWorld),ft=[];$.traverse(St=>{St.isMesh&&ft.push(St)}),Z={kind:"records",id:"records",centre:ct,normal:[j.x,0,j.z],size:.42,reach:2.9,meshes:ft}}else Z=null;L.rebuilt(),lt=0},u.rebuild();const ut=new zb(u,f,l,no);ut.danceBeat=()=>{const k=L.music,$=k.current,ct=k.element;if(!$||!ct||!k.playing||k.cueing||k.moving||!G())return null;const j=t.beats[$.file];return!j||!f_($,j)?null:(k.heardTime-j.beat0)*j.bpm/60/u_(j)};const vt=new e2((li.get("count"),void 0));vt.onCount=k=>ut.setCount(k),li.get("count")&&(ut.count=+li.get("count"));const wt=(()=>{const k=document.createElement("div");k.id="leaving",document.body.append(k);let $=0;const ct=()=>{if(ES({rmiLeave:!0}))return;const j=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(j)?(history.back(),setTimeout(()=>{location.href=j},1500)):k.classList.remove("on")};return{start(){clearTimeout($),k.classList.add("on"),$=window.setTimeout(ct,1900)},cancel(){clearTimeout($),k.classList.remove("on")}}})();ut.onEnter=()=>{vt.enter(),wt.cancel(),L.sound.fetchAll()},ut.onKey=k=>{if(k==="ESC"){f.locked&&document.exitPointerLock();return}f.tap(k==="W"?"KeyW":k==="LEFT"?"ArrowLeft":"ArrowRight",k==="W"?.3:.4),f.locked||r.requestPointerLock()},ut.onLeave=()=>{vt.exit(),wt.start()};const Gt=new Ts;Gt.far=12;let Ft=null,Zt=-1e9;const $t=k=>{if(k.button!==0&&k.button!==2||performance.now()-Zt<900)return;if(O.open){O.hide();return}if(L.state==="piano"||L.state==="records"||performance.now()-L.handledAt<400)return;const $=document.body.classList.contains("ed-page");if(L.state==="couch"&&!$){if(L.moving)return;if(!f.locked){k.button===0&&(W={x:k.clientX,y:k.clientY,moved:!1});return}if(I0(r))return;yt({clientX:sn.x,clientY:sn.y});return}if(!f.locked){const j=r.getBoundingClientRect(),ft=$?null:E(new mt((k.clientX-j.left)/j.width*2-1,-((k.clientY-j.top)/j.height)*2+1));if(ft&&b(ft))return;if(M.pic){it(M.pic);return}r.requestPointerLock();return}if(Gt.setFromCamera(new mt(0,0),l),ut.hit(Gt)){ut.poke();return}if(M.pic){it(M.pic);return}const ct=S();!$&&b(ct)||(ct.kind==="work"||ct.kind==="label")&&q(ct.work)};r.addEventListener("mousedown",$t),addEventListener("pointerdown",k=>{k.pointerType==="touch"&&(Zt=performance.now())},!0);const K=k=>{w.setFromCamera(k,l);const $=w.intersectObjects(v,!1)[0];if(!$)return{kind:"none"};const ct=$.object.userData,j={point:$.point,dist:$.distance};return ct.face?{kind:"wall",...j}:$.point.y<.02?{kind:"floor",...j}:{kind:"other",piece:ct.piece,records:!!ct.records,deck:!!ct.deck,...j}};new NS(r,l,f,K,k=>{if(L.state==="couch"){if(L.moving)return;if(k.records){L.lookAtRecords();return}if(L.recordsUp){L.recordsBack();return}if(k.deck&&L.music.album){L.music.toggle();return}L.stand();return}if(!(k.point&&(k.piece==="couch"||k.piece==="piano"||k.piece==="table")&&b({kind:"piece",piece:k.piece,records:k.records,deck:k.deck,point:k.point}))&&k.kind==="floor"&&k.point){const $=k.point.x-f.pos.x,ct=k.point.z-f.pos.z,j=Math.hypot($,ct),ft=Math.max(0,j-.5)/Math.max(j,1e-6);f.goal={x:f.pos.x+$*ft,z:f.pos.z+ct*ft}}},()=>!O.open&&!document.body.classList.contains("ed-page")&&L.state!=="piano"&&L.state!=="records"),document.addEventListener("selectstart",k=>{var ct;const $=k.target instanceof Element?k.target:(ct=k.target)==null?void 0:ct.parentElement;$!=null&&$.closest("input, textarea, select, [contenteditable]")||k.preventDefault()}),addEventListener("mouseup",k=>Ft==null?void 0:Ft.release(k)),O.relock=()=>Y&&!document.body.classList.contains("ed-page"),O.el.addEventListener("mousedown",k=>{O.busy||k.target.closest(".view-tools")||(k.preventDefault(),O.hide(),!O.open&&!f.locked&&O.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",k=>{k.target.closest("input, textarea, select")||k.preventDefault()}),addEventListener("keydown",k=>{var ct,j;if((j=(ct=k.target).closest)!=null&&j.call(ct,"input, textarea, select, button"))return;const $=k.code==="Enter"||k.code==="Space";if(O.open){($||k.code==="Escape")&&!O.busy&&(k.preventDefault(),O.hide());return}$&&M.pic&&!document.body.classList.contains("ed-page")&&(k.preventDefault(),it(M.pic))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&O.open&&O.hide()});const de=li.get("open");de!==null&&q(de.padStart(2,"0"));let ie=performance.now(),B=0,T=0;const nt=li.get("near")==="1";function at(){var Ot;const k=performance.now(),$=Math.min((k-ie)/1e3,.05);ie=k,$>.024?T+=$:T=Math.max(0,T-$*.5),T>1.5&&i>1&&(i=Math.max(1,i-.25),T=0,h()),f.update($),L.update($),f.apply(l),l.updateMatrixWorld();const ct=document.body.classList.contains("ed-page");ut.hide(ct||O.open),ut.update($),f.obstacles=[ut.obstacle],(lt-=$)<=0&&(lt=.3,F()),M.hold(L.state==="records"&&!ct?Z:null),ct||O.open?M.clear():M.update($,l,X,u.arch.solids,!0),N.update($),L.fan.setShown(!ct&&!O.open&&G()),Ec()?g(f.locked&&!ct&&!O.open&&!no,sn.x,sn.y):g(f.locked&&!ct&&!O.open&&!no);const j=V();j&&!H&&ut.couch(),H=j,dt+=((j?1:0)-dt)*(1-Math.exp(-$/.35));const ft=(Ot=u.furniture)==null?void 0:Ot.couch;ft&&(ft.light.intensity=ft.base*(1+.8*dt));const St=L.music;St.playing&&!St.cueing&&L.state==="none"&&!L.moving&&!j&&!ct&&!O.open&&G()&&!_(1.8)?z+=$:z=0,z>7&&ut.sweetSpot()&&(z=0),c.render(e,a,l),e.render(a,l),ct||ut.render(e),ct||M.render(e,a,l),B++,!window.__gReady&&B>3&&(!nt||P===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(at)}requestAnimationFrame(at);try{document.hasFocus()||window.focus()}catch{}li.has("sound")&&W0(()=>import("./soundcheck-BFBVdnVW.js"),[],import.meta.url).then(k=>k.soundPanel(L.music)),window.__g={...pt,data:t,editor:Ft,host:ut,presence:vt,focus:M,standAt:et,sitting:L,outWay:Bb,Raycaster:Ts},window.__crossVp=sn}export{$d as a,$n as b,Bb as o,hl as s};
