var ff=Object.defineProperty;var df=(n,e,t)=>e in n?ff(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ve=(n,e,t)=>df(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function tl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},ss=[],vn=()=>{},pf=()=>!1,Yr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nl=n=>n.startsWith("onUpdate:"),wt=Object.assign,il=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mf=Object.prototype.hasOwnProperty,tt=(n,e)=>mf.call(n,e),Be=Array.isArray,rs=n=>Kr(n)==="[object Map]",Eu=n=>Kr(n)==="[object Set]",ke=n=>typeof n=="function",gt=n=>typeof n=="string",ai=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",yu=n=>(pt(n)||ke(n))&&ke(n.then)&&ke(n.catch),bu=Object.prototype.toString,Kr=n=>bu.call(n),xf=n=>Kr(n).slice(8,-1),Tu=n=>Kr(n)==="[object Object]",sl=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ls=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},gf=/-(\w)/g,ni=jr(n=>n.replace(gf,(e,t)=>t?t.toUpperCase():"")),_f=/\B([A-Z])/g,Ii=jr(n=>n.replace(_f,"-$1").toLowerCase()),Au=jr(n=>n.charAt(0).toUpperCase()+n.slice(1)),ao=jr(n=>n?`on${Au(n)}`:""),Qn=(n,e)=>!Object.is(n,e),lo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},wu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},vf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let kl;const Zr=()=>kl||(kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=gt(i)?Ef(i):rl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(gt(n)||pt(n))return n}const zf=/;(?![^(]*\))/g,Mf=/:([^]+)/,Sf=/\/\*[^]*?\*\//g;function Ef(n){const e={};return n.replace(Sf,"").split(zf).forEach(t=>{if(t){const i=t.split(Mf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Hn(n){let e="";if(gt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Hn(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=tl(yf);function Cu(n){return!!n||n===""}const Ru=n=>!!(n&&n.__v_isRef===!0),ol=n=>gt(n)?n:n==null?"":Be(n)||pt(n)&&(n.toString===bu||!ke(n.toString))?Ru(n)?ol(n.value):JSON.stringify(n,Pu,2):String(n),Pu=(n,e)=>Ru(e)?Pu(n,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[co(i,r)+" =>"]=s,t),{})}:Eu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>co(t))}:ai(e)?co(e):pt(e)&&!Be(e)&&!Tu(e)?String(e):e,co=(n,e="")=>{var t;return ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Tf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Af(){return $t}let ot;const uo=new WeakSet;class Lu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uo.has(this)&&(uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Iu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wl(this),Uu(this);const e=ot,t=un;ot=this,un=!0;try{return this.fn()}finally{Fu(this),ot=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,Wl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){na(this)&&this.run()}get dirty(){return na(this)}}let Du=0,Ds,Is;function Iu(n,e=!1){if(n.flags|=8,e){n.next=Is,Is=n;return}n.next=Ds,Ds=n}function al(){Du++}function ll(){if(--Du>0)return;if(Is){let e=Is;for(Is=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ds;){let e=Ds;for(Ds=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fu(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),cl(i),wf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function na(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Bs))return;n.globalVersion=Bs;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!na(n)){n.flags&=-3;return}const t=ot,i=un;ot=n,un=!0;try{Uu(n);const s=n.fn(n._value);(e.version===0||Qn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ot=t,un=i,Fu(n),n.flags&=-3}}function cl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)cl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Ou=[];function li(){Ou.push(un),un=!1}function ci(){const n=Ou.pop();un=n===void 0?!0:n}function Wl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let Bs=0;class Cf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!un||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new Cf(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,Bu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){al();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ll()}}}function Bu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ia=new WeakMap,wi=Symbol(""),sa=Symbol(""),Hs=Symbol("");function Tt(n,e,t){if(un&&ot){let i=ia.get(n);i||ia.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ul),s.map=i,s.key=t),s.track()}}function In(n,e,t,i,s,r){const o=ia.get(n);if(!o){Bs++;return}const a=l=>{l&&l.trigger()};if(al(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&sl(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Hs||!ai(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Hs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(wi)),rs(n)&&a(o.get(sa)));break;case"delete":l||(a(o.get(wi)),rs(n)&&a(o.get(sa)));break;case"set":rs(n)&&a(o.get(wi));break}}ll()}function Bi(n){const e=et(n);return e===n?e:(Tt(e,"iterate",Hs),hn(n)?e:e.map(Lt))}function hl(n){return Tt(n=et(n),"iterate",Hs),n}const Rf={__proto__:null,[Symbol.iterator](){return ho(this,Symbol.iterator,Lt)},concat(...n){return Bi(this).concat(...n.map(e=>Be(e)?Bi(e):e))},entries(){return ho(this,"entries",n=>(n[1]=Lt(n[1]),n))},every(n,e){return bn(this,"every",n,e,void 0,arguments)},filter(n,e){return bn(this,"filter",n,e,t=>t.map(Lt),arguments)},find(n,e){return bn(this,"find",n,e,Lt,arguments)},findIndex(n,e){return bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return bn(this,"findLast",n,e,Lt,arguments)},findLastIndex(n,e){return bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return fo(this,"includes",n)},indexOf(...n){return fo(this,"indexOf",n)},join(n){return Bi(this).join(n)},lastIndexOf(...n){return fo(this,"lastIndexOf",n)},map(n,e){return bn(this,"map",n,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...n){return Ss(this,"push",n)},reduce(n,...e){return Xl(this,"reduce",n,e)},reduceRight(n,...e){return Xl(this,"reduceRight",n,e)},shift(){return Ss(this,"shift")},some(n,e){return bn(this,"some",n,e,void 0,arguments)},splice(...n){return Ss(this,"splice",n)},toReversed(){return Bi(this).toReversed()},toSorted(n){return Bi(this).toSorted(n)},toSpliced(...n){return Bi(this).toSpliced(...n)},unshift(...n){return Ss(this,"unshift",n)},values(){return ho(this,"values",Lt)}};function ho(n,e,t){const i=hl(n),s=i[e]();return i!==n&&!hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Pf=Array.prototype;function bn(n,e,t,i,s,r){const o=hl(n),a=o!==n&&!hn(n),l=o[e];if(l!==Pf[e]){const h=l.apply(n,r);return a?Lt(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Lt(h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Xl(n,e,t,i){const s=hl(n);let r=t;return s!==n&&(hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Lt(a),l,n)}),s[e](r,...i)}function fo(n,e,t){const i=et(n);Tt(i,"iterate",Hs);const s=i[e](...t);return(s===-1||s===!1)&&ml(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function Ss(n,e,t=[]){li(),al();const i=et(n)[e].apply(n,t);return ll(),ci(),i}const Lf=tl("__proto__,__v_isRef,__isVue"),Hu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ai));function Df(n){ai(n)||(n=String(n));const e=et(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Vu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?kf:Xu:r?Wu:ku).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=Rf[t]))return l;if(t==="hasOwnProperty")return Df}const a=Reflect.get(e,t,At(e)?e:i);return(ai(t)?Hu.has(t):Lf(t))||(s||Tt(e,"get",t),r)?a:At(a)?o&&sl(t)?a:a.value:pt(a)?s?$u(a):dl(a):a}}class Gu extends Vu{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Ri(r);if(!hn(i)&&!Ri(i)&&(r=et(r),i=et(i)),!Be(e)&&At(r)&&!At(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&sl(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,At(e)?e:s);return e===et(s)&&(o?Qn(i,r)&&In(e,"set",t,i):In(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&In(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ai(t)||!Hu.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",Be(e)?"length":wi),Reflect.ownKeys(e)}}class If extends Vu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Uf=new Gu,Ff=new If,Nf=new Gu(!0);const ra=n=>n,nr=n=>Reflect.getPrototypeOf(n);function Of(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=rs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ra:e?oa:Lt;return!e&&Tt(r,"iterate",l?sa:wi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ir(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Bf(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(Qn(s,a)&&Tt(o,"get",s),Tt(o,"get",a));const{has:l}=nr(o),c=e?ra:n?oa:Lt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Tt(et(s),"iterate",wi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(Qn(s,a)&&Tt(o,"has",s),Tt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?ra:n?oa:Lt;return!n&&Tt(l,"iterate",wi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return wt(t,n?{add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear")}:{add(s){!e&&!hn(s)&&!Ri(s)&&(s=et(s));const r=et(this);return nr(r).has.call(r,s)||(r.add(s),In(r,"add",s,s)),this},set(s,r){!e&&!hn(r)&&!Ri(r)&&(r=et(r));const o=et(this),{has:a,get:l}=nr(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Qn(r,u)&&In(o,"set",s,r):In(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=nr(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&In(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&In(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Of(s,n,e)}),t}function fl(n,e){const t=Bf(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const Hf={get:fl(!1,!1)},Vf={get:fl(!1,!0)},Gf={get:fl(!0,!1)};const ku=new WeakMap,Wu=new WeakMap,Xu=new WeakMap,kf=new WeakMap;function Wf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xf(n){return n.__v_skip||!Object.isExtensible(n)?0:Wf(xf(n))}function dl(n){return Ri(n)?n:pl(n,!1,Uf,Hf,ku)}function $f(n){return pl(n,!1,Nf,Vf,Wu)}function $u(n){return pl(n,!0,Ff,Gf,Xu)}function pl(n,e,t,i,s){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Xf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Us(n){return Ri(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function ml(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function qf(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&wu(n,"__v_skip",!0),n}const Lt=n=>pt(n)?dl(n):n,oa=n=>pt(n)?$u(n):n;function At(n){return n?n.__v_isRef===!0:!1}function Jt(n){return Yf(n,!1)}function Yf(n,e){return At(n)?n:new Kf(n,e)}class Kf{constructor(e,t){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||Ri(e);e=i?e:et(e),Qn(e,t)&&(this._rawValue=e,this._value=i?e:Lt(e),this.dep.trigger())}}function Ot(n){return At(n)?n.value:n}const jf={get:(n,e,t)=>e==="__v_raw"?n:Ot(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function qu(n){return Us(n)?n:new Proxy(n,jf)}class Zf{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Iu(this,!0),!0}get value(){const e=this.dep.track();return Nu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jf(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new Zf(i,s,t)}const sr={},Or=new WeakMap;let Mi;function Qf(n,e=!1,t=Mi){if(t){let i=Or.get(t);i||Or.set(t,i=[]),i.push(n)}}function ed(n,e,t=at){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:hn(E)||s===!1||s===0?Zn(E,1):Zn(E);let u,h,d,p,_=!1,M=!1;if(At(n)?(h=()=>n.value,_=hn(n)):Us(n)?(h=()=>c(n),_=!0):Be(n)?(M=!0,_=n.some(E=>Us(E)||hn(E)),h=()=>n.map(E=>{if(At(E))return E.value;if(Us(E))return c(E);if(ke(E))return l?l(E,2):E()})):ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){li();try{d()}finally{ci()}}const E=Mi;Mi=u;try{return l?l(n,3,[p]):n(p)}finally{Mi=E}}:h=vn,e&&s){const E=h,I=s===!0?1/0:s;h=()=>Zn(E(),I)}const m=Af(),f=()=>{u.stop(),m&&m.active&&il(m.effects,u)};if(r&&e){const E=e;e=(...I)=>{E(...I),f()}}let T=M?new Array(n.length).fill(sr):sr;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(s||_||(M?I.some((L,R)=>Qn(L,T[R])):Qn(I,T))){d&&d();const L=Mi;Mi=u;try{const R=[I,T===sr?void 0:M&&T[0]===sr?[]:T,p];l?l(e,3,R):e(...R),T=I}finally{Mi=L}}}else u.run()};return a&&a(b),u=new Lu(h),u.scheduler=o?()=>o(b,!1):b,p=E=>Qf(E,!1,u),d=u.onStop=()=>{const E=Or.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Or.delete(u)}},e?i?b(!0):T=u.run():o?o(b.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Zn(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,At(n))Zn(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Zn(n[i],e,t);else if(Eu(n)||rs(n))n.forEach(i=>{Zn(i,e,t)});else if(Tu(n)){for(const i in n)Zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(n,e,t,i){try{return i?n(...i):n()}catch(s){Jr(s,e,t)}}function Sn(n,e,t,i){if(ke(n)){const s=Ys(n,e,t,i);return s&&yu(s)&&s.catch(r=>{Jr(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],e,t,i));return s}}function Jr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){li(),Ys(r,null,10,[n,l,c]),ci();return}}td(n,t,s,i,o)}function td(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Dt=[];let pn=-1;const os=[];let Kn=null,ts=0;const Yu=Promise.resolve();let Br=null;function nd(n){const e=Br||Yu;return n?e.then(this?n.bind(this):n):e}function id(n){let e=pn+1,t=Dt.length;for(;e<t;){const i=e+t>>>1,s=Dt[i],r=Vs(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function xl(n){if(!(n.flags&1)){const e=Vs(n),t=Dt[Dt.length-1];!t||!(n.flags&2)&&e>=Vs(t)?Dt.push(n):Dt.splice(id(e),0,n),n.flags|=1,Ku()}}function Ku(){Br||(Br=Yu.then(Zu))}function sd(n){Be(n)?os.push(...n):Kn&&n.id===-1?Kn.splice(ts+1,0,n):n.flags&1||(os.push(n),n.flags|=1),Ku()}function $l(n,e,t=pn+1){for(;t<Dt.length;t++){const i=Dt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Dt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ju(n){if(os.length){const e=[...new Set(os)].sort((t,i)=>Vs(t)-Vs(i));if(os.length=0,Kn){Kn.push(...e);return}for(Kn=e,ts=0;ts<Kn.length;ts++){const t=Kn[ts];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Kn=null,ts=0}}const Vs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zu(n){try{for(pn=0;pn<Dt.length;pn++){const e=Dt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Dt.length;pn++){const e=Dt[pn];e&&(e.flags&=-2)}pn=-1,Dt.length=0,ju(),Br=null,(Dt.length||os.length)&&Zu()}}let gn=null,Ju=null;function Hr(n){const e=gn;return gn=n,Ju=n&&n.type.__scopeId||null,e}function rd(n,e=gn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&tc(-1);const r=Hr(e);let o;try{o=n(...s)}finally{Hr(r),i._d&&tc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function di(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(li(),Sn(l,t,8,[n.el,a,n,e]),ci())}}const od=Symbol("_vte"),ad=n=>n.__isTeleport;function gl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,gl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ui(n,e){return ke(n)?wt({name:n.name},e,{setup:n}):n}function Qu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Vr(n,e,t,i,s=!1){if(Be(n)){n.forEach((_,M)=>Vr(_,e&&(Be(e)?e[M]:e),t,i,s));return}if(Fs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ml(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,d=et(h),p=h===at?()=>!1:_=>tt(d,_);if(c!=null&&c!==l&&(gt(c)?(u[c]=null,p(c)&&(h[c]=null)):At(c)&&(c.value=null)),ke(l))Ys(l,a,12,[o,u]);else{const _=gt(l),M=At(l);if(_||M){const m=()=>{if(n.f){const f=_?p(l)?h[l]:u[l]:l.value;s?Be(f)&&il(f,r):Be(f)?f.includes(r)||f.push(r):_?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,p(l)&&(h[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Xt(m,t)):m()}}}Zr().requestIdleCallback;Zr().cancelIdleCallback;const Fs=n=>!!n.type.__asyncLoader,eh=n=>n.type.__isKeepAlive;function ld(n,e){th(n,"a",e)}function cd(n,e){th(n,"da",e)}function th(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Qr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)eh(s.parent.vnode)&&ud(i,e,t,s),s=s.parent}}function ud(n,e,t,i){const s=Qr(e,n,i,!0);nh(()=>{il(i[e],s)},t)}function Qr(n,e,t=It,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{li();const a=Ks(t),l=Sn(e,t,n,o);return a(),ci(),l});return i?s.unshift(r):s.push(r),r}}const Gn=n=>(e,t=It)=>{(!ks||n==="sp")&&Qr(n,(...i)=>e(...i),t)},hd=Gn("bm"),_l=Gn("m"),fd=Gn("bu"),dd=Gn("u"),pd=Gn("bum"),nh=Gn("um"),md=Gn("sp"),xd=Gn("rtg"),gd=Gn("rtc");function _d(n,e=It){Qr("ec",n,e)}const vd=Symbol.for("v-ndc"),aa=n=>n?yh(n)?Ml(n):aa(n.parent):null,Ns=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>aa(n.parent),$root:n=>aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sh(n),$forceUpdate:n=>n.f||(n.f=()=>{xl(n.update)}),$nextTick:n=>n.n||(n.n=nd.bind(n.proxy)),$watch:n=>Vd.bind(n)}),po=(n,e)=>n!==at&&!n.__isScriptSetup&&tt(n,e),zd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(po(i,e))return o[e]=1,i[e];if(s!==at&&tt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,r[e];if(t!==at&&tt(t,e))return o[e]=4,t[e];la&&(o[e]=0)}}const u=Ns[e];let h,d;if(u)return e==="$attrs"&&Tt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&tt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return po(s,e)?(s[e]=t,!0):i!==at&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==at&&tt(n,o)||po(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(Ns,o)||tt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ql(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let la=!0;function Md(n){const e=sh(n),t=n.proxy,i=n.ctx;la=!1,e.beforeCreate&&Yl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:M,deactivated:m,beforeDestroy:f,beforeUnmount:T,destroyed:b,unmounted:E,render:I,renderTracked:L,renderTriggered:R,errorCaptured:N,serverPrefetch:y,expose:S,inheritAttrs:P,components:Q,directives:X,filters:ne}=e;if(c&&Sd(c,i,null),o)for(const J in o){const H=o[J];ke(H)&&(i[J]=H.bind(t))}if(s){const J=s.call(t,t);pt(J)&&(n.data=dl(J))}if(la=!0,r)for(const J in r){const H=r[J],he=ke(H)?H.bind(t,t):ke(H.get)?H.get.bind(t,t):vn,ze=!ke(H)&&ke(H.set)?H.set.bind(t):vn,ye=Th({get:he,set:ze});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Re=>ye.value=Re})}if(a)for(const J in a)ih(a[J],i,t,J);if(l){const J=ke(l)?l.call(t):l;Reflect.ownKeys(J).forEach(H=>{wd(H,J[H])})}u&&Yl(u,n,"c");function Z(J,H){Be(H)?H.forEach(he=>J(he.bind(t))):H&&J(H.bind(t))}if(Z(hd,h),Z(_l,d),Z(fd,p),Z(dd,_),Z(ld,M),Z(cd,m),Z(_d,N),Z(gd,L),Z(xd,R),Z(pd,T),Z(nh,E),Z(md,y),Be(S))if(S.length){const J=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(J,H,{get:()=>t[H],set:he=>t[H]=he})})}else n.exposed||(n.exposed={});I&&n.render===vn&&(n.render=I),P!=null&&(n.inheritAttrs=P),Q&&(n.components=Q),X&&(n.directives=X),y&&Qu(n)}function Sd(n,e,t=vn){Be(n)&&(n=ca(n));for(const i in n){const s=n[i];let r;pt(s)?"default"in s?r=wr(s.from||i,s.default,!0):r=wr(s.from||i):r=wr(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Yl(n,e,t){Sn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ih(n,e,t,i){let s=i.includes(".")?_h(t,i):()=>t[i];if(gt(n)){const r=e[n];ke(r)&&xo(s,r)}else if(ke(n))xo(s,n.bind(t));else if(pt(n))if(Be(n))n.forEach(r=>ih(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&xo(s,r,n)}}function sh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Gr(l,c,o,!0)),Gr(l,e,o)),pt(e)&&r.set(e,l),l}function Gr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Gr(n,r,t,!0),s&&s.forEach(o=>Gr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ed[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ed={data:Kl,props:jl,emits:jl,methods:Rs,computed:Rs,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Rs,directives:Rs,watch:bd,provide:Kl,inject:yd};function Kl(n,e){return e?n?function(){return wt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function yd(n,e){return Rs(ca(n),ca(e))}function ca(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?wt(Object.create(null),n,e):e}function jl(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:wt(Object.create(null),ql(n),ql(e??{})):e}function bd(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function rh(){return{app:null,config:{isNativeTag:pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Td=0;function Ad(n,e){return function(i,s=null){ke(i)||(i=wt({},i)),s!=null&&!pt(s)&&(s=null);const r=rh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Td++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:lp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...h)):ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Zt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ml(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Sn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=as;as=c;try{return u()}finally{as=h}}};return c}}let as=null;function wd(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function wr(n,e,t=!1){const i=It||gn;if(i||as){const s=as?as._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const oh={},ah=()=>Object.create(oh),lh=n=>Object.getPrototypeOf(n)===oh;function Cd(n,e,t,i=!1){const s={},r=ah();n.propsDefaults=Object.create(null),ch(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:$f(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Rd(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(eo(n.emitsOptions,d))continue;const p=e[d];if(l)if(tt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=ni(d);s[_]=ua(l,a,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{ch(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=Ii(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=ua(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!tt(e,h))&&(delete r[h],c=!0)}c&&In(n.attrs,"set","")}function ch(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ls(l))continue;const c=e[l];let u;s&&tt(s,u=ni(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:eo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||at;for(let u=0;u<r.length;u++){const h=r[u];t[h]=ua(s,l,h,c[h],n,!tt(c,h))}}return o}function ua(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ks(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const Pd=new WeakMap;function uh(n,e,t=!1){const i=t?Pd:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=h=>{l=!0;const[d,p]=uh(h,e,!0);wt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return pt(n)&&i.set(n,ss),ss;if(Be(r))for(let u=0;u<r.length;u++){const h=ni(r[u]);Zl(h)&&(o[h]=at)}else if(r)for(const u in r){const h=ni(u);if(Zl(h)){const d=r[u],p=o[h]=Be(d)||ke(d)?{type:d}:wt({},d),_=p.type;let M=!1,m=!0;if(Be(_))for(let f=0;f<_.length;++f){const T=_[f],b=ke(T)&&T.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(m=!1)}else M=ke(_)&&_.name==="Boolean";p[0]=M,p[1]=m,(M||tt(p,"default"))&&a.push(h)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Zl(n){return n[0]!=="$"&&!Ls(n)}const hh=n=>n[0]==="_"||n==="$stable",vl=n=>Be(n)?n.map(mn):[mn(n)],Ld=(n,e,t)=>{if(e._n)return e;const i=rd((...s)=>vl(e(...s)),t);return i._c=!1,i},fh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(hh(s))continue;const r=n[s];if(ke(r))e[s]=Ld(s,r,i);else if(r!=null){const o=vl(r);e[s]=()=>o}}},dh=(n,e)=>{const t=vl(e);n.slots.default=()=>t},ph=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Dd=(n,e,t)=>{const i=n.slots=ah();if(n.vnode.shapeFlag&32){const s=e._;s?(ph(i,e,t),t&&wu(i,"_",s,!0)):fh(e,i)}else e&&dh(n,e)},Id=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:ph(s,e,t):(r=!e.$stable,fh(e,s)),o=e}else e&&(dh(n,e),o={default:1});if(r)for(const a in s)!hh(a)&&o[a]==null&&delete s[a]},Xt=Yd;function Ud(n){return Fd(n)}function Fd(n,e){const t=Zr();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=vn,insertStaticContent:_}=n,M=(A,C,z,ie=null,$=null,Y=null,K=void 0,se=null,q=!!C.dynamicChildren)=>{if(A===C)return;A&&!Es(A,C)&&(ie=pe(A),Re(A,$,Y,!0),A=null),C.patchFlag===-2&&(q=!1,C.dynamicChildren=null);const{type:g,ref:x,shapeFlag:w}=C;switch(g){case to:m(A,C,z,ie);break;case Pi:f(A,C,z,ie);break;case Cr:A==null&&T(C,z,ie,K);break;case Dn:Q(A,C,z,ie,$,Y,K,se,q);break;default:w&1?I(A,C,z,ie,$,Y,K,se,q):w&6?X(A,C,z,ie,$,Y,K,se,q):(w&64||w&128)&&g.process(A,C,z,ie,$,Y,K,se,q,Ne)}x!=null&&$&&Vr(x,A&&A.ref,Y,C||A,!C)},m=(A,C,z,ie)=>{if(A==null)i(C.el=a(C.children),z,ie);else{const $=C.el=A.el;C.children!==A.children&&c($,C.children)}},f=(A,C,z,ie)=>{A==null?i(C.el=l(C.children||""),z,ie):C.el=A.el},T=(A,C,z,ie)=>{[A.el,A.anchor]=_(A.children,C,z,ie,A.el,A.anchor)},b=({el:A,anchor:C},z,ie)=>{let $;for(;A&&A!==C;)$=d(A),i(A,z,ie),A=$;i(C,z,ie)},E=({el:A,anchor:C})=>{let z;for(;A&&A!==C;)z=d(A),s(A),A=z;s(C)},I=(A,C,z,ie,$,Y,K,se,q)=>{C.type==="svg"?K="svg":C.type==="math"&&(K="mathml"),A==null?L(C,z,ie,$,Y,K,se,q):y(A,C,$,Y,K,se,q)},L=(A,C,z,ie,$,Y,K,se)=>{let q,g;const{props:x,shapeFlag:w,transition:O,dirs:G}=A;if(q=A.el=o(A.type,Y,x&&x.is,x),w&8?u(q,A.children):w&16&&N(A.children,q,null,ie,$,mo(A,Y),K,se),G&&di(A,null,ie,"created"),R(q,A,A.scopeId,K,ie),x){for(const ue in x)ue!=="value"&&!Ls(ue)&&r(q,ue,null,x[ue],Y,ie);"value"in x&&r(q,"value",null,x.value,Y),(g=x.onVnodeBeforeMount)&&dn(g,ie,A)}G&&di(A,null,ie,"beforeMount");const V=Nd($,O);V&&O.beforeEnter(q),i(q,C,z),((g=x&&x.onVnodeMounted)||V||G)&&Xt(()=>{g&&dn(g,ie,A),V&&O.enter(q),G&&di(A,null,ie,"mounted")},$)},R=(A,C,z,ie,$)=>{if(z&&p(A,z),ie)for(let Y=0;Y<ie.length;Y++)p(A,ie[Y]);if($){let Y=$.subTree;if(C===Y||zh(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const K=$.vnode;R(A,K,K.scopeId,K.slotScopeIds,$.parent)}}},N=(A,C,z,ie,$,Y,K,se,q=0)=>{for(let g=q;g<A.length;g++){const x=A[g]=se?jn(A[g]):mn(A[g]);M(null,x,C,z,ie,$,Y,K,se)}},y=(A,C,z,ie,$,Y,K)=>{const se=C.el=A.el;let{patchFlag:q,dynamicChildren:g,dirs:x}=C;q|=A.patchFlag&16;const w=A.props||at,O=C.props||at;let G;if(z&&pi(z,!1),(G=O.onVnodeBeforeUpdate)&&dn(G,z,C,A),x&&di(C,A,z,"beforeUpdate"),z&&pi(z,!0),(w.innerHTML&&O.innerHTML==null||w.textContent&&O.textContent==null)&&u(se,""),g?S(A.dynamicChildren,g,se,z,ie,mo(C,$),Y):K||H(A,C,se,null,z,ie,mo(C,$),Y,!1),q>0){if(q&16)P(se,w,O,z,$);else if(q&2&&w.class!==O.class&&r(se,"class",null,O.class,$),q&4&&r(se,"style",w.style,O.style,$),q&8){const V=C.dynamicProps;for(let ue=0;ue<V.length;ue++){const oe=V[ue],fe=w[oe],Pe=O[oe];(Pe!==fe||oe==="value")&&r(se,oe,fe,Pe,$,z)}}q&1&&A.children!==C.children&&u(se,C.children)}else!K&&g==null&&P(se,w,O,z,$);((G=O.onVnodeUpdated)||x)&&Xt(()=>{G&&dn(G,z,C,A),x&&di(C,A,z,"updated")},ie)},S=(A,C,z,ie,$,Y,K)=>{for(let se=0;se<C.length;se++){const q=A[se],g=C[se],x=q.el&&(q.type===Dn||!Es(q,g)||q.shapeFlag&70)?h(q.el):z;M(q,g,x,null,ie,$,Y,K,!0)}},P=(A,C,z,ie,$)=>{if(C!==z){if(C!==at)for(const Y in C)!Ls(Y)&&!(Y in z)&&r(A,Y,C[Y],null,$,ie);for(const Y in z){if(Ls(Y))continue;const K=z[Y],se=C[Y];K!==se&&Y!=="value"&&r(A,Y,se,K,$,ie)}"value"in z&&r(A,"value",C.value,z.value,$)}},Q=(A,C,z,ie,$,Y,K,se,q)=>{const g=C.el=A?A.el:a(""),x=C.anchor=A?A.anchor:a("");let{patchFlag:w,dynamicChildren:O,slotScopeIds:G}=C;G&&(se=se?se.concat(G):G),A==null?(i(g,z,ie),i(x,z,ie),N(C.children||[],z,x,$,Y,K,se,q)):w>0&&w&64&&O&&A.dynamicChildren?(S(A.dynamicChildren,O,z,$,Y,K,se),(C.key!=null||$&&C===$.subTree)&&mh(A,C,!0)):H(A,C,z,x,$,Y,K,se,q)},X=(A,C,z,ie,$,Y,K,se,q)=>{C.slotScopeIds=se,A==null?C.shapeFlag&512?$.ctx.activate(C,z,ie,K,q):ne(C,z,ie,$,Y,K,q):re(A,C,q)},ne=(A,C,z,ie,$,Y,K)=>{const se=A.component=np(A,ie,$);if(eh(A)&&(se.ctx.renderer=Ne),ip(se,!1,K),se.asyncDep){if($&&$.registerDep(se,Z,K),!A.el){const q=se.subTree=Zt(Pi);f(null,q,C,z)}}else Z(se,A,C,z,$,Y,K)},re=(A,C,z)=>{const ie=C.component=A.component;if($d(A,C,z))if(ie.asyncDep&&!ie.asyncResolved){J(ie,C,z);return}else ie.next=C,ie.update();else C.el=A.el,ie.vnode=C},Z=(A,C,z,ie,$,Y,K)=>{const se=()=>{if(A.isMounted){let{next:w,bu:O,u:G,parent:V,vnode:ue}=A;{const xe=xh(A);if(xe){w&&(w.el=ue.el,J(A,w,K)),xe.asyncDep.then(()=>{A.isUnmounted||se()});return}}let oe=w,fe;pi(A,!1),w?(w.el=ue.el,J(A,w,K)):w=ue,O&&lo(O),(fe=w.props&&w.props.onVnodeBeforeUpdate)&&dn(fe,V,w,ue),pi(A,!0);const Pe=Ql(A),ae=A.subTree;A.subTree=Pe,M(ae,Pe,h(ae.el),pe(ae),A,$,Y),w.el=Pe.el,oe===null&&qd(A,Pe.el),G&&Xt(G,$),(fe=w.props&&w.props.onVnodeUpdated)&&Xt(()=>dn(fe,V,w,ue),$)}else{let w;const{el:O,props:G}=C,{bm:V,m:ue,parent:oe,root:fe,type:Pe}=A,ae=Fs(C);pi(A,!1),V&&lo(V),!ae&&(w=G&&G.onVnodeBeforeMount)&&dn(w,oe,C),pi(A,!0);{fe.ce&&fe.ce._injectChildStyle(Pe);const xe=A.subTree=Ql(A);M(null,xe,z,ie,A,$,Y),C.el=xe.el}if(ue&&Xt(ue,$),!ae&&(w=G&&G.onVnodeMounted)){const xe=C;Xt(()=>dn(w,oe,xe),$)}(C.shapeFlag&256||oe&&Fs(oe.vnode)&&oe.vnode.shapeFlag&256)&&A.a&&Xt(A.a,$),A.isMounted=!0,C=z=ie=null}};A.scope.on();const q=A.effect=new Lu(se);A.scope.off();const g=A.update=q.run.bind(q),x=A.job=q.runIfDirty.bind(q);x.i=A,x.id=A.uid,q.scheduler=()=>xl(x),pi(A,!0),g()},J=(A,C,z)=>{C.component=A;const ie=A.vnode.props;A.vnode=C,A.next=null,Rd(A,C.props,ie,z),Id(A,C.children,z),li(),$l(A),ci()},H=(A,C,z,ie,$,Y,K,se,q=!1)=>{const g=A&&A.children,x=A?A.shapeFlag:0,w=C.children,{patchFlag:O,shapeFlag:G}=C;if(O>0){if(O&128){ze(g,w,z,ie,$,Y,K,se,q);return}else if(O&256){he(g,w,z,ie,$,Y,K,se,q);return}}G&8?(x&16&&Ee(g,$,Y),w!==g&&u(z,w)):x&16?G&16?ze(g,w,z,ie,$,Y,K,se,q):Ee(g,$,Y,!0):(x&8&&u(z,""),G&16&&N(w,z,ie,$,Y,K,se,q))},he=(A,C,z,ie,$,Y,K,se,q)=>{A=A||ss,C=C||ss;const g=A.length,x=C.length,w=Math.min(g,x);let O;for(O=0;O<w;O++){const G=C[O]=q?jn(C[O]):mn(C[O]);M(A[O],G,z,null,$,Y,K,se,q)}g>x?Ee(A,$,Y,!0,!1,w):N(C,z,ie,$,Y,K,se,q,w)},ze=(A,C,z,ie,$,Y,K,se,q)=>{let g=0;const x=C.length;let w=A.length-1,O=x-1;for(;g<=w&&g<=O;){const G=A[g],V=C[g]=q?jn(C[g]):mn(C[g]);if(Es(G,V))M(G,V,z,null,$,Y,K,se,q);else break;g++}for(;g<=w&&g<=O;){const G=A[w],V=C[O]=q?jn(C[O]):mn(C[O]);if(Es(G,V))M(G,V,z,null,$,Y,K,se,q);else break;w--,O--}if(g>w){if(g<=O){const G=O+1,V=G<x?C[G].el:ie;for(;g<=O;)M(null,C[g]=q?jn(C[g]):mn(C[g]),z,V,$,Y,K,se,q),g++}}else if(g>O)for(;g<=w;)Re(A[g],$,Y,!0),g++;else{const G=g,V=g,ue=new Map;for(g=V;g<=O;g++){const de=C[g]=q?jn(C[g]):mn(C[g]);de.key!=null&&ue.set(de.key,g)}let oe,fe=0;const Pe=O-V+1;let ae=!1,xe=0;const Te=new Array(Pe);for(g=0;g<Pe;g++)Te[g]=0;for(g=G;g<=w;g++){const de=A[g];if(fe>=Pe){Re(de,$,Y,!0);continue}let Ie;if(de.key!=null)Ie=ue.get(de.key);else for(oe=V;oe<=O;oe++)if(Te[oe-V]===0&&Es(de,C[oe])){Ie=oe;break}Ie===void 0?Re(de,$,Y,!0):(Te[Ie-V]=g+1,Ie>=xe?xe=Ie:ae=!0,M(de,C[Ie],z,null,$,Y,K,se,q),fe++)}const Le=ae?Od(Te):ss;for(oe=Le.length-1,g=Pe-1;g>=0;g--){const de=V+g,Ie=C[de],Oe=de+1<x?C[de+1].el:ie;Te[g]===0?M(null,Ie,z,Oe,$,Y,K,se,q):ae&&(oe<0||g!==Le[oe]?ye(Ie,z,Oe,2):oe--)}}},ye=(A,C,z,ie,$=null)=>{const{el:Y,type:K,transition:se,children:q,shapeFlag:g}=A;if(g&6){ye(A.component.subTree,C,z,ie);return}if(g&128){A.suspense.move(C,z,ie);return}if(g&64){K.move(A,C,z,Ne);return}if(K===Dn){i(Y,C,z);for(let w=0;w<q.length;w++)ye(q[w],C,z,ie);i(A.anchor,C,z);return}if(K===Cr){b(A,C,z);return}if(ie!==2&&g&1&&se)if(ie===0)se.beforeEnter(Y),i(Y,C,z),Xt(()=>se.enter(Y),$);else{const{leave:w,delayLeave:O,afterLeave:G}=se,V=()=>i(Y,C,z),ue=()=>{w(Y,()=>{V(),G&&G()})};O?O(Y,V,ue):ue()}else i(Y,C,z)},Re=(A,C,z,ie=!1,$=!1)=>{const{type:Y,props:K,ref:se,children:q,dynamicChildren:g,shapeFlag:x,patchFlag:w,dirs:O,cacheIndex:G}=A;if(w===-2&&($=!1),se!=null&&Vr(se,null,z,A,!0),G!=null&&(C.renderCache[G]=void 0),x&256){C.ctx.deactivate(A);return}const V=x&1&&O,ue=!Fs(A);let oe;if(ue&&(oe=K&&K.onVnodeBeforeUnmount)&&dn(oe,C,A),x&6)ce(A.component,z,ie);else{if(x&128){A.suspense.unmount(z,ie);return}V&&di(A,null,C,"beforeUnmount"),x&64?A.type.remove(A,C,z,Ne,ie):g&&!g.hasOnce&&(Y!==Dn||w>0&&w&64)?Ee(g,C,z,!1,!0):(Y===Dn&&w&384||!$&&x&16)&&Ee(q,C,z),ie&&Ze(A)}(ue&&(oe=K&&K.onVnodeUnmounted)||V)&&Xt(()=>{oe&&dn(oe,C,A),V&&di(A,null,C,"unmounted")},z)},Ze=A=>{const{type:C,el:z,anchor:ie,transition:$}=A;if(C===Dn){ee(z,ie);return}if(C===Cr){E(A);return}const Y=()=>{s(z),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:se}=$,q=()=>K(z,Y);se?se(A.el,Y,q):q()}else Y()},ee=(A,C)=>{let z;for(;A!==C;)z=d(A),s(A),A=z;s(C)},ce=(A,C,z)=>{const{bum:ie,scope:$,job:Y,subTree:K,um:se,m:q,a:g}=A;Jl(q),Jl(g),ie&&lo(ie),$.stop(),Y&&(Y.flags|=8,Re(K,A,C,z)),se&&Xt(se,C),Xt(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Ee=(A,C,z,ie=!1,$=!1,Y=0)=>{for(let K=Y;K<A.length;K++)Re(A[K],C,z,ie,$)},pe=A=>{if(A.shapeFlag&6)return pe(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),z=C&&C[od];return z?d(z):C};let we=!1;const De=(A,C,z)=>{A==null?C._vnode&&Re(C._vnode,null,null,!0):M(C._vnode||null,A,C,null,null,null,z),C._vnode=A,we||(we=!0,$l(),ju(),we=!1)},Ne={p:M,um:Re,m:ye,r:Ze,mt:ne,mc:N,pc:H,pbc:S,n:pe,o:n};return{render:De,hydrate:void 0,createApp:Ad(De)}}function mo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Nd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function mh(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=jn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&mh(o,a)),a.type===to&&(a.el=o.el)}}function Od(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function xh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xh(e)}function Jl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Bd=Symbol.for("v-scx"),Hd=()=>wr(Bd);function xo(n,e,t){return gh(n,e,t)}function gh(n,e,t=at){const{immediate:i,deep:s,flush:r,once:o}=t,a=wt({},t),l=e&&i||!e&&r!=="post";let c;if(ks){if(r==="sync"){const p=Hd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=vn,p.resume=vn,p.pause=vn,p}}const u=It;a.call=(p,_,M)=>Sn(p,u,_,M);let h=!1;r==="post"?a.scheduler=p=>{Xt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():xl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=ed(n,e,a);return ks&&(c?c.push(d):l&&d()),d}function Vd(n,e,t){const i=this.proxy,s=gt(n)?n.includes(".")?_h(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=Ks(this),a=gh(s,r.bind(i),t);return o(),a}function _h(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Gd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function kd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let s=t;const r=e.startsWith("update:"),o=r&&Gd(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>gt(u)?u.trim():u)),o.number&&(s=t.map(vf)));let a,l=i[a=ao(e)]||i[a=ao(ni(e))];!l&&r&&(l=i[a=ao(Ii(e))]),l&&Sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,s)}}function vh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=vh(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(pt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):wt(o,r),pt(n)&&i.set(n,o),o)}function eo(n,e){return!n||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Ii(e))||tt(n,e))}function Ql(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:M}=n,m=Hr(n);let f,T;try{if(t.shapeFlag&4){const E=s||i,I=E;f=mn(c.call(I,E,u,h,p,d,_)),T=a}else{const E=e;f=mn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),T=e.props?a:Wd(a)}}catch(E){Os.length=0,Jr(E,n,1),f=Zt(Pi)}let b=f;if(T&&M!==!1){const E=Object.keys(T),{shapeFlag:I}=b;E.length&&I&7&&(r&&E.some(nl)&&(T=Xd(T,r)),b=hs(b,T,!1,!0))}return t.dirs&&(b=hs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&gl(b,t.transition),f=b,Hr(m),f}const Wd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yr(t))&&((e||(e={}))[t]=n[t]);return e},Xd=(n,e)=>{const t={};for(const i in n)(!nl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $d(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ec(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!eo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ec(i,o,c):!0:!!o;return!1}function ec(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!eo(t,r))return!0}return!1}function qd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const zh=n=>n.__isSuspense;function Yd(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):sd(n)}const Dn=Symbol.for("v-fgt"),to=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),Os=[];let jt=null;function St(n=!1){Os.push(jt=n?null:[])}function Kd(){Os.pop(),jt=Os[Os.length-1]||null}let Gs=1;function tc(n,e=!1){Gs+=n,n<0&&jt&&e&&(jt.hasOnce=!0)}function Mh(n){return n.dynamicChildren=Gs>0?jt||ss:null,Kd(),Gs>0&&jt&&jt.push(n),n}function Kt(n,e,t,i,s,r){return Mh(dt(n,e,t,i,s,r,!0))}function kr(n,e,t,i,s){return Mh(Zt(n,e,t,i,s,!0))}function Sh(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const Eh=({key:n})=>n??null,Rr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||At(n)||ke(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,i=0,s=null,r=n===Dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Eh(e),ref:e&&Rr(e),scopeId:Ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return a?(zl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Gs>0&&!o&&jt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jt.push(l),l}const Zt=jd;function jd(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===vd)&&(n=Pi),Sh(n)){const a=hs(n,e,!0);return t&&zl(a,t),Gs>0&&!r&&jt&&(a.shapeFlag&6?jt[jt.indexOf(n)]=a:jt.push(a)),a.patchFlag=-2,a}if(ap(n)&&(n=n.__vccOpts),e){e=Zd(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=Hn(a)),pt(l)&&(ml(l)&&!Be(l)&&(l=wt({},l)),e.style=rl(l))}const o=gt(n)?1:zh(n)?128:ad(n)?64:pt(n)?4:ke(n)?2:0;return dt(n,e,t,i,s,o,r,!0)}function Zd(n){return n?ml(n)||lh(n)?wt({},n):n:null}function hs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Qd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Eh(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Rr(e)):[r,Rr(e)]:Rr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hs(n.ssContent),ssFallback:n.ssFallback&&hs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&gl(u,l.clone(u)),u}function Jd(n=" ",e=0){return Zt(to,null,n,e)}function Wr(n,e){const t=Zt(Cr,null,n);return t.staticCount=e,t}function Fn(n="",e=!1){return e?(St(),kr(Pi,null,n)):Zt(Pi,null,n)}function mn(n){return n==null||typeof n=="boolean"?Zt(Pi):Be(n)?Zt(Dn,null,n.slice()):Sh(n)?jn(n):Zt(to,null,String(n))}function jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hs(n)}function zl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!lh(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[Jd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Hn([e.class,i.class]));else if(s==="style")e.style=rl([e.style,i.style]);else if(Yr(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function dn(n,e,t,i=null){Sn(n,e,7,[t,i])}const ep=rh();let tp=0;function np(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ep,r={uid:tp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(i,s),emitsOptions:vh(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=kd.bind(null,r),n.ce&&n.ce(r),r}let It=null,Xr,ha;{const n=Zr(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xr=e("__VUE_INSTANCE_SETTERS__",t=>It=t),ha=e("__VUE_SSR_SETTERS__",t=>ks=t)}const Ks=n=>{const e=It;return Xr(n),n.scope.on(),()=>{n.scope.off(),Xr(e)}},nc=()=>{It&&It.scope.off(),Xr(null)};function yh(n){return n.vnode.shapeFlag&4}let ks=!1;function ip(n,e=!1,t=!1){e&&ha(e);const{props:i,children:s}=n.vnode,r=yh(n);Cd(n,i,r,e),Dd(n,s,t);const o=r?sp(n,e):void 0;return e&&ha(!1),o}function sp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zd);const{setup:i}=t;if(i){li();const s=n.setupContext=i.length>1?op(n):null,r=Ks(n),o=Ys(i,n,0,[n.props,s]),a=yu(o);if(ci(),r(),(a||n.sp)&&!Fs(n)&&Qu(n),a){if(o.then(nc,nc),e)return o.then(l=>{ic(n,l)}).catch(l=>{Jr(l,n,0)});n.asyncDep=o}else ic(n,o)}else bh(n)}function ic(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=qu(e)),bh(n)}function bh(n,e,t){const i=n.type;n.render||(n.render=i.render||vn);{const s=Ks(n);li();try{Md(n)}finally{ci(),s()}}}const rp={get(n,e){return Tt(n,"get",""),n[e]}};function op(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,rp),slots:n.slots,emit:n.emit,expose:e}}function Ml(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qu(qf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ns)return Ns[t](n)},has(e,t){return t in e||t in Ns}})):n.proxy}function ap(n){return ke(n)&&"__vccOpts"in n}const Th=(n,e)=>Jf(n,e,ks),lp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fa;const sc=typeof window<"u"&&window.trustedTypes;if(sc)try{fa=sc.createPolicy("vue",{createHTML:n=>n})}catch{}const Ah=fa?n=>fa.createHTML(n):n=>n,cp="http://www.w3.org/2000/svg",up="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,rc=Ln&&Ln.createElement("template"),hp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ln.createElementNS(cp,n):e==="mathml"?Ln.createElementNS(up,n):t?Ln.createElement(n,{is:t}):Ln.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ln.createTextNode(n),createComment:n=>Ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{rc.innerHTML=Ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=rc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fp=Symbol("_vtc");function dp(n,e,t){const i=n[fp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const oc=Symbol("_vod"),pp=Symbol("_vsh"),mp=Symbol(""),xp=/(^|;)\s*display\s*:/;function gp(n,e,t){const i=n.style,s=gt(t);let r=!1;if(t&&!s){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Pr(i,a,"")}else for(const o in e)t[o]==null&&Pr(i,o,"");for(const o in t)o==="display"&&(r=!0),Pr(i,o,t[o])}else if(s){if(e!==t){const o=i[mp];o&&(t+=";"+o),i.cssText=t,r=xp.test(t)}}else e&&n.removeAttribute("style");oc in n&&(n[oc]=r?i.display:"",n[pp]&&(i.display="none"))}const ac=/\s*!important$/;function Pr(n,e,t){if(Be(t))t.forEach(i=>Pr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_p(n,e);ac.test(t)?n.setProperty(Ii(i),t.replace(ac,""),"important"):n[i]=t}}const lc=["Webkit","Moz","ms"],go={};function _p(n,e){const t=go[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return go[e]=i;i=Au(i);for(let s=0;s<lc.length;s++){const r=lc[s]+i;if(r in n)return go[e]=r}return e}const cc="http://www.w3.org/1999/xlink";function uc(n,e,t,i,s,r=bf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(cc,e.slice(6,e.length)):n.setAttributeNS(cc,e,t):t==null||r&&!Cu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ai(t)?String(t):t)}function hc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ah(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function vp(n,e,t,i){n.addEventListener(e,t,i)}function zp(n,e,t,i){n.removeEventListener(e,t,i)}const fc=Symbol("_vei");function Mp(n,e,t,i,s=null){const r=n[fc]||(n[fc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Sp(e);if(i){const c=r[e]=bp(i,s);vp(n,a,c,l)}else o&&(zp(n,a,o,l),r[e]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function Sp(n){let e;if(dc.test(n)){e={};let i;for(;i=n.match(dc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let _o=0;const Ep=Promise.resolve(),yp=()=>_o||(Ep.then(()=>_o=0),_o=Date.now());function bp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Sn(Tp(i,t.value),e,5,[i])};return t.value=n,t.attached=yp(),t}function Tp(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const pc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ap=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?dp(n,i,o):e==="style"?gp(n,t,i):Yr(e)?nl(e)||Mp(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wp(n,e,i,o))?(hc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uc(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gt(i))?hc(n,ni(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),uc(n,e,i,o))};function wp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&pc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pc(e)&&gt(t)?!1:e in n}const Cp=wt({patchProp:Ap},hp);let mc;function Rp(){return mc||(mc=Ud(Cp))}const Pp=(...n)=>{const e=Rp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Dp(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Lp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Lp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Dp(n){return gt(n)?document.querySelector(n):n}const Sl=[{characterPlacement:{x:15,z:18},name:"Achermlan le Rouge",level:[{x:0,z:0},{x:0,z:23},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:13,z:18},{x:13,z:17},{x:13,z:16},{x:14,z:16},{x:13,z:20},{x:14,z:20},{x:15,z:20},{x:16,z:20},{x:17,z:20},{x:17,z:19},{x:17,z:18},{x:17,z:17},{x:17,z:16},{x:16,z:16},{x:15,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:13,z:13},{x:12,z:13},{x:12,z:12},{x:11,z:20},{x:11,z:19},{x:11,z:18},{x:11,z:17},{x:11,z:16},{x:11,z:15},{x:10,z:14},{x:10,z:13},{x:10,z:12},{x:10,z:11},{x:11,z:10},{x:12,z:9},{x:13,z:11},{x:14,z:10},{x:14,z:9},{x:12,z:7},{x:12,z:6},{x:13,z:6},{x:14,z:6},{x:14,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:7},{x:10,z:6},{x:10,z:5},{x:10,z:4},{x:11,z:4},{x:12,z:4},{x:13,z:4},{x:14,z:4},{x:15,z:4},{x:16,z:6},{x:16,z:7},{x:16,z:8},{x:16,z:9},{x:16,z:10},{x:17,z:4},{x:16,z:4},{x:18,z:6},{x:17,z:3},{x:17,z:2},{x:6,z:11},{x:7,z:11},{x:8,z:11},{x:14,z:21},{x:16,z:22},{x:18,z:20},{x:19,z:20},{x:19,z:19},{x:19,z:18},{x:18,z:16},{x:19,z:16},{x:20,z:16},{x:18,z:15},{x:18,z:14},{x:17,z:14},{x:16,z:14},{x:18,z:13},{x:18,z:12},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:20,z:10},{x:20,z:9},{x:19,z:9},{x:18,z:9},{x:18,z:8},{x:19,z:5},{x:20,z:5},{x:21,z:5},{x:18,z:2},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:20,z:7},{x:21,z:7},{x:22,z:13},{x:21,z:13},{x:20,z:13},{x:20,z:15},{x:21,z:15},{x:11,z:22},{x:1,z:5},{x:2,z:5},{x:3,z:5},{x:3,z:6},{x:3,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:2,z:8},{x:4,z:9},{x:4,z:10},{x:4,z:11},{x:4,z:12},{x:4,z:13},{x:5,z:13},{x:6,z:13},{x:7,z:13},{x:9,z:6},{x:8,z:6},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:6,z:9},{x:2,z:3},{x:2,z:2},{x:2,z:11},{x:2,z:12},{x:2,z:13},{x:2,z:14},{x:2,z:15},{x:2,z:16},{x:3,z:16},{x:4,z:16},{x:3,z:17},{x:3,z:19},{x:2,z:18},{x:6,z:14},{x:6,z:15},{x:6,z:17},{x:6,z:16},{x:8,z:14},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:9,z:17},{x:7,z:19},{x:7,z:20},{x:6,z:21},{x:5,z:21},{x:4,z:21},{x:3,z:21},{x:3,z:22},{x:9,z:19},{x:9,z:20},{x:9,z:21},{x:9,z:22},{x:5,z:19},{x:4,z:15},{x:5,z:6},{x:5,z:5},{x:5,z:4},{x:5,z:3},{x:6,z:3},{x:7,z:3},{x:6,z:2},{x:7,z:4},{x:8,z:2},{x:9,z:2},{x:10,z:2},{x:7,z:1},{x:1,z:3},{x:3,z:2},{x:1,z:20},{x:12,z:1},{x:12,z:2},{x:13,z:2},{x:14,z:2},{x:15,z:2},{x:20,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:18,z:21},{x:17,z:12},{x:16,z:12}]},{characterPlacement:{x:10,z:11},name:"Vladeousse",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:19,z:20},{x:19,z:19},{x:19,z:21},{x:22,z:16},{x:21,z:16},{x:20,z:16},{x:20,z:14},{x:21,z:14},{x:22,z:14},{x:21,z:11},{x:19,z:11},{x:18,z:11},{x:17,z:11},{x:16,z:11},{x:16,z:13},{x:16,z:14},{x:17,z:15},{x:16,z:15},{x:20,z:13},{x:18,z:13},{x:19,z:13},{x:17,z:16},{x:17,z:18},{x:17,z:17},{x:17,z:20},{x:17,z:22},{x:15,z:20},{x:15,z:19},{x:15,z:18},{x:16,z:18},{x:14,z:20},{x:13,z:20},{x:13,z:21},{x:21,z:1},{x:21,z:2},{x:20,z:5},{x:20,z:4},{x:17,z:5},{x:18,z:5},{x:18,z:2},{x:17,z:2},{x:17,z:3},{x:1,z:2},{x:2,z:2},{x:3,z:2},{x:3,z:3},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:5,z:2},{x:5,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:5},{x:7,z:4},{x:8,z:4},{x:10,z:4},{x:11,z:4},{x:10,z:2},{x:10,z:3},{x:13,z:3},{x:12,z:4},{x:13,z:4},{x:13,z:2},{x:13,z:1},{x:11,z:2},{x:5,z:4},{x:5,z:5},{x:4,z:4},{x:1,z:7},{x:2,z:7},{x:4,z:7},{x:15,z:21},{x:1,z:21},{x:2,z:21},{x:3,z:21},{x:3,z:20},{x:4,z:8},{x:4,z:9},{x:4,z:11},{x:2,z:11},{x:3,z:11},{x:2,z:8},{x:2,z:9},{x:9,z:10},{x:9,z:12},{x:11,z:12},{x:11,z:10},{x:15,z:2},{x:14,z:2},{x:15,z:5},{x:15,z:4},{x:22,z:4},{x:21,z:7},{x:20,z:7},{x:18,z:7},{x:18,z:6},{x:15,z:6},{x:16,z:8},{x:15,z:8},{x:20,z:8},{x:20,z:9},{x:19,z:9},{x:14,z:8},{x:14,z:9},{x:14,z:10},{x:14,z:11},{x:15,z:13},{x:13,z:13},{x:12,z:13},{x:11,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:16},{x:11,z:17},{x:10,z:17},{x:9,z:17},{x:12,z:15},{x:14,z:15},{x:14,z:16},{x:14,z:17},{x:14,z:18},{x:10,z:18},{x:10,z:19},{x:11,z:20},{x:10,z:20},{x:12,z:17},{x:2,z:13},{x:1,z:13},{x:4,z:13},{x:5,z:13},{x:5,z:11},{x:5,z:12},{x:6,z:8},{x:5,z:8},{x:11,z:8},{x:10,z:8},{x:9,z:8},{x:12,z:8},{x:12,z:9},{x:12,z:10},{x:14,z:6},{x:13,z:6},{x:12,z:6},{x:9,z:6},{x:11,z:6},{x:17,z:21},{x:3,z:15},{x:2,z:15},{x:2,z:16},{x:2,z:18},{x:2,z:17},{x:3,z:18},{x:5,z:18},{x:4,z:18},{x:6,z:18},{x:6,z:17},{x:6,z:16},{x:5,z:16},{x:7,z:11},{x:6,z:13},{x:8,z:16},{x:5,z:19},{x:5,z:20},{x:7,z:19},{x:8,z:19},{x:8,z:20},{x:8,z:21},{x:7,z:21},{x:7,z:18},{x:10,z:22},{x:5,z:22},{x:7,z:14},{x:7,z:13},{x:5,z:14},{x:9,z:15},{x:13,z:22},{x:18,z:12},{x:21,z:10},{x:21,z:9},{x:21,z:22},{x:19,z:16},{x:19,z:17},{x:20,z:21},{x:14,z:12},{x:14,z:13},{x:8,z:8},{x:7,z:9},{x:7,z:8},{x:18,z:8},{x:18,z:9},{x:4,z:10},{x:11,z:15},{x:11,z:16},{x:7,z:7},{x:6,z:7},{x:7,z:6},{x:10,z:6},{x:17,z:8},{x:17,z:4},{x:20,z:2},{x:19,z:5},{x:12,z:5},{x:13,z:9},{x:7,z:10},{x:7,z:16},{x:5,z:15}]},{characterPlacement:{x:22,z:22},name:"Pierre l'Aigle",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:8,z:10},{x:7,z:10},{x:5,z:10},{x:6,z:10},{x:17,z:5},{x:17,z:7},{x:17,z:6},{x:16,z:7},{x:15,z:6},{x:14,z:5},{x:6,z:6},{x:6,z:7},{x:6,z:8},{x:7,z:8},{x:15,z:7},{x:15,z:5},{x:8,z:8},{x:9,z:8},{x:10,z:8},{x:10,z:9},{x:3,z:7},{x:1,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:3,z:12},{x:3,z:11},{x:4,z:12},{x:6,z:12},{x:5,z:12},{x:5,z:13},{x:5,z:14},{x:1,z:22},{x:3,z:22},{x:3,z:21},{x:3,z:20},{x:3,z:19},{x:1,z:20},{x:1,z:18},{x:4,z:19},{x:9,z:12},{x:10,z:12},{x:10,z:11},{x:10,z:10},{x:10,z:14},{x:11,z:8},{x:11,z:7},{x:11,z:6},{x:12,z:5},{x:11,z:5},{x:13,z:5},{x:17,z:4},{x:18,z:4},{x:19,z:4},{x:19,z:5},{x:20,z:6},{x:19,z:6},{x:21,z:6},{x:21,z:7},{x:22,z:7},{x:2,z:14},{x:3,z:14},{x:1,z:14},{x:4,z:14},{x:3,z:8},{x:5,z:8},{x:5,z:9},{x:17,z:16},{x:15,z:16},{x:21,z:22},{x:5,z:22},{x:5,z:21},{x:6,z:21},{x:8,z:21},{x:7,z:21},{x:9,z:21},{x:9,z:20},{x:11,z:21},{x:12,z:21},{x:12,z:22},{x:22,z:19},{x:21,z:21},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:19,z:19},{x:18,z:19},{x:17,z:19},{x:17,z:17},{x:18,z:18},{x:18,z:17},{x:18,z:16},{x:16,z:20},{x:16,z:19},{x:14,z:13},{x:15,z:13},{x:16,z:13},{x:16,z:12},{x:16,z:11},{x:17,z:11},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:21,z:11},{x:22,z:11},{x:13,z:19},{x:15,z:19},{x:14,z:19},{x:14,z:18},{x:13,z:18},{x:9,z:17},{x:10,z:17},{x:10,z:16},{x:9,z:16},{x:2,z:12},{x:2,z:11},{x:2,z:16},{x:3,z:16},{x:5,z:16},{x:4,z:17},{x:3,z:17},{x:5,z:17},{x:9,z:14},{x:8,z:14},{x:7,z:14},{x:13,z:16},{x:14,z:16},{x:19,z:21},{x:18,z:21},{x:18,z:22},{x:16,z:22},{x:15,z:22},{x:14,z:21},{x:14,z:22},{x:12,z:19},{x:15,z:18},{x:12,z:18},{x:9,z:19},{x:11,z:19},{x:13,z:13},{x:12,z:13},{x:12,z:14},{x:11,z:14},{x:11,z:15},{x:22,z:18},{x:22,z:16},{x:22,z:15},{x:21,z:15},{x:20,z:15},{x:20,z:14},{x:18,z:15},{x:16,z:14},{x:14,z:15},{x:18,z:13},{x:19,z:13},{x:20,z:13},{x:22,z:13},{x:11,z:17},{x:5,z:15},{x:7,z:16},{x:7,z:17},{x:6,z:17},{x:6,z:20},{x:6,z:19},{x:8,z:19},{x:12,z:11},{x:15,z:9},{x:15,z:8},{x:16,z:9},{x:17,z:9},{x:19,z:7},{x:21,z:9},{x:21,z:8},{x:19,z:9},{x:20,z:9},{x:12,z:7},{x:14,z:9},{x:14,z:7},{x:13,z:11},{x:14,z:11},{x:13,z:12},{x:12,z:9},{x:21,z:2},{x:5,z:5},{x:5,z:6},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:2,z:6},{x:2,z:2},{x:4,z:2},{x:3,z:2},{x:8,z:1},{x:8,z:2},{x:7,z:2},{x:5,z:2},{x:5,z:1},{x:5,z:4},{x:6,z:4},{x:8,z:5},{x:8,z:4},{x:7,z:4},{x:9,z:2},{x:10,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:2},{x:10,z:4},{x:10,z:5},{x:8,z:6},{x:10,z:6},{x:13,z:1},{x:18,z:2},{x:20,z:2},{x:19,z:2},{x:21,z:4},{x:22,z:4},{x:19,z:3},{x:16,z:2},{x:15,z:3},{x:15,z:2},{x:14,z:2},{x:14,z:3},{x:7,z:12}]},{characterPlacement:{x:15,z:18},name:"AraLesPaquerettes",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:2,z:2},{x:4,z:1},{x:6,z:1},{x:4,z:3},{x:2,z:4},{x:2,z:7},{x:2,z:5},{x:2,z:6},{x:4,z:4},{x:3,z:4},{x:4,z:2},{x:6,z:6},{x:4,z:7},{x:5,z:4},{x:8,z:2},{x:8,z:3},{x:8,z:4},{x:6,z:4},{x:6,z:2},{x:21,z:4},{x:22,z:2},{x:7,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:9,z:4},{x:10,z:4},{x:10,z:5},{x:2,z:23},{x:5,z:23},{x:12,z:23},{x:13,z:17},{x:16,z:20},{x:14,z:19},{x:13,z:19},{x:14,z:17},{x:14,z:16},{x:18,z:17},{x:20,z:17},{x:18,z:20},{x:19,z:20},{x:21,z:17},{x:22,z:17},{x:21,z:19},{x:21,z:20},{x:17,z:21},{x:19,z:17},{x:20,z:19},{x:17,z:17},{x:15,z:16},{x:15,z:15},{x:16,z:15},{x:18,z:16},{x:19,z:15},{x:18,z:15},{x:16,z:14},{x:16,z:21},{x:18,z:21},{x:20,z:22},{x:13,z:20},{x:13,z:21},{x:14,z:21},{x:11,z:22},{x:12,z:20},{x:11,z:20},{x:17,z:18},{x:11,z:17},{x:11,z:18},{x:9,z:21},{x:9,z:20},{x:8,z:21},{x:7,z:22},{x:9,z:19},{x:8,z:19},{x:8,z:18},{x:10,z:17},{x:8,z:16},{x:10,z:16},{x:10,z:15},{x:12,z:15},{x:11,z:15},{x:7,z:16},{x:7,z:18},{x:19,z:13},{x:18,z:13},{x:18,z:12},{x:21,z:13},{x:21,z:14},{x:21,z:15},{x:19,z:12},{x:19,z:11},{x:20,z:11},{x:21,z:10},{x:21,z:8},{x:20,z:10},{x:20,z:9},{x:22,z:8},{x:20,z:8},{x:19,z:19},{x:15,z:13},{x:16,z:13},{x:14,z:11},{x:14,z:12},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:10,z:13},{x:11,z:13},{x:14,z:13},{x:12,z:10},{x:13,z:9},{x:12,z:9},{x:14,z:9},{x:15,z:9},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:8,z:15},{x:6,z:16},{x:5,z:17},{x:5,z:16},{x:5,z:18},{x:4,z:18},{x:6,z:20},{x:5,z:20},{x:8,z:22},{x:5,z:21},{x:3,z:21},{x:4,z:21},{x:3,z:18},{x:2,z:17},{x:2,z:16},{x:2,z:21},{x:1,z:20},{x:2,z:20},{x:1,z:14},{x:3,z:14},{x:3,z:15},{x:3,z:16},{x:2,z:18},{x:8,z:13},{x:7,z:13},{x:6,z:15},{x:7,z:15},{x:5,z:14},{x:5,z:15},{x:7,z:12},{x:4,z:11},{x:6,z:11},{x:6,z:9},{x:6,z:10},{x:1,z:12},{x:3,z:13},{x:3,z:12},{x:7,z:11},{x:2,z:9},{x:3,z:9},{x:18,z:9},{x:18,z:8},{x:18,z:7},{x:17,z:7},{x:18,z:6},{x:20,z:6},{x:19,z:6},{x:19,z:4},{x:20,z:4},{x:19,z:5},{x:22,z:6},{x:21,z:2},{x:19,z:3},{x:19,z:2},{x:17,z:1},{x:18,z:4},{x:16,z:4},{x:16,z:5},{x:15,z:7},{x:15,z:6},{x:14,z:7},{x:13,z:7},{x:7,z:6},{x:8,z:6},{x:5,z:7},{x:4,z:5},{x:10,z:6},{x:10,z:8},{x:10,z:7},{x:9,z:8},{x:8,z:8},{x:8,z:7},{x:6,z:7},{x:4,z:10},{x:4,z:12},{x:1,z:10},{x:3,z:10},{x:1,z:9},{x:16,z:12},{x:9,z:11},{x:9,z:10},{x:10,z:9},{x:10,z:10},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:14,z:3},{x:14,z:2},{x:16,z:3},{x:15,z:5},{x:13,z:3},{x:11,z:7},{x:12,z:4},{x:11,z:6}]},{characterPlacement:{x:2,z:21},name:"Araklette",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:20},{x:3,z:19},{x:3,z:18},{x:3,z:17},{x:3,z:16},{x:3,z:3},{x:3,z:4},{x:3,z:5},{x:3,z:6},{x:4,z:3},{x:5,z:3},{x:7,z:3},{x:6,z:3},{x:8,z:3},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:5,z:7},{x:5,z:8},{x:3,z:8},{x:3,z:7},{x:4,z:20},{x:5,z:20},{x:7,z:20},{x:8,z:20},{x:5,z:18},{x:6,z:18},{x:7,z:18},{x:5,z:17},{x:5,z:16},{x:8,z:18},{x:8,z:17},{x:8,z:15},{x:7,z:15},{x:6,z:15},{x:5,z:15},{x:9,z:20},{x:10,z:20},{x:10,z:19},{x:10,z:18},{x:10,z:17},{x:10,z:16},{x:10,z:15},{x:10,z:13},{x:9,z:13},{x:7,z:13},{x:8,z:13},{x:6,z:13},{x:5,z:13},{x:4,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:6,z:8},{x:8,z:8},{x:8,z:7},{x:8,z:6},{x:8,z:5},{x:9,z:3},{x:10,z:3},{x:10,z:5},{x:10,z:4},{x:10,z:6},{x:10,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:10},{x:8,z:10},{x:7,z:10},{x:6,z:10},{x:5,z:10},{x:4,z:10},{x:3,z:10},{x:20,z:20},{x:19,z:20},{x:13,z:20},{x:14,z:20},{x:17,z:20},{x:18,z:20},{x:13,z:19},{x:13,z:18},{x:15,z:18},{x:16,z:18},{x:17,z:18},{x:18,z:18},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:20,z:16},{x:20,z:14},{x:20,z:15},{x:20,z:13},{x:13,z:13},{x:15,z:13},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:13,z:14},{x:13,z:16},{x:13,z:15},{x:13,z:17},{x:15,z:17},{x:16,z:15},{x:15,z:15},{x:18,z:15},{x:17,z:15},{x:18,z:17},{x:18,z:16},{x:13,z:8},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:13,z:3},{x:14,z:3},{x:17,z:3},{x:16,z:3},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:5},{x:20,z:6},{x:20,z:7},{x:20,z:9},{x:20,z:8},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:16,z:10},{x:15,z:10},{x:14,z:10},{x:15,z:5},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:8},{x:15,z:6},{x:8,z:9},{x:10,z:11},{x:11,z:10},{x:13,z:11},{x:13,z:12},{x:11,z:13},{x:12,z:13},{x:8,z:11},{x:8,z:12},{x:11,z:15},{x:15,z:14},{x:15,z:11},{x:12,z:8},{x:11,z:8},{x:14,z:8},{x:9,z:15},{x:15,z:20},{x:18,z:3},{x:15,z:3},{x:1,z:2},{x:20,z:21},{x:13,z:10},{x:21,z:21},{x:21,z:22},{x:22,z:22},{x:21,z:1},{x:21,z:2},{x:20,z:2},{x:22,z:1},{x:7,z:2},{x:10,z:1},{x:15,z:2},{x:18,z:1},{x:4,z:1},{x:6,z:2},{x:17,z:5},{x:14,z:6},{x:3,z:2},{x:3,z:1}]},{characterPlacement:{x:2,z:17},name:"KerauChane",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:21,z:19},{x:21,z:17},{x:18,z:21},{x:18,z:20},{x:20,z:17},{x:18,z:18},{x:18,z:17},{x:2,z:4},{x:2,z:3},{x:2,z:2},{x:2,z:5},{x:2,z:6},{x:2,z:7},{x:3,z:2},{x:4,z:2},{x:3,z:8},{x:2,z:8},{x:3,z:5},{x:4,z:8},{x:5,z:8},{x:4,z:5},{x:5,z:2},{x:8,z:2},{x:8,z:3},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:10,z:8},{x:11,z:7},{x:11,z:6},{x:11,z:5},{x:12,z:4},{x:12,z:3},{x:12,z:2},{x:14,z:8},{x:14,z:6},{x:14,z:7},{x:14,z:5},{x:15,z:4},{x:16,z:3},{x:15,z:3},{x:16,z:2},{x:17,z:3},{x:17,z:4},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:15,z:6},{x:16,z:6},{x:17,z:6},{x:20,z:8},{x:21,z:8},{x:21,z:7},{x:20,z:7},{x:20,z:5},{x:21,z:5},{x:21,z:4},{x:20,z:4},{x:20,z:3},{x:21,z:3},{x:21,z:2},{x:20,z:2},{x:19,z:21},{x:16,z:20},{x:16,z:18},{x:16,z:16},{x:18,z:15},{x:19,z:15},{x:20,z:15},{x:21,z:15},{x:15,z:20},{x:14,z:20},{x:13,z:20},{x:12,z:20},{x:10,z:18},{x:11,z:20},{x:10,z:20},{x:9,z:18},{x:9,z:20},{x:9,z:19},{x:14,z:18},{x:15,z:18},{x:13,z:18},{x:12,z:18},{x:18,z:19},{x:16,z:15},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:21,z:13},{x:21,z:12},{x:21,z:11},{x:21,z:10},{x:21,z:9},{x:21,z:6},{x:16,z:1},{x:18,z:9},{x:18,z:10},{x:18,z:11},{x:19,z:11},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:16,z:8},{x:15,z:10},{x:14,z:10},{x:13,z:10},{x:15,z:13},{x:13,z:13},{x:13,z:14},{x:13,z:15},{x:13,z:16},{x:12,z:16},{x:11,z:16},{x:10,z:16},{x:10,z:17},{x:12,z:17},{x:14,z:15},{x:13,z:11},{x:12,z:10},{x:11,z:10},{x:10,z:10},{x:10,z:9},{x:7,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:4},{x:7,z:5},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:8,z:9},{x:10,z:11},{x:9,z:11},{x:8,z:11},{x:7,z:11},{x:6,z:11},{x:5,z:11},{x:4,z:11},{x:4,z:10},{x:2,z:10},{x:2,z:9},{x:1,z:12},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:4,z:13},{x:6,z:6},{x:6,z:4},{x:3,z:3},{x:3,z:7},{x:5,z:9},{x:5,z:10},{x:17,z:16},{x:18,z:16},{x:12,z:13},{x:11,z:13},{x:8,z:12},{x:8,z:13},{x:8,z:14},{x:10,z:14},{x:8,z:16},{x:7,z:16},{x:5,z:16},{x:6,z:16},{x:7,z:18},{x:7,z:19},{x:7,z:20},{x:5,z:15},{x:5,z:17},{x:4,z:17},{x:4,z:18},{x:4,z:19},{x:4,z:20},{x:4,z:21},{x:6,z:21},{x:7,z:21},{x:10,z:21},{x:12,z:22},{x:14,z:21},{x:16,z:21},{x:14,z:13},{x:19,z:12},{x:21,z:14},{x:22,z:17},{x:21,z:21},{x:6,z:22},{x:6,z:14},{x:6,z:13},{x:7,z:12},{x:7,z:17},{x:2,z:16},{x:2,z:19}]},{characterPlacement:{x:4,z:22},name:"51 PR",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:1,z:23},{x:3,z:22},{x:3,z:21},{x:2,z:21},{x:1,z:19},{x:2,z:19},{x:4,z:19},{x:5,z:19},{x:5,z:20},{x:2,z:18},{x:4,z:18},{x:5,z:22},{x:7,z:20},{x:8,z:20},{x:8,z:19},{x:8,z:18},{x:7,z:18},{x:4,z:17},{x:2,z:16},{x:2,z:15},{x:2,z:14},{x:4,z:15},{x:1,z:14},{x:5,z:17},{x:5,z:15},{x:6,z:14},{x:5,z:14},{x:3,z:12},{x:2,z:12},{x:2,z:10},{x:4,z:10},{x:3,z:10},{x:5,z:10},{x:5,z:11},{x:5,z:12},{x:1,z:8},{x:2,z:8},{x:4,z:8},{x:4,z:7},{x:7,z:22},{x:9,z:20},{x:9,z:21},{x:2,z:6},{x:2,z:5},{x:3,z:5},{x:4,z:5},{x:1,z:3},{x:2,z:3},{x:2,z:1},{x:3,z:3},{x:4,z:1},{x:5,z:3},{x:6,z:3},{x:6,z:2},{x:8,z:1},{x:8,z:2},{x:8,z:3},{x:7,z:3},{x:6,z:4},{x:6,z:6},{x:6,z:8},{x:6,z:7},{x:7,z:8},{x:8,z:5},{x:8,z:8},{x:8,z:7},{x:7,z:16},{x:8,z:16},{x:8,z:15},{x:8,z:14},{x:9,z:15},{x:7,z:12},{x:7,z:11},{x:8,z:9},{x:9,z:8},{x:8,z:11},{x:10,z:5},{x:10,z:6},{x:10,z:4},{x:10,z:2},{x:11,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:3},{x:14,z:3},{x:14,z:2},{x:14,z:1},{x:11,z:8},{x:11,z:9},{x:11,z:10},{x:10,z:10},{x:12,z:8},{x:12,z:7},{x:12,z:5},{x:13,z:5},{x:14,z:7},{x:16,z:3},{x:16,z:2},{x:17,z:2},{x:17,z:1},{x:15,z:5},{x:16,z:5},{x:17,z:5},{x:18,z:4},{x:18,z:5},{x:17,z:6},{x:15,z:7},{x:17,z:8},{x:17,z:9},{x:16,z:9},{x:15,z:9},{x:14,z:8},{x:14,z:9},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:21,z:3},{x:21,z:4},{x:22,z:4},{x:20,z:4},{x:22,z:6},{x:21,z:6},{x:20,z:6},{x:20,z:7},{x:19,z:7},{x:22,z:8},{x:22,z:9},{x:21,z:9},{x:20,z:9},{x:19,z:9},{x:20,z:10},{x:22,z:11},{x:22,z:12},{x:20,z:11},{x:22,z:13},{x:21,z:13},{x:14,z:11},{x:16,z:11},{x:18,z:11},{x:13,z:11},{x:11,z:12},{x:10,z:12},{x:11,z:13},{x:10,z:13},{x:16,z:12},{x:16,z:13},{x:16,z:14},{x:15,z:13},{x:17,z:14},{x:18,z:14},{x:18,z:13},{x:13,z:13},{x:17,z:11},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:12,z:15},{x:10,z:18},{x:13,z:17},{x:13,z:18},{x:13,z:19},{x:12,z:19},{x:12,z:20},{x:11,z:20},{x:11,z:22},{x:12,z:22},{x:14,z:21},{x:14,z:22},{x:14,z:15},{x:16,z:16},{x:16,z:17},{x:15,z:17},{x:15,z:21},{x:16,z:21},{x:15,z:20},{x:15,z:19},{x:16,z:19},{x:18,z:19},{x:18,z:21},{x:19,z:21},{x:20,z:21},{x:21,z:20},{x:22,z:22},{x:20,z:20},{x:17,z:17},{x:19,z:17},{x:19,z:16},{x:21,z:16},{x:21,z:17},{x:20,z:16},{x:21,z:14},{x:20,z:14},{x:21,z:18},{x:22,z:17},{x:20,z:13}]},{characterPlacement:{x:1,z:1},name:"Ile de la Rage",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:4,z:0},{x:5,z:0},{x:6,z:0},{x:7,z:0},{x:8,z:0},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:23,z:13},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:0,z:22},{x:23,z:21},{x:7,z:12},{x:1,z:12},{x:3,z:12},{x:4,z:12},{x:2,z:12},{x:6,z:12},{x:5,z:12},{x:8,z:12},{x:9,z:12},{x:10,z:12},{x:11,z:12},{x:12,z:12},{x:13,z:12},{x:14,z:12},{x:15,z:12},{x:16,z:12},{x:17,z:12},{x:18,z:12},{x:12,z:2},{x:12,z:4},{x:12,z:5},{x:12,z:6},{x:12,z:7},{x:12,z:9},{x:12,z:10},{x:12,z:11},{x:12,z:14},{x:12,z:13},{x:12,z:15},{x:12,z:16},{x:12,z:17},{x:12,z:18},{x:12,z:21},{x:12,z:22},{x:1,z:6},{x:2,z:6},{x:3,z:6},{x:4,z:6},{x:6,z:6},{x:7,z:6},{x:8,z:6},{x:9,z:6},{x:10,z:6},{x:6,z:1},{x:6,z:2},{x:6,z:4},{x:6,z:5},{x:6,z:10},{x:6,z:11},{x:6,z:3},{x:14,z:2},{x:15,z:3},{x:17,z:5},{x:22,z:11},{x:14,z:10},{x:15,z:9},{x:16,z:8},{x:19,z:5},{x:20,z:4},{x:21,z:3},{x:20,z:9},{x:19,z:8},{x:16,z:7},{x:16,z:6},{x:16,z:5},{x:18,z:5},{x:17,z:13},{x:17,z:15},{x:17,z:16},{x:17,z:17},{x:17,z:18},{x:17,z:20},{x:17,z:21},{x:13,z:17},{x:14,z:17},{x:16,z:17},{x:18,z:17},{x:21,z:17},{x:22,z:17},{x:1,z:13},{x:3,z:15},{x:4,z:16},{x:5,z:17},{x:6,z:18},{x:8,z:20},{x:9,z:21},{x:6,z:7},{x:11,z:4},{x:10,z:4},{x:10,z:3},{x:10,z:2},{x:6,z:8},{x:5,z:8},{x:4,z:8},{x:4,z:10},{x:4,z:9},{x:1,z:8},{x:3,z:8},{x:2,z:10},{x:2,z:11},{x:3,z:5},{x:3,z:4},{x:3,z:3},{x:2,z:3},{x:4,z:3},{x:8,z:8},{x:8,z:9},{x:8,z:10},{x:9,z:9},{x:10,z:8},{x:10,z:10},{x:10,z:9},{x:11,z:6},{x:11,z:9},{x:14,z:6},{x:14,z:8},{x:15,z:8},{x:14,z:5},{x:14,z:4},{x:15,z:4},{x:13,z:10},{x:13,z:2},{x:15,z:2},{x:17,z:1},{x:7,z:2},{x:9,z:2},{x:8,z:4},{x:9,z:4},{x:7,z:1},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:18,z:3},{x:17,z:3},{x:20,z:6},{x:21,z:6},{x:21,z:4},{x:18,z:8},{x:21,z:7},{x:20,z:11},{x:21,z:11},{x:20,z:10},{x:21,z:9},{x:17,z:10},{x:18,z:10},{x:19,z:10},{x:15,z:10},{x:19,z:14},{x:19,z:15},{x:20,z:15},{x:20,z:14},{x:20,z:13},{x:19,z:16},{x:21,z:14},{x:21,z:15},{x:21,z:13},{x:22,z:23},{x:23,z:23},{x:23,z:22},{x:16,z:15},{x:15,z:15},{x:14,z:15},{x:14,z:14},{x:14,z:18},{x:14,z:19},{x:15,z:19},{x:19,z:18},{x:19,z:19},{x:19,z:20},{x:19,z:21},{x:20,z:21},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:18,z:18},{x:12,z:20},{x:13,z:21},{x:14,z:21},{x:15,z:21},{x:1,z:22},{x:3,z:20},{x:5,z:18},{x:7,z:16},{x:8,z:15},{x:9,z:14},{x:10,z:13},{x:11,z:13},{x:5,z:16},{x:7,z:18},{x:9,z:22},{x:8,z:18},{x:9,z:18},{x:10,z:18},{x:11,z:20},{x:8,z:19},{x:9,z:20},{x:10,z:16},{x:10,z:17},{x:7,z:15},{x:7,z:14},{x:9,z:13},{x:0,z:13},{x:0,z:14},{x:5,z:13},{x:5,z:14},{x:2,z:13},{x:3,z:13},{x:2,z:18},{x:2,z:19},{x:2,z:20},{x:2,z:17},{x:2,z:15},{x:4,z:18},{x:4,z:19},{x:6,z:23},{x:7,z:23},{x:5,z:23},{x:2,z:22},{x:2,z:23},{x:1,z:23},{x:3,z:22},{x:5,z:21},{x:6,z:21},{x:7,z:21},{x:3,z:23},{x:4,z:23},{x:6,z:20}]},{characterPlacement:{x:1,z:12},name:"Dans le Soleil",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:22},{x:3,z:21},{x:2,z:20},{x:3,z:20},{x:1,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:2,z:15},{x:3,z:11},{x:3,z:10},{x:3,z:9},{x:2,z:9},{x:2,z:17},{x:3,z:17},{x:3,z:18},{x:2,z:18},{x:5,z:15},{x:6,z:15},{x:5,z:14},{x:5,z:13},{x:5,z:11},{x:5,z:10},{x:5,z:9},{x:6,z:9},{x:7,z:12},{x:7,z:11},{x:7,z:13},{x:8,z:13},{x:9,z:13},{x:9,z:11},{x:8,z:11},{x:5,z:20},{x:5,z:21},{x:6,z:20},{x:5,z:17},{x:5,z:18},{x:6,z:18},{x:6,z:17},{x:7,z:15},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:8,z:18},{x:9,z:18},{x:9,z:19},{x:7,z:20},{x:7,z:21},{x:7,z:22},{x:10,z:14},{x:10,z:13},{x:10,z:15},{x:10,z:16},{x:11,z:16},{x:11,z:17},{x:11,z:18},{x:9,z:22},{x:9,z:20},{x:10,z:20},{x:11,z:22},{x:11,z:20},{x:12,z:18},{x:13,z:18},{x:13,z:19},{x:13,z:20},{x:13,z:21},{x:13,z:22},{x:4,z:7},{x:3,z:7},{x:2,z:7},{x:2,z:6},{x:1,z:4},{x:2,z:4},{x:4,z:3},{x:4,z:4},{x:4,z:5},{x:5,z:7},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:3,z:2},{x:4,z:2},{x:2,z:2},{x:7,z:1},{x:7,z:2},{x:6,z:2},{x:6,z:3},{x:7,z:3},{x:8,z:3},{x:9,z:3},{x:11,z:3},{x:8,z:5},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:6,z:7},{x:7,z:7},{x:7,z:9},{x:9,z:8},{x:9,z:9},{x:10,z:9},{x:12,z:9},{x:11,z:9},{x:12,z:3},{x:12,z:4},{x:12,z:5},{x:11,z:5},{x:11,z:6},{x:11,z:7},{x:13,z:7},{x:12,z:7},{x:10,z:1},{x:13,z:1},{x:15,z:1},{x:15,z:2},{x:15,z:3},{x:15,z:4},{x:22,z:11},{x:22,z:13},{x:21,z:13},{x:21,z:11},{x:21,z:10},{x:19,z:10},{x:19,z:14},{x:19,z:13},{x:21,z:14},{x:19,z:11},{x:18,z:11},{x:18,z:13},{x:19,z:15},{x:19,z:16},{x:19,z:17},{x:18,z:17},{x:17,z:17},{x:17,z:16},{x:17,z:15},{x:16,z:15},{x:21,z:15},{x:21,z:16},{x:21,z:17},{x:21,z:18},{x:21,z:20},{x:21,z:21},{x:20,z:21},{x:19,z:21},{x:19,z:20},{x:20,z:20},{x:18,z:18},{x:17,z:21},{x:15,z:21},{x:15,z:22},{x:16,z:21},{x:15,z:19},{x:14,z:19},{x:16,z:19},{x:19,z:18},{x:10,z:10},{x:10,z:11},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:12,z:14},{x:13,z:15},{x:13,z:16},{x:14,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:14,z:11},{x:14,z:10},{x:13,z:11},{x:16,z:13},{x:16,z:14},{x:16,z:12},{x:17,z:11},{x:16,z:11},{x:14,z:7},{x:14,z:6},{x:15,z:6},{x:16,z:6},{x:15,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:7},{x:19,z:8},{x:19,z:9},{x:19,z:7},{x:19,z:6},{x:20,z:6},{x:21,z:9},{x:21,z:8},{x:21,z:6},{x:21,z:5},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:17,z:3},{x:17,z:2},{x:19,z:4},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:1},{x:22,z:1},{x:21,z:1},{x:22,z:3},{x:20,z:5},{x:17,z:10}]},{characterPlacement:{x:17,z:18},name:"Chapel'hein",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:14,z:1},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:20,z:18},{x:21,z:19},{x:19,z:17},{x:20,z:17},{x:19,z:16},{x:19,z:15},{x:17,z:15},{x:14,z:15},{x:13,z:15},{x:17,z:17},{x:17,z:16},{x:17,z:19},{x:18,z:19},{x:18,z:21},{x:17,z:21},{x:17,z:22},{x:16,z:19},{x:15,z:21},{x:15,z:22},{x:15,z:19},{x:16,z:17},{x:14,z:18},{x:14,z:17},{x:16,z:15},{x:13,z:21},{x:13,z:20},{x:12,z:20},{x:12,z:19},{x:12,z:17},{x:13,z:17},{x:11,z:22},{x:6,z:22},{x:6,z:21},{x:7,z:20},{x:6,z:20},{x:5,z:20},{x:4,z:20},{x:4,z:21},{x:17,z:14},{x:17,z:13},{x:17,z:12},{x:16,z:12},{x:15,z:12},{x:15,z:11},{x:15,z:10},{x:15,z:9},{x:14,z:11},{x:13,z:11},{x:11,z:11},{x:13,z:10},{x:11,z:12},{x:12,z:13},{x:11,z:13},{x:10,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:15},{x:14,z:14},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:11,z:19},{x:8,z:20},{x:8,z:21},{x:9,z:21},{x:8,z:19},{x:9,z:19},{x:11,z:20},{x:1,z:2},{x:2,z:2},{x:2,z:3},{x:4,z:2},{x:4,z:1},{x:6,z:2},{x:5,z:2},{x:5,z:3},{x:4,z:4},{x:5,z:4},{x:6,z:4},{x:8,z:1},{x:8,z:2},{x:8,z:4},{x:9,z:4},{x:8,z:5},{x:13,z:3},{x:12,z:3},{x:12,z:4},{x:12,z:6},{x:11,z:4},{x:11,z:6},{x:13,z:6},{x:13,z:7},{x:13,z:8},{x:12,z:8},{x:11,z:10},{x:10,z:10},{x:9,z:7},{x:9,z:8},{x:10,z:8},{x:21,z:15},{x:21,z:17},{x:19,z:14},{x:18,z:12},{x:20,z:13},{x:20,z:12},{x:20,z:11},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:17,z:9},{x:18,z:8},{x:17,z:7},{x:18,z:7},{x:15,z:7},{x:14,z:7},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:15,z:5},{x:14,z:5},{x:15,z:3},{x:16,z:3},{x:17,z:3},{x:16,z:2},{x:6,z:18},{x:6,z:17},{x:7,z:17},{x:9,z:17},{x:2,z:21},{x:2,z:20},{x:4,z:19},{x:4,z:18},{x:3,z:18},{x:1,z:18},{x:1,z:21},{x:12,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:19,z:12},{x:14,z:12},{x:16,z:13},{x:19,z:8},{x:20,z:8},{x:20,z:7},{x:22,z:12},{x:21,z:10},{x:22,z:15},{x:22,z:21},{x:18,z:1},{x:19,z:1},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:21,z:3},{x:19,z:4},{x:19,z:5},{x:18,z:5},{x:21,z:5},{x:22,z:5},{x:22,z:7},{x:22,z:8},{x:15,z:4},{x:9,z:10},{x:11,z:8},{x:8,z:11},{x:9,z:11},{x:8,z:7},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:7,z:12},{x:6,z:12},{x:6,z:10},{x:6,z:13},{x:8,z:15},{x:7,z:15},{x:6,z:16},{x:4,z:16},{x:3,z:16},{x:3,z:15},{x:5,z:14},{x:5,z:13},{x:2,z:15},{x:1,z:15},{x:1,z:17},{x:6,z:5},{x:6,z:7},{x:5,z:7},{x:5,z:8},{x:4,z:8},{x:4,z:5},{x:3,z:5},{x:2,z:5},{x:2,z:6},{x:3,z:8},{x:3,z:6},{x:1,z:9},{x:1,z:8},{x:2,z:10},{x:4,z:10},{x:4,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:4,z:13},{x:3,z:13},{x:5,z:10}]}],rr=Jt("Home"),xc=Jt(0),Hi=Jt(!0),vo=Jt(!1),Ip=new CustomEvent("loseGame",{detail:"lose"}),gc=Jt(!1),zo=Jt(!1),Mo=Jt(!0),So=Jt(!0),_c=Jt(120),ui=()=>{const n=_=>{gc.value=_},e=()=>{_c.value=121},t=()=>{Hi.value=!Hi.value,vo.value=!0},i=()=>{Hi.value=!0,vo.value=!1},s=()=>{So.value=!So.value},r=()=>{Mo.value=!0,zo.value=!1},o=()=>{Mo.value=!1,zo.value=!0},a=()=>Math.floor(Math.random()*Sl.length),l=_=>{xc.value=_??a()};return{display:rr,chosenLevel:xc,panelIsVisible:Hi,stopEvent:Ip,displayMenu:zo,displayBeginMenu:Mo,displayIntro:So,endgameIsVisible:vo,timeRemaining:_c,win:gc,triggerHome:()=>{rr.value="Home"},triggerGame:_=>{l(_),rr.value="Game"},triggerArcadeMode:()=>{rr.value="Arcade"},selectedLevel:l,choseLevel:a,openPanel:()=>{Hi.value=!0},closePanel:()=>{Hi.value=!1},beginGame:r,redoGame:o,manageIntro:s,manageEndgame:t,restartTime:e,closeEndgame:i,manageWin:n}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="171",Up=0,vc=1,Fp=2,wh=1,Np=2,Pn=3,ii=0,Ht=1,Un=2,ei=0,ls=1,zc=2,Mc=3,Sc=4,Op=5,yi=100,Bp=101,Hp=102,Vp=103,Gp=104,kp=200,Wp=201,Xp=202,$p=203,da=204,pa=205,qp=206,Yp=207,Kp=208,jp=209,Zp=210,Jp=211,Qp=212,em=213,tm=214,ma=0,xa=1,ga=2,fs=3,_a=4,va=5,za=6,Ma=7,yl=0,nm=1,im=2,ti=0,sm=1,rm=2,om=3,am=4,lm=5,cm=6,um=7,Ch=300,ds=301,ps=302,Sa=303,Ea=304,no=306,Ws=1e3,Ti=1001,ya=1002,fn=1003,hm=1004,or=1005,_n=1006,Eo=1007,Ai=1008,Vn=1009,Rh=1010,Ph=1011,Xs=1012,bl=1013,Li=1014,Nn=1015,js=1016,Tl=1017,Al=1018,ms=1020,Lh=35902,Dh=1021,Ih=1022,cn=1023,Uh=1024,Fh=1025,cs=1026,xs=1027,Nh=1028,wl=1029,Oh=1030,Cl=1031,Rl=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,ba=35840,Ta=35841,Aa=35842,wa=35843,Ca=36196,Ra=37492,Pa=37496,La=37808,Da=37809,Ia=37810,Ua=37811,Fa=37812,Na=37813,Oa=37814,Ba=37815,Ha=37816,Va=37817,Ga=37818,ka=37819,Wa=37820,Xa=37821,Fr=36492,$a=36494,qa=36495,Bh=36283,Ya=36284,Ka=36285,ja=36286,fm=3200,dm=3201,Hh=0,pm=1,Jn="",qt="srgb",gs="srgb-linear",$r="linear",it="srgb",Vi=7680,Ec=519,mm=512,xm=513,gm=514,Vh=515,_m=516,vm=517,zm=518,Mm=519,yc=35044,bc="300 es",On=2e3,qr=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Za=180/Math.PI;function Zs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Sm(n,e){return(n%e+e)%e}function bo(n,e,t){return(1-t)*n+t*e}function ys(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],T=s[1],b=s[4],E=s[7],I=s[2],L=s[5],R=s[8];return r[0]=o*M+a*T+l*I,r[3]=o*m+a*b+l*L,r[6]=o*f+a*E+l*R,r[1]=c*M+u*T+h*I,r[4]=c*m+u*b+h*L,r[7]=c*f+u*E+h*R,r[2]=d*M+p*T+_*I,r[5]=d*m+p*b+_*L,r[8]=d*f+p*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=d*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ge;function Gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Em(){const n=$s("canvas");return n.style.display="block",n}const Tc={};function ns(n){n in Tc||(Tc[n]=!0,console.warn(n))}function ym(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function bm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ac=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Am(){const n={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?$r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gs]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:Ac,fromXYZ:wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Ac,fromXYZ:wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const Ke=Am();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=$s("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Ut extends vs{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=Ti,s=Ti,r=_n,o=Ai,a=cn,l=Vn,c=Ut.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Zs(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Ch;Ut.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,I=(f+1)/2,L=(u+d)/4,R=(h+M)/4,N=(_+m)/4;return b>E&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=L/i,r=R/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=L/s,r=N/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=N/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-M)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pm extends vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Pm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wh extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lm extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(h!==M||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*M,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const I=Math.sqrt(b),L=Math.atan2(I,f*T);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const E=a*T;if(l=l*m+d*E,c=c*m+p*E,u=u*m+_*E,h=h*m+M*E,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-a*p,e[t+2]=c*_+u*p+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new B,Cc=new Js;class si{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ar.copy(i.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),lr.subVectors(this.max,bs),ki.subVectors(e.a,bs),Wi.subVectors(e.b,bs),Xi.subVectors(e.c,bs),kn.subVectors(Wi,ki),Wn.subVectors(Xi,Wi),mi.subVectors(ki,Xi);let t=[0,-kn.z,kn.y,0,-Wn.z,Wn.y,0,-mi.z,mi.y,kn.z,0,-kn.x,Wn.z,0,-Wn.x,mi.z,0,-mi.x,-kn.y,kn.x,0,-Wn.y,Wn.x,0,-mi.y,mi.x,0];return!Co(t,ki,Wi,Xi,lr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,ki,Wi,Xi,lr))?!1:(cr.crossVectors(kn,Wn),t=[cr.x,cr.y,cr.z],Co(t,ki,Wi,Xi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new B,new B,new B,new B,new B,new B,new B,new B],rn=new B,ar=new si,ki=new B,Wi=new B,Xi=new B,kn=new B,Wn=new B,mi=new B,bs=new B,lr=new B,cr=new B,xi=new B;function Co(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dm=new si,Ts=new B,Ro=new B;class Pl{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ro)),this.expandByPoint(Ts.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new B,Po=new B,ur=new B,Xn=new B,Lo=new B,hr=new B,Do=new B;class Im{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Po.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Po);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ur),a=Xn.dot(this.direction),l=-Xn.dot(ur),c=Xn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const M=1/u;h*=M,d*=M,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Po).addScaledVector(ur,d),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,s,r){Lo.subVectors(t,e),hr.subVectors(i,e),Do.crossVectors(Lo,hr);let o=this.direction.dot(Do),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(Xn,hr));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(Xn));if(c<0||l+c>o)return null;const u=-a*Xn.dot(Do);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,_,M,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,M,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,M=c*h;t[0]=d+M*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,M=c*h;t[0]=d-M*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+M,t[1]=l*h,t[5]=M*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-M*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+M,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=M*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Fm)}lookAt(e,t,i){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),$n.crossVectors(i,kt),$n.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),$n.crossVectors(i,kt)),$n.normalize(),fr.crossVectors(kt,$n),s[0]=$n.x,s[4]=fr.x,s[8]=kt.x,s[1]=$n.y,s[5]=fr.y,s[9]=kt.y,s[2]=$n.z,s[6]=fr.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],T=i[3],b=i[7],E=i[11],I=i[15],L=s[0],R=s[4],N=s[8],y=s[12],S=s[1],P=s[5],Q=s[9],X=s[13],ne=s[2],re=s[6],Z=s[10],J=s[14],H=s[3],he=s[7],ze=s[11],ye=s[15];return r[0]=o*L+a*S+l*ne+c*H,r[4]=o*R+a*P+l*re+c*he,r[8]=o*N+a*Q+l*Z+c*ze,r[12]=o*y+a*X+l*J+c*ye,r[1]=u*L+h*S+d*ne+p*H,r[5]=u*R+h*P+d*re+p*he,r[9]=u*N+h*Q+d*Z+p*ze,r[13]=u*y+h*X+d*J+p*ye,r[2]=_*L+M*S+m*ne+f*H,r[6]=_*R+M*P+m*re+f*he,r[10]=_*N+M*Q+m*Z+f*ze,r[14]=_*y+M*X+m*J+f*ye,r[3]=T*L+b*S+E*ne+I*H,r[7]=T*R+b*P+E*re+I*he,r[11]=T*N+b*Q+E*Z+I*ze,r[15]=T*y+b*X+E*J+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],M=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+M*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],M=e[13],m=e[14],f=e[15],T=h*m*c-M*d*c+M*l*p-a*m*p-h*l*f+a*d*f,b=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,E=u*M*c-_*h*c+_*a*p-o*M*p-u*a*f+o*h*f,I=_*h*l-u*M*l-_*a*d+o*M*d+u*a*m-o*h*m,L=t*T+i*b+s*E+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=T*R,e[1]=(M*d*r-h*m*r-M*s*p+i*m*p+h*s*f-i*d*f)*R,e[2]=(a*m*r-M*l*r+M*s*c-i*m*c-a*s*f+i*l*f)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=b*R,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=E*R,e[9]=(_*h*r-u*M*r-_*i*p+t*M*p+u*i*f-t*h*f)*R,e[10]=(o*M*r-_*a*r+_*i*c-t*M*c-o*i*f+t*a*f)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=I*R,e[13]=(u*M*s-_*h*s+_*i*d-t*M*d-u*i*m+t*h*m)*R,e[14]=(_*a*s-o*M*s-_*i*l+t*M*l+o*i*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,_=r*h,M=o*u,m=o*h,f=a*h,T=l*c,b=l*u,E=l*h,I=i.x,L=i.y,R=i.z;return s[0]=(1-(M+f))*I,s[1]=(p+E)*I,s[2]=(_-b)*I,s[3]=0,s[4]=(p-E)*L,s[5]=(1-(d+f))*L,s[6]=(m+T)*L,s[7]=0,s[8]=(_+b)*R,s[9]=(m-T)*R,s[10]=(1-(d+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const c=1/r,u=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=On){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(a===On)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,p=(i+s)*u;let _,M;if(a===On)_=(o+r)*h,M=-2*h;else if(a===qr)_=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new B,on=new ut,Um=new B(0,0,0),Fm=new B(1,1,1),$n=new B,fr=new B,kt=new B,Rc=new ut,Pc=new Js;class En{constructor(e=0,t=0,i=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const Lc=new B,qi=new Js,wn=new ut,dr=new B,As=new B,Om=new B,Bm=new Js,Dc=new B(1,0,0),Ic=new B(0,1,0),Uc=new B(0,0,1),Fc={type:"added"},Hm={type:"removed"},Yi={type:"childadded",child:null},Io={type:"childremoved",child:null};class Vt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new B,t=new En,i=new Js,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(As,dr,this.up):wn.lookAt(dr,As,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(wn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new B(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new B,Cn=new B,Uo=new B,Rn=new B,Ki=new B,ji=new B,Nc=new B,Fo=new B,No=new B,Oo=new B,Bo=new st,Ho=new st,Vo=new st;class ln{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){an.subVectors(s,t),Cn.subVectors(i,t),Uo.subVectors(e,t);const o=an.dot(an),a=an.dot(Cn),l=an.dot(Uo),c=Cn.dot(Cn),u=Cn.dot(Uo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),Bo.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,i),Vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(e,t,i,s){return an.subVectors(i,t),Cn.subVectors(e,t),an.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,i),ji.subVectors(r,i),Fo.subVectors(e,i);const l=Ki.dot(Fo),c=ji.dot(Fo);if(l<=0&&c<=0)return t.copy(i);No.subVectors(e,s);const u=Ki.dot(No),h=ji.dot(No);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ki,o);Oo.subVectors(e,r);const p=Ki.dot(Oo),_=ji.dot(Oo);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ji,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Nc.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Nc,a);const f=1/(m+M+d);return o=M*f,a=d*f,t.copy(i).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Sm(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Go(o,r,e+1/3),this.g=Go(o,r,e),this.b=Go(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=$h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ke.fromWorkingColorSpace(bt.copy(this),e),Math.round(Xe(bt.r*255,0,255))*65536+Math.round(Xe(bt.g*255,0,255))*256+Math.round(Xe(bt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,s=bt.g,r=bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=qt){Ke.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,s=bt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(pr);const i=bo(qn.h,pr.h,t),s=bo(qn.s,pr.s,t),r=bo(qn.l,pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new je;je.NAMES=$h;let Vm=0;class Qs extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=ls,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==pa&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qh extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new B,mr=new qe;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class Yh extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kh extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gm=0;const tn=new ut,ko=new Vt,Zi=new B,Wt=new si,ws=new si,zt=new B;class Fi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gh(e)?Kh:Yh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Wt.min,ws.min),Wt.expandByPoint(zt),zt.addVectors(Wt.max,ws.max),Wt.expandByPoint(zt)):(Wt.expandByPoint(ws.min),Wt.expandByPoint(ws.max))}Wt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),zt.add(Zi)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new B,l[N]=new B;const c=new B,u=new B,h=new B,d=new qe,p=new qe,_=new qe,M=new B,m=new B;function f(N,y,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[N].add(M),a[y].add(M),a[S].add(M),l[N].add(m),l[y].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,y=T.length;N<y;++N){const S=T[N],P=S.start,Q=S.count;for(let X=P,ne=P+Q;X<ne;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new B,E=new B,I=new B,L=new B;function R(N){I.fromBufferAttribute(s,N),L.copy(I);const y=a[N];b.copy(y),b.sub(I.multiplyScalar(I.dot(y))).normalize(),E.crossVectors(L,y);const P=E.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,P)}for(let N=0,y=T.length;N<y;++N){const S=T[N],P=S.start,Q=S.count;for(let X=P,ne=P+Q;X<ne;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new ut,gi=new Im,xr=new Pl,Bc=new B,gr=new B,_r=new B,vr=new B,Wo=new B,zr=new B,Hc=new B,Mr=new B;class Bt extends Vt{constructor(e=new Fi,t=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Wo.fromBufferAttribute(h,e),o?zr.addScaledVector(Wo,u):zr.addScaledVector(Wo.sub(t),u))}t.add(zr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(xr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(xr,Bc)===null||gi.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Oc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Oc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,I=b;E<I;E+=3){const L=a.getX(E),R=a.getX(E+1),N=a.getX(E+2);s=Sr(this,f,e,i,c,u,h,L,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const T=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=Sr(this,o,e,i,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=d.length;_<M;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,I=b;E<I;E+=3){const L=E,R=E+1,N=E+2;s=Sr(this,f,e,i,c,u,h,L,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const T=m,b=m+1,E=m+2;s=Sr(this,o,e,i,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function km(n,e,t,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,gr),n.getVertexPosition(l,_r),n.getVertexPosition(c,vr);const u=km(n,e,t,i,gr,_r,vr,Hc);if(u){const h=new B;ln.getBarycoord(Hc,gr,_r,vr,h),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,h,new qe)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,h,new qe)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};ln.getNormal(gr,_r,vr,d.normal),u.face=d,u.barycoord=h}return u}class ri extends Fi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(h,2));function _(M,m,f,T,b,E,I,L,R,N,y){const S=E/R,P=I/N,Q=E/2,X=I/2,ne=L/2,re=R+1,Z=N+1;let J=0,H=0;const he=new B;for(let ze=0;ze<Z;ze++){const ye=ze*P-X;for(let Re=0;Re<re;Re++){const Ze=Re*S-Q;he[M]=Ze*T,he[m]=ye*b,he[f]=ne,c.push(he.x,he.y,he.z),he[M]=0,he[m]=0,he[f]=L>0?1:-1,u.push(he.x,he.y,he.z),h.push(Re/R),h.push(1-ze/N),J+=1}}for(let ze=0;ze<N;ze++)for(let ye=0;ye<R;ye++){const Re=d+ye+re*ze,Ze=d+ye+re*(ze+1),ee=d+(ye+1)+re*(ze+1),ce=d+(ye+1)+re*ze;l.push(Re,Ze,ce),l.push(Ze,ee,ce),H+=6}a.addGroup(p,H,y),p+=H,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function Wm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Xm={clone:_s,merge:Pt};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new B,Vc=new qe,Gc=new qe;class Yt extends Zh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Gc),t.subVectors(Gc,Vc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Ym extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jh extends Ut{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Km extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ei});r.uniforms.tEquirect.value=t;const o=new Bt(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=_n),new Ym(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class kc extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xo=new B,jm=new B,Zm=new Ge;class Si{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Xo.subVectors(i,t).cross(jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zm.getNormalMatrix(e),s=this.coplanarPoint(Xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Pl,Er=new B;class Ll{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],M=s[10],m=s[11],f=s[12],T=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,m-p,E-f).normalize(),i[1].setComponents(l+r,d+c,m+p,E+f).normalize(),i[2].setComponents(l+o,d+u,m+_,E+T).normalize(),i[3].setComponents(l-o,d-u,m-_,E-T).normalize(),i[4].setComponents(l-a,d-h,m-M,E-b).normalize(),t===On)i[5].setComponents(l+a,d+h,m+M,E+b).normalize();else if(t===qr)i[5].setComponents(a,h,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Er.x=s.normal.x>0?e.max.x:e.min.x,Er.y=s.normal.y>0?e.max.y:e.min.y,Er.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Qh extends Ut{constructor(e,t,i,s,r,o,a,l,c,u=cs){if(u!==cs&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cs&&(i=Li),i===void 0&&u===xs&&(i=ms),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class io extends Fi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],_=[],M=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let b=0;b<c;b++){const E=b*h-r;_.push(E,-T,0),M.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const b=T+c*f,E=T+c*(f+1),I=T+1+c*(f+1),L=T+1+c*f;p.push(b,E,L),p.push(E,I,L)}this.setIndex(p),this.setAttribute("position",new Ci(_,3)),this.setAttribute("normal",new Ci(M,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ja extends Qs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jm extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ef{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const ex=new ef;class Dl{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";class tx extends Dl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=$s("img");function l(){u(),Wc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class nx extends Dl{constructor(e){super(e)}load(e,t,i,s){const r=new Ut,o=new tx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ix extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $o=new ut,Xc=new B,$c=new B;class sx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qc=new ut,Cs=new B,qo=new B;class rx extends sx{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),qo.copy(i.position),qo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qo),i.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),qc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Yc extends ix{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ox extends Zh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ax extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kc(){return performance.now()}function jc(n,e,t,i){const s=cx(i);switch(t){case Dh:return n*e;case Uh:return n*e;case Fh:return n*e*2;case Nh:return n*e/s.components*s.byteLength;case wl:return n*e/s.components*s.byteLength;case Oh:return n*e*2/s.components*s.byteLength;case Cl:return n*e*2/s.components*s.byteLength;case Ih:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case Rl:return n*e*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ta:case wa:return Math.max(n,16)*Math.max(e,8)/4;case ba:case Aa:return Math.max(n,8)*Math.max(e,8)/2;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fr:case $a:case qa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bh:case Ya:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ka:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cx(n){switch(n){case Vn:case Rh:return{byteLength:1,components:1};case Xs:case Ph:case js:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Li:case bl:case Nn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ux(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const M=h[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`struct PhysicalMaterial {
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
}`,ug=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h_=`uniform sampler2D t2D;
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,b_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define LAMBERT
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
}`,w_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,D_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,N_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,V_=`uniform vec3 color;
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
}`,G_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:hx,alphahash_pars_fragment:fx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:xx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:vx,batching_vertex:zx,begin_vertex:Mx,beginnormal_vertex:Sx,bsdfs:Ex,iridescence_fragment:yx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Cx,color_fragment:Rx,color_pars_fragment:Px,color_pars_vertex:Lx,color_vertex:Dx,common:Ix,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ox,emissivemap_fragment:Bx,emissivemap_pars_fragment:Hx,colorspace_fragment:Vx,colorspace_pars_fragment:Gx,envmap_fragment:kx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ig,envmap_vertex:qx,fog_vertex:Yx,fog_pars_vertex:Kx,fog_fragment:jx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:Qx,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:ag,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:ug,lights_fragment_maps:hg,lights_fragment_end:fg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:xg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:zg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Eg,morphcolor_vertex:yg,morphnormal_vertex:bg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:wg,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Ng,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:kg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Kg,skinbase_vertex:jg,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:l_,worldpos_vertex:c_,background_vert:u_,background_frag:h_,backgroundCube_vert:f_,backgroundCube_frag:d_,cube_vert:p_,cube_frag:m_,depth_vert:x_,depth_frag:g_,distanceRGBA_vert:__,distanceRGBA_frag:v_,equirect_vert:z_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:E_,meshbasic_vert:y_,meshbasic_frag:b_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:w_,meshmatcap_frag:C_,meshnormal_vert:R_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:I_,meshphysical_frag:U_,meshtoon_vert:F_,meshtoon_frag:N_,points_vert:O_,points_frag:B_,shadow_vert:H_,shadow_frag:V_,sprite_vert:G_,sprite_frag:k_},me={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xn={basic:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Pt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Pt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Pt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Pt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Pt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Pt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Pt([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Pt([me.lights,me.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};xn.physical={uniforms:Pt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const br={r:0,b:0,g:0},vi=new En,W_=new ut;function X_(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function M(b){let E=!1;const I=_(b);I===null?f(a,l):I&&I.isColor&&(f(I,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const I=_(E);I&&(I.isCubeTexture||I.mapping===no)?(u===void 0&&(u=new Bt(new ri(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:_s(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(E.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(vi)),u.material.toneMapped=Ke.getTransfer(I.colorSpace)!==it,(h!==I||d!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Bt(new io(2,2),new oi({name:"BackgroundMaterial",uniforms:_s(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,E){b.getRGB(br,jh(n)),i.buffers.color.setClear(br.r,br.g,br.b,E,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:M,addToRenderList:m,dispose:T}}function $_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,P,Q,X,ne){let re=!1;const Z=h(X,Q,P);r!==Z&&(r=Z,c(r.object)),re=p(S,X,Q,ne),re&&_(S,X,Q,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,E(S,P,Q,X),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,Q){const X=Q.wireframe===!0;let ne=i[S.id];ne===void 0&&(ne={},i[S.id]=ne);let re=ne[P.id];re===void 0&&(re={},ne[P.id]=re);let Z=re[X];return Z===void 0&&(Z=d(l()),re[X]=Z),Z}function d(S){const P=[],Q=[],X=[];for(let ne=0;ne<t;ne++)P[ne]=0,Q[ne]=0,X[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:X,object:S,attributes:{},index:null}}function p(S,P,Q,X){const ne=r.attributes,re=P.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){const ze=ne[H];let ye=re[H];if(ye===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ze===void 0||ze.attribute!==ye||ye&&ze.data!==ye.data)return!0;Z++}return r.attributesNum!==Z||r.index!==X}function _(S,P,Q,X){const ne={},re=P.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){let ze=re[H];ze===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ze=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ze=S.instanceColor));const ye={};ye.attribute=ze,ze&&ze.data&&(ye.data=ze.data),ne[H]=ye,Z++}r.attributes=ne,r.attributesNum=Z,r.index=X}function M(){const S=r.newAttributes;for(let P=0,Q=S.length;P<Q;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const Q=r.newAttributes,X=r.enabledAttributes,ne=r.attributeDivisors;Q[S]=1,X[S]===0&&(n.enableVertexAttribArray(S),X[S]=1),ne[S]!==P&&(n.vertexAttribDivisor(S,P),ne[S]=P)}function T(){const S=r.newAttributes,P=r.enabledAttributes;for(let Q=0,X=P.length;Q<X;Q++)P[Q]!==S[Q]&&(n.disableVertexAttribArray(Q),P[Q]=0)}function b(S,P,Q,X,ne,re,Z){Z===!0?n.vertexAttribIPointer(S,P,Q,ne,re):n.vertexAttribPointer(S,P,Q,X,ne,re)}function E(S,P,Q,X){M();const ne=X.attributes,re=Q.getAttributes(),Z=P.defaultAttributeValues;for(const J in re){const H=re[J];if(H.location>=0){let he=ne[J];if(he===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const ze=he.normalized,ye=he.itemSize,Re=e.get(he);if(Re===void 0)continue;const Ze=Re.buffer,ee=Re.type,ce=Re.bytesPerElement,Ee=ee===n.INT||ee===n.UNSIGNED_INT||he.gpuType===bl;if(he.isInterleavedBufferAttribute){const pe=he.data,we=pe.stride,De=he.offset;if(pe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)f(H.location+Ne,pe.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<H.locationSize;Ne++)b(H.location+Ne,ye/H.locationSize,ee,ze,we*ce,(De+ye/H.locationSize*Ne)*ce,Ee)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)f(H.location+pe,he.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ye/H.locationSize,ee,ze,ye*ce,ye/H.locationSize*pe*ce,Ee)}}else if(Z!==void 0){const ze=Z[J];if(ze!==void 0)switch(ze.length){case 2:n.vertexAttrib2fv(H.location,ze);break;case 3:n.vertexAttrib3fv(H.location,ze);break;case 4:n.vertexAttrib4fv(H.location,ze);break;default:n.vertexAttrib1fv(H.location,ze)}}}}T()}function I(){N();for(const S in i){const P=i[S];for(const Q in P){const X=P[Q];for(const ne in X)u(X[ne].object),delete X[ne];delete P[Q]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const Q in P){const X=P[Q];for(const ne in X)u(X[ne].object),delete X[ne];delete P[Q]}delete i[S.id]}function R(S){for(const P in i){const Q=i[P];if(Q[S.id]===void 0)continue;const X=Q[S.id];for(const ne in X)u(X[ne].object),delete X[ne];delete Q[S.id]}}function N(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function q_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*d[M];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Y_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Nn&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:L}}function K_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,b=T*4;let E=f.clippingState||null;l.value=E,E=u(_,d,b,p);for(let I=0;I!==b;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const f=p+M*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==M;++b,E+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function j_(n){let e=new WeakMap;function t(o,a){return a===Sa?o.mapping=ds:a===Ea&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sa||a===Ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Km(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const is=4,Zc=[.125,.215,.35,.446,.526,.582],bi=20,Yo=new ox,Jc=new je;let Ko=null,jo=0,Zo=0,Jo=!1;const Ei=(1+Math.sqrt(5))/2,es=1/Ei,Qc=[new B(-Ei,es,0),new B(Ei,es,0),new B(-es,0,Ei),new B(es,0,Ei),new B(0,Ei,-es),new B(0,Ei,es),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:js,format:cn,colorSpace:gs,depthBuffer:!1},s=tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=J_(r,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,i,s){const a=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jc),u.toneMapping=ti,u.autoClear=!1;const p=new qh({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new Bt(new ri,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(Jc),M=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Tr(s,T*b,f>2?b:0,b,b),u.setRenderTarget(s),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ds||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qc[(s-r-1)%Qc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),M=r/_,m=isFinite(r)?1+Math.floor(u*M):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const f=[];let T=0;for(let R=0;R<bi;++R){const N=R/M,y=Math.exp(-N*N/2);f.push(y),R===0?T+=y:R<m&&(T+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;const E=this._sizeLods[s],I=3*E*(s>b-is?s-b+is:0),L=4*(this._cubeSize-E);Tr(t,I,L,3*E,2*E),l.setRenderTarget(t),l.render(h,Yo)}}function Z_(n){const e=[],t=[],i=[];let s=n;const r=n-is+1+Zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-is?l=Zc[o-n+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,M=3,m=2,f=1,T=new Float32Array(M*_*p),b=new Float32Array(m*_*p),E=new Float32Array(f*_*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,N=L>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(y,M*_*L),b.set(d,m*_*L);const S=[L,L,L,L,L,L];E.set(S,f*_*L)}const I=new Fi;I.setAttribute("position",new zn(T,M)),I.setAttribute("uv",new zn(b,m)),I.setAttribute("faceIndex",new zn(E,f)),e.push(I),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tu(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function J_(n,e,t){const i=new Float32Array(bi),s=new B(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function nu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function iu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function Q_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sa||l===Ea,u=l===ds||l===ps;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new eu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new eu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function e1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function t1(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let M=0;if(p!==null){const T=p.array;M=p.version;for(let b=0,E=T.length;b<E;b+=3){const I=T[b+0],L=T[b+1],R=T[b+2];d.push(I,L,L,R,R,I)}}else if(_!==void 0){const T=_.array;M=_.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const I=b+0,L=b+1,R=b+2;d.push(I,L,L,R,R,I)}}else return;const m=new(Gh(d)?Kh:Yh)(d,1);m.version=M;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function n1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function h(d,p,_,M){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,M,0,_);let f=0;for(let T=0;T<_;T++)f+=p[T]*M[T];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function i1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function s1(n,e,t){const i=new WeakMap,s=new st;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*L*4*h),N=new Wh(R,I,L,h);N.type=Nn,N.needsUpdate=!0;const y=E*4;for(let P=0;P<h;P++){const Q=f[P],X=T[P],ne=b[P],re=I*L*4*P;for(let Z=0;Z<Q.count;Z++){const J=Z*y;_===!0&&(s.fromBufferAttribute(Q,Z),R[re+J+0]=s.x,R[re+J+1]=s.y,R[re+J+2]=s.z,R[re+J+3]=0),M===!0&&(s.fromBufferAttribute(X,Z),R[re+J+4]=s.x,R[re+J+5]=s.y,R[re+J+6]=s.z,R[re+J+7]=0),m===!0&&(s.fromBufferAttribute(ne,Z),R[re+J+8]=s.x,R[re+J+9]=s.y,R[re+J+10]=s.z,R[re+J+11]=ne.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new qe(I,L)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function r1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const nf=new Ut,su=new Qh(1,1),sf=new Wh,rf=new Lm,of=new Jh,ru=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),vt(t,i)}}function h1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),vt(t,i)}}function f1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;au.set(i),n.uniformMatrix4fv(this.addr,!1,au),vt(t,i)}}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function g1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function M1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=Vh,r=su):r=nf,t.setTexture2D(e||r,s)}function S1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rf,s)}function E1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||of,s)}function y1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sf,s)}function b1(n){switch(n){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return h1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return x1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return y1}}function T1(n,e){n.uniform1fv(this.addr,e)}function A1(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function w1(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function C1(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function R1(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P1(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L1(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D1(n,e){n.uniform1iv(this.addr,e)}function I1(n,e){n.uniform2iv(this.addr,e)}function U1(n,e){n.uniform3iv(this.addr,e)}function F1(n,e){n.uniform4iv(this.addr,e)}function N1(n,e){n.uniform1uiv(this.addr,e)}function O1(n,e){n.uniform2uiv(this.addr,e)}function B1(n,e){n.uniform3uiv(this.addr,e)}function H1(n,e){n.uniform4uiv(this.addr,e)}function V1(n,e,t){const i=this.cache,s=e.length,r=so(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nf,r[o])}function G1(n,e,t){const i=this.cache,s=e.length,r=so(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rf,r[o])}function k1(n,e,t){const i=this.cache,s=e.length,r=so(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||of,r[o])}function W1(n,e,t){const i=this.cache,s=e.length,r=so(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sf,r[o])}function X1(n){switch(n){case 5126:return T1;case 35664:return A1;case 35665:return w1;case 35666:return C1;case 35674:return R1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return N1;case 36294:return O1;case 36295:return B1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return W1}}class $1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=b1(t.type)}}class q1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}}class Y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function uu(n,e){n.seq.push(e),n.map[e.id]=e}function K1(n,e,t){const i=n.name,s=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),o=Qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uu(t,c===void 0?new $1(a,n,e):new q1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Y1(a),uu(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const j1=37297;let Z1=0;function J1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const fu=new Ge;function Q1(n){Ke._getMatrix(fu,Ke.workingColorSpace,n);const e=`mat3( ${fu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function du(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+J1(n.getShaderSource(e),o)}else return s}function e0(n,e){const t=Q1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t0(n,e){let t;switch(e){case sm:t="Linear";break;case rm:t="Reinhard";break;case om:t="Cineon";break;case am:t="ACESFilmic";break;case cm:t="AgX";break;case um:t="Neutral";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new B;function n0(){Ke.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function s0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ps(n){return n!==""}function pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(n){return n.replace(o0,l0)}const a0=new Map;function l0(n,e){let t=We[e];if(t===void 0){const i=a0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(c0,u0)}function u0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function h0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Np?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case ps:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ps:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function m0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function x0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=h0(t),c=f0(t),u=d0(t),h=p0(t),d=m0(t),p=i0(t),_=s0(r),M=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(m=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?We.tonemapping_pars_fragment:"",t.toneMapping!==ti?t0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),n0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Qa(o),o=pu(o,t),o=mu(o,t),a=Qa(a),a=pu(a,t),a=mu(a,t),o=xu(o),a=xu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+o,E=T+f+a,I=hu(s,s.VERTEX_SHADER,b),L=hu(s,s.FRAGMENT_SHADER,E);s.attachShader(M,I),s.attachShader(M,L),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(P){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(M).trim(),X=s.getShaderInfoLog(I).trim(),ne=s.getShaderInfoLog(L).trim();let re=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,I,L);else{const J=du(s,I,"vertex"),H=du(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Q+`
`+J+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(X===""||ne==="")&&(Z=!1);Z&&(P.diagnostics={runnable:re,programLog:Q,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(I),s.deleteShader(L),N=new Nr(s,M),y=r0(s,M)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,j1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=L,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new v0(e),t.set(e,i)),i}}class v0{constructor(e){this.id=g0++,this.code=e,this.usedTimes=0}}function z0(n,e,t,i,s,r,o){const a=new Xh,l=new _0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,Q,X){const ne=Q.fog,re=X.geometry,Z=y.isMeshStandardMaterial?Q.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),H=J&&J.mapping===no?J.image.height:null,he=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ze=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=ze!==void 0?ze.length:0;let Re=0;re.morphAttributes.position!==void 0&&(Re=1),re.morphAttributes.normal!==void 0&&(Re=2),re.morphAttributes.color!==void 0&&(Re=3);let Ze,ee,ce,Ee;if(he){const nt=xn[he];Ze=nt.vertexShader,ee=nt.fragmentShader}else Ze=y.vertexShader,ee=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),De=X.isInstancedMesh===!0,Ne=X.isBatchedMesh===!0,lt=!!y.map,A=!!y.matcap,C=!!J,z=!!y.aoMap,ie=!!y.lightMap,$=!!y.bumpMap,Y=!!y.normalMap,K=!!y.displacementMap,se=!!y.emissiveMap,q=!!y.metalnessMap,g=!!y.roughnessMap,x=y.anisotropy>0,w=y.clearcoat>0,O=y.dispersion>0,G=y.iridescence>0,V=y.sheen>0,ue=y.transmission>0,oe=x&&!!y.anisotropyMap,fe=w&&!!y.clearcoatMap,Pe=w&&!!y.clearcoatNormalMap,ae=w&&!!y.clearcoatRoughnessMap,xe=G&&!!y.iridescenceMap,Te=G&&!!y.iridescenceThicknessMap,Le=V&&!!y.sheenColorMap,de=V&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Oe=!!y.specularColorMap,rt=!!y.specularIntensityMap,D=ue&&!!y.transmissionMap,ge=ue&&!!y.thicknessMap,j=!!y.gradientMap,te=!!y.alphaMap,Me=y.alphaTest>0,ve=!!y.alphaHash,He=!!y.extensions;let ht=ti;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Et={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&X._colorsTexture!==null,instancing:De,instancingColor:De&&X.instanceColor!==null,instancingMorph:De&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gs,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:A,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:ie,bumpMap:$,normalMap:Y,displacementMap:d&&K,emissiveMap:se,normalMapObjectSpace:Y&&y.normalMapType===pm,normalMapTangentSpace:Y&&y.normalMapType===Hh,metalnessMap:q,roughnessMap:g,anisotropy:x,anisotropyMap:oe,clearcoat:w,clearcoatMap:fe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:O,iridescence:G,iridescenceMap:xe,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Le,sheenRoughnessMap:de,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:rt,transmission:ue,transmissionMap:D,thicknessMap:ge,gradientMap:j,opaque:y.transparent===!1&&y.blending===ls&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ve,combine:y.combine,mapUv:lt&&M(y.map.channel),aoMapUv:z&&M(y.aoMap.channel),lightMapUv:ie&&M(y.lightMap.channel),bumpMapUv:$&&M(y.bumpMap.channel),normalMapUv:Y&&M(y.normalMap.channel),displacementMapUv:K&&M(y.displacementMap.channel),emissiveMapUv:se&&M(y.emissiveMap.channel),metalnessMapUv:q&&M(y.metalnessMap.channel),roughnessMapUv:g&&M(y.roughnessMap.channel),anisotropyMapUv:oe&&M(y.anisotropyMap.channel),clearcoatMapUv:fe&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(y.sheenRoughnessMap.channel),specularMapUv:Ie&&M(y.specularMap.channel),specularColorMapUv:Oe&&M(y.specularColorMap.channel),specularIntensityMapUv:rt&&M(y.specularIntensityMap.channel),transmissionMapUv:D&&M(y.transmissionMap.channel),thicknessMapUv:ge&&M(y.thicknessMap.channel),alphaMapUv:te&&M(y.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Y||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!re.attributes.uv&&(lt||te),fog:!!ne,useFog:y.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:X.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:He&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&y.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const S=_[y.type];let P;if(S){const Q=xn[S];P=Xm.clone(Q.uniforms)}else P=y.uniforms;return P}function I(y,S){let P;for(let Q=0,X=u.length;Q<X;Q++){const ne=u[Q];if(ne.cacheKey===S){P=ne,++P.usedTimes;break}}return P===void 0&&(P=new x0(n,S,y,r),u.push(P)),P}function L(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:N}}function M0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,_,M,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:M,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,d,p,_,M,m){const f=o(h,d,p,_,M,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,M,m){const f=o(h,d,p,_,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||S0),i.length>1&&i.sort(d||_u),s.length>1&&s.sort(d||_u)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function E0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new vu,n.set(i,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function y0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function b0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T0=0;function A0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w0(n){const e=new y0,t=b0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ut,o=new ut;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,T=0,b=0,E=0,I=0,L=0,R=0;c.sort(A0);for(let y=0,S=c.length;y<S;y++){const P=c[y],Q=P.color,X=P.intensity,ne=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Q.r*X,h+=Q.g*X,d+=Q.b*X;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],X);R++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=Z,p++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(Q).multiplyScalar(X),Z.distance=ne,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[M]=Z;const J=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,J.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[M]=J.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=re,E++}M++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(Q).multiplyScalar(X),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const J=P.shadow,H=t.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=P.shadow.matrix,b++}i.point[_]=Z,_++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(X),Z.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==M||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==E||N.numSpotMaps!==I||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=M,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=E,N.numSpotMaps=I,N.numLightProbes=R,i.version=T0++)}function l(c,u){let h=0,d=0,p=0,_=0,M=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function zu(n){const e=new w0(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zu(n),e.set(s,[a])):r>=o.length?(a=new zu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function L0(n,e,t){let i=new Ll;const s=new qe,r=new qe,o=new st,a=new Jm({depthPacking:dm}),l=new Qm,c={},u=t.maxTextureSize,h={[ii]:Ht,[Ht]:ii,[Un]:Un},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:R0,fragmentShader:P0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fi;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Bt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wh;let f=this.type;this.render=function(L,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ei),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const X=f!==Pn&&this.type===Pn,ne=f===Pn&&this.type!==Pn;for(let re=0,Z=L.length;re<Z;re++){const J=L[re],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const he=H.getFrameExtents();if(s.multiply(he),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,H.mapSize.y=r.y)),H.map===null||X===!0||ne===!0){const ye=this.type!==Pn?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Di(s.x,s.y,ye),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ze=H.getViewportCount();for(let ye=0;ye<ze;ye++){const Re=H.getViewport(ye);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),Q.viewport(o),H.updateMatrices(J,ye),i=H.getFrustum(),E(R,N,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&T(H,N),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,P)};function T(L,R){const N=e.update(M);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,M,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(R,null,N,p,M,null)}function b(L,R,N,y){let S=null;const P=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)S=P;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Q=S.uuid,X=R.uuid;let ne=c[Q];ne===void 0&&(ne={},c[Q]=ne);let re=ne[X];re===void 0&&(re=S.clone(),ne[X]=re,R.addEventListener("dispose",I)),S=re}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Pn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Q=n.properties.get(S);Q.light=N}return S}function E(L,R,N,y,S){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Pn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const X=e.update(L),ne=L.material;if(Array.isArray(ne)){const re=X.groups;for(let Z=0,J=re.length;Z<J;Z++){const H=re[Z],he=ne[H.materialIndex];if(he&&he.visible){const ze=b(L,he,y,S);L.onBeforeShadow(n,L,R,N,X,ze,H),n.renderBufferDirect(N,null,X,ze,L,H),L.onAfterShadow(n,L,R,N,X,ze,H)}}}else if(ne.visible){const re=b(L,ne,y,S);L.onBeforeShadow(n,L,R,N,X,re,null),n.renderBufferDirect(N,null,X,re,L,null),L.onAfterShadow(n,L,R,N,X,re,null)}}const Q=L.children;for(let X=0,ne=Q.length;X<ne;X++)E(Q[X],R,N,y,S)}function I(L){L.target.removeEventListener("dispose",I);for(const N in c){const y=c[N],S=L.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const D0={[ma]:xa,[ga]:za,[_a]:Ma,[fs]:va,[xa]:ma,[za]:ga,[Ma]:_a,[va]:fs};function I0(n,e){function t(){let D=!1;const ge=new st;let j=null;const te=new st(0,0,0,0);return{setMask:function(Me){j!==Me&&!D&&(n.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){D=Me},setClear:function(Me,ve,He,ht,Et){Et===!0&&(Me*=ht,ve*=ht,He*=ht),ge.set(Me,ve,He,ht),te.equals(ge)===!1&&(n.clearColor(Me,ve,He,ht),te.copy(ge))},reset:function(){D=!1,j=null,te.set(-1,0,0,0)}}}function i(){let D=!1,ge=!1,j=null,te=null,Me=null;return{setReversed:function(ve){if(ge!==ve){const He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const ht=Me;Me=null,this.setClear(ht)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?pe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){j!==ve&&!D&&(n.depthMask(ve),j=ve)},setFunc:function(ve){if(ge&&(ve=D0[ve]),te!==ve){switch(ve){case ma:n.depthFunc(n.NEVER);break;case xa:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case _a:n.depthFunc(n.EQUAL);break;case va:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Ma:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ve}},setLocked:function(ve){D=ve},setClear:function(ve){Me!==ve&&(ge&&(ve=1-ve),n.clearDepth(ve),Me=ve)},reset:function(){D=!1,j=null,te=null,Me=null,ge=!1}}}function s(){let D=!1,ge=null,j=null,te=null,Me=null,ve=null,He=null,ht=null,Et=null;return{setTest:function(nt){D||(nt?pe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!D&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,nn,yn){(j!==nt||te!==nn||Me!==yn)&&(n.stencilFunc(nt,nn,yn),j=nt,te=nn,Me=yn)},setOp:function(nt,nn,yn){(ve!==nt||He!==nn||ht!==yn)&&(n.stencilOp(nt,nn,yn),ve=nt,He=nn,ht=yn)},setLocked:function(nt){D=nt},setClear:function(nt){Et!==nt&&(n.clearStencil(nt),Et=nt)},reset:function(){D=!1,ge=null,j=null,te=null,Me=null,ve=null,He=null,ht=null,Et=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,M=!1,m=null,f=null,T=null,b=null,E=null,I=null,L=null,R=new je(0,0,0),N=0,y=!1,S=null,P=null,Q=null,X=null,ne=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=J>=2);let he=null,ze={};const ye=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Ze=new st().fromArray(ye),ee=new st().fromArray(Re);function ce(D,ge,j,te){const Me=new Uint8Array(4),ve=n.createTexture();n.bindTexture(D,ve),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<j;He++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ge+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ve}const Ee={};Ee[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(fs),$(!1),Y(vc),pe(n.CULL_FACE),z(ei);function pe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function we(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function De(D,ge){return h[D]!==ge?(n.bindFramebuffer(D,ge),h[D]=ge,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(D,ge){let j=p,te=!1;if(D){j=d.get(ge),j===void 0&&(j=[],d.set(ge,j));const Me=D.textures;if(j.length!==Me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,He=Me.length;ve<He;ve++)j[ve]=n.COLOR_ATTACHMENT0+ve;j.length=Me.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function lt(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const A={[yi]:n.FUNC_ADD,[Bp]:n.FUNC_SUBTRACT,[Hp]:n.FUNC_REVERSE_SUBTRACT};A[Vp]=n.MIN,A[Gp]=n.MAX;const C={[kp]:n.ZERO,[Wp]:n.ONE,[Xp]:n.SRC_COLOR,[da]:n.SRC_ALPHA,[Zp]:n.SRC_ALPHA_SATURATE,[Kp]:n.DST_COLOR,[qp]:n.DST_ALPHA,[$p]:n.ONE_MINUS_SRC_COLOR,[pa]:n.ONE_MINUS_SRC_ALPHA,[jp]:n.ONE_MINUS_DST_COLOR,[Yp]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[em]:n.CONSTANT_ALPHA,[tm]:n.ONE_MINUS_CONSTANT_ALPHA};function z(D,ge,j,te,Me,ve,He,ht,Et,nt){if(D===ei){M===!0&&(we(n.BLEND),M=!1);return}if(M===!1&&(pe(n.BLEND),M=!0),D!==Op){if(D!==m||nt!==y){if((f!==yi||E!==yi)&&(n.blendEquation(n.FUNC_ADD),f=yi,E=yi),nt)switch(D){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,I=null,L=null,R.set(0,0,0),N=0,m=D,y=nt}return}Me=Me||ge,ve=ve||j,He=He||te,(ge!==f||Me!==E)&&(n.blendEquationSeparate(A[ge],A[Me]),f=ge,E=Me),(j!==T||te!==b||ve!==I||He!==L)&&(n.blendFuncSeparate(C[j],C[te],C[ve],C[He]),T=j,b=te,I=ve,L=He),(ht.equals(R)===!1||Et!==N)&&(n.blendColor(ht.r,ht.g,ht.b,Et),R.copy(ht),N=Et),m=D,y=!1}function ie(D,ge){D.side===Un?we(n.CULL_FACE):pe(n.CULL_FACE);let j=D.side===Ht;ge&&(j=!j),$(j),D.blending===ls&&D.transparent===!1?z(ei):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function Y(D){D!==Up?(pe(n.CULL_FACE),D!==P&&(D===vc?n.cullFace(n.BACK):D===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),P=D}function K(D){D!==Q&&(Z&&n.lineWidth(D),Q=D)}function se(D,ge,j){D?(pe(n.POLYGON_OFFSET_FILL),(X!==ge||ne!==j)&&(n.polygonOffset(ge,j),X=ge,ne=j)):we(n.POLYGON_OFFSET_FILL)}function q(D){D?pe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function g(D){D===void 0&&(D=n.TEXTURE0+re-1),he!==D&&(n.activeTexture(D),he=D)}function x(D,ge,j){j===void 0&&(he===null?j=n.TEXTURE0+re-1:j=he);let te=ze[j];te===void 0&&(te={type:void 0,texture:void 0},ze[j]=te),(te.type!==D||te.texture!==ge)&&(he!==j&&(n.activeTexture(j),he=j),n.bindTexture(D,ge||Ee[D]),te.type=D,te.texture=ge)}function w(){const D=ze[he];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){Ze.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function de(D){ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Ie(D,ge){let j=c.get(ge);j===void 0&&(j=new WeakMap,c.set(ge,j));let te=j.get(D);te===void 0&&(te=n.getUniformBlockIndex(ge,D.name),j.set(D,te))}function Oe(D,ge){const te=c.get(ge).get(D);l.get(ge)!==te&&(n.uniformBlockBinding(ge,te,D.__bindingPointIndex),l.set(ge,te))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,ze={},h={},d=new WeakMap,p=[],_=null,M=!1,m=null,f=null,T=null,b=null,E=null,I=null,L=null,R=new je(0,0,0),N=0,y=!1,S=null,P=null,Q=null,X=null,ne=null,Ze.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:we,bindFramebuffer:De,drawBuffers:Ne,useProgram:lt,setBlending:z,setMaterial:ie,setFlipSided:$,setCullFace:Y,setLineWidth:K,setPolygonOffset:se,setScissorTest:q,activeTexture:g,bindTexture:x,unbindTexture:w,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:xe,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:V,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:de,reset:rt}}function U0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(g,x){return p?new OffscreenCanvas(g,x):$s("canvas")}function M(g,x,w){let O=1;const G=q(g);if((G.width>w||G.height>w)&&(O=w/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const V=Math.floor(O*G.width),ue=Math.floor(O*G.height);h===void 0&&(h=_(V,ue));const oe=x?_(V,ue):h;return oe.width=V,oe.height=ue,oe.getContext("2d").drawImage(g,0,0,V,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+ue+")."),oe}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),g;return g}function m(g){return g.generateMipmaps}function f(g){n.generateMipmap(g)}function T(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(g,x,w,O,G=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let V=x;if(x===n.RED&&(w===n.FLOAT&&(V=n.R32F),w===n.HALF_FLOAT&&(V=n.R16F),w===n.UNSIGNED_BYTE&&(V=n.R8)),x===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.R8UI),w===n.UNSIGNED_SHORT&&(V=n.R16UI),w===n.UNSIGNED_INT&&(V=n.R32UI),w===n.BYTE&&(V=n.R8I),w===n.SHORT&&(V=n.R16I),w===n.INT&&(V=n.R32I)),x===n.RG&&(w===n.FLOAT&&(V=n.RG32F),w===n.HALF_FLOAT&&(V=n.RG16F),w===n.UNSIGNED_BYTE&&(V=n.RG8)),x===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RG8UI),w===n.UNSIGNED_SHORT&&(V=n.RG16UI),w===n.UNSIGNED_INT&&(V=n.RG32UI),w===n.BYTE&&(V=n.RG8I),w===n.SHORT&&(V=n.RG16I),w===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RGB8UI),w===n.UNSIGNED_SHORT&&(V=n.RGB16UI),w===n.UNSIGNED_INT&&(V=n.RGB32UI),w===n.BYTE&&(V=n.RGB8I),w===n.SHORT&&(V=n.RGB16I),w===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),w===n.UNSIGNED_INT&&(V=n.RGBA32UI),w===n.BYTE&&(V=n.RGBA8I),w===n.SHORT&&(V=n.RGBA16I),w===n.INT&&(V=n.RGBA32I)),x===n.RGB&&w===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),x===n.RGBA){const ue=G?$r:Ke.getTransfer(O);w===n.FLOAT&&(V=n.RGBA32F),w===n.HALF_FLOAT&&(V=n.RGBA16F),w===n.UNSIGNED_BYTE&&(V=ue===it?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(g,x){let w;return g?x===null||x===Li||x===ms?w=n.DEPTH24_STENCIL8:x===Nn?w=n.DEPTH32F_STENCIL8:x===Xs&&(w=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===ms?w=n.DEPTH_COMPONENT24:x===Nn?w=n.DEPTH_COMPONENT32F:x===Xs&&(w=n.DEPTH_COMPONENT16),w}function I(g,x){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==fn&&g.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?x.mipmaps.length:1}function L(g){const x=g.target;x.removeEventListener("dispose",L),N(x),x.isVideoTexture&&u.delete(x)}function R(g){const x=g.target;x.removeEventListener("dispose",R),S(x)}function N(g){const x=i.get(g);if(x.__webglInit===void 0)return;const w=g.source,O=d.get(w);if(O){const G=O[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&y(g),Object.keys(O).length===0&&d.delete(w)}i.remove(g)}function y(g){const x=i.get(g);n.deleteTexture(x.__webglTexture);const w=g.source,O=d.get(w);delete O[x.__cacheKey],o.memory.textures--}function S(g){const x=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let G=0;G<x.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(x.__webglFramebuffer[O][G]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const w=g.textures;for(let O=0,G=w.length;O<G;O++){const V=i.get(w[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(w[O])}i.remove(g)}let P=0;function Q(){P=0}function X(){const g=P;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),P+=1,g}function ne(g){const x=[];return x.push(g.wrapS),x.push(g.wrapT),x.push(g.wrapR||0),x.push(g.magFilter),x.push(g.minFilter),x.push(g.anisotropy),x.push(g.internalFormat),x.push(g.format),x.push(g.type),x.push(g.generateMipmaps),x.push(g.premultiplyAlpha),x.push(g.flipY),x.push(g.unpackAlignment),x.push(g.colorSpace),x.join()}function re(g,x){const w=i.get(g);if(g.isVideoTexture&&K(g),g.isRenderTargetTexture===!1&&g.version>0&&w.__version!==g.version){const O=g.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(w,g,x);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+x)}function Z(g,x){const w=i.get(g);if(g.version>0&&w.__version!==g.version){ee(w,g,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+x)}function J(g,x){const w=i.get(g);if(g.version>0&&w.__version!==g.version){ee(w,g,x);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+x)}function H(g,x){const w=i.get(g);if(g.version>0&&w.__version!==g.version){ce(w,g,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+x)}const he={[Ws]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},ze={[fn]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[or]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ye={[mm]:n.NEVER,[Mm]:n.ALWAYS,[xm]:n.LESS,[Vh]:n.LEQUAL,[gm]:n.EQUAL,[zm]:n.GEQUAL,[_m]:n.GREATER,[vm]:n.NOTEQUAL};function Re(g,x){if(x.type===Nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===Eo||x.magFilter===or||x.magFilter===Ai||x.minFilter===_n||x.minFilter===Eo||x.minFilter===or||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,he[x.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,ze[x.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,ze[x.minFilter]),x.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fn||x.minFilter!==or&&x.minFilter!==Ai||x.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(g,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(g,x){let w=!1;g.__webglInit===void 0&&(g.__webglInit=!0,x.addEventListener("dispose",L));const O=x.source;let G=d.get(O);G===void 0&&(G={},d.set(O,G));const V=ne(x);if(V!==g.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),G[V].usedTimes++;const ue=G[g.__cacheKey];ue!==void 0&&(G[g.__cacheKey].usedTimes--,ue.usedTimes===0&&y(x)),g.__cacheKey=V,g.__webglTexture=G[V].texture}return w}function ee(g,x,w){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);const G=Ze(g,x),V=x.source;t.bindTexture(O,g.__webglTexture,n.TEXTURE0+w);const ue=i.get(V);if(V.version!==ue.__version||G===!0){t.activeTexture(n.TEXTURE0+w);const oe=Ke.getPrimaries(Ke.workingColorSpace),fe=x.colorSpace===Jn?null:Ke.getPrimaries(x.colorSpace),Pe=x.colorSpace===Jn||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=M(x.image,!1,s.maxTextureSize);ae=se(x,ae);const xe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type);let Le=b(x.internalFormat,xe,Te,x.colorSpace,x.isVideoTexture);Re(O,x);let de;const Ie=x.mipmaps,Oe=x.isVideoTexture!==!0,rt=ue.__version===void 0||G===!0,D=V.dataReady,ge=I(x,ae);if(x.isDepthTexture)Le=E(x.format===xs,x.type),rt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,xe,Te,null));else if(x.isDataTexture)if(Ie.length>0){Oe&&rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,Ie[0].width,Ie[0].height);for(let j=0,te=Ie.length;j<te;j++)de=Ie[j],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,xe,Te,de.data):t.texImage2D(n.TEXTURE_2D,j,Le,de.width,de.height,0,xe,Te,de.data);x.generateMipmaps=!1}else Oe?(rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,ae.width,ae.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,Te,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,xe,Te,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ie[0].width,Ie[0].height,ae.depth);for(let j=0,te=Ie.length;j<te;j++)if(de=Ie[j],x.format!==cn)if(xe!==null)if(Oe){if(D)if(x.layerUpdates.size>0){const Me=jc(de.width,de.height,x.format,x.type);for(const ve of x.layerUpdates){const He=de.data.subarray(ve*Me/de.data.BYTES_PER_ELEMENT,(ve+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ve,de.width,de.height,1,xe,He)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ae.depth,xe,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Le,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,ae.depth,xe,Te,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Le,de.width,de.height,ae.depth,0,xe,Te,de.data)}else{Oe&&rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,Ie[0].width,Ie[0].height);for(let j=0,te=Ie.length;j<te;j++)de=Ie[j],x.format!==cn?xe!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de.width,de.height,xe,Te,de.data):t.texImage2D(n.TEXTURE_2D,j,Le,de.width,de.height,0,xe,Te,de.data)}else if(x.isDataArrayTexture)if(Oe){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,ae.width,ae.height,ae.depth),D)if(x.layerUpdates.size>0){const j=jc(ae.width,ae.height,x.format,x.type);for(const te of x.layerUpdates){const Me=ae.data.subarray(te*j/ae.data.BYTES_PER_ELEMENT,(te+1)*j/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,xe,Te,Me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,Te,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,xe,Te,ae.data);else if(x.isData3DTexture)Oe?(rt&&t.texStorage3D(n.TEXTURE_3D,ge,Le,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,Te,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,xe,Te,ae.data);else if(x.isFramebufferTexture){if(rt)if(Oe)t.texStorage2D(n.TEXTURE_2D,ge,Le,ae.width,ae.height);else{let j=ae.width,te=ae.height;for(let Me=0;Me<ge;Me++)t.texImage2D(n.TEXTURE_2D,Me,Le,j,te,0,xe,Te,null),j>>=1,te>>=1}}else if(Ie.length>0){if(Oe&&rt){const j=q(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ge,Le,j.width,j.height)}for(let j=0,te=Ie.length;j<te;j++)de=Ie[j],Oe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,xe,Te,de):t.texImage2D(n.TEXTURE_2D,j,Le,xe,Te,de);x.generateMipmaps=!1}else if(Oe){if(rt){const j=q(ae);t.texStorage2D(n.TEXTURE_2D,ge,Le,j.width,j.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Te,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,xe,Te,ae);m(x)&&f(O),ue.__version=V.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function ce(g,x,w){if(x.image.length!==6)return;const O=Ze(g,x),G=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+w);const V=i.get(G);if(G.version!==V.__version||O===!0){t.activeTexture(n.TEXTURE0+w);const ue=Ke.getPrimaries(Ke.workingColorSpace),oe=x.colorSpace===Jn?null:Ke.getPrimaries(x.colorSpace),fe=x.colorSpace===Jn||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Pe&&!ae?xe[te]=M(x.image[te],!0,s.maxCubemapSize):xe[te]=ae?x.image[te].image:x.image[te],xe[te]=se(x,xe[te]);const Te=xe[0],Le=r.convert(x.format,x.colorSpace),de=r.convert(x.type),Ie=b(x.internalFormat,Le,de,x.colorSpace),Oe=x.isVideoTexture!==!0,rt=V.__version===void 0||O===!0,D=G.dataReady;let ge=I(x,Te);Re(n.TEXTURE_CUBE_MAP,x);let j;if(Pe){Oe&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ie,Te.width,Te.height);for(let te=0;te<6;te++){j=xe[te].mipmaps;for(let Me=0;Me<j.length;Me++){const ve=j[Me];x.format!==cn?Le!==null?Oe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Le,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Le,de,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,Ie,ve.width,ve.height,0,Le,de,ve.data)}}}else{if(j=x.mipmaps,Oe&&rt){j.length>0&&ge++;const te=q(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Le,de,xe[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,xe[te].width,xe[te].height,0,Le,de,xe[te].data);for(let Me=0;Me<j.length;Me++){const He=j[Me].image[te].image;Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,He.width,He.height,Le,de,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,Ie,He.width,He.height,0,Le,de,He.data)}}else{Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,de,xe[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Le,de,xe[te]);for(let Me=0;Me<j.length;Me++){const ve=j[Me];Oe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Le,de,ve.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,Ie,Le,de,ve.image[te])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),V.__version=G.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function Ee(g,x,w,O,G,V){const ue=r.convert(w.format,w.colorSpace),oe=r.convert(w.type),fe=b(w.internalFormat,ue,oe,w.colorSpace),Pe=i.get(x),ae=i.get(w);if(ae.__renderTarget=x,!Pe.__hasExternalTextures){const xe=Math.max(1,x.width>>V),Te=Math.max(1,x.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,V,fe,xe,Te,x.depth,0,ue,oe,null):t.texImage2D(G,V,fe,xe,Te,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),Y(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,ae.__webglTexture,0,$(x)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,ae.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(g,x,w){if(n.bindRenderbuffer(n.RENDERBUFFER,g),x.depthBuffer){const O=x.depthTexture,G=O&&O.isDepthTexture?O.type:null,V=E(x.stencilBuffer,G),ue=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=$(x);Y(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,V,x.width,x.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,g)}else{const O=x.textures;for(let G=0;G<O.length;G++){const V=O[G],ue=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),fe=b(V.internalFormat,ue,oe,V.colorSpace),Pe=$(x);w&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,x.width,x.height):Y(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,fe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(g,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(x.depthTexture);O.__renderTarget=x,(!O.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const G=O.__webglTexture,V=$(x);if(x.depthTexture.format===cs)Y(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(x.depthTexture.format===xs)Y(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function De(g){const x=i.get(g),w=g.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==g.depthTexture){const O=g.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){const G=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),x.__depthDisposeCallback=G}x.__boundDepthTexture=O}if(g.depthTexture&&!x.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");we(x.__webglFramebuffer,g)}else if(w){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),pe(x.__webglDepthbuffer[O],g,!1);else{const G=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),pe(x.__webglDepthbuffer,g,!1);else{const O=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(g,x,w){const O=i.get(g);x!==void 0&&Ee(O.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&De(g)}function lt(g){const x=g.texture,w=i.get(g),O=i.get(x);g.addEventListener("dispose",R);const G=g.textures,V=g.isWebGLCubeRenderTarget===!0,ue=G.length>1;if(ue||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,o.memory.textures++),V){w.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){w.__webglFramebuffer[oe]=[];for(let fe=0;fe<x.mipmaps.length;fe++)w.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else w.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){w.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)w.__webglFramebuffer[oe]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,fe=G.length;oe<fe;oe++){const Pe=i.get(G[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&Y(g)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let oe=0;oe<G.length;oe++){const fe=G[oe];w.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[oe]);const Pe=r.convert(fe.format,fe.colorSpace),ae=r.convert(fe.type),xe=b(fe.internalFormat,Pe,ae,fe.colorSpace,g.isXRRenderTarget===!0),Te=$(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,xe,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,w.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(w.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Re(n.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)Ee(w.__webglFramebuffer[oe][fe],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Ee(w.__webglFramebuffer[oe],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,fe=G.length;oe<fe;oe++){const Pe=G[oe],ae=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Re(n.TEXTURE_2D,Pe),Ee(w.__webglFramebuffer,g,Pe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Pe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(oe=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,O.__webglTexture),Re(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)Ee(w.__webglFramebuffer[fe],g,x,n.COLOR_ATTACHMENT0,oe,fe);else Ee(w.__webglFramebuffer,g,x,n.COLOR_ATTACHMENT0,oe,0);m(x)&&f(oe),t.unbindTexture()}g.depthBuffer&&De(g)}function A(g){const x=g.textures;for(let w=0,O=x.length;w<O;w++){const G=x[w];if(m(G)){const V=T(g),ue=i.get(G).__webglTexture;t.bindTexture(V,ue),f(V),t.unbindTexture()}}}const C=[],z=[];function ie(g){if(g.samples>0){if(Y(g)===!1){const x=g.textures,w=g.width,O=g.height;let G=n.COLOR_BUFFER_BIT;const V=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(g),oe=x.length>1;if(oe)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=i.get(x[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,w,O,0,0,w,O,G,n.NEAREST),l===!0&&(C.length=0,z.length=0,C.push(n.COLOR_ATTACHMENT0+fe),g.depthBuffer&&g.resolveDepthBuffer===!1&&(C.push(V),z.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=i.get(x[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const x=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $(g){return Math.min(s.maxSamples,g.samples)}function Y(g){const x=i.get(g);return g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function K(g){const x=o.render.frame;u.get(g)!==x&&(u.set(g,x),g.update())}function se(g,x){const w=g.colorSpace,O=g.format,G=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||w!==gs&&w!==Jn&&(Ke.getTransfer(w)===it?(O!==cn||G!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),x}function q(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Y}function F0(n,e){function t(i,s=Jn){let r;const o=Ke.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rh)return n.BYTE;if(i===Ph)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===bl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===js)return n.HALF_FLOAT;if(i===Dh)return n.ALPHA;if(i===Ih)return n.RGB;if(i===cn)return n.RGBA;if(i===Uh)return n.LUMINANCE;if(i===Fh)return n.LUMINANCE_ALPHA;if(i===cs)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Nh)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===Oh)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Lr||i===Dr||i===Ir||i===Ur)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ba||i===Ta||i===Aa||i===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ca||i===Ra||i===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ca||i===Ra)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===La||i===Da||i===Ia||i===Ua||i===Fa||i===Na||i===Oa||i===Ba||i===Ha||i===Va||i===Ga||i===ka||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===La)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Da)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ua)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ba)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ha)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Va)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ga)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===$a||i===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fr)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===Ya||i===Ka||i===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const N0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
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

}`;class H0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:O0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const M=new H0,m=t.getContextAttributes();let f=null,T=null;const b=[],E=[],I=new qe;let L=null;const R=new Yt;R.viewport=new st;const N=new Yt;N.viewport=new st;const y=[R,N],S=new ax;let P=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=b[ee];return ce===void 0&&(ce=new ea,b[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=b[ee];return ce===void 0&&(ce=new ea,b[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=b[ee];return ce===void 0&&(ce=new ea,b[ee]=ce),ce.getHandSpace()};function X(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const Ee=b[ce];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",re);for(let ee=0;ee<b.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,b[ee].disconnect(ce))}P=null,Q=null,M.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,T=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Di(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Ee=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?xs:cs,Ee=m.stencil?ms:Li);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Di(d.textureWidth,d.textureHeight,{format:cn,type:Vn,depthTexture:new Qh(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function re(ee){for(let ce=0;ce<ee.removed.length;ce++){const Ee=ee.removed[ce],pe=E.indexOf(Ee);pe>=0&&(E[pe]=null,b[pe].disconnect(Ee))}for(let ce=0;ce<ee.added.length;ce++){const Ee=ee.added[ce];let pe=E.indexOf(Ee);if(pe===-1){for(let De=0;De<b.length;De++)if(De>=E.length){E.push(Ee),pe=De;break}else if(E[De]===null){E[De]=Ee,pe=De;break}if(pe===-1)break}const we=b[pe];we&&we.connect(Ee)}}const Z=new B,J=new B;function H(ee,ce,Ee){Z.setFromMatrixPosition(ce.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const pe=Z.distanceTo(J),we=ce.projectionMatrix.elements,De=Ee.projectionMatrix.elements,Ne=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),A=(we[9]+1)/we[5],C=(we[9]-1)/we[5],z=(we[8]-1)/we[0],ie=(De[8]+1)/De[0],$=Ne*z,Y=Ne*ie,K=pe/(-z+ie),se=K*-z;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(se),ee.translateZ(K),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const q=Ne+K,g=lt+K,x=$-se,w=Y+(pe-se),O=A*lt/g*q,G=C*lt/g*q;ee.projectionMatrix.makePerspective(x,w,O,G,q,g),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function he(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ce=ee.near,Ee=ee.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),S.near=N.near=R.near=ce,S.far=N.far=R.far=Ee,(P!==S.near||Q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,Q=S.far),R.layers.mask=ee.layers.mask|2,N.layers.mask=ee.layers.mask|4,S.layers.mask=R.layers.mask|N.layers.mask;const pe=ee.parent,we=S.cameras;he(S,pe);for(let De=0;De<we.length;De++)he(we[De],pe);we.length===2?H(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),ze(ee,S,pe)};function ze(ee,ce,Ee){Ee===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Za*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let ye=null;function Re(ee,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let De=0;De<Ee.length;De++){const Ne=Ee[De];let lt=null;if(p!==null)lt=p.getViewport(Ne);else{const C=h.getViewSubImage(d,Ne);lt=C.viewport,De===0&&(e.setRenderTargetTextures(T,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(T))}let A=y[De];A===void 0&&(A=new Yt,A.layers.enable(De),A.viewport=new st,y[De]=A),A.matrix.fromArray(Ne.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ne.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(lt.x,lt.y,lt.width,lt.height),De===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(A)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=h.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&M.init(e,De,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const pe=E[Ee],we=b[Ee];pe!==null&&we!==void 0&&we.update(pe,ce,c||o)}ye&&ye(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ze=new tf;Ze.setAnimationLoop(Re),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const zi=new En,G0=new ut;function k0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,jh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,E=T.envMapRotation;b&&(m.envMap.value=b,zi.copy(E),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(zi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const E=b.program;i.uniformBlockBinding(T,E)}function c(T,b){let E=s[T.id];E===void 0&&(_(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(T,I);const L=e.render.frame;r[T.id]!==L&&(d(T),r[T.id]=L)}function u(T){const b=h();T.__bindingPointIndex=b;const E=n.createBuffer(),I=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],E=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,R=E.length;L<R;L++){const N=Array.isArray(E[L])?E[L]:[E[L]];for(let y=0,S=N.length;y<S;y++){const P=N[y];if(p(P,L,y,I)===!0){const Q=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let ne=0;for(let re=0;re<X.length;re++){const Z=X[re],J=M(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Q+ne,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,ne),ne+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,b,E,I){const L=T.value,R=b+"_"+E;if(I[R]===void 0)return typeof L=="number"||typeof L=="boolean"?I[R]=L:I[R]=L.clone(),!0;{const N=I[R];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return I[R]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function _(T){const b=T.uniforms;let E=0;const I=16;for(let R=0,N=b.length;R<N;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,P=y.length;S<P;S++){const Q=y[S],X=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,re=X.length;ne<re;ne++){const Z=X[ne],J=M(Z),H=E%I,he=H%J.boundary,ze=H+he;E+=he,ze!==0&&I-ze<J.storage&&(E+=I-ze),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=J.storage}}}const L=E%I;return L>0&&(E+=I-L),T.__size=E,T.__cache={},this}function M(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class X0{constructor(e={}){const{canvas:t=Em(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=ti,this.toneMappingExposure=1;const E=this;let I=!1,L=0,R=0,N=null,y=-1,S=null;const P=new st,Q=new st;let X=null;const ne=new je(0);let re=0,Z=t.width,J=t.height,H=1,he=null,ze=null;const ye=new st(0,0,Z,J),Re=new st(0,0,Z,J);let Ze=!1;const ee=new Ll;let ce=!1,Ee=!1;const pe=new ut,we=new ut,De=new B,Ne=new st,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return N===null?H:1}let z=i;function ie(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const U="webgl2";if(z=ie(U,v),z===null)throw ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let $,Y,K,se,q,g,x,w,O,G,V,ue,oe,fe,Pe,ae,xe,Te,Le,de,Ie,Oe,rt,D;function ge(){$=new e1(z),$.init(),Oe=new F0(z,$),Y=new Y_(z,$,e,Oe),K=new I0(z,$),Y.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),se=new i1(z),q=new M0,g=new U0(z,$,K,q,Y,Oe,se),x=new j_(E),w=new Q_(E),O=new ux(z),rt=new $_(z,O),G=new t1(z,O,se,rt),V=new r1(z,G,O,se),Le=new s1(z,Y,g),ae=new K_(q),ue=new z0(E,x,w,$,Y,rt,ae),oe=new k0(E,q),fe=new E0,Pe=new C0($),Te=new X_(E,x,w,K,V,p,l),xe=new L0(E,V,Y),D=new W0(z,se,Y,K),de=new q_(z,$,se),Ie=new n1(z,$,se),se.programs=ue.programs,E.capabilities=Y,E.extensions=$,E.properties=q,E.renderLists=fe,E.shadowMap=xe,E.state=K,E.info=se}ge();const j=new V0(E,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const v=$.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(Z,J,!1))},this.getSize=function(v){return v.set(Z,J)},this.setSize=function(v,U,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,J=U,t.width=Math.floor(v*H),t.height=Math.floor(U*H),k===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(Z*H,J*H).floor()},this.setDrawingBufferSize=function(v,U,k){Z=v,J=U,H=k,t.width=Math.floor(v*k),t.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(ye)},this.setViewport=function(v,U,k,W){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,U,k,W),K.viewport(P.copy(ye).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Re)},this.setScissor=function(v,U,k,W){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,U,k,W),K.scissor(Q.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){K.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(v=!0,U=!0,k=!0){let W=0;if(v){let F=!1;if(N!==null){const le=N.texture.format;F=le===Rl||le===Cl||le===wl}if(F){const le=N.texture.type,_e=le===Vn||le===Li||le===Xs||le===ms||le===Tl||le===Al,Se=Te.getClearColor(),be=Te.getClearAlpha(),Ue=Se.r,Fe=Se.g,Ae=Se.b;_e?(_[0]=Ue,_[1]=Fe,_[2]=Ae,_[3]=be,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Ue,M[1]=Fe,M[2]=Ae,M[3]=be,z.clearBufferiv(z.COLOR,0,M))}else W|=z.COLOR_BUFFER_BIT}U&&(W|=z.DEPTH_BUFFER_BIT),k&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Te.dispose(),fe.dispose(),Pe.dispose(),q.dispose(),x.dispose(),w.dispose(),V.dispose(),rt.dispose(),D.dispose(),ue.dispose(),j.dispose(),j.removeEventListener("sessionstart",Fl),j.removeEventListener("sessionend",Nl),hi.stop()};function te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const v=se.autoReset,U=xe.enabled,k=xe.autoUpdate,W=xe.needsUpdate,F=xe.type;ge(),se.autoReset=v,xe.enabled=U,xe.autoUpdate=k,xe.needsUpdate=W,xe.type=F}function ve(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function He(v){const U=v.target;U.removeEventListener("dispose",He),ht(U)}function ht(v){Et(v),q.remove(v)}function Et(v){const U=q.get(v).programs;U!==void 0&&(U.forEach(function(k){ue.releaseProgram(k)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,W,F,le){U===null&&(U=lt);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Se=af(v,U,k,W,F);K.setMaterial(W,_e);let be=k.index,Ue=1;if(W.wireframe===!0){if(be=G.getWireframeAttribute(k),be===void 0)return;Ue=2}const Fe=k.drawRange,Ae=k.attributes.position;let $e=Fe.start*Ue,Je=(Fe.start+Fe.count)*Ue;le!==null&&($e=Math.max($e,le.start*Ue),Je=Math.min(Je,(le.start+le.count)*Ue)),be!==null?($e=Math.max($e,0),Je=Math.min(Je,be.count)):Ae!=null&&($e=Math.max($e,0),Je=Math.min(Je,Ae.count));const mt=Je-$e;if(mt<0||mt===1/0)return;rt.setup(F,W,Se,k,be);let ft,Ye=de;if(be!==null&&(ft=O.get(be),Ye=Ie,Ye.setIndex(ft)),F.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*C()),Ye.setMode(z.LINES)):Ye.setMode(z.TRIANGLES);else if(F.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),K.setLineWidth(Ce*C()),F.isLineSegments?Ye.setMode(z.LINES):F.isLineLoop?Ye.setMode(z.LINE_LOOP):Ye.setMode(z.LINE_STRIP)}else F.isPoints?Ye.setMode(z.POINTS):F.isSprite&&Ye.setMode(z.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ye.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Ye.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,Mt=F._multiDrawCounts,Qe=F._multiDrawCount,sn=be?O.get(be).bytesPerElement:1,Oi=q.get(W).currentProgram.getUniforms();for(let Gt=0;Gt<Qe;Gt++)Oi.setValue(z,"_gl_DrawID",Gt),Ye.render(Ce[Gt]/sn,Mt[Gt])}else if(F.isInstancedMesh)Ye.renderInstances($e,mt,F.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mt=Math.min(k.instanceCount,Ce);Ye.renderInstances($e,mt,Mt)}else Ye.render($e,mt)};function nt(v,U,k){v.transparent===!0&&v.side===Un&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,tr(v,U,k),v.side=ii,v.needsUpdate=!0,tr(v,U,k),v.side=Un):tr(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),f=Pe.get(k),f.init(U),b.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==k&&v.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Se=le[_e];nt(Se,k,F),W.add(Se)}else nt(le,k,F),W.add(le)}),b.pop(),f=null,W},this.compileAsync=function(v,U,k=null){const W=this.compile(v,U,k);return new Promise(F=>{function le(){if(W.forEach(function(_e){q.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(v);return}setTimeout(le,10)}$.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let nn=null;function yn(v){nn&&nn(v)}function Fl(){hi.stop()}function Nl(){hi.start()}const hi=new tf;hi.setAnimationLoop(yn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(v){nn=v,j.setAnimationLoop(v),v===null?hi.stop():hi.start()},j.addEventListener("sessionstart",Fl),j.addEventListener("sessionend",Nl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,U,N),f=Pe.get(v,b.length),f.init(U),b.push(f),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Ee),m=fe.get(v,T.length),m.init(),T.push(m),j.enabled===!0&&j.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&ro(le,U,-1/0,E.sortObjects)}ro(v,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(he,ze),A=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,A&&Te.addToRenderList(m,v),this.info.render.frame++,ce===!0&&ae.beginShadows();const k=f.state.shadowsArray;xe.render(k,v,U),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const le=U.cameras;if(F.length>0)for(let _e=0,Se=le.length;_e<Se;_e++){const be=le[_e];Bl(W,F,v,be)}A&&Te.render(v);for(let _e=0,Se=le.length;_e<Se;_e++){const be=le[_e];Ol(m,v,be,be.viewport)}}else F.length>0&&Bl(W,F,v,U),A&&Te.render(v),Ol(m,v,U);N!==null&&(g.updateMultisampleRenderTarget(N),g.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,U),rt.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],ce===!0&&ae.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ro(v,U,k,W){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ee.intersectsSprite(v)){W&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);const _e=V.update(v),Se=v.material;Se.visible&&m.push(v,_e,Se,k,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ee.intersectsObject(v))){const _e=V.update(v),Se=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(we)),Array.isArray(Se)){const be=_e.groups;for(let Ue=0,Fe=be.length;Ue<Fe;Ue++){const Ae=be[Ue],$e=Se[Ae.materialIndex];$e&&$e.visible&&m.push(v,_e,$e,k,Ne.z,Ae)}}else Se.visible&&m.push(v,_e,Se,k,Ne.z,null)}}const le=v.children;for(let _e=0,Se=le.length;_e<Se;_e++)ro(le[_e],U,k,W)}function Ol(v,U,k,W){const F=v.opaque,le=v.transmissive,_e=v.transparent;f.setupLightsView(k),ce===!0&&ae.setGlobalState(E.clippingPlanes,k),W&&K.viewport(P.copy(W)),F.length>0&&er(F,U,k),le.length>0&&er(le,U,k),_e.length>0&&er(_e,U,k),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Bl(v,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Di(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?js:Vn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const le=f.state.transmissionRenderTarget[W.id],_e=W.viewport||P;le.setSize(_e.z,_e.w);const Se=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(ne),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),A&&Te.render(k);const be=E.toneMapping;E.toneMapping=ti;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ce===!0&&ae.setGlobalState(E.clippingPlanes,W),er(v,k,W),g.updateMultisampleRenderTarget(le),g.updateRenderTargetMipmap(le),$.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ae=0,$e=U.length;Ae<$e;Ae++){const Je=U[Ae],mt=Je.object,ft=Je.geometry,Ye=Je.material,Ce=Je.group;if(Ye.side===Un&&mt.layers.test(W.layers)){const Mt=Ye.side;Ye.side=Ht,Ye.needsUpdate=!0,Hl(mt,k,W,ft,Ye,Ce),Ye.side=Mt,Ye.needsUpdate=!0,Fe=!0}}Fe===!0&&(g.updateMultisampleRenderTarget(le),g.updateRenderTargetMipmap(le))}E.setRenderTarget(Se),E.setClearColor(ne,re),Ue!==void 0&&(W.viewport=Ue),E.toneMapping=be}function er(v,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,le=v.length;F<le;F++){const _e=v[F],Se=_e.object,be=_e.geometry,Ue=W===null?_e.material:W,Fe=_e.group;Se.layers.test(k.layers)&&Hl(Se,U,k,be,Ue,Fe)}}function Hl(v,U,k,W,F,le){v.onBeforeRender(E,U,k,W,F,le),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(E,U,k,W,v,le),F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,E.renderBufferDirect(k,U,W,F,v,le),F.side=ii,F.needsUpdate=!0,E.renderBufferDirect(k,U,W,F,v,le),F.side=Un):E.renderBufferDirect(k,U,W,F,v,le),v.onAfterRender(E,U,k,W,F,le)}function tr(v,U,k){U.isScene!==!0&&(U=lt);const W=q.get(v),F=f.state.lights,le=f.state.shadowsArray,_e=F.state.version,Se=ue.getParameters(v,F.state,le,U,k),be=ue.getProgramCacheKey(Se);let Ue=W.programs;W.environment=v.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(v.isMeshStandardMaterial?w:x).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ue===void 0&&(v.addEventListener("dispose",He),Ue=new Map,W.programs=Ue);let Fe=Ue.get(be);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===_e)return Gl(v,Se),Fe}else Se.uniforms=ue.getUniforms(v),v.onBeforeCompile(Se,E),Fe=ue.acquireProgram(Se,be),Ue.set(be,Fe),W.uniforms=Se.uniforms;const Ae=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),Gl(v,Se),W.needsLights=cf(v),W.lightsStateVersion=_e,W.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMap.value=F.state.directionalShadowMap,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotShadowMap.value=F.state.spotShadowMap,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMap.value=F.state.pointShadowMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Vl(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Nr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Gl(v,U){const k=q.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function af(v,U,k,W,F){U.isScene!==!0&&(U=lt),g.resetTextureUnits();const le=U.fog,_e=W.isMeshStandardMaterial?U.environment:null,Se=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gs,be=(W.isMeshStandardMaterial?w:x).get(W.envMap||_e),Ue=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let mt=ti;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(mt=E.toneMapping);const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ye=ft!==void 0?ft.length:0,Ce=q.get(W),Mt=f.state.lights;if(ce===!0&&(Ee===!0||v!==S)){const Ct=v===S&&W.id===y;ae.setState(W,v,Ct)}let Qe=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Mt.state.version||Ce.outputColorSpace!==Se||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==be||W.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Fe||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==Je||Ce.toneMapping!==mt||Ce.morphTargetsCount!==Ye)&&(Qe=!0):(Qe=!0,Ce.__version=W.version);let sn=Ce.currentProgram;Qe===!0&&(sn=tr(W,U,F));let Oi=!1,Gt=!1,Ms=!1;const ct=sn.getUniforms(),Qt=Ce.uniforms;if(K.useProgram(sn.program)&&(Oi=!0,Gt=!0,Ms=!0),W.id!==y&&(y=W.id,Gt=!0),Oi||S!==v){K.buffers.depth.getReversed()?(pe.copy(v.projectionMatrix),bm(pe),Tm(pe),ct.setValue(z,"projectionMatrix",pe)):ct.setValue(z,"projectionMatrix",v.projectionMatrix),ct.setValue(z,"viewMatrix",v.matrixWorldInverse);const Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(z,De.setFromMatrixPosition(v.matrixWorld)),Y.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(z,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,Gt=!0,Ms=!0)}if(F.isSkinnedMesh){ct.setOptional(z,F,"bindMatrix"),ct.setOptional(z,F,"bindMatrixInverse");const Ct=F.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(z,"boneTexture",Ct.boneTexture,g))}F.isBatchedMesh&&(ct.setOptional(z,F,"batchingTexture"),ct.setValue(z,"batchingTexture",F._matricesTexture,g),ct.setOptional(z,F,"batchingIdTexture"),ct.setValue(z,"batchingIdTexture",F._indirectTexture,g),ct.setOptional(z,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(z,"batchingColorTexture",F._colorsTexture,g));const en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Le.update(F,k,sn),(Gt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,ct.setValue(z,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=be,Qt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Gt&&(ct.setValue(z,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&lf(Qt,Ms),le&&W.fog===!0&&oe.refreshFogUniforms(Qt,le),oe.refreshMaterialUniforms(Qt,W,H,J,f.state.transmissionRenderTarget[v.id]),Nr.upload(z,Vl(Ce),Qt,g)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nr.upload(z,Vl(Ce),Qt,g),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(z,"center",F.center),ct.setValue(z,"modelViewMatrix",F.modelViewMatrix),ct.setValue(z,"normalMatrix",F.normalMatrix),ct.setValue(z,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ct=W.uniformsGroups;for(let Ft=0,oo=Ct.length;Ft<oo;Ft++){const fi=Ct[Ft];D.update(fi,sn),D.bind(fi,sn)}}return sn}function lf(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function cf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,U,k){q.get(v.texture).__webglTexture=U,q.get(v.depthTexture).__webglTexture=k;const W=q.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){const k=q.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,k=0){N=v,L=U,R=k;let W=!0,F=null,le=!1,_e=!1;if(v){const be=q.get(v);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(be.__hasExternalTextures)g.rebindTextures(v,q.get(v.texture).__webglTexture,q.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&q.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const Ue=v.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(_e=!0);const Fe=q.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?F=Fe[U][k]:F=Fe[U],le=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?F=q.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[k]:F=Fe,P.copy(v.viewport),Q.copy(v.scissor),X=v.scissorTest}else P.copy(ye).multiplyScalar(H).floor(),Q.copy(Re).multiplyScalar(H).floor(),X=Ze;if(K.bindFramebuffer(z.FRAMEBUFFER,F)&&W&&K.drawBuffers(v,F),K.viewport(P),K.scissor(Q),K.setScissorTest(X),le){const be=q.get(v.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,k)}else if(_e){const be=q.get(v.texture),Ue=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,be.__webglTexture,k||0,Ue)}y=-1},this.readRenderTargetPixels=function(v,U,k,W,F,le,_e){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){K.bindFramebuffer(z.FRAMEBUFFER,Se);try{const be=v.texture,Ue=be.format,Fe=be.type;if(!Y.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-W&&k>=0&&k<=v.height-F&&z.readPixels(U,k,W,F,Oe.convert(Ue),Oe.convert(Fe),le)}finally{const be=N!==null?q.get(N).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,W,F,le,_e){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){const be=v.texture,Ue=be.format,Fe=be.type;if(!Y.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-W&&k>=0&&k<=v.height-F){K.bindFramebuffer(z.FRAMEBUFFER,Se);const Ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.bufferData(z.PIXEL_PACK_BUFFER,le.byteLength,z.STREAM_READ),z.readPixels(U,k,W,F,Oe.convert(Ue),Oe.convert(Fe),0);const $e=N!==null?q.get(N).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,$e);const Je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ym(z,Je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,le),z.deleteBuffer(Ae),z.deleteSync(Je),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,k=0){v.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-k),F=Math.floor(v.image.width*W),le=Math.floor(v.image.height*W),_e=U!==null?U.x:0,Se=U!==null?U.y:0;g.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,k,0,0,_e,Se,F,le),K.unbindTexture()};const uf=z.createFramebuffer(),hf=z.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,W=null,F=0,le=null){v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],U=arguments[2],le=arguments[3]||0,k=null),le===null&&(F!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let _e,Se,be,Ue,Fe,Ae,$e,Je,mt;const ft=v.isCompressedTexture?v.mipmaps[le]:v.image;if(k!==null)_e=k.max.x-k.min.x,Se=k.max.y-k.min.y,be=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Fe=k.min.y,Ae=k.isBox3?k.min.z:0;else{const en=Math.pow(2,-F);_e=Math.floor(ft.width*en),Se=Math.floor(ft.height*en),v.isDataArrayTexture?be=ft.depth:v.isData3DTexture?be=Math.floor(ft.depth*en):be=1,Ue=0,Fe=0,Ae=0}W!==null?($e=W.x,Je=W.y,mt=W.z):($e=0,Je=0,mt=0);const Ye=Oe.convert(U.format),Ce=Oe.convert(U.type);let Mt;U.isData3DTexture?(g.setTexture3D(U,0),Mt=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(g.setTexture2DArray(U,0),Mt=z.TEXTURE_2D_ARRAY):(g.setTexture2D(U,0),Mt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=z.getParameter(z.UNPACK_ROW_LENGTH),sn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Oi=z.getParameter(z.UNPACK_SKIP_PIXELS),Gt=z.getParameter(z.UNPACK_SKIP_ROWS),Ms=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ue),z.pixelStorei(z.UNPACK_SKIP_ROWS,Fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ae);const ct=v.isDataArrayTexture||v.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const en=q.get(v),Ct=q.get(U),Ft=q.get(en.__renderTarget),oo=q.get(Ct.__renderTarget);K.bindFramebuffer(z.READ_FRAMEBUFFER,Ft.__webglFramebuffer),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let fi=0;fi<be;fi++)ct&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(v).__webglTexture,F,Ae+fi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(U).__webglTexture,le,mt+fi)),z.blitFramebuffer(Ue,Fe,_e,Se,$e,Je,_e,Se,z.DEPTH_BUFFER_BIT,z.NEAREST);K.bindFramebuffer(z.READ_FRAMEBUFFER,null),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||q.has(v)){const en=q.get(v),Ct=q.get(U);K.bindFramebuffer(z.READ_FRAMEBUFFER,uf),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,hf);for(let Ft=0;Ft<be;Ft++)ct?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,F,Ae+Ft):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,F),Qt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.__webglTexture,le,mt+Ft):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ct.__webglTexture,le),F!==0?z.blitFramebuffer(Ue,Fe,_e,Se,$e,Je,_e,Se,z.COLOR_BUFFER_BIT,z.NEAREST):Qt?z.copyTexSubImage3D(Mt,le,$e,Je,mt+Ft,Ue,Fe,_e,Se):z.copyTexSubImage2D(Mt,le,$e,Je,Ue,Fe,_e,Se);K.bindFramebuffer(z.READ_FRAMEBUFFER,null),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Qt?v.isDataTexture||v.isData3DTexture?z.texSubImage3D(Mt,le,$e,Je,mt,_e,Se,be,Ye,Ce,ft.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Mt,le,$e,Je,mt,_e,Se,be,Ye,ft.data):z.texSubImage3D(Mt,le,$e,Je,mt,_e,Se,be,Ye,Ce,ft):v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,le,$e,Je,_e,Se,Ye,Ce,ft.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,le,$e,Je,ft.width,ft.height,Ye,ft.data):z.texSubImage2D(z.TEXTURE_2D,le,$e,Je,_e,Se,Ye,Ce,ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,sn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Oi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ms),le===0&&U.generateMipmaps&&z.generateMipmap(Mt),K.unbindTexture()},this.copyTextureToTexture3D=function(v,U,k=null,W=null,F=0){return v.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,v=arguments[2],U=arguments[3],F=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,k,W,F)},this.initRenderTarget=function(v){q.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),K.unbindTexture()},this.resetState=function(){L=0,R=0,N=null,K.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const $0="/lab-fps/assets/texturewall-CG54tPvi.png",q0="/lab-fps/assets/texturewallspecular-CynD6HD0.png",Y0="/lab-fps/assets/displacementwall-CdfoBOFY.jpg",K0="/lab-fps/assets/groundtexture-DOMAypnk.jpg";class j0{constructor(e){Ve(this,"mesh");Ve(this,"meshsPlacement");Ve(this,"boundingBoxes");Ve(this,"groundBoundingBox");Ve(this,"engine");Ve(this,"textureLoader");Ve(this,"texture");Ve(this,"normalTexture");Ve(this,"displacementTexture");Ve(this,"textureGround");Ve(this,"loadingManager");this.loadingManager=new ef,this.textureLoader=new nx(this.loadingManager),this.texture=this.textureLoader.load($0),this.normalTexture=this.textureLoader.load(q0),this.displacementTexture=this.textureLoader.load(Y0),this.textureGround=this.textureLoader.load(K0),this.textureGround.wrapT=Ws,this.textureGround.wrapS=Ws,this.textureGround.repeat=new qe(35,35),this.texture.colorSpace=qt,this.mesh=new Bt,this.meshsPlacement=[],this.boundingBoxes=[],this.engine=e,this.setEnvironment()}tick(){}setEnvironment(){this.createGround(),this.createLevelPlacement(),this.createLevel()}createBlock(e,t){const i=new ri(1,4,1,60,60),s=new Ja({map:this.texture,normalMap:this.normalTexture,specular:929577,shininess:20,normalScale:new qe(.66,.66),displacementMap:this.displacementTexture,displacementScale:.035}),r=new Bt(i,s);r.position.set(e,0,t),r.userData.typeOfBlock="obstacle";const o=new si().setFromObject(r);this.boundingBoxes.push(o),this.mesh.add(r)}createGround(){const e=new ri(24,.5,24),t=new Ja({color:7829367,specular:65484,map:this.textureGround}),i=new Bt(e,t);this.groundBoundingBox=new si().setFromObject(i),i.userData.typeOfBlock="ground",i.position.y=-.75,this.mesh.add(i)}createLevelPlacement(){Sl[this.engine.layer].level.forEach(e=>{const t={x:e.x,z:e.z};this.meshsPlacement.push(t)})}createLevel(){this.meshsPlacement.forEach(e=>{this.createBlock(e.x-11.5,e.z-11.5)})}}class Z0{constructor(e){Ve(this,"mesh");Ve(this,"vecteur_mouvement");Ve(this,"speed");Ve(this,"engine");Ve(this,"boundingBox");Ve(this,"light");Ve(this,"secondLight");Ve(this,"collideGround");Ve(this,"canMove");Ve(this,"accelerate");Ve(this,"gun");this.collideGround=!0,this.gun=this.canMove=!1,this.speed=1.5,this.mesh=new Bt,this.engine=e,this.createCharacter(),this.getEventMove(),this.vecteur_mouvement={x:0,y:0,z:0},this.accelerate=1,this.boundingBox=new si,this.light=new Yc(16736604,1,7),this.secondLight=new Yc(16777215,2,20),this.light.position.y=.8,this.secondLight.position.y=1.5,this.mesh.add(this.light),this.mesh.add(this.secondLight)}tick(){this.collideGround?(this.updateCameraPosition(),this.moveLight(),this.updateBoundingBox(),this.checkGroundCollision(),this.canMove&&this.moveCharacter()):this.finishLevel()}createCharacter(){const{x:e,z:t}=Sl[this.engine.layer].characterPlacement,i=new ri(.2,.2,.2),s=new Ja({visible:!1}),r=new Bt(i,s);r.userData.typeOfBlock="character",this.mesh.add(r),this.mesh.position.set(e-11.5,0,t-11.5)}rotateCharacter(e){this.mesh.rotation.y-=e}getEventMove(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t=="z"&&(this.vecteur_mouvement.z=1),t=="s"&&(this.vecteur_mouvement.z=-1),t=="d"&&(this.vecteur_mouvement.x=1),t=="q"&&(this.vecteur_mouvement.x=-1),t=="shift"&&(this.accelerate=1.5,this.engine.fov.isChanging=!0,this.engine.fov.isAccelerate=!0,this.engine.fov.isDecelerate=!1)}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t==="z"&&(this.vecteur_mouvement.z=0),t==="q"&&(this.vecteur_mouvement.x=0),t==="s"&&(this.vecteur_mouvement.z=0),t==="d"&&(this.vecteur_mouvement.x=0),t=="shift"&&(this.accelerate=1,this.engine.fov.isChanging=!0,this.engine.fov.isAccelerate=!1,this.engine.fov.isDecelerate=!0)})}moveLight(){this.light.position.y=Math.cos(this.engine.elapsedTime*2)/3+.5}moveCharacter(){const e=this.mesh.position.clone();let t=this.mesh.position.clone();const i=new ut().extractRotation(this.engine.camera.matrix),s=new B(0,0,-1).applyMatrix4(i),r=new B(1,0,0).applyMatrix4(i);if(s.normalize(),r.normalize(),this.vecteur_mouvement.z!==0){const o=s.multiplyScalar(this.vecteur_mouvement.z*this.speed*this.accelerate*this.engine.delta);e.add(o)}if(this.vecteur_mouvement.x!==0){const o=r.multiplyScalar(this.vecteur_mouvement.x*this.speed*this.accelerate*this.engine.delta);e.add(o)}this.checkObstacleCollision(e)?(this.vecteur_mouvement.z!==0&&this.correctPosition(e,"z"),this.vecteur_mouvement.x!==0&&this.correctPosition(e,"x")):t.copy(e),t.y=0,this.mesh.position.copy(t)}checkObstacleCollision(e){const t=this.boundingBox.clone();t.translate(e.clone().sub(this.mesh.position));for(const i of this.engine.environment.boundingBoxes)if(t.intersectsBox(i))return!0;return!1}checkGroundCollision(){this.boundingBox.intersectsBox(this.engine.environment.groundBoundingBox)?this.collideGround=!0:this.collideGround=!1}correctPosition(e,t){const i=this.boundingBox.clone();i.translate(e.clone().sub(this.mesh.position));for(const s of this.engine.environment.boundingBoxes)i.intersectsBox(s)&&(t==="z"&&(this.vecteur_mouvement.z>0?e.z=Math.min(e.z,s.min.z-this.boundingBox.max.z):this.vecteur_mouvement.z<0&&(e.z=Math.max(e.z,s.max.z-this.boundingBox.min.z))),t==="x"&&(this.vecteur_mouvement.x>0?e.x=Math.min(e.x,s.min.x-this.boundingBox.max.x):this.vecteur_mouvement.x<0&&(e.x=Math.max(e.x,s.max.x-this.boundingBox.min.x))));t==="z"?this.mesh.position.z=e.z:t==="x"&&(this.mesh.position.x=e.x)}updateCameraPosition(){this.engine.camera.position.x=this.mesh.position.x,this.engine.camera.position.y=this.mesh.position.y+.2,this.engine.camera.position.z=this.mesh.position.z+.07}updateBoundingBox(){this.boundingBox.setFromObject(this.mesh),this.boundingBox.expandByScalar(-.01)}finishLevel(){const e=new CustomEvent("finishLevel",{detail:"finishLevel"});window.dispatchEvent(e)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Mn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mn.nextNameID=Mn.nextNameID||0,this.$name.id=`lil-gui-name-${++Mn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class J0 extends Mn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function el(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Q0={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:el,toHexString:el},qs={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},ev={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=qs.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return qs.toHexString(s)}},tv={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=qs.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return qs.toHexString(s)}},nv=[Q0,qs,ev,tv];function iv(n){return nv.find(e=>e.match(n))}class sv extends Mn{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=iv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=el(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ta extends Mn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class rv extends Mn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},i=T=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+T),this.$input.value=this.getValue())},s=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T)*-1))},r=T=>{this._inputFocused&&(T.preventDefault(),i(this._step*this._normalizeMouseWheel(T)))};let o=!1,a,l,c,u,h;const d=5,p=T=>{a=T.clientX,l=c=T.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",M)},_=T=>{if(o){const b=T.clientX-a,E=T.clientY-l;Math.abs(E)>d?(T.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>d&&M()}if(!o){const b=T.clientY-c;h-=b*this._step*this._arrowKeyMultiplier(T),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=T.clientY},M=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",M)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,T,b,E,I)=>(f-T)/(b-T)*(I-E)+E,t=f=>{const T=this.$slider.getBoundingClientRect();let b=e(f,T.left,T.right,this._min,this._max);this._snapClampSetValue(b)},i=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(o){const T=f.touches[0].clientX-a,b=f.touches[0].clientY-l;Math.abs(T)>Math.abs(b)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let M;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const b=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ov extends Mn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class av extends Mn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var lv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function cv(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Mu=!1;class Ul{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Mu&&a&&(cv(lv),Mu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new ov(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new rv(this,e,t,i,s,r);case"boolean":return new J0(this,e,t);case"string":return new av(this,e,t);case"function":return new ta(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new sv(this,e,t,i)}addFolder(e){const t=new Ul({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ta||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ta)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const{chosenLevel:uv,manageEndgame:hv,redoGame:fv,beginGame:dv,restartTime:pv,manageWin:Su}=ui();class mv{constructor(e){Ve(this,"scene");Ve(this,"renderer");Ve(this,"camera");Ve(this,"meshs");Ve(this,"ref");Ve(this,"pixelRatio");Ve(this,"animationFrameId",null);Ve(this,"mousePos");Ve(this,"mouseDirection");Ve(this,"character",null);Ve(this,"environment",null);Ve(this,"layer");Ve(this,"clock");Ve(this,"delta");Ve(this,"elapsedTime");Ve(this,"sensitivity");Ve(this,"fov");Ve(this,"handleMouseMove",e=>{this.moveVision(e)});const{width:t,height:i}=e.getBoundingClientRect();this.meshs=[],this.mousePos={x:0,y:0},this.ref=e,this.scene=new kc,this.fov={base:90,current:90,accel:110,isChanging:!1,isAccelerate:!1,isDecelerate:!1},this.camera=new Yt(this.fov.base,t/i,.1,10),this.camera.position.set(0,0,0),this.camera.lookAt(0,0,0),this.layer=uv.value,this.clock=new lx,this.elapsedTime=0,this.delta=0,this.sensitivity=.002,this.mouseDirection=new B(0,0,1),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer=new X0({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio);const s=window.devicePixelRatio>1;this.renderer.setSize(t,i,s),e.appendChild(this.renderer.domElement),this.setup()}tick(){this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(()=>{this.tick(),this.delta=this.clock.getDelta(),this.elapsedTime=this.clock.getElapsedTime(),this.checkFov(),this.tickChildren()})}setup(){this.environment=new j0(this),this.character=new Z0(this),this.meshs.push(this.environment,this.character),this.addChildren(),this.setupGUI(),this.setView(),this.registerEventListeners(),this.tick(),setTimeout(()=>{this.character.canMove=!0},100)}changeFov(e,t){this.fov.current=(1-.1)*e+.1*t,this.camera.fov=this.fov.current,this.camera.updateProjectionMatrix()}setupGUI(){var r,o,a;const e=new Ul({title:"Acker'tools",closeFolders:!0}),t=e.addFolder("Environment"),i=e.addFolder("Camera"),s=e.addFolder("Light");e.hide(),i.add(this.camera,"fov",20,140,.5).name("FOV").onChange(()=>{this.camera.updateProjectionMatrix()}),s.add((r=this.character)==null?void 0:r.light,"distance",.1,7,.05).name("distance light"),s.addColor((o=this.character)==null?void 0:o.light,"color").name("color light").onChange(l=>{console.log(l.getHexString())}),t.add((a=this.environment)==null?void 0:a.mesh.children[0].material,"wireframe").name("ground wireframe"),window.addEventListener("keydown",l=>{l.key=="t"&&e.show(e._hidden)})}checkFov(){this.fov.isChanging&&(this.fov.isAccelerate&&this.changeFov(this.fov.current,this.fov.accel),this.fov.isDecelerate&&this.changeFov(this.fov.current,this.fov.base))}restart(e){this.layer=e,this.scene=new kc,pv(),dv(),this.setup()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.environment=null,this.character=null,this.meshs=[]}addChildren(){for(let e=0;e<this.meshs.length;e++)this.scene.add(this.meshs[e].mesh)}tickChildren(){for(let e=0;e<this.meshs.length;e++)this.meshs[e].tick(this)}setView(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio)}moveVision(e){const t=e.movementX,i=e.movementY;this.camera.rotation.reorder("YXZ"),this.camera.rotation.y-=t*this.sensitivity,this.camera.rotation.x-=i*(this.sensitivity/2),this.camera.rotation.x=Math.min(Math.max(this.camera.rotation.x,-Math.PI*.5),Math.PI*.5)}showEndGame(e){Su(e==="win"),fv(),hv()}enablePointerLock(){document.body.requestPointerLock(),document.addEventListener("mousemove",this.handleMouseMove)}disablePointerLock(){document.exitPointerLock(),document.removeEventListener("mousemove",this.handleMouseMove)}registerEventListeners(){window.onresize=()=>{this.setView()},window.addEventListener("mousemove",e=>{this.mousePos={x:e.clientX,y:e.clientY}}),window.addEventListener("finishLevel",()=>{this.stop(),this.disablePointerLock(),this.showEndGame("win")}),window.addEventListener("loseGame",()=>{this.stop(),this.disablePointerLock(),this.showEndGame("lose")})}}const xv={class:"Panel__menu"},gv={class:"Panel__menu__items__subjects"},_v={class:"Panel__menu__items__content"},vv={key:0,class:"Content--mission"},zv={key:1,class:"Content--controls"},Mv=Ui({__name:"Panel",setup(n){const{panelIsVisible:e,displayMenu:t,displayBeginMenu:i}=ui(),s=Jt(!0),r=Jt(!1),o=()=>{s.value=!0,r.value=!1},a=()=>{s.value=!1,r.value=!0};return(l,c)=>(St(),Kt("section",{class:Hn(["Panel",Ot(e)?"Panel--activate enter":"leave"])},[dt("div",xv,[dt("div",{class:Hn(["Panel__menu__items",Ot(e)?"":"contentLeave"])},[dt("div",gv,[dt("button",{onClick:c[0]||(c[0]=u=>o())},c[4]||(c[4]=[dt("h5",null,"Mission",-1)])),dt("button",{onClick:c[1]||(c[1]=u=>a())},c[5]||(c[5]=[dt("h5",null,"Controls",-1)]))]),dt("div",_v,[s.value?(St(),Kt("div",vv,c[6]||(c[6]=[Wr('<p style="border-left:2px solid white;padding-left:15px;" data-v-8aefbe6a> Copilote.. Co... Copilote ? <br data-v-8aefbe6a> Copilote ? <br data-v-8aefbe6a> Vous m&#39;entendez ? <br data-v-8aefbe6a> On s&#39;est écrasés ici dans ce.. ce monde étrange <br data-v-8aefbe6a> Nous devons sortir de là.. et.. au plus vite ! </p><p class="Content--mission__instructions" data-v-8aefbe6a> Vous avez 2 minutes pour sortir de cet endroit. Au clic sur le bouton <strong data-v-8aefbe6a>&quot;Jouer&quot;</strong>, le chronomètre se déclenchera. <br data-v-8aefbe6a> N&#39;oubliez pas de vérifier dans <strong data-v-8aefbe6a>&quot;Controls&quot;</strong> les controles du jeu ! <br data-v-8aefbe6a> Bonne chance ! </p>',2)]))):Fn("",!0),r.value?(St(),Kt("div",zv,c[7]||(c[7]=[Wr('<div class="Control--menu" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key Key--large" data-v-8aefbe6a>Shift</p><p data-v-8aefbe6a>Courir</p></div></div><div class="Content--controls__layout" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>Z</p><p data-v-8aefbe6a>Avancer</p></div><div class="Control--group" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>Q</p><p data-v-8aefbe6a>Gauche</p></div><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>S</p><p data-v-8aefbe6a>Reculer</p></div><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>D</p><p data-v-8aefbe6a>Droite</p></div></div></div><div class="Control--menu" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>F</p><p data-v-8aefbe6a>Pause</p></div></div>',3)]))):Fn("",!0)])],2),dt("div",null,[Ot(i)?(St(),Kt("button",{key:0,onClick:c[2]||(c[2]=u=>l.$emit("closePanelMenu")),class:"PlayButton"}," Jouer ")):Fn("",!0),Ot(t)?(St(),Kt("button",{key:1,onClick:c[3]||(c[3]=u=>l.$emit("closePanelRedoMenu")),class:"PlayButton"}," Recommencer ")):Fn("",!0)])])],2))}}),Ni=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Sv=Ni(Mv,[["__scopeId","data-v-8aefbe6a"]]),Ev={class:"HUD__timer"},yv=Ui({__name:"HUD",setup(n){const{panelIsVisible:e,stopEvent:t,timeRemaining:i,openPanel:s,redoGame:r,restartTime:o}=ui(),a=Th(()=>{const l=Math.floor(i.value/60),c=i.value%60;return`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`});return _l(()=>{setInterval(()=>{i.value>0?e.value||i.value--:(window.dispatchEvent(t),r(),s(),o())},1e3)}),(l,c)=>(St(),Kt("section",{class:Hn(["HUD",Ot(e)?"leave":"HUD--activate enter"])},[c[0]||(c[0]=Wr('<div class="HUD__boussole" data-v-d893db98><p class="HUD__boussole--North" data-v-d893db98>N</p><p class="HUD__boussole--North--point" data-v-d893db98>^</p><p class="HUD__boussole--South" data-v-d893db98>S</p><p class="HUD__boussole--West" data-v-d893db98>O</p><p class="HUD__boussole--East" data-v-d893db98>E</p></div>',1)),dt("div",Ev,ol(a.value),1),c[1]||(c[1]=dt("div",{class:"HUD__pointer"},null,-1))],2))}}),bv=Ni(yv,[["__scopeId","data-v-d893db98"]]),Tv="/lab-fps/fpsgunr.png",Av=Ui({__name:"Gun",setup(n){const{panelIsVisible:e}=ui();return(t,i)=>(St(),Kt("section",{class:Hn(["Gun",Ot(e)?"leave":"Gun--activate enter"])},i[0]||(i[0]=[dt("img",{src:Tv},null,-1)]),2))}}),wv=Ni(Av,[["__scopeId","data-v-85ffe662"]]),Cv={class:"Endgame__menu"},Rv=Ui({__name:"Endgame",setup(n){const{endgameIsVisible:e,closeEndgame:t,win:i}=ui();return(s,r)=>(St(),Kt("section",{class:Hn(["Endgame",Ot(e)?"Endgame--activate enter":"leave"])},[dt("div",Cv,[dt("div",{class:Hn(["Endgame__menu__items",Ot(e)?"":"contentLeave"])},[dt("h2",null,ol(Ot(i)?"Félicitations ! Vous vous en êtes bien sorti copilote !":"Oh non.. noooon.. copilote.. je suis arrivé trop tard.. "),1),dt("button",{onClick:r[0]||(r[0]=o=>Ot(t)())},"Continuer")],2)])],2))}}),Pv=Ni(Rv,[["__scopeId","data-v-04ea5bd5"]]),Lv={class:"Home"},Dv=Ui({__name:"Game",setup(n){const{closePanel:e,openPanel:t,beginGame:i,choseLevel:s,endgameIsVisible:r}=ui();let o;const a=Jt(),l=()=>{e(),i(),o.enablePointerLock()},c=()=>{e(),i(),o.restart(s()),o.enablePointerLock()};return _l(()=>{o=new mv(a.value),window.addEventListener("keydown",u=>{u.key.toLowerCase()=="f"&&(t(),o.disablePointerLock())})}),(u,h)=>(St(),Kt("section",Lv,[dt("div",{ref_key:"scene",ref:a,class:"Scene"},null,512),Zt(Sv,{onClosePanelMenu:h[0]||(h[0]=d=>l()),onClosePanelRedoMenu:h[1]||(h[1]=d=>c())}),Ot(r)?(St(),kr(Pv,{key:0})):Fn("",!0),Zt(bv),Zt(wv),h[2]||(h[2]=dt("div",{class:"IntroGame"},null,-1))]))}}),Iv=Ni(Dv,[["__scopeId","data-v-d3884fc4"]]),Uv={class:"Intro"},Fv={key:1},Nv=Ui({__name:"Intro",setup(n){const{manageIntro:e}=ui(),t=Jt(!1),i=()=>{t.value=!0,console.log(t.value),setTimeout(()=>{e()},100)};return(s,r)=>(St(),Kt("section",Uv,[r[2]||(r[2]=Wr('<div class="Intro__boussole Intro__boussole--big" data-v-cf2b424c><p class="Intro__boussole--North" data-v-cf2b424c>N</p><p class="Intro__boussole--North--point" data-v-cf2b424c>^</p><p class="Intro__boussole--South" data-v-cf2b424c>S</p><p class="Intro__boussole--West" data-v-cf2b424c>O</p><p class="Intro__boussole--East" data-v-cf2b424c>E</p><div class="Intro__boussole Intro__boussole--small" data-v-cf2b424c><p class="Intro__boussole--North" data-v-cf2b424c>N</p><p class="Intro__boussole--North--point" data-v-cf2b424c>^</p><p class="Intro__boussole--South" data-v-cf2b424c>S</p><p class="Intro__boussole--West" data-v-cf2b424c>O</p><p class="Intro__boussole--East" data-v-cf2b424c>E</p></div></div>',1)),dt("div",null,[r[1]||(r[1]=dt("h1",null,"DOOMO",-1)),t.value?Fn("",!0):(St(),Kt("button",{key:0,onClick:r[0]||(r[0]=o=>i())},"Commencer")),t.value?(St(),Kt("h2",Fv,"Chargement ...")):Fn("",!0)])]))}}),Ov=Ni(Nv,[["__scopeId","data-v-cf2b424c"]]),Bv={class:"Home"},Hv=Ui({__name:"App",setup(n){const{displayIntro:e}=ui();return(t,i)=>(St(),Kt("div",Bv,[Ot(e)?Fn("",!0):(St(),kr(Iv,{key:0})),Ot(e)?(St(),kr(Ov,{key:1})):Fn("",!0)]))}}),Vv=Ni(Hv,[["__scopeId","data-v-67266ce0"]]);Pp(Vv).mount("#app");
