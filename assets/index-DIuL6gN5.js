var Nf=Object.defineProperty;var Ff=(n,e,t)=>e in n?Nf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var nt=(n,e,t)=>Ff(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ia(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},Wi=[],dn=()=>{},Of=()=>!1,Ds=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Na=n=>n.startsWith("onUpdate:"),bt=Object.assign,Fa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Bf=Object.prototype.hasOwnProperty,et=(n,e)=>Bf.call(n,e),ke=Array.isArray,gr=n=>Ls(n)==="[object Map]",Hf=n=>Ls(n)==="[object Set]",Ge=n=>typeof n=="function",vt=n=>typeof n=="string",rr=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",$c=n=>(xt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Vf=Object.prototype.toString,Ls=n=>Vf.call(n),Gf=n=>Ls(n).slice(8,-1),kf=n=>Ls(n)==="[object Object]",Oa=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vr=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wf=/-(\w)/g,$n=Us(n=>n.replace(Wf,(e,t)=>t?t.toUpperCase():"")),Xf=/\B([A-Z])/g,Ei=Us(n=>n.replace(Xf,"-$1").toLowerCase()),Kc=Us(n=>n.charAt(0).toUpperCase()+n.slice(1)),qs=Us(n=>n?`on${Kc(n)}`:""),Wn=(n,e)=>!Object.is(n,e),Ys=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},jc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let zl;const Is=()=>zl||(zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ba(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?jf(i):Ba(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||xt(n))return n}const Yf=/;(?![^(]*\))/g,$f=/:([^]+)/,Kf=/\/\*[^]*?\*\//g;function jf(n){const e={};return n.replace(Kf,"").split(Yf).forEach(t=>{if(t){const i=t.split($f);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ha(n){let e="";if(vt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Ha(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Ia(Zf);function Zc(n){return!!n||n===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function eh(){return kt}let ot;const $s=new WeakSet;class Jc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$s.has(this)&&($s.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ml(this),tu(this);const e=ot,t=rn;ot=this,rn=!0;try{return this.fn()}finally{nu(this),ot=e,rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ka(e);this.deps=this.depsTail=void 0,Ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$s.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){No(this)&&this.run()}get dirty(){return No(this)}}let Qc=0,zr,Mr;function eu(n,e=!1){if(n.flags|=8,e){n.next=Mr,Mr=n;return}n.next=zr,zr=n}function Va(){Qc++}function Ga(){if(--Qc>0)return;if(Mr){let e=Mr;for(Mr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zr;){let e=zr;for(zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function tu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ka(i),th(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function No(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(iu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function iu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===br))return;n.globalVersion=br;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!No(n)){n.flags&=-3;return}const t=ot,i=rn;ot=n,rn=!0;try{tu(n);const r=n.fn(n._value);(e.version===0||Wn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,rn=i,nu(n),n.flags&=-3}}function ka(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ka(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function th(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let rn=!0;const ru=[];function Qn(){ru.push(rn),rn=!1}function ei(){const n=ru.pop();rn=n===void 0?!0:n}function Ml(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let br=0;class nh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!rn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new nh(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,su(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,br++,this.notify(e)}notify(e){Va();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ga()}}}function su(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)su(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Fo=new WeakMap,gi=Symbol(""),Oo=Symbol(""),Ar=Symbol("");function yt(n,e,t){if(rn&&ot){let i=Fo.get(n);i||Fo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Wa),r.map=i,r.key=t),r.track()}}function An(n,e,t,i,r,s){const o=Fo.get(n);if(!o){br++;return}const a=l=>{l&&l.trigger()};if(Va(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&Oa(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Ar||!rr(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ar)),e){case"add":l?c&&a(o.get("length")):(a(o.get(gi)),gr(n)&&a(o.get(Oo)));break;case"delete":l||(a(o.get(gi)),gr(n)&&a(o.get(Oo)));break;case"set":gr(n)&&a(o.get(gi));break}}Ga()}function bi(n){const e=Qe(n);return e===n?e:(yt(e,"iterate",Ar),sn(n)?e:e.map(Ct))}function Xa(n){return yt(n=Qe(n),"iterate",Ar),n}const ih={__proto__:null,[Symbol.iterator](){return Ks(this,Symbol.iterator,Ct)},concat(...n){return bi(this).concat(...n.map(e=>ke(e)?bi(e):e))},entries(){return Ks(this,"entries",n=>(n[1]=Ct(n[1]),n))},every(n,e){return gn(this,"every",n,e,void 0,arguments)},filter(n,e){return gn(this,"filter",n,e,t=>t.map(Ct),arguments)},find(n,e){return gn(this,"find",n,e,Ct,arguments)},findIndex(n,e){return gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gn(this,"findLast",n,e,Ct,arguments)},findLastIndex(n,e){return gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return js(this,"includes",n)},indexOf(...n){return js(this,"indexOf",n)},join(n){return bi(this).join(n)},lastIndexOf(...n){return js(this,"lastIndexOf",n)},map(n,e){return gn(this,"map",n,e,void 0,arguments)},pop(){return lr(this,"pop")},push(...n){return lr(this,"push",n)},reduce(n,...e){return Sl(this,"reduce",n,e)},reduceRight(n,...e){return Sl(this,"reduceRight",n,e)},shift(){return lr(this,"shift")},some(n,e){return gn(this,"some",n,e,void 0,arguments)},splice(...n){return lr(this,"splice",n)},toReversed(){return bi(this).toReversed()},toSorted(n){return bi(this).toSorted(n)},toSpliced(...n){return bi(this).toSpliced(...n)},unshift(...n){return lr(this,"unshift",n)},values(){return Ks(this,"values",Ct)}};function Ks(n,e,t){const i=Xa(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const rh=Array.prototype;function gn(n,e,t,i,r,s){const o=Xa(n),a=o!==n&&!sn(n),l=o[e];if(l!==rh[e]){const f=l.apply(n,s);return a?Ct(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Ct(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Sl(n,e,t,i){const r=Xa(n);let s=t;return r!==n&&(sn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ct(a),l,n)}),r[e](s,...i)}function js(n,e,t){const i=Qe(n);yt(i,"iterate",Ar);const r=i[e](...t);return(r===-1||r===!1)&&Ka(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function lr(n,e,t=[]){Qn(),Va();const i=Qe(n)[e].apply(n,t);return Ga(),ei(),i}const sh=Ia("__proto__,__v_isRef,__isVue"),ou=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(rr));function oh(n){rr(n)||(n=String(n));const e=Qe(this);return yt(e,"has",n),e.hasOwnProperty(n)}class au{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?mh:fu:s?uu:cu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=ih[t]))return l;if(t==="hasOwnProperty")return oh}const a=Reflect.get(e,t,Tt(e)?e:i);return(rr(t)?ou.has(t):sh(t))||(r||yt(e,"get",t),s)?a:Tt(a)?o&&Oa(t)?a:a.value:xt(a)?r?hu(a):Ya(a):a}}class lu extends au{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=zi(s);if(!sn(i)&&!zi(i)&&(s=Qe(s),i=Qe(i)),!ke(e)&&Tt(s)&&!Tt(i))return l?!1:(s.value=i,!0)}const o=ke(e)&&Oa(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,Tt(e)?e:r);return e===Qe(r)&&(o?Wn(i,s)&&An(e,"set",t,i):An(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&An(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!rr(t)||!ou.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",ke(e)?"length":gi),Reflect.ownKeys(e)}}class ah extends au{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lh=new lu,ch=new ah,uh=new lu(!0);const Bo=n=>n,Vr=n=>Reflect.getPrototypeOf(n);function fh(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=gr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Bo:e?Ho:Ct;return!e&&yt(s,"iterate",l?Oo:gi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Gr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hh(n,e){const t={get(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);n||(Wn(r,a)&&yt(o,"get",r),yt(o,"get",a));const{has:l}=Vr(o),c=e?Bo:n?Ho:Ct;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&yt(Qe(r),"iterate",gi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);return n||(Wn(r,a)&&yt(o,"has",r),yt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qe(a),c=e?Bo:n?Ho:Ct;return!n&&yt(l,"iterate",gi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return bt(t,n?{add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear")}:{add(r){!e&&!sn(r)&&!zi(r)&&(r=Qe(r));const s=Qe(this);return Vr(s).has.call(s,r)||(s.add(r),An(s,"add",r,r)),this},set(r,s){!e&&!sn(s)&&!zi(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=Vr(o);let c=a.call(o,r);c||(r=Qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wn(s,u)&&An(o,"set",r,s):An(o,"add",r,s),this},delete(r){const s=Qe(this),{has:o,get:a}=Vr(s);let l=o.call(s,r);l||(r=Qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&An(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,o=r.clear();return s&&An(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fh(r,n,e)}),t}function qa(n,e){const t=hh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const dh={get:qa(!1,!1)},ph={get:qa(!1,!0)},xh={get:qa(!0,!1)};const cu=new WeakMap,uu=new WeakMap,fu=new WeakMap,mh=new WeakMap;function _h(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gh(n){return n.__v_skip||!Object.isExtensible(n)?0:_h(Gf(n))}function Ya(n){return zi(n)?n:$a(n,!1,lh,dh,cu)}function vh(n){return $a(n,!1,uh,ph,uu)}function hu(n){return $a(n,!0,ch,xh,fu)}function $a(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=gh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Sr(n){return zi(n)?Sr(n.__v_raw):!!(n&&n.__v_isReactive)}function zi(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Ka(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function zh(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&jc(n,"__v_skip",!0),n}const Ct=n=>xt(n)?Ya(n):n,Ho=n=>xt(n)?hu(n):n;function Tt(n){return n?n.__v_isRef===!0:!1}function Ns(n){return Mh(n,!1)}function Mh(n,e){return Tt(n)?n:new Sh(n,e)}class Sh{constructor(e,t){this.dep=new Wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:Ct(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||zi(e);e=i?e:Qe(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function du(n){return Tt(n)?n.value:n}const Eh={get:(n,e,t)=>e==="__v_raw"?n:du(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function pu(n){return Sr(n)?n:new Proxy(n,Eh)}class yh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return eu(this,!0),!0}get value(){const e=this.dep.track();return iu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Th(n,e,t=!1){let i,r;return Ge(n)?i=n:(i=n.get,r=n.set),new yh(i,r,t)}const kr={},Ss=new WeakMap;let fi;function bh(n,e=!1,t=fi){if(t){let i=Ss.get(t);i||Ss.set(t,i=[]),i.push(n)}}function Ah(n,e,t=at){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:sn(E)||r===!1||r===0?Gn(E,1):Gn(E);let u,f,d,p,g=!1,M=!1;if(Tt(n)?(f=()=>n.value,g=sn(n)):Sr(n)?(f=()=>c(n),g=!0):ke(n)?(M=!0,g=n.some(E=>Sr(E)||sn(E)),f=()=>n.map(E=>{if(Tt(E))return E.value;if(Sr(E))return c(E);if(Ge(E))return l?l(E,2):E()})):Ge(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Qn();try{d()}finally{ei()}}const E=fi;fi=u;try{return l?l(n,3,[p]):n(p)}finally{fi=E}}:f=dn,e&&r){const E=f,U=r===!0?1/0:r;f=()=>Gn(E(),U)}const x=eh(),h=()=>{u.stop(),x&&x.active&&Fa(x.effects,u)};if(s&&e){const E=e;e=(...U)=>{E(...U),h()}}let w=M?new Array(n.length).fill(kr):kr;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const U=u.run();if(r||g||(M?U.some((D,C)=>Wn(D,w[C])):Wn(U,w))){d&&d();const D=fi;fi=u;try{const C=[U,w===kr?void 0:M&&w[0]===kr?[]:w,p];l?l(e,3,C):e(...C),w=U}finally{fi=D}}}else u.run()};return a&&a(b),u=new Jc(f),u.scheduler=o?()=>o(b,!1):b,p=E=>bh(E,!1,u),d=u.onStop=()=>{const E=Ss.get(u);if(E){if(l)l(E,4);else for(const U of E)U();Ss.delete(u)}},e?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Gn(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Tt(n))Gn(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)Gn(n[i],e,t);else if(Hf(n)||gr(n))n.forEach(i=>{Gn(i,e,t)});else if(kf(n)){for(const i in n)Gn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(n,e,t,i){try{return i?n(...i):n()}catch(r){Fs(r,e,t)}}function xn(n,e,t,i){if(Ge(n)){const r=Lr(n,e,t,i);return r&&$c(r)&&r.catch(s=>{Fs(s,e,t)}),r}if(ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(xn(n[s],e,t,i));return r}}function Fs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Qn(),Lr(s,null,10,[n,l,c]),ei();return}}wh(n,t,r,i,o)}function wh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Pt=[];let ln=-1;const Xi=[];let Hn=null,Vi=0;const xu=Promise.resolve();let Es=null;function Rh(n){const e=Es||xu;return n?e.then(this?n.bind(this):n):e}function Ch(n){let e=ln+1,t=Pt.length;for(;e<t;){const i=e+t>>>1,r=Pt[i],s=wr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ja(n){if(!(n.flags&1)){const e=wr(n),t=Pt[Pt.length-1];!t||!(n.flags&2)&&e>=wr(t)?Pt.push(n):Pt.splice(Ch(e),0,n),n.flags|=1,mu()}}function mu(){Es||(Es=xu.then(gu))}function Ph(n){ke(n)?Xi.push(...n):Hn&&n.id===-1?Hn.splice(Vi+1,0,n):n.flags&1||(Xi.push(n),n.flags|=1),mu()}function El(n,e,t=ln+1){for(;t<Pt.length;t++){const i=Pt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Pt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _u(n){if(Xi.length){const e=[...new Set(Xi)].sort((t,i)=>wr(t)-wr(i));if(Xi.length=0,Hn){Hn.push(...e);return}for(Hn=e,Vi=0;Vi<Hn.length;Vi++){const t=Hn[Vi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Hn=null,Vi=0}}const wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gu(n){try{for(ln=0;ln<Pt.length;ln++){const e=Pt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Lr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Pt.length;ln++){const e=Pt[ln];e&&(e.flags&=-2)}ln=-1,Pt.length=0,_u(),Es=null,(Pt.length||Xi.length)&&gu()}}let fn=null,vu=null;function ys(n){const e=fn;return fn=n,vu=n&&n.type.__scopeId||null,e}function Dh(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Dl(-1);const s=ys(e);let o;try{o=n(...r)}finally{ys(s),i._d&&Dl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ii(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Qn(),xn(l,t,8,[n.el,a,n,e]),ei())}}const Lh=Symbol("_vte"),Uh=n=>n.__isTeleport;function Za(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Za(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zu(n,e){return Ge(n)?bt({name:n.name},e,{setup:n}):n}function Mu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ts(n,e,t,i,r=!1){if(ke(n)){n.forEach((g,M)=>Ts(g,e&&(ke(e)?e[M]:e),t,i,r));return}if(Er(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ts(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?el(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState,d=Qe(f),p=f===at?()=>!1:g=>et(d,g);if(c!=null&&c!==l&&(vt(c)?(u[c]=null,p(c)&&(f[c]=null)):Tt(c)&&(c.value=null)),Ge(l))Lr(l,a,12,[o,u]);else{const g=vt(l),M=Tt(l);if(g||M){const x=()=>{if(n.f){const h=g?p(l)?f[l]:u[l]:l.value;r?ke(h)&&Fa(h,s):ke(h)?h.includes(s)||h.push(s):g?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};o?(x.id=-1,Gt(x,t)):x()}}}Is().requestIdleCallback;Is().cancelIdleCallback;const Er=n=>!!n.type.__asyncLoader,Su=n=>n.type.__isKeepAlive;function Ih(n,e){Eu(n,"a",e)}function Nh(n,e){Eu(n,"da",e)}function Eu(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Os(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Su(r.parent.vnode)&&Fh(i,e,t,r),r=r.parent}}function Fh(n,e,t,i){const r=Os(e,n,i,!0);Tu(()=>{Fa(i[e],r)},t)}function Os(n,e,t=Dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Qn();const a=Ur(t),l=xn(e,t,n,o);return a(),ei(),l});return i?r.unshift(s):r.push(s),s}}const Ln=n=>(e,t=Dt)=>{(!Pr||n==="sp")&&Os(n,(...i)=>e(...i),t)},Oh=Ln("bm"),yu=Ln("m"),Bh=Ln("bu"),Hh=Ln("u"),Vh=Ln("bum"),Tu=Ln("um"),Gh=Ln("sp"),kh=Ln("rtg"),Wh=Ln("rtc");function Xh(n,e=Dt){Os("ec",n,e)}const qh=Symbol.for("v-ndc"),Vo=n=>n?$u(n)?el(n):Vo(n.parent):null,yr=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vo(n.parent),$root:n=>Vo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Au(n),$forceUpdate:n=>n.f||(n.f=()=>{ja(n.update)}),$nextTick:n=>n.n||(n.n=Rh.bind(n.proxy)),$watch:n=>pd.bind(n)}),Zs=(n,e)=>n!==at&&!n.__isScriptSetup&&et(n,e),Yh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Zs(i,e))return o[e]=1,i[e];if(r!==at&&et(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==at&&et(t,e))return o[e]=4,t[e];Go&&(o[e]=0)}}const u=yr[e];let f,d;if(u)return e==="$attrs"&&yt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&et(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Zs(r,e)?(r[e]=t,!0):i!==at&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&et(n,o)||Zs(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(yr,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yl(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Go=!0;function $h(n){const e=Au(n),t=n.proxy,i=n.ctx;Go=!1,e.beforeCreate&&Tl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:M,deactivated:x,beforeDestroy:h,beforeUnmount:w,destroyed:b,unmounted:E,render:U,renderTracked:D,renderTriggered:C,errorCaptured:F,serverPrefetch:y,expose:S,inheritAttrs:P,components:Q,directives:X,filters:ne}=e;if(c&&Kh(c,i,null),o)for(const J in o){const H=o[J];Ge(H)&&(i[J]=H.bind(t))}if(r){const J=r.call(t,t);xt(J)&&(n.data=Ya(J))}if(Go=!0,s)for(const J in s){const H=s[J],fe=Ge(H)?H.bind(t,t):Ge(H.get)?H.get.bind(t,t):dn,ze=!Ge(H)&&Ge(H.set)?H.set.bind(t):dn,ye=Nd({get:fe,set:ze});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ce=>ye.value=Ce})}if(a)for(const J in a)bu(a[J],i,t,J);if(l){const J=Ge(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{td(H,J[H])})}u&&Tl(u,n,"c");function Z(J,H){ke(H)?H.forEach(fe=>J(fe.bind(t))):H&&J(H.bind(t))}if(Z(Oh,f),Z(yu,d),Z(Bh,p),Z(Hh,g),Z(Ih,M),Z(Nh,x),Z(Xh,F),Z(Wh,D),Z(kh,C),Z(Vh,w),Z(Tu,E),Z(Gh,y),ke(S))if(S.length){const J=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:fe=>t[H]=fe})})}else n.exposed||(n.exposed={});U&&n.render===dn&&(n.render=U),P!=null&&(n.inheritAttrs=P),Q&&(n.components=Q),X&&(n.directives=X),y&&Mu(n)}function Kh(n,e,t=dn){ke(n)&&(n=ko(n));for(const i in n){const r=n[i];let s;xt(r)?"default"in r?s=ds(r.from||i,r.default,!0):s=ds(r.from||i):s=ds(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Tl(n,e,t){xn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bu(n,e,t,i){let r=i.includes(".")?Vu(t,i):()=>t[i];if(vt(n)){const s=e[n];Ge(s)&&Qs(r,s)}else if(Ge(n))Qs(r,n.bind(t));else if(xt(n))if(ke(n))n.forEach(s=>bu(s,e,t,i));else{const s=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(s)&&Qs(r,s,n)}}function Au(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>bs(l,c,o,!0)),bs(l,e,o)),xt(e)&&s.set(e,l),l}function bs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&bs(n,s,t,!0),r&&r.forEach(o=>bs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=jh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jh={data:bl,props:Al,emits:Al,methods:mr,computed:mr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:mr,directives:mr,watch:Jh,provide:bl,inject:Zh};function bl(n,e){return e?n?function(){return bt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Zh(n,e){return mr(ko(n),ko(e))}function ko(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function mr(n,e){return n?bt(Object.create(null),n,e):e}function Al(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:bt(Object.create(null),yl(n),yl(e??{})):e}function Jh(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function wu(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function ed(n,e){return function(i,r=null){Ge(i)||(i=bt({},i)),r!=null&&!xt(r)&&(r=null);const s=wu(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Qh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Fd,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...f)):Ge(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Xn(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,el(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(xn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=qi;qi=c;try{return u()}finally{qi=f}}};return c}}let qi=null;function td(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function ds(n,e,t=!1){const i=Dt||fn;if(i||qi){const r=qi?qi._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Ru={},Cu=()=>Object.create(Ru),Pu=n=>Object.getPrototypeOf(n)===Ru;function nd(n,e,t,i=!1){const r={},s=Cu();n.propsDefaults=Object.create(null),Du(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:vh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function id(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Bs(n.emitsOptions,d))continue;const p=e[d];if(l)if(et(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=$n(d);r[g]=Wo(l,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Du(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=Ei(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Wo(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&An(n.attrs,"set","")}function Du(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(vr(l))continue;const c=e[l];let u;r&&et(r,u=$n(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Bs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Wo(r,l,f,c[f],n,!et(c,f))}}return o}function Wo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ur(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ei(t))&&(i=!0))}return i}const rd=new WeakMap;function Lu(n,e,t=!1){const i=t?rd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=f=>{l=!0;const[d,p]=Lu(f,e,!0);bt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return xt(n)&&i.set(n,Wi),Wi;if(ke(s))for(let u=0;u<s.length;u++){const f=$n(s[u]);wl(f)&&(o[f]=at)}else if(s)for(const u in s){const f=$n(u);if(wl(f)){const d=s[u],p=o[f]=ke(d)||Ge(d)?{type:d}:bt({},d),g=p.type;let M=!1,x=!0;if(ke(g))for(let h=0;h<g.length;++h){const w=g[h],b=Ge(w)&&w.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(x=!1)}else M=Ge(g)&&g.name==="Boolean";p[0]=M,p[1]=x,(M||et(p,"default"))&&a.push(f)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function wl(n){return n[0]!=="$"&&!vr(n)}const Uu=n=>n[0]==="_"||n==="$stable",Ja=n=>ke(n)?n.map(cn):[cn(n)],sd=(n,e,t)=>{if(e._n)return e;const i=Dh((...r)=>Ja(e(...r)),t);return i._c=!1,i},Iu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uu(r))continue;const s=n[r];if(Ge(s))e[r]=sd(r,s,i);else if(s!=null){const o=Ja(s);e[r]=()=>o}}},Nu=(n,e)=>{const t=Ja(e);n.slots.default=()=>t},Fu=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},od=(n,e,t)=>{const i=n.slots=Cu();if(n.vnode.shapeFlag&32){const r=e._;r?(Fu(i,e,t),t&&jc(i,"_",r,!0)):Iu(e,i)}else e&&Nu(n,e)},ad=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Fu(r,e,t):(s=!e.$stable,Iu(e,r)),o=e}else e&&(Nu(n,e),o={default:1});if(s)for(const a in r)!Uu(a)&&o[a]==null&&delete r[a]},Gt=Md;function ld(n){return cd(n)}function cd(n,e){const t=Is();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=dn,insertStaticContent:g}=n,M=(T,R,z,ie=null,q=null,$=null,K=void 0,re=null,Y=!!R.dynamicChildren)=>{if(T===R)return;T&&!cr(T,R)&&(ie=pe(T),Ce(T,q,$,!0),T=null),R.patchFlag===-2&&(Y=!1,R.dynamicChildren=null);const{type:_,ref:m,shapeFlag:A}=R;switch(_){case Hs:x(T,R,z,ie);break;case Rr:h(T,R,z,ie);break;case eo:T==null&&w(R,z,ie,K);break;case bn:Q(T,R,z,ie,q,$,K,re,Y);break;default:A&1?U(T,R,z,ie,q,$,K,re,Y):A&6?X(T,R,z,ie,q,$,K,re,Y):(A&64||A&128)&&_.process(T,R,z,ie,q,$,K,re,Y,Fe)}m!=null&&q&&Ts(m,T&&T.ref,$,R||T,!R)},x=(T,R,z,ie)=>{if(T==null)i(R.el=a(R.children),z,ie);else{const q=R.el=T.el;R.children!==T.children&&c(q,R.children)}},h=(T,R,z,ie)=>{T==null?i(R.el=l(R.children||""),z,ie):R.el=T.el},w=(T,R,z,ie)=>{[T.el,T.anchor]=g(T.children,R,z,ie,T.el,T.anchor)},b=({el:T,anchor:R},z,ie)=>{let q;for(;T&&T!==R;)q=d(T),i(T,z,ie),T=q;i(R,z,ie)},E=({el:T,anchor:R})=>{let z;for(;T&&T!==R;)z=d(T),r(T),T=z;r(R)},U=(T,R,z,ie,q,$,K,re,Y)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),T==null?D(R,z,ie,q,$,K,re,Y):y(T,R,q,$,K,re,Y)},D=(T,R,z,ie,q,$,K,re)=>{let Y,_;const{props:m,shapeFlag:A,transition:O,dirs:G}=T;if(Y=T.el=o(T.type,$,m&&m.is,m),A&8?u(Y,T.children):A&16&&F(T.children,Y,null,ie,q,Js(T,$),K,re),G&&ii(T,null,ie,"created"),C(Y,T,T.scopeId,K,ie),m){for(const ue in m)ue!=="value"&&!vr(ue)&&s(Y,ue,null,m[ue],$,ie);"value"in m&&s(Y,"value",null,m.value,$),(_=m.onVnodeBeforeMount)&&an(_,ie,T)}G&&ii(T,null,ie,"beforeMount");const V=ud(q,O);V&&O.beforeEnter(Y),i(Y,R,z),((_=m&&m.onVnodeMounted)||V||G)&&Gt(()=>{_&&an(_,ie,T),V&&O.enter(Y),G&&ii(T,null,ie,"mounted")},q)},C=(T,R,z,ie,q)=>{if(z&&p(T,z),ie)for(let $=0;$<ie.length;$++)p(T,ie[$]);if(q){let $=q.subTree;if(R===$||ku($.type)&&($.ssContent===R||$.ssFallback===R)){const K=q.vnode;C(T,K,K.scopeId,K.slotScopeIds,q.parent)}}},F=(T,R,z,ie,q,$,K,re,Y=0)=>{for(let _=Y;_<T.length;_++){const m=T[_]=re?Vn(T[_]):cn(T[_]);M(null,m,R,z,ie,q,$,K,re)}},y=(T,R,z,ie,q,$,K)=>{const re=R.el=T.el;let{patchFlag:Y,dynamicChildren:_,dirs:m}=R;Y|=T.patchFlag&16;const A=T.props||at,O=R.props||at;let G;if(z&&ri(z,!1),(G=O.onVnodeBeforeUpdate)&&an(G,z,R,T),m&&ii(R,T,z,"beforeUpdate"),z&&ri(z,!0),(A.innerHTML&&O.innerHTML==null||A.textContent&&O.textContent==null)&&u(re,""),_?S(T.dynamicChildren,_,re,z,ie,Js(R,q),$):K||H(T,R,re,null,z,ie,Js(R,q),$,!1),Y>0){if(Y&16)P(re,A,O,z,q);else if(Y&2&&A.class!==O.class&&s(re,"class",null,O.class,q),Y&4&&s(re,"style",A.style,O.style,q),Y&8){const V=R.dynamicProps;for(let ue=0;ue<V.length;ue++){const oe=V[ue],he=A[oe],Pe=O[oe];(Pe!==he||oe==="value")&&s(re,oe,he,Pe,q,z)}}Y&1&&T.children!==R.children&&u(re,R.children)}else!K&&_==null&&P(re,A,O,z,q);((G=O.onVnodeUpdated)||m)&&Gt(()=>{G&&an(G,z,R,T),m&&ii(R,T,z,"updated")},ie)},S=(T,R,z,ie,q,$,K)=>{for(let re=0;re<R.length;re++){const Y=T[re],_=R[re],m=Y.el&&(Y.type===bn||!cr(Y,_)||Y.shapeFlag&70)?f(Y.el):z;M(Y,_,m,null,ie,q,$,K,!0)}},P=(T,R,z,ie,q)=>{if(R!==z){if(R!==at)for(const $ in R)!vr($)&&!($ in z)&&s(T,$,R[$],null,q,ie);for(const $ in z){if(vr($))continue;const K=z[$],re=R[$];K!==re&&$!=="value"&&s(T,$,re,K,q,ie)}"value"in z&&s(T,"value",R.value,z.value,q)}},Q=(T,R,z,ie,q,$,K,re,Y)=>{const _=R.el=T?T.el:a(""),m=R.anchor=T?T.anchor:a("");let{patchFlag:A,dynamicChildren:O,slotScopeIds:G}=R;G&&(re=re?re.concat(G):G),T==null?(i(_,z,ie),i(m,z,ie),F(R.children||[],z,m,q,$,K,re,Y)):A>0&&A&64&&O&&T.dynamicChildren?(S(T.dynamicChildren,O,z,q,$,K,re),(R.key!=null||q&&R===q.subTree)&&Ou(T,R,!0)):H(T,R,z,m,q,$,K,re,Y)},X=(T,R,z,ie,q,$,K,re,Y)=>{R.slotScopeIds=re,T==null?R.shapeFlag&512?q.ctx.activate(R,z,ie,K,Y):ne(R,z,ie,q,$,K,Y):se(T,R,Y)},ne=(T,R,z,ie,q,$,K)=>{const re=T.component=Cd(T,ie,q);if(Su(T)&&(re.ctx.renderer=Fe),Pd(re,!1,K),re.asyncDep){if(q&&q.registerDep(re,Z,K),!T.el){const Y=re.subTree=Xn(Rr);h(null,Y,R,z)}}else Z(re,T,R,z,q,$,K)},se=(T,R,z)=>{const ie=R.component=T.component;if(vd(T,R,z))if(ie.asyncDep&&!ie.asyncResolved){J(ie,R,z);return}else ie.next=R,ie.update();else R.el=T.el,ie.vnode=R},Z=(T,R,z,ie,q,$,K)=>{const re=()=>{if(T.isMounted){let{next:A,bu:O,u:G,parent:V,vnode:ue}=T;{const me=Bu(T);if(me){A&&(A.el=ue.el,J(T,A,K)),me.asyncDep.then(()=>{T.isUnmounted||re()});return}}let oe=A,he;ri(T,!1),A?(A.el=ue.el,J(T,A,K)):A=ue,O&&Ys(O),(he=A.props&&A.props.onVnodeBeforeUpdate)&&an(he,V,A,ue),ri(T,!0);const Pe=Cl(T),ae=T.subTree;T.subTree=Pe,M(ae,Pe,f(ae.el),pe(ae),T,q,$),A.el=Pe.el,oe===null&&zd(T,Pe.el),G&&Gt(G,q),(he=A.props&&A.props.onVnodeUpdated)&&Gt(()=>an(he,V,A,ue),q)}else{let A;const{el:O,props:G}=R,{bm:V,m:ue,parent:oe,root:he,type:Pe}=T,ae=Er(R);ri(T,!1),V&&Ys(V),!ae&&(A=G&&G.onVnodeBeforeMount)&&an(A,oe,R),ri(T,!0);{he.ce&&he.ce._injectChildStyle(Pe);const me=T.subTree=Cl(T);M(null,me,z,ie,T,q,$),R.el=me.el}if(ue&&Gt(ue,q),!ae&&(A=G&&G.onVnodeMounted)){const me=R;Gt(()=>an(A,oe,me),q)}(R.shapeFlag&256||oe&&Er(oe.vnode)&&oe.vnode.shapeFlag&256)&&T.a&&Gt(T.a,q),T.isMounted=!0,R=z=ie=null}};T.scope.on();const Y=T.effect=new Jc(re);T.scope.off();const _=T.update=Y.run.bind(Y),m=T.job=Y.runIfDirty.bind(Y);m.i=T,m.id=T.uid,Y.scheduler=()=>ja(m),ri(T,!0),_()},J=(T,R,z)=>{R.component=T;const ie=T.vnode.props;T.vnode=R,T.next=null,id(T,R.props,ie,z),ad(T,R.children,z),Qn(),El(T),ei()},H=(T,R,z,ie,q,$,K,re,Y=!1)=>{const _=T&&T.children,m=T?T.shapeFlag:0,A=R.children,{patchFlag:O,shapeFlag:G}=R;if(O>0){if(O&128){ze(_,A,z,ie,q,$,K,re,Y);return}else if(O&256){fe(_,A,z,ie,q,$,K,re,Y);return}}G&8?(m&16&&Ee(_,q,$),A!==_&&u(z,A)):m&16?G&16?ze(_,A,z,ie,q,$,K,re,Y):Ee(_,q,$,!0):(m&8&&u(z,""),G&16&&F(A,z,ie,q,$,K,re,Y))},fe=(T,R,z,ie,q,$,K,re,Y)=>{T=T||Wi,R=R||Wi;const _=T.length,m=R.length,A=Math.min(_,m);let O;for(O=0;O<A;O++){const G=R[O]=Y?Vn(R[O]):cn(R[O]);M(T[O],G,z,null,q,$,K,re,Y)}_>m?Ee(T,q,$,!0,!1,A):F(R,z,ie,q,$,K,re,Y,A)},ze=(T,R,z,ie,q,$,K,re,Y)=>{let _=0;const m=R.length;let A=T.length-1,O=m-1;for(;_<=A&&_<=O;){const G=T[_],V=R[_]=Y?Vn(R[_]):cn(R[_]);if(cr(G,V))M(G,V,z,null,q,$,K,re,Y);else break;_++}for(;_<=A&&_<=O;){const G=T[A],V=R[O]=Y?Vn(R[O]):cn(R[O]);if(cr(G,V))M(G,V,z,null,q,$,K,re,Y);else break;A--,O--}if(_>A){if(_<=O){const G=O+1,V=G<m?R[G].el:ie;for(;_<=O;)M(null,R[_]=Y?Vn(R[_]):cn(R[_]),z,V,q,$,K,re,Y),_++}}else if(_>O)for(;_<=A;)Ce(T[_],q,$,!0),_++;else{const G=_,V=_,ue=new Map;for(_=V;_<=O;_++){const de=R[_]=Y?Vn(R[_]):cn(R[_]);de.key!=null&&ue.set(de.key,_)}let oe,he=0;const Pe=O-V+1;let ae=!1,me=0;const be=new Array(Pe);for(_=0;_<Pe;_++)be[_]=0;for(_=G;_<=A;_++){const de=T[_];if(he>=Pe){Ce(de,q,$,!0);continue}let Ue;if(de.key!=null)Ue=ue.get(de.key);else for(oe=V;oe<=O;oe++)if(be[oe-V]===0&&cr(de,R[oe])){Ue=oe;break}Ue===void 0?Ce(de,q,$,!0):(be[Ue-V]=_+1,Ue>=me?me=Ue:ae=!0,M(de,R[Ue],z,null,q,$,K,re,Y),he++)}const De=ae?fd(be):Wi;for(oe=De.length-1,_=Pe-1;_>=0;_--){const de=V+_,Ue=R[de],Oe=de+1<m?R[de+1].el:ie;be[_]===0?M(null,Ue,z,Oe,q,$,K,re,Y):ae&&(oe<0||_!==De[oe]?ye(Ue,z,Oe,2):oe--)}}},ye=(T,R,z,ie,q=null)=>{const{el:$,type:K,transition:re,children:Y,shapeFlag:_}=T;if(_&6){ye(T.component.subTree,R,z,ie);return}if(_&128){T.suspense.move(R,z,ie);return}if(_&64){K.move(T,R,z,Fe);return}if(K===bn){i($,R,z);for(let A=0;A<Y.length;A++)ye(Y[A],R,z,ie);i(T.anchor,R,z);return}if(K===eo){b(T,R,z);return}if(ie!==2&&_&1&&re)if(ie===0)re.beforeEnter($),i($,R,z),Gt(()=>re.enter($),q);else{const{leave:A,delayLeave:O,afterLeave:G}=re,V=()=>i($,R,z),ue=()=>{A($,()=>{V(),G&&G()})};O?O($,V,ue):ue()}else i($,R,z)},Ce=(T,R,z,ie=!1,q=!1)=>{const{type:$,props:K,ref:re,children:Y,dynamicChildren:_,shapeFlag:m,patchFlag:A,dirs:O,cacheIndex:G}=T;if(A===-2&&(q=!1),re!=null&&Ts(re,null,z,T,!0),G!=null&&(R.renderCache[G]=void 0),m&256){R.ctx.deactivate(T);return}const V=m&1&&O,ue=!Er(T);let oe;if(ue&&(oe=K&&K.onVnodeBeforeUnmount)&&an(oe,R,T),m&6)ce(T.component,z,ie);else{if(m&128){T.suspense.unmount(z,ie);return}V&&ii(T,null,R,"beforeUnmount"),m&64?T.type.remove(T,R,z,Fe,ie):_&&!_.hasOnce&&($!==bn||A>0&&A&64)?Ee(_,R,z,!1,!0):($===bn&&A&384||!q&&m&16)&&Ee(Y,R,z),ie&&je(T)}(ue&&(oe=K&&K.onVnodeUnmounted)||V)&&Gt(()=>{oe&&an(oe,R,T),V&&ii(T,null,R,"unmounted")},z)},je=T=>{const{type:R,el:z,anchor:ie,transition:q}=T;if(R===bn){ee(z,ie);return}if(R===eo){E(T);return}const $=()=>{r(z),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:K,delayLeave:re}=q,Y=()=>K(z,$);re?re(T.el,$,Y):Y()}else $()},ee=(T,R)=>{let z;for(;T!==R;)z=d(T),r(T),T=z;r(R)},ce=(T,R,z)=>{const{bum:ie,scope:q,job:$,subTree:K,um:re,m:Y,a:_}=T;Rl(Y),Rl(_),ie&&Ys(ie),q.stop(),$&&($.flags|=8,Ce(K,T,R,z)),re&&Gt(re,R),Gt(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ee=(T,R,z,ie=!1,q=!1,$=0)=>{for(let K=$;K<T.length;K++)Ce(T[K],R,z,ie,q)},pe=T=>{if(T.shapeFlag&6)return pe(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=d(T.anchor||T.el),z=R&&R[Lh];return z?d(z):R};let we=!1;const Le=(T,R,z)=>{T==null?R._vnode&&Ce(R._vnode,null,null,!0):M(R._vnode||null,T,R,null,null,null,z),R._vnode=T,we||(we=!0,El(),_u(),we=!1)},Fe={p:M,um:Ce,m:ye,r:je,mt:ne,mc:F,pc:H,pbc:S,n:pe,o:n};return{render:Le,hydrate:void 0,createApp:ed(Le)}}function Js({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ri({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ud(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ou(n,e,t=!1){const i=n.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Ou(o,a)),a.type===Hs&&(a.el=o.el)}}function fd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Bu(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bu(e)}function Rl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const hd=Symbol.for("v-scx"),dd=()=>ds(hd);function Qs(n,e,t){return Hu(n,e,t)}function Hu(n,e,t=at){const{immediate:i,deep:r,flush:s,once:o}=t,a=bt({},t),l=e&&i||!e&&s!=="post";let c;if(Pr){if(s==="sync"){const p=dd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=dn,p.resume=dn,p.pause=dn,p}}const u=Dt;a.call=(p,g,M)=>xn(p,u,g,M);let f=!1;s==="post"?a.scheduler=p=>{Gt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():ja(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Ah(n,e,a);return Pr&&(c?c.push(d):l&&d()),d}function pd(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Vu(i,n):()=>i[n]:n.bind(i,i);let s;Ge(e)?s=e:(s=e.handler,t=e);const o=Ur(this),a=Hu(r,s.bind(i),t);return o(),a}function Vu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const xd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$n(e)}Modifiers`]||n[`${Ei(e)}Modifiers`];function md(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&xd(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>vt(u)?u.trim():u)),o.number&&(r=t.map(qf)));let a,l=i[a=qs(e)]||i[a=qs($n(e))];!l&&s&&(l=i[a=qs(Ei(e))]),l&&xn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xn(c,n,6,r)}}function Gu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=Gu(c,e,!0);u&&(a=!0,bt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(xt(n)&&i.set(n,null),null):(ke(s)?s.forEach(l=>o[l]=null):bt(o,s),xt(n)&&i.set(n,o),o)}function Bs(n,e){return!n||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Ei(e))||et(n,e))}function Cl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:M}=n,x=ys(n);let h,w;try{if(t.shapeFlag&4){const E=r||i,U=E;h=cn(c.call(U,E,u,f,p,d,g)),w=a}else{const E=e;h=cn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),w=e.props?a:_d(a)}}catch(E){Tr.length=0,Fs(E,n,1),h=Xn(Rr)}let b=h;if(w&&M!==!1){const E=Object.keys(w),{shapeFlag:U}=b;E.length&&U&7&&(s&&E.some(Na)&&(w=gd(w,s)),b=ji(b,w,!1,!0))}return t.dirs&&(b=ji(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Za(b,t.transition),h=b,ys(x),h}const _d=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ds(t))&&((e||(e={}))[t]=n[t]);return e},gd=(n,e)=>{const t={};for(const i in n)(!Na(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Bs(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pl(i,o,c):!0:!!o;return!1}function Pl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Bs(t,s))return!0}return!1}function zd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ku=n=>n.__isSuspense;function Md(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Ph(n)}const bn=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),Tr=[];let Xt=null;function Wu(n=!1){Tr.push(Xt=n?null:[])}function Sd(){Tr.pop(),Xt=Tr[Tr.length-1]||null}let Cr=1;function Dl(n,e=!1){Cr+=n,n<0&&Xt&&e&&(Xt.hasOnce=!0)}function Ed(n){return n.dynamicChildren=Cr>0?Xt||Wi:null,Sd(),Cr>0&&Xt&&Xt.push(n),n}function Xu(n,e,t,i,r,s){return Ed(As(n,e,t,i,r,s,!0))}function qu(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const Yu=({key:n})=>n??null,ps=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Tt(n)||Ge(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function As(n,e=null,t=null,i=0,r=null,s=n===bn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yu(e),ref:e&&ps(e),scopeId:vu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(Qa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Cr>0&&!o&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const Xn=yd;function yd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===qh)&&(n=Rr),qu(n)){const a=ji(n,e,!0);return t&&Qa(a,t),Cr>0&&!s&&Xt&&(a.shapeFlag&6?Xt[Xt.indexOf(n)]=a:Xt.push(a)),a.patchFlag=-2,a}if(Id(n)&&(n=n.__vccOpts),e){e=Td(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=Ha(a)),xt(l)&&(Ka(l)&&!ke(l)&&(l=bt({},l)),e.style=Ba(l))}const o=vt(n)?1:ku(n)?128:Uh(n)?64:xt(n)?4:Ge(n)?2:0;return As(n,e,t,i,r,o,s,!0)}function Td(n){return n?Ka(n)||Pu(n)?bt({},n):n:null}function ji(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Ad(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yu(c),ref:e&&e.ref?t&&s?ke(s)?s.concat(ps(e)):[s,ps(e)]:ps(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ji(n.ssContent),ssFallback:n.ssFallback&&ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Za(u,l.clone(u)),u}function bd(n=" ",e=0){return Xn(Hs,null,n,e)}function cn(n){return n==null||typeof n=="boolean"?Xn(Rr):ke(n)?Xn(bn,null,n.slice()):qu(n)?Vn(n):Xn(Hs,null,String(n))}function Vn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ji(n)}function Qa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Pu(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[bd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ad(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ha([e.class,i.class]));else if(r==="style")e.style=Ba([e.style,i.style]);else if(Ds(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function an(n,e,t,i=null){xn(n,e,7,[t,i])}const wd=wu();let Rd=0;function Cd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||wd,s={uid:Rd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lu(i,r),emitsOptions:Gu(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=md.bind(null,s),n.ce&&n.ce(s),s}let Dt=null,ws,Xo;{const n=Is(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ws=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),Xo=e("__VUE_SSR_SETTERS__",t=>Pr=t)}const Ur=n=>{const e=Dt;return ws(n),n.scope.on(),()=>{n.scope.off(),ws(e)}},Ll=()=>{Dt&&Dt.scope.off(),ws(null)};function $u(n){return n.vnode.shapeFlag&4}let Pr=!1;function Pd(n,e=!1,t=!1){e&&Xo(e);const{props:i,children:r}=n.vnode,s=$u(n);nd(n,i,s,e),od(n,r,t);const o=s?Dd(n,e):void 0;return e&&Xo(!1),o}function Dd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Yh);const{setup:i}=t;if(i){Qn();const r=n.setupContext=i.length>1?Ud(n):null,s=Ur(n),o=Lr(i,n,0,[n.props,r]),a=$c(o);if(ei(),s(),(a||n.sp)&&!Er(n)&&Mu(n),a){if(o.then(Ll,Ll),e)return o.then(l=>{Ul(n,l)}).catch(l=>{Fs(l,n,0)});n.asyncDep=o}else Ul(n,o)}else Ku(n)}function Ul(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=pu(e)),Ku(n)}function Ku(n,e,t){const i=n.type;n.render||(n.render=i.render||dn);{const r=Ur(n);Qn();try{$h(n)}finally{ei(),r()}}}const Ld={get(n,e){return yt(n,"get",""),n[e]}};function Ud(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ld),slots:n.slots,emit:n.emit,expose:e}}function el(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(pu(zh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yr)return yr[t](n)},has(e,t){return t in e||t in yr}})):n.proxy}function Id(n){return Ge(n)&&"__vccOpts"in n}const Nd=(n,e)=>Th(n,e,Pr),Fd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qo;const Il=typeof window<"u"&&window.trustedTypes;if(Il)try{qo=Il.createPolicy("vue",{createHTML:n=>n})}catch{}const ju=qo?n=>qo.createHTML(n):n=>n,Od="http://www.w3.org/2000/svg",Bd="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,Nl=Tn&&Tn.createElement("template"),Hd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Tn.createElementNS(Od,n):e==="mathml"?Tn.createElementNS(Bd,n):t?Tn.createElement(n,{is:t}):Tn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tn.createTextNode(n),createComment:n=>Tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Nl.innerHTML=ju(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vd=Symbol("_vtc");function Gd(n,e,t){const i=n[Vd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fl=Symbol("_vod"),kd=Symbol("_vsh"),Wd=Symbol(""),Xd=/(^|;)\s*display\s*:/;function qd(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&xs(i,a,"")}else for(const o in e)t[o]==null&&xs(i,o,"");for(const o in t)o==="display"&&(s=!0),xs(i,o,t[o])}else if(r){if(e!==t){const o=i[Wd];o&&(t+=";"+o),i.cssText=t,s=Xd.test(t)}}else e&&n.removeAttribute("style");Fl in n&&(n[Fl]=s?i.display:"",n[kd]&&(i.display="none"))}const Ol=/\s*!important$/;function xs(n,e,t){if(ke(t))t.forEach(i=>xs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Yd(n,e);Ol.test(t)?n.setProperty(Ei(i),t.replace(Ol,""),"important"):n[i]=t}}const Bl=["Webkit","Moz","ms"],to={};function Yd(n,e){const t=to[e];if(t)return t;let i=$n(e);if(i!=="filter"&&i in n)return to[e]=i;i=Kc(i);for(let r=0;r<Bl.length;r++){const s=Bl[r]+i;if(s in n)return to[e]=s}return e}const Hl="http://www.w3.org/1999/xlink";function Vl(n,e,t,i,r,s=Jf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hl,e.slice(6,e.length)):n.setAttributeNS(Hl,e,t):t==null||s&&!Zc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":rr(t)?String(t):t)}function Gl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ju(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Zc(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function $d(n,e,t,i){n.addEventListener(e,t,i)}function Kd(n,e,t,i){n.removeEventListener(e,t,i)}const kl=Symbol("_vei");function jd(n,e,t,i,r=null){const s=n[kl]||(n[kl]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Zd(e);if(i){const c=s[e]=ep(i,r);$d(n,a,c,l)}else o&&(Kd(n,a,o,l),s[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Zd(n){let e;if(Wl.test(n)){e={};let i;for(;i=n.match(Wl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ei(n.slice(2)),e]}let no=0;const Jd=Promise.resolve(),Qd=()=>no||(Jd.then(()=>no=0),no=Date.now());function ep(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;xn(tp(i,t.value),e,5,[i])};return t.value=n,t.attached=Qd(),t}function tp(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,np=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Gd(n,i,o):e==="style"?qd(n,t,i):Ds(e)?Na(e)||jd(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ip(n,e,i,o))?(Gl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vl(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?Gl(n,$n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vl(n,e,i,o))};function ip(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xl(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xl(e)&&vt(t)?!1:e in n}const rp=bt({patchProp:np},Hd);let ql;function sp(){return ql||(ql=ld(rp))}const op=(...n)=>{const e=sp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=lp(i);if(!r)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,ap(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ap(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lp(n){return vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="171",cp=0,Yl=1,up=2,Zu=1,fp=2,yn=3,Kn=0,Nt=1,wn=2,qn=0,Yi=1,$l=2,Kl=3,jl=4,hp=5,pi=100,dp=101,pp=102,xp=103,mp=104,_p=200,gp=201,vp=202,zp=203,Yo=204,$o=205,Mp=206,Sp=207,Ep=208,yp=209,Tp=210,bp=211,Ap=212,wp=213,Rp=214,Ko=0,jo=1,Zo=2,Zi=3,Jo=4,Qo=5,ea=6,ta=7,nl=0,Cp=1,Pp=2,Yn=0,Dp=1,Lp=2,Up=3,Ip=4,Np=5,Fp=6,Op=7,Ju=300,Ji=301,Qi=302,na=303,ia=304,Vs=306,ra=1e3,mi=1001,sa=1002,on=1003,Bp=1004,Wr=1005,hn=1006,io=1007,_i=1008,Dn=1009,Qu=1010,ef=1011,Dr=1012,il=1013,Mi=1014,Rn=1015,Ir=1016,rl=1017,sl=1018,er=1020,tf=35902,nf=1021,rf=1022,nn=1023,sf=1024,of=1025,$i=1026,tr=1027,af=1028,ol=1029,lf=1030,al=1031,ll=1033,ms=33776,_s=33777,gs=33778,vs=33779,oa=35840,aa=35841,la=35842,ca=35843,ua=36196,fa=37492,ha=37496,da=37808,pa=37809,xa=37810,ma=37811,_a=37812,ga=37813,va=37814,za=37815,Ma=37816,Sa=37817,Ea=37818,ya=37819,Ta=37820,ba=37821,zs=36492,Aa=36494,wa=36495,cf=36283,Ra=36284,Ca=36285,Pa=36286,Hp=3200,Vp=3201,uf=0,Gp=1,kn="",Kt="srgb",nr="srgb-linear",Rs="linear",it="srgb",Ai=7680,Zl=519,kp=512,Wp=513,Xp=514,ff=515,qp=516,Yp=517,$p=518,Kp=519,Jl=35044,Ql="300 es",Cn=2e3,Cs=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,Da=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function jp(n,e){return(n%e+e)%e}function so(n,e,t){return(1-t)*n+t*e}function ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],M=r[0],x=r[3],h=r[6],w=r[1],b=r[4],E=r[7],U=r[2],D=r[5],C=r[8];return s[0]=o*M+a*w+l*U,s[3]=o*x+a*b+l*D,s[6]=o*h+a*E+l*C,s[1]=c*M+u*w+f*U,s[4]=c*x+u*b+f*D,s[7]=c*h+u*E+f*C,s[2]=d*M+p*w+g*U,s[5]=d*x+p*b+g*D,s[8]=d*h+p*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=d*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new He;function hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){const n=Ps("canvas");return n.style.display="block",n}const ec={};function Gi(n){n in ec||(ec[n]=!0,console.warn(n))}function Jp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Qp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ex(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tx(){const n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kn?Rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:e,whitePoint:i,transfer:Rs,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Ye=tx();function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Ps("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ix=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ao(r[o].image)):s.push(ao(r[o]))}else s=ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class Ft extends sr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=mi,r=mi,s=hn,o=_i,a=nn,l=Dn,c=Ft.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Nr(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ju;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],M=l[2],x=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,U=(h+1)/2,D=(u+d)/4,C=(f+M)/4,F=(g+x)/4;return b>E&&b>U?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=D/i,s=C/i):E>U?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=F/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=F/s),this.set(i,r,s,t),this}let w=Math.sqrt((x-g)*(x-g)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(x-g)/w,this.y=(f-M)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends sx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ox extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=M;return}if(f!==M||l!==d||c!==p||u!==g){let x=1-a;const h=l*d+c*p+u*g+f*M,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const U=Math.sqrt(b),D=Math.atan2(U,h*w);x=Math.sin(x*D)/U,a=Math.sin(a*D)/U}const E=a*w;if(l=l*x+d*E,c=c*x+p*E,u=u*x+g*E,f=f*x+M*E,x===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*d,e[t+1]=l*g+u*d+c*f-a*p,e[t+2]=c*g+u*p+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new B,ic=new Fr;class jn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jt):Jt.fromBufferAttribute(s,o),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),qr.subVectors(this.max,fr),Ri.subVectors(e.a,fr),Ci.subVectors(e.b,fr),Pi.subVectors(e.c,fr),Un.subVectors(Ci,Ri),In.subVectors(Pi,Ci),si.subVectors(Ri,Pi);let t=[0,-Un.z,Un.y,0,-In.z,In.y,0,-si.z,si.y,Un.z,0,-Un.x,In.z,0,-In.x,si.z,0,-si.x,-Un.y,Un.x,0,-In.y,In.x,0,-si.y,si.x,0];return!co(t,Ri,Ci,Pi,qr)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Ri,Ci,Pi,qr))?!1:(Yr.crossVectors(Un,In),t=[Yr.x,Yr.y,Yr.z],co(t,Ri,Ci,Pi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new B,new B,new B,new B,new B,new B,new B,new B],Jt=new B,Xr=new jn,Ri=new B,Ci=new B,Pi=new B,Un=new B,In=new B,si=new B,fr=new B,qr=new B,Yr=new B,oi=new B;function co(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){oi.fromArray(n,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ax=new jn,hr=new B,uo=new B;class cl{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ax.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(uo)),this.expandByPoint(hr.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new B,fo=new B,$r=new B,Nn=new B,ho=new B,Kr=new B,po=new B;class lx{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fo.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=Nn.dot(this.direction),l=-Nn.dot($r),c=Nn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const M=1/u;f*=M,d*=M,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fo).addScaledVector($r,d),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),Kr.subVectors(i,e),po.crossVectors(ho,Kr);let o=this.direction.dot(po),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);const l=a*this.direction.dot(Kr.crossVectors(Nn,Kr));if(l<0)return null;const c=a*this.direction.dot(ho.cross(Nn));if(c<0||l+c>o)return null;const u=-a*Nn.dot(po);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,g,M,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,M,x)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,g,M,x){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=M,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,M=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,M=c*f;t[0]=d+M*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,M=c*f;t[0]=d-M*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,M=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=d-M*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+M,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fn.crossVectors(i,Ht),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fn.crossVectors(i,Ht)),Fn.normalize(),jr.crossVectors(Ht,Fn),r[0]=Fn.x,r[4]=jr.x,r[8]=Ht.x,r[1]=Fn.y,r[5]=jr.y,r[9]=Ht.y,r[2]=Fn.z,r[6]=jr.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],M=i[6],x=i[10],h=i[14],w=i[3],b=i[7],E=i[11],U=i[15],D=r[0],C=r[4],F=r[8],y=r[12],S=r[1],P=r[5],Q=r[9],X=r[13],ne=r[2],se=r[6],Z=r[10],J=r[14],H=r[3],fe=r[7],ze=r[11],ye=r[15];return s[0]=o*D+a*S+l*ne+c*H,s[4]=o*C+a*P+l*se+c*fe,s[8]=o*F+a*Q+l*Z+c*ze,s[12]=o*y+a*X+l*J+c*ye,s[1]=u*D+f*S+d*ne+p*H,s[5]=u*C+f*P+d*se+p*fe,s[9]=u*F+f*Q+d*Z+p*ze,s[13]=u*y+f*X+d*J+p*ye,s[2]=g*D+M*S+x*ne+h*H,s[6]=g*C+M*P+x*se+h*fe,s[10]=g*F+M*Q+x*Z+h*ze,s[14]=g*y+M*X+x*J+h*ye,s[3]=w*D+b*S+E*ne+U*H,s[7]=w*C+b*P+E*se+U*fe,s[11]=w*F+b*Q+E*Z+U*ze,s[15]=w*y+b*X+E*J+U*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],M=e[7],x=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+M*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+x*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],M=e[13],x=e[14],h=e[15],w=f*x*c-M*d*c+M*l*p-a*x*p-f*l*h+a*d*h,b=g*d*c-u*x*c-g*l*p+o*x*p+u*l*h-o*d*h,E=u*M*c-g*f*c+g*a*p-o*M*p-u*a*h+o*f*h,U=g*f*l-u*M*l-g*a*d+o*M*d+u*a*x-o*f*x,D=t*w+i*b+r*E+s*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(M*d*s-f*x*s-M*r*p+i*x*p+f*r*h-i*d*h)*C,e[2]=(a*x*s-M*l*s+M*r*c-i*x*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=b*C,e[5]=(u*x*s-g*d*s+g*r*p-t*x*p-u*r*h+t*d*h)*C,e[6]=(g*l*s-o*x*s-g*r*c+t*x*c+o*r*h-t*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*C,e[8]=E*C,e[9]=(g*f*s-u*M*s-g*i*p+t*M*p+u*i*h-t*f*h)*C,e[10]=(o*M*s-g*a*s+g*i*c-t*M*c-o*i*h+t*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=U*C,e[13]=(u*M*r-g*f*r+g*i*d-t*M*d-u*i*x+t*f*x)*C,e[14]=(g*a*r-o*M*r-g*i*l+t*M*l+o*i*x-t*a*x)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,M=o*u,x=o*f,h=a*f,w=l*c,b=l*u,E=l*f,U=i.x,D=i.y,C=i.z;return r[0]=(1-(M+h))*U,r[1]=(p+E)*U,r[2]=(g-b)*U,r[3]=0,r[4]=(p-E)*D,r[5]=(1-(d+h))*D,r[6]=(x+w)*D,r[7]=0,r[8]=(g+b)*C,r[9]=(x-w)*C,r[10]=(1-(d+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,u=1/o,f=1/a;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Cn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Cn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Cs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Cn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,M;if(a===Cn)g=(o+s)*f,M=-2*f;else if(a===Cs)g=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new B,Qt=new ut,cx=new B(0,0,0),ux=new B(1,1,1),Fn=new B,jr=new B,Ht=new B,rc=new ut,sc=new Fr;class mn{constructor(e=0,t=0,i=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const oc=new B,Li=new Fr,Mn=new ut,Zr=new B,dr=new B,hx=new B,dx=new Fr,ac=new B(1,0,0),lc=new B(0,1,0),cc=new B(0,0,1),uc={type:"added"},px={type:"removed"},Ui={type:"childadded",child:null},xo={type:"childremoved",child:null};class Ot extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,t=new mn,i=new Fr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new He}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(dr,Zr,this.up):Mn.lookAt(Zr,dr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(Mn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(px),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new B,Sn=new B,mo=new B,En=new B,Ii=new B,Ni=new B,fc=new B,_o=new B,go=new B,vo=new B,zo=new rt,Mo=new rt,So=new rt;class tn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){en.subVectors(r,t),Sn.subVectors(i,t),mo.subVectors(e,t);const o=en.dot(en),a=en.dot(Sn),l=en.dot(mo),c=Sn.dot(Sn),u=Sn.dot(mo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return zo.setScalar(0),Mo.setScalar(0),So.setScalar(0),zo.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,i),So.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zo,s.x),o.addScaledVector(Mo,s.y),o.addScaledVector(So,s.z),o}static isFrontFacing(e,t,i,r){return en.subVectors(i,t),Sn.subVectors(e,t),en.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,i),Ni.subVectors(s,i),_o.subVectors(e,i);const l=Ii.dot(_o),c=Ni.dot(_o);if(l<=0&&c<=0)return t.copy(i);go.subVectors(e,r);const u=Ii.dot(go),f=Ni.dot(go);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ii,o);vo.subVectors(e,s);const p=Ii.dot(vo),g=Ni.dot(vo);if(g>=0&&p<=g)return t.copy(s);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ni,a);const x=u*g-p*f;if(x<=0&&f-u>=0&&p-g>=0)return fc.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(fc,a);const h=1/(x+M+d);return o=M*h,a=d*h,t.copy(i).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=jp(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Eo(o,s,e+1/3),this.g=Eo(o,s,e),this.b=Eo(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ye.fromWorkingColorSpace(Et.copy(this),e),Math.round(We(Et.r*255,0,255))*65536+Math.round(We(Et.g*255,0,255))*256+Math.round(We(Et.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Kt){Ye.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,r=Et.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Jr);const i=so(On.h,Jr.h,t),r=so(On.s,Jr.s,t),s=so(On.l,Jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new $e;$e.NAMES=mf;let xx=0;class Or extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Yi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yo&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _f extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new B,Qr=new Ke;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),e}}class gf extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vf extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vi extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let mx=0;const $t=new ut,yo=new Ot,Fi=new B,Vt=new jn,pr=new jn,gt=new B;class yi extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?vf:gf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Vt.min,pr.min),Vt.expandByPoint(gt),gt.addVectors(Vt.max,pr.max),Vt.expandByPoint(gt)):(Vt.expandByPoint(pr.min),Vt.expandByPoint(pr.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),gt.add(Fi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new B,l[F]=new B;const c=new B,u=new B,f=new B,d=new Ke,p=new Ke,g=new Ke,M=new B,x=new B;function h(F,y,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),x.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[F].add(M),a[y].add(M),a[S].add(M),l[F].add(x),l[y].add(x),l[S].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,y=w.length;F<y;++F){const S=w[F],P=S.start,Q=S.count;for(let X=P,ne=P+Q;X<ne;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new B,E=new B,U=new B,D=new B;function C(F){U.fromBufferAttribute(r,F),D.copy(U);const y=a[F];b.copy(y),b.sub(U.multiplyScalar(U.dot(y))).normalize(),E.crossVectors(D,y);const P=E.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,P)}for(let F=0,y=w.length;F<y;++F){const S=w[F],P=S.start,Q=S.count;for(let X=P,ne=P+Q;X<ne;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),M=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,x),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ut,ai=new lx,es=new cl,dc=new B,ts=new B,ns=new B,is=new B,To=new B,rs=new B,pc=new B,ss=new B;class It extends Ot{constructor(e=new yi,t=new _f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(To.fromBufferAttribute(f,e),o?rs.addScaledVector(To,u):rs.addScaledVector(To.sub(t),u))}t.add(rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(es.containsPoint(ai.origin)===!1&&(ai.intersectSphere(es,dc)===null||ai.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(hc.copy(s).invert(),ai.copy(e.ray).applyMatrix4(hc),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],h=o[x.materialIndex],w=Math.max(x.start,p.start),b=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let E=w,U=b;E<U;E+=3){const D=a.getX(E),C=a.getX(E+1),F=a.getX(E+2);r=os(this,h,e,i,c,u,f,D,C,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let x=g,h=M;x<h;x+=3){const w=a.getX(x),b=a.getX(x+1),E=a.getX(x+2);r=os(this,o,e,i,c,u,f,w,b,E),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],h=o[x.materialIndex],w=Math.max(x.start,p.start),b=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let E=w,U=b;E<U;E+=3){const D=E,C=E+1,F=E+2;r=os(this,h,e,i,c,u,f,D,C,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let x=g,h=M;x<h;x+=3){const w=x,b=x+1,E=x+2;r=os(this,o,e,i,c,u,f,w,b,E),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function _x(n,e,t,i,r,s,o,a){let l;if(e.side===Nt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kn,a),l===null)return null;ss.copy(a),ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:n}}function os(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ts),n.getVertexPosition(l,ns),n.getVertexPosition(c,is);const u=_x(n,e,t,i,ts,ns,is,pc);if(u){const f=new B;tn.getBarycoord(pc,ts,ns,is,f),r&&(u.uv=tn.getInterpolatedAttribute(r,a,l,c,f,new Ke)),s&&(u.uv1=tn.getInterpolatedAttribute(s,a,l,c,f,new Ke)),o&&(u.normal=tn.getInterpolatedAttribute(o,a,l,c,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};tn.getNormal(ts,ns,is,d.normal),u.face=d,u.barycoord=f}return u}class Zn extends yi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(f,2));function g(M,x,h,w,b,E,U,D,C,F,y){const S=E/C,P=U/F,Q=E/2,X=U/2,ne=D/2,se=C+1,Z=F+1;let J=0,H=0;const fe=new B;for(let ze=0;ze<Z;ze++){const ye=ze*P-X;for(let Ce=0;Ce<se;Ce++){const je=Ce*S-Q;fe[M]=je*w,fe[x]=ye*b,fe[h]=ne,c.push(fe.x,fe.y,fe.z),fe[M]=0,fe[x]=0,fe[h]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ce/C),f.push(1-ze/F),J+=1}}for(let ze=0;ze<F;ze++)for(let ye=0;ye<C;ye++){const Ce=d+ye+se*ze,je=d+ye+se*(ze+1),ee=d+(ye+1)+se*(ze+1),ce=d+(ye+1)+se*ze;l.push(Ce,je,ce),l.push(je,ee,ce),H+=6}a.addGroup(p,H,y),p+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function gx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const vx={clone:ir,merge:Rt};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new B,xc=new Ke,mc=new Ke;class Wt extends Mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,xc,mc),t.subVectors(mc,xc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Sx extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sf extends Ft{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zn(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:qn});s.uniforms.tEquirect.value=t;const o=new It(r,s),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=hn),new Sx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class _c extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bo=new B,yx=new B,Tx=new He;class hi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bo.subVectors(i,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tx.getNormalMatrix(e),r=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new cl,as=new B;class ul{constructor(e=new hi,t=new hi,i=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],M=r[10],x=r[11],h=r[12],w=r[13],b=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,x-p,E-h).normalize(),i[1].setComponents(l+s,d+c,x+p,E+h).normalize(),i[2].setComponents(l+o,d+u,x+g,E+w).normalize(),i[3].setComponents(l-o,d-u,x-g,E-w).normalize(),i[4].setComponents(l-a,d-f,x-M,E-b).normalize(),t===Cn)i[5].setComponents(l+a,d+f,x+M,E+b).normalize();else if(t===Cs)i[5].setComponents(a,f,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ls extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ef extends Ft{constructor(e,t,i,r,s,o,a,l,c,u=$i){if(u!==$i&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=Mi),i===void 0&&u===tr&&(i=er),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gs extends yi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],g=[],M=[],x=[];for(let h=0;h<u;h++){const w=h*d-o;for(let b=0;b<c;b++){const E=b*f-s;g.push(E,-w,0),M.push(0,0,1),x.push(b/a),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const b=w+c*h,E=w+c*(h+1),U=w+1+c*(h+1),D=w+1+c*h;p.push(b,E,D),p.push(E,U,D)}this.setIndex(p),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(M,3)),this.setAttribute("uv",new vi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}class La extends Or{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bx extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ax extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wx extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ao=new ut,gc=new B,vc=new B;class Rx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zc=new ut,xr=new B,wo=new B;class Cx extends Rx{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(xr),wo.copy(i.position),wo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wo),i.updateMatrixWorld(),r.makeTranslation(-xr.x,-xr.y,-xr.z),zc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class Px extends wx{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dx extends Mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lx extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mc(){return performance.now()}function Sc(n,e,t,i){const r=Ix(i);switch(t){case nf:return n*e;case sf:return n*e;case of:return n*e*2;case af:return n*e/r.components*r.byteLength;case ol:return n*e/r.components*r.byteLength;case lf:return n*e*2/r.components*r.byteLength;case al:return n*e*2/r.components*r.byteLength;case rf:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case ll:return n*e*4/r.components*r.byteLength;case ms:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:case ca:return Math.max(n,16)*Math.max(e,8)/4;case oa:case la:return Math.max(n,8)*Math.max(e,8)/2;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case za:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zs:case Aa:case wa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cf:case Ra:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(n){switch(n){case Dn:case Qu:return{byteLength:1,components:1};case Dr:case ef:case Ir:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case Mi:case il:case Rn:return{byteLength:4,components:1};case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Nx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],M=f[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const M=f[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Nm=`
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,Ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M_=`float getShadowMask() {
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
}`,S_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,b_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
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
}`,k_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,K_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#define LAMBERT
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
}`,Q_=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:Bx,alphamap_pars_fragment:Hx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:kx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:$x,bsdfs:Kx,iridescence_fragment:jx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:rm,color_vertex:sm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:um,emissivemap_fragment:fm,emissivemap_pars_fragment:hm,colorspace_fragment:dm,colorspace_pars_fragment:pm,envmap_fragment:xm,envmap_common_pars_fragment:mm,envmap_pars_fragment:_m,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Rm,envmap_vertex:vm,fog_vertex:zm,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:Em,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Tm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Am,lights_pars_begin:wm,lights_toon_fragment:Cm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Um,lights_physical_pars_fragment:Im,lights_fragment_begin:Nm,lights_fragment_maps:Fm,lights_fragment_end:Om,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Gm,map_fragment:km,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:Ym,metalnessmap_pars_fragment:$m,morphinstance_vertex:Km,morphcolor_vertex:jm,morphnormal_vertex:Zm,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:r_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:h_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:x_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:g_,shadowmap_pars_vertex:v_,shadowmap_vertex:z_,shadowmask_pars_fragment:M_,skinbase_vertex:S_,skinning_pars_vertex:E_,skinning_vertex:y_,skinnormal_vertex:T_,specularmap_fragment:b_,specularmap_pars_fragment:A_,tonemapping_fragment:w_,tonemapping_pars_fragment:R_,transmission_fragment:C_,transmission_pars_fragment:P_,uv_pars_fragment:D_,uv_pars_vertex:L_,uv_vertex:U_,worldpos_vertex:I_,background_vert:N_,background_frag:F_,backgroundCube_vert:O_,backgroundCube_frag:B_,cube_vert:H_,cube_frag:V_,depth_vert:G_,depth_frag:k_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:Y_,linedashed_vert:$_,linedashed_frag:K_,meshbasic_vert:j_,meshbasic_frag:Z_,meshlambert_vert:J_,meshlambert_frag:Q_,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:rg,meshphong_frag:sg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:fg,shadow_vert:hg,shadow_frag:dg,sprite_vert:pg,sprite_frag:xg},xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},un={basic:{uniforms:Rt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([xe.lights,xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};un.physical={uniforms:Rt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const cs={r:0,b:0,g:0},ci=new mn,mg=new ut;function _g(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function M(b){let E=!1;const U=g(b);U===null?h(a,l):U&&U.isColor&&(h(U,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,E){const U=g(E);U&&(U.isCubeTexture||U.mapping===Vs)?(u===void 0&&(u=new It(new Zn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ir(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ci.copy(E.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ci)),u.material.toneMapped=Ye.getTransfer(U.colorSpace)!==it,(f!==U||d!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,d=U.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new It(new Gs(2,2),new Jn({name:"BackgroundMaterial",uniforms:ir(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(U.colorSpace)!==it,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||d!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,d=U.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,E){b.getRGB(cs,zf(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:M,addToRenderList:x,dispose:w}}function gg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,Q,X,ne){let se=!1;const Z=f(X,Q,P);s!==Z&&(s=Z,c(s.object)),se=p(S,X,Q,ne),se&&g(S,X,Q,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(S,P,Q,X),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,P,Q){const X=Q.wireframe===!0;let ne=i[S.id];ne===void 0&&(ne={},i[S.id]=ne);let se=ne[P.id];se===void 0&&(se={},ne[P.id]=se);let Z=se[X];return Z===void 0&&(Z=d(l()),se[X]=Z),Z}function d(S){const P=[],Q=[],X=[];for(let ne=0;ne<t;ne++)P[ne]=0,Q[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:X,object:S,attributes:{},index:null}}function p(S,P,Q,X){const ne=s.attributes,se=P.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){const ze=ne[H];let ye=se[H];if(ye===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ze===void 0||ze.attribute!==ye||ye&&ze.data!==ye.data)return!0;Z++}return s.attributesNum!==Z||s.index!==X}function g(S,P,Q,X){const ne={},se=P.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){let ze=se[H];ze===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ze=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ze=S.instanceColor));const ye={};ye.attribute=ze,ze&&ze.data&&(ye.data=ze.data),ne[H]=ye,Z++}s.attributes=ne,s.attributesNum=Z,s.index=X}function M(){const S=s.newAttributes;for(let P=0,Q=S.length;P<Q;P++)S[P]=0}function x(S){h(S,0)}function h(S,P){const Q=s.newAttributes,X=s.enabledAttributes,ne=s.attributeDivisors;Q[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),ne[S]!==P&&(n.vertexAttribDivisor(S,P),ne[S]=P)}function w(){const S=s.newAttributes,P=s.enabledAttributes;for(let Q=0,X=P.length;Q<X;Q++)P[Q]!==S[Q]&&(n.disableVertexAttribArray(Q),P[Q]=0)}function b(S,P,Q,X,ne,se,Z){Z===!0?n.vertexAttribIPointer(S,P,Q,ne,se):n.vertexAttribPointer(S,P,Q,X,ne,se)}function E(S,P,Q,X){M();const ne=X.attributes,se=Q.getAttributes(),Z=P.defaultAttributeValues;for(const J in se){const H=se[J];if(H.location>=0){let fe=ne[J];if(fe===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const ze=fe.normalized,ye=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const je=Ce.buffer,ee=Ce.type,ce=Ce.bytesPerElement,Ee=ee===n.INT||ee===n.UNSIGNED_INT||fe.gpuType===il;if(fe.isInterleavedBufferAttribute){const pe=fe.data,we=pe.stride,Le=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<H.locationSize;Fe++)h(H.location+Fe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Fe=0;Fe<H.locationSize;Fe++)x(H.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Fe=0;Fe<H.locationSize;Fe++)b(H.location+Fe,ye/H.locationSize,ee,ze,we*ce,(Le+ye/H.locationSize*Fe)*ce,Ee)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)h(H.location+pe,fe.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<H.locationSize;pe++)x(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ye/H.locationSize,ee,ze,ye*ce,ye/H.locationSize*pe*ce,Ee)}}else if(Z!==void 0){const ze=Z[J];if(ze!==void 0)switch(ze.length){case 2:n.vertexAttrib2fv(H.location,ze);break;case 3:n.vertexAttrib3fv(H.location,ze);break;case 4:n.vertexAttrib4fv(H.location,ze);break;default:n.vertexAttrib1fv(H.location,ze)}}}}w()}function U(){F();for(const S in i){const P=i[S];for(const Q in P){const X=P[Q];for(const ne in X)u(X[ne].object),delete X[ne];delete P[Q]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const Q in P){const X=P[Q];for(const ne in X)u(X[ne].object),delete X[ne];delete P[Q]}delete i[S.id]}function C(S){for(const P in i){const Q=i[P];if(Q[S.id]===void 0)continue;const X=Q[S.id];for(const ne in X)u(X[ne].object),delete X[ne];delete Q[S.id]}}function F(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:x,disableUnusedAttributes:w}}function vg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let M=0;M<f;M++)g+=u[M]*d[M];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!F)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:U,maxSamples:D}}function Mg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!x)s?u(null):c();else{const w=s?0:i,b=w*4;let E=h.clippingState||null;l.value=E,E=u(g,d,b,p);for(let U=0;U!==b;++U)E[U]=t[U];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const M=f!==null?f.length:0;let x=null;if(M!==0){if(x=l.value,g!==!0||x===null){const h=p+M*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(x===null||x.length<h)&&(x=new Float32Array(h));for(let b=0,E=p;b!==M;++b,E+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function Sg(n){let e=new WeakMap;function t(o,a){return a===na?o.mapping=Ji:a===ia&&(o.mapping=Qi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===na||a===ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ex(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ki=4,Ec=[.125,.215,.35,.446,.526,.582],xi=20,Ro=new Dx,yc=new $e;let Co=null,Po=0,Do=0,Lo=!1;const di=(1+Math.sqrt(5))/2,Hi=1/di,Tc=[new B(-di,Hi,0),new B(di,Hi,0),new B(-Hi,0,di),new B(Hi,0,di),new B(0,di,-Hi),new B(0,di,Hi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Po,Do),this._renderer.xr.enabled=Lo,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ir,format:nn,colorSpace:nr,depthBuffer:!1},r=Ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(s)),this._blurMaterial=yg(s,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,r){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yc),u.toneMapping=Yn,u.autoClear=!1;const p=new _f({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new It(new Zn,p);let M=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,M=!0):(p.color.copy(yc),M=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;us(r,w*b,h>2?b:0,b,b),u.setRenderTarget(r),M&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tc[(r-s-1)%Tc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new It(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xi-1),M=s/g,x=isFinite(s)?1+Math.floor(u*M):xi;x>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xi}`);const h=[];let w=0;for(let C=0;C<xi;++C){const F=C/M,y=Math.exp(-F*F/2);h.push(y),C===0?w+=y:C<x&&(w+=2*y)}for(let C=0;C<h.length;C++)h[C]=h[C]/w;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const E=this._sizeLods[r],U=3*E*(r>b-ki?r-b+ki:0),D=4*(this._cubeSize-E);us(t,U,D,3*E,2*E),l.setRenderTarget(t),l.render(f,Ro)}}function Eg(n){const e=[],t=[],i=[];let r=n;const s=n-ki+1+Ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ki?l=Ec[o-n+ki-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,M=3,x=2,h=1,w=new Float32Array(M*g*p),b=new Float32Array(x*g*p),E=new Float32Array(h*g*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,F=D>2?0:-1,y=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];w.set(y,M*g*D),b.set(d,x*g*D);const S=[D,D,D,D,D,D];E.set(S,h*g*D)}const U=new yi;U.setAttribute("position",new pn(w,M)),U.setAttribute("uv",new pn(b,x)),U.setAttribute("faceIndex",new pn(E,h)),e.push(U),r>ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ac(n,e,t){const i=new Si(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yg(n,e,t){const i=new Float32Array(xi),r=new B(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Rc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function Tg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===na||l===ia,u=l===Ji||l===Qi;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new bc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ag(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let M=0;if(p!==null){const w=p.array;M=p.version;for(let b=0,E=w.length;b<E;b+=3){const U=w[b+0],D=w[b+1],C=w[b+2];d.push(U,D,D,C,C,U)}}else if(g!==void 0){const w=g.array;M=g.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const U=b+0,D=b+1,C=b+2;d.push(U,D,D,C,C,U)}}else return;const x=new(hf(d)?vf:gf)(d,1);x.version=M;const h=s.get(f);h&&e.remove(h),s.set(f,x)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wg(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let x=0;for(let h=0;h<g;h++)x+=p[h];t.update(x,i,1)}function f(d,p,g,M){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],M[h]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,M,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*M[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cg(n,e,t){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),M===!0&&(E=2),x===!0&&(E=3);let U=a.attributes.position.count*E,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*D*4*f),F=new pf(C,U,D,f);F.type=Rn,F.needsUpdate=!0;const y=E*4;for(let P=0;P<f;P++){const Q=h[P],X=w[P],ne=b[P],se=U*D*4*P;for(let Z=0;Z<Q.count;Z++){const J=Z*y;g===!0&&(r.fromBufferAttribute(Q,Z),C[se+J+0]=r.x,C[se+J+1]=r.y,C[se+J+2]=r.z,C[se+J+3]=0),M===!0&&(r.fromBufferAttribute(X,Z),C[se+J+4]=r.x,C[se+J+5]=r.y,C[se+J+6]=r.z,C[se+J+7]=0),x===!0&&(r.fromBufferAttribute(ne,Z),C[se+J+8]=r.x,C[se+J+9]=r.y,C[se+J+10]=r.z,C[se+J+11]=ne.itemSize===4?r.w:1)}}d={count:f,texture:F,size:new Ke(U,D)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Pg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Tf=new Ft,Cc=new Ef(1,1),bf=new pf,Af=new ox,wf=new Sf,Pc=[],Dc=[],Lc=new Float32Array(16),Uc=new Float32Array(9),Ic=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pc[r];if(s===void 0&&(s=new Float32Array(r),Pc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;Ic.set(i),n.uniformMatrix2fv(this.addr,!1,Ic),_t(t,i)}}function Fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),_t(t,i)}}function Og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;Lc.set(i),n.uniformMatrix4fv(this.addr,!1,Lc),_t(t,i)}}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function Yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cc.compareFunction=ff,s=Cc):s=Tf,t.setTexture2D(e||s,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Af,r)}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wf,r)}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bf,r)}function Zg(n){switch(n){case 5126:return Dg;case 35664:return Lg;case 35665:return Ug;case 35666:return Ig;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return kg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}function Jg(n,e){n.uniform1fv(this.addr,e)}function Qg(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function e1(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function t1(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function n1(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i1(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r1(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s1(n,e){n.uniform1iv(this.addr,e)}function o1(n,e){n.uniform2iv(this.addr,e)}function a1(n,e){n.uniform3iv(this.addr,e)}function l1(n,e){n.uniform4iv(this.addr,e)}function c1(n,e){n.uniform1uiv(this.addr,e)}function u1(n,e){n.uniform2uiv(this.addr,e)}function f1(n,e){n.uniform3uiv(this.addr,e)}function h1(n,e){n.uniform4uiv(this.addr,e)}function d1(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tf,s[o])}function p1(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Af,s[o])}function x1(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wf,s[o])}function m1(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bf,s[o])}function _1(n){switch(n){case 5126:return Jg;case 35664:return Qg;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return m1}}class g1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}}class v1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Nc(n,e){n.seq.push(e),n.map[e.id]=e}function M1(n,e,t){const i=n.name,r=i.length;for(Uo.lastIndex=0;;){const s=Uo.exec(i),o=Uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nc(t,c===void 0?new g1(a,n,e):new v1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new z1(a),Nc(t,f)),t=f}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);M1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const S1=37297;let E1=0;function y1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Oc=new He;function T1(n){Ye._getMatrix(Oc,Ye.workingColorSpace,n);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Rs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+y1(n.getShaderSource(e),o)}else return r}function b1(n,e){const t=T1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A1(n,e){let t;switch(e){case Dp:t="Linear";break;case Lp:t="Reinhard";break;case Up:t="Cineon";break;case Ip:t="ACESFilmic";break;case Fp:t="AgX";break;case Op:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new B;function w1(){Ye.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function C1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function P1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _r(n){return n!==""}function Hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(n){return n.replace(D1,U1)}const L1=new Map;function U1(n,e){let t=Ve[e];if(t===void 0){const i=L1.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(n){return n.replace(I1,N1)}function N1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function O1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function H1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nl:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Pp:e="ENVMAP_BLENDING_ADD";break}return e}function V1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function G1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=F1(t),c=O1(t),u=B1(t),f=H1(t),d=V1(t),p=R1(t),g=C1(s),M=r.createProgram();let x,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),h.length>0&&(h+=`
`)):(x=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),h=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,b1("linearToOutputTexel",t.outputColorSpace),w1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=Ua(o),o=Hc(o,t),o=Vc(o,t),a=Ua(a),a=Hc(a,t),a=Vc(a,t),o=Gc(o),a=Gc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=w+x+o,E=w+h+a,U=Fc(r,r.VERTEX_SHADER,b),D=Fc(r,r.FRAGMENT_SHADER,E);r.attachShader(M,U),r.attachShader(M,D),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(P){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(M).trim(),X=r.getShaderInfoLog(U).trim(),ne=r.getShaderInfoLog(D).trim();let se=!0,Z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,U,D);else{const J=Bc(r,U,"vertex"),H=Bc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Q+`
`+J+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(X===""||ne==="")&&(Z=!1);Z&&(P.diagnostics={runnable:se,programLog:Q,vertexShader:{log:X,prefix:x},fragmentShader:{log:ne,prefix:h}})}r.deleteShader(U),r.deleteShader(D),F=new Ms(r,M),y=P1(r,M)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,S1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=D,this}let k1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new X1(e),t.set(e,i)),i}}class X1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function q1(n,e,t,i,r,s,o){const a=new xf,l=new W1,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,S,P,Q,X){const ne=Q.fog,se=X.geometry,Z=y.isMeshStandardMaterial?Q.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),H=J&&J.mapping===Vs?J.image.height:null,fe=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ze=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ye=ze!==void 0?ze.length:0;let Ce=0;se.morphAttributes.position!==void 0&&(Ce=1),se.morphAttributes.normal!==void 0&&(Ce=2),se.morphAttributes.color!==void 0&&(Ce=3);let je,ee,ce,Ee;if(fe){const tt=un[fe];je=tt.vertexShader,ee=tt.fragmentShader}else je=y.vertexShader,ee=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Le=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,lt=!!y.map,T=!!y.matcap,R=!!J,z=!!y.aoMap,ie=!!y.lightMap,q=!!y.bumpMap,$=!!y.normalMap,K=!!y.displacementMap,re=!!y.emissiveMap,Y=!!y.metalnessMap,_=!!y.roughnessMap,m=y.anisotropy>0,A=y.clearcoat>0,O=y.dispersion>0,G=y.iridescence>0,V=y.sheen>0,ue=y.transmission>0,oe=m&&!!y.anisotropyMap,he=A&&!!y.clearcoatMap,Pe=A&&!!y.clearcoatNormalMap,ae=A&&!!y.clearcoatRoughnessMap,me=G&&!!y.iridescenceMap,be=G&&!!y.iridescenceThicknessMap,De=V&&!!y.sheenColorMap,de=V&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Oe=!!y.specularColorMap,st=!!y.specularIntensityMap,L=ue&&!!y.transmissionMap,_e=ue&&!!y.thicknessMap,j=!!y.gradientMap,te=!!y.alphaMap,Me=y.alphaTest>0,ve=!!y.alphaHash,Be=!!y.extensions;let ft=Yn;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Mt={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:nr,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:T,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:ie,bumpMap:q,normalMap:$,displacementMap:d&&K,emissiveMap:re,normalMapObjectSpace:$&&y.normalMapType===Gp,normalMapTangentSpace:$&&y.normalMapType===uf,metalnessMap:Y,roughnessMap:_,anisotropy:m,anisotropyMap:oe,clearcoat:A,clearcoatMap:he,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:O,iridescence:G,iridescenceMap:me,iridescenceThicknessMap:be,sheen:V,sheenColorMap:De,sheenRoughnessMap:de,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:st,transmission:ue,transmissionMap:L,thicknessMap:_e,gradientMap:j,opaque:y.transparent===!1&&y.blending===Yi&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ve,combine:y.combine,mapUv:lt&&M(y.map.channel),aoMapUv:z&&M(y.aoMap.channel),lightMapUv:ie&&M(y.lightMap.channel),bumpMapUv:q&&M(y.bumpMap.channel),normalMapUv:$&&M(y.normalMap.channel),displacementMapUv:K&&M(y.displacementMap.channel),emissiveMapUv:re&&M(y.emissiveMap.channel),metalnessMapUv:Y&&M(y.metalnessMap.channel),roughnessMapUv:_&&M(y.roughnessMap.channel),anisotropyMapUv:oe&&M(y.anisotropyMap.channel),clearcoatMapUv:he&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(y.sheenRoughnessMap.channel),specularMapUv:Ue&&M(y.specularMap.channel),specularColorMapUv:Oe&&M(y.specularColorMap.channel),specularIntensityMapUv:st&&M(y.specularIntensityMap.channel),transmissionMapUv:L&&M(y.transmissionMap.channel),thicknessMapUv:_e&&M(y.thicknessMap.channel),alphaMapUv:te&&M(y.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&($||m),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!se.attributes.uv&&(lt||te),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:X.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const S=g[y.type];let P;if(S){const Q=un[S];P=vx.clone(Q.uniforms)}else P=y.uniforms;return P}function U(y,S){let P;for(let Q=0,X=u.length;Q<X;Q++){const ne=u[Q];if(ne.cacheKey===S){P=ne,++P.usedTimes;break}}return P===void 0&&(P=new G1(n,S,y,s),u.push(P)),P}function D(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function F(){l.dispose()}return{getParameters:x,getProgramCacheKey:h,getUniforms:E,acquireProgram:U,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:F}}function Y1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,M,x){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:M,group:x},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=M,h.group=x),e++,h}function a(f,d,p,g,M,x){const h=o(f,d,p,g,M,x);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,g,M,x){const h=o(f,d,p,g,M,x);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||$1),i.length>1&&i.sort(d||Wc),r.length>1&&r.sort(d||Wc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function K1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xc,n.set(i,[o])):r>=s.length?(o=new Xc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function j1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Z1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let J1=0;function Q1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e0(n){const e=new j1,t=Z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new ut,o=new ut;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,M=0,x=0,h=0,w=0,b=0,E=0,U=0,D=0,C=0;c.sort(Q1);for(let y=0,S=c.length;y<S;y++){const P=c[y],Q=P.color,X=P.intensity,ne=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Q.r*X,f+=Q.g*X,d+=Q.b*X;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],X);C++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=Z,p++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(Q).multiplyScalar(X),Z.distance=ne,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[M]=Z;const J=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,J.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[M]=J.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=se,E++}M++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(Q).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Z,x++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=se,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(X),Z.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[h]=Z,h++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==x||F.hemiLength!==h||F.numDirectionalShadows!==w||F.numPointShadows!==b||F.numSpotShadows!==E||F.numSpotMaps!==U||F.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=x,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,F.directionalLength=p,F.pointLength=g,F.spotLength=M,F.rectAreaLength=x,F.hemiLength=h,F.numDirectionalShadows=w,F.numPointShadows=b,F.numSpotShadows=E,F.numSpotMaps=U,F.numLightProbes=C,i.version=J1++)}function l(c,u){let f=0,d=0,p=0,g=0,M=0;const x=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const b=c[h];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),f++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(x),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),o.identity(),s.copy(b.matrixWorld),s.premultiply(x),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),d++}else if(b.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),M++}}}return{setup:a,setupView:l,state:i}}function qc(n){const e=new e0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function t0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qc(n),e.set(r,[a])):s>=o.length?(a=new qc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
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
}`;function r0(n,e,t){let i=new ul;const r=new Ke,s=new Ke,o=new rt,a=new bx({depthPacking:Vp}),l=new Ax,c={},u=t.maxTextureSize,f={[Kn]:Nt,[Nt]:Kn,[wn]:wn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new yi;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let h=this.type;this.render=function(D,C,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(qn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const X=h!==yn&&this.type===yn,ne=h===yn&&this.type!==yn;for(let se=0,Z=D.length;se<Z;se++){const J=D[se],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const fe=H.getFrameExtents();if(r.multiply(fe),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,H.mapSize.y=s.y)),H.map===null||X===!0||ne===!0){const ye=this.type!==yn?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new Si(r.x,r.y,ye),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ze=H.getViewportCount();for(let ye=0;ye<ze;ye++){const Ce=H.getViewport(ye);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),Q.viewport(o),H.updateMatrices(J,ye),i=H.getFrustum(),E(C,F,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===yn&&w(H,F),H.needsUpdate=!1}h=this.type,x.needsUpdate=!1,n.setRenderTarget(y,S,P)};function w(D,C){const F=e.update(M);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,F,d,M,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,F,p,M,null)}function b(D,C,F,y){let S=null;const P=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=S.uuid,X=C.uuid;let ne=c[Q];ne===void 0&&(ne={},c[Q]=ne);let se=ne[X];se===void 0&&(se=S.clone(),ne[X]=se,C.addEventListener("dispose",U)),S=se}if(S.visible=C.visible,S.wireframe=C.wireframe,y===yn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Q=n.properties.get(S);Q.light=F}return S}function E(D,C,F,y,S){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===yn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const X=e.update(D),ne=D.material;if(Array.isArray(ne)){const se=X.groups;for(let Z=0,J=se.length;Z<J;Z++){const H=se[Z],fe=ne[H.materialIndex];if(fe&&fe.visible){const ze=b(D,fe,y,S);D.onBeforeShadow(n,D,C,F,X,ze,H),n.renderBufferDirect(F,null,X,ze,D,H),D.onAfterShadow(n,D,C,F,X,ze,H)}}}else if(ne.visible){const se=b(D,ne,y,S);D.onBeforeShadow(n,D,C,F,X,se,null),n.renderBufferDirect(F,null,X,se,D,null),D.onAfterShadow(n,D,C,F,X,se,null)}}const Q=D.children;for(let X=0,ne=Q.length;X<ne;X++)E(Q[X],C,F,y,S)}function U(D){D.target.removeEventListener("dispose",U);for(const F in c){const y=c[F],S=D.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const s0={[Ko]:jo,[Zo]:ea,[Jo]:ta,[Zi]:Qo,[jo]:Ko,[ea]:Zo,[ta]:Jo,[Qo]:Zi};function o0(n,e){function t(){let L=!1;const _e=new rt;let j=null;const te=new rt(0,0,0,0);return{setMask:function(Me){j!==Me&&!L&&(n.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){L=Me},setClear:function(Me,ve,Be,ft,Mt){Mt===!0&&(Me*=ft,ve*=ft,Be*=ft),_e.set(Me,ve,Be,ft),te.equals(_e)===!1&&(n.clearColor(Me,ve,Be,ft),te.copy(_e))},reset:function(){L=!1,j=null,te.set(-1,0,0,0)}}}function i(){let L=!1,_e=!1,j=null,te=null,Me=null;return{setReversed:function(ve){if(_e!==ve){const Be=e.get("EXT_clip_control");_e?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const ft=Me;Me=null,this.setClear(ft)}_e=ve},getReversed:function(){return _e},setTest:function(ve){ve?pe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){j!==ve&&!L&&(n.depthMask(ve),j=ve)},setFunc:function(ve){if(_e&&(ve=s0[ve]),te!==ve){switch(ve){case Ko:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case ea:n.depthFunc(n.GREATER);break;case ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ve}},setLocked:function(ve){L=ve},setClear:function(ve){Me!==ve&&(_e&&(ve=1-ve),n.clearDepth(ve),Me=ve)},reset:function(){L=!1,j=null,te=null,Me=null,_e=!1}}}function r(){let L=!1,_e=null,j=null,te=null,Me=null,ve=null,Be=null,ft=null,Mt=null;return{setTest:function(tt){L||(tt?pe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(tt){_e!==tt&&!L&&(n.stencilMask(tt),_e=tt)},setFunc:function(tt,jt,_n){(j!==tt||te!==jt||Me!==_n)&&(n.stencilFunc(tt,jt,_n),j=tt,te=jt,Me=_n)},setOp:function(tt,jt,_n){(ve!==tt||Be!==jt||ft!==_n)&&(n.stencilOp(tt,jt,_n),ve=tt,Be=jt,ft=_n)},setLocked:function(tt){L=tt},setClear:function(tt){Mt!==tt&&(n.clearStencil(tt),Mt=tt)},reset:function(){L=!1,_e=null,j=null,te=null,Me=null,ve=null,Be=null,ft=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,M=!1,x=null,h=null,w=null,b=null,E=null,U=null,D=null,C=new $e(0,0,0),F=0,y=!1,S=null,P=null,Q=null,X=null,ne=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=J>=2);let fe=null,ze={};const ye=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),je=new rt().fromArray(ye),ee=new rt().fromArray(Ce);function ce(L,_e,j,te){const Me=new Uint8Array(4),ve=n.createTexture();n.bindTexture(L,ve),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(_e+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ve}const Ee={};Ee[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Zi),q(!1),$(Yl),pe(n.CULL_FACE),z(qn);function pe(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function we(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Le(L,_e){return f[L]!==_e?(n.bindFramebuffer(L,_e),f[L]=_e,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Fe(L,_e){let j=p,te=!1;if(L){j=d.get(_e),j===void 0&&(j=[],d.set(_e,j));const Me=L.textures;if(j.length!==Me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Be=Me.length;ve<Be;ve++)j[ve]=n.COLOR_ATTACHMENT0+ve;j.length=Me.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function lt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const T={[pi]:n.FUNC_ADD,[dp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};T[xp]=n.MIN,T[mp]=n.MAX;const R={[_p]:n.ZERO,[gp]:n.ONE,[vp]:n.SRC_COLOR,[Yo]:n.SRC_ALPHA,[Tp]:n.SRC_ALPHA_SATURATE,[Ep]:n.DST_COLOR,[Mp]:n.DST_ALPHA,[zp]:n.ONE_MINUS_SRC_COLOR,[$o]:n.ONE_MINUS_SRC_ALPHA,[yp]:n.ONE_MINUS_DST_COLOR,[Sp]:n.ONE_MINUS_DST_ALPHA,[bp]:n.CONSTANT_COLOR,[Ap]:n.ONE_MINUS_CONSTANT_COLOR,[wp]:n.CONSTANT_ALPHA,[Rp]:n.ONE_MINUS_CONSTANT_ALPHA};function z(L,_e,j,te,Me,ve,Be,ft,Mt,tt){if(L===qn){M===!0&&(we(n.BLEND),M=!1);return}if(M===!1&&(pe(n.BLEND),M=!0),L!==hp){if(L!==x||tt!==y){if((h!==pi||E!==pi)&&(n.blendEquation(n.FUNC_ADD),h=pi,E=pi),tt)switch(L){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,U=null,D=null,C.set(0,0,0),F=0,x=L,y=tt}return}Me=Me||_e,ve=ve||j,Be=Be||te,(_e!==h||Me!==E)&&(n.blendEquationSeparate(T[_e],T[Me]),h=_e,E=Me),(j!==w||te!==b||ve!==U||Be!==D)&&(n.blendFuncSeparate(R[j],R[te],R[ve],R[Be]),w=j,b=te,U=ve,D=Be),(ft.equals(C)===!1||Mt!==F)&&(n.blendColor(ft.r,ft.g,ft.b,Mt),C.copy(ft),F=Mt),x=L,y=!1}function ie(L,_e){L.side===wn?we(n.CULL_FACE):pe(n.CULL_FACE);let j=L.side===Nt;_e&&(j=!j),q(j),L.blending===Yi&&L.transparent===!1?z(qn):z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const te=L.stencilWrite;a.setTest(te),te&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function $(L){L!==cp?(pe(n.CULL_FACE),L!==P&&(L===Yl?n.cullFace(n.BACK):L===up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),P=L}function K(L){L!==Q&&(Z&&n.lineWidth(L),Q=L)}function re(L,_e,j){L?(pe(n.POLYGON_OFFSET_FILL),(X!==_e||ne!==j)&&(n.polygonOffset(_e,j),X=_e,ne=j)):we(n.POLYGON_OFFSET_FILL)}function Y(L){L?pe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function _(L){L===void 0&&(L=n.TEXTURE0+se-1),fe!==L&&(n.activeTexture(L),fe=L)}function m(L,_e,j){j===void 0&&(fe===null?j=n.TEXTURE0+se-1:j=fe);let te=ze[j];te===void 0&&(te={type:void 0,texture:void 0},ze[j]=te),(te.type!==L||te.texture!==_e)&&(fe!==j&&(n.activeTexture(j),fe=j),n.bindTexture(L,_e||Ee[L]),te.type=L,te.texture=_e)}function A(){const L=ze[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function de(L){ee.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function Ue(L,_e){let j=c.get(_e);j===void 0&&(j=new WeakMap,c.set(_e,j));let te=j.get(L);te===void 0&&(te=n.getUniformBlockIndex(_e,L.name),j.set(L,te))}function Oe(L,_e){const te=c.get(_e).get(L);l.get(_e)!==te&&(n.uniformBlockBinding(_e,te,L.__bindingPointIndex),l.set(_e,te))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,ze={},f={},d=new WeakMap,p=[],g=null,M=!1,x=null,h=null,w=null,b=null,E=null,U=null,D=null,C=new $e(0,0,0),F=0,y=!1,S=null,P=null,Q=null,X=null,ne=null,je.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:we,bindFramebuffer:Le,drawBuffers:Fe,useProgram:lt,setBlending:z,setMaterial:ie,setFlipSided:q,setCullFace:$,setLineWidth:K,setPolygonOffset:re,setScissorTest:Y,activeTexture:_,bindTexture:m,unbindTexture:A,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:me,texImage3D:be,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:V,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:De,viewport:de,reset:st}}function a0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,m){return p?new OffscreenCanvas(_,m):Ps("canvas")}function M(_,m,A){let O=1;const G=Y(_);if((G.width>A||G.height>A)&&(O=A/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const V=Math.floor(O*G.width),ue=Math.floor(O*G.height);f===void 0&&(f=g(V,ue));const oe=m?g(V,ue):f;return oe.width=V,oe.height=ue,oe.getContext("2d").drawImage(_,0,0,V,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+ue+")."),oe}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),_;return _}function x(_){return _.generateMipmaps}function h(_){n.generateMipmap(_)}function w(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(_,m,A,O,G=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let V=m;if(m===n.RED&&(A===n.FLOAT&&(V=n.R32F),A===n.HALF_FLOAT&&(V=n.R16F),A===n.UNSIGNED_BYTE&&(V=n.R8)),m===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(V=n.R8UI),A===n.UNSIGNED_SHORT&&(V=n.R16UI),A===n.UNSIGNED_INT&&(V=n.R32UI),A===n.BYTE&&(V=n.R8I),A===n.SHORT&&(V=n.R16I),A===n.INT&&(V=n.R32I)),m===n.RG&&(A===n.FLOAT&&(V=n.RG32F),A===n.HALF_FLOAT&&(V=n.RG16F),A===n.UNSIGNED_BYTE&&(V=n.RG8)),m===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(V=n.RG8UI),A===n.UNSIGNED_SHORT&&(V=n.RG16UI),A===n.UNSIGNED_INT&&(V=n.RG32UI),A===n.BYTE&&(V=n.RG8I),A===n.SHORT&&(V=n.RG16I),A===n.INT&&(V=n.RG32I)),m===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(V=n.RGB8UI),A===n.UNSIGNED_SHORT&&(V=n.RGB16UI),A===n.UNSIGNED_INT&&(V=n.RGB32UI),A===n.BYTE&&(V=n.RGB8I),A===n.SHORT&&(V=n.RGB16I),A===n.INT&&(V=n.RGB32I)),m===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),A===n.UNSIGNED_INT&&(V=n.RGBA32UI),A===n.BYTE&&(V=n.RGBA8I),A===n.SHORT&&(V=n.RGBA16I),A===n.INT&&(V=n.RGBA32I)),m===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),m===n.RGBA){const ue=G?Rs:Ye.getTransfer(O);A===n.FLOAT&&(V=n.RGBA32F),A===n.HALF_FLOAT&&(V=n.RGBA16F),A===n.UNSIGNED_BYTE&&(V=ue===it?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(_,m){let A;return _?m===null||m===Mi||m===er?A=n.DEPTH24_STENCIL8:m===Rn?A=n.DEPTH32F_STENCIL8:m===Dr&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Mi||m===er?A=n.DEPTH_COMPONENT24:m===Rn?A=n.DEPTH_COMPONENT32F:m===Dr&&(A=n.DEPTH_COMPONENT16),A}function U(_,m){return x(_)===!0||_.isFramebufferTexture&&_.minFilter!==on&&_.minFilter!==hn?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function D(_){const m=_.target;m.removeEventListener("dispose",D),F(m),m.isVideoTexture&&u.delete(m)}function C(_){const m=_.target;m.removeEventListener("dispose",C),S(m)}function F(_){const m=i.get(_);if(m.__webglInit===void 0)return;const A=_.source,O=d.get(A);if(O){const G=O[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&y(_),Object.keys(O).length===0&&d.delete(A)}i.remove(_)}function y(_){const m=i.get(_);n.deleteTexture(m.__webglTexture);const A=_.source,O=d.get(A);delete O[m.__cacheKey],o.memory.textures--}function S(_){const m=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(m.__webglFramebuffer[O]))for(let G=0;G<m.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(m.__webglFramebuffer[O][G]);else n.deleteFramebuffer(m.__webglFramebuffer[O]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[O])}else{if(Array.isArray(m.__webglFramebuffer))for(let O=0;O<m.__webglFramebuffer.length;O++)n.deleteFramebuffer(m.__webglFramebuffer[O]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let O=0;O<m.__webglColorRenderbuffer.length;O++)m.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[O]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const A=_.textures;for(let O=0,G=A.length;O<G;O++){const V=i.get(A[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(A[O])}i.remove(_)}let P=0;function Q(){P=0}function X(){const _=P;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),P+=1,_}function ne(_){const m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function se(_,m){const A=i.get(_);if(_.isVideoTexture&&K(_),_.isRenderTargetTexture===!1&&_.version>0&&A.__version!==_.version){const O=_.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(A,_,m);return}}t.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+m)}function Z(_,m){const A=i.get(_);if(_.version>0&&A.__version!==_.version){ee(A,_,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+m)}function J(_,m){const A=i.get(_);if(_.version>0&&A.__version!==_.version){ee(A,_,m);return}t.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+m)}function H(_,m){const A=i.get(_);if(_.version>0&&A.__version!==_.version){ce(A,_,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+m)}const fe={[ra]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[sa]:n.MIRRORED_REPEAT},ze={[on]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[io]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},ye={[kp]:n.NEVER,[Kp]:n.ALWAYS,[Wp]:n.LESS,[ff]:n.LEQUAL,[Xp]:n.EQUAL,[$p]:n.GEQUAL,[qp]:n.GREATER,[Yp]:n.NOTEQUAL};function Ce(_,m){if(m.type===Rn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===hn||m.magFilter===io||m.magFilter===Wr||m.magFilter===_i||m.minFilter===hn||m.minFilter===io||m.minFilter===Wr||m.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,fe[m.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,fe[m.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,fe[m.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ze[m.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ze[m.minFilter]),m.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ye[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===on||m.minFilter!==Wr&&m.minFilter!==_i||m.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const A=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function je(_,m){let A=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",D));const O=m.source;let G=d.get(O);G===void 0&&(G={},d.set(O,G));const V=ne(m);if(V!==_.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,A=!0),G[V].usedTimes++;const ue=G[_.__cacheKey];ue!==void 0&&(G[_.__cacheKey].usedTimes--,ue.usedTimes===0&&y(m)),_.__cacheKey=V,_.__webglTexture=G[V].texture}return A}function ee(_,m,A){let O=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(O=n.TEXTURE_3D);const G=je(_,m),V=m.source;t.bindTexture(O,_.__webglTexture,n.TEXTURE0+A);const ue=i.get(V);if(V.version!==ue.__version||G===!0){t.activeTexture(n.TEXTURE0+A);const oe=Ye.getPrimaries(Ye.workingColorSpace),he=m.colorSpace===kn?null:Ye.getPrimaries(m.colorSpace),Pe=m.colorSpace===kn||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=M(m.image,!1,r.maxTextureSize);ae=re(m,ae);const me=s.convert(m.format,m.colorSpace),be=s.convert(m.type);let De=b(m.internalFormat,me,be,m.colorSpace,m.isVideoTexture);Ce(O,m);let de;const Ue=m.mipmaps,Oe=m.isVideoTexture!==!0,st=ue.__version===void 0||G===!0,L=V.dataReady,_e=U(m,ae);if(m.isDepthTexture)De=E(m.format===tr,m.type),st&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,me,be,null));else if(m.isDataTexture)if(Ue.length>0){Oe&&st&&t.texStorage2D(n.TEXTURE_2D,_e,De,Ue[0].width,Ue[0].height);for(let j=0,te=Ue.length;j<te;j++)de=Ue[j],Oe?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,me,be,de.data):t.texImage2D(n.TEXTURE_2D,j,De,de.width,de.height,0,me,be,de.data);m.generateMipmaps=!1}else Oe?(st&&t.texStorage2D(n.TEXTURE_2D,_e,De,ae.width,ae.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,me,be,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,me,be,ae.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Oe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,Ue[0].width,Ue[0].height,ae.depth);for(let j=0,te=Ue.length;j<te;j++)if(de=Ue[j],m.format!==nn)if(me!==null)if(Oe){if(L)if(m.layerUpdates.size>0){const Me=Sc(de.width,de.height,m.format,m.type);for(const ve of m.layerUpdates){const Be=de.data.subarray(ve*Me/de.data.BYTES_PER_ELEMENT,(ve+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ve,de.width,de.height,1,me,Be)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ae.depth,me,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,De,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ae.depth,me,be,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,De,de.width,de.height,ae.depth,0,me,be,de.data)}else{Oe&&st&&t.texStorage2D(n.TEXTURE_2D,_e,De,Ue[0].width,Ue[0].height);for(let j=0,te=Ue.length;j<te;j++)de=Ue[j],m.format!==nn?me!==null?Oe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(n.TEXTURE_2D,j,De,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,me,be,de.data):t.texImage2D(n.TEXTURE_2D,j,De,de.width,de.height,0,me,be,de.data)}else if(m.isDataArrayTexture)if(Oe){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,De,ae.width,ae.height,ae.depth),L)if(m.layerUpdates.size>0){const j=Sc(ae.width,ae.height,m.format,m.type);for(const te of m.layerUpdates){const Me=ae.data.subarray(te*j/ae.data.BYTES_PER_ELEMENT,(te+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,me,be,Me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,be,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,me,be,ae.data);else if(m.isData3DTexture)Oe?(st&&t.texStorage3D(n.TEXTURE_3D,_e,De,ae.width,ae.height,ae.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,be,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,me,be,ae.data);else if(m.isFramebufferTexture){if(st)if(Oe)t.texStorage2D(n.TEXTURE_2D,_e,De,ae.width,ae.height);else{let j=ae.width,te=ae.height;for(let Me=0;Me<_e;Me++)t.texImage2D(n.TEXTURE_2D,Me,De,j,te,0,me,be,null),j>>=1,te>>=1}}else if(Ue.length>0){if(Oe&&st){const j=Y(Ue[0]);t.texStorage2D(n.TEXTURE_2D,_e,De,j.width,j.height)}for(let j=0,te=Ue.length;j<te;j++)de=Ue[j],Oe?L&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me,be,de):t.texImage2D(n.TEXTURE_2D,j,De,me,be,de);m.generateMipmaps=!1}else if(Oe){if(st){const j=Y(ae);t.texStorage2D(n.TEXTURE_2D,_e,De,j.width,j.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,be,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,me,be,ae);x(m)&&h(O),ue.__version=V.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function ce(_,m,A){if(m.image.length!==6)return;const O=je(_,m),G=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+A);const V=i.get(G);if(G.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+A);const ue=Ye.getPrimaries(Ye.workingColorSpace),oe=m.colorSpace===kn?null:Ye.getPrimaries(m.colorSpace),he=m.colorSpace===kn||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Pe=m.isCompressedTexture||m.image[0].isCompressedTexture,ae=m.image[0]&&m.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!Pe&&!ae?me[te]=M(m.image[te],!0,r.maxCubemapSize):me[te]=ae?m.image[te].image:m.image[te],me[te]=re(m,me[te]);const be=me[0],De=s.convert(m.format,m.colorSpace),de=s.convert(m.type),Ue=b(m.internalFormat,De,de,m.colorSpace),Oe=m.isVideoTexture!==!0,st=V.__version===void 0||O===!0,L=G.dataReady;let _e=U(m,be);Ce(n.TEXTURE_CUBE_MAP,m);let j;if(Pe){Oe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ue,be.width,be.height);for(let te=0;te<6;te++){j=me[te].mipmaps;for(let Me=0;Me<j.length;Me++){const ve=j[Me];m.format!==nn?De!==null?Oe?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,De,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,De,de,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,Ue,ve.width,ve.height,0,De,de,ve.data)}}}else{if(j=m.mipmaps,Oe&&st){j.length>0&&_e++;const te=Y(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Oe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,De,de,me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,me[te].width,me[te].height,0,De,de,me[te].data);for(let Me=0;Me<j.length;Me++){const Be=j[Me].image[te].image;Oe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Be.width,Be.height,De,de,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,Ue,Be.width,Be.height,0,De,de,Be.data)}}else{Oe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,de,me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,De,de,me[te]);for(let Me=0;Me<j.length;Me++){const ve=j[Me];Oe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,De,de,ve.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,Ue,De,de,ve.image[te])}}}x(m)&&h(n.TEXTURE_CUBE_MAP),V.__version=G.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function Ee(_,m,A,O,G,V){const ue=s.convert(A.format,A.colorSpace),oe=s.convert(A.type),he=b(A.internalFormat,ue,oe,A.colorSpace),Pe=i.get(m),ae=i.get(A);if(ae.__renderTarget=m,!Pe.__hasExternalTextures){const me=Math.max(1,m.width>>V),be=Math.max(1,m.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,he,me,be,m.depth,0,ue,oe,null):t.texImage2D(G,V,he,me,be,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),$(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,ae.__webglTexture,0,q(m)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,ae.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(_,m,A){if(n.bindRenderbuffer(n.RENDERBUFFER,_),m.depthBuffer){const O=m.depthTexture,G=O&&O.isDepthTexture?O.type:null,V=E(m.stencilBuffer,G),ue=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=q(m);$(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,V,m.width,m.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,V,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,V,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,_)}else{const O=m.textures;for(let G=0;G<O.length;G++){const V=O[G],ue=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),he=b(V.internalFormat,ue,oe,V.colorSpace),Pe=q(m);A&&$(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,he,m.width,m.height):$(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,he,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,he,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(_,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(m.depthTexture);O.__renderTarget=m,(!O.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),se(m.depthTexture,0);const G=O.__webglTexture,V=q(m);if(m.depthTexture.format===$i)$(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(m.depthTexture.format===tr)$(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Le(_){const m=i.get(_),A=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){const O=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),O){const G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=O}if(_.depthTexture&&!m.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");we(m.__webglFramebuffer,_)}else if(A){m.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[O]),m.__webglDepthbuffer[O]===void 0)m.__webglDepthbuffer[O]=n.createRenderbuffer(),pe(m.__webglDepthbuffer[O],_,!1);else{const G=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),pe(m.__webglDepthbuffer,_,!1);else{const O=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(_,m,A){const O=i.get(_);m!==void 0&&Ee(O.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&Le(_)}function lt(_){const m=_.texture,A=i.get(_),O=i.get(m);_.addEventListener("dispose",C);const G=_.textures,V=_.isWebGLCubeRenderTarget===!0,ue=G.length>1;if(ue||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=m.version,o.memory.textures++),V){A.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(m.mipmaps&&m.mipmaps.length>0){A.__webglFramebuffer[oe]=[];for(let he=0;he<m.mipmaps.length;he++)A.__webglFramebuffer[oe][he]=n.createFramebuffer()}else A.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){A.__webglFramebuffer=[];for(let oe=0;oe<m.mipmaps.length;oe++)A.__webglFramebuffer[oe]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,he=G.length;oe<he;oe++){const Pe=i.get(G[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&$(_)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let oe=0;oe<G.length;oe++){const he=G[oe];A.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[oe]);const Pe=s.convert(he.format,he.colorSpace),ae=s.convert(he.type),me=b(he.internalFormat,Pe,ae,he.colorSpace,_.isXRRenderTarget===!0),be=q(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,me,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,A.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(A.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,m);for(let oe=0;oe<6;oe++)if(m.mipmaps&&m.mipmaps.length>0)for(let he=0;he<m.mipmaps.length;he++)Ee(A.__webglFramebuffer[oe][he],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Ee(A.__webglFramebuffer[oe],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(m)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,he=G.length;oe<he;oe++){const Pe=G[oe],ae=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ce(n.TEXTURE_2D,Pe),Ee(A.__webglFramebuffer,_,Pe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),x(Pe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(oe=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),Ce(oe,m),m.mipmaps&&m.mipmaps.length>0)for(let he=0;he<m.mipmaps.length;he++)Ee(A.__webglFramebuffer[he],_,m,n.COLOR_ATTACHMENT0,oe,he);else Ee(A.__webglFramebuffer,_,m,n.COLOR_ATTACHMENT0,oe,0);x(m)&&h(oe),t.unbindTexture()}_.depthBuffer&&Le(_)}function T(_){const m=_.textures;for(let A=0,O=m.length;A<O;A++){const G=m[A];if(x(G)){const V=w(_),ue=i.get(G).__webglTexture;t.bindTexture(V,ue),h(V),t.unbindTexture()}}}const R=[],z=[];function ie(_){if(_.samples>0){if($(_)===!1){const m=_.textures,A=_.width,O=_.height;let G=n.COLOR_BUFFER_BIT;const V=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(_),oe=m.length>1;if(oe)for(let he=0;he<m.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<m.length;he++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Pe=i.get(m[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,A,O,0,0,A,O,G,n.NEAREST),l===!0&&(R.length=0,z.length=0,R.push(n.COLOR_ATTACHMENT0+he),_.depthBuffer&&_.resolveDepthBuffer===!1&&(R.push(V),z.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<m.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Pe=i.get(m[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const m=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function q(_){return Math.min(r.maxSamples,_.samples)}function $(_){const m=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function K(_){const m=o.render.frame;u.get(_)!==m&&(u.set(_,m),_.update())}function re(_,m){const A=_.colorSpace,O=_.format,G=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||A!==nr&&A!==kn&&(Ye.getTransfer(A)===it?(O!==nn||G!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),m}function Y(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Fe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=$}function l0(n,e){function t(i,r=kn){let s;const o=Ye.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qu)return n.BYTE;if(i===ef)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Ir)return n.HALF_FLOAT;if(i===nf)return n.ALPHA;if(i===rf)return n.RGB;if(i===nn)return n.RGBA;if(i===sf)return n.LUMINANCE;if(i===of)return n.LUMINANCE_ALPHA;if(i===$i)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===af)return n.RED;if(i===ol)return n.RED_INTEGER;if(i===lf)return n.RG;if(i===al)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===ms||i===_s||i===gs||i===vs)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oa||i===aa||i===la||i===ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===fa||i===ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ua||i===fa)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ha)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===da||i===pa||i===xa||i===ma||i===_a||i===ga||i===va||i===za||i===Ma||i===Sa||i===Ea||i===ya||i===Ta||i===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===da)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ma)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_a)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===va)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===za)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sa)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ea)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ya)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ta)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zs||i===Aa||i===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zs)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cf||i===Ra||i===Ca||i===Pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const c0={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,i),h=this._getHandJoint(c,M);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends sr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const M=new h0,x=t.getContextAttributes();let h=null,w=null;const b=[],E=[],U=new Ke;let D=null;const C=new Wt;C.viewport=new rt;const F=new Wt;F.viewport=new rt;const y=[C,F],S=new Lx;let P=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=b[ee];return ce===void 0&&(ce=new Io,b[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=b[ee];return ce===void 0&&(ce=new Io,b[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=b[ee];return ce===void 0&&(ce=new Io,b[ee]=ce),ce.getHandSpace()};function X(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const Ee=b[ce];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<b.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,b[ee].disconnect(ce))}P=null,Q=null,M.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,w=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Si(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ce=null,Ee=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?tr:$i,Ee=x.stencil?er:Mi);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Si(d.textureWidth,d.textureHeight,{format:nn,type:Dn,depthTexture:new Ef(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(ee){for(let ce=0;ce<ee.removed.length;ce++){const Ee=ee.removed[ce],pe=E.indexOf(Ee);pe>=0&&(E[pe]=null,b[pe].disconnect(Ee))}for(let ce=0;ce<ee.added.length;ce++){const Ee=ee.added[ce];let pe=E.indexOf(Ee);if(pe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=E.length){E.push(Ee),pe=Le;break}else if(E[Le]===null){E[Le]=Ee,pe=Le;break}if(pe===-1)break}const we=b[pe];we&&we.connect(Ee)}}const Z=new B,J=new B;function H(ee,ce,Ee){Z.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const pe=Z.distanceTo(J),we=ce.projectionMatrix.elements,Le=Ee.projectionMatrix.elements,Fe=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),T=(we[9]+1)/we[5],R=(we[9]-1)/we[5],z=(we[8]-1)/we[0],ie=(Le[8]+1)/Le[0],q=Fe*z,$=Fe*ie,K=pe/(-z+ie),re=K*-z;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(K),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Y=Fe+K,_=lt+K,m=q-re,A=$+(pe-re),O=T*lt/_*Y,G=R*lt/_*Y;ee.projectionMatrix.makePerspective(m,A,O,G,Y,_),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ce=ee.near,Ee=ee.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),S.near=F.near=C.near=ce,S.far=F.far=C.far=Ee,(P!==S.near||Q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,Q=S.far),C.layers.mask=ee.layers.mask|2,F.layers.mask=ee.layers.mask|4,S.layers.mask=C.layers.mask|F.layers.mask;const pe=ee.parent,we=S.cameras;fe(S,pe);for(let Le=0;Le<we.length;Le++)fe(we[Le],pe);we.length===2?H(S,C,F):S.projectionMatrix.copy(C.projectionMatrix),ze(ee,S,pe)};function ze(ee,ce,Ee){Ee===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Da*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let ye=null;function Ce(ee,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let pe=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Le=0;Le<Ee.length;Le++){const Fe=Ee[Le];let lt=null;if(p!==null)lt=p.getViewport(Fe);else{const R=f.getViewSubImage(d,Fe);lt=R.viewport,Le===0&&(e.setRenderTargetTextures(w,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(w))}let T=y[Le];T===void 0&&(T=new Wt,T.layers.enable(Le),T.viewport=new rt,y[Le]=T),T.matrix.fromArray(Fe.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Fe.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(lt.x,lt.y,lt.width,lt.height),Le===0&&(S.matrix.copy(T.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(T)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=f.getDepthInformation(Ee[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const pe=E[Ee],we=b[Ee];pe!==null&&we!==void 0&&we.update(pe,ce,c||o)}ye&&ye(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const je=new yf;je.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const ui=new mn,p0=new ut;function x0(n,e){function t(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,zf(n)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,w,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(x,h):h.isMeshToonMaterial?(s(x,h),f(x,h)):h.isMeshPhongMaterial?(s(x,h),u(x,h)):h.isMeshStandardMaterial?(s(x,h),d(x,h),h.isMeshPhysicalMaterial&&p(x,h,E)):h.isMeshMatcapMaterial?(s(x,h),g(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),M(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(o(x,h),h.isLineDashedMaterial&&a(x,h)):h.isPointsMaterial?l(x,h,w,b):h.isSpriteMaterial?c(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,t(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===Nt&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,t(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===Nt&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,t(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,t(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const w=e.get(h),b=w.envMap,E=w.envMapRotation;b&&(x.envMap.value=b,ui.copy(E),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),x.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(ui)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,x.aoMapTransform))}function o(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform))}function a(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,w,b){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*w,x.scale.value=b*.5,h.map&&(x.map.value=h.map,t(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function c(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function f(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function d(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,w){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,h){h.matcap&&(x.matcap.value=h.matcap)}function M(x,h){const w=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function m0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const E=b.program;i.uniformBlockBinding(w,E)}function c(w,b){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",x));const U=b.program;i.updateUBOMapping(w,U);const D=e.render.frame;s[w.id]!==D&&(d(w),s[w.id]=D)}function u(w){const b=f();w.__bindingPointIndex=b;const E=n.createBuffer(),U=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=r[w.id],E=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,C=E.length;D<C;D++){const F=Array.isArray(E[D])?E[D]:[E[D]];for(let y=0,S=F.length;y<S;y++){const P=F[y];if(p(P,D,y,U)===!0){const Q=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let ne=0;for(let se=0;se<X.length;se++){const Z=X[se],J=M(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Q+ne,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,ne),ne+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,E,U){const D=w.value,C=b+"_"+E;if(U[C]===void 0)return typeof D=="number"||typeof D=="boolean"?U[C]=D:U[C]=D.clone(),!0;{const F=U[C];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return U[C]=D,!0}else if(F.equals(D)===!1)return F.copy(D),!0}return!1}function g(w){const b=w.uniforms;let E=0;const U=16;for(let C=0,F=b.length;C<F;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,P=y.length;S<P;S++){const Q=y[S],X=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,se=X.length;ne<se;ne++){const Z=X[ne],J=M(Z),H=E%U,fe=H%J.boundary,ze=H+fe;E+=fe,ze!==0&&U-ze<J.storage&&(E+=U-ze),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=J.storage}}}const D=E%U;return D>0&&(E+=U-D),w.__size=E,w.__cache={},this}function M(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function x(w){const b=w.target;b.removeEventListener("dispose",x);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class _0{constructor(e={}){const{canvas:t=Zp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),M=new Int32Array(4);let x=null,h=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Yn,this.toneMappingExposure=1;const E=this;let U=!1,D=0,C=0,F=null,y=-1,S=null;const P=new rt,Q=new rt;let X=null;const ne=new $e(0);let se=0,Z=t.width,J=t.height,H=1,fe=null,ze=null;const ye=new rt(0,0,Z,J),Ce=new rt(0,0,Z,J);let je=!1;const ee=new ul;let ce=!1,Ee=!1;const pe=new ut,we=new ut,Le=new B,Fe=new rt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function R(){return F===null?H:1}let z=i;function ie(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const I="webgl2";if(z=ie(I,v),z===null)throw ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let q,$,K,re,Y,_,m,A,O,G,V,ue,oe,he,Pe,ae,me,be,De,de,Ue,Oe,st,L;function _e(){q=new bg(z),q.init(),Oe=new l0(z,q),$=new zg(z,q,e,Oe),K=new o0(z,q),$.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),re=new Rg(z),Y=new Y1,_=new a0(z,q,K,Y,$,Oe,re),m=new Sg(E),A=new Tg(E),O=new Nx(z),st=new gg(z,O),G=new Ag(z,O,re,st),V=new Pg(z,G,O,re),De=new Cg(z,$,_),ae=new Mg(Y),ue=new q1(E,m,A,q,$,st,ae),oe=new x0(E,Y),he=new K1,Pe=new t0(q),be=new _g(E,m,A,K,V,p,l),me=new r0(E,V,$),L=new m0(z,re,$,K),de=new vg(z,q,re),Ue=new wg(z,q,re),re.programs=ue.programs,E.capabilities=$,E.extensions=q,E.properties=Y,E.renderLists=he,E.shadowMap=me,E.state=K,E.info=re}_e();const j=new d0(E,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const v=q.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=q.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(Z,J,!1))},this.getSize=function(v){return v.set(Z,J)},this.setSize=function(v,I,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,J=I,t.width=Math.floor(v*H),t.height=Math.floor(I*H),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Z*H,J*H).floor()},this.setDrawingBufferSize=function(v,I,k){Z=v,J=I,H=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(ye)},this.setViewport=function(v,I,k,W){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,I,k,W),K.viewport(P.copy(ye).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Ce)},this.setScissor=function(v,I,k,W){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,I,k,W),K.scissor(Q.copy(Ce).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(v){K.setScissorTest(je=v)},this.setOpaqueSort=function(v){fe=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(v=!0,I=!0,k=!0){let W=0;if(v){let N=!1;if(F!==null){const le=F.texture.format;N=le===ll||le===al||le===ol}if(N){const le=F.texture.type,ge=le===Dn||le===Mi||le===Dr||le===er||le===rl||le===sl,Se=be.getClearColor(),Te=be.getClearAlpha(),Ie=Se.r,Ne=Se.g,Ae=Se.b;ge?(g[0]=Ie,g[1]=Ne,g[2]=Ae,g[3]=Te,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=Ie,M[1]=Ne,M[2]=Ae,M[3]=Te,z.clearBufferiv(z.COLOR,0,M))}else W|=z.COLOR_BUFFER_BIT}I&&(W|=z.DEPTH_BUFFER_BIT),k&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),be.dispose(),he.dispose(),Pe.dispose(),Y.dispose(),m.dispose(),A.dispose(),V.dispose(),st.dispose(),L.dispose(),ue.dispose(),j.dispose(),j.removeEventListener("sessionstart",dl),j.removeEventListener("sessionend",pl),ti.stop()};function te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const v=re.autoReset,I=me.enabled,k=me.autoUpdate,W=me.needsUpdate,N=me.type;_e(),re.autoReset=v,me.enabled=I,me.autoUpdate=k,me.needsUpdate=W,me.type=N}function ve(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Be(v){const I=v.target;I.removeEventListener("dispose",Be),ft(I)}function ft(v){Mt(v),Y.remove(v)}function Mt(v){const I=Y.get(v).programs;I!==void 0&&(I.forEach(function(k){ue.releaseProgram(k)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,W,N,le){I===null&&(I=lt);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Se=Pf(v,I,k,W,N);K.setMaterial(W,ge);let Te=k.index,Ie=1;if(W.wireframe===!0){if(Te=G.getWireframeAttribute(k),Te===void 0)return;Ie=2}const Ne=k.drawRange,Ae=k.attributes.position;let Xe=Ne.start*Ie,Ze=(Ne.start+Ne.count)*Ie;le!==null&&(Xe=Math.max(Xe,le.start*Ie),Ze=Math.min(Ze,(le.start+le.count)*Ie)),Te!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,Te.count)):Ae!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,Ae.count));const dt=Ze-Xe;if(dt<0||dt===1/0)return;st.setup(N,W,Se,k,Te);let ht,qe=de;if(Te!==null&&(ht=O.get(Te),qe=Ue,qe.setIndex(ht)),N.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*R()),qe.setMode(z.LINES)):qe.setMode(z.TRIANGLES);else if(N.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),K.setLineWidth(Re*R()),N.isLineSegments?qe.setMode(z.LINES):N.isLineLoop?qe.setMode(z.LINE_LOOP):qe.setMode(z.LINE_STRIP)}else N.isPoints?qe.setMode(z.POINTS):N.isSprite&&qe.setMode(z.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,zt=N._multiDrawCounts,Je=N._multiDrawCount,Zt=Te?O.get(Te).bytesPerElement:1,Ti=Y.get(W).currentProgram.getUniforms();for(let Bt=0;Bt<Je;Bt++)Ti.setValue(z,"_gl_DrawID",Bt),qe.render(Re[Bt]/Zt,zt[Bt])}else if(N.isInstancedMesh)qe.renderInstances(Xe,dt,N.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,zt=Math.min(k.instanceCount,Re);qe.renderInstances(Xe,dt,zt)}else qe.render(Xe,dt)};function tt(v,I,k){v.transparent===!0&&v.side===wn&&v.forceSinglePass===!1?(v.side=Nt,v.needsUpdate=!0,Hr(v,I,k),v.side=Kn,v.needsUpdate=!0,Hr(v,I,k),v.side=wn):Hr(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),h=Pe.get(k),h.init(I),b.push(h),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const W=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Se=le[ge];tt(Se,k,N),W.add(Se)}else tt(le,k,N),W.add(le)}),b.pop(),h=null,W},this.compileAsync=function(v,I,k=null){const W=this.compile(v,I,k);return new Promise(N=>{function le(){if(W.forEach(function(ge){Y.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){N(v);return}setTimeout(le,10)}q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let jt=null;function _n(v){jt&&jt(v)}function dl(){ti.stop()}function pl(){ti.start()}const ti=new yf;ti.setAnimationLoop(_n),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(v){jt=v,j.setAnimationLoop(v),v===null?ti.stop():ti.start()},j.addEventListener("sessionstart",dl),j.addEventListener("sessionend",pl),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,I,F),h=Pe.get(v,b.length),h.init(I),b.push(h),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Ee),x=he.get(v,w.length),x.init(),w.push(x),j.enabled===!0&&j.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&Ws(le,I,-1/0,E.sortObjects)}Ws(v,I,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(fe,ze),T=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,T&&be.addToRenderList(x,v),this.info.render.frame++,ce===!0&&ae.beginShadows();const k=h.state.shadowsArray;me.render(k,v,I),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,N=x.transmissive;if(h.setupLights(),I.isArrayCamera){const le=I.cameras;if(N.length>0)for(let ge=0,Se=le.length;ge<Se;ge++){const Te=le[ge];ml(W,N,v,Te)}T&&be.render(v);for(let ge=0,Se=le.length;ge<Se;ge++){const Te=le[ge];xl(x,v,Te,Te.viewport)}}else N.length>0&&ml(W,N,v,I),T&&be.render(v),xl(x,v,I);F!==null&&(_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(E,v,I),st.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(h=b[b.length-1],ce===!0&&ae.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function Ws(v,I,k,W){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ee.intersectsSprite(v)){W&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);const ge=V.update(v),Se=v.material;Se.visible&&x.push(v,ge,Se,k,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ee.intersectsObject(v))){const ge=V.update(v),Se=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(we)),Array.isArray(Se)){const Te=ge.groups;for(let Ie=0,Ne=Te.length;Ie<Ne;Ie++){const Ae=Te[Ie],Xe=Se[Ae.materialIndex];Xe&&Xe.visible&&x.push(v,ge,Xe,k,Fe.z,Ae)}}else Se.visible&&x.push(v,ge,Se,k,Fe.z,null)}}const le=v.children;for(let ge=0,Se=le.length;ge<Se;ge++)Ws(le[ge],I,k,W)}function xl(v,I,k,W){const N=v.opaque,le=v.transmissive,ge=v.transparent;h.setupLightsView(k),ce===!0&&ae.setGlobalState(E.clippingPlanes,k),W&&K.viewport(P.copy(W)),N.length>0&&Br(N,I,k),le.length>0&&Br(le,I,k),ge.length>0&&Br(ge,I,k),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function ml(v,I,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Si(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Ir:Dn,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const le=h.state.transmissionRenderTarget[W.id],ge=W.viewport||P;le.setSize(ge.z,ge.w);const Se=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(ne),se=E.getClearAlpha(),se<1&&E.setClearColor(16777215,.5),E.clear(),T&&be.render(k);const Te=E.toneMapping;E.toneMapping=Yn;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),ce===!0&&ae.setGlobalState(E.clippingPlanes,W),Br(v,k,W),_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ae=0,Xe=I.length;Ae<Xe;Ae++){const Ze=I[Ae],dt=Ze.object,ht=Ze.geometry,qe=Ze.material,Re=Ze.group;if(qe.side===wn&&dt.layers.test(W.layers)){const zt=qe.side;qe.side=Nt,qe.needsUpdate=!0,_l(dt,k,W,ht,qe,Re),qe.side=zt,qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le))}E.setRenderTarget(Se),E.setClearColor(ne,se),Ie!==void 0&&(W.viewport=Ie),E.toneMapping=Te}function Br(v,I,k){const W=I.isScene===!0?I.overrideMaterial:null;for(let N=0,le=v.length;N<le;N++){const ge=v[N],Se=ge.object,Te=ge.geometry,Ie=W===null?ge.material:W,Ne=ge.group;Se.layers.test(k.layers)&&_l(Se,I,k,Te,Ie,Ne)}}function _l(v,I,k,W,N,le){v.onBeforeRender(E,I,k,W,N,le),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(E,I,k,W,v,le),N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,E.renderBufferDirect(k,I,W,N,v,le),N.side=Kn,N.needsUpdate=!0,E.renderBufferDirect(k,I,W,N,v,le),N.side=wn):E.renderBufferDirect(k,I,W,N,v,le),v.onAfterRender(E,I,k,W,N,le)}function Hr(v,I,k){I.isScene!==!0&&(I=lt);const W=Y.get(v),N=h.state.lights,le=h.state.shadowsArray,ge=N.state.version,Se=ue.getParameters(v,N.state,le,I,k),Te=ue.getProgramCacheKey(Se);let Ie=W.programs;W.environment=v.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(v.isMeshStandardMaterial?A:m).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Be),Ie=new Map,W.programs=Ie);let Ne=Ie.get(Te);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===ge)return vl(v,Se),Ne}else Se.uniforms=ue.getUniforms(v),v.onBeforeCompile(Se,E),Ne=ue.acquireProgram(Se,Te),Ie.set(Te,Ne),W.uniforms=Se.uniforms;const Ae=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),vl(v,Se),W.needsLights=Lf(v),W.lightsStateVersion=ge,W.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function gl(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=Ms.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function vl(v,I){const k=Y.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Pf(v,I,k,W,N){I.isScene!==!0&&(I=lt),_.resetTextureUnits();const le=I.fog,ge=W.isMeshStandardMaterial?I.environment:null,Se=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:nr,Te=(W.isMeshStandardMaterial?A:m).get(W.envMap||ge),Ie=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color;let dt=Yn;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(dt=E.toneMapping);const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=ht!==void 0?ht.length:0,Re=Y.get(W),zt=h.state.lights;if(ce===!0&&(Ee===!0||v!==S)){const At=v===S&&W.id===y;ae.setState(W,v,At)}let Je=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==zt.state.version||Re.outputColorSpace!==Se||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==Te||W.fog===!0&&Re.fog!==le||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ae.numPlanes||Re.numIntersection!==ae.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Ne||Re.morphTargets!==Ae||Re.morphNormals!==Xe||Re.morphColors!==Ze||Re.toneMapping!==dt||Re.morphTargetsCount!==qe)&&(Je=!0):(Je=!0,Re.__version=W.version);let Zt=Re.currentProgram;Je===!0&&(Zt=Hr(W,I,N));let Ti=!1,Bt=!1,ar=!1;const ct=Zt.getUniforms(),qt=Re.uniforms;if(K.useProgram(Zt.program)&&(Ti=!0,Bt=!0,ar=!0),W.id!==y&&(y=W.id,Bt=!0),Ti||S!==v){K.buffers.depth.getReversed()?(pe.copy(v.projectionMatrix),Qp(pe),ex(pe),ct.setValue(z,"projectionMatrix",pe)):ct.setValue(z,"projectionMatrix",v.projectionMatrix),ct.setValue(z,"viewMatrix",v.matrixWorldInverse);const Lt=ct.map.cameraPosition;Lt!==void 0&&Lt.setValue(z,Le.setFromMatrixPosition(v.matrixWorld)),$.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(z,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Bt=!0,ar=!0)}if(N.isSkinnedMesh){ct.setOptional(z,N,"bindMatrix"),ct.setOptional(z,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(z,"boneTexture",At.boneTexture,_))}N.isBatchedMesh&&(ct.setOptional(z,N,"batchingTexture"),ct.setValue(z,"batchingTexture",N._matricesTexture,_),ct.setOptional(z,N,"batchingIdTexture"),ct.setValue(z,"batchingIdTexture",N._indirectTexture,_),ct.setOptional(z,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(z,"batchingColorTexture",N._colorsTexture,_));const Yt=k.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&De.update(N,k,Zt),(Bt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,ct.setValue(z,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qt.envMap.value=Te,qt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(qt.envMapIntensity.value=I.environmentIntensity),Bt&&(ct.setValue(z,"toneMappingExposure",E.toneMappingExposure),Re.needsLights&&Df(qt,ar),le&&W.fog===!0&&oe.refreshFogUniforms(qt,le),oe.refreshMaterialUniforms(qt,W,H,J,h.state.transmissionRenderTarget[v.id]),Ms.upload(z,gl(Re),qt,_)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ms.upload(z,gl(Re),qt,_),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(z,"center",N.center),ct.setValue(z,"modelViewMatrix",N.modelViewMatrix),ct.setValue(z,"normalMatrix",N.normalMatrix),ct.setValue(z,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const At=W.uniformsGroups;for(let Lt=0,Xs=At.length;Lt<Xs;Lt++){const ni=At[Lt];L.update(ni,Zt),L.bind(ni,Zt)}}return Zt}function Df(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Lf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,I,k){Y.get(v.texture).__webglTexture=I,Y.get(v.depthTexture).__webglTexture=k;const W=Y.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){const k=Y.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,k=0){F=v,D=I,C=k;let W=!0,N=null,le=!1,ge=!1;if(v){const Te=Y.get(v);if(Te.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Te.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(Te.__hasExternalTextures)_.rebindTextures(v,Y.get(v.texture).__webglTexture,Y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(Te.__boundDepthTexture!==Ae){if(Ae!==null&&Y.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Ne=Y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?N=Ne[I][k]:N=Ne[I],le=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?N=Y.get(v).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[k]:N=Ne,P.copy(v.viewport),Q.copy(v.scissor),X=v.scissorTest}else P.copy(ye).multiplyScalar(H).floor(),Q.copy(Ce).multiplyScalar(H).floor(),X=je;if(K.bindFramebuffer(z.FRAMEBUFFER,N)&&W&&K.drawBuffers(v,N),K.viewport(P),K.scissor(Q),K.setScissorTest(X),le){const Te=Y.get(v.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,k)}else if(ge){const Te=Y.get(v.texture),Ie=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.__webglTexture,k||0,Ie)}y=-1},this.readRenderTargetPixels=function(v,I,k,W,N,le,ge){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){K.bindFramebuffer(z.FRAMEBUFFER,Se);try{const Te=v.texture,Ie=Te.format,Ne=Te.type;if(!$.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-W&&k>=0&&k<=v.height-N&&z.readPixels(I,k,W,N,Oe.convert(Ie),Oe.convert(Ne),le)}finally{const Te=F!==null?Y.get(F).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,W,N,le,ge){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){const Te=v.texture,Ie=Te.format,Ne=Te.type;if(!$.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-W&&k>=0&&k<=v.height-N){K.bindFramebuffer(z.FRAMEBUFFER,Se);const Ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.bufferData(z.PIXEL_PACK_BUFFER,le.byteLength,z.STREAM_READ),z.readPixels(I,k,W,N,Oe.convert(Ie),Oe.convert(Ne),0);const Xe=F!==null?Y.get(F).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,Xe);const Ze=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Jp(z,Ze,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,le),z.deleteBuffer(Ae),z.deleteSync(Ze),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,I=null,k=0){v.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-k),N=Math.floor(v.image.width*W),le=Math.floor(v.image.height*W),ge=I!==null?I.x:0,Se=I!==null?I.y:0;_.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,k,0,0,ge,Se,N,le),K.unbindTexture()};const Uf=z.createFramebuffer(),If=z.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,W=null,N=0,le=null){v.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],I=arguments[2],le=arguments[3]||0,k=null),le===null&&(N!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let ge,Se,Te,Ie,Ne,Ae,Xe,Ze,dt;const ht=v.isCompressedTexture?v.mipmaps[le]:v.image;if(k!==null)ge=k.max.x-k.min.x,Se=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,Ie=k.min.x,Ne=k.min.y,Ae=k.isBox3?k.min.z:0;else{const Yt=Math.pow(2,-N);ge=Math.floor(ht.width*Yt),Se=Math.floor(ht.height*Yt),v.isDataArrayTexture?Te=ht.depth:v.isData3DTexture?Te=Math.floor(ht.depth*Yt):Te=1,Ie=0,Ne=0,Ae=0}W!==null?(Xe=W.x,Ze=W.y,dt=W.z):(Xe=0,Ze=0,dt=0);const qe=Oe.convert(I.format),Re=Oe.convert(I.type);let zt;I.isData3DTexture?(_.setTexture3D(I,0),zt=z.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(_.setTexture2DArray(I,0),zt=z.TEXTURE_2D_ARRAY):(_.setTexture2D(I,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,I.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=z.getParameter(z.UNPACK_ROW_LENGTH),Zt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ti=z.getParameter(z.UNPACK_SKIP_PIXELS),Bt=z.getParameter(z.UNPACK_SKIP_ROWS),ar=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ie),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ae);const ct=v.isDataArrayTexture||v.isData3DTexture,qt=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Yt=Y.get(v),At=Y.get(I),Lt=Y.get(Yt.__renderTarget),Xs=Y.get(At.__renderTarget);K.bindFramebuffer(z.READ_FRAMEBUFFER,Lt.__webglFramebuffer),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let ni=0;ni<Te;ni++)ct&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(v).__webglTexture,N,Ae+ni),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(I).__webglTexture,le,dt+ni)),z.blitFramebuffer(Ie,Ne,ge,Se,Xe,Ze,ge,Se,z.DEPTH_BUFFER_BIT,z.NEAREST);K.bindFramebuffer(z.READ_FRAMEBUFFER,null),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||Y.has(v)){const Yt=Y.get(v),At=Y.get(I);K.bindFramebuffer(z.READ_FRAMEBUFFER,Uf),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,If);for(let Lt=0;Lt<Te;Lt++)ct?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.__webglTexture,N,Ae+Lt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Yt.__webglTexture,N),qt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.__webglTexture,le,dt+Lt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,At.__webglTexture,le),N!==0?z.blitFramebuffer(Ie,Ne,ge,Se,Xe,Ze,ge,Se,z.COLOR_BUFFER_BIT,z.NEAREST):qt?z.copyTexSubImage3D(zt,le,Xe,Ze,dt+Lt,Ie,Ne,ge,Se):z.copyTexSubImage2D(zt,le,Xe,Ze,Ie,Ne,ge,Se);K.bindFramebuffer(z.READ_FRAMEBUFFER,null),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else qt?v.isDataTexture||v.isData3DTexture?z.texSubImage3D(zt,le,Xe,Ze,dt,ge,Se,Te,qe,Re,ht.data):I.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,le,Xe,Ze,dt,ge,Se,Te,qe,ht.data):z.texSubImage3D(zt,le,Xe,Ze,dt,ge,Se,Te,qe,Re,ht):v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,le,Xe,Ze,ge,Se,qe,Re,ht.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,le,Xe,Ze,ht.width,ht.height,qe,ht.data):z.texSubImage2D(z.TEXTURE_2D,le,Xe,Ze,ge,Se,qe,Re,ht);z.pixelStorei(z.UNPACK_ROW_LENGTH,Je),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Zt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ti),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ar),le===0&&I.generateMipmaps&&z.generateMipmap(zt),K.unbindTexture()},this.copyTextureToTexture3D=function(v,I,k=null,W=null,N=0){return v.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,v=arguments[2],I=arguments[3],N=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,k,W,N)},this.initRenderTarget=function(v){Y.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),K.unbindTexture()},this.resetState=function(){D=0,C=0,F=null,K.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const hl=[{characterPlacement:{x:15,z:18},name:"Achermlan le Rouge",level:[{x:0,z:0},{x:0,z:23},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:13,z:18},{x:13,z:17},{x:13,z:16},{x:14,z:16},{x:13,z:20},{x:14,z:20},{x:15,z:20},{x:16,z:20},{x:17,z:20},{x:17,z:19},{x:17,z:18},{x:17,z:17},{x:17,z:16},{x:16,z:16},{x:15,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:13,z:13},{x:12,z:13},{x:12,z:12},{x:11,z:20},{x:11,z:19},{x:11,z:18},{x:11,z:17},{x:11,z:16},{x:11,z:15},{x:10,z:14},{x:10,z:13},{x:10,z:12},{x:10,z:11},{x:11,z:10},{x:12,z:9},{x:13,z:11},{x:14,z:10},{x:14,z:9},{x:12,z:7},{x:12,z:6},{x:13,z:6},{x:14,z:6},{x:14,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:7},{x:10,z:6},{x:10,z:5},{x:10,z:4},{x:11,z:4},{x:12,z:4},{x:13,z:4},{x:14,z:4},{x:15,z:4},{x:16,z:6},{x:16,z:7},{x:16,z:8},{x:16,z:9},{x:16,z:10},{x:17,z:4},{x:16,z:4},{x:18,z:6},{x:17,z:3},{x:17,z:2},{x:6,z:11},{x:7,z:11},{x:8,z:11},{x:14,z:21},{x:16,z:22},{x:18,z:20},{x:19,z:20},{x:19,z:19},{x:19,z:18},{x:18,z:16},{x:19,z:16},{x:20,z:16},{x:18,z:15},{x:18,z:14},{x:17,z:14},{x:16,z:14},{x:18,z:13},{x:18,z:12},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:20,z:10},{x:20,z:9},{x:19,z:9},{x:18,z:9},{x:18,z:8},{x:19,z:5},{x:20,z:5},{x:21,z:5},{x:18,z:2},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:20,z:7},{x:21,z:7},{x:22,z:13},{x:21,z:13},{x:20,z:13},{x:20,z:15},{x:21,z:15},{x:11,z:22},{x:1,z:5},{x:2,z:5},{x:3,z:5},{x:3,z:6},{x:3,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:2,z:8},{x:4,z:9},{x:4,z:10},{x:4,z:11},{x:4,z:12},{x:4,z:13},{x:5,z:13},{x:6,z:13},{x:7,z:13},{x:9,z:6},{x:8,z:6},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:6,z:9},{x:2,z:3},{x:2,z:2},{x:2,z:11},{x:2,z:12},{x:2,z:13},{x:2,z:14},{x:2,z:15},{x:2,z:16},{x:3,z:16},{x:4,z:16},{x:3,z:17},{x:3,z:19},{x:2,z:18},{x:6,z:14},{x:6,z:15},{x:6,z:17},{x:6,z:16},{x:8,z:14},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:9,z:17},{x:7,z:19},{x:7,z:20},{x:6,z:21},{x:5,z:21},{x:4,z:21},{x:3,z:21},{x:3,z:22},{x:9,z:19},{x:9,z:20},{x:9,z:21},{x:9,z:22},{x:5,z:19},{x:4,z:15},{x:5,z:6},{x:5,z:5},{x:5,z:4},{x:5,z:3},{x:6,z:3},{x:7,z:3},{x:6,z:2},{x:7,z:4},{x:8,z:2},{x:9,z:2},{x:10,z:2},{x:7,z:1},{x:1,z:3},{x:3,z:2},{x:1,z:20},{x:12,z:1},{x:12,z:2},{x:13,z:2},{x:14,z:2},{x:15,z:2},{x:20,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:18,z:21},{x:17,z:12},{x:16,z:12}]},{characterPlacement:{x:10,z:11},name:"Vladeousse",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:19,z:20},{x:19,z:19},{x:19,z:21},{x:22,z:16},{x:21,z:16},{x:20,z:16},{x:20,z:14},{x:21,z:14},{x:22,z:14},{x:21,z:11},{x:19,z:11},{x:18,z:11},{x:17,z:11},{x:16,z:11},{x:16,z:13},{x:16,z:14},{x:17,z:15},{x:16,z:15},{x:20,z:13},{x:18,z:13},{x:19,z:13},{x:17,z:16},{x:17,z:18},{x:17,z:17},{x:17,z:20},{x:17,z:22},{x:15,z:20},{x:15,z:19},{x:15,z:18},{x:16,z:18},{x:14,z:20},{x:13,z:20},{x:13,z:21},{x:21,z:1},{x:21,z:2},{x:20,z:5},{x:20,z:4},{x:17,z:5},{x:18,z:5},{x:18,z:2},{x:17,z:2},{x:17,z:3},{x:1,z:2},{x:2,z:2},{x:3,z:2},{x:3,z:3},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:5,z:2},{x:5,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:5},{x:7,z:4},{x:8,z:4},{x:10,z:4},{x:11,z:4},{x:10,z:2},{x:10,z:3},{x:13,z:3},{x:12,z:4},{x:13,z:4},{x:13,z:2},{x:13,z:1},{x:11,z:2},{x:5,z:4},{x:5,z:5},{x:4,z:4},{x:1,z:7},{x:2,z:7},{x:4,z:7},{x:15,z:21},{x:1,z:21},{x:2,z:21},{x:3,z:21},{x:3,z:20},{x:4,z:8},{x:4,z:9},{x:4,z:11},{x:2,z:11},{x:3,z:11},{x:2,z:8},{x:2,z:9},{x:9,z:10},{x:9,z:12},{x:11,z:12},{x:11,z:10},{x:15,z:2},{x:14,z:2},{x:15,z:5},{x:15,z:4},{x:22,z:4},{x:21,z:7},{x:20,z:7},{x:18,z:7},{x:18,z:6},{x:15,z:6},{x:16,z:8},{x:15,z:8},{x:20,z:8},{x:20,z:9},{x:19,z:9},{x:14,z:8},{x:14,z:9},{x:14,z:10},{x:14,z:11},{x:15,z:13},{x:13,z:13},{x:12,z:13},{x:11,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:16},{x:11,z:17},{x:10,z:17},{x:9,z:17},{x:12,z:15},{x:14,z:15},{x:14,z:16},{x:14,z:17},{x:14,z:18},{x:10,z:18},{x:10,z:19},{x:11,z:20},{x:10,z:20},{x:12,z:17},{x:2,z:13},{x:1,z:13},{x:4,z:13},{x:5,z:13},{x:5,z:11},{x:5,z:12},{x:6,z:8},{x:5,z:8},{x:11,z:8},{x:10,z:8},{x:9,z:8},{x:12,z:8},{x:12,z:9},{x:12,z:10},{x:14,z:6},{x:13,z:6},{x:12,z:6},{x:9,z:6},{x:11,z:6},{x:17,z:21},{x:3,z:15},{x:2,z:15},{x:2,z:16},{x:2,z:18},{x:2,z:17},{x:3,z:18},{x:5,z:18},{x:4,z:18},{x:6,z:18},{x:6,z:17},{x:6,z:16},{x:5,z:16},{x:7,z:11},{x:6,z:13},{x:8,z:16},{x:5,z:19},{x:5,z:20},{x:7,z:19},{x:8,z:19},{x:8,z:20},{x:8,z:21},{x:7,z:21},{x:7,z:18},{x:10,z:22},{x:5,z:22},{x:7,z:14},{x:7,z:13},{x:5,z:14},{x:9,z:15},{x:13,z:22},{x:18,z:12},{x:21,z:10},{x:21,z:9},{x:21,z:22},{x:19,z:16},{x:19,z:17},{x:20,z:21},{x:14,z:12},{x:14,z:13},{x:8,z:8},{x:7,z:9},{x:7,z:8},{x:18,z:8},{x:18,z:9},{x:4,z:10},{x:11,z:15},{x:11,z:16},{x:7,z:7},{x:6,z:7},{x:7,z:6},{x:10,z:6},{x:17,z:8},{x:17,z:4},{x:20,z:2},{x:19,z:5},{x:12,z:5},{x:13,z:9},{x:7,z:10},{x:7,z:16},{x:5,z:15}]},{characterPlacement:{x:22,z:22},name:"Pierre l'Aigle",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:8,z:10},{x:7,z:10},{x:5,z:10},{x:6,z:10},{x:17,z:5},{x:17,z:7},{x:17,z:6},{x:16,z:7},{x:15,z:6},{x:14,z:5},{x:6,z:6},{x:6,z:7},{x:6,z:8},{x:7,z:8},{x:15,z:7},{x:15,z:5},{x:8,z:8},{x:9,z:8},{x:10,z:8},{x:10,z:9},{x:3,z:7},{x:1,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:3,z:12},{x:3,z:11},{x:4,z:12},{x:6,z:12},{x:5,z:12},{x:5,z:13},{x:5,z:14},{x:1,z:22},{x:3,z:22},{x:3,z:21},{x:3,z:20},{x:3,z:19},{x:1,z:20},{x:1,z:18},{x:4,z:19},{x:9,z:12},{x:10,z:12},{x:10,z:11},{x:10,z:10},{x:10,z:14},{x:11,z:8},{x:11,z:7},{x:11,z:6},{x:12,z:5},{x:11,z:5},{x:13,z:5},{x:17,z:4},{x:18,z:4},{x:19,z:4},{x:19,z:5},{x:20,z:6},{x:19,z:6},{x:21,z:6},{x:21,z:7},{x:22,z:7},{x:2,z:14},{x:3,z:14},{x:1,z:14},{x:4,z:14},{x:3,z:8},{x:5,z:8},{x:5,z:9},{x:17,z:16},{x:15,z:16},{x:21,z:22},{x:5,z:22},{x:5,z:21},{x:6,z:21},{x:8,z:21},{x:7,z:21},{x:9,z:21},{x:9,z:20},{x:11,z:21},{x:12,z:21},{x:12,z:22},{x:22,z:19},{x:21,z:21},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:19,z:19},{x:18,z:19},{x:17,z:19},{x:17,z:17},{x:18,z:18},{x:18,z:17},{x:18,z:16},{x:16,z:20},{x:16,z:19},{x:14,z:13},{x:15,z:13},{x:16,z:13},{x:16,z:12},{x:16,z:11},{x:17,z:11},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:21,z:11},{x:22,z:11},{x:13,z:19},{x:15,z:19},{x:14,z:19},{x:14,z:18},{x:13,z:18},{x:9,z:17},{x:10,z:17},{x:10,z:16},{x:9,z:16},{x:2,z:12},{x:2,z:11},{x:2,z:16},{x:3,z:16},{x:5,z:16},{x:4,z:17},{x:3,z:17},{x:5,z:17},{x:9,z:14},{x:8,z:14},{x:7,z:14},{x:13,z:16},{x:14,z:16},{x:19,z:21},{x:18,z:21},{x:18,z:22},{x:16,z:22},{x:15,z:22},{x:14,z:21},{x:14,z:22},{x:12,z:19},{x:15,z:18},{x:12,z:18},{x:9,z:19},{x:11,z:19},{x:13,z:13},{x:12,z:13},{x:12,z:14},{x:11,z:14},{x:11,z:15},{x:22,z:18},{x:22,z:16},{x:22,z:15},{x:21,z:15},{x:20,z:15},{x:20,z:14},{x:18,z:15},{x:16,z:14},{x:14,z:15},{x:18,z:13},{x:19,z:13},{x:20,z:13},{x:22,z:13},{x:11,z:17},{x:5,z:15},{x:7,z:16},{x:7,z:17},{x:6,z:17},{x:6,z:20},{x:6,z:19},{x:8,z:19},{x:12,z:11},{x:15,z:9},{x:15,z:8},{x:16,z:9},{x:17,z:9},{x:19,z:7},{x:21,z:9},{x:21,z:8},{x:19,z:9},{x:20,z:9},{x:12,z:7},{x:14,z:9},{x:14,z:7},{x:13,z:11},{x:14,z:11},{x:13,z:12},{x:12,z:9},{x:21,z:2},{x:5,z:5},{x:5,z:6},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:2,z:6},{x:2,z:2},{x:4,z:2},{x:3,z:2},{x:8,z:1},{x:8,z:2},{x:7,z:2},{x:5,z:2},{x:5,z:1},{x:5,z:4},{x:6,z:4},{x:8,z:5},{x:8,z:4},{x:7,z:4},{x:9,z:2},{x:10,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:2},{x:10,z:4},{x:10,z:5},{x:8,z:6},{x:10,z:6},{x:13,z:1},{x:18,z:2},{x:20,z:2},{x:19,z:2},{x:21,z:4},{x:22,z:4},{x:19,z:3},{x:16,z:2},{x:15,z:3},{x:15,z:2},{x:14,z:2},{x:14,z:3},{x:7,z:12}]},{characterPlacement:{x:15,z:18},name:"AraLesPaquerettes",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:2,z:2},{x:4,z:1},{x:6,z:1},{x:4,z:3},{x:2,z:4},{x:2,z:7},{x:2,z:5},{x:2,z:6},{x:4,z:4},{x:3,z:4},{x:4,z:2},{x:6,z:6},{x:4,z:7},{x:5,z:4},{x:8,z:2},{x:8,z:3},{x:8,z:4},{x:6,z:4},{x:6,z:2},{x:21,z:4},{x:22,z:2},{x:7,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:9,z:4},{x:10,z:4},{x:10,z:5},{x:2,z:23},{x:5,z:23},{x:12,z:23},{x:13,z:17},{x:16,z:20},{x:14,z:19},{x:13,z:19},{x:14,z:17},{x:14,z:16},{x:18,z:17},{x:20,z:17},{x:18,z:20},{x:19,z:20},{x:21,z:17},{x:22,z:17},{x:21,z:19},{x:21,z:20},{x:17,z:21},{x:19,z:17},{x:20,z:19},{x:17,z:17},{x:15,z:16},{x:15,z:15},{x:16,z:15},{x:18,z:16},{x:19,z:15},{x:18,z:15},{x:16,z:14},{x:16,z:21},{x:18,z:21},{x:20,z:22},{x:13,z:20},{x:13,z:21},{x:14,z:21},{x:11,z:22},{x:12,z:20},{x:11,z:20},{x:17,z:18},{x:11,z:17},{x:11,z:18},{x:9,z:21},{x:9,z:20},{x:8,z:21},{x:7,z:22},{x:9,z:19},{x:8,z:19},{x:8,z:18},{x:10,z:17},{x:8,z:16},{x:10,z:16},{x:10,z:15},{x:12,z:15},{x:11,z:15},{x:7,z:16},{x:7,z:18},{x:19,z:13},{x:18,z:13},{x:18,z:12},{x:21,z:13},{x:21,z:14},{x:21,z:15},{x:19,z:12},{x:19,z:11},{x:20,z:11},{x:21,z:10},{x:21,z:8},{x:20,z:10},{x:20,z:9},{x:22,z:8},{x:20,z:8},{x:19,z:19},{x:15,z:13},{x:16,z:13},{x:14,z:11},{x:14,z:12},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:10,z:13},{x:11,z:13},{x:14,z:13},{x:12,z:10},{x:13,z:9},{x:12,z:9},{x:14,z:9},{x:15,z:9},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:8,z:15},{x:6,z:16},{x:5,z:17},{x:5,z:16},{x:5,z:18},{x:4,z:18},{x:6,z:20},{x:5,z:20},{x:8,z:22},{x:5,z:21},{x:3,z:21},{x:4,z:21},{x:3,z:18},{x:2,z:17},{x:2,z:16},{x:2,z:21},{x:1,z:20},{x:2,z:20},{x:1,z:14},{x:3,z:14},{x:3,z:15},{x:3,z:16},{x:2,z:18},{x:8,z:13},{x:7,z:13},{x:6,z:15},{x:7,z:15},{x:5,z:14},{x:5,z:15},{x:7,z:12},{x:4,z:11},{x:6,z:11},{x:6,z:9},{x:6,z:10},{x:1,z:12},{x:3,z:13},{x:3,z:12},{x:7,z:11},{x:2,z:9},{x:3,z:9},{x:18,z:9},{x:18,z:8},{x:18,z:7},{x:17,z:7},{x:18,z:6},{x:20,z:6},{x:19,z:6},{x:19,z:4},{x:20,z:4},{x:19,z:5},{x:22,z:6},{x:21,z:2},{x:19,z:3},{x:19,z:2},{x:17,z:1},{x:18,z:4},{x:16,z:4},{x:16,z:5},{x:15,z:7},{x:15,z:6},{x:14,z:7},{x:13,z:7},{x:7,z:6},{x:8,z:6},{x:5,z:7},{x:4,z:5},{x:10,z:6},{x:10,z:8},{x:10,z:7},{x:9,z:8},{x:8,z:8},{x:8,z:7},{x:6,z:7},{x:4,z:10},{x:4,z:12},{x:1,z:10},{x:3,z:10},{x:1,z:9},{x:16,z:12},{x:9,z:11},{x:9,z:10},{x:10,z:9},{x:10,z:10},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:14,z:3},{x:14,z:2},{x:16,z:3},{x:15,z:5},{x:13,z:3},{x:11,z:7},{x:12,z:4},{x:11,z:6}]},{characterPlacement:{x:2,z:21},name:"Araklette",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:20},{x:3,z:19},{x:3,z:18},{x:3,z:17},{x:3,z:16},{x:3,z:3},{x:3,z:4},{x:3,z:5},{x:3,z:6},{x:4,z:3},{x:5,z:3},{x:7,z:3},{x:6,z:3},{x:8,z:3},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:5,z:7},{x:5,z:8},{x:3,z:8},{x:3,z:7},{x:4,z:20},{x:5,z:20},{x:7,z:20},{x:8,z:20},{x:5,z:18},{x:6,z:18},{x:7,z:18},{x:5,z:17},{x:5,z:16},{x:8,z:18},{x:8,z:17},{x:8,z:15},{x:7,z:15},{x:6,z:15},{x:5,z:15},{x:9,z:20},{x:10,z:20},{x:10,z:19},{x:10,z:18},{x:10,z:17},{x:10,z:16},{x:10,z:15},{x:10,z:13},{x:9,z:13},{x:7,z:13},{x:8,z:13},{x:6,z:13},{x:5,z:13},{x:4,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:6,z:8},{x:8,z:8},{x:8,z:7},{x:8,z:6},{x:8,z:5},{x:9,z:3},{x:10,z:3},{x:10,z:5},{x:10,z:4},{x:10,z:6},{x:10,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:10},{x:8,z:10},{x:7,z:10},{x:6,z:10},{x:5,z:10},{x:4,z:10},{x:3,z:10},{x:20,z:20},{x:19,z:20},{x:13,z:20},{x:14,z:20},{x:17,z:20},{x:18,z:20},{x:13,z:19},{x:13,z:18},{x:15,z:18},{x:16,z:18},{x:17,z:18},{x:18,z:18},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:20,z:16},{x:20,z:14},{x:20,z:15},{x:20,z:13},{x:13,z:13},{x:15,z:13},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:13,z:14},{x:13,z:16},{x:13,z:15},{x:13,z:17},{x:15,z:17},{x:16,z:15},{x:15,z:15},{x:18,z:15},{x:17,z:15},{x:18,z:17},{x:18,z:16},{x:13,z:8},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:13,z:3},{x:14,z:3},{x:17,z:3},{x:16,z:3},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:5},{x:20,z:6},{x:20,z:7},{x:20,z:9},{x:20,z:8},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:16,z:10},{x:15,z:10},{x:14,z:10},{x:15,z:5},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:8},{x:15,z:6},{x:8,z:9},{x:10,z:11},{x:11,z:10},{x:13,z:11},{x:13,z:12},{x:11,z:13},{x:12,z:13},{x:8,z:11},{x:8,z:12},{x:11,z:15},{x:15,z:14},{x:15,z:11},{x:12,z:8},{x:11,z:8},{x:14,z:8},{x:9,z:15},{x:15,z:20},{x:18,z:3},{x:15,z:3},{x:1,z:2},{x:20,z:21},{x:13,z:10},{x:21,z:21},{x:21,z:22},{x:22,z:22},{x:21,z:1},{x:21,z:2},{x:20,z:2},{x:22,z:1},{x:7,z:2},{x:10,z:1},{x:15,z:2},{x:18,z:1},{x:4,z:1},{x:6,z:2},{x:17,z:5},{x:14,z:6},{x:3,z:2},{x:3,z:1}]},{characterPlacement:{x:2,z:17},name:"KerauChane",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:21,z:19},{x:21,z:17},{x:18,z:21},{x:18,z:20},{x:20,z:17},{x:18,z:18},{x:18,z:17},{x:2,z:4},{x:2,z:3},{x:2,z:2},{x:2,z:5},{x:2,z:6},{x:2,z:7},{x:3,z:2},{x:4,z:2},{x:3,z:8},{x:2,z:8},{x:3,z:5},{x:4,z:8},{x:5,z:8},{x:4,z:5},{x:5,z:2},{x:8,z:2},{x:8,z:3},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:10,z:8},{x:11,z:7},{x:11,z:6},{x:11,z:5},{x:12,z:4},{x:12,z:3},{x:12,z:2},{x:14,z:8},{x:14,z:6},{x:14,z:7},{x:14,z:5},{x:15,z:4},{x:16,z:3},{x:15,z:3},{x:16,z:2},{x:17,z:3},{x:17,z:4},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:15,z:6},{x:16,z:6},{x:17,z:6},{x:20,z:8},{x:21,z:8},{x:21,z:7},{x:20,z:7},{x:20,z:5},{x:21,z:5},{x:21,z:4},{x:20,z:4},{x:20,z:3},{x:21,z:3},{x:21,z:2},{x:20,z:2},{x:19,z:21},{x:16,z:20},{x:16,z:18},{x:16,z:16},{x:18,z:15},{x:19,z:15},{x:20,z:15},{x:21,z:15},{x:15,z:20},{x:14,z:20},{x:13,z:20},{x:12,z:20},{x:10,z:18},{x:11,z:20},{x:10,z:20},{x:9,z:18},{x:9,z:20},{x:9,z:19},{x:14,z:18},{x:15,z:18},{x:13,z:18},{x:12,z:18},{x:18,z:19},{x:16,z:15},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:21,z:13},{x:21,z:12},{x:21,z:11},{x:21,z:10},{x:21,z:9},{x:21,z:6},{x:16,z:1},{x:18,z:9},{x:18,z:10},{x:18,z:11},{x:19,z:11},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:16,z:8},{x:15,z:10},{x:14,z:10},{x:13,z:10},{x:15,z:13},{x:13,z:13},{x:13,z:14},{x:13,z:15},{x:13,z:16},{x:12,z:16},{x:11,z:16},{x:10,z:16},{x:10,z:17},{x:12,z:17},{x:14,z:15},{x:13,z:11},{x:12,z:10},{x:11,z:10},{x:10,z:10},{x:10,z:9},{x:7,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:4},{x:7,z:5},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:8,z:9},{x:10,z:11},{x:9,z:11},{x:8,z:11},{x:7,z:11},{x:6,z:11},{x:5,z:11},{x:4,z:11},{x:4,z:10},{x:2,z:10},{x:2,z:9},{x:1,z:12},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:4,z:13},{x:6,z:6},{x:6,z:4},{x:3,z:3},{x:3,z:7},{x:5,z:9},{x:5,z:10},{x:17,z:16},{x:18,z:16},{x:12,z:13},{x:11,z:13},{x:8,z:12},{x:8,z:13},{x:8,z:14},{x:10,z:14},{x:8,z:16},{x:7,z:16},{x:5,z:16},{x:6,z:16},{x:7,z:18},{x:7,z:19},{x:7,z:20},{x:5,z:15},{x:5,z:17},{x:4,z:17},{x:4,z:18},{x:4,z:19},{x:4,z:20},{x:4,z:21},{x:6,z:21},{x:7,z:21},{x:10,z:21},{x:12,z:22},{x:14,z:21},{x:16,z:21},{x:14,z:13},{x:19,z:12},{x:21,z:14},{x:22,z:17},{x:21,z:21},{x:6,z:22},{x:6,z:14},{x:6,z:13},{x:7,z:12},{x:7,z:17},{x:2,z:16},{x:2,z:19}]},{characterPlacement:{x:4,z:22},name:"51 PR",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:1,z:23},{x:3,z:22},{x:3,z:21},{x:2,z:21},{x:1,z:19},{x:2,z:19},{x:4,z:19},{x:5,z:19},{x:5,z:20},{x:2,z:18},{x:4,z:18},{x:5,z:22},{x:7,z:20},{x:8,z:20},{x:8,z:19},{x:8,z:18},{x:7,z:18},{x:4,z:17},{x:2,z:16},{x:2,z:15},{x:2,z:14},{x:4,z:15},{x:1,z:14},{x:5,z:17},{x:5,z:15},{x:6,z:14},{x:5,z:14},{x:3,z:12},{x:2,z:12},{x:2,z:10},{x:4,z:10},{x:3,z:10},{x:5,z:10},{x:5,z:11},{x:5,z:12},{x:1,z:8},{x:2,z:8},{x:4,z:8},{x:4,z:7},{x:7,z:22},{x:9,z:20},{x:9,z:21},{x:2,z:6},{x:2,z:5},{x:3,z:5},{x:4,z:5},{x:1,z:3},{x:2,z:3},{x:2,z:1},{x:3,z:3},{x:4,z:1},{x:5,z:3},{x:6,z:3},{x:6,z:2},{x:8,z:1},{x:8,z:2},{x:8,z:3},{x:7,z:3},{x:6,z:4},{x:6,z:6},{x:6,z:8},{x:6,z:7},{x:7,z:8},{x:8,z:5},{x:8,z:8},{x:8,z:7},{x:7,z:16},{x:8,z:16},{x:8,z:15},{x:8,z:14},{x:9,z:15},{x:7,z:12},{x:7,z:11},{x:8,z:9},{x:9,z:8},{x:8,z:11},{x:10,z:5},{x:10,z:6},{x:10,z:4},{x:10,z:2},{x:11,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:3},{x:14,z:3},{x:14,z:2},{x:14,z:1},{x:11,z:8},{x:11,z:9},{x:11,z:10},{x:10,z:10},{x:12,z:8},{x:12,z:7},{x:12,z:5},{x:13,z:5},{x:14,z:7},{x:16,z:3},{x:16,z:2},{x:17,z:2},{x:17,z:1},{x:15,z:5},{x:16,z:5},{x:17,z:5},{x:18,z:4},{x:18,z:5},{x:17,z:6},{x:15,z:7},{x:17,z:8},{x:17,z:9},{x:16,z:9},{x:15,z:9},{x:14,z:8},{x:14,z:9},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:21,z:3},{x:21,z:4},{x:22,z:4},{x:20,z:4},{x:22,z:6},{x:21,z:6},{x:20,z:6},{x:20,z:7},{x:19,z:7},{x:22,z:8},{x:22,z:9},{x:21,z:9},{x:20,z:9},{x:19,z:9},{x:20,z:10},{x:22,z:11},{x:22,z:12},{x:20,z:11},{x:22,z:13},{x:21,z:13},{x:14,z:11},{x:16,z:11},{x:18,z:11},{x:13,z:11},{x:11,z:12},{x:10,z:12},{x:11,z:13},{x:10,z:13},{x:16,z:12},{x:16,z:13},{x:16,z:14},{x:15,z:13},{x:17,z:14},{x:18,z:14},{x:18,z:13},{x:13,z:13},{x:17,z:11},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:12,z:15},{x:10,z:18},{x:13,z:17},{x:13,z:18},{x:13,z:19},{x:12,z:19},{x:12,z:20},{x:11,z:20},{x:11,z:22},{x:12,z:22},{x:14,z:21},{x:14,z:22},{x:14,z:15},{x:16,z:16},{x:16,z:17},{x:15,z:17},{x:15,z:21},{x:16,z:21},{x:15,z:20},{x:15,z:19},{x:16,z:19},{x:18,z:19},{x:18,z:21},{x:19,z:21},{x:20,z:21},{x:21,z:20},{x:22,z:22},{x:20,z:20},{x:17,z:17},{x:19,z:17},{x:19,z:16},{x:21,z:16},{x:21,z:17},{x:20,z:16},{x:21,z:14},{x:20,z:14},{x:21,z:18},{x:22,z:17},{x:20,z:13}]},{characterPlacement:{x:1,z:1},name:"Ile de la Rage",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:4,z:0},{x:5,z:0},{x:6,z:0},{x:7,z:0},{x:8,z:0},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:23,z:13},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:0,z:22},{x:23,z:21},{x:7,z:12},{x:1,z:12},{x:3,z:12},{x:4,z:12},{x:2,z:12},{x:6,z:12},{x:5,z:12},{x:8,z:12},{x:9,z:12},{x:10,z:12},{x:11,z:12},{x:12,z:12},{x:13,z:12},{x:14,z:12},{x:15,z:12},{x:16,z:12},{x:17,z:12},{x:18,z:12},{x:12,z:2},{x:12,z:4},{x:12,z:5},{x:12,z:6},{x:12,z:7},{x:12,z:9},{x:12,z:10},{x:12,z:11},{x:12,z:14},{x:12,z:13},{x:12,z:15},{x:12,z:16},{x:12,z:17},{x:12,z:18},{x:12,z:21},{x:12,z:22},{x:1,z:6},{x:2,z:6},{x:3,z:6},{x:4,z:6},{x:6,z:6},{x:7,z:6},{x:8,z:6},{x:9,z:6},{x:10,z:6},{x:6,z:1},{x:6,z:2},{x:6,z:4},{x:6,z:5},{x:6,z:10},{x:6,z:11},{x:6,z:3},{x:14,z:2},{x:15,z:3},{x:17,z:5},{x:22,z:11},{x:14,z:10},{x:15,z:9},{x:16,z:8},{x:19,z:5},{x:20,z:4},{x:21,z:3},{x:20,z:9},{x:19,z:8},{x:16,z:7},{x:16,z:6},{x:16,z:5},{x:18,z:5},{x:17,z:13},{x:17,z:15},{x:17,z:16},{x:17,z:17},{x:17,z:18},{x:17,z:20},{x:17,z:21},{x:13,z:17},{x:14,z:17},{x:16,z:17},{x:18,z:17},{x:21,z:17},{x:22,z:17},{x:1,z:13},{x:3,z:15},{x:4,z:16},{x:5,z:17},{x:6,z:18},{x:8,z:20},{x:9,z:21},{x:6,z:7},{x:11,z:4},{x:10,z:4},{x:10,z:3},{x:10,z:2},{x:6,z:8},{x:5,z:8},{x:4,z:8},{x:4,z:10},{x:4,z:9},{x:1,z:8},{x:3,z:8},{x:2,z:10},{x:2,z:11},{x:3,z:5},{x:3,z:4},{x:3,z:3},{x:2,z:3},{x:4,z:3},{x:8,z:8},{x:8,z:9},{x:8,z:10},{x:9,z:9},{x:10,z:8},{x:10,z:10},{x:10,z:9},{x:11,z:6},{x:11,z:9},{x:14,z:6},{x:14,z:8},{x:15,z:8},{x:14,z:5},{x:14,z:4},{x:15,z:4},{x:13,z:10},{x:13,z:2},{x:15,z:2},{x:17,z:1},{x:7,z:2},{x:9,z:2},{x:8,z:4},{x:9,z:4},{x:7,z:1},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:18,z:3},{x:17,z:3},{x:20,z:6},{x:21,z:6},{x:21,z:4},{x:18,z:8},{x:21,z:7},{x:20,z:11},{x:21,z:11},{x:20,z:10},{x:21,z:9},{x:17,z:10},{x:18,z:10},{x:19,z:10},{x:15,z:10},{x:19,z:14},{x:19,z:15},{x:20,z:15},{x:20,z:14},{x:20,z:13},{x:19,z:16},{x:21,z:14},{x:21,z:15},{x:21,z:13},{x:22,z:23},{x:23,z:23},{x:23,z:22},{x:16,z:15},{x:15,z:15},{x:14,z:15},{x:14,z:14},{x:14,z:18},{x:14,z:19},{x:15,z:19},{x:19,z:18},{x:19,z:19},{x:19,z:20},{x:19,z:21},{x:20,z:21},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:18,z:18},{x:12,z:20},{x:13,z:21},{x:14,z:21},{x:15,z:21},{x:1,z:22},{x:3,z:20},{x:5,z:18},{x:7,z:16},{x:8,z:15},{x:9,z:14},{x:10,z:13},{x:11,z:13},{x:5,z:16},{x:7,z:18},{x:9,z:22},{x:8,z:18},{x:9,z:18},{x:10,z:18},{x:11,z:20},{x:8,z:19},{x:9,z:20},{x:10,z:16},{x:10,z:17},{x:7,z:15},{x:7,z:14},{x:9,z:13},{x:0,z:13},{x:0,z:14},{x:5,z:13},{x:5,z:14},{x:2,z:13},{x:3,z:13},{x:2,z:18},{x:2,z:19},{x:2,z:20},{x:2,z:17},{x:2,z:15},{x:4,z:18},{x:4,z:19},{x:6,z:23},{x:7,z:23},{x:5,z:23},{x:2,z:22},{x:2,z:23},{x:1,z:23},{x:3,z:22},{x:5,z:21},{x:6,z:21},{x:7,z:21},{x:3,z:23},{x:4,z:23},{x:6,z:20}]},{characterPlacement:{x:1,z:12},name:"Dans le Soleil",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:22},{x:3,z:21},{x:2,z:20},{x:3,z:20},{x:1,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:2,z:15},{x:3,z:11},{x:3,z:10},{x:3,z:9},{x:2,z:9},{x:2,z:17},{x:3,z:17},{x:3,z:18},{x:2,z:18},{x:5,z:15},{x:6,z:15},{x:5,z:14},{x:5,z:13},{x:5,z:11},{x:5,z:10},{x:5,z:9},{x:6,z:9},{x:7,z:12},{x:7,z:11},{x:7,z:13},{x:8,z:13},{x:9,z:13},{x:9,z:11},{x:8,z:11},{x:5,z:20},{x:5,z:21},{x:6,z:20},{x:5,z:17},{x:5,z:18},{x:6,z:18},{x:6,z:17},{x:7,z:15},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:8,z:18},{x:9,z:18},{x:9,z:19},{x:7,z:20},{x:7,z:21},{x:7,z:22},{x:10,z:14},{x:10,z:13},{x:10,z:15},{x:10,z:16},{x:11,z:16},{x:11,z:17},{x:11,z:18},{x:9,z:22},{x:9,z:20},{x:10,z:20},{x:11,z:22},{x:11,z:20},{x:12,z:18},{x:13,z:18},{x:13,z:19},{x:13,z:20},{x:13,z:21},{x:13,z:22},{x:4,z:7},{x:3,z:7},{x:2,z:7},{x:2,z:6},{x:1,z:4},{x:2,z:4},{x:4,z:3},{x:4,z:4},{x:4,z:5},{x:5,z:7},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:3,z:2},{x:4,z:2},{x:2,z:2},{x:7,z:1},{x:7,z:2},{x:6,z:2},{x:6,z:3},{x:7,z:3},{x:8,z:3},{x:9,z:3},{x:11,z:3},{x:8,z:5},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:6,z:7},{x:7,z:7},{x:7,z:9},{x:9,z:8},{x:9,z:9},{x:10,z:9},{x:12,z:9},{x:11,z:9},{x:12,z:3},{x:12,z:4},{x:12,z:5},{x:11,z:5},{x:11,z:6},{x:11,z:7},{x:13,z:7},{x:12,z:7},{x:10,z:1},{x:13,z:1},{x:15,z:1},{x:15,z:2},{x:15,z:3},{x:15,z:4},{x:22,z:11},{x:22,z:13},{x:21,z:13},{x:21,z:11},{x:21,z:10},{x:19,z:10},{x:19,z:14},{x:19,z:13},{x:21,z:14},{x:19,z:11},{x:18,z:11},{x:18,z:13},{x:19,z:15},{x:19,z:16},{x:19,z:17},{x:18,z:17},{x:17,z:17},{x:17,z:16},{x:17,z:15},{x:16,z:15},{x:21,z:15},{x:21,z:16},{x:21,z:17},{x:21,z:18},{x:21,z:20},{x:21,z:21},{x:20,z:21},{x:19,z:21},{x:19,z:20},{x:20,z:20},{x:18,z:18},{x:17,z:21},{x:15,z:21},{x:15,z:22},{x:16,z:21},{x:15,z:19},{x:14,z:19},{x:16,z:19},{x:19,z:18},{x:10,z:10},{x:10,z:11},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:12,z:14},{x:13,z:15},{x:13,z:16},{x:14,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:14,z:11},{x:14,z:10},{x:13,z:11},{x:16,z:13},{x:16,z:14},{x:16,z:12},{x:17,z:11},{x:16,z:11},{x:14,z:7},{x:14,z:6},{x:15,z:6},{x:16,z:6},{x:15,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:7},{x:19,z:8},{x:19,z:9},{x:19,z:7},{x:19,z:6},{x:20,z:6},{x:21,z:9},{x:21,z:8},{x:21,z:6},{x:21,z:5},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:17,z:3},{x:17,z:2},{x:19,z:4},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:1},{x:22,z:1},{x:21,z:1},{x:22,z:3},{x:20,z:5},{x:17,z:10}]},{characterPlacement:{x:17,z:18},name:"Chapel'hein",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:14,z:1},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:20,z:18},{x:21,z:19},{x:19,z:17},{x:20,z:17},{x:19,z:16},{x:19,z:15},{x:17,z:15},{x:14,z:15},{x:13,z:15},{x:17,z:17},{x:17,z:16},{x:17,z:19},{x:18,z:19},{x:18,z:21},{x:17,z:21},{x:17,z:22},{x:16,z:19},{x:15,z:21},{x:15,z:22},{x:15,z:19},{x:16,z:17},{x:14,z:18},{x:14,z:17},{x:16,z:15},{x:13,z:21},{x:13,z:20},{x:12,z:20},{x:12,z:19},{x:12,z:17},{x:13,z:17},{x:11,z:22},{x:6,z:22},{x:6,z:21},{x:7,z:20},{x:6,z:20},{x:5,z:20},{x:4,z:20},{x:4,z:21},{x:17,z:14},{x:17,z:13},{x:17,z:12},{x:16,z:12},{x:15,z:12},{x:15,z:11},{x:15,z:10},{x:15,z:9},{x:14,z:11},{x:13,z:11},{x:11,z:11},{x:13,z:10},{x:11,z:12},{x:12,z:13},{x:11,z:13},{x:10,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:15},{x:14,z:14},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:11,z:19},{x:8,z:20},{x:8,z:21},{x:9,z:21},{x:8,z:19},{x:9,z:19},{x:11,z:20},{x:1,z:2},{x:2,z:2},{x:2,z:3},{x:4,z:2},{x:4,z:1},{x:6,z:2},{x:5,z:2},{x:5,z:3},{x:4,z:4},{x:5,z:4},{x:6,z:4},{x:8,z:1},{x:8,z:2},{x:8,z:4},{x:9,z:4},{x:8,z:5},{x:13,z:3},{x:12,z:3},{x:12,z:4},{x:12,z:6},{x:11,z:4},{x:11,z:6},{x:13,z:6},{x:13,z:7},{x:13,z:8},{x:12,z:8},{x:11,z:10},{x:10,z:10},{x:9,z:7},{x:9,z:8},{x:10,z:8},{x:21,z:15},{x:21,z:17},{x:19,z:14},{x:18,z:12},{x:20,z:13},{x:20,z:12},{x:20,z:11},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:17,z:9},{x:18,z:8},{x:17,z:7},{x:18,z:7},{x:15,z:7},{x:14,z:7},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:15,z:5},{x:14,z:5},{x:15,z:3},{x:16,z:3},{x:17,z:3},{x:16,z:2},{x:6,z:18},{x:6,z:17},{x:7,z:17},{x:9,z:17},{x:2,z:21},{x:2,z:20},{x:4,z:19},{x:4,z:18},{x:3,z:18},{x:1,z:18},{x:1,z:21},{x:12,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:19,z:12},{x:14,z:12},{x:16,z:13},{x:19,z:8},{x:20,z:8},{x:20,z:7},{x:22,z:12},{x:21,z:10},{x:22,z:15},{x:22,z:21},{x:18,z:1},{x:19,z:1},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:21,z:3},{x:19,z:4},{x:19,z:5},{x:18,z:5},{x:21,z:5},{x:22,z:5},{x:22,z:7},{x:22,z:8},{x:15,z:4},{x:9,z:10},{x:11,z:8},{x:8,z:11},{x:9,z:11},{x:8,z:7},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:7,z:12},{x:6,z:12},{x:6,z:10},{x:6,z:13},{x:8,z:15},{x:7,z:15},{x:6,z:16},{x:4,z:16},{x:3,z:16},{x:3,z:15},{x:5,z:14},{x:5,z:13},{x:2,z:15},{x:1,z:15},{x:1,z:17},{x:6,z:5},{x:6,z:7},{x:5,z:7},{x:5,z:8},{x:4,z:8},{x:4,z:5},{x:3,z:5},{x:2,z:5},{x:2,z:6},{x:3,z:8},{x:3,z:6},{x:1,z:9},{x:1,z:8},{x:2,z:10},{x:4,z:10},{x:4,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:4,z:13},{x:3,z:13},{x:5,z:10}]}],hs=Ns("Home"),Yc=Ns(0),g0=Ns(!1),Rf=()=>{const n=()=>Math.floor(Math.random()*hl.length),e=s=>{const o=s??n();Yc.value=o};return{display:hs,chosenLevel:Yc,isSpeedrun:g0,triggerHome:()=>{hs.value="Home"},triggerGame:s=>{e(s),hs.value="Game"},triggerArcadeMode:()=>{hs.value="Arcade"},selectedLevel:e,choseLevel:n}};class v0{constructor(e){nt(this,"mesh");nt(this,"meshsPlacement");nt(this,"boundingBoxes");nt(this,"groundBoundingBox");nt(this,"engine");this.mesh=new It,this.meshsPlacement=[],this.boundingBoxes=[],this.engine=e,this.setEnvironment()}tick(){}setEnvironment(){this.createGround(),this.createLevelPlacement(),this.createLevel()}createBlock(e,t){const i=new Zn(1,2,1),r=new La({color:16777215}),s=new It(i,r);s.position.set(e,0,t),s.userData.typeOfBlock="obstacle";const o=new jn().setFromObject(s);this.boundingBoxes.push(o),this.mesh.add(s)}createGround(){const e=new Zn(24,.5,24),t=new La({color:16777215}),i=new It(e,t);this.groundBoundingBox=new jn().setFromObject(i),i.userData.typeOfBlock="ground",i.position.y=-.75,this.mesh.add(i)}createLevelPlacement(){hl[this.engine.layer].level.forEach(e=>{const t={x:e.x,z:e.z};this.meshsPlacement.push(t)})}createLevel(){this.meshsPlacement.forEach(e=>{this.createBlock(e.x-11.5,e.z-11.5)})}}const{isSpeedrun:z0}=Rf();class M0{constructor(e){nt(this,"mesh");nt(this,"vecteur_mouvement");nt(this,"speed");nt(this,"engine");nt(this,"boundingBox");nt(this,"light");nt(this,"collideGround");nt(this,"canMove");nt(this,"accelerate");this.collideGround=!0,this.canMove=!1,this.speed=1.5,this.mesh=new It,this.engine=e,this.createCharacter(),this.getEventMove(),this.vecteur_mouvement={x:0,y:0,z:0},this.accelerate=!1,this.boundingBox=new jn,this.light=new Px(16711680,1.8,4),this.light.position.y=1.6,this.mesh.add(this.light)}tick(){this.collideGround?(this.updateCameraPosition(),this.updateBoundingBox(),this.checkGroundCollision(),this.canMove&&this.moveCharacter()):this.finishLevel()}createCharacter(){const{x:e,z:t}=hl[this.engine.layer].characterPlacement,i=new Zn(.1,.1,.1),r=new La,s=new It(i,r);s.userData.typeOfBlock="character",this.mesh.add(s),this.mesh.position.set(e-11.5,0,t-11.5)}rotateCharacter(e){this.mesh.rotation.y-=e}getEventMove(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t=="z"&&(this.vecteur_mouvement.z=1),t=="s"&&(this.vecteur_mouvement.z=-1),t=="d"&&(this.vecteur_mouvement.x=1),t=="q"&&(this.vecteur_mouvement.x=-1)}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t==="z"&&(this.vecteur_mouvement.z=0),t==="q"&&(this.vecteur_mouvement.x=0),t==="s"&&(this.vecteur_mouvement.z=0),t==="d"&&(this.vecteur_mouvement.x=0)})}moveCharacter(){const e=this.mesh.position.clone();let t=this.mesh.position.clone();const i=new ut().extractRotation(this.engine.camera.matrix),r=new B(0,0,-1).applyMatrix4(i),s=new B(1,0,0).applyMatrix4(i);if(r.normalize(),s.normalize(),this.vecteur_mouvement.z!==0){const o=r.multiplyScalar(this.vecteur_mouvement.z*this.speed*this.engine.delta);e.add(o)}if(this.vecteur_mouvement.x!==0){const o=s.multiplyScalar(this.vecteur_mouvement.x*this.speed*this.engine.delta);e.add(o)}this.checkObstacleCollision(e)?(this.vecteur_mouvement.z!==0&&this.correctPosition(e,"z"),this.vecteur_mouvement.x!==0&&this.correctPosition(e,"x")):t.copy(e),this.mesh.position.copy(t)}checkObstacleCollision(e){const t=this.boundingBox.clone();t.translate(e.clone().sub(this.mesh.position));for(const i of this.engine.environment.boundingBoxes)if(t.intersectsBox(i))return!0;return!1}checkGroundCollision(){this.boundingBox.intersectsBox(this.engine.environment.groundBoundingBox)?this.collideGround=!0:this.collideGround=!1}correctPosition(e,t){const i=this.boundingBox.clone();i.translate(e.clone().sub(this.mesh.position));for(const r of this.engine.environment.boundingBoxes)i.intersectsBox(r)&&(t==="z"&&(this.vecteur_mouvement.z>0?e.z=Math.min(e.z,r.min.z-this.boundingBox.max.z):this.vecteur_mouvement.z<0&&(e.z=Math.max(e.z,r.max.z-this.boundingBox.min.z))),t==="x"&&(this.vecteur_mouvement.x>0?e.x=Math.min(e.x,r.min.x-this.boundingBox.max.x):this.vecteur_mouvement.x<0&&(e.x=Math.max(e.x,r.max.x-this.boundingBox.min.x))));t==="z"?this.mesh.position.z=e.z:t==="x"&&(this.mesh.position.x=e.x)}updateCameraPosition(){this.engine.camera.position.x=this.mesh.position.x,this.engine.camera.position.y=this.mesh.position.y+.2,this.engine.camera.position.z=this.mesh.position.z}updateBoundingBox(){this.boundingBox.setFromObject(this.mesh),this.boundingBox.expandByScalar(-.01)}finishLevel(){const e=new CustomEvent("finishSpeedrunLevel",{detail:"finishSpeedrunLevel"}),t=new CustomEvent("finishLevel",{detail:"finishLevel"});window.dispatchEvent(z0.value?e:t)}}const{chosenLevel:S0}=Rf();class E0{constructor(e){nt(this,"scene");nt(this,"renderer");nt(this,"camera");nt(this,"meshs");nt(this,"ref");nt(this,"pixelRatio");nt(this,"animationFrameId",null);nt(this,"mousePos");nt(this,"mouseDirection");nt(this,"character",null);nt(this,"environment",null);nt(this,"layer");nt(this,"clock");nt(this,"delta");const{width:t,height:i}=e.getBoundingClientRect();this.meshs=[],this.mousePos={x:0,y:0},this.ref=e,this.scene=new _c,this.camera=new Wt(55,t/i),this.camera.position.set(0,0,0),this.camera.lookAt(0,0,0),this.layer=S0.value,this.clock=new Ux,this.delta=0,this.mouseDirection=new B(0,0,1),this.pixelRatio=t<900?Math.min(window.devicePixelRatio,1.5):window.devicePixelRatio,this.renderer=new _0({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio);const r=window.devicePixelRatio>1;this.renderer.setSize(t,i,r),e.appendChild(this.renderer.domElement),this.setup()}tick(){this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(()=>{this.tick(),this.delta=this.clock.getDelta(),this.tickChildren()})}setup(){this.environment=new v0(this),this.character=new M0(this),this.meshs.push(this.environment,this.character),this.addChildren(),this.setView(),this.registerEventListeners(),this.tick(),setTimeout(()=>{this.character.canMove=!0},100)}restart(e){this.layer=e,this.scene=new _c,this.setup()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.environment=null,this.character=null,this.meshs=[]}addChildren(){for(let e=0;e<this.meshs.length;e++)this.scene.add(this.meshs[e].mesh)}tickChildren(){for(let e=0;e<this.meshs.length;e++)this.meshs[e].tick(this)}setView(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}moveVision(e){const i=e.movementX;this.camera.rotation.y-=i*.002}enablePointerLock(){document.body.requestPointerLock(),document.addEventListener("mousemove",e=>{this.moveVision(e)})}registerEventListeners(){window.onresize=()=>{this.setView()},window.addEventListener("mousemove",e=>{this.mousePos={x:e.clientX,y:e.clientY}})}}const y0={class:"Home"},T0=zu({__name:"Game",setup(n){let e;const t=Ns();return yu(()=>{e=new E0(t.value)}),(i,r)=>(Wu(),Xu("section",y0,[As("div",{ref_key:"scene",ref:t,class:"Scene"},null,512),As("button",{onClick:r[0]||(r[0]=s=>du(e).enablePointerLock())},"Play")]))}}),Cf=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},b0=Cf(T0,[["__scopeId","data-v-5d9b3772"]]),A0={class:"Home"},w0=zu({__name:"App",setup(n){return(e,t)=>(Wu(),Xu("div",A0,[Xn(b0)]))}}),R0=Cf(w0,[["__scopeId","data-v-2d9f5cec"]]);op(R0).mount("#app");
