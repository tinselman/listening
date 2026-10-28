var H0=Object.defineProperty;var V0=(s,t,e)=>t in s?H0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>V0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const G0="modulepreload",W0=function(s,t){return new URL(s,t).href},Hu={},X0=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=W0(c,n),c in Hu)return;Hu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===c&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":G0,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="186",q0=0,Vu=1,Y0=2,Sr=1,$0=2,yr=3,ks=0,Dn=1,ai=2,$i=0,br=1,Ja=2,Gu=3,Wu=4,K0=5,yo=100,Z0=101,J0=102,Q0=103,j0=104,tm=200,em=201,nm=202,im=203,cp=204,hp=205,sm=206,om=207,rm=208,am=209,lm=210,cm=211,hm=212,um=213,fm=214,Wc=0,Xc=1,qc=2,Ir=3,Yc=4,$c=5,Kc=6,Zc=7,qh=0,dm=1,pm=2,Ti=0,up=1,fp=2,dp=3,pp=4,mp=5,gp=6,Yh=7,xp=300,Os=301,Uo=302,Wl=303,Xl=304,Ll=306,Qa=1e3,Xi=1001,Jc=1002,je=1003,mm=1004,Qr=1005,un=1006,ql=1007,xs=1008,In=1009,vp=1010,yp=1011,Dr=1012,$h=1013,Ri=1014,hi=1015,Gn=1016,Kh=1017,Zh=1018,Nr=1020,Mp=35902,_p=35899,wp=1021,Sp=1022,Hn=1023,Ji=1026,Fs=1027,Il=1028,Jh=1029,Bs=1030,Qh=1031,jh=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Qc=35840,jc=35841,th=35842,eh=35843,nh=36196,ih=37492,sh=37496,oh=37488,rh=37489,ja=37490,ah=37491,lh=37808,ch=37809,hh=37810,uh=37811,fh=37812,dh=37813,ph=37814,mh=37815,gh=37816,xh=37817,vh=37818,yh=37819,Mh=37820,_h=37821,wh=36492,Sh=36494,bh=36495,Eh=36283,Th=36284,tl=36285,Ah=36286,gm=3200,xm=3201,el=0,vm=1,ps="",He="srgb",nl="srgb-linear",il="linear",Pe="srgb",Yl=7680,ym=519,Mm=512,_m=513,wm=514,tu=515,Sm=516,bm=517,eu=518,Em=519,bp=35044,Xu="300 es",Si=2e3,Ur=2001;function Tm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Am(){const s=zr("canvas");return s.style.display="block",s}const qu={};function sl(...s){const t="THREE."+s.shift();console.log(t,...s)}function Ep(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ne(...s){s=Ep(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function we(...s){s=Ep(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Po(...s){const t=s.join(" ");t in qu||(qu[t]=!0,ne(...s))}function Rm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Cm={[Wc]:Xc,[qc]:Kc,[Yc]:Zc,[Ir]:$c,[Xc]:Wc,[Kc]:qc,[Zc]:Yc,[$c]:Ir};class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const Er=Math.PI/180,zo=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function fe(s,t,e){return Math.max(t,Math.min(e,s))}function nu(s,t){return(s%t+t)%t}function Pm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Lm(s,t,e){return s!==t?(e-s)/(t-s):0}function Tr(s,t,e){return(1-e)*s+e*t}function Im(s,t,e,n){return Tr(s,t,1-Math.exp(-e*n))}function Dm(s,t=1){return t-Math.abs(nu(s,t*2)-t)}function Nm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Um(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function zm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Fm(s,t){return s+Math.random()*(t-s)}function km(s){return s*(.5-Math.random())}function Om(s){s!==void 0&&(Yu=s);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bm(s){return s*Er}function Hm(s){return s*zo}function Vm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xm(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ae={DEG2RAD:Er,RAD2DEG:zo,generateUUID:Ai,clamp:fe,euclideanModulo:nu,mapLinear:Pm,inverseLerp:Lm,lerp:Tr,damp:Im,pingpong:Dm,smoothstep:Nm,smootherstep:Um,randInt:zm,randFloat:Fm,randFloatSpread:km,seededRandom:Om,degToRad:Bm,radToDeg:Hm,isPowerOfTwo:Vm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Xm,normalize:Le,denormalize:li},Nu=class Nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;let pt=Nu;class Me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=o[r+0],d=o[r+1],p=o[r+2],m=o[r+3];if(u!==m||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*m;x<0&&(f=-f,d=-d,p=-p,m=-m,x=-x);let g=1-a;if(x<.9995){const y=Math.acos(x),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+m*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),f=l(n/2),d=l(i/2),p=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uu=class Uu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uu.prototype.isVector3=!0;let L=Uu;const $l=new L,$u=new Me,zu=class zu{constructor(t,e,n,i,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],x=i[3],g=i[6],y=i[1],w=i[4],v=i[7],M=i[2],S=i[5],E=i[8];return o[0]=r*m+a*y+l*M,o[3]=r*x+a*w+l*S,o[6]=r*g+a*v+l*E,o[1]=c*m+h*y+u*M,o[4]=c*x+h*w+u*S,o[7]=c*g+h*v+u*E,o[2]=f*m+d*y+p*M,o[5]=f*x+d*w+p*S,o[8]=f*g+d*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*r)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*o-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(r*e-n*o)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return Po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};zu.prototype.isMatrix3=!0;let oe=zu;const Kl=new oe,Ku=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qm(){const s={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Pe&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Pe&&(i.r=Lo(i.r),i.g=Lo(i.g),i.b=Lo(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?il:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[nl]:{primaries:t,whitePoint:n,transfer:il,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),s}const Se=qm();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class Ym{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$s===void 0&&($s=zr("canvas")),$s.width=t.width,$s.height=t.height;const i=$s.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=$s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ki(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $m=0;class iu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Zl(i[r].image)):o.push(Zl(i[r]))}else o=Zl(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Zl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ym.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let Km=0;const Jl=new L;class pn extends Gs{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=Xi,i=Xi,o=un,r=xs,a=Hn,l=In,c=pn.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Ai(),this.name="",this.source=new iu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=xp;pn.DEFAULT_ANISOTROPY=1;const Fu=class Fu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],m=l[2],x=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(d+1)/2,M=(g+1)/2,S=(h+f)/4,E=(u+m)/4,_=(p+x)/4;return w>v&&w>M?w<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(w),i=S/n,o=E/n):v>M?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=S/i,o=_/i):M<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(M),n=E/o,i=_/o),this.set(n,i,o,e),this}let y=Math.sqrt((x-p)*(x-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fu.prototype.isVector4=!0;let Ie=Fu;class Zm extends Gs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},o=new pn(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new iu(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Zm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tp extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Pl=class Pl{constructor(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x)}set(t,e,n,i,o,r,a,l,c,h,u,f,d,p,m,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=m,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ks.setFromMatrixColumn(t,0).length(),o=1/Ks.setFromMatrixColumn(t,1).length(),r=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,p=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f+m*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,m=c*u;e[0]=f-m*a,e[4]=-r*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*h,e[9]=m-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,p=a*h,m=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,p=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=p*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-m*u}else if(t.order==="XZY"){const f=r*l,d=r*c,p=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=r*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,jm)}lookAt(t,e,n){const i=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ns.crossVectors(n,zn),ns.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ns.crossVectors(n,zn)),ns.normalize(),jr.crossVectors(zn,ns),i[0]=ns.x,i[4]=jr.x,i[8]=zn.x,i[1]=ns.y,i[5]=jr.y,i[9]=zn.y,i[2]=ns.z,i[6]=jr.z,i[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],x=n[10],g=n[14],y=n[3],w=n[7],v=n[11],M=n[15],S=i[0],E=i[4],_=i[8],b=i[12],A=i[1],C=i[5],I=i[9],U=i[13],F=i[2],k=i[6],Y=i[10],X=i[14],et=i[3],G=i[7],K=i[11],it=i[15];return o[0]=r*S+a*A+l*F+c*et,o[4]=r*E+a*C+l*k+c*G,o[8]=r*_+a*I+l*Y+c*K,o[12]=r*b+a*U+l*X+c*it,o[1]=h*S+u*A+f*F+d*et,o[5]=h*E+u*C+f*k+d*G,o[9]=h*_+u*I+f*Y+d*K,o[13]=h*b+u*U+f*X+d*it,o[2]=p*S+m*A+x*F+g*et,o[6]=p*E+m*C+x*k+g*G,o[10]=p*_+m*I+x*Y+g*K,o[14]=p*b+m*U+x*X+g*it,o[3]=y*S+w*A+v*F+M*et,o[7]=y*E+w*C+v*k+M*G,o[11]=y*_+w*I+v*Y+M*K,o[15]=y*b+w*U+v*X+M*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],m=t[7],x=t[11],g=t[15],y=l*d-c*f,w=a*d-c*u,v=a*f-l*u,M=r*d-c*h,S=r*f-l*h,E=r*u-a*h;return e*(m*y-x*w+g*v)-n*(p*y-x*M+g*S)+i*(p*w-m*M+g*E)-o*(p*v-m*S+x*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+i*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],m=t[13],x=t[14],g=t[15],y=e*a-n*r,w=e*l-i*r,v=e*c-o*r,M=n*l-i*a,S=n*c-o*a,E=i*c-o*l,_=h*m-u*p,b=h*x-f*p,A=h*g-d*p,C=u*x-f*m,I=u*g-d*m,U=f*g-d*x,F=y*U-w*I+v*C+M*A-S*b+E*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return t[0]=(a*U-l*I+c*C)*k,t[1]=(i*I-n*U-o*C)*k,t[2]=(m*E-x*S+g*M)*k,t[3]=(f*S-u*E-d*M)*k,t[4]=(l*A-r*U-c*b)*k,t[5]=(e*U-i*A+o*b)*k,t[6]=(x*v-p*E-g*w)*k,t[7]=(h*E-f*v+d*w)*k,t[8]=(r*I-a*A+c*_)*k,t[9]=(n*A-e*I-o*_)*k,t[10]=(p*S-m*v+g*y)*k,t[11]=(u*v-h*S-d*y)*k,t[12]=(a*b-r*C-l*_)*k,t[13]=(e*C-n*b+i*_)*k,t[14]=(m*w-p*M-x*y)*k,t[15]=(h*M-u*w+f*y)*k,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,p=o*u,m=r*h,x=r*u,g=a*u,y=l*c,w=l*h,v=l*u,M=n.x,S=n.y,E=n.z;return i[0]=(1-(m+g))*M,i[1]=(d+v)*M,i[2]=(p-w)*M,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+g))*S,i[6]=(x+y)*S,i[7]=0,i[8]=(p+w)*E,i[9]=(x-y)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ks.set(i[0],i[1],i[2]).length();const a=Ks.set(i[4],i[5],i[6]).length(),l=Ks.set(i[8],i[9],i[10]).length();o<0&&(r=-r),Qn.copy(this);const c=1/r,h=1/a,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,i,o,r,a=Si,l=!1){const c=this.elements,h=2*o/(e-t),u=2*o/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,m;if(l)p=o/(r-o),m=r*o/(r-o);else if(a===Si)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Ur)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Si,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,m;if(l)p=1/(r-o),m=r/(r-o);else if(a===Si)p=-2/(r-o),m=-(r+o)/(r-o);else if(a===Ur)p=-1/(r-o),m=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Pl.prototype.isMatrix4=!0;let ee=Pl;const Ks=new L,Qn=new ee,Qm=new L(0,0,0),jm=new L(1,1,1),ns=new L,jr=new L,zn=new L,Ju=new ee,Qu=new Me;class Wn{constructor(t=0,e=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tg=0;const ju=new L,Zs=new Me,Di=new ee,ta=new L,Xo=new L,eg=new L,ng=new Me,tf=new L(1,0,0),ef=new L(0,1,0),nf=new L(0,0,1),sf={type:"added"},ig={type:"removed"},Js={type:"childadded",child:null},Ql={type:"childremoved",child:null};class $e extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new L,e=new Wn,n=new Me,i=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new oe}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(tf,t)}rotateY(t){return this.rotateOnAxis(ef,t)}rotateZ(t){return this.rotateOnAxis(nf,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tf,t)}translateY(t){return this.translateOnAxis(ef,t)}translateZ(t){return this.translateOnAxis(nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Xo,ta,this.up):Di.lookAt(ta,Xo,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(Di),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),Js.child=t,this.dispatchEvent(Js),Js.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*i,o[13]+=n-o[1]*e-o[5]*n-o[9]*i,o[14]+=i-o[2]*e-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.DEFAULT_UP=new L(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class me extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const m of t.hand.values()){const x=e.getJointPose(m,n),g=this._getHandJoint(c,m);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},ea={h:0,s:0,l:0};function tc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Se.workingColorSpace){if(t=nu(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=tc(r,o,t+1/3),this.g=tc(r,o,t),this.b=tc(r,o,t-1/3)}return Se.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(o){o!==void 0&&parseFloat(o)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Se.workingToColorSpace(xn.copy(this),t),Math.round(fe(xn.r*255,0,255))*65536+Math.round(fe(xn.g*255,0,255))*256+Math.round(fe(xn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,o=xn.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=He){Se.workingToColorSpace(xn.copy(this),t);const e=xn.r,n=xn.g,i=xn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(ea);const n=Tr(is.h,ea.h,e),i=Tr(is.s,ea.s,e),o=Tr(is.l,ea.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new It;It.NAMES=Ap;class ou extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const jn=new L,Ni=new L,ec=new L,Ui=new L,Qs=new L,js=new L,of=new L,nc=new L,ic=new L,sc=new L,oc=new Ie,rc=new Ie,ac=new Ie;class Jn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){jn.subVectors(i,e),Ni.subVectors(n,e),ec.subVectors(t,e);const r=jn.dot(jn),a=jn.dot(Ni),l=jn.dot(ec),c=Ni.dot(Ni),h=Ni.dot(ec),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(r*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ui.x),l.addScaledVector(r,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return oc.setScalar(0),rc.setScalar(0),ac.setScalar(0),oc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(oc,o.x),r.addScaledVector(rc,o.y),r.addScaledVector(ac,o.z),r}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),Ni.subVectors(t,e),jn.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),jn.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Jn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Qs.subVectors(i,n),js.subVectors(o,n),nc.subVectors(t,n);const l=Qs.dot(nc),c=js.dot(nc);if(l<=0&&c<=0)return e.copy(n);ic.subVectors(t,i);const h=Qs.dot(ic),u=js.dot(ic);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Qs,r);sc.subVectors(t,o);const d=Qs.dot(sc),p=js.dot(sc);if(p>=0&&d<=p)return e.copy(o);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(js,a);const x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return of.subVectors(o,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(of,a);const g=1/(x+m+f);return r=m*g,a=f*g,e.copy(n).addScaledVector(Qs,r).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ws{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ti):ti.fromBufferAttribute(o,r),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),ia.subVectors(this.max,qo),to.subVectors(t.a,qo),eo.subVectors(t.b,qo),no.subVectors(t.c,qo),ss.subVectors(eo,to),os.subVectors(no,eo),Rs.subVectors(to,no);let e=[0,-ss.z,ss.y,0,-os.z,os.y,0,-Rs.z,Rs.y,ss.z,0,-ss.x,os.z,0,-os.x,Rs.z,0,-Rs.x,-ss.y,ss.x,0,-os.y,os.x,0,-Rs.y,Rs.x,0];return!lc(e,to,eo,no,ia)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,to,eo,no,ia))?!1:(sa.crossVectors(ss,os),e=[sa.x,sa.y,sa.z],lc(e,to,eo,no,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zi=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,na=new Ws,to=new L,eo=new L,no=new L,ss=new L,os=new L,Rs=new L,qo=new L,ia=new L,sa=new L,Cs=new L;function lc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Cs.fromArray(s,o);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vi=og();function og(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const o=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,o[l]=c|h}for(let l=1024;l<2048;++l)o[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:o,exponentTable:r,offsetTable:a}}function rg(s){Math.abs(s)>65504&&ne("DataUtils.toHalfFloat(): Value out of range."),s=fe(s,-65504,65504),Vi.floatView[0]=s;const t=Vi.uint32View[0],e=t>>23&511;return Vi.baseTable[e]+((t&8388607)>>Vi.shiftTable[e])}function ag(s){const t=s>>10;return Vi.uint32View[0]=Vi.mantissaTable[Vi.offsetTable[t]+(s&1023)]+Vi.exponentTable[t],Vi.floatView[0]}class lg{static toHalfFloat(t){return rg(t)}static fromHalfFloat(t){return ag(t)}}const Ze=new L,oa=new pt;let cg=0;class An extends Gs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bp,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),o=Le(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cp extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hg=new Ws,Yo=new L,cc=new L;class Ho{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hg.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const e=Yo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(cc)),this.expandByPoint(Yo.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ug=0;const qn=new ee,hc=new $e,io=new L,Fn=new Ws,$o=new Ws,an=new L;class Re extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?Cp:Rp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Fn.min,$o.min),Fn.expandByPoint(an),an.addVectors(Fn.max,$o.max),Fn.expandByPoint(an)):(Fn.expandByPoint($o.min),Fn.expandByPoint($o.max))}Fn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)an.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(an));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(t,c),an.add(io)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new L,l[_]=new L;const c=new L,h=new L,u=new L,f=new pt,d=new pt,p=new pt,m=new L,x=new L;function g(_,b,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),f.fromBufferAttribute(o,_),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(m),a[b].add(m),a[A].add(m),l[_].add(x),l[b].add(x),l[A].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const A=y[_],C=A.start,I=A.count;for(let U=C,F=C+I;U<F;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new L,v=new L,M=new L,S=new L;function E(_){M.fromBufferAttribute(i,_),S.copy(M);const b=a[_];w.copy(b),w.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(S,b);const C=v.dot(l[_])<0?-1:1;r.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,b=y.length;_<b;++_){const A=y[_],C=A.start,I=A.count;for(let U=C,F=C+I;U<F;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,o=new L,r=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new An(f,h,u)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bp,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const _n=new L;class ol{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyMatrix4(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.applyNormalMatrix(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_n.fromBufferAttribute(this,e),_n.transformDirection(t),this.setXYZ(e,_n.x,_n.y,_n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),o=Le(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ol(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uc=new L,dg=new L,pg=new oe;class yi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=uc.subVectors(n,e).cross(dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(uc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pg.getNormalMatrix(t),i=this.coplanarPoint(uc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let mg=0;class bs extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=br,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=hp,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yl,this.stencilZFail=Yl,this.stencilZPass=Yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dl extends bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let so;const Ko=new L,oo=new L,ro=new L,ao=new pt,Zo=new pt,Pp=new ee,ra=new L,Jo=new L,aa=new L,rf=new pt,fc=new pt,af=new pt;class ru extends $e{constructor(t=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fg(e,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new ol(n,3,0,!1)),so.setAttribute("uv",new ol(n,2,3,!1))}this.geometry=so,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),Pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ro.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ro.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;la(ra.set(-.5,-.5,0),ro,r,oo,i,o),la(Jo.set(.5,-.5,0),ro,r,oo,i,o),la(aa.set(.5,.5,0),ro,r,oo,i,o),rf.set(0,0),fc.set(1,0),af.set(1,1);let a=t.ray.intersectTriangle(ra,Jo,aa,!1,Ko);if(a===null&&(la(Jo.set(-.5,.5,0),ro,r,oo,i,o),fc.set(0,1),a=t.ray.intersectTriangle(ra,aa,Jo,!1,Ko),a===null))return;const l=t.ray.origin.distanceTo(Ko);l<t.near||l>t.far||e.push({distance:l,point:Ko.clone(),uv:Jn.getInterpolation(Ko,ra,Jo,aa,rf,fc,af,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function la(s,t,e,n,i,o){ao.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Zo.x=o*ao.x-i*ao.y,Zo.y=i*ao.x+o*ao.y):Zo.copy(ao),s.copy(t),s.x+=Zo.x,s.y+=Zo.y,s.applyMatrix4(Pp)}const Fi=new L,dc=new L,ca=new L,ha=new L;class au{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dc.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(dc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ca),a=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-r*r);let u,f,d,p;if(h>0)if(u=r*l-a,f=r*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){const m=1/h;u*=m,f*=m,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dc).addScaledVector(ca,f),d}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);const n=Fi.dot(this.direction),i=Fi.dot(Fi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,i,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-r.x,f=t.y-r.y,d=t.z-r.z,p=e.x-r.x,m=e.y-r.y,x=e.z-r.z,g=n.x-r.x,y=n.y-r.y,w=n.z-r.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h);let E,_,b,A,C,I,U,F,k,Y,X,et;if(v>=M&&v>=S?(b=l,I=u,k=p,et=g,l>=0?(E=c,_=h,A=f,C=d,U=m,F=x,Y=y,X=w):(E=h,_=c,A=d,C=f,U=x,F=m,Y=w,X=y)):M>=S?(b=c,I=f,k=m,et=y,c>=0?(E=h,_=l,A=d,C=u,U=x,F=p,Y=w,X=g):(E=l,_=h,A=u,C=d,U=p,F=x,Y=g,X=w)):(b=h,I=d,k=x,et=w,h>=0?(E=l,_=c,A=u,C=f,U=p,F=m,Y=g,X=y):(E=c,_=l,A=f,C=u,U=m,F=p,Y=y,X=g)),b===0)return null;const G=E/b,K=_/b,it=1/b,ft=A-G*I,B=C-K*I,H=U-G*k,P=F-K*k,V=Y-G*et,D=X-K*et,z=V*P-D*H,W=ft*D-B*V,Q=H*B-P*ft;if(i){if(z<0||W<0||Q<0)return null}else if((z<0||W<0||Q<0)&&(z>0||W>0||Q>0))return null;const j=z+W+Q;if(j===0)return null;const vt=it*(z*I+W*k+Q*et);return(j>0?vt<0:vt>0)?null:this.at(vt/j,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const lf=new ee,Ps=new au,ua=new Ho,cf=new L,fa=new L,da=new L,pa=new L,pc=new L,ma=new L,hf=new L,ga=new L;class St extends $e{constructor(t=new Re,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){ma.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(pc.fromBufferAttribute(u,t),r?ma.addScaledVector(pc,h):ma.addScaledVector(pc.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(o),Ps.copy(t.ray).recast(t.near),!(ua.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(ua,cf)===null||Ps.origin.distanceToSquared(cf)>(t.far-t.near)**2))&&(lf.copy(o).invert(),Ps.copy(t.ray).applyMatrix4(lf),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=r[x.materialIndex],y=Math.max(x.start,d.start),w=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,M=w;v<M;v+=3){const S=a.getX(v),E=a.getX(v+1),_=a.getX(v+2);i=xa(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const y=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);i=xa(this,r,t,n,c,h,u,y,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const x=f[p],g=r[x.materialIndex],y=Math.max(x.start,d.start),w=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,M=w;v<M;v+=3){const S=v,E=v+1,_=v+2;i=xa(this,g,t,n,c,h,u,S,E,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=p,g=m;x<g;x+=3){const y=x,w=x+1,v=x+2;i=xa(this,r,t,n,c,h,u,y,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function gg(s,t,e,n,i,o,r,a){let l;if(t.side===Dn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===ks,a),l===null)return null;ga.copy(a),ga.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:s}}function xa(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,fa),s.getVertexPosition(l,da),s.getVertexPosition(c,pa);const h=gg(s,t,e,n,fa,da,pa,hf);if(h){const u=new L;Jn.getBarycoord(hf,fa,da,pa,u),i&&(h.uv=Jn.getInterpolatedAttribute(i,a,l,c,u,new pt)),o&&(h.uv1=Jn.getInterpolatedAttribute(o,a,l,c,u,new pt)),r&&(h.normal=Jn.getInterpolatedAttribute(r,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Jn.getNormal(fa,da,pa,f.normal),h.face=f,h.barycoord=u}return h}class Fo extends pn{constructor(t=null,e=1,n=1,i,o,r,a,l,c=je,h=je,u,f){super(null,r,a,l,c,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uf extends An{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const lo=new ee,ff=new ee,va=[],df=new Ws,xg=new ee,Qo=new St,jo=new Ho;class Io extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lo),df.copy(t.boundingBox).applyMatrix4(lo),this.boundingBox.union(df)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ho),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lo),jo.copy(t.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(n),t.ray.intersectsSphere(jo)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,lo),ff.multiplyMatrices(n,lo),Qo.matrixWorld=ff,Qo.raycast(t,va);for(let r=0,a=va.length;r<a;r++){const l=va[r];l.instanceId=o,l.object=this,e.push(l)}va.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new uf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fo(new Float32Array(i*this.count),i,this.count,Il,hi));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ls=new Ho,vg=new pt(.5,.5),ya=new L;class lu{constructor(t=new yi,e=new yi,n=new yi,i=new yi,o=new yi,r=new yi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si,n=!1){const i=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],m=o[9],x=o[10],g=o[11],y=o[12],w=o[13],v=o[14],M=o[15];if(i[0].setComponents(c-r,d-h,g-p,M-y).normalize(),i[1].setComponents(c+r,d+h,g+p,M+y).normalize(),i[2].setComponents(c+a,d+u,g+m,M+w).normalize(),i[3].setComponents(c-a,d-u,g-m,M-w).normalize(),n)i[4].setComponents(l,f,x,v).normalize(),i[5].setComponents(c-l,d-f,g-x,M-v).normalize();else if(i[4].setComponents(c-l,d-f,g-x,M-v).normalize(),e===Si)i[5].setComponents(c+l,d+f,g+x,M+v).normalize();else if(e===Ur)i[5].setComponents(l,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const e=vg.distanceTo(t.center);return Ls.radius=.7071067811865476+e,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ya.x=i.normal.x>0?t.max.x:t.min.x,ya.y=i.normal.y>0?t.max.y:t.min.y,ya.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lp extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rl=new L,al=new L,pf=new ee,tr=new au,Ma=new Ho,mc=new L,mf=new L;class yg extends $e{constructor(t=new Re,e=new Lp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)rl.fromBufferAttribute(e,i-1),al.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rl.distanceTo(al);t.setAttribute("lineDistance",new Gt(n,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=o,t.ray.intersectsSphere(Ma)===!1)return;pf.copy(i).invert(),tr.copy(t.ray).applyMatrix4(pf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=d,x=p-1;m<x;m+=c){const g=h.getX(m),y=h.getX(m+1),w=_a(this,t,tr,l,g,y,m);w&&e.push(w)}if(this.isLineLoop){const m=h.getX(p-1),x=h.getX(d),g=_a(this,t,tr,l,m,x,p-1);g&&e.push(g)}}else{const d=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let m=d,x=p-1;m<x;m+=c){const g=_a(this,t,tr,l,m,m+1,m);g&&e.push(g)}if(this.isLineLoop){const m=_a(this,t,tr,l,p-1,d,p-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _a(s,t,e,n,i,o,r){const a=s.geometry.attributes.position;if(rl.fromBufferAttribute(a,i),al.fromBufferAttribute(a,o),e.distanceSqToSegment(rl,al,mc,mf)>n)return;mc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(mc);if(!(c<t.near||c>t.far))return{distance:c,point:mf.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const gf=new L,xf=new L;class Mg extends yg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)gf.fromBufferAttribute(e,i),xf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gf.distanceTo(xf);t.setAttribute("lineDistance",new Gt(n,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ip extends pn{constructor(t=[],e=Os,n,i,o,r,a,l,c,h){super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Es extends pn{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fr extends pn{constructor(t,e,n=Ri,i,o,r,a=je,l=je,c,h=Ji,u=1){if(h!==Ji&&h!==Fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new iu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class _g extends Fr{constructor(t,e=Ri,n=Os,i,o,r=je,a=je,l,c=Ji){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dp extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fn extends Re{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function p(m,x,g,y,w,v,M,S,E,_,b){const A=v/E,C=M/_,I=v/2,U=M/2,F=S/2,k=E+1,Y=_+1;let X=0,et=0;const G=new L;for(let K=0;K<Y;K++){const it=K*C-U;for(let ft=0;ft<k;ft++){const B=ft*A-I;G[m]=B*y,G[x]=it*w,G[g]=F,c.push(G.x,G.y,G.z),G[m]=0,G[x]=0,G[g]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ft/E),u.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let it=0;it<E;it++){const ft=f+it+k*K,B=f+it+k*(K+1),H=f+(it+1)+k*(K+1),P=f+(it+1)+k*K;l.push(ft,B,P),l.push(B,H,P),et+=6}a.addGroup(d,et,b),d+=et,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zi extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new L,h=new pt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qe extends Re{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],d=[];let p=0;const m=[],x=n/2;let g=0;y(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function y(){const v=new L,M=new L;let S=0;const E=(e-t)/n;for(let _=0;_<=o;_++){const b=[],A=_/o,C=A*(e-t)+t;for(let I=0;I<=i;I++){const U=I/i,F=U*l+a,k=Math.sin(F),Y=Math.cos(F);M.x=C*k,M.y=-A*n+x,M.z=C*Y,u.push(M.x,M.y,M.z),v.set(k,E,Y).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-A),b.push(p++)}m.push(b)}for(let _=0;_<i;_++)for(let b=0;b<o;b++){const A=m[b][_],C=m[b+1][_],I=m[b+1][_+1],U=m[b][_+1];(t>0||b!==0)&&(h.push(A,C,U),S+=3),(e>0||b!==o-1)&&(h.push(C,I,U),S+=3)}c.addGroup(g,S,0),g+=S}function w(v){const M=p,S=new pt,E=new L;let _=0;const b=v===!0?t:e,A=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),p++;const C=p;for(let I=0;I<=i;I++){const F=I/i*l+a,k=Math.cos(F),Y=Math.sin(F);E.x=b*Y,E.y=x*A,E.z=b*k,u.push(E.x,E.y,E.z),f.push(0,A,0),S.x=k*.5+.5,S.y=Y*.5*A+.5,d.push(S.x,S.y),p++}for(let I=0;I<i;I++){const U=M+I,F=C+I;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new pt:new L);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],o=[],r=[],a=new L,l=new ee;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new L)}o[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(fe(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(fe(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cu extends Li{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wg extends cu{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function hu(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const vf=new L,yf=new L,gc=new hu,xc=new hu,vc=new hu;class kr extends Li{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(yf.subVectors(i[0],i[1]).add(i[0]),c=yf);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(vf.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=vf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),x<1e-4&&(x=m),gc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,m,x),xc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,m,x),vc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,m,x)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(gc.calc(l),xc.calc(l),vc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mf(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function Sg(s,t){const e=1-s;return e*e*t}function bg(s,t){return 2*(1-s)*s*t}function Eg(s,t){return s*s*t}function Ar(s,t,e,n){return Sg(s,t)+bg(s,e)+Eg(s,n)}function Tg(s,t){const e=1-s;return e*e*e*t}function Ag(s,t){const e=1-s;return 3*e*e*s*t}function Rg(s,t){return 3*(1-s)*s*s*t}function Cg(s,t){return s*s*s*t}function Rr(s,t,e,n,i){return Tg(s,t)+Ag(s,e)+Rg(s,n)+Cg(s,i)}class Np extends Li{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Rr(t,i.x,o.x,r.x,a.x),Rr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Up extends Li{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Rr(t,i.x,o.x,r.x,a.x),Rr(t,i.y,o.y,r.y,a.y),Rr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zp extends Li{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Or extends Li{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fp extends Li{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ar(t,i.x,o.x,r.x),Ar(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends Li{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ar(t,i.x,o.x,r.x),Ar(t,i.y,o.y,r.y),Ar(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kp extends Li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Mf(a,l.x,c.x,h.x,u.x),Mf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var ll=Object.freeze({__proto__:null,ArcCurve:wg,CatmullRomCurve3:kr,CubicBezierCurve:Np,CubicBezierCurve3:Up,EllipseCurve:cu,LineCurve:zp,LineCurve3:Or,QuadraticBezierCurve:Fp,QuadraticBezierCurve3:uu,SplineCurve:kp});class fu extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ll[i.type]().fromJSON(i))}return this}}let Do=class extends fu{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Fp(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Np(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new cu(t,e,n,i,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class qr extends Do{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Do().fromJSON(i))}return this}}function Pg(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Op(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Ug(s,t,o,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let f=e;f<i;f+=e){const d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Br(o,r,e,a,l,c,0),r}function Op(s,t,e,n,i){let o;if(i===qg(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=_f(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=_f(r/n|0,s[r],s[r+1],o);return o&&ko(o,o.next)&&(Vr(o),o=o.next),o}function Hs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||We(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Bg(s,n,i,o);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(o?Ig(s,n,i,o):Lg(s)){t.push(l.i,s.i,c.i),Vr(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=Dg(Hs(s),t),Br(s,t,e,n,i,o,2)):r===2&&Ng(s,t,e,n,i,o):Br(Hs(s),t,e,n,i,o,1);break}}}function Lg(s){const t=s.prev,e=s,n=s.next;if(We(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,o,r),u=Math.min(a,l,c),f=Math.max(i,o,r),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Mr(i,a,o,l,r,c,p.x,p.y)&&We(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ig(s,t,e,n){const i=s.prev,o=s,r=s.next;if(We(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,f=r.y,d=Math.min(a,l,c),p=Math.min(h,u,f),m=Math.max(a,l,c),x=Math.max(h,u,f),g=Rh(d,p,t,e,n),y=Rh(m,x,t,e,n);let w=s.prevZ,v=s.nextZ;for(;w&&w.z>=g&&v&&v.z<=y;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&Mr(a,h,l,u,c,f,w.x,w.y)&&We(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==r&&Mr(a,h,l,u,c,f,v.x,v.y)&&We(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=m&&w.y>=p&&w.y<=x&&w!==i&&w!==r&&Mr(a,h,l,u,c,f,w.x,w.y)&&We(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=x&&v!==i&&v!==r&&Mr(a,h,l,u,c,f,v.x,v.y)&&We(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dg(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ko(n,i)&&Hp(n,e,e.next,i)&&Hr(n,i)&&Hr(i,n)&&(t.push(n.i,e.i,i.i),Vr(e),Vr(e.next),e=s=i),e=e.next}while(e!==s);return Hs(e)}function Ng(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Gg(r,a)){let l=Vp(r,a);r=Hs(r,r.next),l=Hs(l,l.next),Br(r,t,e,n,i,o,0),Br(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Ug(s,t,e,n){const i=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=Op(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Vg(c))}i.sort(zg);for(let o=0;o<i.length;o++)e=Fg(i[o],e);return e}function zg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Fg(s,t){const e=kg(s,t);if(!e)return t;const n=Vp(e,s);return Hs(n,n.next),Hs(e,e.next)}function kg(s,t){let e=t;const n=s.x,i=s.y;let o=-1/0,r;if(ko(s,e))return e;do{if(ko(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Bp(i<c?n:o,i,l,c,i<c?o:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Hr(e,s)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Og(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function Og(s,t){return We(s.prev,s,t.prev)<0&&We(t.next,s,s.next)<0}function Bg(s,t,e,n){let i=s;do i.z===0&&(i.z=Rh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hg(i)}function Hg(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function Rh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Vg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Bp(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function Mr(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Bp(s,t,e,n,i,o,r,a)}function Gg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Wg(s,t)&&(Hr(s,t)&&Hr(t,s)&&Xg(s,t)&&(We(s.prev,s,t.prev)||We(s,t.prev,t))||ko(s,t)&&We(s.prev,s,s.next)>0&&We(t.prev,t,t.next)>0)}function We(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ko(s,t){return s.x===t.x&&s.y===t.y}function Hp(s,t,e,n){const i=Sa(We(s,t,e)),o=Sa(We(s,t,n)),r=Sa(We(e,n,s)),a=Sa(We(e,n,t));return!!(i!==o&&r!==a||i===0&&wa(s,e,t)||o===0&&wa(s,n,t)||r===0&&wa(e,s,n)||a===0&&wa(e,t,n))}function wa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Sa(s){return s>0?1:s<0?-1:0}function Wg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Hp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Hr(s,t){return We(s.prev,s,s.next)<0?We(s,t,s.next)>=0&&We(s,s.prev,t)>=0:We(s,t,s.prev)<0||We(s,s.next,t)<0}function Xg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Vp(s,t){const e=Ch(s.i,s.x,s.y),n=Ch(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function _f(s,t,e,n){const i=Ch(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ch(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qg(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Yg{static triangulate(t,e,n=2){return Pg(t,e,n)}}class bi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return bi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];wf(t),Sf(n,t);let r=t.length;e.forEach(wf);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Sf(n,e[l]);const a=Yg.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function wf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Sf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Nl extends Re{constructor(t=new qr([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Gt(i,3)),this.setAttribute("uv",new Gt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:$g;let w,v=!1,M,S,E,_;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;const at=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,at),S=new L,E=new L,_=new L}f||(x=0,d=0,p=0,m=0);const b=a.extractPoints(c);let A=b.shape;const C=b.holes;if(!bi.isClockWise(A)){A=A.reverse();for(let at=0,mt=C.length;at<mt;at++){const dt=C[at];bi.isClockWise(dt)&&(C[at]=dt.reverse())}}function U(at){const dt=10000000000000001e-36;let _t=at[0];for(let xt=1;xt<=at.length;xt++){const $t=xt%at.length,Ht=at[$t],Jt=Ht.x-_t.x,Qt=Ht.y-_t.y,$=Jt*Jt+Qt*Qt,xe=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(_t.x),Math.abs(_t.y)),le=dt*xe*xe;if($<=le){at.splice($t,1),xt--;continue}_t=Ht}}U(A),C.forEach(U);const F=C.length,k=A;for(let at=0;at<F;at++){const mt=C[at];A=A.concat(mt)}function Y(at,mt,dt){return mt||we("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(mt,dt)}const X=A.length;function et(at,mt,dt){let _t,xt,$t;const Ht=at.x-mt.x,Jt=at.y-mt.y,Qt=dt.x-at.x,$=dt.y-at.y,xe=Ht*Ht+Jt*Jt,le=Ht*$-Jt*Qt;if(Math.abs(le)>Number.EPSILON){const O=Math.sqrt(xe),T=Math.sqrt(Qt*Qt+$*$),tt=mt.x-Jt/O,rt=mt.y+Ht/O,ct=dt.x-$/T,bt=dt.y+Qt/T,Et=((ct-tt)*$-(bt-rt)*Qt)/(Ht*$-Jt*Qt);_t=tt+Ht*Et-at.x,xt=rt+Jt*Et-at.y;const ht=_t*_t+xt*xt;if(ht<=2)return new pt(_t,xt);$t=Math.sqrt(ht/2)}else{let O=!1;Ht>Number.EPSILON?Qt>Number.EPSILON&&(O=!0):Ht<-Number.EPSILON?Qt<-Number.EPSILON&&(O=!0):Math.sign(Jt)===Math.sign($)&&(O=!0),O?(_t=-Jt,xt=Ht,$t=Math.sqrt(xe)):(_t=Ht,xt=Jt,$t=Math.sqrt(xe/2))}return new pt(_t/$t,xt/$t)}const G=[];for(let at=0,mt=k.length,dt=mt-1,_t=at+1;at<mt;at++,dt++,_t++)dt===mt&&(dt=0),_t===mt&&(_t=0),G[at]=et(k[at],k[dt],k[_t]);const K=[];let it,ft=G.concat();for(let at=0,mt=F;at<mt;at++){const dt=C[at];it=[];for(let _t=0,xt=dt.length,$t=xt-1,Ht=_t+1;_t<xt;_t++,$t++,Ht++)$t===xt&&($t=0),Ht===xt&&(Ht=0),it[_t]=et(dt[_t],dt[$t],dt[Ht]);K.push(it),ft=ft.concat(it)}let B;if(x===0)B=bi.triangulateShape(k,C);else{const at=[],mt=[];for(let dt=0;dt<x;dt++){const _t=dt/x,xt=d*Math.cos(_t*Math.PI/2),$t=p*Math.sin(_t*Math.PI/2)+m;for(let Ht=0,Jt=k.length;Ht<Jt;Ht++){const Qt=Y(k[Ht],G[Ht],$t);W(Qt.x,Qt.y,-xt),_t===0&&at.push(Qt)}for(let Ht=0,Jt=F;Ht<Jt;Ht++){const Qt=C[Ht];it=K[Ht];const $=[];for(let xe=0,le=Qt.length;xe<le;xe++){const O=Y(Qt[xe],it[xe],$t);W(O.x,O.y,-xt),_t===0&&$.push(O)}_t===0&&mt.push($)}}B=bi.triangulateShape(at,mt)}const H=B.length,P=p+m;for(let at=0;at<X;at++){const mt=f?Y(A[at],ft[at],P):A[at];v?(E.copy(M.normals[0]).multiplyScalar(mt.x),S.copy(M.binormals[0]).multiplyScalar(mt.y),_.copy(w[0]).add(E).add(S),W(_.x,_.y,_.z)):W(mt.x,mt.y,0)}for(let at=1;at<=h;at++)for(let mt=0;mt<X;mt++){const dt=f?Y(A[mt],ft[mt],P):A[mt];v?(E.copy(M.normals[at]).multiplyScalar(dt.x),S.copy(M.binormals[at]).multiplyScalar(dt.y),_.copy(w[at]).add(E).add(S),W(_.x,_.y,_.z)):W(dt.x,dt.y,u/h*at)}for(let at=x-1;at>=0;at--){const mt=at/x,dt=d*Math.cos(mt*Math.PI/2),_t=p*Math.sin(mt*Math.PI/2)+m;for(let xt=0,$t=k.length;xt<$t;xt++){const Ht=Y(k[xt],G[xt],_t);W(Ht.x,Ht.y,u+dt)}for(let xt=0,$t=C.length;xt<$t;xt++){const Ht=C[xt];it=K[xt];for(let Jt=0,Qt=Ht.length;Jt<Qt;Jt++){const $=Y(Ht[Jt],it[Jt],_t);v?W($.x,$.y+w[h-1].y,w[h-1].x+dt):W($.x,$.y,u+dt)}}}V(),D();function V(){const at=i.length/3;if(f){let mt=0,dt=X*mt;for(let _t=0;_t<H;_t++){const xt=B[_t];Q(xt[2]+dt,xt[1]+dt,xt[0]+dt)}mt=h+x*2,dt=X*mt;for(let _t=0;_t<H;_t++){const xt=B[_t];Q(xt[0]+dt,xt[1]+dt,xt[2]+dt)}}else{for(let mt=0;mt<H;mt++){const dt=B[mt];Q(dt[2],dt[1],dt[0])}for(let mt=0;mt<H;mt++){const dt=B[mt];Q(dt[0]+X*h,dt[1]+X*h,dt[2]+X*h)}}n.addGroup(at,i.length/3-at,0)}function D(){const at=i.length/3;let mt=0;z(k,mt),mt+=k.length;for(let dt=0,_t=C.length;dt<_t;dt++){const xt=C[dt];z(xt,mt),mt+=xt.length}n.addGroup(at,i.length/3-at,1)}function z(at,mt){let dt=at.length;for(;--dt>=0;){const _t=dt;let xt=dt-1;xt<0&&(xt=at.length-1);for(let $t=0,Ht=h+x*2;$t<Ht;$t++){const Jt=X*$t,Qt=X*($t+1),$=mt+_t+Jt,xe=mt+xt+Jt,le=mt+xt+Qt,O=mt+_t+Qt;j($,xe,le,O)}}}function W(at,mt,dt){l.push(at),l.push(mt),l.push(dt)}function Q(at,mt,dt){vt(at),vt(mt),vt(dt);const _t=i.length/3,xt=y.generateTopUV(n,i,_t-3,_t-2,_t-1);wt(xt[0]),wt(xt[1]),wt(xt[2])}function j(at,mt,dt,_t){vt(at),vt(mt),vt(_t),vt(mt),vt(dt),vt(_t);const xt=i.length/3,$t=y.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);wt($t[0]),wt($t[1]),wt($t[3]),wt($t[1]),wt($t[2]),wt($t[3])}function vt(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function wt(at){o.push(at.x),o.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ll[i.type]().fromJSON(i)),new Nl(n,t.options)}}const $g={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(o,r),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[o*3],x=t[o*3+1],g=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new pt(r,1-l),new pt(c,1-u),new pt(f,1-p),new pt(m,1-g)]:[new pt(a,1-l),new pt(h,1-u),new pt(d,1-p),new pt(x,1-g)]}};function Kg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ul extends Re{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=fe(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new L,f=new pt,d=new L,p=new L,m=new L;let x=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-x,d.z=g*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-x,d.z=g*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let y=0;y<=e;y++){const w=n+y*h*i,v=Math.sin(w),M=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*M,r.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);const E=l[3*S+0]*v,_=l[3*S+1],b=l[3*S+0]*M;c.push(E,_,b)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){const v=w+y*t.length,M=v,S=v+t.length,E=v+t.length+1,_=v+1;o.push(M,S,_),o.push(E,_,S)}this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.points,t.segments,t.phiStart,t.phiLength)}}class Ve extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],m=[],x=[];for(let g=0;g<h;g++){const y=g*f-r;for(let w=0;w<c;w++){const v=w*u-o;p.push(v,-y,0),m.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const w=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),S=y+1+c*g;d.push(w,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(m,3)),this.setAttribute("uv",new Gt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class du extends Re{constructor(t=new qr([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(i,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const p=f.holes;bi.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const y=p[x];bi.isClockWise(y)===!0&&(p[x]=y.reverse())}const m=bi.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const y=p[x];d=d.concat(y)}for(let x=0,g=d.length;x<g;x++){const y=d[x];i.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let x=0,g=m.length;x<g;x++){const y=m[x],w=y[0]+u,v=y[1]+u,M=y[2]+u;n.push(w,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Zg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new du(n,t.curveSegments)}}function Zg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Vo extends Re{constructor(t=new uu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,l=new L,c=new pt;let h=new L;const u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function m(){for(let w=0;w<e;w++)x(w);x(o===!1?e:0),y(),g()}function x(w){h=t.getPointAt(w/e,h);const v=r.normals[w],M=r.binormals[w];for(let S=0;S<=i;S++){const E=S/i*Math.PI*2,_=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+_*M.x,l.y=b*v.y+_*M.y,l.z=b*v.z+_*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){const M=(i+1)*(w-1)+(v-1),S=(i+1)*w+(v-1),E=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(M,S,_),p.push(S,E,_)}}function y(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vo(new ll[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Oo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(bf(i))i.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(bf(i[0])){const o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();t[e][n]=o}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Sn(s){const t={};for(let e=0;e<s.length;e++){const n=Oo(s[e]);for(const i in n)t[i]=n[i]}return t}function bf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Jg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const Qg={clone:Oo,merge:Sn};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=Jg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ex extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ze extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cn extends ze{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cl extends bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=qh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wp extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Ef(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Ef(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Ef(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ix{constructor(t,e,n){const i=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sx=new ix;class pu{constructor(t){this.manager=t!==void 0?t:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}pu.DEFAULT_MATERIAL_NAME="__DEFAULT";const co=new WeakMap;class ox extends pu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=yc.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let u=co.get(r);u===void 0&&(u=[],co.set(r,u)),u.push({onLoad:e,onError:i})}return r}const a=zr("img");function l(){h(),e&&e(this);const u=co.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}co.delete(this),o.manager.itemEnd(t)}function c(u){h(),i&&i(u),yc.remove(`image:${t}`);const f=co.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}co.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yc.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class hl extends pu{constructor(t){super(t)}load(t,e,n,i){const o=new pn,r=new ox(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,i),o}}class zl extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class rx extends zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Mc=new ee,Tf=new L,Af=new L;class mu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tf),Af.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Af),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mc,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=i?i.z/o.x:1,a=i?i.w/o.y:1,l=i?i.x/o.x:0,c=i?i.y/o.y:0;t.coordinateSystem===Ur||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ba=new L,Ea=new Me,fi=new L;class Xp extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ea,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Ea,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new L,Rf=new pt,Cf=new pt;class hn extends Xp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,Rf,Cf),e.subVectors(Cf,Rf)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ax extends mu{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=zo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class lx extends zl{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new ax}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class cx extends mu{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class qp extends zl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Fl extends Xp{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hx extends mu{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new hx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ho=-90,uo=1;class Yp extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(ho,uo,t,e);i.layers=this.layers,this.add(i);const o=new hn(ho,uo,t,e);o.layers=this.layers,this.add(o);const r=new hn(ho,uo,t,e);r.layers=this.layers,this.add(r);const a=new hn(ho,uo,t,e);a.layers=this.layers,this.add(a);const l=new hn(ho,uo,t,e);l.layers=this.layers,this.add(l);const c=new hn(ho,uo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class fx extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Pf=new ee;class vs{constructor(t,e,n=0,i=1/0){this.ray=new au(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(t,e=!0,n=[]){return Ph(t,this,n,e),n.sort(Lf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,o=t.length;i<o;i++)Ph(t[i],this,n,e);return n.sort(Lf),n}}function Lf(s,t){return s.distance-t.distance}function Ph(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)Ph(o[r],t,e,!0)}}const ku=class ku{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}};ku.prototype.isMatrix2=!0;let If=ku;function Df(s,t,e,n){const i=dx(n);switch(e){case wp:return s*t;case Il:return s*t/i.components*i.byteLength;case Jh:return s*t/i.components*i.byteLength;case Bs:return s*t*2/i.components*i.byteLength;case Qh:return s*t*2/i.components*i.byteLength;case Sp:return s*t*3/i.components*i.byteLength;case Hn:return s*t*4/i.components*i.byteLength;case jh:return s*t*4/i.components*i.byteLength;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jc:case eh:return Math.max(s,16)*Math.max(t,8)/4;case Qc:case th:return Math.max(s,8)*Math.max(t,8)/2;case nh:case ih:case oh:case rh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sh:case ja:case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wh:case Sh:case bh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Eh:case Th:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tl:case Ah:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dx(s){switch(s){case In:case vp:return{byteLength:1,components:1};case Dr:case yp:case Gn:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Ri:case $h:case hi:return{byteLength:4,components:1};case Mp:case _p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $p(){let s=null,t=!1,e=null,n=null;function i(o,r){n=s.requestAnimationFrame(i),e(o,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function px(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],m=u[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const m=u[d];s.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var mx=`#ifdef USE_ALPHAHASH
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
}`,ue={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:xx,alphamap_pars_fragment:vx,alphatest_fragment:yx,alphatest_pars_fragment:Mx,aomap_fragment:_x,aomap_pars_fragment:wx,batching_pars_vertex:Sx,batching_vertex:bx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:zx,color_vertex:Fx,common:kx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Bx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:av,envmap_vertex:Jx,fog_vertex:Qx,fog_pars_vertex:jx,fog_fragment:tv,fog_pars_fragment:ev,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:rv,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:hv,lights_phong_pars_fragment:uv,lights_physical_fragment:fv,lights_physical_pars_fragment:dv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:xv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:_v,map_fragment:wv,map_pars_fragment:Sv,map_particle_fragment:bv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Iv,normal_fragment_begin:Dv,normal_fragment_maps:Nv,normal_pars_fragment:Uv,normal_pars_vertex:zv,normal_vertex:Fv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Vv,opaque_fragment:Gv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:jv,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:r1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:h1,uv_pars_fragment:u1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:x1,backgroundCube_frag:v1,cube_vert:y1,cube_frag:M1,depth_vert:_1,depth_frag:w1,distance_vert:S1,distance_frag:b1,equirect_vert:E1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:I1,meshmatcap_vert:D1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:z1,meshphong_vert:F1,meshphong_frag:k1,meshphysical_vert:O1,meshphysical_frag:B1,meshtoon_vert:H1,meshtoon_frag:V1,points_vert:G1,points_frag:W1,shadow_vert:X1,shadow_frag:q1,sprite_vert:Y1,sprite_frag:$1},Dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Mi={basic:{uniforms:Sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Sn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Sn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new It(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Sn([Dt.points,Dt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Sn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Sn([Dt.common,Dt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Sn([Dt.sprite,Dt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Sn([Dt.common,Dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Sn([Dt.lights,Dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Mi.physical={uniforms:Sn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Ta={r:0,b:0,g:0},K1=new ee,Kp=new oe;Kp.set(-1,0,0,0,1,0,0,0,1);function Z1(s,t,e,n,i,o){const r=new It(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(y){let w=!1;const v=d(y);v===null?x(r,a):v&&v.isColor&&(x(v,1),w=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===Ll)?(c===void 0&&(c=new St(new fn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Oo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kp),c.material.toneMapped=Se.getTransfer(v.colorSpace)!==Pe,(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new St(new Ve(2,2),new Nn({name:"BackgroundMaterial",uniforms:Oo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Se.getTransfer(v.colorSpace)!==Pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,w){y.getRGB(Ta,Gp(s)),e.buffers.color.setClear(Ta.r,Ta.g,Ta.b,w,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,w=1){r.set(y),a=w,x(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(r,a)},render:p,addToRenderList:m,dispose:g}}function J1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(C,I,U,F,k){let Y=!1;const X=u(C,F,U,I);o!==X&&(o=X,c(o.object)),Y=d(C,F,U,k),Y&&p(C,F,U,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(C,I,U,F),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,I,U,F){const k=F.wireframe===!0;let Y=n[I.id];Y===void 0&&(Y={},n[I.id]=Y);const X=C.isInstancedMesh===!0?C.id:0;let et=Y[X];et===void 0&&(et={},Y[X]=et);let G=et[U.id];G===void 0&&(G={},et[U.id]=G);let K=G[k];return K===void 0&&(K=f(l()),G[k]=K),K}function f(C){const I=[],U=[],F=[];for(let k=0;k<e;k++)I[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:C,attributes:{},index:null}}function d(C,I,U,F){const k=o.attributes,Y=I.attributes;let X=0;const et=U.getAttributes();for(const G in et)if(et[G].location>=0){const it=k[G];let ft=Y[G];if(ft===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;X++}return o.attributesNum!==X||o.index!==F}function p(C,I,U,F){const k={},Y=I.attributes;let X=0;const et=U.getAttributes();for(const G in et)if(et[G].location>=0){let it=Y[G];it===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(it=C.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),k[G]=ft,X++}o.attributes=k,o.attributesNum=X,o.index=F}function m(){const C=o.newAttributes;for(let I=0,U=C.length;I<U;I++)C[I]=0}function x(C){g(C,0)}function g(C,I){const U=o.newAttributes,F=o.enabledAttributes,k=o.attributeDivisors;U[C]=1,F[C]===0&&(s.enableVertexAttribArray(C),F[C]=1),k[C]!==I&&(s.vertexAttribDivisor(C,I),k[C]=I)}function y(){const C=o.newAttributes,I=o.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==C[U]&&(s.disableVertexAttribArray(U),I[U]=0)}function w(C,I,U,F,k,Y,X){X===!0?s.vertexAttribIPointer(C,I,U,k,Y):s.vertexAttribPointer(C,I,U,F,k,Y)}function v(C,I,U,F){m();const k=F.attributes,Y=U.getAttributes(),X=I.defaultAttributeValues;for(const et in Y){const G=Y[et];if(G.location>=0){let K=k[et];if(K===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const it=K.normalized,ft=K.itemSize,B=t.get(K);if(B===void 0)continue;const H=B.buffer,P=B.type,V=B.bytesPerElement,D=P===s.INT||P===s.UNSIGNED_INT||K.gpuType===$h;if(K.isInterleavedBufferAttribute){const z=K.data,W=z.stride,Q=K.offset;if(z.isInstancedInterleavedBuffer){for(let j=0;j<G.locationSize;j++)g(G.location+j,z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<G.locationSize;j++)x(G.location+j);s.bindBuffer(s.ARRAY_BUFFER,H);for(let j=0;j<G.locationSize;j++)w(G.location+j,ft/G.locationSize,P,it,W*V,(Q+ft/G.locationSize*j)*V,D)}else{if(K.isInstancedBufferAttribute){for(let z=0;z<G.locationSize;z++)g(G.location+z,K.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let z=0;z<G.locationSize;z++)x(G.location+z);s.bindBuffer(s.ARRAY_BUFFER,H);for(let z=0;z<G.locationSize;z++)w(G.location+z,ft/G.locationSize,P,it,ft*V,ft/G.locationSize*z*V,D)}}else if(X!==void 0){const it=X[et];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(G.location,it);break;case 3:s.vertexAttrib3fv(G.location,it);break;case 4:s.vertexAttrib4fv(G.location,it);break;default:s.vertexAttrib1fv(G.location,it)}}}}y()}function M(){b();for(const C in n){const I=n[C];for(const U in I){const F=I[U];for(const k in F){const Y=F[k];for(const X in Y)h(Y[X].object),delete Y[X];delete F[k]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;const I=n[C.id];for(const U in I){const F=I[U];for(const k in F){const Y=F[k];for(const X in Y)h(Y[X].object),delete Y[X];delete F[k]}}delete n[C.id]}function E(C){for(const I in n){const U=n[I];for(const F in U){const k=U[F];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const X in Y)h(Y[X].object),delete Y[X];delete k[C.id]}}}function _(C){for(const I in n){const U=n[I],F=C.isInstancedMesh===!0?C.id:0,k=U[F];if(k!==void 0){for(const Y in k){const X=k[Y];for(const et in X)h(X[et].object),delete X[et];delete k[Y]}delete U[F],Object.keys(U).length===0&&delete n[I]}}}function b(){A(),r=!0,o!==i&&(o=i,c(o.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function Q1(s,t,e){let n;function i(l){n=l}function o(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function j1(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==Hn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const _=E===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==In&&E!==hi&&!_&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:S}}function ty(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new yi,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||o&&!x)o?h(null):c();else{const y=o?0:n,w=y*4;let v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let M=0;M!==w;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const m=u!==null?u.length:0;let x=null;if(m!==0){if(x=l.value,p!==!0||x===null){const g=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,v=d;w!==m;++w,v+=4)r.copy(u[w]).applyMatrix4(y,a),r.normal.toArray(x,v),x[v+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}const Eo=4,ey=6,ny=20,iy=256,er=new Fl,Nf=new It;let _c=null,wc=0,Sc=0,bc=!1;const sy=new L,Is=new L;class Lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){const{size:r=256,position:a=sy}=o;_c=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,wc,Sc),this._renderer.xr.enabled=bc,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Gn,format:Hn,colorSpace:nl,depthBuffer:!1},i=Uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oy(o)),this._blurMaterial=ay(o,t,e),this._ggxMaterial=ry(o,t,e)}return i}_compileMaterial(t){const e=new St(new Re,t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,i,o){const l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nf),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new fn,new tn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const m=this._backgroundBox,x=m.material;let g=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,g=!0):(x.color.copy(Nf),g=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[w],o.y,o.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[w]));const M=this._cubeSize;fo(i,v*M,w>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(m,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Os||t.mapping===Uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,m=this._sizeLods[n],x=3*m*(n>p-Eo?n-p+Eo:0),g=4*(this._cubeSize-m);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,fo(o,x,g,3*m,2*m),i.setRenderTarget(o),i.render(a,er),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,fo(t,x,g,3*m,2*m),i.setRenderTarget(t),i.render(a,er)}_blur(t,e,n,i){const o=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,i,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-Eo?i-this._lodMax+Eo:0),f=4*(this._cubeSize-h);fo(e,u,f,3*h,2*h),r.setRenderTarget(e),r.render(l,er)}}function oy(s){const t=[],e=[];let n=s;const i=s-Eo+1+ey;for(let o=0;o<i;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),m=new Float32Array(d*f*u);for(let g=0;g<u;g++){const y=g%3*2/3-1,w=g>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(v,d*f*g);for(let M=0;M<f;M++){const S=h[M*2]*2-1,E=h[M*2+1]*2-1;g===0?Is.set(1,E,S):g===1?Is.set(-S,1,-E):g===2?Is.set(-S,E,1):g===3?Is.set(-1,E,-S):g===4?Is.set(-S,-1,E):Is.set(S,E,-1),Is.toArray(m,(g*f+M)*d)}}const x=new Re;x.setAttribute("position",new An(p,d)),x.setAttribute("outputDirection",new An(m,d)),e.push(new St(x,null)),n>Eo&&n--}return{lodMeshes:e,sizeLods:t}}function Uf(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=Ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ry(s,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ay(s,t,e){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zf(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ff(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gu extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ip(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fn(5,5,5),o=new Nn({name:"CubemapFromEquirect",uniforms:Oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:$i});o.uniforms.tEquirect.value=e;const r=new St(i,o),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=un),new Yp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}function ly(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?r(f):o(f)}function o(f){if(f&&f.isTexture){const d=f.mapping;if(d===Wl||d===Xl)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new gu(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",c),a(m.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Wl||d===Xl,m=d===Os||d===Uo;if(p||m){let x=e.get(f);const g=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Lh(s)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return p&&y&&y.height>0||m&&y&&l(y)?(n===null&&(n=new Lh(s)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Wl?f.mapping=Os:d===Xl&&(f.mapping=Uo),f}function l(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function cy(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Po("WebGLRenderer: "+n+" extension not supported."),i}}}function hy(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",r),delete i[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let m=0;if(p===void 0)return;if(d!==null){const y=d.array;m=d.version;for(let w=0,v=y.length;w<v;w+=3){const M=y[w+0],S=y[w+1],E=y[w+2];f.push(M,S,S,E,E,M)}}else{const y=p.array;m=p.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const M=w+0,S=w+1,E=w+2;f.push(M,S,S,E,E,M)}}const x=new(p.count>=65535?Cp:Rp)(f,1);x.version=m;const g=o.get(u);g&&t.remove(g),o.set(u,x)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function uy(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,o,u*r,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x];e.update(m,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:we("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dy(s,t,e){const n=new WeakMap,i=new Ie;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),p===!0&&(w=2),m===!0&&(w=3);let v=a.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const S=new Float32Array(v*M*4*u),E=new Tp(S,v,M,u);E.type=hi,E.needsUpdate=!0;const _=w*4;for(let A=0;A<u;A++){const C=x[A],I=g[A],U=y[A],F=v*M*4*A;for(let k=0;k<C.count;k++){const Y=k*_;d===!0&&(i.fromBufferAttribute(C,k),S[F+Y+0]=i.x,S[F+Y+1]=i.y,S[F+Y+2]=i.z,S[F+Y+3]=0),p===!0&&(i.fromBufferAttribute(I,k),S[F+Y+4]=i.x,S[F+Y+5]=i.y,S[F+Y+6]=i.z,S[F+Y+7]=0),m===!0&&(i.fromBufferAttribute(U,k),S[F+Y+8]=i.x,S[F+Y+9]=i.y,S[F+Y+10]=i.z,S[F+Y+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new pt(v,M)},n.set(a,f),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function py(s,t,e,n,i){let o=new WeakMap;function r(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const my={[up]:"LINEAR_TONE_MAPPING",[fp]:"REINHARD_TONE_MAPPING",[dp]:"CINEON_TONE_MAPPING",[pp]:"ACES_FILMIC_TONE_MAPPING",[gp]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[mp]:"CUSTOM_TONE_MAPPING"};function gy(s,t,e,n,i,o){const r=new Vn(t,e,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Re;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new ex({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new St(c,h),f=new Fl(-1,1,1,-1,0,1);let d=null,p=null,m=!1,x,g=null,y=[],w=!1;this.setSize=function(v,M){r.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<y.length;S++){const E=y[S];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const M=r.width,S=r.height;y.length>0&&a===null&&(a=new Vn(M,S,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(M,S,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){const _=y[E];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(m||v.toneMapping===Ti&&y.length===0)return!1;if(g=M,M!==null){const S=M.width,E=M.height;(r.width!==S||r.height!==E)&&this.setSize(S,E)}return w===!1&&v.setRenderTarget(r),x=v.toneMapping,v.toneMapping=Ti,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=x,m=!0;let S=r,E=a;for(let _=0;_<y.length;_++){const b=y[_];b.enabled!==!1&&(b.render(v,E,S,M),b.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},Se.getTransfer(d)===Pe&&(h.defines.SRGB_TRANSFER="");const _=my[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(u,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Zp=new pn,Ih=new Fr(1,1),Jp=new Tp,Qp=new Jm,jp=new Ip,kf=[],Of=[],Bf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function Go(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=kf[i];if(o===void 0&&(o=new Float32Array(i),kf[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ol(s,t){let e=Of[t];e===void 0&&(e=new Int32Array(t),Of[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function My(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function _y(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Vf.set(n),s.uniformMatrix2fv(this.addr,!1,Vf),on(e,n)}}function wy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Hf.set(n),s.uniformMatrix3fv(this.addr,!1,Hf),on(e,n)}}function Sy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Bf.set(n),s.uniformMatrix4fv(this.addr,!1,Bf),on(e,n)}}function by(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function Ty(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function Ay(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function Ry(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function Py(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function Ly(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function Iy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Ih.compareFunction=e.isReversedDepthBuffer()?eu:tu,o=Ih):o=Zp,e.setTexture2D(t||o,i)}function Dy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qp,i)}function Ny(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jp,i)}function Uy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jp,i)}function zy(s){switch(s){case 5126:return xy;case 35664:return vy;case 35665:return yy;case 35666:return My;case 35674:return _y;case 35675:return wy;case 35676:return Sy;case 5124:case 35670:return by;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Fy(s,t){s.uniform1fv(this.addr,t)}function ky(s,t){const e=Go(t,this.size,2);s.uniform2fv(this.addr,e)}function Oy(s,t){const e=Go(t,this.size,3);s.uniform3fv(this.addr,e)}function By(s,t){const e=Go(t,this.size,4);s.uniform4fv(this.addr,e)}function Hy(s,t){const e=Go(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vy(s,t){const e=Go(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gy(s,t){const e=Go(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wy(s,t){s.uniform1iv(this.addr,t)}function Xy(s,t){s.uniform2iv(this.addr,t)}function qy(s,t){s.uniform3iv(this.addr,t)}function Yy(s,t){s.uniform4iv(this.addr,t)}function $y(s,t){s.uniform1uiv(this.addr,t)}function Ky(s,t){s.uniform2uiv(this.addr,t)}function Zy(s,t){s.uniform3uiv(this.addr,t)}function Jy(s,t){s.uniform4uiv(this.addr,t)}function Qy(s,t,e){const n=this.cache,i=t.length,o=Ol(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=Ih:r=Zp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function jy(s,t,e){const n=this.cache,i=t.length,o=Ol(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Qp,o[r])}function tM(s,t,e){const n=this.cache,i=t.length,o=Ol(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||jp,o[r])}function eM(s,t,e){const n=this.cache,i=t.length,o=Ol(e,i);sn(n,o)||(s.uniform1iv(this.addr,o),on(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Jp,o[r])}function nM(s){switch(s){case 5126:return Fy;case 35664:return ky;case 35665:return Oy;case 35666:return By;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return Ky;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zy(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class oM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Gf(s,t){s.seq.push(t),s.map[t.id]=t}function rM(s,t,e){const n=s.name,i=n.length;for(Ec.lastIndex=0;;){const o=Ec.exec(n),r=Ec.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Gf(e,c===void 0?new iM(a,s,t):new sM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new oM(a),Gf(e,u)),e=u}}}class $a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);rM(a,l,this)}const i=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Wf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const aM=37297;let lM=0;function cM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Xf=new oe;function hM(s){Se._getMatrix(Xf,Se.workingColorSpace,s);const t=`mat3( ${Xf.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(s)){case il:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function qf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+cM(s.getShaderSource(t),a)}else return o}function uM(s,t){const e=hM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fM={[up]:"Linear",[fp]:"Reinhard",[dp]:"Cineon",[pp]:"ACESFilmic",[gp]:"AgX",[Yh]:"Neutral",[mp]:"Custom"};function dM(s,t){const e=fM[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Aa=new L;function pM(){Se.getLuminanceCoefficients(Aa);const s=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function gM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function _r(s){return s!==""}function Yf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $f(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(s){return s.replace(vM,MM)}const yM=new Map;function MM(s,t){let e=ue[t];if(e===void 0){const n=yM.get(t);if(n!==void 0)e=ue[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dh(e)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(s){return s.replace(_M,wM)}function wM(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Zf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const SM={[Sr]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function bM(s){return SM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EM={[Os]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[Ll]:"ENVMAP_TYPE_CUBE_UV"};function TM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":EM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[Uo]:"ENVMAP_MODE_REFRACTION"};function RM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CM={[qh]:"ENVMAP_BLENDING_MULTIPLY",[dm]:"ENVMAP_BLENDING_MIX",[pm]:"ENVMAP_BLENDING_ADD"};function PM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":CM[s.combine]||"ENVMAP_BLENDING_NONE"}function LM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function IM(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=bM(e),c=TM(e),h=RM(e),u=PM(e),f=LM(e),d=mM(e),p=gM(o),m=i.createProgram();let x,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_r).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(_r).join(`
`),g.length>0&&(g+=`
`)):(x=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),g=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?ue.tonemapping_pars_fragment:"",e.toneMapping!==Ti?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),r=Dh(r),r=Yf(r,e),r=$f(r,e),a=Dh(a),a=Yf(a,e),a=$f(a,e),r=Kf(r),a=Kf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=y+x+r,v=y+g+a,M=Wf(i,i.VERTEX_SHADER,w),S=Wf(i,i.FRAGMENT_SHADER,v);i.attachShader(m,M),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(C){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(M)||"",F=i.getShaderInfoLog(S)||"",k=I.trim(),Y=U.trim(),X=F.trim();let et=!0,G=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,M,S);else{const K=qf(i,M,"vertex"),it=qf(i,S,"fragment");we("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+K+`
`+it)}else k!==""?ne("WebGLProgram: Program Info Log:",k):(Y===""||X==="")&&(G=!1);G&&(C.diagnostics={runnable:et,programLog:k,vertexShader:{log:Y,prefix:x},fragmentShader:{log:X,prefix:g}})}i.deleteShader(M),i.deleteShader(S),_=new $a(i,m),b=xM(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(m,aM)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=S,this}let DM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UM(t),e.set(t,n)),n}}class UM{constructor(t){this.id=DM++,this.code=t,this.usedTimes=0}}function zM(s){return s===Bs||s===ja||s===tl}function FM(s,t,e,n,i,o){const r=new su,a=new NM,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,A,C,I,U){const F=C.fog,k=I.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||Y,X),G=et&&et.mapping===Ll?et.image.height:null,K=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&ne("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ft=it!==void 0?it.length:0;let B=0;k.morphAttributes.position!==void 0&&(B=1),k.morphAttributes.normal!==void 0&&(B=2),k.morphAttributes.color!==void 0&&(B=3);let H,P,V,D;if(K){const Ce=Mi[K];H=Ce.vertexShader,P=Ce.fragmentShader}else{H=_.vertexShader,P=_.fragmentShader;const Ce=a.getVertexShaderStage(_),q=a.getFragmentShaderStage(_);a.update(_,Ce,q),V=Ce.id,D=q.id}const z=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),Q=I.isInstancedMesh===!0,j=I.isBatchedMesh===!0,vt=!!_.map,wt=!!_.matcap,at=!!et,mt=!!_.aoMap,dt=!!_.lightMap,_t=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,$t=!!_.displacementMap,Ht=!!_.emissiveMap,Jt=!!_.metalnessMap,Qt=!!_.roughnessMap,$=_.anisotropy>0,xe=_.clearcoat>0,le=_.dispersion>0,O=_.retroreflectivity>0,T=_.iridescence>0,tt=_.sheen>0,rt=_.transmission>0,ct=$&&!!_.anisotropyMap,bt=xe&&!!_.clearcoatMap,Et=xe&&!!_.clearcoatNormalMap,ht=xe&&!!_.clearcoatRoughnessMap,ut=T&&!!_.iridescenceMap,Rt=T&&!!_.iridescenceThicknessMap,Vt=tt&&!!_.sheenColorMap,Tt=tt&&!!_.sheenRoughnessMap,Ct=!!_.specularMap,Kt=!!_.specularColorMap,te=!!_.specularIntensityMap,ie=rt&&!!_.transmissionMap,J=rt&&!!_.thicknessMap,Lt=!!_.gradientMap,gt=!!_.alphaMap,Pt=_.alphaTest>0,Nt=!!_.alphaHash,yt=!!_.extensions;let Wt=Ti;_.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Wt=s.toneMapping);const Xt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:P,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:D,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:j,batchingColor:j&&I._colorsTexture!==null,instancing:Q,instancingColor:Q&&I.instanceColor!==null,instancingMorph:Q&&I.morphTexture!==null,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:vt,matcap:wt,envMap:at,envMapMode:at&&et.mapping,envMapCubeUVHeight:G,aoMap:mt,lightMap:dt,bumpMap:_t,normalMap:xt,displacementMap:$t,emissiveMap:Ht,normalMapObjectSpace:xt&&_.normalMapType===vm,normalMapTangentSpace:xt&&_.normalMapType===el,packedNormalMap:xt&&_.normalMapType===el&&zM(_.normalMap.format),metalnessMap:Jt,roughnessMap:Qt,anisotropy:$,anisotropyMap:ct,clearcoat:xe,clearcoatMap:bt,clearcoatNormalMap:Et,clearcoatRoughnessMap:ht,dispersion:le,retroreflection:O,iridescence:T,iridescenceMap:ut,iridescenceThicknessMap:Rt,sheen:tt,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:Ct,specularColorMap:Kt,specularIntensityMap:te,transmission:rt,transmissionMap:ie,thicknessMap:J,gradientMap:Lt,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:Pt,alphaHash:Nt,combine:_.combine,mapUv:vt&&p(_.map.channel),aoMapUv:mt&&p(_.aoMap.channel),lightMapUv:dt&&p(_.lightMap.channel),bumpMapUv:_t&&p(_.bumpMap.channel),normalMapUv:xt&&p(_.normalMap.channel),displacementMapUv:$t&&p(_.displacementMap.channel),emissiveMapUv:Ht&&p(_.emissiveMap.channel),metalnessMapUv:Jt&&p(_.metalnessMap.channel),roughnessMapUv:Qt&&p(_.roughnessMap.channel),anisotropyMapUv:ct&&p(_.anisotropyMap.channel),clearcoatMapUv:bt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Et&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(_.sheenRoughnessMap.channel),specularMapUv:Ct&&p(_.specularMap.channel),specularColorMapUv:Kt&&p(_.specularColorMap.channel),specularIntensityMapUv:te&&p(_.specularIntensityMap.channel),transmissionMapUv:ie&&p(_.transmissionMap.channel),thicknessMapUv:J&&p(_.thicknessMap.channel),alphaMapUv:gt&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xt||$),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(vt||gt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:W,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:B,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:vt&&_.map.isVideoTexture===!0&&Se.getTransfer(_.map.colorSpace)===Pe,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&Se.getTransfer(_.emissiveMap.colorSpace)===Pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===Dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&_.extensions.multiDraw===!0||j)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(b,_),y(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function w(_){const b=d[_.type];let A;if(b){const C=Mi[b];A=Qg.clone(C.uniforms)}else A=_.uniforms;return A}function v(_,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new IM(s,b,_,i),c.push(A),h.set(b,A)),A}function M(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function kM(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function OM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Jf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,m,x,g){let y=s[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:r(f),groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},s[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=r(f),y.groupOrder=m,y.renderOrder=f.renderOrder,y.z=x,y.group=g),t++,y}function l(f,d,p,m,x,g,y){y.reversedDepth===!0&&(x=-x);const w=a(f,d,p,m,x,g);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(f,d,p,m,x,g){const y=a(f,d,p,m,x,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||OM),n.length>1&&n.sort(d||Jf),i.length>1&&i.sort(d||Jf)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:l,unshift:c,finish:u,sort:h}}function BM(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Qf,s.set(n,[r])):i>=o.length?(r=new Qf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function HM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function VM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let GM=0;function WM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function XM(s){const t=new HM,e=VM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,o=new ee,r=new ee;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,m=0,x=0,g=0,y=0,w=0,v=0,M=0,S=0,E=0,_=0,b=0,A=0;c.sort(WM);for(let I=0,U=c.length;I<U;I++){const F=c[I],k=F.color,Y=F.intensity,X=F.distance;let et=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Bs?et=F.shadow.map.texture:et=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=k.r*Y,u+=k.g*Y,f+=k.b*Y;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],Y);A++}else if(F.isSunLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,it=e.get(F);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=it,n.sunShadowMap[p]=et;const ft=K.getViewportCount();for(let B=0;B<ft;B++)n.sunShadowMatrix[m+B]=K.getMatrix(B),n.sunShadowCascade[m+B]=K._cascadeData[B];m+=ft,p++}n.sun[d]=G,d++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,it=e.get(F);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,n.directionalShadow[x]=it,n.directionalShadowMap[x]=et,n.directionalShadowMatrix[x]=F.shadow.matrix,M++}n.directional[x]=G,x++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(k).multiplyScalar(Y),G.distance=X,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[y]=G;const K=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,K.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[y]=K.matrix,F.castShadow){const it=e.get(F);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=et,E++}y++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(k).multiplyScalar(Y),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=G,w++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const K=F.shadow,it=e.get(F);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,n.pointShadow[g]=it,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=G,g++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(Y),G.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[v]=G,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==x||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==E||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=m,n.sunShadowCascade.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.sunLength=d,C.directionalLength=x,C.pointLength=g,C.spotLength=y,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=E,C.numSpotMaps=_,C.numLightProbes=A,n.version=GM++)}function l(c,h){let u=0,f=0,d=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const v=c[y];if(v.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(v.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(v.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function jf(s){const t=new XM(s),e=[],n=[],i=[];function o(f){u.camera=f,e.length=0,n.length=0,i.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function qM(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new jf(s),t.set(i,[a])):o>=r.length?(a=new jf(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const YM=`void main() {
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
}`,KM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ZM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],td=new ee,nr=new L,Tc=new L;function JM(s,t,e){let n=new lu;const i=new pt,o=new pt,r=new Ie,a=new Wp,l=new nx,c={},h=e.maxTextureSize,u={[ks]:Dn,[Dn]:ks,[ai]:ai},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:YM,fragmentShader:$M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let g=this.type;this.render=function(S,E,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===$0&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const b=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),I=s.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=g!==this.type;U&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=S.length;F<k;F++){const Y=S[F],X=Y.shadow;if(X===void 0){ne("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const et=X.getFrameExtents();i.multiply(et),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/et.x),i.x=o.x*et.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/et.y),i.y=o.y*et.y,X.mapSize.y=o.y));const G=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===yr){if(Y.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Vn(i.x,i.y,{format:Bs,type:Gn,minFilter:un,magFilter:un,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new Fr(i.x,i.y,hi),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=Ji,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je}else Y.isPointLight?(X.map=new gu(i.x),X.map.depthTexture=new _g(i.x,Ri)):(X.map=new Vn(i.x,i.y),X.map.depthTexture=new Fr(i.x,i.y,Ri)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=Ji,this.type===Sr?(X.map.depthTexture.compareFunction=G?eu:tu,X.map.depthTexture.minFilter=un,X.map.depthTexture.magFilter=un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,_);for(let it=0;it<K;it++){const ft=X.getCamera(it);if(Y.isPointLight){const B=X.camera,H=X.matrix,P=Y.distance||B.far;P!==B.far&&(B.far=P,B.updateProjectionMatrix()),nr.setFromMatrixPosition(Y.matrixWorld),B.position.copy(nr),Tc.copy(B.position),Tc.add(KM[it]),B.up.copy(ZM[it]),B.lookAt(Tc),B.updateMatrixWorld(),H.makeTranslation(-nr.x,-nr.y,-nr.z),td.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X._frustum.setFromProjectionMatrix(td,B.coordinateSystem,B.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,it),s.clear();else{it===0&&(s.setRenderTarget(X.map),s.clear());const B=X.getViewport(it);r.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),I.viewport(r)}n=X.getFrustum(it),v(E,_,ft,Y,this.type)}X.isPointLightShadow!==!0&&this.type===yr&&y(X,_),X.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(b,A,C)};function y(S,E){const _=t.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Vn(i.x,i.y,{format:Bs,type:Gn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,_,f,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,_,d,m,null)}function w(S,E,_,b){let A=null;const C=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=A.uuid,U=E.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let k=F[U];k===void 0&&(k=A.clone(),F[U]=k,E.addEventListener("dispose",M)),A=k}if(A.visible=E.visible,A.wireframe=E.wireframe,b===yr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=s.properties.get(A);I.light=_}return A}function v(S,E,_,b,A){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===yr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const U=t.update(S),F=S.material;if(Array.isArray(F)){const k=U.groups;for(let Y=0,X=k.length;Y<X;Y++){const et=k[Y],G=F[et.materialIndex];if(G&&G.visible){const K=w(S,G,b,A);S.onBeforeShadow(s,S,E,_,U,K,et),s.renderBufferDirect(_,null,U,K,S,et),S.onAfterShadow(s,S,E,_,U,K,et)}}}else if(F.visible){const k=w(S,F,b,A);S.onBeforeShadow(s,S,E,_,U,k,null),s.renderBufferDirect(_,null,U,k,S,null),S.onAfterShadow(s,S,E,_,U,k,null)}}const I=S.children;for(let U=0,F=I.length;U<F;U++)v(I[U],E,_,b,A)}function M(S){S.target.removeEventListener("dispose",M);for(const _ in c){const b=c[_],A=S.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function QM(s,t){function e(){let J=!1;const Lt=new Ie;let gt=null;const Pt=new Ie(0,0,0,0);return{setMask:function(Nt){gt!==Nt&&!J&&(s.colorMask(Nt,Nt,Nt,Nt),gt=Nt)},setLocked:function(Nt){J=Nt},setClear:function(Nt,yt,Wt,Xt,Ce){Ce===!0&&(Nt*=Xt,yt*=Xt,Wt*=Xt),Lt.set(Nt,yt,Wt,Xt),Pt.equals(Lt)===!1&&(s.clearColor(Nt,yt,Wt,Xt),Pt.copy(Lt))},reset:function(){J=!1,gt=null,Pt.set(-1,0,0,0)}}}function n(){let J=!1,Lt=!1,gt=null,Pt=null,Nt=null;return{setReversed:function(yt){if(Lt!==yt){const Wt=t.get("EXT_clip_control");yt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=yt;const Xt=Nt;Nt=null,this.setClear(Xt)}},getReversed:function(){return Lt},setTest:function(yt){yt?z(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(yt){gt!==yt&&!J&&(s.depthMask(yt),gt=yt)},setFunc:function(yt){if(Lt&&(yt=Cm[yt]),Pt!==yt){switch(yt){case Wc:s.depthFunc(s.NEVER);break;case Xc:s.depthFunc(s.ALWAYS);break;case qc:s.depthFunc(s.LESS);break;case Ir:s.depthFunc(s.LEQUAL);break;case Yc:s.depthFunc(s.EQUAL);break;case $c:s.depthFunc(s.GEQUAL);break;case Kc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=yt}},setLocked:function(yt){J=yt},setClear:function(yt){Nt!==yt&&(Nt=yt,Lt&&(yt=1-yt),s.clearDepth(yt))},reset:function(){J=!1,gt=null,Pt=null,Nt=null,Lt=!1}}}function i(){let J=!1,Lt=null,gt=null,Pt=null,Nt=null,yt=null,Wt=null,Xt=null,Ce=null;return{setTest:function(q){J||(q?z(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(q){Lt!==q&&!J&&(s.stencilMask(q),Lt=q)},setFunc:function(q,nt,Mt){(gt!==q||Pt!==nt||Nt!==Mt)&&(s.stencilFunc(q,nt,Mt),gt=q,Pt=nt,Nt=Mt)},setOp:function(q,nt,Mt){(yt!==q||Wt!==nt||Xt!==Mt)&&(s.stencilOp(q,nt,Mt),yt=q,Wt=nt,Xt=Mt)},setLocked:function(q){J=q},setClear:function(q){Ce!==q&&(s.clearStencil(q),Ce=q)},reset:function(){J=!1,Lt=null,gt=null,Pt=null,Nt=null,yt=null,Wt=null,Xt=null,Ce=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,y=null,w=null,v=null,M=null,S=null,E=null,_=new It(0,0,0),b=0,A=!1,C=null,I=null,U=null,F=null,k=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,et=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=et>=2);let K=null,it={};const ft=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),H=new Ie().fromArray(ft),P=new Ie().fromArray(B);function V(J,Lt,gt,Pt){const Nt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(J,yt),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<gt;Wt++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(Lt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return yt}const D={};D[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),z(s.DEPTH_TEST),r.setFunc(Ir),_t(!1),xt(Vu),z(s.CULL_FACE),mt($i);function z(J){h[J]!==!0&&(s.enable(J),h[J]=!0)}function W(J){h[J]!==!1&&(s.disable(J),h[J]=!1)}function Q(J,Lt){return f[J]!==Lt?(s.bindFramebuffer(J,Lt),f[J]=Lt,J===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Lt),J===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function j(J,Lt){let gt=p,Pt=!1;if(J){gt=d.get(Lt),gt===void 0&&(gt=[],d.set(Lt,gt));const Nt=J.textures;if(gt.length!==Nt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Wt=Nt.length;yt<Wt;yt++)gt[yt]=s.COLOR_ATTACHMENT0+yt;gt.length=Nt.length,Pt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(gt)}function vt(J){return m!==J?(s.useProgram(J),m=J,!0):!1}const wt={[yo]:s.FUNC_ADD,[Z0]:s.FUNC_SUBTRACT,[J0]:s.FUNC_REVERSE_SUBTRACT};wt[Q0]=s.MIN,wt[j0]=s.MAX;const at={[tm]:s.ZERO,[em]:s.ONE,[nm]:s.SRC_COLOR,[cp]:s.SRC_ALPHA,[lm]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[sm]:s.DST_ALPHA,[im]:s.ONE_MINUS_SRC_COLOR,[hp]:s.ONE_MINUS_SRC_ALPHA,[am]:s.ONE_MINUS_DST_COLOR,[om]:s.ONE_MINUS_DST_ALPHA,[cm]:s.CONSTANT_COLOR,[hm]:s.ONE_MINUS_CONSTANT_COLOR,[um]:s.CONSTANT_ALPHA,[fm]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(J,Lt,gt,Pt,Nt,yt,Wt,Xt,Ce,q){if(J===$i){x===!0&&(W(s.BLEND),x=!1);return}if(x===!1&&(z(s.BLEND),x=!0),J!==K0){if(J!==g||q!==A){if((y!==yo||M!==yo)&&(s.blendEquation(s.FUNC_ADD),y=yo,M=yo),q)switch(J){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFunc(s.ONE,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:we("WebGLState: Invalid blending: ",J);break}else switch(J){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gu:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",J);break}w=null,v=null,S=null,E=null,_.set(0,0,0),b=0,g=J,A=q}return}Nt=Nt||Lt,yt=yt||gt,Wt=Wt||Pt,(Lt!==y||Nt!==M)&&(s.blendEquationSeparate(wt[Lt],wt[Nt]),y=Lt,M=Nt),(gt!==w||Pt!==v||yt!==S||Wt!==E)&&(s.blendFuncSeparate(at[gt],at[Pt],at[yt],at[Wt]),w=gt,v=Pt,S=yt,E=Wt),(Xt.equals(_)===!1||Ce!==b)&&(s.blendColor(Xt.r,Xt.g,Xt.b,Ce),_.copy(Xt),b=Ce),g=J,A=!1}function dt(J,Lt){J.side===ai?W(s.CULL_FACE):z(s.CULL_FACE);let gt=J.side===Dn;Lt&&(gt=!gt),_t(gt),J.blending===br&&J.transparent===!1?mt($i):mt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),r.setFunc(J.depthFunc),r.setTest(J.depthTest),r.setMask(J.depthWrite),o.setMask(J.colorWrite);const Pt=J.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Ht(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(J){C!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),C=J)}function xt(J){J!==q0?(z(s.CULL_FACE),J!==I&&(J===Vu?s.cullFace(s.BACK):J===Y0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),I=J}function $t(J){J!==U&&(X&&s.lineWidth(J),U=J)}function Ht(J,Lt,gt){J?(z(s.POLYGON_OFFSET_FILL),(F!==Lt||k!==gt)&&(F=Lt,k=gt,r.getReversed()&&(Lt=-Lt),s.polygonOffset(Lt,gt))):W(s.POLYGON_OFFSET_FILL)}function Jt(J){J?z(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function Qt(J){J===void 0&&(J=s.TEXTURE0+Y-1),K!==J&&(s.activeTexture(J),K=J)}function $(J,Lt,gt){gt===void 0&&(K===null?gt=s.TEXTURE0+Y-1:gt=K);let Pt=it[gt];Pt===void 0&&(Pt={type:void 0,texture:void 0},it[gt]=Pt),(Pt.type!==J||Pt.texture!==Lt)&&(K!==gt&&(s.activeTexture(gt),K=gt),s.bindTexture(J,Lt||D[J]),Pt.type=J,Pt.texture=Lt)}function xe(){const J=it[K];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function T(){try{s.texSubImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function tt(){try{s.texSubImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function rt(){try{s.compressedTexSubImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function ct(){try{s.compressedTexSubImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function bt(){try{s.texStorage2D(...arguments)}catch(J){we("WebGLState:",J)}}function Et(){try{s.texStorage3D(...arguments)}catch(J){we("WebGLState:",J)}}function ht(){try{s.texImage2D(...arguments)}catch(J){we("WebGLState:",J)}}function ut(){try{s.texImage3D(...arguments)}catch(J){we("WebGLState:",J)}}function Rt(J){return u[J]!==void 0?u[J]:s.getParameter(J)}function Vt(J,Lt){u[J]!==Lt&&(s.pixelStorei(J,Lt),u[J]=Lt)}function Tt(J){H.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),H.copy(J))}function Ct(J){P.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),P.copy(J))}function Kt(J,Lt){let gt=c.get(Lt);gt===void 0&&(gt=new WeakMap,c.set(Lt,gt));let Pt=gt.get(J);Pt===void 0&&(Pt=s.getUniformBlockIndex(Lt,J.name),gt.set(J,Pt))}function te(J,Lt){const Pt=c.get(Lt).get(J);l.get(Lt)!==Pt&&(s.uniformBlockBinding(Lt,Pt,J.__bindingPointIndex),l.set(Lt,Pt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,it={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,y=null,w=null,v=null,M=null,S=null,E=null,_=new It(0,0,0),b=0,A=!1,C=null,I=null,U=null,F=null,k=null,H.set(0,0,s.canvas.width,s.canvas.height),P.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:z,disable:W,bindFramebuffer:Q,drawBuffers:j,useProgram:vt,setBlending:mt,setMaterial:dt,setFlipSided:_t,setCullFace:xt,setLineWidth:$t,setPolygonOffset:Ht,setScissorTest:Jt,activeTexture:Qt,bindTexture:$,unbindTexture:xe,compressedTexImage2D:le,compressedTexImage3D:O,texImage2D:ht,texImage3D:ut,pixelStorei:Vt,getParameter:Rt,updateUBOMapping:Kt,uniformBlockBinding:te,texStorage2D:bt,texStorage3D:Et,texSubImage2D:T,texSubImage3D:tt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:Tt,viewport:Ct,reset:ie}}function jM(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,T){return p?new OffscreenCanvas(O,T):zr("canvas")}function x(O,T,tt){let rt=1;const ct=le(O);if((ct.width>tt||ct.height>tt)&&(rt=tt/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const bt=Math.floor(rt*ct.width),Et=Math.floor(rt*ct.height);f===void 0&&(f=m(bt,Et));const ht=T?m(bt,Et):f;return ht.width=bt,ht.height=Et,ht.getContext("2d").drawImage(O,0,0,bt,Et),ne("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+bt+"x"+Et+")."),ht}else return"data"in O&&ne("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),O;return O}function g(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(O,T,tt,rt,ct,bt=!1){if(O!==null){if(s[O]!==void 0)return s[O];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Et;rt&&(Et=t.get("EXT_texture_norm16"),Et||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=T;if(T===s.RED&&(tt===s.FLOAT&&(ht=s.R32F),tt===s.HALF_FLOAT&&(ht=s.R16F),tt===s.UNSIGNED_BYTE&&(ht=s.R8),tt===s.UNSIGNED_SHORT&&Et&&(ht=Et.R16_EXT),tt===s.SHORT&&Et&&(ht=Et.R16_SNORM_EXT)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.R8UI),tt===s.UNSIGNED_SHORT&&(ht=s.R16UI),tt===s.UNSIGNED_INT&&(ht=s.R32UI),tt===s.BYTE&&(ht=s.R8I),tt===s.SHORT&&(ht=s.R16I),tt===s.INT&&(ht=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(ht=s.RG32F),tt===s.HALF_FLOAT&&(ht=s.RG16F),tt===s.UNSIGNED_BYTE&&(ht=s.RG8),tt===s.UNSIGNED_SHORT&&Et&&(ht=Et.RG16_EXT),tt===s.SHORT&&Et&&(ht=Et.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),tt===s.UNSIGNED_INT&&(ht=s.RG32UI),tt===s.BYTE&&(ht=s.RG8I),tt===s.SHORT&&(ht=s.RG16I),tt===s.INT&&(ht=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),tt===s.UNSIGNED_INT&&(ht=s.RGB32UI),tt===s.BYTE&&(ht=s.RGB8I),tt===s.SHORT&&(ht=s.RGB16I),tt===s.INT&&(ht=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),tt===s.BYTE&&(ht=s.RGBA8I),tt===s.SHORT&&(ht=s.RGBA16I),tt===s.INT&&(ht=s.RGBA32I)),T===s.RGB&&(tt===s.UNSIGNED_SHORT&&Et&&(ht=Et.RGB16_EXT),tt===s.SHORT&&Et&&(ht=Et.RGB16_SNORM_EXT),tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),tt===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),T===s.RGBA){const ut=bt?il:Se.getTransfer(ct);tt===s.FLOAT&&(ht=s.RGBA32F),tt===s.HALF_FLOAT&&(ht=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ht=ut===Pe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT&&Et&&(ht=Et.RGBA16_EXT),tt===s.SHORT&&Et&&(ht=Et.RGBA16_SNORM_EXT),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function M(O,T){let tt;return O?T===null||T===Ri||T===Nr?tt=s.DEPTH24_STENCIL8:T===hi?tt=s.DEPTH32F_STENCIL8:T===Dr&&(tt=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ri||T===Nr?tt=s.DEPTH_COMPONENT24:T===hi?tt=s.DEPTH_COMPONENT32F:T===Dr&&(tt=s.DEPTH_COMPONENT16),tt}function S(O,T){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==je&&O.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function E(O){const T=O.target;T.removeEventListener("dispose",E),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function _(O){const T=O.target;T.removeEventListener("dispose",_),C(T)}function b(O){const T=n.get(O);if(T.__webglInit===void 0)return;const tt=O.source,rt=d.get(tt);if(rt){const ct=rt[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&A(O),Object.keys(rt).length===0&&d.delete(tt)}n.remove(O)}function A(O){const T=n.get(O);s.deleteTexture(T.__webglTexture);const tt=O.source,rt=d.get(tt);delete rt[T.__cacheKey],r.memory.textures--}function C(O){const T=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let ct=0;ct<T.__webglFramebuffer[rt].length;ct++)s.deleteFramebuffer(T.__webglFramebuffer[rt][ct]);else s.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)s.deleteFramebuffer(T.__webglFramebuffer[rt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=O.textures;for(let rt=0,ct=tt.length;rt<ct;rt++){const bt=n.get(tt[rt]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),r.memory.textures--),n.remove(tt[rt])}n.remove(O)}let I=0;function U(){I=0}function F(){return I}function k(O){I=O}function Y(){const O=I;return O>=i.maxTextures&&ne("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,O}function X(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function et(O,T){const tt=n.get(O);if(O.isVideoTexture&&$(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const rt=O.image;if(rt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{W(tt,O,T);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function G(O,T){const tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){W(tt,O,T);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function K(O,T){const tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){W(tt,O,T);return}e.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function it(O,T){const tt=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&tt.__version!==O.version){Q(tt,O,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const ft={[Qa]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Jc]:s.MIRRORED_REPEAT},B={[je]:s.NEAREST,[mm]:s.NEAREST_MIPMAP_NEAREST,[Qr]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[ql]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},H={[Mm]:s.NEVER,[Em]:s.ALWAYS,[_m]:s.LESS,[tu]:s.LEQUAL,[wm]:s.EQUAL,[eu]:s.GEQUAL,[Sm]:s.GREATER,[bm]:s.NOTEQUAL};function P(O,T){if(T.type===hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===ql||T.magFilter===Qr||T.magFilter===xs||T.minFilter===un||T.minFilter===ql||T.minFilter===Qr||T.minFilter===xs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ft[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ft[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ft[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,B[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,B[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===je||T.minFilter!==Qr&&T.minFilter!==xs||T.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function V(O,T){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",E));const rt=T.source;let ct=d.get(rt);ct===void 0&&(ct={},d.set(rt,ct));const bt=X(T);if(bt!==O.__cacheKey){ct[bt]===void 0&&(ct[bt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,tt=!0),ct[bt].usedTimes++;const Et=ct[O.__cacheKey];Et!==void 0&&(ct[O.__cacheKey].usedTimes--,Et.usedTimes===0&&A(T)),O.__cacheKey=bt,O.__webglTexture=ct[bt].texture}return tt}function D(O,T,tt){return Math.floor(Math.floor(O/tt)/T)}function z(O,T,tt,rt){const bt=O.updateRanges;if(bt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,rt,T.data);else{bt.sort((Vt,Tt)=>Vt.start-Tt.start);let Et=0;for(let Vt=1;Vt<bt.length;Vt++){const Tt=bt[Et],Ct=bt[Vt],Kt=Tt.start+Tt.count,te=D(Ct.start,T.width,4),ie=D(Tt.start,T.width,4);Ct.start<=Kt+1&&te===ie&&D(Ct.start+Ct.count-1,T.width,4)===te?Tt.count=Math.max(Tt.count,Ct.start+Ct.count-Tt.start):(++Et,bt[Et]=Ct)}bt.length=Et+1;const ht=e.getParameter(s.UNPACK_ROW_LENGTH),ut=e.getParameter(s.UNPACK_SKIP_PIXELS),Rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Vt=0,Tt=bt.length;Vt<Tt;Vt++){const Ct=bt[Vt],Kt=Math.floor(Ct.start/4),te=Math.ceil(Ct.count/4),ie=Kt%T.width,J=Math.floor(Kt/T.width),Lt=te,gt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(s.UNPACK_SKIP_ROWS,J),e.texSubImage2D(s.TEXTURE_2D,0,ie,J,Lt,gt,tt,rt,T.data)}O.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ht),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function W(O,T,tt){let rt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=s.TEXTURE_3D);const ct=V(O,T),bt=T.source;e.bindTexture(rt,O.__webglTexture,s.TEXTURE0+tt);const Et=n.get(bt);if(bt.version!==Et.__version||ct===!0){if(e.activeTexture(s.TEXTURE0+tt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const gt=Se.getPrimaries(Se.workingColorSpace),Pt=T.colorSpace===ps?null:Se.getPrimaries(T.colorSpace),Nt=T.colorSpace===ps||gt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ut=x(T.image,!1,i.maxTextureSize);ut=xe(T,ut);const Rt=o.convert(T.format,T.colorSpace),Vt=o.convert(T.type);let Tt=v(T.internalFormat,Rt,Vt,T.normalized,T.colorSpace,T.isVideoTexture);P(rt,T);let Ct;const Kt=T.mipmaps,te=T.isVideoTexture!==!0,ie=Et.__version===void 0||ct===!0,J=bt.dataReady,Lt=S(T,ut);if(T.isDepthTexture)Tt=M(T.format===Fs,T.type),ie&&(te?e.texStorage2D(s.TEXTURE_2D,1,Tt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Tt,ut.width,ut.height,0,Rt,Vt,null));else if(T.isDataTexture)if(Kt.length>0){te&&ie&&e.texStorage2D(s.TEXTURE_2D,Lt,Tt,Kt[0].width,Kt[0].height);for(let gt=0,Pt=Kt.length;gt<Pt;gt++)Ct=Kt[gt],te?J&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Rt,Vt,Ct.data):e.texImage2D(s.TEXTURE_2D,gt,Tt,Ct.width,Ct.height,0,Rt,Vt,Ct.data);T.generateMipmaps=!1}else te?(ie&&e.texStorage2D(s.TEXTURE_2D,Lt,Tt,ut.width,ut.height),J&&z(T,ut,Rt,Vt)):e.texImage2D(s.TEXTURE_2D,0,Tt,ut.width,ut.height,0,Rt,Vt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Tt,Kt[0].width,Kt[0].height,ut.depth);for(let gt=0,Pt=Kt.length;gt<Pt;gt++)if(Ct=Kt[gt],T.format!==Hn)if(Rt!==null)if(te){if(J)if(T.layerUpdates.size>0){const Nt=Df(Ct.width,Ct.height,T.format,T.type);for(const yt of T.layerUpdates){const Wt=Ct.data.subarray(yt*Nt/Ct.data.BYTES_PER_ELEMENT,(yt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,yt,Ct.width,Ct.height,1,Rt,Wt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ut.depth,Rt,Ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Tt,Ct.width,Ct.height,ut.depth,0,Ct.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?J&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ut.depth,Rt,Vt,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,Tt,Ct.width,Ct.height,ut.depth,0,Rt,Vt,Ct.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{te&&ie&&e.texStorage2D(s.TEXTURE_2D,Lt,Tt,Kt[0].width,Kt[0].height);for(let gt=0,Pt=Kt.length;gt<Pt;gt++)Ct=Kt[gt],T.format!==Hn?Rt!==null?te?J&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,Tt,Ct.width,Ct.height,0,Ct.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?J&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Rt,Vt,Ct.data):e.texImage2D(s.TEXTURE_2D,gt,Tt,Ct.width,Ct.height,0,Rt,Vt,Ct.data)}else if(T.isDataArrayTexture)if(te){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Tt,ut.width,ut.height,ut.depth),J)if(T.layerUpdates.size>0){const gt=Df(ut.width,ut.height,T.format,T.type);for(const Pt of T.layerUpdates){const Nt=ut.data.subarray(Pt*gt/ut.data.BYTES_PER_ELEMENT,(Pt+1)*gt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pt,ut.width,ut.height,1,Rt,Vt,Nt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Vt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,ut.width,ut.height,ut.depth,0,Rt,Vt,ut.data);else if(T.isData3DTexture)te?(ie&&e.texStorage3D(s.TEXTURE_3D,Lt,Tt,ut.width,ut.height,ut.depth),J&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Rt,Vt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,ut.width,ut.height,ut.depth,0,Rt,Vt,ut.data);else if(T.isFramebufferTexture){if(ie)if(te)e.texStorage2D(s.TEXTURE_2D,Lt,Tt,ut.width,ut.height);else{let gt=ut.width,Pt=ut.height;for(let Nt=0;Nt<Lt;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,Tt,gt,Pt,0,Rt,Vt,null),gt>>=1,Pt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const gt=s.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),ut.parentNode!==gt){gt.appendChild(ut),u.add(T),gt.onpaint=Pt=>{const Nt=Pt.changedElements;for(const yt of u)Nt.includes(yt.image)&&(yt.needsUpdate=!0)},gt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ut);else{const Nt=s.RGBA,yt=s.RGBA,Wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Nt,yt,Wt,ut)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(te&&ie){const gt=le(Kt[0]);e.texStorage2D(s.TEXTURE_2D,Lt,Tt,gt.width,gt.height)}for(let gt=0,Pt=Kt.length;gt<Pt;gt++)Ct=Kt[gt],te?J&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Rt,Vt,Ct):e.texImage2D(s.TEXTURE_2D,gt,Tt,Rt,Vt,Ct);T.generateMipmaps=!1}else if(te){if(ie){const gt=le(ut);e.texStorage2D(s.TEXTURE_2D,Lt,Tt,gt.width,gt.height)}J&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,Vt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Tt,Rt,Vt,ut);g(T)&&y(rt),Et.__version=bt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Q(O,T,tt){if(T.image.length!==6)return;const rt=V(O,T),ct=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+tt);const bt=n.get(ct);if(ct.version!==bt.__version||rt===!0){e.activeTexture(s.TEXTURE0+tt);const Et=Se.getPrimaries(Se.workingColorSpace),ht=T.colorSpace===ps?null:Se.getPrimaries(T.colorSpace),ut=T.colorSpace===ps||Et===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,Vt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let yt=0;yt<6;yt++)!Rt&&!Vt?Tt[yt]=x(T.image[yt],!0,i.maxCubemapSize):Tt[yt]=Vt?T.image[yt].image:T.image[yt],Tt[yt]=xe(T,Tt[yt]);const Ct=Tt[0],Kt=o.convert(T.format,T.colorSpace),te=o.convert(T.type),ie=v(T.internalFormat,Kt,te,T.normalized,T.colorSpace),J=T.isVideoTexture!==!0,Lt=bt.__version===void 0||rt===!0,gt=ct.dataReady;let Pt=S(T,Ct);P(s.TEXTURE_CUBE_MAP,T);let Nt;if(Rt){J&&Lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ie,Ct.width,Ct.height);for(let yt=0;yt<6;yt++){Nt=Tt[yt].mipmaps;for(let Wt=0;Wt<Nt.length;Wt++){const Xt=Nt[Wt];T.format!==Hn?Kt!==null?J?gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,0,0,Xt.width,Xt.height,Kt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,ie,Xt.width,Xt.height,0,Xt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,0,0,Xt.width,Xt.height,Kt,te,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,ie,Xt.width,Xt.height,0,Kt,te,Xt.data)}}}else{if(Nt=T.mipmaps,J&&Lt){Nt.length>0&&Pt++;const yt=le(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ie,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Vt){J?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Tt[yt].width,Tt[yt].height,Kt,te,Tt[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,Tt[yt].width,Tt[yt].height,0,Kt,te,Tt[yt].data);for(let Wt=0;Wt<Nt.length;Wt++){const Ce=Nt[Wt].image[yt].image;J?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,0,0,Ce.width,Ce.height,Kt,te,Ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,ie,Ce.width,Ce.height,0,Kt,te,Ce.data)}}else{J?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Kt,te,Tt[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ie,Kt,te,Tt[yt]);for(let Wt=0;Wt<Nt.length;Wt++){const Xt=Nt[Wt];J?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,0,0,Kt,te,Xt.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,ie,Kt,te,Xt.image[yt])}}}g(T)&&y(s.TEXTURE_CUBE_MAP),bt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function j(O,T,tt,rt,ct,bt){const Et=o.convert(tt.format,tt.colorSpace),ht=o.convert(tt.type),ut=v(tt.internalFormat,Et,ht,tt.normalized,tt.colorSpace),Rt=n.get(T),Vt=n.get(tt);if(Vt.__renderTarget=T,!Rt.__hasExternalTextures){const Tt=Math.max(1,T.width>>bt),Ct=Math.max(1,T.height>>bt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,bt,ut,Tt,Ct,T.depth,0,Et,ht,null):e.texImage2D(ct,bt,ut,Tt,Ct,0,Et,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,O),Qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,ct,Vt.__webglTexture,0,Jt(T)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,ct,Vt.__webglTexture,bt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(O,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const rt=T.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,bt=M(T.stencilBuffer,ct),Et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Qt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(T),bt,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(T),bt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,bt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,O)}else{const rt=T.textures;for(let ct=0;ct<rt.length;ct++){const bt=rt[ct],Et=o.convert(bt.format,bt.colorSpace),ht=o.convert(bt.type),ut=v(bt.internalFormat,Et,ht,bt.normalized,bt.colorSpace);Qt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(T),ut,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(T),ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(O,T,tt){const rt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(T.depthTexture);if(ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),ct.__webglTexture===void 0){ct.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),P(s.TEXTURE_CUBE_MAP,T.depthTexture);const Rt=o.convert(T.depthTexture.format),Vt=o.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Ji?Tt=s.DEPTH_COMPONENT24:T.depthTexture.format===Fs&&(Tt=s.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Tt,T.width,T.height,0,Rt,Vt,null)}}else et(T.depthTexture,0);const bt=ct.__webglTexture,Et=Jt(T),ht=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+tt:s.TEXTURE_2D,ut=T.depthTexture.format===Fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ji)Qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ht,bt,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ht,bt,0);else if(T.depthTexture.format===Fs)Qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ht,bt,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ht,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(O){const T=n.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const rt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=rt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let rt=0;rt<6;rt++)wt(T.__webglFramebuffer[rt],O,rt);else{const rt=O.texture.mipmaps;rt&&rt.length>0?wt(T.__webglFramebuffer[0],O,0):wt(T.__webglFramebuffer,O,0)}else if(tt){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=s.createRenderbuffer(),vt(T.__webglDepthbuffer[rt],O,!1);else{const ct=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,bt)}}else{const rt=O.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),vt(T.__webglDepthbuffer,O,!1);else{const ct=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,bt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(O,T,tt){const rt=n.get(O);T!==void 0&&j(rt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&at(O)}function dt(O){const T=O.texture,tt=n.get(O),rt=n.get(T);O.addEventListener("dispose",_);const ct=O.textures,bt=O.isWebGLCubeRenderTarget===!0,Et=ct.length>1;if(Et||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=T.version,r.memory.textures++),bt){tt.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[ht]=[];for(let ut=0;ut<T.mipmaps.length;ut++)tt.__webglFramebuffer[ht][ut]=s.createFramebuffer()}else tt.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ht=0;ht<T.mipmaps.length;ht++)tt.__webglFramebuffer[ht]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ht=0,ut=ct.length;ht<ut;ht++){const Rt=n.get(ct[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),r.memory.textures++)}if(O.samples>0&&Qt(O)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){const ut=ct[ht];tt.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[ht]);const Rt=o.convert(ut.format,ut.colorSpace),Vt=o.convert(ut.type),Tt=v(ut.internalFormat,Rt,Vt,ut.normalized,ut.colorSpace,O.isXRRenderTarget===!0),Ct=Jt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,Tt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,tt.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(tt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),P(s.TEXTURE_CUBE_MAP,T);for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0)for(let ut=0;ut<T.mipmaps.length;ut++)j(tt.__webglFramebuffer[ht][ut],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else j(tt.__webglFramebuffer[ht],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(T)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,ut=ct.length;ht<ut;ht++){const Rt=ct[ht],Vt=n.get(Rt);let Tt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Vt.__webglTexture),P(Tt,Rt),j(tt.__webglFramebuffer,O,Rt,s.COLOR_ATTACHMENT0+ht,Tt,0),g(Rt)&&y(Tt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ht=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,rt.__webglTexture),P(ht,T),T.mipmaps&&T.mipmaps.length>0)for(let ut=0;ut<T.mipmaps.length;ut++)j(tt.__webglFramebuffer[ut],O,T,s.COLOR_ATTACHMENT0,ht,ut);else j(tt.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,ht,0);g(T)&&y(ht),e.unbindTexture()}O.depthBuffer&&at(O)}function _t(O){const T=O.textures;for(let tt=0,rt=T.length;tt<rt;tt++){const ct=T[tt];if(g(ct)){const bt=w(O),Et=n.get(ct).__webglTexture;e.bindTexture(bt,Et),y(bt),e.unbindTexture()}}}const xt=[],$t=[];function Ht(O){if(O.samples>0){if(Qt(O)===!1){const T=O.textures,tt=O.width,rt=O.height;let ct=s.COLOR_BUFFER_BIT;const bt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(O),ht=T.length>1;if(ht)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const ut=O.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const Vt=n.get(T[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,tt,rt,0,0,tt,rt,ct,s.NEAREST),l===!0&&(xt.length=0,$t.length=0,xt.push(s.COLOR_ATTACHMENT0+Rt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(xt.push(bt),$t.push(bt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);const Vt=n.get(T[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Jt(O){return Math.min(i.maxSamples,O.samples)}function Qt(O){const T=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $(O){const T=r.render.frame;h.get(O)!==T&&(h.set(O,T),O.update())}function xe(O,T){const tt=O.colorSpace,rt=O.format,ct=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==nl&&tt!==ps&&(Se.getTransfer(tt)===Pe?(rt!==Hn||ct!==In)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",tt)),T}function le(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=it,this.rebindTextures=mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function t_(s,t){function e(n,i=ps){let o;const r=Se.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===Kh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_p)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===vp)return s.BYTE;if(n===yp)return s.SHORT;if(n===Dr)return s.UNSIGNED_SHORT;if(n===$h)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===wp)return s.ALPHA;if(n===Sp)return s.RGB;if(n===Hn)return s.RGBA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===Il)return s.RED;if(n===Jh)return s.RED_INTEGER;if(n===Bs)return s.RG;if(n===Qh)return s.RG_INTEGER;if(n===jh)return s.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(r===Pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===jc||n===th||n===eh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Qc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===th)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===sh||n===oh||n===rh||n===ja||n===ah)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===nh||n===ih)return r===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===sh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===oh)return o.COMPRESSED_R11_EAC;if(n===rh)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return o.COMPRESSED_RG11_EAC;if(n===ah)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh||n===vh||n===yh||n===Mh||n===_h)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===lh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_h)return r===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wh||n===Sh||n===bh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===wh)return r===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Th||n===tl||n===Ah)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Eh)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ah)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const e_=`
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

}`;class i_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s_ extends Gs{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const m=typeof XRWebGLBinding<"u",x=new i_,g={},y=e.getContextAttributes();let w=null,v=null;const M=[],S=[],E=new pt;let _=null,b=null;const A=new hn;A.viewport=new Ie;const C=new hn;C.viewport=new Ie;const I=[A,C],U=new fx;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=M[D];return z===void 0&&(z=new jl,M[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=M[D];return z===void 0&&(z=new jl,M[D]=z),z.getGripSpace()},this.getHand=function(D){let z=M[D];return z===void 0&&(z=new jl,M[D]=z),z.getHandSpace()};function Y(D){const z=S.indexOf(D.inputSource);if(z===-1)return;const W=M[z];W!==void 0&&(W.update(D.inputSource,D.frame,c||r),W.dispatchEvent({type:D.type,data:D.inputSource}))}function X(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",et);for(let D=0;D<M.length;D++){const z=S[D];z!==null&&(S[D]=null,M[D].disconnect(z))}F=null,k=null,x.reset();for(const D in g)delete g[D];if(t.setRenderTarget(w),d=null,f=null,u=null,i=null,v=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(E.width,E.height,!1),b!==null){const D=b.camera;D.fov=b.fov,D.zoom=b.zoom,D.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",X),i.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(E),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,Q=null,j=null;y.depth&&(j=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=y.stencil?Fs:Ji,Q=y.stencil?Nr:Ri);const vt={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Vn(f.textureWidth,f.textureHeight,{format:Hn,type:In,depthTexture:new Fr(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const W={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(D){for(let z=0;z<D.removed.length;z++){const W=D.removed[z],Q=S.indexOf(W);Q>=0&&(S[Q]=null,M[Q].disconnect(W))}for(let z=0;z<D.added.length;z++){const W=D.added[z];let Q=S.indexOf(W);if(Q===-1){for(let vt=0;vt<M.length;vt++)if(vt>=S.length){S.push(W),Q=vt;break}else if(S[vt]===null){S[vt]=W,Q=vt;break}if(Q===-1)break}const j=M[Q];j&&j.connect(W)}}const G=new L,K=new L;function it(D,z,W){G.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition(W.matrixWorld);const Q=G.distanceTo(K),j=z.projectionMatrix.elements,vt=W.projectionMatrix.elements,wt=j[14]/(j[10]-1),at=j[14]/(j[10]+1),mt=(j[9]+1)/j[5],dt=(j[9]-1)/j[5],_t=(j[8]-1)/j[0],xt=(vt[8]+1)/vt[0],$t=wt*_t,Ht=wt*xt,Jt=Q/(-_t+xt),Qt=Jt*-_t;if(z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Qt),D.translateZ(Jt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),j[10]===-1)D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const $=wt+Jt,xe=at+Jt,le=$t-Qt,O=Ht+(Q-Qt),T=mt*at/xe*$,tt=dt*at/xe*$;D.projectionMatrix.makePerspective(le,O,T,tt,$,xe),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ft(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let z=D.near,W=D.far;x.texture!==null&&(x.depthNear>0&&(z=x.depthNear),x.depthFar>0&&(W=x.depthFar)),U.near=C.near=A.near=z,U.far=C.far=A.far=W,(F!==U.near||k!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,k=U.far),U.layers.mask=D.layers.mask|6,A.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const Q=D.parent,j=U.cameras;ft(U,Q);for(let vt=0;vt<j.length;vt++)ft(j[vt],Q);j.length===2?it(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),b===null&&D.isPerspectiveCamera&&(b={camera:D,fov:D.fov,zoom:D.zoom}),B(D,U,Q)};function B(D,z,W){W===null?D.matrix.copy(z.matrixWorld):(D.matrix.copy(W.matrixWorld),D.matrix.invert(),D.matrix.multiply(z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=zo*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(D){return g[D]};let H=null;function P(D,z){if(h=z.getViewerPose(c||r),p=z,h!==null){const W=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Q=!1;W.length!==U.cameras.length&&(U.cameras.length=0,Q=!0);for(let at=0;at<W.length;at++){const mt=W[at];let dt=null;if(d!==null)dt=d.getViewport(mt);else{const xt=u.getViewSubImage(f,mt);dt=xt.viewport,at===0&&(t.setRenderTargetTextures(v,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(v))}let _t=I[at];_t===void 0&&(_t=new hn,_t.layers.enable(at),_t.viewport=new Ie,I[at]=_t),_t.matrix.fromArray(mt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(mt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(dt.x,dt.y,dt.width,dt.height),at===0&&(U.matrix.copy(_t.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Q===!0&&U.cameras.push(_t)}const j=i.enabledFeatures;if(j&&j.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const at=u.getDepthInformation(W[0]);at&&at.isValid&&at.texture&&x.init(at,i.renderState)}if(j&&j.includes("camera-access")&&m){t.state.unbindTexture(),u=n.getBinding();for(let at=0;at<W.length;at++){const mt=W[at].camera;if(mt){let dt=g[mt];dt||(dt=new Dp,g[mt]=dt);const _t=u.getCameraImage(mt);dt.sourceTexture=_t}}}}for(let W=0;W<M.length;W++){const Q=S[W],j=M[W];Q!==null&&j!==void 0&&j.update(Q,z,c||r)}H&&H(D,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}const V=new $p;V.setAnimationLoop(P),this.setAnimationLoop=function(D){H=D},this.dispose=function(){}}}const o_=new ee,t0=new oe;t0.set(-1,0,0,0,1,0,0,0,1);function r_(s,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Gp(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(x,g):g.isMeshLambertMaterial?(o(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(x,g),u(x,g)):g.isMeshPhongMaterial?(o(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(x,g),f(x,g),g.isMeshPhysicalMaterial&&d(x,g,v)):g.isMeshMatcapMaterial?(o(x,g),p(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),m(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(r(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,y,w):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Dn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Dn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const y=t.get(g),w=y.envMap,v=y.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(t0),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function r(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function f(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,y){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function m(x,g){const y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a_(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=i[v.id];S===void 0&&(x(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",y));const E=M.program;n.updateUBOMapping(v,E);const _=t.render.frame;o[v.id]!==_&&(f(v),o[v.id]=_)}function h(v){const M=u();v.__bindingPointIndex=M;const S=s.createBuffer(),E=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,E,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],S=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,b=S.length;_<b;_++){const A=S[_];if(Array.isArray(A))for(let C=0,I=A.length;C<I;C++)d(A[C],_,C,E);else d(A,_,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,S,E){if(m(v,M,S,E)===!0){const _=v.__offset,b=v.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){const I=b[C],U=g(I);p(I,v.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function m(v,M,S,E){const _=v.value,b=M+"_"+S;if(E[b]===void 0)return typeof _=="number"||typeof _=="boolean"?E[b]=_:ArrayBuffer.isView(_)?E[b]=_.slice():E[b]=_.clone(),!0;{const A=E[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return E[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function x(v){const M=v.uniforms;let S=0;const E=16;for(let b=0,A=M.length;b<A;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let I=0,U=C.length;I<U;I++){const F=C[I],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,X=k.length;Y<X;Y++){const et=k[Y],G=g(et),K=S%E,it=K%G.boundary,ft=K+it;S+=it,ft!==0&&E-ft<G.storage&&(S+=E-ft),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}const _=S%E;return _>0&&(S+=E-_),v.__size=S,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",v),M}function y(v){const M=v.target;M.removeEventListener("dispose",y);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);r=[],i={},o={}}return{bind:l,update:c,dispose:w}}const l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function c_(){return di===null&&(di=new Fo(l_,16,16,Bs,Gn),di.name="DFG_LUT",di.minFilter=un,di.magFilter=un,di.wrapS=Xi,di.wrapT=Xi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class h_{constructor(t={}){const{canvas:e=Am(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=d,x=new Set([jh,Qh,Jh]),g=new Set([In,Ri,Dr,Nr,Kh,Zh]),y=new Uint32Array(4),w=new Int32Array(4),v=new L;let M=null,S=null;const E=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,I=null,U=null,F=null,k=null;this._outputColorSpace=He;let Y=0,X=0,et=null,G=-1,K=null;const it=new Ie,ft=new Ie;let B=null;const H=new It(0);let P=0,V=e.width,D=e.height,z=1,W=null,Q=null;const j=new Ie(0,0,V,D),vt=new Ie(0,0,V,D);let wt=!1;const at=new lu;let mt=!1,dt=!1;const _t=new ee,xt=new L,$t=new Ie,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Qt(){return et===null?z:1}let $=n;function xe(N,Z){return e.getContext(N,Z)}let le,O,T,tt,rt,ct,bt,Et,ht,ut,Rt,Vt,Tt,Ct,Kt,te,ie,J,Lt,gt,Pt,Nt,yt;try{const N={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xh}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",nt,!1),$===null){const Z="webgl2";if($=xe(Z,N),$===null)throw xe(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(N){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),we("WebGLRenderer: "+N.message),N}function Wt(){le=new cy($),le.init(),Pt=new t_($,le),O=new j1($,le,t,Pt),T=new QM($,le),O.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),U=$.createFramebuffer(),F=$.createFramebuffer(),k=$.createFramebuffer(),tt=new fy($),rt=new kM,ct=new jM($,le,T,rt,O,Pt,tt),bt=new ly(A),Et=new px($),Nt=new J1($,Et),ht=new hy($,Et,tt,Nt),ut=new py($,ht,Et,Nt,tt),J=new dy($,O,ct),Kt=new ty(rt),Rt=new FM(A,bt,le,O,Nt,Kt),Vt=new r_(A,rt),Tt=new BM,Ct=new qM(le),ie=new Z1(A,bt,T,ut,p,l),te=new JM(A,ut,O),yt=new a_($,tt,O,T),Lt=new Q1($,le,tt),gt=new uy($,le,tt),tt.programs=Rt.programs,A.capabilities=O,A.extensions=le,A.properties=rt,A.renderLists=Tt,A.shadowMap=te,A.state=T,A.info=tt}m!==In&&(b=new gy(m,e.width,e.height,a,i,o));const Xt=new s_(A,$);this.xr=Xt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const N=le.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=le.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(N){N!==void 0&&(z=N,this.setSize(V,D,!1))},this.getSize=function(N){return N.set(V,D)},this.setSize=function(N,Z,lt=!0){if(Xt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,D=Z,e.width=Math.floor(N*z),e.height=Math.floor(Z*z),lt===!0&&(e.style.width=N+"px",e.style.height=Z+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(V*z,D*z).floor()},this.setDrawingBufferSize=function(N,Z,lt){V=N,D=Z,z=lt,e.width=Math.floor(N*lt),e.height=Math.floor(Z*lt),this.setViewport(0,0,N,Z)},this.setEffects=function(N){if(m===In){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Z=0;Z<N.length;Z++)if(N[Z].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(it)},this.getViewport=function(N){return N.copy(j)},this.setViewport=function(N,Z,lt,st){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,Z,lt,st),T.viewport(it.copy(j).multiplyScalar(z).round())},this.getScissor=function(N){return N.copy(vt)},this.setScissor=function(N,Z,lt,st){N.isVector4?vt.set(N.x,N.y,N.z,N.w):vt.set(N,Z,lt,st),T.scissor(ft.copy(vt).multiplyScalar(z).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(N){T.setScissorTest(wt=N)},this.setOpaqueSort=function(N){W=N},this.setTransparentSort=function(N){Q=N},this.getClearColor=function(N){return N.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(N=!0,Z=!0,lt=!0){let st=0;if(N){let ot=!1;if(et!==null){const zt=et.texture.format;ot=x.has(zt)}if(ot){const zt=et.texture.type,Bt=g.has(zt),Ut=ie.getClearColor(),qt=ie.getClearAlpha(),Zt=Ut.r,de=Ut.g,ve=Ut.b;Bt?(y[0]=Zt,y[1]=de,y[2]=ve,y[3]=qt,$.clearBufferuiv($.COLOR,0,y)):(w[0]=Zt,w[1]=de,w[2]=ve,w[3]=qt,$.clearBufferiv($.COLOR,0,w))}else st|=$.COLOR_BUFFER_BIT}Z&&(st|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(st|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&$.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),I=N},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ie.dispose(),Tt.dispose(),Ct.dispose(),rt.dispose(),bt.dispose(),ut.dispose(),Nt.dispose(),yt.dispose(),Rt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",yn),Xt.removeEventListener("sessionend",en),rn.stop()};function Ce(N){N.preventDefault(),sl("WebGLRenderer: Context Lost."),C=!0}function q(){sl("WebGLRenderer: Context Restored."),C=!1;const N=tt.autoReset,Z=te.enabled,lt=te.autoUpdate,st=te.needsUpdate,ot=te.type;Wt(),tt.autoReset=N,te.enabled=Z,te.autoUpdate=lt,te.needsUpdate=st,te.type=ot}function nt(N){we("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Mt(N){const Z=N.target;Z.removeEventListener("dispose",Mt),At(Z)}function At(N){ce(N),rt.remove(N)}function ce(N){const Z=rt.get(N).programs;Z!==void 0&&(Z.forEach(function(lt){Rt.releaseProgram(lt)}),N.isShaderMaterial&&Rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,lt,st,ot,zt){Z===null&&(Z=Ht);const Bt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ut=Jr(N,Z,lt,st,ot);T.setMaterial(st,Bt);let qt=lt.index,Zt=1;if(st.wireframe===!0){if(qt=ht.getWireframeAttribute(lt),qt===void 0)return;Zt=2}const de=lt.drawRange,ve=lt.attributes.position;let Yt=de.start*Zt,Te=(de.start+de.count)*Zt;zt!==null&&(Yt=Math.max(Yt,zt.start*Zt),Te=Math.min(Te,(zt.start+zt.count)*Zt)),qt!==null?(Yt=Math.max(Yt,0),Te=Math.min(Te,qt.count)):ve!=null&&(Yt=Math.max(Yt,0),Te=Math.min(Te,ve.count));const Ke=Te-Yt;if(Ke<0||Ke===1/0)return;Nt.setup(ot,st,Ut,lt,qt);let Oe,Fe=Lt;if(qt!==null&&(Oe=Et.get(qt),Fe=gt,Fe.setIndex(Oe)),ot.isMesh)st.wireframe===!0?(T.setLineWidth(st.wireframeLinewidth*Qt()),Fe.setMode($.LINES)):Fe.setMode($.TRIANGLES);else if(ot.isLine){let mn=st.linewidth;mn===void 0&&(mn=1),T.setLineWidth(mn*Qt()),ot.isLineSegments?Fe.setMode($.LINES):ot.isLineLoop?Fe.setMode($.LINE_LOOP):Fe.setMode($.LINE_STRIP)}else ot.isPoints?Fe.setMode($.POINTS):ot.isSprite&&Fe.setMode($.TRIANGLES);if(ot.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Fe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const mn=ot._multiDrawStarts,Ot=ot._multiDrawCounts,Mn=ot._multiDrawCount,Ee=qt?Et.get(qt).bytesPerElement:1,Xn=rt.get(st).currentProgram.getUniforms();for(let ui=0;ui<Mn;ui++)Xn.setValue($,"_gl_DrawID",ui),Fe.render(mn[ui]/Ee,Ot[ui])}else if(ot.isInstancedMesh)Fe.renderInstances(Yt,Ke,ot.count);else if(lt.isInstancedBufferGeometry){const mn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ot=Math.min(lt.instanceCount,mn);Fe.renderInstances(Yt,Ke,Ot)}else Fe.render(Yt,Ke)};function _e(N,Z,lt,st){I!==null&&N.isNodeMaterial&&I.setObject(st,N),mt===!0&&Kt.setState(N,lt,!1),N.transparent===!0&&N.side===ai&&N.forceSinglePass===!1?(N.side=Dn,N.needsUpdate=!0,Xs(N,Z,st),N.side=ks,N.needsUpdate=!0,Xs(N,Z,st),N.side=ai):Xs(N,Z,st)}this.compile=function(N,Z,lt=null){lt===null&&(lt=N),I!==null&&I.renderStart(N,Z,lt),S=Ct.get(lt),S.init(Z),_.push(S),lt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),N!==lt&&N.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Z.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,mt=Kt.init(this.clippingPlanes,dt),mt===!0&&Kt.setGlobalState(this.clippingPlanes,Z),I!==null&&te.render(S.state.shadowsArray,lt,Z);const st=new Set;return N.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const zt=ot.material;if(zt)if(Array.isArray(zt))for(let Bt=0;Bt<zt.length;Bt++){const Ut=zt[Bt];_e(Ut,lt,Z,ot),st.add(Ut)}else _e(zt,lt,Z,ot),st.add(zt)}),S=_.pop(),I!==null&&I.renderEnd(),st},this.compileAsync=function(N,Z,lt=null){const st=this.compile(N,Z,lt);return new Promise(ot=>{function zt(){if(st.forEach(function(Bt){const qt=rt.get(Bt).currentProgram;(qt===void 0||qt.isReady())&&st.delete(Bt)}),st.size===0){ot(N);return}setTimeout(zt,10)}le.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let be=null;function Be(N){be&&be(N)}function yn(){rn.stop()}function en(){rn.start()}const rn=new $p;rn.setAnimationLoop(Be),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(N){be=N,Xt.setAnimationLoop(N),N===null?rn.stop():rn.start()},Xt.addEventListener("sessionstart",yn),Xt.addEventListener("sessionend",en),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(N,Z);const lt=Xt.enabled===!0&&Xt.isPresenting===!0,st=b!==null&&(et===null||lt)&&b.begin(A,et);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(Z),Z=Xt.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Z,et),S=Ct.get(N,_.length),S.init(Z),S.state.textureUnits=ct.getTextureUnits(),_.push(S),_t.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),at.setFromProjectionMatrix(_t,Si,Z.reversedDepth),dt=this.localClippingEnabled,mt=Kt.init(this.clippingPlanes,dt),M=Tt.get(N,E.length),M.init(),E.push(M),Xt.enabled===!0&&Xt.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&Un(Bt,Z,-1/0,A.sortObjects)}Un(N,Z,0,A.sortObjects),M.finish(),I!==null&&I.updateLights(S.state.lightsArray),A.sortObjects===!0&&M.sort(W,Q),Jt=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Jt&&ie.addToRenderList(M,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Kt.beginShadows();const ot=S.state.shadowsArray;if(te.render(ot,N,Z),mt===!0&&Kt.endShadows(),(st&&b.hasRenderPass())===!1){const Bt=M.opaque,Ut=M.transmissive;if(S.setupLights(),Z.isArrayCamera){const qt=Z.cameras;if(Ut.length>0)for(let Zt=0,de=qt.length;Zt<de;Zt++){const ve=qt[Zt];Wo(Bt,Ut,N,ve)}Jt&&ie.render(N);for(let Zt=0,de=qt.length;Zt<de;Zt++){const ve=qt[Zt];Ts(M,N,ve,ve.viewport)}}else Ut.length>0&&Wo(Bt,Ut,N,Z),Jt&&ie.render(N),Ts(M,N,Z)}et!==null&&X===0&&(ct.updateMultisampleRenderTarget(et),ct.updateRenderTargetMipmap(et)),st&&b.end(A),N.isScene===!0&&N.onAfterRender(A,N,Z),Nt.resetDefaultState(),G=-1,K=null,_.pop(),_.length>0?(S=_[_.length-1],ct.setTextureUnits(S.state.textureUnits),mt===!0&&Kt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,I!==null&&I.renderEnd()};function Un(N,Z,lt,st){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)lt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLightProbeGrid)S.pushLightProbeGrid(N);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(at)){st&&$t.setFromMatrixPosition(N.matrixWorld).applyMatrix4(_t);const Bt=ut.update(N),Ut=N.material;Ut.visible&&M.push(N,Bt,Ut,lt,$t.z,null,Z)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(at))){const Bt=ut.update(N),Ut=N.material;if(st&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),$t.copy(N.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),$t.copy(Bt.boundingSphere.center)),$t.applyMatrix4(N.matrixWorld).applyMatrix4(_t)),Array.isArray(Ut)){const qt=Bt.groups;for(let Zt=0,de=qt.length;Zt<de;Zt++){const ve=qt[Zt],Yt=Ut[ve.materialIndex];Yt&&Yt.visible&&M.push(N,Bt,Yt,lt,$t.z,ve,Z)}}else Ut.visible&&M.push(N,Bt,Ut,lt,$t.z,null,Z)}}const zt=N.children;for(let Bt=0,Ut=zt.length;Bt<Ut;Bt++)Un(zt[Bt],Z,lt,st)}function Ts(N,Z,lt,st){const{opaque:ot,transmissive:zt,transparent:Bt}=N;S.setupLightsView(lt),mt===!0&&Kt.setGlobalState(A.clippingPlanes,lt),st&&T.viewport(it.copy(st)),ot.length>0&&As(ot,Z,lt),zt.length>0&&As(zt,Z,lt),Bt.length>0&&As(Bt,Z,lt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Wo(N,Z,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[st.id]===void 0){const Yt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[st.id]=new Vn(1,1,{generateMipmaps:!0,type:Yt?Gn:In,minFilter:xs,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}const zt=S.state.transmissionRenderTarget[st.id],Bt=st.viewport||it;zt.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Ut=A.getRenderTarget(),qt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(zt),A.getClearColor(H),P=A.getClearAlpha(),P<1&&A.setClearColor(16777215,.5),A.clear(),Jt&&ie.render(lt);const de=A.toneMapping;A.toneMapping=Ti;const ve=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),mt===!0&&Kt.setGlobalState(A.clippingPlanes,st),As(N,lt,st),ct.updateMultisampleRenderTarget(zt),ct.updateRenderTargetMipmap(zt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Te=0,Ke=Z.length;Te<Ke;Te++){const Oe=Z[Te],{object:Fe,geometry:mn,material:Ot,group:Mn}=Oe;if(Ot.side===ai&&Fe.layers.test(st.layers)){const Ee=Ot.side;Ot.side=Dn,Ot.needsUpdate=!0,$r(Fe,lt,st,mn,Ot,Mn),Ot.side=Ee,Ot.needsUpdate=!0,Yt=!0}}Yt===!0&&(ct.updateMultisampleRenderTarget(zt),ct.updateRenderTargetMipmap(zt))}A.setRenderTarget(Ut,qt,Zt),A.setClearColor(H,P),ve!==void 0&&(st.viewport=ve),A.toneMapping=de}function As(N,Z,lt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let ot=0,zt=N.length;ot<zt;ot++){const Bt=N[ot],{object:Ut,geometry:qt,group:Zt}=Bt;let de=Bt.material;de.allowOverride===!0&&st!==null&&(de=st),Ut.layers.test(lt.layers)&&$r(Ut,Z,lt,qt,de,Zt)}}function $r(N,Z,lt,st,ot,zt){I!==null&&ot.isNodeMaterial&&I.setObject(N,ot),N.onBeforeRender(A,Z,lt,st,ot,zt),N.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ot.onBeforeRender(A,Z,lt,st,N,zt),ot.transparent===!0&&ot.side===ai&&ot.forceSinglePass===!1?(ot.side=Dn,ot.needsUpdate=!0,A.renderBufferDirect(lt,Z,st,ot,N,zt),ot.side=ks,ot.needsUpdate=!0,A.renderBufferDirect(lt,Z,st,ot,N,zt),ot.side=ai):A.renderBufferDirect(lt,Z,st,ot,N,zt),N.onAfterRender(A,Z,lt,st,ot,zt)}function Xs(N,Z,lt){Z.isScene!==!0&&(Z=Ht);const st=rt.get(N),ot=S.state.lights,zt=S.state.shadowsArray,Bt=ot.state.version,Ut=Rt.getParameters(N,ot.state,zt,Z,lt,S.state.lightProbeGridArray),qt=Rt.getProgramCacheKey(Ut);let Zt=st.programs;st.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Z.environment:null,st.fog=Z.fog;const de=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;st.envMap=bt.get(N.envMap||st.environment,de),st.envMapRotation=st.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,Zt===void 0&&(N.addEventListener("dispose",Mt),Zt=new Map,st.programs=Zt);let ve=Zt.get(qt);if(ve!==void 0){if(st.currentProgram===ve&&st.lightsStateVersion===Bt)return Kr(N,Ut),ve}else Ut.uniforms=Rt.getUniforms(N),I!==null&&N.isNodeMaterial&&I.build(N,lt,Ut),N.onBeforeCompile(Ut,A),ve=Rt.acquireProgram(Ut,qt),Zt.set(qt,ve),st.uniforms=Ut.uniforms;const Yt=st.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Yt.clippingPlanes=Kt.uniform),Kr(N,Ut),st.needsLights=B0(N),st.lightsStateVersion=Bt,st.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.sunLights.value=ot.state.sun,Yt.sunLightShadows.value=ot.state.sunShadow,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Yt.sunShadowCascade.value=ot.state.sunShadowCascade,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=S.state.lightProbeGridArray.length>0,st.currentProgram=ve,st.uniformsList=null,ve}function Ii(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=$a.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Kr(N,Z){const lt=rt.get(N);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function Zr(N,Z){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;v.setFromMatrixPosition(Z.matrixWorld);for(let lt=0,st=N.length;lt<st;lt++){const ot=N[lt];if(ot.texture!==null&&ot.boundingBox.containsPoint(v))return ot}return null}function Jr(N,Z,lt,st,ot){Z.isScene!==!0&&(Z=Ht),ct.resetTextureUnits();const zt=Z.fog,Bt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?Z.environment:null,Ut=et===null?A.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Se.workingColorSpace,qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Zt=bt.get(st.envMap||Bt,qt),de=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ve=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!lt.morphAttributes.position,Te=!!lt.morphAttributes.normal,Ke=!!lt.morphAttributes.color;let Oe=Ti;st.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Oe=A.toneMapping);const Fe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,mn=Fe!==void 0?Fe.length:0,Ot=rt.get(st),Mn=S.state.lights;if(mt===!0&&(dt===!0||N!==K)){const ke=N===K&&st.id===G;Kt.setState(st,N,ke)}let Ee=!1;st.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Mn.state.version||Ot.outputColorSpace!==Ut||ot.isBatchedMesh&&Ot.batching===!1||!ot.isBatchedMesh&&Ot.batching===!0||ot.isBatchedMesh&&Ot.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ot.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ot.instancing===!1||!ot.isInstancedMesh&&Ot.instancing===!0||ot.isSkinnedMesh&&Ot.skinning===!1||!ot.isSkinnedMesh&&Ot.skinning===!0||ot.isInstancedMesh&&Ot.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ot.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ot.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ot.instancingMorph===!1&&ot.morphTexture!==null||Ot.envMap!==Zt||st.fog===!0&&Ot.fog!==zt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Kt.numPlanes||Ot.numIntersection!==Kt.numIntersection)||Ot.vertexAlphas!==de||Ot.vertexTangents!==ve||Ot.morphTargets!==Yt||Ot.morphNormals!==Te||Ot.morphColors!==Ke||Ot.toneMapping!==Oe||Ot.morphTargetsCount!==mn||!!Ot.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Ot.__version=st.version);let Xn=Ot.currentProgram;Ee===!0&&(Xn=Xs(st,Z,ot),I&&st.isNodeMaterial&&I.onUpdateProgram(st,Xn,Ot));let ui=!1,ji=!1,qs=!1;const De=Xn.getUniforms(),qe=Ot.uniforms;if(T.useProgram(Xn.program)&&(ui=!0,ji=!0,qs=!0),st.id!==G&&(G=st.id,ji=!0),Ot.needsLights){const ke=Zr(S.state.lightProbeGridArray,ot);Ot.lightProbeGrid!==ke&&(Ot.lightProbeGrid=ke,ji=!0)}if(ui||K!==N){T.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),De.setValue($,"projectionMatrix",N.projectionMatrix),De.setValue($,"viewMatrix",N.matrixWorldInverse);const es=De.map.cameraPosition;es!==void 0&&es.setValue($,xt.setFromMatrixPosition(N.matrixWorld)),O.logarithmicDepthBuffer&&De.setValue($,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&De.setValue($,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,ji=!0,qs=!0)}if(Ot.needsLights&&(Mn.state.sunShadowMap.length>0&&De.setValue($,"sunShadowMap",Mn.state.sunShadowMap,ct),Mn.state.directionalShadowMap.length>0&&De.setValue($,"directionalShadowMap",Mn.state.directionalShadowMap,ct),Mn.state.spotShadowMap.length>0&&De.setValue($,"spotShadowMap",Mn.state.spotShadowMap,ct),Mn.state.pointShadowMap.length>0&&De.setValue($,"pointShadowMap",Mn.state.pointShadowMap,ct)),ot.isSkinnedMesh){De.setOptional($,ot,"bindMatrix"),De.setOptional($,ot,"bindMatrixInverse");const ke=ot.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),De.setValue($,"boneTexture",ke.boneTexture,ct))}ot.isBatchedMesh&&(De.setOptional($,ot,"batchingTexture"),De.setValue($,"batchingTexture",ot._matricesTexture,ct),De.setOptional($,ot,"batchingIdTexture"),De.setValue($,"batchingIdTexture",ot._indirectTexture,ct),De.setOptional($,ot,"batchingColorTexture"),ot._colorsTexture!==null&&De.setValue($,"batchingColorTexture",ot._colorsTexture,ct));const ts=lt.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&J.update(ot,lt,Xn),(ji||Ot.receiveShadow!==ot.receiveShadow)&&(Ot.receiveShadow=ot.receiveShadow,De.setValue($,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&Z.environment!==null&&(qe.envMapIntensity.value=Z.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=c_()),ji){if(De.setValue($,"toneMappingExposure",A.toneMappingExposure),Ot.needsLights&&O0(qe,qs),zt&&st.fog===!0&&Vt.refreshFogUniforms(qe,zt),Vt.refreshMaterialUniforms(qe,st,z,D,S.state.transmissionRenderTarget[N.id]),Ot.needsLights&&Ot.lightProbeGrid){const ke=Ot.lightProbeGrid;qe.probesSH.value=ke.texture,qe.probesMin.value.copy(ke.boundingBox.min),qe.probesMax.value.copy(ke.boundingBox.max),qe.probesResolution.value.copy(ke.resolution)}$a.upload($,Ii(Ot),qe,ct)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&($a.upload($,Ii(Ot),qe,ct),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&De.setValue($,"center",ot.center),De.setValue($,"modelViewMatrix",ot.modelViewMatrix),De.setValue($,"normalMatrix",ot.normalMatrix),De.setValue($,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){const ke=st.uniformsGroups;for(let es=0,Ys=ke.length;es<Ys;es++){const Bu=ke[es];yt.update(Bu,Xn),yt.bind(Bu,Xn)}}return Xn}function O0(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.sunLights.needsUpdate=Z,N.sunLightShadows.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function B0(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(N,Z,lt){const st=rt.get(N);st.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),rt.get(N.texture).__webglTexture=Z,rt.get(N.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Z){const lt=rt.get(N);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,lt=0){et=N,Y=Z,X=lt;let st=null,ot=!1,zt=!1;if(N){const Ut=rt.get(N);if(Ut.__useDefaultFramebuffer!==void 0){T.bindFramebuffer($.FRAMEBUFFER,Ut.__webglFramebuffer),it.copy(N.viewport),ft.copy(N.scissor),B=N.scissorTest,T.viewport(it),T.scissor(ft),T.setScissorTest(B),G=-1;return}else if(Ut.__webglFramebuffer===void 0)ct.setupRenderTarget(N);else if(Ut.__hasExternalTextures)ct.rebindTextures(N,rt.get(N.texture).__webglTexture,rt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const de=N.depthTexture;if(Ut.__boundDepthTexture!==de){if(de!==null&&rt.has(de)&&(N.width!==de.image.width||N.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(N)}}const qt=N.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(zt=!0);const Zt=rt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Zt[Z])?st=Zt[Z][lt]:st=Zt[Z],ot=!0):N.samples>0&&ct.useMultisampledRTT(N)===!1?st=rt.get(N).__webglMultisampledFramebuffer:Array.isArray(Zt)?st=Zt[lt]:st=Zt,it.copy(N.viewport),ft.copy(N.scissor),B=N.scissorTest}else it.copy(j).multiplyScalar(z).floor(),ft.copy(vt).multiplyScalar(z).floor(),B=wt;if(lt!==0&&(st=U),T.bindFramebuffer($.FRAMEBUFFER,st)&&T.drawBuffers(N,st),T.viewport(it),T.scissor(ft),T.setScissorTest(B),ot){const Ut=rt.get(N.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ut.__webglTexture,lt)}else if(zt){const Ut=Z;for(let qt=0;qt<N.textures.length;qt++){const Zt=rt.get(N.textures[qt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,lt,Ut)}}else if(N!==null&&lt!==0){const Ut=rt.get(N.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ut.__webglTexture,lt)}G=-1};function Ou(N){const Z=rt.get(N);return(Z.__readFormat!==N.format||Z.__readType!==N.type)&&(Z.__readFormat=N.format,Z.__readType=N.type,Z.__formatReadable=O.textureFormatReadable(N.format),Z.__typeReadable=O.textureTypeReadable(N.type)),Z}this.readRenderTargetPixels=function(N,Z,lt,st,ot,zt,Bt,Ut=0){if(!(N&&N.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt){T.bindFramebuffer($.FRAMEBUFFER,qt);try{const Zt=N.textures[Ut],de=Zt.format,ve=Zt.type;N.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ut);const Yt=Ou(Zt);if(Yt.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-st&&lt>=0&&lt<=N.height-ot&&$.readPixels(Z,lt,st,ot,Pt.convert(de),Pt.convert(ve),zt)}finally{const Zt=et!==null?rt.get(et).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(N,Z,lt,st,ot,zt,Bt,Ut=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Bt!==void 0&&(qt=qt[Bt]),qt)if(Z>=0&&Z<=N.width-st&&lt>=0&&lt<=N.height-ot){T.bindFramebuffer($.FRAMEBUFFER,qt);const Zt=N.textures[Ut],de=Zt.format,ve=Zt.type;N.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ut);const Yt=Ou(Zt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Te),$.bufferData($.PIXEL_PACK_BUFFER,zt.byteLength,$.STREAM_READ),$.readPixels(Z,lt,st,ot,Pt.convert(de),Pt.convert(ve),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ke=et!==null?rt.get(et).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,Ke);const Oe=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Rm($,Oe,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Te),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,zt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Te),$.deleteSync(Oe),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Z=null,lt=0){const st=Math.pow(2,-lt),ot=Math.floor(N.image.width*st),zt=Math.floor(N.image.height*st),Bt=Z!==null?Z.x:0,Ut=Z!==null?Z.y:0;ct.setTexture2D(N,0),$.copyTexSubImage2D($.TEXTURE_2D,lt,0,0,Bt,Ut,ot,zt),T.unbindTexture()},this.copyTextureToTexture=function(N,Z,lt=null,st=null,ot=0,zt=0){let Bt,Ut,qt,Zt,de,ve,Yt,Te,Ke;const Oe=N.isCompressedTexture?N.mipmaps[zt]:N.image;if(lt!==null)Bt=lt.max.x-lt.min.x,Ut=lt.max.y-lt.min.y,qt=lt.isBox3?lt.max.z-lt.min.z:1,Zt=lt.min.x,de=lt.min.y,ve=lt.isBox3?lt.min.z:0;else{const qe=Math.pow(2,-ot);Bt=Math.floor(Oe.width*qe),Ut=Math.floor(Oe.height*qe),N.isDataArrayTexture?qt=Oe.depth:N.isData3DTexture?qt=Math.floor(Oe.depth*qe):qt=1,Zt=0,de=0,ve=0}st!==null?(Yt=st.x,Te=st.y,Ke=st.z):(Yt=0,Te=0,Ke=0);const Fe=Pt.convert(Z.format),mn=Pt.convert(Z.type);let Ot;Z.isData3DTexture?(ct.setTexture3D(Z,0),Ot=$.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ct.setTexture2DArray(Z,0),Ot=$.TEXTURE_2D_ARRAY):(ct.setTexture2D(Z,0),Ot=$.TEXTURE_2D),T.activeTexture($.TEXTURE0),T.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),T.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),T.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);const Mn=T.getParameter($.UNPACK_ROW_LENGTH),Ee=T.getParameter($.UNPACK_IMAGE_HEIGHT),Xn=T.getParameter($.UNPACK_SKIP_PIXELS),ui=T.getParameter($.UNPACK_SKIP_ROWS),ji=T.getParameter($.UNPACK_SKIP_IMAGES);T.pixelStorei($.UNPACK_ROW_LENGTH,Oe.width),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,Oe.height),T.pixelStorei($.UNPACK_SKIP_PIXELS,Zt),T.pixelStorei($.UNPACK_SKIP_ROWS,de),T.pixelStorei($.UNPACK_SKIP_IMAGES,ve);const qs=N.isDataArrayTexture||N.isData3DTexture,De=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isDepthTexture){const qe=rt.get(N),ts=rt.get(Z),ke=rt.get(qe.__renderTarget),es=rt.get(ts.__renderTarget);T.bindFramebuffer($.READ_FRAMEBUFFER,ke.__webglFramebuffer),T.bindFramebuffer($.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Ys=0;Ys<qt;Ys++)qs&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,ot,ve+Ys),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(Z).__webglTexture,zt,Ke+Ys)),$.blitFramebuffer(Zt,de,Bt,Ut,Yt,Te,Bt,Ut,$.DEPTH_BUFFER_BIT,$.NEAREST);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ot!==0||N.isRenderTargetTexture||rt.has(N)){const qe=rt.get(N),ts=rt.get(Z);T.bindFramebuffer($.READ_FRAMEBUFFER,F),T.bindFramebuffer($.DRAW_FRAMEBUFFER,k);for(let ke=0;ke<qt;ke++)qs?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,qe.__webglTexture,ot,ve+ke):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,qe.__webglTexture,ot),De?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ts.__webglTexture,zt,Ke+ke):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ts.__webglTexture,zt),ot!==0?$.blitFramebuffer(Zt,de,Bt,Ut,Yt,Te,Bt,Ut,$.COLOR_BUFFER_BIT,$.NEAREST):De?$.copyTexSubImage3D(Ot,zt,Yt,Te,Ke+ke,Zt,de,Bt,Ut):$.copyTexSubImage2D(Ot,zt,Yt,Te,Zt,de,Bt,Ut);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else De?N.isDataTexture||N.isData3DTexture?$.texSubImage3D(Ot,zt,Yt,Te,Ke,Bt,Ut,qt,Fe,mn,Oe.data):Z.isCompressedArrayTexture?$.compressedTexSubImage3D(Ot,zt,Yt,Te,Ke,Bt,Ut,qt,Fe,Oe.data):$.texSubImage3D(Ot,zt,Yt,Te,Ke,Bt,Ut,qt,Fe,mn,Oe):N.isDataTexture?$.texSubImage2D($.TEXTURE_2D,zt,Yt,Te,Bt,Ut,Fe,mn,Oe.data):N.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,zt,Yt,Te,Oe.width,Oe.height,Fe,Oe.data):$.texSubImage2D($.TEXTURE_2D,zt,Yt,Te,Bt,Ut,Fe,mn,Oe);T.pixelStorei($.UNPACK_ROW_LENGTH,Mn),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ee),T.pixelStorei($.UNPACK_SKIP_PIXELS,Xn),T.pixelStorei($.UNPACK_SKIP_ROWS,ui),T.pixelStorei($.UNPACK_SKIP_IMAGES,ji),zt===0&&Z.generateMipmaps&&$.generateMipmap(Ot),T.unbindTexture()},this.initRenderTarget=function(N){rt.get(N).__webglFramebuffer===void 0&&ct.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ct.setTextureCube(N,0):N.isData3DTexture?ct.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ct.setTexture2DArray(N,0):ct.setTexture2D(N,0),T.unbindTexture()},this.resetState=function(){Y=0,X=0,et=null,T.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}const Ra={bpm:100,punch:1.3,pulse:.2,steady:.55},u_=s=>!!s&&s.bpm>Ra.bpm&&(!s.double&&s.punch>=Ra.punch&&s.pulse>=Ra.pulse||s.pulse>=Ra.steady),f_=s=>s.bpm>150?2:1,d_=(s,t)=>!!t&&(s.dance??u_(t)),e0="#f7f7f7",Tn=.0254,xu={canvas:.038,panel:.022,paper:.012,digital:.012},ul={face:.75*Tn,depth:1.5*Tn,mat:3*Tn,lip:.25*Tn,bevel:.125*Tn},p_={black:"#161616",white:"#efeee9"},m_={white:"#f4f2ec",black:"#1c1c1c"},g_="#faf9f4",fl={strip:.25*Tn,depth:2*Tn,gap:.25*Tn,below:.25*Tn},x_="#e3cba2",v_="#111111";function vu(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const yu=s=>!!s&&s.style==="float";function y_(s){const t=vu(s),e=t?yu(t)?2*(fl.gap+fl.strip):2*(ul.mat+ul.face):0;return[s.w*Tn+e,s.h*Tn+e]}const M_=s=>{const t=vu(s);return t?yu(t)?fl.depth:ul.depth:xu[s.kind]};async function __(){const s={},t=async a=>{const l=await fetch(`data/${a}.json?${Date.now()}`,{cache:"no-store"});if(!l.ok)throw new Error(`data/${a}.json: ${l.status}`);return s[a]=l.headers.get("x-rev")??"",l.json()},[e,n,i,o,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("albums").catch(()=>[]),t("beats").catch(()=>({}))]);return n.pieces??(n.pieces=[]),{catalogue:e,layout:n,images:i,albums:Array.isArray(o)?o:[],beats:r??{},revs:s}}const w_=(s,t)=>`${s}:${t}`,Ac=(s,t,e)=>s.paint[w_(t,e)]??s.defaultPaint;function dl(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,o=Math.round(i*8);return o===0?`${n}`:o===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[o]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const pl=s=>s.title.trim()||"Untitled",ed=.004;function S_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const r=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:r,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:r,a1:a,sides:[1,-1]})}else{const r=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:r,z1:a},a0:r,a1:a,sides:[1,-1]})}return n}const b_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,nd=(s,t,e,n)=>s.some(i=>i.id!==n&&b_(i.rect,t,e));function id(s,t,e){let n=[[s,t]];for(const[i,o]of e){const r=[];for(const[a,l]of n){if(o<=a||i>=l){r.push([a,l]);continue}i>a&&r.push([a,i]),o<l&&r.push([o,l])}n=r}return n.filter(([i,o])=>o-i>.05)}function E_(s){var d;const t=S_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,o=s.doorHeight,r={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const m=s.doors.filter(x=>x.wall===p).map(x=>[Math.min(x.a,x.b),Math.max(x.a,x.b)]);return p==="S"&&m.push([r.a,r.b]),m},l=[],c=[];for(const p of t){for(const x of p.sides){const g=p.rect,y=p.axis==="x"?x>0?g.z1:g.z0:x>0?g.x1:g.x0,w=p.axis==="x"?[0,x]:[x,0],v=[w[1],-w[0]],M=[];for(const b of t){if(b===p)continue;const A=b.rect,C=p.axis==="x"?A.z0:A.x0,I=p.axis==="x"?A.z1:A.x1;if(!(x>0?C<=y+ed&&I>=y+.01:I>=y-ed&&C<=y-.01))continue;const F=p.axis==="x"?A.x0:A.z0,k=p.axis==="x"?A.x1:A.z1;M.push([F,k])}const S=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),E=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[b,A]of id(S,E,M)){const C=I=>{const U=p.axis==="x"?I:y+w[0]*.02,F=p.axis==="x"?y+w[1]*.02:I;return nd(t,U,F,p.id)};l.push({key:`${p.id}:${x}:${b.toFixed(3)}`,wall:p.id,side:x,axis:p.axis,plane:y,u0:b,u1:A,n:w,right:v,cornerA:C(b-.02),cornerB:C(A+.02),freeA:!p.outer&&!C(b-.02)&&Math.abs(b-p.a0)<1e-6,freeB:!p.outer&&!C(A+.02)&&Math.abs(A-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([I,U])=>[Math.max(I,b),Math.min(U,A)]).filter(([I,U])=>U-I>.01),color:((d=(s.paintAt??[]).find(I=>I.wall===p.id&&I.side===x&&I.u>=b-1e-6&&I.u<=A+1e-6))==null?void 0:d.color)??Ac(s,p.id,x)})}}if(p.outer)continue;const m=Ac(s,p.id,1);for(const x of[p.a0,p.a1]){const g=x===p.a0?-1:1,y=p.axis==="x"?x+g*.02:(p.rect.x0+p.rect.x1)/2,w=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:x+g*.02;nd(t,y,w,p.id)||(p.axis==="x"?c.push(as(x,p.rect.z0,x,p.rect.z1,[g,0,0],i,m)):c.push(as(p.rect.x0,x,p.rect.x1,x,[0,0,g],i,m)))}for(const[x,g]of a(p.id)){const y=p.rect;p.axis==="x"?(c.push(as(x,y.z0,x,y.z1,[1,0,0],o,m)),c.push(as(g,y.z0,g,y.z1,[-1,0,0],o,m)),c.push(Rc(x,g,y.z0,y.z1,"x",o,m))):(c.push(as(y.x0,x,y.x1,x,[0,0,1],o,m)),c.push(as(y.x0,g,y.x1,g,[0,0,-1],o,m)),c.push(Rc(x,g,y.x0,y.x1,"z",o,m)))}}const h=.04,u=Ac(s,"S",-1);c.push(as(r.a,e.z1,r.a,e.z1+h,[1,0,0],o,u)),c.push(as(r.b,e.z1,r.b,e.z1+h,[-1,0,0],o,u)),c.push(Rc(r.a,r.b,e.z1,e.z1+h,"x",o,u));const f=[];for(const p of t){const m=p.rect,x=p.axis==="x"?[m.x0,m.x1]:[m.z0,m.z1];for(const[g,y]of id(x[0],x[1],a(p.id)))f.push(p.axis==="x"?{x0:g,x1:y,z0:m.z0,z1:m.z1}:{x0:m.x0,x1:m.x1,z0:g,z1:y})}return{inner:n,H:i,doorH:o,walls:t,faces:l,extra:c,solids:f,entrance:r,ceilColor:s.ceilingPaint??e0,ceilAt:s.ceilingAt??[]}}function as(s,t,e,n,i,o,r){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],o,u[1]],[h[0],o,h[1]]],n:i,color:r}}function Rc(s,t,e,n,i,o,r){const a=(c,h)=>i==="x"?[c,o,h]:[h,o,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:r}}const _s=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],Mu=s=>s.axis==="x"?s.right[0]:s.right[1];function Vs(s,t,e,n,i,o=0){const r=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>c&&(c=p)}else{if(p<c)return!1;p<h&&(h=p)}return!0};if(u(-r,t-l.x0)&&u(r,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>o&&c<1-o)return!0}return!1}function T_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),o=t/2,r=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-o-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+o-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-o-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+o-e.z0)/t));for(let m=d;m<=p;m++)for(let x=u;x<=f;x++)r[m*n+x]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(r[c]===-2){for(r[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&r[h-1]===-2&&(r[h-1]=a,l.push(h-1)),u<n-1&&r[h+1]===-2&&(r[h+1]=a,l.push(h+1)),f>0&&r[h-n]===-2&&(r[h-n]=a,l.push(h-n)),f<i-1&&r[h+n]===-2&&(r[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:r,rooms:a}}function A_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function R_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=A_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const To=.125,Cr=.086,sd=.12,ml=1e3,gl='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',Pr=140,xl=62,n0=46;let ir=null;function C_(s){ir??(ir=document.createElement("canvas").getContext("2d")),ir.font=`300 ${Pr}px ${gl}`;const t=ir.measureText(s.title).width;ir.font=`400 ${xl}px ${gl}`;const e=s.sub?ir.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/ml,h:(Pr+(s.sub?n0+xl:0)+30)/ml}}const Nh=.03,P_=.35,od=1.1;function L_(s,t){if(s.text){const n=C_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?y_(e):[.3,.3]}function I_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const o=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;o<n&&(n=o,e=i)}return e}function D_(s,t,e,n,i,o){const r=s.u0+i/2+Nh,a=s.u1-i/2-Nh,l=r>a?(s.u0+s.u1)/2:Math.max(r,Math.min(a,e)),c=o/2+.05,h=t-.12-o/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function N_(s,t,e,n,i){const o=Mu(s),r=t*o,a=o>0?s.u1:-s.u0;let l=r+n/2+sd+To/2;l+To/2>a-Nh&&(l=r-n/2-sd-To/2);const c=Math.max(.2+Cr/2,e-i/2+Cr/2);return{pos:_s(s,l*o,c),w:To,h:Cr}}function U_(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=I_(t,l);if(!c){n.push(l);continue}const[h,u]=L_(l,e),f=D_(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);i.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:_s(c,f.u,f.y),w:h,h:u,depth:d?M_(d):.001,label:d?N_(c,f.u,f.y,h,u):null,over:!1})}const o=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)o(c)+c.w/2>h&&o(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const f=Math.abs(o(c)-o(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const r=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((m,x)=>x),u=m=>h[m]===m?m:h[m]=u(h[m]);for(let m=0;m<c.length;m++)for(let x=m+1;x<c.length;x++){const g=c[m],y=c[x];if(g.text||y.text)continue;const w=Math.abs(o(g)-o(y))-(g.w+y.w)/2,v=Math.abs(g.pos[1]-y.pos[1])-(g.h+y.h)/2;Math.max(w,v)<P_&&(h[u(m)]=u(x))}const f=new Map;c.forEach((m,x)=>{const g=u(x);f.has(g)||f.set(g,[]),f.get(g).push(m)});const d=[l.n[0],0,l.n[1]],p=[l.right[0],0,l.right[1]];for(const m of f.values()){const x=Math.min(...m.map(S=>o(S)-S.w/2)),g=Math.max(...m.map(S=>o(S)+S.w/2)),y=Math.min(...m.map(S=>S.pos[1]-S.h/2)),w=Math.max(...m.map(S=>S.pos[1]+S.h/2)),v=_s(l,(x+g)/2,(y+w)/2),M={w:g-x,h:w-y};r.push({face:l,centre:v,normal:d,right:p,w:M.w,h:M.h,items:m,lamp:z_(v,d,p,M,m,t)})}}return{placed:r,items:i,homeless:n}}function z_(s,t,e,n,i,o){const r=o.H-.03;let a=od;for(let y=.2;y<=od+.25;y+=.05)if(Vs(o.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*y,s[2]+t[2]*y)){a=Math.max(.35,(y-.25)*.8);break}const l=[s[0]+t[0]*a,r,s[2]+t[2]*a],c=i.reduce((y,w)=>y+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[y,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*y*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*y*n.w/2-l[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}const F_=1.45,i0=.07,s0=.07,o0=.125,k_=.086,r0=.12,O_=1.3,a0=.16,rd=1e3,ad='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',ld=140,cd=62,B_=46,H_=1.6;let sr=null;function l0(s){sr??(sr=document.createElement("canvas").getContext("2d")),sr.font=`300 ${ld}px ${ad}`;const t=sr.measureText(s.title).width;sr.font=`400 ${cd}px ${ad}`;const e=s.sub?sr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/rd,h:(ld+(s.sub?B_+cd:0)+30)/rd,colW:[],colH:[]}}const V_=6400;function G_(s){return s.map(t=>({title:pl(t),detail:[t.medium,dl(t),t.year].filter(Boolean).join(", ")}))}const W_=s=>(150+G_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/V_,hd=.45,ud=.25,Cc=.4,fd=.12,dd=1.1,Uh=s=>[s.w*Tn,s.h*Tn];function c0(s,t){const e=[],n=[];for(const r of s){const a=r.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>Uh(l)[0]))),n.push(a.reduce((l,c)=>l+Uh(c)[1],0)+s0*Math.max(0,a.length-1))}const i=e.reduce((r,a)=>r+a,0)+i0*Math.max(0,s.length-1),o=Math.max(0,...n);return{w:i,h:o,colW:e,colH:n}}const X_=s=>s.cols.reduce((t,e)=>t+e.length,0),q_=s=>X_(s)>1?a0:o0,Y_=(s,t)=>s.text?l0(s.text).w:c0(s.cols,t).w+r0+q_(s);function $_(s){const t=[];let e=s.u0+(s.cornerA?hd:ud);const n=s.u1-(s.cornerB?hd:ud);for(const[i,o]of[...s.doors].sort((r,a)=>r[0]-a[0]))i-Cc-e>.3&&t.push([e,i-Cc]),e=Math.max(e,o+Cc);return n-e>.3&&t.push([e,n]),t}function K_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const o=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;o<n&&(n=o,e=i)}return e}function Z_(s,t,e){const n=new Map,i=[];for(const r of s.hang){if(!r.text&&(r.cols=r.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!r.cols.length))continue;const a=K_(t,r);if(!a){i.push(r);continue}n.has(a)||n.set(a,[]),n.get(a).push(r)}const o=[];for(const[r,a]of n){const l=$_(r);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([p,m],x)=>{const g=u.u<p?p-u.u:u.u>m?u.u-m:0;g<d&&(d=g,f=x)}),c[f].push(u)}const h=Mu(r);l.forEach(([u,f],d)=>{const p=c[d].sort((S,E)=>(S.u-E.u)*h);if(!p.length)return;const m=p.map(S=>Y_(S,e)),x=f-u,g=m.reduce((S,E)=>S+E,0);let y=(x-g)/(p.length+1);const w=y<fd;w&&(y=fd);const v=g+y*(p.length+1);let M=(h>0?u:-f)+(x-v)/2+y;p.forEach((S,E)=>{const _=S.text?l0(S.text):c0(S.cols,e),A=(M+_.w/2)*h;S.u=+A.toFixed(4),o.push(J_(S,r,A,_,e,t,w)),M+=m[E]+y})})}return{placed:o,homeless:i}}function J_(s,t,e,n,i,o,r){const a=Mu(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?H_:F_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>o.H-.3&&(h=Math.max(n.h/2+.1,o.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((w,v)=>{const M=n.colW[v],S=n.colH[v];let E=h+S/2;for(const _ of w){const b=i.get(_),[A,C]=Uh(b),I=f+M/2;u.push({work:b,pos:_s(t,e+I*a,E-C/2),w:A,h:C,depth:xu[b.kind]}),E-=C+s0}f+=M+i0});const d=s.cols.flat().map(w=>i.get(w)),p=d.length>1?a0:o0,m=d.length>1?W_(d):k_,x=e+(n.w/2+r0+p/2)*a,g=Math.min(O_,h+n.h/2-m/2),y=_s(t,e,h);return{def:s,face:t,centre:y,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:_s(t,x,Math.max(g,.3+m/2)),w:p,h:m,works:d},lamp:Q_(y,l,c,n,u,o),over:r,text:s.text}}function Q_(s,t,e,n,i,o){const r=o.H-.03;let a=dd;for(let y=.2;y<=dd+.25;y+=.05)if(Vs(o.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*y,s[2]+t[2]*y)){a=Math.max(.35,(y-.25)*.8);break}const l=[s[0]+t[0]*a,r,s[2]+t[2]*a],c=i.reduce((y,w)=>y+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[y,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*y*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*y*n.w/2-l[2]],M=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/M)))}p+=1.5*Math.PI/180;const m=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],g=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(m),cInner:Math.cos(p),i:f*f/Math.max(.2,g)}}function j_(s,t,e){if(s.version===2||!s.hang.some(r=>"cols"in r))return!1;const{placed:n}=Z_(s,t,e),i=[],o=(r,a)=>+(r.axis==="x"?a[0]:a[2]).toFixed(4);for(const r of n){const a=r.face;r.text&&i.push({id:r.def.id,wall:a.wall,side:a.side,u:o(a,r.centre),y:+r.centre[1].toFixed(4),text:r.text});for(const l of r.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:o(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const tw=["b","c","s","t","sh","hl"],h0=s=>!s||tw.every(t=>!s[t]);function u0(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const pd=s=>Math.min(1,Math.max(0,s));function ew(s,t){let e=Math.pow(s,t.gamma);e=pd(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return pd(e+t.sh*.25*n+t.hl*.25*i)}const nw=`
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
  }`;function iw(s){const t=u0(s);return{uAdj:{value:h0(s)?0:1},uWarm:{value:new L(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let ls=null;const md="http://www.w3.org/2000/svg";function sw(s,t){if(h0(t))return"";ls||(ls=document.createElementNS(md,"svg"),ls.setAttribute("width","0"),ls.setAttribute("height","0"),ls.style.position="absolute",document.body.append(ls));const e=`adj-${s}`;let n=ls.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(md,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),ls.append(n));const i=u0(t),[o,,r]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,f)=>ew(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${o} 0 0 0 0  0 1 0 0 0  0 0 ${r} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const gi=4,Bl=6,Yn=1024,ow=.035,wr=8;class rw{constructor(){R(this,"rt",new Vn(Yn*2,Yn*2,{depthBuffer:!0,magFilter:je,minFilter:je,generateMipmaps:!1}));R(this,"depth",new Wp({depthPacking:xm,side:ai}));R(this,"cam",new hn(60,1,.3,8));R(this,"uniforms",{uFLN:{value:0},uFLP:{value:Array.from({length:gi},()=>new L)},uFLD:{value:Array.from({length:gi},()=>new L(0,-1,0))},uFLC:{value:Array.from({length:gi},()=>new pt(1,1))},uFLI:{value:new Array(gi).fill(0)},uFSM:{value:Array.from({length:gi},()=>new ee)},uFTile:{value:Array.from({length:gi},()=>new Ie)},uFCam:{value:Array.from({length:gi},()=>new Ie)},uFAtlas:{value:this.rt.texture},uFAN:{value:0},uFA:{value:Array.from({length:wr},()=>new Ie)},uFAS:{value:Array.from({length:wr},()=>new L)}})}setLamps(t,e){const n=this.uniforms;n.uFLN.value=Math.min(gi,t.length),t.slice(0,gi).forEach((i,o)=>{n.uFLP.value[o].set(...i.p),n.uFLD.value[o].set(...i.d),n.uFLC.value[o].set(i.cOuter,i.cInner),n.uFLI.value[o]=i.i}),n.uFAN.value=Math.min(wr,e.length),e.slice(0,wr).forEach((i,o)=>{const r=Ae.degToRad(i.rot);n.uFA.value[o].set(i.x,i.z,Math.cos(r),Math.sin(r)),n.uFAS.value[o].set(i.hw,i.hd,i.k)})}render(t,e){const n=this.uniforms,i=this.cam,o=t.getRenderTarget(),r=e.overrideMaterial,a=e.background,l=t.getClearColor(new It),c=t.getClearAlpha(),h=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,e.overrideMaterial=this.depth,e.background=null,t.setClearColor(16777215,1),i.layers.set(Bl);for(let u=0;u<n.uFLN.value;u++){const f=n.uFLP.value[u],d=n.uFLD.value[u],p=Math.acos(Ae.clamp(n.uFLC.value[u].x,-1,1))+.05;i.fov=Ae.radToDeg(Math.min(1.45,p)*2),i.near=.3,i.far=8,i.position.copy(f),Math.abs(d.y)>.99?i.up.set(0,0,-1):i.up.set(0,1,0),i.lookAt(f.clone().add(d)),i.updateProjectionMatrix(),i.updateMatrixWorld();const m=u%2*Yn,x=Math.floor(u/2)*Yn;this.rt.viewport.set(m,x,Yn,Yn),this.rt.scissor.set(m,x,Yn,Yn),this.rt.scissorTest=!0,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),n.uFSM.value[u].multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),n.uFTile.value[u].set(m/(Yn*2),x/(Yn*2),.5,.5),n.uFCam.value[u].set(i.near,i.far,1/(2*Math.tan(Ae.degToRad(i.fov)/2)),0)}this.rt.scissorTest=!1,this.rt.viewport.set(0,0,Yn*2,Yn*2),t.setRenderTarget(o),t.setClearColor(l,c),e.overrideMaterial=r,e.background=a,t.shadowMap.autoUpdate=h}dispose(){this.rt.dispose(),this.depth.dispose()}}const f0=`
  #define MAXF ${gi}
  #define MAXA ${wr}
  #define FLENS ${ow.toFixed(3)}
  ${ue.packing}
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
`,Bi=16,Mo=48,Yr=new It(1,.84,.64),d0=.06,aw=.3,p0=.05,_u=4,lw=.6,m0=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,wu=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,g0=`
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
`,Su=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,bu=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),x0=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),v0=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function gd(s,t,e,n,i,o){const r=(a,l,c)=>{const h=a.slice(0,l);for(;h.length<l;)h.push(c());return h};return new Nn({uniforms:{uN:{value:Math.min(s.lamps.length,Bi)},uLP:{value:r(s.lamps.map(a=>a.p),Bi,()=>new L)},uLD:{value:r(s.lamps.map(a=>a.d),Bi,()=>new L(0,-1,0))},uLC:{value:r(s.lamps.map(a=>a.c),Bi,()=>new pt(1,1))},uLI:{value:r(s.lamps.map(a=>a.i),Bi,()=>0)},uB:{value:Math.min(s.boxes.length,Mo)},uBC:{value:r(s.boxes.map(a=>a.c),Mo,()=>new L(0,-99,0))},uBS:{value:r(s.boxes.map(a=>a.s),Mo,()=>new L)},uBL:{value:r(s.boxes.map(a=>a.lamp),Mo,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:d0},uBounceK:{value:_u},uLampK:{value:aw},uCeilK:{value:p0},...x0(i),uLCol:{value:Yr},...bu(n),...o.uniforms},vertexShader:g0,fragmentShader:`
      ${f0}
      #define MAXL ${Bi}
      #define MAXB ${Mo}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${v0}
      ${wu}
      ${m0}
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
        ${Su}
      }`})}function cw(s,t){return new Nn({uniforms:{uAmb:{value:p0},uBounceK:{value:_u},...x0(t),...bu(s)},vertexShader:g0,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${wu}
      ${v0}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${Su}
      }`})}const zh={value:1};function hw(s,t,e,n){return new Nn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:d0},uBounceK:{value:_u},uSpillK:{value:lw},uLCol:{value:Yr},uGlossK:zh,...bu(e),...n.uniforms},vertexShader:`
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
      ${wu}
      ${m0}
      ${f0}
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
        ${Su}
      }`})}function xd(s,t,e,n){return new Nn({uniforms:{uMap:{value:s},...iw(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new It(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Yr}},toneMapped:!1,vertexShader:`
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
      }`})}const or=.05,rr=.2;function uw(s,t,e){const n=s.inner,i=n.x1-n.x0,o=n.z1-n.z0,r=Math.ceil(i/or)+1,a=Math.ceil(o/or)+1,l=new Uint8Array(r*a),c=s.solids;for(let w=0;w<a;w++){const v=n.z0+w*or;for(let M=0;M<r;M++){const S=n.x0+M*or;let E=1;for(const _ of c){const b=Math.max(_.x0-S,0,S-_.x1),A=Math.max(_.z0-v,0,v-_.z1),C=b*b+A*A;C>1.44||(E*=1-.42*Math.exp(-Math.sqrt(C)/.28))}l[w*r+M]=Math.round(Math.max(0,Math.min(1,E))*255)}}const h=Math.ceil(i/rr)+1,u=Math.ceil(o/rr)+1,f=new Float32Array(h*u*4),d=Yr,p=t.map(w=>{const v=new It(w.face.color),S=(w.w+.5)*(w.h+1)*.7*.55;return{c:[w.centre[0]+w.normal[0]*.05,1.2,w.centre[2]+w.normal[2]*.05],n:w.normal,rgb:[v.r*d.r*S,v.g*d.g*S,v.b*d.b*S],lamp:w.lamp}});for(let w=0;w<u;w++){const v=n.z0+w*rr;for(let M=0;M<h;M++){const S=n.x0+M*rr;let E=0,_=0,b=0,A=0;for(const I of p){const U=S-I.c[0],F=v-I.c[2],k=U*U+F*F;if(k>64)continue;const Y=U*I.n[0]+F*I.n[2];if(Y>.02){const H=Math.max(k+I.c[1]*I.c[1],.3),P=Math.sqrt(H),V=Y/P*(I.c[1]/P)/(Math.PI*H);V>5e-4&&!Vs(s.solids,I.c[0],I.c[2],S,v)&&(E+=I.rgb[0]*V,_+=I.rgb[1]*V,b+=I.rgb[2]*V)}const X=I.lamp,et=S-X.p[0],G=-X.p[1],K=v-X.p[2],it=et*et+G*G+K*K,ft=Math.sqrt(it),B=(et*X.d[0]+G*X.d[1]+K*X.d[2])/ft;if(B>X.cOuter){const H=Math.min(1,(B-X.cOuter)/(X.cInner-X.cOuter)),P=H*H*(3-2*H),V=X.i*P*(X.p[1]/ft)/it;V>.002&&!Vs(s.solids,X.p[0],X.p[2],S,v)&&(A+=V)}}const C=(w*h+M)*4;f[C]=E,f[C+1]=_,f[C+2]=b,f[C+3]=A}}e==null||e.ao.dispose(),e==null||e.light.dispose();const m=new Fo(l,r,a,Il,In);m.magFilter=m.minFilter=un,m.needsUpdate=!0;const x=new Uint16Array(f.length);for(let w=0;w<f.length;w++)x[w]=lg.toHalfFloat(f[w]);const g=new Fo(x,h,u,Hn,Gn);g.magFilter=g.minFilter=un,g.needsUpdate=!0;const y=(w,v,M)=>new Ie(1/(w*v),1/(w*M),.5/v,.5/M);return{ao:m,light:g,origin:new pt(n.x0,n.z0),aoXf:y(or,r,a),lightXf:y(rr,h,u)}}const cn=.15,dn=8,Hi=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],ki=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Ca=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],vd=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],yd=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],fw=[0,1,0];class y0{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((r,a)=>this.v(r,e[a])),i=vd(Ca(t[2],t[0]),Ca(t[3],t[1])),o=Hi(Hi(e[0],e[1]),Hi(e[2],e[3]));yd(i,o)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));yd(vd(Ca(t[1],t[0]),Ca(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new Re;return t.setAttribute("position",new Gt(this.pos,3)),t.setAttribute("normal",new Gt(this.nor,3)),t.setAttribute("uv",new Gt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const M0=(s,t)=>s?cn:Math.max(0,Math.min(cn,t/2-.002));function dw(s,t,e){const n=new y0,i=[s.n[0],0,s.n[1]],o=s.axis==="x"?[1,0,0]:[0,0,1],r=(_,b,A)=>{const C=_s(s,_,A);return[C[0]+i[0]*b,A,C[2]+i[2]*b]},a=M0(s.outer,s.t),l=t-cn,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?cn:h==="free"?a:0),d=s.u1-(u==="in"?cn:u==="free"?a:0);if(d-f<.01)return n;const p=(_,b,A,C)=>{b-_<1e-4||C-A<1e-4||n.quad([r(_,0,A),r(b,0,A),r(b,0,C),r(_,0,C)],[i,i,i,i])},m=[...s.doors].sort((_,b)=>_[0]-b[0]);if(!m.length)p(f,d,0,l);else{let _=f;for(const[b,A]of m)p(_,Math.min(d,b-a),0,c),_=Math.max(_,A+a);p(_,d,0,c),p(f,d,c,l)}const x=(_,b,A,C)=>{if(a<.01)return;const I=U=>Hi(ki(i,Math.cos(U)),ki(b,Math.sin(U)));for(let U=0;U<dn;U++){const F=U/dn*Math.PI/2,k=(U+1)/dn*Math.PI/2,Y=(X,et)=>Hi(r(_,-a,et),ki(I(X),a));n.quad([Y(F,A),Y(k,A),Y(k,C),Y(F,C)],[I(F),I(k),I(k),I(F)])}},g=_=>[-_[0],-_[1],-_[2]];for(const[_,b]of m)_-s.u0>a+.01&&x(_-a,o,0,c),s.u1-b>a+.01&&x(b+a,g(o),0,c);h==="free"&&x(s.u0+a,g(o),0,t),u==="free"&&x(s.u1-a,o,0,t);const y=(_,b)=>{const A=Hi(Hi(r(_,0,0),ki(i,cn)),ki(b,cn)),C=U=>Hi(ki(i,Math.cos(U)),ki(b,Math.sin(U))),I=Math.PI/4;for(let U=0;U<dn/2;U++){const F=U/(dn/2)*I,k=(U+1)/(dn/2)*I,Y=(X,et)=>[A[0]-cn*C(X)[0],et,A[2]-cn*C(X)[2]];n.quad([Y(F,0),Y(k,0),Y(k,l),Y(F,l)],[C(F),C(k),C(k),C(F)]);for(let X=0;X<dn;X++){const et=X/dn*Math.PI/2,G=(X+1)/dn*Math.PI/2,K=(ft,B)=>{const H=C(ft);return[A[0]-cn*Math.cos(B)*H[0],l+cn*Math.sin(B),A[2]-cn*Math.cos(B)*H[2]]},it=(ft,B)=>{const H=C(ft);return[Math.cos(B)*H[0],-Math.sin(B),Math.cos(B)*H[2]]};n.quad([K(F,et),K(k,et),K(k,G),K(F,G)],[it(F,et),it(k,et),it(k,G),it(F,G)])}}};h==="in"&&y(s.u0,o),u==="in"&&y(s.u1,g(o));const w=h==="in"?s.u0+cn:f,v=u==="in"?s.u1-cn:d,M=(_,b)=>r(_,cn-cn*Math.cos(b),l+cn*Math.sin(b)),S=_=>Hi(ki(i,Math.cos(_)),ki(fw,-Math.sin(_)));for(let _=0;_<dn;_++){const b=_/dn*Math.PI/2,A=(_+1)/dn*Math.PI/2;n.quad([M(w,b),M(v,b),M(v,A),M(w,A)],[S(b),S(b),S(A),S(A)])}const E=(_,b)=>{const A=r(_,0,t);for(let C=0;C<dn;C++){const I=C/dn*Math.PI/2,U=(C+1)/dn*Math.PI/2;n.tri([A,M(_,I),M(_,U)],b)}};return h!=="in"&&E(w,g(o)),u!=="in"&&E(v,o),n}function pw(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new y0),e.get(a)),i=s.H,o=Math.min(s.doorH,i-cn),r=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(r(a.id)),h=(w,v,M)=>a.axis==="x"?[w,M,v]:[v,M,w],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=M0(a.outer,a.t),m=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],x=f+p,g=l?f+t:d-p,y=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(w=>w.wall===a.id).flatMap(w=>w.doors).filter((w,v,M)=>M.findIndex(S=>Math.abs(S[0]-w[0])<1e-6)===v);for(const[w,v]of y){const M=(_,b)=>{g-x>.001&&c.quad([h(_,x,0),h(_,g,0),h(_,g,o),h(_,x,o)],[b,b,b,b])};M(w,u),M(v,[-u[0],0,-u[2]]);const S=[0,-1,0],E=l?f+t:d;c.quad([h(w,f,o),h(v,f,o),h(v,E,o),h(w,E,o)],[S,S,S,S]);for(const{c:_,s:b}of m)for(const[A,C]of[[w,1],[v,-1]]){if(p<.01)continue;const I=A-C*p,U=_-b*p,F=h(A,_,o);for(let k=0;k<dn;k++){const Y=X=>{const et=X/dn*Math.PI/2;return h(I+C*p*Math.sin(et),U+b*p*Math.cos(et),o)};c.tri([F,Y(k),Y(k+1)],S)}}}if(!a.outer)for(const w of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(M,S)=>{d-p-(f+p)>.001&&c.quad([h(M,f+p,0),h(M,d-p,0),h(M,d-p,i),h(M,f+p,i)],[S,S,S,S])};w.freeA&&v(w.u0,[-u[0],0,-u[2]]),w.freeB&&v(w.u1,u)}}return e}const Md=new It(1,1,1),_0=.2,vl=2;function mw(s,t,e,n){const i=new me;s.background=Md,s.fog=null;const o=n.outline,r=o.t-_0,a=o.x0-o.t,l=o.x1+o.t,c=o.z0-o.t,h=o.z1+o.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,m=n.entrance.x+n.entrance.w/2,x=n.entrance.x,g=new tn({color:Md,toneMapped:!1}),y=(_,b,A,C,I,U)=>{const F=new St(new fn(C,I,U),g);return F.position.set(_,b,A),F.userData.outside=!0,F.layers.set(vl),i.add(F),F},w=-.5,v=d,M=(w+v)/2,S=v-w;y((a+p)/2,M,h-r/2,p-a,S,r),y((m+l)/2,M,h-r/2,l-m,S,r),y(x,(f+v)/2,h-r/2,m-p,v-f,r),y((a+l)/2,M,c+r/2,l-a,S,r),y(a+r/2,M,(c+h)/2,r,S,h-c-2*r),y(l-r/2,M,(c+h)/2,r,S,h-c-2*r),y((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const E=new St(new Ve(400,400).rotateX(-Math.PI/2),g);return E.position.y=-.002,E.layers.set(vl),i.add(E),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var C;const b=_;b.geometry&&b.geometry.dispose();const A=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const I of A)(C=I.map)==null||C.dispose(),I.dispose()})}}}class _d{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"uv",[]);R(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new Re;return t.setAttribute("position",new Gt(this.pos,3)),t.setAttribute("normal",new Gt(this.nor,3)),t.setAttribute("uv",new Gt(this.uv,2)),t.setIndex(this.idx),t}}const Gr=s=>new L(s[0],s[1],s[2]),w0=s=>({p:Gr(s.p),d:Gr(s.d),c:new pt(s.cOuter,s.cInner),i:s.i});function gw(s,t,e,n=[]){const i=t.filter(h=>h.face===s),o=i.map(h=>h.lamp),r=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(_s(s,u,f))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of a){const m=p[0]-h.p[0],x=p[1]-h.p[1],g=p[2]-h.p[2],y=Math.hypot(m,x,g);y>7||(m*h.d[0]+x*h.d[1]+g*h.d[2])/y<=h.cOuter||Vs(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,y))}d<1/0&&r.push({L:h,d})}r.sort((h,u)=>h.d-u.d);for(const h of r){if(o.length>=Bi)break;o.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=Bi))for(const f of h.items)c.length>=Mo||f.text||c.push({c:Gr(f.pos),s:new L(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:o.slice(0,Bi).map(w0),boxes:c,normal:new L(s.n[0],0,s.n[1]),right:new L(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const xw={lamps:[],boxes:[],normal:new L(0,0,1),right:new L(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function wd(s,t,e,n=[0,1,0,1]){const[i,o,r,a]=n,l=[],c=[],h=[],u=[],f=[],d=(S,E,_,b)=>{const A=l.length/3;S.forEach((C,I)=>{l.push(...C),c.push(...E),h.push(..._[I]),u.push(b)}),f.push(A,A+1,A+2,A,A+2,A+3)},p=s/2,m=t/2,x=.004,g=i+x,y=o-x,w=r+x,v=a-x;d([[-p,-m,e],[p,-m,e],[p,m,e],[-p,m,e]],[0,0,1],[[i,r],[o,r],[o,a],[i,a]],0),d([[-p,m,e],[p,m,e],[p,m,0],[-p,m,0]],[0,1,0],[[i,v],[o,v],[o,v],[i,v]],1),d([[-p,-m,0],[p,-m,0],[p,-m,e],[-p,-m,e]],[0,-1,0],[[i,w],[o,w],[o,w],[i,w]],1),d([[-p,-m,0],[-p,-m,e],[-p,m,e],[-p,m,0]],[-1,0,0],[[g,r],[g,r],[g,a],[g,a]],1),d([[p,-m,e],[p,-m,0],[p,m,0],[p,m,e]],[1,0,0],[[y,r],[y,r],[y,a],[y,a]],1);const M=new Re;return M.setAttribute("position",new Gt(l,3)),M.setAttribute("normal",new Gt(c,3)),M.setAttribute("uv",new Gt(h,2)),M.setAttribute("aSide",new Gt(u,1)),M.setIndex(f),M}function vw(s,t,e,n=[0,1,0,1]){const{face:i,depth:o,mat:r,lip:a,bevel:l}=ul,c=s/2,h=t/2,u=c+r+i,f=h+r+i,d=c+r,p=h+r,m=c+l,x=h+l,g=o-a,y=g-l,w=new It(p_[e.color]),v=new It(m_[e.mat]),M=new It(g_),S=[],E=[],_=[],b=[],A=[],C=[],I=G=>new L(G[0],G[1],G[2]),U=(G,K,it,ft=[[0,0],[0,0],[0,0],[0,0]])=>{const B=new L().crossVectors(I(G[1]).sub(I(G[0])),I(G[3]).sub(I(G[0]))).normalize();B.dot(I(K))<0&&(G=[G[0],G[3],G[2],G[1]],ft=[ft[0],ft[3],ft[2],ft[1]],B.negate());const H=S.length/3;G.forEach((P,V)=>{S.push(...P),E.push(B.x,B.y,B.z),_.push(...ft[V]),b.push(it?2:0),A.push(...it?[it.r,it.g,it.b]:[0,0,0])}),C.push(H,H+1,H+2,H,H+2,H+3)};U([[-u,p,o],[u,p,o],[u,f,o],[-u,f,o]],[0,0,1],w),U([[-u,-f,o],[u,-f,o],[u,-p,o],[-u,-p,o]],[0,0,1],w),U([[-u,-p,o],[-d,-p,o],[-d,p,o],[-u,p,o]],[0,0,1],w),U([[d,-p,o],[u,-p,o],[u,p,o],[d,p,o]],[0,0,1],w),U([[-u,f,0],[u,f,0],[u,f,o],[-u,f,o]],[0,1,0],w),U([[-u,-f,0],[u,-f,0],[u,-f,o],[-u,-f,o]],[0,-1,0],w),U([[-u,-f,0],[-u,f,0],[-u,f,o],[-u,-f,o]],[-1,0,0],w),U([[u,-f,0],[u,f,0],[u,f,o],[u,-f,o]],[1,0,0],w),U([[-d,p,g],[d,p,g],[d,p,o],[-d,p,o]],[0,-1,0],w),U([[-d,-p,g],[d,-p,g],[d,-p,o],[-d,-p,o]],[0,1,0],w),U([[-d,-p,g],[-d,p,g],[-d,p,o],[-d,-p,o]],[1,0,0],w),U([[d,-p,g],[d,p,g],[d,p,o],[d,-p,o]],[-1,0,0],w),U([[-d,x,g],[d,x,g],[d,p,g],[-d,p,g]],[0,0,1],v),U([[-d,-p,g],[d,-p,g],[d,-x,g],[-d,-x,g]],[0,0,1],v),U([[-d,-x,g],[-m,-x,g],[-m,x,g],[-d,x,g]],[0,0,1],v),U([[m,-x,g],[d,-x,g],[d,x,g],[m,x,g]],[0,0,1],v),U([[-m,x,g],[m,x,g],[c,h,y],[-c,h,y]],[0,-1,1],M),U([[-m,-x,g],[m,-x,g],[c,-h,y],[-c,-h,y]],[0,1,1],M),U([[-m,-x,g],[-m,x,g],[-c,h,y],[-c,-h,y]],[1,0,1],M),U([[m,-x,g],[m,x,g],[c,h,y],[c,-h,y]],[-1,0,1],M);const[F,k,Y,X]=n;U([[-c,-h,y],[c,-h,y],[c,h,y],[-c,h,y]],[0,0,1],null,[[F,Y],[k,Y],[k,X],[F,X]]);const et=new Re;return et.setAttribute("position",new Gt(S,3)),et.setAttribute("normal",new Gt(E,3)),et.setAttribute("uv",new Gt(_,2)),et.setAttribute("aSide",new Gt(b,1)),et.setAttribute("aCol",new Gt(A,3)),et.setIndex(C),et}function yw(s,t,e,n=[0,1,0,1]){const{strip:i,depth:o,gap:r,below:a}=fl,l=s/2,c=t/2,h=l+r,u=c+r,f=h+i,d=u+i,p=o-a,m=Math.max(.004,p-e),x=new It(x_),g=new It(v_),y=[],w=[],v=[],M=[],S=[],E=[],_=K=>new L(K[0],K[1],K[2]),b=(K,it,ft,B,H=[[0,0],[0,0],[0,0],[0,0]])=>{const P=new L().crossVectors(_(K[1]).sub(_(K[0])),_(K[3]).sub(_(K[0]))).normalize();P.dot(_(it))<0&&(K=[K[0],K[3],K[2],K[1]],H=[H[0],H[3],H[2],H[1]],P.negate());const V=y.length/3;K.forEach((D,z)=>{y.push(...D),w.push(P.x,P.y,P.z),v.push(...H[z]),M.push(ft),S.push(...B?[B.r,B.g,B.b]:[0,0,0])}),E.push(V,V+1,V+2,V,V+2,V+3)};b([[-f,u,o],[f,u,o],[f,d,o],[-f,d,o]],[0,0,1],2,x),b([[-f,-d,o],[f,-d,o],[f,-u,o],[-f,-u,o]],[0,0,1],2,x),b([[-f,-u,o],[-h,-u,o],[-h,u,o],[-f,u,o]],[0,0,1],2,x),b([[h,-u,o],[f,-u,o],[f,u,o],[h,u,o]],[0,0,1],2,x),b([[-f,d,0],[f,d,0],[f,d,o],[-f,d,o]],[0,1,0],2,x),b([[-f,-d,0],[f,-d,0],[f,-d,o],[-f,-d,o]],[0,-1,0],2,x),b([[-f,-d,0],[-f,d,0],[-f,d,o],[-f,-d,o]],[-1,0,0],2,x),b([[f,-d,0],[f,d,0],[f,d,o],[f,-d,o]],[1,0,0],2,x),b([[-h,u,0],[h,u,0],[h,u,o],[-h,u,o]],[0,-1,0],2,g),b([[-h,-u,0],[h,-u,0],[h,-u,o],[-h,-u,o]],[0,1,0],2,g),b([[-h,-u,0],[-h,u,0],[-h,u,o],[-h,-u,o]],[1,0,0],2,g),b([[h,-u,0],[h,u,0],[h,u,o],[h,-u,o]],[-1,0,0],2,g),b([[-h,c,m],[h,c,m],[h,u,m],[-h,u,m]],[0,0,1],2,g),b([[-h,-u,m],[h,-u,m],[h,-c,m],[-h,-c,m]],[0,0,1],2,g),b([[-h,-c,m],[-l,-c,m],[-l,c,m],[-h,c,m]],[0,0,1],2,g),b([[l,-c,m],[h,-c,m],[h,c,m],[l,c,m]],[0,0,1],2,g);const[A,C,I,U]=n,F=.004,k=A+F,Y=C-F,X=I+F,et=U-F;b([[-l,-c,p],[l,-c,p],[l,c,p],[-l,c,p]],[0,0,1],0,null,[[A,I],[C,I],[C,U],[A,U]]),b([[-l,c,p],[l,c,p],[l,c,m],[-l,c,m]],[0,1,0],1,null,[[A,et],[C,et],[C,et],[A,et]]),b([[-l,-c,m],[l,-c,m],[l,-c,p],[-l,-c,p]],[0,-1,0],1,null,[[A,X],[C,X],[C,X],[A,X]]),b([[-l,-c,m],[-l,-c,p],[-l,c,p],[-l,c,m]],[-1,0,0],1,null,[[k,I],[k,I],[k,U],[k,U]]),b([[l,-c,p],[l,-c,m],[l,c,m],[l,c,p]],[1,0,0],1,null,[[Y,I],[Y,I],[Y,U],[Y,U]]);const G=new Re;return G.setAttribute("position",new Gt(y,3)),G.setAttribute("normal",new Gt(w,3)),G.setAttribute("uv",new Gt(v,2)),G.setAttribute("aSide",new Gt(M,1)),G.setAttribute("aCol",new Gt(S,3)),G.setIndex(E),G}function Mw(s,t,e,n){const[i,o,r,a]=n??[0,0,1,1];let l=i,c=r,h=1-a,u=1-o;if(!e)return[l,c,h,u];const f=s/t,d=e[0]*(r-i)/(e[1]*(a-o));if(d>f){const p=f/d,m=(l+c)/2,x=(c-l)*p/2;l=m-x,c=m+x}else{const p=d/f,m=(h+u)/2,x=(u-h)*p/2;h=m-x,u=m+x}return[l,c,h,u]}const Pc=(s,t,e,n)=>{const i=new ee().makeBasis(Gr(e),new L(0,1,0),Gr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class _w{constructor(t,e){R(this,"map",new Map);R(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${pl(t)}|${t.medium}|${dl(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*Cr/To),o=S0(1024,i),r=o.getContext("2d");r.fillStyle="#f6f5f1",r.fillRect(0,0,1024,i),r.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,pl(t)]];for(const h of[t.medium,dl(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)r.font=h,l=ww(r,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return o})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Es(e()),n.colorSpace=He,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const S0=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function ww(s,t,e,n,i,o){let r="";for(const a of t.split(" ")){const l=r?r+" "+a:a;s.measureText(l).width>i&&r?(s.fillText(r,e,n),n+=o,r=a):r=l}return s.fillText(r,e,n),n+o}const Sw=s=>{const t=new It(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function bw(s,t,e,n){const i=S0(Math.ceil(t*ml),Math.ceil(e*ml)),o=i.getContext("2d");o.fillStyle=Sw(n)?"#eeede8":"#262625",o.textBaseline="alphabetic",o.font=`300 ${Pr}px ${gl}`,o.fillText(s.title,8,Pr*.8),s.sub&&(o.font=`400 ${xl}px ${gl}`,o.fillText(s.sub,10,Pr+n0+xl*.8));const r=new Es(i);return r.colorSpace=He,r.anisotropy=8,r}function Ew(s){const t=T_(s),e=R_(s,t).map(c=>new It(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let o=[];for(let c=0;c<i;c++)n[c]>=0&&o.push(c);for(;o.length;){const c=[];for(const h of o){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],c.push(f))}o=c}const r=new Uint8Array(i*4),a=new It(e0);for(let c=0;c<i;c++){const h=e[n[c]]??a;r[c*4]=Math.round(h.r*255),r[c*4+1]=Math.round(h.g*255),r[c*4+2]=Math.round(h.b*255),r[c*4+3]=255}const l=new Fo(r,t.nx,t.nz,Hn);return l.magFilter=l.minFilter=je,l.needsUpdate=!0,{tex:l,origin:new pt(t.x0,t.z0),scale:new pt(1/(t.nx*t.c),1/(t.nz*t.c))}}function Tw(s,t,e,n,i,o,r,a,l,c){const h=new me,u=s.H,f=Ew(s),d=[],p=[],m=[f.tex],x=(C,I)=>{p.push(C),d.push(I);const U=new St(C,I);return h.add(U),U},g=[];for(const C of s.faces){const I=dw(C,u,s.doorH);if(I.empty)continue;const U=x(I.geometry(),gd(gw(C,t,s),new It(C.color),u,e,f,l));U.userData.face=C,g.push(U)}for(const[C,I]of pw(s,_0))I.empty||x(I.geometry(),gd(xw,new It(C),u,e,f,l));const y=s.inner,w=s.entrance,v=new _d;v.add([[y.x0,0,y.z1],[y.x1,0,y.z1],[y.x1,0,y.z0],[y.x0,0,y.z0]],[0,1,0]),v.add([[w.a,0,w.z+.4],[w.b,0,w.z+.4],[w.b,0,w.z],[w.a,0,w.z]],[0,1,0]),x(v.geometry(),hw(r,a,e,l)).layers.set(1);const S=new _d;S.add([[y.x0,u,y.z0],[y.x1,u,y.z0],[y.x1,u,y.z1],[y.x0,u,y.z1]],[0,-1,0]),x(S.geometry(),cw(e,f));const E=[...t.map(C=>C.lamp.p),...c.map(C=>C.p)],_=E.length;if(_){const C=new Zi(.068,28).rotateX(Math.PI/2).translate(0,u-.0015,0),I=new Zi(.05,24).rotateX(Math.PI/2).translate(0,u-.0025,0),U=new Zi(.026,20).rotateX(Math.PI/2).translate(0,u-.0035,0),F=new tn({color:14276820,toneMapped:!1}),k=new tn({color:11842479,toneMapped:!1}),Y=new tn({color:new It(1,.94,.86),toneMapped:!1});Y.userData.lens=!0,p.push(C,I,U),d.push(F,k,Y);const X=new Io(C,F,_),et=new Io(I,k,_),G=new Io(U,Y,_),K=new ee;E.forEach((it,ft)=>{K.makeTranslation(it[0],0,it[2]),X.setMatrixAt(ft,K),et.setMatrixAt(ft,K),G.setMatrixAt(ft,K)}),h.add(X,et,G)}const b=[],A=[];o.begin();for(const C of t){const I=w0(C.lamp);for(const U of C.items){if(U.text){const H=bw(U.text,U.w,U.h,U.face.color);m.push(H);const P=x(new Ve(U.w,U.h),new tn({map:H,transparent:!0,depthWrite:!1,toneMapped:!1}));Pc(P,C.normal,C.right,[U.pos[0]+C.normal[0]*.002,U.pos[1],U.pos[2]+C.normal[2]*.002]),P.userData.title=U.id;continue}const F=U.work,k=F.kind==="paper"||F.kind==="digital"?new It().setRGB(.92,.91,.88):null,Y=xd(n(F.id),I,k,F.adjust),X=vu(F),et=F.w*Tn,G=F.h*Tn,K=Mw(et,G,i(F.id),F.crop),it=X?yu(X)?yw(et,G,xu[F.kind],K):vw(et,G,X,K):wd(U.w,U.h,U.depth,K),ft=x(it,Y);Pc(ft,C.normal,C.right,U.pos),ft.userData.work=F.id;const B={work:F,placed:C,mesh:ft,mat:Y,w:U.w,h:U.h,label:null};if(b.push(B),U.label){const H=x(wd(To,Cr,.003),xd(o.single(F),I,new It(.95,.95,.93)));Pc(H,C.normal,C.right,U.label.pos),H.userData.work=F.id,H.userData.label=!0,A.push(H),B.label=H}}}return o.end(),{group:h,pictures:b,labels:A,faceMeshes:g,dispose(){for(const C of p)C.dispose();for(const C of d)C.dispose();for(const C of m)C.dispose();h.traverse(C=>{const I=C;I.isInstancedMesh&&I.dispose()})}}}const ar=new L;function $n(s,t,e,n,i,o){const r=2*Math.PI*i/4,a=Math.max(o-2*i,0),l=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();const c=.5*r/(r+a),h=1-ar.angleTo(s)/l;return Math.sign(ar[e])===1?h*c:a/(r+a)+c+c*(1-h)}class ii extends fn{constructor(t=1,e=1,n=1,i=2,o=.1){const r=i*2+1;if(o=Math.min(t/2,e/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:o},r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,h=new L(t,e,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,m=new L,x=.5/r;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*o,u[g+1]=h.y*Math.sign(l.y)+c.y*o,u[g+2]=h.z*Math.sign(l.z)+c.z*o,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[y+0]=$n(m,c,"z","y",o,n),d[y+1]=1-$n(m,c,"y","z",o,e);break;case 1:m.set(-1,0,0),d[y+0]=1-$n(m,c,"z","y",o,n),d[y+1]=1-$n(m,c,"y","z",o,e);break;case 2:m.set(0,1,0),d[y+0]=1-$n(m,c,"x","z",o,t),d[y+1]=$n(m,c,"z","x",o,n);break;case 3:m.set(0,-1,0),d[y+0]=1-$n(m,c,"x","z",o,t),d[y+1]=1-$n(m,c,"z","x",o,n);break;case 4:m.set(0,0,1),d[y+0]=1-$n(m,c,"x","y",o,t),d[y+1]=1-$n(m,c,"y","x",o,e);break;case 5:m.set(0,0,-1),d[y+0]=$n(m,c,"x","y",o,t),d[y+1]=1-$n(m,c,"y","x",o,e);break}}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.segments,t.radius)}}function Aw(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new Re;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Sd(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<r[h].length;++m)d.push(r[h][m][f]);const p=Sd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Sd(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new An(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const m=h.getComponent(f,p);a.setComponent(f+u,p,m)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Eu(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),o=n?n.count:i.count;let r=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,w=a.length;y<w;y++){const v=a[y],M=s.attributes[v];l[v]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);const S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((E,_)=>{const b=new E.array.constructor(E.count*E.itemSize);c[v][_]=new E.constructor(b,E.itemSize,E.normalized)}))}const d=t*.5,p=Math.log10(1/t),m=Math.pow(10,p),x=d*m;for(let y=0;y<o;y++){const w=n?n.getX(y):y;let v="";for(let M=0,S=a.length;M<S;M++){const E=a[M],_=s.getAttribute(E),b=_.itemSize;for(let A=0;A<b;A++)v+=`${Math.trunc(_[u[A]](w)*m+x)},`}if(v in e)h.push(e[v]);else{for(let M=0,S=a.length;M<S;M++){const E=a[M],_=s.getAttribute(E),b=s.morphAttributes[E],A=_.itemSize,C=l[E],I=c[E];for(let U=0;U<A;U++){const F=u[U],k=f[U];if(C[k](r,_[F](w)),b)for(let Y=0,X=b.length;Y<X;Y++)I[Y][k](r,b[Y][F](w))}}e[v]=r,h.push(r),r++}}const g=s.clone();for(const y in s.attributes){const w=l[y];if(g.setAttribute(y,new w.constructor(w.array.slice(0,r*w.itemSize),w.itemSize,w.normalized)),y in c)for(let v=0;v<c[y].length;v++){const M=c[y][v];g.morphAttributes[y][v]=new M.constructor(M.array.slice(0,r*M.itemSize),M.itemSize,M.normalized)}}return g.setIndex(h),g}function Ei(s,t,e){let n=s*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Rw(s,t,e,n){const i=Math.floor(s),o=Math.floor(t),r=s-i,a=t-o,l=r*r*(3-2*r),c=a*a*(3-2*a),h=m=>(m%e+e)%e,u=Ei(h(i),h(o),n),f=Ei(h(i+1),h(o),n),d=Ei(h(i),h(o+1),n),p=Ei(h(i+1),h(o+1),n);return u+(f-u)*l+(d-u)*c+(u-f-d+p)*l*c}function No(s,t,e,n,i){let o=0,r=.5,a=0,l=e;for(let c=0;c<n;c++)o+=r*Rw(s*l,t*l,l,i+c*17),a+=r,r*=.5,l*=2;return o/a}function Ci(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Pi(s,t=!0,e=!0){const n=new Es(s);return t&&(n.colorSpace=He),e&&(n.wrapS=n.wrapT=Qa),n.anisotropy=8,n}function bd(s,t,e){const[i,o]=Ci(512),[r,a]=Ci(512),l=o.createImageData(512,512),c=a.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=u/512,d=h/512,p=No(f,d,3,4,e),m=No(f*.6,d*2.2,4,3,e+5),x=Math.max(0,No(f,d,5,4,e+9)-.52)*3.2,g=Ei(u,h,e)-.5;let y=.82+.34*(p-.5)*2*.5+.12*(m-.5)+.05*g;y=Math.max(.5,y);const w=Math.min(1,x),v=(h*512+u)*4;for(let S=0;S<3;S++)l.data[v+S]=Math.max(0,Math.min(255,(s[S]*(1-w)+t[S]*w)*y));l.data[v+3]=255;const M=128+60*(p-.5)+30*(m-.5)+14*g;c.data[v]=c.data[v+1]=c.data[v+2]=Math.max(0,Math.min(255,M)),c.data[v+3]=255}return o.putImageData(l,0,0),a.putImageData(c,0,0),{map:Pi(i),bump:Pi(r,!1)}}function Fh(s,t,e,n=1){const[r,a]=Ci(1024,256),l=a.createImageData(1024,256);for(let h=0;h<256;h++)for(let u=0;u<1024;u++){const f=u/1024,d=h/256,p=No(f,d,2,3,e)*3+No(f,d,8,2,e+3)*.35,m=.5+.5*Math.sin((d*38+p*4.2)*Math.PI*2*.5),x=Math.pow(m,3),g=Ei(Math.floor(u/2),h,e+7)>.93?.85:1,y=No(f*.5,d*6,4,3,e+11),w=.5+.5*Math.sin((d*210+p*9)*Math.PI);let v=.45*x*n+.3*y+.12*w*n+.08*(Ei(u,h,e)-.5);v=Math.max(0,Math.min(1,v));const M=(h*1024+u)*4;for(let S=0;S<3;S++)l.data[M+S]=(s[S]*(1-v)+t[S]*v)*g;l.data[M+3]=255}a.putImageData(l,0,0);const c=Pi(r);return c.repeat.set(2,1/.25),c}const Wr=16,b0=[["#c4492f","#f0e2c4","#1d1d1b"],["#2f4c6b","#e9d8a6","#c96f3b"],["#e7d9bd","#1e1e1e","#b8452f"],["#3e6250","#e8c766","#f2ede1"],["#1b1b1d","#d9a441","#efe8da"],["#8c3b4a","#f3dcc8","#233040"],["#d6b24c","#2b2b2b","#f4f0e6"],["#5d7f9b","#f2efe7","#1f2a36"],["#ece6d8","#c23b22","#2a2a2a"],["#31302e","#7fb0a6","#e9e1cf"],["#a8562f","#2e3b33","#efd9b4"],["#f1ece0","#3d5a80","#e07a3f"],["#20302a","#c9a227","#d9d2c3"],["#6b4f7a","#f0d7a1","#1c1c1c"],["#d9cfc1","#556b2f","#8b2e2e"],["#0f1a24","#e3e3e3","#d14b2b"]];function Cw(){const[t,e]=Ci(1024,1024);for(let i=0;i<Wr;i++){const o=i%4*256,r=Math.floor(i/4)*256,[a,l,c]=b0[i];e.save(),e.translate(o,r),e.beginPath(),e.rect(0,0,256,256),e.clip(),e.fillStyle=a,e.fillRect(0,0,256,256);const h=f=>Ei(i,f,99);switch(i%8){case 0:e.fillStyle=l,e.beginPath(),e.arc(256*.5,256*.55,256*.3,0,Math.PI*2),e.fill();break;case 1:for(let f=0;f<7;f++)e.fillStyle=f%2?l:c,e.fillRect(0,256*(.12+f*.11),256,256*.05);break;case 2:e.fillStyle=l,e.fillRect(256*.12,256*.12,256*.5,256*.76),e.fillStyle=c,e.fillRect(256*.66,256*.58,256*.22,256*.3);break;case 3:for(let f=0;f<5;f++)for(let d=0;d<5;d++)e.fillStyle=(d+f)%2?l:c,e.beginPath(),e.arc(256*(.18+d*.16),256*(.18+f*.16),256*.05,0,7),e.fill();break;case 4:{const f=e.createLinearGradient(0,0,0,256);f.addColorStop(0,l),f.addColorStop(1,a),e.fillStyle=f,e.fillRect(0,0,256,256),e.fillStyle=c,e.fillRect(256*.1,256*.78,256*.8,256*.03);break}case 5:e.strokeStyle=l,e.lineWidth=256*.035;for(let f=1;f<6;f++)e.beginPath(),e.arc(256*.3,256*.7,256*.11*f,0,Math.PI*2),e.stroke();break;case 6:e.fillStyle=l,e.beginPath(),e.moveTo(0,256),e.lineTo(256,0),e.lineTo(256,256),e.fill(),e.fillStyle=c,e.fillRect(256*.1,256*.1,256*.18,256*.18);break;case 7:e.fillStyle=l,e.fillRect(256*.08,256*.08,256*.84,256*.84),e.fillStyle=c,e.beginPath(),e.arc(256*(.3+h(1)*.4),256*(.3+h(2)*.4),256*.16,0,7),e.fill();break}e.fillStyle=i%3?c:l,e.globalAlpha=.85;for(let f=0;f<3+i%4;f++)e.fillRect(256*.1+f*256*.07,256*.06,256*.05,256*.02);e.globalAlpha=1,i%3===1&&(e.strokeStyle="rgba(255,255,255,0.13)",e.lineWidth=256*.03,e.beginPath(),e.arc(256/2,256/2,256*.46,0,7),e.stroke());const u=e.createRadialGradient(256/2,256/2,256*.45,256/2,256/2,256*.75);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(40,30,20,0.25)"),e.fillStyle=u,e.fillRect(0,0,256,256),e.restore()}return Pi(t,!0,!1)}const Pw=s=>b0[s%Wr][0];function Lw(s){const[e,n]=Ci(1024),[i,o]=Ci(1024),r=1024/2;n.fillStyle="#0b0b0c",n.fillRect(0,0,1024,1024);for(let h=r*.33;h<r*.985;h+=1.4){const u=Math.floor((h-r*.36)/(r*.12)),f=(h-r*.36)%(r*.12)<2.5&&h>r*.37;n.strokeStyle=f?"rgba(60,60,64,0.55)":`rgba(${18+u%2*4},${18+u%2*4},${20+u%2*4},0.9)`,n.lineWidth=.8,n.beginPath(),n.arc(r,r,h,0,Math.PI*2),n.stroke()}n.fillStyle=s,n.beginPath(),n.arc(r,r,r*.33,0,7),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=3,n.beginPath(),n.arc(r,r,r*.29,0,7),n.stroke(),n.fillStyle="rgba(20,20,20,0.7)";for(let h=0;h<4;h++)n.fillRect(r-r*.16,r-r*.18+h*r*.05,r*(.32-h*.05),r*.022);n.fillStyle="#d8d8d8",n.beginPath(),n.arc(r,r,r*.025,0,7),n.fill();const a=o.createImageData(1024,1024);for(let h=0;h<1024;h++)for(let u=0;u<1024;u++){const f=(u+.5-r)/r,d=(h+.5-r)/r,p=Math.hypot(f,d)||1,m=-d/p,x=-f/p,g=(h*1024+u)*4;a.data[g]=(m*.5+.5)*255,a.data[g+1]=(x*.5+.5)*255,a.data[g+2]=p>.34&&p<.985?255:0,a.data[g+3]=255}o.putImageData(a,0,0);const l=Pi(e,!0,!1),c=Pi(i,!1,!1);return{map:l,aniso:c}}function Iw(){const[e,n]=Ci(256,160),i=n.createRadialGradient(256*.5,160*.9,10,256*.5,160*.7,256*.75);i.addColorStop(0,"#ffd89a"),i.addColorStop(.6,"#f0a64a"),i.addColorStop(1,"#9a5a1e"),n.fillStyle=i,n.fillRect(0,0,256,160);const o=256/2,r=160*1.05,a=160*.82;n.lineWidth=2,n.strokeStyle="#2a1a0c",n.beginPath(),n.arc(o,r,a,Math.PI*1.25,Math.PI*1.62),n.stroke(),n.strokeStyle="#b0261a",n.lineWidth=4,n.beginPath(),n.arc(o,r,a,Math.PI*1.62,Math.PI*1.75),n.stroke(),n.strokeStyle="#2a1a0c",n.lineWidth=1.6;for(let l=0;l<=12;l++){const c=Math.PI*(1.25+.5*(l/12)),h=l%3?7:13;n.strokeStyle=c>Math.PI*1.62?"#b0261a":"#2a1a0c",n.beginPath(),n.moveTo(o+Math.cos(c)*a,r+Math.sin(c)*a),n.lineTo(o+Math.cos(c)*(a+h),r+Math.sin(c)*(a+h)),n.stroke()}return n.fillStyle="#2a1a0c",n.font='600 22px "Inter Tight", sans-serif',n.textAlign="center",n.fillText("VU",o,160*.62),Pi(e,!0,!1)}function Dw(){const[e,n]=Ci(1024,96),i=n.createLinearGradient(0,0,0,96);i.addColorStop(0,"#2a1d10"),i.addColorStop(.5,"#4a321a"),i.addColorStop(1,"#2a1d10"),n.fillStyle=i,n.fillRect(0,0,1024,96),n.fillStyle="#ffd59a",n.strokeStyle="#ffd59a",n.font='500 22px "Inter Tight", sans-serif',n.textAlign="center";for(let r=88;r<=108;r+=1){const a=60+(r-88)/20*904,l=r%4===0;n.globalAlpha=.9,n.lineWidth=l?2.2:1.2,n.beginPath(),n.moveTo(a,96*.62),n.lineTo(a,96*(l?.38:.48)),n.stroke(),l&&n.fillText(String(r),a,96*.3)}n.globalAlpha=.6,n.fillRect(40,96*.66,944,2),n.globalAlpha=1;const o=60+10/20*904;return n.fillStyle="#ff4a22",n.fillRect(o-2.5,6,5,84),Pi(e,!0,!1)}let Pa=null;function E0(){if(Pa)return Pa;const s=128,[t,e]=Ci(s),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.12,"rgba(255,255,255,0.55)"),n.addColorStop(.35,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),Pa=Pi(t,!1,!1),Pa}function Nw(s){const[e,n]=Ci(512),i=n.createImageData(512,512);for(let o=0;o<512;o++)for(let r=0;r<512;r++){const a=r-256,l=o-512/2,c=Math.round(Math.hypot(a,l)*2),h=200+40*(Ei(c,0,5)-.5)+10*(Ei(r,o,6)-.5),u=(o*512+r)*4;i.data[u]=i.data[u+1]=i.data[u+2]=h,i.data[u+3]=255}return n.putImageData(i,0,0),Pi(e,!1,!1)}const ys={w:1.48,d:2.11},_i=ys.w/2,Kn=ys.d/2,Ds=.64,lr=.99,La=.725,Zn=.8,Ka=.0235,_o=52*Ka,Ed=-_o/2,cs=.88,Td=1.04,Ad=.985,Lc=.6,oi={z:1.5,w:.76,d:.36},Ao={look:[0,.725,.96],pitch:-.58,near:.72,span:.64},Uw=[0,.9,-.1],Rd=s=>[1,3,6,8,10].includes(s%12);let Cd=null;function zw(){return{ebony:new Cn({color:"#141414",roughness:.16,clearcoat:1,clearcoatRoughness:.06}),satin:new Cn({color:"#0b0b0b",roughness:.4,clearcoat:.3}),ivory:new Cn({color:"#f1eee6",roughness:.28,clearcoat:.4,clearcoatRoughness:.2}),sharp:new Cn({color:"#0d0d0d",roughness:.32,clearcoat:.4}),gold:new ze({color:"#b98f34",metalness:.85,roughness:.36}),brass:new ze({color:"#c9a24a",metalness:1,roughness:.25}),steel:new ze({color:"#d4d4d2",metalness:1,roughness:.22}),copper:new ze({color:"#b5713a",metalness:1,roughness:.32}),pin:new ze({color:"#8a8a88",metalness:1,roughness:.3}),felt:new ze({color:"#141414",roughness:.9}),redFelt:new ze({color:"#5a1414",roughness:.95}),spruce:new ze({map:Fh([226,196,150],[196,160,112],31,.5),roughness:.6}),leather:new Cn({color:"#0e0e0e",roughness:.55,sheen:.4,sheenColor:new It("#555")}),paper:new ze({map:Ow(),roughness:.9})}}function Tu(){return Cd??(Cd=zw()),Cd}function ln(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(Bl),s}function vn(s,t,e,n){return s.position.set(t,e,n),s}const Ns=(s,t,e,n)=>ln(new St(new fn(s,t,e),n));function Fw(){const s=new kr([[-_i,-.62],[-.735,-.78],[-.69,-.9],[-.6,-.99],[-.46,-1.045],[-.3,-Kn],[-.16,-1.04],[-.02,-.99],[.12,-.9],[.25,-.77],[.35,-.6],[.43,-.4],[.5,-.18],[.58,.04],[.66,.24],[.715,.42],[.737,.58],[_i,.7]].map(([e,n])=>new L(e,0,n)),!1,"centripetal"),t=[[-_i,Zn]];for(const e of s.getSpacedPoints(110))t.push([e.x,e.z]);return t.push([_i,Zn]),t}function Pd(s,t){const e=s.length;let n=0;for(let o=0;o<e;o++){const r=s[o],a=s[(o+1)%e];n+=r[0]*a[1]-a[0]*r[1]}const i=n>0?1:-1;return s.map((o,r)=>{const a=s[(r-1+e)%e],l=s[(r+1)%e],c=[o[0]-a[0],o[1]-a[1]],h=[l[0]-o[0],l[1]-o[1]],u=Math.hypot(c[0],c[1])||1,f=Math.hypot(h[0],h[1])||1,d=[-c[1]/u*i,c[0]/u*i],p=[-h[1]/f*i,h[0]/f*i];let m=d[0]+p[0],x=d[1]+p[1];const g=Math.hypot(m,x)||1;m/=g,x/=g;const y=1/Math.max(.5,m*d[0]+x*d[1]);return[o[0]+m*t*y,o[1]+x*t*y]})}const cr=s=>new qr(s.map(([t,e])=>new pt(t,-e)));function hr(s,t,e,n=0){const i=new Nl(s,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:24,steps:1});return i.rotateX(-Math.PI/2),i.translate(0,t+n,0),i}function kw(s,t){let e=-Kn,n=!1;for(let i=0;i<s.length;i++){const o=s[i],r=s[(i+1)%s.length];if((o[0]-t)*(r[0]-t)>0||o[0]===r[0])continue;const a=(t-o[0])/(r[0]-o[0]),l=o[1]+(r[1]-o[1])*a;l<.5&&(!n||l>e)&&(e=l,n=!0)}return e}function Ow(){const s=document.createElement("canvas");s.width=512,s.height=360;const t=s.getContext("2d");t.fillStyle="#efe9da",t.fillRect(0,0,512,360),t.strokeStyle="rgba(40,36,30,0.85)",t.fillStyle="rgba(30,28,24,0.9)";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let o=0;o<6;o++){const r=40+o*52;t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(24,r+a*5),t.lineTo(488,r+a*5),t.stroke();for(let a=60;a<480;a+=14+n()*10){const l=r+Math.round(n()*12-2)*2.5;t.beginPath(),t.ellipse(a,l,3.4,2.5,-.4,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(a+3,l),t.lineTo(a+3,l-15),t.stroke()}for(let a=140;a<480;a+=116)t.beginPath(),t.moveTo(a,r),t.lineTo(a,r+20),t.stroke()}const i=new Es(s);return i.colorSpace=He,i.anisotropy=8,i}function Bw(){const s=Tu(),t=new me,e=Fw(),n=Pd(e,.035),i=cr(e);i.holes.push(new Do(n.map(([H,P])=>new pt(H,-P)).reverse())),t.add(ln(new St(hr(i,Ds,lr,.01),s.ebony))),t.add(ln(new St(hr(cr(e),Ds,Ds+.03),s.ebony))),t.add(ln(new St(hr(cr(n),.79,.8),s.spruce)));const o=Pd(e,.065),r=cr(o.filter(([,H])=>H<.74).concat([[o.at(-1)[0],.74],[o[0][0],.74]]));for(const[H,P,V,D]of[[-.36,-.68,.15,.13],[-.02,-.62,.13,.11],[-.38,-.24,.17,.12],[.16,-.26,.12,.13],[-.1,.06,.1,.07]]){const z=new Do;z.absellipse(H,-P,V,D,0,Math.PI*2,!0),r.holes.push(z)}for(let H=0;H<9;H++){const P=new Do;P.absarc(-.52+H*.13,-.3,.022,0,Math.PI*2,!0),r.holes.push(P)}t.add(ln(new St(hr(r,.875,.895,.003),s.gold)));const a=[],l=[],c=100,h=-.64,u=.66,f=.6,d=1024,p=Math.round(d*(Zn+Kn)/ys.w),m=document.createElement("canvas");m.width=d,m.height=p;const x=m.getContext("2d"),g=H=>(H+_i)/ys.w*d,y=H=>(H+Kn)/(Zn+Kn)*p;x.lineCap="round";for(const H of[0,1])for(let P=0;P<c;P++){const V=P/(c-1),D=h+(u-h)*V,z=P<22;if(H===0!=!z)continue;const W=z?D+.22+.1*(1-P/22):D,Q=kw(n,W)+.045;x.strokeStyle=z?"#c07a42":"#e6e6e2",x.lineWidth=z?2.4+1.6*(1-P/22):1.1+.5*(1-V),x.beginPath(),x.moveTo(g(D),y(f)),x.lineTo(g(W),y(Q)),x.stroke();for(const j of[.03,.075])a.push(new ee().makeTranslation(D+(j>.05?.004:-.004),.915,f+j));V<.78&&l.push(new ee().makeTranslation(D,.945,f-.13-(z?.05:0)))}const w=new Es(m);w.colorSpace=He,w.anisotropy=8;const v=new St(new Ve(ys.w,Zn+Kn).rotateX(-Math.PI/2),new ze({map:w,transparent:!0,metalness:.9,roughness:.28,depthWrite:!1}));v.position.set(0,.912,(Zn-Kn)/2),v.receiveShadow=!0,v.renderOrder=1,t.add(v);const M=new Io(new Qe(.0032,.0032,.03,8),s.pin,a.length);a.forEach((H,P)=>M.setMatrixAt(P,H));const S=new Io(new fn(.011,.04,.05),s.felt,l.length);l.forEach((H,P)=>S.setMatrixAt(P,H));for(const H of[M,S])H.castShadow=!0,H.receiveShadow=!0,H.layers.enable(Bl),t.add(H);t.add(vn(Ns(_o+.02,.006,.02,s.redFelt),0,.9,.7));const E=e.filter(([,H])=>H<.62),_=cr([[E[0][0],.62],...E,[E.at(-1)[0],.62]].map(([H,P])=>[H+_i,P])),b=ln(new St(hr(_,0,.022,.003),s.ebony)),A=new me;A.position.set(-_i,lr,0),A.rotation.z=Lc,A.add(b),t.add(A);const C=new L(.5,lr,-.1),I=1.18,U=new L(-_i+I*Math.cos(Lc),lr+I*Math.sin(Lc),-.1),F=ln(new St(new Qe(.009,.009,C.distanceTo(U),10),s.ebony));F.position.copy(C).add(U).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new L(0,1,0),U.clone().sub(C).normalize()),t.add(F);const k=new me;k.add(vn(Ns(.8,.29,.014,s.ebony),0,.145,0)),k.add(vn(Ns(.8,.02,.05,s.ebony),0,.01,.02));const Y=ln(new St(new Ve(.42,.29),s.paper));k.add(vn(Y,0,.165,.008)),k.rotation.x=-.26,k.position.set(0,lr,.7),t.add(k),t.add(vn(Ns(ys.w,.06,Kn-Zn,s.ebony),0,Ds+.03,(Kn+Zn)/2));for(const H of[-1,1]){const P=ln(new St(new ii(_i-_o/2,.17,Kn-Zn,3,.012),s.ebony));t.add(vn(P,H*(_i+_o/2)/2,Ds+.085,(Kn+Zn)/2))}t.add(vn(Ns(_o,.1,cs-Zn+.01,s.ebony),0,La+.04,(cs+Zn)/2)),t.add(vn(Ns(_o,.035,.015,s.ebony),0,La-.03,Kn-.0075));const X=new Map,et=new ii(Ka-.0011,.022,Td-cs,2,.0015).translate(0,-.011,(Td-cs)/2),G=new ii(.0125,.017,Ad-cs-.01,2,.002).translate(0,.0045,(Ad-cs-.01)/2+.01);let K=0;for(let H=21;H<=108;H++){let P;Rd(H)?(P=ln(new St(G,s.sharp)),P.position.set(Ed+K*Ka,La,cs)):(P=ln(new St(et,s.ivory)),P.position.set(Ed+(K+.5)*Ka,La,cs),K++),P.userData.key=H,X.set(H,P),t.add(P)}const it=new Ul([[.03,0],[.036,.05],[.038,.07],[.042,.25],[.05,.46],[.056,.56],[.068,.585],[.068,.6]].map(([H,P])=>new pt(H,P)),28);for(const[H,P]of[[-.62,.9],[.62,.9],[-.42,-.84]])t.add(vn(ln(new St(it,s.ebony)),H,.045,P)),t.add(vn(ln(new St(new Qe(.022,.022,.03,16).rotateZ(Math.PI/2),s.brass)),H,.022,P));for(const H of[-1,1])t.add(vn(Ns(.03,Ds-.14,.03,s.ebony),H*.07,.14+(Ds-.14)/2,.76));t.add(vn(ln(new St(new ii(.34,.09,.13,2,.01),s.ebony)),0,.09,.77));for(const H of[-.07,0,.07]){const P=ln(new St(new ii(.026,.008,.13,2,.003),s.brass));P.rotation.x=.12,t.add(vn(P,H,.07,.89))}const ft=new me;for(const[H,P]of[[-.33,-.14],[.33,-.14],[-.33,.14],[.33,.14]])ft.add(vn(ln(new St(new Qe(.022,.016,.45,14),s.ebony)),H,.225,P));ft.add(vn(ln(new St(new ii(oi.w,.07,oi.d,2,.008),s.ebony)),0,.46,0)),ft.add(vn(ln(new St(new ii(oi.w-.02,.045,oi.d-.02,4,.018),s.leather)),0,.51,0)),ft.position.z=oi.z,t.add(ft);const B=new Map;return{group:t,keys:X,press(H,P){X.has(H)&&B.set(H,P?1:0)},update(H){for(const[P,V]of B){const D=X.get(P),z=V?Rd(P)?.07:.06:0,W=V?60:22;D.rotation.x+=(z-D.rotation.x)*(1-Math.exp(-W*H)),!V&&Math.abs(D.rotation.x)<1e-4&&(D.rotation.x=0,B.delete(P))}}}}const ri=1.62,Hw=12,Vw=6.5,Gw=2,Ww=1.7,pi=1.15,Ia=.0022,Xw=2.6,qw=4.6,Rn=.3;class Yw{constructor(t){R(this,"pos",new L(6.6,ri,10.2));R(this,"vel",new L);R(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));R(this,"pitch",.05);R(this,"yawVel",0);R(this,"pitchVel",0);R(this,"keys",new Set);R(this,"taps",new Map);R(this,"frozen",!1);R(this,"glide",new pt);R(this,"spin",0);R(this,"goal",null);R(this,"moved",!1);R(this,"seated",!1);R(this,"onSeatedMove",()=>{});R(this,"solids",[]);R(this,"obstacles",[]);R(this,"boxes",[]);R(this,"world",{x0:-22,x1:39,z0:-38,z1:30});R(this,"mouseLooks",()=>!0);this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||!this.mouseLooks()||(this.yaw-=e.movementX*Ia,this.pitch=Math.max(-pi,Math.min(pi,this.pitch-e.movementY*Ia)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}edgeTurn(t,e){this.yaw-=t*Ia,this.pitch=Math.max(-pi,Math.min(pi,this.pitch-e*Ia)),this.moved=!0}drag(t,e){if(this.seated){this.onSeatedMove();return}this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-pi,Math.min(pi,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Gw-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*Ww-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>pi||this.pitch<-pi)&&(this.pitch=Math.max(-pi,Math.min(pi,this.pitch)),this.pitchVel=0);let o=0,r=0;this.seated||(e.has("KeyW")&&(o+=1),e.has("KeyS")&&(o-=1),e.has("KeyD")&&(r+=1),e.has("KeyA")&&(r-=1)),(o||r||n||i)&&(this.moved=!0);let a=0,l=0;if(o||r){const h=e.has("ShiftLeft")||e.has("ShiftRight")?qw:Xw,u=Math.hypot(o,r),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*o+d*r)/u*h,l=(-d*o-f*r)/u*h}const c=1-Math.exp(-(o||r?Hw:Vw)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const m=f/p,x=d/p,g=this.vel.x*m+this.vel.z*x;g<0&&(this.vel.x-=m*g,this.vel.z-=x*g)}}!this.frozen&&!this.seated&&this.coast(t),this.seated&&(this.vel.set(0,0,0),this.glide.set(0,0),this.goal=null)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,o=Math.hypot(n,i),r=1-Math.exp(-2.6*t),a=Math.min(o,Math.max(o*r,Math.min(o,.9*t)));if(o>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/o*a,this.pos.z+=i/o*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*r),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*r),o<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const o=(this.pos.x-n)/Math.max(t,1e-6),r=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(o,r).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let n=0;n<2;n++)for(const i of this.solids){const o=Math.max(i.x0,Math.min(t.x,i.x1)),r=Math.max(i.z0,Math.min(t.z,i.z1)),a=t.x-o,l=t.z-r,c=a*a+l*l;if(!(c>=Rn*Rn))if(c>1e-12){const h=Math.sqrt(c);t.x+=a/h*(Rn-h),t.z+=l/h*(Rn-h)}else{const h=[t.x-i.x0+Rn,i.x1-t.x+Rn,t.z-i.z0+Rn,i.z1-t.z+Rn],u=Math.min(...h);u===h[0]?t.x=i.x0-Rn:u===h[1]?t.x=i.x1+Rn:u===h[2]?t.z=i.z0-Rn:t.z=i.z1+Rn}}for(const n of this.obstacles){const i=t.x-n.x,o=t.z-n.z,r=Math.hypot(i,o),a=Rn*.7+n.r;r<a&&r>1e-6&&(t.x=n.x+i/r*a,t.z=n.z+o/r*a)}const e=Rn*.75;for(const n of this.boxes){const i=t.x-n.x,o=t.z-n.z,r=i*n.c-o*n.s,a=i*n.s+o*n.c,l=Math.max(-n.hw,Math.min(n.hw,r)),c=Math.max(-n.hd,Math.min(n.hd,a));let h=r-l,u=a-c;const f=Math.hypot(h,u);if(f>=e)continue;let d,p;if(f>1e-6)h/=f,u/=f,d=l+h*e,p=c+u*e;else{const m=[r+n.hw,n.hw-r,a+n.hd,n.hd-a],x=Math.min(...m);d=x===m[0]?-n.hw-e:x===m[1]?n.hw+e:r,p=x===m[2]?-n.hd-e:x===m[3]?n.hd+e:a}t.x=n.x+d*n.c+p*n.s,t.z=n.z-d*n.s+p*n.c}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const $w={couch:{name:"Couch",w:2.3,d:.98},table:{name:"Coffee table",w:1.2,d:.6},cabinet:{name:"Stereo cabinet",w:.62,d:.46},speakerL:{name:"Left speaker",w:.44,d:.5},speakerR:{name:"Right speaker",w:.44,d:.5},piano:{name:"Grand piano",w:ys.w,d:ys.d}},Da={couch:.38,table:.8,stereo:.085,piano:.5},Kw=.0254;let Qi=null;function T0(){const s=bd([36,64,56],[90,106,100],3),t=bd([42,74,60],[84,102,92],7),e=u=>new Cn({color:16777215,map:u.map,bumpMap:u.bump,bumpScale:.35,roughness:.93,sheen:1,sheenRoughness:.4,sheenColor:new It("#9fbdb4"),vertexColors:!0}),n=Fh([118,80,50],[74,47,29],11,.55),i=Fh([214,200,176],[184,166,138],21,.4),o=Cw(),r=Array.from({length:Wr},(u,f)=>{const d=o.clone();return d.repeat.set(.25,.25),d.offset.set(f%4*.25,1-(Math.floor(f/4)+1)*.25),new ze({map:d,roughness:.72})}),a=Array.from({length:Wr},(u,f)=>new ze({color:new It(Pw(f)).multiplyScalar(.8),roughness:.75})),l=Lw("#c8692c"),c=Nw(),h={side:ai};return{velvet:e(s),pillow:e(t),walnut:new Cn({map:n,roughness:.48,clearcoat:.3,clearcoatRoughness:.38}),birch:new ze({map:i,roughness:.66}),lacquer:new Cn({color:"#ecebe6",roughness:.3,clearcoat:.55,clearcoatRoughness:.16}),whiteMatte:new Cn({color:"#e8e6df",roughness:.48,clearcoat:.2,clearcoatRoughness:.3}),shadowGap:new ze({color:"#141414",roughness:.8}),steel:new ze({color:"#161616",metalness:.85,roughness:.4}),alu:new ze({color:"#cfcfcf",metalness:1,roughness:.3,roughnessMap:c}),chrome:new ze({color:"#e6e6e6",metalness:1,roughness:.1}),rubber:new ze({color:"#141414",roughness:.36,...h}),paper:new ze({color:"#3c3c3b",roughness:.62,...h}),cap:new ze({color:"#161616",roughness:.18,...h}),trim:new ze({color:"#1f1f21",metalness:.5,roughness:.42}),ring:new ze({color:"#a7a7a5",metalness:.25,roughness:.38,...h}),silk:new Cn({color:"#2b2b2b",roughness:.7,sheen:.6,sheenColor:new It("#777"),...h}),faceplate:new ze({color:"#232325",metalness:.3,roughness:.5,...h}),hole:new tn({color:"#050505"}),cord:new ze({color:"#0e0e0e",roughness:.45}),glass:new Cn({color:"#0b0b0d",roughness:.06,clearcoat:1,clearcoatRoughness:.05}),smoked:new Cn({color:"#0b0b0d",roughness:.05,transparent:!0,opacity:.45,depthWrite:!1}),record:new Cn({map:l.map,roughness:.3,anisotropy:.85,anisotropyMap:l.aniso,clearcoat:.3,clearcoatRoughness:.25}),vinylEdge:new ze({color:"#0a0a0a",roughness:.3}),covers:r,spines:a,vu:new tn({map:Iw(),color:new It(.62,.6,.58),toneMapped:!1}),dial:new tn({map:Dw(),color:new It(.55,.55,.55),toneMapped:!1}),invisible:new tn({visible:!1})}}function Zw(s){const t=[...Ml.values()].flatMap(e=>[e.cover,e.spine]);for(const e of Object.values(s))for(const n of Array.isArray(e)?e:[e])n.isMeshStandardMaterial&&t.push(n);return t}function ge(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(Bl),s}function jt(s,t,e,n){return s.position.set(t,e,n),s}function qi(s,t,e,n){return ge(new St(new fn(s,t,e),n))}function Au(s,t=!1){s.deleteAttribute("normal"),s.deleteAttribute("uv");const e=t?s:Eu(s,1e-5);return e.computeVertexNormals(),Jw(e),e}function Jw(s){const t=s.attributes.position,e=s.attributes.normal,n=new Float32Array(t.count*2);for(let i=0;i<t.count;i++){const o=Math.abs(e.getX(i)),r=Math.abs(e.getY(i)),a=Math.abs(e.getZ(i)),[l,c]=r>=o&&r>=a?[t.getX(i),t.getZ(i)]:o>=a?[t.getZ(i),t.getY(i)]:[t.getX(i),t.getY(i)];n[i*2]=l,n[i*2+1]=c}s.setAttribute("uv",new An(n,2))}function A0(s,t,e=.5){const n=[],i=s.length;for(let o=0;o<i;o++){const r=s[(o-1+i)%i],a=s[o],l=s[(o+1)%i],c=r[0]-a[0],h=r[1]-a[1],u=l[0]-a[0],f=l[1]-a[1],d=Math.hypot(c,h),p=Math.hypot(u,f),m=(c*u+h*f)/(d*p),x=Math.PI-Math.acos(Math.max(-1,Math.min(1,m)));if(x<e||d<1e-6||p<1e-6){n.push(a);continue}const g=Math.min(t/Math.tan((Math.PI-x)/2),d*.45,p*.45),y=[a[0]+c/d*g,a[1]+h/d*g],w=[a[0]+u/p*g,a[1]+f/p*g];for(let v=0;v<=6;v++){const M=v/6,S=1-M;n.push([S*S*y[0]+2*S*M*a[0]+M*M*w[0],S*S*y[1]+2*S*M*a[1]+M*M*w[1]])}}return n}function Ru(s,t,e,n,i=4){const o=new qr(s.map(([a,l])=>new pt(a,-l))),r=new Nl(o,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:i,curveSegments:8,steps:1});return r.rotateX(-Math.PI/2),r.translate(0,t+n,0),r}function Ms(s,t=64){const e=new Ul(s.map(([n,i])=>new pt(Math.max(n,0),i)),t);return e.rotateX(Math.PI/2),e}const yl=(s,t,e,n,i,o)=>Array.from({length:o+1},(r,a)=>{const l=n+(i-n)*a/o;return[s+e*Math.cos(l),t+e*Math.sin(l)]}),Cu={red:new It(1,.16,.06),green:new It(.25,1,.35),amber:new It(1,.62,.18),warm:new It(1,.72,.38)};function Ss(s,t,e,n,i,o=.0022,r=1){const a=Cu[i],l=new St(new Zi(o,16),new tn({color:a.clone().multiplyScalar(1.4*r).addScalar(.15*r),toneMapped:!1}));jt(l,t,e,n+6e-4);const c=new ru(new Dl({map:E0(),color:a.clone().multiplyScalar(.55*r),blending:Ja,depthWrite:!1,transparent:!0,toneMapped:!1}));return c.scale.setScalar(o*11),jt(c,t,e,n+.004),s.add(l,c),h=>{l.material.color.copy(a).multiplyScalar(1.4*h).addScalar(.15*h),c.material.color.copy(a).multiplyScalar(.55*h)}}function R0(s,t,e,n,i,o,r=.22){const a=new ru(new Dl({map:E0(),color:Cu[o].clone().multiplyScalar(r),blending:Ja,depthWrite:!1,transparent:!0,toneMapped:!1}));a.scale.set(i*2.2,i*1.5,1),jt(a,t,e,n+.01),s.add(a)}const re={a:1.15,zJ:-.03,zA:.4,zF:.49,T:.034,n:3,y0:.17,armH:.6,backH:.8,endR:.07,base:.3,seat:.455},Qw=re.zJ+.49;function jw(s){const t=[];for(let h=0;h<=40;h++)t.push([-1.15,re.zA-(re.zA-re.zJ)*h/40]);const e=2400;for(let h=1;h<e;h++){const u=Math.PI-Math.PI*h/e,f=Math.cos(u),d=Math.sin(u);t.push([re.a*Math.sign(f)*Math.pow(Math.abs(f),2/re.n),re.zJ-Qw*Math.pow(Math.abs(d),2/re.n)])}for(let h=0;h<=40;h++)t.push([re.a,re.zJ+(re.zA-re.zJ)*h/40]);const n=[0];for(let h=1;h<t.length;h++)n.push(n[h-1]+Math.hypot(t[h][0]-t[h-1][0],t[h][1]-t[h-1][1]));const i=n[n.length-1],o=Math.ceil(i/s),r=[],a=[];let l=0;for(let h=0;h<=o;h++){const u=i*h/o;for(;l<t.length-2&&n[l+1]<u;)l++;const f=(u-n[l])/Math.max(1e-9,n[l+1]-n[l]);r.push([t[l][0]+(t[l+1][0]-t[l][0])*f,t[l][1]+(t[l+1][1]-t[l][1])*f]),a.push(u)}const c=r.map((h,u)=>{const f=r[Math.max(0,u-1)],d=r[Math.min(r.length-1,u+1)],p=d[0]-f[0],m=d[1]-f[1],x=Math.hypot(p,m);return[m/x,-p/x]});return{p:r,n:c,s:a}}const Pu=(s,t)=>s.p.map(([e,n],i)=>[e-s.n[i][0]*t,n-s.n[i][1]*t]);function tS(s){const t=re.T,e=t/2,n=10,i=s.p.length-1,o=s.s[i],r=y=>{const w=s.p[y][1],v=Math.min(s.s[y],o-s.s[y]);let M=re.armH+(re.backH-re.armH)*(1-Ae.smoothstep(w,-.25,.3));return v<re.endR&&(M-=re.endR-Math.sqrt(Math.max(0,re.endR*re.endR-(re.endR-v)**2))),Math.max(M,re.y0+.12)},a=[],l=[],c=[],h=n+3;for(let y=0;y<=i;y++){const[w,v]=s.p[y],[M,S]=s.n[y],E=w-M*e,_=v-S*e,b=r(y),A=[[E+M*e,re.y0,_+S*e]];for(let I=0;I<=n;I++){const U=Math.PI*I/n;A.push([E+M*e*Math.cos(U),b-e+e*Math.sin(U),_+S*e*Math.cos(U)])}A.push([E-M*e,re.y0,_-S*e]);let C=0;A.forEach((I,U)=>{U&&(C+=Math.hypot(I[0]-A[U-1][0],I[1]-A[U-1][1],I[2]-A[U-1][2])),a.push(...I),l.push(s.s[y],C)})}for(let y=0;y<i;y++)for(let w=0;w<h-1;w++){const v=y*h+w,M=(y+1)*h+w,S=M+1,E=v+1;c.push(v,S,M,v,E,S)}const u=new Re;u.setAttribute("position",new Gt(a,3)),u.setAttribute("uv",new Gt(l,2)),u.setIndex(c),u.computeVertexNormals();const f=[],d=[],p=[],m=(y,w)=>{const v=f.length/3,M=y.reduce((S,E)=>[S[0]+E[0]/y.length,S[1]+E[1]/y.length,S[2]+E[2]/y.length],[0,0,0]);f.push(...M),p.push(M[0]+M[2],M[1]);for(const S of y)f.push(S[0],S[1],S[2]),p.push(S[0]+S[2],S[1]);for(let S=0;S<y.length;S++){const E=v+1+S,_=v+1+(S+1)%y.length,b=new L(...y[S]),A=new L(...y[(S+1)%y.length]),C=new L(...M);new L().crossVectors(b.clone().sub(C),A.clone().sub(C)).dot(new L(...w))>=0?d.push(v,E,_):d.push(v,_,E)}};for(const[y,w]of[[0,-1],[i,1]]){const v=s.p[Math.max(0,y-1)],M=s.p[Math.min(i,y+1)],S=Math.hypot(M[0]-v[0],M[1]-v[1]),E=[];for(let _=0;_<h;_++)E.push([a[(y*h+_)*3],a[(y*h+_)*3+1],a[(y*h+_)*3+2]]);m(E,[(M[0]-v[0])/S*w,0,(M[1]-v[1])/S*w])}for(let y=0;y<i;y++){const w=(M,S)=>[a[(M*h+S)*3],a[(M*h+S)*3+1],a[(M*h+S)*3+2]],v=f.length/3;for(const M of[w(y,0),w(y+1,0),w(y+1,h-1),w(y,h-1)])f.push(M[0],M[1],M[2]),p.push(M[0],M[2]);d.push(v,v+1,v+2,v,v+2,v+3)}const x=new Re;x.setAttribute("position",new Gt(f,3)),x.setAttribute("uv",new Gt(p,2)),x.setIndex(d),x.computeVertexNormals();const g=x.attributes.normal;for(let y=0;y<g.count;y++)if(Math.abs(g.getY(y))>.9&&g.getY(y)>0){x.index.array.reverse(),x.computeVertexNormals();break}return[u,x]}const eS=[90/36,106/64,100/56];function Hl(s,t){const e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){const o=Math.max(0,Math.min(1,t(e.getX(i),e.getY(i),e.getZ(i))))*.55;for(let r=0;r<3;r++)n[i*3+r]=1+o*(eS[r]-1)}s.setAttribute("color",new An(n,3))}const ms=(s,t)=>Math.exp(-(s*s)/(t*t));function nS(s,t){const i=t*.038000000000000006,o=Pu(s,re.T+.003+.034),r=re.zF+.015-.034,a=t<0?o.map((f,d)=>d):o.map((f,d)=>o.length-1-d),l=[[o[a[0]][0],r]];for(const f of a){const[d,p]=o[f];if(t*d<=t*i){l.push([i,p]);break}p<=r&&l.push([d,p])}l.push([i,r]);const c=Au(Ru(A0(l,.05),re.base,re.seat,.034,5)),h=c.attributes.position,u=t*.55;for(let f=0;f<h.count;f++){const d=h.getX(f),p=h.getY(f),m=h.getZ(f),x=Ae.smoothstep(p,re.seat-.06,re.seat),g=Math.max(0,1-((d-u)/.6)**2)*Math.max(0,1-((m-.05)/.5)**2),y=ms(d-u,.22)*ms(m-.18,.18);h.setY(f,p+x*(.016*g-.012*y))}return c.computeVertexNormals(),Hl(c,(f,d,p)=>(d>re.seat-.05?.8*ms(f-u,.25)*ms(p-.2,.2):0)+(p>re.zF-.04?.7*Ae.smoothstep(d,re.base+.04,re.seat-.03)*ms(f-u,.4):0)),c}function iS(s){const e=Pu(s,re.T+.002+.014),n=re.zF-.014,i=[[e[0][0],n],...e.filter(([,r])=>r<=n),[e[e.length-1][0],n]],o=Au(Ru(A0(i,.03),re.y0,re.base+.01,.014,3));return Hl(o,(r,a,l)=>l>re.zF-.03&&a<re.y0+.04?.6:0),o}function sS(s,t){const e=Pu(s,re.T+.002),n=e.reduce((I,U,F)=>Math.abs(U[0])<Math.abs(e[I][0])?F:I,0),i=[];if(t<0)for(let I=n;I>=0&&(i.push(I),!(e[I][1]>re.zJ+.1&&e[I][0]<0));I--);else for(let I=n;I<e.length&&(i.push(I),!(e[I][1]>re.zJ+.1&&e[I][0]>0));I++);const o=i.filter(I=>t*e[I][0]>.006),r=re.seat-.03,a=.77,l=(a-r)/2,c=(a+r)/2,h=.2,u=.115,f=36,d=.1;let p=0;const m=[0];for(let I=1;I<o.length;I++)p+=Math.hypot(e[o[I]][0]-e[o[I-1]][0],e[o[I]][1]-e[o[I-1]][1]),m.push(p);const x=[],g=[],y=[];o.forEach((I,U)=>{const[F,k]=e[I],[Y,X]=s.n[I],et=Math.min(m[U],p-m[U]),G=et>=d?1:Math.sqrt(Math.max(0,1-(1-et/d)**2));for(let K=0;K<f;K++){const it=K/f*Math.PI*2,ft=Math.cos(it),B=Math.sin(it),H=Math.sign(ft)*Math.pow(Math.abs(ft),.5),P=Math.sign(B)*Math.pow(Math.abs(B),.5),V=c+P*l,D=(V-r)/(a-r),z=(h+(u-h)*D)/2;let W=z+H*z+(H>0?H*.022*(1-P*P):0);const Q=.08,j=c+(V-c)*G;W=Q+(W-Q)*G,x.push(F-Y*W,j,k-X*W),g.push(m[U],K/f*.9)}});for(let I=0;I<o.length-1;I++)for(let U=0;U<f;U++){const F=I*f+U,k=(I+1)*f+U,Y=(I+1)*f+(U+1)%f,X=I*f+(U+1)%f;t<0?y.push(F,k,Y,F,Y,X):y.push(F,Y,k,F,X,Y)}const w=new Re;w.setAttribute("position",new Gt(x,3)),w.setAttribute("uv",new Gt(g,2)),w.setIndex(y);const v=Eu(w,1e-6);v.computeVertexNormals();const M=Math.floor(o.length/2),[S,E]=s.n[o[M]],_=v.attributes.normal,b=new L(x[M*f*3],x[M*f*3+1],x[M*f*3+2]);let A=0,C=1/0;for(let I=0;I<v.attributes.position.count;I++){const U=b.distanceToSquared(new L().fromBufferAttribute(v.attributes.position,I));U<C&&(C=U,A=I)}if(_.getX(A)*-S+_.getZ(A)*-E<0){const I=v.index.array;for(let U=0;U<I.length;U+=3){const F=I[U+1];I[U+1]=I[U+2],I[U+2]=F}v.index.needsUpdate=!0,v.computeVertexNormals()}return Hl(v,(I,U,F)=>.6*ms(I-t*.5,.3)*ms(U-.62,.1)*(F>-.35?1:.5)),v}function oS(s,t,e){const i=[],o=[];for(const h of[1,-1]){const u=i.length/3;for(let f=0;f<=22;f++)for(let d=0;d<=22;d++){const p=-1+2*d/22,m=-1+2*f/22,x=p*s/2*(1-.07*(1-m*m)),g=m*t/2*(1-.07*(1-p*p)),y=e/2*Math.pow(Math.max(0,(1-p**4)*(1-m**4)),.55)*h;i.push(x,g,y)}for(let f=0;f<22;f++)for(let d=0;d<22;d++){const p=u+f*23+d,m=p+1,x=p+22+2,g=p+22+1;h>0?o.push(p,m,x,p,x,g):o.push(p,x,m,p,g,x)}}const r=new Re;r.setAttribute("position",new Gt(i,3)),r.setIndex(o);const a=Eu(r,1e-6);a.computeVertexNormals();const l=a.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++)c[h*2]=l.getX(h)+(l.getZ(h)>0?0:.5),c[h*2+1]=l.getY(h);return a.setAttribute("uv",new An(c,2)),Hl(a,(h,u)=>.35*ms(Math.hypot(h,u),.15)),a}function rS(s){const t=new me,e=jw(.012),[n,i]=tS(e);t.add(ge(new St(n,s.walnut)),ge(new St(i,s.walnut))),t.add(ge(new St(iS(e),s.velvet)));for(const r of[-1,1]){t.add(ge(new St(nS(e,r),s.velvet))),t.add(ge(new St(sS(e,r),s.velvet)));const a=ge(new St(oS(.44,.44,.15),s.pillow));a.rotation.set(-.38,r*-.62,r*-.1,"YXZ"),jt(a,r*.76,.68,-.12),t.add(a)}const o=new Qe(.021,.0125,.18,20).translate(0,-.09,0);for(const[r,a]of[[-.98,.36],[.98,.36],[-.9,-.3],[.9,-.3]]){const l=ge(new St(o,s.walnut));l.rotation.set(a>0?-.09:.09,0,r<0?-.12:.12),jt(l,r,.178,a),t.add(l)}return t}const ci=.4;function aS(s,t,e){const n=t*.028,i=e*.022,o=ci-.038,r=new fu,a=new L(-.05,o,0),l=new L(n-.011,.028,i),c=new L(n+.011,.028,i),h=new L(.05,o,0);r.add(new Or(a,l)),r.add(new Up(l,new L(n-.009,.004,i),new L(n+.009,.004,i),c)),r.add(new Or(c,h));const u=new me;return u.add(ge(new St(new Vo(r,80,.0055,10),s.steel))),u.add(jt(qi(.13,.004,.055,s.steel),0,o+.001,0)),u}function lS(s){const t=new me,e=.06,n=.6,i=.3,o=[];for(const[a,l,c]of[[n-e,i-e,0],[-n+e,i-e,Math.PI/2],[-n+e,-i+e,Math.PI],[n-e,-i+e,Math.PI*1.5]])o.push(...yl(a,l,e,c,c+Math.PI/2,10));const r=Au(Ru(o,ci-.035,ci,.007,3));t.add(ge(new St(r,s.walnut)));for(const[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(jt(aS(s,a,l),a*(n-.11),0,l*(i-.075)));return t.add(jt(uS(s),cS,ci,-.01)),t.add(jt(mS(s),hS,ci,-.02)),t}const cS=-.2,hS=.24,Ld=[-.2+.12,ci+.035,-.01-.172];let kh=null;function uS(s){const t=new me;for(const[y,w]of[[-.19,-.14],[.19,-.14],[-.19,.14],[.19,.14]])t.add(jt(ge(new St(new Qe(.016,.017,.012,20),s.rubber)),y,.006,w));const e=.012+.075;t.add(jt(ge(new St(new ii(.44,.075,.34,3,.008),s.lacquer)),0,.012+.0375,0));const n=-.055,i=e+.003,o=new me;o.position.set(n,0,0),o.add(jt(ge(new St(new Qe(.15,.15,.022,96),s.alu)),0,i+.011,0));const r=[s.vinylEdge,s.record,s.vinylEdge],a=ge(new St(new Qe(.1515,.1515,.0018,128),r));o.add(jt(a,0,i+.022+9e-4,0)),o.add(jt(ge(new St(new Qe(.0036,.0036,.016,16),s.chrome)),0,i+.024+.008,0)),t.add(o);const l=.158,c=-.1,h=e+.046;t.add(jt(ge(new St(new Qe(.024,.026,.03,32),s.alu)),l,e+.015,c));const u=new me;u.position.set(l,0,c),u.add(jt(ge(new St(new Qe(.009,.011,.018,20),s.rubber)),0,e+.037,0));const f=new kr([new L(0,h,-.01),new L(.006,h-.002,.07),new L(.012,h-.004,.15),new L(-.004,h-.007,.215)]);u.add(ge(new St(new Vo(f,40,.0042,10),s.chrome)));const d=jt(qi(.018,.006,.042,s.rubber),-.008,h-.012,.232);d.rotation.y=.25,u.add(d);const p=ge(new St(new Qe(.017,.017,.032,28),s.alu));p.rotation.x=Math.PI/2,u.add(jt(p,0,h,-.05)),t.add(u),t.add(jt(ge(new St(new Qe(.004,.004,.034,12),s.chrome)),l+.024,e+.017,c+.19)),t.add(jt(ge(new St(new Qe(.014,.015,.012,32),s.alu)),-.175,e+.006,.13)),t.add(jt(qi(.022,.006,.012,s.whiteMatte),-.125,e+.003,.138)),t.traverse(y=>{y.userData.deck=!0});const m=new pt(-.012,.25),x=new pt(n-l,-c);return kh={spin:o,arm:u,record:a,armAt:y=>{let w=-1.2,v=0;for(let M=0;M<40;M++){const S=(w+v)/2,E=Math.cos(S),_=Math.sin(S),b=m.x*E+m.y*_,A=-m.x*_+m.y*E;Math.hypot(b-x.x,A-x.y)>y?v=S:w=S}return(w+v)/2},restRecord:r},t}const Id=new Map;function Oh(s){const t=`${s.id}|${s.v??0}`;let e=Id.get(t);if(e)return e;const n=Qi,i=n.record.map.image,o=document.createElement("canvas");o.width=i.width,o.height=i.height;const r=o.getContext("2d");r.drawImage(i,0,0);const a=new Es(o);a.colorSpace=He,a.anisotropy=8;const l=o.width/2;if(r.fillStyle=s.tint??"#c8692c",r.beginPath(),r.arc(l,l,l*.33,0,Math.PI*2),r.fill(),s.cover){const h=new Image;h.onload=()=>{r.save(),r.beginPath(),r.arc(l,l,l*.33,0,Math.PI*2),r.clip(),r.drawImage(h,l-l*.33,l-l*.33,l*.66,l*.66),r.restore(),r.fillStyle="#d8d8d8",r.beginPath(),r.arc(l,l,l*.025,0,Math.PI*2),r.fill(),a.needsUpdate=!0},h.src=`${s.cover}?v=${s.v??0}`}const c=new Cn({map:a,roughness:.3,anisotropy:.85,anisotropyMap:n.record.anisotropyMap,clearcoat:.3,clearcoatRoughness:.25,envMap:n.record.envMap});return e=[n.vinylEdge,c,n.vinylEdge],Id.set(t,e),e}function fS(s,t=.0034,e=.003){const n=t/2,i=s/2,o=6,r=8,a=[];for(const[w,v,M]of[[i-e,i-e,0],[e-i,i-e,Math.PI/2],[e-i,e-i,Math.PI],[i-e,e-i,1.5*Math.PI]])for(let S=0;S<=o;S++){const E=M+S/o*(Math.PI/2);a.push([w+Math.cos(E)*e,v+Math.sin(E)*e,Math.cos(E),Math.sin(E)])}const l=a.length,c=[],h=[],u=[],f=[];for(let w=0;w<=r;w++){const v=w/r*Math.PI,M=Math.sin(v),S=Math.cos(v);for(const[E,_,b,A]of a){const C=E-b*n*(1-M),I=_-A*n*(1-M);c.push(C,I,n*S);const U=[b*M,A*M,S];h.push(...U),u.push(C/s+.5,I/s+.5);const F=S>=0?Math.max(.35,Math.min(1.08,1+.2*U[1]-.4*(1-U[2]))):.55;f.push(F,F,F)}}const d=[],p=(w,v)=>v*l+(w+l)%l,m=(w,v)=>{for(let M=w;M<v;M++)for(let S=0;S<l;S++)d.push(p(S,M),p(S,M+1),p(S+1,M),p(S+1,M),p(S,M+1),p(S+1,M+1))},x=(w,v)=>{const M=a.map((I,U)=>new pt(c[p(U,w)*3],c[p(U,w)*3+1])),S=bi.triangulateShape(M,[]),[E,_,b]=S[0],C=(M[_].x-M[E].x)*(M[b].y-M[E].y)-(M[_].y-M[E].y)*(M[b].x-M[E].x)>0===v;for(const[I,U,F]of S)C?d.push(p(I,w),p(U,w),p(F,w)):d.push(p(I,w),p(F,w),p(U,w))},g=new Re;x(0,!0),m(0,r/2);const y=d.length;return m(r/2,r),x(r,!1),g.setIndex(d),g.setAttribute("position",new Gt(c,3)),g.setAttribute("normal",new Gt(h,3)),g.setAttribute("uv",new Gt(u,2)),g.setAttribute("color",new Gt(f,3)),g.addGroup(0,y,4),g.addGroup(y,d.length-y,5),g}function C0(s,t,e=.315,n){if(n){const{cover:r,spine:a,bright:l}=dS(n),c=ge(new St(fS(e),[a,a,a,a,r,a]));return c.userData.lit=r,c.userData.bright=l,c}const i=s.spines[t],o=s.covers[t];return ge(new St(new fn(e,e,.0034),[i,i,i,i,o,o]))}function Dd(s,t=!1){return s.onBeforeCompile=e=>{t&&(e.uniforms.uFanRel=s.userData.fanShade.rel,e.uniforms.uFanShade=s.userData.fanShade.shade,e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform mat4 uFanRel; uniform float uFanShade;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
        if (uFanShade > 0.0) {
          // where this point of the cover is on the album in front of it, less the light's offset: inside that one's
          // shadow (its rounded outline, a little lower and to the right, softening ${Ua.soft*1e3} mm out), darker
          vec2 p = vec2((vMapUv.x - 0.5) * ${Na.toFixed(4)}, vMapUv.y * ${Na.toFixed(4)});
          vec2 q = (uFanRel * vec4(p, 0.0, 1.0)).xy - vec2(${Ua.dx.toFixed(4)}, ${Ua.dy.toFixed(4)});
          vec2 b = abs(q - vec2(0.0, ${(Na/2).toFixed(4)})) - vec2(${(Na/2-.003).toFixed(4)});
          float d = length(max(b, 0.0)) + min(max(b.x, b.y), 0.0) - 0.003;
          float s = 1.0 - smoothstep(-0.001, ${Ua.soft.toFixed(4)}, d);
          diffuseColor.rgb *= 1.0 - uFanShade * s * s;
        }`)),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        float edgeHi = (1.0 - smoothstep(0.0, 0.010, 1.0 - vMapUv.y)) * 0.10;
        float edgeSh = (1.0 - smoothstep(0.0, 0.032, vMapUv.y)) * 0.18;
        diffuseColor.rgb = (diffuseColor.rgb + edgeHi) * (1.0 - edgeSh);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance = (totalEmissiveRadiance + edgeHi * emissiveIntensityEdge(totalEmissiveRadiance)) * (1.0 - edgeSh);
        #ifdef USE_COLOR
        totalEmissiveRadiance *= vColor.rgb;           // (the fold's shading, on its glow too)
        #endif`).replace("void main() {",`float emissiveIntensityEdge(vec3 e) { return min(1.0, max(e.r, max(e.g, e.b)) * 4.0); }
void main() {`)},s.customProgramCacheKey=()=>t?"sleeve-edge-fan":"sleeve-edge",t&&(s.userData.fanShade={rel:{value:new ee},shade:{value:0}}),s}const Na=.315,Ua={dx:.003,dy:-.0045,soft:.011},Nd=new Map,Ml=new Map;function dS(s){const t=`${s.id}|${s.cover??""}|${s.v??0}|${s.tint??""}`;let e=Ml.get(t);if(e)return e;const n=new ze({color:new It(s.tint??"#3a3a38").multiplyScalar(.85),roughness:.75});let i=n,o=n;if(s.cover){const r=`${s.cover}?v=${s.v??0}`;let a=Nd.get(r);a||(a=new hl().load(r),a.colorSpace=He,a.anisotropy=8,Nd.set(r,a)),i=Dd(new ze({map:a,roughness:.7,emissive:16777215,emissiveMap:a,emissiveIntensity:0,vertexColors:!0})),o=Dd(new tn({map:a,toneMapped:!1,vertexColors:!0}),!0)}return e={cover:i,spine:n,bright:o},Ml.set(t,e),e}let _l=[];const P0=26,ws={hw:.125,z0:-.07,lean:.18,N:P0,pitch:.0059,r:.0028},L0=s=>ws.z0+s*ws.pitch/Math.cos(ws.lean),pS=L0(ws.N-1)+.035;function za(s,t,e=!1){const n=new fu,i=.012,o=t.length,r=l=>t[(l+o)%o];let a=e?r(0).clone().lerp(r(1),.5):r(0).clone();for(let l=1;l<(e?o+1:o-1);l++){const c=r(l-1),h=r(l),u=r(l+1),f=h.clone().add(c.clone().sub(h).setLength(Math.min(i,c.distanceTo(h)/2))),d=h.clone().add(u.clone().sub(h).setLength(Math.min(i,u.distanceTo(h)/2)));n.add(new Or(a,f)),n.add(new uu(f,h,d)),a=d}return n.add(new Or(a,e?r(0).clone().lerp(r(1),.5):r(o-1))),ge(new St(new Vo(n,160,ws.r,8),s.steel))}let wl=[],Bh=null;function mS(s){const t=new me,{hw:e,r:n,lean:i}=ws,o=n,r=ws.z0-.006,a=pS,l=.2,c=.1,h=(p,m,x)=>new L(p,m,x),u=p=>r-Math.tan(i)*p;t.add(za(s,[h(-e,o,r),h(-e,l,u(l)),h(e,l,u(l)),h(e,o,r)])),t.add(za(s,[h(-e,o,a),h(-e,c,a),h(e,c,a),h(e,o,a)]));for(const p of[-1,1])t.add(za(s,[h(p*e,o,r),h(p*e,o,a)]));for(const p of[r+.03,(r+a)/2,a-.03])t.add(za(s,[h(-e,o,p),h(e,o,p)]));wl=[];const f=[],d=Math.min(_l.length,ws.N);for(let p=0;p<d;p++){const m=y=>Math.sin(p*12.9898+y*78.233)*.5,x=_l[d-1-p],g=C0(s,0,.315,x);g.userData.album=x.id,g.geometry.translate(0,.315/2,0),g.rotation.set(-(i+m(1)*.03),m(3)*.02,0),jt(g,m(4)*.008,2*n+Math.abs(m(2))*.004,L0(p)),g.userData.records=!0,t.add(g),f.unshift({mesh:g,rest:g.rotation.clone(),base:g.position.clone()})}return wl=f,Bh=t,t.traverse(p=>{p.userData.records=!0}),t}const fs=.25*Kw,wo=.72,Ud=-.79,Bo={needles:[],bar:[]},En={W:.62,D:.46,t:.022,plinth:.1,lp:.4,back:.008,setback:.003},I0=[[.15,yS],[.13,D0],[.09,MS],[.13,_S]],gS=En.plinth+En.t+2*(En.lp+En.t)+I0.reduce((s,[t])=>s+t+2*fs+En.t,0);function zd(s,t,e,n,i,o=[]){let r=-.286;for(let a=0;a<n;a++){const l=(a*5+i)%Wr,c=a<n-6?0:.06+(a-(n-6))*.05,h=C0(t,l,.315,o[a]);h.geometry.rotateY(Math.PI/2).translate(.0017,.315/2,0),h.rotation.z=-c,jt(h,r,e,-.035),s.add(h),r+=.0052/Math.cos(c)+(a>=n-6?4e-4:0)}}function xS(s){Bo.needles=[],Bo.bar=[];const t=new me,{W:e,D:n,t:i,plinth:o}=En,r=gS,a=e-2*i;t.add(jt(qi(e-.06,o,n-.06,s.shadowGap),0,o/2,-.01));for(const d of[-1,1])t.add(jt(qi(i,r-o,n,s.lacquer),d*(e/2-i/2),(r+o)/2,0));t.add(jt(qi(a,r-o-i,En.back,s.lacquer),0,(r+o)/2,-n/2+En.back/2));const l=d=>t.add(jt(qi(a,i,n-En.back,s.lacquer),0,d+i/2,En.back/2));let c=o;l(c),c+=i;const h=_l.slice(P0);zd(t,s,c,44,1,h.slice(40)),c+=En.lp,l(c),c+=i,zd(t,s,c,40,4,h.slice(0,40)),c+=En.lp,l(c),c+=i;const u=a-2*fs,f=n-En.back-En.setback-.03;for(const[d,p]of I0){const m=new me;for(const[g,y]of[[-u/2+.04,-f/2+.04],[u/2-.04,-f/2+.04],[-u/2+.04,f/2-.04],[u/2-.04,f/2-.04]])m.add(jt(ge(new St(new Qe(.012,.014,fs,16),s.rubber)),g,fs/2,y));m.add(jt(ge(new St(new ii(u,d,f,2,.003),s.whiteMatte)),0,fs+d/2,0));const x=new me;if(jt(x,0,fs+d/2,f/2),p(x,u,d),m.add(x),jt(m,0,c,n/2-En.setback-f/2),t.add(m),p===D0){const g=new qp(Cu.warm,.012,.9,2);g.layers.enable(5),jt(g,-u/2+.1,c+fs+d/2,n/2+.04),t.add(g)}c+=d+2*fs,l(c),c+=i}return t}const Sl=(s,t,e)=>{const n=ge(new St(new Qe(t,t*1.04,e,40),s.alu));return n.rotation.x=Math.PI/2,n};function vS(s,t,e){return new St(new Ve(t,e),s.glass)}function yS(s,t,e){const n=Qi;s.add(jt(Sl(n,.018,.012),-t/2+.05,-.01,.006));const i=vS(n,.16,.012);s.add(jt(i,.06,.02,8e-4));for(let o=0;o<12;o++)Bo.bar.push(Ss(s,-.01+o*.0125,.02,.001,o<7?"amber":"red",.0028,o<7?.45:.08));Ss(s,t/2-.04,-.035,5e-4,"red",.0022);for(let o=0;o<6;o++)s.add(jt(new St(new Ve(.22,.0016),n.shadowGap),.05,-.03-o*.006,6e-4))}function D0(s,t,e){const n=Qi;for(const i of[0,1]){const o=-t/2+.06+i*.088;s.add(jt(new St(new Ve(.084,.056),n.trim),o,.012,6e-4)),s.add(jt(new St(new Ve(.076,.048),n.vu),o,.012,.0012)),R0(s,o,.012,.0012,.08,"warm",.16);const r=new St(new Ve(9e-4,.03).translate(0,.027,0),new tn({color:"#140f08",toneMapped:!1}));r.position.set(o,.012-.024-.0024,.0016),r.rotation.z=wo,s.add(r),Bo.needles.push(r)}s.add(jt(Sl(n,.03,.022),t/2-.065,.006,.011));for(let i=0;i<3;i++)s.add(jt(Sl(n,.009,.012),-.01+i*.038,-.04,.006));for(let i=0;i<4;i++)Ss(s,.03+i*.016,.042,5e-4,"green",.0018,i===1?1:.06);Ss(s,-t/2+.02,-.045,5e-4,"red",.0022)}function MS(s,t,e){const n=Qi;s.add(jt(new St(new Ve(.29,.038),n.trim),-.045,.01,6e-4)),s.add(jt(new St(new Ve(.28,.03),n.dial),-.045,.01,.0012)),R0(s,-.045,.01,.0012,.22,"warm",.1),s.add(jt(Sl(n,.02,.018),t/2-.05,.002,.009)),Ss(s,-t/2+.03,-.028,5e-4,"red",.002),Ss(s,-t/2+.045,-.028,5e-4,"green",.002)}function _S(s,t,e){const n=Qi;s.add(jt(new St(new Ve(.16,.08),n.trim),-t/2+.1,.012,6e-4));const i=new St(new Ve(.15,.072),new tn({color:new It(.05,.04,.03),toneMapped:!1}));s.add(jt(i,-t/2+.1,.012,.001));const o=new St(new Ve(.1,.06),new tn({color:new It(.3,.24,.16),toneMapped:!1}));s.add(jt(o,-t/2+.1,.012,.0013));for(const r of[-1,1])s.add(jt(new St(new Zi(.011,20),new tn({color:"#050505"})),-t/2+.1+r*.026,.014,.0016));s.add(jt(new St(new Ve(.15,.072),n.smoked),-t/2+.1,.012,.002));for(let r=0;r<2;r++)for(let a=0;a<12;a++){const l=a<8?"green":a<10?"amber":"red";Ss(s,.02+a*.0105,.035-r*.012,5e-4,l,.0026,a<5-r?.5:.05)}for(let r=0;r<6;r++)s.add(jt(qi(.022,.012,.006,n.whiteMatte),.025+r*.026,-.03,.003));Ss(s,t/2-.025,.04,5e-4,"red",.0022)}const Hh={W:.44,D:.5,H:1.92,plinth:.03};function Fd(s,t){const e=new me;e.add(ge(new St(Ms([[.098*t,-.001],[.098*t,.004],[.112*t,.0045],[.115*t,.002],[.115*t,-.001]]),s.ring)));const n=yl(.091*t,5e-4,.0072*t,Math.PI,0,14).map(([r,a])=>[r,a]);e.add(ge(new St(Ms(n),s.rubber)));const i=[];for(let r=0;r<=12;r++){const a=r/12;i.push([.084*t-.049*t*a,-.044*t*Math.pow(a,.85)])}e.add(ge(new St(Ms(i.reverse()),s.paper)));const o=yl(0,-.044*t,.035*t,Math.PI/2,0,10).map(([r,a])=>[r*1,-.044*t+(a+.044*t)*.55]);e.add(ge(new St(Ms(o.reverse()),s.cap)));for(let r=0;r<8;r++){const a=r/8*Math.PI*2+.3,l=new St(new Qe(.0032*t+8e-4,.0032*t+8e-4,.002,10),s.trim);l.rotation.x=Math.PI/2,e.add(jt(l,Math.cos(a)*.1065*t,Math.sin(a)*.1065*t,.005))}return e}function wS(s,t){const e=new me,n=i=>i.map(([o,r])=>[o*t,r*t]);return e.add(ge(new St(Ms(n([[.014,-.004],[.017,0],[.022,.003],[.046,.0045],[.05,.0025],[.05,-.001]])),s.faceplate))),e.add(ge(new St(Ms(n([[.047,.0046],[.05,.0028],[.0505,-.001]])),s.ring))),e.add(ge(new St(Ms(n(yl(0,0,.0145,Math.PI/2,0,12).map(([i,o])=>[i,o*.8-.001]).reverse())),s.silk))),e}function kd(s){const t=new me,{W:e,D:n,H:i,plinth:o}=Hh;t.add(jt(qi(e-.04,o,n-.04,s.shadowGap),0,o/2,0));const r=ge(new St(new fn(e,i,n),[s.lacquer,s.lacquer,s.lacquer,s.lacquer,s.invisible,s.lacquer]));t.add(jt(r,0,o+i/2,0));const a=[[1.7,.06,"t"],[1.47,.085,"m"],[1.14,.13,"w"],[.8,.13,"w"],[.46,.13,"w"],[.17,.05,"p"]],l=new qr([new pt(-e/2,0),new pt(e/2,0),new pt(e/2,i),new pt(-e/2,i)]);for(const[h,u]of a){const f=new Do;f.absarc(0,h,u,0,Math.PI*2,!0),l.holes.push(f)}const c=ge(new St(new du(l,48),s.lacquer));t.add(jt(c,0,o,n/2));for(const[h,,u]of a){let f;if(u==="w")f=Fd(s,1.3);else if(u==="m")f=Fd(s,.85);else if(u==="t")f=wS(s,1.3);else{f=new me,f.add(ge(new St(Ms([[.058,-.001],[.058,.0025],[.05,.005],[.045,0],[.0425,-.012],[.0425,-.18]]),s.rubber)));const d=new St(new Zi(.044,24),s.hole);f.add(jt(d,0,0,-.18))}t.add(jt(f,0,o+h,n/2))}t.add(jt(new St(new Ve(e-.02,i-.02),s.hole),0,o+i/2,n/2-.2));for(const h of[-1,1])for(const u of[.12,.7,1.3,1.85])t.add(jt(new St(new Zi(.0045,14),s.hole),h*(e/2-.025),o+u,n/2+6e-4));return t}function N0(s,t,e,n){const i=new L(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));return s.clone().addScaledVector(i,-n)}const Ic=s=>Math.atan2(-s.x,-s.z),po=s=>new ee().makeRotationY(Ae.degToRad(s.rot)).setPosition(s.x,0,s.z),Ne=(s,t)=>new L(...t).applyMatrix4(s);function Fa(s,t,e,n,i){const o=s.clone().sub(t),r=o.length();return o.divideScalar(r),{p:[t.x,t.y,t.z],d:[o.x,o.y,o.z],cInner:Math.cos(n),cOuter:Math.cos(n+i),i:e*r*r}}function SS(s,t=[]){Qi??(Qi=T0());const e=Qi;_l=t.filter(E=>!E.off&&E.tracks.length+(E.cover?1:0)>0),kh=null,Bh=null,wl=[];const n=()=>new Set([...Object.values(e).flat(),...Object.values(Tu()),...[...Ml.values()].flatMap(E=>[E.cover,E.spine,E.bright])]),i=new me,o=new Map((s.pieces??[]).map(E=>[E.id,E])),r=[],a=[],l=[],c=s.ceiling-.03;let h=null,u=null,f=null;const d=[];let p=null,m=null,x=null;const g={couch:()=>rS(e),table:()=>lS(e),cabinet:()=>xS(e),speakerL:()=>kd(e),speakerR:()=>kd(e),piano:()=>(h=Bw(),h.group)},y={couch:.45,table:.22,cabinet:.8,speakerL:.8,speakerR:.8,piano:.22},w=(E,_)=>new L(..._).transformDirection(E);for(const[E,_]of Object.entries($w)){const b=o.get(E);if(!b)continue;const A=po(b),C=g[E]();C.matrixAutoUpdate=!1,C.matrix.copy(A),C.userData.piece=E,C.traverse(U=>{U.userData.piece=E}),i.add(C);const I=Ae.degToRad(b.rot);if(l.push({x:b.x,z:b.z,c:Math.cos(I),s:Math.sin(I),hw:_.w/2,hd:_.d/2}),a.push({x:b.x,z:b.z,rot:b.rot,hw:_.w/2,hd:_.d/2,k:y[E]}),E==="couch"&&(p=Fa(Ne(A,[0,.5,-.02]),Ne(A,[0,c,.55]),Da.couch,.32,.18),r.push(p),m=Ne(A,[0,.45,0])),E==="table"&&r.push(Fa(Ne(A,[0,ci+.08,0]),Ne(A,[0,c,.85]),Da.table,.2,.16)),E==="cabinet"&&r.push(Fa(Ne(A,[0,.75,-.05]),Ne(A,[0,c,2.2]),Da.stereo,.27,.2)),E==="piano"&&r.push(Fa(Ne(A,[0,.8,.3]),Ne(A,[.55,c,1.05]),Da.piano,.42,.2)),E==="couch"){const U=w(A,[0,0,1]);for(const F of[0])d.push({eye:Ne(A,[F,1.08,.36]),yaw:Ic(U),pitch:-.06,stand:Ne(A,[F*.8,ri,.86]),standYaw:Ic(U)})}if(E==="piano"){const U=w(A,[0,0,-1]),F=Ne(A,Ao.look),k=Ic(U);f={eye:N0(F,k,Ao.pitch,Ao.near),yaw:k,pitch:Ao.pitch,stand:Ne(A,[0,ri,oi.z+.62]),standYaw:k,look:F},u=Ne(A,Uw);const Y=Ne(A,[0,0,oi.z]);l.push({x:Y.x,z:Y.z,c:Math.cos(I),s:Math.sin(I),hw:oi.w/2,hd:oi.d/2}),a.push({x:Y.x,z:Y.z,rot:b.rot,hw:oi.w/2,hd:oi.d/2,k:.3})}}const v=o.get("table"),M=o.get("cabinet");if(v&&M){const E=po(v),_=po(M),[b,,A]=Ld,C=[Ne(E,Ld),Ne(E,[b+.01,ci+.0034,A-.04]),Ne(E,[b+.05,ci+.0034,-.27]),Ne(E,[b+.07,ci+.001,-.302]),Ne(E,[b+.08,ci-.05,-.318]),Ne(E,[b+.1,.16,-.36]),Ne(E,[b+.12,.0034,-.47])],I=C[C.length-1],U=Ne(_,[-.62/2-.02,.0034,-.46/2+.06]);for(let X=1;X<=3;X++){const et=X/4,G=I.clone().lerp(U,et),K=U.clone().sub(I).normalize();G.addScaledVector(new L(-K.z,0,K.x),Math.sin(X*2.1)*.05),G.y=.0034,C.push(G)}C.push(U,Ne(_,[-.62/2+.06,.0034,-.46/2-.013]),Ne(_,[-.62/2+.14,.12,-.46/2-.013]),Ne(_,[-.62/2+.16,.3,-.46/2-.013]));const F=new kr(C,!1,"centripetal"),k=new kr(F.getSpacedPoints(500).map(X=>X.y<.0036?X.setY(.0036):X),!1,"centripetal"),Y=ge(new St(new Vo(k,700,.0032,8),e.cord));Y.userData.piece="cord",i.add(Y)}for(const E of r){const _=Math.acos(E.cOuter),b=Math.acos(E.cInner),A=new lx(Yr,E.i*Math.PI,0,_,1-b/_,2);A.position.set(...E.p),A.target.position.set(E.p[0]+E.d[0],E.p[1]+E.d[1],E.p[2]+E.d[2]),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),A.shadow.camera.near=.4,A.shadow.camera.far=7,A.shadow.bias=-2e-4,A.shadow.normalBias=.012,A.shadow.radius=4,A.layers.enable(5),i.add(A,A.target),E===p&&m&&(x={centre:m,light:A,base:A.intensity})}const S=[];return i.traverse(E=>{E.isMesh&&S.push(E)}),i.updateMatrixWorld(!0),{group:i,lamps:r,feet:a,solids:l,meshes:S,piano:h,soundAt:u,couchSeats:d,pianoSeat:f,couch:x,records:wl,tableMatrix:o.get("table")?po(o.get("table")):null,deck:o.get("table")?kh:null,stand:o.get("table")?Bh:null,meters:{needles:[...Bo.needles],bar:[...Bo.bar]},speakers:o.get("speakerL")&&o.get("speakerR")?[Ne(po(o.get("speakerL")),[0,1.25,Hh.D/2]),Ne(po(o.get("speakerR")),[0,1.25,Hh.D/2])]:null,dispose(){const E=n();i.traverse(_=>{var A;const b=_;if(b.isMesh||_.isSprite){(A=b.geometry)==null||A.dispose();for(const C of Array.isArray(b.material)?b.material:[b.material])C&&!E.has(C)&&C.dispose()}_.isSpotLight&&_.shadow.dispose()})}}}let Od=null;function bS(s,t,e,n,i,o){const r=[];t.traverse(a=>{var c;const l=a.material;(c=l==null?void 0:l.userData)!=null&&c.lens&&!r.includes(l)&&r.push(l)}),r.forEach(a=>a.color.multiplyScalar(14)),Qi??(Qi=T0()),Od=Hd(s,t,e,n,i,Zw(Qi),Od),o&&(Bd=Hd(s,t,o,n,i,Object.values(Tu()),Bd)),r.forEach(a=>a.color.multiplyScalar(1/14))}let Bd=null;function Hd(s,t,e,n,i,o,r){const a=new gu(256,{type:Gn}),l=new Yp(.05,60,a);for(const d of l.children)for(const p of i)d.layers.enable(p);l.position.copy(e),l.updateMatrixWorld(!0);const c=n.map(d=>d.visible);n.forEach(d=>{d.visible=!1});const h=t.background;t.background=null,l.update(s,t),t.background=h,n.forEach((d,p)=>{d.visible=c[p]});const u=new Lh(s),f=u.fromCubemap(a.texture);u.dispose(),a.dispose(),r==null||r.dispose();for(const d of o)d.isMeshStandardMaterial&&(d.envMap=f.texture,d.envMapIntensity=1,d.needsUpdate=!0);return f}const Lr=class Lr{constructor(t,e,n,i,o,r){R(this,"cat",new Map);R(this,"arch");R(this,"placed",[]);R(this,"items",[]);R(this,"furniture",null);R(this,"furnLight",new rw);R(this,"migrated",!1);R(this,"interior",null);R(this,"outside",null);R(this,"sharp",new Map);R(this,"small",new Map);R(this,"baked");R(this,"labels");R(this,"outsideKey","");R(this,"blank",new Fo(new Uint8Array([128,128,128,255]),1,1));R(this,"onRebuilt",()=>{});R(this,"prepTex",t=>(t.colorSpace=He,t.anisotropy=this.aniso,t.minFilter=xs,t));R(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);R(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=o,this.aniso=r,this.labels=new _w(o,r),this.blank.needsUpdate=!0}async loadSmall(){const t=new hl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(Lr.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new hl().loadAsync(`${Lr.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var c;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(h=>[h.id,h])),this.arch=E_(t),j_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=U_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(h=>!i.includes(h))),this.placed=e,this.items=n,this.baked=uw(this.arch,e,this.baked);const o=this.interior,r=this.furniture,a=SS(t,this.data.albums);this.furniture=a,this.furnLight.setLamps(a.lamps,a.feet),this.interior=Tw(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.furnLight,a.lamps),this.interior.group.add(a.group),this.scene.add(this.interior.group),o&&(this.scene.remove(o.group),o.dispose()),r==null||r.dispose();const l=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);l!==this.outsideKey&&((c=this.outside)==null||c.dispose(),this.outside=mw(this.scene,this.font,this.aniso,t),this.outsideKey=l),this.light(),this.onRebuilt(i)}light(){const t=this.furniture,e=this.renderer;this.scene.updateMatrixWorld(!0),this.furnLight.render(e,this.scene);const n=this.data.layout,i=(n.pieces??[]).find(c=>c.id==="couch"),o=(n.pieces??[]).find(c=>c.id==="table"),r=n.outline,a=i&&o?new L((i.x+o.x)/2,.95,(i.z+o.z)/2):new L((r.x0+r.x1)/2,1.2,(r.z0+r.z1)/2);zh.value=0;const l=(n.pieces??[]).find(c=>c.id==="piano");bS(e,this.scene,a,[t.group],[0,1,vl],l?new L(l.x,1.3,l.z):void 0),zh.value=1,e.shadowMap.needsUpdate=!0}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};R(Lr,"url",(t,e)=>`art/${t}-${e}.jpg`);let Ro=Lr;class ES{constructor(t,e){R(this,"target");R(this,"texMat",new ee);R(this,"cam",new hn);R(this,"plane",new yi);R(this,"clip",new Ie);R(this,"q",new Ie);R(this,"n",new L(0,1,0));R(this,"p0",new L(0,0,0));R(this,"camPos",new L);R(this,"rot",new ee);R(this,"look",new L);R(this,"view",new L);R(this,"tgt",new L);this.target=new Vn(t,e,{type:Gn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const o=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+o[8])/o[0],this.q.y=(Math.sign(this.clip.y)+o[9])/o[5],this.q.z=-1,this.q.w=(1+o[10])/o[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),o[2]=this.clip.x,o[6]=this.clip.y,o[10]=this.clip.z+1,o[14]=this.clip.w;const r=t.getRenderTarget(),a=e.background,l=t.getClearColor(new It),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(r),t.setClearColor(l,c),e.background=a}}let bl=null;function Vd(s){return bl?(parent.postMessage(s,bl),!0):!1}const TS=()=>!!bl;addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(bl=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class AS{constructor(){R(this,"el");R(this,"tools");R(this,"low");R(this,"high");R(this,"cap");R(this,"frame");R(this,"open",!1);R(this,"busy",!1);R(this,"work",null);R(this,"px",[1,1]);R(this,"crop",[0,0,1,1]);R(this,"onClose",()=>{});R(this,"onShow",()=>{});R(this,"reserveRight",0);R(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(sw(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Gd(pl(t))}</i>`],n=[t.medium,dl(t),t.year].filter(Boolean).map(i=>Gd(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,o,r,a]=this.crop,l=this.px[0]*(r-i),c=this.px[1]*(a-o),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),p=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const m=d/(r-i),x=p/(a-o);for(const g of[this.low,this.high])Object.assign(g.style,{width:`${m}px`,height:`${x}px`,left:`${-i*m}px`,top:`${-o*x}px`})}}const Gd=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),RS=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),CS=.62,Dc=5,Wd=.18;class PS{constructor(t=!0){R(this,"pic",null);R(this,"lit",null);R(this,"held",null);R(this,"dark",0);R(this,"veil");R(this,"vScene",new ou);R(this,"vCam",new Fl(-1,1,1,-1,0,1));R(this,"hintEl");R(this,"hinted",null);R(this,"hintDone",!1);R(this,"v",new L);R(this,"f",new L);this.veil=new St(new Ve(2,2),new tn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}hold(t,e=.72){this.held=t?{t,k:e}:null}update(t,e,n,i,o){if(this.held){this.pic=null,this.lit=this.held.t,this.dark+=(this.held.k-this.dark)*(1-Math.exp(-t/Wd));return}let r=null,a=1/0,l=1/0;if(o){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.centre,m=d.normal,x=p.x-u.x,g=p.y-u.y,y=p.z-u.z,w=Math.hypot(x,g,y);if(w>d.reach||m[0]*-x+m[2]*-y<=0)continue;const v=Math.acos(Math.min(1,(x*f.x+g*f.y+y*f.z)/w)),M=Math.atan2(d.size*.5,w)+.17;if(v>M||Vs(i,u.x,u.z,p.x+m[0]*.05,p.z+m[2]*.05))continue;const S=v/M;S<a&&(a=S,r=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=S)}this.pic&&l<a+.15&&(r=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??r)}this.pic=r,r&&(this.lit=r);let c=0;if(r){const u=r.centre.distanceTo(e.getWorldPosition(this.v)),f=r.reach,d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));c=CS*p*p*(3-2*p)}this.dark+=(c-this.dark)*(1-Math.exp(-t/Wd)),this.dark<.003&&!r&&(this.lit=null),!this.hintDone&&r&&r.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=r);const h=!!this.hinted&&r===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const o=i.meshes;for(const l of o)l.layers.enable(Dc);const r=n.layers.mask,a=e.background;n.layers.set(Dc),e.background=null,t.render(e,n),e.background=a,n.layers.mask=r;for(const l of o)l.layers.disable(Dc);t.autoClear=!0}}const LS=4.5,IS=380,DS=10,NS=1.8;class US{constructor(t,e,n,i,o,r){R(this,"ndc",new pt);R(this,"ray",new vs);R(this,"v",new L);R(this,"d",null);R(this,"trail",[]);R(this,"pts",new Map);R(this,"two",null);R(this,"spent",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=o,this.enabled=r,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>{this.lift(a.pointerId),this.d=null}),t.addEventListener("lostpointercapture",a=>{var l;this.pts.has(a.pointerId)&&this.lift(a.pointerId),((l=this.d)==null?void 0:l.id)===a.pointerId&&(this.d=null)}),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}at(t){const e=this.canvas.getBoundingClientRect();return this.ndc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new L(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;for(const l of[...this.pts.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.d&&!this.canvas.hasPointerCapture(this.d.id)&&(this.d=null),t.preventDefault(),(a=getSelection())==null||a.removeAllRanges(),this.pts.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.canvas.setPointerCapture(t.pointerId),this.pts.size===2&&!this.spent){this.d=null,this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.two=this.pair(),this.trail=[];return}if(this.pts.size>1||this.spent||this.d)return;this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),o=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),r=o||n.kind==="wall"&&(n.dist??99)<=LS?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:o?"ground":"turn",grip:r,p0:o?i:null,moved:!1,lx:t.clientX,ly:t.clientY},this.trail=[]}pair(){const[t,e]=[...this.pts.values()];return{dist:Math.max(24,Math.hypot(t.x-e.x,t.y-e.y)),mx:(t.x+e.x)/2,my:(t.y+e.y)/2}}lift(t){this.pts.delete(t)&&(this.two&&this.pts.size<2?(this.two=null,this.spent=this.pts.size>0,this.coastOn("both")):this.pts.size||(this.spent=!1))}coastOn(t){const e=performance.now(),n=this.trail.filter(l=>e-l.t<120);if(!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let o=0,r=0,a=0;for(const l of n)o+=l.dx,r+=l.dz,a+=l.dyaw;t!=="turn"&&(this.player.glide.set(o/i,r/i),this.player.glide.length()>7&&this.player.glide.setLength(7)),t!=="ground"&&(this.player.spin=Ae.clamp(a/i,-7,7))}move(t){const e=this.pts.get(t.pointerId);if(e&&(e.x=t.clientX,e.y=t.clientY),this.two&&e){t.preventDefault();const a=this.pair(),l=this.two,c=performance.now(),h=NS*Math.log(a.dist/l.dist),u=Ae.degToRad(this.camera.fov)/this.canvas.clientHeight,f=this.player.pos.x,d=this.player.pos.z;h&&this.player.drag(-Math.sin(this.player.yaw)*h,-Math.cos(this.player.yaw)*h);const p=(a.mx-l.mx)*u;for(this.player.turnBy(p,(a.my-l.my)*u),this.trail.push({t:c,dx:this.player.pos.x-f,dz:this.player.pos.z-d,dyaw:p});this.trail.length&&c-this.trail[0].t>120;)this.trail.shift();this.two=a;return}const n=this.d;if(!n||t.pointerId!==n.id)return;t.preventDefault(),!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)>DS&&(n.moved=!0);const i=t.clientX-n.lx,o=t.clientY-n.ly;if(n.lx=t.clientX,n.ly=t.clientY,!n.moved)return;const r=performance.now();if(n.mode==="ground"&&n.p0){const a=this.floorAt(this.at(t));if(!a)return;let l=n.p0.x-a.x,c=n.p0.z-a.z;const h=Math.hypot(l,c);h>1.2&&(l*=1.2/h,c*=1.2/h);const u=this.player.pos.x,f=this.player.pos.z;this.player.drag(l,c),this.trail.push({t:r,dx:this.player.pos.x-u,dz:this.player.pos.z-f,dyaw:0})}else{const a=Ae.degToRad(this.camera.fov)/this.canvas.clientHeight*n.grip;this.player.turnBy(i*a,o*a),this.trail.push({t:r,dx:0,dz:0,dyaw:i*a})}for(;this.trail.length&&r-this.trail[0].t>120;)this.trail.shift()}end(t){const e=!!this.two;if(this.lift(t.pointerId),e)return;const n=this.d;if(!(!n||t.pointerId!==n.id)){if(this.d=null,!n.moved&&performance.now()-n.t<IS){this.tap(this.pick(this.at(t)));return}this.coastOn(n.mode)}}}const zS=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],FS=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],U0=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],Xr=.12,Lu=[58,44,40],Nc=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},kS=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function Vl(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,o=s[n],r=s[n+1];return[0,1,2].map(a=>kS(Nc(o[a])+(Nc(r[a])-Nc(o[a]))*i))}function El([s,t,e]){const n=s/255,i=t/255,o=e/255,r=Math.max(n,i,o),a=Math.min(n,i,o),l=(r+a)/2,c=r-a;if(!c)return[0,0,l];const h=l>.5?c/(2-r-a):c/(r+a);let u;return r===n?u=(i-o)/c+(i<o?6:0):r===i?u=(o-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function OS(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),o=e-n/2;let r=0,a=0,l=0;return s<60?(r=n,a=i):s<120?(r=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(r=i,l=n):(r=n,l=i),[Math.round((r+o)*255),Math.round((a+o)*255),Math.round((l+o)*255)]}function BS(s,t){const[e,n,i]=El(s);return n<.02?s:OS(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const Iu=s=>Vl(zS,s.skin),HS=s=>Vl(FS,s.mouthColor),VS=s=>Vl(U0,(s.cheeks-Xr)/(1-Xr)),GS=s=>{const t=Math.max(0,Math.min(1,s.cheeks/Xr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=Vl(U0,t/16);s.push(`rgb(${e},${n},${i}) ${((Xr+t/16*(1-Xr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const WS={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:El(Lu)[0]/360,hat:"none"},se=16,ae=16,pe=16,ur=[26,32,42],Xd=[236,240,246],kn=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Ft={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:Lu,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Oi=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),qd=2.2,XS=18,qS=6,Yd=.55;function YS(s){const t=qd*Math.pow(XS/qd,Math.max(0,Math.min(1,s))),e=se/2,n=ae/2,i=pe/2;return(o,r,a)=>{const l=Math.abs(o+.5-e)/e,c=Math.abs(r+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=pe-qS){const f=h<=Yd?1:((1-h)/(1-Yd))**(1/t);return u<=f}return h+u**t<=1}}function $S(s){const t=Iu(s),e=YS(s.shape),n=new Map,i=(B,H,P)=>`${B},${H},${P}`;let o=null;const r=new Set,a=new Set;let l;const c=(B,H,P,V)=>{const D=i(B,H,P);n.set(D,l?{x:B,y:H,z:P,c:V,part:l}:{x:B,y:H,z:P,c:V}),o&&o.add(D)},h=(B,H,P,V)=>{const D=i(B,H,P);n.set(D,{x:B,y:H,z:P,c:V}),r.delete(D),a.delete(D)},u=(B,H,P)=>n.has(i(B,H,P));for(let B=0;B<se;B++)for(let H=0;H<ae;H++)for(let P=0;P<pe;P++)e(B,H,P)&&c(B,H,P,t);const f=(B,H)=>{for(let P=ae-1;P>=0;P--)if(u(B,P,H))return P;return-1},d=(B,H)=>{for(let P=pe-1;P>=0;P--)if(u(B,H,P))return P;return-1},p=(B,H,P)=>{if(B<0||B>=se||H<0||H>=ae)return;const V=d(B,H);V>=0&&c(B,H,V,P)},m=se/2,x=1+Oi(s.eyeSize,3),g=1+Oi(s.eyeSize,3),y=Math.max(1,6-x),w=1+Oi(s.eyeSpacing,y-1),v=8+Oi(s.eyeHeight,4)-2-Math.floor((g-1)/2),M=v+g-1,S=[[m-w-x,m-w-1],[m+w,m+w+x-1]],E=x>=3&&g>=3;for(const[B,H]of S)for(let P=B;P<=H;P++)for(let V=v;V<=M;V++){const D=!!(E&&P>B&&P<H&&V>v&&V<M);l=E&&!D?"eye":"pupil",p(P,V,E?D?ur:Xd:ur)}l=void 0,o=r;const _=Oi(s.browWeight,3),b=M+2+(Oi(s.browHeight,4)-2);if(_>0){l="brow";for(const[B,H]of S)for(let P=B-1;P<=H+1;P++)for(let V=0;V<_;V++)p(P,b+V,Ft.hair);l=void 0}o=null;const A=Oi(s.noseLength,8),C=5+(Oi(s.noseHeight,6)-3);if(A>0){const B=kn(t,.9);l="nose";for(let H=m-1;H<=m;H++)for(let P=C;P<=C+1;P++){const V=d(H,P);if(!(V<0))for(let D=1;D<=A;D++)c(H,P,V+D,B)}l=void 0}const I=2*Oi(s.mouthWidth,4),U=3;if(I>0){const B=HS(s),H=I>=6?2:1;l="mouth";for(let P=m-I/2;P<=m+I/2-1;P++)for(let V=U;V<U+H;V++)p(P,V,B);l=void 0}const F=GS(s);if(F>0){const B=VS(s),H=(z,W)=>z[0]===W[0]&&z[1]===W[1]&&z[2]===W[2],P=v-1,V=U+(I>=6?2:1),D=Math.max(V+.5,P-.5);for(const[z,W]of S){const Q=W<m,j=(z+W)/2,vt=j+.35*((Q?m-1.5:m+.5)-j);for(let wt=Math.floor(vt-2);wt<=Math.ceil(vt+2);wt++)if(!(Q?wt>m-2:wt<m+1))for(let at=V;at<=P;at++){const mt=1-((wt-vt)/1.9)**2-((at-D)/1.3)**2;if(mt<=0)continue;const dt=d(wt,at),_t=dt>=0?n.get(i(wt,at,dt)):void 0;if(!_t||_t.part||!H(_t.c,t))continue;const xt=F*.72*Math.pow(mt,.8),$t=[0,1,2].map(Ht=>Math.round(t[Ht]+(B[Ht]-t[Ht])*xt));n.set(i(wt,at,dt),{x:wt,y:at,z:dt,c:$t,blend:t})}}}const k=(B,H=1)=>{for(let P=0;P<se;P++)for(let V=0;V<pe;V++){const D=f(P,V);if(!(D<0))for(let z=1;z<=H;z++)c(P,D+z,V,B)}},Y=(B,H,P)=>{const V=Math.ceil(H)+1;for(let D=m-V;D<m+V;D++)for(let z=m-V;z<m+V;z++)Math.hypot(D+.5-m,z+.5-m)<=H&&c(D,B,z,P)},X=(B,H,P,V)=>{for(let D=B;D<=H;D++)for(let z=0;z<se;z++)for(let W=0;W<pe;W++)Math.hypot(z+.5-m,W+.5-m)<=P&&c(z,D,W,V)},et=(B,H,P,V,D)=>{const z=Math.ceil(V)+1;for(let W=Math.floor(B-z);W<=B+z;W++)for(let Q=Math.floor(H-z);Q<=H+z;Q++)for(let j=Math.floor(P-z);j<=P+z;j++)Math.hypot(W+.5-B,Q+.5-H,j+.5-P)<=V&&c(W,Q,j,D)},G=(B,H,P,V=1)=>{for(let D=B;D<=H;D++)for(let z=0;z<se;z++){const W=d(z,D);W>=0&&c(z,D,W+V,P)}};switch(o=a,s.hat){case"birthday":{for(let B=0;B<9;B++)X(ae+B,ae+B,5.4-B*.62,B%2?Ft.partyAlt:Ft.party);et(m,ae+9.5,m,1.6,Xd);break}case"mickey":{const B=f(m,m)+2;for(const H of[-.5,se+.5])et(H,B,m,4.2,ur);break}case"tophat":{Y(ae,8.6,Ft.felt),X(ae+1,ae+10,5,Ft.felt),X(ae+3,ae+4,5.05,Ft.band);break}case"gangster":{Y(ae,9.6,Ft.felt),X(ae+1,ae+5,5,Ft.felt),X(ae+1,ae+2,5.05,Ft.band);break}case"goggles":{G(v,M,Ft.brass);for(const[B,H]of S)for(let P=B;P<=H;P++)for(let V=v;V<=M;V++){const D=d(P,V);D>=0&&c(P,V,D+1,Ft.glass)}break}case"pilot":{k(Ft.leather,2),G(ae-4,ae-3,Ft.brass);for(let B=ae-4;B>=4;B--)for(const H of[0,1,se-2,se-1])for(let P=0;P<pe;P++)u(H,B,P)&&c(H,B,P,Ft.leather);break}case"model":{Y(ae,12.5,Ft.partyAlt),X(ae+1,ae+2,4.4,Ft.partyAlt);break}case"curls":{let B=7;const H=()=>(B=(B*1103515245+12345)%2147483648)/2147483648;for(let P=-2;P<se+2;P++)for(let V=-2;V<pe+2;V++){const D=f(Math.max(0,Math.min(se-1,P)),Math.max(0,Math.min(pe-1,V)));D<0||(H()<.6&&c(P,D+1,V,Ft.hair),H()<.34&&c(P,D+2,V,Ft.hair),H()<.14&&c(P,D+3,V,Ft.hair))}break}case"bob":{k(Ft.hair,2);for(let B=M+1;B<ae;B++)for(let H=0;H<se;H++)for(let P=0;P<pe;P++)(H<=1||H>=se-2||P<=1)&&u(H,B,P)&&c(H,B,P,Ft.hair);break}case"pigtails":{k(Ft.hair,2);for(const B of[-1.5,se+1.5])et(B,ae-5,m,3.4,Ft.hair);break}case"crown":{const B=Ft.gold,H=kn(B,1.15),P=Ft.band,V=(W,Q)=>{const j=Math.hypot(W+.5-m,Q+.5-m);return j>=5.1&&j<=6.9};let D=0;for(let W=0;W<se;W++)for(let Q=0;Q<pe;Q++)V(W,Q)&&(D=Math.max(D,f(W,Q)+3));for(let W=0;W<se;W++)for(let Q=0;Q<pe;Q++){if(!V(W,Q))continue;const j=f(W,Q);if(!(j<0))for(let vt=j+1;vt<=D;vt++)c(W,vt,Q,vt===D?H:B)}const z=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[W,Q]of z){const j=Math.hypot(W+1-m,Q+1-m);for(let vt=W;vt<=W+1;vt++)for(let wt=Q;wt<=Q+1;wt++){const at=Math.hypot(vt+.5-m,wt+.5-m)>j;for(let mt=1;mt<=(at?5:3);mt++)c(vt,D+mt,wt,at&&mt===5?H:B)}}for(let W=m-1;W<=m;W++)for(let Q=D+2;Q<=D+3;Q++)for(let j=14;j<=15;j++)c(W,Q,j,P);break}case"beanie":{const B=Ft.red,H=Ft.cream,P=Math.max(M+1,ae-6),V=Math.min(P+2,ae-1),D=[];for(let z=P;z<=V;z++)for(let W=-1;W<=se;W++)for(let Q=-1;Q<=pe;Q++)u(W,z,Q)?c(W,z,Q,H):(u(W-1,z,Q)||u(W+1,z,Q)||u(W,z,Q-1)||u(W,z,Q+1))&&D.push([W,z,Q]);for(const[z,W,Q]of D)c(z,W,Q,H);for(let z=V+1;z<ae;z++)for(let W=0;W<se;W++)for(let Q=0;Q<pe;Q++)u(W,z,Q)&&c(W,z,Q,z===V+1?kn(B,.82):B);for(let z=0;z<se;z++)for(let W=0;W<pe;W++){const Q=f(z,W);Q<=V||(c(z,Q+1,W,B),c(z,Q+2,W,B))}et(m,f(m,m)+4.5,m,1.9,H);break}case"cowboy":{let B=0;for(let H=0;H<se;H++)for(let P=0;P<pe;P++)B=Math.max(B,f(H,P)+1);for(let H=0;H<se;H++)for(let P=0;P<pe;P++){const V=f(H,P);if(!(V<0||Math.hypot(H+.5-m,P+.5-m)>5))for(let D=V+1;D<B;D++)c(H,D,P,Ft.leather)}for(let H=m-11;H<m+11;H++)for(let P=m-11;P<m+11;P++){const V=Math.abs(H+.5-m);if(Math.hypot(V,P+.5-m)>10.7)continue;const D=V>7.5?2:V>5.5?1:0;for(let z=0;z<=D;z++)c(H,B+z,P,Ft.leather)}for(let H=0;H<se;H++)for(let P=0;P<pe;P++){const V=Math.abs(H+.5-m);if(Math.hypot(V,P+.5-m)>5)continue;const D=V<1?2:V<2?1:0;for(let z=B+1;z<=B+7-D;z++)c(H,z,P,Ft.leather);D>0&&c(H,B+7-D,P,kn(Ft.leather,.8))}X(B+1,B+2,5.05,Ft.felt);break}case"wizard":{const B=Ft.plum,H=kn(B,.82),P=f(m,m)+1;for(let W=m-6;W<m+6;W++)for(let Q=m-6;Q<m+6;Q++){if(Math.hypot(W+.5-m,Q+.5-m)>5.2)continue;const j=f(W,Q);if(!(j<0))for(let vt=j+1;vt<=P;vt++)c(W,vt,Q,B)}const V=11;for(let W=m-12;W<m+12;W++)for(let Q=m-12;Q<m+12;Q++){const j=Math.hypot(W+.5-m,Q+.5-m);if(j<=5.2||j>V)continue;const vt=W>=0&&W<se&&Q>=0&&Q<pe?f(W,Q):-1;c(W,Math.max(P-Math.max(0,Math.round(j)-8),vt+1,M+2),Q,H)}const D=13;for(let W=0;W<=D;W++){const Q=W/D,j=5-4.1*Q,vt=m-6.5*Q*Q;for(let wt=m-6;wt<m+6;wt++)for(let at=-2;at<pe;at++)Math.hypot(wt+.5-m,at+.5-vt)<=j&&c(wt,P+W,at,B)}const z=(W,Q)=>{for(let j=m-Q;j<m+Q;j++){const vt=d(j,W);vt>=0&&c(j,W,vt,Ft.gold)}};z(P+3,1),z(P+4,2),z(P+5,1),z(P+8,1),z(P+11,1);break}case"halo":{let B=-1;for(let W=0;W<se;W++)for(let Q=0;Q<pe;Q++)B=Math.max(B,f(W,Q));const H=B+3,P=kn(Ft.gold,1.15),V=4.9,D=6.7,z=Math.ceil(D)+1;for(let W=m-z;W<m+z;W++)for(let Q=m-z;Q<m+z;Q++){const j=Math.hypot(W+.5-m,Q+.5-m);j<V||j>D||c(W,H,Q,Q>=m?P:Ft.gold)}break}case"headphones":{const B=Math.min(M+1,10),H=m-2,P=m+1;for(let V=0;V<se;V++)for(let D=H;D<=P;D++){const z=f(V,D);z<0||(c(V,z+1,D,Ft.steel),c(V,z+2,D,Ft.steel))}for(let V=B+3;V<ae;V++)for(const D of[0,se-1])for(let z=H;z<=P;z++)u(D,V,z)&&c(D,V,z,Ft.steel);for(let V=0;V<3;V++)for(let D=B-4;D<=B+3;D++)for(let z=m-4;z<=m+3;z++)Math.hypot(D+.5-B,z+.5-m)>3.6||(c(-V,D,z,ur),c(se-1+V,D,z,ur));for(let V=B-2;V<=B+1;V++)for(let D=m-2;D<=m+1;D++)Math.hypot(V+.5-B,D+.5-m)<=1.6&&(c(-2,V,D,Ft.steel),c(se+1,V,D,Ft.steel));break}case"viking":{const B=kn(Ft.steel,.78),H=Math.max(M+2,ae-5);for(let D=H;D<ae;D++)for(let z=0;z<se;z++)for(let W=0;W<pe;W++)u(z,D,W)&&c(z,D,W,D===H?B:Ft.steel);for(let D=0;D<se;D++)for(let z=0;z<pe;z++){const W=f(D,z);W<H||(c(D,W+1,z,Ft.steel),c(D,W+2,z,Ft.steel))}const P=Math.max(M+1,H-1);for(let D=P;D<=ae;D++)for(let z=m-1;z<=m;z++){const W=d(z,D);W>=0&&c(z,D,W+1,B)}const V=Math.max(f(5,m)-4,M+4);for(const D of[-1,1])for(let z=0;z<=18;z++){const W=z/18,Q=W*2.05,j=m+D*(6.2+6*Math.sin(Q));et(j,V+8.4-8.4*Math.cos(Q),m,2.6-1.6*W,Ft.cream)}break}case"flowers":{const B=Math.max(M+1,Math.min(M+3,ae-4)),H=Ft.leaf,P=kn(Ft.leaf,.82),V=(j,vt)=>Math.floor(m+j*vt),D=[[0,1],[.87,.5],[.87,-.5],[0,-1]],z=[];for(const[j,vt]of D){let wt=2;for(;wt<12&&u(V(j,wt),B,V(vt,wt));)wt+=.5;z.push(wt)}const W=[];for(let j=B;j<=B+1;j++)for(let vt=0;vt<se;vt++)for(let wt=0;wt<pe;wt++){if(!u(vt,j,wt))continue;let at=!1;for(let mt=-1;mt<=1;mt++)for(let dt=-1;dt<=1;dt++)u(vt+mt,j,wt+dt)||(at=!0,W.push([vt+mt,j,wt+dt]));at&&W.push([vt,j,wt])}for(const[j,vt,wt]of W)c(j,vt,wt,vt===B?P:H);const Q=[Ft.red,Ft.gold,Ft.cream];for(let j=0;j<D.length;j++){const[vt,wt]=D[j],at=Math.round(m+vt*(z[j]+1)),mt=Math.round(m+wt*(z[j]+1)),dt=Q[j%Q.length];et(at,B+1.5,mt,1.5,dt),vt>0&&et(2*m-at,B+1.5,mt,1.5,dt)}break}case"afro":{const P=f(m,m),V=Math.max(M+2,ae-3);for(let D=m-10;D<m+10;D++)for(let z=m-10;z<m+10;z++){const W=Math.abs(D+.5-m),Q=Math.abs(z+.5-m),j=(W*W+Q*Q)/(10*10),vt=f(D,z);if(j>1&&vt<0)continue;const wt=j>1?0:7.5*Math.sqrt(1-j),mt=z>=pe-6?Math.max(M+1,V-Math.max(0,W-4.5)):M+1,dt=vt>=0?mt:Math.max(mt,Math.ceil(P+.5-wt)),_t=j>1?vt:Math.max(vt,Math.floor(P-.5+wt));for(let xt=dt;xt<=_t;xt++)c(D,xt,z,xt<mt+2?kn(Ft.hair,.8):Ft.hair)}break}case"mohawk":{const B=Ft.hair,H=kn(t,.74);for(let V=0;V<se;V++)for(let D=0;D<pe;D++){const z=f(V,D);if(!(z<0))for(let W=M+2;W<=z;W++)u(V,W,D)&&h(V,W,D,H)}const P=f(m,m);for(let V=1;V<pe-1;V++){if(f(m,V)<P-4)continue;const z=(V-1)/(pe-3),W=2+Math.round(4*Math.sin(Math.PI*z));for(const Q of[m-1,m])for(let j=f(Q,V)+1;j<=f(Q,V)+W;j++)c(Q,j,V,B)}break}case"ponytail":{const B=Ft.hair,H=Math.max(f(m-1,2),f(m,2))-2;for(let P=0;P<se;P++)for(let V=0;V<pe;V++){const D=f(P,V);D>M&&c(P,D,V,B)}k(B,2);for(let P=M+1;P<ae;P++)for(let V=0;V<se;V++)for(let D=0;D<pe;D++)(V<=1||V>=se-2||D<=3)&&u(V,P,D)&&c(V,P,D,B);for(let P=3;P<=M;P++){const V=6-Math.max(0,Math.min(3,M-P));for(let D=m-V;D<m+V;D++)for(let z=0;z<=2;z++)u(D,P,z)&&c(D,P,z,B)}for(let P=0;P<=14;P++){const V=P/14;et(m,H-10*V*V,1.5-4.4*Math.sqrt(V),2.7-1.3*V,B)}et(m,H-.5,-.6,2.1,Ft.band);break}case"longhair":{const B=Ft.hair,H=pe-5,P=2;k(B,2);for(let V=0;V<ae;V++)for(let D=0;D<se;D++)for(let z=0;z<pe;z++){if(!u(D,V,z))continue;const W=z>=H,Q=D<P||D>=se-P;W&&!Q||W&&Q&&V>=v&&V<=M||c(D,V,z,B)}for(let V=Math.max(ae-3,M+2);V<ae;V++)for(let D=0;D<se;D++)for(let z=H;z<pe;z++)u(D,V,z)&&c(D,V,z,B);for(let V=0;V<se;V++)for(let D=0;D<pe;D++){if(!(V<P||V>=se-P||D<P)||f(V,D)<0)continue;let W=0;for(;!u(V,W,D);)W++;for(let Q=W-1;Q>=W-3;Q--)c(V,Q,D,B)}break}case"buzz":{const B=Ft.hair,H=kn(Ft.hair,1.75),P=Math.min(ae-2,Math.max(M+3,ae-3));for(let V=0;V<se;V++)for(let D=0;D<pe;D++){const z=f(V,D);if(z<0)continue;const W=Math.abs(V+.5-m),j=D>=pe-6?W<5.5?0:W<6.5?1:2:3,vt=Math.max(M+1,Math.min(P-j,z-1));for(let wt=vt;wt<=z;wt++)u(V,wt,D)&&c(V,wt,D,wt<P?H:B)}break}case"bun":{const B=kn(Ft.hair,.74),H=M+2;for(let D=0;D<se;D++)for(let z=0;z<pe;z++){const W=f(D,z);if(W<H)continue;const Q=z<=5?5:z<=9?3:2;for(let j=W;j>W-Q&&j>=H;j--)u(D,j,z)&&c(D,j,z,Ft.hair);c(D,W+1,z,Ft.hair)}const P=4.5,V=f(m,4);et(m,V+3,P,3.1,Ft.hair);for(let D=m-4;D<m+4;D++)for(let z=1;z<=8;z++)if(Math.hypot(D+.5-m,z+.5-P)<=2.6)for(let W=V+1;W<=V+2;W++)c(D,W,z,B);break}case"braids":{k(Ft.hair,2);for(let P=M+1;P<ae;P++)for(let V=0;V<se;V++)for(let D=0;D<pe;D++)(V<=1||V>=se-2||D<=1)&&u(V,P,D)&&c(V,P,D,Ft.hair);const B=kn(Ft.hair,1.3),H=-5;for(const P of[-1,se]){const V=Math.max(0,Math.min(se-1,P)),D=Math.min(f(V,6),ae-4);if(!(D<0)){for(let z=H;z<=D;z++){const W=z<=H+3,Q=z<=H+1;let j=(z%4+4)%4<2?Ft.hair:B;Q&&(j=Ft.band);for(let vt=-1;vt<=1;vt++)for(let wt=-1;wt<=1;wt++)(!W||Math.abs(vt)+Math.abs(wt)<2)&&c(P+vt,z,6+wt,j)}et(P+.5,H-2,6.5,1.9,Ft.band)}}break}}o=null;const K=.18,it=.25;let ft=-1;if(a.size){const B=new Map;let H=0,P=0;for(const z of a){const W=n.get(z);if(!W)continue;P++;const Q=`${W.c[0]},${W.c[1]},${W.c[2]}`,j=B.get(Q);j?j.n++:B.set(Q,{n:1,c:W.c,chroma:(Math.max(...W.c)-Math.min(...W.c))/255}),B.get(Q).chroma>=K&&H++}const V=P>0&&H/P<it;let D=null;for(const z of B.values())!V&&z.chroma<K||(!D||z.n>D.n)&&(D=z);D&&(ft=El(D.c)[0])}else r.size&&(ft=El(Lu)[0]);if(ft>=0){const B=s.hairColor*360-ft;if(Math.abs(B)>.5)for(const H of[...a,...r]){const P=n.get(H);P&&(P.c=BS(P.c,B))}}return{voxels:[...n.values()],anchor:ft}}function KS(s){return $S(s).voxels}const ZS=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Uc=.42,ka=new It,$d=(s,t,e)=>(ka.setRGB(s/255,t/255,e/255,He),[ka.r,ka.g,ka.b]);function JS(s,t){const e=new Map;for(const b of s)e.set(`${b.x},${b.y},${b.z}`,b);const n=(b,A,C)=>e.get(`${b},${A},${C}`),i=(b,A)=>b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2],o=(b,A)=>i(b.c,A.c)||!!b.blend&&(!!A.blend||i(b.blend,A.c))||!!A.blend&&i(A.blend,b.c);let r=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const b of s)b.x<r&&(r=b.x),b.y<a&&(a=b.y),b.z<l&&(l=b.z),b.x>c&&(c=b.x),b.y>h&&(h=b.y),b.z>u&&(u=b.z);const f=t?t[0]:(r+c)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(l+u)/2,m=[],x=[],g=[],y=[],w=[],v=new Set;for(const b of s){const A=b.x-f,C=b.y-d,I=b.z-p,U=$d(b.c[0],b.c[1],b.c[2]),F=$d(b.c[0]*Uc,b.c[1]*Uc,b.c[2]*Uc);for(const{n:k,t1:Y,t2:X}of ZS){if(n(b.x+k[0],b.y+k[1],b.z+k[2]))continue;const et=(B,H)=>[A+k[0]/2+Y[0]*B+X[0]*H,C+k[1]/2+Y[1]*B+X[1]*H,I+k[2]/2+Y[2]*B+X[2]*H],G=et(-.5,-.5),K=et(.5,-.5),it=et(.5,.5),ft=et(-.5,.5);for(const B of[G,K,it,G,it,ft])m.push(B[0],B[1],B[2]),x.push(k[0],k[1],k[2]),g.push(U[0],U[1],U[2]);for(const[B,H,P]of[[Y,X,1],[Y,X,-1],[X,Y,1],[X,Y,-1]]){const V=n(b.x+B[0]*P,b.y+B[1]*P,b.z+B[2]*P);if(V&&o(V,b)&&!n(b.x+B[0]*P+k[0],b.y+B[1]*P+k[1],b.z+B[2]*P+k[2]))continue;const D=at=>[A+k[0]/2+B[0]*P/2+H[0]*at/2,C+k[1]/2+B[1]*P/2+H[1]*at/2,I+k[2]/2+B[2]*P/2+H[2]*at/2],z=D(1),W=D(-1),Q=z.map(at=>at.toFixed(2)).join(),j=W.map(at=>at.toFixed(2)).join(),vt=Q<j?`${Q}|${j}`:`${j}|${Q}`;if(v.has(vt))continue;v.add(vt);const wt=.006;y.push(z[0]+k[0]*wt,z[1]+k[1]*wt,z[2]+k[2]*wt,W[0]+k[0]*wt,W[1]+k[1]*wt,W[2]+k[2]*wt),w.push(F[0],F[1],F[2],F[0],F[1],F[2])}}}const M=new Re;M.setAttribute("position",new Gt(m,3)),M.setAttribute("normal",new Gt(x,3)),M.setAttribute("color",new Gt(g,3));const S=new Re;S.setAttribute("position",new Gt(y,3)),S.setAttribute("color",new Gt(w,3));const E=[(c-r)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(E[0],E[1],E[2])*1.15;return{faces:M,edges:S,radius:_}}const z0=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],ye=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),QS={calm:{...ye("lid",.1),smile:.08},pleased:{...ye("lid",.2),...ye("low",.3),...ye("raise",.1),smile:.65},happy:{...ye("raise",.35),...ye("arch",.25),...ye("low",.42),smile:.9,open:.16},joy:{...ye("raise",.85),...ye("arch",.4),...ye("low",.55),smile:1,open:.6,roll:.06},surprised:{...ye("raise",1.5),...ye("arch",.45),...ye("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...ye("lid",.2),skew:.42},sad:{...ye("inner",.95),...ye("raise",-.1),...ye("lid",.36),...ye("tilt",-.5),smile:-.75,nod:.08},bored:{...ye("lid",.5),...ye("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...ye("lid",.72),...ye("tilt",-.25),...ye("raise",-.2),...ye("inner",.2),smile:-.05,nod:.18},yawn:{...ye("lid",1),...ye("raise",.75),...ye("inner",.3),open:1,round:.55,nod:-.14},asleep:{...ye("lid",1.05),...ye("raise",-.12),...ye("inner",.12),smile:.05,open:.06},excited:{...ye("raise",.9),...ye("inner",-.1),...ye("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...ye("raise",.85),...ye("arch",.3),...ye("lid",.04),roll:.12,smile:.25}},jS={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Kd=()=>Object.fromEntries(z0.map(s=>[s,s==="pupil"?1:0])),tb=s=>new It().setRGB(s[0]/255,s[1]/255,s[2]/255,He);class eb{constructor(t){R(this,"head",new me);R(this,"solid",[]);R(this,"drop");R(this,"roll",0);R(this,"nod",0);R(this,"own",[]);R(this,"brows",[]);R(this,"eyes",[]);R(this,"mouth",[]);R(this,"seam",0);R(this,"lipH",.5);R(this,"browLo",0);R(this,"browHi",0);R(this,"d",Kd());R(this,"mood","calm");R(this,"feeling",null);R(this,"feelFor",0);R(this,"blinkIn",1.5);R(this,"blinkT",-1);R(this,"blinkLen",.13);R(this,"glance",new pt);R(this,"glanceIn",1);R(this,"micro",new pt);R(this,"microIn",.5);R(this,"talkT",0);R(this,"syl",0);R(this,"sylLen",.16);R(this,"sylAmp",0);R(this,"sylRound",0);R(this,"pause",0);R(this,"beat",0);R(this,"wasTalking",!1);R(this,"lookX",0);R(this,"lookY",0);const e=KS(t);let n=1/0,i=1/0,o=1/0,r=-1/0,a=-1/0,l=-1/0;for(const G of e)n=Math.min(n,G.x),r=Math.max(r,G.x),i=Math.min(i,G.y),a=Math.max(a,G.y),o=Math.min(o,G.z),l=Math.max(l,G.z);const c=(n+r)/2,h=(i+a)/2,u=(o+l)/2;this.drop=(h-(ae-1)/2)/16;const f=Iu(t),d=8,p=G=>G<d?0:1,m=[!1,!1];for(const G of e)G.part==="eye"&&(m[p(G.x)]=!0);const x=[236,240,246],g=e.map(G=>G.part==="brow"||G.part==="mouth"?{...G,c:f,part:void 0}:G.part==="pupil"&&m[p(G.x)]?{...G,c:x}:G),{faces:y,edges:w}=JS(g,[c,h,u]),v=new cl({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),M=new Lp({vertexColors:!0});this.own.push(y,w,v,M);const S=new St(y,v);this.head.add(S,new Mg(w,M)),this.solid.push(S);const E=new fn(1,1,1);this.own.push(E);const _=new Map,b=G=>{const K=G.join();let it=_.get(K);return it||(it=new cl({color:tb(G)}),_.set(K,it),this.own.push(it)),it},A=G=>{const K=new St(E,b(G));return this.head.add(K),this.solid.push(K),K},C=G=>G.z-u+.5,I=e.filter(G=>G.part==="brow");for(const G of[0,1]){const K=I.filter(V=>p(V.x)===G);if(!K.length)continue;const it=K.map(V=>V.x),ft=Math.min(...it),B=Math.max(...it),H=(ft+B)/2,P=Math.max(.5,(B-ft)/2);for(const V of K){const D=G===0?(H-V.x)/P:(V.x-H)/P;this.brows.push({m:A(V.c),x:V.x-c,y:V.y-h,z:C(V),xn:D,side:G})}}const U=e.filter(G=>G.part==="eye"||G.part==="pupil"),F=f.map(G=>Math.round(G*.88));let k=-1/0;for(const G of[0,1]){const K=U.filter(dt=>p(dt.x)===G);if(!K.length)continue;const it=K.map(dt=>dt.x),ft=K.map(dt=>dt.y),B=Math.min(...it),H=Math.max(...it),P=Math.min(...ft),V=Math.max(...ft);k=Math.max(k,V);const D=Math.max(...K.map(C)),z=(B+H)/2-c,W=(P+V)/2-h,Q=H-B+1,j=V-P+1;let vt=null;const wt=Math.max(1,Q-2),at=Math.max(1,j-2);if(m[G]){const dt=K.find(_t=>_t.part==="pupil").c;vt=A(dt),vt.scale.set(wt,at,.05)}const mt=[];for(let dt=B;dt<=H;dt++){const _t=Q>1?G===0?(dt-B)/(Q-1):(H-dt)/(Q-1):.5;mt.push({x:dt-c,k:_t,up:A(F),low:A(F)})}this.eyes.push({side:G,y0:P-h-.5,y1:V-h+.5,z:D,cx:z,cy:W,pupil:vt,pw:wt,ph:at,reach:(Q-wt)/2,cols:mt})}const Y=e.filter(G=>G.part==="mouth");if(Y.length){const G=[...new Set(Y.map(D=>D.x))].sort((D,z)=>D-z),K=Y.map(D=>D.y),it=Math.min(...K),ft=Math.max(...K),B=ft-it+1;this.seam=B>=2?(it+ft)/2-h:it-h,this.lipH=B>=2?1:.5;const H=(G[0]+G[G.length-1])/2,P=Math.max(.5,(G[G.length-1]-G[0])/2),V=Y[0].c;for(const D of G){const z=Math.max(...Y.filter(W=>W.x===D).map(C));this.mouth.push({x:D-c,z,xn:(D-H)/P,top:A(V),bot:A(V),inside:A([46,22,28])})}}const X=this.brows.map(G=>G.y),et=Math.max(...e.filter(G=>G.c[0]===f[0]&&G.c[1]===f[1]&&G.c[2]===f[2]).map(G=>G.y));this.browLo=k===-1/0?-2:k-h+.85-(X.length?Math.min(...X):0),this.browHi=et-h-.8-(X.length?Math.max(...X):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const o=this.current,r={...Kd(),...QS[o]};if(i!==null&&(r.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),r.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);r.open=Math.max(r.open*.6,f),r.round=Math.max(r.round,this.sylRound*f),r.lid0-=.05,r.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),r.raise0+=.42*this.beat,r.raise1+=.42*this.beat,r.nod+=.05*this.beat;const a=jS[o]??8;for(const u of z0){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(r[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=o==="asleep"?0:t,this.blinkIn<=0&&(this.blink(o==="sleepy"),this.blinkIn=(o==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}o==="thinking"&&(c=.7,h=.6),this.lookX+=(Ae.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(Ae.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=o=>e[o],i=.1;for(const o of this.brows){const r=o.side;let a=n("raise"+r)+n("inner"+r)*-o.xn*.65+n("arch"+r)*(1-o.xn*o.xn)*.9;a=Ae.clamp(a,this.browLo,this.browHi),o.m.position.set(o.x,o.y+a,o.z+.14+i/2),o.m.scale.set(1.001,1,i)}for(const o of this.eyes){const r=o.side,a=o.y1-o.y0;for(const l of o.cols){const c=Ae.clamp(Math.max(t*1.05,n("lid"+r)+n("tilt"+r)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:Ae.clamp(n("low"+r)*h,0,1)*a*.6;this.lid(l.up,l.x,o.y1+.08,-(c+(c>.01?.08:0)),o.z),this.lid(l.low,l.x,o.y0-.08,u+(u>.01?.08:0),o.z)}if(o.pupil){const l=Ae.clamp(e.pupil,.6,1.25);o.pupil.scale.set(o.pw*l,o.ph*l,.05),o.pupil.position.set(o.cx+this.lookX*o.reach*.95,o.cy+this.lookY*o.reach*.7,o.z+.02)}}for(const o of this.mouth){const r=o.xn,a=e.smile*(1.25*r*r-.25)+e.skew*r*.7,l=Ae.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*r*r)*(1-l*.75*r*r)*2.4,h=1-l*.35*Math.max(0,Math.abs(r)-.5)*2,u=this.seam+a;o.top.position.set(o.x,u+this.lipH/2,o.z+.01+i/2),o.top.scale.set(h,this.lipH,i),o.bot.position.set(o.x,u-c-this.lipH/2,o.z+.01+i/2),o.bot.scale.set(h,this.lipH,i),o.inside.visible=c>.02,o.inside.position.set(o.x,u-c/2,o.z+.005+i/4),o.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,o){const r=Math.abs(i);t.visible=r>.01,t.visible&&(t.position.set(e,n+i/2,o+.07+.03),t.scale.set(1.001,r,.06))}dispose(){for(const t of this.own)t.dispose()}}const Ge=22,F0=.6,Je=Math.PI*2,Ye=(s,t,e)=>s<t?t:s>e?e:s,ni=s=>s<0?0:s>1?1:s,kt=(s,t,e)=>s+(t-s)*e,he=s=>{const t=ni(s);return t*t*(3-2*t)},fr=s=>{const t=ni(s);return t*t*t*(t*(t*6-15)+10)},mo=s=>s-Math.floor(s),wn=s=>Math.atan2(Math.sin(s),Math.cos(s)),k0=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Gi=-.06,Ln=.11,bn=.19;class nb{constructor(t){R(this,"xs",[]);R(this,"zs",[]);R(this,"cum",[]);R(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,o)=>{const r=this.xs.length;if(r){const a=Math.hypot(i-this.xs[r-1],o-this.zs[r-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(o),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const o=e[i-1],r=e[i],a=e[i+1],l=Math.hypot(r.x-o.x,r.z-o.z),c=Math.hypot(a.x-r.x,a.z-r.z),h=(r.x-o.x)/l,u=(r.z-o.z)/l,f=(a.x-r.x)/c,d=(a.z-r.z)/c;if(h*f+u*d>.999){n(r.x,r.z);continue}const p=Math.min(.42,l*.5,c*.5),m=r.x-h*p,x=r.z-u*p,g=r.x+f*p,y=r.z+d*p;for(let w=0;w<=8;w++){const v=w/8,M=1-v;n(M*M*m+2*M*v*r.x+v*v*g,M*M*x+2*M*v*r.z+v*v*y)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const o=n+i>>1;e[o]<=t?n=o:i=o}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],o=i>0?ni((t-this.cum[n])/i):0;return e.x=kt(this.xs[n],this.xs[n+1],o),e.z=kt(this.zs[n],this.zs[n+1],o),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Ye(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const Oa=.05,Ba=.12;class ib{constructor(t,e){R(this,"L");R(this,"thigh");R(this,"shin");R(this,"footH",.06);R(this,"hipX",.17);R(this,"armLen");R(this,"legless");R(this,"pos",new L);R(this,"yaw",0);R(this,"lean",0);R(this,"roll",0);R(this,"twist",0);R(this,"swayRoll",0);R(this,"squash",0);R(this,"stretch",0);R(this,"feet");R(this,"arms");R(this,"dance",null);R(this,"dancing",!1);R(this,"danceBag",null);R(this,"danceJump",!1);R(this,"dmove",null);R(this,"danceDip",0);R(this,"danceTwist",0);R(this,"danceRoll",0);R(this,"danceOff",0);R(this,"lastStep",-1e9);R(this,"danceSteps",!1);R(this,"lastBeat",null);R(this,"beatRate",0);R(this,"standAt",new L);R(this,"onPuff",null);R(this,"onPrint",null);R(this,"airborne",!1);R(this,"rest","stand");R(this,"breath",0);R(this,"asleep",!1);R(this,"headDrop",0);R(this,"hipDrop",0);R(this,"scratch",null);R(this,"scratchIn",5);R(this,"world");R(this,"base",new L);R(this,"vy",0);R(this,"qv",0);R(this,"qRest",0);R(this,"leanV",0);R(this,"leanRest",0);R(this,"sv",0);R(this,"stretchRest",0);R(this,"speed",0);R(this,"accel",0);R(this,"lastSpeed",0);R(this,"wantYaw",null);R(this,"trip",null);R(this,"pending",null);R(this,"act",null);R(this,"phase",0);R(this,"running",0);R(this,"clockOn",!1);R(this,"gRef",0);R(this,"held",!1);R(this,"wallSide",0);R(this,"sway",0);R(this,"swayV",0);R(this,"shift",0);R(this,"shiftIn",3);R(this,"clock",0);R(this,"tapT",-1);R(this,"seq",null);R(this,"queued",[]);R(this,"restYaw",null);R(this,"anchor",{x:0,z:0,g:0,yaw:0});R(this,"t1",new L);R(this,"t2",new L);R(this,"t3",new L);R(this,"e1",new Wn);R(this,"turning",null);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=r=>({side:r,mode:"ground",sole:new L,yaw:0,pitch:0,from:new L,to:new L,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new L,kneeOut:0,sy:0,ankle:new L,q:new Me,toe:0});this.feet=[i(-1),i(1)];const o=r=>({side:r,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[o(-1),o(1)]}standBase(t=this.danceOff){return this.standAt.set(this.base.x+Math.cos(this.yaw)*t,this.base.y,this.base.z-Math.sin(this.yaw)*t)}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*Ge*e):t==="run"?Math.sqrt(.45*Ge*e):Math.min(9,Math.sqrt(1.15*Ge*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(Ge*e)),i=Ye(2*n**.3*e,.35*e,2.6*e),o=Math.max(i,t/this.boundFreq);return kt(i,o,this.running)}get duty(){return kt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const o={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[o,...t]}]:this.split(o,t);this.trip={gait:e,stride:i,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const o=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!o)return!1;t==="lie"&&!o.lie&&(t="kneel"),this.restYaw=o.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),o=i.find(a=>this.roomToRest(a,!0,t,e));if(o!==void 0)return{yaw:o,lie:!0};const r=i.find(a=>this.roomToRest(a,!1,t,e));return r===void 0?null:{yaw:r,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const o=this.world.groundAt(n,i),r=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,i-l*u+a*f)-o)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=r*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=r*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],o={x:Math.round(t.x),z:Math.round(t.z)},r=this.world.groundAt(o.x,o.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-r,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-o.x),z:Math.sign(a.z-o.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:o.x+u.x*f,z:o.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:o,b:a,ha:r,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);o=a,r=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new nb(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let o=0;o<=i.total+Oa;o+=Oa)i.at(o,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},o=new L(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),r=e.type==="climb",a=r?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",o,a,Math.atan2(i.x,i.z)),r){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new L(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=r=>(r.sole.x-this.base.x)*e+(r.sole.z-this.base.z)*n;for(const r of this.feet)r.mode==="swing"&&!r.clocked&&(r.mode="ground",r.sole.copy(r.to),r.yaw=r.toYaw);const o=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=o*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;if(!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand")this.stepRest(t);else if(this.asleep)this.breath=mo(this.breath+t/3.6);else if(this.act)this.stepAct(t);else if(e&&e.path)this.legless?this.stepHopper(t,e):this.stepWalk(t,e);else{const n=this.dance&&!this.legless?this.dance():null;n!==null?this.stepDance(t,n):this.stepStand(t)}this.dancing&&(this.act||this.trip||this.seq||this.rest!=="stand"||!this.dance||this.dance()===null)&&(this.act&&this.danceJump?this.dancing=!1:this.endDance()),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),o=e.gait==="bound",r=o?4.5:e.gait==="run"?4:3,a=o?4.5:e.gait==="run"?5:4.5,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,l-.03))),h=1/0;this.held=!1;for(const S of this.feet)S.mode==="ground"&&(h=Math.min(h,S.sole.y));if(h<1/0){const S=Math.sin(this.yaw),E=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let b=0;b<=.8;b+=.05){const A=this.world.groundAt(this.base.x+S*b,this.base.z+E*b);if(A>Math.max(h,_)+.2){A<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,b-.18))),this.held=b<.45);break}}}const u=Math.abs(wn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=ni((1.6-u)/1.1);const f=Ye((c-this.speed)*3,-a*1.6,r);this.accel+=(f-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),l<=.01&&(this.speed=0,this.accel=0);const d=this.gaitSpeed("walk"),p=this.gaitSpeed("bound"),m=ni((this.speed-d*1.05)/(p*.85-d*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=kt(4.5,8,this.running)*t;this.yaw+=Ye(wn(x-this.yaw),-g,g);const y=d/this.strideAt(d),w=Math.max(y*kt(.75,1.5,he((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,M=this.running>.45;if(this.clockOn){this.phase+=w*t;for(let S=0;S<2;S++){const E=this.feet[S],_=mo(this.phase-S*.5);_<v?E.mode==="swing"&&E.clocked&&this.touchDown(E,M?1:.55):(E.mode!=="swing"&&(this.liftOff(E,!0,0),this.feet.every(b=>b.mode!=="ground")&&(this.qv+=1.6*this.running)),E.s=(_-v)/(1-v),E.s<.7&&this.aimSwing(E,e,(1-_)/w,v/2/w)),this.footPitch(E,_,v,M)}}if(this.airborne=this.clockOn&&this.feet.every(S=>S.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const E of this.feet)E.mode!=="swing"||!E.clocked||(E.clocked=!1,E.dur=Math.max(.08,(1-E.s)*((1-v)/w)),E.s=0,E.from.set(E.ankle.x,E.ankle.y-this.footH,E.ankle.z),E.fromYaw=E.yaw,E.apex=Math.max(E.from.y,E.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(E=>E.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,M?"run":"walk",w,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const o=e.path,r=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(o.total,e.s+Math.max(r*(n+i),this.held?.55:0)),l=o.at(a,this.t1),c=o.yawAt(a>=o.total-.01?o.total:a),h=Math.abs(wn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,kt(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const o=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*o,i.z=e.z-Math.sin(n)*o,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),o=Ye(.3+.08*this.legW,.35,.55);for(let r=0;r<10;r++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(bn+.01),t.z+i*(bn+.01)),c=this.world.groundAt(t.x+n*o,t.z+i*o),h=this.world.groundAt(t.x+n*(Gi-.02),t.z+i*(Gi-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Ye(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let o=1;o<6;o++){const r=o/6;i=Math.max(i,this.world.groundAt(kt(t.from.x,t.to.x,r),kt(t.from.z,t.to.z,r)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const o=e/n;i?t.pitch=o<.5?0:-.85*he((o-.5)/.5):t.pitch=o<.12?.22*(1-he(o/.12)):o<.6?0:-.7*he((o-.6)/.4)}else if(t.mode==="swing"){const o=t.s;t.pitch=o<.3?kt(-.7,-.8,o/.3):o<.82?kt(-.8,0,he((o-.3)/.52)):(i?-.05:.22)*he((o-.82)/.18)}}bodyOver(t,e,n,i,o="stroll"){let r=this.shift;const a=o==="strut"?1:0,l=e!=="stand"&&this.clockOn,c=l?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(l)r=-(kt(kt(.95,1.2,a),.1,this.running)*(this.hipX+.015)*c)*Math.cos(Je*(this.phase-i/2)),h=kt(kt(.09,.15,a),.04,this.running)*c*Math.sin(Je*(this.phase-i/2));else if(this.dancing)h=this.danceTwist;else{const w=this.feet.filter(v=>v.mode==="ground");w.length===1&&(r=w[0].side*this.hipX*.85)}r+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(r-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((l?-.13*this.sway/Math.max(.1,this.hipX+.015):this.dancing?this.danceRoll:0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*(this.sway+this.danceOff),this.pos.z=this.base.z-Math.sin(this.yaw)*(this.sway+this.danceOff);const f=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(f+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const d=this.reachTop();let p=d.soft-.012*this.legW;if(e!=="stand"){let w=-1/0,v=!1;for(const M of this.feet)M.mode==="ground"&&(w=Math.max(w,M.sole.y));for(const M of this.feet)M.mode==="swing"&&M.to.y>w+.2&&(v=!0);w>-1/0&&!v&&(p=Math.min(p,w+this.footH+(this.thigh+this.shin)*.955+.5))}if(l&&this.running<.45){const w=kt(.045,.085,a)*this.legW*c*(1-this.running/.45),v=mo(this.phase*2);p-=w*(.5-.5*Math.cos(Je*(v-i)))}let m=p;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const w=.5/n,v=i/n,M=Math.max(0,w-v),S=Ge*M*v/Je,E=this.speed*v/2,_=(this.thigh+this.shin)*.985,b=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-E*E))+.5,A=mo(this.phase*2),C=v/w;let I;if(A<C)I=b-S*Math.sin(Math.PI*(A/C));else{const U=(A-C)*w;I=b+Ge*M/2*U-Ge/2*U*U}m=kt(p,I,he((this.running-.45)/.25))}e==="stand"&&(m-=this.dancing?this.danceDip:.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const w of this.feet){if(w.mode!=="ground")continue;const v=this.kneeAt(w,this.t2),M=Math.sin(w.yaw)*.06,S=Math.cos(w.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+M,v.y-.06,v.z+S))&&(m=Math.max(m,d.hard))}const x=e==="run"?Je*7:Je*4.2,g=e==="run"?.9:.72;this.vy+=(x*x*(m-this.pos.y)-2*g*x*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>d.hard&&(this.pos.y=d.hard,this.vy>0&&(this.vy=0));const y=f+this.footH+.45*this.legW+.5;this.pos.y<y&&(this.pos.y=y,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),o=t.pitch,r=o>0?Gi:o<0?Ln:0,a=-r,l=this.footH,c=Math.cos(o),h=Math.sin(o),u=r+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),o=this.pos.x+n*t.side*this.hipX,r=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-o,c=t.ankle.y-r,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,p=Ye(u,Math.abs(f-d)+.001,f+d-1e-4),m=l/u,x=c/u,g=h/u,y=Ye((f*f+p*p-d*d)/(2*f*p),-1,1),w=Math.sqrt(1-y*y),v=t.kneeOut,M=n*t.side,S=-i*t.side;let E=Math.sin(t.yaw)*(1-v*1.3)+M*(.12+1.2*v),_=k0(-c,this.legW),b=Math.cos(t.yaw)*(1-v*1.3)+S*(.12+1.2*v);const A=E*m+_*x+b*g;E-=m*A,_-=x*A,b-=g*A;const C=Math.hypot(E,_,b)||1;return e.set(o+f*(y*m+w*E/C),r+f*(y*x+w*_/C),a+f*(y*g+w*b/C))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,o=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},r=t.kneeOut;if(!o(r)){t.kneeOut=Math.max(0,r-e*2),o(t.kneeOut)&&(t.kneeOut=r);return}for(let a=.2;a<=1.001;a+=.2)if(r+a<=1.001&&!o(Math.min(1,r+a))||r-a>=-.001&&!o(Math.max(0,r-a)))return;t.kneeOut=r}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,o=.5+.14,r=.45+.45*this.running,a=Math.sin(this.yaw)*r,l=Math.cos(this.yaw)*r,c=(x,g)=>this.world.solidAt(x,n,g)||this.world.solidAt(x,i,g),h=x=>c(this.base.x+t*o*x,this.base.z+e*o*x),u=x=>c(this.base.x+t*o*x+a,this.base.z+e*o*x+l),f=h(1),d=h(-1),p=f||u(1)&&!d,m=d||u(-1)&&!f;return this.wallSide=p&&!m?-1:m&&!p?1:0,p&&!m?.22:m&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,p=t*t-f*f-d*d;return c.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let o=1/0;for(const l of this.feet)l.mode==="ground"&&(o=Math.min(o,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let r=o;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=he((l.s-.55)/.4);h>0&&(r=Math.min(r,r===1/0?c+.3*(1-h):kt(r,c,h))),l.s>.88&&(o=Math.min(o,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return o===1/0&&(o=a+2),r===1/0&&(r=a),{hard:o,soft:Math.min(r,o)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&this.turning===null&&(this.yaw+=Ye(wn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&!this.danceSteps&&this.feet.every(i=>i.mode==="ground")){let i=null,o=0;for(const r of this.feet){const a=this.neutral(r,this.standBase(),this.yaw,this.t2),l=Math.hypot(a.x-r.sole.x,a.z-r.sole.z)+Math.abs(wn(this.yaw-r.yaw))*.35;l>o&&(o=l,i=r)}if(i&&o>.09+.03*this.legW){const r=i;this.liftOff(r,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(r,this.standBase(),this.yaw,r.to),r.toYaw=this.yaw,this.safeFoot(r.to,this.yaw),this.planApex(r,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}stepDance(t,e){var w;this.dancing||(this.dancing=!0,this.danceJump||(this.dmove=null),this.danceJump=!1);const n=Math.floor(e/8);if(!this.dmove||this.dmove.seg!==n){const v=(w=this.dmove)==null?void 0:w.kind,M=this.danceBag??["groove","groove","shimmy","point","roll","spin"];let S=M[Math.floor(Math.random()*M.length)];for(let E=0;E<6&&S===v;E++)S=M[Math.floor(Math.random()*M.length)];this.dmove={seg:n,kind:S},this.turning!==null&&(this.yaw=wn(this.turning),this.turning=null)}const i=this.dmove.kind,o=e-n*8;this.lastBeat!==null&&t>0&&e>this.lastBeat&&(this.beatRate+=((e-this.lastBeat)/t-this.beatRate)*Math.min(1,t*3)),this.lastBeat=e;const r=this.beatRate>.3?1/this.beatRate:.4,a=.5+.5*Math.cos(Je*e),l=Math.cos(Math.PI*e);let c=.9*l,h=a,u=.14*l,f=.04+.05*a,d=-.1*l;const p=Math.max(0,Math.cos(Je*(e-.5)))**4;let m={tp:-.35+.35*l,to:.18+.22*p,te:1.75-.25*p},x={tp:-.35-.35*l,to:.18+.22*p,te:1.75-.25*p},g=0,y=0;if(i==="groove"){const v=1.1*this.hipX,M=_=>{const b=(_%4+4)%4;return b<1.5?-v:b<2?kt(-v,v,fr((b-1.5)/.5)):b<3.5?v:kt(v,-v,fr((b-3.5)/.5))};y=M(e);const S=(e%4+4)%4;c=S<2?S<1?-.95:-.35:S<3?.95:.35,d=-.13*Math.sign(c);const E=Math.ceil(e+.45-1e-6);if(E!==this.lastStep&&E-e<=.45){this.lastStep=E;const _=(E%4+4)%4,b=this.feet[_===0||_===3?0:1];b.mode==="ground"&&(this.liftOff(b,!1,Math.max(.12,(E-e)*r)),this.neutral(b,this.standBase(M(E)),this.yaw,b.to),b.toYaw=this.yaw,this.safeFoot(b.to,this.yaw),this.planApex(b,.05+.03*this.legW))}}if(this.danceOff=i==="groove"?y:this.danceOff*(1-Math.min(1,t*3)),this.danceSteps=i==="groove",i==="shimmy")c*=.35,u=.26*Math.sin(Math.PI*e),m={tp:-.55-.2*Math.sin(Math.PI*e),to:.45,te:1.5},x={tp:-.55+.2*Math.sin(Math.PI*e),to:.45,te:1.5};else if(i==="point"){const v=o%4,M=he(v/.5)*(1-he((v-2)/.6));x={tp:kt(x.tp,-2.3,M),to:kt(x.to,.62,M),te:kt(x.te,.12,M)},m={tp:.3,to:.62,te:1.95},c=kt(c,.85,M),d=kt(d,-.1,M)}else if(i==="roll")f=.02+.11*Math.sin(Je*e-.6),h=.35+.65*a,c*=.6,m.te=x.te=.7;else if(i==="jump"){h=.5+.9*a,m={tp:-1.2-.9*a,to:.5,te:.5},x={tp:-1.2-.9*a,to:.5,te:.5};const v=o%4;v>3.25&&v<3.5&&this.lastStep!==Math.floor(e)+.5&&!this.act&&(this.lastStep=Math.floor(e)+.5,this.danceJump=!0,this.perform(Math.floor(o/4)%2?"cheer":"jump"))}else if(i==="spin"){const v=(o-6)/2;v>-.25&&(g=he((v+.25)/.3)*(1-he((v-.86)/.14)),c=kt(c,-.9,he((v+.25)/.25)),v>=0&&v<=1&&this.turning!==null&&(this.yaw=this.turning+fr(v)*Je),m={tp:-.35,to:.25+1*g,te:.3},x={tp:-.35,to:.25+1*g,te:.3}),v<0?this.turning=null:v<=1?this.turning??(this.turning=this.yaw-fr(v)*Je):this.turning!==null&&(this.yaw=wn(this.turning),this.turning=null)}if(this.shift=c*this.hipX,this.shiftIn=10,this.danceDip=.09*this.legW*h,this.danceTwist=u,this.danceRoll=d,this.leanRest=f,this.qRest=-.05*a*a*a,this.arms[1].tp=m.tp,this.arms[1].to=m.to,this.arms[1].te=m.te,this.arms[0].tp=x.tp,this.arms[0].to=x.to,this.arms[0].te=x.te,this.oneLegPose(g),this.feet[0].mode==="ground"&&g>.02&&(this.feet[0].yaw=this.yaw),this.stepStand(t),g<.02)for(const v of this.feet){if(v.mode!=="ground")continue;const M=ni(-v.side*c/.72);v.pitch=-.38*M*M}}endDance(){this.dancing=!1,this.dmove=null,this.danceDip=this.danceTwist=this.danceRoll=0,this.danceOff=0,this.danceSteps=!1,this.danceJump=!1,this.lastBeat=null,this.leanRest=0,this.qRest=0,this.shiftIn=1,this.turning!==null&&(this.yaw=wn(this.turning),this.turning=null),this.oneLegPose(0)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*Je*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,kt(-n*.97,-n*.55,he(t)),kt(0,.1*n,he(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(r,a,l)=>new L(r,a,l),n=this.thigh+this.shin,i=this.footH,o=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-o,i,0),e(o,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const r=Ba/2,a=bn-.02,l=a+.07,c=Math.asin(Ye((a-r)/this.shin,-1,1)),h=Math.max(r+this.thigh*Math.sin(c+.19),l),u=Math.asin(Ye((h-r)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),p=this.hipX+.03,m=-.08,x=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(m,0,0))),g=this.fromPivot(x,m,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),y=2*Math.max(.12,this.armLen/2-.05)*.92,w=g.head.y-.08-.04;return y*y-w*w>.35*.35&&(g.hands=[this.palm(g.head,m,0,0,-.12,.92),this.palm(g.head,m,0,1,.12,.92)]),g}case"lie":{const a=Math.PI/2,l=e(-.25,.5+Ba,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new Me().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=Ba/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new Me().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const o of[-.5,.5])for(const r of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(o,r,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,o,r,a){const l=new Me().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=r*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new L(c.x+Math.sin(o)*f,Math.max(a,c.y-h),c.z+Math.cos(o)*f)}palm(t,e,n,i,o,r,a=.04){const l=new Me().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new L(c*(.5+Ba/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*r,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new L(h.x+Math.sin(o)*d,a,h.z+Math.cos(o)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(wn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new L(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,o,r,a=0){return{head:t.clone().add(new L(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:o,hands:r,hips:a}}kneelDown(){var m,x;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),o=this.pivotOf(n),r=this.pivotOf(i),a=.14*e,l=o.y+.03*e,c=.12*t,h=Math.sqrt(2*Ge*(l-(o.y-a))),u=c+h/Ge+Math.sqrt(2*(l-r.y)/Ge),f=u+.12*t,d=[],p=[];for(let g=0;;g=Math.min(f,g+1/40)){if(g<=c){const y=he(g/c);d.push(this.fromPivot(new L(0,o.y-a*y,0),.08*y,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(g<u){const y=g-c,w=y/(u-c),v=he(w),M=new L(0,o.y-a+h*y-.5*Ge*y*y,r.z*v),S=[0,1].map(b=>n.ankles[b].clone().lerp(i.ankles[b],v)),E=kt(0,i.feet[0],v),_=w>.5?[((m=i.hands[0])==null?void 0:m.clone())??null,((x=i.hands[1])==null?void 0:x.clone())??null]:[null,null];d.push(this.fromPivot(M,kt(.08,i.lean,v),0,S,[E,E],_,v))}else d.push(i);if(p.push(g/f),g>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var w,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),o=this.pivotOf(n),r=(M,S)=>new Me().setFromEuler(this.e1.set(M,0,S)),a=r(e.lean,e.roll),l=r(n.lean,n.roll),c=[0,1].map(M=>e.ankles[M].clone().sub(this.hipOf(e.head,a,M,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(M=>n.ankles[M].clone().sub(this.hipOf(n.head,l,M,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(i.y,o.y)+.2,d=.14*t,p=Math.sqrt(2*Ge*(f-i.y)),m=d+p/Ge+Math.sqrt(2*(f-o.y)/Ge),x=m+.2*t,g=[],y=[];for(let M=0;;M=Math.min(x,M+1/40)){if(M<=d){const S=he(M/d);g.push(this.fromPivot(i.clone(),kt(e.lean,u,S),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((w=e.hands[0])==null?void 0:w.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(M<m){const S=M-d,E=S/(m-d),_=he(E),b=new L(kt(i.x,o.x,_),i.y+p*S-.5*Ge*S*S,kt(i.z,o.z,_)),A=kt(u,n.lean,_),C=kt(0,n.roll,_),I=r(A,C),U=b.clone().add(new L(0,.5,0).applyQuaternion(I)),F=[0,1].map(X=>{const et=kt(c[X].length(),h[X].length(),_),G=c[X].clone().normalize().lerp(h[X].clone().normalize(),_).normalize().multiplyScalar(et).applyQuaternion(I),K=this.hipOf(U,I,X,1).add(G);return K.y=Math.max(K.y,this.footH+.02),K}),k=[0,1].map(X=>kt(e.feet[X],n.feet[X],_)),Y=[0,1].map(X=>{const et=e.hands[X],G=n.hands[X];return et&&G?et.clone().lerp(G,_):G&&E>.5?G.clone():null});g.push(this.fromPivot(b,A,C,F,k,Y,1))}else g.push(n);if(y.push(M/x),M>=x)break}return{keys:g,at:y,dur:x,t:0,to:"lie",thud:m/x,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/x,pushDone:!1}}springUp(t){var S,E;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),o=this.pose("stand"),r=this.pivotOf(i),a=this.pivotOf(o),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*Ge*(c-r.y)),f=h+u/Ge+Math.sqrt(2*(c-(a.y-l))/Ge),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,m=t==="lie"?i.roll-.35:i.roll,x=new Me().setFromEuler(this.e1.set(i.lean,0,i.roll)),g=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,x,_,i.hips))),y=new L(a.x,a.y-l,a.z),w=[0,1].map(_=>o.ankles[_].clone().sub(y.clone().add(new L(this.feet[_].side*this.hipX,0,0)))),v=[],M=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const b=he(_/h);v.push(this.fromPivot(r.clone(),kt(i.lean,p,b),kt(i.roll,m,b),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((S=i.hands[0])==null?void 0:S.clone())??null,((E=i.hands[1])==null?void 0:E.clone())??null],i.hips))}else if(_<f){const b=_-h,A=b/(f-h),C=new L(kt(r.x,a.x,he(A)),r.y+u*b-.5*Ge*b*b,kt(r.z,a.z,he(A))),I=kt(p,0,he(A)),U=kt(m,0,he(Math.min(1,A*1.4))),F=new Me().setFromEuler(this.e1.set(I,0,U)),k=C.clone().add(new L(0,.5,0).applyQuaternion(F)),Y=he(Math.min(1,A*1.3)),X=kt(i.hips,0,Y),et=[0,1].map(ft=>{const B=kt(g[ft].length(),w[ft].length(),A)-.08*n*Math.sin(Math.PI*A),H=g[ft].clone().normalize().lerp(w[ft].clone().normalize(),Y).normalize(),P=this.hipOf(k,F,ft,X).addScaledVector(H,B);return P.y=Math.max(P.y,this.footH+.02),P}),G=[0,1].map(ft=>kt(i.feet[ft],0,he(A))),K=k.y-.08<this.armLen*.92,it=[0,1].map(ft=>K&&i.hands[ft]&&i.hands[ft].y<.15?i.hands[ft].clone():null);v.push(this.fromPivot(C,I,U,et,G,it,X))}else{const b=he((_-f)/(d-f));v.push(this.fromPivot(new L(a.x,kt(a.y-l,a.y,b),a.z),0,0,[o.ankles[0].clone(),o.ankles[1].clone()],[0,0],[null,null]))}if(M.push(_/d),_>=d)break}return{keys:v,at:M,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var r;const e=this.seq;let n;if(e){e.t+=t;const a=ni(e.t/e.dur),l=e.linear?a:he(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=ni((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(r=this.onPrint)==null||r.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=mo(this.breath+t/(this.rest==="lie"?3.6:4));const o=Math.sin(Je*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*o:0,i&&this.rest==="lie"&&(n.head.y+=.012*o),i&&this.rest==="kneel"){const a=.5+.5*o;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,o=e.dur-n-i;e.w=e.t<n?he(e.t/n):e.t>e.dur-i?he((e.dur-e.t)/i):1;const r=e.t-n;e.wiggle=r>0&&r<o?Math.sin(Je*(e.kind==="chin"?4.5:5.5)*r)*he(r/.15)*he((o-r)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(x,g)=>x&&g?x.clone().lerp(g,n):n<.5?x?x.clone():null:g?g.clone():null,o=kt(t.lean,e.lean,n),r=kt(t.roll,e.roll,n),a=(x,g)=>new Me().setFromEuler(this.e1.set(x,0,g)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(o,r),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(o,r));const f=kt(t.hips,e.hips,n),d=[0,1].map(x=>{const g=t.ankles[x].clone().sub(this.hipOf(t.head,l,x,t.hips)),y=e.ankles[x].clone().sub(this.hipOf(e.head,c,x,e.hips)),w=kt(g.length(),y.length(),n),v=kt(t.ankles[x].y,e.ankles[x].y,n),M=this.hipOf(u,h,x,f),S=kt(g.x,y.x,n),E=kt(g.z,y.z,n),_=Math.hypot(S,E),b=M.y-v,A=Math.sqrt(Math.max(0,w*w-b*b)),C=new L(M.x,Math.max(v,M.y-w),M.z);return _>1e-4&&(C.x+=S/_*A,C.z+=E/_*A),C.y=Math.max(C.y,this.footH+.02),C}),p=x=>{const g=t.hands[x],y=e.hands[x];if(!g||!y)return i(g,y);const w=Math.atan2(g.x-t.head.x,g.z-t.head.z),v=Math.atan2(y.x-e.head.x,y.z-e.head.z),M=w+wn(v-w)*n,S=kt(Math.hypot(g.x-t.head.x,g.z-t.head.z),Math.hypot(y.x-e.head.x,y.z-e.head.z),n);return new L(u.x+Math.sin(M)*S,kt(g.y,y.y,n),u.z+Math.cos(M)*S)},m=[p(0),p(1)];return m.forEach((x,g)=>{x&&(this.outsideBody(x,u,h,this.arms[g].side),x.y=Math.max(x.y,.03))}),{head:u,lean:o,roll:r,ankles:d,feet:[kt(t.feet[0],e.feet[0],n),kt(t.feet[1],e.feet[1],n)],hands:m,hips:f}}outsideBody(t,e,n,i){const o=t.clone().sub(e).applyQuaternion(n.clone().invert()),r=.5+.12;if(Math.abs(o.x)>=r||Math.abs(o.y)>=r||Math.abs(o.z)>=r)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=r-u*o.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(o.setComponent(l,c*r),t.copy(o.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const o=this.feet[n].side;return t.clone().add(new L(o*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),o=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const r=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));o(this.t1.copy(t.head).sub(r).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",o(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new Me().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new Me().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*he((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=o(c,new L),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const o=t.ground;let r=-1/0;for(let a=Math.max(0,Math.floor((e-n)/Oa));a<=Math.min(o.length-1,Math.ceil((e+i)/Oa));a++)r=Math.max(r,o[a]);return r===-1/0?this.world.groundAt(this.base.x,this.base.z):r}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),o=n.total-e.s;this.speed+=Ye(Math.min(i,Math.sqrt(2*6*Math.max(0,o)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Ye(wn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const r=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(r)&&(this.qv-=2.6);const a=mo(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),o<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const o=this.feet.map(r=>{const a=this.neutral(r,e,i,new L);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:o,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*Je*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=he(n/.15)*(1-he((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+fr((n-.12)/.74)*Je,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*ni(n/.45)):0,o=n>.4?Math.sin(Math.PI*ni((n-.4)/.6)):0;this.qRest=.08*i-.12*o,this.armsTo(.12*o,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=wn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),o=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const r=he(e.t/i);this.vy=0,this.pos.y=kt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,r),this.leanRest=.16*r,this.qRest=-.24*r,this.armsTo(.95*r,.12,.3),this.yaw+=Ye(wn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const r=he(e.t/o);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*r);if(this.pos.y=kt(e.y0,this.reachTop().hard,r),this.qRest=.22*r,this.armsTo(-1.5*r,.15,.25),e.t>=o){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/Ge),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/Ge);this.vy=Ge*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=Ge*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Ye(wn(e.yawTo-this.yaw),-6*t,6*t);const r=e.t/e.air,a=Math.sin(Math.PI*ni(r*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*kt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&r>.12&&r<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Ye(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const o=new L((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new L(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),o,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=Je*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Ye(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const r=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=r?kt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=Je*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(r?3.5*Ye(a,-12,12):0))*t,this.lean=Ye(this.lean+this.leanV*t,-.6,.7),this.roll=Ye(-(this.sway/this.hipX)*.045,-.08,.08),r&&this.clockOn){const d=this.running,p=kt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const m of this.arms)m.tp=(m.side===-1?1:-1)*p*Math.cos(Je*(this.phase-.04)),m.to=m.side===this.wallSide?.03:kt(.07,.2,d),m.te=kt(.24,1.55,d)+Math.max(0,-m.tp)*.35}else if(!this.act&&!this.dancing)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=Je*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const o=i.s,r=he(o),a=kt(i.from.x,i.to.x,r),l=kt(i.from.z,i.to.z,r),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=kt(i.from.y,i.to.y,he((o-.15)/.75))+c*Math.pow(Math.sin(Math.PI*o),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,m=f/d,x=Math.min(bn+.08+.35*(1-o),(1-r)*d+bn+.04);let g=-1/0;for(let E=0;E<=4;E++){const _=Gi-.04+(x-Gi+.04)*(E/4);g=Math.max(g,this.world.groundAt(a+p*_,l+m*_))}const y=g+.07*(1-he((o-.82)/.18)),w=Math.max(h,o>.97?i.to.y:y);i.sy=w>i.sy?w:i.sy+(w-i.sy)*Math.min(1,t*30),o<.02&&(i.sy=Math.max(w,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+wn(i.toYaw-i.fromYaw)*r,this.kneeClear(i,t);const v=Math.sin(i.yaw),M=Math.cos(i.yaw),S=i.ankle.y;for(let E=0;E<8;E++){const _=i.ankle.y-this.footH*.5,b=this.kneeAt(i,this.t2),A=b.x+v*.07,C=b.z+M*.07,I=(this.world.solidAt(b.x,b.y,b.z)||this.world.solidAt(A,b.y-.07,C))&&this.world.groundAt(A,C)<b.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*bn,_,i.ankle.z+M*bn)&&!I||i.ankle.y-S>.45)break;i.ankle.y+=.06}i.toe=kt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*o),he(o/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let o=0;o<2;o++){const r=this.kneeAt(i,this.t3),a=(r.x-i.ankle.x)*Math.sin(i.yaw)+(r.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,r.y-i.ankle.y),c=F0-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const o=i.side*(this.hipX+i.rel.x),r=i.rel.z;i.ankle.set(this.pos.x+e*o+n*r,this.pos.y-.5+i.rel.y,this.pos.z-n*o+e*r),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*c*bn,d=i.ankle.y-this.footH+h*bn,p=i.ankle.z+l*c*bn;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const o=i.pitch,r=Math.cos(o),a=Math.sin(o),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*r*Ln,u=i.ankle.z+c*r*Ln,f=i.ankle.y-this.footH*r+Ln*a,d=(this.world.groundAt(h+l*(bn-Ln),u+c*(bn-Ln))+.005-f)/(bn-Ln);d>-1&&(i.toe=Math.min(i.toe,o-Math.asin(Ye(d,-1,1))))}}}}const zc=5,sb=4935768,Zd=.3,ob=14;function rb(){const s=new Ve(.11,Ln-Gi-.01).rotateX(-Math.PI/2).translate(0,0,(Ln+Gi)/2-.005),t=new Ve(.11,bn-Ln-.02).rotateX(-Math.PI/2).translate(0,0,(bn+Ln)/2+.01),e=Aw([s,t]);return s.dispose(),t.dispose(),e}const Jd=72,ab=2.6;let dr=null;function lb(){if(dr)return dr;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),dr=new Es(s),dr.colorSpace=He,dr}class cb{constructor(){R(this,"group",new me);R(this,"puffs",[]);R(this,"dust");R(this,"zeds",[]);R(this,"prints",[]);R(this,"printGeo",rb());R(this,"own",[]);R(this,"m",new ee);R(this,"q",new Me);R(this,"s",new L);const t=new fn(1,1,1),e=new cl({color:15987958});this.dust=new Io(t,e,Jd),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new tn({color:sb,transparent:!0,opacity:Zd,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new St(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>zc+6){const o=this.prints.shift();o.m.removeFromParent(),o.mat.dispose()}}puff(t,e,n){this.puffs.length>=Jd&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new Wn(Math.random(),Math.random(),Math.random())})}z(t){const e=new Dl({map:lb(),transparent:!0,depthWrite:!1,opacity:0}),n=new ru(e);this.group.add(n),this.zeds.push({s:n,age:0,life:ab,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const o=i.age/i.life,r=o<.18?o/.18:1-(o-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(r,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,o)=>{i.age+=t;const r=n-1-o,a=r<zc?1:Math.max(0,1-(r-zc+1)/3),l=1-Math.min(1,Math.max(0,(i.age-ob)/3)),c=Zd*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const o=i.age/i.life;return o>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*o+.06*Math.sin(o*7)),i.y0+.75*o,i.z0),i.s.scale.setScalar(.14+.2*o),i.s.material.opacity=Math.min(1,o*5)*(1-Math.max(0,(o-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const ds=.12,pr={thick:.07,long:.15,wide:.135},Qd=2.6,hb=2.9,mr=2.5,Ha={back:-.55,fwd:2.1,inward:-.22,out:1},go={up:-F0,down:.95,side:.3,twist:.35},Fc={flex:1.55,side:.45,turn:1.6},Xe=(s,t,e)=>s<t?t:s>e?e:s,kc=(s,t,e)=>s+(t-s)*e;function Va(s,t,e,n){const i=new fn(ds,s-t,ds).translate(0,(s+t)/2,0);return n.push(i),new St(i,e)}function Oc(s,t,e){return e.push(s),new St(s,t)}const Bn=new L,Pn=new L,wi=new L,Tl=new ee;function Al(s,t,e){return Pn.copy(s).negate().normalize(),wi.copy(t).addScaledVector(Pn,-t.dot(Pn)),wi.lengthSq()<1e-8&&wi.set(1,0,0).cross(Pn),wi.normalize(),Bn.crossVectors(Pn,wi),Tl.makeBasis(Bn,Pn,wi),e.setFromRotationMatrix(Tl)}const Co=new L,xi=new L,gs=new L,Za=new L,Vh=new L,jd=new Me;function Us(s,t,e,n,i,o,r,a=Math.PI){Co.subVectors(t,s);const l=Co.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Xe(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?xi.set(0,-1,0):xi.copy(Co).divideScalar(l);const u=Xe((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);gs.copy(i).addScaledVector(xi,-i.dot(xi)),gs.lengthSq()<1e-8&&gs.set(0,0,1).addScaledVector(xi,-xi.z),gs.normalize(),Za.copy(s).addScaledVector(xi,e*u).addScaledVector(gs,e*f),Vh.copy(s).addScaledVector(xi,h),Al(Co.subVectors(Za,s),i,o),Al(Vh.sub(Za),i,jd),r.copy(o).invert().multiply(jd)}const hs=new Wn,ub=new L;function tp(s,t,e,n,i="XYZ"){hs.setFromQuaternion(s,i);const o=Xe(hs.x,t[0],t[1]),r=Xe(hs.y,e[0],e[1]),a=Xe(hs.z,n[0],n[1]);(o!==hs.x||r!==hs.y||a!==hs.z)&&s.setFromEuler(hs.set(o,r,a,i))}class fb{constructor(t,e,n){R(this,"root",new me);R(this,"fx",new cb);R(this,"motion");R(this,"placed",!1);R(this,"face");R(this,"world");R(this,"pelvis",new me);R(this,"turn",new me);R(this,"squash",new me);R(this,"legs",[]);R(this,"arms",[]);R(this,"solid",[]);R(this,"own",[]);R(this,"look",null);R(this,"targets",[null,null]);R(this,"talkCh",null);R(this,"clock",0);R(this,"lastBreath",0);R(this,"showing",null);R(this,"yawLook",0);R(this,"pitchLook",0);R(this,"a2");R(this,"v1",new L);R(this,"v2",new L);R(this,"v3",new L);R(this,"v4",new L);R(this,"v5",new L);R(this,"qa",new Me);R(this,"qb",new Me);R(this,"qc",new Me);R(this,"qd",new Me);R(this,"qm",new ee);R(this,"headCap",0);R(this,"scratchSeen",null);R(this,"sc1",new L);R(this,"sc2",new L);R(this,"sc3",new L);R(this,"qf",new Me);R(this,"pts",[0,1,2,3,4].map(()=>new L));R(this,"kg",[0,1,2,3,4,5].map(()=>new L));this.world=n,this.motion=new ib(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new eb(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,o,r]=Iu(t),a=new It().setRGB(i/255,o/255,r/255,He);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new cl({color:t});this.own.push(n);const i=ds/2;if(!e.legless)for(const r of[-1,1]){const a=new me,l=new me,c=new me,h=new me;a.position.set(r*e.hipX,0,0);const u=Va(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=Va(i,-e.shin-i,n,this.own);l.add(f),c.position.y=-e.shin;const d=Oc(new fn(ds,e.footH,Ln-Gi).translate(0,-e.footH/2,(Ln+Gi)/2),n,this.own);h.position.set(0,-e.footH,Ln);const p=Oc(new fn(ds,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:r}),this.solid.push(u,f,d,p)}const o=this.a2;for(const r of[-1,1]){const a=new me,l=new me,c=new me,h=Va(i,-o,n,this.own);a.add(h),l.position.y=-o;const u=Va(i,-o-i,n,this.own);l.add(u),c.position.y=-o;const f=Oc(new fn(pr.thick,pr.long,pr.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new Me;this.arms.push({shoulder:a,elbow:l,wrist:c,side:r,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new L,pushE:0,pushETo:new L,pushN:new L,flatW:0,palm:new L,palmDir:new L(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new L){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new L){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new L).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Xe(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Xe(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const o=kc(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),r=kc(this.face.roll,Xe(this.face.roll,-.03,.03),this.headCap),a=1-Xe(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(o*a,this.yawLook*a,r*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+ds/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),o=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-o&&i.y<1+e-o&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const o=t.parent,r=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let m=0;m<h.length;m++){const x=this.squash.worldToLocal(this.v4.copy(h[m]));if(!(Math.abs(x.x)<.5+n&&x.y>.02-r&&x.y<1+n-r&&Math.abs(x.z)<.5+n))continue;const g=[[.5+n-x.x,1,0,0],[x.x+.5+n,-1,0,0],[.5+n-x.z,0,0,1],[x.z+.5+n,0,0,-1],[1+n-r-x.y,0,1,0]];i&&g.push([x.y+r,0,-1,0]);let y=null;for(const w of g)!i&&this.v2.set(w[1],w[2],w[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!y||w[0]<y[0])&&(y=w);y&&y[0]>c&&(c=y[0],l=m,u.set(y[1],y[2],y[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=o.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(o.matrixWorld).invert()),p=gs.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,o)=>{const r=t.feet[o],a=this.pelvis.worldToLocal(this.v1.copy(r.ankle)),l=this.v3.set(0,0,1).applyQuaternion(r.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?Xe(c,-.2,.7):Xe(c,-.7,.2);if(h!==c){const S=Math.hypot(l.x,l.z);l.x=Math.sin(h)*S,l.z=Math.cos(h)*S}let u=r.q;if(r.mode!=="free"&&Math.abs(c-h)>go.twist*.85){const S=c-h-Math.sign(c-h)*go.twist*.85;u=this.qf.setFromAxisAngle(wi.set(0,1,0),-S).multiply(r.q)}const f=r.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(Bn.set(i.side*(.12+1.2*f),k0(-a.y,t.L),0)),p=ub.set(0,1,0).applyQuaternion(n);if(r.mode==="free"){const S=Xe(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,kc(.6,1,S)).addScaledVector(p,1-.85*S);const E=Xe(-a.z/.25,0,1);d.z+=1.6*E,d.addScaledVector(p,-.9*E)}const m=r.mode==="free"?hb:Qd;Us(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,m),r.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(Bn.set(i.side*.3,0,0)),m);const x=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),g=Math.atan2(x.z,-x.y),y=Math.asin(Xe(x.x*i.side,-1,1)),w=Xe(g,Ha.back,Ha.fwd),v=Xe(y,r.mode==="free"?-.45:Ha.inward,Ha.out);if(w!==g||v!==y){const S=Pn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(w),Math.cos(v)*Math.sin(w));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(x,S))}r.mode==="free"&&this.kneeOverGround(i,a,m),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const M=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(M.invert()).multiply(u),tp(i.ankle.quaternion,[go.up,go.down],[-.35,go.twist],[-.3,go.side]),i.toes.rotation.set(Xe(r.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,o=Qd){const r=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-r.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const m=this.v4.crossVectors(h,d).normalize();m.dot(i)<0&&m.negate();let x=Math.PI/2;for(let y=1;y<=18;y++){const w=y/18*(Math.PI/2);if(f.y+p*(Math.cos(w)*d.y+Math.sin(w)*m.y)<=n){x=w;break}}const g=d.multiplyScalar(Math.cos(x)).addScaledVector(m,Math.sin(x));Us(a,l,r.thigh,r.shin,g,t.hip.quaternion,t.knee.quaternion,o)}kneeOverGround(t,e,n){const i=this.motion,[o,r,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(o),o.y>=this.world.groundAt(o.x,o.z)+ds/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),r.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,r);const p=a.length();if(p<1e-4)return;a.divideScalar(p),l.crossVectors(c,a).normalize(),l.dot(o.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let m=-1;for(let g=1;g<=24&&m<0;g++){const y=g/24*Math.PI;this.pelvis.localToWorld(h.copy(r).addScaledVector(a,p*Math.cos(y)).addScaledVector(l,p*Math.sin(y))),h.y>=this.world.groundAt(h.x,h.z)+ds/2&&(m=y)}if(m<0)return;const x=h.copy(a).multiplyScalar(Math.cos(m)).addScaledVector(l,Math.sin(m));Us(u,e,i.thigh,i.shin,x,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,o=n+i,r=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[r(l)]=l),c){const d=r(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const m=e.arms[p],x=this.v2.set(d.side*.5,-.35,-1);if(f){x.set(0,1,0).applyQuaternion(f);const b=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();x.dot(b)>.3&&x.set(0,1,0),x.multiplyScalar(.45).add(Pn.set(0,0,-1))}d.fk[0].setFromEuler(new Wn(m.pitch,0,d.side*Math.max(.04,m.out))),d.fk[1].setFromAxisAngle(Bn.set(1,0,0),-Xe(m.elbow,0,mr));let g=0,y=!1;const w=m.reach??(h?a[p]:null);if(w){const b=d.shoulder.position;if(m.reach&&m.flat){y=!0;const A=d.shoulder.getWorldPosition(this.v3),C=d.elbow.getWorldPosition(Za);d.palm.copy(w);const I=Co.set(w.x-A.x,0,w.z-A.z);I.lengthSq()>1e-6&&I.normalize();const U=xi.set(w.x-C.x,0,w.z-C.z).addScaledVector(I,.25);U.lengthSq()<1e-4&&U.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),U.normalize(),d.palmDir.lerp(U,d.flatW<.05?1:Math.min(1,t*10)).normalize();const F=this.v1.copy(w).add(Pn.set(0,pr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),k=this.turn.worldToLocal(F);Us(b,k,n,i,x,d.ik[0],d.ik[1],mr)}else{const A=this.turn.worldToLocal(this.v1.copy(w));if(m.reach||w===c){if(w===c){const C=d.shoulder.getWorldPosition(Vh),I=Co.set(Xe(C.x,c.x-.5,c.x+.5),Xe(C.y,c.y-.5,c.y+.5),Xe(C.z,c.z-.5,c.z+.5));I.addScaledVector(xi.subVectors(C,I).normalize(),.06),this.turn.worldToLocal(A.copy(I))}A.distanceTo(b)<=o*.98||m.reach?Us(b,A,n,i,x,d.ik[0],d.ik[1],mr):this.pointAlong(d,A)}else this.pointAlong(d,A)}g=m.reach?m.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&m.reach){const b=d.shoulder.position,A=e.headDrop,C=this.turn.worldToLocal(this.sc1.copy(m.reach).add(Pn.set(0,pr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),I=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-A-.15,.62):this.sc2.set(d.side*.4,1.14-A,-.04+.05*v.wiggle);let U=C;if(v.kind==="chin")U=C.lerp(I,v.w);else{const F=this.sc3.set(d.side*.9,1.25-A,.1),k=v.w,Y=1-k;U=C.multiplyScalar(Y*Y).addScaledVector(F,2*k*Y).addScaledVector(I,k*k)}x.lerp(v.kind==="chin"?Bn.set(d.side,-.3,.1):Bn.set(d.side,.35,-.15),v.w),Us(b,U,n,i,x,d.ik[0],d.ik[1],mr),y=v.w<.05,g=1}d.aimW+=((w?g:0)-d.aimW)*Math.min(1,t*(m.reach?30:7)),d.flatW+=((y?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const M=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=M?1:0,M&&d.pushETo.copy(M),d.pushE>0){const b=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);Al(b,x,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const S=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),E=y?null:this.pushOut(S,.13,d.shoulder.getWorldPosition(this.v3));if(E?(d.pushTo.copy(E),d.pushN.subVectors(E,S).normalize(),d.push=1):d.push=0,d.push>0){const b=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));b.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const A=this.turn.worldToLocal(this.v1.copy(d.pushTo));Us(d.shoulder.position,A,n,i,b,this.qa,this.qb,mr),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(Bn.set(1,0,0),Xe(-.1-.05*m.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const b=d.elbow.getWorldQuaternion(this.qb);Bn.set(0,this.v3.set(1,0,0).applyQuaternion(b).y<0?-1:1,0),Pn.copy(d.palmDir).negate(),wi.crossVectors(Bn,Pn).normalize(),Pn.crossVectors(wi,Bn).normalize(),Tl.makeBasis(Bn,Pn,wi);const A=this.qc.setFromRotationMatrix(Tl),C=b.invert().multiply(A);tp(C,[-.45,Fc.side],[-1.6,Fc.turn],[-1.55,Fc.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,C,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),o=this.v5.subVectors(i,n);if(o.lengthSq()<1e-6)return;o.normalize();const r=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=gs.crossVectors(o,r).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(o,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(o,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=gs.subVectors(e,t.shoulder.position);Al(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(Bn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),o=Math.round(t.y),r=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,o+h,r+u))continue;const f=c?(i+c*.5-t.x)*c:h?o+.5-t.y:(r+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<l&&(l=p,a=new L(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new L).distanceTo(t.feet[l].ankle));let n=0,i=0;const o=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},r=[0,1,2,3,4].map(()=>new L);for(const a of this.legs)this.legPoints(a,r),[r[2],r[3],r[4]].forEach(o),i+=r.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,r),[r[1],r[4]].forEach(o),i+=r.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const db="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",pb="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",mb="I hid your mouse pointer! If you want it back, press the {ESC} key!",gb="Click anywhere to look around.",xb="Click anywhere to carry on.",vb="That's it! This way.",yb="Hi, Welcome to Robyn Miller's Listening Room. Feel free to take a look around.",Mb="You are currently one of {x} people in the room.",_b="Things are quiet. You are the only person in the room.",wb="Have a seat and listen to some of my favorite grooves, man.",Sb="Just so you know, the sweet spot for listening to Robyn's awesome tunes is the couch. And it's more comfy!",bb=["Ooh. I know this one.","Now this has a beat.","Excuse me. I have to.","Finally, a groove."],Eb=["I've been practising.","Smooth, right?","Don't watch my feet. Watch the hat.","I learned this from a record. This record, actually.","Try to keep up.","I don't dance for just anybody. Well. I do."],Tb="I hope you enjoyed your listening experience! Anything we could do to make it more enjoyable? Or maybe you just want to leave Robyn a note?",Ab="Sure!",Rb="No thanks",Cb="Okay! Come back soon!",Pb="I get lonely here. Please come visit! And any suggestions?",Lb="Yeah...",Ib="Not really.",Db="Bye!",Nb=["You may think that I'm not an appropriate host for a listening room? Hm. Well maybe you're not an appropriate guest for our listening room!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Have a seat. The couch is very forgiving.","That couch has been sat on by a lot of very important listeners. Mostly me.","The green velvet is a little worn. That means it works.","Go on, try the piano. It doesn't bite. The lid might.","I'd play the piano myself, but my arms only reach middle C.","Those speakers are taller than me. Most things are.","I asked the speakers to keep it down. They said they'd think about it.","The records are in the stand on the table. Sit on the couch and have a look. Gently.","Somewhere in that stand is my favourite record. I'm not telling which.","Turn it up? I don't know where the knob is. I've been told not to look for it.","Shh. The room is listening.","The best seat is the middle of the couch. Second best: anywhere on the couch.","Every room needs a host. This one got me. Lucky room.","I polished the piano myself. You can see me in it. Hello, me.","Music is best enjoyed slowly. Like soup.","I used to be just a block. Now I'm a block with legs. That's progress.","No hurry. I'm on listening-room time.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","If you hear snoring later, that was the bass.","Those little lights on the amplifier? I counted them. Twice. Two different answers.","Close your eyes. Now open them. See? Still a listening room.","Don't mind me. I'm just here for the ambience. I am the ambience.","I'm a professional. I've hosted at least one listener before. Possibly two.","Did you know a piano has eighty-eight keys? I checked. With my hat.","The lights are low on purpose. Ears work better in the dark. I read that somewhere. On a record.","That cord goes from the record player all the way to the back of the cabinet. I followed it. It took a while.","If you need me, I'll be right behind you. Always. Right behind you.","Do you play? You have a piano player's way of standing.","Some people listen with their ears. I listen with my whole block."],Ub=["Yes? Can I help you?","Hey! Listen to the room, not to me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a record.","Me? I'm not part of the furniture. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was humming.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],zb=["Hm? Oh! I wasn't asleep. I was listening with my eyes closed.","I'm up! I'm up!","Was I snoring? I don't snore. That was the bass.","Huh? Who? Oh. You. Welcome back."],Fb=["Back again! I knew you would be.","Welcome back. I kept the couch warm.","Oh good, you're back. It's quiet in here without you."],kb=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an ear on things.","Bye! The records will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],Ob=["Lovely, isn't it?","Good choice.","That's one of my favourites. Don't tell the others."],Bb=["Oh! Someone else just came in. There are {x} of you now.","Another listener! That makes {x} of you."],Hb=["Somebody just left. Now there are {x} of you."],Vb=["Somebody just left. It's just you and me now."];function mi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const Ue=.2,Gb=Math.sqrt(9.81/(22*Ue)),Wb={...WS,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},gr=(s,t,e,n=new L)=>n.set(s/Ue,t/Ue-.5,e/Ue),xr=(s,t=new L)=>t.set(s.x*Ue,(s.y+.5)*Ue,s.z*Ue);class Xb{constructor(t,e,n,i=!1){R(this,"scene",new ou);R(this,"cam",new hn);R(this,"mcam",new hn);R(this,"shadow");R(this,"rig");R(this,"count",null);R(this,"onEnter",()=>{});R(this,"onLeave",()=>{});R(this,"el");R(this,"textEl");R(this,"bubble",null);R(this,"onKey",()=>{});R(this,"hidden",!1);R(this,"wasLocked",!1);R(this,"hidSaid",!1);R(this,"choicesEl");R(this,"pendingChoices",null);R(this,"queue",[]);R(this,"used",new Set);R(this,"grid",null);R(this,"stage","waiting");R(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});R(this,"inside",!1);R(this,"wasInside",!1);R(this,"wasOut",!0);R(this,"quiet",0);R(this,"resting","no");R(this,"soughtRest",!1);R(this,"idleIn",6);R(this,"remarkIn",45);R(this,"followIn",0);R(this,"hemi");R(this,"sun");R(this,"dim",1);R(this,"glanceIn",2);R(this,"glanceAt",null);R(this,"dest",null);R(this,"last",{x:0,z:0,yaw:0,pitch:0});R(this,"countSaid",0);R(this,"lastCrowd",-999);R(this,"clock",0);R(this,"standH",0);R(this,"v1",new L);R(this,"v2",new L);R(this,"waitAt",null);R(this,"danceBeat",()=>null);R(this,"dancingNow",!1);R(this,"danceSpotIn",0);R(this,"danceTalkIn",0);R(this,"danceRound",[]);R(this,"danceAt",-1);R(this,"danceNext",0);R(this,"bpmAt",null);R(this,"bpmSeen",110);R(this,"heardMusic",!1);R(this,"onSite",()=>!1);R(this,"openContact",()=>{});R(this,"farewell","none");R(this,"doorWas",-1);R(this,"doorAt",0);R(this,"nearing",!1);R(this,"headingFor",0);R(this,"lookedAt",0);R(this,"leavingNow",!1);R(this,"couchAt",-1e9);R(this,"sweetAt",-1e9);R(this,"scaleM",new ee().makeScale(Ue,Ue,Ue));this.gallery=t,this.player=e,this.main=n,this.touch=i;const o={groundAt:(f,d)=>this.wallAt(f*Ue,d*Ue)?this.gallery.arch.H/Ue:-.5,solidAt:(f,d,p)=>{const m=(d+.5)*Ue;return m<0?!0:m<this.gallery.arch.H&&this.wallAt(f*Ue,p*Ue)}};this.rig=new fb(Wb,3,o),this.scene.add(this.rig.root,this.rig.fx.group),this.hemi=new rx(16777215,13815492,1.9),this.scene.add(this.hemi);const r=new ux(16777215,1.5);this.sun=r,r.position.set(.4,1,.7),this.scene.add(r.target),this.scene.add(r);const a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.62)"),c.addColorStop(.55,"rgba(0,0,0,0.3)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);const h=new Es(a);this.shadow=new St(new Ve(1.5,1.2),new tn({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),this.choicesEl=document.createElement("div"),this.choicesEl.className="hb-choices",u.append(this.textEl,this.choicesEl),this.el.append(u),this.textEl.addEventListener("click",f=>{var p;const d=(p=f.target.closest(".hk"))==null?void 0:p.dataset.k;d&&(f.preventDefault(),f.stopPropagation(),this.onKey(d),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get asking(){var t;return!!((t=this.bubble)!=null&&t.choices)}ask(t,e,n="happy"){this.queue=[],this.bubble&&this.endBubble(),this.pendingChoices=e,this.start(t,n)}showChoices(t){t.forEach(([e,n],i)=>{const o=document.createElement("button");o.textContent=e,i===0&&(o.className="yes"),o.addEventListener("pointerdown",r=>r.stopPropagation()),o.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),this.endBubble(),n()}),this.choicesEl.append(o)}),this.choicesEl.classList.add("on")}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*Ue,z:this.rig.pos.z*Ue}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}farewellSpot(){const t=this.arch.entrance,e=(t.a+t.b)/2,n=this.player.pos,i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw);let r=null,a=1/0;for(let l=.6;l<=2.41;l+=.2)for(let c=-1.2;c<=1.21;c+=.15){const h=e+c,u=t.z-l,f=Math.hypot(h-n.x,u-n.z),d=((h-n.x)*i+(u-n.z)*o)/Math.max(f,1e-6);if(f<.9||d<.75||!this.freeAt(h,u)||!this.seen(h,u))continue;const p=Math.abs(Math.abs(c)-.6)+Math.abs(l-1)*.6+Math.max(0,1.8-f);p<a&&(a=p,r={x:h,z:u})}return r??this.doorSpot()}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/Ue,t.z/Ue,0),this.dest=null}gridFor(){var d;if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,o=this.gallery.data.layout.outline.t,r=7,a=e.x0-o-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(o+2.5))/n),h=Math.ceil((e.z1-e.z0+o+r)/n),u=new Uint8Array(c*h),f=((d=this.gallery.furniture)==null?void 0:d.solids)??[];for(let p=0;p<h;p++)for(let m=0;m<c;m++){const x=a+(m+.5)*n,g=l+(p+.5)*n,y=x>e.x0+i&&x<e.x1-i&&g>e.z0+i&&g<e.z1-i,w=g>e.z1+o+i,v=x>t.entrance.a+i&&x<t.entrance.b-i&&g>e.z1-i-.01&&g<e.z1+o+i+.01;!y&&!w&&!v||t.solids.some(M=>x>M.x0-i&&x<M.x1+i&&g>M.z0-i&&g<M.z1+i)||f.some(M=>{const S=x-M.x,E=g-M.z,_=S*M.c-E*M.s,b=S*M.s+E*M.c;return Math.abs(_)<M.hw+i*.8&&Math.abs(b)<M.hd+i*.8})||(u[p*c+m]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),o=Math.floor((e-n.z0)/n.c);return i>=0&&o>=0&&i<n.nx&&o<n.nz&&n.free[o*n.nx+i]===1}clear(t,e,n,i){const o=Math.hypot(n-t,i-e),r=Math.max(1,Math.ceil(o/.1));for(let a=0;a<=r;a++)if(!this.freeAt(t+(n-t)*a/r,e+(i-e)*a/r))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,o=(v,M)=>[Math.floor((v-n.x0)/n.c),Math.floor((M-n.z0)/n.c)];let[r,a]=o(i.x,i.z);const[l,c]=o(t,e),h=(v,M)=>v>=0&&M>=0&&v<n.nx&&M<n.nz&&n.free[M*n.nx+v]===1;if(!h(l,c))return null;if(!h(r,a)){let v=null,M=1/0;for(let S=-4;S<=4;S++)for(let E=-4;E<=4;E++)h(r+E,a+S)&&E*E+S*S<M&&(M=E*E+S*S,v=[r+E,a+S]);if(!v)return null;[r,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,M)=>{const S=Math.abs(v-l),E=Math.abs(M-c);return Math.max(S,E)+.414*Math.min(S,E)},m=[[p(r,a),a*n.nx+r]];f[a*n.nx+r]=0;const x=c*n.nx+l;for(;m.length;){let v=0;for(let _=1;_<m.length;_++)m[_][0]<m[v][0]&&(v=_);const[,M]=m.splice(v,1)[0];if(M===x)break;const S=M%n.nx,E=Math.floor(M/n.nx);for(const[_,b]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const A=S+_,C=E+b;if(!h(A,C)||_&&b&&(!h(S+_,E)||!h(S,E+b)))continue;const I=C*n.nx+A,U=f[M]+(_&&b?1.414:1);U<f[I]&&(f[I]=U,d[I]=M,m.push([U+p(A,C),I]))}}if(!isFinite(f[x]))return null;const g=[];for(let v=x;v!==-1;v=d[v])g.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});g[g.length-1]={x:t,z:e};const y=[i];let w=0;for(;w<g.length-1;){let v=g.length-1;const M=y[y.length-1];for(;v>w+1&&!this.clear(M.x,M.z,g[v].x,g[v].z);)v--;y.push(g[v]),w=v}return y}goTo(t,e,n,i=!1){const o=this.route(t,e);if(!o||o.length<2)return!1;let r=0;for(let c=1;c<o.length;c++)r+=Math.hypot(o[c].x-o[c-1].x,o[c].z-o[c-1].z);if(r<.25)return!1;const a=i&&r<3.2?"walk":r>3.2?"bound":r>1.6?"run":"walk",l=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(o.slice(1).map(c=>({x:c.x/Ue,z:c.z/Ue})),a,()=>{this.dest=null},l),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Vs(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),o=-Math.sin(this.player.yaw),r=-Math.cos(this.player.yaw),a=((t-n.x)*o+(e-n.z)*r)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(t=!1){const e=this.player.pos,n=this.at;if(this.goodSpot(n.x,n.z)&&!this.dest)return;const i=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),a=-Math.sin(this.player.yaw),l=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,h=1/0;if(l.forEach(([f,d],p)=>{const m=e.x+i*f+r*d,x=e.z+o*f+a*d;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-n.x,x-n.z)+p*.15;g<h&&(h=g,c={x:m,z:x})}),!c)return;const u=c;this.dest&&Math.hypot(this.dest.x-u.x,this.dest.z-u.z)<.8||this.goTo(u.x,u.z,t?"strut":void 0,t)}stageSpot(){const t=this.gallery.data.layout.pieces??[],e=t.find(a=>a.id==="table"),n=t.find(a=>a.id==="couch");if(!e||!n)return null;const i=e.x-n.x,o=e.z-n.z,r=Math.hypot(i,o)||1;for(const a of[.9,1.1,.75]){const l=e.x+i/r*a,c=e.z+o/r*a;if(this.freeAt(l,c))return{x:l,z:c}}return null}buildRound(){const t=this.arch.inner,e=1.05,n=t.x0+e,i=t.x1-e,o=t.z0+e,r=t.z1-e,a=[],l=(p,m,x,g)=>{const y=Math.max(1,Math.round(Math.hypot(x-p,g-m)/2));for(let w=0;w<y;w++)a.push({x:p+(x-p)*w/y,z:m+(g-m)*w/y})},c=(n+i)/2;l(c,o,i,o),l(i,o,i,r),l(i,r,n,r),l(n,r,n,o),l(n,o,c,o);const h=(t.x0+t.x1)/2,u=(t.z0+t.z1)/2,f=[],d=this.stageSpot();d&&f.push({...d,stage:!0});for(const p of a)for(let m=0;m<=3;m++){const x=m*.18,g=p.x+(h-p.x)*x,y=p.z+(u-p.z)*x;if(this.freeAt(g,y)&&!f.some(w=>Math.hypot(w.x-g,w.z-y)<1.2)){f.push({x:g,z:y,stage:!1});break}}this.danceRound=f}danceAbout(t){if(this.rig.busy())return;this.danceRound.length||this.buildRound();const e=this.danceRound;if(!e.length)return;const n=this.at;if(this.danceAt<0){const i=e.findIndex(l=>Math.hypot(l.x-n.x,l.z-n.z)<.6);let o=0;e.forEach((l,c)=>{Math.hypot(l.x-n.x,l.z-n.z)<Math.hypot(e[o].x-n.x,e[o].z-n.z)&&(o=c)}),this.danceAt=i>=0?i:o;const r=i>=0&&e[i].stage;this.rig.motion.danceBag=r?["spin","jump","spin","jump","point"]:null;const a=this.danceBpm();this.danceSpotIn=(r?16:8)*(60/a)*(.9+Math.random()*.3);return}if(!((this.danceSpotIn-=t)>0))for(let i=1;i<=e.length;i++){const o=(this.danceAt+i)%e.length;if(this.goTo(e[o].x,e[o].z,"strut",!0)){this.danceNext=o,this.danceAt=-1,this.rig.motion.danceBag=null;return}}}danceBpm(){const t=this.danceBeat(),e=performance.now();if(t!==null&&this.bpmAt&&e-this.bpmAt.t>400){const n=(t-this.bpmAt.b)/((e-this.bpmAt.t)/1e3)*60;this.bpmAt={b:t,t:e},n>30&&n<240&&(this.bpmSeen=n)}else t!==null&&!this.bpmAt&&(this.bpmAt={b:t,t:e});return this.bpmSeen}screenAt(){const t=xr(this.rig.headCentre(this.v1),this.v2).project(this.main);return t.z<1&&Math.abs(t.x)<1&&Math.abs(t.y)<1?{x:(t.x+1)/2,y:(1-t.y)/2}:null}leaving(t){if(this.leavingNow)return;const e=this.player,n=this.arch.entrance,i=(n.a+n.b)/2,o=Math.hypot(e.pos.x-i,e.pos.z-n.z),r=-Math.sin(e.yaw),a=-Math.cos(e.yaw),l=(i-e.pos.x)/Math.max(o,1e-6),c=(n.z-e.pos.z)/Math.max(o,1e-6);(this.doorAt-=t)<=0&&(this.nearing=this.doorWas>=0&&o<this.doorWas-.04,this.doorWas=o,this.doorAt=.25);const h=r*l+a*c>.8&&this.nearing&&o<5.5;if(this.headingFor=h?this.headingFor+t:Math.max(0,this.headingFor-t*2),!(this.stage!=="company"||!this.inside||this.hidden)){if(this.farewell==="none"&&this.heardMusic&&this.onSite()&&this.headingFor>.4){this.farewell="going",this.wake(),this.rig.motion.dance=null;const u=this.waitAt=this.farewellSpot();this.goTo(u.x,u.z)||this.rig.stop();return}if(this.farewell==="going"){if(o>6.5&&this.headingFor===0){this.farewell="none";return}(!this.rig.busy()||o<2.6)&&this.screenAt()&&this.visible(9)&&(this.farewell="asked",this.ask(Tb,[[Ab,()=>{this.farewell="done",this.openContact()}],[Rb,()=>{this.farewell="no",this.say(Cb,"pleased"),this.rig.perform("wave")}]]));return}if(this.asking&&(this.farewell==="asked"||this.farewell==="lonely")&&this.keepInView(t),this.farewell==="asked"&&!this.asking&&(this.farewell="no"),this.farewell==="lonely"&&!this.asking&&(this.farewell="done"),this.farewell==="no"&&!this.bubble){const u=this.rig.headCentre(this.v1),f=xr(u,this.v2),d=this.main.getWorldDirection(new L),p=f.clone().sub(this.main.position),m=p.length()<9&&d.angleTo(p)<.08&&this.visible(9);this.lookedAt=m?this.lookedAt+t:0,this.lookedAt>=.5&&this.askLonely()}}}keepInView(t){const e=this.main.position,n=xr(this.rig.headCentre(this.v1),this.v2),i=n.clone().project(this.main),o=n.x-e.x,r=n.z-e.z,a=Math.hypot(o,r);if(a<.5)return;const l=1-Math.exp(-t*2.5),c=this.player;if(i.z>=1||Math.abs(i.x)>.55){let u=Math.atan2(-o,-r)-c.yaw;u=Math.atan2(Math.sin(u),Math.cos(u)),c.yaw+=u*l}(i.z>=1||i.y<-.4||i.y>.5)&&(c.pitch+=(Math.atan2(n.y-e.y,a)+.2-c.pitch)*l)}askLonely(){this.farewell="lonely",this.lookedAt=0,this.ask(Pb,[[Lb,()=>{this.farewell="done",this.openContact()}],[Ib,()=>{this.farewell="done",this.say(Db,"pleased"),this.rig.perform("wave")}]],"sad")}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?_b:Mb),t.includes("{x}")&&this.count===null){const o=this.queue.shift();o&&this.start(o.text,o.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT|ESC)\}/).map((o,r)=>(r%2,o)).filter(o=>o!==""),i=n.map(o=>Bc(o)?"o":o).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0,choices:this.pendingChoices??void 0},this.pendingChoices=null,this.textEl.textContent="",this.choicesEl.replaceChildren(),this.choicesEl.classList.remove("on"),this.bubble.choices&&this.showChoices(this.bubble.choices),this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.choicesEl.classList.remove("on"),this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const o=Bc(i)?1:i.length,r=Math.max(t.drawn,n),a=Math.min(e,n+o);if(a>r)if(Bc(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=Yb[i],l.textContent=qb[i],this.textEl.append(l)}else{const l=i.slice(r-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=o}t.drawn=e}countLine(){return"{count}"}poke(){if(this.quiet=0,this.wake(),this.farewell==="no"&&!this.asking){this.askLonely();return}this.bubble||(this.say(mi(Ub,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}couch(){this.stage!=="company"||this.hidden||this.clock-this.couchAt<45||(this.couchAt=this.clock,this.wake(),this.bubble&&(this.queue=[],this.endBubble()),this.say(wb,"happy"))}sweetSpot(){return this.stage!=="company"||this.hidden||this.bubble||this.clock-this.sweetAt<150?!1:(this.sweetAt=this.clock,this.wake(),this.say(Sb,"happy"),!0)}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(mi(Ob,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(mi(Bb,this.used),"excited"):this.say(t<=1?Vb[0]:mi(Hb,this.used),"curious"))}hit(t){const e=new vs(gr(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/Ue);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=xr(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(mi(zb,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){{const d=this.arch.inner,p=this.at,m=p.x>d.x0&&p.x<d.x1&&p.z>d.z0&&p.z<d.z1;this.dim+=((m?0:1)-this.dim)*(1-Math.exp(-2.5*t));const x=.3+.7*this.dim;this.hemi.intensity=1.9*x,this.sun.intensity=1.5*x,this.sun.color.setRGB(1,.84+.16*this.dim,.64+.36*this.dim)}this.clock+=t;const e=this.player,n=this.rig,i=this.arch,o=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=o?0:this.quiet+t;const r=i.inner;this.inside=e.pos.x>r.x0&&e.pos.x<r.x1&&e.pos.z>r.z0&&e.pos.z<r.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.inv.hello||this.say(yb,"happy"),this.say(this.countLine(),"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(mi(Fb,this.used),"happy")));const a=e.pos.z>r.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.asking&&(this.endBubble(),this.farewell==="asked"?this.farewell="no":this.farewell==="lonely"&&(this.farewell="done")),this.stage==="company"&&(this.queue=[],this.wake(),this.say(mi(kb,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const d=this.outsideSpot();this.goTo(d.x,d.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!e.seated&&this.say(xb,"pleased"),!this.wasLocked&&l&&!this.hidSaid&&!this.hidden&&(this.hidSaid=!0,this.say(mb,"pleased")),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;c&&(c.shown=Math.min(c.text.length,c.shown+t*34),!c.choices&&c.until===1/0&&(c.until=this.clock+Math.max(3,1.2+c.text.split(/\s+/).length/3.6)),this.clock>c.until&&this.endBubble());const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),o&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=gr(this.main.position.x,this.main.position.y,this.main.position.z,new L),f=this.stage==="company"&&this.inside&&!this.hidden&&this.farewell!=="going"&&!this.asking?this.danceBeat():null;if(f!==null!==this.dancingNow&&(this.dancingNow=f!==null,n.motion.dance=this.dancingNow?()=>this.danceBeat():null,this.dancingNow&&(this.wake(),n.mood("happy"),this.danceRound=[],this.danceAt=-1,this.danceNext=0,this.danceSpotIn=2+Math.random()*3,this.danceTalkIn=40+Math.random()*40,!this.bubble&&Math.random()<.5&&this.say(mi(bb,this.used),"happy"))),this.leaving(t),this.stage==="company"&&this.resting==="no"&&(this.farewell==="going"||this.asking)||(this.stage==="company"&&this.resting==="no"&&this.dancingNow?(this.danceBpm(),(this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.danceAbout(.45)),!this.bubble&&(this.danceTalkIn-=t)<=0&&(this.danceTalkIn=60+Math.random()*60,this.visible(5.5)&&this.say(mi(Eb,this.used),"happy"))):this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(mi(Nb,this.used),Math.random()<.5?"pleased":"curious")))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),(this.stage==="company"||this.stage==="waiting")&&!this.dancingNow){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const d=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),p=n.roomAt(n.pos.x,n.pos.z,d);if(!(p!=null&&p.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(d);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",d)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?pb:db,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(gb,"pleased"));const o=this.arch.entrance,r=Math.hypot(t.pos.x-(o.a+o.b)/2,t.pos.z-o.z);if(e.startD<0&&(e.startD=r),r<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(vb,"excited");const a=this.doorSpot();this.goTo(a.x,a.z,"strut");return}}after(t){this.rig.update(t*Gb);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const o=Math.max(.35,1-i/1.6);this.shadow.scale.set(o,o,1),this.shadow.material.opacity=.5*o*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let o=0;o<12;o++){const r=o/12*Math.PI*2,a=e.x+Math.cos(r)*i,l=e.z+Math.sin(r)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/Ue,l/Ue,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,o=e<.75?2.5:6;for(const r of this.gallery.placed){const a=Math.hypot(r.centre[0]-n.x,r.centre[2]-n.z);a<o&&this.seen(r.centre[0],r.centre[2])&&(o=a,i=gr(r.centre[0],r.centre[1],r.centre[2]))}return i??t.clone()}place(){const t=this.main;if(gr(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/Ue)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/Ue,this.cam.far=t.far/Ue,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=xr(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let o=(e.x*.5+.5)*n,r=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);o=Math.max(170,Math.min(n-170,o)),r=Math.max(90,Math.min(i-30,r)),this.el.style.left=`${o}px`,this.el.style.top=`${r}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;gr(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Bc=s=>s==="W"||s==="LEFT"||s==="RIGHT"||s==="ESC",qb={W:"W",LEFT:"←",RIGHT:"→",ESC:"esc"},Yb={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right",ESC:"Your mouse pointer back"};let Wi=null;const $b=/^((?!chrome|chromium|crios|fxios|edg|opr|android).)*safari/i.test(navigator.userAgent)&&!new URLSearchParams(location.search).has("direct");let So=null,Yi=null;function Rl(){const s=si();if(!So)if(So=s.createGain(),$b&&typeof s.createMediaStreamDestination=="function"){const t=s.createMediaStreamDestination();So.connect(t),Yi=new Audio,Yi.srcObject=t.stream,Yi.play().catch(()=>{})}else So.connect(s.destination);return So}const Kb=()=>Yi?`streamed to a player (${Yi.paused?"stopped":"playing"})`:So?"straight out":"not yet";function si(){if(!Wi){const s=window.AudioContext??window.webkitAudioContext;Wi=new s({latencyHint:"interactive"})}return Wi.state!=="running"&&Wi.resume().catch(()=>{}),Wi}const ep=()=>Wi;let np=!1;function Zb(){const s=t=>{if(t instanceof KeyboardEvent&&(t.key==="Escape"||t.metaKey||t.ctrlKey))return;const e=si(),n=navigator.audioSession;if(n&&n.type!=="playback"&&matchMedia("(pointer: coarse)").matches)try{n.type="playback"}catch{}if(Rl(),Yi!=null&&Yi.paused&&Yi.play().catch(()=>{}),np&&e.state==="running")return;np=!0;const i=e.createBufferSource();i.buffer=e.createBuffer(1,1,e.sampleRate),i.connect(Rl()),i.start()};for(const t of["pointerdown","mousedown","touchend","keydown","click"])addEventListener(t,s,{capture:!0,passive:!0})}function Jb(s){if(!Wi)return;const t=Wi.listener,e=Wi.currentTime,n=s.position,i=s.matrixWorld.elements,o=-i[8],r=-i[9],a=-i[10];t.positionX?(t.positionX.setValueAtTime(n.x,e),t.positionY.setValueAtTime(n.y,e),t.positionZ.setValueAtTime(n.z,e),t.forwardX.setValueAtTime(o,e),t.forwardY.setValueAtTime(r,e),t.forwardZ.setValueAtTime(a,e),t.upX.setValueAtTime(i[4],e),t.upY.setValueAtTime(i[5],e),t.upZ.setValueAtTime(i[6],e)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(o,r,a,i[4],i[5],i[6]))}const ip=s=>`piano/n${s}.m4a`,sp=90,Qb=48;class jb{constructor(){R(this,"ctx",null);R(this,"files",new Map);R(this,"buffers",new Map);R(this,"decoding",new Map);R(this,"voices",[]);R(this,"out",null);R(this,"panner",null);R(this,"pedal",!1);R(this,"where",{x:0,y:1,z:0})}fetchAll(){for(let t=21;t<=108;t++)this.files.has(t)||this.files.set(t,fetch(ip(t)).then(e=>{if(!e.ok)throw new Error(`${ip(t)}: ${e.status}`);return e.arrayBuffer()}))}setPosition(t,e,n){if(this.where={x:t,y:e,z:n},this.panner&&this.ctx){const i=this.ctx.currentTime;this.panner.positionX.setValueAtTime(t,i),this.panner.positionY.setValueAtTime(e,i),this.panner.positionZ.setValueAtTime(n,i)}}wake(){if(!this.ctx){const t=si();this.ctx=t;const e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=6,e.ratio.value=4,e.attack.value=.002,e.release.value=.25;const n=t.createPanner();n.panningModel="equalpower",n.distanceModel="inverse",n.refDistance=1.6,n.rolloffFactor=.7,this.panner=n,this.out=t.createGain(),this.out.gain.value=.9,this.out.connect(n).connect(e).connect(Rl()),this.setPosition(this.where.x,this.where.y,this.where.z)}si(),this.fetchAll()}async decodeAll(){const t=Array.from({length:88},(i,o)=>21+o).sort((i,o)=>Math.abs(i-60)-Math.abs(o-60));let e=0;const n=async()=>{const i=t[e++];if(i!==void 0)return await this.decode(i).catch(()=>{}),n()};await Promise.all([n(),n(),n(),n()])}decode(t){if(this.buffers.has(t))return Promise.resolve();let e=this.decoding.get(t);return e||(this.fetchAll(),e=this.files.get(t).then(n=>this.ctx.decodeAudioData(n.slice(0))).then(n=>{const i=n.getChannelData(0);let o=0;for(let a=0;a<Math.min(i.length,9600);a++)o=Math.max(o,Math.abs(i[a]));let r=0;for(;r<i.length&&Math.abs(i[r])<o*.02;)r++;this.buffers.set(t,{buf:n,at:Math.max(0,r-24)/n.sampleRate})}),this.decoding.set(t,e),e)}noteOn(t){if(t<21||t>108||!this.ctx||!this.out)return;if(!this.buffers.get(t)){this.decode(t).then(()=>this.start(t,!0));return}this.start(t,!1)}start(t,e){const n=this.ctx,i=this.buffers.get(t);for(const c of this.voices)c.m===t&&this.release(c,.03);this.voices.length>=Qb&&this.release(this.voices[0],.02);const o=n.createBufferSource(),r=n.createGain();o.buffer=i.buf,o.connect(r).connect(this.out);const a=n.currentTime;r.gain.setValueAtTime(e?.85:1,a),o.start(a,i.at);const l={m:t,src:o,gain:r,held:!0,t:a};o.onended=()=>{this.voices=this.voices.filter(c=>c!==l)},this.voices.push(l)}noteOff(t){for(const e of this.voices)e.m===t&&e.held&&(e.held=!1,!this.pedal&&t<sp&&this.release(e))}setPedal(t){if(this.pedal=t,!t)for(const e of this.voices)!e.held&&e.m<sp&&this.release(e)}allOff(){for(const t of[...this.voices])this.release(t,.15);this.pedal=!1}release(t,e){if(!this.ctx)return;const n=this.ctx.currentTime,i=e??(t.m<40?.12:t.m<60?.09:.06);t.gain.gain.cancelScheduledValues(n),t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.setTargetAtTime(0,n,i);try{t.src.stop(n+i*8)}catch{}this.voices=this.voices.filter(o=>o!==t)}get sounding(){return this.voices.length}get unpacked(){return this.buffers.size}}const vr="https://listening-music.robynmiller.workers.dev".replace(/\/$/,"")||null,op=(()=>{const t=new Uint8Array(844),e=new DataView(t.buffer),n=(o,r)=>{for(let a=0;a<4;a++)t[o+a]=r.charCodeAt(a)};n(0,"RIFF"),e.setUint32(4,836,!0),n(8,"WAVE"),n(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,800,!0),t.fill(128,44);let i="";for(const o of t)i+=String.fromCharCode(o);return`data:audio/wav;base64,${btoa(i)}`})(),us=s=>!!s.getAttribute("src")&&!s.getAttribute("src").startsWith("data:");class t2{constructor(){R(this,"album",null);R(this,"track",0);R(this,"playing",!1);R(this,"cueing",!1);R(this,"moving",!1);R(this,"needleTo",0);R(this,"route","trying");R(this,"lastError","");R(this,"el",null);R(this,"plain",null);R(this,"out",null);R(this,"room",null);R(this,"pan",[]);R(this,"meters",[]);R(this,"buf",new Float32Array(1024));R(this,"speakers",[{x:-1.5,y:1.2,z:0},{x:1.5,y:1.2,z:0}]);R(this,"inside",!0);R(this,"heard",0);R(this,"loudest",0);R(this,"plainVol",0);R(this,"parked",!1);R(this,"waiting",null);R(this,"starts",0);R(this,"holding",!1);R(this,"holdSince",0);R(this,"sought",!1);R(this,"seekedAt",0);R(this,"onChange",()=>{});R(this,"links",new Map);R(this,"asking",new Map);R(this,"readied",!1);R(this,"relinkAt",0)}get players(){return[this.route!=="plain"?this.el:null,this.route!=="speakers"?this.plain:null].filter(t=>!!t)}fromTop(){const t=this.waiting;this.parked=!1,this.waiting=null;const e=si().currentTime;if(this.out.gain.cancelScheduledValues(e),this.out.gain.setValueAtTime(0,e),this.sought=!1,this.seekedAt=0,t){if(this.playing){const n=this.starts,i=this.addr(t);i?this.put(i):this.prime([t]).then(()=>{const o=this.addr(t);o&&n===this.starts&&this.playing&&this.put(o)})}}else for(const n of this.players){if(n.currentTime>.05){n===this.main&&(this.sought=!0,n.addEventListener("seeked",()=>{this.seekedAt=performance.now()},{once:!0}));try{n.currentTime=0}catch{}}n.paused&&this.playing&&n.play().catch(i=>this.failed(i))}this.holding=!0,this.holdSince=performance.now()}prime(t){if(!vr)return Promise.resolve();const e=Date.now(),n=[...new Set(t)].filter(r=>{var a;return!((((a=this.links.get(r))==null?void 0:a.until)??0)-e>12*6e4)&&!this.asking.has(r)}),i=t.map(r=>this.asking.get(r)).filter(Boolean);if(!n.length)return Promise.all(i).then(()=>{});if(n.length>150)return Promise.all([this.prime(n.slice(0,150)),this.prime(n.slice(150)),...i]).then(()=>{});const o=(async()=>{try{const r=await fetch(`${vr}/link`,{method:"POST",headers:{"content-type":"text/plain"},body:JSON.stringify({files:n})});if(!r.ok)throw new Error(`music server: ${r.status}`);const a=await r.json(),l=Date.now()+a.ttl*1e3-3e4;for(const[c,h]of Object.entries(a.links))this.links.set(c,{url:h,until:l})}catch(r){this.failed(r)}finally{for(const r of n)this.asking.delete(r)}})();for(const r of n)this.asking.set(r,o);return Promise.all([o,...i]).then(()=>{})}addr(t){if(!vr)return t;const e=this.links.get(t);return e&&e.until-Date.now()>5*6e4?e.url:null}ready(){if(!this.readied){this.wire();for(const t of[this.el,this.plain])us(t)||(t.src=op,t.play().then(()=>{this.readied=!0}).catch(()=>{}))}}primeAlbums(t){this.prime(t.flatMap(e=>e.tracks.map(n=>n.file)))}failed(t){if((t==null?void 0:t.name)==="AbortError")return;const e=t;this.lastError=`${(e==null?void 0:e.name)??"Error"}: ${(e==null?void 0:e.message)??String(t)}`,console.warn("music:",this.lastError)}get element(){return this.route==="plain"?this.plain:this.el}get main(){return this.element}wire(){if(this.el)return;const t=si(),e=()=>{const o=new Audio;return o.preload="auto",vr&&(o.crossOrigin="anonymous"),o.addEventListener("ended",()=>{o===this.main&&us(o)&&this.next(!0)}),o.addEventListener("play",()=>{o===this.main&&!this.parked&&us(o)&&(this.playing=!0,this.onChange())}),o.addEventListener("pause",()=>{o===this.main&&!this.parked&&us(o)&&(this.playing=!1,this.onChange())}),o.addEventListener("error",()=>{us(o)&&this.relink(o)}),o};this.el=e(),this.plain=e(),this.plain.volume=0;const n=t.createMediaElementSource(this.el),i=t.createChannelSplitter(2);this.out=t.createGain(),this.room=t.createGain(),n.connect(i);for(let o=0;o<2;o++){const r=t.createPanner();r.panningModel="equalpower",r.distanceModel="inverse",r.refDistance=2.4,r.rolloffFactor=.85;const a=t.createAnalyser();a.fftSize=1024,i.connect(a,o),i.connect(r,o),r.connect(this.out),this.pan.push(r),this.meters.push(a)}this.out.connect(this.room).connect(Rl()),this.place()}setSpeakers(t,e){this.speakers=[t,e],this.place()}place(){const t=ep();if(!t)return;const e=t.currentTime;this.pan.forEach((n,i)=>{const o=this.speakers[i];n.positionX.setValueAtTime(o.x,e),n.positionY.setValueAtTime(o.y,e),n.positionZ.setValueAtTime(o.z,e)})}setInside(t){if(this.inside=t,!this.room)return;const e=si();this.room.gain.setTargetAtTime(t?1:0,e.currentTime,.6)}start(t,e=!1){const n=this.route,i=++this.starts;this.parked=e,this.waiting=e?t:null,e&&(this.playing=!0),n!=="speakers"&&(this.plain.volume=n==="plain"?this.plainVol:0);const o=this.addr(t);if(o&&!e){this.put(o);return}for(const r of this.players)r.src=op,r.play().catch(()=>{});this.prime([t]).then(()=>{const r=this.addr(t);!e&&r&&i===this.starts&&this.put(r)})}put(t){for(const e of this.players)e.src=t,e.play().catch(n=>this.failed(n))}relink(t){var r;const e=this.album;if(!vr||!e||performance.now()-this.relinkAt<5e3)return;this.relinkAt=performance.now();const n=(r=e.tracks[this.track])==null?void 0:r.file,i=t.currentTime,o=this.playing&&t===this.main;n&&(this.links.delete(n),this.prime([n]).then(()=>{var l;const a=this.addr(n);!a||e!==this.album||n!==((l=e.tracks[this.track])==null?void 0:l.file)||(t.src=a,t.addEventListener("loadedmetadata",()=>{try{t.currentTime=i}catch{}o&&t.play().catch(c=>this.failed(c))},{once:!0}))}))}load(t,e=0,n=!1){if(!t.tracks.length)return;this.wire(),this.prime(t.tracks.map(o=>o.file));const i=si();this.album=t,this.track=Math.max(0,Math.min(t.tracks.length-1,e)),this.cueing=n,this.out.gain.cancelScheduledValues(i.currentTime),this.out.gain.setValueAtTime(n?0:1,i.currentTime),this.route==="plain"&&n&&(this.plainVol=0),this.start(t.tracks[this.track].file,n),this.heard=0,this.loudest=0,this.onChange()}cued(){!this.cueing||!this.el||!this.out||(this.cueing=!1,this.fromTop(),this.heard=0,this.loudest=0,this.onChange())}song(t){const e=this.album;!e||!this.el||t<0||t>=e.tracks.length||(this.track=t,this.start(e.tracks[t].file),this.onChange())}startOf(t){const e=this.album;if(!e)return 0;const n=e.tracks.reduce((i,o)=>i+(o.dur||0),0)||1;return e.tracks.slice(0,t).reduce((i,o)=>i+(o.dur||0),0)/n}skip(t){const e=this.album;if(!e||!this.el||this.cueing||t<0||t>=e.tracks.length)return;const n=si();this.out.gain.cancelScheduledValues(n.currentTime),this.out.gain.setValueAtTime(0,n.currentTime),this.track=t,this.moving=!0,this.needleTo=this.startOf(t),this.start(e.tracks[t].file,!0),this.onChange()}skipBy(t){const e=this.main;if(!this.album||!e)return;const n=t>0?this.track+1:!this.moving&&e.currentTime>3?this.track:this.track-1;this.skip(Math.max(0,Math.min(this.album.tracks.length-1,n)))}drop(){!this.moving||!this.el||!this.out||(this.moving=!1,this.fromTop(),this.onChange())}play(){if(!(!this.el||!this.album)){if(si(),!this.main||!us(this.main)){this.start(this.album.tracks[this.track].file);return}this.route!=="plain"&&this.el.play().catch(t=>this.failed(t)),this.route!=="speakers"&&this.plain.play().catch(t=>this.failed(t))}}pause(){var t,e;this.parked&&(this.parked=!1,this.playing=!1,this.onChange()),(t=this.el)==null||t.pause(),(e=this.plain)==null||e.pause()}toggle(){this.playing?this.pause():this.play()}next(t=!1){const e=this.album;if(!(!e||!this.el)){if(this.track+1>=e.tracks.length){if(t){this.track=0;const n=this.addr(e.tracks[0].file);for(const i of this.players)n?i.src=n:(i.removeAttribute("src"),i.load());this.playing=!1,this.onChange()}return}this.track++,this.start(e.tracks[this.track].file),this.onChange()}}prev(){const t=this.album,e=this.main;if(!(!t||!e)){if(e.currentTime>3||this.track===0){for(const n of[this.el,this.plain])try{n.currentTime=0}catch{}return}this.track--,this.start(t.tracks[this.track].file),this.onChange()}}tick(t,e){const n=this.el,i=this.plain;if(!(!n||!i||!this.album)){if(this.holding){const o=this.main,r=performance.now();if(us(o)&&!o.paused&&o.currentTime>.04&&o.currentTime<.8&&r-this.holdSince>60&&(!this.sought||this.seekedAt&&r-this.seekedAt>250)||r-this.holdSince>1500){this.holding=!1;const l=si().currentTime;this.out.gain.cancelScheduledValues(l),this.out.gain.setValueAtTime(0,l),this.out.gain.linearRampToValueAtTime(1,l+.05)}}if(this.route==="trying"&&!this.cueing&&!this.moving&&!this.holding&&us(n)&&!n.paused&&n.currentTime>.3){this.heard+=t;const[o,r]=this.rms();if(this.loudest=Math.max(this.loudest,o,r),this.loudest>1e-4)this.route="speakers",i.pause(),i.removeAttribute("src"),i.load(),this.onChange();else if(this.heard>1.2){if(this.route="plain",Math.abs(i.currentTime-n.currentTime)>.2)try{i.currentTime=n.currentTime}catch{}i.paused&&i.play().catch(a=>this.failed(a)),n.pause(),this.playing=!i.paused,this.onChange()}}if(this.route==="plain"){const o={x:(this.speakers[0].x+this.speakers[1].x)/2,y:(this.speakers[0].y+this.speakers[1].y)/2,z:(this.speakers[0].z+this.speakers[1].z)/2},r=Math.hypot(e.x-o.x,e.y-o.y,e.z-o.z),a=this.cueing||this.moving||this.holding||!this.inside?0:Math.min(1,2.4/(2.4+.85*Math.max(0,r-2.4))),l=this.moving||this.holding?.02:a>this.plainVol+.3?.06:.4;this.plainVol+=(a-this.plainVol)*(1-Math.exp(-t/l)),i.volume=Math.max(0,Math.min(1,this.plainVol))}}}get progress(){const t=this.album,e=this.main;if(!t||!e)return 0;const n=t.tracks.reduce((o,r)=>o+(r.dur||0),0)||1,i=t.tracks.slice(0,this.track).reduce((o,r)=>o+(r.dur||0),0);return Math.min(1,(i+(e.currentTime||0))/n)}get current(){var t;return((t=this.album)==null?void 0:t.tracks[this.track])??null}get heardTime(){const t=this.main,e=ep();if(!t)return 0;const n=e&&this.route!=="plain"?(e.outputLatency||0)+(e.baseLatency||0):.05;return t.currentTime-n}rms(){return this.meters.length?this.meters.map(t=>{t.getFloatTimeDomainData(this.buf);let e=0;for(let n=0;n<this.buf.length;n++)e+=this.buf[n]*this.buf[n];return Math.sqrt(e/this.buf.length)}):[0,0]}levels(){if(!this.playing||this.cueing||this.moving||this.holding)return[0,0];if(this.route==="plain"){const t=performance.now()/1e3,e=.05*this.plainVol;return[e*(1+.45*Math.sin(t*7.1)*Math.sin(t*2.3)),e*(1+.45*Math.sin(t*6.3+1)*Math.sin(t*1.9))]}return this.rms()}}function Cl(s,t){const n=document.createElement("canvas");n.width=n.height=32*t;const i=n.getContext("2d");i.scale(t,t);const o=32/2,r=8,a=2.5,l=(c,h)=>{i.strokeStyle=h,i.lineWidth=c,i.lineCap="round",i.beginPath(),i.moveTo(o-r,o),i.lineTo(o-a,o),i.moveTo(o+a,o),i.lineTo(o+r,o),i.moveTo(o,o-r),i.lineTo(o,o-a),i.moveTo(o,o+a),i.lineTo(o,o+r),i.stroke()};return l(3.4,"rgba(0,0,0,0.55)"),l(1.5,"#fff"),n.toDataURL("image/png")}const e2=s=>`-webkit-image-set(url(${Cl(s,1)}) 1x, url(${Cl(s,2)}) 2x) 16 16, crosshair`,Du="var(--cross)";function n2(){document.documentElement.style.setProperty("--cross",e2(!1));const t=document.createElement("div");return t.id="crosshair",t.style.backgroundImage=`-webkit-image-set(url(${Cl(!1,1)}) 1x, url(${Cl(!1,2)}) 2x)`,document.body.append(t),(e,n,i)=>{t.classList.toggle("on",e),t.style.transform=e&&n!==void 0&&i!==void 0?`translate(${n-innerWidth/2}px, ${i-innerHeight/2}px)`:""}}const nn={x:innerWidth/2,y:innerHeight/2};let Gl=()=>!1;function i2(s){Gl=s}const xo=()=>Gl();function Hc(s,t){if(document.pointerLockElement===t){if(Gl())return[nn.x,nn.y];const e=t.getBoundingClientRect();return[e.left+e.width/2,e.top+e.height/2]}return[s.clientX,s.clientY]}function Gh(s){if(document.pointerLockElement!==s||!Gl())return!1;const t=document.elementFromPoint(nn.x,nn.y),e=t&&t!==s?t.closest("button, li, a"):null;return e?(e.click(),!0):!1}const Wh=.47,zs=.33,ei=.1575,s2=.09,On=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)},Ga=s=>`<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="${s}" fill="currentColor"/></svg>`,Vc={"⏮":Ga("M2.5 3h2v10h-2z M13 3 5.5 8 13 13z"),"⏭":Ga("M3 3 10.5 8 3 13z M11.5 3h2v10h-2z"),"▶":Ga("M4.5 2.5 13 8 4.5 13.5z"),"⏸":Ga("M4 3h2.6v10H4z M9.4 3H12v10H9.4z")};function rp(s){const t=Math.atan(Math.tan(Ae.degToRad(s.fov)/2)*s.aspect),e=bo(s)*Math.tan(t)*.95;return Math.min(1.15,Math.asin(Math.min(1,e/zs)))}function bo(s){const t=Math.atan(Math.tan(Ae.degToRad(s.fov)/2)*s.aspect);return Math.max(Wh,ei*1.25/Math.tan(t*.92))}class o2{constructor(t,e,n,i,o){R(this,"isOpen",!1);R(this,"sel",0);R(this,"cards",[]);R(this,"hover",-1);R(this,"hoverEase",0);R(this,"openL",0);R(this,"openR",0);R(this,"side",0);R(this,"closing",!1);R(this,"tight",!1);R(this,"pivot",new L);R(this,"choseAt",null);R(this,"pre",0);R(this,"preTarget",0);R(this,"clock",0);R(this,"shuf",null);R(this,"oldSel",0);R(this,"disc",null);R(this,"discRun",null);R(this,"listOn",!1);R(this,"listEase",0);R(this,"ray",new vs);R(this,"ndc",new pt);R(this,"ui");R(this,"songs");R(this,"albumLine");R(this,"playBtn");R(this,"listFor",null);R(this,"onClosed",()=>{});R(this,"handLight",new qp(16773856,0,3,2));R(this,"shown",!0);this.camera=t,this.canvas=e,this.music=n,this.F=i,this.albums=o,this.ui=document.createElement("div"),this.ui.id="fan-controls";const r=document.createElement("div");r.className="fc-list",this.albumLine=document.createElement("div"),this.albumLine.className="fc-album",this.songs=document.createElement("ol"),this.songs.className="fc-songs",this.songs.addEventListener("click",h=>{const u=h.target.closest("li");u&&(h.stopPropagation(),this.skip(()=>n.skip(+u.dataset.k)))}),r.append(this.albumLine,this.songs);const a=document.createElement("div");a.className="fc-row";const l=(h,u,f)=>{const d=document.createElement("button");return d.innerHTML=Vc[h],d.title=u,d.addEventListener("pointerdown",p=>p.stopPropagation()),d.addEventListener("click",p=>{p.stopPropagation(),f()}),a.append(d),d};l("⏮","Back",()=>this.skip(()=>n.skipBy(-1))),this.playBtn=l("⏸","Pause",()=>n.toggle()),l("⏭","Next song",()=>this.skip(()=>n.skipBy(1))),this.ui.append(r,a),this.ui.addEventListener("pointerdown",h=>h.stopPropagation()),document.body.append(this.ui);const c=n.onChange;n.onChange=()=>{c(),this.refresh()}}open(){const t=this.F(),e=new Map(this.albums().map(i=>[i.id,i]));if(this.cards=t.records.map(i=>{const o=e.get(i.mesh.userData.album),r=new ee().compose(i.base,new Me().setFromEuler(i.rest),new L(1,1,1));return{mesh:i.mesh,album:o,rest:r,a:0,z:0,lift:0,out:0,wait:0}}).filter(i=>i.album),!this.cards.length)return!1;const n=this.music.album?this.cards.findIndex(i=>i.album.id===this.music.album.id):-1;return this.sel=this.oldSel=n>=0?n:0,this.cards.forEach((i,o)=>{i.a=this.restAngle(o),i.z=this.depth(o)}),this.isOpen=!0,this.closing=!1,this.tight=!1,this.hover=-1,this.side=0,this.openL=this.openR=0,this.shuf=null,this.listOn=!1,this.listEase=0,this.refresh(),!0}close(){this.isOpen&&(this.reorder(),this.closing=!0,this.preTarget=0,this.hover=-1,this.side=0,this.refresh(),this.canvas.style.cursor="",this.finishDisc())}reorder(){var r;const t=(r=this.music.album)==null?void 0:r.id,e=this.F().records,n=e.findIndex(a=>a.mesh.userData.album===t);if(n<=0)return;const i=e.map(a=>a.mesh),o=[i[n],...i.slice(0,n),...i.slice(n+1)];e.forEach((a,l)=>{a.mesh=o[l]});for(const a of this.cards){const l=e.find(c=>c.mesh===a.mesh);l&&a.rest.compose(l.base,new Me().setFromEuler(l.rest),new L(1,1,1))}}beckon(t){this.isOpen||(this.preTarget=Math.max(0,Math.min(1,t)))}restCentre(){const t=this.F().stand;return t?t.localToWorld(new L(0,.17,.02)):null}pileCentre(){const t=this.F().stand;if(!t)return null;const e=t.localToWorld(new L(0,.17,.02));return this.pre>.001?e.applyMatrix4(this.hoverMatrix(On(this.pre))):e}restAngle(t){const e=t-this.sel,n=Math.abs(e);return n?-Math.sign(e)*.2*(1-.5**n):0}depth(t){const e=Math.abs(t-this.sel);return e?-(.004+.006*e):0}hoverMatrix(t){const e=this.F().stand,n=this.F().records[0],i=e.localToWorld(new L(0,.17,.02)),o=this.camera.position,r=i.clone().lerp(o,.5);r.y+=Math.sin(this.clock*2.1)*.006;const a=n?e.matrixWorld.clone().multiply(new ee().makeRotationFromEuler(n.rest)):e.matrixWorld,l=new L(0,0,1).transformDirection(a),c=o.clone().sub(r).normalize(),h=new L(l.x,0,l.z).normalize(),u=new L(c.x,0,c.z).normalize(),f=new Me().setFromUnitVectors(h,u),d=new Me().setFromUnitVectors(l.clone().applyQuaternion(f),c),p=new Me().setFromAxisAngle(new L(0,1,0),Math.sin(this.clock*1.3)*.025),m=new Me().slerp(p.multiply(d.multiply(f)),t),x=i.clone().lerp(r,t);return new ee().makeTranslation(x.x,x.y,x.z).multiply(new ee().makeRotationFromQuaternion(m)).multiply(new ee().makeTranslation(-i.x,-i.y,-i.z))}shade(t){const e=new ee;this.cards.forEach((n,i)=>{var l;const o=(l=n.mesh.userData.bright)==null?void 0:l.userData.fanShade;if(!o)return;const r=i-this.sel,a=r===0?null:this.cards[i-Math.sign(r)];o.shade.value=a?t:0,a&&(a.mesh.updateWorldMatrix(!0,!1),n.mesh.updateWorldMatrix(!0,!1),o.rel.value.copy(e.copy(a.mesh.matrixWorld).invert().multiply(n.mesh.matrixWorld)))})}glow(t){for(const e of this.F().records){const n=e.mesh.userData.lit;n&&n.emissiveMap&&(n.emissiveIntensity=.85*t)}}update(t){var w;this.clock+=t;const e=this.F();if(!e.stand)return;if(!this.isOpen){const v=this.pre,M=this.preTarget-this.pre;if(this.pre=Math.max(0,Math.min(1,this.pre+Math.max(-t/.7,Math.min(t/.85,M)))),this.pre===0&&v===0)return;const S=On(this.pre),E=this.hoverMatrix(S);for(const _ of e.records){const b=new ee().compose(_.base,new Me().setFromEuler(_.rest),new L(1,1,1)),A=_.mesh.parent,C=E.clone().multiply(A.matrixWorld).multiply(b);new ee().copy(A.matrixWorld).invert().multiply(C).decompose(_.mesh.position,_.mesh.quaternion,_.mesh.scale)}this.glow(S);return}const n=this.camera;n.updateMatrixWorld();const i=n.matrixWorld.elements,o=new L(i[0],i[1],i[2]),r=new L(i[4],i[5],i[6]),a=new L(-i[8],-i[9],-i[10]);this.listEase+=((this.listOn&&!this.closing?1:0)-this.listEase)*(1-Math.exp(-5*t));const l=bo(n),c=n.position.clone().addScaledVector(a,l).addScaledVector(r,-.015+s2*On(this.listEase)),h=e.group;this.handLight.parent!==h&&(this.handLight.layers.set(5),h.add(this.handLight)),this.handLight.position.copy(n.position).addScaledVector(r,.25).addScaledVector(o,-.15),this.handLight.intensity+=((this.closing?0:.32)-this.handLight.intensity)*(1-Math.exp(-4*t));const u=c.clone().addScaledVector(r,-zs),f=a.clone().negate();this.closing&&(this.pre=Math.max(0,this.pre-t/.7));const d=this.pre>0?this.hoverMatrix(On(this.pre)):null;this.glow(On(this.pre)),this.pivot.copy(u);const p=!this.closing&&(this.tight||!!this.discRun),m=bo(n)>Wh+.01,x=1-Math.exp(-6*t);this.openL+=((this.side<0&&!p?1:0)-this.openL)*x,this.openR+=((this.side>0&&!p?1:0)-this.openR)*x,this.hoverEase+=((this.hover>=0&&this.hover!==this.sel&&!this.shuf&&!p?1:0)-this.hoverEase)*x;const g=this.shuf;g&&(g.t+=t,g.t>=g.dur&&(this.shuf=null,this.startDisc()));let y=!0;if(this.cards.forEach((v,M)=>{v.wait=Math.max(0,v.wait-t);const S=v.wait>0?this.oldSel:this.sel,E=S,_=this.cards.length-1-S,b=M-S,A=Math.abs(b),C=Math.sign(b);let I=0,U=0,F=0;if(A){const Qt=C<0?E:_,$=C<0?this.openL:this.openR,xe=.2*(1-.5**A),le=A*Math.min(.3,rp(n)/Math.max(1,Qt));let O=xe+(le-xe)*$;if(this.hover>=0&&Math.sign(this.hover-S)===C){const T=Math.abs(this.hover-S);A>=T&&(O+=.09*this.hoverEase),A>T&&(O+=.07*this.hoverEase),M===this.hover&&(F=.012*this.hoverEase)}I=-C*O,U=-(.004+.006*A)}const k=m&&this.hover>=0&&M===this.hover&&M!==this.sel&&!g;k&&(I*=.06,U=.012,F=.2*this.hoverEase);const Y=1-Math.exp(-4.5*t);if(g&&M===g.k){const Qt=Math.min(1,g.t/g.dur),$=On(Qt);v.lift=.13*Math.sin(Math.PI*Math.min(1,Qt*1.05)),v.a=g.a0*(1-On(Qt*1.25)),v.z=g.z0+(.006-g.z0)*$}else v.a+=(I-v.a)*Y,v.z+=(U-v.z)*Y,v.lift+=(F-v.lift)*Y;const X=this.closing?0:1,et=this.closing?2.6:2.2;v.out=Math.max(0,Math.min(1,v.out+(X?1:-1)*et*t)),(this.closing?v.out>0:v.out<1)&&(y=!1);const G=v.out,K=On(G),it=v.mesh.material,ft=v.mesh.userData.lit,B=v.mesh.userData.bright,H=!!B&&B!==ft&&B.isMeshBasicMaterial,P=G>.001&&H?B:ft;if(P&&it[4]!==P&&(it[4]=P),H&&P===B){const Qt=.15+.75*On(this.pre);B.color.setScalar(Qt+(1-Qt)*K)}const V=r.clone().multiplyScalar(Math.cos(v.a)).addScaledVector(o,-Math.sin(v.a)),D=V.clone().cross(f),W=u.clone().addScaledVector(V,zs).addScaledVector(r,v.lift).addScaledVector(f,v.z).clone().addScaledVector(V,-ei),Q=new ee().makeBasis(D,V,f).setPosition(W),j=v.mesh.parent,vt=j.matrixWorld.clone().multiply(v.rest);d&&vt.premultiply(d);const wt=new L,at=new Me,mt=new L,dt=new L,_t=new Me,xt=new L;vt.decompose(wt,at,mt),Q.decompose(dt,_t,xt);const $t=wt.clone().lerp(dt,K).addScaledVector(new L(0,1,0),Math.sin(K*Math.PI)*.08*(1-this.pre)),Ht=at.clone().slerp(_t,K);new ee().copy(j.matrixWorld).invert().multiply(new ee().compose($t,Ht,new L(1,1,1))).decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=g&&M===g.k&&g.t>g.dur*.45||k?12:10-Math.min(9,Math.abs(M-this.sel))}),this.updateDisc(t),this.shade(.5*On(((w=this.cards[0])==null?void 0:w.out)??0)),this.closing&&y&&this.pre===0){for(const v of this.cards)v.rest.decompose(v.mesh.position,v.mesh.quaternion,v.mesh.scale),v.mesh.renderOrder=0,v.mesh.userData.lit&&(v.mesh.material[4]=v.mesh.userData.lit);this.glow(0),this.shade(0),this.isOpen=!1,this.closing=!1,this.cards=[],this.shuf=null,this.handLight.intensity=0,this.onClosed()}}startDisc(){const t=this.discRun;if(!t||t.phase!=="wait")return;const e=this.cards[t.k];if(!e){this.finishDisc();return}this.disc||(this.disc=new St(new Qe(.1515,.1515,.0018,96),Oh(t.album)),this.disc.layers.enable(5)),this.disc.material=Oh(t.album),e.mesh.add(this.disc),this.disc.rotation.set(Math.PI/2,0,0),this.disc.position.set(0,ei,0),this.disc.visible=!0,t.phase="out",t.t=0,this.refresh()}updateDisc(t){const e=this.discRun,n=this.disc;if(!e||e.phase==="wait"||!n)return;e.t+=t;const i=this.F(),o=i.deck;if(!o){this.finishDisc();return}const r=1,a=1.4,l=.8,c=.1;o.record.updateWorldMatrix(!0,!1);const h=new L,u=new Me,f=new L;o.record.matrixWorld.decompose(h,u,f);const d=(p,m)=>{const x=new ee().compose(p,m,new L(1,1,1));new ee().copy(i.group.matrixWorld).invert().multiply(x).decompose(n.position,n.quaternion,n.scale)};if(e.phase==="out"){if(n.position.x=(ei+.1515+.012)*On(Math.min(1,e.t/r)),e.t>=r){n.updateWorldMatrix(!0,!1);const p=new L,m=new Me,x=new L;n.matrixWorld.decompose(p,m,x),i.group.add(n);const g=h.clone().add(new L(0,c,0)),y=g.clone().sub(p).setY(0);e.p0=p,e.q0=m,e.above=g,e.c1=p.clone().add(new L(0,-.3,0)).addScaledVector(y,.15),e.c2=g.clone().add(new L(0,.22,0)).addScaledVector(y,-.35),e.phase="carry",e.t=0,d(p,m)}}else if(e.phase==="carry"){const p=Math.min(1,e.t/a),m=On(p),x=e.p0,g=e.c1,y=e.c2,w=e.above,v=1-m,M=x.clone().multiplyScalar(v*v*v).addScaledVector(g,3*v*v*m).addScaledVector(y,3*v*m*m).addScaledVector(w,m*m*m),S=e.q0.clone().slerp(u,On(Math.min(1,p/.8)));d(M,S),p>=1&&(e.phase="lower",e.t=0)}else if(e.phase==="lower"){const p=Math.min(1,e.t/l),m=1-(1-p)**3;d(e.above.clone().lerp(h,m),u),p>=1&&this.finishDisc()}}finishDisc(){this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun&&(this.discRun=null,this.music.cued(),this.refresh())}cardAt(t,e){var r;const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObjects(this.cards.map(a=>a.mesh),!1);i.sort((a,l)=>l.object.renderOrder-a.object.renderOrder||a.distance-l.distance);const o=(r=i[0])==null?void 0:r.object;return o?this.cards.findIndex(a=>a.mesh===o):-1}roundAt(t,e){if(Math.max(this.openL,this.openR)<.5||this.tight||this.discRun||this.shuf)return null;const i=this.openR>=this.openL?1:-1,o=this.sel,r=i>0?this.cards.length-1-o:o;if(!r)return null;const a=this.polar(t,e);if(!a.amongst)return null;const l=a.a*i,c=Math.atan(ei/Math.max(zs-ei,Math.min(zs+ei,a.rho)));if(l<c*.8)return this.cardAt(t,e)===o?o:null;const h=Math.min(.3,rp(this.camera)/Math.max(1,r)),u=Math.ceil((l-c*.8)/h);return u>=1&&u<=r?o+i*u:null}polar(t,e){const n=this.canvas.getBoundingClientRect(),i=this.camera,o=this.pivot.clone().project(i),r=t-(n.left+(o.x+1)/2*n.width),a=n.top+(1-o.y)/2*n.height-e,l=2*bo(i)*Math.tan(Ae.degToRad(i.fov)/2)/n.height,c=Math.hypot(r,a)*l,u=a*l>(zs-ei)*.85;return{a:Math.atan2(r,a),rho:c,level:u,amongst:u&&c<Math.hypot(zs+ei,ei)+.02}}move(t,e){if(!this.isOpen||this.closing)return;let n=this.cardAt(t,e);const i=this.roundAt(t,e);if(i!==null&&(n=i),this.hover=n,n>=0&&n!==this.sel)this.side=Math.sign(n-this.sel);else{const o=this.canvas.getBoundingClientRect(),r=(t-o.left)/o.width-.5,a=Math.atan(ei/bo(this.camera))/(2*Math.atan(Math.tan(Ae.degToRad(this.camera.fov)/2)*this.camera.aspect));this.side=n===this.sel?0:Math.abs(r)>a*.9&&this.polar(t,e).level?Math.sign(r):0}if(this.tight&&this.side!==0&&!this.discRun){const o=this.canvas.getBoundingClientRect();(!this.choseAt||Math.hypot(t-this.choseAt.x,e-this.choseAt.y)>o.width*.12)&&(this.tight=!1)}this.canvas.style.cursor=n>=0?Du:""}click(t,e){if(!this.isOpen||this.closing)return!1;const n=bo(this.camera)>Wh+.01?null:this.roundAt(t,e),i=n??this.cardAt(t,e);return i<0?(this.close(),!0):(this.choseAt={x:t,y:e},this.choose(i),!1)}choose(t){var i;const e=this.cards[t];if(!e||this.shuf)return;const n=this.music;if(!(this.discRun&&this.discRun.album.id===e.album.id)){if(t===this.sel&&((i=n.album)==null?void 0:i.id)===e.album.id&&!this.discRun){n.playing?this.listOn=!this.listOn:n.play(),this.refresh();return}t!==this.sel&&(this.oldSel=this.sel,this.shuf={k:t,t:0,dur:.75+.06*Math.min(6,Math.abs(t-this.sel)),a0:e.a,z0:e.z},this.cards.forEach((o,r)=>{o.wait=r===t?0:.3+.05*Math.abs(r-t)}),this.sel=t),this.hover=-1,this.side=0,this.tight=!0,this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun={k:t,album:e.album,phase:"wait",t:0},n.load(e.album,0,!0),this.listOn=!1,this.shuf||this.startDisc(),this.refresh()}}step(t){if(!this.isOpen||!this.cards.length)return;const e=this.hover>=0?this.hover:this.sel,n=Math.max(0,Math.min(this.cards.length-1,e+t));this.hover=n,this.side=n===this.sel?0:Math.sign(n-this.sel),this.side!==0&&!this.discRun&&(this.tight=!1)}chooseHovered(){this.choseAt=null,this.choose(this.hover>=0?this.hover:this.sel)}skip(t){t(),this.refresh()}setShown(t){t!==this.shown&&(this.shown=t,this.refresh())}refresh(){const t=this.music,e=t.current,n=this.shown&&!!t.album,i=this.isOpen&&!this.closing;if(this.ui.classList.toggle("on",n),this.ui.classList.toggle("list",n&&i&&this.listOn),!t.album||!e)return;this.playBtn.innerHTML=t.playing?Vc["⏸"]:Vc["▶"],this.playBtn.title=t.playing?"Pause":"Play";const o=t.album;if(this.listFor!==`${o.id}|${o.tracks.length}`){this.listFor=`${o.id}|${o.tracks.length}`,this.albumLine.textContent=o.title,this.songs.replaceChildren(...o.tracks.map((a,l)=>{const c=document.createElement("li");return c.dataset.k=String(l),c.textContent=a.title,c}));const r=o.tracks.length>20?3:o.tracks.length>8?2:1;this.songs.style.columnCount=String(r),this.songs.style.width=r===1?"auto":""}this.songs.querySelectorAll("li").forEach((r,a)=>r.classList.toggle("now",a===t.track))}}const r2={KeyA:0,KeyW:1,KeyS:2,KeyE:3,KeyD:4,KeyF:5,KeyT:6,KeyG:7,KeyY:8,KeyH:9,KeyU:10,KeyJ:11,KeyK:12,KeyO:13,KeyL:14,KeyP:15},ap=4;class a2{constructor(t,e,n,i){R(this,"state","none");R(this,"sound",new jb);R(this,"seat",null);R(this,"anim",null);R(this,"octave",0);R(this,"byKey",new Map);R(this,"byPointer",new Map);R(this,"ray",new vs);R(this,"ndc",new pt);R(this,"recBack",null);R(this,"music",new t2);R(this,"fan");R(this,"wheelAt",0);R(this,"beckonRest",!1);R(this,"engaged",!1);R(this,"handledAt",-1e9);R(this,"onChange",()=>{});R(this,"fanTouch",null);R(this,"flick",[]);this.player=t,this.camera=e,this.canvas=n,this.gallery=i,this.fan=new o2(e,n,this.music,()=>this.F,()=>this.gallery.data.albums),this.fan.onClosed=()=>this.recordsAway(),t.onSeatedMove=()=>{this.state==="couch"&&this.stand()},addEventListener("keydown",o=>this.key(o,!0)),addEventListener("keyup",o=>this.key(o,!1)),n.addEventListener("pointerdown",o=>this.down(o)),n.addEventListener("wheel",o=>{if(this.state!=="records"||this.anim)return;o.preventDefault();const r=Math.abs(o.deltaX)>Math.abs(o.deltaY)?o.deltaX:o.deltaY;performance.now()-this.wheelAt<280||Math.abs(r)<4||(this.wheelAt=performance.now(),this.fan.step(r>0?1:-1))},{passive:!1}),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o)),addEventListener("pointercancel",o=>this.up(o)),addEventListener("blur",()=>{for(const o of this.byKey.values())this.off(o);this.byKey.clear(),this.sound.setPedal(!1)})}get busy(){return this.state!=="none"||!!this.anim}get moving(){return!!this.anim}get F(){return this.gallery.furniture}sitCouch(t,e=!0){const n=this.F.couchSeats;if(!n.length||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>ap)return!1;let i=n.reduce((r,a)=>a.eye.distanceTo(t)<r.eye.distanceTo(t)?a:r);const o=e?this.fan.restCentre():null;return o&&(i={...i,yaw:Math.atan2(-(o.x-i.eye.x),-(o.z-i.eye.z)),pitch:Math.atan2(o.y-i.eye.y,Math.hypot(o.x-i.eye.x,o.z-i.eye.z))+.08}),this.go("couch",i,1),!0}sitPiano(t){const e=this.F.pianoSeat;return!e||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>ap?!1:(this.sound.wake(),this.sound.decodeAll(),this.go("piano",e,1.2),!0)}fit(t){if(!t.look)return;const e=this.camera,n=Math.atan(Math.tan(Ae.degToRad(e.fov)/2)*e.aspect);t.eye.copy(N0(t.look,t.yaw,t.pitch,Math.max(Ao.near,Ao.span/Math.tan(n))))}go(t,e,n){this.fit(e),this.seat=e,this.state=t,this.engaged=!1,this.beckonRest=!1,t==="couch"&&this.music.primeAlbums(this.gallery.data.albums.filter(i=>!i.off)),this.player.seated=!0,this.anim={from:this.pose(),to:{x:e.eye.x,y:e.eye.y,z:e.eye.z,yaw:e.yaw,pitch:e.pitch},t:0,dur:n},this.onChange(t)}stand(){const t=this.seat;if(!(!t||this.state==="none")){for(const e of[...this.byKey.values(),...this.byPointer.values()])this.off(e);this.byKey.clear(),this.byPointer.clear(),this.sound.setPedal(!1),this.state="none",this.anim={from:this.pose(),to:{x:t.stand.x,y:ri,z:t.stand.z,yaw:this.player.yaw,pitch:Math.max(-.25,Math.min(.1,this.player.pitch))},t:0,dur:.8,then:()=>{this.player.seated=!1,this.seat=null,this.player.collide()}},this.canvas.style.cursor="",this.onChange("none")}}pose(){const t=this.player;return{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw,pitch:t.pitch}}update(t){var i,o;const e=this.player,n=this.anim;if(n){n.t=Math.min(1,n.t+t/n.dur);const r=n.t*n.t*(3-2*n.t),a=n.to.y<n.from.y?r*r*(3-2*r):1-(1-r)*(1-r);e.pos.set(n.from.x+(n.to.x-n.from.x)*r,n.from.y+(n.to.y-n.from.y)*a,n.from.z+(n.to.z-n.from.z)*r),e.yaw=n.from.yaw+Math.atan2(Math.sin(n.to.yaw-n.from.yaw),Math.cos(n.to.yaw-n.from.yaw))*r,e.pitch=n.from.pitch+(n.to.pitch-n.from.pitch)*r,n.t>=1&&(this.anim=null,(i=n.then)==null||i.call(n))}else if(this.state==="records"&&this.recBack){const r=this.recBack.pose;e.pos.set(r.x,r.y,r.z),e.yaw=r.yaw,e.pitch+=(Math.max(r.pitch,-.12)-e.pitch)*(1-Math.exp(-6*t))}else this.seat&&this.state!=="none"&&(this.fit(this.seat),e.pos.copy(this.seat.eye));this.beckon(),this.fan.update(t),(o=this.F.piano)==null||o.update(t),Jb(this.camera)}rebuilt(){const t=this.F.soundAt;t&&this.sound.setPosition(t.x,t.y,t.z),this.state!=="none"&&(this.state="none",this.player.seated=!1,this.seat=null,this.anim=null),this.fan.isOpen&&this.fan.close(),this.recBack=null;const e=this.F.speakers;e&&this.music.setSpeakers(e[0],e[1])}beckon(){let t=0;const e=this.state==="couch"&&!this.fan.isOpen&&(!this.anim||this.anim.t>.6)?this.fan.restCentre():null;if(e){const n=this.camera.position,i=e.distanceTo(n),o=this.camera.getWorldDirection(new L).angleTo(e.clone().sub(n)),r=Math.atan2(.17,i)+.06;if(o>r+.08&&(this.beckonRest=!1),!this.engaged&&o<r&&!this.beckonRest&&(this.engaged=!0),this.engaged){const a=Math.max(0,Math.min(1,(o-r)/.2));t=1-a*a*(3-2*a),t===0&&this.fan.pre<.02&&(this.engaged=!1)}}else this.state!=="couch"&&(this.engaged=!1);this.fan.beckon(t)}get recordsEngaged(){return this.engaged}recordsBack(){this.state==="couch"&&(this.engaged=!1,this.beckonRest=!0,this.fan.beckon(0))}get recordsUp(){return this.state==="couch"&&this.fan.pre>.7}lookAtRecords(){return this.anim||this.state!=="couch"||this.fan.isOpen||!this.fan.open()?!1:(this.music.primeAlbums(this.gallery.data.albums.filter(t=>!t.off)),this.recBack={state:"couch",pose:this.pose()},this.state="records",this.player.seated=!0,this.onChange("records"),!0)}recordsAway(){const t=this.recBack;this.recBack=null,t&&(this.state=t.state,this.beckonRest=!0,this.engaged=!1,t.state==="none"&&(this.player.seated=!1,this.player.pos.y=ri,this.player.collide()),this.canvas.style.cursor="",this.onChange(this.state))}relock(){var t,e;try{(e=(t=this.canvas.requestPointerLock())==null?void 0:t.catch)==null||e.call(t,()=>{})}catch{}}on(t){var e;this.sound.noteOn(t),(e=this.F.piano)==null||e.press(t,!0)}off(t){var e;this.sound.noteOff(t),(e=this.F.piano)==null||e.press(t,!1)}keyAt(t,e){const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObject(this.F.group,!0).find(r=>r.object.isMesh);if(!i)return{key:null,piano:!1,records:!1};const o=i.object.userData;return{key:typeof o.key=="number"?o.key:null,piano:o.piece==="piano",records:!!o.records}}down(t){const[e,n]=Hc(t,this.canvas);if(this.state==="records"){if(this.anim||(t.preventDefault(),this.handledAt=performance.now(),Gh(this.canvas)))return;if(t.pointerType==="touch"){for(const r of this.flick)clearTimeout(r);this.flick=[],this.fanTouch={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),moved:!1,lx:t.clientX,acc:0,trail:[{t:performance.now(),x:t.clientX}]};try{this.canvas.setPointerCapture(t.pointerId)}catch{}return}this.fan.click(e,n);return}if(this.state!=="piano"||this.anim)return;this.handledAt=performance.now();const{key:i,piano:o}=this.keyAt(e,n);if(i!==null){t.preventDefault(),this.byPointer.set(t.pointerId,i),this.on(i);try{this.canvas.setPointerCapture(t.pointerId)}catch{}}else o||this.stand()}move(t){if(this.state==="records"){const r=this.fanTouch;if(t.pointerType==="touch"){if(!r||r.id!==t.pointerId)return;for(Math.hypot(t.clientX-r.x,t.clientY-r.y)>12&&(r.moved=!0),r.acc+=t.clientX-r.lx,r.lx=t.clientX;Math.abs(r.acc)>=44;)this.fan.step(r.acc<0?1:-1),r.acc-=Math.sign(r.acc)*44;const c=performance.now();for(r.trail.push({t:c,x:t.clientX});r.trail.length>2&&c-r.trail[0].t>120;)r.trail.shift();return}const[a,l]=Hc(t,this.canvas);this.fan.move(a,l);return}if(this.state!=="piano")return;const[e,n]=Hc(t,this.canvas),{key:i}=this.keyAt(e,n);t.pointerType==="mouse"&&(this.canvas.style.cursor=i!==null?Du:"");const o=this.byPointer.get(t.pointerId);o!==void 0&&i!==null&&i!==o&&(this.off(o),this.on(i),this.byPointer.set(t.pointerId,i))}up(t){const e=this.fanTouch;if(e&&e.id===t.pointerId){if(this.fanTouch=null,this.handledAt=performance.now(),this.state==="records"&&!e.moved&&performance.now()-e.t<600)this.fan.click(t.clientX,t.clientY);else if(this.state==="records"&&e.trail.length>1){const i=e.trail[0],o=e.trail[e.trail.length-1],r=(o.x-i.x)/Math.max(16,o.t-i.t)*1e3,a=Math.min(4,Math.floor(Math.abs(r)/450));for(let l=1;l<=a;l++)this.flick.push(window.setTimeout(()=>this.fan.step(r<0?1:-1),l*110))}return}const n=this.byPointer.get(t.pointerId);n!==void 0&&(this.byPointer.delete(t.pointerId),this.off(n))}key(t,e){var i,o;if(t.metaKey||t.ctrlKey||t.altKey||(o=(i=t.target).closest)!=null&&o.call(i,"input, textarea, select"))return;if(this.state==="couch"&&e&&!this.anim&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){this.stand();return}if(this.state==="records"){if(!e||this.anim)return;["ArrowRight","KeyD"].includes(t.code)?(t.preventDefault(),this.fan.step(1)):["ArrowLeft","KeyA"].includes(t.code)?(t.preventDefault(),this.fan.step(-1)):["Space","Enter"].includes(t.code)?(t.preventDefault(),this.fan.chooseHovered()):["Escape","KeyW","KeyS"].includes(t.code)&&this.fan.close();return}if(this.state!=="piano")return;if(e&&t.code==="Escape"){this.stand();return}if(t.code==="Space"){t.preventDefault(),this.sound.setPedal(e);return}if(e&&(t.code==="KeyZ"||t.code==="KeyX")){t.repeat||(this.octave=Math.max(-3,Math.min(3,this.octave+(t.code==="KeyX"?1:-1))));return}const n=r2[t.code];if(n!==void 0)if(t.preventDefault(),e){if(t.repeat||this.byKey.has(t.code))return;const r=60+this.octave*12+n;if(r<21||r>108)return;this.byKey.set(t.code,r),this.on(r)}else{const r=this.byKey.get(t.code);if(r===void 0)return;this.byKey.delete(t.code),this.off(r)}}}const l2=33.333/60*Math.PI*2,Gc=-.379;class c2{constructor(t,e,n,i){R(this,"speed",0);R(this,"arm",0);R(this,"vu",[wo,wo]);R(this,"on",null);R(this,"wasPlaying",!1);R(this,"lift",0);R(this,"move",null);this.music=t,this.F=e,this.inside=n,this.you=i}update(t){const e=this.music,n=this.F(),i=n.deck;if(e.setInside(this.inside()),e.tick(t,this.you()),!i&&e.moving&&e.drop(),i){const a=e.playing&&!e.cueing,l=a?l2:0;this.speed+=(l-this.speed)*(1-Math.exp(-(a?2.2:.9)*t)),i.spin.rotation.y-=this.speed*t,i.record.visible=!e.cueing;const c=e.cueing?null:e.album,h=(c==null?void 0:c.id)??null;(h!==this.on||c&&i.record.material===i.restRecord)&&(i.record.material=c?Oh(c):i.restRecord,this.on=h);const u=f=>.146-(.146-.064)*f;if(e.moving&&c){const f=i.armAt(u(e.needleTo));this.move||(this.move={phase:"lift",t:0,from:this.arm,to:f,dur:0,aim:e.needleTo});const d=this.move;if(d.aim!==e.needleTo&&(d.aim=e.needleTo,d.from=this.arm,d.to=f,d.phase="lift",d.t=0),d.t+=t,d.phase==="lift")this.lift=Math.min(1,this.lift+t/.35),this.lift>=1&&(d.phase="swing",d.t=0,d.from=this.arm,d.dur=.45+Math.abs(d.to-d.from)*2.2);else if(d.phase==="swing"){const p=Math.min(1,d.t/d.dur),m=p*p*(3-2*p);this.arm=d.from+(d.to-d.from)*m,p>=1&&(d.phase="lower",d.t=0)}else{const p=Math.min(1,d.t/.6);this.lift=(1-p)**2,p>=1&&(this.lift=0,this.move=null,e.drop())}}else{this.move=null,this.lift=Math.max(0,this.lift-t/.35);const d=!!c&&(e.playing||e.progress>5e-4)?i.armAt(u(e.progress)):0,p=.9*t;this.arm+=Math.max(-p,Math.min(p,d-this.arm))}i.arm.rotation.order="YXZ",i.arm.rotation.y=this.arm,i.arm.rotation.x=-.055*(this.lift*this.lift*(3-2*this.lift))}const o=e.levels(),r=1-Math.exp(-t/.3);if(n.meters.needles.forEach((a,l)=>{const c=20*Math.log10((o[l]??0)+1e-6),h=c+18,u=h<=-20?wo:h<=0?wo+(h+20)/20*(Gc-wo):Math.max(Ud,Gc+h/3*(Ud-Gc));this.vu[l]+=(u-this.vu[l])*r,a.rotation.z=this.vu[l]}),e.playing&&!e.cueing){const a=20*Math.log10(Math.max(o[0],o[1])+1e-6),l=Math.round(Math.max(0,Math.min(12,(a+42)/40*12)));n.meters.bar.forEach((c,h)=>c(h<l?h<7?.9:1:h<7?.06:.03))}else this.wasPlaying&&n.meters.bar.forEach((a,l)=>a(l<7?.45:.08));this.wasPlaying=e.playing}}var lp;class h2{constructor(t){R(this,"count",null);R(this,"onCount",()=>{});R(this,"id",(((lp=crypto.randomUUID)==null?void 0:lp.call(crypto))??String(Math.random()).slice(2)).slice(0,36));R(this,"inside",!1);R(this,"timer",0);R(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const vi=new URLSearchParams(location.search),u2=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,vo=(matchMedia("(hover: none) and (pointer: coarse)").matches||u2)&&!vi.has("desk")||vi.has("touch");f2().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function f2(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([__(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(q=>document.fonts.load(q))),new Promise(q=>setTimeout(q,2500))])]);Zb();const e=new h_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,vo?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=Yh,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Sr,e.shadowMap.autoUpdate=!1;const o=e.domElement;document.getElementById("stage").appendChild(o);const r=e.capabilities.getMaxAnisotropy(),a=new ou,l=new hn(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(vl);const c=new ES(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?Ae.radToDeg(2*Math.atan(Math.tan(Ae.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const q=e.getDrawingBufferSize(new pt);c.setSize(Math.round(q.x/2),Math.round(q.y/2))};h(),addEventListener("resize",h);const u=new Ro(t,a,e,c,s,r);await u.loadSmall();const f=new Yw(o),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,ri,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const m=vi.get("at");if(m){const[q,nt,Mt,At]=m.split(",").map(Number);f.pos.set(q,ri,nt),f.yaw=Ae.degToRad(Mt||0),f.pitch=Ae.degToRad(At||0)}vi.get("hud");const x=document.getElementById("dot"),g=n2();x.style.display="none";const y=new PS(!1),w=new vs;w.far=14,w.layers.enableAll();let v=[];const M=()=>{v=[],u.interior.group.traverse(q=>{q.isMesh&&!q.isInstancedMesh&&v.push(q)}),u.outside.group.traverse(q=>{q.isMesh&&q.userData.outside&&v.push(q)})},S=()=>E(new pt(0,0)),E=q=>{w.setFromCamera(q,l);const nt=w.intersectObjects(v,!1)[0];if(!nt)return{kind:"none"};const Mt=nt.object.userData;return Mt.piece?{kind:"piece",piece:Mt.piece,records:!!Mt.records,deck:!!Mt.deck,point:nt.point,dist:nt.distance}:Mt.label?{kind:"label",work:Mt.work,point:nt.point,dist:nt.distance}:Mt.work?{kind:"work",work:Mt.work,point:nt.point,dist:nt.distance}:Mt.face?{kind:"face",face:Mt.face,point:nt.point,dist:nt.distance}:{kind:"none",point:nt.point,dist:nt.distance}},_=(q=3.2)=>{var Mt,At;const nt=(At=(Mt=u.furniture)==null?void 0:Mt.couch)==null?void 0:At.centre;return!!nt&&Math.hypot(nt.x-f.pos.x,nt.z-f.pos.z)<q},b=q=>q.kind!=="piece"||!q.point?!1:q.records&&P.state==="couch"?P.lookAtRecords():q.deck&&P.music.album&&Math.hypot(q.point.x-f.pos.x,q.point.z-f.pos.z)<4?(P.music.toggle(),!0):q.piece==="couch"?P.state!=="couch"&&P.sitCouch(q.point):q.piece==="table"&&P.state==="none"&&_()?P.sitCouch(u.furniture.couch.centre,!0):q.piece==="piano"?P.sitPiano(q.point):!1,A=new hl,C=new Set;let I=1;const U=q=>{let nt=99;for(const Mt of u.interior.pictures)Mt.work.id===q&&(nt=Math.min(nt,Math.hypot(Mt.mesh.position.x-f.pos.x,Mt.mesh.position.z-f.pos.z)));return nt};function F(){I=0;for(const[q,nt]of u.sharp)if(!(U(q)<=14)){u.sharp.delete(q);for(const Mt of u.interior.pictures)Mt.work.id===q&&(Mt.mat.uniforms.uMap.value=u.texture(q));nt.dispose()}for(const q of u.interior.pictures){const nt=q.work.id;u.sharp.has(nt)||U(nt)>7.5||(I++,!(C.has(nt)||C.size>=4)&&(C.add(nt),A.loadAsync(Ro.url(nt,"m")).then(Mt=>{C.delete(nt),u.sharp.set(nt,u.prepTex(Mt));for(const At of u.interior.pictures)At.work.id===nt&&(At.mat.uniforms.uMap.value=Mt)}).catch(()=>C.delete(nt))))}}const k=new AS;let Y=!0;const X=q=>{const nt=u.cat.get(q);nt&&(Y=f.locked,f.frozen=!0,k.show(nt,t.images[q],Ro.url(q,u.sharp.has(q)?"m":"s"),Ro.url(q,"l")),y.opened())};k.onClose=()=>{f.frozen=!1,xt.looked()};const et=q=>{const nt=(t.layout.pieces??[]).find(be=>be.id===q);if(!nt)return;const Mt=Ae.degToRad(nt.rot),At=Math.sin(Mt),ce=Math.cos(Mt),_e=q==="couch"?2.2:1.7;f.pos.set(nt.x+At*_e,ri,nt.z+ce*_e),f.yaw=Math.atan2(At,ce),f.pitch=-.32,f.collide()};let G=[],K=null;const it=q=>X(q.id);let ft=0,B=!1;const H=()=>{var Be;const q=(Be=u.furniture)==null?void 0:Be.couch,nt=t.layout.outline,Mt=f.pos;if(!q||P.state!=="none"||P.moving||k.open||document.body.classList.contains("ed-page")||!(Mt.x>nt.x0&&Mt.x<nt.x1&&Mt.z>nt.z0&&Mt.z<nt.z1))return!1;const At=q.centre,ce=l.position,_e=Math.hypot(At.x-ce.x,At.z-ce.z);return _e>3.2?!1:l.getWorldDirection(new L).angleTo(At.clone().sub(ce))<Math.atan2(1.2,_e)+(B?.14:.06)},P=new a2(f,l,o,u);for(const q of["pointerdown","touchend","keydown"])addEventListener(q,nt=>{nt instanceof KeyboardEvent&&(nt.key==="Escape"||nt.metaKey||nt.ctrlKey)||q==="pointerdown"&&f.locked||P.music.ready()},{capture:!0});let V=()=>!1;i2(()=>P.state==="couch"||P.state==="records"||P.state==="piano"||V()),f.mouseLooks=()=>!xo(),P.onChange=q=>{if(q==="couch"||q==="piano"){const nt=o.getBoundingClientRect();P.fan.isOpen||(nn.x=nt.left+nt.width/2,nn.y=nt.top+nt.height/2)}},addEventListener("pointermove",q=>{if(!f.locked||!xo()||q.pointerType!=="mouse")return;const nt=o.getBoundingClientRect(),Mt=nn.x+q.movementX,At=nn.y+q.movementY;nn.x=Math.max(nt.left+2,Math.min(nt.right-2,Mt)),nn.y=Math.max(nt.top+2,Math.min(nt.bottom-2,At)),P.state==="couch"&&!P.moving&&f.edgeTurn(Mt-nn.x,At-nn.y)},{capture:!0});const D=()=>{const q=t.layout.outline,nt=f.pos;return nt.x>q.x0&&nt.x<q.x1&&nt.z>q.z0&&nt.z<q.z1},z=new c2(P.music,()=>u.furniture,D,()=>l.position);let W=0,Q=!1,j=null;const vt=()=>P.state==="couch"&&!P.moving&&!P.fan.isOpen&&!document.body.classList.contains("ed-page")&&!k.open,wt=q=>{const nt=o.getBoundingClientRect();return E(new pt((q.clientX-nt.left)/nt.width*2-1,-((q.clientY-nt.top)/nt.height)*2+1))},at=q=>{if(j!=null&&j.moved){o.style.cursor="";return}const nt=wt(q),Mt=P.recordsUp;o.style.cursor=nt.kind==="piece"&&nt.records||nt.deck&&P.music.album||Mt&&nt.records?Du:""},mt=q=>{const nt=wt(q);if(nt.kind==="piece"&&nt.records){P.lookAtRecords();return}if(P.recordsUp){P.recordsBack();return}if(nt.deck&&P.music.album){P.music.toggle();return}P.stand()};addEventListener("mousemove",q=>{if(!vt()||f.locked||vo){j&&(j=null);return}if(j&&q.buttons&1&&(!j.moved&&Math.hypot(q.clientX-j.x,q.clientY-j.y)>5&&(j.moved=!0),j.moved)){const nt=Ae.degToRad(l.fov)/(o.clientHeight||800);f.turnBy(q.movementX*nt,q.movementY*nt)}at(q)}),addEventListener("mouseup",q=>{const nt=j;j=null,!(!nt||q.button!==0||!vt())&&(nt.moved||mt(q),at(q))});let dt=0;const _t={gallery:u,player:f,camera:l,renderer:e,canvas:o,viewer:k,scene:a,aim:S,openWork:X,standAt:et,dot:x};u.onRebuilt=()=>{f.solids=u.arch.solids,f.boxes=u.furniture.solids;const q=t.layout.outline;f.world={x0:q.x0-30,x1:q.x1+30,z0:q.z0-30,z1:q.z1+30},f.collide(),M(),G=u.interior.pictures.map(RS);const nt=u.furniture.stand;if(nt&&u.furniture.records.length){const Mt=nt.localToWorld(new L(0,.17,.02)),At=new L(0,0,1).transformDirection(nt.matrixWorld),ce=[];nt.traverse(_e=>{_e.isMesh&&ce.push(_e)}),K={kind:"records",id:"records",centre:Mt,normal:[At.x,0,At.z],size:.42,reach:2.9,meshes:ce}}else K=null;P.rebuilt(),dt=0},u.rebuild();const xt=new Xb(u,f,l,vo);V=()=>xt.asking,xt.onSite=TS,xt.openContact=()=>{Vd({rmiContact:{about:"the Listening Room",from:xt.screenAt()}})},xt.danceBeat=()=>{const q=P.music,nt=q.current,Mt=q.element;if(!nt||!Mt||!q.playing||q.cueing||q.moving||!D())return null;const At=t.beats[nt.file];return!At||!d_(nt,At)?null:(q.heardTime-At.beat0)*At.bpm/60/f_(At)};const $t=new h2((vi.get("count"),void 0));$t.onCount=q=>xt.setCount(q),vi.get("count")&&(xt.count=+vi.get("count"));const Ht=(()=>{const q=document.createElement("div");q.id="leaving",document.body.append(q);let nt=0;const Mt=()=>{if(Vd({rmiLeave:!0}))return;const At=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(At)?(history.back(),setTimeout(()=>{location.href=At},1500)):q.classList.remove("on")};return{start(){clearTimeout(nt),q.classList.remove("fast"),q.classList.add("on"),nt=window.setTimeout(Mt,1900)},cancel(){clearTimeout(nt),q.classList.remove("on","fast")},woosh(At){clearTimeout(nt),q.classList.add("fast"),nt=window.setTimeout(()=>{q.classList.add("on"),nt=window.setTimeout(Mt,At*500+250)},At*500)}}})();xt.onEnter=()=>{$t.enter(),Ht.cancel(),P.sound.fetchAll(),xt.leavingNow=!1},xt.onKey=q=>{if(q==="ESC"){f.locked&&document.exitPointerLock();return}f.tap(q==="W"?"KeyW":q==="LEFT"?"ArrowLeft":"ArrowRight",q==="W"?.3:.4),f.locked||o.requestPointerLock()},xt.onLeave=()=>{ut.on||($t.exit(),Ht.start())};const Jt=new vs;Jt.layers.enableAll();const Qt=new yi,$=new L,xe=new L,le=new L(0,0,1),O=new L,T=new L,tt=new L,rt=()=>{const q=t.layout,nt=q.outline,Mt=q.entrance,At=f.pos;if(!(At.x>nt.x0&&At.x<nt.x1&&At.z>nt.z0&&At.z<nt.z1))return!1;const ce=nt.z1-At.z;if(ce<.3)return!1;const _e=Math.abs(At.x-Mt.x)-Mt.w/2;if(_e>0&&_e*nt.t/ce>.02*Mt.w)return!1;O.copy(At);for(const[be,Be]of[[-.45,.04],[.45,.04],[-.45,.96],[.45,.96],[0,.5]]){T.set(Mt.x+be*Mt.w,Be*q.doorHeight,nt.z1+nt.t+.01);const yn=tt.subVectors(T,O).length();Jt.set(O,tt.normalize()),Jt.far=yn;const en=Jt.intersectObjects(v,!1)[0];if(en&&en.distance<yn-.05)return!1}return!0},ct=q=>{const nt=t.layout,Mt=nt.outline,At=nt.entrance;f.apply(l),l.updateMatrixWorld(),Jt.setFromCamera(q,l),Jt.far=1/0;const ce=Jt.ray;if(!ce.intersectPlane(Qt.set(le,-Mt.z1),$)||!ce.intersectPlane(Qt.set(le,-(Mt.z1+Mt.t)),xe)||ce.origin.distanceTo($)>=ce.origin.distanceTo(xe))return!1;const _e=be=>be.x>At.x-At.w/2&&be.x<At.x+At.w/2&&be.y>0&&be.y<nt.doorHeight;return _e($)&&_e(xe)},bt=q=>ct(q)&&rt(),Et=q=>q<.5?4*q*q*q:1-Math.pow(-2*q+2,3)/2,ht=q=>1-Math.pow(1-q,2.6),ut=(()=>{let q=-1,nt=1,Mt=62,At=0,ce=0,_e=[1,1];const be=[new L,new L,new L];return{get on(){return q>=0},start(Be){if(q>=0)return;const yn=t.layout,en=yn.entrance,rn=yn.outline,Un=Math.max(en.x-en.w/2+.45,Math.min(en.x+en.w/2-.45,Be));be[0].set(f.pos.x,ri,f.pos.z),be[1].set(Un,ri,rn.z1-.7),be[2].set(en.x,ri,rn.z1+rn.t+2.4),_e=[be[0].distanceTo(be[1]),be[1].distanceTo(be[2])],nt=Math.max(.75,Math.min(1.3,.6+.032*(_e[0]+_e[1]))),q=0,Mt=l.fov,At=f.yaw,ce=f.pitch,f.frozen=!0,f.vel.set(0,0,0),f.glide.set(0,0),f.spin=0,f.goal=null,f.keys.clear(),$t.exit(),Ht.woosh(nt)},update(Be){if(q<0)return;q=Math.min(nt,q+Be);const yn=ht(q/nt),en=yn*(_e[0]+_e[1]);en<_e[0]?f.pos.lerpVectors(be[0],be[1],en/Math.max(_e[0],1e-6)):f.pos.lerpVectors(be[1],be[2],(en-_e[0])/Math.max(_e[1],1e-6));const rn=Math.atan2(-(be[2].x-f.pos.x),-(be[2].z-f.pos.z)),Un=Et(Math.min(1,q/(nt*.45)));f.yaw=At+Math.atan2(Math.sin(rn-At),Math.cos(rn-At))*Un,f.pitch=ce*(1-Un),l.fov=Mt*(1+.14*Math.sin(Math.PI*Math.pow(q/nt,.6))),l.updateProjectionMatrix(),q>=nt&&(q=-1,l.fov=Mt,l.updateProjectionMatrix(),window.setTimeout(()=>{f.frozen=k.open},700))}}})(),Rt=q=>ut.on||P.state!=="none"||P.moving||!bt(q)?!1:(xt.leavingNow=!0,ut.start($.x),!0),Vt=document.createElement("div");Vt.id="exit-label",Vt.innerHTML="<span>EXIT</span>",document.body.append(Vt);const Tt={x:-1,y:-1};addEventListener("mousemove",q=>{f.locked||(Tt.x=q.clientX,Tt.y=q.clientY)});let Ct=0;const Kt=(q,nt)=>{if((Ct-=q)>0)return;Ct=.08;let Mt=!1,At=innerWidth/2,ce=innerHeight/2;if(!vo&&!nt&&!k.open&&!ut.on&&P.state==="none"&&!P.moving&&!xo()){if(f.locked)Mt=bt(new pt(0,0));else if(Tt.x>=0){const Ii=o.getBoundingClientRect();At=Tt.x,ce=Tt.y,Mt=bt(new pt((At-Ii.left)/Ii.width*2-1,-((ce-Ii.top)/Ii.height)*2+1))}}if(Vt.classList.toggle("on",Mt),document.body.classList.toggle("exit-on",Mt),!Mt)return;const _e=t.layout,be=_e.outline,Be=_e.entrance,yn=o.getBoundingClientRect();let en=1/0,rn=-1/0,Un=1/0,Ts=-1/0;for(const[Ii,Kr]of[[Be.x-Be.w/2,0],[Be.x+Be.w/2,0],[Be.x-Be.w/2,_e.doorHeight],[Be.x+Be.w/2,_e.doorHeight]]){T.set(Ii,Kr,be.z1+be.t).project(l);const Zr=yn.left+(T.x+1)/2*yn.width,Jr=yn.top+(1-T.y)/2*yn.height;en=Math.min(en,Zr),rn=Math.max(rn,Zr),Un=Math.min(Un,Jr),Ts=Math.max(Ts,Jr)}const Wo=Vt.offsetWidth/2||20,As=8,$r=Math.max(en+Wo,Math.min(rn-Wo,At)),Xs=ce+21+As<Ts?ce+21:ce-21-As>Un?ce-21:(Un+Ts)/2;Vt.style.transform=`translate(${Math.round($r)}px, ${Math.round(Xs)}px)`},te=new vs;te.far=12;let ie=null,J=-1e9;const Lt=q=>{if(q.button!==0&&q.button!==2||performance.now()-J<900||ut.on)return;if(k.open){k.hide();return}if(P.state==="piano"||P.state==="records"||performance.now()-P.handledAt<400)return;const nt=document.body.classList.contains("ed-page");if(!nt&&P.state==="none"&&!(xt.asking&&xo())){const At=o.getBoundingClientRect(),ce=f.locked?new pt(0,0):new pt((q.clientX-At.left)/At.width*2-1,-((q.clientY-At.top)/At.height)*2+1);if(Rt(ce))return}if(P.state==="couch"&&!nt){if(P.moving)return;if(!f.locked){q.button===0&&(j={x:q.clientX,y:q.clientY,moved:!1});return}if(Gh(o))return;mt({clientX:nn.x,clientY:nn.y});return}if(!f.locked){const At=o.getBoundingClientRect(),ce=nt?null:E(new pt((q.clientX-At.left)/At.width*2-1,-((q.clientY-At.top)/At.height)*2+1));if(ce&&b(ce))return;if(y.pic){it(y.pic);return}o.requestPointerLock();return}if(xt.asking&&xo()){Gh(o);return}if(te.setFromCamera(new pt(0,0),l),xt.hit(te)){xt.poke();return}if(y.pic){it(y.pic);return}const Mt=S();!nt&&b(Mt)||(Mt.kind==="work"||Mt.kind==="label")&&X(Mt.work)};o.addEventListener("mousedown",Lt),addEventListener("pointerdown",q=>{q.pointerType==="touch"&&(J=performance.now())},!0);const gt=q=>{w.setFromCamera(q,l);const nt=w.intersectObjects(v,!1)[0];if(!nt)return{kind:"none",ndc:q.clone()};const Mt=nt.object.userData,At={point:nt.point,dist:nt.distance,ndc:q.clone()};return Mt.face?{kind:"wall",...At}:nt.point.y<.02?{kind:"floor",...At}:{kind:"other",piece:Mt.piece,records:!!Mt.records,deck:!!Mt.deck,...At}};new US(o,l,f,gt,q=>{if(!(ut.on||P.state==="none"&&!P.moving&&q.ndc&&Rt(q.ndc))){if(P.state==="couch"){if(P.moving)return;if(q.records){P.lookAtRecords();return}if(P.recordsUp){P.recordsBack();return}if(q.deck&&P.music.album){P.music.toggle();return}P.stand();return}if(!(q.point&&(q.piece==="couch"||q.piece==="piano"||q.piece==="table")&&b({kind:"piece",piece:q.piece,records:q.records,deck:q.deck,point:q.point}))&&q.kind==="floor"&&q.point){const nt=q.point.x-f.pos.x,Mt=q.point.z-f.pos.z,At=Math.hypot(nt,Mt),ce=Math.max(0,At-.5)/Math.max(At,1e-6);f.goal={x:f.pos.x+nt*ce,z:f.pos.z+Mt*ce}}}},()=>!k.open&&!document.body.classList.contains("ed-page")&&P.state!=="piano"&&P.state!=="records"),document.addEventListener("selectstart",q=>{var Mt;const nt=q.target instanceof Element?q.target:(Mt=q.target)==null?void 0:Mt.parentElement;nt!=null&&nt.closest("input, textarea, select, [contenteditable]")||q.preventDefault()}),addEventListener("mouseup",q=>ie==null?void 0:ie.release(q)),k.relock=()=>Y&&!document.body.classList.contains("ed-page"),k.el.addEventListener("mousedown",q=>{k.busy||q.target.closest(".view-tools")||(q.preventDefault(),k.hide(),!k.open&&!f.locked&&k.relock()&&o.requestPointerLock())}),document.addEventListener("contextmenu",q=>{q.target.closest("input, textarea, select")||q.preventDefault()}),addEventListener("keydown",q=>{var Mt,At;if((At=(Mt=q.target).closest)!=null&&At.call(Mt,"input, textarea, select, button"))return;const nt=q.code==="Enter"||q.code==="Space";if(k.open){(nt||q.code==="Escape")&&!k.busy&&(q.preventDefault(),k.hide());return}nt&&y.pic&&!document.body.classList.contains("ed-page")&&(q.preventDefault(),it(y.pic))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&k.open&&k.hide()});const Pt=vi.get("open");Pt!==null&&X(Pt.padStart(2,"0"));let Nt=performance.now(),yt=0,Wt=0;const Xt=vi.get("near")==="1";function Ce(){var be;const q=performance.now(),nt=Math.min((q-Nt)/1e3,.05);Nt=q,nt>.024?Wt+=nt:Wt=Math.max(0,Wt-nt*.5),Wt>1.5&&i>1&&(i=Math.max(1,i-.25),Wt=0,h()),f.update(nt),P.update(nt),ut.update(nt),f.apply(l),l.updateMatrixWorld();const Mt=document.body.classList.contains("ed-page");if(xt.hide(Mt||k.open),xt.update(nt),f.obstacles=[xt.obstacle],(dt-=nt)<=0&&(dt=.3,F()),y.hold(P.state==="records"&&!Mt?K:null),Mt||k.open?y.clear():y.update(nt,l,G,u.arch.solids,!0),z.update(nt),P.music.playing&&(xt.heardMusic=!0),xt.asking!==Q&&(Q=xt.asking,Q&&P.state==="none")){const Be=o.getBoundingClientRect();nn.x=Be.left+Be.width/2,nn.y=Be.top+Be.height/2}P.fan.setShown(!Mt&&!k.open&&D()),xo()?g(f.locked&&!Mt&&!k.open&&!vo&&!ut.on,nn.x,nn.y):g(f.locked&&!Mt&&!k.open&&!vo&&!ut.on),Kt(nt,Mt);const At=H();At&&!B&&xt.couch(),B=At,ft+=((At?1:0)-ft)*(1-Math.exp(-nt/.35));const ce=(be=u.furniture)==null?void 0:be.couch;ce&&(ce.light.intensity=ce.base*(1+.8*ft));const _e=P.music;_e.playing&&!_e.cueing&&P.state==="none"&&!P.moving&&!At&&!Mt&&!k.open&&D()&&!_(1.8)?W+=nt:W=0,W>7&&xt.sweetSpot()&&(W=0),c.render(e,a,l),e.render(a,l),Mt||xt.render(e),Mt||y.render(e,a,l),yt++,!window.__gReady&&yt>3&&(!Xt||I===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(Ce)}requestAnimationFrame(Ce);try{document.hasFocus()||window.focus()}catch{}vi.has("sound")&&X0(()=>import("./soundcheck-DnrDF83i.js"),[],import.meta.url).then(q=>q.soundPanel(P.music)),window.__g={..._t,data:t,editor:ie,host:xt,presence:$t,focus:y,standAt:et,sitting:P,outWay:Kb,Raycaster:vs,onDoor:bt,woosh:ut},window.__crossVp=nn}export{ep as a,si as b,Kb as o,Rl as s};
