var w0=Object.defineProperty;var S0=(s,t,e)=>t in s?w0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>S0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const b0="modulepreload",E0=function(s,t){return new URL(s,t).href},xu={},T0=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=E0(c,n),c in xu)return;xu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===c&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":b0,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="186",A0=0,vu=1,R0=2,eo=1,C0=2,Jr=3,bs=0,yn=1,Yn=2,Di=0,no=1,Sa=2,Mu=3,_u=4,P0=5,er=100,L0=101,I0=102,D0=103,N0=104,U0=200,z0=201,F0=202,k0=203,Od=204,Bd=205,O0=206,B0=207,H0=208,V0=209,G0=210,W0=211,X0=212,q0=213,Y0=214,pc=0,mc=1,gc=2,ho=3,xc=4,vc=5,Mc=6,_c=7,mh=0,$0=1,K0=2,hi=0,Hd=1,Vd=2,Gd=3,Wd=4,Xd=5,qd=6,gh=7,Yd=300,Es=301,gr=302,gl=303,xl=304,el=306,ba=1e3,Ci=1001,yc=1002,Xe=1003,Z0=1004,Ro=1005,tn=1006,vl=1007,is=1008,_n=1009,$d=1010,Kd=1011,uo=1012,xh=1013,fi=1014,Zn=1015,Cn=1016,vh=1017,Mh=1018,fo=1020,Zd=35902,Jd=35899,Qd=1021,jd=1022,An=1023,zi=1026,ws=1027,nl=1028,_h=1029,Ts=1030,yh=1031,wh=1033,ga=33776,xa=33777,va=33778,Ma=33779,wc=35840,Sc=35841,bc=35842,Ec=35843,Tc=36196,Ac=37492,Rc=37496,Cc=37488,Pc=37489,Ea=37490,Lc=37491,Ic=37808,Dc=37809,Nc=37810,Uc=37811,zc=37812,Fc=37813,kc=37814,Oc=37815,Bc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,qc=36492,Yc=36494,$c=36495,Kc=36283,Zc=36284,Ta=36285,Jc=36286,J0=3200,Q0=3201,Aa=0,j0=1,ts="",Ne="srgb",Ra="srgb-linear",Ca="linear",ye="srgb",Ml=7680,tm=519,em=512,nm=513,im=514,Sh=515,sm=516,rm=517,bh=518,om=519,tp=35044,yu="300 es",li=2e3,po=2001;function am(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lm(){const s=mo("canvas");return s.style.display="block",s}const wu={};function Pa(...s){const t="THREE."+s.shift();console.log(t,...s)}function ep(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function jt(...s){s=ep(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ge(...s){s=ep(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ur(...s){const t=s.join(" ");t in wu||(wu[t]=!0,jt(...s))}function cm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const hm={[pc]:mc,[gc]:Mc,[xc]:_c,[ho]:vc,[mc]:pc,[Mc]:gc,[_c]:xc,[vc]:ho};class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const io=Math.PI/180,xr=180/Math.PI;function ui(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function um(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fm(s,t,e){return s!==t?(e-s)/(t-s):0}function so(s,t,e){return(1-e)*s+e*t}function dm(s,t,e,n){return so(s,t,1-Math.exp(-e*n))}function pm(s,t=1){return t-Math.abs(Eh(s,t*2)-t)}function mm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function xm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vm(s,t){return s+Math.random()*(t-s)}function Mm(s){return s*(.5-Math.random())}function _m(s){s!==void 0&&(Su=s);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ym(s){return s*io}function wm(s){return s*xr}function Sm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Em(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tm(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const De={DEG2RAD:io,RAD2DEG:xr,generateUUID:ui,clamp:ae,euclideanModulo:Eh,mapLinear:um,inverseLerp:fm,lerp:so,damp:dm,pingpong:pm,smoothstep:mm,smootherstep:gm,randInt:xm,randFloat:vm,randFloatSpread:Mm,seededRandom:_m,degToRad:ym,radToDeg:wm,isPowerOfTwo:Sm,ceilPowerOfTwo:bm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:Tm,normalize:we,denormalize:$n},nu=class nu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nu.prototype.isVector2=!0;let pt=nu;class me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*g;x<0&&(f=-f,d=-d,p=-p,g=-g,x=-x);let m=1-a;if(x<.9995){const M=Math.acos(x),w=Math.sin(M);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+g*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const iu=class iu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};iu.prototype.isVector3=!0;let L=iu;const _l=new L,bu=new me,su=class su{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=i[0],x=i[3],m=i[6],M=i[1],w=i[4],v=i[7],y=i[2],S=i[5],T=i[8];return r[0]=o*g+a*M+l*y,r[3]=o*x+a*w+l*S,r[6]=o*m+a*v+l*T,r[1]=c*g+h*M+u*y,r[4]=c*x+h*w+u*S,r[7]=c*m+h*v+u*T,r[2]=f*g+d*M+p*y,r[5]=f*x+d*w+p*S,r[8]=f*m+d*v+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};su.prototype.isMatrix3=!0;let ne=su;const yl=new ne,Eu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){const s={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ra]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const xe=Am();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class Rm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=mo("canvas")),Ds.width=t.width,Ds.height=t.height;const i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cm=0;class Th{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wl(i[o].image)):r.push(wl(i[o]))}else r=wl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function wl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let Pm=0;const Sl=new L;class nn extends Cs{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Ci,i=Ci,r=tn,o=is,a=An,l=_n,c=nn.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ui(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Yd;nn.DEFAULT_ANISOTROPY=1;const ru=class ru{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(d+1)/2,y=(m+1)/2,S=(h+f)/4,T=(u+g)/4,_=(p+x)/4;return w>v&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=S/n,r=T/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=T/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((x-p)*(x-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(x-p)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ru.prototype.isVector4=!0;let Se=ru;class Lm extends Cs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new nn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Th(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Lm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class np extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Im extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const tl=class tl{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,p,g,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,g,x)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,p,g,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f+g*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dm,t,Nm)}lookAt(t,e,n){const i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(n,Sn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(n,Sn)),Hi.normalize(),Co.crossVectors(Sn,Hi),i[0]=Hi.x,i[4]=Co.x,i[8]=Sn.x,i[1]=Hi.y,i[5]=Co.y,i[9]=Sn.y,i[2]=Hi.z,i[6]=Co.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],x=n[10],m=n[14],M=n[3],w=n[7],v=n[11],y=n[15],S=i[0],T=i[4],_=i[8],b=i[12],A=i[1],C=i[5],P=i[9],U=i[13],F=i[2],V=i[6],q=i[10],X=i[14],j=i[3],G=i[7],K=i[11],tt=i[15];return r[0]=o*S+a*A+l*F+c*j,r[4]=o*T+a*C+l*V+c*G,r[8]=o*_+a*P+l*q+c*K,r[12]=o*b+a*U+l*X+c*tt,r[1]=h*S+u*A+f*F+d*j,r[5]=h*T+u*C+f*V+d*G,r[9]=h*_+u*P+f*q+d*K,r[13]=h*b+u*U+f*X+d*tt,r[2]=p*S+g*A+x*F+m*j,r[6]=p*T+g*C+x*V+m*G,r[10]=p*_+g*P+x*q+m*K,r[14]=p*b+g*U+x*X+m*tt,r[3]=M*S+w*A+v*F+y*j,r[7]=M*T+w*C+v*V+y*G,r[11]=M*_+w*P+v*q+y*K,r[15]=M*b+w*U+v*X+y*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],g=t[7],x=t[11],m=t[15],M=l*d-c*f,w=a*d-c*u,v=a*f-l*u,y=o*d-c*h,S=o*f-l*h,T=o*u-a*h;return e*(g*M-x*w+m*v)-n*(p*M-x*y+m*S)+i*(p*w-g*y+m*T)-r*(p*v-g*S+x*T)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],g=t[13],x=t[14],m=t[15],M=e*a-n*o,w=e*l-i*o,v=e*c-r*o,y=n*l-i*a,S=n*c-r*a,T=i*c-r*l,_=h*g-u*p,b=h*x-f*p,A=h*m-d*p,C=u*x-f*g,P=u*m-d*g,U=f*m-d*x,F=M*U-w*P+v*C+y*A-S*b+T*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return t[0]=(a*U-l*P+c*C)*V,t[1]=(i*P-n*U-r*C)*V,t[2]=(g*T-x*S+m*y)*V,t[3]=(f*S-u*T-d*y)*V,t[4]=(l*A-o*U-c*b)*V,t[5]=(e*U-i*A+r*b)*V,t[6]=(x*v-p*T-m*w)*V,t[7]=(h*T-f*v+d*w)*V,t[8]=(o*P-a*A+c*_)*V,t[9]=(n*A-e*P-r*_)*V,t[10]=(p*S-g*v+m*M)*V,t[11]=(u*v-h*S-d*M)*V,t[12]=(a*b-o*C-l*_)*V,t[13]=(e*C-n*b+i*_)*V,t[14]=(g*w-p*y-x*M)*V,t[15]=(h*y-u*w+f*M)*V,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,g=o*h,x=o*u,m=a*u,M=l*c,w=l*h,v=l*u,y=n.x,S=n.y,T=n.z;return i[0]=(1-(g+m))*y,i[1]=(d+v)*y,i[2]=(p-w)*y,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+m))*S,i[6]=(x+M)*S,i[7]=0,i[8]=(p+w)*T,i[9]=(x-M)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ns.set(i[0],i[1],i[2]).length();const a=Ns.set(i[4],i[5],i[6]).length(),l=Ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Hn.copy(this);const c=1/o,h=1/a,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=li,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===li)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===po)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=li,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===li)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===po)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};tl.prototype.isMatrix4=!0;let Jt=tl;const Ns=new L,Hn=new Jt,Dm=new L(0,0,0),Nm=new L(1,1,1),Hi=new L,Co=new L,Sn=new L,Au=new Jt,Ru=new me;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Um=0;const Cu=new L,Us=new me,gi=new Jt,Po=new L,Er=new L,zm=new L,Fm=new me,Pu=new L(1,0,0),Lu=new L(0,1,0),Iu=new L(0,0,1),Du={type:"added"},km={type:"removed"},zs={type:"childadded",child:null},bl={type:"childremoved",child:null};class He extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new L,e=new Pn,n=new me,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ne}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Lu,t)}rotateZ(t){return this.rotateOnAxis(Iu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Lu,t)}translateZ(t){return this.translateOnAxis(Iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Er,Po,this.up):gi.lookAt(Po,Er,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(gi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),zs.child=t,this.dispatchEvent(zs),zs.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class he extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const x=e.getJointPose(g,n),m=this._getHandJoint(c,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Tl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=Eh(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Tl(o,r,t+1/3),this.g=Tl(o,r,t),this.b=Tl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return xe.workingToColorSpace(on.copy(this),t),Math.round(ae(on.r*255,0,255))*65536+Math.round(ae(on.g*255,0,255))*256+Math.round(ae(on.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(on.copy(this),e);const n=on.r,i=on.g,r=on.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ne){xe.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,i=on.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Lo);const n=so(Vi.h,Lo.h,e),i=so(Vi.s,Lo.s,e),r=so(Vi.l,Lo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Ct;Ct.NAMES=ip;class Rh extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Vn=new L,xi=new L,Al=new L,vi=new L,Fs=new L,ks=new L,Nu=new L,Rl=new L,Cl=new L,Pl=new L,Ll=new Se,Il=new Se,Dl=new Se;class On{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Vn.subVectors(t,e),i.cross(Vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Vn.subVectors(i,e),xi.subVectors(n,e),Al.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(Al),c=xi.dot(xi),h=xi.dot(Al),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ll.setScalar(0),Il.setScalar(0),Dl.setScalar(0),Ll.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ll,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(t,e,n,i){return Vn.subVectors(n,e),xi.subVectors(t,e),Vn.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return On.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Fs.subVectors(i,n),ks.subVectors(r,n),Rl.subVectors(t,n);const l=Fs.dot(Rl),c=ks.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,i);const h=Fs.dot(Cl),u=ks.dot(Cl);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fs,o);Pl.subVectors(t,r);const d=Fs.dot(Pl),p=ks.dot(Pl);if(p>=0&&d<=p)return e.copy(r);const g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ks,a);const x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return Nu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Nu,a);const m=1/(x+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(Fs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ps{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Do.subVectors(this.max,Tr),Os.subVectors(t.a,Tr),Bs.subVectors(t.b,Tr),Hs.subVectors(t.c,Tr),Gi.subVectors(Bs,Os),Wi.subVectors(Hs,Bs),ds.subVectors(Os,Hs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ds.z,ds.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ds.z,0,-ds.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ds.y,ds.x,0];return!Nl(e,Os,Bs,Hs,Do)||(e=[1,0,0,0,1,0,0,0,1],!Nl(e,Os,Bs,Hs,Do))?!1:(No.crossVectors(Gi,Wi),e=[No.x,No.y,No.z],Nl(e,Os,Bs,Hs,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Io=new Ps,Os=new L,Bs=new L,Hs=new L,Gi=new L,Wi=new L,ds=new L,Tr=new L,Do=new L,No=new L,ps=new L;function Nl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ps.fromArray(s,r);const a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ti=Bm();function Bm(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Hm(s){Math.abs(s)>65504&&jt("DataUtils.toHalfFloat(): Value out of range."),s=ae(s,-65504,65504),Ti.floatView[0]=s;const t=Ti.uint32View[0],e=t>>23&511;return Ti.baseTable[e]+((t&8388607)>>Ti.shiftTable[e])}function Vm(s){const t=s>>10;return Ti.uint32View[0]=Ti.mantissaTable[Ti.offsetTable[t]+(s&1023)]+Ti.exponentTable[t],Ti.floatView[0]}class Gm{static toHalfFloat(t){return Hm(t)}static fromHalfFloat(t){return Vm(t)}}const Ge=new L,Uo=new pt;let Wm=0;class mn extends Cs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tp,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class sp extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rp extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Xm=new Ps,Ar=new L,Ul=new L;class wr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Ul)),this.expandByPoint(Ar.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qm=0;const In=new Jt,zl=new He,Vs=new L,bn=new Ps,Rr=new Ps,Ze=new L;class be extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(am(t)?rp:sp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return zl.lookAt(t),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(bn.min,Rr.min),bn.expandByPoint(Ze),Ze.addVectors(bn.max,Rr.max),bn.expandByPoint(Ze)):(bn.expandByPoint(Rr.min),bn.expandByPoint(Rr.max))}bn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),Ze.add(Vs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new L,l[_]=new L;const c=new L,h=new L,u=new L,f=new pt,d=new pt,p=new pt,g=new L,x=new L;function m(_,b,A){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[_].add(g),a[b].add(g),a[A].add(g),l[_].add(x),l[b].add(x),l[A].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,b=M.length;_<b;++_){const A=M[_],C=A.start,P=A.count;for(let U=C,F=C+P;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new L,v=new L,y=new L,S=new L;function T(_){y.fromBufferAttribute(i,_),S.copy(y);const b=a[_];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(S,b);const C=v.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,b=M.length;_<b;++_){const A=M[_],C=A.start,P=A.count;for(let U=C,F=C+P;U<F;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),g=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let g=0,x=l.length;g<x;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new mn(f,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ym{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tp,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const cn=new L;class La{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new La(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fl=new L,$m=new L,Km=new ne;class Si{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Fl.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Fl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Km.getNormalMatrix(t),i=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Zm=0;class hs extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=no,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Bd,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class il extends hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const Cr=new L,Ws=new L,Xs=new L,qs=new pt,Pr=new pt,op=new Jt,zo=new L,Lr=new L,Fo=new L,Uu=new pt,kl=new pt,zu=new pt;class Ch extends He{constructor(t=new il){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ym(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new La(n,3,0,!1)),Gs.setAttribute("uv",new La(n,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new pt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),op.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ko(zo.set(-.5,-.5,0),Xs,o,Ws,i,r),ko(Lr.set(.5,-.5,0),Xs,o,Ws,i,r),ko(Fo.set(.5,.5,0),Xs,o,Ws,i,r),Uu.set(0,0),kl.set(1,0),zu.set(1,1);let a=t.ray.intersectTriangle(zo,Lr,Fo,!1,Cr);if(a===null&&(ko(Lr.set(-.5,.5,0),Xs,o,Ws,i,r),kl.set(0,1),a=t.ray.intersectTriangle(zo,Fo,Lr,!1,Cr),a===null))return;const l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:On.getInterpolation(Cr,zo,Lr,Fo,Uu,kl,zu,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ko(s,t,e,n,i,r){qs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Pr.x=r*qs.x-i*qs.y,Pr.y=i*qs.x+r*qs.y):Pr.copy(qs),s.copy(t),s.x+=Pr.x,s.y+=Pr.y,s.applyMatrix4(op)}const _i=new L,Ol=new L,Oo=new L,Bo=new L;class Ph{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ol.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),Bo.copy(this.origin).sub(Ol);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=Bo.dot(this.direction),l=-Bo.dot(Oo),c=Bo.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ol).addScaledVector(Oo,f),d}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,g=e.y-o.y,x=e.z-o.z,m=n.x-o.x,M=n.y-o.y,w=n.z-o.z,v=Math.abs(l),y=Math.abs(c),S=Math.abs(h);let T,_,b,A,C,P,U,F,V,q,X,j;if(v>=y&&v>=S?(b=l,P=u,V=p,j=m,l>=0?(T=c,_=h,A=f,C=d,U=g,F=x,q=M,X=w):(T=h,_=c,A=d,C=f,U=x,F=g,q=w,X=M)):y>=S?(b=c,P=f,V=g,j=M,c>=0?(T=h,_=l,A=d,C=u,U=x,F=p,q=w,X=m):(T=l,_=h,A=u,C=d,U=p,F=x,q=m,X=w)):(b=h,P=d,V=x,j=w,h>=0?(T=l,_=c,A=u,C=f,U=p,F=g,q=m,X=M):(T=c,_=l,A=f,C=u,U=g,F=p,q=M,X=m)),b===0)return null;const G=T/b,K=_/b,tt=1/b,ut=A-G*P,B=C-K*P,k=U-G*V,O=F-K*V,H=q-G*j,I=X-K*j,z=H*O-I*k,W=ut*I-B*H,J=k*B-O*ut;if(i){if(z<0||W<0||J<0)return null}else if((z<0||W<0||J<0)&&(z>0||W>0||J>0))return null;const et=z+W+J;if(et===0)return null;const xt=tt*(z*P+W*V+J*j);return(et>0?xt<0:xt>0)?null:this.at(xt/et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fu=new Jt,ms=new Ph,Ho=new wr,ku=new L,Vo=new L,Go=new L,Wo=new L,Bl=new L,Xo=new L,Ou=new L,qo=new L;class wt extends He{constructor(t=new be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Bl.fromBufferAttribute(u,t),o?Xo.addScaledVector(Bl,h):Xo.addScaledVector(Bl.sub(e),h))}e.add(Xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Ho.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ho,ku)===null||ms.origin.distanceToSquared(ku)>(t.far-t.near)**2))&&(Fu.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){const x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),w=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=M,y=w;v<y;v+=3){const S=a.getX(v),T=a.getX(v+1),_=a.getX(v+2);i=Yo(this,m,t,n,c,h,u,S,T,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let x=p,m=g;x<m;x+=3){const M=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);i=Yo(this,o,t,n,c,h,u,M,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){const x=f[p],m=o[x.materialIndex],M=Math.max(x.start,d.start),w=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=M,y=w;v<y;v+=3){const S=v,T=v+1,_=v+2;i=Yo(this,m,t,n,c,h,u,S,T,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let x=p,m=g;x<m;x+=3){const M=x,w=x+1,v=x+2;i=Yo(this,o,t,n,c,h,u,M,w,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function Jm(s,t,e,n,i,r,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===bs,a),l===null)return null;qo.copy(a),qo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:s}}function Yo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Vo),s.getVertexPosition(l,Go),s.getVertexPosition(c,Wo);const h=Jm(s,t,e,n,Vo,Go,Wo,Ou);if(h){const u=new L;On.getBarycoord(Ou,Vo,Go,Wo,u),i&&(h.uv=On.getInterpolatedAttribute(i,a,l,c,u,new pt)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new pt)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};On.getNormal(Vo,Go,Wo,f.normal),h.face=f,h.barycoord=u}return h}class vr extends nn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu extends mn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new Jt,Hu=new Jt,$o=[],Vu=new Ps,Qm=new Jt,Ir=new wt,Dr=new wr;class dr extends wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Vu.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Vu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Dr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),Hu.multiplyMatrices(n,Ys),Ir.matrixWorld=Hu,Ir.raycast(t,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=r,l.object=this,e.push(l)}$o.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(i*this.count),i,this.count,nl,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gs=new wr,jm=new pt(.5,.5),Ko=new L;class Lh{constructor(t=new Si,e=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],M=r[12],w=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-o,d-h,m-p,y-M).normalize(),i[1].setComponents(c+o,d+h,m+p,y+M).normalize(),i[2].setComponents(c+a,d+u,m+g,y+w).normalize(),i[3].setComponents(c-a,d-u,m-g,y-w).normalize(),n)i[4].setComponents(l,f,x,v).normalize(),i[5].setComponents(c-l,d-f,m-x,y-v).normalize();else if(i[4].setComponents(c-l,d-f,m-x,y-v).normalize(),e===li)i[5].setComponents(c+l,d+f,m+x,y+v).normalize();else if(e===po)i[5].setComponents(l,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const e=jm.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ko.x=i.normal.x>0?t.max.x:t.min.x,Ko.y=i.normal.y>0?t.max.y:t.min.y,Ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ia=new L,Da=new L,Gu=new Jt,Nr=new Ph,Zo=new wr,Hl=new L,Wu=new L;class tg extends He{constructor(t=new be,e=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ia.fromBufferAttribute(e,i-1),Da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ia.distanceTo(Da);t.setAttribute("lineDistance",new Wt(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Gu.copy(i).invert(),Nr.copy(t.ray).applyMatrix4(Gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,x=p-1;g<x;g+=c){const m=h.getX(g),M=h.getX(g+1),w=Jo(this,t,Nr,l,m,M,g);w&&e.push(w)}if(this.isLineLoop){const g=h.getX(p-1),x=h.getX(d),m=Jo(this,t,Nr,l,g,x,p-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,x=p-1;g<x;g+=c){const m=Jo(this,t,Nr,l,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){const g=Jo(this,t,Nr,l,p-1,d,p-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ia.fromBufferAttribute(a,i),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(Ia,Da,Hl,Wu)>n)return;Hl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Hl);if(!(c<t.near||c>t.far))return{distance:c,point:Wu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Xu=new L,qu=new L;class eg extends tg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Xu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xu.distanceTo(qu);t.setAttribute("lineDistance",new Wt(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends nn{constructor(t=[],e=Es,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class us extends nn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class go extends nn{constructor(t,e,n=fi,i,r,o,a=Xe,l=Xe,c,h=zi,u=1){if(h!==zi&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ng extends go{constructor(t,e=fi,n=Es,i,r,o=Xe,a=Xe,l,c=zi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cp extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function p(g,x,m,M,w,v,y,S,T,_,b){const A=v/T,C=y/_,P=v/2,U=y/2,F=S/2,V=T+1,q=_+1;let X=0,j=0;const G=new L;for(let K=0;K<q;K++){const tt=K*C-U;for(let ut=0;ut<V;ut++){const B=ut*A-P;G[g]=B*M,G[x]=tt*w,G[m]=F,c.push(G.x,G.y,G.z),G[g]=0,G[x]=0,G[m]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ut/T),u.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let tt=0;tt<T;tt++){const ut=f+tt+V*K,B=f+tt+V*(K+1),k=f+(tt+1)+V*(K+1),O=f+(tt+1)+V*K;l.push(ut,B,O),l.push(B,k,O),j+=6}a.addGroup(d,j,b),d+=j,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ui extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class We extends be{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const g=[],x=n/2;let m=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function M(){const v=new L,y=new L;let S=0;const T=(e-t)/n;for(let _=0;_<=r;_++){const b=[],A=_/r,C=A*(e-t)+t;for(let P=0;P<=i;P++){const U=P/i,F=U*l+a,V=Math.sin(F),q=Math.cos(F);y.x=C*V,y.y=-A*n+x,y.z=C*q,u.push(y.x,y.y,y.z),v.set(V,T,q).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-A),b.push(p++)}g.push(b)}for(let _=0;_<i;_++)for(let b=0;b<r;b++){const A=g[b][_],C=g[b+1][_],P=g[b+1][_+1],U=g[b][_+1];(t>0||b!==0)&&(h.push(A,C,U),S+=3),(e>0||b!==r-1)&&(h.push(C,P,U),S+=3)}c.addGroup(m,S,0),m+=S}function w(v){const y=p,S=new pt,T=new L;let _=0;const b=v===!0?t:e,A=v===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,x*A,0),f.push(0,A,0),d.push(.5,.5),p++;const C=p;for(let P=0;P<=i;P++){const F=P/i*l+a,V=Math.cos(F),q=Math.sin(F);T.x=b*q,T.y=x*A,T.z=b*V,u.push(T.x,T.y,T.z),f.push(0,A,0),S.x=V*.5+.5,S.y=q*.5*A+.5,d.push(S.x,S.y),p++}for(let P=0;P<i;P++){const U=y+P,F=C+P;v===!0?h.push(F,F+1,U):h.push(F+1,F,U),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],r=[],o=[],a=new L,l=new Jt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ae(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ae(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ih extends mi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ig extends Ih{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Yu=new L,$u=new L,Vl=new Dh,Gl=new Dh,Wl=new Dh;class sl extends mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:($u.subVectors(i[0],i[1]).add(i[0]),c=$u);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Yu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),Vl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,g,x),Gl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,g,x),Wl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,g,x)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Gl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Wl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Vl.calc(l),Gl.calc(l),Wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ku(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function sg(s,t){const e=1-s;return e*e*t}function rg(s,t){return 2*(1-s)*s*t}function og(s,t){return s*s*t}function ro(s,t,e,n){return sg(s,t)+rg(s,e)+og(s,n)}function ag(s,t){const e=1-s;return e*e*e*t}function lg(s,t){const e=1-s;return 3*e*e*s*t}function cg(s,t){return 3*(1-s)*s*s*t}function hg(s,t){return s*s*s*t}function oo(s,t,e,n,i){return ag(s,t)+lg(s,e)+cg(s,n)+hg(s,i)}class hp extends mi{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,i.x,r.x,o.x,a.x),oo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class up extends mi{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(oo(t,i.x,r.x,o.x,a.x),oo(t,i.y,r.y,o.y,a.y),oo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fp extends mi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xo extends mi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dp extends mi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ro(t,i.x,r.x,o.x),ro(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends mi{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ro(t,i.x,r.x,o.x),ro(t,i.y,r.y,o.y),ro(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pp extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ku(a,l.x,c.x,h.x,u.x),Ku(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:ig,CatmullRomCurve3:sl,CubicBezierCurve:hp,CubicBezierCurve3:up,EllipseCurve:Ih,LineCurve:fp,LineCurve3:xo,QuadraticBezierCurve:dp,QuadraticBezierCurve3:Nh,SplineCurve:pp});class Uh extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Na[i.type]().fromJSON(i))}return this}}let pr=class extends Uh{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new dp(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new hp(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ih(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class bo extends pr{constructor(t){super(t),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new pr().fromJSON(i))}return this}}function ug(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=mp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=gg(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,u=l;for(let f=e;f<i;f+=e){const d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return vo(r,o,e,a,l,c,0),o}function mp(s,t,e,n,i){let r;if(i===Ag(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zu(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zu(o/n|0,s[o],s[o+1],r);return r&&Mr(r,r.next)&&(_o(r),r=r.next),r}function As(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Mr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(_o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&yg(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?dg(s,n,i,r):fg(s)){t.push(l.i,s.i,c.i),_o(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=pg(As(s),t),vo(s,t,e,n,i,r,2)):o===2&&mg(s,t,e,n,i,r):vo(As(s),t,e,n,i,r,1);break}}}function fg(s){const t=s.prev,e=s,n=s.next;if(Fe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Qr(i,a,r,l,o,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dg(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Fe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),x=Math.max(h,u,f),m=Qc(d,p,t,e,n),M=Qc(g,x,t,e,n);let w=s.prevZ,v=s.nextZ;for(;w&&w.z>=m&&v&&v.z<=M;){if(w.x>=d&&w.x<=g&&w.y>=p&&w.y<=x&&w!==i&&w!==o&&Qr(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=g&&v.y>=p&&v.y<=x&&v!==i&&v!==o&&Qr(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=g&&w.y>=p&&w.y<=x&&w!==i&&w!==o&&Qr(a,h,l,u,c,f,w.x,w.y)&&Fe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=x&&v!==i&&v!==o&&Qr(a,h,l,u,c,f,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pg(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Mr(n,i)&&xp(n,e,e.next,i)&&Mo(n,i)&&Mo(i,n)&&(t.push(n.i,e.i,i.i),_o(e),_o(e.next),e=s=i),e=e.next}while(e!==s);return As(e)}function mg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bg(o,a)){let l=vp(o,a);o=As(o,o.next),l=As(l,l.next),vo(o,t,e,n,i,r,0),vo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function gg(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=mp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Sg(c))}i.sort(xg);for(let r=0;r<i.length;r++)e=vg(i[r],e);return e}function xg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function vg(s,t){const e=Mg(s,t);if(!e)return t;const n=vp(e,s);return As(n,n.next),As(e,e.next)}function Mg(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Mr(s,e))return e;do{if(Mr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Mo(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_g(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _g(s,t){return Fe(s.prev,s,t.prev)<0&&Fe(t.next,s,s.next)<0}function yg(s,t,e,n){let i=s;do i.z===0&&(i.z=Qc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wg(i)}function wg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Qc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Sg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function gp(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Qr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&gp(s,t,e,n,i,r,o,a)}function bg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Eg(s,t)&&(Mo(s,t)&&Mo(t,s)&&Tg(s,t)&&(Fe(s.prev,s,t.prev)||Fe(s,t.prev,t))||Mr(s,t)&&Fe(s.prev,s,s.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Mr(s,t){return s.x===t.x&&s.y===t.y}function xp(s,t,e,n){const i=jo(Fe(s,t,e)),r=jo(Fe(s,t,n)),o=jo(Fe(e,n,s)),a=jo(Fe(e,n,t));return!!(i!==r&&o!==a||i===0&&Qo(s,e,t)||r===0&&Qo(s,n,t)||o===0&&Qo(e,s,n)||a===0&&Qo(e,t,n))}function Qo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function jo(s){return s>0?1:s<0?-1:0}function Eg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Mo(s,t){return Fe(s.prev,s,s.next)<0?Fe(s,t,s.next)>=0&&Fe(s,s.prev,t)>=0:Fe(s,t,s.prev)<0||Fe(s,s.next,t)<0}function Tg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function vp(s,t){const e=jc(s.i,s.x,s.y),n=jc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zu(s,t,e,n){const i=jc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ag(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Rg{static triangulate(t,e,n=2){return ug(t,e,n)}}class Pi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Pi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ju(t),Qu(n,t);let o=t.length;e.forEach(Ju);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Qu(n,e[l]);const a=Rg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ju(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Qu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class rl extends be{constructor(t=new bo([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Wt(i,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Cg;let w,v=!1,y,S,T,_;if(m){w=m.getSpacedPoints(h),v=!0,f=!1;const ot=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,ot),S=new L,T=new L,_=new L}f||(x=0,d=0,p=0,g=0);const b=a.extractPoints(c);let A=b.shape;const C=b.holes;if(!Pi.isClockWise(A)){A=A.reverse();for(let ot=0,ft=C.length;ot<ft;ot++){const dt=C[ot];Pi.isClockWise(dt)&&(C[ot]=dt.reverse())}}function U(ot){const dt=10000000000000001e-36;let Mt=ot[0];for(let _t=1;_t<=ot.length;_t++){const Vt=_t%ot.length,kt=ot[Vt],$t=kt.x-Mt.x,te=kt.y-Mt.y,Y=$t*$t+te*te,it=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(Mt.x),Math.abs(Mt.y)),ct=dt*it*it;if(Y<=ct){ot.splice(Vt,1),_t--;continue}Mt=kt}}U(A),C.forEach(U);const F=C.length,V=A;for(let ot=0;ot<F;ot++){const ft=C[ot];A=A.concat(ft)}function q(ot,ft,dt){return ft||ge("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ft,dt)}const X=A.length;function j(ot,ft,dt){let Mt,_t,Vt;const kt=ot.x-ft.x,$t=ot.y-ft.y,te=dt.x-ot.x,Y=dt.y-ot.y,it=kt*kt+$t*$t,ct=kt*Y-$t*te;if(Math.abs(ct)>Number.EPSILON){const N=Math.sqrt(it),E=Math.sqrt(te*te+Y*Y),Z=ft.x-$t/N,nt=ft.y+kt/N,lt=dt.x-Y/E,St=dt.y+te/E,bt=((lt-Z)*Y-(St-nt)*te)/(kt*Y-$t*te);Mt=Z+kt*bt-ot.x,_t=nt+$t*bt-ot.y;const ht=Mt*Mt+_t*_t;if(ht<=2)return new pt(Mt,_t);Vt=Math.sqrt(ht/2)}else{let N=!1;kt>Number.EPSILON?te>Number.EPSILON&&(N=!0):kt<-Number.EPSILON?te<-Number.EPSILON&&(N=!0):Math.sign($t)===Math.sign(Y)&&(N=!0),N?(Mt=-$t,_t=kt,Vt=Math.sqrt(it)):(Mt=kt,_t=$t,Vt=Math.sqrt(it/2))}return new pt(Mt/Vt,_t/Vt)}const G=[];for(let ot=0,ft=V.length,dt=ft-1,Mt=ot+1;ot<ft;ot++,dt++,Mt++)dt===ft&&(dt=0),Mt===ft&&(Mt=0),G[ot]=j(V[ot],V[dt],V[Mt]);const K=[];let tt,ut=G.concat();for(let ot=0,ft=F;ot<ft;ot++){const dt=C[ot];tt=[];for(let Mt=0,_t=dt.length,Vt=_t-1,kt=Mt+1;Mt<_t;Mt++,Vt++,kt++)Vt===_t&&(Vt=0),kt===_t&&(kt=0),tt[Mt]=j(dt[Mt],dt[Vt],dt[kt]);K.push(tt),ut=ut.concat(tt)}let B;if(x===0)B=Pi.triangulateShape(V,C);else{const ot=[],ft=[];for(let dt=0;dt<x;dt++){const Mt=dt/x,_t=d*Math.cos(Mt*Math.PI/2),Vt=p*Math.sin(Mt*Math.PI/2)+g;for(let kt=0,$t=V.length;kt<$t;kt++){const te=q(V[kt],G[kt],Vt);W(te.x,te.y,-_t),Mt===0&&ot.push(te)}for(let kt=0,$t=F;kt<$t;kt++){const te=C[kt];tt=K[kt];const Y=[];for(let it=0,ct=te.length;it<ct;it++){const N=q(te[it],tt[it],Vt);W(N.x,N.y,-_t),Mt===0&&Y.push(N)}Mt===0&&ft.push(Y)}}B=Pi.triangulateShape(ot,ft)}const k=B.length,O=p+g;for(let ot=0;ot<X;ot++){const ft=f?q(A[ot],ut[ot],O):A[ot];v?(T.copy(y.normals[0]).multiplyScalar(ft.x),S.copy(y.binormals[0]).multiplyScalar(ft.y),_.copy(w[0]).add(T).add(S),W(_.x,_.y,_.z)):W(ft.x,ft.y,0)}for(let ot=1;ot<=h;ot++)for(let ft=0;ft<X;ft++){const dt=f?q(A[ft],ut[ft],O):A[ft];v?(T.copy(y.normals[ot]).multiplyScalar(dt.x),S.copy(y.binormals[ot]).multiplyScalar(dt.y),_.copy(w[ot]).add(T).add(S),W(_.x,_.y,_.z)):W(dt.x,dt.y,u/h*ot)}for(let ot=x-1;ot>=0;ot--){const ft=ot/x,dt=d*Math.cos(ft*Math.PI/2),Mt=p*Math.sin(ft*Math.PI/2)+g;for(let _t=0,Vt=V.length;_t<Vt;_t++){const kt=q(V[_t],G[_t],Mt);W(kt.x,kt.y,u+dt)}for(let _t=0,Vt=C.length;_t<Vt;_t++){const kt=C[_t];tt=K[_t];for(let $t=0,te=kt.length;$t<te;$t++){const Y=q(kt[$t],tt[$t],Mt);v?W(Y.x,Y.y+w[h-1].y,w[h-1].x+dt):W(Y.x,Y.y,u+dt)}}}H(),I();function H(){const ot=i.length/3;if(f){let ft=0,dt=X*ft;for(let Mt=0;Mt<k;Mt++){const _t=B[Mt];J(_t[2]+dt,_t[1]+dt,_t[0]+dt)}ft=h+x*2,dt=X*ft;for(let Mt=0;Mt<k;Mt++){const _t=B[Mt];J(_t[0]+dt,_t[1]+dt,_t[2]+dt)}}else{for(let ft=0;ft<k;ft++){const dt=B[ft];J(dt[2],dt[1],dt[0])}for(let ft=0;ft<k;ft++){const dt=B[ft];J(dt[0]+X*h,dt[1]+X*h,dt[2]+X*h)}}n.addGroup(ot,i.length/3-ot,0)}function I(){const ot=i.length/3;let ft=0;z(V,ft),ft+=V.length;for(let dt=0,Mt=C.length;dt<Mt;dt++){const _t=C[dt];z(_t,ft),ft+=_t.length}n.addGroup(ot,i.length/3-ot,1)}function z(ot,ft){let dt=ot.length;for(;--dt>=0;){const Mt=dt;let _t=dt-1;_t<0&&(_t=ot.length-1);for(let Vt=0,kt=h+x*2;Vt<kt;Vt++){const $t=X*Vt,te=X*(Vt+1),Y=ft+Mt+$t,it=ft+_t+$t,ct=ft+_t+te,N=ft+Mt+te;et(Y,it,ct,N)}}}function W(ot,ft,dt){l.push(ot),l.push(ft),l.push(dt)}function J(ot,ft,dt){xt(ot),xt(ft),xt(dt);const Mt=i.length/3,_t=M.generateTopUV(n,i,Mt-3,Mt-2,Mt-1);yt(_t[0]),yt(_t[1]),yt(_t[2])}function et(ot,ft,dt,Mt){xt(ot),xt(ft),xt(Mt),xt(ft),xt(dt),xt(Mt);const _t=i.length/3,Vt=M.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);yt(Vt[0]),yt(Vt[1]),yt(Vt[3]),yt(Vt[1]),yt(Vt[2]),yt(Vt[3])}function xt(ot){i.push(l[ot*3+0]),i.push(l[ot*3+1]),i.push(l[ot*3+2])}function yt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Na[i.type]().fromJSON(i)),new rl(n,t.options)}}const Cg={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],g=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(f,1-p),new pt(g,1-m)]:[new pt(a,1-l),new pt(h,1-u),new pt(d,1-p),new pt(x,1-m)]}};function Pg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ol extends be{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new pt,d=new L,p=new L,g=new L;let x=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:x=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-x,d.z=m*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:x=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-x,d.z=m*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let M=0;M<=e;M++){const w=n+M*h*i,v=Math.sin(w),y=Math.cos(w);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*y,o.push(u.x,u.y,u.z),f.x=M/e,f.y=S/(t.length-1),a.push(f.x,f.y);const T=l[3*S+0]*v,_=l[3*S+1],b=l[3*S+0]*y;c.push(T,_,b)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const v=w+M*t.length,y=v,S=v+t.length,T=v+t.length+1,_=v+1;r.push(y,S,_),r.push(T,_,S)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.points,t.segments,t.phiStart,t.phiLength)}}class Ue extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],g=[],x=[];for(let m=0;m<h;m++){const M=m*f-o;for(let w=0;w<c;w++){const v=w*u-r;p.push(v,-M,0),g.push(0,0,1),x.push(w/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const w=M+c*m,v=M+c*(m+1),y=M+1+c*(m+1),S=M+1+c*m;d.push(w,v,S),d.push(v,y,S)}this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class zh extends be{constructor(t=new bo([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Wt(i,3)),this.setAttribute("normal",new Wt(r,3)),this.setAttribute("uv",new Wt(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const p=f.holes;Pi.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,m=p.length;x<m;x++){const M=p[x];Pi.isClockWise(M)===!0&&(p[x]=M.reverse())}const g=Pi.triangulateShape(d,p);for(let x=0,m=p.length;x<m;x++){const M=p[x];d=d.concat(M)}for(let x=0,m=d.length;x<m;x++){const M=d[x];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let x=0,m=g.length;x<m;x++){const M=g[x],w=M[0]+u,v=M[1]+u,y=M[2]+u;n.push(w,v,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Lg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new zh(n,t.curveSegments)}}function Lg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Sr extends be{constructor(t=new Nh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new pt;let h=new L;const u=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function g(){for(let w=0;w<e;w++)x(w);x(r===!1?e:0),M(),m()}function x(w){h=t.getPointAt(w/e,h);const v=o.normals[w],y=o.binormals[w];for(let S=0;S<=i;S++){const T=S/i*Math.PI*2,_=Math.sin(T),b=-Math.cos(T);l.x=b*v.x+_*y.x,l.y=b*v.y+_*y.y,l.z=b*v.z+_*y.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=e;w++)for(let v=1;v<=i;v++){const y=(i+1)*(w-1)+(v-1),S=(i+1)*w+(v-1),T=(i+1)*w+v,_=(i+1)*(w-1)+v;p.push(y,S,_),p.push(S,T,_)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=i;v++)c.x=w/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sr(new Na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function _r(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(ju(i))i.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ju(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function un(s){const t={};for(let e=0;e<s.length;e++){const n=_r(s[e]);for(const i in n)t[i]=n[i]}return t}function ju(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ig(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Dg={clone:_r,merge:un};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=Ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class zg extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Re extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xn extends Re{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ua extends hs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=mh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _p extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(tf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!tf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function tf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class kg{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Og=new kg;class Fh{constructor(t){this.manager=t!==void 0?t:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";const $s=new WeakMap;class Bg extends Fh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Xl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=$s.get(o);u===void 0&&(u=[],$s.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=mo("img");function l(){h(),e&&e(this);const u=$s.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}$s.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Xl.remove(`image:${t}`);const f=$s.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}$s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xl.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class za extends Fh{constructor(t){super(t)}load(t,e,n,i){const r=new nn,o=new Bg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class al extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Hg extends al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ql=new Jt,ef=new L,nf=new L;class kh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ql,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===po||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new L,ea=new me,jn=new L;class yp extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,sf=new pt,rf=new pt;class je extends yp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,sf,rf),e.subVectors(rf,sf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vg extends kh{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=xr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Gg extends al{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Wg extends kh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class wp extends al{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ll extends yp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xg extends kh{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qg extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Xg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ks=-90,Zs=1;class Sp extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Ks,Zs,t,e);i.layers=this.layers,this.add(i);const r=new je(Ks,Zs,t,e);r.layers=this.layers,this.add(r);const o=new je(Ks,Zs,t,e);o.layers=this.layers,this.add(o);const a=new je(Ks,Zs,t,e);a.layers=this.layers,this.add(a);const l=new je(Ks,Zs,t,e);l.layers=this.layers,this.add(l);const c=new je(Ks,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yg extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const of=new Jt;class Ss{constructor(t,e,n=0,i=1/0){this.ray=new Ph(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(af),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)th(t[i],this,n,e);return n.sort(af),n}}function af(s,t){return s.distance-t.distance}function th(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)th(r[o],t,e,!0)}}const ou=class ou{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ou.prototype.isMatrix2=!0;let lf=ou;function cf(s,t,e,n){const i=$g(n);switch(e){case Qd:return s*t;case nl:return s*t/i.components*i.byteLength;case _h:return s*t/i.components*i.byteLength;case Ts:return s*t*2/i.components*i.byteLength;case yh:return s*t*2/i.components*i.byteLength;case jd:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case wh:return s*t*4/i.components*i.byteLength;case ga:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case va:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:case Ec:return Math.max(s,16)*Math.max(t,8)/4;case wc:case bc:return Math.max(s,8)*Math.max(t,8)/2;case Tc:case Ac:case Cc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Ea:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Yc:case $c:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kc:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ta:case Jc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $g(s){switch(s){case _n:case $d:return{byteLength:1,components:1};case uo:case Kd:case Cn:return{byteLength:2,components:1};case vh:case Mh:return{byteLength:2,components:4};case fi:case xh:case Zn:return{byteLength:4,components:1};case Zd:case Jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kg(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,$x=`uniform sampler2D dfgLUT;
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
}`,Kx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,v1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,_1=`#define STANDARD
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
}`,y1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,S1=`#define TOON
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
}`,b1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Zg,alphahash_pars_fragment:Jg,alphamap_fragment:Qg,alphamap_pars_fragment:jg,alphatest_fragment:tx,alphatest_pars_fragment:ex,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ox,beginnormal_vertex:ax,bsdfs:lx,iridescence_fragment:cx,bumpmap_pars_fragment:hx,clipping_planes_fragment:ux,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:xx,color_vertex:vx,common:Mx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:yx,displacementmap_pars_vertex:wx,displacementmap_vertex:Sx,emissivemap_fragment:bx,emissivemap_pars_fragment:Ex,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Vx,envmap_vertex:Ix,fog_vertex:Dx,fog_pars_vertex:Nx,fog_fragment:Ux,fog_pars_fragment:zx,gradientmap_pars_fragment:Fx,lightmap_pars_fragment:kx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Bx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:qx,lights_physical_fragment:Yx,lights_physical_pars_fragment:$x,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Jx,lightprobes_pars_fragment:Qx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:ev,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:sv,map_particle_fragment:rv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:hv,morphnormal_vertex:uv,morphtarget_pars_vertex:fv,morphtarget_vertex:dv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:xv,normal_vertex:vv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:yv,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Sv,opaque_fragment:bv,packing:Ev,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Iv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Uv,skinbase_vertex:zv,skinning_pars_vertex:Fv,skinning_vertex:kv,skinnormal_vertex:Ov,specularmap_fragment:Bv,specularmap_pars_fragment:Hv,tonemapping_fragment:Vv,tonemapping_pars_fragment:Gv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:qv,uv_pars_vertex:Yv,uv_vertex:$v,worldpos_vertex:Kv,background_vert:Zv,background_frag:Jv,backgroundCube_vert:Qv,backgroundCube_frag:jv,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:h1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:x1,meshphong_vert:v1,meshphong_frag:M1,meshphysical_vert:_1,meshphysical_frag:y1,meshtoon_vert:w1,meshtoon_frag:S1,points_vert:b1,points_frag:E1,shadow_vert:T1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Lt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ri={basic:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:un([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:un([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:un([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:un([Lt.common,Lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:un([Lt.lights,Lt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ri.physical={uniforms:un([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const na={r:0,b:0,g:0},P1=new Jt,Ep=new ne;Ep.set(-1,0,0,0,1,0,0,0,1);function L1(s,t,e,n,i,r){const o=new Ct(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(M){let w=!1;const v=d(M);v===null?x(o,a):v&&v.isColor&&(x(v,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===el)?(c===void 0&&(c=new wt(new Ye(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:_r(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ep),c.material.toneMapped=xe.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new wt(new Ue(2,2),new wn({name:"BackgroundMaterial",uniforms:_r(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=xe.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function x(M,w){M.getRGB(na,Mp(s)),e.buffers.color.setClear(na.r,na.g,na.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,x(o,a)},render:p,addToRenderList:g,dispose:m}}function I1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(C,P,U,F,V){let q=!1;const X=u(C,F,U,P);r!==X&&(r=X,c(r.object)),q=d(C,F,U,V),q&&p(C,F,U,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(C,P,U,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,P,U,F){const V=F.wireframe===!0;let q=n[P.id];q===void 0&&(q={},n[P.id]=q);const X=C.isInstancedMesh===!0?C.id:0;let j=q[X];j===void 0&&(j={},q[X]=j);let G=j[U.id];G===void 0&&(G={},j[U.id]=G);let K=G[V];return K===void 0&&(K=f(l()),G[V]=K),K}function f(C){const P=[],U=[],F=[];for(let V=0;V<e;V++)P[V]=0,U[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:C,attributes:{},index:null}}function d(C,P,U,F){const V=r.attributes,q=P.attributes;let X=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){const tt=V[G];let ut=q[G];if(ut===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),tt===void 0||tt.attribute!==ut||ut&&tt.data!==ut.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function p(C,P,U,F){const V={},q=P.attributes;let X=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){let tt=q[G];tt===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));const ut={};ut.attribute=tt,tt&&tt.data&&(ut.data=tt.data),V[G]=ut,X++}r.attributes=V,r.attributesNum=X,r.index=F}function g(){const C=r.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function x(C){m(C,0)}function m(C,P){const U=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;U[C]=1,F[C]===0&&(s.enableVertexAttribArray(C),F[C]=1),V[C]!==P&&(s.vertexAttribDivisor(C,P),V[C]=P)}function M(){const C=r.newAttributes,P=r.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==C[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function w(C,P,U,F,V,q,X){X===!0?s.vertexAttribIPointer(C,P,U,V,q):s.vertexAttribPointer(C,P,U,F,V,q)}function v(C,P,U,F){g();const V=F.attributes,q=U.getAttributes(),X=P.defaultAttributeValues;for(const j in q){const G=q[j];if(G.location>=0){let K=V[j];if(K===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const tt=K.normalized,ut=K.itemSize,B=t.get(K);if(B===void 0)continue;const k=B.buffer,O=B.type,H=B.bytesPerElement,I=O===s.INT||O===s.UNSIGNED_INT||K.gpuType===xh;if(K.isInterleavedBufferAttribute){const z=K.data,W=z.stride,J=K.offset;if(z.isInstancedInterleavedBuffer){for(let et=0;et<G.locationSize;et++)m(G.location+et,z.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let et=0;et<G.locationSize;et++)x(G.location+et);s.bindBuffer(s.ARRAY_BUFFER,k);for(let et=0;et<G.locationSize;et++)w(G.location+et,ut/G.locationSize,O,tt,W*H,(J+ut/G.locationSize*et)*H,I)}else{if(K.isInstancedBufferAttribute){for(let z=0;z<G.locationSize;z++)m(G.location+z,K.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let z=0;z<G.locationSize;z++)x(G.location+z);s.bindBuffer(s.ARRAY_BUFFER,k);for(let z=0;z<G.locationSize;z++)w(G.location+z,ut/G.locationSize,O,tt,ut*H,ut/G.locationSize*z*H,I)}}else if(X!==void 0){const tt=X[j];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(G.location,tt);break;case 3:s.vertexAttrib3fv(G.location,tt);break;case 4:s.vertexAttrib4fv(G.location,tt);break;default:s.vertexAttrib1fv(G.location,tt)}}}}M()}function y(){b();for(const C in n){const P=n[C];for(const U in P){const F=P[U];for(const V in F){const q=F[V];for(const X in q)h(q[X].object),delete q[X];delete F[V]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;const P=n[C.id];for(const U in P){const F=P[U];for(const V in F){const q=F[V];for(const X in q)h(q[X].object),delete q[X];delete F[V]}}delete n[C.id]}function T(C){for(const P in n){const U=n[P];for(const F in U){const V=U[F];if(V[C.id]===void 0)continue;const q=V[C.id];for(const X in q)h(q[X].object),delete q[X];delete V[C.id]}}}function _(C){for(const P in n){const U=n[P],F=C.isInstancedMesh===!0?C.id:0,V=U[F];if(V!==void 0){for(const q in V){const X=V[q];for(const j in X)h(X[j].object),delete X[j];delete V[q]}delete U[F],Object.keys(U).length===0&&delete n[P]}}}function b(){A(),o=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:x,disableUnusedAttributes:M}}function D1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==An&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const _=T===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==_n&&T!==Zn&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:y,samples:S}}function U1(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Si,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!x)r?h(null):c();else{const M=r?0:n,w=M*4;let v=m.clippingState||null;l.value=v,v=h(p,f,w,d);for(let y=0;y!==w;++y)v[y]=e[y];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=l.value,p!==!0||x===null){const m=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(x===null||x.length<m)&&(x=new Float32Array(m));for(let w=0,v=d;w!==g;++w,v+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}const or=4,z1=6,F1=20,k1=256,Ur=new ll,hf=new Ct;let Yl=null,$l=0,Kl=0,Zl=!1;const O1=new L,xs=new L;class eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=O1}=r;Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,$l,Kl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Cn,format:An,colorSpace:Ra,depthBuffer:!1},i=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B1(r)),this._blurMaterial=V1(r,t,e),this._ggxMaterial=H1(r,t,e)}return i}_compileMaterial(t){const e=new wt(new be,t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,i,r){const l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hf),u.toneMapping=hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Ye,new qe({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let m=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,m=!0):(x.color.copy(hf),m=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const y=this._cubeSize;Js(i,v*y,w>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Es||t.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[n],x=3*g*(n>p-or?n-p+or:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Js(r,x,m,3*g,2*g),i.setRenderTarget(r),i.render(a,Ur),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Js(t,x,m,3*g,2*g),i.setRenderTarget(t),i.render(a,Ur)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-or?i-this._lodMax+or:0),f=4*(this._cubeSize-h);Js(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ur)}}function B1(s){const t=[],e=[];let n=s;const i=s-or+1+z1;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let m=0;m<u;m++){const M=m%3*2/3-1,w=m>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(v,d*f*m);for(let y=0;y<f;y++){const S=h[y*2]*2-1,T=h[y*2+1]*2-1;m===0?xs.set(1,T,S):m===1?xs.set(-S,1,-T):m===2?xs.set(-S,T,1):m===3?xs.set(-1,T,-S):m===4?xs.set(-S,-1,T):xs.set(S,T,-1),xs.toArray(g,(m*f+y)*d)}}const x=new be;x.setAttribute("position",new mn(p,d)),x.setAttribute("outputDirection",new mn(g,d)),e.push(new wt(x,null)),n>or&&n--}return{lodMeshes:e,sizeLods:t}}function uf(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function H1(s,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function V1(s,t,e){return new wn({name:"SphericalGaussianBlur",defines:{SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ff(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function df(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Oh extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lp(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Di});r.uniforms.tEquirect.value=e;const o=new wt(i,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=tn),new Sp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function G1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===gl||d===xl)if(t.has(f)){const p=t.get(f).texture;return a(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const g=new Oh(p.height);return g.fromEquirectangularTexture(s,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,p=d===gl||d===xl,g=d===Es||d===gr;if(p||g){let x=e.get(f);const m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new eh(s)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const M=f.image;return p&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new eh(s)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===gl?f.mapping=Es:d===xl&&(f.mapping=gr),f}function l(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function W1(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ur("WebGLRenderer: "+n+" extension not supported."),i}}}function X1(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let g=0;if(p===void 0)return;if(d!==null){const M=d.array;g=d.version;for(let w=0,v=M.length;w<v;w+=3){const y=M[w+0],S=M[w+1],T=M[w+2];f.push(y,S,S,T,T,y)}}else{const M=p.array;g=p.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const y=w+0,S=w+1,T=w+2;f.push(y,S,S,T,T,y)}}const x=new(p.count>=65535?rp:sp)(f,1);x.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,x)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function q1(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x];e.update(g,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Y1(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ge("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $1(s,t,e){const n=new WeakMap,i=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),p===!0&&(w=2),g===!0&&(w=3);let v=a.attributes.position.count*w,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const S=new Float32Array(v*y*4*u),T=new np(S,v,y,u);T.type=Zn,T.needsUpdate=!0;const _=w*4;for(let A=0;A<u;A++){const C=x[A],P=m[A],U=M[A],F=v*y*4*A;for(let V=0;V<C.count;V++){const q=V*_;d===!0&&(i.fromBufferAttribute(C,V),S[F+q+0]=i.x,S[F+q+1]=i.y,S[F+q+2]=i.z,S[F+q+3]=0),p===!0&&(i.fromBufferAttribute(P,V),S[F+q+4]=i.x,S[F+q+5]=i.y,S[F+q+6]=i.z,S[F+q+7]=0),g===!0&&(i.fromBufferAttribute(U,V),S[F+q+8]=i.x,S[F+q+9]=i.y,S[F+q+10]=i.z,S[F+q+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new pt(v,y)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function K1(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Z1={[Hd]:"LINEAR_TONE_MAPPING",[Vd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Wd]:"ACES_FILMIC_TONE_MAPPING",[qd]:"AGX_TONE_MAPPING",[gh]:"NEUTRAL_TONE_MAPPING",[Xd]:"CUSTOM_TONE_MAPPING"};function J1(s,t,e,n,i,r){const o=new Rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new be;c.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const h=new zg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wt(c,h),f=new ll(-1,1,1,-1,0,1);let d=null,p=null,g=!1,x,m=null,M=[],w=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let S=0;S<M.length;S++){const T=M[S];T.setSize&&T.setSize(v,y)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;const y=o.width,S=o.height;M.length>0&&a===null&&(a=new Rn(y,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(y,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const _=M[T];_.setSize&&_.setSize(y,S)}},this.begin=function(v,y){if(g||v.toneMapping===hi&&M.length===0)return!1;if(m=y,y!==null){const S=y.width,T=y.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return w===!1&&v.setRenderTarget(o),x=v.toneMapping,v.toneMapping=hi,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=x,g=!0;let S=o,T=a;for(let _=0;_<M.length;_++){const b=M[_];b.enabled!==!1&&(b.render(v,T,S,y),b.needsSwap!==!1&&(S=T,T=T===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},xe.getTransfer(d)===ye&&(h.defines.SRGB_TRANSFER="");const _=Z1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(u,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Tp=new nn,nh=new go(1,1),Ap=new np,Rp=new Im,Cp=new lp,pf=[],mf=[],gf=new Float32Array(16),xf=new Float32Array(9),vf=new Float32Array(4);function br(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=pf[i];if(r===void 0&&(r=new Float32Array(i),pf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function hl(s,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Q1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function j1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function tM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function eM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function nM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;vf.set(n),s.uniformMatrix2fv(this.addr,!1,vf),Ke(e,n)}}function iM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;xf.set(n),s.uniformMatrix3fv(this.addr,!1,xf),Ke(e,n)}}function sM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;gf.set(n),s.uniformMatrix4fv(this.addr,!1,gf),Ke(e,n)}}function rM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function oM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function aM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function lM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function cM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function uM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function fM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function dM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nh.compareFunction=e.isReversedDepthBuffer()?bh:Sh,r=nh):r=Tp,e.setTexture2D(t||r,i)}function pM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rp,i)}function mM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cp,i)}function gM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ap,i)}function xM(s){switch(s){case 5126:return Q1;case 35664:return j1;case 35665:return tM;case 35666:return eM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(s,t){s.uniform1fv(this.addr,t)}function MM(s,t){const e=br(t,this.size,2);s.uniform2fv(this.addr,e)}function _M(s,t){const e=br(t,this.size,3);s.uniform3fv(this.addr,e)}function yM(s,t){const e=br(t,this.size,4);s.uniform4fv(this.addr,e)}function wM(s,t){const e=br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function SM(s,t){const e=br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bM(s,t){const e=br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function EM(s,t){s.uniform1iv(this.addr,t)}function TM(s,t){s.uniform2iv(this.addr,t)}function AM(s,t){s.uniform3iv(this.addr,t)}function RM(s,t){s.uniform4iv(this.addr,t)}function CM(s,t){s.uniform1uiv(this.addr,t)}function PM(s,t){s.uniform2uiv(this.addr,t)}function LM(s,t){s.uniform3uiv(this.addr,t)}function IM(s,t){s.uniform4uiv(this.addr,t)}function DM(s,t,e){const n=this.cache,i=t.length,r=hl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=nh:o=Tp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function NM(s,t,e){const n=this.cache,i=t.length,r=hl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rp,r[o])}function UM(s,t,e){const n=this.cache,i=t.length,r=hl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Cp,r[o])}function zM(s,t,e){const n=this.cache,i=t.length,r=hl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ap,r[o])}function FM(s){switch(s){case 5126:return vM;case 35664:return MM;case 35665:return _M;case 35666:return yM;case 35674:return wM;case 35675:return SM;case 35676:return bM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return RM;case 5125:return CM;case 36294:return PM;case 36295:return LM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return zM}}class kM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xM(e.type)}}class OM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FM(e.type)}}class BM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function Mf(s,t){s.seq.push(t),s.map[t.id]=t}function HM(s,t,e){const n=s.name,i=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),o=Jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Mf(e,c===void 0?new kM(a,s,t):new OM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new BM(a),Mf(e,u)),e=u}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);HM(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function _f(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const VM=37297;let GM=0;function WM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yf=new ne;function XM(s){xe._getMatrix(yf,xe.workingColorSpace,s);const t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case Ca:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+WM(s.getShaderSource(t),a)}else return r}function qM(s,t){const e=XM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const YM={[Hd]:"Linear",[Vd]:"Reinhard",[Gd]:"Cineon",[Wd]:"ACESFilmic",[qd]:"AgX",[gh]:"Neutral",[Xd]:"Custom"};function $M(s,t){const e=YM[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new L;function KM(){xe.getLuminanceCoefficients(ia);const s=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function JM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function QM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function jr(s){return s!==""}function Sf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(s){return s.replace(jM,e_)}const t_=new Map;function e_(s,t){let e=oe[t];if(e===void 0){const n=t_.get(t);if(n!==void 0)e=oe[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(s){return s.replace(n_,i_)}function i_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const s_={[eo]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function r_(s){return s_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o_={[Es]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function a_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":o_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const l_={[gr]:"ENVMAP_MODE_REFRACTION"};function c_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h_={[mh]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[K0]:"ENVMAP_BLENDING_ADD"};function u_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":h_[s.combine]||"ENVMAP_BLENDING_NONE"}function f_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function d_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=r_(e),c=a_(e),h=c_(e),u=u_(e),f=f_(e),d=ZM(e),p=JM(r),g=i.createProgram();let x,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(jr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(jr).join(`
`),m.length>0&&(m+=`
`)):(x=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),m=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?oe.tonemapping_pars_fragment:"",e.toneMapping!==hi?$M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,qM("linearToOutputTexel",e.outputColorSpace),KM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),o=ih(o),o=Sf(o,e),o=bf(o,e),a=ih(a),a=Sf(a,e),a=bf(a,e),o=Ef(o),a=Ef(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+x+o,v=M+m+a,y=_f(i,i.VERTEX_SHADER,w),S=_f(i,i.FRAGMENT_SHADER,v);i.attachShader(g,y),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(y)||"",F=i.getShaderInfoLog(S)||"",V=P.trim(),q=U.trim(),X=F.trim();let j=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,y,S);else{const K=wf(i,y,"vertex"),tt=wf(i,S,"fragment");ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+K+`
`+tt)}else V!==""?jt("WebGLProgram: Program Info Log:",V):(q===""||X==="")&&(G=!1);G&&(C.diagnostics={runnable:j,programLog:V,vertexShader:{log:q,prefix:x},fragmentShader:{log:X,prefix:m}})}i.deleteShader(y),i.deleteShader(S),_=new _a(i,g),b=QM(i,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,VM)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=GM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=S,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function x_(s){return s===Ts||s===Ea||s===Ta}function v_(s,t,e,n,i,r){const o=new Ah,a=new m_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,A,C,P,U){const F=C.fog,V=P.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||q,X),G=j&&j.mapping===el?j.image.height:null,K=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=tt!==void 0?tt.length:0;let B=0;V.morphAttributes.position!==void 0&&(B=1),V.morphAttributes.normal!==void 0&&(B=2),V.morphAttributes.color!==void 0&&(B=3);let k,O,H,I;if(K){const Pe=ri[K];k=Pe.vertexShader,O=Pe.fragmentShader}else{k=_.vertexShader,O=_.fragmentShader;const Pe=a.getVertexShaderStage(_),Me=a.getFragmentShaderStage(_);a.update(_,Pe,Me),H=Pe.id,I=Me.id}const z=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),J=P.isInstancedMesh===!0,et=P.isBatchedMesh===!0,xt=!!_.map,yt=!!_.matcap,ot=!!j,ft=!!_.aoMap,dt=!!_.lightMap,Mt=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Vt=!!_.displacementMap,kt=!!_.emissiveMap,$t=!!_.metalnessMap,te=!!_.roughnessMap,Y=_.anisotropy>0,it=_.clearcoat>0,ct=_.dispersion>0,N=_.retroreflectivity>0,E=_.iridescence>0,Z=_.sheen>0,nt=_.transmission>0,lt=Y&&!!_.anisotropyMap,St=it&&!!_.clearcoatMap,bt=it&&!!_.clearcoatNormalMap,ht=it&&!!_.clearcoatRoughnessMap,gt=E&&!!_.iridescenceMap,Et=E&&!!_.iridescenceThicknessMap,qt=Z&&!!_.sheenColorMap,Pt=Z&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,Yt=!!_.specularColorMap,Qt=!!_.specularIntensityMap,re=nt&&!!_.transmissionMap,Q=nt&&!!_.thicknessMap,At=!!_.gradientMap,mt=!!_.alphaMap,Rt=_.alphaTest>0,Nt=!!_.alphaHash,vt=!!_.extensions;let Kt=hi;_.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const Gt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:O,defines:_.defines,customVertexShaderID:H,customFragmentShaderID:I,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:et,batchingColor:et&&P._colorsTexture!==null,instancing:J,instancingColor:J&&P.instanceColor!==null,instancingMorph:J&&P.morphTexture!==null,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xt,matcap:yt,envMap:ot,envMapMode:ot&&j.mapping,envMapCubeUVHeight:G,aoMap:ft,lightMap:dt,bumpMap:Mt,normalMap:_t,displacementMap:Vt,emissiveMap:kt,normalMapObjectSpace:_t&&_.normalMapType===j0,normalMapTangentSpace:_t&&_.normalMapType===Aa,packedNormalMap:_t&&_.normalMapType===Aa&&x_(_.normalMap.format),metalnessMap:$t,roughnessMap:te,anisotropy:Y,anisotropyMap:lt,clearcoat:it,clearcoatMap:St,clearcoatNormalMap:bt,clearcoatRoughnessMap:ht,dispersion:ct,retroreflection:N,iridescence:E,iridescenceMap:gt,iridescenceThicknessMap:Et,sheen:Z,sheenColorMap:qt,sheenRoughnessMap:Pt,specularMap:Tt,specularColorMap:Yt,specularIntensityMap:Qt,transmission:nt,transmissionMap:re,thicknessMap:Q,gradientMap:At,opaque:_.transparent===!1&&_.blending===no&&_.alphaToCoverage===!1,alphaMap:mt,alphaTest:Rt,alphaHash:Nt,combine:_.combine,mapUv:xt&&p(_.map.channel),aoMapUv:ft&&p(_.aoMap.channel),lightMapUv:dt&&p(_.lightMap.channel),bumpMapUv:Mt&&p(_.bumpMap.channel),normalMapUv:_t&&p(_.normalMap.channel),displacementMapUv:Vt&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:$t&&p(_.metalnessMap.channel),roughnessMapUv:te&&p(_.roughnessMap.channel),anisotropyMapUv:lt&&p(_.anisotropyMap.channel),clearcoatMapUv:St&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:bt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&p(_.sheenRoughnessMap.channel),specularMapUv:Tt&&p(_.specularMap.channel),specularColorMapUv:Yt&&p(_.specularColorMap.channel),specularIntensityMapUv:Qt&&p(_.specularIntensityMap.channel),transmissionMapUv:re&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:mt&&p(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_t||Y),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!V.attributes.uv&&(xt||mt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:W,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:B,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:xt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&xe.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yn,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&_.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function x(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(b,_),M(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const b=d[_.type];let A;if(b){const C=ri[b];A=Dg.clone(C.uniforms)}else A=_.uniforms;return A}function v(_,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new d_(s,b,_,i),c.push(A),h.set(b,A)),A}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:w,acquireProgram:v,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:T}}function M_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function __(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Af(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,g,x,m){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=p,M.materialVariant=o(f),M.groupOrder=g,M.renderOrder=f.renderOrder,M.z=x,M.group=m),t++,M}function l(f,d,p,g,x,m,M){M.reversedDepth===!0&&(x=-x);const w=a(f,d,p,g,x,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(f,d,p,g,x,m){const M=a(f,d,p,g,x,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||__),n.length>1&&n.sort(d||Af),i.length>1&&i.sort(d||Af)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function y_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Rf,s.set(n,[o])):i>=r.length?(o=new Rf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function w_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Ct};break;case"SpotLight":e={position:new L,direction:new L,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function S_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b_=0;function E_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function T_(s){const t=new w_,e=S_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Jt,o=new Jt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,g=0,x=0,m=0,M=0,w=0,v=0,y=0,S=0,T=0,_=0,b=0,A=0;c.sort(E_);for(let P=0,U=c.length;P<U;P++){const F=c[P],V=F.color,q=F.intensity,X=F.distance;let j=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ts?j=F.shadow.map.texture:j=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=V.r*q,u+=V.g*q,f+=V.b*q;else if(F.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(F.sh.coefficients[G],q);A++}else if(F.isSunLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,tt=e.get(F);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=j;const ut=K.getViewportCount();for(let B=0;B<ut;B++)n.sunShadowMatrix[g+B]=K.getMatrix(B),n.sunShadowCascade[g+B]=K._cascadeData[B];g+=ut,p++}n.sun[d]=G,d++}else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,tt=e.get(F);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.directionalShadow[x]=tt,n.directionalShadowMap[x]=j,n.directionalShadowMatrix[x]=F.shadow.matrix,y++}n.directional[x]=G,x++}else if(F.isSpotLight){const G=t.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(V).multiplyScalar(q),G.distance=X,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,n.spot[M]=G;const K=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,K.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[M]=K.matrix,F.castShadow){const tt=e.get(F);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=j,T++}M++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(V).multiplyScalar(q),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=G,w++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const K=F.shadow,tt=e.get(F);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=F.shadow.matrix,S++}n.point[m]=G,m++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(q),G.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[v]=G,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==x||C.pointLength!==m||C.spotLength!==M||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==T||C.numSpotMaps!==_||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=x,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-b,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.sunLength=d,C.directionalLength=x,C.pointLength=m,C.spotLength=M,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=T,C.numSpotMaps=_,C.numLightProbes=A,n.version=b_++)}function l(c,h){let u=0,f=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const v=c[M];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Cf(s){const t=new T_(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function A_(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Cf(s),t.set(i,[a])):r>=o.length?(a=new Cf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,P_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],L_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pf=new Jt,zr=new L,Ql=new L;function I_(s,t,e){let n=new Lh;const i=new pt,r=new pt,o=new Se,a=new _p,l=new Fg,c={},h=e.maxTextureSize,u={[bs]:yn,[yn]:bs,[Yn]:Yn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new be;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wt(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let m=this.type;this.render=function(S,T,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===C0&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);const b=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Di),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==this.type;U&&T.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=S.length;F<V;F++){const q=S[F],X=q.shadow;if(X===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const j=X.getFrameExtents();i.multiply(j),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,X.mapSize.y=r.y));const G=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Jr){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Rn(i.x,i.y,{format:Ts,type:Cn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new go(i.x,i.y,Zn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe}else q.isPointLight?(X.map=new Oh(i.x),X.map.depthTexture=new ng(i.x,fi)):(X.map=new Rn(i.x,i.y),X.map.depthTexture=new go(i.x,i.y,fi)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=zi,this.type===eo?(X.map.depthTexture.compareFunction=G?bh:Sh,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,_);for(let tt=0;tt<K;tt++){const ut=X.getCamera(tt);if(q.isPointLight){const B=X.camera,k=X.matrix,O=q.distance||B.far;O!==B.far&&(B.far=O,B.updateProjectionMatrix()),zr.setFromMatrixPosition(q.matrixWorld),B.position.copy(zr),Ql.copy(B.position),Ql.add(P_[tt]),B.up.copy(L_[tt]),B.lookAt(Ql),B.updateMatrixWorld(),k.makeTranslation(-zr.x,-zr.y,-zr.z),Pf.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Pf,B.coordinateSystem,B.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,tt),s.clear();else{tt===0&&(s.setRenderTarget(X.map),s.clear());const B=X.getViewport(tt);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),P.viewport(o)}n=X.getFrustum(tt),v(T,_,ut,q,this.type)}X.isPointLightShadow!==!0&&this.type===Jr&&M(X,_),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(b,A,C)};function M(S,T){const _=t.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Rn(i.x,i.y,{format:Ts,type:Cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,_,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,_,d,g,null)}function w(S,T,_,b){let A=null;const C=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=A.uuid,U=T.uuid;let F=c[P];F===void 0&&(F={},c[P]=F);let V=F[U];V===void 0&&(V=A.clone(),F[U]=V,T.addEventListener("dispose",y)),A=V}if(A.visible=T.visible,A.wireframe=T.wireframe,b===Jr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=s.properties.get(A);P.light=_}return A}function v(S,T,_,b,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Jr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const U=t.update(S),F=S.material;if(Array.isArray(F)){const V=U.groups;for(let q=0,X=V.length;q<X;q++){const j=V[q],G=F[j.materialIndex];if(G&&G.visible){const K=w(S,G,b,A);S.onBeforeShadow(s,S,T,_,U,K,j),s.renderBufferDirect(_,null,U,K,S,j),S.onAfterShadow(s,S,T,_,U,K,j)}}}else if(F.visible){const V=w(S,F,b,A);S.onBeforeShadow(s,S,T,_,U,V,null),s.renderBufferDirect(_,null,U,V,S,null),S.onAfterShadow(s,S,T,_,U,V,null)}}const P=S.children;for(let U=0,F=P.length;U<F;U++)v(P[U],T,_,b,A)}function y(S){S.target.removeEventListener("dispose",y);for(const _ in c){const b=c[_],A=S.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function D_(s,t){function e(){let Q=!1;const At=new Se;let mt=null;const Rt=new Se(0,0,0,0);return{setMask:function(Nt){mt!==Nt&&!Q&&(s.colorMask(Nt,Nt,Nt,Nt),mt=Nt)},setLocked:function(Nt){Q=Nt},setClear:function(Nt,vt,Kt,Gt,Pe){Pe===!0&&(Nt*=Gt,vt*=Gt,Kt*=Gt),At.set(Nt,vt,Kt,Gt),Rt.equals(At)===!1&&(s.clearColor(Nt,vt,Kt,Gt),Rt.copy(At))},reset:function(){Q=!1,mt=null,Rt.set(-1,0,0,0)}}}function n(){let Q=!1,At=!1,mt=null,Rt=null,Nt=null;return{setReversed:function(vt){if(At!==vt){const Kt=t.get("EXT_clip_control");vt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const Gt=Nt;Nt=null,this.setClear(Gt)}},getReversed:function(){return At},setTest:function(vt){vt?z(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(vt){mt!==vt&&!Q&&(s.depthMask(vt),mt=vt)},setFunc:function(vt){if(At&&(vt=hm[vt]),Rt!==vt){switch(vt){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case xc:s.depthFunc(s.EQUAL);break;case vc:s.depthFunc(s.GEQUAL);break;case Mc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=vt}},setLocked:function(vt){Q=vt},setClear:function(vt){Nt!==vt&&(Nt=vt,At&&(vt=1-vt),s.clearDepth(vt))},reset:function(){Q=!1,mt=null,Rt=null,Nt=null,At=!1}}}function i(){let Q=!1,At=null,mt=null,Rt=null,Nt=null,vt=null,Kt=null,Gt=null,Pe=null;return{setTest:function(Me){Q||(Me?z(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Me){At!==Me&&!Q&&(s.stencilMask(Me),At=Me)},setFunc:function(Me,Bn,Jn){(mt!==Me||Rt!==Bn||Nt!==Jn)&&(s.stencilFunc(Me,Bn,Jn),mt=Me,Rt=Bn,Nt=Jn)},setOp:function(Me,Bn,Jn){(vt!==Me||Kt!==Bn||Gt!==Jn)&&(s.stencilOp(Me,Bn,Jn),vt=Me,Kt=Bn,Gt=Jn)},setLocked:function(Me){Q=Me},setClear:function(Me){Pe!==Me&&(s.clearStencil(Me),Pe=Me)},reset:function(){Q=!1,At=null,mt=null,Rt=null,Nt=null,vt=null,Kt=null,Gt=null,Pe=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,M=null,w=null,v=null,y=null,S=null,T=null,_=new Ct(0,0,0),b=0,A=!1,C=null,P=null,U=null,F=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=j>=2);let K=null,tt={};const ut=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),k=new Se().fromArray(ut),O=new Se().fromArray(B);function H(Q,At,mt,Rt){const Nt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(Q,vt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<mt;Kt++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(At+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return vt}const I={};I[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),I[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),I[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(s.DEPTH_TEST),o.setFunc(ho),Mt(!1),_t(vu),z(s.CULL_FACE),ft(Di);function z(Q){h[Q]!==!0&&(s.enable(Q),h[Q]=!0)}function W(Q){h[Q]!==!1&&(s.disable(Q),h[Q]=!1)}function J(Q,At){return f[Q]!==At?(s.bindFramebuffer(Q,At),f[Q]=At,Q===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=At),Q===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=At),!0):!1}function et(Q,At){let mt=p,Rt=!1;if(Q){mt=d.get(At),mt===void 0&&(mt=[],d.set(At,mt));const Nt=Q.textures;if(mt.length!==Nt.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Kt=Nt.length;vt<Kt;vt++)mt[vt]=s.COLOR_ATTACHMENT0+vt;mt.length=Nt.length,Rt=!0}}else mt[0]!==s.BACK&&(mt[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(mt)}function xt(Q){return g!==Q?(s.useProgram(Q),g=Q,!0):!1}const yt={[er]:s.FUNC_ADD,[L0]:s.FUNC_SUBTRACT,[I0]:s.FUNC_REVERSE_SUBTRACT};yt[D0]=s.MIN,yt[N0]=s.MAX;const ot={[U0]:s.ZERO,[z0]:s.ONE,[F0]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[G0]:s.SRC_ALPHA_SATURATE,[H0]:s.DST_COLOR,[O0]:s.DST_ALPHA,[k0]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[V0]:s.ONE_MINUS_DST_COLOR,[B0]:s.ONE_MINUS_DST_ALPHA,[W0]:s.CONSTANT_COLOR,[X0]:s.ONE_MINUS_CONSTANT_COLOR,[q0]:s.CONSTANT_ALPHA,[Y0]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(Q,At,mt,Rt,Nt,vt,Kt,Gt,Pe,Me){if(Q===Di){x===!0&&(W(s.BLEND),x=!1);return}if(x===!1&&(z(s.BLEND),x=!0),Q!==P0){if(Q!==m||Me!==A){if((M!==er||y!==er)&&(s.blendEquation(s.FUNC_ADD),M=er,y=er),Me)switch(Q){case no:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sa:s.blendFunc(s.ONE,s.ONE);break;case Mu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _u:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ge("WebGLState: Invalid blending: ",Q);break}else switch(Q){case no:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mu:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",Q);break}w=null,v=null,S=null,T=null,_.set(0,0,0),b=0,m=Q,A=Me}return}Nt=Nt||At,vt=vt||mt,Kt=Kt||Rt,(At!==M||Nt!==y)&&(s.blendEquationSeparate(yt[At],yt[Nt]),M=At,y=Nt),(mt!==w||Rt!==v||vt!==S||Kt!==T)&&(s.blendFuncSeparate(ot[mt],ot[Rt],ot[vt],ot[Kt]),w=mt,v=Rt,S=vt,T=Kt),(Gt.equals(_)===!1||Pe!==b)&&(s.blendColor(Gt.r,Gt.g,Gt.b,Pe),_.copy(Gt),b=Pe),m=Q,A=!1}function dt(Q,At){Q.side===Yn?W(s.CULL_FACE):z(s.CULL_FACE);let mt=Q.side===yn;At&&(mt=!mt),Mt(mt),Q.blending===no&&Q.transparent===!1?ft(Di):ft(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);const Rt=Q.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),kt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?z(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(Q){C!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),C=Q)}function _t(Q){Q!==A0?(z(s.CULL_FACE),Q!==P&&(Q===vu?s.cullFace(s.BACK):Q===R0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),P=Q}function Vt(Q){Q!==U&&(X&&s.lineWidth(Q),U=Q)}function kt(Q,At,mt){Q?(z(s.POLYGON_OFFSET_FILL),(F!==At||V!==mt)&&(F=At,V=mt,o.getReversed()&&(At=-At),s.polygonOffset(At,mt))):W(s.POLYGON_OFFSET_FILL)}function $t(Q){Q?z(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function te(Q){Q===void 0&&(Q=s.TEXTURE0+q-1),K!==Q&&(s.activeTexture(Q),K=Q)}function Y(Q,At,mt){mt===void 0&&(K===null?mt=s.TEXTURE0+q-1:mt=K);let Rt=tt[mt];Rt===void 0&&(Rt={type:void 0,texture:void 0},tt[mt]=Rt),(Rt.type!==Q||Rt.texture!==At)&&(K!==mt&&(s.activeTexture(mt),K=mt),s.bindTexture(Q,At||I[Q]),Rt.type=Q,Rt.texture=At)}function it(){const Q=tt[K];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ct(){try{s.compressedTexImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function E(){try{s.texSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function Z(){try{s.texSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function lt(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function St(){try{s.texStorage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function bt(){try{s.texStorage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function ht(){try{s.texImage2D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function gt(){try{s.texImage3D(...arguments)}catch(Q){ge("WebGLState:",Q)}}function Et(Q){return u[Q]!==void 0?u[Q]:s.getParameter(Q)}function qt(Q,At){u[Q]!==At&&(s.pixelStorei(Q,At),u[Q]=At)}function Pt(Q){k.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),k.copy(Q))}function Tt(Q){O.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),O.copy(Q))}function Yt(Q,At){let mt=c.get(At);mt===void 0&&(mt=new WeakMap,c.set(At,mt));let Rt=mt.get(Q);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,Q.name),mt.set(Q,Rt))}function Qt(Q,At){const Rt=c.get(At).get(Q);l.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,Q.__bindingPointIndex),l.set(At,Rt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,tt={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,M=null,w=null,v=null,y=null,S=null,T=null,_=new Ct(0,0,0),b=0,A=!1,C=null,P=null,U=null,F=null,V=null,k.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:W,bindFramebuffer:J,drawBuffers:et,useProgram:xt,setBlending:ft,setMaterial:dt,setFlipSided:Mt,setCullFace:_t,setLineWidth:Vt,setPolygonOffset:kt,setScissorTest:$t,activeTexture:te,bindTexture:Y,unbindTexture:it,compressedTexImage2D:ct,compressedTexImage3D:N,texImage2D:ht,texImage3D:gt,pixelStorei:qt,getParameter:Et,updateUBOMapping:Yt,uniformBlockBinding:Qt,texStorage2D:St,texStorage3D:bt,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:nt,compressedTexSubImage3D:lt,scissor:Pt,viewport:Tt,reset:re}}function N_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,E){return p?new OffscreenCanvas(N,E):mo("canvas")}function x(N,E,Z){let nt=1;const lt=ct(N);if((lt.width>Z||lt.height>Z)&&(nt=Z/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const St=Math.floor(nt*lt.width),bt=Math.floor(nt*lt.height);f===void 0&&(f=g(St,bt));const ht=E?g(St,bt):f;return ht.width=St,ht.height=bt,ht.getContext("2d").drawImage(N,0,0,St,bt),jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+St+"x"+bt+")."),ht}else return"data"in N&&jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function m(N){return N.generateMipmaps}function M(N){s.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(N,E,Z,nt,lt,St=!1){if(N!==null){if(s[N]!==void 0)return s[N];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let bt;nt&&(bt=t.get("EXT_texture_norm16"),bt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=E;if(E===s.RED&&(Z===s.FLOAT&&(ht=s.R32F),Z===s.HALF_FLOAT&&(ht=s.R16F),Z===s.UNSIGNED_BYTE&&(ht=s.R8),Z===s.UNSIGNED_SHORT&&bt&&(ht=bt.R16_EXT),Z===s.SHORT&&bt&&(ht=bt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.R8UI),Z===s.UNSIGNED_SHORT&&(ht=s.R16UI),Z===s.UNSIGNED_INT&&(ht=s.R32UI),Z===s.BYTE&&(ht=s.R8I),Z===s.SHORT&&(ht=s.R16I),Z===s.INT&&(ht=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(ht=s.RG32F),Z===s.HALF_FLOAT&&(ht=s.RG16F),Z===s.UNSIGNED_BYTE&&(ht=s.RG8),Z===s.UNSIGNED_SHORT&&bt&&(ht=bt.RG16_EXT),Z===s.SHORT&&bt&&(ht=bt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RG16UI),Z===s.UNSIGNED_INT&&(ht=s.RG32UI),Z===s.BYTE&&(ht=s.RG8I),Z===s.SHORT&&(ht=s.RG16I),Z===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),Z===s.UNSIGNED_INT&&(ht=s.RGB32UI),Z===s.BYTE&&(ht=s.RGB8I),Z===s.SHORT&&(ht=s.RGB16I),Z===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ht=s.RGBA32UI),Z===s.BYTE&&(ht=s.RGBA8I),Z===s.SHORT&&(ht=s.RGBA16I),Z===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&(Z===s.UNSIGNED_SHORT&&bt&&(ht=bt.RGB16_EXT),Z===s.SHORT&&bt&&(ht=bt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),E===s.RGBA){const gt=St?Ca:xe.getTransfer(lt);Z===s.FLOAT&&(ht=s.RGBA32F),Z===s.HALF_FLOAT&&(ht=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ht=gt===ye?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&bt&&(ht=bt.RGBA16_EXT),Z===s.SHORT&&bt&&(ht=bt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function y(N,E){let Z;return N?E===null||E===fi||E===fo?Z=s.DEPTH24_STENCIL8:E===Zn?Z=s.DEPTH32F_STENCIL8:E===uo&&(Z=s.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fi||E===fo?Z=s.DEPTH_COMPONENT24:E===Zn?Z=s.DEPTH_COMPONENT32F:E===uo&&(Z=s.DEPTH_COMPONENT16),Z}function S(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Xe&&N.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function T(N){const E=N.target;E.removeEventListener("dispose",T),b(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function _(N){const E=N.target;E.removeEventListener("dispose",_),C(E)}function b(N){const E=n.get(N);if(E.__webglInit===void 0)return;const Z=N.source,nt=d.get(Z);if(nt){const lt=nt[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(N),Object.keys(nt).length===0&&d.delete(Z)}n.remove(N)}function A(N){const E=n.get(N);s.deleteTexture(E.__webglTexture);const Z=N.source,nt=d.get(Z);delete nt[E.__cacheKey],o.memory.textures--}function C(N){const E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let lt=0;lt<E.__webglFramebuffer[nt].length;lt++)s.deleteFramebuffer(E.__webglFramebuffer[nt][lt]);else s.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)s.deleteFramebuffer(E.__webglFramebuffer[nt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=N.textures;for(let nt=0,lt=Z.length;nt<lt;nt++){const St=n.get(Z[nt]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(Z[nt])}n.remove(N)}let P=0;function U(){P=0}function F(){return P}function V(N){P=N}function q(){const N=P;return N>=i.maxTextures&&jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,N}function X(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function j(N,E){const Z=n.get(N);if(N.isVideoTexture&&Y(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const nt=N.image;if(nt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(Z,N,E);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function G(N,E){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){W(Z,N,E);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function K(N,E){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){W(Z,N,E);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function tt(N,E){const Z=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){J(Z,N,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ut={[ba]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[yc]:s.MIRRORED_REPEAT},B={[Xe]:s.NEAREST,[Z0]:s.NEAREST_MIPMAP_NEAREST,[Ro]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[vl]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},k={[em]:s.NEVER,[om]:s.ALWAYS,[nm]:s.LESS,[Sh]:s.LEQUAL,[im]:s.EQUAL,[bh]:s.GEQUAL,[sm]:s.GREATER,[rm]:s.NOTEQUAL};function O(N,E){if(E.type===Zn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===vl||E.magFilter===Ro||E.magFilter===is||E.minFilter===tn||E.minFilter===vl||E.minFilter===Ro||E.minFilter===is)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ut[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ut[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ut[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,B[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,B[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xe||E.minFilter!==Ro&&E.minFilter!==is||E.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function H(N,E){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",T));const nt=E.source;let lt=d.get(nt);lt===void 0&&(lt={},d.set(nt,lt));const St=X(E);if(St!==N.__cacheKey){lt[St]===void 0&&(lt[St]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),lt[St].usedTimes++;const bt=lt[N.__cacheKey];bt!==void 0&&(lt[N.__cacheKey].usedTimes--,bt.usedTimes===0&&A(E)),N.__cacheKey=St,N.__webglTexture=lt[St].texture}return Z}function I(N,E,Z){return Math.floor(Math.floor(N/Z)/E)}function z(N,E,Z,nt){const St=N.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,nt,E.data);else{St.sort((qt,Pt)=>qt.start-Pt.start);let bt=0;for(let qt=1;qt<St.length;qt++){const Pt=St[bt],Tt=St[qt],Yt=Pt.start+Pt.count,Qt=I(Tt.start,E.width,4),re=I(Pt.start,E.width,4);Tt.start<=Yt+1&&Qt===re&&I(Tt.start+Tt.count-1,E.width,4)===Qt?Pt.count=Math.max(Pt.count,Tt.start+Tt.count-Pt.start):(++bt,St[bt]=Tt)}St.length=bt+1;const ht=e.getParameter(s.UNPACK_ROW_LENGTH),gt=e.getParameter(s.UNPACK_SKIP_PIXELS),Et=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let qt=0,Pt=St.length;qt<Pt;qt++){const Tt=St[qt],Yt=Math.floor(Tt.start/4),Qt=Math.ceil(Tt.count/4),re=Yt%E.width,Q=Math.floor(Yt/E.width),At=Qt,mt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,re),e.pixelStorei(s.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(s.TEXTURE_2D,0,re,Q,At,mt,Z,nt,E.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ht),e.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Et)}}function W(N,E,Z){let nt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=s.TEXTURE_3D);const lt=H(N,E),St=E.source;e.bindTexture(nt,N.__webglTexture,s.TEXTURE0+Z);const bt=n.get(St);if(St.version!==bt.__version||lt===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const mt=xe.getPrimaries(xe.workingColorSpace),Rt=E.colorSpace===ts?null:xe.getPrimaries(E.colorSpace),Nt=E.colorSpace===ts||mt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let gt=x(E.image,!1,i.maxTextureSize);gt=it(E,gt);const Et=r.convert(E.format,E.colorSpace),qt=r.convert(E.type);let Pt=v(E.internalFormat,Et,qt,E.normalized,E.colorSpace,E.isVideoTexture);O(nt,E);let Tt;const Yt=E.mipmaps,Qt=E.isVideoTexture!==!0,re=bt.__version===void 0||lt===!0,Q=St.dataReady,At=S(E,gt);if(E.isDepthTexture)Pt=y(E.format===ws,E.type),re&&(Qt?e.texStorage2D(s.TEXTURE_2D,1,Pt,gt.width,gt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,gt.width,gt.height,0,Et,qt,null));else if(E.isDataTexture)if(Yt.length>0){Qt&&re&&e.texStorage2D(s.TEXTURE_2D,At,Pt,Yt[0].width,Yt[0].height);for(let mt=0,Rt=Yt.length;mt<Rt;mt++)Tt=Yt[mt],Qt?Q&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,qt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,Pt,Tt.width,Tt.height,0,Et,qt,Tt.data);E.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(s.TEXTURE_2D,At,Pt,gt.width,gt.height),Q&&z(E,gt,Et,qt)):e.texImage2D(s.TEXTURE_2D,0,Pt,gt.width,gt.height,0,Et,qt,gt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Pt,Yt[0].width,Yt[0].height,gt.depth);for(let mt=0,Rt=Yt.length;mt<Rt;mt++)if(Tt=Yt[mt],E.format!==An)if(Et!==null)if(Qt){if(Q)if(E.layerUpdates.size>0){const Nt=cf(Tt.width,Tt.height,E.format,E.type);for(const vt of E.layerUpdates){const Kt=Tt.data.subarray(vt*Nt/Tt.data.BYTES_PER_ELEMENT,(vt+1)*Nt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,vt,Tt.width,Tt.height,1,Et,Kt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,gt.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,Pt,Tt.width,Tt.height,gt.depth,0,Tt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Q&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Tt.width,Tt.height,gt.depth,Et,qt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,Pt,Tt.width,Tt.height,gt.depth,0,Et,qt,Tt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Qt&&re&&e.texStorage2D(s.TEXTURE_2D,At,Pt,Yt[0].width,Yt[0].height);for(let mt=0,Rt=Yt.length;mt<Rt;mt++)Tt=Yt[mt],E.format!==An?Et!==null?Qt?Q&&e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,Pt,Tt.width,Tt.height,0,Tt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Q&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt.width,Tt.height,Et,qt,Tt.data):e.texImage2D(s.TEXTURE_2D,mt,Pt,Tt.width,Tt.height,0,Et,qt,Tt.data)}else if(E.isDataArrayTexture)if(Qt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Pt,gt.width,gt.height,gt.depth),Q)if(E.layerUpdates.size>0){const mt=cf(gt.width,gt.height,E.format,E.type);for(const Rt of E.layerUpdates){const Nt=gt.data.subarray(Rt*mt/gt.data.BYTES_PER_ELEMENT,(Rt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,gt.width,gt.height,1,Et,qt,Nt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Et,qt,gt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,gt.width,gt.height,gt.depth,0,Et,qt,gt.data);else if(E.isData3DTexture)Qt?(re&&e.texStorage3D(s.TEXTURE_3D,At,Pt,gt.width,gt.height,gt.depth),Q&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Et,qt,gt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,gt.width,gt.height,gt.depth,0,Et,qt,gt.data);else if(E.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(s.TEXTURE_2D,At,Pt,gt.width,gt.height);else{let mt=gt.width,Rt=gt.height;for(let Nt=0;Nt<At;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,Pt,mt,Rt,0,Et,qt,null),mt>>=1,Rt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const mt=s.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),gt.parentNode!==mt){mt.appendChild(gt),u.add(E),mt.onpaint=Rt=>{const Nt=Rt.changedElements;for(const vt of u)Nt.includes(vt.image)&&(vt.needsUpdate=!0)},mt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,gt);else{const Nt=s.RGBA,vt=s.RGBA,Kt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Nt,vt,Kt,gt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Qt&&re){const mt=ct(Yt[0]);e.texStorage2D(s.TEXTURE_2D,At,Pt,mt.width,mt.height)}for(let mt=0,Rt=Yt.length;mt<Rt;mt++)Tt=Yt[mt],Qt?Q&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Et,qt,Tt):e.texImage2D(s.TEXTURE_2D,mt,Pt,Et,qt,Tt);E.generateMipmaps=!1}else if(Qt){if(re){const mt=ct(gt);e.texStorage2D(s.TEXTURE_2D,At,Pt,mt.width,mt.height)}Q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,qt,gt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,Et,qt,gt);m(E)&&M(nt),bt.__version=St.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function J(N,E,Z){if(E.image.length!==6)return;const nt=H(N,E),lt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Z);const St=n.get(lt);if(lt.version!==St.__version||nt===!0){e.activeTexture(s.TEXTURE0+Z);const bt=xe.getPrimaries(xe.workingColorSpace),ht=E.colorSpace===ts?null:xe.getPrimaries(E.colorSpace),gt=E.colorSpace===ts||bt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Et=E.isCompressedTexture||E.image[0].isCompressedTexture,qt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let vt=0;vt<6;vt++)!Et&&!qt?Pt[vt]=x(E.image[vt],!0,i.maxCubemapSize):Pt[vt]=qt?E.image[vt].image:E.image[vt],Pt[vt]=it(E,Pt[vt]);const Tt=Pt[0],Yt=r.convert(E.format,E.colorSpace),Qt=r.convert(E.type),re=v(E.internalFormat,Yt,Qt,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,At=St.__version===void 0||nt===!0,mt=lt.dataReady;let Rt=S(E,Tt);O(s.TEXTURE_CUBE_MAP,E);let Nt;if(Et){Q&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,re,Tt.width,Tt.height);for(let vt=0;vt<6;vt++){Nt=Pt[vt].mipmaps;for(let Kt=0;Kt<Nt.length;Kt++){const Gt=Nt[Kt];E.format!==An?Yt!==null?Q?mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt,0,0,Gt.width,Gt.height,Yt,Gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt,re,Gt.width,Gt.height,0,Gt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt,0,0,Gt.width,Gt.height,Yt,Qt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt,re,Gt.width,Gt.height,0,Yt,Qt,Gt.data)}}}else{if(Nt=E.mipmaps,Q&&At){Nt.length>0&&Rt++;const vt=ct(Pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,re,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(qt){Q?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Pt[vt].width,Pt[vt].height,Yt,Qt,Pt[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Pt[vt].width,Pt[vt].height,0,Yt,Qt,Pt[vt].data);for(let Kt=0;Kt<Nt.length;Kt++){const Pe=Nt[Kt].image[vt].image;Q?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt+1,0,0,Pe.width,Pe.height,Yt,Qt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt+1,re,Pe.width,Pe.height,0,Yt,Qt,Pe.data)}}else{Q?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,Qt,Pt[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,re,Yt,Qt,Pt[vt]);for(let Kt=0;Kt<Nt.length;Kt++){const Gt=Nt[Kt];Q?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt+1,0,0,Yt,Qt,Gt.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Kt+1,re,Yt,Qt,Gt.image[vt])}}}m(E)&&M(s.TEXTURE_CUBE_MAP),St.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function et(N,E,Z,nt,lt,St){const bt=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),gt=v(Z.internalFormat,bt,ht,Z.normalized,Z.colorSpace),Et=n.get(E),qt=n.get(Z);if(qt.__renderTarget=E,!Et.__hasExternalTextures){const Pt=Math.max(1,E.width>>St),Tt=Math.max(1,E.height>>St);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,St,gt,Pt,Tt,E.depth,0,bt,ht,null):e.texImage2D(lt,St,gt,Pt,Tt,0,bt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,lt,qt.__webglTexture,0,$t(E)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,lt,qt.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(N,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const nt=E.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,St=y(E.stencilBuffer,lt),bt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;te(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(E),St,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(E),St,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,St,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,N)}else{const nt=E.textures;for(let lt=0;lt<nt.length;lt++){const St=nt[lt],bt=r.convert(St.format,St.colorSpace),ht=r.convert(St.type),gt=v(St.internalFormat,bt,ht,St.normalized,St.colorSpace);te(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(E),gt,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(E),gt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,gt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(N,E,Z){const nt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(E.depthTexture);if(lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),nt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),lt.__webglTexture===void 0){lt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),O(s.TEXTURE_CUBE_MAP,E.depthTexture);const Et=r.convert(E.depthTexture.format),qt=r.convert(E.depthTexture.type);let Pt;E.depthTexture.format===zi?Pt=s.DEPTH_COMPONENT24:E.depthTexture.format===ws&&(Pt=s.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,E.width,E.height,0,Et,qt,null)}}else j(E.depthTexture,0);const St=lt.__webglTexture,bt=$t(E),ht=nt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,gt=E.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===zi)te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,ht,St,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,gt,ht,St,0);else if(E.depthTexture.format===ws)te(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,ht,St,0,bt):s.framebufferTexture2D(s.FRAMEBUFFER,gt,ht,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(N){const E=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const nt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=nt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let nt=0;nt<6;nt++)yt(E.__webglFramebuffer[nt],N,nt);else{const nt=N.texture.mipmaps;nt&&nt.length>0?yt(E.__webglFramebuffer[0],N,0):yt(E.__webglFramebuffer,N,0)}else if(Z){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=s.createRenderbuffer(),xt(E.__webglDepthbuffer[nt],N,!1);else{const lt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,St)}}else{const nt=N.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xt(E.__webglDepthbuffer,N,!1);else{const lt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,St)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(N,E,Z){const nt=n.get(N);E!==void 0&&et(nt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ot(N)}function dt(N){const E=N.texture,Z=n.get(N),nt=n.get(E);N.addEventListener("dispose",_);const lt=N.textures,St=N.isWebGLCubeRenderTarget===!0,bt=lt.length>1;if(bt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=E.version,o.memory.textures++),St){Z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ht]=[];for(let gt=0;gt<E.mipmaps.length;gt++)Z.__webglFramebuffer[ht][gt]=s.createFramebuffer()}else Z.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)Z.__webglFramebuffer[ht]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ht=0,gt=lt.length;ht<gt;ht++){const Et=n.get(lt[ht]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&te(N)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ht=0;ht<lt.length;ht++){const gt=lt[ht];Z.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ht]);const Et=r.convert(gt.format,gt.colorSpace),qt=r.convert(gt.type),Pt=v(gt.internalFormat,Et,qt,gt.normalized,gt.colorSpace,N.isXRRenderTarget===!0),Tt=$t(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,Pt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),O(s.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)et(Z.__webglFramebuffer[ht][gt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else et(Z.__webglFramebuffer[ht],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,gt=lt.length;ht<gt;ht++){const Et=lt[ht],qt=n.get(Et);let Pt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Pt,qt.__webglTexture),O(Pt,Et),et(Z.__webglFramebuffer,N,Et,s.COLOR_ATTACHMENT0+ht,Pt,0),m(Et)&&M(Pt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ht=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),O(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)et(Z.__webglFramebuffer[gt],N,E,s.COLOR_ATTACHMENT0,ht,gt);else et(Z.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,ht,0);m(E)&&M(ht),e.unbindTexture()}N.depthBuffer&&ot(N)}function Mt(N){const E=N.textures;for(let Z=0,nt=E.length;Z<nt;Z++){const lt=E[Z];if(m(lt)){const St=w(N),bt=n.get(lt).__webglTexture;e.bindTexture(St,bt),M(St),e.unbindTexture()}}}const _t=[],Vt=[];function kt(N){if(N.samples>0){if(te(N)===!1){const E=N.textures,Z=N.width,nt=N.height;let lt=s.COLOR_BUFFER_BIT;const St=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(N),ht=E.length>1;if(ht)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const gt=N.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);const qt=n.get(E[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,lt,s.NEAREST),l===!0&&(_t.length=0,Vt.length=0,_t.push(s.COLOR_ATTACHMENT0+Et),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(_t.push(St),Vt.push(St),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);const qt=n.get(E[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function $t(N){return Math.min(i.maxSamples,N.samples)}function te(N){const E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(N){const E=o.render.frame;h.get(N)!==E&&(h.set(N,E),N.update())}function it(N,E){const Z=N.colorSpace,nt=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Ra&&Z!==ts&&(xe.getTransfer(Z)===ye?(nt!==An||lt!==_n)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",Z)),E}function ct(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=et,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function U_(s,t){function e(n,i=ts){let r;const o=xe.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$d)return s.BYTE;if(n===Kd)return s.SHORT;if(n===uo)return s.UNSIGNED_SHORT;if(n===xh)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===Qd)return s.ALPHA;if(n===jd)return s.RGB;if(n===An)return s.RGBA;if(n===zi)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===nl)return s.RED;if(n===_h)return s.RED_INTEGER;if(n===Ts)return s.RG;if(n===yh)return s.RG_INTEGER;if(n===wh)return s.RGBA_INTEGER;if(n===ga||n===xa||n===va||n===Ma)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Sc||n===bc||n===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ea||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===Ac)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cc)return r.COMPRESSED_R11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ea)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Dc||n===Nc||n===Uc||n===zc||n===Fc||n===kc||n===Oc||n===Bc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Yc||n===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Zc||n===Ta||n===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:z_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Cs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const g=typeof XRWebGLBinding<"u",x=new k_,m={},M=e.getContextAttributes();let w=null,v=null;const y=[],S=[],T=new pt;let _=null,b=null;const A=new je;A.viewport=new Se;const C=new je;C.viewport=new Se;const P=[A,C],U=new Yg;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let z=y[I];return z===void 0&&(z=new El,y[I]=z),z.getTargetRaySpace()},this.getControllerGrip=function(I){let z=y[I];return z===void 0&&(z=new El,y[I]=z),z.getGripSpace()},this.getHand=function(I){let z=y[I];return z===void 0&&(z=new El,y[I]=z),z.getHandSpace()};function q(I){const z=S.indexOf(I.inputSource);if(z===-1)return;const W=y[z];W!==void 0&&(W.update(I.inputSource,I.frame,c||o),W.dispatchEvent({type:I.type,data:I.inputSource}))}function X(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let I=0;I<y.length;I++){const z=S[I];z!==null&&(S[I]=null,y[I].disconnect(z))}F=null,V=null,x.reset();for(const I in m)delete m[I];if(t.setRenderTarget(w),d=null,f=null,u=null,i=null,v=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),b!==null){const I=b.camera;I.fov=b.fov,I.zoom=b.zoom,I.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,J=null,et=null;M.depth&&(et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?ws:zi,J=M.stencil?fo:fi);const xt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Rn(f.textureWidth,f.textureHeight,{format:An,type:_n,depthTexture:new go(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Rn(d.framebufferWidth,d.framebufferHeight,{format:An,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(I){for(let z=0;z<I.removed.length;z++){const W=I.removed[z],J=S.indexOf(W);J>=0&&(S[J]=null,y[J].disconnect(W))}for(let z=0;z<I.added.length;z++){const W=I.added[z];let J=S.indexOf(W);if(J===-1){for(let xt=0;xt<y.length;xt++)if(xt>=S.length){S.push(W),J=xt;break}else if(S[xt]===null){S[xt]=W,J=xt;break}if(J===-1)break}const et=y[J];et&&et.connect(W)}}const G=new L,K=new L;function tt(I,z,W){G.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition(W.matrixWorld);const J=G.distanceTo(K),et=z.projectionMatrix.elements,xt=W.projectionMatrix.elements,yt=et[14]/(et[10]-1),ot=et[14]/(et[10]+1),ft=(et[9]+1)/et[5],dt=(et[9]-1)/et[5],Mt=(et[8]-1)/et[0],_t=(xt[8]+1)/xt[0],Vt=yt*Mt,kt=yt*_t,$t=J/(-Mt+_t),te=$t*-Mt;if(z.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(te),I.translateZ($t),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),et[10]===-1)I.projectionMatrix.copy(z.projectionMatrix),I.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const Y=yt+$t,it=ot+$t,ct=Vt-te,N=kt+(J-te),E=ft*ot/it*Y,Z=dt*ot/it*Y;I.projectionMatrix.makePerspective(ct,N,E,Z,Y,it),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function ut(I,z){z===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(z.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;let z=I.near,W=I.far;x.texture!==null&&(x.depthNear>0&&(z=x.depthNear),x.depthFar>0&&(W=x.depthFar)),U.near=C.near=A.near=z,U.far=C.far=A.far=W,(F!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,V=U.far),U.layers.mask=I.layers.mask|6,A.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const J=I.parent,et=U.cameras;ut(U,J);for(let xt=0;xt<et.length;xt++)ut(et[xt],J);et.length===2?tt(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),b===null&&I.isPerspectiveCamera&&(b={camera:I,fov:I.fov,zoom:I.zoom}),B(I,U,J)};function B(I,z,W){W===null?I.matrix.copy(z.matrixWorld):(I.matrix.copy(W.matrixWorld),I.matrix.invert(),I.matrix.multiply(z.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(z.projectionMatrix),I.projectionMatrixInverse.copy(z.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=xr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(U)},this.getCameraTexture=function(I){return m[I]};let k=null;function O(I,z){if(h=z.getViewerPose(c||o),p=z,h!==null){const W=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let J=!1;W.length!==U.cameras.length&&(U.cameras.length=0,J=!0);for(let ot=0;ot<W.length;ot++){const ft=W[ot];let dt=null;if(d!==null)dt=d.getViewport(ft);else{const _t=u.getViewSubImage(f,ft);dt=_t.viewport,ot===0&&(t.setRenderTargetTextures(v,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(v))}let Mt=P[ot];Mt===void 0&&(Mt=new je,Mt.layers.enable(ot),Mt.viewport=new Se,P[ot]=Mt),Mt.matrix.fromArray(ft.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ft.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(dt.x,dt.y,dt.width,dt.height),ot===0&&(U.matrix.copy(Mt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),J===!0&&U.cameras.push(Mt)}const et=i.enabledFeatures;if(et&&et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const ot=u.getDepthInformation(W[0]);ot&&ot.isValid&&ot.texture&&x.init(ot,i.renderState)}if(et&&et.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let ot=0;ot<W.length;ot++){const ft=W[ot].camera;if(ft){let dt=m[ft];dt||(dt=new cp,m[ft]=dt);const Mt=u.getCameraImage(ft);dt.sourceTexture=Mt}}}}for(let W=0;W<y.length;W++){const J=S[W],et=y[W];J!==null&&et!==void 0&&et.update(J,z,c||o)}k&&k(I,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}const H=new bp;H.setAnimationLoop(O),this.setAnimationLoop=function(I){k=I},this.dispose=function(){}}}const B_=new Jt,Pp=new ne;Pp.set(-1,0,0,0,1,0,0,0,1);function H_(s,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Mp(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,M,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),u(x,m)):m.isMeshPhongMaterial?(r(x,m),h(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,v)):m.isMeshMatcapMaterial?(r(x,m),p(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),g(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,M,w):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===yn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===yn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const M=t.get(m),w=M.envMap,v=M.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Pp),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,M,w){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*M,x.scale.value=w*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,M){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function g(x,m){const M=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=i[v.id];S===void 0&&(x(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",M));const T=y.program;n.updateUBOMapping(v,T);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const S=s.createBuffer(),T=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],S=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,b=S.length;_<b;_++){const A=S[_];if(Array.isArray(A))for(let C=0,P=A.length;C<P;C++)d(A[C],_,C,T);else d(A,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,S,T){if(g(v,y,S,T)===!0){const _=v.__offset,b=v.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){const P=b[C],U=m(P);p(P,v.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,y,S){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,S)}function g(v,y,S,T){const _=v.value,b=y+"_"+S;if(T[b]===void 0)return typeof _=="number"||typeof _=="boolean"?T[b]=_:ArrayBuffer.isView(_)?T[b]=_.slice():T[b]=_.clone(),!0;{const A=T[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return T[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function x(v){const y=v.uniforms;let S=0;const T=16;for(let b=0,A=y.length;b<A;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let P=0,U=C.length;P<U;P++){const F=C[P],V=Array.isArray(F.value)?F.value:[F.value];for(let q=0,X=V.length;q<X;q++){const j=V[q],G=m(j),K=S%T,tt=K%G.boundary,ut=K+tt;S+=tt,ut!==0&&T-ut<G.storage&&(S+=T-ut),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}const _=S%T;return _>0&&(S+=T-_),v.__size=S,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:w}}const G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function W_(){return ti===null&&(ti=new vr(G_,16,16,Ts,Cn),ti.name="DFG_LUT",ti.minFilter=tn,ti.magFilter=tn,ti.wrapS=Ci,ti.wrapT=Ci,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class X_{constructor(t={}){const{canvas:e=lm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=d,x=new Set([wh,yh,_h]),m=new Set([_n,fi,uo,fo,vh,Mh]),M=new Uint32Array(4),w=new Int32Array(4),v=new L;let y=null,S=null;const T=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,P=null,U=null,F=null,V=null;this._outputColorSpace=Ne;let q=0,X=0,j=null,G=-1,K=null;const tt=new Se,ut=new Se;let B=null;const k=new Ct(0);let O=0,H=e.width,I=e.height,z=1,W=null,J=null;const et=new Se(0,0,H,I),xt=new Se(0,0,H,I);let yt=!1;const ot=new Lh;let ft=!1,dt=!1;const Mt=new Jt,_t=new L,Vt=new Se,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function te(){return j===null?z:1}let Y=n;function it(D,$){return e.getContext(D,$)}let ct,N,E,Z,nt,lt,St,bt,ht,gt,Et,qt,Pt,Tt,Yt,Qt,re,Q,At,mt,Rt,Nt,vt;try{const D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),Y===null){const $="webgl2";if(Y=it($,D),Y===null)throw it($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(D){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),ge("WebGLRenderer: "+D.message),D}function Kt(){ct=new W1(Y),ct.init(),Rt=new U_(Y,ct),N=new N1(Y,ct,t,Rt),E=new D_(Y,ct),N.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),U=Y.createFramebuffer(),F=Y.createFramebuffer(),V=Y.createFramebuffer(),Z=new Y1(Y),nt=new M_,lt=new N_(Y,ct,E,nt,N,Rt,Z),St=new G1(A),bt=new Kg(Y),Nt=new I1(Y,bt),ht=new X1(Y,bt,Z,Nt),gt=new K1(Y,ht,bt,Nt,Z),Q=new $1(Y,N,lt),Yt=new U1(nt),Et=new v_(A,St,ct,N,Nt,Yt),qt=new H_(A,nt),Pt=new y_,Tt=new A_(ct),re=new L1(A,St,E,gt,p,l),Qt=new I_(A,gt,N),vt=new V_(Y,Z,N,E),At=new D1(Y,ct,Z),mt=new q1(Y,ct,Z),Z.programs=Et.programs,A.capabilities=N,A.extensions=ct,A.properties=nt,A.renderLists=Pt,A.shadowMap=Qt,A.state=E,A.info=Z}g!==_n&&(b=new J1(g,e.width,e.height,a,i,r));const Gt=new O_(A,Y);this.xr=Gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=ct.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ct.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(D){D!==void 0&&(z=D,this.setSize(H,I,!1))},this.getSize=function(D){return D.set(H,I)},this.setSize=function(D,$,at=!0){if(Gt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,I=$,e.width=Math.floor(D*z),e.height=Math.floor($*z),at===!0&&(e.style.width=D+"px",e.style.height=$+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(H*z,I*z).floor()},this.setDrawingBufferSize=function(D,$,at){H=D,I=$,z=at,e.width=Math.floor(D*at),e.height=Math.floor($*at),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(g===_n){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(tt)},this.getViewport=function(D){return D.copy(et)},this.setViewport=function(D,$,at,st){D.isVector4?et.set(D.x,D.y,D.z,D.w):et.set(D,$,at,st),E.viewport(tt.copy(et).multiplyScalar(z).round())},this.getScissor=function(D){return D.copy(xt)},this.setScissor=function(D,$,at,st){D.isVector4?xt.set(D.x,D.y,D.z,D.w):xt.set(D,$,at,st),E.scissor(ut.copy(xt).multiplyScalar(z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(D){E.setScissorTest(yt=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){J=D},this.getClearColor=function(D){return D.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,at=!0){let st=0;if(D){let rt=!1;if(j!==null){const Dt=j.texture.format;rt=x.has(Dt)}if(rt){const Dt=j.texture.type,Ft=m.has(Dt),It=re.getClearColor(),Ot=re.getClearAlpha(),Xt=It.r,le=It.g,fe=It.b;Ft?(M[0]=Xt,M[1]=le,M[2]=fe,M[3]=Ot,Y.clearBufferuiv(Y.COLOR,0,M)):(w[0]=Xt,w[1]=le,w[2]=fe,w[3]=Ot,Y.clearBufferiv(Y.COLOR,0,w))}else st|=Y.COLOR_BUFFER_BIT}$&&(st|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(st|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&Y.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),P=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),re.dispose(),Pt.dispose(),Tt.dispose(),nt.dispose(),St.dispose(),gt.dispose(),Nt.dispose(),vt.dispose(),Et.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",lu),Gt.removeEventListener("sessionend",cu),fs.stop()};function Pe(D){D.preventDefault(),Pa("WebGLRenderer: Context Lost."),C=!0}function Me(){Pa("WebGLRenderer: Context Restored."),C=!1;const D=Z.autoReset,$=Qt.enabled,at=Qt.autoUpdate,st=Qt.needsUpdate,rt=Qt.type;Kt(),Z.autoReset=D,Qt.enabled=$,Qt.autoUpdate=at,Qt.needsUpdate=st,Qt.type=rt}function Bn(D){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Jn(D){const $=D.target;$.removeEventListener("dispose",Jn),m0($)}function m0(D){g0(D),nt.remove(D)}function g0(D){const $=nt.get(D).programs;$!==void 0&&($.forEach(function(at){Et.releaseProgram(at)}),D.isShaderMaterial&&Et.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,at,st,rt,Dt){$===null&&($=kt);const Ft=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,It=M0(D,$,at,st,rt);E.setMaterial(st,Ft);let Ot=at.index,Xt=1;if(st.wireframe===!0){if(Ot=ht.getWireframeAttribute(at),Ot===void 0)return;Xt=2}const le=at.drawRange,fe=at.attributes.position;let Bt=le.start*Xt,_e=(le.start+le.count)*Xt;Dt!==null&&(Bt=Math.max(Bt,Dt.start*Xt),_e=Math.min(_e,(Dt.start+Dt.count)*Xt)),Ot!==null?(Bt=Math.max(Bt,0),_e=Math.min(_e,Ot.count)):fe!=null&&(Bt=Math.max(Bt,0),_e=Math.min(_e,fe.count));const Ve=_e-Bt;if(Ve<0||Ve===1/0)return;Nt.setup(rt,st,It,at,Ot);let Ie,Ce=At;if(Ot!==null&&(Ie=bt.get(Ot),Ce=mt,Ce.setIndex(Ie)),rt.isMesh)st.wireframe===!0?(E.setLineWidth(st.wireframeLinewidth*te()),Ce.setMode(Y.LINES)):Ce.setMode(Y.TRIANGLES);else if(rt.isLine){let sn=st.linewidth;sn===void 0&&(sn=1),E.setLineWidth(sn*te()),rt.isLineSegments?Ce.setMode(Y.LINES):rt.isLineLoop?Ce.setMode(Y.LINE_LOOP):Ce.setMode(Y.LINE_STRIP)}else rt.isPoints?Ce.setMode(Y.POINTS):rt.isSprite&&Ce.setMode(Y.TRIANGLES);if(rt.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Ce.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const sn=rt._multiDrawStarts,zt=rt._multiDrawCounts,ln=rt._multiDrawCount,ve=Ot?bt.get(Ot).bytesPerElement:1,Ln=nt.get(st).currentProgram.getUniforms();for(let Qn=0;Qn<ln;Qn++)Ln.setValue(Y,"_gl_DrawID",Qn),Ce.render(sn[Qn]/ve,zt[Qn])}else if(rt.isInstancedMesh)Ce.renderInstances(Bt,Ve,rt.count);else if(at.isInstancedBufferGeometry){const sn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,zt=Math.min(at.instanceCount,sn);Ce.renderInstances(Bt,Ve,zt)}else Ce.render(Bt,Ve)};function au(D,$,at,st){P!==null&&D.isNodeMaterial&&P.setObject(st,D),ft===!0&&Yt.setState(D,at,!1),D.transparent===!0&&D.side===Yn&&D.forceSinglePass===!1?(D.side=yn,D.needsUpdate=!0,Ao(D,$,st),D.side=bs,D.needsUpdate=!0,Ao(D,$,st),D.side=Yn):Ao(D,$,st)}this.compile=function(D,$,at=null){at===null&&(at=D),P!==null&&P.renderStart(D,$,at),S=Tt.get(at),S.init($),_.push(S),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test($.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),D!==at&&D.traverseVisible(function(rt){rt.isLight&&rt.layers.test($.layers)&&(S.pushLight(rt),rt.castShadow&&S.pushShadow(rt))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),dt=this.localClippingEnabled,ft=Yt.init(this.clippingPlanes,dt),ft===!0&&Yt.setGlobalState(this.clippingPlanes,$),P!==null&&Qt.render(S.state.shadowsArray,at,$);const st=new Set;return D.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Dt=rt.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const It=Dt[Ft];au(It,at,$,rt),st.add(It)}else au(Dt,at,$,rt),st.add(Dt)}),S=_.pop(),P!==null&&P.renderEnd(),st},this.compileAsync=function(D,$,at=null){const st=this.compile(D,$,at);return new Promise(rt=>{function Dt(){if(st.forEach(function(Ft){const Ot=nt.get(Ft).currentProgram;(Ot===void 0||Ot.isReady())&&st.delete(Ft)}),st.size===0){rt(D);return}setTimeout(Dt,10)}ct.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let pl=null;function x0(D){pl&&pl(D)}function lu(){fs.stop()}function cu(){fs.start()}const fs=new bp;fs.setAnimationLoop(x0),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(D){pl=D,Gt.setAnimationLoop(D),D===null?fs.stop():fs.start()},Gt.addEventListener("sessionstart",lu),Gt.addEventListener("sessionend",cu),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(D,$);const at=Gt.enabled===!0&&Gt.isPresenting===!0,st=b!==null&&(j===null||at)&&b.begin(A,j);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera($),$=Gt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,$,j),S=Tt.get(D,_.length),S.init($),S.state.textureUnits=lt.getTextureUnits(),_.push(S),Mt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ot.setFromProjectionMatrix(Mt,li,$.reversedDepth),dt=this.localClippingEnabled,ft=Yt.init(this.clippingPlanes,dt),y=Pt.get(D,T.length),y.init(),T.push(y),Gt.enabled===!0&&Gt.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&ml(Ft,$,-1/0,A.sortObjects)}ml(D,$,0,A.sortObjects),y.finish(),P!==null&&P.updateLights(S.state.lightsArray),A.sortObjects===!0&&y.sort(W,J),$t=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,$t&&re.addToRenderList(y,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&Yt.beginShadows();const rt=S.state.shadowsArray;if(Qt.render(rt,D,$),ft===!0&&Yt.endShadows(),(st&&b.hasRenderPass())===!1){const Ft=y.opaque,It=y.transmissive;if(S.setupLights(),$.isArrayCamera){const Ot=$.cameras;if(It.length>0)for(let Xt=0,le=Ot.length;Xt<le;Xt++){const fe=Ot[Xt];uu(Ft,It,D,fe)}$t&&re.render(D);for(let Xt=0,le=Ot.length;Xt<le;Xt++){const fe=Ot[Xt];hu(y,D,fe,fe.viewport)}}else It.length>0&&uu(Ft,It,D,$),$t&&re.render(D),hu(y,D,$)}j!==null&&X===0&&(lt.updateMultisampleRenderTarget(j),lt.updateRenderTargetMipmap(j)),st&&b.end(A),D.isScene===!0&&D.onAfterRender(A,D,$),Nt.resetDefaultState(),G=-1,K=null,_.pop(),_.length>0?(S=_[_.length-1],lt.setTextureUnits(S.state.textureUnits),ft===!0&&Yt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?y=T[T.length-1]:y=null,P!==null&&P.renderEnd()};function ml(D,$,at,st){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)at=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLightProbeGrid)S.pushLightProbeGrid(D);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(ot)){st&&Vt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Mt);const Ft=gt.update(D),It=D.material;It.visible&&y.push(D,Ft,It,at,Vt.z,null,$)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(ot))){const Ft=gt.update(D),It=D.material;if(st&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Vt.copy(D.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Vt.copy(Ft.boundingSphere.center)),Vt.applyMatrix4(D.matrixWorld).applyMatrix4(Mt)),Array.isArray(It)){const Ot=Ft.groups;for(let Xt=0,le=Ot.length;Xt<le;Xt++){const fe=Ot[Xt],Bt=It[fe.materialIndex];Bt&&Bt.visible&&y.push(D,Ft,Bt,at,Vt.z,fe,$)}}else It.visible&&y.push(D,Ft,It,at,Vt.z,null,$)}}const Dt=D.children;for(let Ft=0,It=Dt.length;Ft<It;Ft++)ml(Dt[Ft],$,at,st)}function hu(D,$,at,st){const{opaque:rt,transmissive:Dt,transparent:Ft}=D;S.setupLightsView(at),ft===!0&&Yt.setGlobalState(A.clippingPlanes,at),st&&E.viewport(tt.copy(st)),rt.length>0&&To(rt,$,at),Dt.length>0&&To(Dt,$,at),Ft.length>0&&To(Ft,$,at),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function uu(D,$,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[st.id]===void 0){const Bt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[st.id]=new Rn(1,1,{generateMipmaps:!0,type:Bt?Cn:_n,minFilter:is,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Dt=S.state.transmissionRenderTarget[st.id],Ft=st.viewport||tt;Dt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const It=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Dt),A.getClearColor(k),O=A.getClearAlpha(),O<1&&A.setClearColor(16777215,.5),A.clear(),$t&&re.render(at);const le=A.toneMapping;A.toneMapping=hi;const fe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),ft===!0&&Yt.setGlobalState(A.clippingPlanes,st),To(D,at,st),lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let _e=0,Ve=$.length;_e<Ve;_e++){const Ie=$[_e],{object:Ce,geometry:sn,material:zt,group:ln}=Ie;if(zt.side===Yn&&Ce.layers.test(st.layers)){const ve=zt.side;zt.side=yn,zt.needsUpdate=!0,fu(Ce,at,st,sn,zt,ln),zt.side=ve,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt))}A.setRenderTarget(It,Ot,Xt),A.setClearColor(k,O),fe!==void 0&&(st.viewport=fe),A.toneMapping=le}function To(D,$,at){const st=$.isScene===!0?$.overrideMaterial:null;for(let rt=0,Dt=D.length;rt<Dt;rt++){const Ft=D[rt],{object:It,geometry:Ot,group:Xt}=Ft;let le=Ft.material;le.allowOverride===!0&&st!==null&&(le=st),It.layers.test(at.layers)&&fu(It,$,at,Ot,le,Xt)}}function fu(D,$,at,st,rt,Dt){P!==null&&rt.isNodeMaterial&&P.setObject(D,rt),D.onBeforeRender(A,$,at,st,rt,Dt),D.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),rt.onBeforeRender(A,$,at,st,D,Dt),rt.transparent===!0&&rt.side===Yn&&rt.forceSinglePass===!1?(rt.side=yn,rt.needsUpdate=!0,A.renderBufferDirect(at,$,st,rt,D,Dt),rt.side=bs,rt.needsUpdate=!0,A.renderBufferDirect(at,$,st,rt,D,Dt),rt.side=Yn):A.renderBufferDirect(at,$,st,rt,D,Dt),D.onAfterRender(A,$,at,st,rt,Dt)}function Ao(D,$,at){$.isScene!==!0&&($=kt);const st=nt.get(D),rt=S.state.lights,Dt=S.state.shadowsArray,Ft=rt.state.version,It=Et.getParameters(D,rt.state,Dt,$,at,S.state.lightProbeGridArray),Ot=Et.getProgramCacheKey(It);let Xt=st.programs;st.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,st.fog=$.fog;const le=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;st.envMap=St.get(D.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,Xt===void 0&&(D.addEventListener("dispose",Jn),Xt=new Map,st.programs=Xt);let fe=Xt.get(Ot);if(fe!==void 0){if(st.currentProgram===fe&&st.lightsStateVersion===Ft)return pu(D,It),fe}else It.uniforms=Et.getUniforms(D),P!==null&&D.isNodeMaterial&&P.build(D,at,It),D.onBeforeCompile(It,A),fe=Et.acquireProgram(It,Ot),Xt.set(Ot,fe),st.uniforms=It.uniforms;const Bt=st.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Bt.clippingPlanes=Yt.uniform),pu(D,It),st.needsLights=y0(D),st.lightsStateVersion=Ft,st.needsLights&&(Bt.ambientLightColor.value=rt.state.ambient,Bt.lightProbe.value=rt.state.probe,Bt.sunLights.value=rt.state.sun,Bt.sunLightShadows.value=rt.state.sunShadow,Bt.directionalLights.value=rt.state.directional,Bt.directionalLightShadows.value=rt.state.directionalShadow,Bt.spotLights.value=rt.state.spot,Bt.spotLightShadows.value=rt.state.spotShadow,Bt.rectAreaLights.value=rt.state.rectArea,Bt.ltc_1.value=rt.state.rectAreaLTC1,Bt.ltc_2.value=rt.state.rectAreaLTC2,Bt.pointLights.value=rt.state.point,Bt.pointLightShadows.value=rt.state.pointShadow,Bt.hemisphereLights.value=rt.state.hemi,Bt.sunShadowMatrix.value=rt.state.sunShadowMatrix,Bt.sunShadowCascade.value=rt.state.sunShadowCascade,Bt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,Bt.spotLightMatrix.value=rt.state.spotLightMatrix,Bt.spotLightMap.value=rt.state.spotLightMap,Bt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=S.state.lightProbeGridArray.length>0,st.currentProgram=fe,st.uniformsList=null,fe}function du(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=_a.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function pu(D,$){const at=nt.get(D);at.outputColorSpace=$.outputColorSpace,at.batching=$.batching,at.batchingColor=$.batchingColor,at.instancing=$.instancing,at.instancingColor=$.instancingColor,at.instancingMorph=$.instancingMorph,at.skinning=$.skinning,at.morphTargets=$.morphTargets,at.morphNormals=$.morphNormals,at.morphColors=$.morphColors,at.morphTargetsCount=$.morphTargetsCount,at.numClippingPlanes=$.numClippingPlanes,at.numIntersection=$.numClipIntersection,at.vertexAlphas=$.vertexAlphas,at.vertexTangents=$.vertexTangents,at.toneMapping=$.toneMapping}function v0(D,$){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let at=0,st=D.length;at<st;at++){const rt=D[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(v))return rt}return null}function M0(D,$,at,st,rt){$.isScene!==!0&&($=kt),lt.resetTextureUnits();const Dt=$.fog,Ft=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?$.environment:null,It=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:xe.workingColorSpace,Ot=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Xt=St.get(st.envMap||Ft,Ot),le=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,fe=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Bt=!!at.morphAttributes.position,_e=!!at.morphAttributes.normal,Ve=!!at.morphAttributes.color;let Ie=hi;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=A.toneMapping);const Ce=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,sn=Ce!==void 0?Ce.length:0,zt=nt.get(st),ln=S.state.lights;if(ft===!0&&(dt===!0||D!==K)){const Le=D===K&&st.id===G;Yt.setState(st,D,Le)}let ve=!1;st.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ln.state.version||zt.outputColorSpace!==It||rt.isBatchedMesh&&zt.batching===!1||!rt.isBatchedMesh&&zt.batching===!0||rt.isBatchedMesh&&zt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&zt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&zt.instancing===!1||!rt.isInstancedMesh&&zt.instancing===!0||rt.isSkinnedMesh&&zt.skinning===!1||!rt.isSkinnedMesh&&zt.skinning===!0||rt.isInstancedMesh&&zt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&zt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&zt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&zt.instancingMorph===!1&&rt.morphTexture!==null||zt.envMap!==Xt||st.fog===!0&&zt.fog!==Dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Yt.numPlanes||zt.numIntersection!==Yt.numIntersection)||zt.vertexAlphas!==le||zt.vertexTangents!==fe||zt.morphTargets!==Bt||zt.morphNormals!==_e||zt.morphColors!==Ve||zt.toneMapping!==Ie||zt.morphTargetsCount!==sn||!!zt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,zt.__version=st.version);let Ln=zt.currentProgram;ve===!0&&(Ln=Ao(st,$,rt),P&&st.isNodeMaterial&&P.onUpdateProgram(st,Ln,zt));let Qn=!1,ki=!1,Ls=!1;const Ee=Ln.getUniforms(),Oe=zt.uniforms;if(E.useProgram(Ln.program)&&(Qn=!0,ki=!0,Ls=!0),st.id!==G&&(G=st.id,ki=!0),zt.needsLights){const Le=v0(S.state.lightProbeGridArray,rt);zt.lightProbeGrid!==Le&&(zt.lightProbeGrid=Le,ki=!0)}if(Qn||K!==D){E.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ee.setValue(Y,"projectionMatrix",D.projectionMatrix),Ee.setValue(Y,"viewMatrix",D.matrixWorldInverse);const Bi=Ee.map.cameraPosition;Bi!==void 0&&Bi.setValue(Y,_t.setFromMatrixPosition(D.matrixWorld)),N.logarithmicDepthBuffer&&Ee.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ee.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),K!==D&&(K=D,ki=!0,Ls=!0)}if(zt.needsLights&&(ln.state.sunShadowMap.length>0&&Ee.setValue(Y,"sunShadowMap",ln.state.sunShadowMap,lt),ln.state.directionalShadowMap.length>0&&Ee.setValue(Y,"directionalShadowMap",ln.state.directionalShadowMap,lt),ln.state.spotShadowMap.length>0&&Ee.setValue(Y,"spotShadowMap",ln.state.spotShadowMap,lt),ln.state.pointShadowMap.length>0&&Ee.setValue(Y,"pointShadowMap",ln.state.pointShadowMap,lt)),rt.isSkinnedMesh){Ee.setOptional(Y,rt,"bindMatrix"),Ee.setOptional(Y,rt,"bindMatrixInverse");const Le=rt.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ee.setValue(Y,"boneTexture",Le.boneTexture,lt))}rt.isBatchedMesh&&(Ee.setOptional(Y,rt,"batchingTexture"),Ee.setValue(Y,"batchingTexture",rt._matricesTexture,lt),Ee.setOptional(Y,rt,"batchingIdTexture"),Ee.setValue(Y,"batchingIdTexture",rt._indirectTexture,lt),Ee.setOptional(Y,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Ee.setValue(Y,"batchingColorTexture",rt._colorsTexture,lt));const Oi=at.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Q.update(rt,at,Ln),(ki||zt.receiveShadow!==rt.receiveShadow)&&(zt.receiveShadow=rt.receiveShadow,Ee.setValue(Y,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&$.environment!==null&&(Oe.envMapIntensity.value=$.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=W_()),ki){if(Ee.setValue(Y,"toneMappingExposure",A.toneMappingExposure),zt.needsLights&&_0(Oe,Ls),Dt&&st.fog===!0&&qt.refreshFogUniforms(Oe,Dt),qt.refreshMaterialUniforms(Oe,st,z,I,S.state.transmissionRenderTarget[D.id]),zt.needsLights&&zt.lightProbeGrid){const Le=zt.lightProbeGrid;Oe.probesSH.value=Le.texture,Oe.probesMin.value.copy(Le.boundingBox.min),Oe.probesMax.value.copy(Le.boundingBox.max),Oe.probesResolution.value.copy(Le.resolution)}_a.upload(Y,du(zt),Oe,lt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(_a.upload(Y,du(zt),Oe,lt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ee.setValue(Y,"center",rt.center),Ee.setValue(Y,"modelViewMatrix",rt.modelViewMatrix),Ee.setValue(Y,"normalMatrix",rt.normalMatrix),Ee.setValue(Y,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){const Le=st.uniformsGroups;for(let Bi=0,Is=Le.length;Bi<Is;Bi++){const gu=Le[Bi];vt.update(gu,Ln),vt.bind(gu,Ln)}}return Ln}function _0(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.sunLights.needsUpdate=$,D.sunLightShadows.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function y0(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(D,$,at){const st=nt.get(D);st.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),nt.get(D.texture).__webglTexture=$,nt.get(D.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const at=nt.get(D);at.__webglFramebuffer=$,at.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,at=0){j=D,q=$,X=at;let st=null,rt=!1,Dt=!1;if(D){const It=nt.get(D);if(It.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,It.__webglFramebuffer),tt.copy(D.viewport),ut.copy(D.scissor),B=D.scissorTest,E.viewport(tt),E.scissor(ut),E.setScissorTest(B),G=-1;return}else if(It.__webglFramebuffer===void 0)lt.setupRenderTarget(D);else if(It.__hasExternalTextures)lt.rebindTextures(D,nt.get(D.texture).__webglTexture,nt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const le=D.depthTexture;if(It.__boundDepthTexture!==le){if(le!==null&&nt.has(le)&&(D.width!==le.image.width||D.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(D)}}const Ot=D.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Dt=!0);const Xt=nt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Xt[$])?st=Xt[$][at]:st=Xt[$],rt=!0):D.samples>0&&lt.useMultisampledRTT(D)===!1?st=nt.get(D).__webglMultisampledFramebuffer:Array.isArray(Xt)?st=Xt[at]:st=Xt,tt.copy(D.viewport),ut.copy(D.scissor),B=D.scissorTest}else tt.copy(et).multiplyScalar(z).floor(),ut.copy(xt).multiplyScalar(z).floor(),B=yt;if(at!==0&&(st=U),E.bindFramebuffer(Y.FRAMEBUFFER,st)&&E.drawBuffers(D,st),E.viewport(tt),E.scissor(ut),E.setScissorTest(B),rt){const It=nt.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,It.__webglTexture,at)}else if(Dt){const It=$;for(let Ot=0;Ot<D.textures.length;Ot++){const Xt=nt.get(D.textures[Ot]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ot,Xt.__webglTexture,at,It)}}else if(D!==null&&at!==0){const It=nt.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,It.__webglTexture,at)}G=-1};function mu(D){const $=nt.get(D);return($.__readFormat!==D.format||$.__readType!==D.type)&&($.__readFormat=D.format,$.__readType=D.type,$.__formatReadable=N.textureFormatReadable(D.format),$.__typeReadable=N.textureTypeReadable(D.type)),$}this.readRenderTargetPixels=function(D,$,at,st,rt,Dt,Ft,It=0){if(!(D&&D.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){E.bindFramebuffer(Y.FRAMEBUFFER,Ot);try{const Xt=D.textures[It],le=Xt.format,fe=Xt.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+It);const Bt=mu(Xt);if(Bt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-st&&at>=0&&at<=D.height-rt&&Y.readPixels($,at,st,rt,Rt.convert(le),Rt.convert(fe),Dt)}finally{const Xt=j!==null?nt.get(j).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(D,$,at,st,rt,Dt,Ft,It=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if($>=0&&$<=D.width-st&&at>=0&&at<=D.height-rt){E.bindFramebuffer(Y.FRAMEBUFFER,Ot);const Xt=D.textures[It],le=Xt.format,fe=Xt.type;D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+It);const Bt=mu(Xt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_e),Y.bufferData(Y.PIXEL_PACK_BUFFER,Dt.byteLength,Y.STREAM_READ),Y.readPixels($,at,st,rt,Rt.convert(le),Rt.convert(fe),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const Ve=j!==null?nt.get(j).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Ve);const Ie=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await cm(Y,Ie,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_e),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Dt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(_e),Y.deleteSync(Ie),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,at=0){const st=Math.pow(2,-at),rt=Math.floor(D.image.width*st),Dt=Math.floor(D.image.height*st),Ft=$!==null?$.x:0,It=$!==null?$.y:0;lt.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,at,0,0,Ft,It,rt,Dt),E.unbindTexture()},this.copyTextureToTexture=function(D,$,at=null,st=null,rt=0,Dt=0){let Ft,It,Ot,Xt,le,fe,Bt,_e,Ve;const Ie=D.isCompressedTexture?D.mipmaps[Dt]:D.image;if(at!==null)Ft=at.max.x-at.min.x,It=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,le=at.min.y,fe=at.isBox3?at.min.z:0;else{const Oe=Math.pow(2,-rt);Ft=Math.floor(Ie.width*Oe),It=Math.floor(Ie.height*Oe),D.isDataArrayTexture?Ot=Ie.depth:D.isData3DTexture?Ot=Math.floor(Ie.depth*Oe):Ot=1,Xt=0,le=0,fe=0}st!==null?(Bt=st.x,_e=st.y,Ve=st.z):(Bt=0,_e=0,Ve=0);const Ce=Rt.convert($.format),sn=Rt.convert($.type);let zt;$.isData3DTexture?(lt.setTexture3D($,0),zt=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(lt.setTexture2DArray($,0),zt=Y.TEXTURE_2D_ARRAY):(lt.setTexture2D($,0),zt=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const ln=E.getParameter(Y.UNPACK_ROW_LENGTH),ve=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(Y.UNPACK_SKIP_PIXELS),Qn=E.getParameter(Y.UNPACK_SKIP_ROWS),ki=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Ie.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ie.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(Y.UNPACK_SKIP_ROWS,le),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,fe);const Ls=D.isDataArrayTexture||D.isData3DTexture,Ee=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Oe=nt.get(D),Oi=nt.get($),Le=nt.get(Oe.__renderTarget),Bi=nt.get(Oi.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Le.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Is=0;Is<Ot;Is++)Ls&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nt.get(D).__webglTexture,rt,fe+Is),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nt.get($).__webglTexture,Dt,Ve+Is)),Y.blitFramebuffer(Xt,le,Ft,It,Bt,_e,Ft,It,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(rt!==0||D.isRenderTargetTexture||nt.has(D)){const Oe=nt.get(D),Oi=nt.get($);E.bindFramebuffer(Y.READ_FRAMEBUFFER,F),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,V);for(let Le=0;Le<Ot;Le++)Ls?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oe.__webglTexture,rt,fe+Le):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,rt),Ee?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oi.__webglTexture,Dt,Ve+Le):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oi.__webglTexture,Dt),rt!==0?Y.blitFramebuffer(Xt,le,Ft,It,Bt,_e,Ft,It,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ee?Y.copyTexSubImage3D(zt,Dt,Bt,_e,Ve+Le,Xt,le,Ft,It):Y.copyTexSubImage2D(zt,Dt,Bt,_e,Xt,le,Ft,It);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ee?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(zt,Dt,Bt,_e,Ve,Ft,It,Ot,Ce,sn,Ie.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(zt,Dt,Bt,_e,Ve,Ft,It,Ot,Ce,Ie.data):Y.texSubImage3D(zt,Dt,Bt,_e,Ve,Ft,It,Ot,Ce,sn,Ie):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Dt,Bt,_e,Ft,It,Ce,sn,Ie.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Dt,Bt,_e,Ie.width,Ie.height,Ce,Ie.data):Y.texSubImage2D(Y.TEXTURE_2D,Dt,Bt,_e,Ft,It,Ce,sn,Ie);E.pixelStorei(Y.UNPACK_ROW_LENGTH,ln),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ve),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Qn),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,ki),Dt===0&&$.generateMipmaps&&Y.generateMipmap(zt),E.unbindTexture()},this.initRenderTarget=function(D){nt.get(D).__webglFramebuffer===void 0&&lt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?lt.setTextureCube(D,0):D.isData3DTexture?lt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?lt.setTexture2DArray(D,0):lt.setTexture2D(D,0),E.unbindTexture()},this.resetState=function(){q=0,X=0,j=null,E.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}const Lp="#f7f7f7",pn=.0254,Bh={canvas:.038,panel:.022,paper:.012,digital:.012},Fa={face:.75*pn,depth:1.5*pn,mat:3*pn,lip:.25*pn,bevel:.125*pn},q_={black:"#161616",white:"#efeee9"},Y_={white:"#f4f2ec",black:"#1c1c1c"},$_="#faf9f4",ka={strip:.25*pn,depth:2*pn,gap:.25*pn,below:.25*pn},K_="#e3cba2",Z_="#111111";function Hh(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const Vh=s=>!!s&&s.style==="float";function J_(s){const t=Hh(s),e=t?Vh(t)?2*(ka.gap+ka.strip):2*(Fa.mat+Fa.face):0;return[s.w*pn+e,s.h*pn+e]}const Q_=s=>{const t=Hh(s);return t?Vh(t)?ka.depth:Fa.depth:Bh[s.kind]};async function j_(){const s={},t=async o=>{const a=await fetch(`data/${o}.json?${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`data/${o}.json: ${a.status}`);return s[o]=a.headers.get("x-rev")??"",a.json()},[e,n,i,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("albums").catch(()=>[])]);return n.pieces??(n.pieces=[]),{catalogue:e,layout:n,images:i,albums:Array.isArray(r)?r:[],revs:s}}const ty=(s,t)=>`${s}:${t}`,jl=(s,t,e)=>s.paint[ty(t,e)]??s.defaultPaint;function Oa(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const Ba=s=>s.title.trim()||"Untitled",Lf=.004;function ey(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const ny=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,If=(s,t,e,n)=>s.some(i=>i.id!==n&&ny(i.rect,t,e));function Df(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,l]of n){if(r<=a||i>=l){o.push([a,l]);continue}i>a&&o.push([a,i]),r<l&&o.push([r,l])}n=o}return n.filter(([i,r])=>r-i>.05)}function iy(s){var d;const t=ey(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=p=>{const g=s.doors.filter(x=>x.wall===p).map(x=>[Math.min(x.a,x.b),Math.max(x.a,x.b)]);return p==="S"&&g.push([o.a,o.b]),g},l=[],c=[];for(const p of t){for(const x of p.sides){const m=p.rect,M=p.axis==="x"?x>0?m.z1:m.z0:x>0?m.x1:m.x0,w=p.axis==="x"?[0,x]:[x,0],v=[w[1],-w[0]],y=[];for(const b of t){if(b===p)continue;const A=b.rect,C=p.axis==="x"?A.z0:A.x0,P=p.axis==="x"?A.z1:A.x1;if(!(x>0?C<=M+Lf&&P>=M+.01:P>=M-Lf&&C<=M-.01))continue;const F=p.axis==="x"?A.x0:A.z0,V=p.axis==="x"?A.x1:A.z1;y.push([F,V])}const S=p.outer?p.a0:Math.max(p.a0,p.axis==="x"?n.x0:n.z0),T=p.outer?p.a1:Math.min(p.a1,p.axis==="x"?n.x1:n.z1),_=a(p.id);for(const[b,A]of Df(S,T,y)){const C=P=>{const U=p.axis==="x"?P:M+w[0]*.02,F=p.axis==="x"?M+w[1]*.02:P;return If(t,U,F,p.id)};l.push({key:`${p.id}:${x}:${b.toFixed(3)}`,wall:p.id,side:x,axis:p.axis,plane:M,u0:b,u1:A,n:w,right:v,cornerA:C(b-.02),cornerB:C(A+.02),freeA:!p.outer&&!C(b-.02)&&Math.abs(b-p.a0)<1e-6,freeB:!p.outer&&!C(A+.02)&&Math.abs(A-p.a1)<1e-6,outer:p.outer,t:p.t,doors:_.map(([P,U])=>[Math.max(P,b),Math.min(U,A)]).filter(([P,U])=>U-P>.01),color:((d=(s.paintAt??[]).find(P=>P.wall===p.id&&P.side===x&&P.u>=b-1e-6&&P.u<=A+1e-6))==null?void 0:d.color)??jl(s,p.id,x)})}}if(p.outer)continue;const g=jl(s,p.id,1);for(const x of[p.a0,p.a1]){const m=x===p.a0?-1:1,M=p.axis==="x"?x+m*.02:(p.rect.x0+p.rect.x1)/2,w=p.axis==="x"?(p.rect.z0+p.rect.z1)/2:x+m*.02;If(t,M,w,p.id)||(p.axis==="x"?c.push(qi(x,p.rect.z0,x,p.rect.z1,[m,0,0],i,g)):c.push(qi(p.rect.x0,x,p.rect.x1,x,[0,0,m],i,g)))}for(const[x,m]of a(p.id)){const M=p.rect;p.axis==="x"?(c.push(qi(x,M.z0,x,M.z1,[1,0,0],r,g)),c.push(qi(m,M.z0,m,M.z1,[-1,0,0],r,g)),c.push(tc(x,m,M.z0,M.z1,"x",r,g))):(c.push(qi(M.x0,x,M.x1,x,[0,0,1],r,g)),c.push(qi(M.x0,m,M.x1,m,[0,0,-1],r,g)),c.push(tc(x,m,M.x0,M.x1,"z",r,g)))}}const h=.04,u=jl(s,"S",-1);c.push(qi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),c.push(qi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),c.push(tc(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const p of t){const g=p.rect,x=p.axis==="x"?[g.x0,g.x1]:[g.z0,g.z1];for(const[m,M]of Df(x[0],x[1],a(p.id)))f.push(p.axis==="x"?{x0:m,x1:M,z0:g.z0,z1:g.z1}:{x0:g.x0,x1:g.x1,z0:m,z1:M})}return{inner:n,H:i,doorH:r,walls:t,faces:l,extra:c,solids:f,entrance:o,ceilColor:s.ceilingPaint??Lp,ceilAt:s.ceilingAt??[]}}function qi(s,t,e,n,i,r,o){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function tc(s,t,e,n,i,r,o){const a=(c,h)=>i==="x"?[c,r,h]:[h,r,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const os=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],Gh=s=>s.axis==="x"?s.right[0]:s.right[1];function Rs(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const p=d/f;if(f<0){if(p>h)return!1;p>c&&(c=p)}else{if(p<c)return!1;p<h&&(h=p)}return!0};if(u(-o,t-l.x0)&&u(o,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>r&&c<1-r)return!0}return!1}function sy(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),p=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let g=d;g<=p;g++)for(let x=u;x<=f;x++)o[g*n+x]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(o[c]===-2){for(o[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,l.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,l.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,l.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function ry(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function oy(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=ry(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const ar=.125,ao=.086,Nf=.12,Ha=1e3,Va='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',lo=140,Ga=62,Ip=46;let Fr=null;function ay(s){Fr??(Fr=document.createElement("canvas").getContext("2d")),Fr.font=`300 ${lo}px ${Va}`;const t=Fr.measureText(s.title).width;Fr.font=`400 ${Ga}px ${Va}`;const e=s.sub?Fr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Ha,h:(lo+(s.sub?Ip+Ga:0)+30)/Ha}}const sh=.03,ly=.35,Uf=1.1;function cy(s,t){if(s.text){const n=ay(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?J_(e):[.3,.3]}function hy(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function uy(s,t,e,n,i,r){const o=s.u0+i/2+sh,a=s.u1-i/2-sh,l=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),c=r/2+.05,h=t-.12-r/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function fy(s,t,e,n,i){const r=Gh(s),o=t*r,a=r>0?s.u1:-s.u0;let l=o+n/2+Nf+ar/2;l+ar/2>a-sh&&(l=o-n/2-Nf-ar/2);const c=Math.max(.2+ao/2,e-i/2+ao/2);return{pos:os(s,l*r,c),w:ar,h:ao}}function dy(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=hy(t,l);if(!c){n.push(l);continue}const[h,u]=cy(l,e),f=uy(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);i.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:os(c,f.u,f.y),w:h,h:u,depth:d?Q_(d):.001,label:d?fy(c,f.u,f.y,h,u):null,over:!1})}const r=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)r(c)+c.w/2>h&&r(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const f=Math.abs(r(c)-r(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const o=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((g,x)=>x),u=g=>h[g]===g?g:h[g]=u(h[g]);for(let g=0;g<c.length;g++)for(let x=g+1;x<c.length;x++){const m=c[g],M=c[x];if(m.text||M.text)continue;const w=Math.abs(r(m)-r(M))-(m.w+M.w)/2,v=Math.abs(m.pos[1]-M.pos[1])-(m.h+M.h)/2;Math.max(w,v)<ly&&(h[u(g)]=u(x))}const f=new Map;c.forEach((g,x)=>{const m=u(x);f.has(m)||f.set(m,[]),f.get(m).push(g)});const d=[l.n[0],0,l.n[1]],p=[l.right[0],0,l.right[1]];for(const g of f.values()){const x=Math.min(...g.map(S=>r(S)-S.w/2)),m=Math.max(...g.map(S=>r(S)+S.w/2)),M=Math.min(...g.map(S=>S.pos[1]-S.h/2)),w=Math.max(...g.map(S=>S.pos[1]+S.h/2)),v=os(l,(x+m)/2,(M+w)/2),y={w:m-x,h:w-M};o.push({face:l,centre:v,normal:d,right:p,w:y.w,h:y.h,items:g,lamp:py(v,d,p,y,g,t)})}}return{placed:o,items:i,homeless:n}}function py(s,t,e,n,i,r){const o=r.H-.03;let a=Uf;for(let M=.2;M<=Uf+.25;M+=.05)if(Rs(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,w)=>M+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[M,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const g=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],m=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(g),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}const my=1.45,Dp=.07,Np=.07,Up=.125,gy=.086,zp=.12,xy=1.3,Fp=.16,zf=1e3,Ff='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',kf=140,Of=62,vy=46,My=1.6;let kr=null;function kp(s){kr??(kr=document.createElement("canvas").getContext("2d")),kr.font=`300 ${kf}px ${Ff}`;const t=kr.measureText(s.title).width;kr.font=`400 ${Of}px ${Ff}`;const e=s.sub?kr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/zf,h:(kf+(s.sub?vy+Of:0)+30)/zf,colW:[],colH:[]}}const _y=6400;function yy(s){return s.map(t=>({title:Ba(t),detail:[t.medium,Oa(t),t.year].filter(Boolean).join(", ")}))}const wy=s=>(150+yy(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/_y,Bf=.45,Hf=.25,ec=.4,Vf=.12,Gf=1.1,rh=s=>[s.w*pn,s.h*pn];function Op(s,t){const e=[],n=[];for(const o of s){const a=o.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>rh(l)[0]))),n.push(a.reduce((l,c)=>l+rh(c)[1],0)+Np*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Dp*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const Sy=s=>s.cols.reduce((t,e)=>t+e.length,0),by=s=>Sy(s)>1?Fp:Up,Ey=(s,t)=>s.text?kp(s.text).w:Op(s.cols,t).w+zp+by(s);function Ty(s){const t=[];let e=s.u0+(s.cornerA?Bf:Hf);const n=s.u1-(s.cornerB?Bf:Hf);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-ec-e>.3&&t.push([e,i-ec]),e=Math.max(e,r+ec);return n-e>.3&&t.push([e,n]),t}function Ay(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function Ry(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!o.cols.length))continue;const a=Ay(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=Ty(o);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([p,g],x)=>{const m=u.u<p?p-u.u:u.u>g?u.u-g:0;m<d&&(d=m,f=x)}),c[f].push(u)}const h=Gh(o);l.forEach(([u,f],d)=>{const p=c[d].sort((S,T)=>(S.u-T.u)*h);if(!p.length)return;const g=p.map(S=>Ey(S,e)),x=f-u,m=g.reduce((S,T)=>S+T,0);let M=(x-m)/(p.length+1);const w=M<Vf;w&&(M=Vf);const v=m+M*(p.length+1);let y=(h>0?u:-f)+(x-v)/2+M;p.forEach((S,T)=>{const _=S.text?kp(S.text):Op(S.cols,e),A=(y+_.w/2)*h;S.u=+A.toFixed(4),r.push(Cy(S,o,A,_,e,t,w)),y+=g[T]+M})})}return{placed:r,homeless:i}}function Cy(s,t,e,n,i,r,o){const a=Gh(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?My:my;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((w,v)=>{const y=n.colW[v],S=n.colH[v];let T=h+S/2;for(const _ of w){const b=i.get(_),[A,C]=rh(b),P=f+y/2;u.push({work:b,pos:os(t,e+P*a,T-C/2),w:A,h:C,depth:Bh[b.kind]}),T-=C+Np}f+=y+Dp});const d=s.cols.flat().map(w=>i.get(w)),p=d.length>1?Fp:Up,g=d.length>1?wy(d):gy,x=e+(n.w/2+zp+p/2)*a,m=Math.min(xy,h+n.h/2-g/2),M=os(t,e,h);return{def:s,face:t,centre:M,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:os(t,x,Math.max(m,.3+g/2)),w:p,h:g,works:d},lamp:Py(M,l,c,n,u,r),over:o,text:s.text}}function Py(s,t,e,n,i,r){const o=r.H-.03;let a=Gf;for(let M=.2;M<=Gf+.25;M+=.05)if(Rs(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,w)=>M+w.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let p=0;for(const[M,w]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+w*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);p=Math.max(p,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}p+=1.5*Math.PI/180;const g=p+6*Math.PI/180,x=[-u[0]/f,-u[1]/f,-u[2]/f],m=x[0]*t[0]+x[2]*t[2];return{p:l,d,cOuter:Math.cos(g),cInner:Math.cos(p),i:f*f/Math.max(.2,m)}}function Ly(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=Ry(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const l of o.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:r(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const Iy=["b","c","s","t","sh","hl"],Bp=s=>!s||Iy.every(t=>!s[t]);function Hp(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const Wf=s=>Math.min(1,Math.max(0,s));function Dy(s,t){let e=Math.pow(s,t.gamma);e=Wf(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return Wf(e+t.sh*.25*n+t.hl*.25*i)}const Ny=`
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
  }`;function Uy(s){const t=Hp(s);return{uAdj:{value:Bp(s)?0:1},uWarm:{value:new L(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let Yi=null;const Xf="http://www.w3.org/2000/svg";function zy(s,t){if(Bp(t))return"";Yi||(Yi=document.createElementNS(Xf,"svg"),Yi.setAttribute("width","0"),Yi.setAttribute("height","0"),Yi.style.position="absolute",document.body.append(Yi));const e=`adj-${s}`;let n=Yi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(Xf,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),Yi.append(n));const i=Hp(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,f)=>Dy(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const ei=4,ul=6,Dn=1024,Fy=.035,to=8;class ky{constructor(){R(this,"rt",new Rn(Dn*2,Dn*2,{depthBuffer:!0,magFilter:Xe,minFilter:Xe,generateMipmaps:!1}));R(this,"depth",new _p({depthPacking:Q0,side:Yn}));R(this,"cam",new je(60,1,.3,8));R(this,"uniforms",{uFLN:{value:0},uFLP:{value:Array.from({length:ei},()=>new L)},uFLD:{value:Array.from({length:ei},()=>new L(0,-1,0))},uFLC:{value:Array.from({length:ei},()=>new pt(1,1))},uFLI:{value:new Array(ei).fill(0)},uFSM:{value:Array.from({length:ei},()=>new Jt)},uFTile:{value:Array.from({length:ei},()=>new Se)},uFCam:{value:Array.from({length:ei},()=>new Se)},uFAtlas:{value:this.rt.texture},uFAN:{value:0},uFA:{value:Array.from({length:to},()=>new Se)},uFAS:{value:Array.from({length:to},()=>new L)}})}setLamps(t,e){const n=this.uniforms;n.uFLN.value=Math.min(ei,t.length),t.slice(0,ei).forEach((i,r)=>{n.uFLP.value[r].set(...i.p),n.uFLD.value[r].set(...i.d),n.uFLC.value[r].set(i.cOuter,i.cInner),n.uFLI.value[r]=i.i}),n.uFAN.value=Math.min(to,e.length),e.slice(0,to).forEach((i,r)=>{const o=De.degToRad(i.rot);n.uFA.value[r].set(i.x,i.z,Math.cos(o),Math.sin(o)),n.uFAS.value[r].set(i.hw,i.hd,i.k)})}render(t,e){const n=this.uniforms,i=this.cam,r=t.getRenderTarget(),o=e.overrideMaterial,a=e.background,l=t.getClearColor(new Ct),c=t.getClearAlpha(),h=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,e.overrideMaterial=this.depth,e.background=null,t.setClearColor(16777215,1),i.layers.set(ul);for(let u=0;u<n.uFLN.value;u++){const f=n.uFLP.value[u],d=n.uFLD.value[u],p=Math.acos(De.clamp(n.uFLC.value[u].x,-1,1))+.05;i.fov=De.radToDeg(Math.min(1.45,p)*2),i.near=.3,i.far=8,i.position.copy(f),Math.abs(d.y)>.99?i.up.set(0,0,-1):i.up.set(0,1,0),i.lookAt(f.clone().add(d)),i.updateProjectionMatrix(),i.updateMatrixWorld();const g=u%2*Dn,x=Math.floor(u/2)*Dn;this.rt.viewport.set(g,x,Dn,Dn),this.rt.scissor.set(g,x,Dn,Dn),this.rt.scissorTest=!0,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),n.uFSM.value[u].multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),n.uFTile.value[u].set(g/(Dn*2),x/(Dn*2),.5,.5),n.uFCam.value[u].set(i.near,i.far,1/(2*Math.tan(De.degToRad(i.fov)/2)),0)}this.rt.scissorTest=!1,this.rt.viewport.set(0,0,Dn*2,Dn*2),t.setRenderTarget(r),t.setClearColor(l,c),e.overrideMaterial=o,e.background=a,t.shadowMap.autoUpdate=h}dispose(){this.rt.dispose(),this.depth.dispose()}}const Vp=`
  #define MAXF ${ei}
  #define MAXA ${to}
  #define FLENS ${Fy.toFixed(3)}
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
`,bi=16,nr=48,Eo=new Ct(1,.84,.64),Gp=.06,Oy=.3,Wp=.05,Wh=4,By=.6,Xp=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Xh=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,qp=`
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
`,qh=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Yh=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),Yp=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),$p=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function qf(s,t,e,n,i,r){const o=(a,l,c)=>{const h=a.slice(0,l);for(;h.length<l;)h.push(c());return h};return new wn({uniforms:{uN:{value:Math.min(s.lamps.length,bi)},uLP:{value:o(s.lamps.map(a=>a.p),bi,()=>new L)},uLD:{value:o(s.lamps.map(a=>a.d),bi,()=>new L(0,-1,0))},uLC:{value:o(s.lamps.map(a=>a.c),bi,()=>new pt(1,1))},uLI:{value:o(s.lamps.map(a=>a.i),bi,()=>0)},uB:{value:Math.min(s.boxes.length,nr)},uBC:{value:o(s.boxes.map(a=>a.c),nr,()=>new L(0,-99,0))},uBS:{value:o(s.boxes.map(a=>a.s),nr,()=>new L)},uBL:{value:o(s.boxes.map(a=>a.lamp),nr,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:Gp},uBounceK:{value:Wh},uLampK:{value:Oy},uCeilK:{value:Wp},...Yp(i),uLCol:{value:Eo},...Yh(n),...r.uniforms},vertexShader:qp,fragmentShader:`
      ${Vp}
      #define MAXL ${bi}
      #define MAXB ${nr}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${$p}
      ${Xh}
      ${Xp}
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
        ${qh}
      }`})}function Hy(s,t){return new wn({uniforms:{uAmb:{value:Wp},uBounceK:{value:Wh},...Yp(t),...Yh(s)},vertexShader:qp,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Xh}
      ${$p}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${qh}
      }`})}const oh={value:1};function Vy(s,t,e,n){return new wn({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:Gp},uBounceK:{value:Wh},uSpillK:{value:By},uLCol:{value:Eo},uGlossK:oh,...Yh(e),...n.uniforms},vertexShader:`
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
      ${Xh}
      ${Xp}
      ${Vp}
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
        ${qh}
      }`})}function Yf(s,t,e,n){return new wn({uniforms:{uMap:{value:s},...Uy(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Ct(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Eo}},toneMapped:!1,vertexShader:`
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
      ${Ny}
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
      }`})}const Or=.05,Br=.2;function Gy(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Or)+1,a=Math.ceil(r/Or)+1,l=new Uint8Array(o*a),c=s.solids;for(let w=0;w<a;w++){const v=n.z0+w*Or;for(let y=0;y<o;y++){const S=n.x0+y*Or;let T=1;for(const _ of c){const b=Math.max(_.x0-S,0,S-_.x1),A=Math.max(_.z0-v,0,v-_.z1),C=b*b+A*A;C>1.44||(T*=1-.42*Math.exp(-Math.sqrt(C)/.28))}l[w*o+y]=Math.round(Math.max(0,Math.min(1,T))*255)}}const h=Math.ceil(i/Br)+1,u=Math.ceil(r/Br)+1,f=new Float32Array(h*u*4),d=Eo,p=t.map(w=>{const v=new Ct(w.face.color),S=(w.w+.5)*(w.h+1)*.7*.55;return{c:[w.centre[0]+w.normal[0]*.05,1.2,w.centre[2]+w.normal[2]*.05],n:w.normal,rgb:[v.r*d.r*S,v.g*d.g*S,v.b*d.b*S],lamp:w.lamp}});for(let w=0;w<u;w++){const v=n.z0+w*Br;for(let y=0;y<h;y++){const S=n.x0+y*Br;let T=0,_=0,b=0,A=0;for(const P of p){const U=S-P.c[0],F=v-P.c[2],V=U*U+F*F;if(V>64)continue;const q=U*P.n[0]+F*P.n[2];if(q>.02){const k=Math.max(V+P.c[1]*P.c[1],.3),O=Math.sqrt(k),H=q/O*(P.c[1]/O)/(Math.PI*k);H>5e-4&&!Rs(s.solids,P.c[0],P.c[2],S,v)&&(T+=P.rgb[0]*H,_+=P.rgb[1]*H,b+=P.rgb[2]*H)}const X=P.lamp,j=S-X.p[0],G=-X.p[1],K=v-X.p[2],tt=j*j+G*G+K*K,ut=Math.sqrt(tt),B=(j*X.d[0]+G*X.d[1]+K*X.d[2])/ut;if(B>X.cOuter){const k=Math.min(1,(B-X.cOuter)/(X.cInner-X.cOuter)),O=k*k*(3-2*k),H=X.i*O*(X.p[1]/ut)/tt;H>.002&&!Rs(s.solids,X.p[0],X.p[2],S,v)&&(A+=H)}}const C=(w*h+y)*4;f[C]=T,f[C+1]=_,f[C+2]=b,f[C+3]=A}}e==null||e.ao.dispose(),e==null||e.light.dispose();const g=new vr(l,o,a,nl,_n);g.magFilter=g.minFilter=tn,g.needsUpdate=!0;const x=new Uint16Array(f.length);for(let w=0;w<f.length;w++)x[w]=Gm.toHalfFloat(f[w]);const m=new vr(x,h,u,An,Cn);m.magFilter=m.minFilter=tn,m.needsUpdate=!0;const M=(w,v,y)=>new Se(1/(w*v),1/(w*y),.5/v,.5/y);return{ao:g,light:m,origin:new pt(n.x0,n.z0),aoXf:M(Or,o,a),lightXf:M(Br,h,u)}}const Qe=.15,en=8,Ei=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],yi=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],sa=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],$f=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],Kf=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Wy=[0,1,0];class Kp{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=$f(sa(t[2],t[0]),sa(t[3],t[1])),r=Ei(Ei(e[0],e[1]),Ei(e[2],e[3]));Kf(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));Kf($f(sa(t[1],t[0]),sa(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new be;return t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("normal",new Wt(this.nor,3)),t.setAttribute("uv",new Wt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const Zp=(s,t)=>s?Qe:Math.max(0,Math.min(Qe,t/2-.002));function Xy(s,t,e){const n=new Kp,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,b,A)=>{const C=os(s,_,A);return[C[0]+i[0]*b,A,C[2]+i[2]*b]},a=Zp(s.outer,s.t),l=t-Qe,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?Qe:h==="free"?a:0),d=s.u1-(u==="in"?Qe:u==="free"?a:0);if(d-f<.01)return n;const p=(_,b,A,C)=>{b-_<1e-4||C-A<1e-4||n.quad([o(_,0,A),o(b,0,A),o(b,0,C),o(_,0,C)],[i,i,i,i])},g=[...s.doors].sort((_,b)=>_[0]-b[0]);if(!g.length)p(f,d,0,l);else{let _=f;for(const[b,A]of g)p(_,Math.min(d,b-a),0,c),_=Math.max(_,A+a);p(_,d,0,c),p(f,d,c,l)}const x=(_,b,A,C)=>{if(a<.01)return;const P=U=>Ei(yi(i,Math.cos(U)),yi(b,Math.sin(U)));for(let U=0;U<en;U++){const F=U/en*Math.PI/2,V=(U+1)/en*Math.PI/2,q=(X,j)=>Ei(o(_,-a,j),yi(P(X),a));n.quad([q(F,A),q(V,A),q(V,C),q(F,C)],[P(F),P(V),P(V),P(F)])}},m=_=>[-_[0],-_[1],-_[2]];for(const[_,b]of g)_-s.u0>a+.01&&x(_-a,r,0,c),s.u1-b>a+.01&&x(b+a,m(r),0,c);h==="free"&&x(s.u0+a,m(r),0,t),u==="free"&&x(s.u1-a,r,0,t);const M=(_,b)=>{const A=Ei(Ei(o(_,0,0),yi(i,Qe)),yi(b,Qe)),C=U=>Ei(yi(i,Math.cos(U)),yi(b,Math.sin(U))),P=Math.PI/4;for(let U=0;U<en/2;U++){const F=U/(en/2)*P,V=(U+1)/(en/2)*P,q=(X,j)=>[A[0]-Qe*C(X)[0],j,A[2]-Qe*C(X)[2]];n.quad([q(F,0),q(V,0),q(V,l),q(F,l)],[C(F),C(V),C(V),C(F)]);for(let X=0;X<en;X++){const j=X/en*Math.PI/2,G=(X+1)/en*Math.PI/2,K=(ut,B)=>{const k=C(ut);return[A[0]-Qe*Math.cos(B)*k[0],l+Qe*Math.sin(B),A[2]-Qe*Math.cos(B)*k[2]]},tt=(ut,B)=>{const k=C(ut);return[Math.cos(B)*k[0],-Math.sin(B),Math.cos(B)*k[2]]};n.quad([K(F,j),K(V,j),K(V,G),K(F,G)],[tt(F,j),tt(V,j),tt(V,G),tt(F,G)])}}};h==="in"&&M(s.u0,r),u==="in"&&M(s.u1,m(r));const w=h==="in"?s.u0+Qe:f,v=u==="in"?s.u1-Qe:d,y=(_,b)=>o(_,Qe-Qe*Math.cos(b),l+Qe*Math.sin(b)),S=_=>Ei(yi(i,Math.cos(_)),yi(Wy,-Math.sin(_)));for(let _=0;_<en;_++){const b=_/en*Math.PI/2,A=(_+1)/en*Math.PI/2;n.quad([y(w,b),y(v,b),y(v,A),y(w,A)],[S(b),S(b),S(A),S(A)])}const T=(_,b)=>{const A=o(_,0,t);for(let C=0;C<en;C++){const P=C/en*Math.PI/2,U=(C+1)/en*Math.PI/2;n.tri([A,y(_,P),y(_,U)],b)}};return h!=="in"&&T(w,m(r)),u!=="in"&&T(v,r),n}function qy(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Kp),e.get(a)),i=s.H,r=Math.min(s.doorH,i-Qe),o=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(o(a.id)),h=(w,v,y)=>a.axis==="x"?[w,y,v]:[v,y,w],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],p=Zp(a.outer,a.t),g=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],x=f+p,m=l?f+t:d-p,M=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(w=>w.wall===a.id).flatMap(w=>w.doors).filter((w,v,y)=>y.findIndex(S=>Math.abs(S[0]-w[0])<1e-6)===v);for(const[w,v]of M){const y=(_,b)=>{m-x>.001&&c.quad([h(_,x,0),h(_,m,0),h(_,m,r),h(_,x,r)],[b,b,b,b])};y(w,u),y(v,[-u[0],0,-u[2]]);const S=[0,-1,0],T=l?f+t:d;c.quad([h(w,f,r),h(v,f,r),h(v,T,r),h(w,T,r)],[S,S,S,S]);for(const{c:_,s:b}of g)for(const[A,C]of[[w,1],[v,-1]]){if(p<.01)continue;const P=A-C*p,U=_-b*p,F=h(A,_,r);for(let V=0;V<en;V++){const q=X=>{const j=X/en*Math.PI/2;return h(P+C*p*Math.sin(j),U+b*p*Math.cos(j),r)};c.tri([F,q(V),q(V+1)],S)}}}if(!a.outer)for(const w of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,S)=>{d-p-(f+p)>.001&&c.quad([h(y,f+p,0),h(y,d-p,0),h(y,d-p,i),h(y,f+p,i)],[S,S,S,S])};w.freeA&&v(w.u0,[-u[0],0,-u[2]]),w.freeB&&v(w.u1,u)}}return e}const Zf=new Ct(1,1,1),Jp=.2,Wa=2;function Yy(s,t,e,n){const i=new he;s.background=Zf,s.fog=null;const r=n.outline,o=r.t-Jp,a=r.x0-r.t,l=r.x1+r.t,c=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,p=n.entrance.x-n.entrance.w/2,g=n.entrance.x+n.entrance.w/2,x=n.entrance.x,m=new qe({color:Zf,toneMapped:!1}),M=(_,b,A,C,P,U)=>{const F=new wt(new Ye(C,P,U),m);return F.position.set(_,b,A),F.userData.outside=!0,F.layers.set(Wa),i.add(F),F},w=-.5,v=d,y=(w+v)/2,S=v-w;M((a+p)/2,y,h-o/2,p-a,S,o),M((g+l)/2,y,h-o/2,l-g,S,o),M(x,(f+v)/2,h-o/2,g-p,v-f,o),M((a+l)/2,y,c+o/2,l-a,S,o),M(a+o/2,y,(c+h)/2,o,S,h-c-2*o),M(l-o/2,y,(c+h)/2,o,S,h-c-2*o),M((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const T=new wt(new Ue(400,400).rotateX(-Math.PI/2),m);return T.position.y=-.002,T.layers.set(Wa),i.add(T),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var C;const b=_;b.geometry&&b.geometry.dispose();const A=Array.isArray(b.material)?b.material:b.material?[b.material]:[];for(const P of A)(C=P.map)==null||C.dispose(),P.dispose()})}}}class Jf{constructor(){R(this,"pos",[]);R(this,"nor",[]);R(this,"uv",[]);R(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new be;return t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("normal",new Wt(this.nor,3)),t.setAttribute("uv",new Wt(this.uv,2)),t.setIndex(this.idx),t}}const yo=s=>new L(s[0],s[1],s[2]),Qp=s=>({p:yo(s.p),d:yo(s.d),c:new pt(s.cOuter,s.cInner),i:s.i});function $y(s,t,e,n=[]){const i=t.filter(h=>h.face===s),r=i.map(h=>h.lamp),o=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(os(s,u,f))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const p of a){const g=p[0]-h.p[0],x=p[1]-h.p[1],m=p[2]-h.p[2],M=Math.hypot(g,x,m);M>7||(g*h.d[0]+x*h.d[1]+m*h.d[2])/M<=h.cOuter||Rs(e.solids,h.p[0],h.p[2],p[0]+s.n[0]*.03,p[2]+s.n[1]*.03)||(d=Math.min(d,M))}d<1/0&&o.push({L:h,d})}o.sort((h,u)=>h.d-u.d);for(const h of o){if(r.length>=bi)break;r.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=bi))for(const f of h.items)c.length>=nr||f.text||c.push({c:yo(f.pos),s:new L(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:r.slice(0,bi).map(Qp),boxes:c,normal:new L(s.n[0],0,s.n[1]),right:new L(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const Ky={lamps:[],boxes:[],normal:new L(0,0,1),right:new L(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function Qf(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,l=[],c=[],h=[],u=[],f=[],d=(S,T,_,b)=>{const A=l.length/3;S.forEach((C,P)=>{l.push(...C),c.push(...T),h.push(..._[P]),u.push(b)}),f.push(A,A+1,A+2,A,A+2,A+3)},p=s/2,g=t/2,x=.004,m=i+x,M=r-x,w=o+x,v=a-x;d([[-p,-g,e],[p,-g,e],[p,g,e],[-p,g,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-p,g,e],[p,g,e],[p,g,0],[-p,g,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-p,-g,0],[p,-g,0],[p,-g,e],[-p,-g,e]],[0,-1,0],[[i,w],[r,w],[r,w],[i,w]],1),d([[-p,-g,0],[-p,-g,e],[-p,g,e],[-p,g,0]],[-1,0,0],[[m,o],[m,o],[m,a],[m,a]],1),d([[p,-g,e],[p,-g,0],[p,g,0],[p,g,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const y=new be;return y.setAttribute("position",new Wt(l,3)),y.setAttribute("normal",new Wt(c,3)),y.setAttribute("uv",new Wt(h,2)),y.setAttribute("aSide",new Wt(u,1)),y.setIndex(f),y}function Zy(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:l}=Fa,c=s/2,h=t/2,u=c+o+i,f=h+o+i,d=c+o,p=h+o,g=c+l,x=h+l,m=r-a,M=m-l,w=new Ct(q_[e.color]),v=new Ct(Y_[e.mat]),y=new Ct($_),S=[],T=[],_=[],b=[],A=[],C=[],P=G=>new L(G[0],G[1],G[2]),U=(G,K,tt,ut=[[0,0],[0,0],[0,0],[0,0]])=>{const B=new L().crossVectors(P(G[1]).sub(P(G[0])),P(G[3]).sub(P(G[0]))).normalize();B.dot(P(K))<0&&(G=[G[0],G[3],G[2],G[1]],ut=[ut[0],ut[3],ut[2],ut[1]],B.negate());const k=S.length/3;G.forEach((O,H)=>{S.push(...O),T.push(B.x,B.y,B.z),_.push(...ut[H]),b.push(tt?2:0),A.push(...tt?[tt.r,tt.g,tt.b]:[0,0,0])}),C.push(k,k+1,k+2,k,k+2,k+3)};U([[-u,p,r],[u,p,r],[u,f,r],[-u,f,r]],[0,0,1],w),U([[-u,-f,r],[u,-f,r],[u,-p,r],[-u,-p,r]],[0,0,1],w),U([[-u,-p,r],[-d,-p,r],[-d,p,r],[-u,p,r]],[0,0,1],w),U([[d,-p,r],[u,-p,r],[u,p,r],[d,p,r]],[0,0,1],w),U([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],w),U([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],w),U([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],w),U([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],w),U([[-d,p,m],[d,p,m],[d,p,r],[-d,p,r]],[0,-1,0],w),U([[-d,-p,m],[d,-p,m],[d,-p,r],[-d,-p,r]],[0,1,0],w),U([[-d,-p,m],[-d,p,m],[-d,p,r],[-d,-p,r]],[1,0,0],w),U([[d,-p,m],[d,p,m],[d,p,r],[d,-p,r]],[-1,0,0],w),U([[-d,x,m],[d,x,m],[d,p,m],[-d,p,m]],[0,0,1],v),U([[-d,-p,m],[d,-p,m],[d,-x,m],[-d,-x,m]],[0,0,1],v),U([[-d,-x,m],[-g,-x,m],[-g,x,m],[-d,x,m]],[0,0,1],v),U([[g,-x,m],[d,-x,m],[d,x,m],[g,x,m]],[0,0,1],v),U([[-g,x,m],[g,x,m],[c,h,M],[-c,h,M]],[0,-1,1],y),U([[-g,-x,m],[g,-x,m],[c,-h,M],[-c,-h,M]],[0,1,1],y),U([[-g,-x,m],[-g,x,m],[-c,h,M],[-c,-h,M]],[1,0,1],y),U([[g,-x,m],[g,x,m],[c,h,M],[c,-h,M]],[-1,0,1],y);const[F,V,q,X]=n;U([[-c,-h,M],[c,-h,M],[c,h,M],[-c,h,M]],[0,0,1],null,[[F,q],[V,q],[V,X],[F,X]]);const j=new be;return j.setAttribute("position",new Wt(S,3)),j.setAttribute("normal",new Wt(T,3)),j.setAttribute("uv",new Wt(_,2)),j.setAttribute("aSide",new Wt(b,1)),j.setAttribute("aCol",new Wt(A,3)),j.setIndex(C),j}function Jy(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=ka,l=s/2,c=t/2,h=l+o,u=c+o,f=h+i,d=u+i,p=r-a,g=Math.max(.004,p-e),x=new Ct(K_),m=new Ct(Z_),M=[],w=[],v=[],y=[],S=[],T=[],_=K=>new L(K[0],K[1],K[2]),b=(K,tt,ut,B,k=[[0,0],[0,0],[0,0],[0,0]])=>{const O=new L().crossVectors(_(K[1]).sub(_(K[0])),_(K[3]).sub(_(K[0]))).normalize();O.dot(_(tt))<0&&(K=[K[0],K[3],K[2],K[1]],k=[k[0],k[3],k[2],k[1]],O.negate());const H=M.length/3;K.forEach((I,z)=>{M.push(...I),w.push(O.x,O.y,O.z),v.push(...k[z]),y.push(ut),S.push(...B?[B.r,B.g,B.b]:[0,0,0])}),T.push(H,H+1,H+2,H,H+2,H+3)};b([[-f,u,r],[f,u,r],[f,d,r],[-f,d,r]],[0,0,1],2,x),b([[-f,-d,r],[f,-d,r],[f,-u,r],[-f,-u,r]],[0,0,1],2,x),b([[-f,-u,r],[-h,-u,r],[-h,u,r],[-f,u,r]],[0,0,1],2,x),b([[h,-u,r],[f,-u,r],[f,u,r],[h,u,r]],[0,0,1],2,x),b([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],2,x),b([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],2,x),b([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],2,x),b([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],2,x),b([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,m),b([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,m),b([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,m),b([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,m),b([[-h,c,g],[h,c,g],[h,u,g],[-h,u,g]],[0,0,1],2,m),b([[-h,-u,g],[h,-u,g],[h,-c,g],[-h,-c,g]],[0,0,1],2,m),b([[-h,-c,g],[-l,-c,g],[-l,c,g],[-h,c,g]],[0,0,1],2,m),b([[l,-c,g],[h,-c,g],[h,c,g],[l,c,g]],[0,0,1],2,m);const[A,C,P,U]=n,F=.004,V=A+F,q=C-F,X=P+F,j=U-F;b([[-l,-c,p],[l,-c,p],[l,c,p],[-l,c,p]],[0,0,1],0,null,[[A,P],[C,P],[C,U],[A,U]]),b([[-l,c,p],[l,c,p],[l,c,g],[-l,c,g]],[0,1,0],1,null,[[A,j],[C,j],[C,j],[A,j]]),b([[-l,-c,g],[l,-c,g],[l,-c,p],[-l,-c,p]],[0,-1,0],1,null,[[A,X],[C,X],[C,X],[A,X]]),b([[-l,-c,g],[-l,-c,p],[-l,c,p],[-l,c,g]],[-1,0,0],1,null,[[V,P],[V,P],[V,U],[V,U]]),b([[l,-c,p],[l,-c,g],[l,c,g],[l,c,p]],[1,0,0],1,null,[[q,P],[q,P],[q,U],[q,U]]);const G=new be;return G.setAttribute("position",new Wt(M,3)),G.setAttribute("normal",new Wt(w,3)),G.setAttribute("uv",new Wt(v,2)),G.setAttribute("aSide",new Wt(y,1)),G.setAttribute("aCol",new Wt(S,3)),G.setIndex(T),G}function Qy(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let l=i,c=o,h=1-a,u=1-r;if(!e)return[l,c,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const p=f/d,g=(l+c)/2,x=(c-l)*p/2;l=g-x,c=g+x}else{const p=d/f,g=(h+u)/2,x=(u-h)*p/2;h=g-x,u=g+x}return[l,c,h,u]}const nc=(s,t,e,n)=>{const i=new Jt().makeBasis(yo(e),new L(0,1,0),yo(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class jy{constructor(t,e){R(this,"map",new Map);R(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${Ba(t)}|${t.medium}|${Oa(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*ao/ar),r=jp(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,Ba(t)]];for(const h of[t.medium,Oa(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)o.font=h,l=tw(o,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new us(e()),n.colorSpace=Ne,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const jp=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function tw(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const l=o?o+" "+a:a;s.measureText(l).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=l}return s.fillText(o,e,n),n+r}const ew=s=>{const t=new Ct(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function nw(s,t,e,n){const i=jp(Math.ceil(t*Ha),Math.ceil(e*Ha)),r=i.getContext("2d");r.fillStyle=ew(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${lo}px ${Va}`,r.fillText(s.title,8,lo*.8),s.sub&&(r.font=`400 ${Ga}px ${Va}`,r.fillText(s.sub,10,lo+Ip+Ga*.8));const o=new us(i);return o.colorSpace=Ne,o.anisotropy=8,o}function iw(s){const t=sy(s),e=oy(s,t).map(c=>new Ct(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let c=0;c<i;c++)n[c]>=0&&r.push(c);for(;r.length;){const c=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],c.push(f))}r=c}const o=new Uint8Array(i*4),a=new Ct(Lp);for(let c=0;c<i;c++){const h=e[n[c]]??a;o[c*4]=Math.round(h.r*255),o[c*4+1]=Math.round(h.g*255),o[c*4+2]=Math.round(h.b*255),o[c*4+3]=255}const l=new vr(o,t.nx,t.nz,An);return l.magFilter=l.minFilter=Xe,l.needsUpdate=!0,{tex:l,origin:new pt(t.x0,t.z0),scale:new pt(1/(t.nx*t.c),1/(t.nz*t.c))}}function sw(s,t,e,n,i,r,o,a,l,c){const h=new he,u=s.H,f=iw(s),d=[],p=[],g=[f.tex],x=(C,P)=>{p.push(C),d.push(P);const U=new wt(C,P);return h.add(U),U},m=[];for(const C of s.faces){const P=Xy(C,u,s.doorH);if(P.empty)continue;const U=x(P.geometry(),qf($y(C,t,s),new Ct(C.color),u,e,f,l));U.userData.face=C,m.push(U)}for(const[C,P]of qy(s,Jp))P.empty||x(P.geometry(),qf(Ky,new Ct(C),u,e,f,l));const M=s.inner,w=s.entrance,v=new Jf;v.add([[M.x0,0,M.z1],[M.x1,0,M.z1],[M.x1,0,M.z0],[M.x0,0,M.z0]],[0,1,0]),v.add([[w.a,0,w.z+.4],[w.b,0,w.z+.4],[w.b,0,w.z],[w.a,0,w.z]],[0,1,0]),x(v.geometry(),Vy(o,a,e,l)).layers.set(1);const S=new Jf;S.add([[M.x0,u,M.z0],[M.x1,u,M.z0],[M.x1,u,M.z1],[M.x0,u,M.z1]],[0,-1,0]),x(S.geometry(),Hy(e,f));const T=[...t.map(C=>C.lamp.p),...c.map(C=>C.p)],_=T.length;if(_){const C=new Ui(.068,28).rotateX(Math.PI/2).translate(0,u-.0015,0),P=new Ui(.05,24).rotateX(Math.PI/2).translate(0,u-.0025,0),U=new Ui(.026,20).rotateX(Math.PI/2).translate(0,u-.0035,0),F=new qe({color:14276820,toneMapped:!1}),V=new qe({color:11842479,toneMapped:!1}),q=new qe({color:new Ct(1,.94,.86),toneMapped:!1});q.userData.lens=!0,p.push(C,P,U),d.push(F,V,q);const X=new dr(C,F,_),j=new dr(P,V,_),G=new dr(U,q,_),K=new Jt;T.forEach((tt,ut)=>{K.makeTranslation(tt[0],0,tt[2]),X.setMatrixAt(ut,K),j.setMatrixAt(ut,K),G.setMatrixAt(ut,K)}),h.add(X,j,G)}const b=[],A=[];r.begin();for(const C of t){const P=Qp(C.lamp);for(const U of C.items){if(U.text){const k=nw(U.text,U.w,U.h,U.face.color);g.push(k);const O=x(new Ue(U.w,U.h),new qe({map:k,transparent:!0,depthWrite:!1,toneMapped:!1}));nc(O,C.normal,C.right,[U.pos[0]+C.normal[0]*.002,U.pos[1],U.pos[2]+C.normal[2]*.002]),O.userData.title=U.id;continue}const F=U.work,V=F.kind==="paper"||F.kind==="digital"?new Ct().setRGB(.92,.91,.88):null,q=Yf(n(F.id),P,V,F.adjust),X=Hh(F),j=F.w*pn,G=F.h*pn,K=Qy(j,G,i(F.id),F.crop),tt=X?Vh(X)?Jy(j,G,Bh[F.kind],K):Zy(j,G,X,K):Qf(U.w,U.h,U.depth,K),ut=x(tt,q);nc(ut,C.normal,C.right,U.pos),ut.userData.work=F.id;const B={work:F,placed:C,mesh:ut,mat:q,w:U.w,h:U.h,label:null};if(b.push(B),U.label){const k=x(Qf(ar,ao,.003),Yf(r.single(F),P,new Ct(.95,.95,.93)));nc(k,C.normal,C.right,U.label.pos),k.userData.work=F.id,k.userData.label=!0,A.push(k),B.label=k}}}return r.end(),{group:h,pictures:b,labels:A,faceMeshes:m,dispose(){for(const C of p)C.dispose();for(const C of d)C.dispose();for(const C of g)C.dispose();h.traverse(C=>{const P=C;P.isInstancedMesh&&P.dispose()})}}}const Hr=new L;function Nn(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Hr.copy(t),Hr[n]=0,Hr.normalize();const c=.5*o/(o+a),h=1-Hr.angleTo(s)/l;return Math.sign(Hr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Wn extends Ye{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,h=new L(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new L,x=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[M+0]=Nn(g,c,"z","y",r,n),d[M+1]=1-Nn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[M+0]=1-Nn(g,c,"z","y",r,n),d[M+1]=1-Nn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[M+0]=1-Nn(g,c,"x","z",r,t),d[M+1]=Nn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[M+0]=1-Nn(g,c,"x","z",r,t),d[M+1]=1-Nn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[M+0]=1-Nn(g,c,"x","y",r,t),d[M+1]=1-Nn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[M+0]=Nn(g,c,"x","y",r,t),d[M+1]=1-Nn(g,c,"y","x",r,e);break}}static fromJSON(t){return new Wn(t.width,t.height,t.depth,t.segments,t.radius)}}function rw(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new be;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][f]);const p=jf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function jf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new mn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const g=h.getComponent(f,p);a.setComponent(f+u,p,g)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function $h(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,w=a.length;M<w;M++){const v=a[M],y=s.attributes[v];l[v]=new y.constructor(new y.array.constructor(y.count*y.itemSize),y.itemSize,y.normalized);const S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((T,_)=>{const b=new T.array.constructor(T.count*T.itemSize);c[v][_]=new T.constructor(b,T.itemSize,T.normalized)}))}const d=t*.5,p=Math.log10(1/t),g=Math.pow(10,p),x=d*g;for(let M=0;M<r;M++){const w=n?n.getX(M):M;let v="";for(let y=0,S=a.length;y<S;y++){const T=a[y],_=s.getAttribute(T),b=_.itemSize;for(let A=0;A<b;A++)v+=`${Math.trunc(_[u[A]](w)*g+x)},`}if(v in e)h.push(e[v]);else{for(let y=0,S=a.length;y<S;y++){const T=a[y],_=s.getAttribute(T),b=s.morphAttributes[T],A=_.itemSize,C=l[T],P=c[T];for(let U=0;U<A;U++){const F=u[U],V=f[U];if(C[V](o,_[F](w)),b)for(let q=0,X=b.length;q<X;q++)P[q][V](o,b[q][F](w))}}e[v]=o,h.push(o),o++}}const m=s.clone();for(const M in s.attributes){const w=l[M];if(m.setAttribute(M,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),M in c)for(let v=0;v<c[M].length;v++){const y=c[M][v];m.morphAttributes[M][v]=new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)}}return m.setIndex(h),m}function ci(s,t,e){let n=s*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function ow(s,t,e,n){const i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=g=>(g%e+e)%e,u=ci(h(i),h(r),n),f=ci(h(i+1),h(r),n),d=ci(h(i),h(r+1),n),p=ci(h(i+1),h(r+1),n);return u+(f-u)*l+(d-u)*c+(u-f-d+p)*l*c}function mr(s,t,e,n,i){let r=0,o=.5,a=0,l=e;for(let c=0;c<n;c++)r+=o*ow(s*l,t*l,l,i+c*17),a+=o,o*=.5,l*=2;return r/a}function di(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function pi(s,t=!0,e=!0){const n=new us(s);return t&&(n.colorSpace=Ne),e&&(n.wrapS=n.wrapT=ba),n.anisotropy=8,n}function td(s,t,e){const[i,r]=di(512),[o,a]=di(512),l=r.createImageData(512,512),c=a.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=u/512,d=h/512,p=mr(f,d,3,4,e),g=mr(f*.6,d*2.2,4,3,e+5),x=Math.max(0,mr(f,d,5,4,e+9)-.52)*3.2,m=ci(u,h,e)-.5;let M=.82+.34*(p-.5)*2*.5+.12*(g-.5)+.05*m;M=Math.max(.5,M);const w=Math.min(1,x),v=(h*512+u)*4;for(let S=0;S<3;S++)l.data[v+S]=Math.max(0,Math.min(255,(s[S]*(1-w)+t[S]*w)*M));l.data[v+3]=255;const y=128+60*(p-.5)+30*(g-.5)+14*m;c.data[v]=c.data[v+1]=c.data[v+2]=Math.max(0,Math.min(255,y)),c.data[v+3]=255}return r.putImageData(l,0,0),a.putImageData(c,0,0),{map:pi(i),bump:pi(o,!1)}}function ah(s,t,e,n=1){const[o,a]=di(1024,256),l=a.createImageData(1024,256);for(let h=0;h<256;h++)for(let u=0;u<1024;u++){const f=u/1024,d=h/256,p=mr(f,d,2,3,e)*3+mr(f,d,8,2,e+3)*.35,g=.5+.5*Math.sin((d*38+p*4.2)*Math.PI*2*.5),x=Math.pow(g,3),m=ci(Math.floor(u/2),h,e+7)>.93?.85:1,M=mr(f*.5,d*6,4,3,e+11),w=.5+.5*Math.sin((d*210+p*9)*Math.PI);let v=.45*x*n+.3*M+.12*w*n+.08*(ci(u,h,e)-.5);v=Math.max(0,Math.min(1,v));const y=(h*1024+u)*4;for(let S=0;S<3;S++)l.data[y+S]=(s[S]*(1-v)+t[S]*v)*m;l.data[y+3]=255}a.putImageData(l,0,0);const c=pi(o);return c.repeat.set(2,1/.25),c}const wo=16,t0=[["#c4492f","#f0e2c4","#1d1d1b"],["#2f4c6b","#e9d8a6","#c96f3b"],["#e7d9bd","#1e1e1e","#b8452f"],["#3e6250","#e8c766","#f2ede1"],["#1b1b1d","#d9a441","#efe8da"],["#8c3b4a","#f3dcc8","#233040"],["#d6b24c","#2b2b2b","#f4f0e6"],["#5d7f9b","#f2efe7","#1f2a36"],["#ece6d8","#c23b22","#2a2a2a"],["#31302e","#7fb0a6","#e9e1cf"],["#a8562f","#2e3b33","#efd9b4"],["#f1ece0","#3d5a80","#e07a3f"],["#20302a","#c9a227","#d9d2c3"],["#6b4f7a","#f0d7a1","#1c1c1c"],["#d9cfc1","#556b2f","#8b2e2e"],["#0f1a24","#e3e3e3","#d14b2b"]];function aw(){const[t,e]=di(1024,1024);for(let i=0;i<wo;i++){const r=i%4*256,o=Math.floor(i/4)*256,[a,l,c]=t0[i];e.save(),e.translate(r,o),e.beginPath(),e.rect(0,0,256,256),e.clip(),e.fillStyle=a,e.fillRect(0,0,256,256);const h=f=>ci(i,f,99);switch(i%8){case 0:e.fillStyle=l,e.beginPath(),e.arc(256*.5,256*.55,256*.3,0,Math.PI*2),e.fill();break;case 1:for(let f=0;f<7;f++)e.fillStyle=f%2?l:c,e.fillRect(0,256*(.12+f*.11),256,256*.05);break;case 2:e.fillStyle=l,e.fillRect(256*.12,256*.12,256*.5,256*.76),e.fillStyle=c,e.fillRect(256*.66,256*.58,256*.22,256*.3);break;case 3:for(let f=0;f<5;f++)for(let d=0;d<5;d++)e.fillStyle=(d+f)%2?l:c,e.beginPath(),e.arc(256*(.18+d*.16),256*(.18+f*.16),256*.05,0,7),e.fill();break;case 4:{const f=e.createLinearGradient(0,0,0,256);f.addColorStop(0,l),f.addColorStop(1,a),e.fillStyle=f,e.fillRect(0,0,256,256),e.fillStyle=c,e.fillRect(256*.1,256*.78,256*.8,256*.03);break}case 5:e.strokeStyle=l,e.lineWidth=256*.035;for(let f=1;f<6;f++)e.beginPath(),e.arc(256*.3,256*.7,256*.11*f,0,Math.PI*2),e.stroke();break;case 6:e.fillStyle=l,e.beginPath(),e.moveTo(0,256),e.lineTo(256,0),e.lineTo(256,256),e.fill(),e.fillStyle=c,e.fillRect(256*.1,256*.1,256*.18,256*.18);break;case 7:e.fillStyle=l,e.fillRect(256*.08,256*.08,256*.84,256*.84),e.fillStyle=c,e.beginPath(),e.arc(256*(.3+h(1)*.4),256*(.3+h(2)*.4),256*.16,0,7),e.fill();break}e.fillStyle=i%3?c:l,e.globalAlpha=.85;for(let f=0;f<3+i%4;f++)e.fillRect(256*.1+f*256*.07,256*.06,256*.05,256*.02);e.globalAlpha=1,i%3===1&&(e.strokeStyle="rgba(255,255,255,0.13)",e.lineWidth=256*.03,e.beginPath(),e.arc(256/2,256/2,256*.46,0,7),e.stroke());const u=e.createRadialGradient(256/2,256/2,256*.45,256/2,256/2,256*.75);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(40,30,20,0.25)"),e.fillStyle=u,e.fillRect(0,0,256,256),e.restore()}return pi(t,!0,!1)}const lw=s=>t0[s%wo][0];function cw(s){const[e,n]=di(1024),[i,r]=di(1024),o=1024/2;n.fillStyle="#0b0b0c",n.fillRect(0,0,1024,1024);for(let h=o*.33;h<o*.985;h+=1.4){const u=Math.floor((h-o*.36)/(o*.12)),f=(h-o*.36)%(o*.12)<2.5&&h>o*.37;n.strokeStyle=f?"rgba(60,60,64,0.55)":`rgba(${18+u%2*4},${18+u%2*4},${20+u%2*4},0.9)`,n.lineWidth=.8,n.beginPath(),n.arc(o,o,h,0,Math.PI*2),n.stroke()}n.fillStyle=s,n.beginPath(),n.arc(o,o,o*.33,0,7),n.fill(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=3,n.beginPath(),n.arc(o,o,o*.29,0,7),n.stroke(),n.fillStyle="rgba(20,20,20,0.7)";for(let h=0;h<4;h++)n.fillRect(o-o*.16,o-o*.18+h*o*.05,o*(.32-h*.05),o*.022);n.fillStyle="#d8d8d8",n.beginPath(),n.arc(o,o,o*.025,0,7),n.fill();const a=r.createImageData(1024,1024);for(let h=0;h<1024;h++)for(let u=0;u<1024;u++){const f=(u+.5-o)/o,d=(h+.5-o)/o,p=Math.hypot(f,d)||1,g=-d/p,x=-f/p,m=(h*1024+u)*4;a.data[m]=(g*.5+.5)*255,a.data[m+1]=(x*.5+.5)*255,a.data[m+2]=p>.34&&p<.985?255:0,a.data[m+3]=255}r.putImageData(a,0,0);const l=pi(e,!0,!1),c=pi(i,!1,!1);return{map:l,aniso:c}}function hw(){const[e,n]=di(256,160),i=n.createRadialGradient(256*.5,160*.9,10,256*.5,160*.7,256*.75);i.addColorStop(0,"#ffd89a"),i.addColorStop(.6,"#f0a64a"),i.addColorStop(1,"#9a5a1e"),n.fillStyle=i,n.fillRect(0,0,256,160);const r=256/2,o=160*1.05,a=160*.82;n.lineWidth=2,n.strokeStyle="#2a1a0c",n.beginPath(),n.arc(r,o,a,Math.PI*1.25,Math.PI*1.62),n.stroke(),n.strokeStyle="#b0261a",n.lineWidth=4,n.beginPath(),n.arc(r,o,a,Math.PI*1.62,Math.PI*1.75),n.stroke(),n.strokeStyle="#2a1a0c",n.lineWidth=1.6;for(let l=0;l<=12;l++){const c=Math.PI*(1.25+.5*(l/12)),h=l%3?7:13;n.strokeStyle=c>Math.PI*1.62?"#b0261a":"#2a1a0c",n.beginPath(),n.moveTo(r+Math.cos(c)*a,o+Math.sin(c)*a),n.lineTo(r+Math.cos(c)*(a+h),o+Math.sin(c)*(a+h)),n.stroke()}return n.fillStyle="#2a1a0c",n.font='600 22px "Inter Tight", sans-serif',n.textAlign="center",n.fillText("VU",r,160*.62),pi(e,!0,!1)}function uw(){const[e,n]=di(1024,96),i=n.createLinearGradient(0,0,0,96);i.addColorStop(0,"#2a1d10"),i.addColorStop(.5,"#4a321a"),i.addColorStop(1,"#2a1d10"),n.fillStyle=i,n.fillRect(0,0,1024,96),n.fillStyle="#ffd59a",n.strokeStyle="#ffd59a",n.font='500 22px "Inter Tight", sans-serif',n.textAlign="center";for(let o=88;o<=108;o+=1){const a=60+(o-88)/20*904,l=o%4===0;n.globalAlpha=.9,n.lineWidth=l?2.2:1.2,n.beginPath(),n.moveTo(a,96*.62),n.lineTo(a,96*(l?.38:.48)),n.stroke(),l&&n.fillText(String(o),a,96*.3)}n.globalAlpha=.6,n.fillRect(40,96*.66,944,2),n.globalAlpha=1;const r=60+10/20*904;return n.fillStyle="#ff4a22",n.fillRect(r-2.5,6,5,84),pi(e,!0,!1)}let ra=null;function e0(){if(ra)return ra;const s=128,[t,e]=di(s),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.12,"rgba(255,255,255,0.55)"),n.addColorStop(.35,"rgba(255,255,255,0.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),ra=pi(t,!1,!1),ra}function fw(s){const[e,n]=di(512),i=n.createImageData(512,512);for(let r=0;r<512;r++)for(let o=0;o<512;o++){const a=o-256,l=r-512/2,c=Math.round(Math.hypot(a,l)*2),h=200+40*(ci(c,0,5)-.5)+10*(ci(o,r,6)-.5),u=(r*512+o)*4;i.data[u]=i.data[u+1]=i.data[u+2]=h,i.data[u+3]=255}return n.putImageData(i,0,0),pi(e,!1,!1)}const ss={w:1.48,d:2.11},oi=ss.w/2,Fn=ss.d/2,vs=.64,Vr=.99,oa=.725,kn=.8,ya=.0235,ir=52*ya,ed=-ir/2,$i=.88,nd=1.04,id=.985,ic=.6,qn={z:1.5,w:.76,d:.36},lr={look:[0,.725,.96],pitch:-.58,near:.72,span:.64},dw=[0,.9,-.1],sd=s=>[1,3,6,8,10].includes(s%12);let rd=null;function pw(){return{ebony:new xn({color:"#141414",roughness:.16,clearcoat:1,clearcoatRoughness:.06}),satin:new xn({color:"#0b0b0b",roughness:.4,clearcoat:.3}),ivory:new xn({color:"#f1eee6",roughness:.28,clearcoat:.4,clearcoatRoughness:.2}),sharp:new xn({color:"#0d0d0d",roughness:.32,clearcoat:.4}),gold:new Re({color:"#b98f34",metalness:.85,roughness:.36}),brass:new Re({color:"#c9a24a",metalness:1,roughness:.25}),steel:new Re({color:"#d4d4d2",metalness:1,roughness:.22}),copper:new Re({color:"#b5713a",metalness:1,roughness:.32}),pin:new Re({color:"#8a8a88",metalness:1,roughness:.3}),felt:new Re({color:"#141414",roughness:.9}),redFelt:new Re({color:"#5a1414",roughness:.95}),spruce:new Re({map:ah([226,196,150],[196,160,112],31,.5),roughness:.6}),leather:new xn({color:"#0e0e0e",roughness:.55,sheen:.4,sheenColor:new Ct("#555")}),paper:new Re({map:xw(),roughness:.9})}}function Kh(){return rd??(rd=pw()),rd}function Je(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(ul),s}function an(s,t,e,n){return s.position.set(t,e,n),s}const Ms=(s,t,e,n)=>Je(new wt(new Ye(s,t,e),n));function mw(){const s=new sl([[-oi,-.62],[-.735,-.78],[-.69,-.9],[-.6,-.99],[-.46,-1.045],[-.3,-Fn],[-.16,-1.04],[-.02,-.99],[.12,-.9],[.25,-.77],[.35,-.6],[.43,-.4],[.5,-.18],[.58,.04],[.66,.24],[.715,.42],[.737,.58],[oi,.7]].map(([e,n])=>new L(e,0,n)),!1,"centripetal"),t=[[-oi,kn]];for(const e of s.getSpacedPoints(110))t.push([e.x,e.z]);return t.push([oi,kn]),t}function od(s,t){const e=s.length;let n=0;for(let r=0;r<e;r++){const o=s[r],a=s[(r+1)%e];n+=o[0]*a[1]-a[0]*o[1]}const i=n>0?1:-1;return s.map((r,o)=>{const a=s[(o-1+e)%e],l=s[(o+1)%e],c=[r[0]-a[0],r[1]-a[1]],h=[l[0]-r[0],l[1]-r[1]],u=Math.hypot(c[0],c[1])||1,f=Math.hypot(h[0],h[1])||1,d=[-c[1]/u*i,c[0]/u*i],p=[-h[1]/f*i,h[0]/f*i];let g=d[0]+p[0],x=d[1]+p[1];const m=Math.hypot(g,x)||1;g/=m,x/=m;const M=1/Math.max(.5,g*d[0]+x*d[1]);return[r[0]+g*t*M,r[1]+x*t*M]})}const Gr=s=>new bo(s.map(([t,e])=>new pt(t,-e)));function Wr(s,t,e,n=0){const i=new rl(s,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:24,steps:1});return i.rotateX(-Math.PI/2),i.translate(0,t+n,0),i}function gw(s,t){let e=-Fn,n=!1;for(let i=0;i<s.length;i++){const r=s[i],o=s[(i+1)%s.length];if((r[0]-t)*(o[0]-t)>0||r[0]===o[0])continue;const a=(t-r[0])/(o[0]-r[0]),l=r[1]+(o[1]-r[1])*a;l<.5&&(!n||l>e)&&(e=l,n=!0)}return e}function xw(){const s=document.createElement("canvas");s.width=512,s.height=360;const t=s.getContext("2d");t.fillStyle="#efe9da",t.fillRect(0,0,512,360),t.strokeStyle="rgba(40,36,30,0.85)",t.fillStyle="rgba(30,28,24,0.9)";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let r=0;r<6;r++){const o=40+r*52;t.lineWidth=1;for(let a=0;a<5;a++)t.beginPath(),t.moveTo(24,o+a*5),t.lineTo(488,o+a*5),t.stroke();for(let a=60;a<480;a+=14+n()*10){const l=o+Math.round(n()*12-2)*2.5;t.beginPath(),t.ellipse(a,l,3.4,2.5,-.4,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(a+3,l),t.lineTo(a+3,l-15),t.stroke()}for(let a=140;a<480;a+=116)t.beginPath(),t.moveTo(a,o),t.lineTo(a,o+20),t.stroke()}const i=new us(s);return i.colorSpace=Ne,i.anisotropy=8,i}function vw(){const s=Kh(),t=new he,e=mw(),n=od(e,.035),i=Gr(e);i.holes.push(new pr(n.map(([k,O])=>new pt(k,-O)).reverse())),t.add(Je(new wt(Wr(i,vs,Vr,.01),s.ebony))),t.add(Je(new wt(Wr(Gr(e),vs,vs+.03),s.ebony))),t.add(Je(new wt(Wr(Gr(n),.79,.8),s.spruce)));const r=od(e,.065),o=Gr(r.filter(([,k])=>k<.74).concat([[r.at(-1)[0],.74],[r[0][0],.74]]));for(const[k,O,H,I]of[[-.36,-.68,.15,.13],[-.02,-.62,.13,.11],[-.38,-.24,.17,.12],[.16,-.26,.12,.13],[-.1,.06,.1,.07]]){const z=new pr;z.absellipse(k,-O,H,I,0,Math.PI*2,!0),o.holes.push(z)}for(let k=0;k<9;k++){const O=new pr;O.absarc(-.52+k*.13,-.3,.022,0,Math.PI*2,!0),o.holes.push(O)}t.add(Je(new wt(Wr(o,.875,.895,.003),s.gold)));const a=[],l=[],c=100,h=-.64,u=.66,f=.6,d=1024,p=Math.round(d*(kn+Fn)/ss.w),g=document.createElement("canvas");g.width=d,g.height=p;const x=g.getContext("2d"),m=k=>(k+oi)/ss.w*d,M=k=>(k+Fn)/(kn+Fn)*p;x.lineCap="round";for(const k of[0,1])for(let O=0;O<c;O++){const H=O/(c-1),I=h+(u-h)*H,z=O<22;if(k===0!=!z)continue;const W=z?I+.22+.1*(1-O/22):I,J=gw(n,W)+.045;x.strokeStyle=z?"#c07a42":"#e6e6e2",x.lineWidth=z?2.4+1.6*(1-O/22):1.1+.5*(1-H),x.beginPath(),x.moveTo(m(I),M(f)),x.lineTo(m(W),M(J)),x.stroke();for(const et of[.03,.075])a.push(new Jt().makeTranslation(I+(et>.05?.004:-.004),.915,f+et));H<.78&&l.push(new Jt().makeTranslation(I,.945,f-.13-(z?.05:0)))}const w=new us(g);w.colorSpace=Ne,w.anisotropy=8;const v=new wt(new Ue(ss.w,kn+Fn).rotateX(-Math.PI/2),new Re({map:w,transparent:!0,metalness:.9,roughness:.28,depthWrite:!1}));v.position.set(0,.912,(kn-Fn)/2),v.receiveShadow=!0,v.renderOrder=1,t.add(v);const y=new dr(new We(.0032,.0032,.03,8),s.pin,a.length);a.forEach((k,O)=>y.setMatrixAt(O,k));const S=new dr(new Ye(.011,.04,.05),s.felt,l.length);l.forEach((k,O)=>S.setMatrixAt(O,k));for(const k of[y,S])k.castShadow=!0,k.receiveShadow=!0,k.layers.enable(ul),t.add(k);t.add(an(Ms(ir+.02,.006,.02,s.redFelt),0,.9,.7));const T=e.filter(([,k])=>k<.62),_=Gr([[T[0][0],.62],...T,[T.at(-1)[0],.62]].map(([k,O])=>[k+oi,O])),b=Je(new wt(Wr(_,0,.022,.003),s.ebony)),A=new he;A.position.set(-oi,Vr,0),A.rotation.z=ic,A.add(b),t.add(A);const C=new L(.5,Vr,-.1),P=1.18,U=new L(-oi+P*Math.cos(ic),Vr+P*Math.sin(ic),-.1),F=Je(new wt(new We(.009,.009,C.distanceTo(U),10),s.ebony));F.position.copy(C).add(U).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new L(0,1,0),U.clone().sub(C).normalize()),t.add(F);const V=new he;V.add(an(Ms(.8,.29,.014,s.ebony),0,.145,0)),V.add(an(Ms(.8,.02,.05,s.ebony),0,.01,.02));const q=Je(new wt(new Ue(.42,.29),s.paper));V.add(an(q,0,.165,.008)),V.rotation.x=-.26,V.position.set(0,Vr,.7),t.add(V),t.add(an(Ms(ss.w,.06,Fn-kn,s.ebony),0,vs+.03,(Fn+kn)/2));for(const k of[-1,1]){const O=Je(new wt(new Wn(oi-ir/2,.17,Fn-kn,3,.012),s.ebony));t.add(an(O,k*(oi+ir/2)/2,vs+.085,(Fn+kn)/2))}t.add(an(Ms(ir,.1,$i-kn+.01,s.ebony),0,oa+.04,($i+kn)/2)),t.add(an(Ms(ir,.035,.015,s.ebony),0,oa-.03,Fn-.0075));const X=new Map,j=new Wn(ya-.0011,.022,nd-$i,2,.0015).translate(0,-.011,(nd-$i)/2),G=new Wn(.0125,.017,id-$i-.01,2,.002).translate(0,.0045,(id-$i-.01)/2+.01);let K=0;for(let k=21;k<=108;k++){let O;sd(k)?(O=Je(new wt(G,s.sharp)),O.position.set(ed+K*ya,oa,$i)):(O=Je(new wt(j,s.ivory)),O.position.set(ed+(K+.5)*ya,oa,$i),K++),O.userData.key=k,X.set(k,O),t.add(O)}const tt=new ol([[.03,0],[.036,.05],[.038,.07],[.042,.25],[.05,.46],[.056,.56],[.068,.585],[.068,.6]].map(([k,O])=>new pt(k,O)),28);for(const[k,O]of[[-.62,.9],[.62,.9],[-.42,-.84]])t.add(an(Je(new wt(tt,s.ebony)),k,.045,O)),t.add(an(Je(new wt(new We(.022,.022,.03,16).rotateZ(Math.PI/2),s.brass)),k,.022,O));for(const k of[-1,1])t.add(an(Ms(.03,vs-.14,.03,s.ebony),k*.07,.14+(vs-.14)/2,.76));t.add(an(Je(new wt(new Wn(.34,.09,.13,2,.01),s.ebony)),0,.09,.77));for(const k of[-.07,0,.07]){const O=Je(new wt(new Wn(.026,.008,.13,2,.003),s.brass));O.rotation.x=.12,t.add(an(O,k,.07,.89))}const ut=new he;for(const[k,O]of[[-.33,-.14],[.33,-.14],[-.33,.14],[.33,.14]])ut.add(an(Je(new wt(new We(.022,.016,.45,14),s.ebony)),k,.225,O));ut.add(an(Je(new wt(new Wn(qn.w,.07,qn.d,2,.008),s.ebony)),0,.46,0)),ut.add(an(Je(new wt(new Wn(qn.w-.02,.045,qn.d-.02,4,.018),s.leather)),0,.51,0)),ut.position.z=qn.z,t.add(ut);const B=new Map;return{group:t,keys:X,press(k,O){X.has(k)&&B.set(k,O?1:0)},update(k){for(const[O,H]of B){const I=X.get(O),z=H?sd(O)?.07:.06:0,W=H?60:22;I.rotation.x+=(z-I.rotation.x)*(1-Math.exp(-W*k)),!H&&Math.abs(I.rotation.x)<1e-4&&(I.rotation.x=0,B.delete(O))}}}}const as=1.62,Mw=12,_w=6.5,yw=2,ww=1.7,Ki=1.15,ad=.0022,Sw=2.6,bw=4.6,gn=.3;class Ew{constructor(t){R(this,"pos",new L(6.6,as,10.2));R(this,"vel",new L);R(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));R(this,"pitch",.05);R(this,"yawVel",0);R(this,"pitchVel",0);R(this,"keys",new Set);R(this,"taps",new Map);R(this,"frozen",!1);R(this,"glide",new pt);R(this,"spin",0);R(this,"goal",null);R(this,"moved",!1);R(this,"seated",!1);R(this,"onSeatedMove",()=>{});R(this,"solids",[]);R(this,"obstacles",[]);R(this,"boxes",[]);R(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*ad,this.pitch=Math.max(-Ki,Math.min(Ki,this.pitch-e.movementY*ad)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(t,e){if(this.seated){this.onSeatedMove();return}this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-Ki,Math.min(Ki,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*yw-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*ww-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>Ki||this.pitch<-Ki)&&(this.pitch=Math.max(-Ki,Math.min(Ki,this.pitch)),this.pitchVel=0);let r=0,o=0;this.seated||(e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1)),(r||o||n||i)&&(this.moved=!0);let a=0,l=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?bw:Sw,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,l=(-d*r-f*o)/u*h}const c=1-Math.exp(-(r||o?Mw:_w)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),p=Math.hypot(f,d);if(p>1e-9){const g=f/p,x=d/p,m=this.vel.x*g+this.vel.z*x;m<0&&(this.vel.x-=g*m,this.vel.z-=x*m)}}!this.frozen&&!this.seated&&this.coast(t),this.seated&&(this.vel.set(0,0,0),this.glide.set(0,0),this.goal=null)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let n=0;n<2;n++)for(const i of this.solids){const r=Math.max(i.x0,Math.min(t.x,i.x1)),o=Math.max(i.z0,Math.min(t.z,i.z1)),a=t.x-r,l=t.z-o,c=a*a+l*l;if(!(c>=gn*gn))if(c>1e-12){const h=Math.sqrt(c);t.x+=a/h*(gn-h),t.z+=l/h*(gn-h)}else{const h=[t.x-i.x0+gn,i.x1-t.x+gn,t.z-i.z0+gn,i.z1-t.z+gn],u=Math.min(...h);u===h[0]?t.x=i.x0-gn:u===h[1]?t.x=i.x1+gn:u===h[2]?t.z=i.z0-gn:t.z=i.z1+gn}}for(const n of this.obstacles){const i=t.x-n.x,r=t.z-n.z,o=Math.hypot(i,r),a=gn*.7+n.r;o<a&&o>1e-6&&(t.x=n.x+i/o*a,t.z=n.z+r/o*a)}const e=gn*.75;for(const n of this.boxes){const i=t.x-n.x,r=t.z-n.z,o=i*n.c-r*n.s,a=i*n.s+r*n.c,l=Math.max(-n.hw,Math.min(n.hw,o)),c=Math.max(-n.hd,Math.min(n.hd,a));let h=o-l,u=a-c;const f=Math.hypot(h,u);if(f>=e)continue;let d,p;if(f>1e-6)h/=f,u/=f,d=l+h*e,p=c+u*e;else{const g=[o+n.hw,n.hw-o,a+n.hd,n.hd-a],x=Math.min(...g);d=x===g[0]?-n.hw-e:x===g[1]?n.hw+e:o,p=x===g[2]?-n.hd-e:x===g[3]?n.hd+e:a}t.x=n.x+d*n.c+p*n.s,t.z=n.z-d*n.s+p*n.c}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const Tw={couch:{name:"Couch",w:2.3,d:.98},table:{name:"Coffee table",w:1.2,d:.6},cabinet:{name:"Stereo cabinet",w:.62,d:.46},speakerL:{name:"Left speaker",w:.44,d:.5},speakerR:{name:"Right speaker",w:.44,d:.5},piano:{name:"Grand piano",w:ss.w,d:ss.d}},aa={couch:.38,table:.8,stereo:.085,piano:.5},Aw=.0254;let Fi=null;function n0(){const s=td([36,64,56],[90,106,100],3),t=td([42,74,60],[84,102,92],7),e=u=>new xn({color:16777215,map:u.map,bumpMap:u.bump,bumpScale:.35,roughness:.93,sheen:1,sheenRoughness:.4,sheenColor:new Ct("#9fbdb4"),vertexColors:!0}),n=ah([118,80,50],[74,47,29],11,.55),i=ah([214,200,176],[184,166,138],21,.4),r=aw(),o=Array.from({length:wo},(u,f)=>{const d=r.clone();return d.repeat.set(.25,.25),d.offset.set(f%4*.25,1-(Math.floor(f/4)+1)*.25),new Re({map:d,roughness:.72})}),a=Array.from({length:wo},(u,f)=>new Re({color:new Ct(lw(f)).multiplyScalar(.8),roughness:.75})),l=cw("#c8692c"),c=fw(),h={side:Yn};return{velvet:e(s),pillow:e(t),walnut:new xn({map:n,roughness:.48,clearcoat:.3,clearcoatRoughness:.38}),birch:new Re({map:i,roughness:.66}),lacquer:new xn({color:"#ecebe6",roughness:.3,clearcoat:.55,clearcoatRoughness:.16}),whiteMatte:new xn({color:"#e8e6df",roughness:.48,clearcoat:.2,clearcoatRoughness:.3}),shadowGap:new Re({color:"#141414",roughness:.8}),steel:new Re({color:"#161616",metalness:.85,roughness:.4}),alu:new Re({color:"#cfcfcf",metalness:1,roughness:.3,roughnessMap:c}),chrome:new Re({color:"#e6e6e6",metalness:1,roughness:.1}),rubber:new Re({color:"#141414",roughness:.36,...h}),paper:new Re({color:"#3c3c3b",roughness:.62,...h}),cap:new Re({color:"#161616",roughness:.18,...h}),trim:new Re({color:"#1f1f21",metalness:.5,roughness:.42}),ring:new Re({color:"#a7a7a5",metalness:.25,roughness:.38,...h}),silk:new xn({color:"#2b2b2b",roughness:.7,sheen:.6,sheenColor:new Ct("#777"),...h}),faceplate:new Re({color:"#232325",metalness:.3,roughness:.5,...h}),hole:new qe({color:"#050505"}),cord:new Re({color:"#0e0e0e",roughness:.45}),glass:new xn({color:"#0b0b0d",roughness:.06,clearcoat:1,clearcoatRoughness:.05}),smoked:new xn({color:"#0b0b0d",roughness:.05,transparent:!0,opacity:.45,depthWrite:!1}),record:new xn({map:l.map,roughness:.3,anisotropy:.85,anisotropyMap:l.aniso,clearcoat:.3,clearcoatRoughness:.25}),vinylEdge:new Re({color:"#0a0a0a",roughness:.3}),covers:o,spines:a,vu:new qe({map:hw(),color:new Ct(.62,.6,.58),toneMapped:!1}),dial:new qe({map:uw(),color:new Ct(.55,.55,.55),toneMapped:!1}),invisible:new qe({visible:!1})}}function Rw(s){const t=[...qa.values()].flatMap(e=>[e.cover,e.spine]);for(const e of Object.values(s))for(const n of Array.isArray(e)?e:[e])n.isMeshStandardMaterial&&t.push(n);return t}function ue(s){return s.castShadow=!0,s.receiveShadow=!0,s.layers.enable(ul),s}function Zt(s,t,e,n){return s.position.set(t,e,n),s}function Li(s,t,e,n){return ue(new wt(new Ye(s,t,e),n))}function Zh(s,t=!1){s.deleteAttribute("normal"),s.deleteAttribute("uv");const e=t?s:$h(s,1e-5);return e.computeVertexNormals(),Cw(e),e}function Cw(s){const t=s.attributes.position,e=s.attributes.normal,n=new Float32Array(t.count*2);for(let i=0;i<t.count;i++){const r=Math.abs(e.getX(i)),o=Math.abs(e.getY(i)),a=Math.abs(e.getZ(i)),[l,c]=o>=r&&o>=a?[t.getX(i),t.getZ(i)]:r>=a?[t.getZ(i),t.getY(i)]:[t.getX(i),t.getY(i)];n[i*2]=l,n[i*2+1]=c}s.setAttribute("uv",new mn(n,2))}function i0(s,t,e=.5){const n=[],i=s.length;for(let r=0;r<i;r++){const o=s[(r-1+i)%i],a=s[r],l=s[(r+1)%i],c=o[0]-a[0],h=o[1]-a[1],u=l[0]-a[0],f=l[1]-a[1],d=Math.hypot(c,h),p=Math.hypot(u,f),g=(c*u+h*f)/(d*p),x=Math.PI-Math.acos(Math.max(-1,Math.min(1,g)));if(x<e||d<1e-6||p<1e-6){n.push(a);continue}const m=Math.min(t/Math.tan((Math.PI-x)/2),d*.45,p*.45),M=[a[0]+c/d*m,a[1]+h/d*m],w=[a[0]+u/p*m,a[1]+f/p*m];for(let v=0;v<=6;v++){const y=v/6,S=1-y;n.push([S*S*M[0]+2*S*y*a[0]+y*y*w[0],S*S*M[1]+2*S*y*a[1]+y*y*w[1]])}}return n}function Jh(s,t,e,n,i=4){const r=new bo(s.map(([a,l])=>new pt(a,-l))),o=new rl(r,{depth:Math.max(.001,e-t-2*n),bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:i,curveSegments:8,steps:1});return o.rotateX(-Math.PI/2),o.translate(0,t+n,0),o}function rs(s,t=64){const e=new ol(s.map(([n,i])=>new pt(Math.max(n,0),i)),t);return e.rotateX(Math.PI/2),e}const Xa=(s,t,e,n,i,r)=>Array.from({length:r+1},(o,a)=>{const l=n+(i-n)*a/r;return[s+e*Math.cos(l),t+e*Math.sin(l)]}),Qh={red:new Ct(1,.16,.06),green:new Ct(.25,1,.35),amber:new Ct(1,.62,.18),warm:new Ct(1,.72,.38)};function cs(s,t,e,n,i,r=.0022,o=1){const a=Qh[i],l=new wt(new Ui(r,16),new qe({color:a.clone().multiplyScalar(1.4*o).addScalar(.15*o),toneMapped:!1}));Zt(l,t,e,n+6e-4);const c=new Ch(new il({map:e0(),color:a.clone().multiplyScalar(.55*o),blending:Sa,depthWrite:!1,transparent:!0,toneMapped:!1}));return c.scale.setScalar(r*11),Zt(c,t,e,n+.004),s.add(l,c),h=>{l.material.color.copy(a).multiplyScalar(1.4*h).addScalar(.15*h),c.material.color.copy(a).multiplyScalar(.55*h)}}function s0(s,t,e,n,i,r,o=.22){const a=new Ch(new il({map:e0(),color:Qh[r].clone().multiplyScalar(o),blending:Sa,depthWrite:!1,transparent:!0,toneMapped:!1}));a.scale.set(i*2.2,i*1.5,1),Zt(a,t,e,n+.01),s.add(a)}const ie={a:1.15,zJ:-.03,zA:.4,zF:.49,T:.034,n:3,y0:.17,armH:.6,backH:.8,endR:.07,base:.3,seat:.455},Pw=ie.zJ+.49;function Lw(s){const t=[];for(let h=0;h<=40;h++)t.push([-1.15,ie.zA-(ie.zA-ie.zJ)*h/40]);const e=2400;for(let h=1;h<e;h++){const u=Math.PI-Math.PI*h/e,f=Math.cos(u),d=Math.sin(u);t.push([ie.a*Math.sign(f)*Math.pow(Math.abs(f),2/ie.n),ie.zJ-Pw*Math.pow(Math.abs(d),2/ie.n)])}for(let h=0;h<=40;h++)t.push([ie.a,ie.zJ+(ie.zA-ie.zJ)*h/40]);const n=[0];for(let h=1;h<t.length;h++)n.push(n[h-1]+Math.hypot(t[h][0]-t[h-1][0],t[h][1]-t[h-1][1]));const i=n[n.length-1],r=Math.ceil(i/s),o=[],a=[];let l=0;for(let h=0;h<=r;h++){const u=i*h/r;for(;l<t.length-2&&n[l+1]<u;)l++;const f=(u-n[l])/Math.max(1e-9,n[l+1]-n[l]);o.push([t[l][0]+(t[l+1][0]-t[l][0])*f,t[l][1]+(t[l+1][1]-t[l][1])*f]),a.push(u)}const c=o.map((h,u)=>{const f=o[Math.max(0,u-1)],d=o[Math.min(o.length-1,u+1)],p=d[0]-f[0],g=d[1]-f[1],x=Math.hypot(p,g);return[g/x,-p/x]});return{p:o,n:c,s:a}}const jh=(s,t)=>s.p.map(([e,n],i)=>[e-s.n[i][0]*t,n-s.n[i][1]*t]);function Iw(s){const t=ie.T,e=t/2,n=10,i=s.p.length-1,r=s.s[i],o=M=>{const w=s.p[M][1],v=Math.min(s.s[M],r-s.s[M]);let y=ie.armH+(ie.backH-ie.armH)*(1-De.smoothstep(w,-.25,.3));return v<ie.endR&&(y-=ie.endR-Math.sqrt(Math.max(0,ie.endR*ie.endR-(ie.endR-v)**2))),Math.max(y,ie.y0+.12)},a=[],l=[],c=[],h=n+3;for(let M=0;M<=i;M++){const[w,v]=s.p[M],[y,S]=s.n[M],T=w-y*e,_=v-S*e,b=o(M),A=[[T+y*e,ie.y0,_+S*e]];for(let P=0;P<=n;P++){const U=Math.PI*P/n;A.push([T+y*e*Math.cos(U),b-e+e*Math.sin(U),_+S*e*Math.cos(U)])}A.push([T-y*e,ie.y0,_-S*e]);let C=0;A.forEach((P,U)=>{U&&(C+=Math.hypot(P[0]-A[U-1][0],P[1]-A[U-1][1],P[2]-A[U-1][2])),a.push(...P),l.push(s.s[M],C)})}for(let M=0;M<i;M++)for(let w=0;w<h-1;w++){const v=M*h+w,y=(M+1)*h+w,S=y+1,T=v+1;c.push(v,S,y,v,T,S)}const u=new be;u.setAttribute("position",new Wt(a,3)),u.setAttribute("uv",new Wt(l,2)),u.setIndex(c),u.computeVertexNormals();const f=[],d=[],p=[],g=(M,w)=>{const v=f.length/3,y=M.reduce((S,T)=>[S[0]+T[0]/M.length,S[1]+T[1]/M.length,S[2]+T[2]/M.length],[0,0,0]);f.push(...y),p.push(y[0]+y[2],y[1]);for(const S of M)f.push(S[0],S[1],S[2]),p.push(S[0]+S[2],S[1]);for(let S=0;S<M.length;S++){const T=v+1+S,_=v+1+(S+1)%M.length,b=new L(...M[S]),A=new L(...M[(S+1)%M.length]),C=new L(...y);new L().crossVectors(b.clone().sub(C),A.clone().sub(C)).dot(new L(...w))>=0?d.push(v,T,_):d.push(v,_,T)}};for(const[M,w]of[[0,-1],[i,1]]){const v=s.p[Math.max(0,M-1)],y=s.p[Math.min(i,M+1)],S=Math.hypot(y[0]-v[0],y[1]-v[1]),T=[];for(let _=0;_<h;_++)T.push([a[(M*h+_)*3],a[(M*h+_)*3+1],a[(M*h+_)*3+2]]);g(T,[(y[0]-v[0])/S*w,0,(y[1]-v[1])/S*w])}for(let M=0;M<i;M++){const w=(y,S)=>[a[(y*h+S)*3],a[(y*h+S)*3+1],a[(y*h+S)*3+2]],v=f.length/3;for(const y of[w(M,0),w(M+1,0),w(M+1,h-1),w(M,h-1)])f.push(y[0],y[1],y[2]),p.push(y[0],y[2]);d.push(v,v+1,v+2,v,v+2,v+3)}const x=new be;x.setAttribute("position",new Wt(f,3)),x.setAttribute("uv",new Wt(p,2)),x.setIndex(d),x.computeVertexNormals();const m=x.attributes.normal;for(let M=0;M<m.count;M++)if(Math.abs(m.getY(M))>.9&&m.getY(M)>0){x.index.array.reverse(),x.computeVertexNormals();break}return[u,x]}const Dw=[90/36,106/64,100/56];function fl(s,t){const e=s.attributes.position,n=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){const r=Math.max(0,Math.min(1,t(e.getX(i),e.getY(i),e.getZ(i))))*.55;for(let o=0;o<3;o++)n[i*3+o]=1+r*(Dw[o]-1)}s.setAttribute("color",new mn(n,3))}const es=(s,t)=>Math.exp(-(s*s)/(t*t));function Nw(s,t){const i=t*.038000000000000006,r=jh(s,ie.T+.003+.034),o=ie.zF+.015-.034,a=t<0?r.map((f,d)=>d):r.map((f,d)=>r.length-1-d),l=[[r[a[0]][0],o]];for(const f of a){const[d,p]=r[f];if(t*d<=t*i){l.push([i,p]);break}p<=o&&l.push([d,p])}l.push([i,o]);const c=Zh(Jh(i0(l,.05),ie.base,ie.seat,.034,5)),h=c.attributes.position,u=t*.55;for(let f=0;f<h.count;f++){const d=h.getX(f),p=h.getY(f),g=h.getZ(f),x=De.smoothstep(p,ie.seat-.06,ie.seat),m=Math.max(0,1-((d-u)/.6)**2)*Math.max(0,1-((g-.05)/.5)**2),M=es(d-u,.22)*es(g-.18,.18);h.setY(f,p+x*(.016*m-.012*M))}return c.computeVertexNormals(),fl(c,(f,d,p)=>(d>ie.seat-.05?.8*es(f-u,.25)*es(p-.2,.2):0)+(p>ie.zF-.04?.7*De.smoothstep(d,ie.base+.04,ie.seat-.03)*es(f-u,.4):0)),c}function Uw(s){const e=jh(s,ie.T+.002+.014),n=ie.zF-.014,i=[[e[0][0],n],...e.filter(([,o])=>o<=n),[e[e.length-1][0],n]],r=Zh(Jh(i0(i,.03),ie.y0,ie.base+.01,.014,3));return fl(r,(o,a,l)=>l>ie.zF-.03&&a<ie.y0+.04?.6:0),r}function zw(s,t){const e=jh(s,ie.T+.002),n=e.reduce((P,U,F)=>Math.abs(U[0])<Math.abs(e[P][0])?F:P,0),i=[];if(t<0)for(let P=n;P>=0&&(i.push(P),!(e[P][1]>ie.zJ+.1&&e[P][0]<0));P--);else for(let P=n;P<e.length&&(i.push(P),!(e[P][1]>ie.zJ+.1&&e[P][0]>0));P++);const r=i.filter(P=>t*e[P][0]>.006),o=ie.seat-.03,a=.77,l=(a-o)/2,c=(a+o)/2,h=.2,u=.115,f=36,d=.1;let p=0;const g=[0];for(let P=1;P<r.length;P++)p+=Math.hypot(e[r[P]][0]-e[r[P-1]][0],e[r[P]][1]-e[r[P-1]][1]),g.push(p);const x=[],m=[],M=[];r.forEach((P,U)=>{const[F,V]=e[P],[q,X]=s.n[P],j=Math.min(g[U],p-g[U]),G=j>=d?1:Math.sqrt(Math.max(0,1-(1-j/d)**2));for(let K=0;K<f;K++){const tt=K/f*Math.PI*2,ut=Math.cos(tt),B=Math.sin(tt),k=Math.sign(ut)*Math.pow(Math.abs(ut),.5),O=Math.sign(B)*Math.pow(Math.abs(B),.5),H=c+O*l,I=(H-o)/(a-o),z=(h+(u-h)*I)/2;let W=z+k*z+(k>0?k*.022*(1-O*O):0);const J=.08,et=c+(H-c)*G;W=J+(W-J)*G,x.push(F-q*W,et,V-X*W),m.push(g[U],K/f*.9)}});for(let P=0;P<r.length-1;P++)for(let U=0;U<f;U++){const F=P*f+U,V=(P+1)*f+U,q=(P+1)*f+(U+1)%f,X=P*f+(U+1)%f;t<0?M.push(F,V,q,F,q,X):M.push(F,q,V,F,X,q)}const w=new be;w.setAttribute("position",new Wt(x,3)),w.setAttribute("uv",new Wt(m,2)),w.setIndex(M);const v=$h(w,1e-6);v.computeVertexNormals();const y=Math.floor(r.length/2),[S,T]=s.n[r[y]],_=v.attributes.normal,b=new L(x[y*f*3],x[y*f*3+1],x[y*f*3+2]);let A=0,C=1/0;for(let P=0;P<v.attributes.position.count;P++){const U=b.distanceToSquared(new L().fromBufferAttribute(v.attributes.position,P));U<C&&(C=U,A=P)}if(_.getX(A)*-S+_.getZ(A)*-T<0){const P=v.index.array;for(let U=0;U<P.length;U+=3){const F=P[U+1];P[U+1]=P[U+2],P[U+2]=F}v.index.needsUpdate=!0,v.computeVertexNormals()}return fl(v,(P,U,F)=>.6*es(P-t*.5,.3)*es(U-.62,.1)*(F>-.35?1:.5)),v}function Fw(s,t,e){const i=[],r=[];for(const h of[1,-1]){const u=i.length/3;for(let f=0;f<=22;f++)for(let d=0;d<=22;d++){const p=-1+2*d/22,g=-1+2*f/22,x=p*s/2*(1-.07*(1-g*g)),m=g*t/2*(1-.07*(1-p*p)),M=e/2*Math.pow(Math.max(0,(1-p**4)*(1-g**4)),.55)*h;i.push(x,m,M)}for(let f=0;f<22;f++)for(let d=0;d<22;d++){const p=u+f*23+d,g=p+1,x=p+22+2,m=p+22+1;h>0?r.push(p,g,x,p,x,m):r.push(p,x,g,p,m,x)}}const o=new be;o.setAttribute("position",new Wt(i,3)),o.setIndex(r);const a=$h(o,1e-6);a.computeVertexNormals();const l=a.attributes.position,c=new Float32Array(l.count*2);for(let h=0;h<l.count;h++)c[h*2]=l.getX(h)+(l.getZ(h)>0?0:.5),c[h*2+1]=l.getY(h);return a.setAttribute("uv",new mn(c,2)),fl(a,(h,u)=>.35*es(Math.hypot(h,u),.15)),a}function kw(s){const t=new he,e=Lw(.012),[n,i]=Iw(e);t.add(ue(new wt(n,s.walnut)),ue(new wt(i,s.walnut))),t.add(ue(new wt(Uw(e),s.velvet)));for(const o of[-1,1]){t.add(ue(new wt(Nw(e,o),s.velvet))),t.add(ue(new wt(zw(e,o),s.velvet)));const a=ue(new wt(Fw(.44,.44,.15),s.pillow));a.rotation.set(-.38,o*-.62,o*-.1,"YXZ"),Zt(a,o*.76,.68,-.12),t.add(a)}const r=new We(.021,.0125,.18,20).translate(0,-.09,0);for(const[o,a]of[[-.98,.36],[.98,.36],[-.9,-.3],[.9,-.3]]){const l=ue(new wt(r,s.walnut));l.rotation.set(a>0?-.09:.09,0,o<0?-.12:.12),Zt(l,o,.178,a),t.add(l)}return t}const Kn=.4;function Ow(s,t,e){const n=t*.028,i=e*.022,r=Kn-.038,o=new Uh,a=new L(-.05,r,0),l=new L(n-.011,.028,i),c=new L(n+.011,.028,i),h=new L(.05,r,0);o.add(new xo(a,l)),o.add(new up(l,new L(n-.009,.004,i),new L(n+.009,.004,i),c)),o.add(new xo(c,h));const u=new he;return u.add(ue(new wt(new Sr(o,80,.0055,10),s.steel))),u.add(Zt(Li(.13,.004,.055,s.steel),0,r+.001,0)),u}function Bw(s){const t=new he,e=.06,n=.6,i=.3,r=[];for(const[a,l,c]of[[n-e,i-e,0],[-n+e,i-e,Math.PI/2],[-n+e,-i+e,Math.PI],[n-e,-i+e,Math.PI*1.5]])r.push(...Xa(a,l,e,c,c+Math.PI/2,10));const o=Zh(Jh(r,Kn-.035,Kn,.007,3));t.add(ue(new wt(o,s.walnut)));for(const[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.add(Zt(Ow(s,a,l),a*(n-.11),0,l*(i-.075)));return t.add(Zt(Gw(s),Hw,Kn,-.01)),t.add(Zt(qw(s),Vw,Kn,-.02)),t}const Hw=-.2,Vw=.24,ld=[-.2+.12,Kn+.035,-.01-.172];let lh=null;function Gw(s){const t=new he;for(const[M,w]of[[-.19,-.14],[.19,-.14],[-.19,.14],[.19,.14]])t.add(Zt(ue(new wt(new We(.016,.017,.012,20),s.rubber)),M,.006,w));const e=.012+.075;t.add(Zt(ue(new wt(new Wn(.44,.075,.34,3,.008),s.lacquer)),0,.012+.0375,0));const n=-.055,i=e+.003,r=new he;r.position.set(n,0,0),r.add(Zt(ue(new wt(new We(.15,.15,.022,96),s.alu)),0,i+.011,0));const o=[s.vinylEdge,s.record,s.vinylEdge],a=ue(new wt(new We(.1515,.1515,.0018,128),o));r.add(Zt(a,0,i+.022+9e-4,0)),r.add(Zt(ue(new wt(new We(.0036,.0036,.016,16),s.chrome)),0,i+.024+.008,0)),t.add(r);const l=.158,c=-.1,h=e+.046;t.add(Zt(ue(new wt(new We(.024,.026,.03,32),s.alu)),l,e+.015,c));const u=new he;u.position.set(l,0,c),u.add(Zt(ue(new wt(new We(.009,.011,.018,20),s.rubber)),0,e+.037,0));const f=new sl([new L(0,h,-.01),new L(.006,h-.002,.07),new L(.012,h-.004,.15),new L(-.004,h-.007,.215)]);u.add(ue(new wt(new Sr(f,40,.0042,10),s.chrome)));const d=Zt(Li(.018,.006,.042,s.rubber),-.008,h-.012,.232);d.rotation.y=.25,u.add(d);const p=ue(new wt(new We(.017,.017,.032,28),s.alu));p.rotation.x=Math.PI/2,u.add(Zt(p,0,h,-.05)),t.add(u),t.add(Zt(ue(new wt(new We(.004,.004,.034,12),s.chrome)),l+.024,e+.017,c+.19)),t.add(Zt(ue(new wt(new We(.014,.015,.012,32),s.alu)),-.175,e+.006,.13)),t.add(Zt(Li(.022,.006,.012,s.whiteMatte),-.125,e+.003,.138)),t.traverse(M=>{M.userData.deck=!0});const g=new pt(-.012,.25),x=new pt(n-l,-c);return lh={spin:r,arm:u,record:a,armAt:M=>{let w=-1.2,v=0;for(let y=0;y<40;y++){const S=(w+v)/2,T=Math.cos(S),_=Math.sin(S),b=g.x*T+g.y*_,A=-g.x*_+g.y*T;Math.hypot(b-x.x,A-x.y)>M?v=S:w=S}return(w+v)/2},restRecord:o},t}const cd=new Map;function ch(s){const t=`${s.id}|${s.v??0}`;let e=cd.get(t);if(e)return e;const n=Fi,i=n.record.map.image,r=document.createElement("canvas");r.width=i.width,r.height=i.height;const o=r.getContext("2d");o.drawImage(i,0,0);const a=new us(r);a.colorSpace=Ne,a.anisotropy=8;const l=r.width/2;if(o.fillStyle=s.tint??"#c8692c",o.beginPath(),o.arc(l,l,l*.33,0,Math.PI*2),o.fill(),s.cover){const h=new Image;h.onload=()=>{o.save(),o.beginPath(),o.arc(l,l,l*.33,0,Math.PI*2),o.clip(),o.drawImage(h,l-l*.33,l-l*.33,l*.66,l*.66),o.restore(),o.fillStyle="#d8d8d8",o.beginPath(),o.arc(l,l,l*.025,0,Math.PI*2),o.fill(),a.needsUpdate=!0},h.src=`${s.cover}?v=${s.v??0}`}const c=new xn({map:a,roughness:.3,anisotropy:.85,anisotropyMap:n.record.anisotropyMap,clearcoat:.3,clearcoatRoughness:.25,envMap:n.record.envMap});return e=[n.vinylEdge,c,n.vinylEdge],cd.set(t,e),e}function r0(s,t,e=.315,n){if(n){const{cover:o,spine:a,bright:l}=Ww(n),c=ue(new wt(new Ye(e,e,.0034),[a,a,a,a,o,a]));return c.userData.lit=o,c.userData.bright=l,c}const i=s.spines[t],r=s.covers[t];return ue(new wt(new Ye(e,e,.0034),[i,i,i,i,r,r]))}const hd=new Map,qa=new Map;function Ww(s){const t=`${s.id}|${s.cover??""}|${s.v??0}|${s.tint??""}`;let e=qa.get(t);if(e)return e;const n=new Re({color:new Ct(s.tint??"#3a3a38").multiplyScalar(.85),roughness:.75});let i=n,r=n;if(s.cover){const o=`${s.cover}?v=${s.v??0}`;let a=hd.get(o);a||(a=new za().load(o),a.colorSpace=Ne,a.anisotropy=8,hd.set(o,a)),i=new Re({map:a,roughness:.7,emissive:16777215,emissiveMap:a,emissiveIntensity:0}),r=new qe({map:a,toneMapped:!1})}return e={cover:i,spine:n,bright:r},qa.set(t,e),e}let Ya=[];const o0=26,ls={hw:.125,z0:-.07,lean:.18,N:o0,pitch:.0059,r:.0028},a0=s=>ls.z0+s*ls.pitch/Math.cos(ls.lean),Xw=a0(ls.N-1)+.035;function la(s,t,e=!1){const n=new Uh,i=.012,r=t.length,o=l=>t[(l+r)%r];let a=e?o(0).clone().lerp(o(1),.5):o(0).clone();for(let l=1;l<(e?r+1:r-1);l++){const c=o(l-1),h=o(l),u=o(l+1),f=h.clone().add(c.clone().sub(h).setLength(Math.min(i,c.distanceTo(h)/2))),d=h.clone().add(u.clone().sub(h).setLength(Math.min(i,u.distanceTo(h)/2)));n.add(new xo(a,f)),n.add(new Nh(f,h,d)),a=d}return n.add(new xo(a,e?o(0).clone().lerp(o(1),.5):o(r-1))),ue(new wt(new Sr(n,160,ls.r,8),s.steel))}let $a=[],hh=null;function qw(s){const t=new he,{hw:e,r:n,lean:i}=ls,r=n,o=ls.z0-.006,a=Xw,l=.2,c=.1,h=(p,g,x)=>new L(p,g,x),u=p=>o-Math.tan(i)*p;t.add(la(s,[h(-e,r,o),h(-e,l,u(l)),h(e,l,u(l)),h(e,r,o)])),t.add(la(s,[h(-e,r,a),h(-e,c,a),h(e,c,a),h(e,r,a)]));for(const p of[-1,1])t.add(la(s,[h(p*e,r,o),h(p*e,r,a)]));for(const p of[o+.03,(o+a)/2,a-.03])t.add(la(s,[h(-e,r,p),h(e,r,p)]));$a=[];const f=[],d=Math.min(Ya.length,ls.N);for(let p=0;p<d;p++){const g=M=>Math.sin(p*12.9898+M*78.233)*.5,x=Ya[d-1-p],m=r0(s,0,.315,x);m.userData.album=x.id,m.geometry.translate(0,.315/2,0),m.rotation.set(-(i+g(1)*.03),g(3)*.02,0),Zt(m,g(4)*.008,2*n+Math.abs(g(2))*.004,a0(p)),m.userData.records=!0,t.add(m),f.unshift({mesh:m,rest:m.rotation.clone(),base:m.position.clone()})}return $a=f,hh=t,t.traverse(p=>{p.userData.records=!0}),t}const Qi=.25*Aw,sr=.72,ud=-.79,yr={needles:[],bar:[]},dn={W:.62,D:.46,t:.022,plinth:.1,lp:.4,back:.008,setback:.003},l0=[[.15,Zw],[.13,c0],[.09,Jw],[.13,Qw]],Yw=dn.plinth+dn.t+2*(dn.lp+dn.t)+l0.reduce((s,[t])=>s+t+2*Qi+dn.t,0);function fd(s,t,e,n,i,r=[]){let o=-.286;for(let a=0;a<n;a++){const l=(a*5+i)%wo,c=a<n-6?0:.06+(a-(n-6))*.05,h=r0(t,l,.315,r[a]);h.geometry.rotateY(Math.PI/2).translate(.0017,.315/2,0),h.rotation.z=-c,Zt(h,o,e,-.035),s.add(h),o+=.0052/Math.cos(c)+(a>=n-6?4e-4:0)}}function $w(s){yr.needles=[],yr.bar=[];const t=new he,{W:e,D:n,t:i,plinth:r}=dn,o=Yw,a=e-2*i;t.add(Zt(Li(e-.06,r,n-.06,s.shadowGap),0,r/2,-.01));for(const d of[-1,1])t.add(Zt(Li(i,o-r,n,s.lacquer),d*(e/2-i/2),(o+r)/2,0));t.add(Zt(Li(a,o-r-i,dn.back,s.lacquer),0,(o+r)/2,-n/2+dn.back/2));const l=d=>t.add(Zt(Li(a,i,n-dn.back,s.lacquer),0,d+i/2,dn.back/2));let c=r;l(c),c+=i;const h=Ya.slice(o0);fd(t,s,c,44,1,h.slice(40)),c+=dn.lp,l(c),c+=i,fd(t,s,c,40,4,h.slice(0,40)),c+=dn.lp,l(c),c+=i;const u=a-2*Qi,f=n-dn.back-dn.setback-.03;for(const[d,p]of l0){const g=new he;for(const[m,M]of[[-u/2+.04,-f/2+.04],[u/2-.04,-f/2+.04],[-u/2+.04,f/2-.04],[u/2-.04,f/2-.04]])g.add(Zt(ue(new wt(new We(.012,.014,Qi,16),s.rubber)),m,Qi/2,M));g.add(Zt(ue(new wt(new Wn(u,d,f,2,.003),s.whiteMatte)),0,Qi+d/2,0));const x=new he;if(Zt(x,0,Qi+d/2,f/2),p(x,u,d),g.add(x),Zt(g,0,c,n/2-dn.setback-f/2),t.add(g),p===c0){const m=new wp(Qh.warm,.012,.9,2);m.layers.enable(5),Zt(m,-u/2+.1,c+Qi+d/2,n/2+.04),t.add(m)}c+=d+2*Qi,l(c),c+=i}return t}const Ka=(s,t,e)=>{const n=ue(new wt(new We(t,t*1.04,e,40),s.alu));return n.rotation.x=Math.PI/2,n};function Kw(s,t,e){return new wt(new Ue(t,e),s.glass)}function Zw(s,t,e){const n=Fi;s.add(Zt(Ka(n,.018,.012),-t/2+.05,-.01,.006));const i=Kw(n,.16,.012);s.add(Zt(i,.06,.02,8e-4));for(let r=0;r<12;r++)yr.bar.push(cs(s,-.01+r*.0125,.02,.001,r<7?"amber":"red",.0028,r<7?.45:.08));cs(s,t/2-.04,-.035,5e-4,"red",.0022);for(let r=0;r<6;r++)s.add(Zt(new wt(new Ue(.22,.0016),n.shadowGap),.05,-.03-r*.006,6e-4))}function c0(s,t,e){const n=Fi;for(const i of[0,1]){const r=-t/2+.06+i*.088;s.add(Zt(new wt(new Ue(.084,.056),n.trim),r,.012,6e-4)),s.add(Zt(new wt(new Ue(.076,.048),n.vu),r,.012,.0012)),s0(s,r,.012,.0012,.08,"warm",.16);const o=new wt(new Ue(9e-4,.03).translate(0,.027,0),new qe({color:"#140f08",toneMapped:!1}));o.position.set(r,.012-.024-.0024,.0016),o.rotation.z=sr,s.add(o),yr.needles.push(o)}s.add(Zt(Ka(n,.03,.022),t/2-.065,.006,.011));for(let i=0;i<3;i++)s.add(Zt(Ka(n,.009,.012),-.01+i*.038,-.04,.006));for(let i=0;i<4;i++)cs(s,.03+i*.016,.042,5e-4,"green",.0018,i===1?1:.06);cs(s,-t/2+.02,-.045,5e-4,"red",.0022)}function Jw(s,t,e){const n=Fi;s.add(Zt(new wt(new Ue(.29,.038),n.trim),-.045,.01,6e-4)),s.add(Zt(new wt(new Ue(.28,.03),n.dial),-.045,.01,.0012)),s0(s,-.045,.01,.0012,.22,"warm",.1),s.add(Zt(Ka(n,.02,.018),t/2-.05,.002,.009)),cs(s,-t/2+.03,-.028,5e-4,"red",.002),cs(s,-t/2+.045,-.028,5e-4,"green",.002)}function Qw(s,t,e){const n=Fi;s.add(Zt(new wt(new Ue(.16,.08),n.trim),-t/2+.1,.012,6e-4));const i=new wt(new Ue(.15,.072),new qe({color:new Ct(.05,.04,.03),toneMapped:!1}));s.add(Zt(i,-t/2+.1,.012,.001));const r=new wt(new Ue(.1,.06),new qe({color:new Ct(.3,.24,.16),toneMapped:!1}));s.add(Zt(r,-t/2+.1,.012,.0013));for(const o of[-1,1])s.add(Zt(new wt(new Ui(.011,20),new qe({color:"#050505"})),-t/2+.1+o*.026,.014,.0016));s.add(Zt(new wt(new Ue(.15,.072),n.smoked),-t/2+.1,.012,.002));for(let o=0;o<2;o++)for(let a=0;a<12;a++){const l=a<8?"green":a<10?"amber":"red";cs(s,.02+a*.0105,.035-o*.012,5e-4,l,.0026,a<5-o?.5:.05)}for(let o=0;o<6;o++)s.add(Zt(Li(.022,.012,.006,n.whiteMatte),.025+o*.026,-.03,.003));cs(s,t/2-.025,.04,5e-4,"red",.0022)}const uh={W:.44,D:.5,H:1.92,plinth:.03};function dd(s,t){const e=new he;e.add(ue(new wt(rs([[.098*t,-.001],[.098*t,.004],[.112*t,.0045],[.115*t,.002],[.115*t,-.001]]),s.ring)));const n=Xa(.091*t,5e-4,.0072*t,Math.PI,0,14).map(([o,a])=>[o,a]);e.add(ue(new wt(rs(n),s.rubber)));const i=[];for(let o=0;o<=12;o++){const a=o/12;i.push([.084*t-.049*t*a,-.044*t*Math.pow(a,.85)])}e.add(ue(new wt(rs(i.reverse()),s.paper)));const r=Xa(0,-.044*t,.035*t,Math.PI/2,0,10).map(([o,a])=>[o*1,-.044*t+(a+.044*t)*.55]);e.add(ue(new wt(rs(r.reverse()),s.cap)));for(let o=0;o<8;o++){const a=o/8*Math.PI*2+.3,l=new wt(new We(.0032*t+8e-4,.0032*t+8e-4,.002,10),s.trim);l.rotation.x=Math.PI/2,e.add(Zt(l,Math.cos(a)*.1065*t,Math.sin(a)*.1065*t,.005))}return e}function jw(s,t){const e=new he,n=i=>i.map(([r,o])=>[r*t,o*t]);return e.add(ue(new wt(rs(n([[.014,-.004],[.017,0],[.022,.003],[.046,.0045],[.05,.0025],[.05,-.001]])),s.faceplate))),e.add(ue(new wt(rs(n([[.047,.0046],[.05,.0028],[.0505,-.001]])),s.ring))),e.add(ue(new wt(rs(n(Xa(0,0,.0145,Math.PI/2,0,12).map(([i,r])=>[i,r*.8-.001]).reverse())),s.silk))),e}function pd(s){const t=new he,{W:e,D:n,H:i,plinth:r}=uh;t.add(Zt(Li(e-.04,r,n-.04,s.shadowGap),0,r/2,0));const o=ue(new wt(new Ye(e,i,n),[s.lacquer,s.lacquer,s.lacquer,s.lacquer,s.invisible,s.lacquer]));t.add(Zt(o,0,r+i/2,0));const a=[[1.7,.06,"t"],[1.47,.085,"m"],[1.14,.13,"w"],[.8,.13,"w"],[.46,.13,"w"],[.17,.05,"p"]],l=new bo([new pt(-e/2,0),new pt(e/2,0),new pt(e/2,i),new pt(-e/2,i)]);for(const[h,u]of a){const f=new pr;f.absarc(0,h,u,0,Math.PI*2,!0),l.holes.push(f)}const c=ue(new wt(new zh(l,48),s.lacquer));t.add(Zt(c,0,r,n/2));for(const[h,,u]of a){let f;if(u==="w")f=dd(s,1.3);else if(u==="m")f=dd(s,.85);else if(u==="t")f=jw(s,1.3);else{f=new he,f.add(ue(new wt(rs([[.058,-.001],[.058,.0025],[.05,.005],[.045,0],[.0425,-.012],[.0425,-.18]]),s.rubber)));const d=new wt(new Ui(.044,24),s.hole);f.add(Zt(d,0,0,-.18))}t.add(Zt(f,0,r+h,n/2))}t.add(Zt(new wt(new Ue(e-.02,i-.02),s.hole),0,r+i/2,n/2-.2));for(const h of[-1,1])for(const u of[.12,.7,1.3,1.85])t.add(Zt(new wt(new Ui(.0045,14),s.hole),h*(e/2-.025),r+u,n/2+6e-4));return t}function h0(s,t,e,n){const i=new L(-Math.sin(t)*Math.cos(e),Math.sin(e),-Math.cos(t)*Math.cos(e));return s.clone().addScaledVector(i,-n)}const sc=s=>Math.atan2(-s.x,-s.z),Qs=s=>new Jt().makeRotationY(De.degToRad(s.rot)).setPosition(s.x,0,s.z),Te=(s,t)=>new L(...t).applyMatrix4(s);function ca(s,t,e,n,i){const r=s.clone().sub(t),o=r.length();return r.divideScalar(o),{p:[t.x,t.y,t.z],d:[r.x,r.y,r.z],cInner:Math.cos(n),cOuter:Math.cos(n+i),i:e*o*o}}function tS(s,t=[]){Fi??(Fi=n0());const e=Fi;Ya=t.filter(T=>!T.off&&T.tracks.length+(T.cover?1:0)>0),lh=null,hh=null,$a=[];const n=()=>new Set([...Object.values(e).flat(),...Object.values(Kh()),...[...qa.values()].flatMap(T=>[T.cover,T.spine,T.bright])]),i=new he,r=new Map((s.pieces??[]).map(T=>[T.id,T])),o=[],a=[],l=[],c=s.ceiling-.03;let h=null,u=null,f=null;const d=[];let p=null,g=null,x=null;const m={couch:()=>kw(e),table:()=>Bw(e),cabinet:()=>$w(e),speakerL:()=>pd(e),speakerR:()=>pd(e),piano:()=>(h=vw(),h.group)},M={couch:.45,table:.22,cabinet:.8,speakerL:.8,speakerR:.8,piano:.22},w=(T,_)=>new L(..._).transformDirection(T);for(const[T,_]of Object.entries(Tw)){const b=r.get(T);if(!b)continue;const A=Qs(b),C=m[T]();C.matrixAutoUpdate=!1,C.matrix.copy(A),C.userData.piece=T,C.traverse(U=>{U.userData.piece=T}),i.add(C);const P=De.degToRad(b.rot);if(l.push({x:b.x,z:b.z,c:Math.cos(P),s:Math.sin(P),hw:_.w/2,hd:_.d/2}),a.push({x:b.x,z:b.z,rot:b.rot,hw:_.w/2,hd:_.d/2,k:M[T]}),T==="couch"&&(p=ca(Te(A,[0,.5,-.02]),Te(A,[0,c,.55]),aa.couch,.32,.18),o.push(p),g=Te(A,[0,.45,0])),T==="table"&&o.push(ca(Te(A,[0,Kn+.08,0]),Te(A,[0,c,.85]),aa.table,.2,.16)),T==="cabinet"&&o.push(ca(Te(A,[0,.75,-.05]),Te(A,[0,c,2.2]),aa.stereo,.27,.2)),T==="piano"&&o.push(ca(Te(A,[0,.8,.3]),Te(A,[.55,c,1.05]),aa.piano,.42,.2)),T==="couch"){const U=w(A,[0,0,1]);for(const F of[0])d.push({eye:Te(A,[F,1.08,.36]),yaw:sc(U),pitch:-.06,stand:Te(A,[F*.8,as,.86]),standYaw:sc(U)})}if(T==="piano"){const U=w(A,[0,0,-1]),F=Te(A,lr.look),V=sc(U);f={eye:h0(F,V,lr.pitch,lr.near),yaw:V,pitch:lr.pitch,stand:Te(A,[0,as,qn.z+.62]),standYaw:V,look:F},u=Te(A,dw);const q=Te(A,[0,0,qn.z]);l.push({x:q.x,z:q.z,c:Math.cos(P),s:Math.sin(P),hw:qn.w/2,hd:qn.d/2}),a.push({x:q.x,z:q.z,rot:b.rot,hw:qn.w/2,hd:qn.d/2,k:.3})}}const v=r.get("table"),y=r.get("cabinet");if(v&&y){const T=Qs(v),_=Qs(y),[b,,A]=ld,C=[Te(T,ld),Te(T,[b+.01,Kn+.0034,A-.04]),Te(T,[b+.05,Kn+.0034,-.27]),Te(T,[b+.07,Kn+.001,-.302]),Te(T,[b+.08,Kn-.05,-.318]),Te(T,[b+.1,.16,-.36]),Te(T,[b+.12,.0034,-.47])],P=C[C.length-1],U=Te(_,[-.62/2-.02,.0034,-.46/2+.06]);for(let q=1;q<=3;q++){const X=q/4,j=P.clone().lerp(U,X),G=U.clone().sub(P).normalize();j.addScaledVector(new L(-G.z,0,G.x),Math.sin(q*2.1)*.05),j.y=.0034,C.push(j)}C.push(U,Te(_,[-.62/2+.06,.0034,-.46/2-.013]),Te(_,[-.62/2+.14,.12,-.46/2-.013]),Te(_,[-.62/2+.16,.3,-.46/2-.013]));const F=new sl(C,!1,"centripetal"),V=ue(new wt(new Sr(F,420,.0032,8),e.cord));V.userData.piece="cord",i.add(V)}for(const T of o){const _=Math.acos(T.cOuter),b=Math.acos(T.cInner),A=new Gg(Eo,T.i*Math.PI,0,_,1-b/_,2);A.position.set(...T.p),A.target.position.set(T.p[0]+T.d[0],T.p[1]+T.d[1],T.p[2]+T.d[2]),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),A.shadow.camera.near=.4,A.shadow.camera.far=7,A.shadow.bias=-2e-4,A.shadow.normalBias=.012,A.shadow.radius=4,A.layers.enable(5),i.add(A,A.target),T===p&&g&&(x={centre:g,light:A,base:A.intensity})}const S=[];return i.traverse(T=>{T.isMesh&&S.push(T)}),i.updateMatrixWorld(!0),{group:i,lamps:o,feet:a,solids:l,meshes:S,piano:h,soundAt:u,couchSeats:d,pianoSeat:f,couch:x,records:$a,tableMatrix:r.get("table")?Qs(r.get("table")):null,deck:r.get("table")?lh:null,stand:r.get("table")?hh:null,meters:{needles:[...yr.needles],bar:[...yr.bar]},speakers:r.get("speakerL")&&r.get("speakerR")?[Te(Qs(r.get("speakerL")),[0,1.25,uh.D/2]),Te(Qs(r.get("speakerR")),[0,1.25,uh.D/2])]:null,dispose(){const T=n();i.traverse(_=>{var A;const b=_;if(b.isMesh||_.isSprite){(A=b.geometry)==null||A.dispose();for(const C of Array.isArray(b.material)?b.material:[b.material])C&&!T.has(C)&&C.dispose()}_.isSpotLight&&_.shadow.dispose()})}}}let md=null;function eS(s,t,e,n,i,r){const o=[];t.traverse(a=>{var c;const l=a.material;(c=l==null?void 0:l.userData)!=null&&c.lens&&!o.includes(l)&&o.push(l)}),o.forEach(a=>a.color.multiplyScalar(14)),Fi??(Fi=n0()),md=xd(s,t,e,n,i,Rw(Fi),md),r&&(gd=xd(s,t,r,n,i,Object.values(Kh()),gd)),o.forEach(a=>a.color.multiplyScalar(1/14))}let gd=null;function xd(s,t,e,n,i,r,o){const a=new Oh(256,{type:Cn}),l=new Sp(.05,60,a);for(const d of l.children)for(const p of i)d.layers.enable(p);l.position.copy(e),l.updateMatrixWorld(!0);const c=n.map(d=>d.visible);n.forEach(d=>{d.visible=!1});const h=t.background;t.background=null,l.update(s,t),t.background=h,n.forEach((d,p)=>{d.visible=c[p]});const u=new eh(s),f=u.fromCubemap(a.texture);u.dispose(),a.dispose(),o==null||o.dispose();for(const d of r)d.isMeshStandardMaterial&&(d.envMap=f.texture,d.envMapIntensity=1,d.needsUpdate=!0);return f}const co=class co{constructor(t,e,n,i,r,o){R(this,"cat",new Map);R(this,"arch");R(this,"placed",[]);R(this,"items",[]);R(this,"furniture",null);R(this,"furnLight",new ky);R(this,"migrated",!1);R(this,"interior",null);R(this,"outside",null);R(this,"sharp",new Map);R(this,"small",new Map);R(this,"baked");R(this,"labels");R(this,"outsideKey","");R(this,"blank",new vr(new Uint8Array([128,128,128,255]),1,1));R(this,"onRebuilt",()=>{});R(this,"prepTex",t=>(t.colorSpace=Ne,t.anisotropy=this.aniso,t.minFilter=is,t));R(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);R(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new jy(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new za;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(co.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new za().loadAsync(`${co.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var c;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(h=>[h.id,h])),this.arch=iy(t),Ly(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=dy(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(h=>!i.includes(h))),this.placed=e,this.items=n,this.baked=Gy(this.arch,e,this.baked);const r=this.interior,o=this.furniture,a=tS(t,this.data.albums);this.furniture=a,this.furnLight.setLamps(a.lamps,a.feet),this.interior=sw(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.furnLight,a.lamps),this.interior.group.add(a.group),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose()),o==null||o.dispose();const l=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);l!==this.outsideKey&&((c=this.outside)==null||c.dispose(),this.outside=Yy(this.scene,this.font,this.aniso,t),this.outsideKey=l),this.light(),this.onRebuilt(i)}light(){const t=this.furniture,e=this.renderer;this.scene.updateMatrixWorld(!0),this.furnLight.render(e,this.scene);const n=this.data.layout,i=(n.pieces??[]).find(c=>c.id==="couch"),r=(n.pieces??[]).find(c=>c.id==="table"),o=n.outline,a=i&&r?new L((i.x+r.x)/2,.95,(i.z+r.z)/2):new L((o.x0+o.x1)/2,1.2,(o.z0+o.z1)/2);oh.value=0;const l=(n.pieces??[]).find(c=>c.id==="piano");eS(e,this.scene,a,[t.group],[0,1,Wa],l?new L(l.x,1.3,l.z):void 0),oh.value=1,e.shadowMap.needsUpdate=!0}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};R(co,"url",(t,e)=>`art/${t}-${e}.jpg`);let cr=co;class nS{constructor(t,e){R(this,"target");R(this,"texMat",new Jt);R(this,"cam",new je);R(this,"plane",new Si);R(this,"clip",new Se);R(this,"q",new Se);R(this,"n",new L(0,1,0));R(this,"p0",new L(0,0,0));R(this,"camPos",new L);R(this,"rot",new Jt);R(this,"look",new L);R(this,"view",new L);R(this,"tgt",new L);this.target=new Rn(t,e,{type:Cn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,l=t.getClearColor(new Ct),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o),t.setClearColor(l,c),e.background=a}}let fh=null;function iS(s){return fh?(parent.postMessage(s,fh),!0):!1}addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(fh=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class sS{constructor(){R(this,"el");R(this,"tools");R(this,"low");R(this,"high");R(this,"cap");R(this,"frame");R(this,"open",!1);R(this,"busy",!1);R(this,"work",null);R(this,"px",[1,1]);R(this,"crop",[0,0,1,1]);R(this,"onClose",()=>{});R(this,"onShow",()=>{});R(this,"reserveRight",0);R(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(zy(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${vd(Ba(t))}</i>`],n=[t.medium,Oa(t),t.year].filter(Boolean).map(i=>vd(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,l=this.px[0]*(o-i),c=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),p=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${p}px`;const g=d/(o-i),x=p/(a-r);for(const m of[this.low,this.high])Object.assign(m.style,{width:`${g}px`,height:`${x}px`,left:`${-i*g}px`,top:`${-r*x}px`})}}const vd=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),rS=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),oS=.62,rc=5,Md=.18;class aS{constructor(t=!0){R(this,"pic",null);R(this,"lit",null);R(this,"held",null);R(this,"dark",0);R(this,"veil");R(this,"vScene",new Rh);R(this,"vCam",new ll(-1,1,1,-1,0,1));R(this,"hintEl");R(this,"hinted",null);R(this,"hintDone",!1);R(this,"v",new L);R(this,"f",new L);this.veil=new wt(new Ue(2,2),new qe({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}hold(t,e=.72){this.held=t?{t,k:e}:null}update(t,e,n,i,r){if(this.held){this.pic=null,this.lit=this.held.t,this.dark+=(this.held.k-this.dark)*(1-Math.exp(-t/Md));return}let o=null,a=1/0,l=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const p=d.centre,g=d.normal,x=p.x-u.x,m=p.y-u.y,M=p.z-u.z,w=Math.hypot(x,m,M);if(w>d.reach||g[0]*-x+g[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(x*f.x+m*f.y+M*f.z)/w)),y=Math.atan2(d.size*.5,w)+.17;if(v>y||Rs(i,u.x,u.z,p.x+g[0]*.05,p.z+g[2]*.05))continue;const S=v/y;S<a&&(a=S,o=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=S)}this.pic&&l<a+.15&&(o=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let c=0;if(o){const u=o.centre.distanceTo(e.getWorldPosition(this.v)),f=o.reach,d=f*.4,p=Math.min(1,Math.max(0,(f-u)/(f-d)));c=oS*p*p*(3-2*p)}this.dark+=(c-this.dark)*(1-Math.exp(-t/Md)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.meshes;for(const l of r)l.layers.enable(rc);const o=n.layers.mask,a=e.background;n.layers.set(rc),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const l of r)l.layers.disable(rc);t.autoClear=!0}}const lS=4.5,cS=380,hS=10,uS=1.7;class fS{constructor(t,e,n,i,r,o){R(this,"ndc",new pt);R(this,"ray",new Ss);R(this,"d",null);R(this,"trail",[]);R(this,"fingers",new Map);R(this,"two",null);R(this,"waitAll",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>this.lift(a.pointerId)),t.addEventListener("lostpointercapture",a=>this.lift(a.pointerId)),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}lift(t){var e;this.fingers.delete(t),((e=this.d)==null?void 0:e.id)===t&&(this.d=null),this.two&&(this.two.a===t||this.two.b===t)&&(this.two=null,this.waitAll=this.fingers.size>0),this.fingers.size||(this.waitAll=!1)}ndcAt(t,e){const n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}at(t){return this.ndcAt(t.clientX,t.clientY)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new L(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;t.preventDefault(),(a=getSelection())==null||a.removeAllRanges();for(const l of[...this.fingers.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.canvas.setPointerCapture(t.pointerId),this.fingers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.trail=[],this.fingers.size===2){this.d=null;const[[l,c],[h,u]]=[...this.fingers.entries()],f=(c.x+u.x)/2,d=(c.y+u.y)/2;this.two={a:l,b:h,p0:this.floorAt(this.ndcAt(f,d)),mx:f,my:d,dist:Math.max(1,Math.hypot(c.x-u.x,c.y-u.y))};return}if(this.fingers.size>2||this.waitAll)return;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||(n.kind==="wall"||n.kind==="machine")&&(n.dist??99)<=lS?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY}}move(t){const e=this.fingers.get(t.pointerId);if(!e)return;t.preventDefault(),e.x=t.clientX,e.y=t.clientY;const n=performance.now(),i=this.two;if(i){const l=this.fingers.get(i.a),c=this.fingers.get(i.b);if(!l||!c)return;const h=(l.x+c.x)/2,u=(l.y+c.y)/2,f=Math.max(1,Math.hypot(l.x-c.x,l.y-c.y)),d=this.player.pos.x,p=this.player.pos.z;let g=0,x=0;if(i.p0){const w=this.floorAt(this.ndcAt(h,u));w&&(g=i.p0.x-w.x,x=i.p0.z-w.z)}else{const w=4/(this.canvas.clientHeight||800),v=Math.sin(this.player.yaw),y=Math.cos(this.player.yaw),S=h-i.mx,T=u-i.my;g=(-S*y+-T*v)*w,x=(S*v+-T*y)*w}const m=Math.log(f/i.dist)/Math.LN2*uS;g+=-Math.sin(this.player.yaw)*m,x+=-Math.cos(this.player.yaw)*m;const M=Math.hypot(g,x);for(M>1.2&&(g*=1.2/M,x*=1.2/M),M>1e-5&&this.player.drag(g,x),i.mx=h,i.my=u,i.dist=f,i.p0&&(i.p0=this.floorAt(this.ndcAt(h,u))??i.p0),this.trail.push({t:n,dx:this.player.pos.x-d,dz:this.player.pos.z-p,dyaw:0});this.trail.length&&n-this.trail[0].t>120;)this.trail.shift();return}const r=this.d;if(!r||t.pointerId!==r.id)return;!r.moved&&Math.hypot(t.clientX-r.x,t.clientY-r.y)>hS&&(r.moved=!0);const o=t.clientX-r.lx,a=t.clientY-r.ly;if(r.lx=t.clientX,r.ly=t.clientY,!!r.moved){if(r.mode==="ground"&&r.p0){const l=this.floorAt(this.at(t));if(!l)return;let c=r.p0.x-l.x,h=r.p0.z-l.z;const u=Math.hypot(c,h);u>1.2&&(c*=1.2/u,h*=1.2/u);const f=this.player.pos.x,d=this.player.pos.z;this.player.drag(c,h),this.trail.push({t:n,dx:this.player.pos.x-f,dz:this.player.pos.z-d,dyaw:0})}else{const l=De.degToRad(this.camera.fov)/this.canvas.clientHeight*r.grip;this.player.turnBy(o*l,a*l),this.trail.push({t:n,dx:0,dz:0,dyaw:o*l})}for(;this.trail.length&&n-this.trail[0].t>120;)this.trail.shift()}}end(t){const e=this.two&&(this.two.a===t.pointerId||this.two.b===t.pointerId),n=this.d;this.lift(t.pointerId);const i=performance.now();if(e){this.fling("ground",i);return}if(!(!n||t.pointerId!==n.id)){if(!n.moved&&i-n.t<cS){this.tap(this.pick(this.at(t)));return}this.fling(n.mode,i)}}fling(t,e){const n=this.trail.filter(l=>e-l.t<120);if(this.trail=[],!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let r=0,o=0,a=0;for(const l of n)r+=l.dx,o+=l.dz,a+=l.dyaw;t==="ground"?(this.player.glide.set(r/i,o/i),this.player.glide.length()>7&&this.player.glide.setLength(7)):this.player.spin=De.clamp(a/i,-7,7)}}const dS=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],pS=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],u0=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],So=.12,tu=[58,44,40],oc=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},mS=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function dl(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>mS(oc(r[a])+(oc(o[a])-oc(r[a]))*i))}function Za([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),l=(o+a)/2,c=o-a;if(!c)return[0,0,l];const h=l>.5?c/(2-o-a):c/(o+a);let u;return o===n?u=(i-r)/c+(i<r?6:0):o===i?u=(r-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function gS(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,l=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(o=i,l=n):(o=n,l=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((l+r)*255)]}function xS(s,t){const[e,n,i]=Za(s);return n<.02?s:gS(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const eu=s=>dl(dS,s.skin),vS=s=>dl(pS,s.mouthColor),MS=s=>dl(u0,(s.cheeks-So)/(1-So)),_S=s=>{const t=Math.max(0,Math.min(1,s.cheeks/So));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=dl(u0,t/16);s.push(`rgb(${e},${n},${i}) ${((So+t/16*(1-So))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const yS={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:Za(tu)[0]/360,hat:"none"},ee=16,se=16,ce=16,Xr=[26,32,42],_d=[236,240,246],En=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Ut={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:tu,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},wi=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),yd=2.2,wS=18,SS=6,wd=.55;function bS(s){const t=yd*Math.pow(wS/yd,Math.max(0,Math.min(1,s))),e=ee/2,n=se/2,i=ce/2;return(r,o,a)=>{const l=Math.abs(r+.5-e)/e,c=Math.abs(o+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=ce-SS){const f=h<=wd?1:((1-h)/(1-wd))**(1/t);return u<=f}return h+u**t<=1}}function ES(s){const t=eu(s),e=bS(s.shape),n=new Map,i=(B,k,O)=>`${B},${k},${O}`;let r=null;const o=new Set,a=new Set;let l;const c=(B,k,O,H)=>{const I=i(B,k,O);n.set(I,l?{x:B,y:k,z:O,c:H,part:l}:{x:B,y:k,z:O,c:H}),r&&r.add(I)},h=(B,k,O,H)=>{const I=i(B,k,O);n.set(I,{x:B,y:k,z:O,c:H}),o.delete(I),a.delete(I)},u=(B,k,O)=>n.has(i(B,k,O));for(let B=0;B<ee;B++)for(let k=0;k<se;k++)for(let O=0;O<ce;O++)e(B,k,O)&&c(B,k,O,t);const f=(B,k)=>{for(let O=se-1;O>=0;O--)if(u(B,O,k))return O;return-1},d=(B,k)=>{for(let O=ce-1;O>=0;O--)if(u(B,k,O))return O;return-1},p=(B,k,O)=>{if(B<0||B>=ee||k<0||k>=se)return;const H=d(B,k);H>=0&&c(B,k,H,O)},g=ee/2,x=1+wi(s.eyeSize,3),m=1+wi(s.eyeSize,3),M=Math.max(1,6-x),w=1+wi(s.eyeSpacing,M-1),v=8+wi(s.eyeHeight,4)-2-Math.floor((m-1)/2),y=v+m-1,S=[[g-w-x,g-w-1],[g+w,g+w+x-1]],T=x>=3&&m>=3;for(const[B,k]of S)for(let O=B;O<=k;O++)for(let H=v;H<=y;H++){const I=!!(T&&O>B&&O<k&&H>v&&H<y);l=T&&!I?"eye":"pupil",p(O,H,T?I?Xr:_d:Xr)}l=void 0,r=o;const _=wi(s.browWeight,3),b=y+2+(wi(s.browHeight,4)-2);if(_>0){l="brow";for(const[B,k]of S)for(let O=B-1;O<=k+1;O++)for(let H=0;H<_;H++)p(O,b+H,Ut.hair);l=void 0}r=null;const A=wi(s.noseLength,8),C=5+(wi(s.noseHeight,6)-3);if(A>0){const B=En(t,.9);l="nose";for(let k=g-1;k<=g;k++)for(let O=C;O<=C+1;O++){const H=d(k,O);if(!(H<0))for(let I=1;I<=A;I++)c(k,O,H+I,B)}l=void 0}const P=2*wi(s.mouthWidth,4),U=3;if(P>0){const B=vS(s),k=P>=6?2:1;l="mouth";for(let O=g-P/2;O<=g+P/2-1;O++)for(let H=U;H<U+k;H++)p(O,H,B);l=void 0}const F=_S(s);if(F>0){const B=MS(s),k=(z,W)=>z[0]===W[0]&&z[1]===W[1]&&z[2]===W[2],O=v-1,H=U+(P>=6?2:1),I=Math.max(H+.5,O-.5);for(const[z,W]of S){const J=W<g,et=(z+W)/2,xt=et+.35*((J?g-1.5:g+.5)-et);for(let yt=Math.floor(xt-2);yt<=Math.ceil(xt+2);yt++)if(!(J?yt>g-2:yt<g+1))for(let ot=H;ot<=O;ot++){const ft=1-((yt-xt)/1.9)**2-((ot-I)/1.3)**2;if(ft<=0)continue;const dt=d(yt,ot),Mt=dt>=0?n.get(i(yt,ot,dt)):void 0;if(!Mt||Mt.part||!k(Mt.c,t))continue;const _t=F*.72*Math.pow(ft,.8),Vt=[0,1,2].map(kt=>Math.round(t[kt]+(B[kt]-t[kt])*_t));n.set(i(yt,ot,dt),{x:yt,y:ot,z:dt,c:Vt,blend:t})}}}const V=(B,k=1)=>{for(let O=0;O<ee;O++)for(let H=0;H<ce;H++){const I=f(O,H);if(!(I<0))for(let z=1;z<=k;z++)c(O,I+z,H,B)}},q=(B,k,O)=>{const H=Math.ceil(k)+1;for(let I=g-H;I<g+H;I++)for(let z=g-H;z<g+H;z++)Math.hypot(I+.5-g,z+.5-g)<=k&&c(I,B,z,O)},X=(B,k,O,H)=>{for(let I=B;I<=k;I++)for(let z=0;z<ee;z++)for(let W=0;W<ce;W++)Math.hypot(z+.5-g,W+.5-g)<=O&&c(z,I,W,H)},j=(B,k,O,H,I)=>{const z=Math.ceil(H)+1;for(let W=Math.floor(B-z);W<=B+z;W++)for(let J=Math.floor(k-z);J<=k+z;J++)for(let et=Math.floor(O-z);et<=O+z;et++)Math.hypot(W+.5-B,J+.5-k,et+.5-O)<=H&&c(W,J,et,I)},G=(B,k,O,H=1)=>{for(let I=B;I<=k;I++)for(let z=0;z<ee;z++){const W=d(z,I);W>=0&&c(z,I,W+H,O)}};switch(r=a,s.hat){case"birthday":{for(let B=0;B<9;B++)X(se+B,se+B,5.4-B*.62,B%2?Ut.partyAlt:Ut.party);j(g,se+9.5,g,1.6,_d);break}case"mickey":{const B=f(g,g)+2;for(const k of[-.5,ee+.5])j(k,B,g,4.2,Xr);break}case"tophat":{q(se,8.6,Ut.felt),X(se+1,se+10,5,Ut.felt),X(se+3,se+4,5.05,Ut.band);break}case"gangster":{q(se,9.6,Ut.felt),X(se+1,se+5,5,Ut.felt),X(se+1,se+2,5.05,Ut.band);break}case"goggles":{G(v,y,Ut.brass);for(const[B,k]of S)for(let O=B;O<=k;O++)for(let H=v;H<=y;H++){const I=d(O,H);I>=0&&c(O,H,I+1,Ut.glass)}break}case"pilot":{V(Ut.leather,2),G(se-4,se-3,Ut.brass);for(let B=se-4;B>=4;B--)for(const k of[0,1,ee-2,ee-1])for(let O=0;O<ce;O++)u(k,B,O)&&c(k,B,O,Ut.leather);break}case"model":{q(se,12.5,Ut.partyAlt),X(se+1,se+2,4.4,Ut.partyAlt);break}case"curls":{let B=7;const k=()=>(B=(B*1103515245+12345)%2147483648)/2147483648;for(let O=-2;O<ee+2;O++)for(let H=-2;H<ce+2;H++){const I=f(Math.max(0,Math.min(ee-1,O)),Math.max(0,Math.min(ce-1,H)));I<0||(k()<.6&&c(O,I+1,H,Ut.hair),k()<.34&&c(O,I+2,H,Ut.hair),k()<.14&&c(O,I+3,H,Ut.hair))}break}case"bob":{V(Ut.hair,2);for(let B=y+1;B<se;B++)for(let k=0;k<ee;k++)for(let O=0;O<ce;O++)(k<=1||k>=ee-2||O<=1)&&u(k,B,O)&&c(k,B,O,Ut.hair);break}case"pigtails":{V(Ut.hair,2);for(const B of[-1.5,ee+1.5])j(B,se-5,g,3.4,Ut.hair);break}case"crown":{const B=Ut.gold,k=En(B,1.15),O=Ut.band,H=(W,J)=>{const et=Math.hypot(W+.5-g,J+.5-g);return et>=5.1&&et<=6.9};let I=0;for(let W=0;W<ee;W++)for(let J=0;J<ce;J++)H(W,J)&&(I=Math.max(I,f(W,J)+3));for(let W=0;W<ee;W++)for(let J=0;J<ce;J++){if(!H(W,J))continue;const et=f(W,J);if(!(et<0))for(let xt=et+1;xt<=I;xt++)c(W,xt,J,xt===I?k:B)}const z=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[W,J]of z){const et=Math.hypot(W+1-g,J+1-g);for(let xt=W;xt<=W+1;xt++)for(let yt=J;yt<=J+1;yt++){const ot=Math.hypot(xt+.5-g,yt+.5-g)>et;for(let ft=1;ft<=(ot?5:3);ft++)c(xt,I+ft,yt,ot&&ft===5?k:B)}}for(let W=g-1;W<=g;W++)for(let J=I+2;J<=I+3;J++)for(let et=14;et<=15;et++)c(W,J,et,O);break}case"beanie":{const B=Ut.red,k=Ut.cream,O=Math.max(y+1,se-6),H=Math.min(O+2,se-1),I=[];for(let z=O;z<=H;z++)for(let W=-1;W<=ee;W++)for(let J=-1;J<=ce;J++)u(W,z,J)?c(W,z,J,k):(u(W-1,z,J)||u(W+1,z,J)||u(W,z,J-1)||u(W,z,J+1))&&I.push([W,z,J]);for(const[z,W,J]of I)c(z,W,J,k);for(let z=H+1;z<se;z++)for(let W=0;W<ee;W++)for(let J=0;J<ce;J++)u(W,z,J)&&c(W,z,J,z===H+1?En(B,.82):B);for(let z=0;z<ee;z++)for(let W=0;W<ce;W++){const J=f(z,W);J<=H||(c(z,J+1,W,B),c(z,J+2,W,B))}j(g,f(g,g)+4.5,g,1.9,k);break}case"cowboy":{let B=0;for(let k=0;k<ee;k++)for(let O=0;O<ce;O++)B=Math.max(B,f(k,O)+1);for(let k=0;k<ee;k++)for(let O=0;O<ce;O++){const H=f(k,O);if(!(H<0||Math.hypot(k+.5-g,O+.5-g)>5))for(let I=H+1;I<B;I++)c(k,I,O,Ut.leather)}for(let k=g-11;k<g+11;k++)for(let O=g-11;O<g+11;O++){const H=Math.abs(k+.5-g);if(Math.hypot(H,O+.5-g)>10.7)continue;const I=H>7.5?2:H>5.5?1:0;for(let z=0;z<=I;z++)c(k,B+z,O,Ut.leather)}for(let k=0;k<ee;k++)for(let O=0;O<ce;O++){const H=Math.abs(k+.5-g);if(Math.hypot(H,O+.5-g)>5)continue;const I=H<1?2:H<2?1:0;for(let z=B+1;z<=B+7-I;z++)c(k,z,O,Ut.leather);I>0&&c(k,B+7-I,O,En(Ut.leather,.8))}X(B+1,B+2,5.05,Ut.felt);break}case"wizard":{const B=Ut.plum,k=En(B,.82),O=f(g,g)+1;for(let W=g-6;W<g+6;W++)for(let J=g-6;J<g+6;J++){if(Math.hypot(W+.5-g,J+.5-g)>5.2)continue;const et=f(W,J);if(!(et<0))for(let xt=et+1;xt<=O;xt++)c(W,xt,J,B)}const H=11;for(let W=g-12;W<g+12;W++)for(let J=g-12;J<g+12;J++){const et=Math.hypot(W+.5-g,J+.5-g);if(et<=5.2||et>H)continue;const xt=W>=0&&W<ee&&J>=0&&J<ce?f(W,J):-1;c(W,Math.max(O-Math.max(0,Math.round(et)-8),xt+1,y+2),J,k)}const I=13;for(let W=0;W<=I;W++){const J=W/I,et=5-4.1*J,xt=g-6.5*J*J;for(let yt=g-6;yt<g+6;yt++)for(let ot=-2;ot<ce;ot++)Math.hypot(yt+.5-g,ot+.5-xt)<=et&&c(yt,O+W,ot,B)}const z=(W,J)=>{for(let et=g-J;et<g+J;et++){const xt=d(et,W);xt>=0&&c(et,W,xt,Ut.gold)}};z(O+3,1),z(O+4,2),z(O+5,1),z(O+8,1),z(O+11,1);break}case"halo":{let B=-1;for(let W=0;W<ee;W++)for(let J=0;J<ce;J++)B=Math.max(B,f(W,J));const k=B+3,O=En(Ut.gold,1.15),H=4.9,I=6.7,z=Math.ceil(I)+1;for(let W=g-z;W<g+z;W++)for(let J=g-z;J<g+z;J++){const et=Math.hypot(W+.5-g,J+.5-g);et<H||et>I||c(W,k,J,J>=g?O:Ut.gold)}break}case"headphones":{const B=Math.min(y+1,10),k=g-2,O=g+1;for(let H=0;H<ee;H++)for(let I=k;I<=O;I++){const z=f(H,I);z<0||(c(H,z+1,I,Ut.steel),c(H,z+2,I,Ut.steel))}for(let H=B+3;H<se;H++)for(const I of[0,ee-1])for(let z=k;z<=O;z++)u(I,H,z)&&c(I,H,z,Ut.steel);for(let H=0;H<3;H++)for(let I=B-4;I<=B+3;I++)for(let z=g-4;z<=g+3;z++)Math.hypot(I+.5-B,z+.5-g)>3.6||(c(-H,I,z,Xr),c(ee-1+H,I,z,Xr));for(let H=B-2;H<=B+1;H++)for(let I=g-2;I<=g+1;I++)Math.hypot(H+.5-B,I+.5-g)<=1.6&&(c(-2,H,I,Ut.steel),c(ee+1,H,I,Ut.steel));break}case"viking":{const B=En(Ut.steel,.78),k=Math.max(y+2,se-5);for(let I=k;I<se;I++)for(let z=0;z<ee;z++)for(let W=0;W<ce;W++)u(z,I,W)&&c(z,I,W,I===k?B:Ut.steel);for(let I=0;I<ee;I++)for(let z=0;z<ce;z++){const W=f(I,z);W<k||(c(I,W+1,z,Ut.steel),c(I,W+2,z,Ut.steel))}const O=Math.max(y+1,k-1);for(let I=O;I<=se;I++)for(let z=g-1;z<=g;z++){const W=d(z,I);W>=0&&c(z,I,W+1,B)}const H=Math.max(f(5,g)-4,y+4);for(const I of[-1,1])for(let z=0;z<=18;z++){const W=z/18,J=W*2.05,et=g+I*(6.2+6*Math.sin(J));j(et,H+8.4-8.4*Math.cos(J),g,2.6-1.6*W,Ut.cream)}break}case"flowers":{const B=Math.max(y+1,Math.min(y+3,se-4)),k=Ut.leaf,O=En(Ut.leaf,.82),H=(et,xt)=>Math.floor(g+et*xt),I=[[0,1],[.87,.5],[.87,-.5],[0,-1]],z=[];for(const[et,xt]of I){let yt=2;for(;yt<12&&u(H(et,yt),B,H(xt,yt));)yt+=.5;z.push(yt)}const W=[];for(let et=B;et<=B+1;et++)for(let xt=0;xt<ee;xt++)for(let yt=0;yt<ce;yt++){if(!u(xt,et,yt))continue;let ot=!1;for(let ft=-1;ft<=1;ft++)for(let dt=-1;dt<=1;dt++)u(xt+ft,et,yt+dt)||(ot=!0,W.push([xt+ft,et,yt+dt]));ot&&W.push([xt,et,yt])}for(const[et,xt,yt]of W)c(et,xt,yt,xt===B?O:k);const J=[Ut.red,Ut.gold,Ut.cream];for(let et=0;et<I.length;et++){const[xt,yt]=I[et],ot=Math.round(g+xt*(z[et]+1)),ft=Math.round(g+yt*(z[et]+1)),dt=J[et%J.length];j(ot,B+1.5,ft,1.5,dt),xt>0&&j(2*g-ot,B+1.5,ft,1.5,dt)}break}case"afro":{const O=f(g,g),H=Math.max(y+2,se-3);for(let I=g-10;I<g+10;I++)for(let z=g-10;z<g+10;z++){const W=Math.abs(I+.5-g),J=Math.abs(z+.5-g),et=(W*W+J*J)/(10*10),xt=f(I,z);if(et>1&&xt<0)continue;const yt=et>1?0:7.5*Math.sqrt(1-et),ft=z>=ce-6?Math.max(y+1,H-Math.max(0,W-4.5)):y+1,dt=xt>=0?ft:Math.max(ft,Math.ceil(O+.5-yt)),Mt=et>1?xt:Math.max(xt,Math.floor(O-.5+yt));for(let _t=dt;_t<=Mt;_t++)c(I,_t,z,_t<ft+2?En(Ut.hair,.8):Ut.hair)}break}case"mohawk":{const B=Ut.hair,k=En(t,.74);for(let H=0;H<ee;H++)for(let I=0;I<ce;I++){const z=f(H,I);if(!(z<0))for(let W=y+2;W<=z;W++)u(H,W,I)&&h(H,W,I,k)}const O=f(g,g);for(let H=1;H<ce-1;H++){if(f(g,H)<O-4)continue;const z=(H-1)/(ce-3),W=2+Math.round(4*Math.sin(Math.PI*z));for(const J of[g-1,g])for(let et=f(J,H)+1;et<=f(J,H)+W;et++)c(J,et,H,B)}break}case"ponytail":{const B=Ut.hair,k=Math.max(f(g-1,2),f(g,2))-2;for(let O=0;O<ee;O++)for(let H=0;H<ce;H++){const I=f(O,H);I>y&&c(O,I,H,B)}V(B,2);for(let O=y+1;O<se;O++)for(let H=0;H<ee;H++)for(let I=0;I<ce;I++)(H<=1||H>=ee-2||I<=3)&&u(H,O,I)&&c(H,O,I,B);for(let O=3;O<=y;O++){const H=6-Math.max(0,Math.min(3,y-O));for(let I=g-H;I<g+H;I++)for(let z=0;z<=2;z++)u(I,O,z)&&c(I,O,z,B)}for(let O=0;O<=14;O++){const H=O/14;j(g,k-10*H*H,1.5-4.4*Math.sqrt(H),2.7-1.3*H,B)}j(g,k-.5,-.6,2.1,Ut.band);break}case"longhair":{const B=Ut.hair,k=ce-5,O=2;V(B,2);for(let H=0;H<se;H++)for(let I=0;I<ee;I++)for(let z=0;z<ce;z++){if(!u(I,H,z))continue;const W=z>=k,J=I<O||I>=ee-O;W&&!J||W&&J&&H>=v&&H<=y||c(I,H,z,B)}for(let H=Math.max(se-3,y+2);H<se;H++)for(let I=0;I<ee;I++)for(let z=k;z<ce;z++)u(I,H,z)&&c(I,H,z,B);for(let H=0;H<ee;H++)for(let I=0;I<ce;I++){if(!(H<O||H>=ee-O||I<O)||f(H,I)<0)continue;let W=0;for(;!u(H,W,I);)W++;for(let J=W-1;J>=W-3;J--)c(H,J,I,B)}break}case"buzz":{const B=Ut.hair,k=En(Ut.hair,1.75),O=Math.min(se-2,Math.max(y+3,se-3));for(let H=0;H<ee;H++)for(let I=0;I<ce;I++){const z=f(H,I);if(z<0)continue;const W=Math.abs(H+.5-g),et=I>=ce-6?W<5.5?0:W<6.5?1:2:3,xt=Math.max(y+1,Math.min(O-et,z-1));for(let yt=xt;yt<=z;yt++)u(H,yt,I)&&c(H,yt,I,yt<O?k:B)}break}case"bun":{const B=En(Ut.hair,.74),k=y+2;for(let I=0;I<ee;I++)for(let z=0;z<ce;z++){const W=f(I,z);if(W<k)continue;const J=z<=5?5:z<=9?3:2;for(let et=W;et>W-J&&et>=k;et--)u(I,et,z)&&c(I,et,z,Ut.hair);c(I,W+1,z,Ut.hair)}const O=4.5,H=f(g,4);j(g,H+3,O,3.1,Ut.hair);for(let I=g-4;I<g+4;I++)for(let z=1;z<=8;z++)if(Math.hypot(I+.5-g,z+.5-O)<=2.6)for(let W=H+1;W<=H+2;W++)c(I,W,z,B);break}case"braids":{V(Ut.hair,2);for(let O=y+1;O<se;O++)for(let H=0;H<ee;H++)for(let I=0;I<ce;I++)(H<=1||H>=ee-2||I<=1)&&u(H,O,I)&&c(H,O,I,Ut.hair);const B=En(Ut.hair,1.3),k=-5;for(const O of[-1,ee]){const H=Math.max(0,Math.min(ee-1,O)),I=Math.min(f(H,6),se-4);if(!(I<0)){for(let z=k;z<=I;z++){const W=z<=k+3,J=z<=k+1;let et=(z%4+4)%4<2?Ut.hair:B;J&&(et=Ut.band);for(let xt=-1;xt<=1;xt++)for(let yt=-1;yt<=1;yt++)(!W||Math.abs(xt)+Math.abs(yt)<2)&&c(O+xt,z,6+yt,et)}j(O+.5,k-2,6.5,1.9,Ut.band)}}break}}r=null;const K=.18,tt=.25;let ut=-1;if(a.size){const B=new Map;let k=0,O=0;for(const z of a){const W=n.get(z);if(!W)continue;O++;const J=`${W.c[0]},${W.c[1]},${W.c[2]}`,et=B.get(J);et?et.n++:B.set(J,{n:1,c:W.c,chroma:(Math.max(...W.c)-Math.min(...W.c))/255}),B.get(J).chroma>=K&&k++}const H=O>0&&k/O<tt;let I=null;for(const z of B.values())!H&&z.chroma<K||(!I||z.n>I.n)&&(I=z);I&&(ut=Za(I.c)[0])}else o.size&&(ut=Za(tu)[0]);if(ut>=0){const B=s.hairColor*360-ut;if(Math.abs(B)>.5)for(const k of[...a,...o]){const O=n.get(k);O&&(O.c=xS(O.c,B))}}return{voxels:[...n.values()],anchor:ut}}function TS(s){return ES(s).voxels}const AS=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],ac=.42,ha=new Ct,Sd=(s,t,e)=>(ha.setRGB(s/255,t/255,e/255,Ne),[ha.r,ha.g,ha.b]);function RS(s,t){const e=new Map;for(const b of s)e.set(`${b.x},${b.y},${b.z}`,b);const n=(b,A,C)=>e.get(`${b},${A},${C}`),i=(b,A)=>b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2],r=(b,A)=>i(b.c,A.c)||!!b.blend&&(!!A.blend||i(b.blend,A.c))||!!A.blend&&i(A.blend,b.c);let o=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const b of s)b.x<o&&(o=b.x),b.y<a&&(a=b.y),b.z<l&&(l=b.z),b.x>c&&(c=b.x),b.y>h&&(h=b.y),b.z>u&&(u=b.z);const f=t?t[0]:(o+c)/2,d=t?t[1]:(a+h)/2,p=t?t[2]:(l+u)/2,g=[],x=[],m=[],M=[],w=[],v=new Set;for(const b of s){const A=b.x-f,C=b.y-d,P=b.z-p,U=Sd(b.c[0],b.c[1],b.c[2]),F=Sd(b.c[0]*ac,b.c[1]*ac,b.c[2]*ac);for(const{n:V,t1:q,t2:X}of AS){if(n(b.x+V[0],b.y+V[1],b.z+V[2]))continue;const j=(B,k)=>[A+V[0]/2+q[0]*B+X[0]*k,C+V[1]/2+q[1]*B+X[1]*k,P+V[2]/2+q[2]*B+X[2]*k],G=j(-.5,-.5),K=j(.5,-.5),tt=j(.5,.5),ut=j(-.5,.5);for(const B of[G,K,tt,G,tt,ut])g.push(B[0],B[1],B[2]),x.push(V[0],V[1],V[2]),m.push(U[0],U[1],U[2]);for(const[B,k,O]of[[q,X,1],[q,X,-1],[X,q,1],[X,q,-1]]){const H=n(b.x+B[0]*O,b.y+B[1]*O,b.z+B[2]*O);if(H&&r(H,b)&&!n(b.x+B[0]*O+V[0],b.y+B[1]*O+V[1],b.z+B[2]*O+V[2]))continue;const I=ot=>[A+V[0]/2+B[0]*O/2+k[0]*ot/2,C+V[1]/2+B[1]*O/2+k[1]*ot/2,P+V[2]/2+B[2]*O/2+k[2]*ot/2],z=I(1),W=I(-1),J=z.map(ot=>ot.toFixed(2)).join(),et=W.map(ot=>ot.toFixed(2)).join(),xt=J<et?`${J}|${et}`:`${et}|${J}`;if(v.has(xt))continue;v.add(xt);const yt=.006;M.push(z[0]+V[0]*yt,z[1]+V[1]*yt,z[2]+V[2]*yt,W[0]+V[0]*yt,W[1]+V[1]*yt,W[2]+V[2]*yt),w.push(F[0],F[1],F[2],F[0],F[1],F[2])}}}const y=new be;y.setAttribute("position",new Wt(g,3)),y.setAttribute("normal",new Wt(x,3)),y.setAttribute("color",new Wt(m,3));const S=new be;S.setAttribute("position",new Wt(M,3)),S.setAttribute("color",new Wt(w,3));const T=[(c-o)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(T[0],T[1],T[2])*1.15;return{faces:y,edges:S,radius:_}}const f0=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],de=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),CS={calm:{...de("lid",.1),smile:.08},pleased:{...de("lid",.2),...de("low",.3),...de("raise",.1),smile:.65},happy:{...de("raise",.35),...de("arch",.25),...de("low",.42),smile:.9,open:.16},joy:{...de("raise",.85),...de("arch",.4),...de("low",.55),smile:1,open:.6,roll:.06},surprised:{...de("raise",1.5),...de("arch",.45),...de("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...de("lid",.2),skew:.42},sad:{...de("inner",.95),...de("raise",-.1),...de("lid",.36),...de("tilt",-.5),smile:-.75,nod:.08},bored:{...de("lid",.5),...de("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...de("lid",.72),...de("tilt",-.25),...de("raise",-.2),...de("inner",.2),smile:-.05,nod:.18},yawn:{...de("lid",1),...de("raise",.75),...de("inner",.3),open:1,round:.55,nod:-.14},asleep:{...de("lid",1.05),...de("raise",-.12),...de("inner",.12),smile:.05,open:.06},excited:{...de("raise",.9),...de("inner",-.1),...de("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...de("raise",.85),...de("arch",.3),...de("lid",.04),roll:.12,smile:.25}},PS={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},bd=()=>Object.fromEntries(f0.map(s=>[s,s==="pupil"?1:0])),LS=s=>new Ct().setRGB(s[0]/255,s[1]/255,s[2]/255,Ne);class IS{constructor(t){R(this,"head",new he);R(this,"solid",[]);R(this,"drop");R(this,"roll",0);R(this,"nod",0);R(this,"own",[]);R(this,"brows",[]);R(this,"eyes",[]);R(this,"mouth",[]);R(this,"seam",0);R(this,"lipH",.5);R(this,"browLo",0);R(this,"browHi",0);R(this,"d",bd());R(this,"mood","calm");R(this,"feeling",null);R(this,"feelFor",0);R(this,"blinkIn",1.5);R(this,"blinkT",-1);R(this,"blinkLen",.13);R(this,"glance",new pt);R(this,"glanceIn",1);R(this,"micro",new pt);R(this,"microIn",.5);R(this,"talkT",0);R(this,"syl",0);R(this,"sylLen",.16);R(this,"sylAmp",0);R(this,"sylRound",0);R(this,"pause",0);R(this,"beat",0);R(this,"wasTalking",!1);R(this,"lookX",0);R(this,"lookY",0);const e=TS(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,l=-1/0;for(const G of e)n=Math.min(n,G.x),o=Math.max(o,G.x),i=Math.min(i,G.y),a=Math.max(a,G.y),r=Math.min(r,G.z),l=Math.max(l,G.z);const c=(n+o)/2,h=(i+a)/2,u=(r+l)/2;this.drop=(h-(se-1)/2)/16;const f=eu(t),d=8,p=G=>G<d?0:1,g=[!1,!1];for(const G of e)G.part==="eye"&&(g[p(G.x)]=!0);const x=[236,240,246],m=e.map(G=>G.part==="brow"||G.part==="mouth"?{...G,c:f,part:void 0}:G.part==="pupil"&&g[p(G.x)]?{...G,c:x}:G),{faces:M,edges:w}=RS(m,[c,h,u]),v=new Ua({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new ap({vertexColors:!0});this.own.push(M,w,v,y);const S=new wt(M,v);this.head.add(S,new eg(w,y)),this.solid.push(S);const T=new Ye(1,1,1);this.own.push(T);const _=new Map,b=G=>{const K=G.join();let tt=_.get(K);return tt||(tt=new Ua({color:LS(G)}),_.set(K,tt),this.own.push(tt)),tt},A=G=>{const K=new wt(T,b(G));return this.head.add(K),this.solid.push(K),K},C=G=>G.z-u+.5,P=e.filter(G=>G.part==="brow");for(const G of[0,1]){const K=P.filter(H=>p(H.x)===G);if(!K.length)continue;const tt=K.map(H=>H.x),ut=Math.min(...tt),B=Math.max(...tt),k=(ut+B)/2,O=Math.max(.5,(B-ut)/2);for(const H of K){const I=G===0?(k-H.x)/O:(H.x-k)/O;this.brows.push({m:A(H.c),x:H.x-c,y:H.y-h,z:C(H),xn:I,side:G})}}const U=e.filter(G=>G.part==="eye"||G.part==="pupil"),F=f.map(G=>Math.round(G*.88));let V=-1/0;for(const G of[0,1]){const K=U.filter(dt=>p(dt.x)===G);if(!K.length)continue;const tt=K.map(dt=>dt.x),ut=K.map(dt=>dt.y),B=Math.min(...tt),k=Math.max(...tt),O=Math.min(...ut),H=Math.max(...ut);V=Math.max(V,H);const I=Math.max(...K.map(C)),z=(B+k)/2-c,W=(O+H)/2-h,J=k-B+1,et=H-O+1;let xt=null;const yt=Math.max(1,J-2),ot=Math.max(1,et-2);if(g[G]){const dt=K.find(Mt=>Mt.part==="pupil").c;xt=A(dt),xt.scale.set(yt,ot,.05)}const ft=[];for(let dt=B;dt<=k;dt++){const Mt=J>1?G===0?(dt-B)/(J-1):(k-dt)/(J-1):.5;ft.push({x:dt-c,k:Mt,up:A(F),low:A(F)})}this.eyes.push({side:G,y0:O-h-.5,y1:H-h+.5,z:I,cx:z,cy:W,pupil:xt,pw:yt,ph:ot,reach:(J-yt)/2,cols:ft})}const q=e.filter(G=>G.part==="mouth");if(q.length){const G=[...new Set(q.map(I=>I.x))].sort((I,z)=>I-z),K=q.map(I=>I.y),tt=Math.min(...K),ut=Math.max(...K),B=ut-tt+1;this.seam=B>=2?(tt+ut)/2-h:tt-h,this.lipH=B>=2?1:.5;const k=(G[0]+G[G.length-1])/2,O=Math.max(.5,(G[G.length-1]-G[0])/2),H=q[0].c;for(const I of G){const z=Math.max(...q.filter(W=>W.x===I).map(C));this.mouth.push({x:I-c,z,xn:(I-k)/O,top:A(H),bot:A(H),inside:A([46,22,28])})}}const X=this.brows.map(G=>G.y),j=Math.max(...e.filter(G=>G.c[0]===f[0]&&G.c[1]===f[1]&&G.c[2]===f[2]).map(G=>G.y));this.browLo=V===-1/0?-2:V-h+.85-(X.length?Math.min(...X):0),this.browHi=j-h-.8-(X.length?Math.max(...X):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...bd(),...CS[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=PS[r]??8;for(const u of f0){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(c=.7,h=.6),this.lookX+=(De.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(De.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=De.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const l of r.cols){const c=De.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:De.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(l.up,l.x,r.y1+.08,-(c+(c>.01?.08:0)),r.z),this.lid(l.low,l.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const l=De.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*l,r.ph*l,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,l=De.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*o*o)*(1-l*.75*o*o)*2.4,h=1-l*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-c-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=c>.02,r.inside.position.set(r.x,u-c/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}const ze=22,d0=.6,hn=Math.PI*2,Be=(s,t,e)=>s<t?t:s>e?e:s,si=s=>s<0?0:s>1?1:s,Ht=(s,t,e)=>s+(t-s)*e,pe=s=>{const t=si(s);return t*t*(3-2*t)},DS=s=>{const t=si(s);return t*t*t*(t*(t*6-15)+10)},js=s=>s-Math.floor(s),Un=s=>Math.atan2(Math.sin(s),Math.cos(s)),p0=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),Ai=-.06,Mn=.11,fn=.19;class NS{constructor(t){R(this,"xs",[]);R(this,"zs",[]);R(this,"cum",[]);R(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],l=Math.hypot(o.x-r.x,o.z-r.z),c=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/l,u=(o.z-r.z)/l,f=(a.x-o.x)/c,d=(a.z-o.z)/c;if(h*f+u*d>.999){n(o.x,o.z);continue}const p=Math.min(.42,l*.5,c*.5),g=o.x-h*p,x=o.z-u*p,m=o.x+f*p,M=o.z+d*p;for(let w=0;w<=8;w++){const v=w/8,y=1-v;n(y*y*g+2*y*v*o.x+v*v*m,y*y*x+2*y*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?si((t-this.cum[n])/i):0;return e.x=Ht(this.xs[n],this.xs[n+1],r),e.z=Ht(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Be(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const ua=.05,fa=.12;class US{constructor(t,e){R(this,"L");R(this,"thigh");R(this,"shin");R(this,"footH",.06);R(this,"hipX",.17);R(this,"armLen");R(this,"legless");R(this,"pos",new L);R(this,"yaw",0);R(this,"lean",0);R(this,"roll",0);R(this,"twist",0);R(this,"swayRoll",0);R(this,"squash",0);R(this,"stretch",0);R(this,"feet");R(this,"arms");R(this,"onPuff",null);R(this,"onPrint",null);R(this,"airborne",!1);R(this,"rest","stand");R(this,"breath",0);R(this,"asleep",!1);R(this,"headDrop",0);R(this,"hipDrop",0);R(this,"scratch",null);R(this,"scratchIn",5);R(this,"world");R(this,"base",new L);R(this,"vy",0);R(this,"qv",0);R(this,"qRest",0);R(this,"leanV",0);R(this,"leanRest",0);R(this,"sv",0);R(this,"stretchRest",0);R(this,"speed",0);R(this,"accel",0);R(this,"lastSpeed",0);R(this,"wantYaw",null);R(this,"trip",null);R(this,"pending",null);R(this,"act",null);R(this,"phase",0);R(this,"running",0);R(this,"clockOn",!1);R(this,"gRef",0);R(this,"held",!1);R(this,"wallSide",0);R(this,"sway",0);R(this,"swayV",0);R(this,"shift",0);R(this,"shiftIn",3);R(this,"clock",0);R(this,"tapT",-1);R(this,"seq",null);R(this,"queued",[]);R(this,"restYaw",null);R(this,"anchor",{x:0,z:0,g:0,yaw:0});R(this,"t1",new L);R(this,"t2",new L);R(this,"t3",new L);R(this,"e1",new Pn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new L,yaw:0,pitch:0,from:new L,to:new L,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new L,kneeOut:0,sy:0,ankle:new L,q:new me,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ze*e):t==="run"?Math.sqrt(.45*ze*e):Math.min(9,Math.sqrt(1.15*ze*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ze*e)),i=Be(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Ht(i,r,this.running)}get duty(){return Ht(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const r={x:this.base.x,z:this.base.z},o=this.legless?[{kind:"path",pts:[r,...t]}]:this.split(r,t);this.trip={gait:e,stride:i,legs:o,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,i-l*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-o,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new NS(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+ua;r+=ua)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new L(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new L(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=js(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?4.5:e.gait==="run"?4:3,a=r?4.5:e.gait==="run"?5:4.5,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,l-.03))),h=1/0;this.held=!1;for(const S of this.feet)S.mode==="ground"&&(h=Math.min(h,S.sole.y));if(h<1/0){const S=Math.sin(this.yaw),T=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let b=0;b<=.8;b+=.05){const A=this.world.groundAt(this.base.x+S*b,this.base.z+T*b);if(A>Math.max(h,_)+.2){A<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,b-.18))),this.held=b<.45);break}}}const u=Math.abs(Un(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=si((1.6-u)/1.1);const f=Be((c-this.speed)*3,-a*1.6,o);this.accel+=(f-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),l<=.01&&(this.speed=0,this.accel=0);const d=this.gaitSpeed("walk"),p=this.gaitSpeed("bound"),g=si((this.speed-d*1.05)/(p*.85-d*1.05));this.running+=(g-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),m=Ht(4.5,8,this.running)*t;this.yaw+=Be(Un(x-this.yaw),-m,m);const M=d/this.strideAt(d),w=Math.max(M*Ht(.75,1.5,pe((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,y=this.running>.45;if(this.clockOn){this.phase+=w*t;for(let S=0;S<2;S++){const T=this.feet[S],_=js(this.phase-S*.5);_<v?T.mode==="swing"&&T.clocked&&this.touchDown(T,y?1:.55):(T.mode!=="swing"&&(this.liftOff(T,!0,0),this.feet.every(b=>b.mode!=="ground")&&(this.qv+=1.6*this.running)),T.s=(_-v)/(1-v),T.s<.7&&this.aimSwing(T,e,(1-_)/w,v/2/w)),this.footPitch(T,_,v,y)}}if(this.airborne=this.clockOn&&this.feet.every(S=>S.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const T of this.feet)T.mode!=="swing"||!T.clocked||(T.clocked=!1,T.dur=Math.max(.08,(1-T.s)*((1-v)/w)),T.s=0,T.from.set(T.ankle.x,T.ankle.y-this.footH,T.ankle.z),T.fromYaw=T.yaw,T.apex=Math.max(T.from.y,T.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(T=>T.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,y?"run":"walk",w,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),l=r.at(a,this.t1),c=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(Un(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Ht(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=Be(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(fn+.01),t.z+i*(fn+.01)),c=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(Ai-.02),t.z+i*(Ai-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Be(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Ht(t.from.x,t.to.x,o),Ht(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*pe((r-.5)/.5):t.pitch=r<.12?.22*(1-pe(r/.12)):r<.6?0:-.7*pe((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Ht(-.7,-.8,r/.3):r<.82?Ht(-.8,0,pe((r-.3)/.52)):(i?-.05:.22)*pe((r-.82)/.18)}}bodyOver(t,e,n,i,r="stroll"){let o=this.shift;const a=r==="strut"?1:0,l=e!=="stand"&&this.clockOn,c=l?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(l)o=-(Ht(Ht(.95,1.2,a),.1,this.running)*(this.hipX+.015)*c)*Math.cos(hn*(this.phase-i/2)),h=Ht(Ht(.09,.15,a),.04,this.running)*c*Math.sin(hn*(this.phase-i/2));else{const w=this.feet.filter(v=>v.mode==="ground");w.length===1&&(o=w[0].side*this.hipX*.85)}o+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(o-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((l?-.13*this.sway/Math.max(.1,this.hipX+.015):0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const f=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(f+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const d=this.reachTop();let p=d.soft-.012*this.legW;if(e!=="stand"){let w=-1/0,v=!1;for(const y of this.feet)y.mode==="ground"&&(w=Math.max(w,y.sole.y));for(const y of this.feet)y.mode==="swing"&&y.to.y>w+.2&&(v=!0);w>-1/0&&!v&&(p=Math.min(p,w+this.footH+(this.thigh+this.shin)*.955+.5))}if(l&&this.running<.45){const w=Ht(.045,.085,a)*this.legW*c*(1-this.running/.45),v=js(this.phase*2);p-=w*(.5-.5*Math.cos(hn*(v-i)))}let g=p;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const w=.5/n,v=i/n,y=Math.max(0,w-v),S=ze*y*v/hn,T=this.speed*v/2,_=(this.thigh+this.shin)*.985,b=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-T*T))+.5,A=js(this.phase*2),C=v/w;let P;if(A<C)P=b-S*Math.sin(Math.PI*(A/C));else{const U=(A-C)*w;P=b+ze*y/2*U-ze/2*U*U}g=Ht(p,P,pe((this.running-.45)/.25))}e==="stand"&&(g-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const w of this.feet){if(w.mode!=="ground")continue;const v=this.kneeAt(w,this.t2),y=Math.sin(w.yaw)*.06,S=Math.cos(w.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+y,v.y-.06,v.z+S))&&(g=Math.max(g,d.hard))}const x=e==="run"?hn*7:hn*4.2,m=e==="run"?.9:.72;this.vy+=(x*x*(g-this.pos.y)-2*m*x*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>d.hard&&(this.pos.y=d.hard,this.vy>0&&(this.vy=0));const M=f+this.footH+.45*this.legW+.5;this.pos.y<M&&(this.pos.y=M,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?Ai:r<0?Mn:0,a=-o,l=this.footH,c=Math.cos(r),h=Math.sin(r),u=o+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-r,c=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,p=Be(u,Math.abs(f-d)+.001,f+d-1e-4),g=l/u,x=c/u,m=h/u,M=Be((f*f+p*p-d*d)/(2*f*p),-1,1),w=Math.sqrt(1-M*M),v=t.kneeOut,y=n*t.side,S=-i*t.side;let T=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=p0(-c,this.legW),b=Math.cos(t.yaw)*(1-v*1.3)+S*(.12+1.2*v);const A=T*g+_*x+b*m;T-=g*A,_-=x*A,b-=m*A;const C=Math.hypot(T,_,b)||1;return e.set(r+f*(M*g+w*T/C),o+f*(M*x+w*_/C),a+f*(M*m+w*b/C))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,l=Math.cos(this.yaw)*o,c=(x,m)=>this.world.solidAt(x,n,m)||this.world.solidAt(x,i,m),h=x=>c(this.base.x+t*r*x,this.base.z+e*r*x),u=x=>c(this.base.x+t*r*x+a,this.base.z+e*r*x+l),f=h(1),d=h(-1),p=f||u(1)&&!d,g=d||u(-1)&&!f;return this.wallSide=p&&!g?-1:g&&!p?1:0,p&&!g?.22:g&&!p?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,p=t*t-f*f-d*d;return c.y+this.footH+(p>0?Math.sqrt(p):0)+.5};let r=1/0;for(const l of this.feet)l.mode==="ground"&&(r=Math.min(r,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=pe((l.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?c+.3*(1-h):Ht(o,c,h))),l.s>.88&&(r=Math.min(r,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=Be(Un(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),l=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(Un(this.yaw-o.yaw))*.35;l>r&&(r=l,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*hn*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Ht(-n*.97,-n*.55,pe(t)),Ht(0,.1*n,pe(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,l)=>new L(o,a,l),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=fa/2,a=fn-.02,l=a+.07,c=Math.asin(Be((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(c+.19),l),u=Math.asin(Be((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),p=this.hipX+.03,g=-.08,x=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(g,0,0))),m=this.fromPivot(x,g,0,[e(-p,a,d),e(p,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,w=m.head.y-.08-.04;return M*M-w*w>.35*.35&&(m.hands=[this.palm(m.head,g,0,0,-.12,.92),this.palm(m.head,g,0,1,.12,.92)]),m}case"lie":{const a=Math.PI/2,l=e(-.25,.5+fa,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new me().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=fa/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new me().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=o*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new L(c.x+Math.sin(r)*f,Math.max(a,c.y-h),c.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new L(c*(.5+fa/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new L(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(Un(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new L(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new L(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var g,x;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,l=r.y+.03*e,c=.12*t,h=Math.sqrt(2*ze*(l-(r.y-a))),u=c+h/ze+Math.sqrt(2*(l-o.y)/ze),f=u+.12*t,d=[],p=[];for(let m=0;;m=Math.min(f,m+1/40)){if(m<=c){const M=pe(m/c);d.push(this.fromPivot(new L(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(m<u){const M=m-c,w=M/(u-c),v=pe(w),y=new L(0,r.y-a+h*M-.5*ze*M*M,o.z*v),S=[0,1].map(b=>n.ankles[b].clone().lerp(i.ankles[b],v)),T=Ht(0,i.feet[0],v),_=w>.5?[((g=i.hands[0])==null?void 0:g.clone())??null,((x=i.hands[1])==null?void 0:x.clone())??null]:[null,null];d.push(this.fromPivot(y,Ht(.08,i.lean,v),0,S,[T,T],_,v))}else d.push(i);if(p.push(m/f),m>=f)break}return{keys:d,at:p,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var w,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(y,S)=>new me().setFromEuler(this.e1.set(y,0,S)),a=o(e.lean,e.roll),l=o(n.lean,n.roll),c=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,l,y,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,p=Math.sqrt(2*ze*(f-i.y)),g=d+p/ze+Math.sqrt(2*(f-r.y)/ze),x=g+.2*t,m=[],M=[];for(let y=0;;y=Math.min(x,y+1/40)){if(y<=d){const S=pe(y/d);m.push(this.fromPivot(i.clone(),Ht(e.lean,u,S),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((w=e.hands[0])==null?void 0:w.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<g){const S=y-d,T=S/(g-d),_=pe(T),b=new L(Ht(i.x,r.x,_),i.y+p*S-.5*ze*S*S,Ht(i.z,r.z,_)),A=Ht(u,n.lean,_),C=Ht(0,n.roll,_),P=o(A,C),U=b.clone().add(new L(0,.5,0).applyQuaternion(P)),F=[0,1].map(X=>{const j=Ht(c[X].length(),h[X].length(),_),G=c[X].clone().normalize().lerp(h[X].clone().normalize(),_).normalize().multiplyScalar(j).applyQuaternion(P),K=this.hipOf(U,P,X,1).add(G);return K.y=Math.max(K.y,this.footH+.02),K}),V=[0,1].map(X=>Ht(e.feet[X],n.feet[X],_)),q=[0,1].map(X=>{const j=e.hands[X],G=n.hands[X];return j&&G?j.clone().lerp(G,_):G&&T>.5?G.clone():null});m.push(this.fromPivot(b,A,C,F,V,q,1))}else m.push(n);if(M.push(y/x),y>=x)break}return{keys:m,at:M,dur:x,t:0,to:"lie",thud:g/x,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/x,pushDone:!1}}springUp(t){var S,T;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ze*(c-o.y)),f=h+u/ze+Math.sqrt(2*(c-(a.y-l))/ze),d=f+.16*e,p=t==="kneel"?i.lean+.15:i.lean,g=t==="lie"?i.roll-.35:i.roll,x=new me().setFromEuler(this.e1.set(i.lean,0,i.roll)),m=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,x,_,i.hips))),M=new L(a.x,a.y-l,a.z),w=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new L(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const b=pe(_/h);v.push(this.fromPivot(o.clone(),Ht(i.lean,p,b),Ht(i.roll,g,b),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((S=i.hands[0])==null?void 0:S.clone())??null,((T=i.hands[1])==null?void 0:T.clone())??null],i.hips))}else if(_<f){const b=_-h,A=b/(f-h),C=new L(Ht(o.x,a.x,pe(A)),o.y+u*b-.5*ze*b*b,Ht(o.z,a.z,pe(A))),P=Ht(p,0,pe(A)),U=Ht(g,0,pe(Math.min(1,A*1.4))),F=new me().setFromEuler(this.e1.set(P,0,U)),V=C.clone().add(new L(0,.5,0).applyQuaternion(F)),q=pe(Math.min(1,A*1.3)),X=Ht(i.hips,0,q),j=[0,1].map(ut=>{const B=Ht(m[ut].length(),w[ut].length(),A)-.08*n*Math.sin(Math.PI*A),k=m[ut].clone().normalize().lerp(w[ut].clone().normalize(),q).normalize(),O=this.hipOf(V,F,ut,X).addScaledVector(k,B);return O.y=Math.max(O.y,this.footH+.02),O}),G=[0,1].map(ut=>Ht(i.feet[ut],0,pe(A))),K=V.y-.08<this.armLen*.92,tt=[0,1].map(ut=>K&&i.hands[ut]&&i.hands[ut].y<.15?i.hands[ut].clone():null);v.push(this.fromPivot(C,P,U,j,G,tt,X))}else{const b=pe((_-f)/(d-f));v.push(this.fromPivot(new L(a.x,Ht(a.y-l,a.y,b),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=si(e.t/e.dur),l=e.linear?a:pe(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=si((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=js(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(hn*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?pe(e.t/n):e.t>e.dur-i?pe((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(hn*(e.kind==="chin"?4.5:5.5)*o)*pe(o/.15)*pe((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(x,m)=>x&&m?x.clone().lerp(m,n):n<.5?x?x.clone():null:m?m.clone():null,r=Ht(t.lean,e.lean,n),o=Ht(t.roll,e.roll,n),a=(x,m)=>new me().setFromEuler(this.e1.set(x,0,m)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Ht(t.hips,e.hips,n),d=[0,1].map(x=>{const m=t.ankles[x].clone().sub(this.hipOf(t.head,l,x,t.hips)),M=e.ankles[x].clone().sub(this.hipOf(e.head,c,x,e.hips)),w=Ht(m.length(),M.length(),n),v=Ht(t.ankles[x].y,e.ankles[x].y,n),y=this.hipOf(u,h,x,f),S=Ht(m.x,M.x,n),T=Ht(m.z,M.z,n),_=Math.hypot(S,T),b=y.y-v,A=Math.sqrt(Math.max(0,w*w-b*b)),C=new L(y.x,Math.max(v,y.y-w),y.z);return _>1e-4&&(C.x+=S/_*A,C.z+=T/_*A),C.y=Math.max(C.y,this.footH+.02),C}),p=x=>{const m=t.hands[x],M=e.hands[x];if(!m||!M)return i(m,M);const w=Math.atan2(m.x-t.head.x,m.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),y=w+Un(v-w)*n,S=Ht(Math.hypot(m.x-t.head.x,m.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new L(u.x+Math.sin(y)*S,Ht(m.y,M.y,n),u.z+Math.cos(y)*S)},g=[p(0),p(1)];return g.forEach((x,m)=>{x&&(this.outsideBody(x,u,h,this.arms[m].side),x.y=Math.max(x.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Ht(t.feet[0],e.feet[0],n),Ht(t.feet[1],e.feet[1],n)],hands:g,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(r.setComponent(l,c*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new L(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",r(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new me().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new me().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*pe((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=r(c,new L),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/ua));a<=Math.min(r.length-1,Math.ceil((e+i)/ua));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Be(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Be(Un(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=js(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new L);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*hn*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=pe(n/.15)*(1-pe((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+DS((n-.12)/.74)*hn,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*si(n/.45)):0,r=n>.4?Math.sin(Math.PI*si((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=Un(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=pe(e.t/i);this.vy=0,this.pos.y=Ht(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Be(Un(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=pe(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Ht(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/ze),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ze);this.vy=ze*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ze*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Be(Un(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*si(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Ht(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Be(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new L((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new L(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=hn*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Be(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=o?Ht(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=hn*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(o?3.5*Be(a,-12,12):0))*t,this.lean=Be(this.lean+this.leanV*t,-.6,.7),this.roll=Be(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,p=Ht(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const g of this.arms)g.tp=(g.side===-1?1:-1)*p*Math.cos(hn*(this.phase-.04)),g.to=g.side===this.wallSide?.03:Ht(.07,.2,d),g.te=Ht(.24,1.55,d)+Math.max(0,-g.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=hn*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=pe(r),a=Ht(i.from.x,i.to.x,o),l=Ht(i.from.z,i.to.z,o),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Ht(i.from.y,i.to.y,pe((r-.15)/.75))+c*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,p=u/d,g=f/d,x=Math.min(fn+.08+.35*(1-r),(1-o)*d+fn+.04);let m=-1/0;for(let T=0;T<=4;T++){const _=Ai-.04+(x-Ai+.04)*(T/4);m=Math.max(m,this.world.groundAt(a+p*_,l+g*_))}const M=m+.07*(1-pe((r-.82)/.18)),w=Math.max(h,r>.97?i.to.y:M);i.sy=w>i.sy?w:i.sy+(w-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(w,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+Un(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),y=Math.cos(i.yaw),S=i.ankle.y;for(let T=0;T<8;T++){const _=i.ankle.y-this.footH*.5,b=this.kneeAt(i,this.t2),A=b.x+v*.07,C=b.z+y*.07,P=(this.world.solidAt(b.x,b.y,b.z)||this.world.solidAt(A,b.y-.07,C))&&this.world.groundAt(A,C)<b.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*fn,_,i.ankle.z+y*fn)&&!P||i.ankle.y-S>.45)break;i.ankle.y+=.06}i.toe=Ht(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),pe(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,o.y-i.ankle.y),c=d0-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*c*fn,d=i.ankle.y-this.footH+h*fn,p=i.ankle.z+l*c*fn;if(!this.world.solidAt(f,d,p)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*o*Mn,u=i.ankle.z+c*o*Mn,f=i.ankle.y-this.footH*o+Mn*a,d=(this.world.groundAt(h+l*(fn-Mn),u+c*(fn-Mn))+.005-f)/(fn-Mn);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(Be(d,-1,1))))}}}}const lc=5,zS=4935768,Ed=.3,FS=14;function kS(){const s=new Ue(.11,Mn-Ai-.01).rotateX(-Math.PI/2).translate(0,0,(Mn+Ai)/2-.005),t=new Ue(.11,fn-Mn-.02).rotateX(-Math.PI/2).translate(0,0,(fn+Mn)/2+.01),e=rw([s,t]);return s.dispose(),t.dispose(),e}const Td=72,OS=2.6;let qr=null;function BS(){if(qr)return qr;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),qr=new us(s),qr.colorSpace=Ne,qr}class HS{constructor(){R(this,"group",new he);R(this,"puffs",[]);R(this,"dust");R(this,"zeds",[]);R(this,"prints",[]);R(this,"printGeo",kS());R(this,"own",[]);R(this,"m",new Jt);R(this,"q",new me);R(this,"s",new L);const t=new Ye(1,1,1),e=new Ua({color:15987958});this.dust=new dr(t,e,Td),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new qe({color:zS,transparent:!0,opacity:Ed,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new wt(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>lc+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Td&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new Pn(Math.random(),Math.random(),Math.random())})}z(t){const e=new il({map:BS(),transparent:!0,depthWrite:!1,opacity:0}),n=new Ch(e);this.group.add(n),this.zeds.push({s:n,age:0,life:OS,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<lc?1:Math.max(0,1-(o-lc+1)/3),l=1-Math.min(1,Math.max(0,(i.age-FS)/3)),c=Ed*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const ji=.12,Yr={thick:.07,long:.15,wide:.135},Ad=2.6,VS=2.9,$r=2.5,da={back:-.55,fwd:2.1,inward:-.22,out:1},tr={up:-d0,down:.95,side:.3,twist:.35},cc={flex:1.55,side:.45,turn:1.6},ke=(s,t,e)=>s<t?t:s>e?e:s,hc=(s,t,e)=>s+(t-s)*e;function pa(s,t,e,n){const i=new Ye(ji,s-t,ji).translate(0,(s+t)/2,0);return n.push(i),new wt(i,e)}function uc(s,t,e){return e.push(s),new wt(s,t)}const Tn=new L,vn=new L,ai=new L,Ja=new Jt;function Qa(s,t,e){return vn.copy(s).negate().normalize(),ai.copy(t).addScaledVector(vn,-t.dot(vn)),ai.lengthSq()<1e-8&&ai.set(1,0,0).cross(vn),ai.normalize(),Tn.crossVectors(vn,ai),Ja.makeBasis(Tn,vn,ai),e.setFromRotationMatrix(Ja)}const hr=new L,ni=new L,ns=new L,wa=new L,dh=new L,Rd=new me;function _s(s,t,e,n,i,r,o,a=Math.PI){hr.subVectors(t,s);const l=hr.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=ke(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?ni.set(0,-1,0):ni.copy(hr).divideScalar(l);const u=ke((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);ns.copy(i).addScaledVector(ni,-i.dot(ni)),ns.lengthSq()<1e-8&&ns.set(0,0,1).addScaledVector(ni,-ni.z),ns.normalize(),wa.copy(s).addScaledVector(ni,e*u).addScaledVector(ns,e*f),dh.copy(s).addScaledVector(ni,h),Qa(hr.subVectors(wa,s),i,r),Qa(dh.sub(wa),i,Rd),o.copy(r).invert().multiply(Rd)}const Zi=new Pn,GS=new L;function Cd(s,t,e,n,i="XYZ"){Zi.setFromQuaternion(s,i);const r=ke(Zi.x,t[0],t[1]),o=ke(Zi.y,e[0],e[1]),a=ke(Zi.z,n[0],n[1]);(r!==Zi.x||o!==Zi.y||a!==Zi.z)&&s.setFromEuler(Zi.set(r,o,a,i))}class WS{constructor(t,e,n){R(this,"root",new he);R(this,"fx",new HS);R(this,"motion");R(this,"placed",!1);R(this,"face");R(this,"world");R(this,"pelvis",new he);R(this,"turn",new he);R(this,"squash",new he);R(this,"legs",[]);R(this,"arms",[]);R(this,"solid",[]);R(this,"own",[]);R(this,"look",null);R(this,"targets",[null,null]);R(this,"talkCh",null);R(this,"clock",0);R(this,"lastBreath",0);R(this,"showing",null);R(this,"yawLook",0);R(this,"pitchLook",0);R(this,"a2");R(this,"v1",new L);R(this,"v2",new L);R(this,"v3",new L);R(this,"v4",new L);R(this,"v5",new L);R(this,"qa",new me);R(this,"qb",new me);R(this,"qc",new me);R(this,"qd",new me);R(this,"qm",new Jt);R(this,"headCap",0);R(this,"scratchSeen",null);R(this,"sc1",new L);R(this,"sc2",new L);R(this,"sc3",new L);R(this,"qf",new me);R(this,"pts",[0,1,2,3,4].map(()=>new L));R(this,"kg",[0,1,2,3,4,5].map(()=>new L));this.world=n,this.motion=new US(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new IS(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=eu(t),a=new Ct().setRGB(i/255,r/255,o/255,Ne);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new Ua({color:t});this.own.push(n);const i=ji/2;if(!e.legless)for(const o of[-1,1]){const a=new he,l=new he,c=new he,h=new he;a.position.set(o*e.hipX,0,0);const u=pa(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=pa(i,-e.shin-i,n,this.own);l.add(f),c.position.y=-e.shin;const d=uc(new Ye(ji,e.footH,Mn-Ai).translate(0,-e.footH/2,(Mn+Ai)/2),n,this.own);h.position.set(0,-e.footH,Mn);const p=uc(new Ye(ji,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(p),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:o}),this.solid.push(u,f,d,p)}const r=this.a2;for(const o of[-1,1]){const a=new he,l=new he,c=new he,h=pa(i,-r,n,this.own);a.add(h),l.position.y=-r;const u=pa(i,-r-i,n,this.own);l.add(u),c.position.y=-r;const f=uc(new Ye(Yr.thick,Yr.long,Yr.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new me;this.arms.push({shoulder:a,elbow:l,wrist:c,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new L,pushE:0,pushETo:new L,pushN:new L,flatW:0,palm:new L,palmDir:new L(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new L){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new L){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new L).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(ke(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(ke(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=hc(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=hc(this.face.roll,ke(this.face.roll,-.03,.03),this.headCap),a=1-ke(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+ji/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let g=0;g<h.length;g++){const x=this.squash.worldToLocal(this.v4.copy(h[g]));if(!(Math.abs(x.x)<.5+n&&x.y>.02-o&&x.y<1+n-o&&Math.abs(x.z)<.5+n))continue;const m=[[.5+n-x.x,1,0,0],[x.x+.5+n,-1,0,0],[.5+n-x.z,0,0,1],[x.z+.5+n,0,0,-1],[1+n-o-x.y,0,1,0]];i&&m.push([x.y+o,0,-1,0]);let M=null;for(const w of m)!i&&this.v2.set(w[1],w[2],w[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||w[0]<M[0])&&(M=w);M&&M[0]>c&&(c=M[0],l=g,u.set(M[1],M[2],M[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),p=ns.subVectors(f,t.position).cross(d);if(p.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(p.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),l=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?ke(c,-.2,.7):ke(c,-.7,.2);if(h!==c){const S=Math.hypot(l.x,l.z);l.x=Math.sin(h)*S,l.z=Math.cos(h)*S}let u=o.q;if(o.mode!=="free"&&Math.abs(c-h)>tr.twist*.85){const S=c-h-Math.sign(c-h)*tr.twist*.85;u=this.qf.setFromAxisAngle(ai.set(0,1,0),-S).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(Tn.set(i.side*(.12+1.2*f),p0(-a.y,t.L),0)),p=GS.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const S=ke(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,hc(.6,1,S)).addScaledVector(p,1-.85*S);const T=ke(-a.z/.25,0,1);d.z+=1.6*T,d.addScaledVector(p,-.9*T)}const g=o.mode==="free"?VS:Ad;_s(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,g),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,p.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,p.add(Tn.set(i.side*.3,0,0)),g);const x=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),m=Math.atan2(x.z,-x.y),M=Math.asin(ke(x.x*i.side,-1,1)),w=ke(m,da.back,da.fwd),v=ke(M,o.mode==="free"?-.45:da.inward,da.out);if(w!==m||v!==M){const S=vn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(w),Math.cos(v)*Math.sin(w));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(x,S))}o.mode==="free"&&this.kneeOverGround(i,a,g),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const y=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(y.invert()).multiply(u),Cd(i.ankle.quaternion,[tr.up,tr.down],[-.35,tr.twist],[-.3,tr.side]),i.toes.rotation.set(ke(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Ad){const o=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),p=d.length();if(p<1e-4)return;d.divideScalar(p);const g=this.v4.crossVectors(h,d).normalize();g.dot(i)<0&&g.negate();let x=Math.PI/2;for(let M=1;M<=18;M++){const w=M/18*(Math.PI/2);if(f.y+p*(Math.cos(w)*d.y+Math.sin(w)*g.y)<=n){x=w;break}}const m=d.multiplyScalar(Math.cos(x)).addScaledVector(g,Math.sin(x));_s(a,l,o.thigh,o.shin,m,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+ji/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),o.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,o);const p=a.length();if(p<1e-4)return;a.divideScalar(p),l.crossVectors(c,a).normalize(),l.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let g=-1;for(let m=1;m<=24&&g<0;m++){const M=m/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,p*Math.cos(M)).addScaledVector(l,p*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+ji/2&&(g=M)}if(g<0)return;const x=h.copy(a).multiplyScalar(Math.cos(g)).addScaledVector(l,Math.sin(g));_s(u,e,i.thigh,i.shin,x,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[o(l)]=l),c){const d=o(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,p)=>{const g=e.arms[p],x=this.v2.set(d.side*.5,-.35,-1);if(f){x.set(0,1,0).applyQuaternion(f);const b=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();x.dot(b)>.3&&x.set(0,1,0),x.multiplyScalar(.45).add(vn.set(0,0,-1))}d.fk[0].setFromEuler(new Pn(g.pitch,0,d.side*Math.max(.04,g.out))),d.fk[1].setFromAxisAngle(Tn.set(1,0,0),-ke(g.elbow,0,$r));let m=0,M=!1;const w=g.reach??(h?a[p]:null);if(w){const b=d.shoulder.position;if(g.reach&&g.flat){M=!0;const A=d.shoulder.getWorldPosition(this.v3),C=d.elbow.getWorldPosition(wa);d.palm.copy(w);const P=hr.set(w.x-A.x,0,w.z-A.z);P.lengthSq()>1e-6&&P.normalize();const U=ni.set(w.x-C.x,0,w.z-C.z).addScaledVector(P,.25);U.lengthSq()<1e-4&&U.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),U.normalize(),d.palmDir.lerp(U,d.flatW<.05?1:Math.min(1,t*10)).normalize();const F=this.v1.copy(w).add(vn.set(0,Yr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),V=this.turn.worldToLocal(F);_s(b,V,n,i,x,d.ik[0],d.ik[1],$r)}else{const A=this.turn.worldToLocal(this.v1.copy(w));if(g.reach||w===c){if(w===c){const C=d.shoulder.getWorldPosition(dh),P=hr.set(ke(C.x,c.x-.5,c.x+.5),ke(C.y,c.y-.5,c.y+.5),ke(C.z,c.z-.5,c.z+.5));P.addScaledVector(ni.subVectors(C,P).normalize(),.06),this.turn.worldToLocal(A.copy(P))}A.distanceTo(b)<=r*.98||g.reach?_s(b,A,n,i,x,d.ik[0],d.ik[1],$r):this.pointAlong(d,A)}else this.pointAlong(d,A)}m=g.reach?g.reachW:1}const v=e.scratch;if(v&&v.side===p&&v.w>0&&g.reach){const b=d.shoulder.position,A=e.headDrop,C=this.turn.worldToLocal(this.sc1.copy(g.reach).add(vn.set(0,Yr.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),P=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-A-.15,.62):this.sc2.set(d.side*.4,1.14-A,-.04+.05*v.wiggle);let U=C;if(v.kind==="chin")U=C.lerp(P,v.w);else{const F=this.sc3.set(d.side*.9,1.25-A,.1),V=v.w,q=1-V;U=C.multiplyScalar(q*q).addScaledVector(F,2*V*q).addScaledVector(P,V*V)}x.lerp(v.kind==="chin"?Tn.set(d.side,-.3,.1):Tn.set(d.side,.35,-.15),v.w),_s(b,U,n,i,x,d.ik[0],d.ik[1],$r),M=v.w<.05,m=1}d.aimW+=((w?m:0)-d.aimW)*Math.min(1,t*(g.reach?30:7)),d.flatW+=((M?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const b=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);Qa(b,x,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const S=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),T=M?null:this.pushOut(S,.13,d.shoulder.getWorldPosition(this.v3));if(T?(d.pushTo.copy(T),d.pushN.subVectors(T,S).normalize(),d.push=1):d.push=0,d.push>0){const b=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));b.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const A=this.turn.worldToLocal(this.v1.copy(d.pushTo));_s(d.shoulder.position,A,n,i,b,this.qa,this.qb,$r),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(Tn.set(1,0,0),ke(-.1-.05*g.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const b=d.elbow.getWorldQuaternion(this.qb);Tn.set(0,this.v3.set(1,0,0).applyQuaternion(b).y<0?-1:1,0),vn.copy(d.palmDir).negate(),ai.crossVectors(Tn,vn).normalize(),vn.crossVectors(ai,Tn).normalize(),Ja.makeBasis(Tn,vn,ai);const A=this.qc.setFromRotationMatrix(Ja),C=b.invert().multiply(A);Cd(C,[-.45,cc.side],[-1.6,cc.turn],[-1.55,cc.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,C,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=ns.crossVectors(r,o).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=ns.subVectors(e,t.shoulder.position);Qa(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(Tn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,r+h,o+u))continue;const f=c?(i+c*.5-t.x)*c:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,p=f-Math.max(0,d)*.8;p<l&&(l=p,a=new L(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new L).distanceTo(t.feet[l].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new L);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const XS="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",qS="Welcome to Robyn Miller's Listening Room! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",YS="Click anywhere to look around.",$S="Click anywhere to carry on.",KS="That's it! This way.",ZS="Hi, Welcome to Robyn Miller's Listening Room. Feel free to take a look around.",JS="You are currently one of {x} people in the room.",QS="Things are quiet. You are the only person in the room.",jS="Have a seat and listen to some of my favorite grooves, man.",tb="Just so you know, the sweet spot for listening to Robyn's awesome tunes is the couch. And it's more comfy!",eb=["You may think that I'm not an appropriate host for a listening room? Hm. Well maybe you're not an appropriate guest for our listening room!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Have a seat. The couch is very forgiving.","That couch has been sat on by a lot of very important listeners. Mostly me.","The green velvet is a little worn. That means it works.","Go on, try the piano. It doesn't bite. The lid might.","I'd play the piano myself, but my arms only reach middle C.","Those speakers are taller than me. Most things are.","I asked the speakers to keep it down. They said they'd think about it.","The records are in the stand on the table. Sit on the couch and have a look. Gently.","Somewhere in that stand is my favourite record. I'm not telling which.","Turn it up? I don't know where the knob is. I've been told not to look for it.","Shh. The room is listening.","The best seat is the middle of the couch. Second best: anywhere on the couch.","Every room needs a host. This one got me. Lucky room.","I polished the piano myself. You can see me in it. Hello, me.","Music is best enjoyed slowly. Like soup.","I used to be just a block. Now I'm a block with legs. That's progress.","No hurry. I'm on listening-room time.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","If you hear snoring later, that was the bass.","Those little lights on the amplifier? I counted them. Twice. Two different answers.","Close your eyes. Now open them. See? Still a listening room.","Don't mind me. I'm just here for the ambience. I am the ambience.","I'm a professional. I've hosted at least one listener before. Possibly two.","Did you know a piano has eighty-eight keys? I checked. With my hat.","The lights are low on purpose. Ears work better in the dark. I read that somewhere. On a record.","That cord goes from the record player all the way to the back of the cabinet. I followed it. It took a while.","If you need me, I'll be right behind you. Always. Right behind you.","Do you play? You have a piano player's way of standing.","Some people listen with their ears. I listen with my whole block."],nb=["Yes? Can I help you?","Hey! Listen to the room, not to me.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a record.","Me? I'm not part of the furniture. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was humming.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],ib=["Hm? Oh! I wasn't asleep. I was listening with my eyes closed.","I'm up! I'm up!","Was I snoring? I don't snore. That was the bass.","Huh? Who? Oh. You. Welcome back."],sb=["Back again! I knew you would be.","Welcome back. I kept the couch warm.","Oh good, you're back. It's quiet in here without you."],rb=["Leaving already? Come back soon!","Goodbye! Thank you for visiting.","Off you go, then. I'll keep an ear on things.","Bye! The records will miss you. So will I. A little.","Thanks for coming. Mind the white out there. There is a lot of it."],ob=["Lovely, isn't it?","Good choice.","That's one of my favourites. Don't tell the others."],ab=["Oh! Someone else just came in. There are {x} of you now.","Another listener! That makes {x} of you."],lb=["Somebody just left. Now there are {x} of you."],cb=["Somebody just left. It's just you and me now."];function Ji(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const Ae=.2,hb=Math.sqrt(9.81/(22*Ae)),ub={...yS,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},Kr=(s,t,e,n=new L)=>n.set(s/Ae,t/Ae-.5,e/Ae),Pd=(s,t=new L)=>t.set(s.x*Ae,(s.y+.5)*Ae,s.z*Ae);class fb{constructor(t,e,n,i=!1){R(this,"scene",new Rh);R(this,"cam",new je);R(this,"mcam",new je);R(this,"shadow");R(this,"rig");R(this,"count",null);R(this,"onEnter",()=>{});R(this,"onLeave",()=>{});R(this,"el");R(this,"textEl");R(this,"bubble",null);R(this,"onKey",()=>{});R(this,"hidden",!1);R(this,"wasLocked",!1);R(this,"queue",[]);R(this,"used",new Set);R(this,"grid",null);R(this,"stage","waiting");R(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});R(this,"inside",!1);R(this,"wasInside",!1);R(this,"wasOut",!0);R(this,"quiet",0);R(this,"resting","no");R(this,"soughtRest",!1);R(this,"idleIn",6);R(this,"remarkIn",45);R(this,"followIn",0);R(this,"hemi");R(this,"sun");R(this,"dim",1);R(this,"glanceIn",2);R(this,"glanceAt",null);R(this,"dest",null);R(this,"last",{x:0,z:0,yaw:0,pitch:0});R(this,"countSaid",0);R(this,"lastCrowd",-999);R(this,"clock",0);R(this,"standH",0);R(this,"v1",new L);R(this,"v2",new L);R(this,"couchAt",-1e9);R(this,"sweetAt",-1e9);R(this,"scaleM",new Jt().makeScale(Ae,Ae,Ae));this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(f,d)=>this.wallAt(f*Ae,d*Ae)?this.gallery.arch.H/Ae:-.5,solidAt:(f,d,p)=>{const g=(d+.5)*Ae;return g<0?!0:g<this.gallery.arch.H&&this.wallAt(f*Ae,p*Ae)}};this.rig=new WS(ub,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.hemi=new Hg(16777215,13815492,1.9),this.scene.add(this.hemi);const o=new qg(16777215,1.5);this.sun=o,o.position.set(.4,1,.7),this.scene.add(o.target),this.scene.add(o);const a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.62)"),c.addColorStop(.55,"rgba(0,0,0,0.3)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);const h=new us(a);this.shadow=new wt(new Ue(1.5,1.2),new qe({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),u.append(this.textEl),this.el.append(u),this.textEl.addEventListener("click",f=>{var p;const d=(p=f.target.closest(".hk"))==null?void 0:p.dataset.k;d&&(f.preventDefault(),f.stopPropagation(),this.onKey(d),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*Ae,z:this.rig.pos.z*Ae}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/Ae,t.z/Ae,0),this.dest=null}gridFor(){var d;if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(c*h),f=((d=this.gallery.furniture)==null?void 0:d.solids)??[];for(let p=0;p<h;p++)for(let g=0;g<c;g++){const x=a+(g+.5)*n,m=l+(p+.5)*n,M=x>e.x0+i&&x<e.x1-i&&m>e.z0+i&&m<e.z1-i,w=m>e.z1+r+i,v=x>t.entrance.a+i&&x<t.entrance.b-i&&m>e.z1-i-.01&&m<e.z1+r+i+.01;!M&&!w&&!v||t.solids.some(y=>x>y.x0-i&&x<y.x1+i&&m>y.z0-i&&m<y.z1+i)||f.some(y=>{const S=x-y.x,T=m-y.z,_=S*y.c-T*y.s,b=S*y.s+T*y.c;return Math.abs(_)<y.hw+i*.8&&Math.abs(b)<y.hd+i*.8})||(u[p*c+g]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[l,c]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(l,c))return null;if(!h(o,a)){let v=null,y=1/0;for(let S=-4;S<=4;S++)for(let T=-4;T<=4;T++)h(o+T,a+S)&&T*T+S*S<y&&(y=T*T+S*S,v=[o+T,a+S]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),p=(v,y)=>{const S=Math.abs(v-l),T=Math.abs(y-c);return Math.max(S,T)+.414*Math.min(S,T)},g=[[p(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const x=c*n.nx+l;for(;g.length;){let v=0;for(let _=1;_<g.length;_++)g[_][0]<g[v][0]&&(v=_);const[,y]=g.splice(v,1)[0];if(y===x)break;const S=y%n.nx,T=Math.floor(y/n.nx);for(const[_,b]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const A=S+_,C=T+b;if(!h(A,C)||_&&b&&(!h(S+_,T)||!h(S,T+b)))continue;const P=C*n.nx+A,U=f[y]+(_&&b?1.414:1);U<f[P]&&(f[P]=U,d[P]=y,g.push([U+p(A,C),P]))}}if(!isFinite(f[x]))return null;const m=[];for(let v=x;v!==-1;v=d[v])m.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});m[m.length-1]={x:t,z:e};const M=[i];let w=0;for(;w<m.length-1;){let v=m.length-1;const y=M[M.length-1];for(;v>w+1&&!this.clear(y.x,y.z,m[v].x,m[v].z);)v--;M.push(m[v]),w=v}return M}goTo(t,e,n){const i=this.route(t,e);if(!i||i.length<2)return!1;let r=0;for(let l=1;l<i.length;l++)r+=Math.hypot(i[l].x-i[l-1].x,i[l].z-i[l-1].z);if(r<.25)return!1;const o=r>3.2?"bound":r>1.6?"run":"walk",a=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(i.slice(1).map(l=>({x:l.x/Ae,z:l.z/Ae})),o,()=>{this.dest=null},a),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Rs(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let l=null,c=1/0;if(a.forEach(([u,f],d)=>{const p=t.x+n*u+r*f,g=t.z+i*u+o*f;if(!this.freeAt(p,g)||!this.seen(p,g))return;const x=Math.hypot(p-e.x,g-e.z)+d*.15;x<c&&(c=x,l={x:p,z:g})}),!l)return;const h=l;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?QS:JS),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>fc(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=fc(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(fc(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=pb[i],l.textContent=db[i],this.textEl.append(l)}else{const l=i.slice(o-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(Ji(nb,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}couch(){this.stage!=="company"||this.hidden||this.clock-this.couchAt<45||(this.couchAt=this.clock,this.wake(),this.bubble&&(this.queue=[],this.endBubble()),this.say(jS,"happy"))}sweetSpot(){return this.stage!=="company"||this.hidden||this.bubble||this.clock-this.sweetAt<150?!1:(this.sweetAt=this.clock,this.wake(),this.say(tb,"happy"),!0)}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(Ji(ob,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(Ji(ab,this.used),"excited"):this.say(t<=1?cb[0]:Ji(lb,this.used),"curious"))}hit(t){const e=new Ss(Kr(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/Ae);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Pd(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(Ji(ib,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){{const f=this.arch.inner,d=this.at,p=d.x>f.x0&&d.x<f.x1&&d.z>f.z0&&d.z<f.z1;this.dim+=((p?0:1)-this.dim)*(1-Math.exp(-2.5*t));const g=.3+.7*this.dim;this.hemi.intensity=1.9*g,this.sun.intensity=1.5*g,this.sun.color.setRGB(1,.84+.16*this.dim,.64+.36*this.dim)}this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.wake(),this.stage==="waiting"&&!this.countSaid?(this.stage="greeting",this.queue=[],n.turnTo(Math.atan2(e.pos.x-this.at.x,e.pos.z-this.at.z)),n.perform("wave"),this.inv.hello||this.say(ZS,"happy"),this.say(this.countLine(),"pleased"),this.countSaid=1):this.stage==="waiting"&&(this.stage="company",this.say(Ji(sb,this.used),"happy")));const a=e.pos.z>o.z1+.3;if(a&&!this.wasOut&&this.stage!=="waiting"){this.onLeave(),this.stage==="company"&&(this.queue=[],this.wake(),this.say(Ji(rb,this.used),"happy"),this.rig.perform("wave")),this.stage="waiting";const f=this.outsideSpot();this.goTo(f.x,f.z)}this.wasInside=this.inside,this.wasOut=a,this.stage==="waiting"&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!e.seated&&this.say($S,"pleased"),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;c&&(c.shown=Math.min(c.text.length,c.shown+t*34),c.until===1/0&&(c.until=this.clock+Math.max(3,1.2+c.text.split(/\s+/).length/3.6)),this.clock>c.until&&this.endBubble());const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=Kr(this.main.position.x,this.main.position.y,this.main.position.z,new L);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(Ji(eb,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const p=this.restSpot(f);if(p&&this.goTo(p.x,p.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?qS:XS,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(YS,"pleased"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(KS,"excited");const a=this.doorSpot();this.goTo(a.x,a.z,"strut");return}}after(t){this.rig.update(t*hb);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const r=Math.max(.35,1-i/1.6);this.shadow.scale.set(r,r,1),this.shadow.material.opacity=.5*r*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,l=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/Ae,l/Ae,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=Kr(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(Kr(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/Ae)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/Ae,this.cam.far=t.far/Ae,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Pd(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;Kr(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const fc=s=>s==="W"||s==="LEFT"||s==="RIGHT",db={W:"W",LEFT:"←",RIGHT:"→"},pb={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};let Ri=null;const mb=/^((?!chrome|chromium|crios|fxios|edg|opr|android).)*safari/i.test(navigator.userAgent)&&!new URLSearchParams(location.search).has("direct");let rr=null,Ii=null;function ja(){const s=Xn();if(!rr)if(rr=s.createGain(),mb&&typeof s.createMediaStreamDestination=="function"){const t=s.createMediaStreamDestination();rr.connect(t),Ii=new Audio,Ii.srcObject=t.stream,Ii.play().catch(()=>{})}else rr.connect(s.destination);return rr}const gb=()=>Ii?`streamed to a player (${Ii.paused?"stopped":"playing"})`:rr?"straight out":"not yet";function Xn(){if(!Ri){const s=window.AudioContext??window.webkitAudioContext;Ri=new s({latencyHint:"interactive"})}return Ri.state!=="running"&&Ri.resume().catch(()=>{}),Ri}const xb=()=>Ri;let Ld=!1;function vb(){const s=t=>{if(t instanceof KeyboardEvent&&(t.key==="Escape"||t.metaKey||t.ctrlKey))return;const e=Xn();if(ja(),Ii!=null&&Ii.paused&&Ii.play().catch(()=>{}),Ld&&e.state==="running")return;Ld=!0;const n=e.createBufferSource();n.buffer=e.createBuffer(1,1,e.sampleRate),n.connect(ja()),n.start()};for(const t of["pointerdown","mousedown","touchend","keydown","click"])addEventListener(t,s,{capture:!0,passive:!0})}function Mb(s){if(!Ri)return;const t=Ri.listener,e=Ri.currentTime,n=s.position,i=s.matrixWorld.elements,r=-i[8],o=-i[9],a=-i[10];t.positionX?(t.positionX.setValueAtTime(n.x,e),t.positionY.setValueAtTime(n.y,e),t.positionZ.setValueAtTime(n.z,e),t.forwardX.setValueAtTime(r,e),t.forwardY.setValueAtTime(o,e),t.forwardZ.setValueAtTime(a,e),t.upX.setValueAtTime(i[4],e),t.upY.setValueAtTime(i[5],e),t.upZ.setValueAtTime(i[6],e)):(t.setPosition(n.x,n.y,n.z),t.setOrientation(r,o,a,i[4],i[5],i[6]))}const Id=s=>`piano/n${s}.m4a`,Dd=90,_b=48;class yb{constructor(){R(this,"ctx",null);R(this,"files",new Map);R(this,"buffers",new Map);R(this,"decoding",new Map);R(this,"voices",[]);R(this,"out",null);R(this,"panner",null);R(this,"pedal",!1);R(this,"where",{x:0,y:1,z:0})}fetchAll(){for(let t=21;t<=108;t++)this.files.has(t)||this.files.set(t,fetch(Id(t)).then(e=>{if(!e.ok)throw new Error(`${Id(t)}: ${e.status}`);return e.arrayBuffer()}))}setPosition(t,e,n){if(this.where={x:t,y:e,z:n},this.panner&&this.ctx){const i=this.ctx.currentTime;this.panner.positionX.setValueAtTime(t,i),this.panner.positionY.setValueAtTime(e,i),this.panner.positionZ.setValueAtTime(n,i)}}wake(){if(!this.ctx){const t=Xn();this.ctx=t;const e=t.createDynamicsCompressor();e.threshold.value=-8,e.knee.value=6,e.ratio.value=4,e.attack.value=.002,e.release.value=.25;const n=t.createPanner();n.panningModel="equalpower",n.distanceModel="inverse",n.refDistance=1.6,n.rolloffFactor=.7,this.panner=n,this.out=t.createGain(),this.out.gain.value=.9,this.out.connect(n).connect(e).connect(ja()),this.setPosition(this.where.x,this.where.y,this.where.z)}Xn(),this.fetchAll()}async decodeAll(){const t=Array.from({length:88},(i,r)=>21+r).sort((i,r)=>Math.abs(i-60)-Math.abs(r-60));let e=0;const n=async()=>{const i=t[e++];if(i!==void 0)return await this.decode(i).catch(()=>{}),n()};await Promise.all([n(),n(),n(),n()])}decode(t){if(this.buffers.has(t))return Promise.resolve();let e=this.decoding.get(t);return e||(this.fetchAll(),e=this.files.get(t).then(n=>this.ctx.decodeAudioData(n.slice(0))).then(n=>{const i=n.getChannelData(0);let r=0;for(let a=0;a<Math.min(i.length,9600);a++)r=Math.max(r,Math.abs(i[a]));let o=0;for(;o<i.length&&Math.abs(i[o])<r*.02;)o++;this.buffers.set(t,{buf:n,at:Math.max(0,o-24)/n.sampleRate})}),this.decoding.set(t,e),e)}noteOn(t){if(t<21||t>108||!this.ctx||!this.out)return;if(!this.buffers.get(t)){this.decode(t).then(()=>this.start(t,!0));return}this.start(t,!1)}start(t,e){const n=this.ctx,i=this.buffers.get(t);for(const c of this.voices)c.m===t&&this.release(c,.03);this.voices.length>=_b&&this.release(this.voices[0],.02);const r=n.createBufferSource(),o=n.createGain();r.buffer=i.buf,r.connect(o).connect(this.out);const a=n.currentTime;o.gain.setValueAtTime(e?.85:1,a),r.start(a,i.at);const l={m:t,src:r,gain:o,held:!0,t:a};r.onended=()=>{this.voices=this.voices.filter(c=>c!==l)},this.voices.push(l)}noteOff(t){for(const e of this.voices)e.m===t&&e.held&&(e.held=!1,!this.pedal&&t<Dd&&this.release(e))}setPedal(t){if(this.pedal=t,!t)for(const e of this.voices)!e.held&&e.m<Dd&&this.release(e)}allOff(){for(const t of[...this.voices])this.release(t,.15);this.pedal=!1}release(t,e){if(!this.ctx)return;const n=this.ctx.currentTime,i=e??(t.m<40?.12:t.m<60?.09:.06);t.gain.gain.cancelScheduledValues(n),t.gain.gain.setValueAtTime(t.gain.gain.value,n),t.gain.gain.setTargetAtTime(0,n,i);try{t.src.stop(n+i*8)}catch{}this.voices=this.voices.filter(r=>r!==t)}get sounding(){return this.voices.length}get unpacked(){return this.buffers.size}}const Zr="https://listening-music.robynmiller.workers.dev".replace(/\/$/,"")||null,wb=(()=>{const t=new Uint8Array(844),e=new DataView(t.buffer),n=(r,o)=>{for(let a=0;a<4;a++)t[r+a]=o.charCodeAt(a)};n(0,"RIFF"),e.setUint32(4,836,!0),n(8,"WAVE"),n(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,8e3,!0),e.setUint32(28,8e3,!0),e.setUint16(32,1,!0),e.setUint16(34,8,!0),n(36,"data"),e.setUint32(40,800,!0),t.fill(128,44);let i="";for(const r of t)i+=String.fromCharCode(r);return`data:audio/wav;base64,${btoa(i)}`})(),ys=s=>!!s.getAttribute("src")&&!s.getAttribute("src").startsWith("data:");class Sb{constructor(){R(this,"album",null);R(this,"track",0);R(this,"playing",!1);R(this,"cueing",!1);R(this,"moving",!1);R(this,"needleTo",0);R(this,"route","trying");R(this,"lastError","");R(this,"el",null);R(this,"plain",null);R(this,"out",null);R(this,"room",null);R(this,"pan",[]);R(this,"meters",[]);R(this,"buf",new Float32Array(1024));R(this,"speakers",[{x:-1.5,y:1.2,z:0},{x:1.5,y:1.2,z:0}]);R(this,"inside",!0);R(this,"heard",0);R(this,"loudest",0);R(this,"plainVol",0);R(this,"parked",!1);R(this,"waiting",null);R(this,"starts",0);R(this,"holding",!1);R(this,"holdSince",0);R(this,"sought",!1);R(this,"seekedAt",0);R(this,"onChange",()=>{});R(this,"links",new Map);R(this,"asking",new Map);R(this,"relinkAt",0)}get players(){return[this.route!=="plain"?this.el:null,this.route!=="speakers"?this.plain:null].filter(t=>!!t)}fromTop(){const t=this.waiting;this.parked=!1,this.waiting=null;const e=Xn().currentTime;if(this.out.gain.cancelScheduledValues(e),this.out.gain.setValueAtTime(0,e),this.sought=!1,this.seekedAt=0,t){if(this.playing){const n=this.starts,i=this.addr(t);i?this.put(i):this.prime([t]).then(()=>{const r=this.addr(t);r&&n===this.starts&&this.playing&&this.put(r)})}}else for(const n of this.players){if(n.currentTime>.05){n===this.main&&(this.sought=!0,n.addEventListener("seeked",()=>{this.seekedAt=performance.now()},{once:!0}));try{n.currentTime=0}catch{}}n.paused&&this.playing&&n.play().catch(i=>this.failed(i))}this.holding=!0,this.holdSince=performance.now()}prime(t){if(!Zr)return Promise.resolve();const e=Date.now(),n=[...new Set(t)].filter(o=>{var a;return!((((a=this.links.get(o))==null?void 0:a.until)??0)-e>12*6e4)&&!this.asking.has(o)}),i=t.map(o=>this.asking.get(o)).filter(Boolean);if(!n.length)return Promise.all(i).then(()=>{});if(n.length>150)return Promise.all([this.prime(n.slice(0,150)),this.prime(n.slice(150)),...i]).then(()=>{});const r=(async()=>{try{const o=await fetch(`${Zr}/link`,{method:"POST",headers:{"content-type":"text/plain"},body:JSON.stringify({files:n})});if(!o.ok)throw new Error(`music server: ${o.status}`);const a=await o.json(),l=Date.now()+a.ttl*1e3-3e4;for(const[c,h]of Object.entries(a.links))this.links.set(c,{url:h,until:l})}catch(o){this.failed(o)}finally{for(const o of n)this.asking.delete(o)}})();for(const o of n)this.asking.set(o,r);return Promise.all([r,...i]).then(()=>{})}addr(t){if(!Zr)return t;const e=this.links.get(t);return e&&e.until-Date.now()>5*6e4?e.url:null}primeAlbums(t){this.prime(t.flatMap(e=>e.tracks.map(n=>n.file)))}failed(t){if((t==null?void 0:t.name)==="AbortError")return;const e=t;this.lastError=`${(e==null?void 0:e.name)??"Error"}: ${(e==null?void 0:e.message)??String(t)}`,console.warn("music:",this.lastError)}get element(){return this.route==="plain"?this.plain:this.el}get main(){return this.element}wire(){if(this.el)return;const t=Xn(),e=()=>{const r=new Audio;return r.preload="auto",Zr&&(r.crossOrigin="anonymous"),r.addEventListener("ended",()=>{r===this.main&&ys(r)&&this.next(!0)}),r.addEventListener("play",()=>{r===this.main&&!this.parked&&ys(r)&&(this.playing=!0,this.onChange())}),r.addEventListener("pause",()=>{r===this.main&&!this.parked&&ys(r)&&(this.playing=!1,this.onChange())}),r.addEventListener("error",()=>{ys(r)&&this.relink(r)}),r};this.el=e(),this.plain=e(),this.plain.volume=0;const n=t.createMediaElementSource(this.el),i=t.createChannelSplitter(2);this.out=t.createGain(),this.room=t.createGain(),n.connect(i);for(let r=0;r<2;r++){const o=t.createPanner();o.panningModel="equalpower",o.distanceModel="inverse",o.refDistance=2.4,o.rolloffFactor=.85;const a=t.createAnalyser();a.fftSize=1024,i.connect(a,r),i.connect(o,r),o.connect(this.out),this.pan.push(o),this.meters.push(a)}this.out.connect(this.room).connect(ja()),this.place()}setSpeakers(t,e){this.speakers=[t,e],this.place()}place(){const t=xb();if(!t)return;const e=t.currentTime;this.pan.forEach((n,i)=>{const r=this.speakers[i];n.positionX.setValueAtTime(r.x,e),n.positionY.setValueAtTime(r.y,e),n.positionZ.setValueAtTime(r.z,e)})}setInside(t){if(this.inside=t,!this.room)return;const e=Xn();this.room.gain.setTargetAtTime(t?1:0,e.currentTime,.6)}start(t,e=!1){const n=this.route,i=++this.starts;this.parked=e,this.waiting=e?t:null,e&&(this.playing=!0),n!=="speakers"&&(this.plain.volume=n==="plain"?this.plainVol:0);const r=this.addr(t);if(r&&!e){this.put(r);return}for(const o of this.players)o.src=wb,o.play().catch(()=>{});this.prime([t]).then(()=>{const o=this.addr(t);!e&&o&&i===this.starts&&this.put(o)})}put(t){for(const e of this.players)e.src=t,e.play().catch(n=>this.failed(n))}relink(t){var o;const e=this.album;if(!Zr||!e||performance.now()-this.relinkAt<5e3)return;this.relinkAt=performance.now();const n=(o=e.tracks[this.track])==null?void 0:o.file,i=t.currentTime,r=this.playing&&t===this.main;n&&(this.links.delete(n),this.prime([n]).then(()=>{var l;const a=this.addr(n);!a||e!==this.album||n!==((l=e.tracks[this.track])==null?void 0:l.file)||(t.src=a,t.addEventListener("loadedmetadata",()=>{try{t.currentTime=i}catch{}r&&t.play().catch(c=>this.failed(c))},{once:!0}))}))}load(t,e=0,n=!1){if(!t.tracks.length)return;this.wire(),this.prime(t.tracks.map(r=>r.file));const i=Xn();this.album=t,this.track=Math.max(0,Math.min(t.tracks.length-1,e)),this.cueing=n,this.out.gain.cancelScheduledValues(i.currentTime),this.out.gain.setValueAtTime(n?0:1,i.currentTime),this.route==="plain"&&n&&(this.plainVol=0),this.start(t.tracks[this.track].file,n),this.heard=0,this.loudest=0,this.onChange()}cued(){!this.cueing||!this.el||!this.out||(this.cueing=!1,this.fromTop(),this.heard=0,this.loudest=0,this.onChange())}song(t){const e=this.album;!e||!this.el||t<0||t>=e.tracks.length||(this.track=t,this.start(e.tracks[t].file),this.onChange())}startOf(t){const e=this.album;if(!e)return 0;const n=e.tracks.reduce((i,r)=>i+(r.dur||0),0)||1;return e.tracks.slice(0,t).reduce((i,r)=>i+(r.dur||0),0)/n}skip(t){const e=this.album;if(!e||!this.el||this.cueing||t<0||t>=e.tracks.length)return;const n=Xn();this.out.gain.cancelScheduledValues(n.currentTime),this.out.gain.setValueAtTime(0,n.currentTime),this.track=t,this.moving=!0,this.needleTo=this.startOf(t),this.start(e.tracks[t].file,!0),this.onChange()}skipBy(t){const e=this.main;if(!this.album||!e)return;const n=t>0?this.track+1:!this.moving&&e.currentTime>3?this.track:this.track-1;this.skip(Math.max(0,Math.min(this.album.tracks.length-1,n)))}drop(){!this.moving||!this.el||!this.out||(this.moving=!1,this.fromTop(),this.onChange())}play(){if(!(!this.el||!this.album)){if(Xn(),!this.main||!ys(this.main)){this.start(this.album.tracks[this.track].file);return}this.route!=="plain"&&this.el.play().catch(t=>this.failed(t)),this.route!=="speakers"&&this.plain.play().catch(t=>this.failed(t))}}pause(){var t,e;this.parked&&(this.parked=!1,this.playing=!1,this.onChange()),(t=this.el)==null||t.pause(),(e=this.plain)==null||e.pause()}toggle(){this.playing?this.pause():this.play()}next(t=!1){const e=this.album;if(!(!e||!this.el)){if(this.track+1>=e.tracks.length){if(t){this.track=0;const n=this.addr(e.tracks[0].file);for(const i of this.players)n?i.src=n:(i.removeAttribute("src"),i.load());this.playing=!1,this.onChange()}return}this.track++,this.start(e.tracks[this.track].file),this.onChange()}}prev(){const t=this.album,e=this.main;if(!(!t||!e)){if(e.currentTime>3||this.track===0){for(const n of[this.el,this.plain])try{n.currentTime=0}catch{}return}this.track--,this.start(t.tracks[this.track].file),this.onChange()}}tick(t,e){const n=this.el,i=this.plain;if(!(!n||!i||!this.album)){if(this.holding){const r=this.main,o=performance.now();if(ys(r)&&!r.paused&&r.currentTime>.04&&r.currentTime<.8&&o-this.holdSince>60&&(!this.sought||this.seekedAt&&o-this.seekedAt>250)||o-this.holdSince>1500){this.holding=!1;const l=Xn().currentTime;this.out.gain.cancelScheduledValues(l),this.out.gain.setValueAtTime(0,l),this.out.gain.linearRampToValueAtTime(1,l+.05)}}if(this.route==="trying"&&!this.cueing&&!this.moving&&!this.holding&&ys(n)&&!n.paused&&n.currentTime>.3){this.heard+=t;const[r,o]=this.rms();if(this.loudest=Math.max(this.loudest,r,o),this.loudest>1e-4)this.route="speakers",i.pause(),i.removeAttribute("src"),i.load(),this.onChange();else if(this.heard>1.2){if(this.route="plain",Math.abs(i.currentTime-n.currentTime)>.2)try{i.currentTime=n.currentTime}catch{}i.paused&&i.play().catch(a=>this.failed(a)),n.pause(),this.playing=!i.paused,this.onChange()}}if(this.route==="plain"){const r={x:(this.speakers[0].x+this.speakers[1].x)/2,y:(this.speakers[0].y+this.speakers[1].y)/2,z:(this.speakers[0].z+this.speakers[1].z)/2},o=Math.hypot(e.x-r.x,e.y-r.y,e.z-r.z),a=this.cueing||this.moving||this.holding||!this.inside?0:Math.min(1,2.4/(2.4+.85*Math.max(0,o-2.4))),l=this.moving||this.holding?.02:a>this.plainVol+.3?.06:.4;this.plainVol+=(a-this.plainVol)*(1-Math.exp(-t/l)),i.volume=Math.max(0,Math.min(1,this.plainVol))}}}get progress(){const t=this.album,e=this.main;if(!t||!e)return 0;const n=t.tracks.reduce((r,o)=>r+(o.dur||0),0)||1,i=t.tracks.slice(0,this.track).reduce((r,o)=>r+(o.dur||0),0);return Math.min(1,(i+(e.currentTime||0))/n)}get current(){var t;return((t=this.album)==null?void 0:t.tracks[this.track])??null}rms(){return this.meters.length?this.meters.map(t=>{t.getFloatTimeDomainData(this.buf);let e=0;for(let n=0;n<this.buf.length;n++)e+=this.buf[n]*this.buf[n];return Math.sqrt(e/this.buf.length)}):[0,0]}levels(){if(!this.playing||this.cueing||this.moving||this.holding)return[0,0];if(this.route==="plain"){const t=performance.now()/1e3,e=.05*this.plainVol;return[e*(1+.45*Math.sin(t*7.1)*Math.sin(t*2.3)),e*(1+.45*Math.sin(t*6.3+1)*Math.sin(t*1.9))]}return this.rms()}}const Nd=.47,Ud=.33,ma=.1575,bb=.09,zn=s=>{const t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};class Eb{constructor(t,e,n,i,r){R(this,"isOpen",!1);R(this,"sel",0);R(this,"cards",[]);R(this,"hover",-1);R(this,"hoverEase",0);R(this,"openL",0);R(this,"openR",0);R(this,"side",0);R(this,"closing",!1);R(this,"stacked",!1);R(this,"choseAt",null);R(this,"pre",0);R(this,"preWant",!1);R(this,"clock",0);R(this,"shuf",null);R(this,"oldSel",0);R(this,"disc",null);R(this,"discRun",null);R(this,"listOn",!1);R(this,"listEase",0);R(this,"ray",new Ss);R(this,"ndc",new pt);R(this,"ui");R(this,"songs");R(this,"albumLine");R(this,"playBtn");R(this,"listFor",null);R(this,"onClosed",()=>{});R(this,"handLight",new wp(16773856,0,3,2));this.camera=t,this.canvas=e,this.music=n,this.F=i,this.albums=r,this.ui=document.createElement("div"),this.ui.id="fan-controls";const o=document.createElement("div");o.className="fc-list",this.albumLine=document.createElement("div"),this.albumLine.className="fc-album",this.songs=document.createElement("ol"),this.songs.className="fc-songs",this.songs.addEventListener("click",h=>{const u=h.target.closest("li");u&&(h.stopPropagation(),this.skip(()=>n.skip(+u.dataset.k)))}),o.append(this.albumLine,this.songs);const a=document.createElement("div");a.className="fc-row";const l=(h,u,f)=>{const d=document.createElement("button");return d.textContent=h,d.title=u,d.addEventListener("pointerdown",p=>p.stopPropagation()),d.addEventListener("click",p=>{p.stopPropagation(),f()}),a.append(d),d};l("⏮","Back",()=>this.skip(()=>n.skipBy(-1))),this.playBtn=l("⏸","Pause",()=>n.toggle()),l("⏭","Next song",()=>this.skip(()=>n.skipBy(1))),this.ui.append(o,a),this.ui.addEventListener("pointerdown",h=>h.stopPropagation()),document.body.append(this.ui);const c=n.onChange;n.onChange=()=>{c(),this.refresh()}}open(){const t=this.F(),e=new Map(this.albums().map(i=>[i.id,i]));if(this.cards=t.records.map(i=>{const r=e.get(i.mesh.userData.album),o=new Jt().compose(i.base,new me().setFromEuler(i.rest),new L(1,1,1));return{mesh:i.mesh,album:r,rest:o,a:0,z:0,lift:0,out:0,wait:0}}).filter(i=>i.album),!this.cards.length)return!1;const n=this.music.album?this.cards.findIndex(i=>i.album.id===this.music.album.id):-1;return this.sel=this.oldSel=n>=0?n:0,this.cards.forEach((i,r)=>{i.a=this.restAngle(r),i.z=this.depth(r)}),this.isOpen=!0,this.closing=!1,this.stacked=!1,this.hover=-1,this.side=0,this.openL=this.openR=0,this.shuf=null,this.listOn=!1,this.listEase=0,this.refresh(),!0}close(){this.isOpen&&(this.reorder(),this.closing=!0,this.preWant=!1,this.hover=-1,this.side=0,this.ui.classList.remove("on"),this.canvas.style.cursor="",this.finishDisc())}reorder(){var o;const t=(o=this.music.album)==null?void 0:o.id,e=this.F().records,n=e.findIndex(a=>a.mesh.userData.album===t);if(n<=0)return;const i=e.map(a=>a.mesh),r=[i[n],...i.slice(0,n),...i.slice(n+1)];e.forEach((a,l)=>{a.mesh=r[l]});for(const a of this.cards){const l=e.find(c=>c.mesh===a.mesh);l&&a.rest.compose(l.base,new me().setFromEuler(l.rest),new L(1,1,1))}}beckon(t){this.isOpen||(this.preWant=t)}pileCentre(){const t=this.F().stand;if(!t)return null;const e=t.localToWorld(new L(0,.17,.02));return this.pre>.001?e.applyMatrix4(this.hoverMatrix(zn(this.pre))):e}restAngle(t){const e=t-this.sel,n=Math.abs(e);return n?-Math.sign(e)*.2*(1-.5**n):0}depth(t){const e=Math.abs(t-this.sel);return e?-(.004+.006*e):0}hoverMatrix(t){const e=this.F().stand,n=this.F().records[0],i=e.localToWorld(new L(0,.17,.02)),r=this.camera.position,o=i.clone().lerp(r,.5);o.y+=Math.sin(this.clock*2.1)*.006;const a=n?e.matrixWorld.clone().multiply(new Jt().makeRotationFromEuler(n.rest)):e.matrixWorld,l=new L(0,0,1).transformDirection(a),c=r.clone().sub(o).normalize(),h=new L(l.x,0,l.z).normalize(),u=new L(c.x,0,c.z).normalize(),f=new me().setFromUnitVectors(h,u),d=new me().setFromUnitVectors(l.clone().applyQuaternion(f),c),p=new me().setFromAxisAngle(new L(0,1,0),Math.sin(this.clock*1.3)*.025),g=new me().slerp(p.multiply(d.multiply(f)),t),x=i.clone().lerp(o,t);return new Jt().makeTranslation(x.x,x.y,x.z).multiply(new Jt().makeRotationFromQuaternion(g)).multiply(new Jt().makeTranslation(-i.x,-i.y,-i.z))}glow(t){for(const e of this.F().records){const n=e.mesh.userData.lit;n&&n.emissiveMap&&(n.emissiveIntensity=.85*t)}}update(t){this.clock+=t;const e=this.F();if(!e.stand)return;if(!this.isOpen){const m=this.pre,M=t/(this.preWant?.85:.7);if(this.pre=Math.max(0,Math.min(1,this.pre+(this.preWant?M:-M))),this.pre===0&&m===0)return;const w=zn(this.pre),v=this.hoverMatrix(w);for(const y of e.records){const S=new Jt().compose(y.base,new me().setFromEuler(y.rest),new L(1,1,1)),T=y.mesh.parent,_=v.clone().multiply(T.matrixWorld).multiply(S);new Jt().copy(T.matrixWorld).invert().multiply(_).decompose(y.mesh.position,y.mesh.quaternion,y.mesh.scale)}this.glow(w);return}const n=this.camera;n.updateMatrixWorld();const i=n.matrixWorld.elements,r=new L(i[0],i[1],i[2]),o=new L(i[4],i[5],i[6]),a=new L(-i[8],-i[9],-i[10]);this.listEase+=((this.listOn&&!this.closing?1:0)-this.listEase)*(1-Math.exp(-5*t));const l=n.position.clone().addScaledVector(a,Nd).addScaledVector(o,-.015+bb*zn(this.listEase)),c=e.group;this.handLight.parent!==c&&(this.handLight.layers.set(5),c.add(this.handLight)),this.handLight.position.copy(n.position).addScaledVector(o,.25).addScaledVector(r,-.15),this.handLight.intensity+=((this.closing?0:.32)-this.handLight.intensity)*(1-Math.exp(-4*t));const h=l.clone().addScaledVector(o,-Ud),u=a.clone().negate();this.closing&&(this.pre=Math.max(0,this.pre-t/.7));const f=this.pre>0?this.hoverMatrix(zn(this.pre)):null;this.glow(zn(this.pre));const d=1-Math.exp(-6*t);this.openL+=((this.side<0?1:0)-this.openL)*d,this.openR+=((this.side>0?1:0)-this.openR)*d,this.hoverEase+=((this.hover>=0&&this.hover!==this.sel&&!this.shuf?1:0)-this.hoverEase)*d;const p=this.shuf;p&&(p.t+=t,p.t>=p.dur&&(this.shuf=null,this.startDisc()));let g=!0;const x=!this.closing&&(this.stacked||!!this.discRun);if(this.cards.forEach((m,M)=>{m.wait=Math.max(0,m.wait-t);const w=m.wait>0?this.oldSel:this.sel,v=w,y=this.cards.length-1-w,S=M-w,T=Math.abs(S),_=Math.sign(S);let b=0,A=0,C=0;if(T&&x)A=-(.004+.006*T);else if(T){const _t=_<0?v:y,Vt=_<0?this.openL:this.openR,kt=.2*(1-.5**T),$t=T*Math.min(.3,1.15/Math.max(1,_t));let te=kt+($t-kt)*Vt;if(this.hover>=0&&Math.sign(this.hover-w)===_){const Y=Math.abs(this.hover-w);T>=Y&&(te+=.09*this.hoverEase),T>Y&&(te+=.07*this.hoverEase),M===this.hover&&(C=.012*this.hoverEase)}b=-_*te,A=-(.004+.006*T)}const P=1-Math.exp(-4.5*t);if(p&&M===p.k){const _t=Math.min(1,p.t/p.dur),Vt=zn(_t);m.lift=.13*Math.sin(Math.PI*Math.min(1,_t*1.05)),m.a=p.a0*(1-zn(_t*1.25)),m.z=p.z0+(.006-p.z0)*Vt}else m.a+=(b-m.a)*P,m.z+=(A-m.z)*P,m.lift+=(C-m.lift)*P;const U=this.closing?0:1,F=this.closing?2.6:2.2;m.out=Math.max(0,Math.min(1,m.out+(U?1:-1)*F*t)),(this.closing?m.out>0:m.out<1)&&(g=!1);const V=m.out,q=zn(V),X=m.mesh.material,j=m.mesh.userData.lit,G=m.mesh.userData.bright,K=!!G&&G!==j&&G.isMeshBasicMaterial,tt=V>.001&&K?G:j;if(tt&&X[4]!==tt&&(X[4]=tt),K&&tt===G){const _t=.15+.75*zn(this.pre);G.color.setScalar(_t+(1-_t)*q)}const ut=o.clone().multiplyScalar(Math.cos(m.a)).addScaledVector(r,-Math.sin(m.a)),B=ut.clone().cross(u),O=h.clone().addScaledVector(ut,Ud).addScaledVector(o,m.lift).addScaledVector(u,m.z).clone().addScaledVector(ut,-ma),H=new Jt().makeBasis(B,ut,u).setPosition(O),I=m.mesh.parent,z=I.matrixWorld.clone().multiply(m.rest);f&&z.premultiply(f);const W=new L,J=new me,et=new L,xt=new L,yt=new me,ot=new L;z.decompose(W,J,et),H.decompose(xt,yt,ot);const ft=W.clone().lerp(xt,q).addScaledVector(new L(0,1,0),Math.sin(q*Math.PI)*.08*(1-this.pre)),dt=J.clone().slerp(yt,q);new Jt().copy(I.matrixWorld).invert().multiply(new Jt().compose(ft,dt,new L(1,1,1))).decompose(m.mesh.position,m.mesh.quaternion,m.mesh.scale),m.mesh.renderOrder=p&&M===p.k&&p.t>p.dur*.45?12:10-Math.min(9,Math.abs(M-this.sel))}),this.updateDisc(t),this.closing&&g&&this.pre===0){for(const m of this.cards)m.rest.decompose(m.mesh.position,m.mesh.quaternion,m.mesh.scale),m.mesh.renderOrder=0,m.mesh.userData.lit&&(m.mesh.material[4]=m.mesh.userData.lit);this.glow(0),this.isOpen=!1,this.closing=!1,this.cards=[],this.shuf=null,this.handLight.intensity=0,this.onClosed()}}startDisc(){const t=this.discRun;if(!t||t.phase!=="wait")return;const e=this.cards[t.k];if(!e){this.finishDisc();return}this.disc||(this.disc=new wt(new We(.1515,.1515,.0018,96),ch(t.album)),this.disc.layers.enable(5)),this.disc.material=ch(t.album),e.mesh.add(this.disc),this.disc.rotation.set(Math.PI/2,0,0),this.disc.position.set(0,ma,0),this.disc.visible=!0,t.phase="out",t.t=0,this.refresh()}updateDisc(t){const e=this.discRun,n=this.disc;if(!e||e.phase==="wait"||!n)return;e.t+=t;const i=this.F(),r=i.deck;if(!r){this.finishDisc();return}const o=1,a=1.4,l=.8,c=.1;r.record.updateWorldMatrix(!0,!1);const h=new L,u=new me,f=new L;r.record.matrixWorld.decompose(h,u,f);const d=(p,g)=>{const x=new Jt().compose(p,g,new L(1,1,1));new Jt().copy(i.group.matrixWorld).invert().multiply(x).decompose(n.position,n.quaternion,n.scale)};if(e.phase==="out"){if(n.position.x=(ma+.1515+.012)*zn(Math.min(1,e.t/o)),e.t>=o){n.updateWorldMatrix(!0,!1);const p=new L,g=new me,x=new L;n.matrixWorld.decompose(p,g,x),i.group.add(n);const m=h.clone().add(new L(0,c,0)),M=m.clone().sub(p).setY(0);e.p0=p,e.q0=g,e.above=m,e.c1=p.clone().add(new L(0,-.3,0)).addScaledVector(M,.15),e.c2=m.clone().add(new L(0,.22,0)).addScaledVector(M,-.35),e.phase="carry",e.t=0,d(p,g)}}else if(e.phase==="carry"){const p=Math.min(1,e.t/a),g=zn(p),x=e.p0,m=e.c1,M=e.c2,w=e.above,v=1-g,y=x.clone().multiplyScalar(v*v*v).addScaledVector(m,3*v*v*g).addScaledVector(M,3*v*g*g).addScaledVector(w,g*g*g),S=e.q0.clone().slerp(u,zn(Math.min(1,p/.8)));d(y,S),p>=1&&(e.phase="lower",e.t=0)}else if(e.phase==="lower"){const p=Math.min(1,e.t/l),g=1-(1-p)**3;d(e.above.clone().lerp(h,g),u),p>=1&&this.finishDisc()}}finishDisc(){this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun&&(this.discRun=null,this.music.cued(),this.refresh())}cardAt(t,e){var o;const n=this.canvas.getBoundingClientRect();this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObjects(this.cards.map(a=>a.mesh),!1);i.sort((a,l)=>l.object.renderOrder-a.object.renderOrder||a.distance-l.distance);const r=(o=i[0])==null?void 0:o.object;return r?this.cards.findIndex(a=>a.mesh===r):-1}move(t,e){if(!this.isOpen||this.closing)return;const n=this.cardAt(t,e);if(this.hover=n,n>=0&&n!==this.sel)this.side=Math.sign(n-this.sel);else{const i=this.canvas.getBoundingClientRect(),r=(t-i.left)/i.width-.5,o=Math.atan(ma/Nd)/(2*Math.atan(Math.tan(De.degToRad(this.camera.fov)/2)*this.camera.aspect));this.side=n===this.sel?0:Math.abs(r)>o*.9?Math.sign(r):0}if(this.stacked&&this.side!==0&&!this.discRun){const i=this.canvas.getBoundingClientRect();(!this.choseAt||Math.hypot(t-this.choseAt.x,e-this.choseAt.y)>i.width*.12)&&(this.stacked=!1)}this.canvas.style.cursor=n>=0?"pointer":""}click(t,e){if(!this.isOpen||this.closing)return!1;const n=this.cardAt(t,e);return n<0?(this.close(),!0):(this.choseAt={x:t,y:e},this.choose(n),!1)}choose(t){var i;const e=this.cards[t];if(!e||this.shuf)return;const n=this.music;if(!(this.discRun&&this.discRun.album.id===e.album.id)){if(t===this.sel&&((i=n.album)==null?void 0:i.id)===e.album.id&&!this.discRun){n.playing?this.listOn=!this.listOn:n.play(),this.refresh();return}t!==this.sel&&(this.oldSel=this.sel,this.shuf={k:t,t:0,dur:.75+.06*Math.min(6,Math.abs(t-this.sel)),a0:e.a,z0:e.z},this.cards.forEach((r,o)=>{r.wait=o===t?0:.3+.05*Math.abs(o-t)}),this.sel=t),this.hover=-1,this.side=0,this.stacked=!0,this.disc&&(this.disc.removeFromParent(),this.disc.visible=!1),this.discRun={k:t,album:e.album,phase:"wait",t:0},n.load(e.album,0,!0),this.listOn=!1,this.shuf||this.startDisc(),this.refresh()}}step(t){if(!this.isOpen||!this.cards.length)return;const e=this.hover>=0?this.hover:this.sel,n=Math.max(0,Math.min(this.cards.length-1,e+t));this.hover=n,this.side=n===this.sel?0:Math.sign(n-this.sel),this.side!==0&&!this.discRun&&(this.stacked=!1)}chooseHovered(){this.choseAt=null,this.choose(this.hover>=0?this.hover:this.sel)}skip(t){t(),this.refresh()}refresh(){const t=this.music,e=t.current,n=this.isOpen&&!this.closing&&!!t.album;if(this.ui.classList.toggle("on",n),this.ui.classList.toggle("list",n&&this.listOn),!t.album||!e)return;this.playBtn.textContent=t.playing?"⏸":"▶",this.playBtn.title=t.playing?"Pause":"Play";const i=t.album;if(this.listFor!==`${i.id}|${i.tracks.length}`){this.listFor=`${i.id}|${i.tracks.length}`,this.albumLine.textContent=i.title,this.songs.replaceChildren(...i.tracks.map((o,a)=>{const l=document.createElement("li");return l.dataset.k=String(a),l.textContent=o.title,l}));const r=i.tracks.length>20?3:i.tracks.length>8?2:1;this.songs.style.columnCount=String(r),this.songs.style.width=r===1?"auto":""}this.songs.querySelectorAll("li").forEach((r,o)=>r.classList.toggle("now",o===t.track))}}const Tb={KeyA:0,KeyW:1,KeyS:2,KeyE:3,KeyD:4,KeyF:5,KeyT:6,KeyG:7,KeyY:8,KeyH:9,KeyU:10,KeyJ:11,KeyK:12,KeyO:13,KeyL:14,KeyP:15},zd=4;class Ab{constructor(t,e,n,i){R(this,"state","none");R(this,"sound",new yb);R(this,"seat",null);R(this,"anim",null);R(this,"octave",0);R(this,"byKey",new Map);R(this,"byPointer",new Map);R(this,"ray",new Ss);R(this,"ndc",new pt);R(this,"recBack",null);R(this,"music",new Sb);R(this,"fan");R(this,"wheelAt",0);R(this,"beckonRest",!1);R(this,"beckonSat",!1);R(this,"handledAt",-1e9);R(this,"onChange",()=>{});this.player=t,this.camera=e,this.canvas=n,this.gallery=i,this.fan=new Eb(e,n,this.music,()=>this.F,()=>this.gallery.data.albums),this.fan.onClosed=()=>this.recordsAway(),t.onSeatedMove=()=>{this.state==="couch"&&this.stand()},addEventListener("keydown",r=>this.key(r,!0)),addEventListener("keyup",r=>this.key(r,!1)),n.addEventListener("pointerdown",r=>this.down(r)),n.addEventListener("wheel",r=>{this.state!=="records"||this.anim||(r.preventDefault(),!(performance.now()-this.wheelAt<280||Math.abs(r.deltaY)<4)&&(this.wheelAt=performance.now(),this.fan.step(r.deltaY>0?1:-1)))},{passive:!1}),addEventListener("pointermove",r=>this.move(r)),addEventListener("pointerup",r=>this.up(r)),addEventListener("pointercancel",r=>this.up(r)),addEventListener("blur",()=>{for(const r of this.byKey.values())this.off(r);this.byKey.clear(),this.sound.setPedal(!1)})}get busy(){return this.state!=="none"||!!this.anim}get moving(){return!!this.anim}get F(){return this.gallery.furniture}sitCouch(t){const e=this.F.couchSeats;if(!e.length||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>zd)return!1;const n=e.reduce((i,r)=>r.eye.distanceTo(t)<i.eye.distanceTo(t)?r:i);return this.go("couch",n,1),!0}sitPiano(t){const e=this.F.pianoSeat;return!e||this.anim||Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z)>zd?!1:(this.sound.wake(),this.sound.decodeAll(),this.go("piano",e,1.2),!0)}fit(t){if(!t.look)return;const e=this.camera,n=Math.atan(Math.tan(De.degToRad(e.fov)/2)*e.aspect);t.eye.copy(h0(t.look,t.yaw,t.pitch,Math.max(lr.near,lr.span/Math.tan(n))))}go(t,e,n){this.fit(e),this.seat=e,this.state=t,this.beckonSat=t==="couch",this.beckonRest=!1,t==="couch"&&this.music.primeAlbums(this.gallery.data.albums.filter(i=>!i.off)),this.player.seated=!0,this.anim={from:this.pose(),to:{x:e.eye.x,y:e.eye.y,z:e.eye.z,yaw:e.yaw,pitch:e.pitch},t:0,dur:n},this.onChange(t)}stand(){const t=this.seat;if(!(!t||this.state==="none")){for(const e of[...this.byKey.values(),...this.byPointer.values()])this.off(e);this.byKey.clear(),this.byPointer.clear(),this.sound.setPedal(!1),this.state="none",this.anim={from:this.pose(),to:{x:t.stand.x,y:as,z:t.stand.z,yaw:this.player.yaw,pitch:Math.max(-.25,Math.min(.1,this.player.pitch))},t:0,dur:.8,then:()=>{this.player.seated=!1,this.seat=null,this.player.collide()}},this.canvas.style.cursor="",this.onChange("none")}}pose(){const t=this.player;return{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw,pitch:t.pitch}}update(t){var i,r;const e=this.player,n=this.anim;if(n){n.t=Math.min(1,n.t+t/n.dur);const o=n.t*n.t*(3-2*n.t),a=n.to.y<n.from.y?o*o*(3-2*o):1-(1-o)*(1-o);e.pos.set(n.from.x+(n.to.x-n.from.x)*o,n.from.y+(n.to.y-n.from.y)*a,n.from.z+(n.to.z-n.from.z)*o),e.yaw=n.from.yaw+Math.atan2(Math.sin(n.to.yaw-n.from.yaw),Math.cos(n.to.yaw-n.from.yaw))*o,e.pitch=n.from.pitch+(n.to.pitch-n.from.pitch)*o,n.t>=1&&(this.anim=null,(i=n.then)==null||i.call(n))}else if(this.state==="records"&&this.recBack){const o=this.recBack.pose;e.pos.set(o.x,o.y,o.z),e.yaw=o.yaw,e.pitch+=(Math.max(o.pitch,-.12)-e.pitch)*(1-Math.exp(-6*t))}else this.seat&&this.state!=="none"&&(this.fit(this.seat),e.pos.copy(this.seat.eye));this.beckon(),this.fan.update(t),(r=this.F.piano)==null||r.update(t),Mb(this.camera)}rebuilt(){const t=this.F.soundAt;t&&this.sound.setPosition(t.x,t.y,t.z),this.state!=="none"&&(this.state="none",this.player.seated=!1,this.seat=null,this.anim=null),this.fan.isOpen&&this.fan.close(),this.recBack=null;const e=this.F.speakers;e&&this.music.setSpeakers(e[0],e[1])}beckon(){this.state!=="couch"&&(this.beckonSat=!1);let t=!1;const e=this.state==="couch"&&!this.fan.isOpen?this.fan.pileCentre():null;if(e&&this.anim)t=this.beckonSat&&this.anim.t>.35;else if(e){const n=this.camera.position,i=e.distanceTo(n),o=this.camera.getWorldDirection(new L).angleTo(e.clone().sub(n)),a=o<Math.max(this.beckonSat?.55:0,Math.atan2(.26,i)+.16);a||(this.beckonSat=!1),t=this.beckonSat||(this.fan.pre>.3?a:o<Math.atan2(.17,i)+.06)}t||(this.beckonRest=!1),this.fan.beckon(t&&!this.beckonRest)}get recordsUp(){return this.state==="couch"&&this.fan.pre>.5}lookAtRecords(){return this.anim||this.state!=="couch"||this.fan.isOpen||!this.fan.open()?!1:(this.music.primeAlbums(this.gallery.data.albums.filter(t=>!t.off)),this.recBack={state:"couch",pose:this.pose()},this.state="records",this.player.seated=!0,this.onChange("records"),!0)}recordsAway(){const t=this.recBack;this.recBack=null,t&&(this.state=t.state,this.beckonRest=!0,t.state==="none"&&(this.player.seated=!1,this.player.pos.y=as,this.player.collide()),this.canvas.style.cursor="",this.onChange(this.state))}relock(){var t,e;try{(e=(t=this.canvas.requestPointerLock())==null?void 0:t.catch)==null||e.call(t,()=>{})}catch{}}on(t){var e;this.sound.noteOn(t),(e=this.F.piano)==null||e.press(t,!0)}off(t){var e;this.sound.noteOff(t),(e=this.F.piano)==null||e.press(t,!1)}keyAt(t,e){const n=this.canvas.getBoundingClientRect();document.pointerLockElement===this.canvas?this.ndc.set(0,0):this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);const i=this.ray.intersectObject(this.F.group,!0).find(o=>o.object.isMesh);if(!i)return{key:null,piano:!1,records:!1};const r=i.object.userData;return{key:typeof r.key=="number"?r.key:null,piano:r.piece==="piano",records:!!r.records}}down(t){if(this.state==="records"){if(this.anim)return;t.preventDefault(),this.handledAt=performance.now(),this.fan.click(t.clientX,t.clientY)&&t.pointerType==="mouse"&&this.relock();return}if(this.state!=="piano"||this.anim)return;this.handledAt=performance.now();const{key:e,piano:n}=this.keyAt(t.clientX,t.clientY);if(e!==null){t.preventDefault(),this.byPointer.set(t.pointerId,e),this.on(e);try{this.canvas.setPointerCapture(t.pointerId)}catch{}}else n||this.stand()}move(t){if(this.state==="records"){this.fan.move(t.clientX,t.clientY);return}if(this.state!=="piano")return;const{key:e}=this.keyAt(t.clientX,t.clientY);t.pointerType==="mouse"&&(this.canvas.style.cursor=e!==null?"pointer":"");const n=this.byPointer.get(t.pointerId);n!==void 0&&e!==null&&e!==n&&(this.off(n),this.on(e),this.byPointer.set(t.pointerId,e))}up(t){const e=this.byPointer.get(t.pointerId);e!==void 0&&(this.byPointer.delete(t.pointerId),this.off(e))}key(t,e){var i,r;if(t.metaKey||t.ctrlKey||t.altKey||(r=(i=t.target).closest)!=null&&r.call(i,"input, textarea, select"))return;if(this.state==="couch"&&e&&!this.anim&&["KeyW","KeyA","KeyS","KeyD"].includes(t.code)){this.stand();return}if(this.state==="records"){if(!e||this.anim)return;["ArrowRight","KeyD"].includes(t.code)?(t.preventDefault(),this.fan.step(1)):["ArrowLeft","KeyA"].includes(t.code)?(t.preventDefault(),this.fan.step(-1)):["Space","Enter"].includes(t.code)?(t.preventDefault(),this.fan.chooseHovered()):["Escape","KeyW","KeyS"].includes(t.code)&&(this.fan.close(),t.code!=="Escape"&&this.relock());return}if(this.state!=="piano")return;if(e&&t.code==="Escape"){this.stand();return}if(t.code==="Space"){t.preventDefault(),this.sound.setPedal(e);return}if(e&&(t.code==="KeyZ"||t.code==="KeyX")){t.repeat||(this.octave=Math.max(-3,Math.min(3,this.octave+(t.code==="KeyX"?1:-1))));return}const n=Tb[t.code];if(n!==void 0)if(t.preventDefault(),e){if(t.repeat||this.byKey.has(t.code))return;const o=60+this.octave*12+n;if(o<21||o>108)return;this.byKey.set(t.code,o),this.on(o)}else{const o=this.byKey.get(t.code);if(o===void 0)return;this.byKey.delete(t.code),this.off(o)}}}const Rb=33.333/60*Math.PI*2,dc=-.379;class Cb{constructor(t,e,n,i){R(this,"speed",0);R(this,"arm",0);R(this,"vu",[sr,sr]);R(this,"on",null);R(this,"wasPlaying",!1);R(this,"lift",0);R(this,"move",null);this.music=t,this.F=e,this.inside=n,this.you=i}update(t){const e=this.music,n=this.F(),i=n.deck;if(e.setInside(this.inside()),e.tick(t,this.you()),!i&&e.moving&&e.drop(),i){const a=e.playing&&!e.cueing,l=a?Rb:0;this.speed+=(l-this.speed)*(1-Math.exp(-(a?2.2:.9)*t)),i.spin.rotation.y-=this.speed*t,i.record.visible=!e.cueing;const c=e.cueing?null:e.album,h=(c==null?void 0:c.id)??null;(h!==this.on||c&&i.record.material===i.restRecord)&&(i.record.material=c?ch(c):i.restRecord,this.on=h);const u=f=>.146-(.146-.064)*f;if(e.moving&&c){const f=i.armAt(u(e.needleTo));this.move||(this.move={phase:"lift",t:0,from:this.arm,to:f,dur:0,aim:e.needleTo});const d=this.move;if(d.aim!==e.needleTo&&(d.aim=e.needleTo,d.from=this.arm,d.to=f,d.phase="lift",d.t=0),d.t+=t,d.phase==="lift")this.lift=Math.min(1,this.lift+t/.35),this.lift>=1&&(d.phase="swing",d.t=0,d.from=this.arm,d.dur=.45+Math.abs(d.to-d.from)*2.2);else if(d.phase==="swing"){const p=Math.min(1,d.t/d.dur),g=p*p*(3-2*p);this.arm=d.from+(d.to-d.from)*g,p>=1&&(d.phase="lower",d.t=0)}else{const p=Math.min(1,d.t/.6);this.lift=(1-p)**2,p>=1&&(this.lift=0,this.move=null,e.drop())}}else{this.move=null,this.lift=Math.max(0,this.lift-t/.35);const d=!!c&&(e.playing||e.progress>5e-4)?i.armAt(u(e.progress)):0,p=.9*t;this.arm+=Math.max(-p,Math.min(p,d-this.arm))}i.arm.rotation.order="YXZ",i.arm.rotation.y=this.arm,i.arm.rotation.x=-.055*(this.lift*this.lift*(3-2*this.lift))}const r=e.levels(),o=1-Math.exp(-t/.3);if(n.meters.needles.forEach((a,l)=>{const c=20*Math.log10((r[l]??0)+1e-6),h=c+18,u=h<=-20?sr:h<=0?sr+(h+20)/20*(dc-sr):Math.max(ud,dc+h/3*(ud-dc));this.vu[l]+=(u-this.vu[l])*o,a.rotation.z=this.vu[l]}),e.playing&&!e.cueing){const a=20*Math.log10(Math.max(r[0],r[1])+1e-6),l=Math.round(Math.max(0,Math.min(12,(a+42)/40*12)));n.meters.bar.forEach((c,h)=>c(h<l?h<7?.9:1:h<7?.06:.03))}else this.wasPlaying&&n.meters.bar.forEach((a,l)=>a(l<7?.45:.08));this.wasPlaying=e.playing}}var kd;class Pb{constructor(t){R(this,"count",null);R(this,"onCount",()=>{});R(this,"id",(((kd=crypto.randomUUID)==null?void 0:kd.call(crypto))??String(Math.random()).slice(2)).slice(0,36));R(this,"inside",!1);R(this,"timer",0);R(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const ii=new URLSearchParams(location.search),Lb=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Fd=(matchMedia("(hover: none) and (pointer: coarse)").matches||Lb)&&!ii.has("desk")||ii.has("touch");Ib().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on")});async function Ib(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([j_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(it=>document.fonts.load(it))),new Promise(it=>setTimeout(it,2500))])]);vb();const e=new X_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,Fd?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=gh,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=eo,e.shadowMap.autoUpdate=!1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new Rh,l=new je(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(Wa);const c=new nS(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?De.radToDeg(2*Math.atan(Math.tan(De.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const it=e.getDrawingBufferSize(new pt);c.setSize(Math.round(it.x/2),Math.round(it.y/2))};h(),addEventListener("resize",h);const u=new cr(t,a,e,c,s,o);await u.loadSmall();const f=new Ew(r),d=t.layout,p=d.entrance;f.pos.set(p.x+2.4,as,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const g=ii.get("at");if(g){const[it,ct,N,E]=g.split(",").map(Number);f.pos.set(it,as,ct),f.yaw=De.degToRad(N||0),f.pitch=De.degToRad(E||0)}ii.get("hud");const x=document.getElementById("dot");x.style.display="none";const m=new aS(!1),M=new Ss;M.far=14,M.layers.enableAll();let w=[];const v=()=>{w=[],u.interior.group.traverse(it=>{it.isMesh&&!it.isInstancedMesh&&w.push(it)}),u.outside.group.traverse(it=>{it.isMesh&&it.userData.outside&&w.push(it)})},y=()=>S(new pt(0,0)),S=it=>{M.setFromCamera(it,l);const ct=M.intersectObjects(w,!1)[0];if(!ct)return{kind:"none"};const N=ct.object.userData;return N.piece?{kind:"piece",piece:N.piece,records:!!N.records,deck:!!N.deck,point:ct.point,dist:ct.distance}:N.label?{kind:"label",work:N.work,point:ct.point,dist:ct.distance}:N.work?{kind:"work",work:N.work,point:ct.point,dist:ct.distance}:N.face?{kind:"face",face:N.face,point:ct.point,dist:ct.distance}:{kind:"none",point:ct.point,dist:ct.distance}},T=(it=3.2)=>{var N,E;const ct=(E=(N=u.furniture)==null?void 0:N.couch)==null?void 0:E.centre;return!!ct&&Math.hypot(ct.x-f.pos.x,ct.z-f.pos.z)<it},_=it=>it.kind!=="piece"||!it.point?!1:it.records&&k.state==="couch"?k.lookAtRecords():it.deck&&k.music.album&&Math.hypot(it.point.x-f.pos.x,it.point.z-f.pos.z)<4?(k.music.toggle(),!0):it.piece==="couch"?k.state!=="couch"&&k.sitCouch(it.point):it.piece==="table"&&k.state==="none"&&T()?k.sitCouch(u.furniture.couch.centre):it.piece==="piano"?k.sitPiano(it.point):!1,b=new za,A=new Set;let C=1;const P=it=>{let ct=99;for(const N of u.interior.pictures)N.work.id===it&&(ct=Math.min(ct,Math.hypot(N.mesh.position.x-f.pos.x,N.mesh.position.z-f.pos.z)));return ct};function U(){C=0;for(const[it,ct]of u.sharp)if(!(P(it)<=14)){u.sharp.delete(it);for(const N of u.interior.pictures)N.work.id===it&&(N.mat.uniforms.uMap.value=u.texture(it));ct.dispose()}for(const it of u.interior.pictures){const ct=it.work.id;u.sharp.has(ct)||P(ct)>7.5||(C++,!(A.has(ct)||A.size>=4)&&(A.add(ct),b.loadAsync(cr.url(ct,"m")).then(N=>{A.delete(ct),u.sharp.set(ct,u.prepTex(N));for(const E of u.interior.pictures)E.work.id===ct&&(E.mat.uniforms.uMap.value=N)}).catch(()=>A.delete(ct))))}}const F=new sS;let V=!0;const q=it=>{const ct=u.cat.get(it);ct&&(V=f.locked,f.frozen=!0,F.show(ct,t.images[it],cr.url(it,u.sharp.has(it)?"m":"s"),cr.url(it,"l")),m.opened())};F.onClose=()=>{f.frozen=!1,J.looked()};const X=it=>{const ct=(t.layout.pieces??[]).find(lt=>lt.id===it);if(!ct)return;const N=De.degToRad(ct.rot),E=Math.sin(N),Z=Math.cos(N),nt=it==="couch"?2.2:1.7;f.pos.set(ct.x+E*nt,as,ct.z+Z*nt),f.yaw=Math.atan2(E,Z),f.pitch=-.32,f.collide()};let j=[],G=null;const K=it=>q(it.id);let tt=0,ut=!1;const B=()=>{var St;const it=(St=u.furniture)==null?void 0:St.couch,ct=t.layout.outline,N=f.pos;if(!it||k.state!=="none"||k.moving||F.open||document.body.classList.contains("ed-page")||!(N.x>ct.x0&&N.x<ct.x1&&N.z>ct.z0&&N.z<ct.z1))return!1;const E=it.centre,Z=l.position,nt=Math.hypot(E.x-Z.x,E.z-Z.z);return nt>3.2?!1:l.getWorldDirection(new L).angleTo(E.clone().sub(Z))<Math.atan2(1.2,nt)+(ut?.14:.06)},k=new Ab(f,l,r,u);k.onChange=it=>{(it==="piano"||it==="records")&&f.locked&&document.exitPointerLock()};const O=()=>{const it=t.layout.outline,ct=f.pos;return ct.x>it.x0&&ct.x<it.x1&&ct.z>it.z0&&ct.z<it.z1},H=new Cb(k.music,()=>u.furniture,O,()=>l.position);let I=0,z=0;const W={gallery:u,player:f,camera:l,renderer:e,canvas:r,viewer:F,scene:a,aim:y,openWork:q,standAt:X,dot:x};u.onRebuilt=()=>{f.solids=u.arch.solids,f.boxes=u.furniture.solids;const it=t.layout.outline;f.world={x0:it.x0-30,x1:it.x1+30,z0:it.z0-30,z1:it.z1+30},f.collide(),v(),j=u.interior.pictures.map(rS);const ct=u.furniture.stand;if(ct&&u.furniture.records.length){const N=ct.localToWorld(new L(0,.17,.02)),E=new L(0,0,1).transformDirection(ct.matrixWorld),Z=[];ct.traverse(nt=>{nt.isMesh&&Z.push(nt)}),G={kind:"records",id:"records",centre:N,normal:[E.x,0,E.z],size:.42,reach:2.9,meshes:Z}}else G=null;k.rebuilt(),z=0},u.rebuild();const J=new fb(u,f,l,Fd),et=new Pb((ii.get("count"),void 0));et.onCount=it=>J.setCount(it),ii.get("count")&&(J.count=+ii.get("count"));const xt=(()=>{const it=document.createElement("div");it.id="leaving",document.body.append(it);let ct=0;const N=()=>{if(iS({rmiLeave:!0}))return;const E=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(E)?(history.back(),setTimeout(()=>{location.href=E},1500)):it.classList.remove("on")};return{start(){clearTimeout(ct),it.classList.add("on"),ct=window.setTimeout(N,1900)},cancel(){clearTimeout(ct),it.classList.remove("on")}}})();J.onEnter=()=>{et.enter(),xt.cancel(),k.sound.fetchAll()},J.onKey=it=>{f.tap(it==="W"?"KeyW":it==="LEFT"?"ArrowLeft":"ArrowRight",it==="W"?.3:.4),f.locked||r.requestPointerLock()},J.onLeave=()=>{et.exit(),xt.start()};const yt=new Ss;yt.far=12;let ot=null,ft=-1e9;const dt=it=>{if(it.button!==0&&it.button!==2||performance.now()-ft<900)return;if(F.open){F.hide();return}if(k.state==="piano"||k.state==="records"||performance.now()-k.handledAt<400)return;const ct=document.body.classList.contains("ed-page");if(k.state==="couch"&&!ct){if(k.moving)return;const E=r.getBoundingClientRect(),Z=f.locked?y():S(new pt((it.clientX-E.left)/E.width*2-1,-((it.clientY-E.top)/E.height)*2+1));if(k.recordsUp||Z.records){k.lookAtRecords();return}if(Z.deck&&k.music.album){k.music.toggle();return}if(!f.locked){r.requestPointerLock();return}k.stand();return}if(!f.locked){const E=r.getBoundingClientRect(),Z=ct?null:S(new pt((it.clientX-E.left)/E.width*2-1,-((it.clientY-E.top)/E.height)*2+1));if(Z&&_(Z)){k.state==="couch"&&r.requestPointerLock();return}if(m.pic){K(m.pic);return}r.requestPointerLock();return}if(yt.setFromCamera(new pt(0,0),l),J.hit(yt)){J.poke();return}if(m.pic){K(m.pic);return}const N=y();!ct&&_(N)||(N.kind==="work"||N.kind==="label")&&q(N.work)};r.addEventListener("mousedown",dt),addEventListener("pointerdown",it=>{it.pointerType==="touch"&&(ft=performance.now())},!0);const Mt=it=>{M.setFromCamera(it,l);const ct=M.intersectObjects(w,!1)[0];if(!ct)return{kind:"none"};const N=ct.object.userData,E={point:ct.point,dist:ct.distance};return N.face?{kind:"wall",...E}:ct.point.y<.02?{kind:"floor",...E}:{kind:"other",piece:N.piece,records:!!N.records,deck:!!N.deck,...E}};new fS(r,l,f,Mt,it=>{if(k.state==="couch"){if(k.moving)return;if(it.records||k.recordsUp){k.lookAtRecords();return}if(it.deck&&k.music.album){k.music.toggle();return}k.stand();return}if(!(it.point&&(it.piece==="couch"||it.piece==="piano"||it.piece==="table")&&_({kind:"piece",piece:it.piece,records:it.records,deck:it.deck,point:it.point}))&&it.kind==="floor"&&it.point){const ct=it.point.x-f.pos.x,N=it.point.z-f.pos.z,E=Math.hypot(ct,N),Z=Math.max(0,E-.5)/Math.max(E,1e-6);f.goal={x:f.pos.x+ct*Z,z:f.pos.z+N*Z}}},()=>!F.open&&!document.body.classList.contains("ed-page")&&k.state!=="piano"&&k.state!=="records"),document.addEventListener("selectstart",it=>{var N;const ct=it.target instanceof Element?it.target:(N=it.target)==null?void 0:N.parentElement;ct!=null&&ct.closest("input, textarea, select, [contenteditable]")||it.preventDefault()}),addEventListener("mouseup",it=>ot==null?void 0:ot.release(it)),F.relock=()=>V&&!document.body.classList.contains("ed-page"),F.el.addEventListener("mousedown",it=>{F.busy||it.target.closest(".view-tools")||(it.preventDefault(),F.hide(),!F.open&&!f.locked&&F.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",it=>{it.target.closest("input, textarea, select")||it.preventDefault()}),addEventListener("keydown",it=>{var N,E;if((E=(N=it.target).closest)!=null&&E.call(N,"input, textarea, select, button"))return;const ct=it.code==="Enter"||it.code==="Space";if(F.open){(ct||it.code==="Escape")&&!F.busy&&(it.preventDefault(),F.hide());return}ct&&m.pic&&!document.body.classList.contains("ed-page")&&(it.preventDefault(),K(m.pic))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&F.open&&F.hide()});const _t=ii.get("open");_t!==null&&q(_t.padStart(2,"0"));let Vt=performance.now(),kt=0,$t=0;const te=ii.get("near")==="1";function Y(){var lt;const it=performance.now(),ct=Math.min((it-Vt)/1e3,.05);Vt=it,ct>.024?$t+=ct:$t=Math.max(0,$t-ct*.5),$t>1.5&&i>1&&(i=Math.max(1,i-.25),$t=0,h()),f.update(ct),k.update(ct),f.apply(l),l.updateMatrixWorld();const N=document.body.classList.contains("ed-page");J.hide(N||F.open),J.update(ct),f.obstacles=[J.obstacle],(z-=ct)<=0&&(z=.3,U()),m.hold(k.state==="records"&&!N?G:null),N||F.open?m.clear():m.update(ct,l,j,u.arch.solids,!0),H.update(ct);const E=B();E&&!ut&&J.couch(),ut=E,tt+=((E?1:0)-tt)*(1-Math.exp(-ct/.35));const Z=(lt=u.furniture)==null?void 0:lt.couch;Z&&(Z.light.intensity=Z.base*(1+.8*tt));const nt=k.music;nt.playing&&!nt.cueing&&k.state==="none"&&!k.moving&&!E&&!N&&!F.open&&O()&&!T(1.8)?I+=ct:I=0,I>7&&J.sweetSpot()&&(I=0),c.render(e,a,l),e.render(a,l),N||J.render(e),N||m.render(e,a,l),kt++,!window.__gReady&&kt>3&&(!te||C===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(Y)}requestAnimationFrame(Y);try{document.hasFocus()||window.focus()}catch{}ii.has("sound")&&T0(()=>import("./soundcheck-Ccacw_Yo.js"),[],import.meta.url).then(it=>it.soundPanel(k.music)),window.__g={...W,data:t,editor:ot,host:J,presence:et,focus:m,standAt:X,sitting:k,outWay:gb,Raycaster:Ss}}export{xb as a,Xn as b,gb as o,ja as s};
